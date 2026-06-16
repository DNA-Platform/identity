// Experiment: Find the scroll-to-bottom arrow
// 1. Open a conversation
// 2. Scroll to top with keyboard
// 3. Look for a scroll-to-bottom button/arrow
// 4. Also look for it with a shorter conversation

import { Claude } from '../claude.ts';

const app = new Claude();
await app.launch();

// Ensure we minimize even on error
process.on('unhandledRejection', () => { app.window.minimize(); });
process.on('uncaughtException', () => { app.window.minimize(); });

// Check if we're already on a conversation
const screen = await app.detectScreen();
if (screen === 'conversation') {
  console.log('Already on a conversation page — using it');
  await app.conversation.refresh();
  console.log(`Title: ${app.conversation.title}`);
  console.log(`Messages: ${app.conversation.messages.length}`);
} else {
  // Pick a shorter conversation (not index 1 which is the 684-msg one)
  await app.sidebar.refresh();
  const chats = app.sidebar.chats.items;
  // Pick something at index 3+ which should be shorter
  const target = chats.find(c => c.index >= 5) ?? chats[3] ?? chats[0];
  console.log(`Opening: "${target.title}"`);
  await app.openChat(target.title);
  console.log(`Messages: ${app.conversation.messages.length}`);
}

// Step 1: At the bottom — search for scroll button
console.log('\n=== At bottom: looking for scroll button ===');
let allNames = await app.auto.uia.allNames();
const atBottom = allNames.filter(n =>
  n.includes('Button') && (
    /scroll|jump|bottom|down arrow|chevron/i.test(n)
  )
);
console.log(`Scroll-related buttons at bottom: ${atBottom.length}`);
for (const n of atBottom) console.log(`  ${n}`);

// Step 2: Scroll to top using keyboard
console.log('\n=== Scrolling to top ===');
await app.auto.keyboard.sendKeys('^{HOME}');

// Wait a moment for UI to update
await new Promise(r => setTimeout(r, 1000));

// Step 3: After scroll — search for scroll button again
allNames = await app.auto.uia.allNames();
const atTop = allNames.filter(n =>
  n.includes('Button') && (
    /scroll|jump|bottom|down|arrow|chevron/i.test(n)
  )
);
console.log(`Scroll-related buttons after scrolling to top: ${atTop.length}`);
for (const n of atTop) console.log(`  ${n}`);

// Step 4: List ALL button names (unique) to find the arrow
const allButtons = [...new Set(allNames.filter(n => n.startsWith('ControlType.Button')))];
console.log(`\nAll unique button names (${allButtons.length}):`);
for (const b of allButtons) console.log(`  ${b}`);

// Step 5: Check element count difference
console.log(`\nElements at top: ${allNames.length}`);

// Step 6: Scroll back to bottom
await app.auto.keyboard.sendKeys('^{END}');
await new Promise(r => setTimeout(r, 1000));

const namesAtBottom = await app.auto.uia.allNames();
console.log(`Elements at bottom: ${namesAtBottom.length}`);

// Look for new buttons that appeared after scrolling to bottom
const buttonsAtBottom = [...new Set(namesAtBottom.filter(n => n.startsWith('ControlType.Button')))];
const newButtons = buttonsAtBottom.filter(b => !allButtons.includes(b));
console.log(`\nNew buttons that appeared after scrolling to bottom:`);
for (const b of newButtons) console.log(`  ${b}`);

const missingButtons = allButtons.filter(b => !buttonsAtBottom.includes(b));
console.log(`\nButtons that disappeared after scrolling to bottom:`);
for (const b of missingButtons) console.log(`  ${b}`);

console.log('\n=== Done ===');
app.window.minimize();
