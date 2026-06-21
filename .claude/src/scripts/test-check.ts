// TEST — THE CHECK/READ HALF, done right (think's checklist style): SHORT and
// non-blocking. Maximize, scroll, check completion for ~20s. If complete, read +
// minimize + report. If NOT, minimize + report "still generating" + END — so
// Claude does more work and runs this again later (#12 do-what-you-can + #14
// resume). Never blocks the window for minutes.

import { Claude } from '../claude.ts';

const sleep = (ms: number): Promise<void> => new Promise(r => setTimeout(r, ms));

const claude = new Claude();
try {
  await claude.launch(); // attach + maximize

  const r = claude.conversation.lastResponse;

  // SHORT check window — not five minutes.
  const complete = await r.waitUntilComplete(20_000);

  if (complete) {
    const text = await r.read();
    console.log(`#12 PASS — complete. #10 read() ${text.length} chars`);
    const parts = await r.parts();
    console.log(`parts: ${parts.length} (${parts.map(p => p.type).join(', ')})`);
    console.log('--- response (first 400 chars) ---');
    console.log(text.slice(0, 400));
  } else {
    console.log('STILL GENERATING — not complete within 20s. Minimizing; check again later.');
  }
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
