// Sprint 65: Integration test for ComposedMessage.
// Exercises the full API: write, read, paste text, paste image, remove, clear, send.
// Every operation reads from the tree — no privileged state.
// Uses gateway verification (foreground check before every action).

import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEST_IMAGE = resolve(__dirname, 'test-image.png');

const app = new Claude();

type State = { text: string; attachments: { name: string; kind: string }[]; canSend: boolean; isEmpty: boolean };

let passed = 0;
let failed = 0;

function assert(label: string, condition: boolean, detail = '') {
  if (condition) {
    console.log(`  PASS: ${label}`);
    passed++;
  } else {
    console.log(`  FAIL: ${label}${detail ? ' — ' + detail : ''}`);
    failed++;
  }
}

function printState(label: string, state: State) {
  console.log(`\n  [${label}]`);
  console.log(`    text: "${state.text.replace(/\n/g, '\\n')}"`);
  console.log(`    attachments: ${state.attachments.length > 0 ? state.attachments.map(a => `${a.kind}:${a.name}`).join(', ') : 'none'}`);
  console.log(`    canSend: ${state.canSend}  isEmpty: ${state.isEmpty}`);
}

async function main() {
  await app.launch();
  app.window.maximize();
  app.window.requireForeground();

  console.log('[test] Opening DNA Patternity...');
  await app.openProject('DNA Patternity');
  await new Promise(r => setTimeout(r, 1500));
  console.log(`[test] Screen: ${await app.detectScreen()}`);

  // --- T1: Empty state ---
  console.log('\n--- T1: Empty state ---');
  const t1 = await app.message.clear();
  printState('empty', t1);
  assert('text is empty', t1.text === '');
  assert('no attachments', t1.attachments.length === 0);
  assert('canSend is false', t1.canSend === false);
  assert('isEmpty is true', t1.isEmpty === true);

  // --- T2: Write single line ---
  console.log('\n--- T2: Write single line ---');
  const t2 = await app.message.write('Hello Claude.');
  printState('single line', t2);
  assert('text matches', t2.text === 'Hello Claude.');
  assert('canSend is true', t2.canSend === true);
  assert('isEmpty is false', t2.isEmpty === false);

  // --- T3: Read back matches ---
  console.log('\n--- T3: Read back ---');
  const t3 = await app.message.read();
  assert('read matches write', t3.text === t2.text);

  // --- T4: Clear and verify ---
  console.log('\n--- T4: Clear ---');
  const t4 = await app.message.clear();
  assert('cleared isEmpty', t4.isEmpty === true);

  // --- T5: Write multi-line (Shift+Enter) ---
  console.log('\n--- T5: Multi-line write ---');
  const t5 = await app.message.write('First line.\nSecond line.\nThird line.');
  printState('multi-line', t5);
  assert('text has newlines', t5.text.includes('\n'));
  assert('three lines', t5.text.split('\n').length === 3);
  assert('first line correct', t5.text.startsWith('First line.'));

  // --- T6: Paste text (becomes attachment for large content) ---
  console.log('\n--- T6: Paste text attachment ---');
  const bigCode = Array.from({ length: 120 }, (_, i) =>
    `export function handler${i}(req: Request): Response {`
  ).join('\n');
  const t6 = await app.message.paste(bigCode);
  printState('after paste', t6);
  assert('text preserved', t6.text.includes('First line.'));
  assert('has pasted attachment', t6.attachments.some(a => a.kind === 'pasted'));

  // --- T7: Paste image ---
  console.log('\n--- T7: Paste image ---');
  const t7 = await app.message.pasteImageFile(TEST_IMAGE);
  printState('after image', t7);
  assert('has image attachment', t7.attachments.some(a => a.kind === 'image'));
  assert('still has pasted attachment', t7.attachments.some(a => a.kind === 'pasted'));
  assert('text still preserved', t7.text.includes('First line.'));

  // --- T8: Remove pasted attachment ---
  console.log('\n--- T8: Remove pasted attachment ---');
  const pastedAtt = t7.attachments.find(a => a.kind === 'pasted');
  if (pastedAtt) {
    const t8 = await app.message.removeAttachment(pastedAtt.name);
    printState('after remove pasted', t8);
    assert('pasted removed', !t8.attachments.some(a => a.kind === 'pasted'));
    assert('image still there', t8.attachments.some(a => a.kind === 'image'));
  } else {
    assert('pasted attachment found', false, 'no pasted attachment to remove');
  }

  // --- T9: Remove image attachment ---
  console.log('\n--- T9: Remove image attachment ---');
  const currentState = await app.message.read();
  const imageAtt = currentState.attachments.find(a => a.kind === 'image');
  if (imageAtt) {
    const t9 = await app.message.removeAttachment(imageAtt.name);
    printState('after remove image', t9);
    assert('image removed', !t9.attachments.some(a => a.kind === 'image'));
    assert('text still there', t9.text.includes('First line.'));
  } else {
    assert('image attachment found', false, 'no image attachment to remove');
  }

  // --- T10: Final clear ---
  console.log('\n--- T10: Final clear ---');
  const t10 = await app.message.clear();
  printState('final', t10);
  assert('final isEmpty', t10.isEmpty === true);

  // --- Summary ---
  console.log(`\n========================================`);
  console.log(`  Results: ${passed} passed, ${failed} failed`);
  console.log(`========================================`);

  app.window.minimize();
  console.log('\n[test] Done. App minimized.');

  if (failed > 0) process.exit(1);
}

main().catch(e => {
  console.error(`[test] Failed: ${e.message}`);
  try { app.window.minimize(); } catch {}
  process.exit(1);
});
