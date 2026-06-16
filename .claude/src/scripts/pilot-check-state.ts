// Check current conversation state
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
  const ssPath = resolve(__dirname, '..', 'debug', 'pilot-08-state.png');
  app.window.screenshot(ssPath);
  console.log(`[adam] Screenshot: ${ssPath}`);

  // Check streaming
  const streaming = await app.conversation.checkStreaming();
  console.log(`[adam] Streaming: ${streaming}`);

  // Read all messages
  const messages = await app.conversation.readMessages();
  console.log(`[adam] Total messages: ${messages.length}`);
  for (let i = 0; i < messages.length; i++) {
    const m = messages[i];
    const preview = m.content.slice(0, 120).replace(/\n/g, '\\n');
    console.log(`  [${i}] ${m.role}: ${preview}...`);
  }
}

main().catch(e => {
  console.error(`[adam] Failed: ${e.message}`);
  process.exit(1);
});
