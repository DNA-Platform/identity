// Validator resource for chapter 04: Subjects and catalogues
// Checks: self-cataloguing, flatness, subject: fields, catalogue existence
// Usage: npx tsx ..librarianship/04-subjects-and-catalogues.ts <library-path>

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, join, basename } from 'path';

const target = process.argv[2];
if (!target) {
  console.error('Usage: npx tsx 04-subjects-and-catalogues.ts <library-path>');
  process.exit(1);
}

const root = resolve(target);
let errors = 0;
let warnings = 0;

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

// Find all directories with .cover.md (these are books or catalogues)
const allBooks: string[] = [];
function findBooks(dir: string) {
  const entries = readdirSync(dir);
  if (existsSync(join(dir, '.cover.md'))) {
    allBooks.push(dir);
  }
  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      findBooks(full);
    }
  }
}
findBooks(root);

console.log(`Validating subjects: ${root}\n`);

// Check 1: Every catalogue self-catalogues
for (const bookDir of allBooks) {
  const dirName = basename(bookDir);
  const isCatalogue = dirName.startsWith('.');

  if (isCatalogue) {
    const coverPath = join(bookDir, '.cover.md');
    const content = readFileSync(coverPath, 'utf-8');
    const relPath = bookDir.replace(root, '').replace(/\\/g, '/') || '/';

    // Self-cataloguing: the catalogue's own name should appear in its TOC
    if (!content.includes(`](.)`) && !content.includes(`](.cover.md)`) && !content.includes(dirName)) {
      console.log(`ERROR   ${relPath}  Catalogue does not self-catalogue (own name not in TOC)`);
      errors++;
    }
  }
}

// Check 2: Every regular book has subject: pointing to a valid catalogue
for (const bookDir of allBooks) {
  const dirName = basename(bookDir);
  const isCatalogue = dirName.startsWith('.');

  if (!isCatalogue) {
    const coverPath = join(bookDir, '.cover.md');
    const content = readFileSync(coverPath, 'utf-8');
    const fm = parseFrontmatter(content);
    const relPath = bookDir.replace(root, '').replace(/\\/g, '/');

    if (!fm || !fm.subject) {
      console.log(`ERROR   ${relPath}  Regular book missing 'subject' field`);
      errors++;
    } else {
      const subjectName = fm.subject.replace(/"/g, '');
      // Check that the subject catalogue exists somewhere in the library
      const subjectExists = allBooks.some(b => basename(b) === subjectName);
      if (!subjectExists) {
        console.log(`WARN    ${relPath}  subject: "${subjectName}" — no catalogue with that name found`);
        warnings++;
      }
    }
  }
}

// Check 3: Flatness — no book directories inside catalogue directories
// (except the catalogue's own chapters which are .md files, not directories)
for (const bookDir of allBooks) {
  const dirName = basename(bookDir);
  const isCatalogue = dirName.startsWith('.');
  const relPath = bookDir.replace(root, '').replace(/\\/g, '/');

  if (isCatalogue) {
    // Check for book directories INSIDE this catalogue
    const entries = readdirSync(bookDir);
    for (const entry of entries) {
      const full = join(bookDir, entry);
      if (statSync(full).isDirectory() && existsSync(join(full, '.cover.md'))) {
        // There's a book inside this catalogue — that violates flatness
        // EXCEPTION: ..teamsmanship/ can have agent folders which contain books
        const parentName = basename(bookDir);
        if (parentName === '..teamsmanship') {
          // Agent folders are expected inside ..teamsmanship
          continue;
        }
        console.log(`ERROR   ${relPath}/${entry}  Book inside catalogue directory (violates flat structure)`);
        errors++;
      }
    }
  }
}

// Check 4: Only ONE .. prefix at any scope level
// At the library root: exactly one .. (the library catalogue)
// Inside each agent folder: exactly one .. (the agent's library catalogue)
const scopeLevels = new Map<string, string[]>();
for (const bookDir of allBooks) {
  const dirName = basename(bookDir);
  if (dirName.startsWith('..')) {
    const parent = bookDir.replace(/[\\/][^\\/]+$/, '');
    const parentRel = parent.replace(root, '').replace(/\\/g, '/') || '/';
    if (!scopeLevels.has(parentRel)) scopeLevels.set(parentRel, []);
    scopeLevels.get(parentRel)!.push(dirName);
  }
}
for (const [scope, doubleDots] of scopeLevels) {
  if (doubleDots.length > 1 && scope !== '/') {
    // At the library root, multiple .. is allowed (..librarianship + ..teamsmanship)
    // because this public library contains personal libraries within ..teamsmanship
    // At all other scopes (inside agent folders), only ONE .. is allowed
    console.log(`ERROR   ${scope}  Multiple .. prefixed directories (${doubleDots.join(', ')}). Only ONE library catalogue per scope.`);
    errors++;
  }
}

// Check 5: Autobiography self-links
for (const bookDir of allBooks) {
  const coverPath = join(bookDir, '.cover.md');
  const content = readFileSync(coverPath, 'utf-8');
  const fm = parseFrontmatter(content);
  if (!fm || !fm.author) continue;

  // Check if this looks like an autobiography (author links to self)
  if (fm.author.includes('(.cover.md)') || fm.author.includes('(..cover.md)')) {
    // This is a self-link — it's an autobiography. Good.
  }
}

console.log(`\n--- Subjects Summary ---`);
console.log(`Books/catalogues checked: ${allBooks.length}`);
console.log(`Errors: ${errors}`);
console.log(`Warnings: ${warnings}`);

if (errors > 0) process.exit(1);
