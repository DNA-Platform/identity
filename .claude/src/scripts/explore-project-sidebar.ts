import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();

    // Click Projects in sidebar
    console.log('Clicking Projects...');
    await app.auto.uia.invokeByName('Projects');
    await new Promise(r => setTimeout(r, 2000));

    // Click Claude project
    console.log('Clicking Claude...');
    await app.auto.uia.invokeLink('Claude');
    await new Promise(r => setTimeout(r, 2000));

    // Read the sidebar — it should show project conversations
    await app.sidebar.refresh();
    console.log('Sidebar conversations:');
    for (const item of app.sidebar.chats.items) {
      console.log(' ', item.title);
    }
    console.log('Total:', app.sidebar.chats.items.length);

  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { app.window.minimize(); } catch {}
});
