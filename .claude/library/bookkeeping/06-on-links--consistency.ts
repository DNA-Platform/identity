// Link consistency checker — resource for Bookkeeping chapter 06: On Links
// Given a markdown file, reads both sides of every link and checks if the
// source context and target content are consistent.
//
// Usage: npx tsx 06-on-links--consistency.ts <file-or-directory> [--verbose]
// Without --verbose: summary only. With --verbose: shows source/target excerpts.
//
// What it checks:
// 1. For each link [text](target), reads the source paragraph containing it
// 2. Reads the target file's opening section (first paragraph after frontmatter)
// 3. Extracts keywords from the source context (nouns, proper names, numbers)
// 4. Checks if the target's opening contains those keywords
// 5. If source mentions a count ("seven chapters"), verifies against actual file count
//
// See: On Links (.claude/library/bookkeeping/06-on-links.md)
// See: On Synopsis (.claude/library/bookkeeping/09-on-synopsis.md)
// See: Compilation Validators (.claude/library/.compilation/04-validators.md)

import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { resolve, join, dirname, relative } from 'path';

const input = process.argv[2];
const verbose = process.argv.includes('--verbose');

if (!input) {
  console.error('Usage: npx tsx 06-on-links--consistency.ts <file-or-directory> [--verbose]');
  process.exit(1);
}

const root = resolve(input);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const numberWords: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7,
  eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13,
  fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18,
  nineteen: 19, twenty: 20
};

function bodyAfterFrontmatter(content: string): string {
  const match = content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n([\s\S]*)/);
  if (match) return match[1].trim();
  const mdMatch = content.match(/^#[^\n]*\n([\s\S]*?)\n---\r?\n([\s\S]*)/);
  if (mdMatch) return mdMatch[2].trim();
  return content.trim();
}

function firstParagraph(body: string): string {
  const lines = body.split('\n');
  const para: string[] = [];
  let started = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (!started && trimmed.length > 0 && !trimmed.startsWith('#') && !trimmed.startsWith('-')) {
      started = true;
    }
    if (started) {
      if (trimmed.length === 0 && para.length > 0) break;
      if (trimmed.startsWith('#') && para.length > 0) break;
      if (trimmed.length > 0) para.push(trimmed);
    }
  }
  return para.join(' ');
}

function extractKeywords(text: string): string[] {
  // Remove markdown link syntax, keep the text
  const clean = text.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  // Extract words 4+ chars, lowercased, unique
  const words = clean.match(/\b[a-zA-Z$][a-zA-Z0-9$]{3,}\b/g) || [];
  const unique = [...new Set(words.map(w => w.toLowerCase()))];
  // Filter out very common words
  const stopwords = new Set(['this', 'that', 'with', 'from', 'what', 'when', 'where',
    'which', 'their', 'there', 'about', 'into', 'also', 'each', 'every',
    'them', 'they', 'been', 'have', 'does', 'will', 'more', 'most',
    'than', 'other', 'some', 'only', 'first', 'then', 'these', 'those']);
  return unique.filter(w => !stopwords.has(w));
}

function findChapterCount(text: string): { word: string; num: number } | null {
  // Match "seven chapters" or "7 chapters"
  const wordMatch = text.match(/(\w+)\s+chapters?/i);
  if (wordMatch) {
    const w = wordMatch[1].toLowerCase();
    if (numberWords[w]) return { word: wordMatch[1], num: numberWords[w] };
    const n = parseInt(w);
    if (!isNaN(n)) return { word: wordMatch[1], num: n };
  }
  return null;
}

function countChaptersInDir(dirPath: string): number {
  if (!existsSync(dirPath) || !statSync(dirPath).isDirectory()) return -1;
  return readdirSync(dirPath).filter(f =>
    /^\d+.*\.md$/.test(f) && f !== '.cover.md'
  ).length;
}

function getParagraphContainingLink(content: string, linkTarget: string): string {
  const body = bodyAfterFrontmatter(content);
  const lines = body.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(`](${linkTarget})`)) {
      // Skip if this is a frontmatter-like line (starts with - **)
      if (lines[i].trim().startsWith('- **')) return '';
      // Skip if in a citation block
      if (lines[i].trim().startsWith('[') && lines[i].includes(']: ')) return '';
      // Skip if in a table row
      if (lines[i].trim().startsWith('|')) return '';
      // Collect the full paragraph
      let start = i;
      while (start > 0 && lines[start - 1].trim().length > 0 && !lines[start - 1].trim().startsWith('#')) start--;
      let end = i;
      while (end < lines.length - 1 && lines[end + 1].trim().length > 0) end++;
      return lines.slice(start, end + 1).join(' ');
    }
  }
  return '';
}

