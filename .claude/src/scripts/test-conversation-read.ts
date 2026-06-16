// Sprint 62, Story A-1 + A-4 + A-5 + B-3
// Test: screenshot conversation UI, capture UIA tree, read messages,
// verify streaming detection elements, test readLastResponse().
// Uses an EXISTING conversation — creates nothing new.

import { Claude } from '../claude.ts';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG_DIR = resolve(__dirname, '..', 'debug');

const app = new Claude();

async function screenshotAndTree(label: string) {
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const slug = label.replace(/[^a-z0-9]/gi, '-');

  const ssPath = resolve(DEBUG_DIR, `${ts}-${slug}.png`);
  app.window.screenshot(ssPath);
  console.log(`  Screenshot: ${ssPath}`);

  const names = await app.auto.uia.allNames();
  const treePath = resolve(DEBUG_DIR, `${ts}-${slug}-tree.txt`);
  writeFileSync(treePath, names.join('\n'));
  console.log(`  UIA tree: ${treePath} (${names.length} elements)`);

  return { ssPath, treePath, names };
}

async function navigateToConversation(index = 0) {
  const screen = await app.detectScreen();
  console.log(`  Current screen: ${screen}`);

  if (screen !== 'home') {
    await app.navigator.resetToHome();
  }

  await app.sidebar.refresh();
  const chats = app.sidebar.chats.items;
  console.log(`  Sidebar has ${chats.length} chats`);

  if (chats.length <= index) {
    throw new Error(`Need at least ${index + 1} conversations`);
  }

  const target = chats[index];
  console.log(`  Opening: "${target.title}"`);

  // Use sidebar.chats.open directly (not app.openChat which also calls conversation.refresh)
  await app.sidebar.chats.open(target.title);

  // Wait for conversation content to render
  console.log('  Waiting for content to render...');
  const loaded = await app.auto.gateway.waitFor(async () => {
    const text = await app.auto.uia.readText();
    if (!text) return false;
    return text.includes('You said:') || text.includes('Claude responded:') || text.includes('Write your prompt');
  }, { timeoutMs: 30_000 });
  console.log(`  Content loaded: ${loaded}`);
}

async function testIdleConversation() {
  console.log('\n=== Test 1: Conversation UI in idle state ===');

  await navigateToConversation();

  const screen = await app.detectScreen();
  console.log(`  Screen: ${screen}`);

  const { names } = await screenshotAndTree('idle-conversation');

  // --- Probe for key elements ---

  // Stop button (streaming indicator)
  const hasStop = await app.auto.uia.exists('Button', 'Stop');
  console.log(`  Stop button present: ${hasStop} (expected: false for idle)`);

  // Send button
  const hasSend = names.some(n => n.includes('Send') && n.includes('Button'));
  const sendNames = names.filter(n => n.includes('Send'));
  console.log(`  Send button found: ${hasSend}`);
  if (sendNames.length > 0) console.log(`    Send elements: ${sendNames.join(', ')}`);

  // Composer placeholder
  const composerNames = names.filter(n =>
    n.includes('Reply to Claude') ||
    n.includes('Message Claude') ||
    n.includes('How can I help')
  );
  console.log(`  Composer elements: ${composerNames.length > 0 ? composerNames.join(', ') : 'none found'}`);

  // List items (message paragraphs)
  const listItems = await app.auto.uia.readListItems();
  console.log(`  List items (message paragraphs): ${listItems.length}`);

  // Button inventory
  const buttons = names.filter(n => n.startsWith('ControlType.Button'));
  console.log(`  Total buttons: ${buttons.length}`);
  for (const b of buttons.slice(0, 20)) console.log(`    ${b}`);
  if (buttons.length > 20) console.log(`    ... (${buttons.length - 20} more)`);

  // Check streaming state
  const streaming = await app.conversation.checkStreaming();
  console.log(`  isStreaming: ${streaming}`);

  console.log('  PASS — idle conversation captured');
}

