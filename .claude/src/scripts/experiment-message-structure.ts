// Sprint 65: How does the tree model a composed message's STRUCTURE?
// Key questions:
//   1. If you type, then paste, then type — does the tree preserve order?
//   2. What does an image look like in the tree?
//   3. What does readText() show for a multi-part message?
//   4. How do we clear each part?

import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { writeFileSync, mkdirSync, readFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug');
mkdirSync(DEBUG, { recursive: true });

const app = new Claude();
const TS = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);

async function dumpState(label: string) {
  const prefix = `${TS}-${label}`;
  console.log(`\n=== ${label} ===`);

  const screenshotPath = resolve(DEBUG, `${prefix}.png`);
  app.window.screenshot(screenshotPath);

  const text = await app.auto.uia.readText();
  if (text) {
    writeFileSync(resolve(DEBUG, `${prefix}-text.txt`), text, 'utf-8');
    // Show just the tail of the text (composer area) — skip sidebar noise
    const lines = text.split('\n');
    const composerStart = lines.findIndex(l =>
      l.includes('Write your prompt') || l.includes('How can I help') || l.includes('Reply to Claude')
    );
    if (composerStart >= 0) {
      console.log(`  Text near composer (from line ${composerStart}):`);
      for (let i = Math.max(0, composerStart - 3); i < lines.length; i++) {
        console.log(`    ${i}: ${lines[i].trim().slice(0, 120)}`);
      }
    }
    console.log(`  Total text: ${text.length} chars`);
  }

  const names = await app.auto.uia.allNames();
  writeFileSync(resolve(DEBUG, `${prefix}-tree.txt`), names.join('\n'), 'utf-8');

  // Show only composer-related elements (filter out project knowledge files we've seen before)
  const composerRelated = names.filter(n =>
    n.includes('Write your prompt') ||
    n.includes('Reply to Claude') ||
    n.includes('How can I help') ||
    n.includes('Send') ||
    n.includes('Pasted') ||
    n.includes('pasted') ||
    n.includes('image') ||
    n.includes('Image') ||
    n.includes('photo') ||
    n.includes('Photo') ||
    n.includes('screenshot') ||
    n.includes('Screenshot') ||
    n.includes('png') ||
    n.includes('jpg') ||
    n.includes('jpeg') ||
    n.includes('gif') ||
    n.includes('Remove') ||
    n.includes('Attach') ||
    n.includes('Add content') ||
    n.includes('Upload')
  );
  console.log(`  Composer/attachment elements (${composerRelated.length}):`);
  for (const el of composerRelated) {
    console.log(`    ${el}`);
  }

  return { text, names };
}

async function clearMessage() {
  console.log('\n  [clearing message...]');
  // Phase 1: remove pasted attachments
  const names = await app.auto.uia.findAllNames('Button');
  const removeButtons = names.filter(n => n.startsWith('Remove'));
  for (const name of removeButtons) {
    // Skip project knowledge file removes — they're just "Remove" with no qualifier
    // Pasted text removes are "Remove Pasted Text, pasted, N lines"
    if (name.includes('Pasted') || name.includes('pasted') || name.includes('image') || name.includes('Image')) {
      console.log(`    Removing: ${name}`);
      await app.auto.uia.invokeByName(name);
      await new Promise(r => setTimeout(r, 400));
    }
  }
  // Phase 2: clear inline text
  await app.auto.uia.clickByName('Write your prompt to Claude')
    || await app.auto.uia.clickByName('How can I help you today?')
    || await app.auto.uia.clickByName('Reply to Claude...');
  await new Promise(r => setTimeout(r, 200));
  await app.auto.keyboard.selectAll();
  await app.auto.keyboard.delete();
  await new Promise(r => setTimeout(r, 500));
}

