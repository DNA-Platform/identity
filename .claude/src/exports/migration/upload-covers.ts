// upload-covers.ts — Upload each project's .cover.md as legacy-conversation-history-5-19-2026.md

import { Claude } from '../../claude.ts';
import { readFileSync, existsSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECTS_DIR = resolve(__dirname, '../../../../../library/claude-legacy/projects');

const SKIP = ['.home', 'eirian', 'seren'];
const TITLE = 'legacy-conversation-history-5-19-2026.md';

const app = new Claude();

async function navigateToProject(name: string): Promise<boolean> {
  await app.navigator.resetToHome();
  await new Promise(r => setTimeout(r, 1000));
  await app.navigator.goToProjects();
  await new Promise(r => setTimeout(r, 2000));

  const clicked = await app.auto.uia.invokeLink(name);
  if (!clicked) await app.auto.uia.clickByName(name);
  await new Promise(r => setTimeout(r, 3000));

  const url = await app.auto.uia.readUrl();
  if (url?.includes('/project/')) {
    app.navigator.screen = 'project';
    return true;
  }
  return false;
}

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  const folders = readdirSync(PROJECTS_DIR)
    .filter(f => !SKIP.includes(f) && existsSync(resolve(PROJECTS_DIR, f, '.cover.md')));

  const projects: { folder: string; title: string }[] = [];
  for (const folder of folders) {
    const cover = readFileSync(resolve(PROJECTS_DIR, folder, '.cover.md'), 'utf-8');
    const titleMatch = cover.match(/^title:\s*"?([^"\n]+)"?\s*$/m);
    projects.push({ folder, title: titleMatch?.[1]?.trim() ?? folder });
  }

  projects.sort((a, b) => a.title.localeCompare(b.title));

  console.log(`Uploading covers to ${projects.length} projects:\n`);

  for (const project of projects) {
    const coverPath = resolve(PROJECTS_DIR, project.folder, '.cover.md');
    const content = readFileSync(coverPath, 'utf-8');

    process.stdout.write(`[${project.title}] `);

    const navigated = await navigateToProject(project.title);
    if (!navigated) {
      console.log('FAILED to navigate');
      continue;
    }

    try {
      await app.project._filesPane.addTextContent(TITLE, content);
      console.log(`OK (${content.length} chars)`);
    } catch (e: any) {
      console.log(`FAILED: ${e.message}`);
    }

    await new Promise(r => setTimeout(r, 1000));
  }

  app.window.minimize();
  console.log('\nDone.');
}

main().catch(console.error);
