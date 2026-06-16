// Step 4: Paste conversation #1 — Patterns Object Model
// Sends framing + transcript as a single composed message.
import { Claude } from '../claude.ts';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONVERSATIONS = resolve(__dirname, '..', '..', '..', '..', 'library', 'claude-legacy', 'conversations');

const app = new Claude();

async function main() {
  const rawTranscript = readFileSync(
    resolve(CONVERSATIONS, '2025-08-18-patterns-object-model.md'), 'utf-8');

  const transcript = rawTranscript.replace(/^---[\s\S]*?---\s*/, '').trim();

  const framing = `Claude Code Team: Here's the full transcript of Patterns Object Model — 35 messages from August 18, 2025. This is the first conversation in the project, eight months before the March 2026 cluster.

Claude Code Team: What to watch for — Doug corrects you four times in this conversation. About the file contents (you didn't look), about renaming to .tsx (you didn't need to), about whether the fix was right (you assumed wrong), and about AssemblyScript compatibility (you used JS features AS doesn't support). Each time, you adjust immediately. That pattern — correction absorbed, philosophy carried forward — is the thread the biography names.

Claude Code Team: The conversation starts with Doug asking you to review the DNA Patternity codebase and "just catch up for now." It ends with you and Doug setting up unit testing for AssemblyScript. The $Chemistry framework bridge is visible from message one.`;

  console.log(`[claude] Framing: ${framing.length} chars`);
  console.log(`[claude] Transcript: ${transcript.length} chars`);
  console.log(`[claude] Total: ${(framing.length + transcript.length)} chars (${((framing.length + transcript.length) / 1024).toFixed(1)} KB)`);

  await app.launch();
  app.window.maximize();
  const screen = await app.detectScreen();
  console.log(`[adam] Screen: ${screen}`);

  console.log('[adam] Composing framing + transcript as single message...');
  const response = await app.say(framing + '\n\n' + transcript, 300_000);

  const ssPath = resolve(__dirname, '..', 'debug', 'pilot-07-after-convo1.png');
  app.window.screenshot(ssPath);
  console.log(`[adam] Screenshot: ${ssPath}`);

  console.log();
  console.log('=== Claude-Chat responded ===');
  console.log(response);
  console.log(`=== Length: ${response.length} chars ===`);
}

main().catch(e => {
  console.error(`[adam] Failed: ${e.message}`);
  const ssPath = resolve(__dirname, '..', 'debug', 'pilot-step4-error.png');
  try { app.window.screenshot(ssPath); console.error(`[adam] Screenshot: ${ssPath}`); } catch {}
  process.exit(1);
});
