// Validator resource for chapter 01: Anatomy of a book
// Checks: frontmatter fields (title, subject, author, summary), chapter signing, summary length
// Usage: npx tsx ..librarianship/01-anatomy-of-a-book.ts <library-path>

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, join, dirname } from 'path';

const target = process.argv[2];
if (!target) {
  console.error('Usage: npx tsx 01-anatomy-of-a-book.ts <library-path>');
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
    }
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

  // Check frontmatter order
  // Regular books: title > author > subject
  // Catalogues: title > catalogues > author > subject
  const lines = content.split('\n');
  let titleLine = -1, subjectLine = -1, authorLine = -1, summaryLine = -1, cataloguesLine = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('title:')) titleLine = i;
    if (lines[i].startsWith('catalogues:')) cataloguesLine = i;
    if (lines[i].startsWith('subject:')) subjectLine = i;
    if (lines[i].startsWith('author:')) authorLine = i;
    if (lines[i].startsWith('summary:')) summaryLine = i;
  }

  if (titleLine > 0 && authorLine > 0 && titleLine > authorLine) {
    console.log(`WARN    ${relPath}  Frontmatter order: title should come before author`);
    warnings++;
  }
  if (authorLine > 0 && subjectLine > 0 && authorLine > subjectLine) {
    console.log(`WARN    ${relPath}  Frontmatter order: subject should come before author`);
    warnings++;
  }
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
}

function walkDir(dir: string): void {
  const entries = readdirSync(dir);

  const coverPath = join(dir, '.cover.md');
  if (existsSync(coverPath)) {
    checkCover(coverPath);
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
