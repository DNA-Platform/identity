// One-off: run capture for files only, then patch the existing mapping with file data.
// Keeps conversation data from the previous capture, updates only the files arrays.

import { Claude } from '../claude.ts';
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..', '..', '..', '..');
const EXPORTS = resolve(ROOT, 'library', 'claude-legacy', '.exports');

function findLatestMapping(): string {
  const files = readdirSync(EXPORTS)
    .filter(f => f.startsWith('project-mapping-') && f.endsWith('.json'));
  files.sort();
  return resolve(EXPORTS, files[files.length - 1]);
}

async function main() {
  const mappingPath = findLatestMapping();
  console.log(`[patch] Reading existing mapping: ${mappingPath}`);
  const mapping = JSON.parse(readFileSync(mappingPath, 'utf-8'));

  const claude = new Claude();
  await claude.launch();
  await claude.openProjects();
  const cards = claude.projects.cards;

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const existing = mapping.projects.find((p: any) => p.name === card.name);
    if (!existing) {
      console.log(`[patch] ${card.name}: not in mapping, skipping`);
      continue;
    }

    console.log(`[patch] (${i + 1}/${cards.length}) ${card.name}...`);

    try {
      await claude.openProjectAt(i);
      const files = await claude.project.files.wait();

      existing.files = files.map((f: any) => ({ name: f.name, size: f.size }));
      console.log(`[patch]   → ${files.length} files`);

      await claude.openProjects();
    } catch (err) {
      console.error(`[patch]   ✗ ${(err as Error).message}`);
      try {
        await claude.resetToHome();
        await claude.openProjects();
      } catch {
        console.error('[patch]   ✗ Recovery failed — stopping');
        break;
      }
    }
  }

  // Write patched mapping back (overwrite the same file)
  writeFileSync(mappingPath, JSON.stringify(mapping, null, 2), 'utf-8');
  console.log(`[patch] Patched ${mappingPath}`);

  claude.window.minimize();
  console.log('[patch] Done.');
}

main().catch(err => { console.error(err); process.exit(1); });
