// Explore the Add to Project modal step by step.
// Doug confirmed: the chat was renamed but three-dots were blue and chat wasn't in project.
// We need to see what the modal looks like after selecting a project.

import { Claude } from '../claude.ts';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug');
const app = new Claude();

async function snapshot(label: string): Promise<string[]> {
  const names = await app.auto.uia.allNames();
  writeFileSync(resolve(DEBUG, `project-modal-${label}.txt`), names.join('\n'), 'utf-8');
  return names;
}

function printNew(before: string[], after: string[]): void {
  const beforeSet = new Set(before);
  const newElements = after.filter(n => !beforeSet.has(n));
  console.log('New elements:');
  for (const n of newElements.slice(0, 25)) console.log(`  ${n}`);
}

async function main() {
  await app.launch();
  try {
    await app.sidebar.refresh();
    const before = await snapshot('00-before');

    // Step 1: Open three-dot menu for Financial Analysis
    console.log('\n=== Step 1: Open three-dot menu ===');
    await app.auto.uia.expandByName('More options for Finance');
    await new Promise(r => setTimeout(r, 800));
    const afterMenu = await snapshot('01-menu-open');
    printNew(before, afterMenu);

    // Step 2: Click "Add to project"
    console.log('\n=== Step 2: Click Add to project ===');
    const clicked = await app.auto.uia.invoke('MenuItem', 'Add to project');
    console.log('Clicked Add to project:', clicked);
    await new Promise(r => setTimeout(r, 1000));
    const afterAdd = await snapshot('02-after-add-to-project');
    printNew(afterMenu, afterAdd);

    // Step 3: Look for Claude in the list and click it
    console.log('\n=== Step 3: Select Claude ===');
    const selectedClaude = await app.auto.uia.invokeByName('Claude');
    console.log('Selected Claude:', selectedClaude);
    await new Promise(r => setTimeout(r, 1000));
    const afterSelect = await snapshot('03-after-select-claude');
    printNew(afterAdd, afterSelect);

    // Step 4: Look for a confirm/move button
    console.log('\n=== Step 4: Look for confirm ===');
    const names = await app.auto.uia.allNames();
    const confirmHints = names.filter(n => {
      const l = n.toLowerCase();
      return l.includes('move') || l.includes('confirm') || l.includes('save') ||
             l.includes('done') || l.includes('ok') || l.includes('apply') ||
             l.includes('add');
    });
    console.log('Confirm-like elements:');
    for (const n of confirmHints) console.log(`  ${n}`);

    // Try pressing Enter as confirmation
    console.log('\n=== Step 5: Press Enter ===');
    await app.auto.keyboard.sendKeys('{ENTER}');
    await new Promise(r => setTimeout(r, 1000));
    const afterEnter = await snapshot('04-after-enter');

    // Check if dialog closed
    const stillOpen = (await app.auto.uia.allNames()).some(n => n.includes('Move chat'));
    console.log('Dialog still open:', stillOpen);

  } finally {
    try { await app.dismissDialogs(); } catch {}
    app.window.minimize();
  }
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { app.dismissDialogs().then(() => app.window.minimize()); } catch {}
  try { app.window.minimize(); } catch {}
});
