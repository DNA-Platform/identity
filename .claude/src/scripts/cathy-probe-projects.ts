import { Claude } from '../claude.ts';

const app = new Claude();
const home = await app.launch();
const projects = await home.sidebar().projects();
const claude = (await projects.projects()).find((p: any) => p.name === 'Claude');
console.log('Claude project found:', !!claude);
if (!claude) process.exit(1);

const page = await claude.open();
console.log('project page opened');

const convos = await page.conversations();
console.log(`conversations in project: ${convos.length}`);
for (const c of convos.slice(0, 15)) console.log(`  [${c.name}]`);

const composer = (page as any).composer;
console.log('composer object:', composer ? 'present' : 'MISSING');
if (composer) {
  for (const m of ['exists', 'isOnScreen', 'element', 'text']) {
    if (typeof composer[m] === 'function') {
      try { console.log(`  composer.${m}() =`, JSON.stringify(await composer[m]())); }
      catch (e: any) { console.log(`  composer.${m}() threw: ${e.message}`); }
    }
  }
}
