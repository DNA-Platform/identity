import { Claude } from '../claude.ts';

const app = new Claude();

const PROJECTS = [
  "Ana Studies English",
  "Ana's Fiverr Inbox",
  "Career",
  // "Chemistry",  // already created
  "DNA Patternity",
  "Eirian",
  "Georgia",
  "Grammar",
  "Inexplicable Phenomena",
  "Investing",
  "Learning",
  "Life",
  "Miscellaneous",
  "Neuroscience",
  "Nikolai",
  "Number Theory",
  "Physics",
  "Russia",
  "Turkey",
];

async function createProject(name: string): Promise<boolean> {
  await app.navigator.resetToHome();
  await new Promise(r => setTimeout(r, 1000));

  await app.auto.uia.invokeByName('Projects');
  await new Promise(r => setTimeout(r, 2000));

  const clicked = await app.auto.uia.invokeByName('New project');
  if (!clicked) {
    console.log(`  Could not click New project`);
    return false;
  }
  await new Promise(r => setTimeout(r, 2000));

  await app.auto.uia.clickByName('Name your project');
  await new Promise(r => setTimeout(r, 500));
  await app.auto.keyboard.typeViaClipboard(name);
  await new Promise(r => setTimeout(r, 500));

  const created = await app.auto.uia.invokeByName('Create project');
  if (!created) {
    console.log(`  Create button failed`);
    return false;
  }
  await new Promise(r => setTimeout(r, 3000));

  const url = await app.auto.uia.readUrl();
  return url?.includes('/project/') ?? false;
}

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  let success = 0;
  let fail = 0;

  for (const name of PROJECTS) {
    process.stdout.write(`Creating: ${name}... `);
    const ok = await createProject(name);
    if (ok) {
      console.log('OK');
      success++;
    } else {
      console.log('FAILED');
      fail++;
    }
  }

  console.log(`\nDone. ${success} created, ${fail} failed.`);
  console.log(`Total projects on account: ${success + 2} (+ Chemistry + Seren)`);

  app.window.minimize();
}

main().catch(console.error);
