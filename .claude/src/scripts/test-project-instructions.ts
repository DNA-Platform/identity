import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  // The Edit Instructions modal should still be open
  // Type into the instructions field
  await app.auto.uia.clickByName('Set project instructions');
  await new Promise(r => setTimeout(r, 300));

  const testInstructions = "Ana's English learning — she approaches language practically, in Russian.";
  await app.auto.keyboard.typeViaClipboard(testInstructions);
  console.log('Typed instructions');
  await new Promise(r => setTimeout(r, 500));

  // Click Save
  const saved = await app.auto.uia.invokeByName('Save instructions');
  console.log('Save clicked:', saved);
  await new Promise(r => setTimeout(r, 2000));

  // Verify — look for the instructions text on the project page
  const names = await app.auto.uia.allNames();
  const instrElements = names.filter(n =>
    n.toLowerCase().includes('instruction') ||
    n.toLowerCase().includes('ana') ||
    n.toLowerCase().includes('english')
  );
  console.log('\nElements showing instructions:');
  for (const name of instrElements) {
    console.log(' ', name);
  }

  app.window.minimize();
  console.log('\nDone. First project created with instructions!');
}

main().catch(console.error);
