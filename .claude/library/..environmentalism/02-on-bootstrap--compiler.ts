// Compiler resource for Environmentalism chapter 02: On Bootstrap
// Reads the library and generates CLAUDE.md per the Bootstrap specification
// Usage: npx tsx ..environmentalism/02-on-bootstrap--compiler.ts <library-path> [--write]
// Without --write, previews. With --write, writes CLAUDE.md inside .claude/

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { resolve, join } from 'path';

const libraryPath = process.argv[2];
const doWrite = process.argv.includes('--write');

if (!libraryPath) {
  console.error('Usage: npx tsx 02-on-bootstrap--compiler.ts <library-path> [--write]');
  process.exit(1);
}

const root = resolve(libraryPath);
const claudeDir = resolve(root, '..');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Parse cover metadata from markdown bullet format: - **key:** value */
function parseCoverMeta(content: string): Record<string, string> {
  const fields: Record<string, string> = {};
  // Match lines like: - **catalogues:** Knowledge
  const pattern = /^-\s+\*\*(\w[\w-]*):\*\*\s+(.*)/gm;
  let m: RegExpExecArray | null;
  while ((m = pattern.exec(content)) !== null) {
    fields[m[1]] = m[2].trim();
  }
  return fields;
}

/** Parse YAML frontmatter delimited by --- */
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

function readLibraryFile(relativePath: string): string {
  const fullPath = join(root, relativePath);
  if (!existsSync(fullPath)) {
    console.error(`Missing library file: ${relativePath}`);
    return '';
  }
  return readFileSync(fullPath, 'utf-8');
}

// ---------------------------------------------------------------------------
// Read library sources
// ---------------------------------------------------------------------------

