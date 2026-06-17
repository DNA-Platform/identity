///: Exploration script — capture UIA tree during a live Desktop response.
///: Goal: find the elements that contain thinking text and response text.
///: Captures allNames() AND readText() at intervals so we can see what
///: content becomes visible at each phase of the response.
///:
///: [Reference Desk](../../library/reference-desk/.cover.md)

import { Claude } from '../claude.ts';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug', 'explore-response');
if (!existsSync(DEBUG)) mkdirSync(DEBUG, { recursive: true });

const app = new Claude();

async function capture(label: string): Promise<void> {
  const names = await app.auto.uia.allNames();
  const text = await app.auto.uia.readText() ?? '(null)';
  writeFileSync(resolve(DEBUG, `${label}-names.txt`), names.join('\n'), 'utf-8');
  writeFileSync(resolve(DEBUG, `${label}-text.txt`), text, 'utf-8');
  const textPreview = text.slice(-200).replace(/\n/g, ' ');
  console.log(`[${label}] names=${names.length} text=${text.length} tail: ${textPreview.slice(0, 100)}`);
}

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();

    // Capture before sending
    await capture('00-before');

    // Send a short question
    await app.newChat();
    await app.compose('What is the CALM theorem? Two sentences.');

    // Capture after compose, before send
    await capture('01-composed');

    // Send — invoke Send button directly, no verify wrapper
    const sent = await app.auto.uia.invokeByName('Send')
      || await app.auto.uia.invokeByName('Send message');
    if (!sent) await app.auto.keyboard.pressEnter();
    console.log('[send] Button invoked. Starting captures...');

    // Now capture repeatedly while Desktop processes
    for (let i = 0; i < 30; i++) {
      await app.conversation.scrollToBottom();
      await capture(`02-poll-${String(i).padStart(2, '0')}`);

      // Check if done
      const complete = await app.conversation.isResponseComplete();
      if (complete && i > 5) {
        console.log(`[done] Response complete at poll ${i}`);
        await capture('03-complete');
        break;
      }

      // Wait 2 seconds between captures
      await new Promise(r => setTimeout(r, 2000));
    }

  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { app.window.minimize(); } catch {}
});
