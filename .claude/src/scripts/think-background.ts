// Background think runner — called by the /think skill's background agent.
// Takes a question as the first CLI argument.
// Runs the full think lifecycle: launch, send, wait, read, write state.
// Does NOT conclude — leaves the state file for Claude to evaluate in the main loop.

import { thinkOnce, readState, minimizeOnFailure } from './think.ts';
import { Claude } from '../claude.ts';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const question = process.argv[2];
if (!question) {
  console.error('Usage: npx tsx think-background.ts "your question"');
  process.exit(1);
}

async function main() {
  console.log('[think-background] Question:', question.slice(0, 100) + '...');

  const result = await thinkOnce(new Claude(), question);

  console.log('[think-background] Response received:', result.response.length, 'chars');
  console.log('[think-background] Conversation:', result.state.title);
  console.log('[think-background] ID:', result.state.conversationId);

  // Save raw response for debugging
  const debugPath = resolve(__dirname, '..', 'debug', 'think-background-response.txt');
  writeFileSync(debugPath, result.response, 'utf-8');
  console.log('[think-background] Raw response saved to:', debugPath);
  console.log('[think-background] State file preserved for evaluation.');
  console.log('[think-background] Done.');
}

main().catch(e => {
  console.error('[think-background] FAILED:', (e as Error).message);
  minimizeOnFailure(new Claude());
  process.exit(1);
});
