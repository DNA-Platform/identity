// TEST (one at a time) — THE READ HALF: run this AFTER test-send-stream.ts.
// Re-attach, wait for the (current) conversation's response to complete, read it,
// then minimize and end. Reading scrolls to bottom itself (lazy rendering).
//   Covers #12 (wait for completion) and #10 (read returns the message).

import { Claude } from '../claude.ts';

const sleep = (ms: number): Promise<void> => new Promise(r => setTimeout(r, ms));

const claude = new Claude();
let ok = false;
try {
  await claude.launch(); // attach + maximize (the conversation is the current screen)

  const r = claude.conversation.lastResponse;

  // #12 — wait for completion (scroll + no stop + content).
  const complete = await r.waitUntilComplete(300_000);
  console.log(complete ? '#12 PASS — completion detected' : '#12 FAIL — not complete in window');

  // #10 — read() returns the message.
  const text = await r.read();
  ok = text.length > 100;
  console.log(ok ? `#10 PASS — read() returned ${text.length} chars` : `#10 FAIL — read() returned ${text.length} chars`);

  const parts = await r.parts();
  console.log(`parts: ${parts.length} (${parts.map(p => p.type).join(', ')})`);
  console.log('--- response (first 400 chars) ---');
  console.log(text.slice(0, 400));
} finally {
  let minimized = false;
  for (let i = 0; i < 5 && !minimized; i++) {
    try {
      claude.window.minimize();
      await sleep(400);
      minimized = !claude.window.isForeground();
    } catch (e) {
      console.log('minimize attempt failed:', e instanceof Error ? e.message : e);
    }
  }
  console.log(minimized ? 'minimized OK' : 'WARNING: could not confirm minimize');
  claude.auto.shell.close();
}
console.log(ok ? 'DONE — read complete.' : 'DONE — read did not succeed.');
