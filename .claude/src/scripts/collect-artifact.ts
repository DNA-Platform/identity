// Disposable: capture a RESEARCH + EDITABLE ARTIFACT response — the complex case.
// Snapshots allNames + readText through completion so we can see how research,
// the artifact link, and the artifact panel appear in the tree. -> src/trees/.
// Longer window (research takes minutes). Verified-minimize + shell close at end.

import { Claude } from '../claude.ts';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TREES = resolve(__dirname, '..', 'trees');
mkdirSync(TREES, { recursive: true });

const QUESTION =
  'Research SpaceX\'s valuation trajectory since its early funding rounds and create an editable artifact (a document) summarizing it, with commentary on each major valuation movement.';

const sleep = (ms: number): Promise<void> => new Promise(r => setTimeout(r, ms));

const claude = new Claude();

async function snap(label: string): Promise<void> {
  try {
    const names = await claude.auto.uia.allNames();
    const text = (await claude.auto.uia.readText()) ?? '';
    const url = (await claude.auto.uia.readUrl()) ?? '';
    writeFileSync(
      resolve(TREES, `artifact-${label}.txt`),
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

  // PHASE 1 — wait for the response to START. Without this, isResponseComplete()
  // reads true immediately (no streaming + no Stop button = looks "done") before
  // anything happens. This is the old waitForResponse() two-phase logic.
  let started = false;
  for (let i = 0; i < 15 && !started; i++) {
    try {
      started = (await claude.conversation.hasStopButton())
        || (await claude.conversation.checkStreaming());
    } catch { /* not on conversation yet */ }
    if (!started) await sleep(2000);
  }
  await snap('started');
  console.log(started ? 'started' : 'never started');

  // PHASE 2 — poll until TRULY complete: Stop gone AND real content present.
  let done = false;
  for (let i = 0; i < 36 && !done; i++) {
    await snap(`t${String(i).padStart(2, '0')}`);
    try {
      done = (await claude.conversation.isResponseComplete())
        && (await claude.conversation.hasResponseContent());
    } catch { /* ignore */ }
    if (!done) await sleep(5000);
  }
  await snap('complete');
  console.log(done ? 'response complete' : 'did not complete within window');
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
