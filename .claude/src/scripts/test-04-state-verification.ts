///: Test 04 — State verified before action.
///: Calls conversation methods when NOT on a conversation screen.
///: Should throw WrongScreenError, not silently fail.
///:
///: [The App](../../library/reference-desk/12-the-app.md) — screens enforce what's possible.
///: [Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md) — objects mirror the app.

import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();

    // Navigate to home screen — NOT a conversation
    await app.goHome();
    const screen = await app.detectScreen();
    console.log(`[test-04] Current screen: ${screen}`);

    // Try to read conversation title from home screen — should fail
    let caught = false;
    try {
      await app.conversation.readTitle();
      console.log(`[test-04] FAIL: readTitle() succeeded from ${screen} screen — no state verification`);
    } catch (e) {
      caught = true;
      const msg = (e as Error).message;
      const isScreenError = msg.includes('screen') || msg.includes('Screen') || msg.includes('Wrong');
      console.log(`[test-04] Threw: ${msg.slice(0, 100)}`);
      if (isScreenError) {
        console.log(`[test-04] PASS: readTitle() correctly rejected from ${screen} screen`);
      } else {
        console.log(`[test-04] WARN: Threw but not a screen error — may be a different failure: ${msg.slice(0, 80)}`);
      }
    }

    if (!caught) {
      console.log(`[test-04] FAIL: No error thrown when calling conversation method from wrong screen`);
    }
  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error(`[test-04] FAIL: ${(e as Error).message}`);
  try { app.window.minimize(); } catch {}
});
