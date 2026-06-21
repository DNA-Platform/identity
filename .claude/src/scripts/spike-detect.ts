// Spike diagnostic (disposable): why does detectScreen() return 'unknown'?
// Looks at what the app actually exposes — readUrl() and a slice of the tree.
// Closes the persistent shell in finally (no leak); does NOT close the app.

import { Claude } from '../claude.ts';

const claude = new Claude();
try {
  await claude.launch();

  const url = await claude.auto.uia.readUrl();
  console.log('readUrl():', JSON.stringify(url));

  const screen = await claude.detectScreen();
  console.log('detectScreen():', screen);

  const names = await claude.auto.uia.allNames();
  console.log('allNames count:', names.length);
  console.log('--- ALL names ---');
  for (const n of names) console.log('  ', n);

  console.log('Done.');
} finally {
  // Return Doug's computer: minimize when done, THEN close the shell.
  try { claude.window.minimize(); } catch {}
  claude.auto.shell.close();
}
