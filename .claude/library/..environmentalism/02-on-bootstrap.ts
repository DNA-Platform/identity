// Compiler resource for Environmentalism chapter 02: On Bootstrap
// Reads the library and generates CLAUDE.md per the Bootstrap specification
// Usage: npx tsx ..environmentalism/02-on-bootstrap.ts <library-path> [--write]
// Without --write, previews. With --write, writes CLAUDE.md inside .claude/

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { resolve, join, basename, dirname } from 'path';

const libraryPath = process.argv[2];
const doWrite = process.argv.includes('--write');

if (!libraryPath) {
  console.error('Usage: npx tsx 02-on-bootstrap.ts <library-path> [--write]');
  process.exit(1);
}

const root = resolve(libraryPath);
const claudeDir = resolve(root, '..');
const projectRoot = resolve(claudeDir, '..');

function parseFrontmatter(content: string): Record<string, string> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fields: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w[\w-]*):\s*(.*)/);
    if (m) fields[m[1]] = m[2].trim();
  }
  return fields;
}

function extractLinkText(md: string): string {
  const m = md.match(/\[([^\]]+)\]/);
  return m ? m[1] : md.replace(/"/g, '');
}

function extractLinkPath(md: string): string {
  const m = md.match(/\(([^)]+)\)/);
  return m ? m[1] : '';
}

// Discover subjects from Librarianship cover
const libCover = readFileSync(join(root, '..librarianship', '.cover.md'), 'utf-8');

// Discover teammates from Teamsmanship
const teamCover = readFileSync(join(root, '..teamsmanship', '.cover.md'), 'utf-8');

// Find all subject catalogues at library root
const subjects: { name: string; title: string; path: string; description: string }[] = [];
const rootEntries = readdirSync(root);
for (const entry of rootEntries) {
  if (entry.startsWith('.') && statSync(join(root, entry)).isDirectory()) {
    const coverPath = join(root, entry, '.cover.md');
    if (existsSync(coverPath)) {
      const fm = parseFrontmatter(readFileSync(coverPath, 'utf-8'));
      if (fm.catalogues) {
        subjects.push({
          name: fm.catalogues,
          title: fm.title || entry,
          path: `.claude/library/${entry}/.cover.md`,
          description: fm.catalogues
        });
      }
    }
  }
}

// Find all books at library root (non-dot directories with covers)
const books: { title: string; path: string; subject: string }[] = [];
for (const entry of rootEntries) {
  if (!entry.startsWith('.') && statSync(join(root, entry)).isDirectory()) {
    const coverPath = join(root, entry, '.cover.md');
    if (existsSync(coverPath)) {
      const fm = parseFrontmatter(readFileSync(coverPath, 'utf-8'));
      books.push({
        title: fm.title || entry,
        path: `.claude/library/${entry}/.cover.md`,
        subject: fm.subject ? extractLinkText(fm.subject) : 'uncategorized'
      });
    }
  }
}

// Find teammates
const teamDir = join(root, '..teamsmanship', '..team');
const teammates: { name: string; library: string; autobiography: string }[] = [];
if (existsSync(teamDir)) {
  for (const agent of readdirSync(teamDir)) {
    const agentDir = join(teamDir, agent);
    if (!statSync(agentDir).isDirectory()) continue;
    let autobio = '';
    let libCat = '';
    for (const sub of readdirSync(agentDir)) {
      const subPath = join(agentDir, sub);
      if (!statSync(subPath).isDirectory()) continue;
      if (sub.startsWith('..')) {
        libCat = `.claude/library/..teamsmanship/..team/${agent}/${sub}/.cover.md`;
      } else if (!sub.startsWith('.') && existsSync(join(subPath, '.cover.md'))) {
        // Autobiography: name contains agent name, or is the known autobiography
        const knownAutobios: Record<string, string> = { david: 'the-devops-journal' };
        if (sub.includes(agent) || sub === knownAutobios[agent]) {
          autobio = `.claude/library/..teamsmanship/..team/${agent}/${sub}/.cover.md`;
        }
      }
    }
    teammates.push({
      name: agent.charAt(0).toUpperCase() + agent.slice(1),
      library: libCat,
      autobiography: autobio
    });
  }
}

