// Quick state check — is the app running? What screen? Is it foreground?
import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  console.log('Finding window...');
  const found = await app.window.find();
  console.log('Found:', found, 'Handle:', app.window.handle);

  if (!found) {
    console.log('App not running. Attempting launch...');
    try {
      await app.launch();
      console.log('Launched.');
    } catch (e: any) {
      console.error('Launch failed:', e.message);
      return;
    }
  }

  console.log('Detecting screen...');
  const screen = await app.navigator.detectScreen();
  await app.navigator.detectOverlays();  // detectScreen is URL-only now
  console.log('Screen:', screen);
  console.log('Has dialog:', app.navigator.hasOpenDialog);
  console.log('Has menu:', app.navigator.hasOpenMenu);

  const fg = await app.window.isForeground();
  console.log('Is foreground:', fg);

  // Read the URL
  const url = await app.auto.uia.readUrl();
  console.log('URL:', url);

  // Read sidebar chats
  try {
    const items = app.sidebar.chats.items;
    console.log('Sidebar chats:', items.length);
    for (const c of items.slice(0, 3)) console.log('  -', c.title);
  } catch (e: any) {
    console.log('Sidebar read failed:', e.message);
  }

  await app.window.minimize();
  console.log('Minimized. Done.');
}

main().catch(async e => {
  console.error('FAILED:', e.message);
  try { await app.window.minimize(); } catch {}
});
