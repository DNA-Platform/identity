// Universal link validator — checks every markdown link resolves from where it's used
// Usage: npx tsx .tooling/check-links.ts <library-path>
// Every [text](path) link is resolved from the DIRECTORY of the file that contains it.
// That is where the reader is when they click.

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, join, dirname } from 'path';

const target = process.argv[2];
if (!target) {
  console.error('Usage: npx tsx check-links.ts <library-path>');
  process.exit(1);
}

const root = resolve(target);
let checked = 0;
let broken = 0;
const brokenLinks: string[] = [];

function checkFile(filePath: string): void {
  const content = readFileSync(filePath, 'utf-8');
  const fileDir = dirname(filePath);
  const relFile = filePath.replace(root, '').replace(/\\/g, '/');

  const linkPattern = /\]\(([^)#\s]+?)(?:#[^)]*)?\)/g;
  let match;

  while ((match = linkPattern.exec(content)) !== null) {
    const target = match[1];
    if (target.startsWith('http') || target.startsWith('mailto')) continue;
    if (target.startsWith('`') || target === 'path' || target === 'props') continue;
    checked++;

    // Resolve from THIS FILE'S directory — that's where the reader clicks
    const resolved = resolve(fileDir, target);
    if (!existsSync(resolved)) {
      broken++;
      const msg = `BROKEN  ${relFile}  ->  ${target}`;
      brokenLinks.push(msg);
      if (brokenLinks.length <= 50) console.log(msg);
    }
  }
}

function walk(dir: string): void {
  for (const entry of readdirSync(dir)) {
    if (entry === '.tooling' || entry === '.archive') continue;
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (!entry.startsWith('.') || entry.startsWith('..')) walk(full);
      else if (entry.startsWith('.')) walk(full); // include .perspective, .chemistry etc
    } else if (entry.endsWith('.md')) {
      checkFile(full);
    }
  }
}

console.log(`Checking links from: ${root}\n`);
walk(root);

if (brokenLinks.length > 50) {
  console.log(`... and ${brokenLinks.length - 50} more`);
}

console.log(`\n--- Link Check Summary ---`);
console.log(`Links checked: ${checked}`);
console.log(`Broken: ${broken}`);

if (broken > 0) process.exit(1);
