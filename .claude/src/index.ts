// Entry point — npm run dev
// Launches Claude, reads sidebar, opens a conversation or sends a new message.

import { Claude } from './claude.ts';

const claude = new Claude();

try {
  await claude.launch();

  console.log(`Screen: ${claude.screen}`);
  console.log(`Sidebar visible: ${claude.sidebar.visible}`);
  console.log(`Recent chats (${claude.sidebar.chats.items.length}):`);
  for (const chat of claude.sidebar.chats.items.slice(0, 5)) {
    console.log(`  ${chat.index}: ${chat.title}`);
  }

  // Read the model
  await claude.home.model.refresh();
  console.log(`Model: ${claude.home.model.model} ${claude.home.model.thinking}`);

  // Open an existing chat and read it
  if (claude.sidebar.chats.items.length > 0) {
    const first = claude.sidebar.chats.items[0];
    console.log(`\nOpening "${first.title}"...`);

    await claude.openChat(first.title);
    console.log(`Screen: ${claude.screen}`);
    console.log(`Title: ${claude.conversation.title}`);
    console.log(`Project: ${claude.conversation.projectName ?? '(none)'}`);
    console.log(`Messages: ${claude.conversation.messages.length}`);

    // Go back home
    await claude.goHome();
  }

  console.log('\nDone.');
} catch (err: unknown) {
  console.error('Error:', err instanceof Error ? err.message : err);

  try {
    await claude.resetToHome();
    console.log(`Recovered. Screen: ${claude.screen}`);
  } catch {
    console.error('Recovery failed.');
  }

  process.exit(1);
}
