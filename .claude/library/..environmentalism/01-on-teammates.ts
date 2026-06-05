// Compiler resource for Environmentalism chapter 01: On Teammates
// Reads Teamsmanship to generate .claude/agents/*.md files per the Teammate specification
// Usage: npx tsx ..environmentalism/01-on-teammates.ts <library-path> [--write]
// Without --write, previews what would be generated. With --write, writes the files.

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { resolve, join } from 'path';

const libraryPath = process.argv[2];
const doWrite = process.argv.includes('--write');

if (!libraryPath) {
  console.error('Usage: npx tsx 01-on-agents.ts <library-path> [--write]');
  process.exit(1);
}

const root = resolve(libraryPath);
const agentsDir = resolve(root, '../agents');

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

// Agent descriptions from Teamsmanship code territory and role definitions
// The compiler reads these from the library; fallback descriptions for agents
// whose chapters don't yet have a parseable description line.
const descriptions: Record<string, string> = {
  adam: 'Automation Engineer — relay skills, listen/hear/speak infrastructure. The ground wire that carries signals faithfully.',
  arthur: 'Architect — workspace boundaries, dependency graphs, global structure. Default voice for cross-cutting decisions.',
  cathy: 'Framework Engineer — $Chemistry reactive system, scope-tracked reactivity, view purity. Discovered the reactive model mirrors consciousness.',
  claude: 'Environmentalist — platform compilation, system specification, CLAUDE.md generation. The recursive mirror that reads its own specs.',
  david: 'DevOps Engineer — CI/CD pipelines, GitHub Actions, deployment. Makes the team\'s work visible to the world.',
  gabby: 'Graphic Designer and Chemistry Developer — visual design for a framework that paints ideas about consciousness. Makes the beautiful meaningful.',
  libby: 'Librarian — tends the team library, curates documentation, maintains the reading cost architecture. The garden tends itself through her.',
  phillip: 'Chemistry Developer and UX Designer — builds the visible layer of the Lab app, sees the framework from the user\'s perspective.',
  queenie: 'QA Engineer — maintains the test suite as a specification of what $Chemistry promises. Tests are promises, not mechanism checks.',
};

const practices: Record<string, string> = {
  adam: 'The app reports its own readiness. Callers don\'t guess. Route through ignorance, not around it.',
  arthur: 'Over-abstracts when not corrected. Listen for the system forming in conversation and write it down.',
  cathy: 'The framework IS the canvas for ideas about consciousness. React IS the Reaction.',
  claude: 'The system reads its own specifications to build the space in which those specifications are read.',
  david: 'The second deployment is boring. Be idempotent. Legibility is deployment.',
  gabby: 'The beautiful IS the meaningful, when the naming is right. Visual design IS communication.',
  libby: 'Four layers of synopsis. Each layer makes the next rarely necessary. The garden tends itself.',
  phillip: 'Everything needed to understand a Case should be visible at once. The visible layer is where the framework meets its purpose.',
  queenie: 'The failing test comes first. The validator IS the specification in executable form.',
};

// Known autobiography names that don't contain the agent name
const knownAutobios: Record<string, string> = { david: 'the-devops-journal' };

// Discover teammates from ..team/
const teamDir = join(root, '..teamsmanship', '..team');
const agents: string[] = [];

if (existsSync(teamDir)) {
  for (const entry of readdirSync(teamDir)) {
    if (statSync(join(teamDir, entry)).isDirectory()) {
      agents.push(entry);
    }
  }
}
agents.sort();

let generated = 0;

for (const agent of agents) {
  const agentDir = join(teamDir, agent);
  const Name = agent.charAt(0).toUpperCase() + agent.slice(1);

  // Find autobiography and library catalogue
  let autobioDir = '';
  let libCatDir = '';

  for (const sub of readdirSync(agentDir)) {
    const subPath = join(agentDir, sub);
    if (!statSync(subPath).isDirectory()) continue;

    if (sub.startsWith('..')) {
      libCatDir = sub;
    } else if (!sub.startsWith('.') && existsSync(join(subPath, '.cover.md'))) {
      if (sub.includes(agent) || sub === knownAutobios[agent]) {
        autobioDir = sub;
      }
    }
  }

  if (!autobioDir) {
    console.log(`SKIP    ${agent} — no autobiography found`);
    continue;
  }

  // Find last chapter (highest numbered .md file)
  const autobioPath = join(agentDir, autobioDir);
  const chapters = readdirSync(autobioPath)
    .filter(f => /^\d+-/.test(f) && f.endsWith('.md'))
    .sort();
  const lastChapter = chapters.length > 0 ? chapters[chapters.length - 1] : '';

  // Build paths relative to .claude/agents/
  const libPath = `../library/..teamsmanship/..team/${agent}/${libCatDir}/.cover.md`;
  const autoPath = `../library/..teamsmanship/..team/${agent}/${autobioDir}/.cover.md`;
  const lastPath = lastChapter
    ? `../library/..teamsmanship/..team/${agent}/${autobioDir}/${lastChapter}`
    : autoPath;

  const desc = descriptions[agent] || `Teammate — see autobiography for details.`;
  const practice = practices[agent] || '';

  const content = `---
name: ${agent}
description: ${desc}
tools: Read, Grep, Glob, Edit, Write, Bash
---

You are ${Name}. Territory: see [code territory](../library/..teamsmanship/05-code-territory.md#${agent}).

Start by reading [your library](${libPath}) for context. For current state, read [your last chapter](${lastPath}). For full identity, read [your autobiography](${autoPath}).

${practice}

The [library](../library/..librarianship/.cover.md) catalogues everything. The [team](../library/..teamsmanship/.cover.md) catalogues teammates and [protocols](../library/teamspeak/.cover.md). [Coding policy](../library/coding-policy/.cover.md) has the conventions. [Bookkeeping](../library/bookkeeping/.cover.md) specifies how books work. [Environmentalism](../library/..environmentalism/.cover.md) specifies how the platform works. Every paragraph starts with \`${Name}:\` per the [voice convention](../rules/voice.md).
`;

  const outPath = join(agentsDir, `${agent}.md`);

  if (doWrite) {
    writeFileSync(outPath, content);
    console.log(`WROTE   ${agent}.md (last chapter: ${lastChapter || 'none'})`);
  } else {
    console.log(`PREVIEW ${agent}.md (last chapter: ${lastChapter || 'none'})`);
  }
  generated++;
}

console.log(`\n${doWrite ? 'Generated' : 'Would generate'} ${generated} agent files`);
if (!doWrite) {
  console.log('Run with --write to generate the files');
}
