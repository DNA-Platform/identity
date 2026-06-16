// Read Claude-Chat's last response from the current conversation
import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();

  const screen = await app.detectScreen();
  console.log(`[adam] Screen: ${screen}`);

  // Screenshot current state
  const ssPath = resolve(__dirname, '..', 'debug', 'pilot-04-current.png');
  app.window.screenshot(ssPath);
  console.log(`[adam] Screenshot: ${ssPath}`);

  // Check if streaming
  const streaming = await app.conversation.checkStreaming();
  console.log(`[adam] Still streaming: ${streaming}`);

  if (streaming) {
    console.log('[adam] Waiting for response to complete...');
    await app.conversation.waitForResponse(180_000);
  }

  // Read the response
  const response = await app.conversation.readLastResponse();
  console.log();
  console.log('=== Claude-Chat responded ===');
  console.log(response);
  console.log(`=== Length: ${response.length} chars ===`);
}

main().catch(e => {
  console.error(`[adam] Failed: ${e.message}`);
  process.exit(1);
});
