// On Covers resource — the interim TOC tool.
//
// Inserts a new entry, overwrites an existing one (only with --force), or reads one back,
// in a cover's table of contents — reading only the cover and the chapter's own title line,
// never the whole book.
//
// It does NOT splice a line in place. It PARSES every TOC entry into a model, and on a
// change it REBUILDS the whole table of contents from that model. Before it writes, it
// ROUND-TRIPS: every parsed entry must serialize back to its exact source line. If even
// one does not, the tool does not faithfully understand this cover, so it REFUSES to
// write (no corruption) and tells you which lines to standardize. Because it round-trips,
// it knows the original — it reports what changed (was -> now), so a change can be undone,
// and a cover it cannot reproduce is rejected up front rather than quietly mangled.
//
// Because the model knows every current synopsis, an insert that lands on an existing entry
// is recognized as an OVERWRITE: it errors by default and requires --force, so a synopsis is
// never lost by accident.
//
// Spec: 03-on-covers.md
// Usage:
//   npx tsx 03-on-covers--toc.ts <cover.md> <NN-chapter.md> "synopsis"           insert a new entry (errors if one exists)
//   npx tsx 03-on-covers--toc.ts <cover.md> <NN-chapter.md> "synopsis" --force   overwrite an existing entry
//   npx tsx 03-on-covers--toc.ts <cover.md> --get <NN-chapter.md>                print one entry, to read/improve it
//   npx tsx 03-on-covers--toc.ts <cover.md> --check                              validate; list bare + non-round-trip

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';

// A TOC entry: "N. [link text](target) — synopsis", the synopsis optional.
const ENTRY = /^(\d+)\.\s+\[(.+?)\]\(([^)]+)\)(?:\s+—\s+(.*\S))?\s*$/;

type Entry = { line: number; num: number; text: string; target: string; synopsis: string };

function fail(msg: string): never { console.error(`ERROR: ${msg}`); process.exit(1); }

