// patch-may24.ts — Patch three projects after May 24 export integration.
// For each project: remove old cover file, upload new authored work file (SRT + Seren only),
// then upload the updated .cover.md.

import { Claude } from '../claude.ts';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECTS_DIR = resolve(__dirname, '../../../../library/claude-legacy/projects');

const COVER_TITLE = 'legacy-conversation-history-5-19-2026.md';

const app = new Claude();

interface ProjectPatch {
  folder: string;
  title: string;
  newFileChapter?: string;
}

const PROJECTS: ProjectPatch[] = [
  {
    folder: 'investing',
    title: 'Investing',
  },
  {
    folder: 'semantic-reference-theory',
    title: 'Semantic Reference Theory',
    newFileChapter: '56-file-seren-on-authoring-from-the-left-position.md',
  },
  {
    folder: 'seren',
    title: 'Seren',
    newFileChapter: '15-file-seren-on-authoring-from-the-left-position.md',
  },
];

async function navigateToProject(title: string): Promise<void> {
  await app.navigator.resetToHome();

  await app.auto.gateway.act(
    async () => { await app.auto.uia.invokeByName('Projects'); },
    async () => {
      const url = await app.auto.uia.readUrl();
      return url?.includes('/projects') ?? false;
    },
    { description: `Navigate to projects list`, timeoutMs: 10_000 },
  );

  await app.auto.gateway.act(
    async () => {
      const clicked = await app.auto.uia.invokeLink(title);
      if (!clicked) await app.auto.uia.clickByName(title);
    },
    async () => {
      const url = await app.auto.uia.readUrl();
      return url?.includes('/project/') ?? false;
    },
    { description: `Open project "${title}"`, timeoutMs: 10_000 },
  );

  app.navigator.screen = 'project';
}

function readAuthoredWork(projectFolder: string, chapterName: string): { title: string; content: string } | null {
  const filesDir = resolve(PROJECTS_DIR, projectFolder, '..files');
  const chapterPath = resolve(filesDir, chapterName);
  if (!existsSync(chapterPath)) return null;

  const chapter = readFileSync(chapterPath, 'utf-8');

  const filenameMatch = chapter.match(/^filename:\s*"?([^"\n]+)"?\s*$/m);
  const title = filenameMatch?.[1]?.trim();
  if (!title) return null;

  const viewMatch = chapter.match(/\[View file\]\(([^)]+)\)/);
  if (!viewMatch) return null;

  const resourcePath = resolve(filesDir, viewMatch[1]);
  if (!existsSync(resourcePath)) return null;

  return { title, content: readFileSync(resourcePath, 'utf-8') };
}

async function findAndRemoveCover(): Promise<boolean> {
  const names = await app.auto.uia.allNames();
  const checkboxes = names
    .filter(n => n.startsWith('ControlType.CheckBox | Select:'))
    .map(n => n.match(/Select: (.+)/)?.[1] ?? '')
    .filter(Boolean);

  const coverEntry = checkboxes.find(c => c.startsWith(COVER_TITLE));
  if (!coverEntry) return false;

  const { ProjectFile } = await import('../components/project-file.ts');
  const pf = new ProjectFile(app.auto, coverEntry.split(',')[0].trim());
  await pf.remove();
  return true;
}

async function main() {
  await app.launch();
  app.window.maximize();

  await app.auto.gateway.waitFor(async () => {
    const url = await app.auto.uia.readUrl();
    return url !== null;
  }, { timeoutMs: 5_000 });

  for (const project of PROJECTS) {
    console.log(`\n[${project.title}]`);

    try {
      await navigateToProject(project.title);
    } catch (e: any) {
      console.log(`  NAV FAILED: ${e.message}`);
      continue;
    }

    // 1. Remove existing cover
    process.stdout.write(`  Removing cover... `);
    try {
      const removed = await findAndRemoveCover();
      console.log(removed ? 'OK' : 'NOT FOUND (skipping)');
    } catch (e: any) {
      console.log(`FAILED: ${e.message}`);
    }

    // 2. Upload new authored work file (SRT and Seren only)
    if (project.newFileChapter) {
      const file = readAuthoredWork(project.folder, project.newFileChapter);
      if (file) {
        process.stdout.write(`  Uploading "${file.title}" (${file.content.length} chars)... `);
        try {
          await app.project._filesPane.addTextContent(file.title, file.content);
          console.log('OK');
        } catch (e: any) {
          console.log(`FAILED: ${e.message}`);
        }
      } else {
        console.log(`  WARNING: Could not read ${project.newFileChapter}`);
      }
    }

    // 3. Upload updated cover
    const coverPath = resolve(PROJECTS_DIR, project.folder, '.cover.md');
    const coverContent = readFileSync(coverPath, 'utf-8');
    process.stdout.write(`  Uploading cover (${coverContent.length} chars)... `);
    try {
      await app.project._filesPane.addTextContent(COVER_TITLE, coverContent);
      console.log('OK');
    } catch (e: any) {
      console.log(`FAILED: ${e.message}`);
    }
  }

  app.window.minimize();
  console.log('\nDone.');
}

main().catch(console.error);
