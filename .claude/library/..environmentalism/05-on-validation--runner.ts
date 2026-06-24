// Library validation runner — the centralized type-check for the whole library.
//
// Runs every validator across .claude, CLAUDE.md, AND every branch library
// (library/*/.lib), then reports combined totals. A clean run is the end-of-work
// "good state" signal: all links resolve and all books are well-formed, everywhere.
// Errors and broken compiled links are blocking — fix them immediately, because
// compiled output mirrors the library and the drift travels.
//
// Usage: npx tsx ..environmentalism/05-on-validation--runner.ts   (from inside .claude/library/)
// See: teamspeak/07-travel.md (sync), .compilation/04-validators.md (the validator catalogue).

import { execSync } from 'child_process';
import { resolve, dirname } from 'path';
import { existsSync, readdirSync, statSync } from 'fs';
import { fileURLToPath } from 'url';

// fileURLToPath handles Windows drive letters of either case correctly; a hand-rolled
// regex that only stripped uppercase drives left an invalid /c:/... cwd and broke spawnSync.
const libraryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const claudeDir = resolve(libraryRoot, '..');
const projectRoot = resolve(claudeDir, '..');

const LINKS = '..environmentalism/05-on-validation--check-links.ts';
const BOOKKEEPING = 'bookkeeping/11-on-specifications--validator.ts';
const COMPILED_LINKS = '..environmentalism/07-on-compiled-links--validator.ts';

type Check = { name: string; path: string; arg: string; kind: 'errors' | 'compiled' | 'links' };

// Core: the identity library (all links + anatomy) and the compiled output.
const checks: Check[] = [
  { name: 'Links (identity library)', path: LINKS, arg: libraryRoot, kind: 'links' },
  { name: 'Bookkeeping (identity library)', path: BOOKKEEPING, arg: libraryRoot, kind: 'errors' },
  { name: 'Compiled Links (.claude, CLAUDE.md, agents, rules)', path: COMPILED_LINKS, arg: claudeDir, kind: 'compiled' },
];

// Branches: every library/*/.lib gets the same link + anatomy checks.
const projectLib = resolve(projectRoot, 'library');
if (existsSync(projectLib)) {
  for (const area of readdirSync(projectLib)) {
    const lib = resolve(projectLib, area, '.lib');
    try {
      if (statSync(lib).isDirectory()) {
        checks.push({ name: `Links (branch: ${area})`, path: LINKS, arg: lib, kind: 'links' });
        checks.push({ name: `Bookkeeping (branch: ${area})`, path: BOOKKEEPING, arg: lib, kind: 'errors' });
      }
    } catch { /* no .lib in this area */ }
  }
}

let anatomyErrors = 0;   // missing covers/titles/metadata — blocking
let compiledBroken = 0;  // a compiled file links to nothing — blocking
let libBroken = 0;       // library/branch link checker — includes intentional cross-repo links, so informational
let warnings = 0;

for (const c of checks) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Running: ${c.name}`);
  console.log('='.repeat(60));
  let out = '';
  let crashed = false;
  try {
    out = execSync(`npx tsx "${resolve(libraryRoot, c.path)}" "${c.arg}"`, { encoding: 'utf-8', cwd: libraryRoot });
  } catch (err: any) {
    // A nonzero exit is NORMAL — validators exit 1 when they find issues. Only treat it
    // as a crash if it produced no parseable summary; otherwise read the real counts from
    // its output, so a clean validator that exits nonzero is not miscounted as 1 error
    // (the phantom) and a failing one is not undercounted to 1.
    out = `${err.stdout || ''}${err.stderr || ''}`;
    if (!/Errors:|Broken:/.test(out)) { crashed = true; out = out || err.message; }
  }
  console.log(out);
  if (crashed) {
    console.error(`  (validator crashed — counted as 1 error)`);
    anatomyErrors++;
    continue;
  }
  const e = out.match(/Errors: (\d+)/); if (e) anatomyErrors += parseInt(e[1]);
  const w = out.match(/Warnings: (\d+)/); if (w) warnings += parseInt(w[1]);
  const b = out.match(/Broken: (\d+)/);
  if (b) { if (c.kind === 'compiled') compiledBroken += parseInt(b[1]); else libBroken += parseInt(b[1]); }
}

const blocking = anatomyErrors + compiledBroken;
console.log(`\n${'='.repeat(60)}`);
console.log('LIBRARY TYPE-CHECK SUMMARY  —  all links + all books, .claude and every branch');
console.log('='.repeat(60));
console.log(`Anatomy errors (missing covers/titles/metadata): ${anatomyErrors}`);
console.log(`Compiled links broken (.claude/CLAUDE.md/agents/rules): ${compiledBroken}`);
console.log(`Library/branch links broken (incl. intentional cross-repo): ${libBroken}`);
console.log(`Warnings: ${warnings}`);

if (blocking > 0) {
  console.log(`\nStatus: FAIL — ${blocking} blocking issue(s). FIX IMMEDIATELY.`);
  console.log(`Compiled output mirrors the library, so each is a chapter or a compiled link that must be`);
  console.log(`fixed NOW — before it compiles into the platform or travels to another repo. Do not push`);
  console.log(`or pull a state this type-check rejects.`);
  process.exit(1);
}
console.log(`\nStatus: PASS — anatomy clean and compiled links resolve, across .claude and every branch.`);
if (libBroken > 0) console.log(`Note: ${libBroken} library/branch link(s) did not resolve — review them; some are intentional cross-repo links that degrade to text, but real breaks here should be fixed now.`);
if (warnings > 0) console.log(`Note: ${warnings} warning(s) above — drift in a chapter; fix while you know what changed, not later.`);
