import { Claude } from '../claude.ts';

const app = new Claude();

const PROJECTS = [
  "Georgia",
  "Inexplicable Phenomena",
];

async function createProject(name: string): Promise<boolean> {
  await app.navigator.resetToHome();
  await new Promise(r => setTimeout(r, 1500));

  await app.auto.uia.invokeByName('Projects');
  await new Promise(r => setTimeout(r, 3000));

  const clicked = await app.auto.uia.invokeByName('New project');
  if (!clicked) {
    console.log(`  Could not click New project`);
    return false;
  }
  await new Promise(r => setTimeout(r, 3000));

  await app.auto.uia.clickByName('Name your project');
  await new Promise(r => setTimeout(r, 500));
  await app.auto.keyboard.typeViaClipboard(name);
  await new Promise(r => setTimeout(r, 500));

  const created = await app.auto.uia.invokeByName('Create project');
  if (!created) {
    console.log(`  Create button failed`);
    return false;
  }
  await new Promise(r => setTimeout(r, 4000));

  const url = await app.auto.uia.readUrl();
  return url?.includes('/project/') ?? false;
}

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  for (const name of PROJECTS) {
    process.stdout.write(`Creating: ${name}... `);
    const ok = await createProject(name);
    console.log(ok ? 'OK' : 'FAILED');
  }

  app.window.minimize();
  console.log('Done.');
}

main().catch(console.error);
