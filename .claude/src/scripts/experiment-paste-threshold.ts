// Sprint 65, E-3b: Binary search for the paste-to-attachment threshold.
// We know 30 lines = inline, 100 lines = attachment.
// Let's find the exact boundary.

import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { writeFileSync, mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug');
mkdirSync(DEBUG, { recursive: true });

const app = new Claude();
const TIMESTAMP = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);

async function isPastedAsAttachment(): Promise<boolean> {
  const names = await app.auto.uia.allNames();
  return names.some(n => n.includes('Pasted Text, pasted,'));
}

async function clearAll() {
  // Remove any pasted attachments first
  const names = await app.auto.uia.allNames();
  const removeButtons = names.filter(n => n.includes('Remove Pasted Text'));
  for (const btn of removeButtons) {
    const name = btn.split(' | ')[1];
    if (name) {
      await app.auto.uia.invokeByName(name);
      await new Promise(r => setTimeout(r, 500));
    }
  }
  // Then clear inline text
  await app.auto.uia.clickByName('Write your prompt to Claude');
  await new Promise(r => setTimeout(r, 200));
  await app.auto.keyboard.selectAll();
  await app.auto.keyboard.delete();
  await new Promise(r => setTimeout(r, 500));
}

async function testPaste(lineCount: number): Promise<boolean> {
  console.log(`\n[threshold] Testing ${lineCount} lines...`);

  const block = Array.from({ length: lineCount }, (_, i) =>
    `Line ${i + 1}: Testing paste threshold with ${lineCount} lines of content for the experiment.`
  ).join('\n');

  await app.auto.uia.clickByName('Write your prompt to Claude');
  await new Promise(r => setTimeout(r, 300));
  await app.auto.keyboard.typeViaClipboard(block);
  await new Promise(r => setTimeout(r, 1500));

  const isAttachment = await isPastedAsAttachment();
  console.log(`  ${lineCount} lines → ${isAttachment ? 'ATTACHMENT' : 'INLINE'}`);

  // Screenshot for the interesting ones
  if (lineCount >= 40 && lineCount <= 80) {
    app.window.screenshot(resolve(DEBUG, `${TIMESTAMP}-threshold-${lineCount}-lines.png`));
  }

  await clearAll();
  await new Promise(r => setTimeout(r, 500));

  return isAttachment;
}

async function main() {
  await app.launch();
  app.window.maximize();

  // Navigate to DNA Patternity
  console.log('[threshold] Opening DNA Patternity...');
  await app.openProject('DNA Patternity');
  await new Promise(r => setTimeout(r, 1000));

  // First clear any leftover state
  await clearAll();
  await new Promise(r => setTimeout(r, 500));

  // Binary search: 30 (inline) to 100 (attachment)
  const results: { lines: number; attachment: boolean }[] = [];

  // Test specific values to narrow down
  for (const n of [40, 50, 60, 70, 80, 90, 45, 55, 65, 75]) {
    const isAttachment = await testPaste(n);
    results.push({ lines: n, attachment: isAttachment });
  }

  // Sort and report
  results.sort((a, b) => a.lines - b.lines);
  console.log('\n=== THRESHOLD RESULTS ===');
  for (const r of results) {
    console.log(`  ${r.lines} lines → ${r.attachment ? 'ATTACHMENT' : 'INLINE'}`);
  }

  // Also try reading the composer value back via readText
  console.log('\n[threshold] Testing readback of inline text...');
  const testText = 'Can we read this text back from the tree?';
  await app.auto.uia.setValue('Write your prompt to Claude', testText);
  await new Promise(r => setTimeout(r, 500));

  const text = await app.auto.uia.readText();
  if (text?.includes(testText)) {
    console.log('  readText() CAN find inline composer text');
  } else {
    console.log('  readText() CANNOT find inline composer text');
  }

  // Try reading via ValuePattern
  const names = await app.auto.uia.allNames();
  const composerEl = names.find(n => n.includes('Write your prompt'));
  console.log(`  Composer element: ${composerEl}`);

  // Dump the full text to see where our text appears
  if (text) {
    writeFileSync(resolve(DEBUG, `${TIMESTAMP}-threshold-readback-text.txt`), text, 'utf-8');
    console.log(`  Full text dump saved (${text.length} chars)`);
  }

  await clearAll();

  console.log('\n[threshold] Done.');
}

main().catch(e => {
  console.error(`[threshold] Failed: ${e.message}`);
  process.exit(1);
});
