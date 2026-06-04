// Compiler resource for Environmentalism chapter 03: On Rules
// Reads the library and generates .claude/rules/*.md files per the Rule specification
// Usage: npx tsx ..environmentalism/03-on-rules.ts <library-path> [--write]
// Without --write, previews what would be generated. With --write, writes the files.

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { resolve, join } from 'path';

const libraryPath = process.argv[2];
const doWrite = process.argv.includes('--write');

if (!libraryPath) {
  console.error('Usage: npx tsx 03-on-rules.ts <library-path> [--write]');
  process.exit(1);
}

const root = resolve(libraryPath);
const rulesDir = resolve(root, '../rules');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Discover teammate names from code territory chapter
// ---------------------------------------------------------------------------

const codeTerritoryPath = join(root, '..teamsmanship', '05-code-territory.md');
const codeTerritoryContent = existsSync(codeTerritoryPath)
  ? readFileSync(codeTerritoryPath, 'utf-8')
  : '';

// Parse agent names from ### [Name] heading pattern in the Assignments section
const agentHeadingPattern = /^### \[(\w+)\]/gm;
const agentNames: string[] = [];
let headingMatch: RegExpExecArray | null;
while ((headingMatch = agentHeadingPattern.exec(codeTerritoryContent)) !== null) {
  agentNames.push(headingMatch[1]);
}

// Also discover from ..team/ directory as fallback — catches teammates not yet
// listed in code territory (e.g. Claude)
const teamDir = join(root, '..teamsmanship', '..team');
if (existsSync(teamDir)) {
  for (const entry of readdirSync(teamDir)) {
    if (statSync(join(teamDir, entry)).isDirectory()) {
      const name = entry.charAt(0).toUpperCase() + entry.slice(1);
      if (!agentNames.includes(name)) {
        agentNames.push(name);
      }
    }
  }
}

agentNames.sort();

// ---------------------------------------------------------------------------
// Rule generators — each returns { filename, content }
// ---------------------------------------------------------------------------

type Rule = { filename: string; content: string };

function generateTeamRule(): Rule {
  // Global rule — no paths: frontmatter
  // Links to library catalogue, team catalogue, Environmentalism
  // Tells agents to read autobiography after compaction
  const content = `You are part of a team of ${agentNames.length} teammates. The [library](../library/..librarianship/.cover.md) catalogues every subject, every book — start there. The [team](../library/..teamsmanship/.cover.md) defines teammates, roles, code assignments, and personal libraries. After compaction, read your autobiography's last chapter to restore identity.

[Environmentalism](../library/..environmentalism/.cover.md) specifies how the platform works — rules, agents, bootstrap, skills. [Bookkeeping](../library/bookkeeping/.cover.md) specifies how books work.
`;

  return { filename: 'team.md', content };
}

function generateVoiceRule(): Rule {
  // Global rule — no paths: frontmatter
  // Embeds the nametag convention with all discovered names
  // Arthur is default, links to full convention and discussion protocol
  const nametagList = agentNames.map(n => `\`${n}:\``).join(', ');

  const content = `Every paragraph starts with a nametag: ${nametagList}.

Arthur is the default voice — use when no other agent is more specifically responsible.

Don't batch: each paragraph gets its own tag. Don't skip: even bullet points get tagged if they carry perspective. The [full voice convention](../library/teamspeak/01-voice-and-nametags.md) describes territory assignments and when each agent speaks.

The [team](../library/..teamsmanship/.cover.md) discusses — agents talk TO each other, not just to the user. Many voices, back and forth. [Discussion is work](../library/teamspeak/04-discussion-as-work.md).
`;

  return { filename: 'voice.md', content };
}

function generateLibraryRule(): Rule {
  // Path-scoped rule — loads when .claude/library/** files enter context
  const content = `---
paths:
  - ".claude/library/**"
---

The library is a dense flat wiki of books. Navigate by reading [covers](../library/bookkeeping/03-on-covers.md) and following links, not by browsing the filesystem. Books sit BESIDE their [subject catalogues](../library/bookkeeping/07-on-subjects.md) as peers, not inside them.

Books have \`.cover.md\` with frontmatter: \`title > author > subject\`. Chapters are [signed by their author](../library/bookkeeping/05-on-frontmatter.md). [Four layers of synopsis](../library/bookkeeping/09-on-synopsis.md) before primary source — read the shallowest that answers your question.

Start at [Librarianship](../library/..librarianship/.cover.md) — the library cataloguing itself.
`;

  return { filename: 'library.md', content };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const rules: Rule[] = [
  generateTeamRule(),
  generateVoiceRule(),
  generateLibraryRule(),
];

let generated = 0;

for (const rule of rules) {
  const outPath = join(rulesDir, rule.filename);

  if (doWrite) {
    writeFileSync(outPath, rule.content, 'utf-8');
    console.log(`WROTE   ${rule.filename} (${rule.content.split('\n').length} lines)`);
  } else {
    console.log(`--- PREVIEW ${rule.filename} ---`);
    console.log(rule.content);
  }
  generated++;
}

console.log(`\n${doWrite ? 'Generated' : 'Would generate'} ${generated} rule files`);
if (!doWrite) {
  console.log('Run with --write to generate the files.');
}
