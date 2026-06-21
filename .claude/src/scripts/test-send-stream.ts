// TEST (one at a time) — THE SEND HALF: send a message, wait for streaming to
// START (rapid gateway poll, scroll-to-bottom each check), then MINIMIZE and END.
// This returns Doug's computer the instant it starts generating. Read is a
// SEPARATE command (test-read.ts), run later.
//   Covers #1 (send returns control) and #8 (wait for real streaming).

import { Claude } from '../claude.ts';

const sleep = (ms: number): Promise<void> => new Promise(r => setTimeout(r, ms));

const LONG_QUESTION =
  'Research and explain, with careful reasoning, the strongest arguments for and against P = NP, the main proof barriers (relativization, natural proofs, algebrization), and what a resolution either way would mean for cryptography. Think it through, then give a thorough answer.';

const claude = new Claude();
let started = false;
try {
  await claude.launch();
  await claude.newChat();

  await claude.home.composer.type(LONG_QUESTION);
  await claude.auto.keyboard.sendKeys('{ENTER}');
  console.log('#1 PASS — send returned control (this printed after send)');

  // #8 — rapidly wait for streaming to START (gateway, scrolls each poll).
  started = await claude.conversation.lastResponse.waitUntilStreaming(30_000);
  console.log(started ? '#8 PASS — streaming started' : '#8 FAIL — streaming not detected');
} finally {
  // Minimize the INSTANT we're done — return Doug's computer, end the command.
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
console.log(started ? 'DONE — sent, streaming, minimized. Read it later.' : 'DONE — but streaming was not detected.');