// ---------------------------------------------------------------------------
// Walk files
// ---------------------------------------------------------------------------

interface Issue {
  file: string;
  link: string;
  type: 'keyword-mismatch' | 'count-mismatch';
  detail: string;
  sourceExcerpt?: string;
  targetExcerpt?: string;
}

const issues: Issue[] = [];
let linksChecked = 0;
let filesScanned = 0;

function checkFile(filePath: string) {
  const content = readFileSync(filePath, 'utf-8');
  const fileDir = dirname(filePath);
  const relFile = relative(root, filePath);

  // Find all markdown links
  const linkPattern = /\[([^\]]*)\]\(([^)]+\.md[^)]*)\)/g;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(content)) !== null) {
    const linkText = match[1];
    const linkTarget = match[2].split('#')[0]; // strip anchor
    if (!linkTarget.endsWith('.md')) continue;

    const targetPath = resolve(fileDir, linkTarget);
    if (!existsSync(targetPath)) continue; // broken link — link checker handles this

    linksChecked++;
    const targetContent = readFileSync(targetPath, 'utf-8');
    const targetBody = bodyAfterFrontmatter(targetContent);
    const targetOpening = firstParagraph(targetBody);

    // Get source paragraph
    const sourcePara = getParagraphContainingLink(content, match[2]);
    if (!sourcePara || sourcePara.length < 20) continue; // too short to check

    // Keyword check
    const sourceKeywords = extractKeywords(sourcePara);
    const targetText = targetOpening.toLowerCase();
    const missing = sourceKeywords.filter(kw => !targetText.includes(kw));
    const overlap = sourceKeywords.length - missing.length;
    const ratio = sourceKeywords.length > 0 ? overlap / sourceKeywords.length : 1;

    // Only flag if zero overlap AND the source has substantial context
    // Low-but-nonzero overlap is normal — a description uses different words than the target
    if (ratio === 0 && sourceKeywords.length >= 8 && sourcePara.length > 100) {
      issues.push({
        file: relFile,
        link: linkTarget,
        type: 'keyword-mismatch',
        detail: `Source keywords [${sourceKeywords.slice(0, 8).join(', ')}] — only ${Math.round(ratio * 100)}% found in target opening`,
        sourceExcerpt: sourcePara.slice(0, 150),
        targetExcerpt: targetOpening.slice(0, 150)
      });
    }

    // Count check
    const countInSource = findChapterCount(sourcePara);
    if (countInSource) {
      const targetDir = dirname(targetPath);
      const actualCount = countChaptersInDir(targetDir);
      if (actualCount >= 0 && actualCount !== countInSource.num) {
        issues.push({
          file: relFile,
          link: linkTarget,
          type: 'count-mismatch',
          detail: `Source says "${countInSource.word} chapters" but target directory has ${actualCount}`,
          sourceExcerpt: sourcePara.slice(0, 150),
          targetExcerpt: `(directory: ${relative(root, targetDir)})`
        });
      }
    }
  }
  filesScanned++;
}

function walkDir(dirPath: string) {
  for (const entry of readdirSync(dirPath)) {
    const full = join(dirPath, entry);
    if (entry.startsWith('.') && entry !== '..' && !entry.startsWith('..')) {
      if (entry === '.cover.md') {
        checkFile(full);
      } else if (statSync(full).isDirectory() && entry.startsWith('.')) {
        walkDir(full);
      }
      continue;
    }
    if (statSync(full).isDirectory()) {
      walkDir(full);
    } else if (entry.endsWith('.md')) {
      checkFile(full);
    }
  }
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

if (statSync(root).isDirectory()) {
  walkDir(root);
} else {
  checkFile(root);
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

console.log(`\n--- Consistency Check ---`);
console.log(`Files scanned:  ${filesScanned}`);
console.log(`Links checked:  ${linksChecked}`);
console.log(`Issues found:   ${issues.length}`);

if (issues.length > 0) {
  console.log('');
  for (const issue of issues) {
    console.log(`${issue.type.toUpperCase()}  ${issue.file}`);
    console.log(`  Link: ${issue.link}`);
    console.log(`  ${issue.detail}`);
    if (verbose && issue.sourceExcerpt) {
      console.log(`  Source: ${issue.sourceExcerpt}...`);
      console.log(`  Target: ${issue.targetExcerpt}...`);
    }
    console.log('');
  }
}
