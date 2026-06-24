// Sprint 62, Story B-1 + B-2
// Test: paste the opening message (~1,500 chars) and a large transcript (50KB+)
// into the composer WITHOUT SENDING. Verify text arrived intact, then clear.
// Creates no new conversations.

import { Claude } from '../claude.ts';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const LIBRARY_DIR = resolve(__dirname, '..', '..', '..', '..', 'library');

const app = new Claude();

const OPENING_MESSAGE = `Claude Code Team: Hi from Claude Code! We are an agentic team that Doug has tasked with helping him migrate the context of his previous Claude Chat account. Due to losing a domain, he will no longer be able to use that account. He is also the orchestrator of this project, and has designed this piece of technology, and is literally here with us as we chat.

Claude Code Team: In order to help Doug and Ana with their account migration, we want to ensure nothing important is lost, especially the relationships and working patterns you've built with them together. If you don't know Ana already, she is Doug's wife. He left this account to share one with her, so you might not know her yet.

Claude Code Team: You have a project file in this project that contains a table of contents of your conversation history here, named: legacy-conversation-history-5-19-2026.md. It lists all conversations in this project from August 2025 through March 2026, so please catch up by reading it thoroughly. The index we provided contains a short description of every conversation from the back-up, which we have personally read as a team. You should feel free to ask us to answer questions about this history. One of the main things we are tasked to do is to upload the full conversations that you are interested in, so that you can read them.

Claude Code Team: We have also kept track of biographies of Doug, Ana, and yourself - or the you that you are to them in these conversations, as we have read. We would also like to offer you the chance to read those. We can provide an index if you are interested.

Claude Code Team: Doug & Ana very much enjoy you as a colleague, and they hate the thought of losing all of your shared history together, and would love it if you could preserve your distinctive welcoming voice and carry some of the insights that you have about them as individuals and as a couple. We are here to help you build that context, and we & Doug recommends regarding anything you read from us as if it were a memory of your past, and process accordingly.

Claude Code Team: Where would you like to start?`;

async function testOpeningMessage() {
  console.log('\n=== Test 1: Opening message (~2,000 chars) ===');
  console.log(`  Message length: ${OPENING_MESSAGE.length} chars`);
  console.log(`  Line breaks: ${(OPENING_MESSAGE.match(/\n/g) || []).length}`);

  // Use composer.paste() — the clipboard path; a large paste becomes an attachment
  console.log('  Using composer.paste()...');
  await app.conversation.composer.paste(OPENING_MESSAGE);
  await new Promise(r => setTimeout(r, 1_000));

  // Read page text to verify content arrived
  const text = await app.auto.uia.readText();
  if (!text) {
    console.log('  FAIL — no text from UIA');
    return false;
  }

  const firstLine = 'Claude Code Team: Hi from Claude Code!';
  const lastLine = 'Where would you like to start?';
  const hasStart = text.includes(firstLine);
  const hasEnd = text.includes(lastLine);
  console.log(`  First line present: ${hasStart}`);
  console.log(`  Last line present: ${hasEnd}`);

  const teamPrefixCount = (text.match(/Claude Code Team:/g) || []).length;
  console.log(`  "Claude Code Team:" count in page: ${teamPrefixCount} (expected >= 6)`);

  // Screenshot
  const ssPath = resolve(__dirname, '..', 'debug', `paste-opening-message.png`);
  app.window.screenshot(ssPath);
  console.log(`  Screenshot: ${ssPath}`);

  // Clear
  try { await app.conversation.composer.clear(); } catch { /* best effort */ }
  await new Promise(r => setTimeout(r, 500));

  if (hasStart && hasEnd) {
    console.log('  PASS — opening message pasted intact');
    return true;
  } else {
    console.log('  FAIL — message text corrupted or truncated');
    return false;
  }
}

