import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEST_IMAGE = resolve(__dirname, 'test-image.png');
const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  app.window.requireForeground();

  await app.openProject('DNA Patternity');
  await new Promise(r => setTimeout(r, 1500));
  console.log('screen:', await app.detectScreen());

  // Clean
  await app.message.clear();
  await new Promise(r => setTimeout(r, 500));
  const clean = await app.message.read();
  console.log('after clear — text:', JSON.stringify(clean.text), 'att:', clean.attachments.length, 'empty:', clean.isEmpty);

  // Attach
  const after = await app.message.attachFile(TEST_IMAGE);
  console.log('after attach — text:', JSON.stringify(after.text), 'att:', after.attachments.length, 'empty:', after.isEmpty);
  if (after.attachments.length > 0) {
    console.log('  attachment:', after.attachments[0].kind, after.attachments[0].name);
  }

  // Remove
  if (after.attachments.length > 0) {
    const afterRemove = await app.message.removeAttachment(after.attachments[0].name);
    console.log('after remove — att:', afterRemove.attachments.length, 'empty:', afterRemove.isEmpty);
  }

  app.window.minimize();
  console.log('done');
}

main().catch(e => {
  console.error('FAIL:', e.message);
  try { app.window.minimize(); } catch {}
  process.exit(1);
});
