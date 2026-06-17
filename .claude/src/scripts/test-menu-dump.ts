import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();
    await app.sidebar.refresh();

    const item = app.sidebar.chats.find('Financial Analysis');
    if (!item) {
      console.log('Not found. Available:');
      for (const i of app.sidebar.chats.items.slice(0, 5)) console.log('  ', i.title);
      return;
    }

    console.log('Found:', item.title);
    console.log('Expanding menu...');
    await app.auto.uia.expandByName(`More options for ${item.title}`);

    // Wait a moment for the menu to render
    await new Promise(r => setTimeout(r, 500));

    // Dump all UIA names
    const names = await app.auto.uia.allNames();
    console.log('\n--- UIA Tree (filtered for menu area) ---');
    for (const n of names) {
      if (n.includes('MenuItem') || n.includes('Menu') || n.includes('Pin')
        || n.includes('Rename') || n.includes('Delete') || n.includes('Project')
        || n.includes('Share') || n.includes('Add') || n.includes('Move')) {
        console.log(n);
      }
    }

    // Close menu
    await app.auto.keyboard.sendKeys('{ESCAPE}');
  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { app.window.minimize(); } catch {}
});
