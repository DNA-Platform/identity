// Compiler resource for Environmentalism chapter 04: On Skills
// Reads the Skills and Commands book to generate .claude/skills/{name}/SKILL.md files
// per the On Skills specification.
// Usage: npx tsx ..environmentalism/04-on-skills--compiler.ts <library-path> [--write]
// Without --write, previews what would change. With --write, writes the files.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, join } from 'path';

const libraryPath = process.argv[2];
const doWrite = process.argv.includes('--write');

if (!libraryPath) {
  console.error('Usage: npx tsx 04-on-skills--compiler.ts <library-path> [--write]');
  process.exit(1);
}

const root = resolve(libraryPath);
const skillsDir = resolve(root, '..', 'skills');
const bookDir = join(root, 'our-skillset');

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

// --- Parse the Skills and Commands cover to discover all skills ---

const coverPath = join(bookDir, '.cover.md');
if (!existsSync(coverPath)) {
  console.error(`Skills and Commands cover not found at ${coverPath}`);
  process.exit(1);
}

const coverContent = normalizeLineEndings(readFileSync(coverPath, 'utf-8'));

// Extract the chapter list: lines like "1. [sprint](01-sprint.md) — description"
const chapterPattern = /^\d+\.\s+\[(\w+)\]\((\d+-\w+\.md)\)\s+—\s+(.+)$/gm;
const skills: { name: string; chapterFile: string; coverDescription: string }[] = [];

let match: RegExpExecArray | null;
while ((match = chapterPattern.exec(coverContent)) !== null) {
  skills.push({
    name: match[1],
    chapterFile: match[2],
    coverDescription: match[3].trim(),
  });
}

if (skills.length === 0) {
  console.error('No skills found in the cover. Check the chapter list format.');
  process.exit(1);
}

console.log(`Found ${skills.length} skills in the catalogue.\n`);

// --- Process each skill ---

let generated = 0;
let unchanged = 0;
let created = 0;

for (const skill of skills) {
  const chapterPath = join(bookDir, skill.chapterFile);
  const existingPath = join(skillsDir, skill.name, 'SKILL.md');

  // Read the library chapter
  let chapterContent = '';
  let chapterBody = '';
  if (existsSync(chapterPath)) {
    chapterContent = normalizeLineEndings(readFileSync(chapterPath, 'utf-8'));
    chapterBody = bodyAfterFrontmatter(chapterContent);
  } else {
    console.log(`SKIP    ${skill.name} — chapter file not found: ${skill.chapterFile}`);
    continue;
  }

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
  const libraryLink = `<!-- library: .claude/library/our-skillset/${skill.chapterFile} -->`;

  // Generate the body from the library chapter
  let generatedBody = chapterBody;
  // Rewrite library-relative links to compiled-output-relative links
  // From library chapters, links like ../teamspeak/06-tending.md become ../../library/teamspeak/06-tending.md
  generatedBody = generatedBody.replace(
    /\]\(\.\.\//g,
    '](../../library/'
  );

  // Add library link at the end
  generatedBody = generatedBody.trimEnd() + '\n\n' + libraryLink;

  let body: string;
  if (hasExisting && existingBody.length > 0) {
    // Check if the existing body differs from what the library chapter would generate
    const existingClean = existingBody.replace(/<!-- library: \.claude\/library\/\S+ -->/g, '').trimEnd();
    const generatedClean = generatedBody.replace(/<!-- library: \.claude\/library\/\S+ -->/g, '').trimEnd();

    if (existingClean !== generatedClean) {
      console.log(`WARNING ${skill.name} — SKILL.md body differs from library chapter!`);
      console.log(`  The library chapter at our-skillset/${skill.chapterFile} has changed,`);
      console.log(`  but skills/${skill.name}/SKILL.md has a different body.`);
      console.log(`  The library is the source of truth. The SKILL.md body will be`);
      console.log(`  REGENERATED from the library chapter.`);
      console.log(`  If the SKILL.md had hand-written content you want to keep,`);
      console.log(`  move it to the library chapter at: .claude/library/our-skillset/${skill.chapterFile}`);
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
      console.log(`CREATED ${skill.name}`);
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
      console.log(`CREATE  ${skill.name} — new skill directory`);
      created++;
    }
  }
  generated++;
}

console.log(`\n${doWrite ? 'Generated' : 'Would generate'} ${generated} skill files (${created} new, ${unchanged} unchanged)`);
if (!doWrite) {
  console.log('Run with --write to generate the files.');
}
