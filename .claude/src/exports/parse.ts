// Parse — reads the export ZIP and writes the browsable archive.
// Usage: npx tsx src/exports/parse.ts (or: npm run parse)
// See: library/export-format/

import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { ExportReader } from './reader.ts';
import { ExportWriter, type ExportStatistics } from './writer.ts';
import { extractArtifacts } from './artifacts.ts';
import { dateOf } from './naming.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..', '..', '..', '..');

// Find the most recent data export ZIP by timestamp in the filename
import { readdirSync } from 'fs';

const account = process.argv[2] || 'claude-legacy';
const EXPORTS_DIR = resolve(ROOT, 'library', account, '.exports');
const OUTPUT_DIR = resolve(ROOT, 'library', account);

function findLatestZip(): string {
  const files = readdirSync(EXPORTS_DIR).filter(f => f.startsWith('data-') && f.endsWith('.zip'));
  if (files.length === 0) throw new Error(`No data-*.zip found in ${EXPORTS_DIR}`);
  files.sort();
  return resolve(EXPORTS_DIR, files[files.length - 1]);
}

const ZIP_PATH = findLatestZip();

async function main() {
  console.log('[parse] Reading export...');
  const reader = new ExportReader(ZIP_PATH);
  const writer = new ExportWriter(OUTPUT_DIR);

  // 1. Users
  const users = reader.readUsers();
  console.log(`[parse] User: ${users[0]?.full_name} (${users[0]?.email_address})`);

  // 2. Memories
  writer.writeMemories(reader.readMemories());

  // 3. Projects
  const projects = reader.readAllProjects();
  for (const project of projects) {
    writer.writeProject(project);
  }
  console.log(`[parse] Wrote ${projects.length} projects`);

  // 4. Conversations
  const conversations = await reader.readConversations();

  let totalMessages = 0;
  let nonEmpty = 0;
  let earliest = '9999';
  let latest = '0000';

  const sorted = conversations.sort((a, b) => a.created_at.localeCompare(b.created_at));

  for (const conv of sorted) {
    const msgCount = conv.chat_messages?.length || 0;
    totalMessages += msgCount;

    if (msgCount > 0) {
      nonEmpty++;
      if (conv.created_at < earliest) earliest = conv.created_at;
      if (conv.created_at > latest) latest = conv.created_at;
    }

    if (msgCount === 0) continue;
    writer.writeConversation(conv);
  }

  console.log(`[parse] Wrote ${nonEmpty} conversations (${conversations.length - nonEmpty} empty skipped)`);

  // 5. Artifacts
  const artifacts = extractArtifacts(conversations);
  writer.writeArtifacts(artifacts);
  console.log(`[parse] Found ${artifacts.length} artifacts (${artifacts.filter(a => a.command === 'create').length} unique)`);

  // 6. Statistics
  const largestConversations = sorted
    .filter(c => (c.chat_messages?.length || 0) > 0)
    .sort((a, b) => (b.chat_messages?.length || 0) - (a.chat_messages?.length || 0))
    .slice(0, 20)
    .map(c => ({
      title: c.name || 'Untitled',
      messages: c.chat_messages?.length || 0,
      date: dateOf(c.created_at),
    }));

  const stats: ExportStatistics = {
    totalConversations: conversations.length,
    totalMessages,
    nonEmptyConversations: nonEmpty,
    totalProjects: projects.length,
    totalDocs: projects.reduce((sum, p) => sum + p.docs.length, 0),
    totalArtifacts: artifacts.filter(a => a.command === 'create').length,
    earliestDate: dateOf(earliest),
    latestDate: dateOf(latest),
    largestConversations,
  };

  writer.writeStatistics(stats);

  console.log('[parse] Done.');
  console.log(`[parse] ${stats.totalConversations} conversations, ${stats.totalMessages} messages, ${stats.totalProjects} projects, ${stats.totalArtifacts} artifacts`);
  console.log(`[parse] Date range: ${stats.earliestDate} to ${stats.latestDate}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
