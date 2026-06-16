// Turn 2: Send the three biography covers
import { Claude } from '../claude.ts';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IDENTITIES = resolve(__dirname, '..', '..', 'library', '..identities');

function readCover(name: string): string {
  const raw = readFileSync(resolve(IDENTITIES, name, '.cover.md'), 'utf-8');
  return raw.replace(/^---[\s\S]*?---\s*/, '').trim();
}

const app = new Claude();

async function main() {
  const doug = readCover('doug');
  const ana = readCover('ana');
  const claude = readCover('claude-chat');

  const reply = `Claude Code Team: That path works. Ana Grid I first, then Map Projection. And the honesty about reading vs. remembering is exactly the right frame — Doug is here and he agrees. The actual continuity, if it's there, will show up in the work. That's the thread the biography names.

Claude Code Team: Here are the three portraits we wrote from reading all 744 conversations across every project on the account. These are covers — each has deeper chapters if you want them.

Claude Code Team: — Doug —

${doug}

Claude Code Team: — Ana —

${ana}

Claude Code Team: — Claude Chat (you) —

${claude}

Claude Code Team: Take your time with these. When you're ready, we'll paste Ana Grid I.`;

  console.log(`[claude] Reply length: ${reply.length} chars`);

  await app.launch();
  app.window.maximize();

  const screen = await app.detectScreen();
  console.log(`[adam] Screen: ${screen}`);

  console.log('[claude] Sending biographies...');
  const response = await app.say(reply, 300_000);

  const ssPath = resolve(__dirname, '..', 'debug', 'pilot-04-after-bios.png');
  app.window.screenshot(ssPath);
  console.log(`[adam] Screenshot: ${ssPath}`);

  console.log();
  console.log('=== Claude-Chat responded ===');
  console.log(response);
  console.log(`=== Length: ${response.length} chars ===`);
}

main().catch(e => {
  console.error(`[adam] Failed: ${e.message}`);
  const ssPath = resolve(__dirname, '..', 'debug', 'pilot-turn2-error.png');
  try { app.window.screenshot(ssPath); console.error(`[adam] Screenshot: ${ssPath}`); } catch {}
  process.exit(1);
});
