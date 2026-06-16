// Sprint 65, E-1 through E-5: How do different input methods affect the UIA tree?
// We compose messages using different methods, then dump the tree and screenshot.
// Goal: understand when paste becomes attachment, what streaming looks like, etc.

import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { writeFileSync, mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug');
mkdirSync(DEBUG, { recursive: true });

const app = new Claude();

const TIMESTAMP = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);

async function dumpState(label: string) {
  const prefix = `${TIMESTAMP}-${label}`;
  console.log(`\n=== ${label} ===`);

  // Screenshot
  const screenshotPath = resolve(DEBUG, `${prefix}.png`);
  app.window.screenshot(screenshotPath);
  console.log(`  Screenshot: ${screenshotPath}`);

  // Full text dump
  const text = await app.auto.uia.readText();
  if (text) {
    writeFileSync(resolve(DEBUG, `${prefix}-text.txt`), text, 'utf-8');
    console.log(`  Text dump: ${text.length} chars`);
  }

  // All named elements
  const names = await app.auto.uia.allNames();
  writeFileSync(resolve(DEBUG, `${prefix}-tree.txt`), names.join('\n'), 'utf-8');
  console.log(`  Tree: ${names.length} elements`);

  // Look specifically for composer-related elements
  const composerRelated = names.filter(n =>
    n.includes('Write your prompt') ||
    n.includes('Reply to Claude') ||
    n.includes('How can I help') ||
    n.includes('Send') ||
    n.includes('Attach') ||
    n.includes('Pasted Text') ||
    n.includes('pasted') ||
    n.includes('Remove') ||
    n.includes('Add content') ||
    n.includes('lines')
  );
  console.log(`  Composer elements:`);
  for (const el of composerRelated) {
    console.log(`    ${el}`);
  }

  return { text, names };
}

async function clearComposer() {
  console.log('\n  [clearing composer...]');
  await app.auto.keyboard.selectAll();
  await app.auto.keyboard.delete();
  await new Promise(r => setTimeout(r, 500));
}

async function main() {
  await app.launch();
  app.window.maximize();

  // Navigate to DNA Patternity project
  console.log('[sprint-65] Opening DNA Patternity...');
  await app.openProject('DNA Patternity');
  await new Promise(r => setTimeout(r, 1000));

  // --- E-0: Empty composer baseline ---
  await dumpState('E0-empty-composer');

  // --- E-1: Type short text via setValue ---
  console.log('\n[E-1] Typing short text via setValue...');
  const shortText = 'Hello, this is a short test message.';
  await app.auto.uia.setValue('Write your prompt to Claude', shortText);
  await new Promise(r => setTimeout(r, 500));
  await dumpState('E1-short-setValue');
  await clearComposer();

  // --- E-1b: Type short text via keyboard streaming ---
  console.log('\n[E-1b] Streaming short text via SendKeys...');
  await app.auto.uia.clickByName('Write your prompt to Claude');
  await new Promise(r => setTimeout(r, 300));
  // SendKeys types character by character
  await app.auto.keyboard.sendKeys('Hello from streaming input');
  await new Promise(r => setTimeout(r, 500));
  await dumpState('E1b-short-streamed');
  await clearComposer();

  // --- E-2: Paste small block (5 lines) ---
  console.log('\n[E-2] Pasting small block (5 lines)...');
  const smallBlock = Array.from({ length: 5 }, (_, i) =>
    `Line ${i + 1}: This is a short paragraph of text for testing paste behavior.`
  ).join('\n');
  await app.auto.uia.clickByName('Write your prompt to Claude');
  await new Promise(r => setTimeout(r, 300));
  await app.auto.keyboard.typeViaClipboard(smallBlock);
  await new Promise(r => setTimeout(r, 800));
  await dumpState('E2-paste-5-lines');
  await clearComposer();

  // --- E-3: Paste medium block (30 lines) ---
  console.log('\n[E-3] Pasting medium block (30 lines)...');
  const mediumBlock = Array.from({ length: 30 }, (_, i) =>
    `Line ${i + 1}: This is paragraph ${i + 1} of the medium block test. We want to see if this crosses the threshold into attachment territory.`
  ).join('\n');
  await app.auto.uia.clickByName('Write your prompt to Claude');
  await new Promise(r => setTimeout(r, 300));
  await app.auto.keyboard.typeViaClipboard(mediumBlock);
  await new Promise(r => setTimeout(r, 1000));
  await dumpState('E3-paste-30-lines');
  await clearComposer();

  // --- E-4: Paste large block (100 lines) ---
  console.log('\n[E-4] Pasting large block (100 lines)...');
  const largeBlock = Array.from({ length: 100 }, (_, i) =>
    `Line ${i + 1}: This is paragraph ${i + 1} of the large block test. We are deliberately testing the paste-to-attachment threshold.`
  ).join('\n');
  await app.auto.uia.clickByName('Write your prompt to Claude');
  await new Promise(r => setTimeout(r, 300));
  await app.auto.keyboard.typeViaClipboard(largeBlock);
  await new Promise(r => setTimeout(r, 1500));
  await dumpState('E4-paste-100-lines');
  await clearComposer();

  // --- E-5: Paste very large block (500 lines) ---
  console.log('\n[E-5] Pasting very large block (500 lines)...');
  const hugeBlock = Array.from({ length: 500 }, (_, i) =>
    `Line ${i + 1}: Large block paragraph ${i + 1}. Testing whether all large pastes produce attachments.`
  ).join('\n');
  await app.auto.uia.clickByName('Write your prompt to Claude');
  await new Promise(r => setTimeout(r, 300));
  await app.auto.keyboard.typeViaClipboard(hugeBlock);
  await new Promise(r => setTimeout(r, 2000));
  await dumpState('E5-paste-500-lines');
  await clearComposer();

  console.log('\n[sprint-65] All experiments complete.');
  console.log(`[sprint-65] Debug output in: ${DEBUG}`);
}

main().catch(e => {
  console.error(`[sprint-65] Failed: ${e.message}`);
  process.exit(1);
});
