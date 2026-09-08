// Compiler resource for Environmentalism chapter 04: On Skills
// Finds every SKILLSET — a book whose cover declares `- **kind:** skillset` — in the
// identity library AND in every branch library (library/*/.lib), and generates
// .claude/skills/{name}/SKILL.md from each skillset's chapters per the On Skills
// specification.
// Usage: npx tsx ..environmentalism/04-on-skills--compiler.ts <library-path> [--write]
// Without --write, previews what would change. With --write, writes the files.

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import { execSync } from 'child_process';
import { resolve, join, relative } from 'path';
import { rewriteLinks } from './07-on-compiled-links--rewriter';

const libraryPath = process.argv[2];
const doWrite = process.argv.includes('--write');

if (!libraryPath) {
  console.error('Usage: npx tsx 04-on-skills--compiler.ts <library-path> [--write]');
  process.exit(1);
}

const root = resolve(libraryPath);
const claudeDir = resolve(root, '..');
const projectRoot = resolve(claudeDir, '..');
const skillsDir = join(claudeDir, 'skills');

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

// Cover metadata is markdown bullets, not YAML: `- **kind:** skillset`.
function coverField(content: string, field: string): string | null {
  const m = content.match(new RegExp(`^- \\*\\*${field}:\\*\\*\\s*(.+)$`, 'm'));
  return m ? m[1].trim() : null;
}

// A repo-root-relative path, forward-slashed — the form the provenance comment uses,
// so a reader can walk back from a compiled skill to its source from the repo root
// whether that source is in the identity library or in a branch.
function fromProjectRoot(p: string): string {
  return relative(projectRoot, p).replace(/\\/g, '/');
}

// --- Discover every library root: the identity library, then every branch ---
// This is the enumeration pattern the validation runner already uses. It is a GLOB,
// not a link: no branch path is written down in the identity library, so removing a
// branch removes its skills and breaks nothing. See 04-on-skills.md, "Branch skillsets
// and the one-way link convention".

type LibraryRoot = { dir: string; origin: 'identity' | 'branch' };

const libraryRoots: LibraryRoot[] = [{ dir: root, origin: 'identity' }];

const projectLib = join(projectRoot, 'library');
if (existsSync(projectLib)) {
  for (const area of readdirSync(projectLib)) {
    const lib = join(projectLib, area, '.lib');
    try {
      if (statSync(lib).isDirectory()) libraryRoots.push({ dir: lib, origin: 'branch' });
    } catch { /* no .lib in this area */ }
  }
}

// --- Find the skillsets: books whose cover declares the kind ---

type Skillset = { dir: string; label: string; origin: 'identity' | 'branch' };

const skillsets: Skillset[] = [];

for (const lr of libraryRoots) {
  let entries: string[];
  try { entries = readdirSync(lr.dir); } catch { continue; }
  for (const entry of entries) {
    const bookDir = join(lr.dir, entry);
    try { if (!statSync(bookDir).isDirectory()) continue; } catch { continue; }
    const coverPath = join(bookDir, '.cover.md');
    if (!existsSync(coverPath)) continue;
    const kind = coverField(normalizeLineEndings(readFileSync(coverPath, 'utf-8')), 'kind');
    if (!kind || kind.toLowerCase() !== 'skillset') continue;
    skillsets.push({ dir: bookDir, label: fromProjectRoot(bookDir), origin: lr.origin });
  }
}

if (skillsets.length === 0) {
  console.error('No skillsets found. A skillset is a book whose cover declares `- **kind:** skillset`.');
  console.error('See .claude/library/..environmentalism/04-on-skills.md');
  process.exit(1);
}

console.log(`Found ${skillsets.length} skillset(s):`);
for (const s of skillsets) console.log(`  ${s.origin === 'branch' ? 'branch  ' : 'identity'}  ${s.label}`);
console.log('');

// --- Parse each skillset cover to discover its skills ---
// Extract the chapter list: lines like "1. [sprint](01-sprint.md) — description"
// Skill names and chapter files may contain hyphens (e.g. think-async), so the
// name and filename groups allow [\w-], not just \w.

type Skill = { name: string; chapterFile: string; coverDescription: string; book: Skillset };

const skills: Skill[] = [];
const claimed = new Map<string, Skill>();
let collisions = 0;

