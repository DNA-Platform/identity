// Experiment: Conversation tree anatomy
// E-0: Find scroll-to-bottom arrow
// E-1: Map response anatomy (text, code blocks, artifacts, thinking)
// E-2: Map user message anatomy
// E-3: Detect message boundaries
//
// Uses existing conversations in DNA Patternity. Read-only — no messages created.

import { Claude } from '../claude.ts';

const app = new Claude();
await app.launch();

console.log('\n=== E-0: Navigate to an existing conversation ===\n');

// Use sidebar to find existing conversations — avoids project grid race condition
await app.sidebar.refresh();
const chats = app.sidebar.chats.items;
console.log(`Conversations in sidebar: ${chats.length}`);
for (const c of chats.slice(0, 10)) {
  console.log(`  [${c.index}] ${c.title}`);
}

if (chats.length === 0) {
  console.log('No conversations found. Exiting.');
  app.window.minimize();
  process.exit(1);
}

// Pick a conversation that's not the very first (to avoid recent artifacts)
const target = chats.find(c => c.index >= 1) ?? chats[0];
console.log(`\nOpening: "${target.title}"`);
await app.openChat(target.title);
console.log(`Screen: ${app.screen}`);
console.log(`Title: ${app.conversation.title}`);
console.log(`Messages: ${app.conversation.messages.length}`);

// --- E-0: Scroll-to-bottom arrow ---
console.log('\n=== E-0: Scroll-to-bottom arrow ===\n');

// Check for known button names that might be the scroll indicator
const scrollNames = [
  'Scroll to bottom',
  'scroll to bottom',
  'Jump to bottom',
  'Go to bottom',
  'Scroll down',
  'Arrow down',
];

for (const name of scrollNames) {
  const exists = await app.auto.uia.existsByName(name);
  if (exists) console.log(`  FOUND by name: "${name}"`);
}

// Also search allNames for anything scroll/bottom/arrow related
const allNames = await app.auto.uia.allNames();
console.log(`\nTotal elements: ${allNames.length}`);

const scrollRelated = allNames.filter(n =>
  /scroll|bottom|arrow|jump|down/i.test(n)
);
console.log(`\nScroll/bottom/arrow related elements:`);
for (const n of scrollRelated) {
  console.log(`  ${n}`);
}

// --- E-1: Full tree dump for conversation anatomy ---
console.log('\n=== E-1: Full tree dump (conversation page) ===\n');

// Dump all elements — we need to see message structure
// Filter to interesting control types
const messageRelated = allNames.filter(n =>
  /You said|Claude responded|responded|said|Group|ListItem|Text|Paragraph|region|article/i.test(n)
);
console.log('Message-related elements:');
for (const n of messageRelated) {
  console.log(`  ${n}`);
}

// Look for code block indicators
const codeRelated = allNames.filter(n =>
  /code|copy|language|typescript|javascript|python|```/i.test(n)
);
console.log('\nCode-related elements:');
for (const n of codeRelated) {
  console.log(`  ${n}`);
}

// Look for artifact indicators
const artifactRelated = allNames.filter(n =>
  /artifact|surface|canvas|preview/i.test(n)
);
console.log('\nArtifact-related elements:');
for (const n of artifactRelated) {
  console.log(`  ${n}`);
}

// Look for thinking indicators
const thinkingRelated = allNames.filter(n =>
  /think|thought|reason|expand|collapse/i.test(n)
);
console.log('\nThinking-related elements:');
for (const n of thinkingRelated) {
  console.log(`  ${n}`);
}

// --- E-2: Button elements (often action/attachment elements) ---
console.log('\n=== E-2: Button elements ===\n');
const buttons = allNames.filter(n => n.startsWith('ControlType.Button'));
console.log(`Buttons (${buttons.length}):`);
for (const b of buttons) {
  console.log(`  ${b}`);
}

// --- E-3: Group elements (message containers?) ---
console.log('\n=== E-3: Group/region elements ===\n');
const groups = allNames.filter(n =>
  n.startsWith('ControlType.Group') || n.startsWith('ControlType.Custom')
);
console.log(`Groups/Custom (${groups.length}):`);
for (const g of groups) {
  console.log(`  ${g}`);
}

// --- Text dump for reference ---
console.log('\n=== Text dump (first 100 lines) ===\n');
const text = await app.auto.uia.readText();
if (text) {
  const lines = text.split('\n');
  for (const line of lines.slice(0, 100)) {
    console.log(`  | ${line}`);
  }
  console.log(`  ... (${lines.length} total lines)`);
}

// --- Now try scrolling to top to see if more elements appear ---
console.log('\n=== E-4: Element count before/after scroll ===\n');
const countBefore = allNames.length;
console.log(`Elements before scroll: ${countBefore}`);

// Scroll to top
await app.conversation.scrollToTop();
// Small wait for elements to render
await app.gateway.waitFor(async () => {
  const names = await app.auto.uia.allNames();
  return names.length !== countBefore;
}, { timeoutMs: 3_000 }).catch(() => false);

const allNamesAfter = await app.auto.uia.allNames();
console.log(`Elements after scroll to top: ${allNamesAfter.length}`);
console.log(`Difference: ${allNamesAfter.length - countBefore}`);

// Check if scroll-to-bottom arrow appears after scrolling up
const scrollAfter = allNamesAfter.filter(n =>
  /scroll|bottom|arrow|jump|down/i.test(n)
);
console.log('\nScroll-related elements after scrolling up:');
for (const n of scrollAfter) {
  console.log(`  ${n}`);
}

// Scroll back to bottom
await app.conversation.scrollToBottom();

console.log('\n=== Done ===');
app.window.minimize();
