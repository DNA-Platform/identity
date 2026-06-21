// Diagnostic: isolate composer.send(). launch -> newChat -> type a short message
// -> log draft/send-button state -> try each send mechanism, polling readDraft.
// Logs everything; minimizes at the end. Disposable.

import { Claude } from '../claude.ts';
import { ComposerController } from '../controllers/composer-controller.ts';

const app = new Claude();
const MSG = 'Reply with the single word OK.';

async function pollDraft(label: string, controller: ComposerController, tries = 6): Promise<void> {
  for (let i = 0; i < tries; i++) {
    const draft = await controller.readDraft();
    console.log(`  [${label}] try ${i}: readDraft=${JSON.stringify(draft.slice(0, 40))}`);
    if (draft === '') { console.log(`  [${label}] draft cleared.`); return; }
    await new Promise(r => setTimeout(r, 1000));
  }
}

async function main(): Promise<void> {
  const home = await app.launch();
  const fresh = await home.sidebar().newChat();
  console.log(`[diag] on newChat, screen=${app.screen}`);

  const controller = new ComposerController(app.auto);

  await fresh.composer.type(MSG);
  console.log(`[diag] after type: readDraft=${JSON.stringify((await controller.readDraft()).slice(0, 40))}`);
  console.log(`[diag] exists 'Send'=${await app.auto.uia.existsByName('Send')}, 'Send message'=${await app.auto.uia.existsByName('Send message')}`);

  // Try invoke 'Send message' directly and watch the draft.
  const invoked = await app.auto.uia.invokeByName('Send message');
  console.log(`[diag] invokeByName('Send message')=${invoked}`);
  await pollDraft('after-invoke', controller);

  // If still not cleared, try Enter.
  if ((await controller.readDraft()) !== '') {
    console.log('[diag] draft still present — trying focusComposer + Enter');
    await controller.focusComposer();
    await app.auto.keyboard.pressEnter();
    await pollDraft('after-enter', controller);
  }

  const url = await app.auto.uia.readUrl();
  console.log(`[diag] final url=${url}`);
}

main()
  .catch(e => console.error('[diag] FAILED:', (e as Error).message))
  .finally(() => { app.window.minimize(); console.log('[diag] minimized.'); });
