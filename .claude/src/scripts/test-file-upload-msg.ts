// Sprint 65: Test file upload via Ctrl+U.
// Open file dialog, type path, submit, verify attachment in tree.

import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEST_IMAGE = resolve(__dirname, 'test-image.png');

const app = new Claude();

function printState(label: string, state: { text: string; attachments: { name: string; kind: string }[]; canSend: boolean; isEmpty: boolean }) {
  console.log(`\n  [${label}]`);
  console.log(`    text: "${state.text}"`);
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

  // 1. Start clean
  console.log('\n===== 1. CLEAR =====');
  const empty = await app.message.clear();
  printState('empty', empty);

  // 2. Press Ctrl+U to open file dialog
  console.log('\n===== 2. OPEN FILE DIALOG (Ctrl+U) =====');
  await app.auto.keyboard.sendKeys('^u');
  await new Promise(r => setTimeout(r, 1500));

  // 3. Type the file path — dialog should have focus
  console.log(`    path: ${TEST_IMAGE}`);
  await app.auto.keyboard.typeViaClipboard(TEST_IMAGE);
  await new Promise(r => setTimeout(r, 500));

  // 4. Press Enter to submit
  console.log('    submitting...');
  await app.auto.keyboard.sendKeys('{ENTER}');
  await new Promise(r => setTimeout(r, 2000));

  // 5. Read message state
  console.log('\n===== 3. READ AFTER UPLOAD =====');
  const afterUpload = await app.message.read();
  printState('after upload', afterUpload);

  // 6. Look for any new buttons
  console.log('\n--- Buttons with image/file/upload/test/photo/remove ---');
  const buttons = await app.auto.uia.findAllNames('Button');
  for (const name of buttons) {
    const lower = name.toLowerCase();
    if (lower.includes('image') || lower.includes('png') || lower.includes('test')
        || lower.includes('remove') || lower.includes('file') || lower.includes('photo')
        || lower.includes('upload')) {
      console.log(`  Button: ${name}`);
    }
  }

  // 7. Take a screenshot to see what happened
  console.log('\n===== 4. SCREENSHOT =====');
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const ssPath = resolve(__dirname, '..', '..', 'debug', `${ts}-file-upload.png`);
  await app.screenshot(ssPath);
  console.log(`  saved: ${ssPath}`);

  // 8. Clean up
  console.log('\n===== 5. CLEAR =====');
  const afterClear = await app.message.clear();
  printState('after clear', afterClear);

  app.window.minimize();
  console.log('\n[test] Done. App minimized.');
}

main().catch(e => {
  console.error(`[test] Failed: ${e.message}`);
  try { app.window.minimize(); } catch {}
  process.exit(1);
});
