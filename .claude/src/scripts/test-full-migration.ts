import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  // Navigate to create if not there
  let url = await app.auto.uia.readUrl();
  if (!url?.includes('/projects/create')) {
    await app.navigator.resetToHome();
    await new Promise(r => setTimeout(r, 1000));
    await app.auto.uia.invokeByName('Projects');
    await new Promise(r => setTimeout(r, 2000));
    await app.auto.uia.invokeByName('New project');
    await new Promise(r => setTimeout(r, 2000));
  }

  // Click the ACTUAL edit field, not the label
  await app.auto.uia.clickByName('Name your project');
  await new Promise(r => setTimeout(r, 500));
  await app.auto.keyboard.typeViaClipboard('Chemistry');
  console.log('Typed Chemistry into name field');
  await new Promise(r => setTimeout(r, 500));

  // Click Create project
  const created = await app.auto.uia.invokeByName('Create project');
  console.log('Create clicked:', created);
  await new Promise(r => setTimeout(r, 4000));

  url = await app.auto.uia.readUrl();
  console.log('URL:', url);

  // Check project page elements
  const names = await app.auto.uia.allNames();
  const relevant = names.filter(n =>
    n.includes('Chemistry') ||
    n.includes('Instructions') ||
    n.includes('Files') ||
    n.includes('Add')
  );
  console.log('Relevant elements:', relevant);

  app.window.minimize();
}

main().catch(console.error);
