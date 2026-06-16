// Explore the "More options" context menu for conversations
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

  // Try clicking the "More options" button on the conversation header
  // (the one without "for {title}" suffix — standalone on the page)
  console.log('[claude] Trying to click standalone "More options" button...');
  let clicked = await app.auto.uia.clickByName('More options');
  console.log(`[claude] clickByName("More options"): ${clicked}`);

  if (!clicked) {
    // Try the full name from the header
    console.log('[claude] Trying "More options for Migrating..."...');
    clicked = await app.auto.uia.clickByName('More options for Migrating Claude Chat account history and relationships');
    console.log(`[claude] clickByName(full name): ${clicked}`);
  }

  if (clicked) {
    await new Promise(r => setTimeout(r, 1500));

    // Screenshot the menu
    app.window.screenshot(resolve(DEBUG, 'explore-04-more-options-menu.png'));

    // Dump all elements to find menu items
    const names = await app.auto.uia.allNames();
    console.log('\n=== All elements after clicking More Options ===');
    const menuItems = names.filter(name =>
      name.includes('MenuItem') ||
      name.includes('Menu ') ||
      name.toLowerCase().includes('delete') ||
      name.toLowerCase().includes('rename') ||
      name.toLowerCase().includes('share') ||
      name.toLowerCase().includes('archive') ||
      name.toLowerCase().includes('star') ||
      name.toLowerCase().includes('pin') ||
      name.toLowerCase().includes('move') ||
      name.toLowerCase().includes('export')
    );
    for (const item of menuItems) {
      console.log(`  ${item}`);
    }

    // Also check for any new elements not in the original dump
    writeFileSync(resolve(DEBUG, 'explore-uia-menu-full.txt'), names.join('\n'), 'utf-8');
    console.log(`\n[claude] Full UIA dump: ${names.length} elements`);

    // Close the menu
    await app.auto.keyboard.sendKeys('{ESCAPE}');
  } else {
    console.log('[claude] Could not click More options. Checking what buttons exist...');
    const buttons = await app.auto.uia.findAllNames('Button');
    console.log('\n=== All buttons ===');
    for (const b of buttons) {
      console.log(`  ${b}`);
    }
  }
}

main().catch(e => {
  console.error(`[claude] Failed: ${e.message}`);
  process.exit(1);
});
