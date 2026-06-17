///: Test script — rename Finance → Financial Analysis, then add to Claude project.
///: Proves the Sprint 84 MVC object chain works end to end.
///:
///: [Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md) — the object chain.
///: [Writing Scripts](../../library/reference-desk/06-writing-scripts.md) — script conventions.

import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();

    // Phase 1: Find Financial in the sidebar
    console.log('[test] Phase 1: Find Financial');
    await app.sidebar.refresh();
    const item = app.sidebar.chats.find('Financial');
    if (!item) {
      console.log('[test] "Financial" not found. Available:');
      for (const i of app.sidebar.chats.items.slice(0, 8)) console.log('  ', i.title);
      return;
    }
    console.log('[test] Found:', item.title);

    // Phase 2: Rename via the object chain
    console.log('[test] Phase 2: Rename to Financial Analysis');
    const menu = await item.menu();
    console.log('[test] Menu open. Items:', menu.items.join(', '));
    await menu.rename('Financial Analysis');
    console.log('[test] Rename complete.');

    // Phase 3: Verify rename in sidebar
    console.log('[test] Phase 3: Verify rename');
    await app.sidebar.refresh();
    const renamed = app.sidebar.chats.find('Financial Analysis');
    if (!renamed) {
      console.log('[test] FAIL: "Financial Analysis" not found after rename. Available:');
      for (const i of app.sidebar.chats.items.slice(0, 8)) console.log('  ', i.title);
      return;
    }
    console.log('[test] Verified:', renamed.title);

    // Phase 4: Add to Claude project
    console.log('[test] Phase 4: Add to Claude project');
    const menu2 = await renamed.menu();
    console.log('[test] Menu open. Items:', menu2.items.join(', '));
    const picker = await menu2.addToProject();
    console.log('[test] Picker open. Projects:', picker.projects.slice(0, 5).join(', '));

    if (!picker.has('Claude')) {
      console.log('[test] FAIL: Claude project not in picker');
      await picker.cancel();
      return;
    }

    await picker.select('Claude');
    console.log('[test] Selected Claude. Dialog closed.');

    // Phase 5: Verify via breadcrumbs
    console.log('[test] Phase 5: Verify via breadcrumbs');
    await app.openChat(renamed.title);
    const project = await app.conversation.readProjectName();
    console.log('[test] Breadcrumb project:', project);

    if (project === 'Claude') {
      console.log('[test] SUCCESS: Financial Analysis is in the Claude project.');
    } else {
      console.log('[test] PARTIAL: Conversation opened but project breadcrumb is:', project);
    }

  } finally {
    try { await app.dismissDialogs(); } catch {}
    app.window.minimize();
  }
}

main().catch(e => {
  console.error('[test] FAILED:', (e as Error).message);
  try { app.dismissDialogs().then(() => app.window.minimize()).catch(() => app.window.minimize()); } catch {}
});
