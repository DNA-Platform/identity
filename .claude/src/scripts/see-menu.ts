import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  // Expand Add files menu
  await app.auto.uia.expandByName('Add files');
  await new Promise(r => setTimeout(r, 1000));

  // See ALL menu items
  const names = await app.auto.uia.allNames();
  const menuItems = names.filter(n =>
    n.includes('MenuItem') || n.includes('Menu |')
  );
  console.log('Menu items:');
  for (const m of menuItems) console.log(' ', m);

  // Close menu
  await app.auto.keyboard.sendKeys('{ESCAPE}');
  app.window.minimize();
}

main().catch(console.error);
