// On Covers resource — the interim TOC tool.
//
// Inserts or updates ONE chapter entry in a cover's table of contents, reading only
// the cover and the chapter's own title line — never the whole book. It validates the
// cover's structure first and REFUSES a non-standard cover, so we standardize covers
// instead of teaching the tool to guess. The real convention (the synopsis written in
// the chapter, the whole TOC assembled from the chapters) is deferred; this is the
// interim tool Arthur uses to close a sprint and everyone uses to file a thought.
//
// Spec: 03-on-covers.md  (cover anatomy; the synopsis layers; "a chapter without a
//       TOC entry is invisible").
// Usage:
//   npx tsx 03-on-covers--toc.ts <cover.md> <NN-chapter.md> "synopsis text"   insert or update an entry
//   npx tsx 03-on-covers--toc.ts <cover.md> --check                            validate + list bare entries

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';

// A TOC entry: "N. [link text](target.md) — synopsis", the synopsis optional (a bare
// entry is the thing we are hunting). The em-dash is the canonical separator.
const ENTRY = /^(\d+)\.\s+\[(.+?)\]\(([^)]+)\)(?:\s+—\s+(.*\S))?\s*$/;

function fail(msg: string): never {
  console.error(`ERROR: ${msg}`);
  process.exit(1);
}

const [coverArg, secondArg, synopsisArg] = process.argv.slice(2);
if (!coverArg || !secondArg) {
  fail('Usage:\n  03-on-covers--toc.ts <cover.md> <NN-chapter.md> "synopsis"\n  03-on-covers--toc.ts <cover.md> --check');
}

const coverPath = resolve(coverArg);
if (!existsSync(coverPath)) fail(`cover not found: ${coverPath}`);

const raw = readFileSync(coverPath, 'utf-8');
const eol = raw.includes('\r\n') ? '\r\n' : '\n';
const lines = raw.split(/\r?\n/);
const base = (p: string) => p.split('/').pop()!.split('\\').pop()!;

// --- validate the cover's structure (03-on-covers.md) ---
const problems: string[] = [];
const titleIdx = lines.findIndex(l => /^#\s+\S/.test(l));
if (titleIdx === -1) problems.push('no title heading (# Title)');
if (!lines.some(l => /^-\s+\*\*author:\*\*/.test(l))) problems.push('no author field (- **author:** ...)');
const ruleIdx = lines.findIndex((l, i) => i > titleIdx && /^---\s*$/.test(l));
if (ruleIdx === -1) problems.push('no --- separator after the fields');

const entryIdxs: number[] = [];
lines.forEach((l, i) => { if (ENTRY.test(l)) entryIdxs.push(i); });
if (entryIdxs.length === 0) problems.push('no table of contents (numbered chapter links)');

// the opening paragraph IS the synopsis: prose between the rule and the first TOC entry
if (ruleIdx !== -1 && entryIdxs.length) {
  const hasParagraph = lines.slice(ruleIdx + 1, entryIdxs[0])
    .some(l => l.trim() && !ENTRY.test(l) && !/^#{1,6}\s/.test(l));
  if (!hasParagraph) problems.push('no opening paragraph between the rule and the TOC');
}

if (problems.length) {
  fail(`this cover is not standardized:\n  - ${problems.join('\n  - ')}\n` +
       `Standardize it against 03-on-covers.md before using the tool.`);
}

const entries = entryIdxs.map(i => {
  const m = lines[i].match(ENTRY)!;
  return { line: i, num: parseInt(m[1], 10), text: m[2], target: m[3], synopsis: m[4] ?? '' };
});

// --- --check: validate + list bare entries (exit 1 if any are bare) ---
if (secondArg === '--check') {
  const bare = entries.filter(e => !e.synopsis.trim());
  console.log(`Cover OK: ${coverPath}`);
  console.log(`TOC entries: ${entries.length}, missing synopsis: ${bare.length}`);
  for (const e of bare) console.log(`  BARE  ${e.num}. [${e.text}](${e.target})`);
  process.exit(bare.length ? 1 : 0);
}

// --- insert or update an entry ---
const chapterFile = secondArg;
const synopsis = (synopsisArg ?? '').trim();
if (!synopsis) fail('a synopsis is required to insert or update an entry');

const existing = entries.find(e => base(e.target) === base(chapterFile));
let newLine: string;

if (existing) {
  // preserve the existing number, link text, and target; set only the synopsis
  newLine = `${existing.num}. [${existing.text}](${existing.target}) — ${synopsis}`;
  lines[existing.line] = newLine;
} else {
  const m = base(chapterFile).match(/^(\d+)-/);
  if (!m) fail(`chapter file "${chapterFile}" has no numeric prefix (NN-...); standardize the filename first`);
  const num = parseInt(m[1], 10);
  // link text = the chapter's own # title — read only that one file's heading line
  const chapterPath = resolve(dirname(coverPath), chapterFile);
  if (!existsSync(chapterPath)) {
    fail(`chapter file not found: ${chapterPath}\n(a TOC entry without a chapter is a [SCAFFOLD] marker, which this tool does not write)`);
  }
  const titleLine = readFileSync(chapterPath, 'utf-8').split(/\r?\n/).find(l => /^#\s+\S/.test(l));
  if (!titleLine) fail(`chapter "${chapterFile}" has no # title to use as link text`);
  const text = titleLine.replace(/^#\s+/, '').trim();
  newLine = `${num}. [${text}](${chapterFile}) — ${synopsis}`;
  // insert before the first entry with a higher number; otherwise after the last entry
  const after = entries.find(e => e.num > num);
  const insertAt = after ? after.line : entries[entries.length - 1].line + 1;
  lines.splice(insertAt, 0, newLine);
}

writeFileSync(coverPath, lines.join(eol), 'utf-8');
console.log(`${existing ? 'UPDATED' : 'INSERTED'} in ${coverPath}:`);
console.log(`  ${newLine}`);
