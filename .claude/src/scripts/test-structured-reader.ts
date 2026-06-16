// Test: structured conversation reader
// Opens a conversation and reads it with the new structured parser.
// Verifies message parts (text, artifacts) are correctly detected.

import { Claude } from '../claude.ts';

const app = new Claude();
await app.launch();

process.on('unhandledRejection', () => { app.window.minimize(); });
process.on('uncaughtException', () => { app.window.minimize(); });

const screen = await app.detectScreen();
if (screen !== 'conversation') {
  await app.sidebar.refresh();
  console.log('Opening "Seren & The Hard Problem"...');
  await app.openChat('Seren & The Hard Problem');
}

console.log(`Screen: ${app.screen}`);
console.log(`Title: ${app.conversation.title}`);

// Test 1: readResponse() — just the last assistant message (optimized)
console.log('\n=== readResponse() ===');
const respStart = Date.now();
const response = await app.conversation.readResponse();
const respElapsed = Date.now() - respStart;
if (response) {
  console.log(`Role: ${response.role}`);
  console.log(`Parts: ${response.parts.length}`);
  console.log(`Time: ${respElapsed}ms`);
  for (const part of response.parts) {
    if (part.kind === 'text') {
      const preview = part.content.slice(0, 200).replace(/\n/g, ' ');
      console.log(`  [text] ${preview}...`);
    } else if (part.kind === 'artifact') {
      console.log(`  [artifact] "${part.title}" (${part.type})`);
    }
  }
} else {
  console.log(`No response found (${respElapsed}ms)`);
}

// Test 2: readStructuredMessages() — full conversation
console.log('\n=== readStructuredMessages() ===');
const startMs = Date.now();
const structured = await app.conversation.readStructuredMessages();
const elapsed = Date.now() - startMs;
console.log(`Parsed ${structured.length} messages in ${elapsed}ms`);

const users = structured.filter(m => m.role === 'user').length;
const assistants = structured.filter(m => m.role === 'assistant').length;
console.log(`User: ${users}, Assistant: ${assistants}`);

let artifactCount = 0;
for (const msg of structured) {
  for (const part of msg.parts) {
    if (part.kind === 'artifact') artifactCount++;
  }
}
console.log(`Artifacts found: ${artifactCount}`);

// Show first 3 and last 3 messages
console.log('\n--- First 3 messages ---');
for (let i = 0; i < Math.min(3, structured.length); i++) {
  const m = structured[i];
  const partSummary = m.parts.map(p =>
    p.kind === 'text' ? `text(${p.content.length}ch)` : p.kind === 'artifact' ? `artifact("${p.title}")` : p.kind
  ).join(', ');
  console.log(`  [${i}] ${m.role}: ${partSummary}`);
}
console.log('--- Last 3 messages ---');
for (let i = Math.max(0, structured.length - 3); i < structured.length; i++) {
  const m = structured[i];
  const partSummary = m.parts.map(p =>
    p.kind === 'text' ? `text(${p.content.length}ch)` : p.kind === 'artifact' ? `artifact("${p.title}")` : p.kind
  ).join(', ');
  console.log(`  [${i}] ${m.role}: ${partSummary}`);
}

// Comparison
console.log('\n=== Timing comparison ===');
const startLegacy = Date.now();
const legacy = await app.conversation.readMessages();
const legacyElapsed = Date.now() - startLegacy;
console.log(`readResponse():          ${respElapsed}ms (1 message)`);
console.log(`readStructuredMessages(): ${elapsed}ms (${structured.length} messages)`);
console.log(`readMessages() [legacy]:  ${legacyElapsed}ms (${legacy.length} messages)`);

console.log('\n=== Done ===');
app.window.minimize();
