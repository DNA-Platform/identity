// Compiler resource for Environmentalism chapter 04: On Skills
// Reads every skillset book - the identity's Our Skillset, and each project's branch-local
// skillset (`the-skillset` inside any `.lib` under library/ or src/) - and generates
// .claude/skills/{name}/SKILL.md files per the On Skills specification.
// Usage: npx tsx ..environmentalism/04-on-skills--compiler.ts <library-path> [--write]
// Without --write, previews what would change. With --write, writes the files.

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { execSync } from 'child_process';
import { resolve, join, relative } from 'path';
import { rewriteLinks } from './07-on-compiled-links--rewriter';

const libraryPath = process.argv[2];
const doWrite = process.argv.includes('--write');

if (!libraryPath) {
  console.error('Usage: npx tsx 04-on-skills--compiler.ts <library-path> [--write]');
  process.exit(1);
}

const root = resolve(libraryPath);                 // .claude/library
const skillsDir = resolve(root, '..', 'skills');   // .claude/skills
const projectRoot = resolve(root, '..', '..');     // the project the identity sits in

// --- Utilities ---

function parseFrontmatter(content: string): Record<string, string> {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const fields: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w[\w-]*):\s*(.*)/);
    if (m) fields[m[1]] = m[2].trim();
  }
  return fields;
}

function bodyAfterFrontmatter(content: string): string {
  const match = content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n([\s\S]*)/);
  return match ? match[1].trim() : content.trim();
}

function normalizeLineEndings(content: string): string {
  return content.replace(/\r\n/g, '\n');
}

function posix(p: string): string {
  return p.replace(/\\/g, '/');
}

// --- The books: the identity's skillset, then every branch-local one ---
//
// A BRANCH-LOCAL SKILLSET holds the skills that belong to one project - its machines, its lab -
// and lives in that project's branch library, which is mirrored into identity under the project
// alone and never merged into the organisation. It is a book named `the-skillset` inside any
// `.lib` under library/ or src/: the same discovery, and the same prunes, as the commit tool's
// `.lib` search, so the two cannot disagree about where a branch is. Doug, 2026-10-05: *"Maybe
// even some sort of branch local skillset? ... I don't want them overwritten."*

type Book = { dir: string; label: string };

const books: Book[] = [{ dir: join(root, 'our-skillset'), label: '.claude/library/our-skillset' }];

const PRUNE = new Set(['data', 'artifacts', 'node_modules', '.venv', '__pycache__', '.git']);

function branchSkillsets(start: string): string[] {
  const found: string[] = [];
  if (!existsSync(start)) return found;
  const walk = (dir: string) => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (!entry.isDirectory() || PRUNE.has(entry.name)) continue;
      const full = join(dir, entry.name);
      if (entry.name === '.lib') {
        const book = join(full, 'the-skillset');
        if (existsSync(join(book, '.cover.md'))) found.push(book);
        continue;                                  // a .lib is a leaf of the search
      }
      walk(full);
    }
  };
  walk(start);
  return found.sort();
}

for (const top of ['library', 'src']) {
  for (const dir of branchSkillsets(join(projectRoot, top))) {
    books.push({ dir, label: posix(relative(projectRoot, dir)) });
  }
}

// --- Discover every skill, in every book, from each cover's chapter list ---

// Lines like "1. [sprint](01-sprint.md) — description". Skill names and chapter files may contain
// hyphens (e.g. think-async), so the name and filename groups allow [\w-], not just \w.
const chapterPattern = /^\d+\.\s+\[([\w-]+)\]\((\d+-[\w-]+\.md)\)\s+—\s+(.+)$/gm;

type Skill = { name: string; chapterFile: string; coverDescription: string; book: Book };
const skills: Skill[] = [];

for (const book of books) {
  const coverPath = join(book.dir, '.cover.md');
  if (!existsSync(coverPath)) {
    console.error(`Skillset cover not found at ${coverPath}`);
    process.exit(1);
  }
  const coverContent = normalizeLineEndings(readFileSync(coverPath, 'utf-8'));
  let match: RegExpExecArray | null;
  let count = 0;
  chapterPattern.lastIndex = 0;
  while ((match = chapterPattern.exec(coverContent)) !== null) {
    skills.push({ name: match[1], chapterFile: match[2], coverDescription: match[3].trim(), book });
    count++;
  }
  console.log(`${book.label}: ${count} skill(s)`);
}

