// Universal link validator — uses CommonMark parser for link extraction
// and file-relative resolution per RFC 3986 for path checking.
// Usage: npx tsx .tooling/check-links.ts <library-path>

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, join, dirname } from 'path';

// CommonMark parser — the spec, not an approximation
const commonmark = require('commonmark');
const reader = new commonmark.Parser();

const target = process.argv[2];
if (!target) {
  console.error('Usage: npx tsx check-links.ts <library-path>');
  process.exit(1);
}

const root = resolve(target);
let checked = 0;
let broken = 0;
const brokenLinks: string[] = [];

function extractLinks(content: string): string[] {
  const links: string[] = [];
  const parsed = reader.parse(content);
  const walker = parsed.walker();
  let event;
  while ((event = walker.next())) {
    if (event.entering && event.node.type === 'link') {
      const dest = event.node.destination;
      if (dest) links.push(dest);
    }
  }
  return links;
}

function checkFile(filePath: string): void {
  const content = readFileSync(filePath, 'utf-8');
  const fileDir = dirname(filePath);
  const relFile = filePath.replace(root, '').replace(/\\/g, '/');

  for (const dest of extractLinks(content)) {
    // Skip external links
    if (dest.startsWith('http') || dest.startsWith('mailto')) continue;

    // Strip fragment (#section)
    const pathPart = dest.split('#')[0];
    if (!pathPart) continue;

    checked++;

    // RFC 3986 relative resolution: resolve the link destination as a URI
    // relative to the containing file's URI. For local files, this means
    // resolving against the file's directory as a file:// base URI.
    const baseUri = 'file:///' + fileDir.replace(/\\/g, '/') + '/';
    const resolvedUri = new URL(pathPart, baseUri);
    const resolved = resolvedUri.pathname.replace(/^\/([A-Z]:)/, '$1');
    if (!existsSync(resolved)) {
      broken++;
      const msg = `BROKEN  ${relFile}  ->  ${dest}`;
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
      walk(full);
    } else if (entry.endsWith('.md')) {
      checkFile(full);
    }
  }
}

console.log(`Checking links (CommonMark parser) from: ${root}\n`);
walk(root);

if (brokenLinks.length > 50) {
  console.log(`... and ${brokenLinks.length - 50} more`);
}

console.log(`\n--- Link Check Summary ---`);
console.log(`Links checked: ${checked}`);
console.log(`Broken: ${broken}`);

if (broken > 0) process.exit(1);
