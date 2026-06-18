///: Test 02 — Verify sending works for long responses with extended thinking.
///: Sends a research question, logs what the verify found and when.
///: Must find the thinking block Button element — not a transient indicator.
///:
///: [The App](../../library/reference-desk/12-the-app.md) — thinking block element.
///: [Pitfalls](../../library/reference-desk/07-pitfalls.md) — content not indicators.

import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();

    // Navigate to Claude project → Test conversation
    console.log('[test-02] Navigating to Claude → Test...');
    await app.openProjectConversation('Claude', 'Test');
    console.log('[test-02] On Test conversation.');

    await app.compose('What were the major arguments for and against the Treaty of Versailles? Discuss the perspectives of at least three different nations involved.');

    console.log('[test-02] Sending research question...');
    const t0 = Date.now();
    await app.sendAsync();
    const elapsed = Date.now() - t0;
    console.log(`[test-02] Send returned in ${elapsed}ms.`);

    // Check what's present immediately after
    await app.conversation.scrollToBottom();

    const hasThinkingButton = await app.auto.uia.exists('Button', 'Thinking');
    const hasResponseText = await app.conversation.hasResponseContent();
    const hasFinished = await app.auto.uia.existsByName('Claude finished the response');
    const hasStreaming = await app.conversation.checkStreaming();
    const hasStop = await app.conversation.hasStopButton();

    console.log(`[test-02] Elements after send (${elapsed}ms):`);
    console.log(`  Button 'Thinking':          ${hasThinkingButton}`);
    console.log(`  'Claude responded:' text:   ${hasResponseText}`);
    console.log(`  'Claude finished' text:     ${hasFinished}`);
    console.log(`  Streaming indicator:        ${hasStreaming}`);
    console.log(`  Stop button:                ${hasStop}`);

    const hasContent = hasThinkingButton || hasResponseText || hasFinished;
    if (hasContent) {
      const what = hasThinkingButton ? "Button 'Thinking'" : hasResponseText ? "'Claude responded:'" : "'Claude finished'";
      console.log(`[test-02] PASS: Content element found on long response: ${what} (${elapsed}ms)`);
    } else {
      console.log(`[test-02] FAIL: No content element found for long response.`);
      // Dump UIA for debugging (requirement 13)
      const names = await app.auto.uia.allNames();
      console.log(`[test-02] UIA elements (${names.length}):`);
      for (const n of names.slice(-30)) console.log(`  ${n}`);
    }
  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error(`[test-02] FAIL: ${(e as Error).message}`);
  try { app.window.minimize(); } catch {}
});
