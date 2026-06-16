import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  // The file detail view should be open with "Remove" visible
  console.log('Clicking Remove...');
  const removed = await app.auto.uia.invokeByName('Remove');
  console.log('Remove invoked:', removed);
  await new Promise(r => setTimeout(r, 2000));

  // Check if there's a confirmation dialog
  const names = await app.auto.uia.allNames();
  const confirmElements = names.filter(n =>
    n.toLowerCase().includes('confirm') ||
    n.toLowerCase().includes('delete') ||
    n.toLowerCase().includes('remove') ||
    n.toLowerCase().includes('yes') ||
    n.toLowerCase().includes('are you sure') ||
    n.toLowerCase().includes('catalogue')
  );
  console.log('\nAfter Remove click:');
  for (const c of confirmElements) console.log(' ', c);

  // Check if file is gone
  const fileStill = names.filter(n => n.includes('catalogue'));
  console.log('\ncatalogue.ts still present:', fileStill.length > 0);

  app.window.minimize();
}

main().catch(console.error);
