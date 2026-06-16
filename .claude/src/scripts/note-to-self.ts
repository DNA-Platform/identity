// note-to-self.ts — Send Doug's context message to every project on the new account.
// Discovers projects from the app (skips Eirian and Seren).
// For each: open project → send message → wait for response → rename → next.

import { Claude } from '../claude.ts';

const SKIP = ['eirian', 'seren', 'semantic reference theory'];

const MESSAGE = `Hi Claude, Doug here. I have recently migrated here from another account that I lost along with the domain that was my username. I have recreated the projects from my last account, added project files, and a "Note to Self" to help you remember how we interact and what we work on. Some projects also include my wife Ana. You two speak in Russian, so you will see content that is most relevant to her.

Can you please start by reading the project files, the index of legacy conversations, and then the note to self? Then create a detailed editable artifact where you reflect on the project, what is being accomplished, and the role you play in it for Ana and I. When reflecting on the role you play for Ana, please write in Russian`;

const TITLE = 'A Note to Self';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();

  await app.auto.gateway.waitFor(async () => {
    const url = await app.auto.uia.readUrl();
    return url !== null;
  }, { timeoutMs: 5_000 });

  await app.openProjects();
  const allProjects = app.projects.cards;

  const projects = allProjects.filter(
    p => !SKIP.some(s => p.name.toLowerCase() === s)
  );

  console.log(`Found ${allProjects.length} projects, processing ${projects.length}:\n`);
  for (const p of projects) console.log(`  - ${p.name}`);
  console.log('');

  let completed = 0;

  for (const project of projects) {
    console.log(`[${project.name}]`);

    try {
      process.stdout.write(`  Opening project... `);
      await app.openProject(project.name);
      console.log('OK');

      process.stdout.write(`  Sending message and waiting for response... `);
      await app.sendMessage(MESSAGE, true, 600_000);
      console.log('OK');

      process.stdout.write(`  Renaming... `);
      await app.renameConversation(TITLE);
      console.log('OK');

      completed++;
      console.log(`  DONE (${completed}/${projects.length})\n`);

      app.window.minimize();
    } catch (e: any) {
      console.log(`  FAILED: ${e.message}\n`);
    }
  }

  app.window.minimize();
  console.log(`\nComplete: ${completed}/${projects.length} projects.`);
}

main().catch(console.error);
