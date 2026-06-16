// Step 1: Navigate to DNA Patternity project
import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = new Claude();

async function main() {
  console.log('[adam] Step 1: Navigate to DNA Patternity');

  await app.launch();
  app.window.maximize();

  const screen = await app.detectScreen();
  console.log(`[adam] Current screen: ${screen}`);

  // Wait a moment for the sidebar to fully render
  await new Promise(r => setTimeout(r, 2_000));

  console.log('[adam] Opening projects page...');
  await app.openProjects();
  console.log(`[adam] Screen: ${await app.detectScreen()}`);

  console.log('[adam] Opening DNA Patternity...');
  await app.openProject('DNA Patternity');
  console.log(`[adam] Project: ${app.project.name}`);

  const ssPath = resolve(__dirname, '..', 'debug', 'pilot-01-project.png');
  app.window.screenshot(ssPath);
  console.log(`[adam] Screenshot: ${ssPath}`);
  console.log('[adam] Step 1 complete. Ready to start new conversation.');
}

main().catch(e => {
  console.error(`[adam] Step 1 failed: ${e.message}`);
  const ssPath = resolve(__dirname, '..', 'debug', 'pilot-step1-error.png');
  try { app.window.screenshot(ssPath); console.error(`[adam] Screenshot: ${ssPath}`); } catch {}
  process.exit(1);
});
