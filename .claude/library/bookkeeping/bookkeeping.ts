// Bookkeeping validator — checks the conventions specified in bookkeeping/*.md
// Checks: frontmatter fields, full field order (catalogue/book/chapter), chapter signing,
//         specification/catalogues plain-text labels, catalogue flat structure
// Usage: npx tsx bookkeeping.ts <library-path>

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, join, dirname } from 'path';

const target = process.argv[2];
if (!target) {
  console.error('Usage: npx tsx bookkeeping.ts <library-path>');
  process.exit(1);
}

const root = resolve(target);
let errors = 0;
let warnings = 0;
let booksChecked = 0;
let chaptersChecked = 0;

function parseFrontmatter(content: string): Record<string, string> | null {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const fields: Record<string, string> = {};
  const lines = match[1].split('\n');
  let currentKey = '';
  for (const line of lines) {
    const keyMatch = line.match(/^(\w[\w-]*):\s*(.*)/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      fields[currentKey] = keyMatch[2].trim();
    } else if (currentKey && line.match(/^\s/)) {
      fields[currentKey] += ' ' + line.trim();
    }
  }
  return fields;
}

function isMarkdownLink(value: string): boolean {
  return /\[.+\]\(.+\)/.test(value);
}

// Canonical field orders by file type
// Only fields in these lists are checked for relative order; others are skipped
const catalogueCoverOrder = ['title', 'catalogues', 'specification', 'author', 'coauthor', 'subject'];
const regularCoverOrder = ['title', 'specification', 'author', 'subject'];
const chapterOrder = ['title', 'specification', 'author'];

function checkFieldOrder(
  relPath: string,
  lines: string[],
  canonicalOrder: string[],
  onWarn: () => void
): void {
  // Find line numbers for each canonical field that exists
  const positions: { field: string; line: number }[] = [];
  for (let i = 0; i < lines.length; i++) {
    for (const field of canonicalOrder) {
      if (lines[i].startsWith(field + ':')) {
        positions.push({ field, line: i });
      }
    }
  }

  // Check that the fields that exist appear in canonical order
  for (let i = 1; i < positions.length; i++) {
    const prev = positions[i - 1];
    const curr = positions[i];
    const prevRank = canonicalOrder.indexOf(prev.field);
    const currRank = canonicalOrder.indexOf(curr.field);
    if (prevRank > currRank) {
      console.log(`WARN    ${relPath}  Frontmatter order: '${curr.field}' should come before '${prev.field}'`);
      onWarn();
      return; // One warning per file is enough
    }
  }
}

function checkCover(coverPath: string): void {
  const relPath = coverPath.replace(root, '').replace(/\\/g, '/');
  const content = readFileSync(coverPath, 'utf-8');
  const fm = parseFrontmatter(content);

  if (!fm) {
    console.log(`ERROR   ${relPath}  Cover missing frontmatter`);
    errors++;
    return;
  }

  booksChecked++;

  // Check required fields
  if (!fm.title) {
    console.log(`ERROR   ${relPath}  Missing 'title'`);
    errors++;
  }

  const dirName = dirname(coverPath).split(/[\\/]/).pop() || '';
  const isCatalogue = dirName.startsWith('.');

  // catalogues: required for subject catalogues (. or .. prefix), must be a plain string
  if (isCatalogue) {
    if (!fm.catalogues) {
      console.log(`ERROR   ${relPath}  Catalogue missing 'catalogues' field (what subject does this catalogue?)`);
      errors++;
    } else if (isMarkdownLink(fm.catalogues)) {
      console.log(`ERROR   ${relPath}  'catalogues' should be plain text, not a markdown link: ${fm.catalogues}`);
      errors++;
    }
  } else if (fm.catalogues && isMarkdownLink(fm.catalogues)) {
    console.log(`ERROR   ${relPath}  'catalogues' should be plain text, not a markdown link: ${fm.catalogues}`);
    errors++;
  }

  // specification: if present, must be plain text (not a markdown link)
  if (fm.specification && isMarkdownLink(fm.specification)) {
    console.log(`ERROR   ${relPath}  'specification' should be plain text, not a markdown link: ${fm.specification}`);
    errors++;
  }

  // author: required, must be a markdown link
  if (!fm.author) {
    console.log(`ERROR   ${relPath}  Missing 'author'`);
    errors++;
  } else if (!isMarkdownLink(fm.author)) {
    console.log(`ERROR   ${relPath}  'author' is not a markdown link: ${fm.author}`);
    errors++;
  }

  // subject: required for ALL books (including catalogues which self-catalogue)
  if (!fm.subject) {
    console.log(`ERROR   ${relPath}  Missing 'subject'`);
    errors++;
  } else if (!isMarkdownLink(fm.subject)) {
    console.log(`ERROR   ${relPath}  'subject' is not a markdown link: ${fm.subject}`);
    errors++;
  }

  // summary: is NOT in frontmatter — it's prose in the body
  if (fm.summary) {
    console.log(`WARN    ${relPath}  'summary' in frontmatter — should be prose in the body, not metadata`);
    warnings++;
  }

  // Check frontmatter order — only within the frontmatter block
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  const fmLines = fmMatch ? fmMatch[1].split('\n') : [];
  const order = isCatalogue ? catalogueCoverOrder : regularCoverOrder;
  checkFieldOrder(relPath, fmLines, order, () => { warnings++; });
}

