import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();

  // Detect current screen
  let screen = await app.navigator.detectScreen();
  console.log('1. Current screen:', screen);

  // Navigate to settings
  await app.navigator.goToSettings();
  screen = await app.navigator.detectScreen();
  console.log('2. After goToSettings:', screen);

  // Navigate to General section
  await app.auto.uia.invokeLink('General');
  await new Promise(r => setTimeout(r, 1000));
  const url = await app.auto.uia.readUrl();
  console.log('3. On General page:', url);

  // Now reset to home — should detect settings and escape first
  await app.navigator.resetToHome();
  screen = await app.navigator.detectScreen();
  console.log('4. After resetToHome:', screen);

  app.window.minimize();
  console.log('Done. Navigation works.');
}

main().catch(e => {
  console.error(e.message);
  app.window.minimize();
});
