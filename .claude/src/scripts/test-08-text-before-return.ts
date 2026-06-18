///: Test 08 — Verify actual text/thinking block appears before send returns.
///: Sends a message and manually checks which content element is present
///: immediately after sendAsync() returns. Logs the element name.
///:
///: [The App](../../library/reference-desk/12-the-app.md) — thinking block and response elements.
///: [Pitfalls](../../library/reference-desk/07-pitfalls.md) — content not indicators.

import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();
    await app.newChat();

    await app.compose('What are three prime numbers greater than 100? Just list them.');

    console.log('[test-08] Sending...');
    const t0 = Date.now();
    await app.sendAsync();
    const elapsed = Date.now() - t0;
    console.log(`[test-08] Send returned in ${elapsed}ms. Checking what was found...`);

    // Check which content elements are present RIGHT NOW
    await app.conversation.scrollToBottom();

    const hasThinkingButton = await app.auto.uia.exists('Button', 'Thinking');
    const hasResponseText = await app.conversation.hasResponseContent();
    const hasFinished = await app.auto.uia.existsByName('Claude finished the response');
    const hasStreaming = await app.conversation.checkStreaming();
    const hasStop = await app.conversation.hasStopButton();

    console.log(`[test-08] Content elements present after send:`);
    console.log(`  Button 'Thinking':          ${hasThinkingButton}`);
    console.log(`  'Claude responded:' text:   ${hasResponseText}`);
    console.log(`  'Claude finished' text:     ${hasFinished}`);
    console.log(`  Streaming indicator:        ${hasStreaming}`);
    console.log(`  Stop button:                ${hasStop}`);

    const hasContent = hasThinkingButton || hasResponseText || hasFinished;
    if (hasContent) {
      const what = hasThinkingButton ? "Button 'Thinking'" : hasResponseText ? "'Claude responded:' text" : "'Claude finished' text";
      console.log(`[test-08] PASS: Content element found before return: ${what}`);
    } else if (hasStreaming || hasStop) {
      console.log(`[test-08] FAIL: Only transient indicators found — no content element. Verify is checking the wrong thing.`);
    } else {
      console.log(`[test-08] FAIL: Nothing found — send returned without any verification.`);
    }
  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error(`[test-08] FAIL: ${(e as Error).message}`);
  try { app.window.minimize(); } catch {}
});
