import { Claude } from '../claude.ts';
import { ProjectFile } from '../components/project-file.ts';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECTS_DIR = resolve(__dirname, '../../../../library/claude-legacy/projects');
const TARGET_NAME = 'legacy-conversation-history-5-19-2026.md';

const app = new Claude();

async function navigateToProject(title: string): Promise<boolean> {
  await app.navigator.resetToHome();

  await app.auto.gateway.act(
    async () => { await app.auto.uia.invokeByName('Projects'); },
    async () => (await app.auto.uia.readUrl())?.includes('/projects') ?? false,
    { description: 'Go to projects', timeoutMs: 10_000 },
  );

  await app.auto.gateway.act(
    async () => {
      const clicked = await app.auto.uia.invokeLink(title);
      if (!clicked) await app.auto.uia.clickByName(title);
    },
    async () => (await app.auto.uia.readUrl())?.includes('/project/') ?? false,
    { description: `Open ${title}`, timeoutMs: 10_000 },
  );

  app.navigator.screen = 'project';
  return true;
}

async function getTopFile(): Promise<string | null> {
  const names = await app.auto.uia.allNames();
  const checkboxes = names
    .filter(n => n.startsWith('ControlType.CheckBox | Select:'))
    .map(n => n.match(/Select: (.+)/)?.[1] ?? '');
  return checkboxes[0] || null;
}

async function uploadCover(folder: string, title: string): Promise<void> {
  const coverPath = resolve(PROJECTS_DIR, folder, '.cover.md');
  const content = readFileSync(coverPath, 'utf-8');
  await app.project._filesPane.addTextContent(TARGET_NAME, content);
  console.log(`  Uploaded (${content.length} chars)`);
}

async function main() {
  await app.launch();
  app.window.maximize();

  await app.auto.gateway.waitFor(async () => {
    const url = await app.auto.uia.readUrl();
    return url !== null;
  }, { timeoutMs: 5_000 });

  // 1. Fix Number Theory — remove bad .cover.md file
  console.log('[Number Theory] Fixing...');
  try {
    await navigateToProject('Number Theory');
    const top = await getTopFile();
    console.log(`  Top file: ${top}`);

    if (top && top.includes('.cover.md')) {
      console.log('  Removing bad file...');
      // Parse the label to get name, type, lines
      const parts = top.split(', ');
      const pf = new ProjectFile(app.auto, parts[0], parts[1] ?? '', parseInt(parts[2]) || 0);
      await pf.remove();
      console.log('  Removed.');
    }

    console.log('  Uploading correct file...');
    await uploadCover('number-theory', 'Number Theory');
    console.log('  OK');
  } catch (e: any) {
    console.log(`  FAILED: ${e.message}`);
  }

  // 2. Upload covers for remaining projects
  const remaining = [
    { folder: 'physics', title: 'Physics' },
    { folder: 'russia', title: 'Russia' },
    { folder: 'semantic-reference-theory', title: 'Semantic Reference Theory' },
    { folder: 'turkey', title: 'Turkey' },
  ];

  for (const project of remaining) {
    console.log(`[${project.title}]`);
    try {
      await navigateToProject(project.title);
      const top = await getTopFile();

      if (top && top.includes(TARGET_NAME)) {
        console.log('  Already has correct file — skip');
        continue;
      }

      console.log('  Uploading cover...');
      await uploadCover(project.folder, project.title);
      console.log('  OK');
    } catch (e: any) {
      console.log(`  FAILED: ${e.message}`);
    }
  }

  app.window.minimize();
  console.log('\nDone.');
}

main().catch(console.error);
