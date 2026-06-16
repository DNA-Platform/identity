// Diagnose: what does the app show on the projects page?
// What hyperlinks exist? Can we click any?

import { Claude } from '../claude.ts';
import { Uia } from '../uia.ts';

const claude = new Claude();
await claude.launch();
try { await claude.sidebar.switchToChat(); } catch { /* ok */ }
await claude.resetToHome();

console.log(`Screen after reset: ${claude.screen}`);

await claude.openProjects();
console.log(`Screen after openProjects: ${claude.screen}`);
console.log(`Cards: ${claude.projects.cards.length}`);
if (claude.projects.cards.length > 0) {
  console.log(`First card: "${claude.projects.cards[0].name}"`);
}

// Check what hyperlinks exist on the page
const uia = new Uia(claude.window);
const text = await uia.readText();
if (text) {
  const lines = text.split('\n').filter(l => l.trim());
  console.log(`\nUIA text: ${lines.length} lines`);

  // Show the first 20 lines after "New project"
  const npIdx = lines.findIndex(l => l.trim() === 'New project');
  if (npIdx >= 0) {
    console.log(`\n"New project" at line ${npIdx}. Next 20 lines:`);
    for (let i = npIdx; i < Math.min(npIdx + 20, lines.length); i++) {
      console.log(`  ${i}: "${lines[i].trim()}"`);
    }
  } else {
    console.log('"New project" not found in UIA text');
    console.log('First 20 lines:');
    for (let i = 0; i < Math.min(20, lines.length); i++) {
      console.log(`  ${i}: "${lines[i].trim()}"`);
    }
  }
}

// Try directly invoking the first project
if (claude.projects.cards.length > 0) {
  const firstName = claude.projects.cards[0].name;
  console.log(`\nTrying invokeLink("${firstName}")...`);
  const result = await uia.invokeLink(firstName);
  console.log(`Result: ${result}`);

  if (!result) {
    console.log(`Trying invokeByName("${firstName}")...`);
    const result2 = await uia.invokeByName(firstName);
    console.log(`Result: ${result2}`);
  }
}

claude.window.minimize();
