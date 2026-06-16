// Try expandByName on the "More options" button (uses ExpandCollapsePattern)
import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { writeFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug');

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();

  const title = 'Migrating Claude Chat account history and relationships';

  console.log('[claude] Expanding "More options" via ExpandCollapsePattern...');
  const expanded = await app.auto.uia.expandByName(`More options for ${title}`);
  console.log(`[claude] expandByName: ${expanded}`);

  if (expanded) {
    await new Promise(r => setTimeout(r, 1500));
    app.window.screenshot(resolve(DEBUG, 'explore-07-expanded-menu.png'));

    // Find menu items
    const names = await app.auto.uia.allNames();
    console.log('\n=== All elements after expanding More Options ===');
    const menuRelated = names.filter(name =>
      name.includes('MenuItem') ||
      name.includes('ControlType.Menu') ||
      name.toLowerCase().includes('delete') ||
      name.toLowerCase().includes('rename') ||
      name.toLowerCase().includes('archive') ||
      name.toLowerCase().includes('star') ||
      name.toLowerCase().includes('pin') ||
      name.toLowerCase().includes('move') ||
      name.toLowerCase().includes('copy') ||
      name.toLowerCase().includes('remove from project')
    );
    for (const item of menuRelated) {
      console.log(`  ${item}`);
    }

    writeFileSync(resolve(DEBUG, 'explore-uia-expanded.txt'), names.join('\n'), 'utf-8');
    console.log(`\n[claude] Full dump: ${names.length} elements`);

    // Close the menu
    await app.auto.keyboard.sendKeys('{ESCAPE}');
    await new Promise(r => setTimeout(r, 500));
    console.log('[claude] Menu closed.');
  }
}

main().catch(e => {
  console.error(`[claude] Failed: ${e.message}`);
  process.exit(1);
});
