// parse-to-temp.ts — Parse the latest export ZIP to .tmp-export/ for diffing.
// Usage: npx tsx src/scripts/parse-to-temp.ts

import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readdirSync } from 'fs';
import { ExportReader } from '../exports/reader.ts';
import { ExportWriter } from '../exports/writer.ts';
import { extractArtifacts } from '../exports/artifacts.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..', '..', '..', '..');
const EXPORTS_DIR = resolve(ROOT, 'library', 'claude-legacy', '.exports');
const OUTPUT_DIR = resolve(ROOT, '.tmp-export');

function findLatestZip(): string {
  const files = readdirSync(EXPORTS_DIR).filter(f => f.startsWith('data-') && f.endsWith('.zip'));
  files.sort();
  return resolve(EXPORTS_DIR, files[files.length - 1]);
}

async function main() {
  const zip = findLatestZip();
  console.log(`[parse] ZIP: ${zip}`);
  console.log(`[parse] Output: ${OUTPUT_DIR}`);

  const reader = new ExportReader(zip);
  const writer = new ExportWriter(OUTPUT_DIR);

  const users = reader.readUsers();
  console.log(`[parse] User: ${users[0]?.full_name}`);

  writer.writeMemories(reader.readMemories());

  const projects = reader.readAllProjects();
  for (const p of projects) writer.writeProject(p);
  console.log(`[parse] ${projects.length} projects`);

  const conversations = await reader.readConversations();
  let nonEmpty = 0;
  const sorted = conversations.sort((a, b) => a.created_at.localeCompare(b.created_at));
  for (const conv of sorted) {
    if ((conv.chat_messages?.length || 0) === 0) continue;
    nonEmpty++;
    writer.writeConversation(conv);
  }
  console.log(`[parse] ${nonEmpty} conversations written`);

  const artifacts = extractArtifacts(conversations);
  writer.writeArtifacts(artifacts);
  console.log(`[parse] ${artifacts.filter(a => a.command === 'create').length} artifacts`);
  console.log('[parse] Done.');
}

main().catch(e => { console.error(e); process.exit(1); });
