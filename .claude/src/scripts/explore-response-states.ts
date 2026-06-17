// Explore the UIA tree during response generation.
// Sends a real question and captures the tree state repeatedly while Desktop processes.
// Saves each snapshot to debug/ for analysis.

import { Claude } from '../claude.ts';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug');
const app = new Claude();

async function snapshot(label: string): Promise<string[]> {
  const names = await app.auto.uia.allNames();
  writeFileSync(resolve(DEBUG, `uia-${label}.txt`), names.join('\n'), 'utf-8');
  return names;
}

function summarize(names: string[]): void {
  const indicators = names.filter(n => {
    const l = n.toLowerCase();
    return l.includes('send') || l.includes('scroll') || l.includes('respond') ||
           l.includes('thinking') || l.includes('streaming') || l.includes('stop') ||
           l.includes('retry') || l.includes('please wait') || l.includes('button') && l.includes('send');
  });
  for (const n of indicators) console.log(`  ${n}`);
}

async function main() {
  await app.launch();

  try {
    await app.newChat();
    await app.compose('What formal models from category theory apply to self-modifying software systems? I am interested in how endofunctors and fixed-point combinators relate to programs that rewrite their own source code or specifications.');

    console.log('[explore] Composed. Capturing pre-send state...');
    const preSend = await snapshot('00-pre-send');
    summarize(preSend);

    // Send without waiting
    await app.conversation.scrollToBottom();
    await app.conversation.composer.send();
    console.log('[explore] Sent. Capturing states...');

    // Capture many snapshots over 2 minutes
    for (let i = 1; i <= 120; i++) {
      await app.conversation.scrollToBottom();

      const streaming = await app.conversation.checkStreaming();
      const hasContent = await app.conversation.hasResponseContent();
      const atBottom = await app.conversation.isAtBottom();
      const canSend = await app.auto.uia.existsByName('Send')
        || await app.auto.uia.existsByName('Send message');

      const label = String(i).padStart(3, '0');
      console.log(`[${label}] stream=${streaming} content=${hasContent} bottom=${atBottom} canSend=${canSend}`);

      // Snapshot every 5th check and on state transitions
      if (i <= 5 || i % 5 === 0 || (!streaming && hasContent)) {
        const names = await snapshot(`${label}-poll`);
        summarize(names);
      }

      // Done condition: not streaming, has content, can send
      if (!streaming && hasContent && canSend) {
        console.log('[explore] Response complete.');
        await snapshot(`${label}-done`);
        break;
      }
    }

    await snapshot('final');
    console.log('[explore] Finished.');
  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { app.window.minimize(); } catch {};
});
