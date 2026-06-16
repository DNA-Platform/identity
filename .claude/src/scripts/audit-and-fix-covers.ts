import { Claude } from '../claude.ts';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECTS_DIR = resolve(__dirname, '../../../../library/claude-legacy/projects');

const SKIP = ['.home', 'eirian', 'seren'];
const TARGET_NAME = 'legacy-conversation-history-5-19-2026.md';

const app = new Claude();

const PROJECTS = [
  { folder: 'ana-studies-english', title: 'Ana Studies English' },
  { folder: 'anas-fiverr-inbox', title: "Ana's Fiverr Inbox" },
  { folder: 'career', title: 'Career' },
  { folder: 'chemistry', title: 'Chemistry' },
  { folder: 'dna-patternity', title: 'DNA Patternity' },
  { folder: 'georgia', title: 'Georgia' },
  { folder: 'grammar', title: 'Grammar' },
  { folder: 'inexplicable-phenomena', title: 'Inexplicable Phenomena' },
  { folder: 'investing', title: 'Investing' },
  { folder: 'learning', title: 'Learning' },
  { folder: 'life', title: 'Life' },
  { folder: 'miscellaneous', title: 'Miscellaneous' },
  { folder: 'neuroscience', title: 'Neuroscience' },
  { folder: 'nikolai', title: 'Nikolai' },
  { folder: 'number-theory', title: 'Number Theory' },
  { folder: 'physics', title: 'Physics' },
  { folder: 'russia', title: 'Russia' },
  { folder: 'semantic-reference-theory', title: 'Semantic Reference Theory' },
  { folder: 'turkey', title: 'Turkey' },
];

async function navigateToProject(title: string): Promise<boolean> {
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
  return true;
}

async function getTopFileName(): Promise<string | null> {
  const names = await app.auto.uia.allNames();

  // Files appear as checkboxes: "Select: filename, type, N lines"
  const checkboxes = names
    .filter(n => n.startsWith('ControlType.CheckBox | Select:'))
    .map(n => {
      const match = n.match(/Select: (.+)/);
      return match ? match[1] : '';
    })
    .filter(Boolean);

  if (checkboxes.length === 0) return null;
  // First checkbox = topmost file
  return checkboxes[0];
}

async function main() {
  await app.launch();
  app.window.maximize();

  await app.auto.gateway.waitFor(async () => {
    const url = await app.auto.uia.readUrl();
    return url !== null;
  }, { timeoutMs: 5_000 });

  for (const project of PROJECTS) {
    const coverPath = resolve(PROJECTS_DIR, project.folder, '.cover.md');
    if (!existsSync(coverPath)) {
      console.log(`[${project.title}] No .cover.md — skip`);
      continue;
    }

    const coverContent = readFileSync(coverPath, 'utf-8');

    process.stdout.write(`[${project.title}] `);

    try {
      await navigateToProject(project.title);
    } catch (e: any) {
      console.log(`NAV FAILED: ${e.message}`);
      continue;
    }

    const topFile = await getTopFileName();

    if (topFile && topFile.startsWith(TARGET_NAME)) {
      console.log(`OK — has ${TARGET_NAME}`);
      continue;
    }

    if (topFile && (topFile.startsWith('.cover.md') || topFile.startsWith('cover.md'))) {
      // Wrong name — remove it first
      console.log(`BAD NAME: "${topFile}" — removing...`);
      try {
        const pf = new (await import('../components/project-file.ts')).ProjectFile(
          app.auto, topFile.split(',')[0].trim()
        );
        await pf.remove();
        process.stdout.write(`  Removed. Uploading correct name... `);
      } catch (e: any) {
        console.log(`  REMOVE FAILED: ${e.message} — skipping`);
        continue;
      }
    } else if (topFile) {
      // Some other file is on top — that's fine, we just need to add the cover
      process.stdout.write(`Top file is "${topFile.slice(0, 40)}" — uploading cover... `);
    } else {
      process.stdout.write(`No files — uploading cover... `);
    }

    // Upload the cover with the correct name
    try {
      await app.project._filesPane.addTextContent(TARGET_NAME, coverContent);
      console.log(`OK (${coverContent.length} chars)`);
    } catch (e: any) {
      console.log(`UPLOAD FAILED: ${e.message}`);
    }
  }

  app.window.minimize();
  console.log('\nDone.');
}

main().catch(console.error);
