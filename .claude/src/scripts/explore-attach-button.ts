// Sprint 65: Click the "Add files, connectors, and more" button.
// What menu or dialog appears? What are the options?

import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  app.window.requireForeground();

  console.log('[explore] Opening DNA Patternity...');
  await app.openProject('DNA Patternity');
  await new Promise(r => setTimeout(r, 1500));

  // Click the attach button
  console.log('\n--- Clicking "Add files, connectors, and more" ---');
  const clicked = await app.auto.uia.clickByName('Add files, connectors, and more');
  console.log(`  clicked: ${clicked}`);
  await new Promise(r => setTimeout(r, 1000));

  // See what appeared
  console.log('\n--- Names after click ---');
  const allNames = await app.auto.uia.allNames();
  for (const name of allNames) {
    const lower = name.toLowerCase();
    if (lower.includes('menu') || lower.includes('add') || lower.includes('file')
        || lower.includes('upload') || lower.includes('image') || lower.includes('attach')
        || lower.includes('connect') || lower.includes('github') || lower.includes('text')
        || lower.includes('google') || lower.includes('drive') || lower.includes('content')
        || lower.includes('browse')) {
      console.log(`  ${name}`);
    }
  }

  // Also dump all MenuItem types
  console.log('\n--- All MenuItems ---');
  for (const name of allNames) {
    if (name.includes('MenuItem')) {
      console.log(`  ${name}`);
    }
  }

  // Close the menu
  console.log('\n--- Closing menu ---');
  await app.auto.keyboard.sendKeys('{ESCAPE}');
  await new Promise(r => setTimeout(r, 500));

  app.window.minimize();
  console.log('\n[explore] Done. App minimized.');
}

main().catch(e => {
  console.error(`[explore] Failed: ${e.message}`);
  try { app.window.minimize(); } catch {}
  process.exit(1);
});
