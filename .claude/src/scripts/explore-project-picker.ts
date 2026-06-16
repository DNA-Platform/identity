// Explore what happens when you click "Projects" in the three-dot menu.
// Opens the menu, clicks Projects, reads the resulting UI.

import { Claude } from '../claude.ts';

async function main() {
  const app = new Claude();
  await app.launch();

  const screen = await app.navigator.detectScreen();
  console.log('Screen:', screen);

  // Get the current conversation title from sidebar
  await app.sidebar.refresh();
  const chats = app.sidebar.chats.items;
  const target = chats[0]; // most recent
  if (!target) {
    console.log('No chats in sidebar');
    app.window.minimize();
    return;
  }
  console.log('Target chat:', target.title);

  // Open the three-dot menu
  const menuButton = `More options for ${target.title}`;
  console.log('\nOpening menu:', menuButton);

  try {
    const expanded = await app.auto.uia.expandByName(menuButton);
    if (!expanded) {
      // Try shorter match
      const allNames = await app.auto.uia.allNames();
      const match = allNames.find(n => n.includes('More options') && n.includes(target.title.slice(0, 30)));
      if (match) {
        console.log('Trying alternate:', match);
        await app.auto.uia.expandByName(match);
      }
    }
    await new Promise(r => setTimeout(r, 800));

    // Read all elements after menu opened
    console.log('\n--- Menu elements ---');
    const names = await app.auto.uia.allNames();
    const menuItems = names.filter(n =>
      n.includes('MenuItem') ||
      n.includes('Rename') ||
      n.includes('Delete') ||
      n.includes('Pin') ||
      n.includes('Project') ||
      n.includes('Share') ||
      n.includes('Star') ||
      n.includes('Add to') ||
      n.includes('Move to') ||
      n.includes('Archive')
    );
    console.log('Menu items found:', menuItems);

    // Try to click "Projects" or "Add to project"
    const projectItem = menuItems.find(n =>
      n.includes('Project') && !n.includes('More options')
    );

    if (projectItem) {
      console.log('\nClicking project item:', projectItem);

      // Try invoke on MenuItem type first
      let clicked = await app.auto.uia.invoke('MenuItem', 'Add to project');
      if (!clicked) clicked = await app.auto.uia.invoke('MenuItem', 'Projects');
      if (!clicked) clicked = await app.auto.uia.invokeByName('Add to project');
      if (!clicked) clicked = await app.auto.uia.invokeByName('Projects');

      console.log('Clicked:', clicked);
      await new Promise(r => setTimeout(r, 1000));

      // Read the picker UI
      console.log('\n--- Project picker elements ---');
      const pickerNames = await app.auto.uia.allNames();
      const pickerItems = pickerNames.filter(n =>
        n.includes('project') || n.includes('Project') ||
        n.includes('Claude') || n.includes('DNA') ||
        n.includes('Search') || n.includes('search') ||
        n.includes('Create') || n.includes('create') ||
        n.includes('ListItem') || n.includes('dialog') ||
        n.includes('Dialog')
      );
      console.log('Picker elements:', pickerItems.slice(0, 20));

      // Also dump raw new elements
      console.log('\n--- New elements (not in original tree) ---');
      const origSet = new Set(names);
      const newElements = pickerNames.filter(n => !origSet.has(n));
      console.log('New elements:', newElements.slice(0, 30));
    }

    // Close whatever is open
    await app.auto.keyboard.pressKey('Escape');
    await new Promise(r => setTimeout(r, 300));
    await app.auto.keyboard.pressKey('Escape');

  } catch (e) {
    console.error('Failed:', (e as Error).message);
  }

  app.window.minimize();
  console.log('\nDone.');
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { new Claude().window.minimize(); } catch {}
});
