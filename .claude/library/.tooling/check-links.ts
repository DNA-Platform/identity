// Link validator for the team library.
//
// Extracts links using the CommonMark reference parser (the spec, not a regex).
// Resolves each link per RFC 3986 relative URI resolution from the file that
// contains it — the same logic a markdown renderer uses.
// Checks that the resolved path exists on disk.
//
// Usage: npx tsx .tooling/check-links.ts <root-dir> [--verbose]
//
// <root-dir> is the directory to scan. Pass the project root to check
// everything: library files, compiled agent/rule files, and CLAUDE.md.
// The tool figures out each file's base URI from its absolute path.

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, join, dirname, extname } from 'path';

const rootArg = process.argv[2];
const verbose = process.argv.includes('--verbose');

if (!rootArg) {
  console.error('Usage: npx tsx check-links.ts <root-dir> [--verbose]');
  process.exit(1);
}

const scanRoot = resolve(rootArg);

// -- Step 1: CommonMark link extraction ----------------------------------

const commonmark = require('commonmark');
const parser = new commonmark.Parser();

interface Link {
  destination: string;
  line: number;
  text: string;
}

function extractLinks(markdown: string): Link[] {
  const links: Link[] = [];
  const doc = parser.parse(markdown);
  const walker = doc.walker();
  let ev;
  while ((ev = walker.next())) {
    const node = ev.node;
    if (ev.entering && node.type === 'link' && node.destination) {
      // Collect visible text of the link for reporting
      let text = '';
      const inner = node.walker();
      let iev;
      while ((iev = inner.next())) {
        if (iev.node.type === 'text') text += iev.node.literal;
      }
      links.push({
        destination: node.destination,
        line: node.sourcepos ? node.sourcepos[0][0] : 0,
        text: text.slice(0, 40),
      });
    }
  }
  return links;
}

// -- Step 2: RFC 3986 relative resolution --------------------------------

function resolveLink(dest: string, fileAbsPath: string): string | null {
  // Strip fragment — we only check file existence, not heading anchors
  const pathPart = dest.split('#')[0];
  if (!pathPart) return null;

  // Skip non-file URIs
  if (/^[a-z][a-z0-9+.-]*:/i.test(pathPart)) return null;

  // Build a file:// base URI from the file's directory.
  // RFC 3986 §5 says relative references resolve against the base URI.
  // For a local file, the base URI is the file's directory with a trailing /.
  const dir = dirname(fileAbsPath).replace(/\\/g, '/');
  const baseUri = 'file:///' + dir.replace(/^\//, '') + '/';

  try {
    const resolved = new URL(pathPart, baseUri);
    // Convert back to a local filesystem path
    return decodeURIComponent(resolved.pathname).replace(/^\/([A-Z]:)/i, '$1');
  } catch {
    return null;
  }
}

// -- Step 3: File walking ------------------------------------------------

const skip = new Set(['.git', 'node_modules', '.archive']);

function walk(dir: string, files: string[]): void {
  for (const entry of readdirSync(dir)) {
    if (skip.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full, files);
    } else if (extname(full) === '.md') {
      files.push(full);
    }
  }
}

// -- Step 4: Run ---------------------------------------------------------

const files: string[] = [];
walk(scanRoot, files);

let checked = 0;
let broken = 0;
const problems: string[] = [];

for (const file of files) {
  const content = readFileSync(file, 'utf-8');
  const relFile = file.replace(scanRoot, '').replace(/\\/g, '/');

  for (const link of extractLinks(content)) {
    const resolved = resolveLink(link.destination, file);
    if (resolved === null) continue;
    checked++;

    if (!existsSync(resolved)) {
      broken++;
      const msg = `${relFile}:${link.line}  [${link.text}](${link.destination})  ->  ${resolved}`;
      problems.push(msg);
      if (problems.length <= 80) console.log('BROKEN  ' + msg);
    } else if (verbose) {
      console.log('OK      ' + relFile + '  ' + link.destination);
    }
  }
}

if (problems.length > 80) {
  console.log(`\n... and ${problems.length - 80} more`);
}

console.log('\n--- Link Check ---');
console.log(`Files scanned:  ${files.length}`);
console.log(`Links checked:  ${checked}`);
console.log(`Broken:         ${broken}`);

if (broken > 0) process.exit(1);
