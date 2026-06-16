import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  // Reset to home first
  await app.navigator.resetToHome();
  await new Promise(r => setTimeout(r, 1000));

  // Go to projects
  await app.auto.uia.invokeByName('Projects');
  await new Promise(r => setTimeout(r, 2000));

  // Click New project
  await app.auto.uia.invokeByName('New project');
  await new Promise(r => setTimeout(r, 2000));

  // Type name
  await app.auto.uia.clickByName('What are you working on?');
  await new Promise(r => setTimeout(r, 300));
  await app.auto.keyboard.typeViaClipboard('Ana Studies English');
  await new Promise(r => setTimeout(r, 500));

  // Type description
  await app.auto.uia.clickByName('What are you trying to achieve?');
  await new Promise(r => setTimeout(r, 300));
  await app.auto.keyboard.typeViaClipboard("Ana's English learning");
  await new Promise(r => setTimeout(r, 500));

  // Create
  const created = await app.auto.uia.invokeByName('Create project');
  console.log('Create project invoked:', created);
  if (!created) {
    const expanded = await app.auto.uia.expandByName('Create project');
    console.log('Create project expanded:', expanded);
    if (!expanded) {
      await app.auto.uia.clickByName('Create project');
      console.log('Create project clicked by coordinates');
    }
  }
  await new Promise(r => setTimeout(r, 3000));

  // Check where we are
  const url = await app.auto.uia.readUrl();
  console.log('URL after creation:', url);

  // Look for instructions panel
  const names = await app.auto.uia.allNames();
  const instrElements = names.filter(n =>
    n.toLowerCase().includes('instruction') ||
    n.toLowerCase().includes('description') ||
    n.toLowerCase().includes('files') ||
    n.toLowerCase().includes('add pdf')
  );
  console.log('\nInstruction/file related elements:');
  for (const name of instrElements) {
    console.log(' ', name);
  }

  app.window.minimize();
}

main().catch(console.error);
