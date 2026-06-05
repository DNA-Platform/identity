// Library validation runner — runs all validators from library root
// Usage: npx tsx .tooling/validate.ts (from inside .claude/library/)
// Run before syncing to the identity repo to ensure consistency
// See: teamspeak/06-the-identity-repo.md for the sync protocol

import { execSync } from 'child_process';
import { resolve, dirname } from 'path';

const libraryRoot = resolve(dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')), '..');

const claudeDir = resolve(libraryRoot, '..');

const validators = [
  { name: 'Bookkeeping', path: 'bookkeeping/bookkeeping.ts', arg: libraryRoot },
  { name: 'Subjects', path: 'subjects-and-catalogues/subjects-and-catalogues.ts', arg: libraryRoot },
  { name: 'Compiled Links', path: '..environmentalism/07-on-compiled-links.ts', arg: claudeDir },
];

let totalErrors = 0;
let totalWarnings = 0;

for (const v of validators) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Running: ${v.name} (${v.path})`);
  console.log('='.repeat(60));

  try {
    const output = execSync(
      `npx tsx "${resolve(libraryRoot, v.path)}" "${v.arg}"`,
      { encoding: 'utf-8', cwd: libraryRoot }
    );
    console.log(output);

    const errorMatch = output.match(/Errors: (\d+)/);
    const warnMatch = output.match(/Warnings: (\d+)/);
    if (errorMatch) totalErrors += parseInt(errorMatch[1]);
    if (warnMatch) totalWarnings += parseInt(warnMatch[1]);
  } catch (e: any) {
    console.error(e.stdout || e.message);
    totalErrors++;
  }
}

console.log(`\n${'='.repeat(60)}`);
console.log('LIBRARY VALIDATION SUMMARY');
console.log('='.repeat(60));
console.log(`Total errors:   ${totalErrors}`);
console.log(`Total warnings: ${totalWarnings}`);
console.log(`Status: ${totalErrors === 0 ? 'PASS' : 'FAIL'}`);

if (totalErrors > 0) process.exit(1);
