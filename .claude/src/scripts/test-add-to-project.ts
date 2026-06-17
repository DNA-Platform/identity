// Test the object chain: find item → menu → addToProject → select.
// Then verify via breadcrumbs.

import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();
    await app.sidebar.refresh();

    // Find the chat
    const item = app.sidebar.chats.find('Finance');
    if (!item) {
      console.log('[test] "Finance" not found. Available:');
      for (const i of app.sidebar.chats.items.slice(0, 5)) console.log('  ', i.title);
      return;
    }
    console.log('[test] Found:', item.title);

    // Open menu → get verified ChatMenu
    console.log('[test] Opening menu...');
    const menu = await item.menu();
    console.log('[test] Menu open. Items:', menu.items.join(', '));

    // Add to project → get verified ProjectPicker
    console.log('[test] Opening project picker...');
    const picker = await menu.addToProject();
    console.log('[test] Picker open. Projects:', picker.projects.slice(0, 5).join(', '));
    console.log('[test] Has Claude:', picker.has('Claude'));

    // Select Claude
    console.log('[test] Selecting Claude...');
    await picker.select('Claude');
    console.log('[test] Selected. Dialog closed.');

    // Verify via breadcrumbs
    console.log('[test] Verifying via breadcrumbs...');
    await app.openChat(item.title);
    const project = await app.conversation.readProjectName();
    console.log('[test] Breadcrumb project:', project);
    console.log('[test] In Claude:', project === 'Claude' ? 'YES' : 'NO');

  } finally {
    try { await app.dismissDialogs(); } catch {}
    app.window.minimize();
  }
}

main().catch(e => {
  console.error('[test] FAILED:', (e as Error).message);
  try { app.dismissDialogs().then(() => app.window.minimize()).catch(() => app.window.minimize()); } catch {}
});
