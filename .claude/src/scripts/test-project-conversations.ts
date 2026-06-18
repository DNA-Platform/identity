import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();

    // Navigate to Claude project via buttons
    console.log('Clicking Projects...');
    await app.auto.uia.invokeByName('Projects');
    await new Promise(r => setTimeout(r, 2000));

    console.log('Clicking Claude...');
    await app.auto.uia.invokeLink('Claude');
    await new Promise(r => setTimeout(r, 2000));

    // Read sidebar with the new element-based reader
    await app.sidebar.refresh();
    console.log('Conversations in sidebar:');
    for (const item of app.sidebar.chats.items) {
      console.log(`  [${item.index}] ${item.title}`);
    }
    console.log(`Total: ${app.sidebar.chats.items.length}`);

    // Find Test
    const test = app.sidebar.chats.find('Test');
    if (test) {
      console.log(`\nFound "Test" at index ${test.index}`);
      console.log('Opening Test...');
      await test.open();
      console.log('Opened. URL:', await app.auto.uia.readUrl());
    } else {
      console.log('\n"Test" not found in sidebar');
    }

  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { app.window.minimize(); } catch {}
});
