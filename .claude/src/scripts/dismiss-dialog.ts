import { Claude } from '../claude.ts';

async function main() {
  const app = new Claude();
  await app.launch();
  console.log('Pressing Escape twice...');
  await app.auto.keyboard.sendKeys('{ESCAPE}');
  await new Promise(r => setTimeout(r, 500));
  await app.auto.keyboard.sendKeys('{ESCAPE}');
  await new Promise(r => setTimeout(r, 500));
  const screen = await app.navigator.detectScreen();
  console.log('Screen:', screen);
  app.window.minimize();
  console.log('Done.');
}

main().catch(e => {
  console.error('FAILED:', e.message);
  try { new Claude().window.minimize(); } catch {}
});
