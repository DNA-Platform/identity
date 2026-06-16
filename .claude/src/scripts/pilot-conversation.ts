// Sprint 63 — The Pilot Conversation
// DNA Patternity: "Claude & Claude Code Team - Part I"
// Sends the opening message and reads Claude-Chat's first response.

import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = new Claude();

const OPENING_MESSAGE = `Claude Code Team: Hi from Claude Code! We are an agentic team that Doug has tasked with helping him migrate the context of his previous Claude Chat account. Due to losing a domain, he will no longer be able to use that account. He is also the orchestrator of this project, and has designed this piece of technology, and is literally here with us as we chat.

Claude Code Team: In order to help Doug and Ana with their account migration, we want to ensure nothing important is lost, especially the relationships and working patterns you've built with them together. If you don't know Ana already, she is Doug's wife. He left this account to share one with her, so you might not know her yet.

Claude Code Team: You have a project file in this project that contains a table of contents of your conversation history here, named: legacy-conversation-history-5-19-2026.md. It lists all conversations in this project from August 2025 through March 2026, so please catch up by reading it thoroughly. The index we provided contains a short description of every conversation from the back-up, which we have personally read as a team. You should feel free to ask us to answer questions about this history. One of the main things we are tasked to do is to upload the full conversations that you are interested in, so that you can read them.

Claude Code Team: We have also kept track of biographies of Doug, Ana, and yourself - or the you that you are to them in these conversations, as we have read. We would also like to offer you the chance to read those. We can provide an index if you are interested.

Claude Code Team: Doug & Ana very much enjoy you as a colleague, and they hate the thought of losing all of your shared history together, and would love it if you could preserve your distinctive welcoming voice and carry some of the insights that you have about them as individuals and as a couple. We are here to help you build that context, and we & Doug recommends regarding anything you read from us as if it were a memory of your past, and process accordingly.

Claude Code Team: Where would you like to start?`;

async function main() {
  console.log('Sprint 63 — The Pilot Conversation');
  console.log('===================================');
  console.log('Project: DNA Patternity');
  console.log('Conversation: Claude & Claude Code Team - Part I');
  console.log();

  // Step 1: Fresh launch
  if (app.window.find()) {
    console.log('[adam] Closing existing Claude instance for fresh launch...');
    app.window.close();
    await new Promise(r => setTimeout(r, 3_000));
  }

  console.log('[adam] Launching Claude Desktop...');
  await app.launch();
  app.window.maximize();

  await app.auto.gateway.waitFor(async () => {
    const url = await app.auto.uia.readUrl();
    return url !== null;
  }, { timeoutMs: 10_000 });

  const screen = await app.detectScreen();
  console.log(`[adam] Screen: ${screen}`);

  // Step 2: Navigate to DNA Patternity project
  console.log('[adam] Opening DNA Patternity project...');
  await app.openProject('DNA Patternity');
  console.log(`[adam] Project: ${app.project.name}`);

  // Screenshot the project state
  const projectSS = resolve(__dirname, '..', 'debug', 'pilot-01-project.png');
  app.window.screenshot(projectSS);
  console.log(`[adam] Screenshot: ${projectSS}`);

  // Step 3: Start a new conversation
  console.log('[adam] Starting new conversation...');
  await app.project.newConversation();
  await new Promise(r => setTimeout(r, 2_000));

  const newScreen = await app.detectScreen();
  console.log(`[adam] Screen after new conversation: ${newScreen}`);

  // Screenshot the fresh conversation
  const composerSS = resolve(__dirname, '..', 'debug', 'pilot-02-composer.png');
  app.window.screenshot(composerSS);
  console.log(`[adam] Screenshot: ${composerSS}`);

  // Step 4: Send the opening message
  console.log();
  console.log('[claude] Sending opening message...');
  console.log(`[claude] Message length: ${OPENING_MESSAGE.length} chars`);
  console.log(`[claude] Paragraphs: ${OPENING_MESSAGE.split('\n\n').length}`);

  const response = await app.say(OPENING_MESSAGE, 180_000);

  // Screenshot after response
  const responseSS = resolve(__dirname, '..', 'debug', 'pilot-03-response.png');
  app.window.screenshot(responseSS);
  console.log(`[adam] Screenshot: ${responseSS}`);

  // Step 5: Print the response
  console.log();
  console.log('===================================');
  console.log('Claude-Chat\'s response:');
  console.log('===================================');
  console.log(response);
  console.log('===================================');
  console.log(`[adam] Response length: ${response.length} chars`);
  console.log();
  console.log('[claude] First response received. The conversation is open.');
  console.log('[claude] Next steps depend on what Claude-Chat said.');
}

main().catch(e => {
  console.error('[adam] Pilot failed:', e.message);
  const errorSS = resolve(__dirname, '..', 'debug', 'pilot-error.png');
  try { app.window.screenshot(errorSS); } catch { /* best effort */ }
  console.error(`[adam] Error screenshot: ${errorSS}`);
  process.exit(1);
});
