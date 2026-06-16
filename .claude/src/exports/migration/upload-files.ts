// upload-files.ts — Upload project files to the new account via Add text content.
// Reads chapter files for filenames, resource files for content.
// Uploads in file-list order (first to last). Cover uploads last.
// Skips Eirian (done by hand) and .home (not a project).

import { Claude } from '../../claude.ts';
import { readFileSync, existsSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECTS_DIR = resolve(__dirname, '../../../../../library/claude-legacy/projects');

const SKIP = ['.home', 'eirian'];

const app = new Claude();

interface FileToUpload {
  title: string;
  content: string;
  position: number;
}

function getFilesToUpload(projectFolder: string): FileToUpload[] {
  const filesDir = resolve(PROJECTS_DIR, projectFolder, '..files');
  if (!existsSync(filesDir)) return [];

  const entries = readdirSync(filesDir);
  const chapters = entries.filter(f => f.endsWith('.md') && f !== '.cover.md');
  const files: FileToUpload[] = [];

  for (const chapter of chapters) {
    const chapterPath = resolve(filesDir, chapter);
    const chapterContent = readFileSync(chapterPath, 'utf-8');

    // Get filename from frontmatter
    const filenameMatch = chapterContent.match(/^filename:\s*"?([^"\n]+)"?\s*$/m);
    const title = filenameMatch?.[1]?.trim();
    if (!title) continue;

    // Get position from frontmatter
    const posMatch = chapterContent.match(/^position:\s*(\d+)/m);
    const position = posMatch ? parseInt(posMatch[1]) : 999;

    // Find the resource file (linked via [View file])
    const viewMatch = chapterContent.match(/\[View file\]\(([^)]+)\)/);
    if (!viewMatch) continue;

    const resourceName = viewMatch[1];
    const resourcePath = resolve(filesDir, resourceName);
    if (!existsSync(resourcePath)) continue;

    try {
      const content = readFileSync(resourcePath, 'utf-8');
      files.push({ title, content, position });
    } catch {
      // Binary file — skip for now
      console.log(`  Skipping binary: ${title}`);
    }
  }

  // Sort by position (first to last = upload order)
  files.sort((a, b) => a.position - b.position);
  return files;
}

async function navigateToProject(name: string): Promise<boolean> {
  await app.navigator.resetToHome();
  await new Promise(r => setTimeout(r, 1000));
  await app.navigator.goToProjects();
  await new Promise(r => setTimeout(r, 2000));

  const clicked = await app.auto.uia.invokeLink(name);
  if (!clicked) {
    // Try clicking by name
    await app.auto.uia.clickByName(name);
  }
  await new Promise(r => setTimeout(r, 3000));

  const url = await app.auto.uia.readUrl();
  if (url?.includes('/project/')) {
    app.navigator.screen = 'project';
    return true;
  }
  return false;
}

async function uploadFilesToProject(projectFolder: string, displayName: string): Promise<void> {
  const files = getFilesToUpload(projectFolder);
  if (files.length === 0) {
    console.log(`  No files to upload`);
    return;
  }

  console.log(`  ${files.length} files to upload`);

  const navigated = await navigateToProject(displayName);
  if (!navigated) {
    console.log(`  FAILED to navigate to ${displayName}`);
    return;
  }

  const pane = app.project._filesPane;

  for (const file of files) {
    process.stdout.write(`  [${file.position}] ${file.title} (${file.content.length} chars)... `);
    try {
      await pane.addTextContent(file.title, file.content);
      console.log('OK');
    } catch (e: any) {
      console.log(`FAILED: ${e.message}`);
    }
    // Brief pause between uploads
    await new Promise(r => setTimeout(r, 1000));
  }

  // Upload cover as last file
  const coverPath = resolve(PROJECTS_DIR, projectFolder, '.cover.md');
  if (existsSync(coverPath)) {
    const coverContent = readFileSync(coverPath, 'utf-8');
    process.stdout.write(`  [cover] .cover.md (${coverContent.length} chars)... `);
    try {
      await pane.addTextContent('.cover.md', coverContent);
      console.log('OK');
    } catch (e: any) {
      console.log(`FAILED: ${e.message}`);
    }
  }
}

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  // Get project list
  const folders = readdirSync(PROJECTS_DIR)
    .filter(f => !SKIP.includes(f) && existsSync(resolve(PROJECTS_DIR, f, '.cover.md')));

  // Read display names from covers
  const projects: { folder: string; title: string }[] = [];
  for (const folder of folders) {
    const cover = readFileSync(resolve(PROJECTS_DIR, folder, '.cover.md'), 'utf-8');
    const titleMatch = cover.match(/^title:\s*"?([^"\n]+)"?\s*$/m);
    const title = titleMatch?.[1]?.trim() ?? folder;
    projects.push({ folder, title });
  }

  // Sort alphabetically
  projects.sort((a, b) => a.title.localeCompare(b.title));

  const projectArg = process.argv[2];
  const toProcess = projectArg
    ? projects.filter(p => p.folder === projectArg || p.title === projectArg)
    : projects;

  console.log(`Processing ${toProcess.length} projects:\n`);

  for (const project of toProcess) {
    console.log(`[${project.title}] (${project.folder})`);
    await uploadFilesToProject(project.folder, project.title);
    console.log('');
  }

  app.window.minimize();
  console.log('Done.');
}

main().catch(console.error);
