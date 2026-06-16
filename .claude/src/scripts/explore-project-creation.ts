import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  // We should be on projects page from last run
  let url = await app.auto.uia.readUrl();
  if (!url?.includes('/projects')) {
    await app.navigator.resetToHome();
    await new Promise(r => setTimeout(r, 1000));
    await app.auto.uia.invokeByName('Projects');
    await new Promise(r => setTimeout(r, 2000));
  }

  // Click New project
  const clicked = await app.auto.uia.invokeByName('New project');
  console.log('New project clicked:', clicked);
  await new Promise(r => setTimeout(r, 2000));

  url = await app.auto.uia.readUrl();
  console.log('URL after New project:', url);

  // Read what appeared
  const names = await app.auto.uia.allNames();
  console.log('\nNew project flow elements:');
  for (const name of names) {
    if (name && name.trim()) console.log(' ', name);
  }

  app.window.minimize();
}

main().catch(console.error);
