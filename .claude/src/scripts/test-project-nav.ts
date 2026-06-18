///: Test the project navigation object chain.
///: Projects grid → Claude card → project conversations → Test → open.
///:
///: [The App](../../library/reference-desk/12-the-app.md) — what we're navigating.

import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();

    // Navigate through the object chain
    console.log('[1] Opening project conversation: Claude → Test');
    await app.openProjectConversation('Claude', 'Test');

    console.log('[2] Arrived. Reading metadata...');
    console.log('    Title:', app.conversation.title);
    console.log('    Project:', app.conversation.projectName);
    console.log('    URL:', app.conversation.url);

    console.log('[3] Success.');
  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { app.window.minimize(); } catch {}
});
