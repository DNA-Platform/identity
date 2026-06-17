// Sprint 65: Test file attachment via clipboard file-drop.
// Instead of navigating the file dialog, copy the file to clipboard
// (like Ctrl+C in Explorer) and paste into the composer.

import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { powershellAsync } from '../shell.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEST_IMAGE = resolve(__dirname, 'test-image.png');

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  app.window.requireForeground();

  console.log('[test] Opening DNA Patternity...');
  await app.openProject('DNA Patternity');
  await new Promise(r => setTimeout(r, 1500));
  console.log(`[test] Screen: ${await app.detectScreen()}`);

  // Clean state
  await app.message.clear();
  await new Promise(r => setTimeout(r, 500));

  // Step 1: Copy file to clipboard as file-drop
  console.log('\n--- Step 1: Copy file to clipboard ---');
  const escaped = TEST_IMAGE.replace(/'/g, "''");
  await powershellAsync(`
    Add-Type -AssemblyName System.Windows.Forms
    $files = New-Object System.Collections.Specialized.StringCollection
    $files.Add('${escaped}')
    [System.Windows.Forms.Clipboard]::SetFileDropList($files)
    Start-Sleep -Milliseconds 300
  `);
  console.log('  File copied to clipboard');

  // Step 2: Focus composer and paste (file is on clipboard as file-drop)
  console.log('\n--- Step 2: Paste into composer ---');
  await app.message.pasteImage();
  await new Promise(r => setTimeout(r, 2000));

  // Step 3: Read message state
  console.log('\n--- Step 3: Read state ---');
  const state = await app.message.read();
  console.log(`  text: "${state.text}"`);
  console.log(`  attachments: ${state.attachments.length}`);
  console.log(`  canSend: ${state.canSend}`);
  console.log(`  isEmpty: ${state.isEmpty}`);

  // Step 4: Dump ALL button names to find the attachment
  console.log('\n--- Step 4: All buttons ---');
  const buttons = await app.auto.uia.findAllNames('Button');
  for (const name of buttons) {
    if (name.includes('image') || name.includes('png') || name.includes('test')
        || name.includes('Remove') || name.includes('file') || name.includes('attach')
        || name.includes('File') || name.includes('Attach') || name.includes('Image')
        || name.includes('Pasted') || name.includes('pasted')) {
      console.log(`  Button: ${name}`);
    }
  }

  // Step 5: Screenshot
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const ssPath = resolve(__dirname, '..', 'debug', `${ts}-file-drop.png`);
  await app.screenshot(ssPath);
  console.log(`\n  screenshot: ${ssPath}`);

  // Step 6: Try reading text values to see if something appeared
  console.log('\n--- Step 6: All names in tree ---');
  const allNames = await app.auto.uia.allNames();
  for (const name of allNames) {
    if (name.includes('image') || name.includes('png') || name.includes('test-image')
        || name.includes('Remove') || name.includes('pasted') || name.includes('Pasted')
        || name.includes('attachment')) {
      console.log(`  ${name}`);
    }
  }

  // Clean up
  console.log('\n--- Cleanup ---');
  await app.message.clear();
  app.window.minimize();
  console.log('[test] Done.');
}

main().catch(e => {
  console.error(`[test] Failed: ${e.message}`);
  try { app.window.minimize(); } catch {}
  process.exit(1);
});
