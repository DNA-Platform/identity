///: Run the suite with the live tests switched on — all of it, or one tier.
///:
///:   npm run test:live          every test
///:   npm run test:live 3        tier 3 only (walking)
///:   npm run test:live 3 5      tiers 3 and 5
///:   npm run test:live search   anything whose name contains "search"
///:
///: There is one suite, not two, and the whole catalogue is always THERE — that is
///: what catches a break six months from now. But running all of it every time is
///: too much, so a tier is selectable. Live tests are numbered `<tier>.<n>` in their
///: names for exactly this reason.
///:
///: **The window is shown once and hidden once**, for the whole run, however many
///: tests are in it. Individual failures do not minimize mid-suite — that made the
///: app blink open and shut between tests.
///:
///: This file exists because setting an environment variable inline is not portable:
///: npm scripts go through `cmd.exe` on Windows, where `VAR=1 npm test` is not a
///: thing. Spawning with an explicit env works everywhere.

import { spawnSync } from 'child_process';

const args = process.argv.slice(2);

/** A bare number selects a tier; anything else is matched as text. Node's
 *  `--test-name-pattern` is a regex over the test NAME, and the live tests are
 *  named `1.1 …`, `3.6 …` so a tier is a clean anchor. */
const pattern = args.length === 0
  ? undefined
  : args.map(a => (/^\d+$/.test(a) ? `^${a}\\.` : a)).join('|');

if (pattern) console.log(`\n  Running only:  ${pattern}\n`);

const result = spawnSync(
  'npx',
  ['tsx', '--test', ...(pattern ? ['--test-name-pattern', pattern] : []), 'src/tests/**/*.test.ts'],
  { stdio: 'inherit', shell: true, env: { ...process.env, CLAUDE_DESKTOP_LIVE: '1' } },
);

process.exit(result.status ?? 1);
