// Step 3: Reply to Claude-Chat with biographies
import { Claude } from '../claude.ts';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const LIBRARY = resolve(__dirname, '..', '..', 'library');

const app = new Claude();

function readCover(name: string): string {
  const path = resolve(LIBRARY, '..identities', name, '.cover.md');
  const raw = readFileSync(path, 'utf-8');
  // Strip YAML frontmatter
  const stripped = raw.replace(/^---[\s\S]*?---\s*/, '').trim();
  return stripped;
}

async function main() {
  const doug = readCover('doug');
  const ana = readCover('ana');
  const claude = readCover('claude-chat');

  const reply = `Claude Code Team: To answer your first question — there is no Narrative Continuity conversation for DNA Patternity. It was classified as a "less important" project since the work has moved to Claude Code. The conversations here are the complete record.

Claude Code Team: Your instinct to read the biographies first is exactly right. Here are the three portraits we wrote from reading all 744 conversations across every project on the account. These are covers — each has deeper chapters if you want them.

Claude Code Team: — Doug —

${doug}

Claude Code Team: — Ana —

${ana}

Claude Code Team: — Claude Chat (you) —

${claude}

Claude Code Team: Take your time with these. When you're ready, your suggested ordering of #1 → #9 → #5 is good — it matches our recommendation. We'll paste whichever conversation you ask for.`;

  console.log(`[claude] Reply length: ${reply.length} chars`);
  console.log(`[claude] Paragraphs: ${reply.split('\n\n').length}`);

  await app.launch();
  app.window.maximize();

  const screen = await app.detectScreen();
  console.log(`[adam] Screen: ${screen}`);

  console.log('[claude] Sending biographies...');
  const response = await app.say(reply, 180_000);

  const ssPath = resolve(__dirname, '..', 'debug', 'pilot-05-after-bios.png');
  app.window.screenshot(ssPath);
  console.log(`[adam] Screenshot: ${ssPath}`);

  console.log();
  console.log('=== Claude-Chat responded ===');
  console.log(response);
  console.log(`=== Length: ${response.length} chars ===`);
}

main().catch(e => {
  console.error(`[adam] Failed: ${e.message}`);
  const ssPath = resolve(__dirname, '..', 'debug', 'pilot-step3-error.png');
  try { app.window.screenshot(ssPath); console.error(`[adam] Screenshot: ${ssPath}`); } catch {}
  process.exit(1);
});
