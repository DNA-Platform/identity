// Experiment: E-0, E-1, E-2 — background readability
// Can we read from a minimized Claude window?
//
// E-0: checkStreaming() while minimized
// E-1: readResponse() while minimized
// E-2: readTurns() while minimized

import { Claude } from '../claude.ts';

const app = new Claude();
const results: Record<string, { pass: boolean; detail: string }> = {};

process.on('unhandledRejection', (err) => {
  console.error('[FATAL]', err);
  app.window.minimize();
  process.exit(1);
});

console.log('\n=== Background Readability Experiment ===\n');
await app.launch();
await app.goHome();

// Clear any leftover text in composer
try { await app.conversation.composer.clear(); } catch { /* empty composer is fine */ }

console.log('[setup] On home screen, foreground verified');

// --- Phase 1: Send message and get response (foreground) ---

const prompt = 'Write a haiku about the color blue';
console.log(`[setup] Composing: "${prompt}"`);
await app.compose(prompt);
await app.conversation.composer.send();

const screen = await app.navigator.detectScreen();
console.log(`[setup] Screen: ${screen}`);
if (screen !== 'conversation') {
  console.log('[setup] ERROR: Not on conversation screen.');
  app.window.minimize();
  process.exit(1);
}

// Wait for response to complete (foreground)
console.log('[setup] Waiting for response (foreground)...');
await app.conversation.waitForResponse(60_000);
console.log('[setup] Response complete (foreground).');

// Read baseline response (foreground)
const baselineResponse = await app.conversation.readResponse();
const baselineTurns = await app.conversation.readTurns();
const baselineText = baselineResponse?.parts
  .filter(p => p.kind === 'text')
  .map(p => (p as { content: string }).content)
  .join(' ') ?? '';
console.log(`[baseline] Response: "${baselineText.slice(0, 200)}"`);
console.log(`[baseline] Turns: ${baselineTurns.length}`);

// --- MINIMIZE — Phase 2: read from background ---

console.log('\n[MINIMIZE] Window minimized. All reads from background.\n');
app.window.minimize();
await new Promise(r => setTimeout(r, 1000));

// --- E-0: checkStreaming() while minimized ---
// Response is already done, so streaming should be false.
// This confirms the Stop button check works from background.

console.log('--- E-0: checkStreaming() ---');
try {
  const streaming = await app.conversation.checkStreaming();
  console.log(`  checkStreaming() = ${streaming}`);
  results['E-0'] = {
    pass: streaming === false,
    detail: streaming === false
      ? 'Correctly detected no streaming from background'
      : 'Incorrectly reported streaming',
  };
} catch (err) {
  console.error('  ERROR:', err);
  results['E-0'] = { pass: false, detail: `Error: ${err}` };
}

// --- E-1: readResponse() while minimized ---

console.log('\n--- E-1: readResponse() ---');
try {
  const response = await app.conversation.readResponse();
  if (response) {
    const textParts = response.parts.filter(p => p.kind === 'text');
    const text = textParts.map(p => (p as { content: string }).content).join(' ');
    console.log(`  Got response: "${text.slice(0, 200)}"`);
    console.log(`  Parts: ${response.parts.length} (${response.parts.map(p => p.kind).join(', ')})`);
    const matches = text.length > 0 && baselineText.startsWith(text.slice(0, 20));
    results['E-1'] = {
      pass: text.length > 0,
      detail: `Response: "${text.slice(0, 100)}" (matches baseline: ${matches})`,
    };
  } else {
    console.log('  readResponse() returned null');
    results['E-1'] = { pass: false, detail: 'readResponse() returned null while minimized' };
  }
} catch (err) {
  console.error('  ERROR:', err);
  results['E-1'] = { pass: false, detail: `Error: ${err}` };
}

// --- E-2: readTurns() while minimized ---

console.log('\n--- E-2: readTurns() ---');
try {
  const turns = await app.conversation.readTurns();
  console.log(`  Got ${turns.length} turn(s)`);
  for (const t of turns) {
    console.log(`  Prompt: "${t.prompt.content.text.slice(0, 80)}"`);
    if (t.response) {
      console.log(`  Response: "${t.response.content.text.slice(0, 80)}"`);
      if (t.response.thinking) console.log(`  Thinking: ${t.response.thinking.summary}`);
    } else {
      console.log('  Response: (none)');
    }
  }
  const hasFullTurn = turns.length === 1
    && turns[0].prompt.content.text.length > 0
    && turns[0].response !== null
    && turns[0].response.content.text.length > 0;
  results['E-2'] = {
    pass: hasFullTurn,
    detail: hasFullTurn
      ? `1 turn: prompt ${turns[0].prompt.content.text.length} chars, response ${turns[0].response!.content.text.length} chars`
      : `Unexpected: ${turns.length} turns, structure incomplete`,
  };
} catch (err) {
  console.error('  ERROR:', err);
  results['E-2'] = { pass: false, detail: `Error: ${err}` };
}

// --- Bonus: E-0b — can we detect LIVE streaming from background? ---

console.log('\n--- E-0b: Live streaming detection from background ---');
console.log('  Restoring briefly to send second message...');
app.window.focus();
app.window.maximize();
await new Promise(r => setTimeout(r, 500));

await app.compose('Write a longer paragraph about the ocean');
await app.conversation.composer.send();
await app.navigator.detectScreen();

// Minimize immediately and check streaming
app.window.minimize();
console.log('  Minimized. Checking streaming...');
await new Promise(r => setTimeout(r, 500));

try {
  let sawStreaming = false;
  let pollCount = 0;
  const maxPolls = 60;

  while (pollCount < maxPolls) {
    const streaming = await app.conversation.checkStreaming();
    if (streaming) {
      if (!sawStreaming) console.log(`  Streaming detected at poll ${pollCount}!`);
      sawStreaming = true;
    } else if (sawStreaming) {
      console.log(`  Streaming ended at poll ${pollCount}`);
      break;
    }
    pollCount++;
    await new Promise(r => setTimeout(r, 500));
  }

  results['E-0b'] = {
    pass: sawStreaming,
    detail: sawStreaming
      ? `Detected live streaming from background over ${pollCount} polls`
      : 'Never detected streaming from background',
  };
} catch (err) {
  console.error('  ERROR:', err);
  results['E-0b'] = { pass: false, detail: `Error: ${err}` };
}

// --- Results ---

console.log('\n=== RESULTS ===\n');
for (const [key, val] of Object.entries(results)) {
  const icon = val.pass ? 'PASS' : 'FAIL';
  console.log(`  ${key}: ${icon} — ${val.detail}`);
}

const allPass = Object.values(results).every(r => r.pass);
console.log(`\n  Overall: ${allPass ? 'ALL PASS — background reads work!' : 'SOME FAILED'}\n`);

// --- Cleanup ---

console.log('[cleanup] Restoring to rename conversation...');
app.window.focus();
app.window.maximize();
await new Promise(r => setTimeout(r, 500));

// Wait for any remaining streaming
const stillStreaming = await app.conversation.checkStreaming();
if (stillStreaming) {
  console.log('[cleanup] Waiting for streaming to finish...');
  await app.conversation.waitForResponse(60_000);
}

try {
  await app.conversation.rename('[test] background-readability');
  console.log('[cleanup] Renamed to "[test] background-readability"');
} catch (err) {
  console.log(`[cleanup] Rename failed: ${(err as Error).message.slice(0, 100)}`);
}

await app.goHome();
app.window.minimize();
console.log('[cleanup] Done. Conversation left for Doug to review.');