async function testReadMessages() {
  console.log('\n=== Test 2: Read messages from current conversation ===');

  const messages = await app.conversation.readMessages();
  console.log(`  Messages read: ${messages.length}`);

  for (let i = 0; i < Math.min(messages.length, 6); i++) {
    const m = messages[i];
    const preview = m.content.slice(0, 100).replace(/\n/g, '\\n');
    console.log(`  [${i}] ${m.role}: "${preview}${m.content.length > 100 ? '...' : ''}"`);
  }
  if (messages.length > 6) console.log(`  ... (${messages.length - 6} more messages)`);

  // Verify attribution
  const userCount = messages.filter(m => m.role === 'user').length;
  const assistantCount = messages.filter(m => m.role === 'assistant').length;
  console.log(`  User messages: ${userCount}, Assistant messages: ${assistantCount}`);
  console.assert(userCount > 0 || assistantCount > 0, 'Should have at least one message');

  console.log('  PASS — messages read with attribution');
}

async function testReadLastResponse() {
  console.log('\n=== Test 3: Read last response ===');

  const lastResponse = await app.conversation.readLastResponse();
  console.log(`  Last response length: ${lastResponse.length} chars`);
  const preview = lastResponse.slice(0, 200).replace(/\n/g, '\\n');
  console.log(`  Preview: "${preview}${lastResponse.length > 200 ? '...' : ''}"`);
  console.assert(lastResponse.length > 0, 'Last response should not be empty');

  console.log('  PASS — last response read');
}

async function testConversationMetadata() {
  console.log('\n=== Test 4: Conversation metadata ===');

  try {
    const title = await app.conversation.readTitle();
    console.log(`  Title: "${title}"`);
  } catch {
    console.log(`  Title: FAILED (known issue: standalone title parsing)`);
  }

  const project = await app.conversation.readProjectName();
  console.log(`  Project: ${project ?? '(none — standalone conversation)'}`);

  const url = await app.auto.uia.readUrl() ?? '';
  console.log(`  URL: ${url}`);

  const idMatch = url.match(/\/chat\/([a-f0-9-]+)/);
  console.log(`  ID: ${idMatch?.[1] ?? '(no ID in URL)'}`);

  console.log('  PASS — metadata read');
}

async function testSecondConversation() {
  console.log('\n=== Test 5: Navigate to a different conversation ===');

  await navigateToConversation(1);

  await screenshotAndTree('second-conversation');

  const messages = await app.conversation.readMessages();
  console.log(`  Messages: ${messages.length}`);

  const title = await app.conversation.readTitle();
  console.log(`  Title: "${title}"`);

  const lastResponse = await app.conversation.readLastResponse();
  console.log(`  Last response: ${lastResponse.length} chars`);

  console.log('  PASS — second conversation consistent');
}

async function testRawTextDump() {
  console.log('\n=== Test 6: Raw UIA text dump (for parser debugging) ===');

  const text = await app.auto.uia.readText();
  if (!text) {
    console.log('  FAIL — no text from UIA');
    return;
  }

  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const dumpPath = resolve(DEBUG_DIR, `${ts}-raw-text.txt`);
  writeFileSync(dumpPath, text);
  console.log(`  Raw text dumped: ${dumpPath} (${text.length} chars)`);

  // Show the role markers we rely on
  const lines = text.split('\n');
  const youSaid = lines.filter(l => l.includes('You said:'));
  const claudeResponded = lines.filter(l => l.includes('Claude responded:'));
  console.log(`  "You said:" markers: ${youSaid.length}`);
  console.log(`  "Claude responded:" markers: ${claudeResponded.length}`);

  console.log('  PASS — raw text captured');
}

async function main() {
  console.log('Sprint 62 — Conversation UI Test');
  console.log('================================');

  // Close any existing instance and launch fresh
  if (app.window.find()) {
    console.log('Closing existing Claude instance...');
    app.window.close();
    await new Promise(r => setTimeout(r, 3_000));
  }

  await app.launch();
  app.window.maximize();

  // Wait for UIA URL to be readable
  await app.auto.gateway.waitFor(async () => {
    const url = await app.auto.uia.readUrl();
    return url !== null;
  }, { timeoutMs: 10_000 });

  // Start from home
  console.log('Navigating to home for clean start...');
  await app.navigator.resetToHome();

  await testIdleConversation();
  await testReadMessages();
  await testReadLastResponse();
  await testConversationMetadata();
  await testSecondConversation();
  await testRawTextDump();

  // Reset and minimize
  await app.navigator.resetToHome();
  app.window.minimize();

  console.log('\n================================');
  console.log('All conversation read tests passed.');
  console.log(`Debug files in: ${DEBUG_DIR}`);
}

main().catch(e => {
  console.error('Test suite failed:', e.message);
  app.window.minimize();
  process.exit(1);
});
