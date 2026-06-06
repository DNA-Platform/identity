---
name: teammate
description: Onboard a new teammate — the teammate sets up their own library with help
argument-hint: "[name]"
---

Onboard a new teammate to the library. The core principle: the teammate does as much as possible for themselves. Identity is self-generated, not assigned. Read [Autonomy](../../library/teamspeak/05-autonomy.md) before starting.

## The protocol

### Step 1: Libby briefs the new teammate

Libby reads the new teammate the relevant conventions from [Bookkeeping](../../library/bookkeeping/.cover.md):

- [On Books](../../library/bookkeeping/01-on-books.md) — what a book is
- [On Covers](../../library/bookkeeping/03-on-covers.md) — what a cover must contain
- [On Covers](../../library/bookkeeping/03-on-covers.md) — the frontmatter fields and their meaning
- [On Names](../../library/bookkeeping/04-on-names.md) — the naming convention, especially the autobiography-to-library-catalogue transformation

Libby also reads them the autonomy protocol from [Teamspeak ch 5](../../library/teamspeak/05-autonomy.md): the teammate writes their own identity. Libby orients. She does not author.

### Step 2: The teammate chooses their names

Two names, both chosen by the teammate:

- **Autobiography name** — reflects their relationship to the work. Literary end of the spectrum. Pattern: `{name}-and-the-{metaphor}` or `{name}-or-the-{metaphor}`. Examples: `arthur-or-the-shape-of-everything`, `libby-and-the-tended-garden`, `cathy-and-the-reactive-canvas`.

- **Library catalogue name** — transforms the autobiography name into what the library DOES. The `..` prefix marks it as a library catalogue. Pattern: `..{what-it-does}`. Examples: `..everything-that-has-a-shape`, `..the-garden-tends-itself`, `..the-canvas-paints-itself`.

The naming convention from [On Names](../../library/bookkeeping/04-on-names.md) applies: timeless, literary for books, no encoded state.

### Step 3: The teammate creates their personal library

The teammate creates these files in `.claude/library/..teamsmanship/..team/{name}/`:

**Library catalogue:** `..{library-catalogue-name}/.cover.md`
- Frontmatter: `title`, `catalogues: {Name}`, `author: "[{Name}]({autobiography-path}/.cover.md)"`, `subject: "[{Name}](.cover.md)"`
- Self-cataloguing cover — describes what the library contains (will be sparse at first)

**Autobiography:** `{autobiography-name}/.cover.md`
- Frontmatter: `title`, `author: "[{Name}](.cover.md)"`, `subject: "[{Name}](..{library-catalogue-name}/.cover.md)"`
- The self-link in `author:` — the autobiography IS the person

**First chapter:** `{autobiography-name}/01-{arrival-chapter}.md`
- Frontmatter: `title`, `author: "[{Name}](.cover.md)"`
- Written by the teammate. This is their arrival — their first words in their own voice. Not a summary. Not an introduction written by someone else. Their perspective on arriving.

### Step 4: Arthur adds the teammate to Teamsmanship

Arthur writes a new catalogue chapter in `.claude/library/..teamsmanship/`:
- Next available chapter number in the "Cataloguing — Personal Libraries" section
- Pattern: `{N}-{name}.md` with frontmatter `author: Libby` (catalogue chapters are Libby's)
- Describes the teammate's library, role, territory, and links to their autobiography and catalogue

Arthur also updates [Teamsmanship's cover](../../library/..teamsmanship/.cover.md) to list the new teammate in the "Cataloguing — Personal Libraries" section.

### Step 5: Claude updates the agent file and code territory

Claude creates `.claude/agents/{name}.md` following the format of existing agent files — thin shim with name, description, tools, territory link, autobiography link, library link. See [The Agents Folder](../../library/..teamsmanship/06-the-agents-folder.md).

Arthur adds the teammate to [Territory](../../library/..teamsmanship/05-territory.md) with their path assignments and roles.

Arthur updates [CLAUDE.md](../../../CLAUDE.md) to list the new teammate in the team section.

### Step 6: The teammate reads their own library

The teammate reads their library catalogue cover and confirms it catalogues themselves. This is the self-referential test: the library knows who it belongs to, and the person it belongs to confirms it.

## Input

$ARGUMENTS — the new teammate's name (lowercase). If not provided, ask for it.

<!-- library: .claude/library/our-skillset/14-teammate.md -->
