// Wait for streaming to complete and read the latest response
import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();

  const streaming = await app.conversation.checkStreaming();
  console.log(`[adam] Streaming: ${streaming}`);

  if (streaming) {
    console.log('[adam] Waiting for response to complete (up to 5 min)...');
    await app.conversation.waitForResponse(300_000);
    console.log('[adam] Response complete.');
  }

  // Scroll to bottom
  await app.auto.uia.invokeByName('Scroll to bottom');
  await new Promise(r => setTimeout(r, 1_000));

  // Screenshot
  const ssPath = resolve(__dirname, '..', 'debug', 'pilot-09-transcript-response.png');
  app.window.screenshot(ssPath);
  console.log(`[adam] Screenshot: ${ssPath}`);

  // Read messages
  const messages = await app.conversation.readMessages();
  console.log(`[adam] Total messages: ${messages.length}`);

  // Print the last assistant message
  const lastAssistant = [...messages].reverse().find(m => m.role === 'assistant');
  if (lastAssistant) {
    console.log();
    console.log('=== Last assistant message ===');
    console.log(lastAssistant.content);
    console.log(`=== Length: ${lastAssistant.content.length} chars ===`);
  }
}

main().catch(e => {
  console.error(`[adam] Failed: ${e.message}`);
  process.exit(1);
});