for (const book of skillsets) {
  const coverContent = normalizeLineEndings(readFileSync(join(book.dir, '.cover.md'), 'utf-8'));
  const chapterPattern = /^\d+\.\s+\[([\w-]+)\]\((\d+-[\w-]+\.md)\)\s+—\s+(.+)$/gm;

  let match: RegExpExecArray | null;
  let found = 0;
  while ((match = chapterPattern.exec(coverContent)) !== null) {
    const skill: Skill = {
      name: match[1],
      chapterFile: match[2],
      coverDescription: match[3].trim(),
      book,
    };
    found++;

    // One flat namespace: /{name} must mean exactly one chapter. A collision is an
    // ERROR naming both books — never a silent last-one-wins, which would let a branch
    // quietly redefine a team skill.
    const prior = claimed.get(skill.name);
    if (prior) {
      console.log(`ERROR   /${skill.name} — name claimed by two skillsets:`);
      console.log(`          ${prior.book.label}/${prior.chapterFile}`);
      console.log(`          ${skill.book.label}/${skill.chapterFile}`);
      collisions++;
      continue;
    }
    claimed.set(skill.name, skill);
    skills.push(skill);
  }

  if (found === 0) {
    console.log(`WARNING ${book.label} — declares kind: skillset but its cover lists no skills.`);
    console.log(`  Chapter entries must read: N. [name](NN-name.md) — description`);
    console.log('');
  }
}

if (collisions > 0) {
  console.error(`\n${collisions} skill name collision(s). Rename in one of the skillsets and re-run. Nothing was written.`);
  process.exit(1);
}

if (skills.length === 0) {
  console.error('No skills found in any skillset cover. Check the chapter list format.');
  process.exit(1);
}

console.log(`Found ${skills.length} skills across ${skillsets.length} skillset(s).\n`);

// --- Process each skill ---

let generated = 0;
let unchanged = 0;
let created = 0;
const produced = new Set<string>();