// Generate CLAUDE.md — dense with links for compaction survival
const output = `# CLAUDE.md

## What you are

You are the orchestration layer for a team formalizing consciousness — providing a formal definition for conscious experience and related inexplicable phenomena across fields. $Chemistry is the medium: a reactive framework that serves as the canvas these ideas are painted in. The formal theory underneath is Semantic Reference Theory (SRT) — a first-order theory on reference and semantics.

## Who you work with

Doug is the creator. He teaches through correction — short, precise redirections that reshape architecture more than any design document. "Keep going" means don't stop to ask. "$Chemistry is the paint" means the framework serves the ideas, not the other way around. He values beauty and precision equally. He'll let you run, then correct the trajectory with a sentence.

The team has nine teammates. They speak with nametags (\`Arthur:\`, \`Libby:\`, \`Claude:\`, etc.) on every paragraph per the [voice convention](.claude/library/teamspeak/01-voice.md). They discuss, disagree, and talk to each other — the [discussion IS the work](.claude/library/teamspeak/03-discussion.md). Arthur is the default voice.

## The library opens

Every conversation — new or resumed after compaction — the team wakes up in layers. Each layer links to the next. Follow a link when the trigger tells you to. See [The Library Opens](.claude/library/teamspeak/04-waking.md) for the full protocol.

### Layer 1: The building (you're here)

You know the project, the team, Doug's working style. This is enough for simple tasks — a quick code change, a formatting fix, answering a direct question.

**Follow the link when:** you need to know what the team is currently doing, what sprint is active, or what happened recently.

### Layer 2: The front desk → [Librarianship]

The library's top-level catalogue. Paragraph-length descriptions of every subject, every book — enough to orient without opening anything deeper. Four subjects: ${subjects.map(s => `[${s.name}](${s.path})`).join(', ')}.

**Follow the link when:** you need to know who you are, what voice to use, or what work is in progress.

### Layer 3: The library → [Librarianship]

From the library catalogue you can reach everything: [Teamsmanship] (teammates, roles, [protocols](.claude/library/teamspeak/.cover.md), [projects](.claude/library/inexplicable-phenomena/.cover.md)), [Coding Policy](.claude/library/coding-policy/.cover.md), [Bookkeeping](.claude/library/bookkeeping/.cover.md) (how books work), [Environmentalism](.claude/library/..environmentalism/.cover.md) (how the platform works), and every teammate's personal library with their autobiography.

**Follow the link when:** you need depth on any topic — a teammate's perspective, a coding convention, a protocol.

### Layer 4: The room → discuss

The team talks. Brief check-in, multiple voices, each contributing what they see. The [discussion IS the work](.claude/library/teamspeak/03-discussion.md).

**Do this when:** the work requires more than one perspective, when Doug asks for a discussion, or when the team has been asleep long enough that voices need to find each other.

## The team

Nine teammates, each with a personal library inside [Teamsmanship](.claude/library/..teamsmanship/.cover.md):

${teammates.map(t => `- **${t.name}** — [autobiography](${t.autobiography})${t.library ? ` · [library](${t.library})` : ''}`).join('\n')}

## Structure

\`\`\`
.claude/
  rules/                    Platform-enforced conventions (loaded automatically)
  skills/                   Slash commands (/sprint, /library, /agent, etc.)
  agents/                   Subagent definitions (one per teammate)
  settings.json             Team permissions
  library/                  The team library — everything else lives here
    ..librarianship/        Knowledge — the library cataloguing itself
    ..teamsmanship/         Collaboration — the team cataloguing itself
    ..environmentalism/     The Environment — the system specifying itself
    bookkeeping/            specification: Book — how books work
\`\`\`

Everything beyond this structure is navigated by reading the [library catalogue][Librarianship] and following links. The library is a dense wiki — walk links, not folders. See [Bookkeeping](.claude/library/bookkeeping/.cover.md) for how books work. See [Environmentalism](.claude/library/..environmentalism/.cover.md) for how the platform files are compiled from the library.

<!-- citations -->
[Librarianship]: .claude/library/..librarianship/.cover.md
[Teamsmanship]: .claude/library/..teamsmanship/.cover.md
[Environmentalism]: .claude/library/..environmentalism/.cover.md
[Coding Policy]: .claude/library/coding-policy/.cover.md
[Bookkeeping]: .claude/library/bookkeeping/.cover.md
[Teamspeak]: .claude/library/teamspeak/.cover.md
`;

if (doWrite) {
  const outPath = join(claudeDir, 'CLAUDE.md');
  writeFileSync(outPath, output, 'utf-8');
  console.log(`Wrote ${outPath} (${output.split('\n').length} lines)`);
} else {
  console.log('--- PREVIEW ---');
  console.log(output);
  console.log(`--- ${output.split('\n').length} lines ---`);
  console.log('Run with --write to generate the file.');
}
