// Keyword search tool — resource for Bookkeeping chapter 06: On Links
// Given keywords, finds where in the library those concepts are discussed.
// Returns file paths and the matching paragraphs.
//
// Usage: npx tsx 06-on-links--search.ts <directory> <keyword> [keyword2] [keyword3]
// Example: npx tsx 06-on-links--search.ts .claude/library "scope tracking"
//          npx tsx 06-on-links--search.ts .claude/library commit tool branch
//
// Use this BEFORE creating a link — find where a concept lives, then link to it.
// Use this during /organize to find unlinked mentions of concepts.
//
// See: On Links (.claude/library/bookkeeping/06-on-links.md)
// See: Compilation Validators (.claude/library/.compilation/04-validators.md)

import { readFileSync, readdirSync, statSync } from 'fs';
import { resolve, join, relative } from 'path';

const dir = process.argv[2];
const keywords = process.argv.slice(3).map(k => k.toLowerCase());

if (!dir || keywords.length === 0) {
  console.error('Usage: npx tsx 06-on-links--search.ts <directory> <keyword> [keyword2] ...');
  console.error('Example: npx tsx 06-on-links--search.ts .claude/library "scope tracking"');
  process.exit(1);
}

const root = resolve(dir);

interface Match {
  file: string;
  paragraph: string;
  score: number; // how many keywords found
  isTitle: boolean;
  isCover: boolean;
}

const matches: Match[] = [];

function searchFile(filePath: string) {
  const content = readFileSync(filePath, 'utf-8');
  const relPath = relative(root, filePath);
  const isCover = filePath.endsWith('.cover.md');

  // Check title
  const titleMatch = content.match(/^#\s+(.+)/m);
  if (titleMatch) {
    const titleLower = titleMatch[1].toLowerCase();
    const titleScore = keywords.filter(kw => titleLower.includes(kw)).length;
    if (titleScore > 0) {
      matches.push({
        file: relPath,
        paragraph: `# ${titleMatch[1]}`,
        score: titleScore,
        isTitle: true,
        isCover
      });
    }
  }

  // Check paragraphs
  const lines = content.split('\n');
  let currentPara: string[] = [];

  function checkParagraph() {
    if (currentPara.length === 0) return;
    const text = currentPara.join(' ');
    const lower = text.toLowerCase();
    const score = keywords.filter(kw => lower.includes(kw)).length;
    if (score > 0 && text.length > 30) {
      matches.push({
        file: relPath,
        paragraph: text.length > 200 ? text.slice(0, 200) + '...' : text,
        score,
        isTitle: false,
        isCover
      });
    }
    currentPara = [];
  }

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.length === 0) {
      checkParagraph();
    } else if (trimmed.startsWith('#')) {
      checkParagraph();
      // Check the heading itself
      const lower = trimmed.toLowerCase();
      const score = keywords.filter(kw => lower.includes(kw)).length;
      if (score > 0) {
        matches.push({
          file: relPath,
          paragraph: trimmed,
          score,
          isTitle: true,
          isCover
        });
      }
    } else {
      currentPara.push(trimmed);
    }
  }
  checkParagraph();
}

function walkDir(dirPath: string) {
  for (const entry of readdirSync(dirPath)) {
    const full = join(dirPath, entry);
    if (entry === '.archive' || entry === 'node_modules') continue;
    if (statSync(full).isDirectory()) {
      walkDir(full);
    } else if (entry.endsWith('.md')) {
      searchFile(full);
    }
  }
}

walkDir(root);

// Sort: covers first, then by score descending, then titles first
matches.sort((a, b) => {
  if (a.isCover !== b.isCover) return a.isCover ? -1 : 1;
  if (a.score !== b.score) return b.score - a.score;
  if (a.isTitle !== b.isTitle) return a.isTitle ? -1 : 1;
  return a.file.localeCompare(b.file);
});

// Deduplicate by file — show best match per file
const seen = new Set<string>();
const deduped: Match[] = [];
for (const m of matches) {
  const key = `${m.file}:${m.isTitle}`;
  if (!seen.has(m.file) || m.isTitle) {
    if (!seen.has(key)) {
      deduped.push(m);
      seen.add(key);
      seen.add(m.file);
    }
  }
}

console.log(`\n--- Keyword Search: "${keywords.join(' ')}" ---`);
console.log(`Files searched: ${new Set(matches.map(m => m.file)).size} with matches`);
console.log(`Total matches:  ${matches.length}`);
console.log(`Showing top ${Math.min(deduped.length, 20)} results:\n`);

for (const m of deduped.slice(0, 20)) {
  const tag = m.isCover ? '[COVER]' : m.isTitle ? '[TITLE]' : '[PARA]';
  console.log(`${tag} ${m.file} (score: ${m.score}/${keywords.length})`);
  console.log(`  ${m.paragraph}`);
  console.log('');
}
