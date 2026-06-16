// Sprint 76 — Test the dispatch/collect pattern for /think.
// Step 1: dispatch (send question, minimize immediately)
// Step 2: collect (check if response ready, read if so)
// Run step 1 first, wait, then run step 2 separately.
//
// Usage:
//   npx tsx test-think-dispatch.ts send "your question"
//   npx tsx test-think-dispatch.ts check
//   npx tsx test-think-dispatch.ts read

import { Claude } from '../claude.ts';
import { send, read, readState, hasActiveThought, minimizeOnFailure } from './think.ts';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = resolve(__dirname, '..', 'debug');

const mode = process.argv[2];

async function main() {
  const app = new Claude();

  if (mode === 'send') {
    const question = process.argv[3];
    if (!question) {
      console.error('Usage: npx tsx test-think-dispatch.ts send "your question"');
      process.exit(1);
    }

    console.log('[dispatch] Sending question...');
    console.log('[dispatch] Question:', question.slice(0, 100) + (question.length > 100 ? '...' : ''));

    try {
      const state = await send(app, question);
      console.log('[dispatch] Sent and minimized.');
      console.log('[dispatch] Title:', state.title);
      console.log('[dispatch] URL:', state.url || '(pending)');
      console.log('[dispatch] State file written. Run "check" to see if response is ready.');
    } catch (e) {
      console.error('[dispatch] FAILED:', (e as Error).message);
      minimizeOnFailure(app);
    }

  } else if (mode === 'check') {
    if (!hasActiveThought()) {
      console.log('[check] No active thought. Send one first.');
      return;
    }

    console.log('[check] Checking for response...');
    try {
      const result = await read(app);
      if (result.ready) {
        console.log('[check] Response READY!');
        console.log('[check] Length:', result.response!.length, 'chars');
        console.log('[check] Preview:', result.response!.slice(0, 300));

        const responsePath = resolve(OUTPUT_DIR, 'think-dispatch-response.txt');
        writeFileSync(responsePath, result.response!, 'utf-8');
        console.log('[check] Saved to:', responsePath);
      } else {
        console.log('[check] Still streaming. Try again later.');
      }
    } catch (e) {
      console.error('[check] FAILED:', (e as Error).message);
      minimizeOnFailure(app);
    }

  } else if (mode === 'read') {
    if (!hasActiveThought()) {
      console.log('[read] No active thought.');
      return;
    }
    const state = readState();
    console.log('[read] Active thought:');
    console.log('  Title:', state?.title);
    console.log('  Question:', state?.question?.slice(0, 100));
    console.log('  Exchanges:', state?.exchanges?.length);
    console.log('  URL:', state?.url || '(pending)');
    console.log('  ID:', state?.conversationId || '(pending)');

  } else {
    console.log('Usage:');
    console.log('  npx tsx test-think-dispatch.ts send "question"  — dispatch a question');
    console.log('  npx tsx test-think-dispatch.ts check            — check if response ready');
    console.log('  npx tsx test-think-dispatch.ts read             — read current state');
  }
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { new Claude().window.minimize(); } catch {}
});
