// Test addToProject — explore what the menu actually contains.

import { Claude } from '../claude.ts';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug');
const app = new Claude();

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();
    await app.sidebar.refresh();

    // Open menu and snapshot
    console.log('[test] Opening menu for Financial Analysis...');
    const expanded = await app.auto.uia.expandByName('More options for Financial Analysis');
    console.log('[test] Expanded:', expanded);

    // Read all elements
    const names = await app.auto.uia.allNames();
    const menuItems = names.filter(n =>
      n.includes('MenuItem') || n.includes('Rename') || n.includes('Delete') ||
      n.includes('Pin') || n.includes('project') || n.includes('Project') ||
      n.includes('Add to') || n.includes('Move') || n.includes('Share')
    );
    console.log('[test] Menu items:');
    for (const n of menuItems) console.log('  ', n);

    writeFileSync(resolve(DEBUG, 'menu-snapshot.txt'), names.join('\n'), 'utf-8');

    // Close menu
    await app.auto.keyboard.sendKeys('{ESCAPE}');
  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error('[test] FAILED:', (e as Error).message);
  try { app.window.minimize(); } catch {}
});
