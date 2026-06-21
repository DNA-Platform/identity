// Diagnostic: what does the page header's "<title>, rename chat" button open?
// Attach without re-homing, click the rename-chat button, dump Edit/title-ish
// elements so we can ground the field detector for the header rename. Disposable.

import { Claude } from '../claude.ts';

const app = new Claude();

async function main(): Promise<void> {
  if (!app.window.find()) throw new Error('app not running');
  app.window.maximize();
  app.window.waitForUia();
  app.window.requireForeground();

  const buttons = await app.auto.uia.findAllNames('Button');
  const renameBtn = buttons.find(n => n.endsWith(', rename chat'));
  console.log(`[diag] rename-chat button: ${renameBtn ?? 'NOT FOUND'}`);
  if (!renameBtn) return;

  const invoked = await app.auto.uia.invokeByName(renameBtn);
  console.log(`[diag] invoked=${invoked}`);
  await new Promise(r => setTimeout(r, 1200));

  const names = await app.auto.uia.allNames();
  console.log('[diag] Edit / Rename / title-ish elements after the click:');
  for (const n of names) {
    if (/ControlType\.(Edit|Document) \||Rename|rename|Save|Cancel|Title/.test(n)) {
      console.log(`   ${n}`);
    }
  }
}

main()
  .catch(e => console.error('[diag] FAILED:', (e as Error).message))
  .finally(() => { app.window.minimize(); console.log('[diag] minimized.'); });
