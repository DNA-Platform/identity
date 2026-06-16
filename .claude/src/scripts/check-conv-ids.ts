// Check if project conversations have clickable URLs or IDs in the UIA tree.
// Opens Physics (small project), reads the full UIA element tree for conversation entries.

import { Claude } from '../claude.ts';
import { Uia } from '../uia.ts';

const claude = new Claude();
await claude.launch();

await claude.openProjects();
await claude.openProjectAt(3); // Physics is at index 3 based on the grid order
console.log(`Project: ${claude.project.name}`);

const uia = new Uia(claude.window);

// Read the raw text and look for URLs or UUIDs near conversation titles
const text = await uia.readText();
if (text) {
  const lines = text.split('\n');
  // Find lines with "Last message" — the line before is the conversation title
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('Last message')) {
      const title = lines[i - 1]?.trim();
      if (title) {
        console.log(`\nConversation: "${title}"`);
        console.log(`  Next line: "${lines[i].trim()}"`);
        // Check surrounding lines for URLs or UUIDs
        for (let j = Math.max(0, i - 3); j <= Math.min(lines.length - 1, i + 3); j++) {
          const line = lines[j].trim();
          if (line.includes('chat/') || line.match(/[0-9a-f]{8}-/)) {
            console.log(`  FOUND ID near line ${j}: "${line}"`);
          }
        }
      }
    }
  }
}

// Also try: find all hyperlinks in the page and check their automation properties
console.log('\n=== Hyperlinks with chat URLs ===');
// Use invokeByName to see if conversation titles are hyperlinks with accessible URLs
const convs = claude.project.conversations.value;
for (const c of convs) {
  console.log(`  "${c.title}" — ${c.lastMessage}`);
}

claude.window.minimize();