for (const skill of skills) {
  const bookDir = skill.book.dir;
  const chapterPath = join(bookDir, skill.chapterFile);
  const existingPath = join(skillsDir, skill.name, 'SKILL.md');

  // Read the library chapter
  let chapterContent = '';
  let chapterBody = '';
  if (existsSync(chapterPath)) {
    chapterContent = normalizeLineEndings(readFileSync(chapterPath, 'utf-8'));
    chapterBody = bodyAfterFrontmatter(chapterContent);
  } else {
    console.log(`SKIP    ${skill.name} — chapter file not found: ${skill.book.label}/${skill.chapterFile}`);
    continue;
  }

  produced.add(skill.name);

  // Read existing SKILL.md if present
  let existingContent = '';
  let existingFm: Record<string, string> = {};
  let existingBody = '';
  const hasExisting = existsSync(existingPath);
  if (hasExisting) {
    existingContent = normalizeLineEndings(readFileSync(existingPath, 'utf-8'));
    existingFm = parseFrontmatter(existingContent);
    existingBody = bodyAfterFrontmatter(existingContent);
  }

  // --- Decide what goes into the generated SKILL.md ---

  // Frontmatter: preserve existing frontmatter fields (they have platform config
  // like disable-model-invocation, argument-hint, context, allowed-tools, etc.)
  // Only fill in name/description if missing.
  const fmFields: Record<string, string> = {};

  if (hasExisting) {
    // Preserve all existing frontmatter exactly
    const fmMatch = existingContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (fmMatch) {
      // Parse each line preserving order and values
      for (const line of fmMatch[1].split('\n')) {
        const m = line.match(/^(\w[\w-]*):\s*(.*)/);
        if (m) fmFields[m[1]] = m[2].trim();
      }
    }
  }

  // Ensure name and description are present
  if (!fmFields['name']) {
    fmFields['name'] = skill.name;
  }
  if (!fmFields['description']) {
    fmFields['description'] = skill.coverDescription;
  }

  // Build frontmatter string, preserving original field order for existing files
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

    // Add any missing required fields
    if (!emittedKeys.has('name')) {
      fmLines.unshift(`name: ${skill.name}`);
    }
    if (!emittedKeys.has('description')) {
      // Insert description after name
      const nameIdx = fmLines.findIndex(l => l.startsWith('name:'));
      fmLines.splice(nameIdx + 1, 0, `description: ${skill.coverDescription}`);
    }

    frontmatterStr = fmLines.join('\n');
  } else {
    frontmatterStr = `name: ${skill.name}\ndescription: ${skill.coverDescription}`;
  }

  // Body: ALWAYS generate from the library chapter. The library is the source of truth.
  // If the existing SKILL.md has a hand-written body that differs, WARN loudly.
  // Provenance points at the chapter that actually produced this file — the BRANCH
  // path for a branch skillset. A provenance line that names the wrong book breaks the
  // walk back to source, so it is computed, never assumed.
  const chapterFromRoot = fromProjectRoot(chapterPath);
  const libraryLink = `<!-- library: ${chapterFromRoot} -->`;

  // Generate the body from the library chapter. Strip any provenance line the chapter
  // itself carries: a past round-trip wrote compiled comments back into library sources,
  // and appending to those accumulates a second, stale line that makes provenance lie.
  let generatedBody = chapterBody.replace(/<!-- library: \S+ -->/g, '').trimEnd();
  // Rewrite all links from library source location to compiled output location.
  const sourceDir = bookDir;
  const outputDir = join(skillsDir, skill.name);
  generatedBody = rewriteLinks(generatedBody, sourceDir, outputDir);

  // Add library link at the end
  generatedBody = generatedBody.trimEnd() + '\n\n' + libraryLink;

  let body: string;
  if (hasExisting && existingBody.length > 0) {
    // Check if the existing body differs from what the library chapter would generate.
    // Strip BOTH generated comments first — the provenance line lives in the existing
    // file's body but is added separately to generated output, so leaving it in made
    // every existing skill look "changed" (a false positive).
    const stripComments = (s: string) => s
      .replace(/<!-- library: \S+ -->/g, '')
      .replace(/<!-- Generated by [^>]*-->/g, '')
      .trim();
    const existingClean = stripComments(existingBody);
    const generatedClean = stripComments(generatedBody);

    if (existingClean !== generatedClean) {
      console.log(`WARNING ${skill.name} — SKILL.md body differs from library chapter!`);
      console.log(`  The library chapter at ${skill.book.label}/${skill.chapterFile} has changed,`);
      console.log(`  but skills/${skill.name}/SKILL.md has a different body.`);
      console.log(`  The library is the source of truth. The SKILL.md body will be`);
      console.log(`  REGENERATED from the library chapter.`);
      console.log(`  If the SKILL.md had hand-written content you want to keep,`);
      console.log(`  move it to the library chapter at: ${chapterFromRoot}`);
      console.log(`  See: .claude/library/..environmentalism/04-on-skills.md`);
      console.log(`  See: .claude/library/.compilation/03-compilers.md`);
      console.log('');
    }
  }

  // Always use the generated body — the library is the source of truth
  body = generatedBody;

  // Assemble final content with provenance comment after frontmatter
  const provenance = `<!-- Generated by 04-on-skills--compiler.ts. Edit the library, not this file. -->`;
  const output = `---\n${frontmatterStr}\n---\n${provenance}\n\n${body}\n`;

  // Compare with existing to detect changes
  if (hasExisting && output === existingContent) {
    console.log(`OK      ${skill.name} — unchanged`);
    unchanged++;
    continue;
  }

  // Ensure directory exists
  const skillDir = join(skillsDir, skill.name);

  if (doWrite) {
    if (!existsSync(skillDir)) {
      mkdirSync(skillDir, { recursive: true });
    }
    writeFileSync(existingPath, output, 'utf-8');
    if (hasExisting) {
      console.log(`UPDATED ${skill.name}`);
    } else {
      console.log(`CREATED ${skill.name}  (from ${skill.book.label})`);
      created++;
    }
  } else {
    if (hasExisting) {
      // Show what would change
      const existingLines = existingContent.split('\n');
      const outputLines = output.split('\n');

      // Find first difference
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

      console.log(`CHANGE  ${skill.name} — first diff at line ${firstDiff + 1}`);
      // Show a few lines around the diff
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
      console.log(`CREATE  ${skill.name} — new skill directory (from ${skill.book.label})`);
      created++;
    }
  }
  generated++;
}

// --- Orphans ---
// Compiled output is a projection of current state, so a skill left behind by a
// skillset that no longer claims it — or by a branch that is simply gone — is stale,
// not additive. Reported, never deleted: removing a directory is the operator's call.

let orphans = 0;
if (existsSync(skillsDir)) {
  for (const name of readdirSync(skillsDir)) {
    if (produced.has(name)) continue;
    const f = join(skillsDir, name, 'SKILL.md');
    if (!existsSync(f)) continue;
    const matches = [...readFileSync(f, 'utf-8').matchAll(/<!-- library: (\S+) -->/g)];
    const src = matches.length ? matches[matches.length - 1][1] : null;
    const reason = !src
      ? 'no provenance comment — not compiled from any skillset'
      : existsSync(resolve(projectRoot, src))
        ? `its source ${src} exists but no skillset cover lists it`
        : `its source ${src} no longer exists`;
    console.log(`ORPHAN  ${name} — ${reason}`);
    orphans++;
  }
}
if (orphans > 0) {
  console.log(`\n${orphans} orphaned skill(s) in .claude/skills/. Remove the directory, or list the chapter in a skillset cover.`);
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
