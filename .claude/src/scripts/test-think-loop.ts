// Sprint 78 — Test the full write/read loop in a single turn.
// Sends a question, waits, checks with scroll-to-bottom, reads when ready.

import { Claude } from '../claude.ts';
import { send, read, readState, deleteState, hasActiveThought, minimizeOnFailure } from './think.ts';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = resolve(__dirname, '..', 'debug');

const QUESTION = process.argv[2] || "Given that connectOverCDP requires the debugging port baked into the Electron app, is there any way to enable Chrome DevTools Protocol on an already-running Electron MSIX app without modifying its source? Can Windows debugger attachment, process injection, or environment variables enable CDP after launch? What about Electron's --inspect flag for the Node main process — does that survive MSIX activation?";

async function main() {
  const app = new Claude();

  console.log('=== Write/Read Loop Test ===\n');

  // Clean slate
  if (hasActiveThought()) {
    console.log('Clearing previous thought state...');
    deleteState();
  }

  // WRITE
  console.log('WRITE: Sending question...');
  console.log('  Q:', QUESTION.slice(0, 100) + '...');
  const state = await send(app, QUESTION);
  console.log('  Sent. Title:', state.title);
  console.log('  Minimized. Desktop is thinking.\n');

  // WAIT — poll with increasing intervals
  console.log('WAIT: Polling for response...');
  const pollIntervals = [10, 15, 20, 30, 30, 30, 45, 45, 60, 60];
  let attempt = 0;

  for (const waitSec of pollIntervals) {
    console.log(`  Waiting ${waitSec}s... (attempt ${attempt + 1})`);
    await new Promise(r => setTimeout(r, waitSec * 1000));

    const result = await read(app);

    if (result.ready) {
      console.log('\nREAD: Response received!');
      console.log('  Length:', result.response!.length, 'chars');
      console.log('  Preview:', result.response!.slice(0, 300));

      const path = resolve(OUTPUT_DIR, 'think-loop-response.txt');
      writeFileSync(path, result.response!, 'utf-8');
      console.log('  Saved to:', path);

      console.log('\n=== LOOP COMPLETE ===');
      return;
    }

    console.log('  Still streaming.');
    attempt++;
  }

  console.log('\nTIMEOUT: Response not ready after all poll attempts.');
  console.log('State:', JSON.stringify(readState(), null, 2));
}

main().catch(e => {
  console.error('\nFAILED:', (e as Error).message);
  minimizeOnFailure(new Claude());
});
