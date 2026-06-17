import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();
    await app.sidebar.refresh();

    const item = app.sidebar.chats.find('Financial Analysis');
    if (!item) {
      console.log('Not found');
      return;
    }

    console.log('Opening:', item.title);
    await app.openChat(item.title);

    const project = await app.conversation.readProjectName();
    console.log('Project:', project);
    console.log('In Claude:', project === 'Claude' ? 'YES' : 'NO');
  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { app.window.minimize(); } catch {}
});
