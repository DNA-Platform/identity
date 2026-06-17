import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    await app.waitForUserToStopTyping();
    await app.sidebar.refresh();

    console.log('Sidebar (first 8):');
    for (const item of app.sidebar.chats.items.slice(0, 8)) {
      console.log(' ', item.title);
    }

    // Find the Libraries conversation — probably auto-titled by Desktop
    // Look for something about "LLM" or "technologies" or "file-based"
    let target = app.sidebar.chats.items.find(i =>
      i.title.includes('LLM') || i.title.includes('technolog') || i.title.includes('file-based')
      || i.title.includes('markdown') || i.title.includes('knowledge system')
      || i.title.includes('Synthesized') || i.title.includes('navigation')
    );

    if (!target) {
      // Try the most recent conversation
      target = app.sidebar.chats.items[0];
      console.log('No match found. Most recent:', target?.title);
    } else {
      console.log('Found:', target.title);
    }

    if (!target) return;

    // Rename to "Libraries"
    console.log('Renaming to "Libraries"...');
    const menu = await target.menu();
    await menu.rename('Libraries');
    console.log('Renamed.');

    // Verify it's in the Claude project
    await app.sidebar.refresh();
    const renamed = app.sidebar.chats.find('Libraries');
    if (renamed) {
      const menu2 = await renamed.menu();
      if (menu2.isInProject) {
        console.log('Already in a project.');
        await menu2.close();
      } else {
        console.log('Adding to Claude project...');
        const picker = await menu2.addToProject();
        if (picker.has('Claude')) {
          await picker.select('Claude');
          console.log('Filed in Claude project.');
        } else {
          await picker.cancel();
          console.log('Claude not in picker.');
        }
      }
    }

    // Verify via breadcrumbs
    await app.openChat('Libraries');
    const project = await app.conversation.readProjectName();
    console.log('Project:', project);

  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { app.window.minimize(); } catch {}
});
