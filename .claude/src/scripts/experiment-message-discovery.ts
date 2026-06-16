// Sprint 65: Discover the composed message by reading the tree after every action.
// No assumptions — just act, read, photograph, report.
//
// Experiments:
//   1. Empty state — what does the tree show for an empty message?
//   2. Type body text via SendKeys (Shift+Enter for newlines)
//   3. Paste a large block (should become attachment)
//   4. Text + attachment together — what does the tree show?
//   5. Paste an image from clipboard
//   6. Clear: remove an attachment, verify tree updates
//   7. Clear: remove inline text, verify tree updates
//
// After EVERY action: read tree, screenshot, report what changed.

import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { writeFileSync, mkdirSync } from 'fs';
import { powershellAsync } from '../shell.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug');
mkdirSync(DEBUG, { recursive: true });

const app = new Claude();
const TS = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);

interface TreeSnapshot {
  text: string | null;
  elements: string[];
  composerElements: string[];
  hasText: boolean;
  hasSendButton: boolean;
  attachments: string[];
  placeholder: string | null;
}

async function readTree(label: string): Promise<TreeSnapshot> {
  const prefix = `${TS}-${label}`;

  app.window.screenshot(resolve(DEBUG, `${prefix}.png`));

  const text = await app.auto.uia.readText();
  if (text) {
    writeFileSync(resolve(DEBUG, `${prefix}-text.txt`), text, 'utf-8');
  }

  const elements = await app.auto.uia.allNames();
  writeFileSync(resolve(DEBUG, `${prefix}-tree.txt`), elements.join('\n'), 'utf-8');

  const attachments = elements
    .filter(n => n.includes('Pasted Text, pasted,') || n.includes('image') || n.includes('Image'))
    .filter(n => !n.includes('Remove'))
    .map(n => n.split(' | ')[1] || n);

  const hasSendButton = elements.some(n =>
    n.includes('| Send message') || n.includes('| Send')
  );

  const placeholder = elements.find(n =>
    n.includes('How can I help') || n.includes('Reply to Claude')
  );

  // Check if there's inline text by looking at text dump length near composer
  const hasText = hasSendButton && attachments.length === 0;

  const composerElements = elements.filter(n =>
    n.includes('Write your prompt') ||
    n.includes('How can I help') ||
    n.includes('Reply to Claude') ||
    n.includes('Send') ||
    n.includes('Pasted Text') ||
    n.includes('pasted') ||
    (n.includes('image') && !n.includes('sidebar')) ||
    (n.includes('Image') && !n.includes('sidebar')) ||
    (n.includes('Remove') && n.includes('Pasted'))
  );

  console.log(`\n--- ${label} ---`);
  console.log(`  Send button: ${hasSendButton}`);
  console.log(`  Attachments: ${attachments.length > 0 ? attachments.join(', ') : 'none'}`);
  console.log(`  Placeholder: ${placeholder ? placeholder.split(' | ')[1] : 'none (text present)'}`);
  console.log(`  Text dump: ${text?.length ?? 0} chars`);
  console.log(`  Elements: ${elements.length}`);
  if (composerElements.length > 0) {
    console.log(`  Composer elements:`);
    for (const el of composerElements) {
      console.log(`    ${el}`);
    }
  }

  return { text, elements, composerElements, hasText, hasSendButton, attachments, placeholder: placeholder || null };
}

async function verifyScreen(expected: string) {
  const actual = await app.detectScreen();
  if (actual !== expected) {
    throw new Error(`Expected screen '${expected}' but found '${actual}'`);
  }
  console.log(`  [screen verified: ${actual}]`);
}