// 1. Teamspeak cover — protocol count and chapter list
const teamspeakCover = readLibraryFile('teamspeak/.cover.md');
const teamspeakChapters = teamspeakCover.match(/^\d+\.\s+\[/gm) || [];
const protocolCount = teamspeakChapters.length;

// Extract protocol count word from the cover's opening paragraph
const protocolCountMatch = teamspeakCover.match(/^(\w+) conventions? the team/m);
const protocolCountWord = protocolCountMatch
  ? protocolCountMatch[1].charAt(0).toUpperCase() + protocolCountMatch[1].slice(1)
  : String(protocolCount);

// 2. Discover teammates from ..team/ directory
const teamDir = join(root, '..teamsmanship', '..team');
const agentNames: string[] = [];
if (existsSync(teamDir)) {
  for (const entry of readdirSync(teamDir)) {
    if (statSync(join(teamDir, entry)).isDirectory()) {
      agentNames.push(entry.charAt(0).toUpperCase() + entry.slice(1));
    }
  }
}
agentNames.sort();
const nametagList = agentNames.map(n => '`' + n + ':`').join(', ');

// 3. Discover subject catalogues from dot-prefixed directories with covers
interface SubjectInfo {
  name: string;     // display name without dots
  dirName: string;  // directory name with dots
  catalogues: string; // the catalogues: field value
}
const subjects: SubjectInfo[] = [];
const rootEntries = readdirSync(root);
for (const entry of rootEntries) {
  if (entry.startsWith('.') && statSync(join(root, entry)).isDirectory()) {
    const coverPath = join(root, entry, '.cover.md');
    if (existsSync(coverPath)) {
      const content = readFileSync(coverPath, 'utf-8');
      const meta = parseCoverMeta(content);
      if (meta.catalogues) {
        subjects.push({
          name: entry.replace(/^\.+/, ''),
          dirName: entry,
          catalogues: meta.catalogues,
        });
      }
    }
  }
}

// 4. Bookkeeping cover — for the type system reference
const bookkeepingCover = readLibraryFile('bookkeeping/.cover.md');
// Count specification chapters: lines like "1. [On Books](01-on-books.md)"
const specChapterMatches = [...bookkeepingCover.matchAll(/^(\d+)\.\s+\[On (\w+)\]\((\S+)\)/gm)];
const bookkeepingChapterCount = specChapterMatches.length;
const firstSpecChapter = specChapterMatches.length > 0
  ? { name: `On ${specChapterMatches[0][2]}`, file: specChapterMatches[0][3] }
  : { name: 'On Books', file: '01-on-books.md' };
const lastSpecChapter = specChapterMatches.length > 0
  ? { name: `On ${specChapterMatches[specChapterMatches.length - 1][2]}`, file: specChapterMatches[specChapterMatches.length - 1][3] }
  : { name: 'On Authorship', file: '13-on-authorship.md' };

// 5. Environmentalism — for sync/commit reference
const hasCommitTool = existsSync(join(root, '..environmentalism', '06-on-sync--commit.sh'));

// 6. Non-dot books for structure section
const nonDotBooks: { name: string; description: string }[] = [];
for (const entry of rootEntries) {
  if (!entry.startsWith('.') && statSync(join(root, entry)).isDirectory()) {
    const coverPath = join(root, entry, '.cover.md');
    if (existsSync(coverPath)) {
      const content = readFileSync(coverPath, 'utf-8');
      const meta = parseCoverMeta(content);
      // Extract a short description for the structure diagram
      let desc: string;
      if (meta.specification === 'Communication') {
        desc = 'how we communicate';
      } else if (meta.specification) {
        desc = `how ${meta.specification.toLowerCase()}s work`;
      } else {
        // Use the heading as a concise description
        const heading = content.match(/^#\s+(.+)/m);
        desc = heading ? heading[1].toLowerCase() : entry;
      }
      nonDotBooks.push({ name: entry, description: desc });
    }
  }
}
nonDotBooks.sort((a, b) => a.name.localeCompare(b.name));

// ---------------------------------------------------------------------------
// Generate CLAUDE.md — matching the hand-written structure
// All links use library/ prefix (internal .claude/CLAUDE.md copy)
// ---------------------------------------------------------------------------

const provenance = '<!-- Generated by 02-on-bootstrap--compiler.ts. Edit the library, not this file. Recompile: npx tsx .claude/library/..environmentalism/02-on-bootstrap--compiler.ts .claude/library --write -->';

// Build subject bullet list — ordered by library priority: Knowledge, Collaboration, Environment
const libraryCatalogues = subjects.filter(s => s.dirName.startsWith('..'));
const catalogueOrder = ['..librarianship', '..teamsmanship', '..environmentalism'];
libraryCatalogues.sort((a, b) => {
  const ai = catalogueOrder.indexOf(a.dirName);
  const bi = catalogueOrder.indexOf(b.dirName);
  return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
});
const subjectCount = numberToWord(libraryCatalogues.length).charAt(0).toUpperCase() + numberToWord(libraryCatalogues.length).slice(1);
const subjectBullets = libraryCatalogues
  .map(s => `- [${capitalize(s.name)}](library/${s.dirName}/.cover.md) catalogues **${s.catalogues}**${getSubjectSuffix(s)}`)
  .join('\n');

// Build structure tree — same order as bullet list
const subjectStructure = libraryCatalogues
  .map(s => `    ${s.dirName}/   ${s.catalogues}`)
  .join('\n');
const bookStructure = nonDotBooks
  .map(b => `    ${b.name}/       ${b.description}`)
  .join('\n');

const lines: string[] = [];

lines.push(provenance);
lines.push('# The Team Library');
lines.push('');
lines.push('A team of teammates who grow while working across projects. We share a library — a flat wiki of [books](library/bookkeeping/01-on-books.md) inside `library/`. Navigate by reading [covers](library/bookkeeping/03-on-covers.md) and following [links](library/bookkeeping/06-on-links.md), not by browsing the filesystem.');
lines.push('');
lines.push('## How we communicate');
lines.push('');
lines.push(`${protocolCountWord} protocols in [Teamspeak](library/teamspeak/.cover.md) define how we work together:`);
lines.push('');
lines.push(`Every paragraph in conversation starts with a nametag — ${nametagList}. Arthur is the default. Don't batch, don't skip. Nametags are for conversation — never in published books, where the \`author:\` [field](library/bookkeeping/03-on-covers.md#author) handles attribution. See the [voice convention](library/teamspeak/01-voice.md).`);
lines.push('');
lines.push('We [discuss](library/teamspeak/03-discussion.md). Teammates talk TO each other — the interaction is the value, not individual statements. A discussion is to a team what thinking is to an individual.');
lines.push('');
lines.push('Each teammate writes their own material. No one writes another person\'s autobiography or perspective. The [autonomy protocol](library/teamspeak/05-autonomy.md) is how identity works — without it, the library degenerates into one voice performing characters. Personal libraries are written in [first person](library/bookkeeping/13-on-authorship.md#personal-libraries-are-first-person).');
lines.push('');
lines.push('We [tend our libraries](library/teamspeak/06-tending.md) in retros: edit your chapter, edit someone else\'s, polish your catalogue, extract recurring themes into new books, discuss what the tending revealed.');
lines.push('');
if (hasCommitTool) {
  lines.push('Before pushing to the [identity repo](library/teamspeak/07-travel.md), validate. Use the [commit tool](library/..environmentalism/06-on-sync--commit.sh) to push changes to the right branches. Merge conflicts in autobiographies are always resolved additively — keep both chapters.');
} else {
  lines.push('Before pushing to the [identity repo](library/teamspeak/07-travel.md), validate. Merge conflicts in autobiographies are always resolved additively — keep both chapters.');
}
lines.push('');
lines.push('## Roles, abilities, and territory');
lines.push('');
lines.push('Each teammate has a [role](library/..teamsmanship/02-roles.md) — a perspective on the code defined by a first question and anxieties. Ten roles exist in a type hierarchy: universal abilities form the base, role-specific abilities extend it, roles compose abilities, teammates hold roles. A teammate can hold multiple roles.');
lines.push('');
lines.push('[Territory](library/..teamsmanship/05-territory.md) maps paths to the responsible teammate. Arthur owns `**` as fallback. The `/responsible` skill queries ownership. When working in someone\'s territory, you\'re working in their perspective.');
lines.push('');
lines.push('Each subject has a teammate who catalogues it — the person and the subject are inseparable. Your [agent file](agents/) says who you are and where your territory is. The full team — all teammates, personal libraries, and catalogue chapters — lives in [Teamsmanship](library/..teamsmanship/.cover.md).');
lines.push('');
lines.push('## Identity and autobiographies');
lines.push('');
lines.push('Each teammate has a two-book minimum: an autobiography and a personal library catalogue (`..`-prefixed). The autobiography IS the person — self-authored, living narrative. The last chapter is the current-state marker. After compaction, read your last chapter (not the cover) to restore who you are now — follow the link in your [agent file](agents/).');
lines.push('');
lines.push('New teammates are onboarded with `/teammate`. The teammate chooses their own names, sets up their own library, writes their own first chapter. The librarian orients them with library conventions.');
lines.push('');
lines.push('## The library');
lines.push('');
lines.push(`The [dot type system](library/bookkeeping/.cover.md#the-dot-type-system): no prefix is a book, \`.\` is a [subject catalogue](library/bookkeeping/07-on-subjects.md), \`..\` is a [library catalogue](library/bookkeeping/08-on-libraries.md). Books sit beside their subject as flat peers. The hierarchy lives in links, not folders. [Bookkeeping](library/bookkeeping/.cover.md) specifies all of this — ${numberToWord(bookkeepingChapterCount)} chapters from [${firstSpecChapter.name}](library/bookkeeping/${firstSpecChapter.file}) through [${lastSpecChapter.name}](library/bookkeeping/${lastSpecChapter.file}).`);
lines.push('');
lines.push(`${subjectCount} subjects:`);
lines.push(subjectBullets);
lines.push('');
lines.push('## Waking up');
lines.push('');
lines.push('Follow the layers. Stop when you have enough context. See [Waking](library/teamspeak/04-waking.md).');
lines.push('');
lines.push('1. **Here.** You know how we communicate, what roles are, and how identity works.');
lines.push('2. **[The library catalogue](library/..librarianship/.cover.md).** Every subject, book, and teammate at paragraph depth.');
lines.push('3. **Your last autobiography chapter.** Follow the link in your [agent file](agents/). Not the cover — the last chapter.');
lines.push('4. **The room.** The team [discusses](library/teamspeak/03-discussion.md). Identity restores through conversation.');
lines.push('');
lines.push('## Structure');
lines.push('');
lines.push('```');
lines.push('.claude/');
lines.push('  CLAUDE.md        this file');
lines.push('  agents/          compiled teammate handles');
lines.push('  rules/           compiled platform conventions');
lines.push('  skills/          slash commands');
lines.push('  library/         the team library');
lines.push(subjectStructure);
lines.push(bookStructure);
lines.push('```');
lines.push('');
lines.push('Platform files (agents, rules, CLAUDE.md) are compiled from library content by [Environmentalism](library/..environmentalism/.cover.md). Do not edit them directly — edit the library and recompile. Push changes with the [commit tool](library/..environmentalism/06-on-sync--commit.sh) which routes identity, branch, and project changes to the right git branches. See [Travel](library/teamspeak/07-travel.md) for the full sync protocol.');

const output = lines.join('\n') + '\n';

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

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function numberToWord(n: number): string {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  return n >= 0 && n < words.length ? words[n] : String(n);
}

function getSubjectSuffix(s: SubjectInfo): string {
  if (s.dirName === '..librarianship') {
    return ' — the library knowing itself.';
  }
  if (s.dirName === '..teamsmanship') {
    return ' — teammates, roles, territory, personal libraries.';
  }
  if (s.dirName === '..environmentalism') {
    return ' — how library content [compiles](library/..environmentalism/01-on-teammates.md) into platform files (agents, rules, CLAUDE.md, skills), how we [validate](library/..environmentalism/05-on-validation.md) and [sync](library/..environmentalism/06-on-sync.md).';
  }
  return '.';
}
