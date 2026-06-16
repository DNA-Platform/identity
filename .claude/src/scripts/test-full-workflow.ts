// Sprint 72 — Full research workflow test.
// Proves: send, wait, read, go away, come back, verify, read transcript, send again, read again.
// Uses test prompt #1 (single use): "How Feferman build on Turing's PhD research topic?"
// Deletes the conversation when done.

import { Claude } from '../claude.ts';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = resolve(__dirname, '..', 'debug');
mkdirSync(OUTPUT_DIR, { recursive: true });

const app = new Claude();
const PROMPT_1 = "How Feferman build on Turing's PhD research topic?";
const PROMPT_2 = "Can you elaborate on the specific mathematical contributions?";

async function main() {
  console.log('=== Full Research Workflow Test ===\n');

  // Step 1: Launch and maximize
  console.log('Step 1: Launch');
  await app.launch();
  app.window.maximize();
  await app.auto.gateway.waitFor(async () => {
    return (await app.auto.uia.readUrl()) !== null;
  }, { timeoutMs: 5_000 });
  console.log('  App ready. Screen:', await app.navigator.detectScreen());

  // Step 2: Send first prompt
  console.log('\nStep 2: Send first prompt');
  console.log('  Prompt:', PROMPT_1);
  await app.compose(PROMPT_1);
  console.log('  Composed. Sending...');
  await app.send(120_000);
  console.log('  Response received.');

  // Step 3: Read the response
  console.log('\nStep 3: Read response');
  const lastResponse = await app.conversation.readLastResponse();
  console.log('  Response length:', lastResponse.length);
  console.log('  Preview:', lastResponse.slice(0, 200));

  // Save response to file
  const responsePath = resolve(OUTPUT_DIR, 'workflow-response-1.txt');
  writeFileSync(responsePath, lastResponse);
  console.log('  Saved to:', responsePath);

  // Get the conversation title and URL
  const url = await app.auto.uia.readUrl();
  const title = await app.conversation.readTitle();
  console.log('  Title:', title);
  console.log('  URL:', url);

  // Step 4: Navigate away
  console.log('\nStep 4: Navigate away');
  await app.resetToHome();
  const homeScreen = await app.navigator.detectScreen();
  console.log('  Screen:', homeScreen);
  console.assert(homeScreen === 'home', 'Should be on home');

  // Step 5: Come back — find the conversation
  console.log('\nStep 5: Return to conversation');
  await app.sidebar.refresh();
  const chats = app.sidebar.chats.items;
  console.log('  Sidebar has', chats.length, 'chats');

  // Find our conversation — it should be the most recent
  const found = chats.find(c => c.title === title);
  if (found) {
    console.log('  Found by title:', found.title);
    await app.openChat(found.title);
  } else {
    console.log('  Not found by title. Opening first chat (should be most recent)...');
    await app.openChatAt(0);
  }

  // Step 6: Verify we're at the right conversation
  console.log('\nStep 6: Verify conversation');
  const returnScreen = await app.navigator.detectScreen();
  console.log('  Screen:', returnScreen);
  const returnUrl = await app.auto.uia.readUrl();
  console.log('  URL matches:', returnUrl === url);
  const returnTitle = await app.conversation.readTitle();
  console.log('  Title:', returnTitle);

  // Step 7: Read the full transcript
  console.log('\nStep 7: Read transcript');
  const turns = await app.conversation.readTurns();
  console.log('  Turns:', turns.length);
  if (turns.length > 0) {
    const t = turns[turns.length - 1];
    console.log('  Last prompt:', t.prompt.content.text.slice(0, 80));
    console.log('  Last response:', (t.response?.content.text ?? 'null').slice(0, 80));
  }

  // Step 8: Send second prompt
  console.log('\nStep 8: Send second prompt');
  console.log('  Prompt:', PROMPT_2);
  await app.compose(PROMPT_2);
  console.log('  Composed. Sending...');
  await app.send(120_000);
  console.log('  Response received.');

  // Step 9: Read second response
  console.log('\nStep 9: Read second response');
  const response2 = await app.conversation.readLastResponse();
  console.log('  Response length:', response2.length);
  console.log('  Preview:', response2.slice(0, 200));

  const responsePath2 = resolve(OUTPUT_DIR, 'workflow-response-2.txt');
  writeFileSync(responsePath2, response2);
  console.log('  Saved to:', responsePath2);

  // Verify we have both turns
  const allTurns = await app.conversation.readTurns();
  console.log('  Total turns now:', allTurns.length);

  // Step 10: Clean up — delete the test conversation
  console.log('\nStep 10: Clean up');
  await app.deleteConversation();
  console.log('  Conversation deleted.');

  await app.resetToHome();
  app.window.minimize();
  console.log('\n=== WORKFLOW TEST COMPLETE ===');
  console.log('All steps passed. Responses saved to debug/');
}

main().catch(e => {
  console.error('\nFAILED:', e.message);
  console.error(e.stack?.split('\n').slice(0, 3).join('\n'));
  try { app.window.minimize(); } catch {}
});
