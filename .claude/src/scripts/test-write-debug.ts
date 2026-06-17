///: Debug test for the write phase — logs every step to prove what's happening.
///: [Reference Desk](../../library/reference-desk/.cover.md)

import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  console.log('[1] Launching...');
  await app.launch();
  console.log('[2] Launched. Foreground:', app.window.isForeground());

  console.log('[3] Opening new chat...');
  await app.newChat();
  console.log('[4] New chat open.');

  console.log('[5] Composing...');
  await app.compose('What is the CALM theorem in distributed systems? One paragraph.');
  console.log('[6] Composed. Reading draft back...');
  const draft = await app.conversation.composer.readDraft();
  console.log('[7] Draft:', draft?.slice(0, 80) ?? '(empty)');

  console.log('[8] Sending (sendAsync — returns immediately)...');
  await app.sendAsync();
  console.log('[9] sendAsync returned. Window visible:', app.window.isForeground());

  console.log('[10] Scrolling to bottom...');
  await app.conversation.scrollToBottom();
  console.log('[11] At bottom:', await app.conversation.controller.isAtBottom());

  console.log('[12] Checking streaming...');
  const streaming = await app.conversation.checkStreaming();
  console.log('[13] Streaming:', streaming);

  console.log('[14] Checking stop button...');
  const hasStop = await app.conversation.hasStopButton();
  console.log('[15] Stop button:', hasStop);

  console.log('[16] Checking response content...');
  const hasContent = await app.conversation.hasResponseContent();
  console.log('[17] Response content:', hasContent);

  if (!streaming && !hasStop && !hasContent) {
    console.log('[18] Nothing detected yet. Waiting 3 seconds...');
    await new Promise(r => setTimeout(r, 3000));

    console.log('[19] Scrolling to bottom again...');
    await app.conversation.scrollToBottom();

    console.log('[20] Re-checking...');
    const s2 = await app.conversation.checkStreaming();
    const st2 = await app.conversation.hasStopButton();
    const c2 = await app.conversation.hasResponseContent();
    console.log(`[21] streaming=${s2} stop=${st2} content=${c2}`);
  }

  // Now poll with gateway
  console.log('[22] Gateway polling for streaming or stop button (30s timeout)...');
  const started = await app.gateway.waitFor(async () => {
    await app.conversation.scrollToBottom();
    const s = await app.conversation.checkStreaming();
    const st = await app.conversation.hasStopButton();
    if (s || st) console.log(`[poll] streaming=${s} stop=${st}`);
    return s || st;
  }, { timeoutMs: 30_000 });
  console.log('[23] Started:', started);

  if (started) {
    const url = await app.auto.uia.readUrl() ?? '';
    const id = url.match(/\/chat\/([a-f0-9-]+)/)?.[1] ?? '';
    console.log('[24] Conversation ID:', id);
    console.log('[25] URL:', url);
  }

  console.log('[26] Minimizing...');
  app.window.minimize();
  console.log('[27] Done.');
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { app.window.minimize(); } catch {}
});