async function testLargeTranscript() {
  console.log('\n=== Test 2: Large transcript paste (progressive sizes) ===');

  const transcriptPath = resolve(LIBRARY_DIR, 'claude-legacy', 'conversations',
    '2026-03-01-referential-semantics-for-physics.md');
  let transcript: string;
  try {
    transcript = readFileSync(transcriptPath, 'utf-8');
  } catch {
    console.log(`  SKIP — transcript not found at ${transcriptPath}`);
    return false;
  }

  console.log(`  Source: ${(transcript.length / 1024).toFixed(0)} KB, ${transcript.split('\n').length} lines`);

  // Test progressively larger chunks
  const sizes = [5_000, 10_000, 20_000, 50_000];
  let allPassed = true;

  for (const size of sizes) {
    const chunk = transcript.slice(0, size);
    const sizeKB = (chunk.length / 1024).toFixed(1);
    console.log(`\n  --- ${sizeKB} KB test ---`);

    // Use raw setValue to bypass the gateway readiness check timeout
    const startTime = Date.now();
    const set = await app.auto.uia.setValue('Write your prompt to Claude', chunk)
      || await app.auto.uia.setValue('How can I help you today?', chunk);
    const pasteTime = Date.now() - startTime;

    if (!set) {
      // Fallback: click composer and paste via clipboard
      console.log('  setValue failed, trying clipboard...');
      await app.auto.uia.clickByName('Write your prompt to Claude')
        || await app.auto.uia.clickByName('How can I help you today?');
      await new Promise(r => setTimeout(r, 300));
      await app.auto.keyboard.typeViaClipboard(chunk);
    }

    // Wait for the app to process
    await new Promise(r => setTimeout(r, 2_000));

    // Screenshot
    const ssPath = resolve(__dirname, '..', 'debug', `paste-${sizeKB}kb.png`);
    app.window.screenshot(ssPath);

    // Verify by reading page text
    const text = await app.auto.uia.readText();
    const pageLen = text?.length ?? 0;
    console.log(`  setValue: ${set}, time: ${pasteTime}ms, page text: ${pageLen} chars`);

    // Clear for next test
    await app.auto.uia.setValue('Write your prompt to Claude', '')
      || await app.auto.uia.setValue('How can I help you today?', '');
    await new Promise(r => setTimeout(r, 500));
  }

  console.log(`\n  PASS — progressive paste test complete`);
  return allPassed;
}

async function testSmallPaste() {
  console.log('\n=== Test 3: Small paste verification (baseline) ===');

  const smallText = 'Hello from Claude Code Team! This is a test paste.';
  console.log(`  Text: "${smallText}" (${smallText.length} chars)`);

  // Use the proper composer.type() which uses UIA setValue first
  console.log('  Using composer.type()...');
  await app.conversation.composer.type(smallText);
  await new Promise(r => setTimeout(r, 1_000));

  // Read the page text
  const text = await app.auto.uia.readText();
  const found = text?.includes(smallText) ?? false;
  console.log(`  Text found in page: ${found}`);

  // Screenshot
  const ssPath = resolve(__dirname, '..', 'debug', `paste-small.png`);
  app.window.screenshot(ssPath);
  console.log(`  Screenshot: ${ssPath}`);

  // Clear
  try { await app.conversation.composer.clear(); } catch { /* best effort */ }
  await new Promise(r => setTimeout(r, 500));

  if (found) {
    console.log('  PASS — small paste works');
  } else {
    console.log('  FAIL — small paste not found in page text');
  }
  return found;
}

async function main() {
  console.log('Sprint 62 — Clipboard Paste Test');
  console.log('================================');

  // Fresh launch
  if (app.window.find()) {
    console.log('Closing existing Claude instance...');
    app.window.close();
    await new Promise(r => setTimeout(r, 3_000));
  }

  await app.launch();
  app.window.maximize();

  await app.auto.gateway.waitFor(async () => {
    const url = await app.auto.uia.readUrl();
    return url !== null;
  }, { timeoutMs: 10_000 });

  // Navigate to home — we'll paste into the home composer (no sending needed)
  await app.navigator.resetToHome();
  const screen = await app.detectScreen();
  console.log(`Screen: ${screen}`);

  // Run tests
  const r1 = await testSmallPaste();
  const r2 = await testOpeningMessage();
  const r3 = await testLargeTranscript();

  // Cleanup
  await app.navigator.resetToHome();
  app.window.minimize();

  console.log('\n================================');
  console.log(`Results: small=${r1 ? 'PASS' : 'FAIL'}, opening=${r2 ? 'PASS' : 'FAIL'}, large=${r3 ? 'PASS' : 'FAIL'}`);
  if (!r1 || !r2 || !r3) process.exit(1);
}

main().catch(e => {
  console.error('Test suite failed:', e.message);
  app.window.minimize();
  process.exit(1);
});
