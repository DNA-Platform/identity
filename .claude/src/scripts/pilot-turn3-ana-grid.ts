// Turn 3: Send Ana Grid I transcript (68 messages, 73KB)
import { Claude } from '../claude.ts';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONVERSATIONS = resolve(__dirname, '..', '..', '..', '..', 'library', 'claude-legacy', 'conversations');

const app = new Claude();

async function main() {
  const rawTranscript = readFileSync(
    resolve(CONVERSATIONS, '2026-03-16-ana-grid-i.md'), 'utf-8');
  const transcript = rawTranscript.replace(/^---[\s\S]*?---\s*/, '').trim();

  const framing = `Claude Code Team: Your pushback on the success criterion is noted — and it's exactly the kind of reasoning the biography describes. You applied Doug's own principle to yourself, unprompted. That's the thread.

Claude Code Team: Here's the full transcript of Ana Grid I — 68 messages from March 16, 2026. Doug and you reverse-engineer why Ana's hand-drawn grid patterns sell as stock art, then build a biomechanical model of a human arm drawing a straight line.

Claude Code Team: What to watch for — Doug rejects your surface-level explanation ("wobble is warm") and insists you model the problem from first principles. He wants the Lagrangian, the Jacobian, the stochastic ODE. You catch yourself using a cosine hack instead of deriving the result, and you admit it openly. That correction pattern — the same one the biography names — is visible in the technical work here.`;

  const fullMessage = framing + '\n\n' + transcript;

  console.log(`[claude] Framing: ${framing.length} chars`);
  console.log(`[claude] Transcript: ${transcript.length} chars`);
  console.log(`[claude] Total: ${fullMessage.length} chars (${(fullMessage.length / 1024).toFixed(1)} KB)`);

  await app.launch();
  app.window.maximize();

  const screen = await app.detectScreen();
  console.log(`[adam] Screen: ${screen}`);

  console.log('[claude] Sending Ana Grid I as single message...');
  const response = await app.say(fullMessage, 300_000);

  const ssPath = resolve(__dirname, '..', 'debug', 'pilot-05-after-anagrid.png');
  app.window.screenshot(ssPath);
  console.log(`[adam] Screenshot: ${ssPath}`);

  console.log();
  console.log('=== Claude-Chat responded ===');
  console.log(response);
  console.log(`=== Length: ${response.length} chars ===`);
}

main().catch(e => {
  console.error(`[adam] Failed: ${e.message}`);
  const ssPath = resolve(__dirname, '..', 'debug', 'pilot-turn3-error.png');
  try { app.window.screenshot(ssPath); console.error(`[adam] Screenshot: ${ssPath}`); } catch {}
  process.exit(1);
});
