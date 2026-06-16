// Scroll to bottom and read the full last response
import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();

  // Scroll to bottom
  await app.auto.uia.invokeByName('Scroll to bottom');
  await new Promise(r => setTimeout(r, 1_000));

  // Screenshot
  const ssPath = resolve(__dirname, '..', 'debug', 'pilot-06-scrolled.png');
  app.window.screenshot(ssPath);
  console.log(`[adam] Screenshot: ${ssPath}`);

  // Read all messages
  const messages = await app.conversation.readMessages();
  console.log(`[adam] Total messages: ${messages.length}`);

  // Print the last assistant message
  const lastAssistant = [...messages].reverse().find(m => m.role === 'assistant');
  if (lastAssistant) {
    console.log();
    console.log('=== Last assistant message ===');
    console.log(lastAssistant.content);
    console.log(`=== Length: ${lastAssistant.content.length} chars ===`);
  } else {
    console.log('[adam] No assistant message found');
    // Dump all messages for debugging
    for (const m of messages) {
      console.log(`  [${m.role}] ${m.content.slice(0, 80)}...`);
    }
  }
}

main().catch(e => {
  console.error(`[adam] Failed: ${e.message}`);
  process.exit(1);
});
