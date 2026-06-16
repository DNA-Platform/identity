// Test: full read of "Seren & The Hard Problem"
// Reads every turn, checks completeness, writes full markdown to disk.

import { Claude } from '../claude.ts';
import { turnsToMarkdown } from '../exports/format.ts';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = new Claude();
await app.launch();

process.on('unhandledRejection', (e) => { console.error(e); app.window.minimize(); });
process.on('uncaughtException', (e) => { console.error(e); app.window.minimize(); });

console.log('Opening "Seren & The Hard Problem"...');
await app.sidebar.refresh();

const screen = await app.detectScreen();
if (screen === 'conversation') {
  const title = await app.conversation.readTitle();
  if (title === 'Seren & The Hard Problem') {
    console.log('Already on Seren — skipping navigation');
  } else {
    await app.openChat('Seren & The Hard Problem');
  }
} else {
  await app.openChat('Seren & The Hard Problem');
}
console.log(`Screen: ${app.screen}, Title: "${app.conversation.title}"`);

// Read all turns
console.log('\nReading all turns...');
const start = Date.now();
const turns = await app.conversation.readTurns();
const elapsed = Date.now() - start;
console.log(`Read ${turns.length} turns in ${elapsed}ms`);

// Completeness checks
let emptyPrompts = 0;
let emptyResponses = 0;
let nullResponses = 0;
let totalPromptChars = 0;
let totalResponseChars = 0;
let shortestPrompt = Infinity;
let shortestResponse = Infinity;
let longestPrompt = 0;
let longestResponse = 0;
let artifacts = 0;
let thinkingCount = 0;
let attachments = 0;

for (let i = 0; i < turns.length; i++) {
  const t = turns[i];
  const pLen = t.prompt.content.text.length;
  totalPromptChars += pLen;
  if (pLen === 0) emptyPrompts++;
  if (pLen < shortestPrompt) shortestPrompt = pLen;
  if (pLen > longestPrompt) longestPrompt = pLen;
  attachments += t.prompt.attachments.length;

  if (!t.response) {
    nullResponses++;
    continue;
  }

  const rLen = t.response.content.text.length;
  totalResponseChars += rLen;
  if (rLen === 0) emptyResponses++;
  if (rLen < shortestResponse) shortestResponse = rLen;
  if (rLen > longestResponse) longestResponse = rLen;
  artifacts += t.response.artifacts.length;
  if (t.response.thinking) thinkingCount++;
}

console.log('\n=== Completeness ===');
console.log(`Turns: ${turns.length}`);
console.log(`Empty prompts: ${emptyPrompts}`);
console.log(`Empty responses: ${emptyResponses}`);
console.log(`Null responses (no reply): ${nullResponses}`);
console.log(`Prompt chars — total: ${totalPromptChars}, shortest: ${shortestPrompt}, longest: ${longestPrompt}`);
console.log(`Response chars — total: ${totalResponseChars}, shortest: ${shortestResponse}, longest: ${longestResponse}`);
console.log(`Artifacts: ${artifacts}`);
console.log(`Thinking blocks: ${thinkingCount}`);
console.log(`Attachments: ${attachments}`);

// Show samples from beginning, middle, end
const samples = [0, Math.floor(turns.length / 4), Math.floor(turns.length / 2), Math.floor(turns.length * 3 / 4), turns.length - 1];
console.log('\n=== Samples ===');
for (const idx of samples) {
  const t = turns[idx];
  const p = t.prompt.content.text.slice(0, 120).replace(/\n/g, ' ');
  const r = t.response?.content.text.slice(0, 120).replace(/\n/g, ' ') ?? '(none)';
  console.log(`\n[Turn ${idx}]`);
  console.log(`  Prompt:   ${p}...`);
  console.log(`  Response: ${r}...`);
  if (t.response?.artifacts.length) {
    for (const a of t.response.artifacts) {
      console.log(`  Artifact: "${a.title}" (${a.type})`);
    }
  }
}

// List all artifacts in order
console.log('\n=== All artifacts ===');
for (let i = 0; i < turns.length; i++) {
  const r = turns[i].response;
  if (!r) continue;
  for (const a of r.artifacts) {
    console.log(`  Turn ${i}: "${a.title}" (${a.type}) id=${a.identifier}`);
  }
}

// Serialize to markdown and write to file
const md = turnsToMarkdown('Seren & The Hard Problem', turns);
const outPath = 'C:\\Source\\dna-platform\\dna-library\\library\\claude-legacy\\conversations\\seren-live-capture.md';
writeFileSync(outPath, md, 'utf-8');
console.log(`\n=== Markdown written ===`);
console.log(`File: ${outPath}`);
console.log(`Lines: ${md.split('\n').length}`);
console.log(`Size: ${(md.length / 1024).toFixed(1)} KB`);

console.log('\n=== Done ===');
app.window.minimize();
