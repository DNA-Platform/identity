// Clean up test conversations created by experiments.
// Delete "Code review request" from DNA Patternity, then minimize.

import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  app.window.requireForeground();

  const screen = await app.detectScreen();
  console.log(`[cleanup] Screen: ${screen}`);

  // Try to delete "Code review request" from sidebar
  console.log('[cleanup] Deleting "Code review request"...');
  try {
    await app.deleteChat('Code review request');
    console.log('[cleanup] Deleted.');
  } catch (e: any) {
    console.log(`[cleanup] Could not delete: ${e.message}`);
  }

  await new Promise(r => setTimeout(r, 1000));
  app.window.minimize();
  console.log('[cleanup] Done. App minimized.');
}

main().catch(e => {
  console.error(`[cleanup] Failed: ${e.message}`);
  try { app.window.minimize(); } catch {}
  process.exit(1);
});
