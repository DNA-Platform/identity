///: Read pending thought responses by conversation title.
///: Opens each conversation from the sidebar, reads the last response, saves to debug.
///:
///: [Reference Desk](../../library/reference-desk/.cover.md) — the codebase documentation.

import { Claude } from '../claude.ts';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug');
if (!existsSync(DEBUG)) mkdirSync(DEBUG, { recursive: true });

const app = new Claude();

const pending = [
  { title: 'Binding problem', file: 'thought-10-binding-problem.txt' },
  { title: 'Category theory', file: 'thought-08-graph-databases.txt' },
  { title: 'link consistency', file: 'thought-09-link-consistency.txt' },
];

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();
    await app.sidebar.refresh();

    // Show what's in the sidebar
    console.log('Sidebar chats:');
    for (const item of app.sidebar.chats.items.slice(0, 10)) {
      console.log('  ', item.title);
    }

    // Try "Show all" to see more
    try {
      await app.sidebar.chats.showAll();
      console.log('\nAfter show all:');
      for (const item of app.sidebar.chats.items.slice(0, 20)) {
        console.log('  ', item.title);
      }
    } catch {
      console.log('(show all not available or failed)');
    }

    for (const conv of pending) {
      console.log(`\n--- Reading: ${conv.title} ---`);
      const item = app.sidebar.chats.find(conv.title);
      if (!item) {
        console.log(`  NOT FOUND in sidebar`);
        continue;
      }
      console.log(`  Found: "${item.title}"`);

      await app.openChat(item.title);

      // Check if response is complete
      await app.conversation.scrollToBottom();
      const complete = await app.conversation.isResponseComplete();
      console.log(`  Response complete: ${complete}`);

      if (complete) {
        const response = await app.conversation.readLastResponse();
        console.log(`  Response: ${response.length} chars`);
        console.log(`  Preview: ${response.slice(0, 150)}`);
        writeFileSync(resolve(DEBUG, conv.file), response, 'utf-8');
        console.log(`  Saved to: ${conv.file}`);
      } else {
        const streaming = await app.conversation.checkStreaming();
        const hasStop = await app.conversation.hasStopButton();
        console.log(`  Still processing: streaming=${streaming} stop=${hasStop}`);
      }
    }

    console.log('\n--- Done ---');
  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { app.window.minimize(); } catch {}
});
