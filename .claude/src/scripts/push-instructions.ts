import { Claude } from '../claude.ts';

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const INSTRUCTIONS_PATH = resolve(__dirname, '../../../../library/claude-legacy/instructions.md');

const app = new Claude();

async function main() {
  const instructions = readFileSync(INSTRUCTIONS_PATH, 'utf-8').trim();
  console.log(`Loaded instructions (${instructions.length} chars, ${instructions.split('\n').length} lines)`);

  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  // Navigate to settings/general
  const url = await app.auto.uia.readUrl();
  if (!url?.includes('/settings/general')) {
    await app.auto.keyboard.sendKeys('^{,}');
    await new Promise(r => setTimeout(r, 2000));
    await app.auto.uia.invokeLink('General');
    await new Promise(r => setTimeout(r, 2000));
  }

  // Click the instructions field to focus it
  await app.auto.uia.clickByName('Instructions for Claude');
  await new Promise(r => setTimeout(r, 500));

  // Select all and delete existing content
  await app.auto.keyboard.sendKeys('^a');
  await new Promise(r => setTimeout(r, 300));
  await app.auto.keyboard.sendKeys('{DELETE}');
  await new Promise(r => setTimeout(r, 300));

  // Paste new content via clipboard (now using base64 encoding for safety)
  await app.auto.keyboard.typeViaClipboard(instructions);
  console.log('Pasted instructions');

  await new Promise(r => setTimeout(r, 2000));
  app.window.minimize();
  console.log('Done — check the instructions in the account settings.');
}

main().catch(console.error);
