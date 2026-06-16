// Test reading the app while VISIBLE (not minimized).
// The app must be maximized for reliable UIA reads.
// Minimize only when done, not between operations.

import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  console.log('App maximized.');

  // Wait for the UIA tree to be ready
  await app.auto.gateway.waitFor(async () => {
    const url = await app.auto.uia.readUrl();
    return url !== null;
  }, { timeoutMs: 5_000 });

  // Detect screen
  const screen = await app.navigator.detectScreen();
  console.log('Screen:', screen);
  console.log('URL:', await app.auto.uia.readUrl());

  // Refresh sidebar
  await app.sidebar.refresh();
  const chats = app.sidebar.chats.items;
  console.log(`Sidebar: ${chats.length} chats`);
  for (const c of chats.slice(0, 5)) {
    console.log(`  - ${c.title}`);
  }

  // Open the first chat and read
  if (chats.length > 0) {
    console.log(`\nOpening: ${chats[0].title}`);
    await app.openChatAt(0);

    const convScreen = await app.navigator.detectScreen();
    console.log('Screen after open:', convScreen);

    // Try reading with readText
    const raw = await app.auto.uia.readText();
    console.log(`Raw text length: ${raw?.length ?? 'null'}`);
    if (raw) console.log(`First 300 chars: ${raw.slice(0, 300)}`);

    // Try reading with readLastResponse
    try {
      const last = await app.conversation.readLastResponse();
      console.log(`Last response length: ${last?.length ?? 'null'}`);
      if (last) console.log(`Last response preview: ${last.slice(0, 200)}`);
    } catch (e: any) {
      console.log(`readLastResponse failed: ${e.message}`);
    }

    // Try reading turns
    try {
      const turns = await app.conversation.readTurns();
      console.log(`Turns: ${turns.length}`);
      if (turns.length > 0) {
        const last = turns[turns.length - 1];
        console.log(`Last turn prompt: ${last.prompt.content.text.slice(0, 100)}`);
        console.log(`Last turn response: ${last.response?.content.text.slice(0, 100) ?? 'null'}`);
      }
    } catch (e: any) {
      console.log(`readTurns failed: ${e.message}`);
    }
  }

  // Reset and minimize
  await app.resetToHome();
  app.window.minimize();
  console.log('\nMinimized. Done.');
}

main().catch(e => {
  console.error('FAILED:', e.message);
  try { app.window.minimize(); } catch {}
});
