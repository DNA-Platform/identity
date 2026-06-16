// Sprint 72 — Test a full conversation round trip.
// Send a prompt, wait for response, read it, then delete the test conversation.
// MUST minimize between steps. MUST clean up.
//
// Test prompts from Doug (single use only):
//   1. "Did SpaceX go public yet, and if so what was the IPO price and how has it performed since?"
//   2. "How Feferman build on Turing's PhD research topic?"
//   3. "What are the latest Telegram updates? Did TON get turned to GRAM yet?"

import { Claude } from '../claude.ts';

const app = new Claude();

const TEST_PROMPTS = [
  "Did SpaceX go public yet, and if so what was the IPO price and how has it performed since?",
  "How Feferman build on Turing's PhD research topic?",
  "What are the latest Telegram updates? Did TON get turned to GRAM yet?",
];

async function main() {
  // Use the first unused prompt
  const promptIndex = parseInt(process.argv[2] ?? '0');
  if (promptIndex >= TEST_PROMPTS.length) {
    console.error(`No prompt at index ${promptIndex}. Available: 0-${TEST_PROMPTS.length - 1}`);
    process.exit(1);
  }
  const prompt = TEST_PROMPTS[promptIndex];

  console.log('=== Conversation Round Trip Test ===');
  console.log(`Prompt ${promptIndex}: "${prompt.slice(0, 60)}..."`);

  try {
    await app.launch();
    console.log('Launched. Minimizing while we prepare...');
    app.window.minimize();

    // Start a session — will foreground, send, then minimize
    console.log('Starting session...');
    const session = await app.startSession({
      name: `[test] round-trip-${Date.now()}`,
      cleanup: 'delete',  // clean up after ourselves
      timeout: 120_000,
    });

    console.log('Sending prompt...');
    const response = await session.send(prompt);

    console.log('\n=== Response ===');
    console.log(response.text.slice(0, 500));
    if (response.text.length > 500) console.log(`... (${response.text.length} chars total)`);

    console.log(`\nTurns: ${session.turnCount}`);
    console.log(`URL: ${session.url}`);
    console.log(`ID: ${session.id}`);

    // End session — deletes the test conversation
    console.log('\nEnding session (deleting test conversation)...');
    await session.end();
    console.log('Session ended. Conversation deleted.');

  } catch (e: any) {
    console.error('FAILED:', e.message);
  } finally {
    app.window.minimize();
    console.log('Minimized. Done.');
  }
}

main();
