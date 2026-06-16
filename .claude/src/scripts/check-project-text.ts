// Check what UIA text the project view contains.
// Idempotent: launches, resets, navigates cleanly.

import { Claude } from '../claude.ts';

const projectName = process.argv[2] || 'Georgia';
const claude = new Claude();
await claude.launch();

try { await claude.sidebar.switchToChat(); } catch { /* continue */ }

// Go to projects grid first
console.log('[script] Opening projects list...');
await claude.openProjects();
console.log(`[script] Projects: ${claude.projects.cards.length}`);

// Now open the specific project
console.log(`[script] Opening ${projectName}...`);
await claude.openProject(projectName);
console.log(`[script] Project: ${claude.project.name}`);
console.log(`[script] Conversations: ${claude.project.conversations.length}`);

// Read raw UIA text
const { Uia } = await import('../uia.ts');
const uia = new Uia(claude.window);
const text = await uia.readText();

if (text) {
  const lines = text.split('\n').map(l => l.trim()).filter(l => l);

  // Search for view/show/load terms
  for (const term of ['View all', 'Show all', 'Load more', 'See more', 'See all', 'view all']) {
    const matches = lines.filter(l => l.toLowerCase().includes(term.toLowerCase()));
    if (matches.length > 0) {
      console.log(`\n[script] FOUND "${term}":`);
      for (const m of matches) console.log(`  ${m}`);
    }
  }

  // Show last 15 lines of the conversation section
  const lastMsgIdx = lines.map((l, i) => l.startsWith('Last message') ? i : -1).filter(i => i >= 0);
  if (lastMsgIdx.length > 0) {
    const lastOne = lastMsgIdx[lastMsgIdx.length - 1];
    console.log(`\n[script] Lines after last conversation entry (line ${lastOne}):`);
    for (let i = lastOne + 1; i < Math.min(lastOne + 10, lines.length); i++) {
      console.log(`  ${i}: "${lines[i]}"`);
    }
  }
}

await claude.goHome();
claude.window.minimize();
console.log('[script] Done.');
