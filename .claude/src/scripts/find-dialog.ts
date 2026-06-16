import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  // Navigate to Chemistry if needed
  const screen = await app.navigator.detectScreen();
  if (screen !== 'project') {
    await app.navigator.resetToHome();
    await new Promise(r => setTimeout(r, 1000));
    await app.navigator.goToProjects();
    await new Promise(r => setTimeout(r, 1000));
    await app.auto.uia.invokeLink('Chemistry');
    await new Promise(r => setTimeout(r, 3000));
    app.navigator.screen = 'project';
  }

  // Reset menu state
  await app.auto.keyboard.sendKeys('{ESCAPE}');
  await new Promise(r => setTimeout(r, 300));

  // Trigger upload dialog: expand + Enter
  await app.auto.uia.expandByName('Add files');
  await new Promise(r => setTimeout(r, 800));
  await app.auto.keyboard.sendKeys('{ENTER}');
  await new Promise(r => setTimeout(r, 3000));

  // Now scan INSIDE the Claude window
  const names = await app.auto.uia.allNames();

  // Filter for anything that might be a file picker
  const picker = names.filter(n =>
    n.toLowerCase().includes('open') ||
    n.toLowerCase().includes('browse') ||
    n.toLowerCase().includes('choose') ||
    n.toLowerCase().includes('select') ||
    n.toLowerCase().includes('dialog') ||
    n.toLowerCase().includes('file name') ||
    n.toLowerCase().includes('cancel') ||
    n.toLowerCase().includes('drop') ||
    n.toLowerCase().includes('drag')
  );
  console.log('File picker elements inside Claude:');
  for (const p of picker) console.log(' ', p);

  // Also show ALL elements (in case the picker uses unexpected names)
  console.log('\n--- Full element list ---');
  for (const name of names) {
    if (name && name.trim()) console.log(' ', name);
  }

  // Don't minimize — leave dialog visible for Doug
}

main().catch(console.error);
