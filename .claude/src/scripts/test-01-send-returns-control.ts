///: Test 01 — Send returns control after sending.
///: Sends a short message, verifies the next command executes.
///: Tests that composer.send()'s gateway.act verify resolves.
///:
///: [The App](../../library/reference-desk/12-the-app.md) — the conversation screen.
///: [The Gateway Pattern](../../library/reference-desk/02-02-the-architecture--gateway.md) — act once, verify.

import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();
    await app.newChat();

    console.log('[test-01] Composing...');
    await app.compose('What year was the Eiffel Tower completed? One word answer.');

    console.log('[test-01] Sending...');
    const t0 = Date.now();
    await app.sendAsync();
    const elapsed = Date.now() - t0;

    // If we reach here, send returned control
    console.log(`[test-01] Send returned in ${elapsed}ms`);

    // Verify we can execute a subsequent command
    const url = await app.auto.uia.readUrl() ?? '';
    const hasChat = url.includes('/chat/');
    console.log(`[test-01] URL after send: ${url.slice(0, 60)}...`);
    console.log(`[test-01] On conversation: ${hasChat}`);

    if (hasChat && elapsed > 0) {
      console.log(`[test-01] PASS: send returned control after ${elapsed}ms, subsequent command executed`);
    } else {
      console.log(`[test-01] FAIL: send returned but state is wrong (url has chat: ${hasChat})`);
    }
  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error(`[test-01] FAIL: ${(e as Error).message}`);
  try { app.window.minimize(); } catch {}
});
