// Entry point — npm run dev
// Launches Claude and reports the current screen and sidebar conversations.

import { Claude } from './claude.ts';

const claude = new Claude();

try {
  const home = await claude.launch();

  console.log(`Screen: ${claude.screen}`);
  const conversations = await home.sidebar().conversations();
  console.log(`Recent conversations (${conversations.length}):`);
  for (const convo of conversations.slice(0, 5)) {
    console.log(`  ${convo.name}`);
  }

  console.log('\nDone.');
} catch (err: unknown) {
  console.error('Error:', err instanceof Error ? err.message : err);
  process.exit(1);
}
