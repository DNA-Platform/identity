// Sprint 65: Test the ComposedMessage API.
// Every method returns MessageState read from the tree.
// Verify: write → read matches, paste → read shows attachment, clear → empty.

import { Claude } from '../claude.ts';

const app = new Claude();

function printState(label: string, state: { text: string; attachments: { name: string; kind: string }[]; canSend: boolean; isEmpty: boolean }) {
  console.log(`\n  [${label}]`);
  console.log(`    text: "${state.text.replace(/\n/g, '\\n')}"`);
  console.log(`    attachments: ${state.attachments.length > 0 ? state.attachments.map(a => `${a.kind}:${a.name}`).join(', ') : 'none'}`);
  console.log(`    canSend: ${state.canSend}`);
  console.log(`    isEmpty: ${state.isEmpty}`);
}

async function main() {
  await app.launch();
  app.window.maximize();
  app.window.requireForeground();

  console.log('[test] Opening DNA Patternity...');
  await app.openProject('DNA Patternity');
  await new Promise(r => setTimeout(r, 1500));

  const screen = await app.detectScreen();
  console.log(`[test] Screen: ${screen}`);

  // 1. Read empty state
  console.log('\n===== 1. EMPTY STATE =====');
  const empty = await app.message.read();
  printState('empty', empty);

  // 2. Write body text
  console.log('\n===== 2. WRITE TEXT =====');
  const afterWrite = await app.message.write('Please review this code.\nPay attention to error handling.\nThanks!');
  printState('after write', afterWrite);

  // 3. Read back — verify round-trip
  console.log('\n===== 3. READ BACK =====');
  const readBack = await app.message.read();
  printState('read back', readBack);
  const textMatch = readBack.text === afterWrite.text;
  console.log(`    text matches write: ${textMatch}`);

  // 4. Paste attachment
  console.log('\n===== 4. PASTE ATTACHMENT =====');
  const bigCode = Array.from({ length: 120 }, (_, i) =>
    `export function handler${i}(req: Request): Response {`
  ).join('\n');
  const afterPaste = await app.message.paste(bigCode);
  printState('after paste', afterPaste);

  // 5. Read again — text should still be there, plus attachment
  console.log('\n===== 5. READ WITH ATTACHMENT =====');
  const withAttachment = await app.message.read();
  printState('text + attachment', withAttachment);

  // 6. Remove attachment
  console.log('\n===== 6. REMOVE ATTACHMENT =====');
  if (withAttachment.attachments.length > 0) {
    const afterRemove = await app.message.removeAttachment(withAttachment.attachments[0].name);
    printState('after remove', afterRemove);
  }

  // 7. Clear everything
  console.log('\n===== 7. CLEAR =====');
  const afterClear = await app.message.clear();
  printState('after clear', afterClear);

  // 8. Verify empty
  console.log('\n===== 8. VERIFY EMPTY =====');
  const finalState = await app.message.read();
  printState('final', finalState);
  console.log(`    is empty: ${finalState.isEmpty}`);

  app.window.minimize();
  console.log('\n[test] Done. App minimized.');
}

main().catch(e => {
  console.error(`[test] Failed: ${e.message}`);
  try { app.window.minimize(); } catch {}
  process.exit(1);
});
