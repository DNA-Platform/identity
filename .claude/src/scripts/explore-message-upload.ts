// Sprint 65: Explore file attachment in the message composer.
// What buttons exist for attaching files? What does the tree look like?

import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  app.window.requireForeground();

  console.log('[explore] Opening DNA Patternity...');
  await app.openProject('DNA Patternity');
  await new Promise(r => setTimeout(r, 1500));

  console.log(`[explore] Screen: ${await app.detectScreen()}`);

  // Clear the composer first
  await app.message.clear();

  // Look for attachment-related buttons
  console.log('\n--- All Button names ---');
  const buttons = await app.auto.uia.findAllNames('Button');
  for (const name of buttons) {
    console.log(`  Button: ${name}`);
  }

  // Look for anything with "attach", "upload", "file", "clip" in the name
  console.log('\n--- Attachment-related names (all types) ---');
  const allNames = await app.auto.uia.allNames();
  for (const name of allNames) {
    const lower = name.toLowerCase();
    if (lower.includes('attach') || lower.includes('upload') || lower.includes('file')
        || lower.includes('clip') || lower.includes('add') || lower.includes('browse')) {
      console.log(`  ${name}`);
    }
  }

  // Look specifically near the composer area
  console.log('\n--- Names containing "prompt" or "message" ---');
  for (const name of allNames) {
    const lower = name.toLowerCase();
    if (lower.includes('prompt') || lower.includes('message') || lower.includes('compose')) {
      console.log(`  ${name}`);
    }
  }

  app.window.minimize();
  console.log('\n[explore] Done. App minimized.');
}

main().catch(e => {
  console.error(`[explore] Failed: ${e.message}`);
  try { app.window.minimize(); } catch {}
  process.exit(1);
});
