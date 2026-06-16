// Cross-check: compare captured project-conversation mapping against the export.
// For each project, how many captured titles match export conversation names?

import { readFileSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { ExportReader } from '../exports/reader.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..', '..', '..', '..');
const EXPORTS = resolve(ROOT, 'library', 'claude-legacy', '.exports');

// Find latest files
const mappingFile = readdirSync(EXPORTS)
  .filter(f => f.startsWith('project-mapping-') && f.endsWith('.json'))
  .sort().pop();
const zipFile = readdirSync(EXPORTS)
  .filter(f => f.startsWith('data-') && f.endsWith('.zip'))
  .sort().pop();

if (!mappingFile || !zipFile) {
  console.error('Missing mapping or ZIP file');
  process.exit(1);
}

console.log(`Mapping: ${mappingFile}`);
console.log(`ZIP: ${zipFile}`);

const mapping = JSON.parse(readFileSync(resolve(EXPORTS, mappingFile), 'utf-8'));
const reader = new ExportReader(resolve(EXPORTS, zipFile));
const exportConvs = reader.readConversations();

// Build a set of export conversation titles (lowercased for fuzzy matching)
const exportTitles = new Map<string, string>();
for (const c of exportConvs) {
  if (c.name) {
    exportTitles.set(c.name.toLowerCase(), c.name);
  }
}

console.log(`\nExport: ${exportConvs.length} conversations (${exportTitles.size} with titles)`);
console.log(`Mapping: ${mapping.projects.length} projects\n`);

let totalCaptured = 0;
let totalMatched = 0;
let totalUnmatched = 0;

for (const proj of mapping.projects) {
  const matched: string[] = [];
  const unmatched: string[] = [];

  for (const conv of proj.conversations) {
    totalCaptured++;
    const lower = conv.title.toLowerCase();
    if (exportTitles.has(lower)) {
      matched.push(conv.title);
      totalMatched++;
    } else {
      unmatched.push(conv.title);
      totalUnmatched++;
    }
  }

  const pct = proj.conversations.length > 0
    ? Math.round(matched.length / proj.conversations.length * 100)
    : 100;
  console.log(`${proj.name}: ${matched.length}/${proj.conversations.length} matched (${pct}%)`);

  if (unmatched.length > 0 && unmatched.length <= 5) {
    for (const u of unmatched) {
      console.log(`  UNMATCHED: "${u}"`);
    }
  } else if (unmatched.length > 5) {
    console.log(`  ${unmatched.length} unmatched (showing first 3):`);
    for (const u of unmatched.slice(0, 3)) {
      console.log(`  UNMATCHED: "${u}"`);
    }
  }
}

console.log(`\n=== TOTAL ===`);
console.log(`Captured: ${totalCaptured}`);
console.log(`Matched: ${totalMatched} (${Math.round(totalMatched/totalCaptured*100)}%)`);
console.log(`Unmatched: ${totalUnmatched}`);
