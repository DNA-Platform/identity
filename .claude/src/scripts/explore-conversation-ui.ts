// Sprint 64: Explore conversation UI elements
// Claude's perspective work — screenshot and document the UIA tree
// for conversation management operations (rename, delete, menu items)
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

  const screen = await app.detectScreen();
  console.log(`[claude] Screen: ${screen}`);

  // Step 1: Screenshot the current state
  app.window.screenshot(resolve(DEBUG, 'explore-01-initial.png'));

  // Step 2: Navigate to DNA Patternity if not there
  if (screen !== 'project' && screen !== 'conversation') {
    console.log('[claude] Navigating to DNA Patternity...');
    await app.openProject('DNA Patternity');
  }
  app.window.screenshot(resolve(DEBUG, 'explore-02-project.png'));

  // Step 3: Dump all UIA element names to understand the tree
  console.log('[claude] Reading all UIA element names...');
  const allNames = await app.auto.uia.allNames();
  writeFileSync(resolve(DEBUG, 'explore-uia-elements.txt'), allNames.join('\n'), 'utf-8');
  console.log(`[claude] Found ${allNames.length} UIA elements. Written to explore-uia-elements.txt`);

  // Step 4: Look for conversation-related elements
  console.log('\n=== Conversation-related elements ===');
  const conversationElements = allNames.filter(name =>
    name.toLowerCase().includes('more options') ||
    name.toLowerCase().includes('delete') ||
    name.toLowerCase().includes('rename') ||
    name.toLowerCase().includes('share') ||
    name.toLowerCase().includes('archive') ||
    name.toLowerCase().includes('menu')
  );
  for (const el of conversationElements) {
    console.log(`  ${el}`);
  }

  // Step 5: Look for sidebar chat items
  console.log('\n=== Sidebar items ===');
  const sidebarItems = allNames.filter(name =>
    name.includes('More options for') ||
    name.includes('Migrating') ||
    name.includes('Recents')
  );
  for (const el of sidebarItems) {
    console.log(`  ${el}`);
  }

  // Step 6: If there's a conversation in Recents, try opening its context menu
  const moreOptions = allNames.find(n => n.includes('More options for'));
  if (moreOptions) {
    const title = moreOptions.replace(/^.*\|\s*/, '').replace('More options for ', '');
    console.log(`\n[claude] Found conversation: "${title}"`);
    console.log('[claude] Clicking "More options" to see menu...');

    // Extract just the name part (after the "| " in "ControlType.Button | More options for ...")
    const nameOnly = moreOptions.split(' | ').slice(1).join(' | ').trim();
    const clicked = await app.auto.uia.invokeByName(nameOnly);
    console.log(`[claude] Clicked: ${clicked}`);

    if (clicked) {
      await new Promise(r => setTimeout(r, 1000));

      // Screenshot the menu
      app.window.screenshot(resolve(DEBUG, 'explore-03-context-menu.png'));

      // Dump elements again to see menu items
      const menuNames = await app.auto.uia.allNames();
      const menuItems = menuNames.filter(name =>
        name.includes('MenuItem') ||
        name.includes('Menu ') ||
        name.toLowerCase().includes('delete') ||
        name.toLowerCase().includes('rename') ||
        name.toLowerCase().includes('share') ||
        name.toLowerCase().includes('archive') ||
        name.toLowerCase().includes('pin')
      );
      console.log('\n=== Menu items after clicking More Options ===');
      for (const item of menuItems) {
        console.log(`  ${item}`);
      }

      // Write the full menu UIA dump
      writeFileSync(resolve(DEBUG, 'explore-uia-menu.txt'), menuNames.join('\n'), 'utf-8');
      console.log(`\n[claude] Menu UIA dump: ${menuNames.length} elements`);

      // Press Escape to close the menu
      await app.auto.keyboard.sendKeys('{ESCAPE}');
      await new Promise(r => setTimeout(r, 500));
    }
  } else {
    console.log('\n[claude] No "More options" found — no conversations in sidebar');
  }

  // Step 7: Check conversation page elements if we're on one
  const currentScreen = await app.detectScreen();
  if (currentScreen === 'conversation') {
    console.log('\n=== Conversation page elements ===');
    const convElements = allNames.filter(name =>
      name.includes('Copy') ||
      name.includes('Edit') ||
      name.includes('Retry') ||
      name.includes('feedback') ||
      name.includes('You said') ||
      name.includes('Claude responded') ||
      name.includes('Thinking') ||
      name.includes('thinking')
    );
    for (const el of convElements) {
      console.log(`  ${el}`);
    }
  }
}

main().catch(e => {
  console.error(`[claude] Failed: ${e.message}`);
  app.window.screenshot(resolve(DEBUG, 'explore-error.png'));
  process.exit(1);
});