async function main() {
  await app.launch();
  app.window.maximize();
  app.window.requireForeground();

  console.log('[discovery] Navigating to DNA Patternity...');
  await app.openProject('DNA Patternity');
  await new Promise(r => setTimeout(r, 1500));
  await verifyScreen('project');

  // === 1. EMPTY STATE ===
  console.log('\n\n===== 1. EMPTY MESSAGE STATE =====');
  const empty = await readTree('01-empty');

  // === 2. TYPE BODY TEXT ===
  console.log('\n\n===== 2. TYPE BODY TEXT (SendKeys + Shift+Enter) =====');

  await app.auto.uia.clickByName('Write your prompt to Claude');
  await new Promise(r => setTimeout(r, 300));

  // Type first line
  await app.auto.keyboard.sendKeys('Please review this code.');
  await new Promise(r => setTimeout(r, 300));
  const afterLine1 = await readTree('02a-one-line');

  // Shift+Enter for newline, then type second line
  await app.auto.keyboard.sendKeys('+{ENTER}');
  await new Promise(r => setTimeout(r, 200));
  await app.auto.keyboard.sendKeys('Pay attention to error handling.');
  await new Promise(r => setTimeout(r, 300));
  const afterLine2 = await readTree('02b-two-lines');

  // Another newline and third line
  await app.auto.keyboard.sendKeys('+{ENTER}');
  await new Promise(r => setTimeout(r, 200));
  await app.auto.keyboard.sendKeys('Thanks!');
  await new Promise(r => setTimeout(r, 300));
  const afterLine3 = await readTree('02c-three-lines');

  // === 3. ADD A PASTED ATTACHMENT ===
  console.log('\n\n===== 3. ADD PASTED ATTACHMENT (clipboard paste 120 lines) =====');

  const codeBlock = Array.from({ length: 120 }, (_, i) =>
    `export function handler${i}(req: Request): Response {`
  ).join('\n');
  await app.auto.keyboard.typeViaClipboard(codeBlock);
  await new Promise(r => setTimeout(r, 2000));
  const afterAttach = await readTree('03-text-plus-attachment');

  // === 4. CHECK: What does the tree show for text + attachment? ===
  console.log('\n\n===== 4. READING INLINE TEXT FROM TREE =====');

  // Try to read the Edit control's value
  console.log('\n  Attempting to read composer value via ValuePattern...');
  const composerValue = await powershellAsync(`
    Add-Type -AssemblyName UIAutomationClient
    Add-Type -AssemblyName UIAutomationTypes
    $uia = [System.Windows.Automation.AutomationElement]
    $window = $uia::FromHandle([IntPtr]::new(${app.window.handle}))
    $cond = New-Object System.Windows.Automation.PropertyCondition(
      $uia::NameProperty, 'Write your prompt to Claude')
    $elements = $window.FindAll([System.Windows.Automation.TreeScope]::Descendants, $cond)
    foreach ($el in $elements) {
      $vp = $null
      if ($el.TryGetCurrentPattern([System.Windows.Automation.ValuePattern]::Pattern, [ref]$vp)) {
        Write-Output "VALUE: $($vp.Current.Value)"
      }
      $tp = $null
      if ($el.TryGetCurrentPattern([System.Windows.Automation.TextPattern]::Pattern, [ref]$tp)) {
        $text = $tp.DocumentRange.GetText(-1)
        Write-Output "TEXT_PATTERN: $text"
      }
      Write-Output "CONTROL_TYPE: $($el.Current.ControlType.ProgrammaticName)"
      Write-Output "BOUNDING: $($el.Current.BoundingRectangle)"
    }
  `, 15_000);
  console.log(`  Composer readback:\n${composerValue}`);

  // === 5. PASTE AN IMAGE ===
  console.log('\n\n===== 5. PASTE IMAGE =====');

  // First clear everything so we have a clean state for the image test
  // Remove pasted attachment
  const removeResult = await app.auto.uia.invokeByName('Remove Pasted Text, pasted, 120 lines');
  console.log(`  Removed attachment: ${removeResult}`);
  await new Promise(r => setTimeout(r, 500));

  // Clear inline text
  await app.auto.uia.clickByName('Write your prompt to Claude');
  await new Promise(r => setTimeout(r, 200));
  await app.auto.keyboard.selectAll();
  await app.auto.keyboard.delete();
  await new Promise(r => setTimeout(r, 500));

  const afterClear = await readTree('05a-cleared');

  // Now type some text, then paste an image
  await app.auto.uia.clickByName('Write your prompt to Claude')
    || await app.auto.uia.clickByName('How can I help you today?');
  await new Promise(r => setTimeout(r, 300));
  await app.auto.keyboard.sendKeys('What is in this image?');
  await new Promise(r => setTimeout(r, 300));

  // Create image and copy to clipboard
  await powershellAsync(`
    Add-Type -AssemblyName System.Drawing
    Add-Type -AssemblyName System.Windows.Forms
    $bmp = New-Object System.Drawing.Bitmap(200, 150)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.Clear([System.Drawing.Color]::CornflowerBlue)
    $font = New-Object System.Drawing.Font("Arial", 20, [System.Drawing.FontStyle]::Bold)
    $g.DrawString("TEST IMAGE", $font, [System.Drawing.Brushes]::White, 15, 55)
    $font.Dispose()
    $g.Dispose()
    [System.Windows.Forms.Clipboard]::SetImage($bmp)
    $bmp.Dispose()
    Start-Sleep -Milliseconds 300
  `, 10_000);

  // Paste image via Ctrl+V
  app.window.requireForeground();
  await app.auto.keyboard.sendKeys('^v');
  await new Promise(r => setTimeout(r, 2000));
  const afterImage = await readTree('05b-image-pasted');

  // === 6. CLEAR ATTACHMENT ===
  console.log('\n\n===== 6. CLEAR (REMOVE ATTACHMENTS, THEN TEXT) =====');

  // Try to find and remove any attachments or images
  const allButtons = await app.auto.uia.findAllNames('Button');
  const removeButtons = allButtons.filter(n =>
    n.startsWith('Remove') && !n.match(/^Remove$/)
  );
  console.log(`  Found remove buttons: ${removeButtons.join(', ') || 'none'}`);
  for (const btn of removeButtons) {
    console.log(`  Clicking: ${btn}`);
    await app.auto.uia.invokeByName(btn);
    await new Promise(r => setTimeout(r, 500));
  }

  // Now check for generic "Remove" buttons that might be image removes
  const afterRemoves = await readTree('06a-after-attachment-removes');

  // Clear inline text
  await app.auto.uia.clickByName('Write your prompt to Claude')
    || await app.auto.uia.clickByName('How can I help you today?');
  await new Promise(r => setTimeout(r, 200));
  await app.auto.keyboard.selectAll();
  await app.auto.keyboard.delete();
  await new Promise(r => setTimeout(r, 500));
  const afterFullClear = await readTree('06b-fully-cleared');

  // === DONE ===
  app.window.minimize();
  console.log('\n\n[discovery] All experiments complete. App minimized.');
  console.log(`[discovery] Screenshots and tree dumps in: ${DEBUG}`);
}

main().catch(e => {
  console.error(`[discovery] Failed: ${e.message}`);
  try { app.window.minimize(); } catch {}
  process.exit(1);
});
