// Scaffold — builds project books from parser output + app capture mapping.
// Usage: npm run scaffold
// Reads: projects/*/.cover.md, conversations/*.md, .exports/project-mapping-*.json
// Writes: project covers with conversation tables, thin conversation chapters, back-links

import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, resolve, dirname, relative } from 'path';
import { fileURLToPath } from 'url';
import { toFilename, datedFilename, dateOf } from './naming.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..', '..', '..', '..');

const account = process.argv[2] || 'claude-legacy';
const LIBRARY = resolve(ROOT, 'library', account);
const EXPORTS = resolve(LIBRARY, '.exports');
const PROJECTS = resolve(LIBRARY, 'projects');
const CONVERSATIONS = resolve(LIBRARY, 'conversations');
const ARTIFACTS = resolve(LIBRARY, 'artifacts');

interface ArtifactRef {
  title: string;
  filename: string;
}

interface MappingConversation {
  title: string;
  lastMessage: string;
  position: number;
}

interface MappingProject {
  name: string;
  id: string;
  url: string;
  conversations: MappingConversation[];
  files: { name: string; size?: string }[];
}

interface ConversationMeta {
  filename: string;
  title: string;
  date: string;
  messages: number;
  uuid: string;
}

function findLatestMapping(): string {
  const files = readdirSync(EXPORTS)
    .filter(f => f.startsWith('project-mapping-') && f.endsWith('.json'));
  if (files.length === 0) throw new Error('No project-mapping-*.json found');
  files.sort();
  return resolve(EXPORTS, files[files.length - 1]);
}

function readConversationMeta(): ConversationMeta[] {
  if (!existsSync(CONVERSATIONS)) return [];
  return readdirSync(CONVERSATIONS)
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const content = readFileSync(join(CONVERSATIONS, filename), 'utf-8');
      const frontmatter = content.match(/^---\n([\s\S]*?)\n---/);
      if (!frontmatter) return null;
      const fm = frontmatter[1];
      const title = fm.match(/title:\s*"(.+?)"/)?.[1] || '';
      const created = fm.match(/created:\s*(.+)/)?.[1] || '';
      const messages = parseInt(fm.match(/messages:\s*(\d+)/)?.[1] || '0');
      const uuid = fm.match(/uuid:\s*(.+)/)?.[1] || '';
      return { filename, title, date: dateOf(created), messages, uuid };
    })
    .filter(Boolean) as ConversationMeta[];
}

function matchConversation(mapTitle: string, conversations: ConversationMeta[]): ConversationMeta | undefined {
  // Try exact title match first
  let match = conversations.find(c => c.title === mapTitle);
  if (match) return match;
  // Try case-insensitive
  const lower = mapTitle.toLowerCase();
  match = conversations.find(c => c.title.toLowerCase() === lower);
  if (match) return match;
  // Try filename-based match (both slugified)
  const mapSlug = toFilename(mapTitle);
  match = conversations.find(c => toFilename(c.title) === mapSlug);
  return match;
}

function readArtifactsByConversation(): Map<string, ArtifactRef[]> {
  const map = new Map<string, ArtifactRef[]>();
  const indexPath = join(ARTIFACTS, '.index.md');
  if (!existsSync(indexPath)) return map;

  const content = readFileSync(indexPath, 'utf-8');
  const rows = content.split('\n').filter(line => line.startsWith('|') && line.includes(']('));

  for (const row of rows) {
    // Parse: | date | [title](artifact-file) | type | [conv-title](../conversations/conv-file) |
    const artifactMatch = row.match(/\|\s*\[([^\]]+)\]\(([^)]+)\)/);
    const convMatch = row.match(/\[([^\]]+)\]\(\.\.\/conversations\/([^)]+)\)/);
    if (!artifactMatch || !convMatch) continue;

    const convFile = convMatch[2];
    const artifact: ArtifactRef = {
      title: artifactMatch[1],
      filename: artifactMatch[2],
    };

    const existing = map.get(convFile) || [];
    existing.push(artifact);
    map.set(convFile, existing);
  }

  return map;
}

