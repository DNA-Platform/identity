import { Claude } from '../claude.ts';

async function main() {
  const app = new Claude();
  await app.launch();
  const screen = await app.navigator.detectScreen();
  console.log('Screen:', screen);

  const names = await app.auto.uia.allNames();

  console.log('\nLooking for home/new chat indicators:');
  for (const n of names) {
    const lower = n.toLowerCase();
    if (lower.includes('new chat') || lower.includes('move chat') || lower.includes('start') ||
        lower.includes('home') || lower.includes('dialog') || lower.includes('new conversation')) {
      console.log(' ', n);
    }
  }

  console.log('\nLooking for composer:');
  for (const n of names) {
    if (n.includes('Write your prompt') || n.includes('How can I help') || n.includes('Message Claude') || n.includes('Reply to')) {
      console.log(' ', n);
    }
  }

  app.window.minimize();
}

main().catch(e => {
  console.error('FAILED:', e.message);
  try { new Claude().window.minimize(); } catch {}
});
