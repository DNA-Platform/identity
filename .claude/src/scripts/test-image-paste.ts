// Sprint 65: Test image paste and remove via ComposedMessage.
// Loads a test image onto clipboard, pastes into composer, reads tree, removes.

import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEST_IMAGE = resolve(__dirname, 'test-image.png');

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

  // 1. Start clean
  console.log('\n===== 1. CLEAR & VERIFY EMPTY =====');
  const empty = await app.message.clear();
  printState('empty', empty);

  // 2. Write multi-line text (tests Shift+Enter newlines)
  console.log('\n===== 2. WRITE MULTI-LINE TEXT =====');
  const afterWrite = await app.message.write('Line one.\nLine two.\nLine three.');
  printState('after write', afterWrite);

  // 3. Paste image from file
  console.log('\n===== 3. PASTE IMAGE =====');
  console.log(`    image path: ${TEST_IMAGE}`);
  const afterImage = await app.message.pasteImageFile(TEST_IMAGE);
  printState('after image', afterImage);

  // 4. Verify image is in tree
  console.log('\n===== 4. READ WITH IMAGE =====');
  const withImage = await app.message.read();
  printState('read back', withImage);
  const hasImage = withImage.attachments.some(a => a.kind === 'image');
  console.log(`    has image attachment: ${hasImage}`);

  // 5. Remove image
  if (hasImage) {
    const imageAtt = withImage.attachments.find(a => a.kind === 'image')!;
    console.log(`\n===== 5. REMOVE IMAGE: ${imageAtt.name} =====`);
    const afterRemove = await app.message.removeAttachment(imageAtt.name);
    printState('after remove', afterRemove);
  } else {
    console.log('\n===== 5. SKIP REMOVE — no image found =====');
  }

  // 6. Clear everything
  console.log('\n===== 6. CLEAR ALL =====');
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
