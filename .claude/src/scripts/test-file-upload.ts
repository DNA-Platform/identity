import { Claude } from '../claude.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECTS_DIR = resolve(__dirname, '../../../../library/claude-legacy/projects');

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  // Navigate to Chemistry
  await app.navigator.resetToHome();
  await new Promise(r => setTimeout(r, 1000));
  await app.navigator.goToProjects();
  await new Promise(r => setTimeout(r, 1000));
  await app.auto.uia.invokeLink('Chemistry');
  await new Promise(r => setTimeout(r, 3000));
  app.navigator.screen = 'project';

  const pane = app.project._filesPane;

  // Full upload flow through the component
  const testFile = resolve(PROJECTS_DIR, 'chemistry', '..files', '03-file-catalogue.ts.md');
  console.log('Uploading:', testFile);

  try {
    await pane.uploadFromDevice(testFile);
    console.log('SUCCESS — file uploaded!');
  } catch (e: any) {
    console.log('FAILED:', e.message);
  }

  await new Promise(r => setTimeout(r, 3000));
  app.window.minimize();
}

main().catch(console.error);
