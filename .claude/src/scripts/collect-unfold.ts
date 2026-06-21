// Disposable: send a thinking-triggering message and snapshot BOTH the named
// elements (allNames) and the Document text (readText) as it unfolds, until the
// response completes. Shows where the body text lands so we can fetch it directly.
// Snapshots -> src/trees/. Minimizes (verified) and closes the shell when done.

import { Claude } from '../claude.ts';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TREES = resolve(__dirname, '..', 'trees');
mkdirSync(TREES, { recursive: true });

// Complex enough to trigger extended thinking, bounded so it completes.
const QUESTION =
  'Think step by step, then answer concisely in 3-4 sentences: is P = NP, and what is the strongest evidence either way?';

const sleep = (ms: number): Promise<void> => new Promise(r => setTimeout(r, ms));

const claude = new Claude();

async function snap(label: string): Promise<void> {
  try {
    const names = await claude.auto.uia.allNames();
    const text = (await claude.auto.uia.readText()) ?? '';
    const url = (await claude.auto.uia.readUrl()) ?? '';
    writeFileSync(
      resolve(TREES, `unfold-${label}.txt`),
      `# ${label}\n# url: ${url}\n# names: ${names.length}\n# textlen: ${text.length}\n\n` +
        `## NAMED ELEMENTS\n${names.join('\n')}\n\n## DOCUMENT TEXT\n${text}\n`,
    );
    console.log(`snap ${label}: ${names.length} names, ${text.length} text chars`);
  } catch (e) {
    console.log(`snap ${label} FAILED: ${e instanceof Error ? e.message : e}`);
  }
}

try {
  await claude.launch();
  await claude.newChat();
  await claude.home.composer.type(QUESTION);
  await claude.auto.keyboard.sendKeys('{ENTER}');

  for (let i = 0; i < 30; i++) {
    await snap(`t${String(i).padStart(2, '0')}`);
    try {
      if (await claude.conversation.isResponseComplete()) {
        await snap('complete');
        console.log('response complete');
        break;
      }
    } catch { /* may not be on conversation yet */ }
    await sleep(3000);
  }
  console.log('Done.');
} finally {
  let minimized = false;
  for (let i = 0; i < 5 && !minimized; i++) {
    try {
      claude.window.minimize();
      await sleep(400);
      minimized = !claude.window.isForeground();
    } catch (e) {
      console.log('minimize attempt failed:', e instanceof Error ? e.message : e);
    }
  }
  console.log(minimized ? 'minimized OK' : 'WARNING: could not confirm minimize');
  claude.auto.shell.close();
}