if (skills.length === 0) {
  console.error('No skills found in any cover. Check the chapter list format.');
  process.exit(1);
}

// ONE NAME, ONE SOURCE. A name defined in two books would have two chapters compiling into one
// SKILL.md, and whichever ran last would silently overwrite the other - so the compile stops and
// names both, before anything is written.
const owner = new Map<string, Skill>();
const clashes: string[] = [];
for (const skill of skills) {
  const first = owner.get(skill.name);
  if (first) {
    clashes.push(`  /${skill.name}: ${first.book.label}/${first.chapterFile} AND ${skill.book.label}/${skill.chapterFile}`);
  } else {
    owner.set(skill.name, skill);
  }
}
if (clashes.length) {
  console.error('\nREFUSED - a skill name is defined in more than one skillset:');
  for (const c of clashes) console.error(c);
  console.error('Rename one of them; a skill has exactly one source. Nothing was written.');
  process.exit(1);
}

console.log(`\nFound ${skills.length} skills across ${books.length} skillset(s).\n`);

// --- Process each skill ---

let generated = 0;
let unchanged = 0;
let created = 0;

for (const skill of skills) {
  const bookDir = skill.book.dir;
  const chapterPath = join(bookDir, skill.chapterFile);
  const existingPath = join(skillsDir, skill.name, 'SKILL.md');
  const source = `${skill.book.label}/${skill.chapterFile}`;

  // Read the library chapter
  let chapterContent = '';
  let chapterBody = '';
  if (existsSync(chapterPath)) {
    chapterContent = normalizeLineEndings(readFileSync(chapterPath, 'utf-8'));
    chapterBody = bodyAfterFrontmatter(chapterContent);
  } else {
    console.log(`SKIP    ${skill.name} — chapter file not found: ${source}`);
    continue;
  }

  // Read existing SKILL.md if present
  let existingContent = '';
  let existingBody = '';
  const hasExisting = existsSync(existingPath);
  if (hasExisting) {
    existingContent = normalizeLineEndings(readFileSync(existingPath, 'utf-8'));
    parseFrontmatter(existingContent);
    existingBody = bodyAfterFrontmatter(existingContent);
  }

  // --- Decide what goes into the generated SKILL.md ---

  // Frontmatter: preserve existing frontmatter fields (they have platform config
  // like disable-model-invocation, argument-hint, context, allowed-tools, etc.)
  // Only fill in name/description if missing.
  let frontmatterStr: string;
  if (hasExisting) {
    // Re-emit the original frontmatter lines, only adding missing fields
    const fmMatch = existingContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    const originalLines = fmMatch ? fmMatch[1].split('\n') : [];
    const emittedKeys = new Set<string>();
    const fmLines: string[] = [];

    for (const line of originalLines) {
      const m = line.match(/^(\w[\w-]*):\s*/);
      if (m) emittedKeys.add(m[1]);
      fmLines.push(line);
    }

    if (!emittedKeys.has('name')) {
      fmLines.unshift(`name: ${skill.name}`);
    }
    if (!emittedKeys.has('description')) {
      const nameIdx = fmLines.findIndex(l => l.startsWith('name:'));
      fmLines.splice(nameIdx + 1, 0, `description: ${skill.coverDescription}`);
    }

    frontmatterStr = fmLines.join('\n');
  } else {
    frontmatterStr = `name: ${skill.name}\ndescription: ${skill.coverDescription}`;
  }

  // Body: ALWAYS generated from the library chapter. The library is the source of truth.
  // If the existing SKILL.md has a hand-written body that differs, WARN loudly.
  const libraryLink = `<!-- library: ${source} -->`;

  // Rewrite all links from the chapter's own folder to the compiled output location.
  const outputDir = join(skillsDir, skill.name);
  let generatedBody = rewriteLinks(chapterBody, bookDir, outputDir);
  generatedBody = generatedBody.trimEnd() + '\n\n' + libraryLink;

  if (hasExisting && existingBody.length > 0) {
    // Strip BOTH generated comments first — the provenance line lives in the existing
    // file's body but is added separately to generated output, so leaving it in made
    // every existing skill look "changed" (a false positive).
    const stripComments = (s: string) => s
      .replace(/<!-- library: \S+ -->/g, '')
      .replace(/<!-- Generated by [^>]*-->/g, '')
      .trim();
    if (stripComments(existingBody) !== stripComments(generatedBody)) {
      console.log(`WARNING ${skill.name} — SKILL.md body differs from library chapter!`);
      console.log(`  The library chapter at ${source} has changed,`);
      console.log(`  but skills/${skill.name}/SKILL.md has a different body.`);
      console.log(`  The library is the source of truth. The SKILL.md body will be`);
      console.log(`  REGENERATED from the library chapter.`);
      console.log(`  If the SKILL.md had hand-written content you want to keep,`);
      console.log(`  move it to the library chapter at: ${source}`);
      console.log(`  See: .claude/library/..environmentalism/04-on-skills.md`);
      console.log(`  See: .claude/library/.compilation/03-compilers.md`);
      console.log('');
    }
  }

  const body = generatedBody;

  // Assemble final content with provenance comment after frontmatter
  const provenance = `<!-- Generated by 04-on-skills--compiler.ts. Edit the library, not this file. -->`;
  const output = `---\n${frontmatterStr}\n---\n${provenance}\n\n${body}\n`;

  if (hasExisting && output === existingContent) {
    console.log(`OK      ${skill.name} — unchanged`);
    unchanged++;
    continue;
  }

  const skillDir = join(skillsDir, skill.name);

  if (doWrite) {
    if (!existsSync(skillDir)) {
      mkdirSync(skillDir, { recursive: true });
    }
    writeFileSync(existingPath, output, 'utf-8');
    if (hasExisting) {
      console.log(`UPDATED ${skill.name}  (${source})`);
    } else {
      console.log(`CREATED ${skill.name}  (${source})`);
      created++;
    }
  } else {
    if (hasExisting) {
      const existingLines = existingContent.split('\n');
      const outputLines = output.split('\n');
      let firstDiff = -1;
      const maxLines = Math.max(existingLines.length, outputLines.length);
      for (let i = 0; i < maxLines; i++) {
        if (existingLines[i] !== outputLines[i]) {
          firstDiff = i;
          break;
        }
      }
      if (firstDiff === -1) {
        console.log(`OK      ${skill.name} — unchanged`);
        unchanged++;
        continue;
      }
      console.log(`CHANGE  ${skill.name} — first diff at line ${firstDiff + 1}  (${source})`);
      const start = Math.max(0, firstDiff - 1);
      const end = Math.min(maxLines, firstDiff + 4);
      for (let i = start; i < end; i++) {
        const old = existingLines[i] ?? '';
        const nw = outputLines[i] ?? '';
        if (old !== nw) {
          if (old) console.log(`  - ${old}`);
          if (nw) console.log(`  + ${nw}`);
        } else {
          console.log(`    ${nw}`);
        }
      }
    } else {
      console.log(`CREATE  ${skill.name} — new skill directory  (${source})`);
      created++;
    }
  }
  generated++;
}

console.log(`\n${doWrite ? 'Generated' : 'Would generate'} ${generated} skill files (${created} new, ${unchanged} unchanged)`);
if (!doWrite) {
  console.log('Run with --write to generate the files.');
} else {
  // A compile is not done until it validates. Run the centralized type-check
  // (all links + all books, across .claude and every branch) at the end of the
  // compile, so drift is caught here and fixed immediately, not at push time.
  console.log('\n--- Type-check: running the validator at the end of compile ---');
  try {
    execSync(`npx tsx "${resolve(root, '..environmentalism', '05-on-validation--runner.ts')}"`, { stdio: 'inherit', cwd: root });
  } catch {
    console.error('\n*** Type-check FAILED after compile — FIX IMMEDIATELY (see the validator output above). ***');
    process.exit(1);
  }
}
