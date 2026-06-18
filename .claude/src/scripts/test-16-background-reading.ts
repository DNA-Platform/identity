///: Test 16 — Reading when the app is behind another window.
///: Reads UIA data with the app visible, then minimizes, then reads again.
///: Compares results to see if minimized reads return valid data.
///:
///: [The App Model](../../library/reference-desk/02-04-the-architecture--app-model.md) — lazy rendering.
///: [Pitfalls](../../library/reference-desk/07-pitfalls.md) — visibility requirements.

import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    // Read with app visible (foreground)
    const namesFg = await app.auto.uia.allNames();
    const textFg = await app.auto.uia.readText() ?? '';
    console.log(`[test-16] Foreground: ${namesFg.length} elements, ${textFg.length} chars`);

    // Minimize
    app.window.minimize();
    await new Promise(r => setTimeout(r, 1000));

    // Read with app minimized
    let namesBg: string[] = [];
    let textBg = '';
    let bgError: string | null = null;
    try {
      namesBg = await app.auto.uia.allNames();
      textBg = await app.auto.uia.readText() ?? '';
    } catch (e) {
      bgError = (e as Error).message;
    }

    console.log(`[test-16] Minimized: ${namesBg.length} elements, ${textBg.length} chars${bgError ? ` (error: ${bgError})` : ''}`);

    // Compare
    const fgValid = namesFg.length > 10 && textFg.length > 100;
    const bgValid = namesBg.length > 10 && textBg.length > 100;
    const bgDegraded = namesBg.length > 0 && namesBg.length < namesFg.length * 0.5;

    if (bgValid) {
      console.log(`[test-16] PASS: Background reading works (${namesBg.length}/${namesFg.length} elements)`);
    } else if (bgDegraded) {
      console.log(`[test-16] WARN: Background reading degraded (${namesBg.length}/${namesFg.length} elements — may miss content below fold)`);
    } else {
      console.log(`[test-16] FAIL: Background reading returned insufficient data (${namesBg.length} elements, ${textBg.length} chars)`);
      console.log(`[test-16] INFO: App must be visible for reliable UIA reads. scrollToBottom requires foreground.`);
    }

    // Restore for cleanup
    app.window.maximize();
  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error(`[test-16] FAIL: ${(e as Error).message}`);
  try { app.window.minimize(); } catch {}
});
