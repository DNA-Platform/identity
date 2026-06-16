// Explore the three-dot menu and breadcrumbs on a conversation.
// Reads the accessibility tree to discover menu item names and breadcrumb structure.

import { Claude } from '../claude.ts';

async function main() {
  const app = new Claude();
  await app.launch();

  const screen = await app.navigator.detectScreen();
  console.log('Screen:', screen);

  if (screen !== 'conversation') {
    console.log('Not on a conversation. Open one first.');
    app.window.minimize();
    return;
  }

  // Read the conversation title
  const title = await app.conversation.readTitle();
  console.log('Title:', title);

  // Check for breadcrumbs — look for project name elements
  console.log('\n--- Breadcrumb / project indicators ---');
  const allNames = await app.auto.uia.allNames();
  const projectHints = allNames.filter(n =>
    n.toLowerCase().includes('project') ||
    n.toLowerCase().includes('breadcrumb') ||
    n.toLowerCase().includes('claude') ||
    n.includes('›') || n.includes('→') || n.includes('/')
  );
  console.log('Project-related elements:', projectHints.slice(0, 20));

  // Try to find and click the three-dot menu
  console.log('\n--- Three-dot menu ---');
  const moreOptions = allNames.filter(n =>
    n.toLowerCase().includes('more options') ||
    n.toLowerCase().includes('menu') ||
    n.includes('⋮') || n.includes('...')
  );
  console.log('More-options elements:', moreOptions);

  if (moreOptions.length > 0) {
    // Try the first one that looks like it belongs to the conversation header
    const target = moreOptions.find(n => n.toLowerCase().includes('more options')) || moreOptions[0];
    console.log('\nExpanding:', target);

    try {
      await app.auto.uia.expandByName(target);
      await new Promise(r => setTimeout(r, 800));

      // Read all menu items
      const menuNames = await app.auto.uia.allNames();
      const menuItems = menuNames.filter(n =>
        n.toLowerCase().includes('rename') ||
        n.toLowerCase().includes('delete') ||
        n.toLowerCase().includes('pin') ||
        n.toLowerCase().includes('project') ||
        n.toLowerCase().includes('add to') ||
        n.toLowerCase().includes('move to') ||
        n.toLowerCase().includes('archive') ||
        n.toLowerCase().includes('share') ||
        n.toLowerCase().includes('star')
      );
      console.log('Menu items:', menuItems);

      // Also get ALL names after menu opened to see everything
      console.log('\nAll MenuItem-looking elements:');
      for (const n of menuNames) {
        if (menuNames.indexOf(n) > menuNames.indexOf(target) && !allNames.includes(n)) {
          console.log(' ', n);
        }
      }

      // Press Escape to close the menu
      await app.auto.keyboard.pressEscape();
    } catch (e) {
      console.log('Failed to expand:', (e as Error).message);
    }
  }

  app.window.minimize();
  console.log('\nDone.');
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { new Claude().window.minimize(); } catch {}
});
