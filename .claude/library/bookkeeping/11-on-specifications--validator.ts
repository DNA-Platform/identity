// Bookkeeping validator — checks the conventions specified in bookkeeping/*.md
// Checks: metadata fields, full field order (catalogue/book/chapter), chapter signing,
//         specification/catalogues plain-text labels, catalogue flat structure
// Format: # Title, then - **field:** value bullets, then --- separator, then body
// Usage: npx tsx 11-on-specifications--validator.ts <library-path>

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, join, dirname } from 'path';

const target = process.argv[2];
if (!target) {
  console.error('Usage: npx tsx 11-on-specifications--validator.ts <library-path>');
  process.exit(1);
}

const root = resolve(target);
let errors = 0;
let warnings = 0;
let booksChecked = 0;
let chaptersChecked = 0;

function parseFrontmatter(content: string): Record<string, string> | null {
  // New format: # Title, then - **field:** value bullets, then --- separator
  const lines = content.split('\n');

  // Title must be the first line (# Heading)
  const titleMatch = lines[0]?.match(/^#\s+(.+)/);
  if (!titleMatch) return null;

  const fields: Record<string, string> = {};
  fields.title = titleMatch[1].trim();

  // Find the --- separator line
  let separatorIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      separatorIndex = i;
      break;
    }
  }
  if (separatorIndex === -1) return null;

  // Parse bullet metadata between heading and separator
  for (let i = 1; i < separatorIndex; i++) {
    const bulletMatch = lines[i].match(/^- \*\*([\w-]+):\*\*\s*(.*)/);
    if (bulletMatch) {
      fields[bulletMatch[1]] = bulletMatch[2].trim();
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
  // Find line numbers for each canonical field that exists in - **field:** bullets
  const positions: { field: string; line: number }[] = [];
  for (let i = 0; i < lines.length; i++) {
    const bulletMatch = lines[i].match(/^- \*\*([\w-]+):\*\*/);
    if (bulletMatch) {
      const field = bulletMatch[1];
      if (canonicalOrder.includes(field)) {
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
      console.log(`WARN    ${relPath}  Metadata order: '${curr.field}' should come before '${prev.field}'`);
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
    console.log(`ERROR   ${relPath}  Cover missing metadata (expected # Title, bullet fields, --- separator)`);
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

  // summary: is NOT metadata — it's prose in the body
  if (fm.summary) {
    console.log(`WARN    ${relPath}  'summary' in metadata — should be prose in the body, not a bullet field`);
    warnings++;
  }

  // Check metadata field order — within the bullet list between heading and separator
  const allLines = content.split('\n');
  let sepIdx = allLines.indexOf('---');
  const metaLines = sepIdx > 0 ? allLines.slice(1, sepIdx) : [];
  const order = isCatalogue ? catalogueCoverOrder : regularCoverOrder;
  checkFieldOrder(relPath, metaLines, order, () => { warnings++; });

  // Check TOC entries have synopses — not just bare links
  // A TOC entry looks like: "N. [Title](file.md) — synopsis text"
  // A bare entry looks like: "N. [Title](file.md)" with nothing after
  const bodyStart = content.indexOf('\n---\n');
  if (bodyStart >= 0) {
    const body = content.slice(bodyStart + 5);
    const tocPattern = /^\d+\.\s+\[([^\]]+)\]\(([^)]+\.md[^)]*)\)\s*$/gm;
    let tocMatch: RegExpExecArray | null;
    let bareTocCount = 0;
    let totalTocCount = 0;
    while ((tocMatch = tocPattern.exec(body)) !== null) {
      totalTocCount++;
      bareTocCount++;
    }
    if (bareTocCount > 0 && totalTocCount > 0) {
      console.log(`WARN    ${relPath}  ${bareTocCount} of ${totalTocCount} TOC entries have no synopsis — TOC should describe chapters, not just list them. See On Synopsis`);
      warnings++;
    }
  }
}

function checkChapter(chapterPath: string): void {
  const relPath = chapterPath.replace(root, '').replace(/\\/g, '/');
  const content = readFileSync(chapterPath, 'utf-8');
  const fm = parseFrontmatter(content);

  chaptersChecked++;

  if (!fm) {
    console.log(`WARN    ${relPath}  Chapter missing metadata (expected # Title, bullet fields, --- separator)`);
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

  // Check for nametags in body (should not appear in published book content)
  // Body is everything after the --- separator
  const names = ['Adam', 'Arthur', 'Cathy', 'Claude', 'David', 'Gabby', 'Libby', 'Phillip', 'Queenie'];
  const sepIndex = content.indexOf('\n---\n');
  const body = sepIndex >= 0 ? content.slice(sepIndex + 5) : content;
  const nametagPattern = new RegExp('^(' + names.join('|') + '):\\s', 'm');
  if (nametagPattern.test(body)) {
    console.log(`WARN    ${relPath}  Nametag in body — use author: field, not nametags in published content`);
    warnings++;
  }

  // Check chapter metadata field order
  const allLines = content.split('\n');
  const chapterSepIdx = allLines.indexOf('---');
  const metaLines = chapterSepIdx > 0 ? allLines.slice(1, chapterSepIdx) : [];
  checkFieldOrder(relPath, metaLines, chapterOrder, () => { warnings++; });
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
  const hasCover = existsSync(coverPath);
  const dirName = dir.split(/[\\/]/).pop() || '';
  const relDir = dir.replace(root, '').replace(/\\/g, '/') || '/';

  if (hasCover) {
    checkCover(coverPath);
  }

  // Flat structure check: if this is a . or .. prefixed catalogue, warn about nested books
  if (dirName.startsWith('.') && dirName !== '.' && hasCover) {
    checkFlatStructure(dir);
  }

  // Structural check: directory with markdown files but no cover
  const hasMdFiles = entries.some(e => e.endsWith('.md') && e !== '.cover.md');
  if (hasMdFiles && !hasCover && dir !== root) {
    console.log(`WARN    ${relDir}  Directory has markdown files but no .cover.md — not a valid book`);
    warnings++;
  }

  // Structural check: subdirectories that look like chapters (sprint-NN/ or similar patterns)
  if (hasCover) {
    for (const entry of entries) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory() && !entry.startsWith('.') && !entry.startsWith('..')) {
        // If this subdirectory contains a plan.md or index.md but no .cover.md, it's likely
        // a chapter in folder form rather than a proper book
        const subPlan = join(full, 'plan.md');
        const subIndex = join(full, 'index.md');
        const subCover = join(full, '.cover.md');
        if ((existsSync(subPlan) || existsSync(subIndex)) && !existsSync(subCover)) {
          const subRel = full.replace(root, '').replace(/\\/g, '/');
          console.log(`WARN    ${subRel}  Subdirectory with plan.md/index.md but no .cover.md — should this be a chapter file (NN-title.md) instead of a folder?`);
          warnings++;
        }
      }
    }
  }

  for (const entry of entries) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walkDir(full);
    } else if (entry.endsWith('.md') && entry !== '.cover.md') {
      // It's a chapter if it's inside a directory that has a .cover.md
      if (hasCover) {
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
