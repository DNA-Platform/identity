// Diagnostic: how do you open the THREE-DOT menu on the conversation PAGE
// (not the sidebar item)? Opens the newest conversation, logs the page title vs
// the sidebar name, dumps the full tree, and lists every Button so we can see
// the header menu affordance. -> src/trees/conversation-page.txt. Disposable.

import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Claude } from '../claude.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TREES = resolve(__dirname, '..', 'trees');

const app = new Claude();

async function main(): Promise<void> {
  const home = await app.launch();

  const conversations = await home.sidebar().conversations();
  console.log(`[diag] sidebar newest = "${conversations[0]?.name}"`);
  const page = await conversations[0].open();
  console.log(`[diag] opened. screen=${app.screen}`);

  const names = await app.auto.uia.allNames();
  mkdirSync(TREES, { recursive: true });
  writeFileSync(resolve(TREES, 'conversation-page.txt'), names.join('\n') + '\n');
  console.log(`[diag] wrote conversation-page.txt (${names.length} nodes)`);

  // What does the page think its title is, and what header buttons exist?
  console.log(`[diag] buttons near the header / title:`);
  for (const n of names) {
    if (/More options|Open conversation|Star|Share|Rename|^ControlType\.Button \| (Move|Options|Chat options)/.test(n)) {
      console.log(`   ${n}`);
    }
  }
}

main()
  .catch(e => console.error('[diag] FAILED:', (e as Error).message))
  .finally(() => { app.window.minimize(); console.log('[diag] minimized.'); });