async function main() {
  await app.launch();
  app.window.maximize();
  app.window.requireForeground();

  // Navigate to DNA Patternity
  console.log('[experiment] Opening DNA Patternity...');
  await app.openProject('DNA Patternity');
  await new Promise(r => setTimeout(r, 1500));

  // Verify we're on the project page
  const screen = await app.detectScreen();
  console.log(`[experiment] Screen: ${screen}`);

  // Clean slate
  await clearMessage();
  await new Promise(r => setTimeout(r, 500));

  // ================================================================
  // EXPERIMENT A: Positional composition — type, paste, type
  // ================================================================
  console.log('\n\n========== EXPERIMENT A: Positional Composition ==========');

  // Step 1: Type some text
  console.log('\n[A.1] Typing initial text...');
  await app.auto.uia.clickByName('Write your prompt to Claude');
  await new Promise(r => setTimeout(r, 300));
  await app.auto.keyboard.sendKeys("Here is my code for review:");
  await new Promise(r => setTimeout(r, 500));
  await dumpState('A1-after-type');

  // Step 2: Press Enter, then paste a block
  console.log('\n[A.2] Pressing Enter and pasting code block...');
  await app.auto.keyboard.sendKeys('{ENTER}');
  await new Promise(r => setTimeout(r, 200));

  const codeBlock = Array.from({ length: 50 }, (_, i) =>
    `function example${i}() { return ${i} * 2; }`
  ).join('\n');
  await app.auto.keyboard.typeViaClipboard(codeBlock);
  await new Promise(r => setTimeout(r, 1500));
  await dumpState('A2-after-paste-50-lines');

  // Step 3: Type more text after the paste
  console.log('\n[A.3] Typing text after the paste...');
  // The cursor should be after the pasted text
  await app.auto.keyboard.sendKeys('{ENTER}');
  await new Promise(r => setTimeout(r, 200));
  await app.auto.keyboard.sendKeys('What do you think about this approach?');
  await new Promise(r => setTimeout(r, 500));
  await dumpState('A3-type-paste-type');

  await clearMessage();
  await new Promise(r => setTimeout(r, 500));

  // ================================================================
  // EXPERIMENT B: Large paste to force attachment, then type around it
  // ================================================================
  console.log('\n\n========== EXPERIMENT B: Attachment + Inline Text ==========');

  // Step 1: Type text first
  console.log('\n[B.1] Typing initial text...');
  await app.auto.uia.clickByName('Write your prompt to Claude');
  await new Promise(r => setTimeout(r, 300));
  await app.auto.keyboard.sendKeys('Please review this long file:');
  await new Promise(r => setTimeout(r, 500));

  // Step 2: Paste 150 lines (will become attachment)
  console.log('\n[B.2] Pasting 150 lines (should become attachment)...');
  const bigBlock = Array.from({ length: 150 }, (_, i) =>
    `// Line ${i + 1}: implementation detail for the review`
  ).join('\n');
  await app.auto.keyboard.typeViaClipboard(bigBlock);
  await new Promise(r => setTimeout(r, 2000));
  await dumpState('B2-text-plus-attachment');

  // Step 3: Type more after the attachment
  console.log('\n[B.3] Typing after the attachment...');
  await app.auto.uia.clickByName('Write your prompt to Claude');
  await new Promise(r => setTimeout(r, 300));
  await app.auto.keyboard.sendKeys('Focus on error handling please.');
  await new Promise(r => setTimeout(r, 500));
  await dumpState('B3-text-attachment-text');

  await clearMessage();
  await new Promise(r => setTimeout(r, 500));

  // ================================================================
  // EXPERIMENT C: Paste an image from clipboard
  // ================================================================
  console.log('\n\n========== EXPERIMENT C: Image Paste ==========');

  // Create a small test image and copy it to clipboard
  console.log('\n[C.1] Creating and pasting a test image...');
  await app.auto.uia.clickByName('Write your prompt to Claude');
  await new Promise(r => setTimeout(r, 300));

  // Use PowerShell to create a small bitmap and put it on the clipboard
  const { powershellAsync } = await import('../shell.ts');
  await powershellAsync(`
    Add-Type -AssemblyName System.Drawing
    Add-Type -AssemblyName System.Windows.Forms
    $bmp = New-Object System.Drawing.Bitmap(100, 100)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.FillRectangle([System.Drawing.Brushes]::Blue, 0, 0, 100, 100)
    $g.DrawString("TEST", (New-Object System.Drawing.Font("Arial", 14)), [System.Drawing.Brushes]::White, 10, 35)
    $g.Dispose()
    [System.Windows.Forms.Clipboard]::SetImage($bmp)
    $bmp.Dispose()
  `, 10_000);

  // Paste the image
  await app.auto.keyboard.sendKeys('^v');
  await new Promise(r => setTimeout(r, 2000));
  await dumpState('C1-image-pasted');

  await clearMessage();
  await new Promise(r => setTimeout(r, 500));

  // ================================================================
  // EXPERIMENT D: Threshold narrowing — test 40, 50, 60, 70, 80, 90
  // ================================================================
  console.log('\n\n========== EXPERIMENT D: Paste Threshold ==========');

  for (const lineCount of [40, 50, 60, 70, 80, 90]) {
    console.log(`\n[D] Testing ${lineCount} lines...`);
    await app.auto.uia.clickByName('Write your prompt to Claude')
      || await app.auto.uia.clickByName('How can I help you today?');
    await new Promise(r => setTimeout(r, 300));

    const block = Array.from({ length: lineCount }, (_, i) =>
      `Line ${i + 1}: threshold test content for ${lineCount} line paste.`
    ).join('\n');
    await app.auto.keyboard.typeViaClipboard(block);
    await new Promise(r => setTimeout(r, 1500));

    const names = await app.auto.uia.allNames();
    const isAttachment = names.some(n => n.includes('Pasted Text, pasted,'));
    console.log(`  ${lineCount} lines → ${isAttachment ? 'ATTACHMENT' : 'INLINE'}`);

    if (lineCount === 50 || lineCount === 60) {
      await dumpState(`D-threshold-${lineCount}`);
    }

    await clearMessage();
    await new Promise(r => setTimeout(r, 500));
  }

  // Minimize when done
  app.window.minimize();
  console.log('\n[experiment] Done. App minimized.');
}

main().catch(e => {
  console.error(`[experiment] Failed: ${e.message}`);
  // Try to minimize even on failure
  try { app.window.minimize(); } catch {}
  process.exit(1);
});
