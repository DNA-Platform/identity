///: Run the WHOLE suite with the live tests switched on.
///:
///: There is one suite, not two. `npm test` runs everything and the live tests skip
///: themselves; `npm run test:live` runs the same command with the app tests armed.
///: A separate integration command is how integration tests stop being run.
///:
///: This exists because setting an environment variable inline is not portable —
///: npm scripts go through `cmd.exe` on Windows, where `VAR=1 npm test` is not a
///: thing. Spawning with an explicit env works everywhere.
///:
///: Run: npm run test:live

import { spawnSync } from 'child_process';

const result = spawnSync(
  'npx', ['tsx', '--test', 'src/tests/**/*.test.ts'],
  { stdio: 'inherit', shell: true, env: { ...process.env, CLAUDE_DESKTOP_LIVE: '1' } },
);

process.exit(result.status ?? 1);
