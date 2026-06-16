// Try the conversation header menu options
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

  // Try invokeByNameLast to get the HEADER "More options" (not sidebar)
  console.log('[claude] Trying invokeByNameLast for header More options...');
  let clicked = await app.auto.uia.invokeByNameLast(`More options for ${title}`);
  console.log(`[claude] invokeByNameLast: ${clicked}`);

  if (!clicked) {
    // Try the standalone "More options" in the header
    console.log('[claude] Trying invoke("Button", "More options")...');
    clicked = await app.auto.uia.invoke('Button', 'More options');
    console.log(`[claude] invoke Button More options: ${clicked}`);
  }

  if (clicked) {
    await new Promise(r => setTimeout(r, 1500));
    app.window.screenshot(resolve(DEBUG, 'explore-05-header-menu.png'));

    // Get menu items
    const names = await app.auto.uia.allNames();
    console.log('\n=== New elements (menu items) ===');
    const menuRelated = names.filter(name =>
      name.includes('MenuItem') ||
      name.includes('ControlType.Menu ') ||
      name.toLowerCase().includes('delete') ||
      name.toLowerCase().includes('rename') ||
      name.toLowerCase().includes('archive') ||
      name.toLowerCase().includes('star') ||
      name.toLowerCase().includes('pin') ||
      name.toLowerCase().includes('move') ||
      name.toLowerCase().includes('copy link')
    );
    for (const item of menuRelated) {
      console.log(`  ${item}`);
    }

    writeFileSync(resolve(DEBUG, 'explore-uia-header-menu.txt'), names.join('\n'), 'utf-8');
    console.log(`[claude] Full dump: ${names.length} elements`);

    await app.auto.keyboard.sendKeys('{ESCAPE}');
  } else {
    console.log('[claude] Neither worked. Let me try right-clicking the title...');
    // Try right-clicking the title text
    // Actually, let me check if the title is a button that can be clicked
    const titleClicked = await app.auto.uia.clickByName(`${title}, rename chat`);
    console.log(`[claude] Clicked title rename button: ${titleClicked}`);

    if (titleClicked) {
      await new Promise(r => setTimeout(r, 1000));
      app.window.screenshot(resolve(DEBUG, 'explore-06-rename-mode.png'));

      const names = await app.auto.uia.allNames();
      const editElements = names.filter(name =>
        name.includes('Edit') || name.includes('TextBox') || name.includes('input')
      );
      console.log('\n=== Edit elements ===');
      for (const el of editElements) {
        console.log(`  ${el}`);
      }

      // Press Escape to cancel rename
      await app.auto.keyboard.sendKeys('{ESCAPE}');
    }
  }
}

main().catch(e => {
  console.error(`[claude] Failed: ${e.message}`);
  process.exit(1);
});
