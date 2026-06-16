import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();

  // Detect current state
  const screen = await app.navigator.detectScreen();
  console.log('Current screen:', screen);
  console.log('Has open dialog:', app.navigator.hasOpenDialog);
  console.log('Has open menu:', app.navigator.hasOpenMenu);

  // Try to reset to home
  console.log('\nResetting to home...');
  try {
    await app.navigator.resetToHome();
    const after = await app.navigator.detectScreen();
    console.log('After reset:', after);
    console.log('SUCCESS');
  } catch (e: any) {
    console.log('FAILED:', e.message);
  }

  app.window.minimize();
}

main().catch(console.error);
