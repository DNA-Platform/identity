// Sprint 65: Test file attachment via app.message.attachFile().
// Uses FileDialog component to navigate the Open dialog properly.

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

  // First, clean up the accidental "Test image script" conversation
  console.log('[test] Cleaning up test conversation...');
  try {
    await app.deleteChat('Test image script');
    console.log('  deleted Test image script');
  } catch (e: any) {
    console.log(`  cleanup: ${e.message}`);
  }
  await new Promise(r => setTimeout(r, 1000));

  console.log('[test] Opening DNA Patternity...');
  await app.openProject('DNA Patternity');
  await new Promise(r => setTimeout(r, 1500));

  console.log(`[test] Screen: ${await app.detectScreen()}`);

  // 1. Start clean
  console.log('\n===== 1. CLEAR =====');
  const empty = await app.message.clear();
  printState('empty', empty);

  // 2. Attach file
  console.log('\n===== 2. ATTACH FILE =====');
  console.log(`    path: ${TEST_IMAGE}`);
  const afterAttach = await app.message.attachFile(TEST_IMAGE);
  printState('after attach', afterAttach);

  // 3. Check buttons for attached file
  console.log('\n--- All buttons ---');
  const buttons = await app.auto.uia.findAllNames('Button');
  for (const name of buttons) {
    const lower = name.toLowerCase();
    if (lower.includes('image') || lower.includes('png') || lower.includes('test')
        || lower.includes('remove') || lower.includes('file') || lower.includes('attach')) {
      console.log(`  Button: ${name}`);
    }
  }

  // 4. Screenshot
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const ssPath = resolve(__dirname, '..', '..', 'debug', `${ts}-attach-file.png`);
  await app.screenshot(ssPath);
  console.log(`\n  screenshot: ${ssPath}`);

  // 5. Clear
  console.log('\n===== 3. CLEAR =====');
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
