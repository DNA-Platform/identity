import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();

    console.log('Opening Claude project...');
    await app.openProject('Claude');
    console.log('On project page.');

    console.log('Refreshing sidebar...');
    await app.sidebar.refresh();

    console.log('Sidebar chats:');
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