function checkChapter(chapterPath: string): void {
  const relPath = chapterPath.replace(root, '').replace(/\\/g, '/');
  const content = readFileSync(chapterPath, 'utf-8');
  const fm = parseFrontmatter(content);

  chaptersChecked++;

  if (!fm) {
    console.log(`WARN    ${relPath}  Chapter missing frontmatter`);
    warnings++;
    return;
  }

  if (!fm.title) {
    console.log(`WARN    ${relPath}  Chapter missing 'title'`);
    warnings++;
  }

  if (!fm.author) {
    console.log(`ERROR   ${relPath}  Chapter not signed (missing 'author')`);
    errors++;
  } else if (!isMarkdownLink(fm.author)) {
    console.log(`ERROR   ${relPath}  Chapter 'author' is not a markdown link: ${fm.author}`);
    errors++;
  }

  // specification: if present, must be plain text (not a markdown link)
  if (fm.specification && isMarkdownLink(fm.specification)) {
    console.log(`ERROR   ${relPath}  'specification' should be plain text, not a markdown link: ${fm.specification}`);
    errors++;
  }

  // Check chapter frontmatter order
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  const fmLines = fmMatch ? fmMatch[1].split('\n') : [];
  checkFieldOrder(relPath, fmLines, chapterOrder, () => { warnings++; });
}

function checkFlatStructure(catalogueDir: string): void {
  const catalogueName = catalogueDir.split(/[\\/]/).pop() || '';
  const relDir = catalogueDir.replace(root, '').replace(/\\/g, '/');

  // The ..teamsmanship exception: it contains ..team/ which holds personal libraries
  if (catalogueName === '..teamsmanship') return;

  const entries = readdirSync(catalogueDir);
  for (const entry of entries) {
    const full = join(catalogueDir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      const nestedCover = join(full, '.cover.md');
      if (existsSync(nestedCover)) {
        const nestedRel = nestedCover.replace(root, '').replace(/\\/g, '/');
        console.log(`WARN    ${nestedRel}  Book inside catalogue '${relDir}' — catalogues should be flat (books as peers, not children)`);
        warnings++;
      }
    }
  }
}

function walkDir(dir: string): void {
  const entries = readdirSync(dir);

  const coverPath = join(dir, '.cover.md');
  if (existsSync(coverPath)) {
    checkCover(coverPath);
  }

  // Flat structure check: if this is a . or .. prefixed catalogue, warn about nested books
  const dirName = dir.split(/[\\/]/).pop() || '';
  if (dirName.startsWith('.') && dirName !== '.' && existsSync(coverPath)) {
    checkFlatStructure(dir);
  }

  for (const entry of entries) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walkDir(full);
    } else if (entry.endsWith('.md') && entry !== '.cover.md') {
      // It's a chapter if it's inside a directory that has a .cover.md
      if (existsSync(coverPath)) {
        checkChapter(full);
      }
    }
  }
}

console.log(`Validating anatomy: ${root}\n`);
walkDir(root);

console.log(`\n--- Anatomy Summary ---`);
console.log(`Books checked: ${booksChecked}`);
console.log(`Chapters checked: ${chaptersChecked}`);
console.log(`Errors: ${errors}`);
console.log(`Warnings: ${warnings}`);

if (errors > 0) process.exit(1);
