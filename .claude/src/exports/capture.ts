// Capture — drives the Claude app to export project-conversation mappings.
// Usage: npx tsx src/exports/capture.ts <account-id>
// Output: library/<account-id>/.exports/project-mapping.json

import { Claude } from '../claude.ts';
import { mkdirSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..', '..', '..', '..');

interface ProjectMapping {
  name: string;
  id: string;
  url: string;
  conversations: { title: string; lastMessage: string; position: number }[];
  files: { name: string; size?: string }[];
}

interface CaptureResult {
  account: string;
  captured: string;
  projects: ProjectMapping[];
}

async function main() {
  const account = process.argv[2];
  if (!account) {
    console.error('Usage: npx tsx src/exports/capture.ts <account-id>');
    process.exit(1);
  }

  const outputDir = resolve(ROOT, 'library', account, '.exports');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').substring(0, 19);
  const outputPath = resolve(outputDir, `project-mapping-${timestamp}.json`);
  mkdirSync(outputDir, { recursive: true });

  console.log(`[capture] Account: ${account}`);

  const claude = new Claude();
  await claude.launch();

  await claude.openProjects();
  const cards = claude.projects.cards;
  console.log(`[capture] Found ${cards.length} projects`);

  const result: CaptureResult = {
    account,
    captured: new Date().toISOString(),
    projects: [],
  };

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    console.log(`[capture] (${i + 1}/${cards.length}) ${card.name}...`);

    try {
      await claude.openProjectAt(i);
      const conversations = await claude.project.conversations.wait();
      const files = await claude.project.files.wait();

      result.projects.push({
        name: claude.project.name || card.name,
        id: claude.project.id,
        url: claude.project.url,
        conversations: conversations.map((c, idx) => ({
          title: c.title, lastMessage: c.lastMessage, position: idx,
        })),
        files: files.map(f => ({ name: f.name, size: f.size })),
      });

      console.log(`[capture]   → ${conversations.length} conversations, ${files.length} files`);
      await claude.openProjects();

    } catch (err) {
      console.error(`[capture]   ✗ ${(err as Error).message}`);
      try {
        await claude.resetToHome();
        await claude.openProjects();
      } catch {
        console.error('[capture]   ✗ Recovery failed — stopping');
        break;
      }
    }
  }

  writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');
  console.log(`[capture] Wrote ${outputPath}`);
  console.log(`[capture] ${result.projects.length}/${cards.length} projects captured`);

  claude.window.minimize();
  console.log('[capture] Done.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
