// Screenshot a project's interior to check conversation list pagination.

import { Claude } from '../claude.ts';

const projectName = process.argv[2] || 'Georgia';

const claude = new Claude();
await claude.launch();

try {
  await claude.sidebar.switchToChat();
} catch {
  console.log('[script] switchToChat failed, continuing...');
}

console.log(`[script] Opening project: ${projectName}`);
await claude.openProject(projectName);
console.log(`[script] Screen: ${claude.screen}`);
console.log(`[script] Conversations found: ${claude.project.conversations.length}`);

for (const c of claude.project.conversations.slice(0, 5)) {
  console.log(`  - ${c.title}`);
}
if (claude.project.conversations.length > 5) {
  console.log(`  ... and ${claude.project.conversations.length - 5} more`);
}

const path = claude.window.screenshot(
  `C:/Source/dna-platform/dna-library/.claude/agents/library/..team/claude/.perspective/11-${projectName.toLowerCase()}-interior.png`
);
console.log(`[script] Screenshot saved`);

claude.window.minimize();
