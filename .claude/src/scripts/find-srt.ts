import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  // Create Semantic Reference Theory project
  await app.navigator.resetToHome();
  await new Promise(r => setTimeout(r, 1000));
  await app.auto.uia.invokeByName('Projects');
  await new Promise(r => setTimeout(r, 2000));

  await app.auto.uia.invokeByName('New project');
  await new Promise(r => setTimeout(r, 2000));

  await app.auto.uia.clickByName('Name your project');
  await new Promise(r => setTimeout(r, 500));
  await app.auto.keyboard.typeViaClipboard('Semantic Reference Theory');
  await new Promise(r => setTimeout(r, 500));

  const created = await app.auto.uia.invokeByName('Create project');
  console.log('Created:', created);
  await new Promise(r => setTimeout(r, 3000));

  const url = await app.auto.uia.readUrl();
  console.log('URL:', url);

  app.window.minimize();
}

main().catch(console.error);
