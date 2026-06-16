import { Claude } from '../claude.ts';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECTS_DIR = resolve(__dirname, '../../../../library/claude-legacy/projects');

const TITLE = 'legacy-conversation-history-5-19-2026.md';

const REMAINING = [
  { folder: 'neuroscience', title: 'Neuroscience' },
  { folder: 'number-theory', title: 'Number Theory' },
  { folder: 'physics', title: 'Physics' },
  { folder: 'russia', title: 'Russia' },
  { folder: 'semantic-reference-theory', title: 'Semantic Reference Theory' },
  { folder: 'turkey', title: 'Turkey' },
];

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 3000));

  for (const project of REMAINING) {
    const coverPath = resolve(PROJECTS_DIR, project.folder, '.cover.md');
    const content = readFileSync(coverPath, 'utf-8');

    process.stdout.write(`[${project.title}] `);

    // Navigate
    await app.navigator.resetToHome();
    await new Promise(r => setTimeout(r, 1500));
    await app.navigator.goToProjects();
    await new Promise(r => setTimeout(r, 2000));

    await app.auto.uia.invokeLink(project.title);
    await new Promise(r => setTimeout(r, 3000));
    app.navigator.screen = 'project';

    try {
      await app.project._filesPane.addTextContent(TITLE, content);
      console.log(`OK (${content.length} chars)`);
    } catch (e: any) {
      console.log(`FAILED: ${e.message}`);
    }

    await new Promise(r => setTimeout(r, 1000));
  }

  app.window.minimize();
  console.log('Done.');
}

main().catch(console.error);
