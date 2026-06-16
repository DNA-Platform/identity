// create-projects.ts — Create projects on the new account and set their instructions.
// Reads project names from cover frontmatter. Skips .home and existing projects.
// Creates in alphabetical order by display name.

import { Claude } from '../../claude.ts';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECTS_DIR = resolve(__dirname, '../../../../../library/claude-legacy/projects');

interface ProjectInfo {
  folder: string;
  title: string;
  description: string;
  instructions: string;
}

function readProjectInfo(folder: string): ProjectInfo | null {
  const coverPath = resolve(PROJECTS_DIR, folder, '.cover.md');
  if (!existsSync(coverPath)) return null;

  const content = readFileSync(coverPath, 'utf-8');

  // Extract title from frontmatter
  const titleMatch = content.match(/^title:\s*"?([^"\n]+)"?\s*$/m);
  const title = titleMatch?.[1]?.trim() ?? folder;

  // Extract first paragraph after the # heading as description
  const descMatch = content.match(/^#[^\n]+\n\n([^\n]+)/m);
  const description = descMatch?.[1]?.trim().slice(0, 100) ?? '';

  // Extract ## Instructions section
  const instrMatch = content.match(/## Instructions\n\n([\s\S]*?)(?=\n##|\n<!-- |$)/);
  const instructions = instrMatch?.[1]?.trim() ?? '';

  return { folder, title, description, instructions };
}

const SKIP_FOLDERS = ['.home'];
const EXISTING_PROJECTS = ['seren'];

const app = new Claude();

async function createProject(name: string, description: string): Promise<boolean> {
  await app.auto.uia.invokeByName('Projects');
  await new Promise(r => setTimeout(r, 2000));

  const clicked = await app.auto.uia.invokeByName('New project');
  if (!clicked) {
    console.log('  Could not click New project');
    return false;
  }
  await new Promise(r => setTimeout(r, 2000));

  await app.auto.uia.clickByName('What are you working on?');
  await new Promise(r => setTimeout(r, 300));
  await app.auto.keyboard.typeViaClipboard(name);
  await new Promise(r => setTimeout(r, 500));

  if (description) {
    await app.auto.uia.clickByName('What are you trying to achieve?');
    await new Promise(r => setTimeout(r, 300));
    await app.auto.keyboard.typeViaClipboard(description);
    await new Promise(r => setTimeout(r, 500));
  }

  const created = await app.auto.uia.invokeByName('Create project');
  if (!created) {
    console.log('  Could not click Create project');
    return false;
  }
  await new Promise(r => setTimeout(r, 3000));
  return true;
}

async function setInstructions(text: string): Promise<boolean> {
  if (!text) return true;

  // Click Edit Instructions to open the modal
  const editClicked = await app.auto.uia.invokeByName('Edit Instructions');
  if (!editClicked) {
    console.log('  Could not click Edit Instructions');
    return false;
  }
  await new Promise(r => setTimeout(r, 1000));

  // Click the text area in the modal
  await app.auto.uia.clickByName('Set project instructions');
  await new Promise(r => setTimeout(r, 300));

  // Type instructions
  await app.auto.keyboard.typeViaClipboard(text);
  await new Promise(r => setTimeout(r, 500));

  // Save
  const saved = await app.auto.uia.invokeByName('Save instructions');
  if (!saved) {
    console.log('  Could not click Save instructions');
    return false;
  }
  await new Promise(r => setTimeout(r, 1000));
  return true;
}

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  // Read all projects
  const { readdirSync } = await import('fs');
  const folders = readdirSync(PROJECTS_DIR)
    .filter(f => !SKIP_FOLDERS.includes(f));

  const projects: ProjectInfo[] = [];
  for (const folder of folders) {
    const info = readProjectInfo(folder);
    if (info) projects.push(info);
  }

  // Sort alphabetically by display name
  projects.sort((a, b) => a.title.localeCompare(b.title));

  console.log(`Found ${projects.length} projects to process:\n`);
  for (const p of projects) {
    const status = EXISTING_PROJECTS.includes(p.folder) ? '(exists)' : '(create)';
    console.log(`  ${status} ${p.title} [${p.folder}] — ${p.instructions.length} chars instructions`);
  }
  console.log('');

  for (const project of projects) {
    const isExisting = EXISTING_PROJECTS.includes(project.folder);

    if (isExisting) {
      console.log(`[${project.title}] Already exists — opening to set instructions...`);
      // Navigate to the existing project
      await app.navigator.resetToHome();
      await new Promise(r => setTimeout(r, 1000));
      await app.auto.uia.invokeByName('Projects');
      await new Promise(r => setTimeout(r, 2000));
      // Click on the project by name
      const opened = await app.auto.uia.invokeLink(project.title);
      if (!opened) {
        await app.auto.uia.clickByName(project.title);
      }
      await new Promise(r => setTimeout(r, 2000));
    } else {
      console.log(`[${project.title}] Creating...`);
      await app.navigator.resetToHome();
      await new Promise(r => setTimeout(r, 1000));
      const created = await createProject(project.title, project.description);
      if (!created) {
        console.log(`  FAILED to create ${project.title}`);
        continue;
      }
      console.log(`  Created.`);
    }

    // Set instructions
    if (project.instructions) {
      console.log(`  Setting instructions (${project.instructions.length} chars)...`);
      await setInstructions(project.instructions);
      console.log(`  Instructions set.`);
    } else {
      console.log(`  No instructions (blank as intended).`);
    }

    // Small delay between projects
    await new Promise(r => setTimeout(r, 1000));
  }

  app.window.minimize();
  console.log('\nDone. All projects created and instructions set.');
}

main().catch(console.error);