function writeProjectCover(projectDir: string, projectName: string, chapters: { num: string; title: string; chapterFile: string; convFile: string; date: string; messages: number }[], hasFiles: boolean): void {
  const existingCover = readFileSync(join(projectDir, '.cover.md'), 'utf-8');
  const frontmatter = existingCover.match(/^---\n[\s\S]*?\n---/)?.[0] || '';

  let body = `\n\n# ${projectName}\n\n`;

  // Extract instructions from existing cover
  const instrMatch = existingCover.match(/## Instructions\n\n([\s\S]*?)(?=\n##|\n*$)/);
  if (instrMatch) body += `## Instructions\n\n${instrMatch[1].trim()}\n\n`;

  if (hasFiles) {
    body += `## Project Files\n\nSee [Project Files](..files/.cover.md)\n\n`;
  }

  body += `## Conversations\n\n`;
  if (chapters.length > 0) {
    body += `| # | Title | | Date | Messages |\n`;
    body += `|---|-------|-|------|----------|\n`;
    for (const ch of chapters) {
      body += `| ${ch.num} | [${ch.title}](${ch.chapterFile}) | [.md](../../conversations/${ch.convFile}) | ${ch.date} | ${ch.messages} |\n`;
    }
  } else {
    body += `*(No conversations mapped to this project)*\n`;
  }

  writeFileSync(join(projectDir, '.cover.md'), frontmatter + body, 'utf-8');
}

function writeConversationChapter(projectDir: string, chapter: { num: string; title: string; chapterFile: string; convFile: string; date: string; messages: number }, projectName: string, artifacts: ArtifactRef[], prev?: string, next?: string): void {
  const frontmatter = [
    '---',
    `title: "${chapter.title.replace(/"/g, '\\"')}"`,
    `date: ${chapter.date}`,
    `messages: ${chapter.messages}`,
    `type: conversation`,
    `full: ../../conversations/${chapter.convFile}`,
    '---',
  ].join('\n');

  let body = `\n\n# ${chapter.title}\n\n`;
  body += `**Project:** [${projectName}](.cover.md)\n`;
  body += `**Date:** ${chapter.date}\n`;
  body += `**Messages:** ${chapter.messages}\n\n`;
  body += `[Read full conversation](../../conversations/${chapter.convFile})\n\n`;

  if (artifacts.length > 0) {
    body += `### Artifacts\n\n`;
    for (const a of artifacts) {
      body += `- [${a.title}](../../artifacts/${a.filename})\n`;
    }
    body += '\n';
  }

  const nav: string[] = [];
  if (prev) nav.push(`[Previous](${prev})`);
  if (next) nav.push(`[Next](${next})`);
  if (nav.length) body += nav.join(' · ') + '\n';

  writeFileSync(join(projectDir, chapter.chapterFile), frontmatter + body, 'utf-8');
}

function addBackLink(convFilename: string, projectName: string, chapterFile: string, projectSlug: string): void {
  const convPath = join(CONVERSATIONS, convFilename);
  if (!existsSync(convPath)) return;
  const content = readFileSync(convPath, 'utf-8');

  const backLink = `**Project chapter:** [${projectName}](../projects/${projectSlug}/${chapterFile})\n`;

  // Insert after the frontmatter
  const updated = content.replace(/^(---\n[\s\S]*?\n---\n\n# .+\n)/, `$1\n${backLink}\n`);
  if (updated !== content) {
    writeFileSync(convPath, updated, 'utf-8');
  }
}

async function main() {
  console.log('[scaffold] Reading mapping...');
  const mappingPath = findLatestMapping();
  const mapping: { projects: MappingProject[] } = JSON.parse(readFileSync(mappingPath, 'utf-8'));
  console.log(`[scaffold] ${mapping.projects.length} projects in mapping`);

  console.log('[scaffold] Reading conversation metadata...');
  const allConversations = readConversationMeta();
  console.log(`[scaffold] ${allConversations.length} conversations available`);

  console.log('[scaffold] Reading artifacts index...');
  const artifactsByConv = readArtifactsByConversation();
  const totalArtifactLinks = Array.from(artifactsByConv.values()).reduce((sum, a) => sum + a.length, 0);
  console.log(`[scaffold] ${totalArtifactLinks} artifacts across ${artifactsByConv.size} conversations`);

  const assigned = new Set<string>();
  let chaptersCreated = 0;
  let backLinksAdded = 0;

  for (const project of mapping.projects) {
    const projectSlug = toFilename(project.name);
    const projectDir = join(PROJECTS, projectSlug);

    if (!existsSync(projectDir)) {
      mkdirSync(projectDir, { recursive: true });
    }

    // Match mapping conversations to parsed transcripts
    const chapters: { num: string; title: string; chapterFile: string; convFile: string; date: string; messages: number }[] = [];

    for (const mapConv of project.conversations) {
      const meta = matchConversation(mapConv.title, allConversations);
      if (!meta) continue;

      assigned.add(meta.filename);
      const num = String(chapters.length + 1).padStart(2, '0');
      const chapterFile = `${num}-${toFilename(meta.title)}.md`;

      chapters.push({
        num,
        title: meta.title,
        chapterFile,
        convFile: meta.filename,
        date: meta.date,
        messages: meta.messages,
      });
    }

    // Sort by date
    chapters.sort((a, b) => a.date.localeCompare(b.date));
    // Renumber after sort
    chapters.forEach((ch, i) => {
      ch.num = String(i + 1).padStart(2, '0');
      ch.chapterFile = `${ch.num}-${toFilename(ch.title)}.md`;
    });

    const hasFiles = existsSync(join(projectDir, '..files'));

    // Write project cover
    writeProjectCover(projectDir, project.name, chapters, hasFiles);

    // Write conversation chapters
    for (let i = 0; i < chapters.length; i++) {
      const prev = i > 0 ? chapters[i - 1].chapterFile : undefined;
      const next = i < chapters.length - 1 ? chapters[i + 1].chapterFile : undefined;
      const chapterArtifacts = artifactsByConv.get(chapters[i].convFile) || [];
      writeConversationChapter(projectDir, chapters[i], project.name, chapterArtifacts, prev, next);
      chaptersCreated++;

      // Add back-link to conversation transcript
      addBackLink(chapters[i].convFile, project.name, chapters[i].chapterFile, projectSlug);
      backLinksAdded++;
    }

    console.log(`[scaffold] ${project.name}: ${chapters.length} chapters`);
  }

  // Handle unassigned conversations (.home)
  const unassigned = allConversations.filter(c => !assigned.has(c.filename));
  if (unassigned.length > 0) {
    const homeDir = join(PROJECTS, '.home');
    mkdirSync(homeDir, { recursive: true });

    const sorted = unassigned.sort((a, b) => a.date.localeCompare(b.date));
    const homeChapters = sorted.map((meta, i) => {
      const num = String(i + 1).padStart(2, '0');
      return {
        num,
        title: meta.title,
        chapterFile: `${num}-${toFilename(meta.title)}.md`,
        convFile: meta.filename,
        date: meta.date,
        messages: meta.messages,
      };
    });

    // Write .home cover
    const homeFrontmatter = '---\ntitle: "Home"\ntype: project\n---';
    let homeBody = '\n\n# Home\n\nConversations not assigned to any project.\n\n';
    homeBody += `| # | Title | | Date | Messages |\n`;
    homeBody += `|---|-------|-|------|----------|\n`;
    for (const ch of homeChapters) {
      homeBody += `| ${ch.num} | [${ch.title}](${ch.chapterFile}) | [.md](../../conversations/${ch.convFile}) | ${ch.date} | ${ch.messages} |\n`;
    }
    writeFileSync(join(homeDir, '.cover.md'), homeFrontmatter + homeBody, 'utf-8');

    for (let i = 0; i < homeChapters.length; i++) {
      const prev = i > 0 ? homeChapters[i - 1].chapterFile : undefined;
      const next = i < homeChapters.length - 1 ? homeChapters[i + 1].chapterFile : undefined;
      const chapterArtifacts = artifactsByConv.get(homeChapters[i].convFile) || [];
      writeConversationChapter(homeDir, homeChapters[i], 'Home', chapterArtifacts, prev, next);
      chaptersCreated++;

      addBackLink(homeChapters[i].convFile, 'Home', homeChapters[i].chapterFile, '.home');
      backLinksAdded++;
    }

    console.log(`[scaffold] .home: ${homeChapters.length} unassigned conversations`);
  }

  console.log(`[scaffold] Done. ${chaptersCreated} chapters created, ${backLinksAdded} back-links added.`);
}

main().catch(err => { console.error(err); process.exit(1); });
