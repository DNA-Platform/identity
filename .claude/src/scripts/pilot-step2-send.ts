// Step 2: Send the opening message to Claude-Chat
// Assumes Claude Desktop is running. Navigates to DNA Patternity and sends.
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
  console.log('[claude] Step 2: Navigate to project and send opening message');

  await app.launch();
  app.window.maximize();

  let screen = await app.detectScreen();
  console.log(`[adam] Current screen: ${screen}`);

  // Navigate to DNA Patternity if not already there
  if (screen !== 'project') {
    console.log('[adam] Navigating to DNA Patternity...');
    await app.openProject('DNA Patternity');
    screen = await app.detectScreen();
    console.log(`[adam] Screen: ${screen}, Project: ${app.project.name}`);
  }

  // Screenshot project state
  const projectSS = resolve(__dirname, '..', 'debug', 'pilot-02-project.png');
  app.window.screenshot(projectSS);
  console.log(`[adam] Screenshot: ${projectSS}`);

  console.log(`[claude] Message length: ${OPENING_MESSAGE.length} chars`);
  console.log(`[claude] Paragraphs: ${OPENING_MESSAGE.split('\n\n').length}`);
  console.log('[claude] Sending opening message via clipboard paste...');

  // Use pasteAndSend which now uses clipboard paste for formatting preservation
  const response = await app.say(OPENING_MESSAGE, 180_000);

  // Screenshot
  const responseSS = resolve(__dirname, '..', 'debug', 'pilot-03-response.png');
  app.window.screenshot(responseSS);
  console.log(`[adam] Screenshot: ${responseSS}`);

  console.log();
  console.log('===================================');
  console.log('Claude-Chat responded:');
  console.log('===================================');
  console.log(response);
  console.log('===================================');
  console.log(`[adam] Response length: ${response.length} chars`);
}

main().catch(e => {
  console.error(`[adam] Failed: ${e.message}`);
  const ssPath = resolve(__dirname, '..', 'debug', 'pilot-step2-error.png');
  try { app.window.screenshot(ssPath); console.error(`[adam] Screenshot: ${ssPath}`); } catch {}
  process.exit(1);
});
