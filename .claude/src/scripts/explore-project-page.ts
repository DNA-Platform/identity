///: Explore the Claude project pages via raw UIA — bypass broken parsers.

import { Claude } from '../claude.ts';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug', 'explore-project');
if (!existsSync(DEBUG)) mkdirSync(DEBUG, { recursive: true });

const app = new Claude();

async function capture(label: string): Promise<void> {
  const names = await app.auto.uia.allNames();
  const text = await app.auto.uia.readText() ?? '(null)';
  writeFileSync(resolve(DEBUG, `${label}-names.txt`), names.join('\n'));
  writeFileSync(resolve(DEBUG, `${label}-text.txt`), text);
  console.log(`[${label}] ${names.length} elements, ${text.length} chars`);
}

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();

    // Step 1: Click Projects button in sidebar (raw UIA, no parser)
    console.log('[1] Clicking Projects in sidebar...');
    await app.auto.uia.invokeByName('Projects');
    await new Promise(r => setTimeout(r, 3000));
    await capture('01-after-click-projects');

    // Step 2: Look for Claude in the project grid and click it
    console.log('[2] Looking for Claude project card...');
    const clicked = await app.auto.uia.invokeLink('Claude');
    if (!clicked) {
      console.log('[2] invokeLink failed. Trying invokeByName...');
      await app.auto.uia.invokeByName('Claude');
    }
    await new Promise(r => setTimeout(r, 3000));
    await capture('02-after-click-claude');

    // Step 3: Check URL to confirm we're on the project page
    const url = await app.auto.uia.readUrl();
    console.log('[3] URL:', url);

  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { app.window.minimize(); } catch {}
});
