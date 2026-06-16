// Test: S-4 — single-message session
// Start session, send one generic prompt, read response, end session.

import { Claude } from '../claude.ts';

const app = new Claude();
await app.launch();

process.on('unhandledRejection', (err) => {
  console.error('[FATAL]', err);
  app.window.minimize();
  process.exit(1);
});

console.log('\n=== S-4: Single-Message Session Test ===\n');

// Start session
console.log('[1] Starting session...');
const session = await app.startSession({ name: '[test] single-message' });
console.log(`    Session started. Screen: ${app.navigator.screen}`);

// Send message
console.log('[2] Sending message...');
const start = Date.now();
const response = await session.send('Respond with exactly one word: blue');
const elapsed = Date.now() - start;
console.log(`    Response received in ${elapsed}ms`);
console.log(`    Text: "${response.content.text}"`);
console.log(`    Turns: ${session.turnCount}`);
console.log(`    URL: ${session.url}`);
console.log(`    ID: ${session.id}`);

// Verify
const text = response.content.text.toLowerCase().trim();
const pass = text.includes('blue');
console.log(`    Contains "blue": ${pass}`);

// Read full turn structure
const turn = session.turns[0];
console.log(`    Prompt: "${turn.prompt.content.text}"`);
console.log(`    Response: "${turn.response?.content.text}"`);
if (turn.response?.thinking) {
  console.log(`    Thinking: ${turn.response.thinking.summary}`);
}

// End session
console.log('[3] Ending session...');
await session.end();
console.log('    Session ended. Conversation left for Doug.');

console.log(`\n=== RESULT: ${pass ? 'PASS' : 'FAIL'} ===\n`);
