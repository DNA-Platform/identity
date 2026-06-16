// Sprint 65: Test Ctrl+U file upload shortcut.
// Does it open the file dialog directly?

import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEST_IMAGE = resolve(__dirname, 'test-image.png');

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  app.window.requireForeground();

  console.log('[explore] Opening DNA Patternity...');
  await app.openProject('DNA Patternity');
  await new Promise(r => setTimeout(r, 1500));

  // Clear first
  await app.message.clear();

  // Try Ctrl+U
  console.log('\n--- Pressing Ctrl+U ---');
  await app.auto.keyboard.sendKeys('^u');
  await new Promise(r => setTimeout(r, 1500));

  // Check for file dialog
  console.log('\n--- Looking for dialog ---');
  const allNames = await app.auto.uia.allNames();
  for (const name of allNames) {
    if (name.includes('Window') || name.includes('Dialog') || name.includes('Open')
        || name.includes('Browse') || name.includes('File name')) {
      console.log(`  ${name}`);
    }
  }

  // Also check from the root for the Open dialog
  const { FileDialog } = await import('../components/file-dialog.ts');
  const fileDialog = new FileDialog(app.gateway);
  await fileDialog.detect();
  console.log(`\n  FileDialog.isOpen: ${fileDialog.isOpen}`);

  if (fileDialog.isOpen) {
    console.log('\n--- File dialog is open! Typing path... ---');
    await fileDialog.typePath(TEST_IMAGE);
    await new Promise(r => setTimeout(r, 500));

    console.log('--- Submitting... ---');
    await fileDialog.submit();
    await new Promise(r => setTimeout(r, 1500));

    // Read message state
    const state = await app.message.read();
    console.log(`\n--- Message state after upload ---`);
    console.log(`  text: "${state.text}"`);
    console.log(`  attachments: ${state.attachments.length > 0 ? state.attachments.map(a => `${a.kind}:${a.name}`).join(', ') : 'none'}`);
    console.log(`  canSend: ${state.canSend}`);

    // Check for any new buttons that look like file attachments
    console.log('\n--- All Buttons after upload ---');
    const buttons = await app.auto.uia.findAllNames('Button');
    for (const name of buttons) {
      if (name.includes('image') || name.includes('png') || name.includes('test')
          || name.includes('Remove') || name.includes('file') || name.includes('photo')) {
        console.log(`  Button: ${name}`);
      }
    }
  } else {
    console.log('\n  File dialog did not open. Checking full tree...');
    for (const name of allNames.slice(0, 50)) {
      console.log(`  ${name}`);
    }
  }

  // Clear
  await app.message.clear();

  app.window.minimize();
  console.log('\n[explore] Done. App minimized.');
}

main().catch(e => {
  console.error(`[explore] Failed: ${e.message}`);
  try { app.window.minimize(); } catch {}
  process.exit(1);
});
