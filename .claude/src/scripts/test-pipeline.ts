// Test: turn-based conversation pipeline
// Opens conversations, reads into Turn[] model, serializes to library markdown.

import { Claude } from '../claude.ts';
import { turnsToMarkdown } from '../exports/format.ts';

const app = new Claude();
await app.launch();

process.on('unhandledRejection', () => { app.window.minimize(); });
process.on('uncaughtException', () => { app.window.minimize(); });

await app.sidebar.refresh();
const chats = app.sidebar.chats.items;
console.log(`\n=== ${chats.length} conversations in sidebar ===`);
for (const c of chats.slice(0, 8)) {
  console.log(`  [${c.index}] ${c.title}`);
}

const targets = [
  chats[0]?.title,
  chats[1]?.title,
].filter(Boolean);

for (const title of targets) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`"${title}"`);
  console.log('='.repeat(60));

  await app.openChat(title);

  const start = Date.now();
  const turns = await app.conversation.readTurns();
  const elapsed = Date.now() - start;

  console.log(`${turns.length} turns in ${elapsed}ms`);

  // Summary
  let artifacts = 0;
  let thinkingCount = 0;
  let attachments = 0;
  for (const turn of turns) {
    attachments += turn.prompt.attachments.length;
    if (turn.response) {
      artifacts += turn.response.artifacts.length;
      if (turn.response.thinking) thinkingCount++;
    }
  }
  console.log(`  Artifacts: ${artifacts}, Thinking: ${thinkingCount}, Attachments: ${attachments}`);

  // Show first 2 turns
  console.log('\n--- First 2 turns ---');
  for (let i = 0; i < Math.min(2, turns.length); i++) {
    const t = turns[i];
    const promptPreview = t.prompt.content.text.slice(0, 100).replace(/\n/g, ' ');
    console.log(`  Turn ${i}:`);
    console.log(`    Prompt: ${promptPreview}...`);
    if (t.response) {
      const respPreview = t.response.content.text.slice(0, 100).replace(/\n/g, ' ');
      console.log(`    Response: ${respPreview}...`);
      if (t.response.thinking) console.log(`    Thinking: ${t.response.thinking.summary}`);
      for (const a of t.response.artifacts) {
        console.log(`    Artifact: "${a.title}" (${a.type})`);
      }
    } else {
      console.log(`    Response: (none)`);
    }
  }

  // Serialize to markdown
  const md = turnsToMarkdown(title, turns);
  const mdLines = md.split('\n');
  console.log(`\n--- Markdown: ${mdLines.length} lines, ${md.length} chars ---`);
  for (let i = 0; i < Math.min(20, mdLines.length); i++) {
    console.log(mdLines[i]);
  }
}

console.log(`\n${'='.repeat(60)}`);
console.log('=== Done ===');
app.window.minimize();
