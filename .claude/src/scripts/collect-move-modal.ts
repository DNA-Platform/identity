// Non-destructive capture of the conversation three-dot menu, the Move
// conversation modal (Add to project), and the inline rename field. Navigates
// LEGALLY through the object model (proves each is reachable), dumps allNames()
// at each state, then ESCAPES out — no rename committed, no conversation moved.
// -> src/trees/. Disposable.

import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Claude } from '../claude.ts';
import { ChatListController } from '../controllers/chat-list-controller.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TREES = resolve(__dirname, '..', 'trees');

function dump(name: string, names: string[]): void {
  mkdirSync(TREES, { recursive: true });
  const file = resolve(TREES, name);
  writeFileSync(file, names.join('\n') + '\n');
  console.log(`[collect] wrote ${file} (${names.length} nodes)`);
}

const claude = new Claude();

async function main(): Promise<void> {
  const home = await claude.launch();

  const conversations = await home.sidebar().conversations();
  if (conversations.length === 0) throw new Error('No sidebar conversations to capture against');
  const item = conversations[0];
  console.log(`[collect] using conversation: "${item.name}"`);

  // 1. The three-dot menu (reachable via the object model).
  const menu = await item.menu();
  dump('conversation-menu.txt', await claude.auto.uia.allNames());
  console.log(`[collect] menu items: ${menu.items.join(', ')}`);

  // 2. The Move conversation modal — open it, snapshot, then CANCEL.
  const modal = await menu.addToProject();
  dump('move-conversation-modal.txt', await claude.auto.uia.allNames());
  const choices = await modal.projects();
  console.log(`[collect] modal projects: ${choices.map(c => c.name).join(', ')}`);
  await modal.cancel();

  // 3. The inline rename field — open it via the controller (so we DON'T
  //    commit), snapshot, then ESCAPE.
  const controller = new ChatListController(claude.auto);
  await item.menu();                       // reopen the menu (proves reachable)
  await controller.clickRename();
  await claude.gateway.waitFor(() => controller.isRenameFieldActive(), { timeoutMs: 3_000 });
  dump('conversation-rename-field.txt', await claude.auto.uia.allNames());
  await claude.auto.keyboard.sendKeys('{ESCAPE}');
}

main()
  .catch(e => console.error('[collect] FAILED:', (e as Error).message))
  .finally(async () => {
    try { await claude.dismissDialogs(); } catch {}
    claude.window.minimize();
    console.log('[collect] done, minimized.');
  });
