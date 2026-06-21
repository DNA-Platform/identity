// Diagnostic: the new conversation auto-named by Desktop just failed its rename.
// Attach WITHOUT re-homing, dump the conversation-related affordances so we can
// see how the long auto-title appears (truncated? page vs sidebar?). Disposable.

import { Claude } from '../claude.ts';

const app = new Claude();

async function main(): Promise<void> {
  // Attach + restore without goHome (we want the screen we're actually on).
  if (!app.window.find()) throw new Error('app not running');
  app.window.maximize();
  app.window.waitForUia();
  app.window.requireForeground();

  const names = await app.auto.uia.allNames();
  console.log(`[diag] screen=${await app.detectScreen()}`);
  console.log('[diag] affordances mentioning the new conversation:');
  for (const n of names) {
    if (/More options for|rename chat|Persistent|memory|Move chat|^ControlType\.Edit \| Rename/.test(n)) {
      console.log(`   ${n}`);
    }
  }
}

main()
  .catch(e => console.error('[diag] FAILED:', (e as Error).message))
  .finally(() => { app.window.minimize(); console.log('[diag] minimized.'); });
