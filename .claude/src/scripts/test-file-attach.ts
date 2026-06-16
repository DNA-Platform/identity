// Sprint 65: Integration test for file attachment via clipboard file-drop.

import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEST_IMAGE = resolve(__dirname, 'test-image.png');

const app = new Claude();

function printState(label: string, state: { text: string; attachments: { name: string; kind: string }[]; canSend: boolean; isEmpty: boolean }) {
  console.log(`  [${label}]`);
  console.log(`    text: "${state.text}"`);
  console.log(`    attachments: ${state.attachments.length > 0 ? state.attachments.map(a => `${a.kind}:${a.name}`).join(', ') : 'none'}`);
  console.log(`    canSend: ${state.canSend}  isEmpty: ${state.isEmpty}`);
}

let passed = 0;
let failed = 0;

function assert(test: string, condition: boolean) {
  if (condition) {
    console.log(`  PASS: ${test}`);
    passed++;
  } else {
    console.log(`  FAIL: ${test}`);
    failed++;
  }
}

async function main() {
  await app.launch();
  app.window.maximize();
  app.window.requireForeground();

  console.log('[test] Opening DNA Patternity...');
  await app.openProject('DNA Patternity');
  await new Promise(r => setTimeout(r, 1500));

  // 1. Start clean
  console.log('\n===== 1. CLEAN STATE =====');
  const clean = await app.message.clear();
  printState('clean', clean);
  assert('Clean: no text', clean.text === '');
  assert('Clean: no attachments', clean.attachments.length === 0);
  assert('Clean: isEmpty', clean.isEmpty);

  // 2. Attach file
  console.log('\n===== 2. ATTACH FILE =====');
  const afterAttach = await app.message.attachFile(TEST_IMAGE);
  printState('after attach', afterAttach);
  assert('Attach: has attachment', afterAttach.attachments.length === 1);
  assert('Attach: kind is file', afterAttach.attachments[0]?.kind === 'file');
  assert('Attach: name contains test-image', afterAttach.attachments[0]?.name.includes('test-image') ?? false);
  assert('Attach: canSend', afterAttach.canSend);
  assert('Attach: not isEmpty', !afterAttach.isEmpty);

  // 3. Add text alongside the attachment
  console.log('\n===== 3. ADD TEXT =====');
  const afterText = await app.message.write('Hello with file');
  printState('after text', afterText);
  assert('Text: has text', afterText.text.includes('Hello with file'));
  assert('Text: still has attachment', afterText.attachments.length === 1);

  // 4. Remove attachment
  console.log('\n===== 4. REMOVE ATTACHMENT =====');
  const attName = afterText.attachments[0]?.name;
  if (attName) {
    const afterRemove = await app.message.removeAttachment(attName);
    printState('after remove', afterRemove);
    assert('Remove: no attachments', afterRemove.attachments.length === 0);
    assert('Remove: text preserved', afterRemove.text.includes('Hello with file'));
  } else {
    console.log('  SKIP: no attachment to remove');
    failed++;
  }

  // 5. Clear everything
  console.log('\n===== 5. CLEAR =====');
  const afterClear = await app.message.clear();
  printState('after clear', afterClear);
  assert('Clear: no text', afterClear.text === '');
  assert('Clear: no attachments', afterClear.attachments.length === 0);
  assert('Clear: isEmpty', afterClear.isEmpty);

  // 6. Attach then clear (without remove step)
  console.log('\n===== 6. ATTACH + CLEAR =====');
  await app.message.attachFile(TEST_IMAGE);
  await new Promise(r => setTimeout(r, 500));
  const afterClear2 = await app.message.clear();
  printState('after clear', afterClear2);
  assert('AttachClear: no attachments', afterClear2.attachments.length === 0);
  assert('AttachClear: isEmpty', afterClear2.isEmpty);

  // Summary
  console.log(`\n===== RESULTS: ${passed} passed, ${failed} failed =====`);

  app.window.minimize();
  console.log('[test] Done.');
}

main().catch(e => {
  console.error(`[test] Failed: ${e.message}`);
  try { app.window.minimize(); } catch {}
  process.exit(1);
});
