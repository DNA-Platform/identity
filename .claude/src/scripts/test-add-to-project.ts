// Test addToProject: Finance → Claude project.
// Read the sidebar first. Confirm what we see. Then act.

import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();
    await app.sidebar.refresh();

    // Read back: what's in the sidebar?
    const items = app.sidebar.chats.items;
    console.log('[test] Sidebar has', items.length, 'chats');
    console.log('[test] First 5:');
    for (const item of items.slice(0, 5)) {
      console.log('  ', item.title);
    }

    // Find Finance
    const finance = items.find(i => i.title.includes('Financ'));
    if (!finance) {
      console.log('[test] "Finance" not found in sidebar. Available titles listed above.');
      return;
    }
    console.log('[test] Found:', finance.title);

    // Now add to project using the exact title
    console.log('[test] Adding to Claude project...');
    await app.sidebar.chats.addToProject(finance.title, 'Claude');
    console.log('[test] addToProject returned.');

    // Verify via breadcrumbs
    console.log('[test] Verifying...');
    await app.openChat(finance.title);
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
