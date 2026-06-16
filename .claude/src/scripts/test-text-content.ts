import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  // Should be on Chemistry project
  // Click the walk.ts file to open it, then Remove
  console.log('Clicking walk.ts...');
  await app.auto.uia.clickByName('walk.ts, ts, 39 lines');
  await new Promise(r => setTimeout(r, 1000));

  console.log('Clicking Remove...');
  const removed = await app.auto.uia.invokeByName('Remove');
  console.log('Removed:', removed);
  await new Promise(r => setTimeout(r, 1000));

  // Verify
  const names = await app.auto.uia.allNames();
  const walkStill = names.filter(n => n.includes('walk'));
  console.log('walk.ts still present:', walkStill.length > 0);

  app.window.minimize();
}

main().catch(console.error);
