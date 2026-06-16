// Navigate to SRT project, take screenshots before and after scrolling.
// Idempotent.

import { Claude } from '../claude.ts';

const claude = new Claude();
await claude.launch();
try { await claude.sidebar.switchToChat(); } catch { /* continue */ }
await claude.resetToHome();

console.log('[script] Opening projects...');
await claude.openProjects();

console.log('[script] Opening Semantic Reference Theory...');
await claude.openProject('Semantic Reference Theory');
console.log(`[script] Conversations: ${claude.project.conversations.length}`);

// Screenshot before scroll
claude.window.screenshot('C:/Source/dna-platform/dna-library/.claude/agents/library/..team/claude/.perspective/12-srt-before-scroll.png');
console.log('[script] Screenshot 1 (before scroll)');

// Scroll to bottom
const { Keyboard } = await import('../keyboard.ts');
const kb = new Keyboard(claude.window);
await kb.sendKeys('{END}');
await new Promise(r => setTimeout(r, 2000));

// Screenshot after scroll
claude.window.screenshot('C:/Source/dna-platform/dna-library/.claude/agents/library/..team/claude/.perspective/13-srt-after-scroll.png');
console.log('[script] Screenshot 2 (after scroll)');

claude.window.minimize();
console.log('[script] Done.');
