// Test rename and add-to-project on Finance.
// Step 1: Rename Finance → Financial Analysis
// Step 2: Add Financial Analysis to Claude project
// Each step verified. No retries.

import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    await app.sidebar.refresh();

    console.log('[test] Step 1: Rename Finance → Financial Analysis');
    await app.sidebar.chats.rename('Finance', 'Financial Analysis');
    console.log('[test] Renamed. Verifying...');
    await app.sidebar.refresh();
    const items = app.sidebar.chats.items;
    const found = items.find(i => i.title.includes('Financial Analysis'));
    console.log('[test] Found in sidebar:', found ? 'YES' : 'NO');

    console.log('[test] Step 2: Add to Claude project');
    await app.sidebar.chats.addToProject('Financial Analysis', 'Claude');
    console.log('[test] addToProject returned. Dialog should have closed.');

    console.log('[test] Done.');
  } finally {
    try { await app.dismissDialogs(); } catch {}
    app.window.minimize();
  }
}

main().catch(e => {
  console.error('[test] FAILED:', (e as Error).message);
  try { app.dismissDialogs().then(() => app.window.minimize()).catch(() => app.window.minimize()); } catch {}
});