const argv = process.argv.slice(2);
const force = argv.includes('--force');   // allow overwriting an existing entry; the default refuses, to prevent info loss
const [coverArg, secondArg, synopsisArg] = argv.filter(a => a !== '--force');
if (!coverArg || !secondArg) {
  fail('Usage:\n  03-on-covers--toc.ts <cover.md> <NN-chapter.md> "synopsis"\n  03-on-covers--toc.ts <cover.md> --get <NN-chapter.md>\n  03-on-covers--toc.ts <cover.md> --check');
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

if (ruleIdx !== -1 && entryIdxs.length) {
  const hasParagraph = lines.slice(ruleIdx + 1, entryIdxs[0])
    .some(l => l.trim() && !ENTRY.test(l) && !/^#{1,6}\s/.test(l));
  if (!hasParagraph) problems.push('no opening paragraph between the rule and the TOC');
}

if (problems.length) {
  fail(`this cover is not standardized:\n  - ${problems.join('\n  - ')}\n` +
       `Standardize it against 03-on-covers.md before using the tool.`);
}

const entries: Entry[] = entryIdxs.map(i => {
  const m = lines[i].match(ENTRY)!;
  return { line: i, num: parseInt(m[1], 10), text: m[2], target: m[3], synopsis: m[4] ?? '' };
});

// One entry's canonical line. The tool round-trips against this: if serialize(e) does not
// equal the source line, the model cannot faithfully rebuild the cover.
const serialize = (e: Entry) =>
  e.synopsis ? `${e.num}. [${e.text}](${e.target}) — ${e.synopsis}`
             : `${e.num}. [${e.text}](${e.target})`;

const roundTripFailures = () => entries.filter(e => serialize(e) !== lines[e.line]);

// --- --check: validate, list bare entries, report round-trip safety ---
if (secondArg === '--check') {
  const bare = entries.filter(e => !e.synopsis.trim());
  const rt = roundTripFailures();
  console.log(`Cover OK: ${coverPath}`);
  console.log(`TOC entries: ${entries.length}, missing synopsis: ${bare.length}, non-round-trip: ${rt.length}`);
  for (const e of bare) console.log(`  BARE         ${e.num}. [${e.text}](${e.target})`);
  for (const e of rt)   console.log(`  NOROUNDTRIP  ${lines[e.line]}`);
  process.exit(bare.length || rt.length ? 1 : 0);
}

// --- --get: print one entry's current line, so it can be read and improved ---
if (secondArg === '--get') {
  const target = (synopsisArg ?? '').trim();
  if (!target) fail('Usage: 03-on-covers--toc.ts <cover.md> --get <NN-chapter.md>');
  const entry = entries.find(e => base(e.target) === base(target));
  if (!entry) { console.log(`No TOC entry for ${target} in ${coverPath}`); process.exit(1); }
  console.log(serialize(entry));
  process.exit(0);
}

// --- insert or update: round-trip first, then rebuild the whole TOC from the model ---
const chapterFile = secondArg;
const synopsis = (synopsisArg ?? '').trim();
if (!synopsis) fail('a synopsis is required to insert or update an entry');

// Know up front whether the tool can faithfully rebuild this cover. If any entry does not
// round-trip, refuse — do not risk corrupting the file.
const rt = roundTripFailures();
if (rt.length) {
  console.error(`ERROR: refusing to edit — ${rt.length} TOC entr${rt.length === 1 ? 'y does' : 'ies do'} not round-trip,`);
  console.error(`so the tool cannot rebuild this cover faithfully. Standardize to "N. [text](target) — synopsis" first:`);
  for (const e of rt) { console.error(`  source:  ${lines[e.line]}`); console.error(`  rebuild: ${serialize(e)}`); }
  process.exit(1);
}

const existing = entries.find(e => base(e.target) === base(chapterFile));

// An existing entry means this is an OVERWRITE. Refuse by default so a synopsis is never
// lost by accident — the model knows the current text, so it shows what would be lost and
// requires --force to proceed.
if (existing && !force) {
  console.error(`ERROR: an entry already exists for ${chapterFile}; editing it would overwrite and lose the current synopsis:`);
  console.error(`  ${serialize(existing)}`);
  console.error(`Read it with --get, improve it, then re-run with --force to overwrite deliberately.`);
  process.exit(1);
}

if (existing) {
  const was = serialize(existing);
  existing.synopsis = synopsis;            // change the model
  const now = serialize(existing);
  const out = lines.slice();
  for (const e of entries) out[e.line] = serialize(e);   // rebuild the WHOLE TOC from the model
  writeFileSync(coverPath, out.join(eol), 'utf-8');
  console.log(`EDITED (forced) in ${coverPath}`);
  console.log(`  was: ${was}`);
  console.log(`  now: ${now}`);
  process.exit(0);
}

// insert: link text from the chapter's own # title; number from the filename prefix
const m = base(chapterFile).match(/^(\d+)-/);
if (!m) fail(`chapter file "${chapterFile}" has no numeric prefix (NN-...); standardize the filename first`);
const num = parseInt(m[1], 10);
const chapterPath = resolve(dirname(coverPath), chapterFile);
if (!existsSync(chapterPath)) {
  fail(`chapter file not found: ${chapterPath}\n(a TOC entry without a chapter is a [SCAFFOLD] marker, which this tool does not write)`);
}
const titleLine = readFileSync(chapterPath, 'utf-8').split(/\r?\n/).find(l => /^#\s+\S/.test(l));
if (!titleLine) fail(`chapter "${chapterFile}" has no # title to use as link text`);
const text = titleLine.replace(/^#\s+/, '').trim();
const newEntry: Entry = { line: -1, num, text, target: chapterFile, synopsis };
const afterEntry = entries.find(e => e.num > num);          // numeric order
const insertAt = afterEntry ? afterEntry.line : entries[entries.length - 1].line + 1;
const newLine = serialize(newEntry);

const out = lines.slice();
for (const e of entries) out[e.line] = serialize(e);       // rebuild existing entries (verified no-op)
out.splice(insertAt, 0, newLine);                          // place the new line in order
writeFileSync(coverPath, out.join(eol), 'utf-8');
console.log(`INSERTED in ${coverPath}`);
console.log(`  ${newLine}`);
console.log(`  (to undo: remove that one line — every other entry is byte-identical)`);
