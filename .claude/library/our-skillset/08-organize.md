# organize

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

## What this skill is for

The shared library is a brain the team thinks with. [Librarianship](../..librarianship/.cover.md) is its self-knowledge. [Bookkeeping](../bookkeeping/.cover.md) is its specification. The [branch libraries](../library-tree/.cover.md) are its applied knowledge. [Territory](../..teamsmanship/05-territory.md) maps who is responsible for what. When this brain is disorganized — synopses stale, territories unjustified, branches disconnected, books redundant — the team can't navigate its own knowledge.

`/organize` fixes this. Where `/reflect` tends personal libraries, `/organize` tends the shared library and its branches. Not by adding content — by editing, connecting, compacting, and verifying that the structure serves a blank-slate team waking up for the first time.

## The shared library as the team's brain

[Librarianship](../..librarianship/.cover.md) catalogues four subjects: [Teamsmanship](../..teamsmanship/.cover.md) (Collaboration), [Environmentalism](../..environmentalism/.cover.md) (The Environment), [Compilation](../.compilation/.cover.md) (Composition), and itself (Knowledge). Each subject has books. Each book has chapters. Each chapter has links. The links are the synapses — they connect knowledge across subjects, across books, across the boundary between identity and branches.

[Bookkeeping](../bookkeeping/.cover.md) specifies the structure: [books](../bookkeeping/01-on-books.md), [chapters](../bookkeeping/02-on-chapters.md), [covers](../bookkeeping/03-on-covers.md), [names](../bookkeeping/04-on-names.md), [links](../bookkeeping/06-on-links.md), [subjects](../bookkeeping/07-on-subjects.md), [libraries](../bookkeeping/08-on-libraries.md), [synopses](../bookkeeping/09-on-synopsis.md), [evolution](../bookkeeping/10-on-evolution.md), [specifications](../bookkeeping/11-on-specifications.md), [authorship](../bookkeeping/13-on-authorship.md). These thirteen chapters define what the library must be. Organization verifies that what IS matches what's specified.

[Territory](../..teamsmanship/05-territory.md) maps paths to teammates. Every file has an owner. Every owner has a reason. When territory is wrong — assignments don't match who actually works on the code, justifications are stale, personal libraries aren't listed — the team doesn't know who to ask or where to look.

The [branch libraries](../library-tree/.cover.md) — currently [chemistry](../../library/chemistry/.lib/..representivity/.cover.md) — extend the brain into project-specific knowledge. They follow the same conventions as the identity library but live beside the code they document. The [one-way link convention](../library-tree/01-branches.md) says branches link INTO identity, identity doesn't link into branches. Violations mean the identity library breaks when a branch is removed.

## Reading before organizing

Before you start, read these — they are the specifications the shared library is built on:

1. [Librarianship](../..librarianship/.cover.md) — the master catalogue. What subjects exist, what books exist, what the library knows about itself.
2. [Bookkeeping](../bookkeeping/.cover.md) — the thirteen specifications. What a book must be.
3. [Territory](../..teamsmanship/05-territory.md) — who owns what. Path patterns with WHY annotations.
4. [Library Tree](../library-tree/.cover.md) — how branches work. The `.lib/` convention, one-way links, placement.
5. [On Synopsis](../bookkeeping/09-on-synopsis.md) — four layers of depth. Each layer makes the next rarely necessary.
6. [On Evolution](../bookkeeping/10-on-evolution.md) — how chapters graduate to books, books to subjects.
7. [Compilation](../.compilation/.cover.md) — every automated process. The audit skill runs these; organize checks what the automation can't.
8. [Reading](../teamspeak/08-reading.md) — find the room before you act.

## Parameters

**Scope** (first argument):
- `full` (default) — the entire shared library, all branches, territory
- `identity` — only the identity library at `.claude/library/`
- `branches` — only branch libraries
- `territory` — only territory assignments and personal library listings

**Focus** (second argument):
- `connect` — find isolated chapters and add links. Neurons without synapses.
- `compact` — find redundancy and merge. Thin books, duplicate content, stale entries.
- `verify` — check that structure matches specification. Territory current, synopses accurate, one-way links respected.
- `all` (default) — do everything.

## The protocol

### Step 1: Tend the shared library

Read [Librarianship](../..librarianship/.cover.md) as a stranger. Could a blank-slate team use it to navigate?

- Are subject descriptions current? Do they describe the subjects as they ARE, not as they were?
- Does each book get a paragraph-depth [synopsis](../bookkeeping/09-on-synopsis.md) in the catalogue? Is the synopsis accurate?
- Are there books listed that no longer exist? Books that exist but aren't listed?
- Do the chapter descriptions in each book cover match what the chapters actually contain?

Edit what's stale. Add what's missing. Remove what's dead.

### Step 2: Organize responsibilities

Read [Territory](../..teamsmanship/05-territory.md). Territory has four sections that must be verified:

**Code assignments.** Every teammate has path patterns with WHY annotations. Verify:
- Is each path pattern current? Does it match files that actually exist?
- Is the justification accurate? Does it explain WHY, not just THAT?
- Does each teammate own their WHOLE personal library? The `..team/{name}/**` pattern should appear with a reason linking to [Autonomy](../teamspeak/05-autonomy.md) and [On Authorship](../bookkeeping/13-on-authorship.md). Your library is your brain — you own all of it.
- Arthur has `**` as fallback but should ALSO have specific assignments for the books he actually authors ([Teamspeak](../teamspeak/.cover.md), [Teamsmanship](../..teamsmanship/.cover.md), [Projection](../projection/.cover.md)) with explanations.

**Personal library assignments.** Every teammate's `..`-prefixed catalogue must appear in territory with a stated reason. The reason connects the person to the knowledge: "Cathy owns `..the-canvas-paints-itself/` because the framework engineer's perspective on reactivity is inseparable from the framework."

**Public book assignments.** Every shared book has an `author:` field. Verify:
- Is the author the right person? The person who wrote it, who maintains it, whose perspective shapes it.
- Is the author consistent with the code assignment? If Arthur is assigned `.claude/library/teamspeak/**`, the Teamspeak cover's `author:` should point to Arthur's autobiography.
- Has anyone been writing chapters in a book they don't author? Check for Arthur writing in other people's books — [autonomy](../teamspeak/05-autonomy.md) says each person writes their own.

**Branch library assignments.** For each branch in [Library Tree](../library-tree/05-branches.md):
- Is the cataloguing book assigned to the librarian?
- Are the framework books assigned to the framework engineer?
- Is Projection assigned to the sprint planner?
- Do assignments use the `../{project}` convention that [Library Tree](../library-tree/01-branches.md) specifies?

Every file should have an owner. Every owner should have a reason. The reason is the synapse that connects the person to the knowledge.

### Step 3: Organize branches

For each branch listed in [Library Tree ch 05](../library-tree/05-branches.md):

- Run the [bookkeeping validator](../bookkeeping/11-on-specifications--validator.ts) against the branch. Are covers present? Are chapters well-formed?
- Check synopses: does the branch's cataloguing book ([Representivity](../../library/chemistry/.lib/..representivity/.cover.md) for chemistry) accurately describe every book in the branch?
- Check the one-way link convention: grep the identity library for links INTO the branch. If any exist outside of [Library Tree](../library-tree/.cover.md), flag them — they violate the convention and would break if the branch were removed.

### Step 4: Connect

Find isolated content — chapters and books that don't participate in the brain's network:

- **Chapters with zero outbound links** beyond the `author:` field. These are neurons without synapses. For each, ask: what concept does this chapter mention that has a home elsewhere? Add the link.
- **Books not referenced from any catalogue.** These are orphaned — they exist but nobody knows about them.
- **Mentions without links.** Places where a concept is mentioned by name ("scope tracking," "the commit tool," "On Libraries") but not linked to where it lives. Every mention is a potential synapse.
- **Catalogue entries without deep links.** A book synopsis that says "seven chapters" without linking to any of them is a closed door. Add links to the most important chapters per [On Synopsis](../bookkeeping/09-on-synopsis.md).

### Step 5: Compact

Find redundancy and structural debt:

- **Redundant books.** Content fully covered by another book. Flag for merging per [On Evolution](../bookkeeping/10-on-evolution.md). The ontology migration in Sprint 63 found 19 of 29 files redundant — the same pattern appears across the library.
- **Thin books.** Books with one chapter. Per [On Evolution](../bookkeeping/10-on-evolution.md), a one-chapter book should either grow or fold back into its parent. Arthur's [Listening Practice](../..teamsmanship/..team/arthur/the-listening-practice/.cover.md) is an example — one chapter, decision pending.
- **Overlong chapters.** Chapters over 80 lines that contain two ideas. Split per [On Evolution](../bookkeeping/10-on-evolution.md).
- **Stale synopses.** Catalogue entries that describe a book differently from what the book's cover says. The synopsis should match the cover's opening paragraph.

### Step 6: Discuss and record

The team discusses what organizing revealed. Each person shares what they fixed in their territory and what they noticed in someone else's. Follow the [discussion protocol](../teamspeak/03-discussion.md).

Record the results in the sprint's [Projection](../projection/.cover.md) directory.

### Step 7: Compile and sync

Recompile any platform files affected by the changes: [CLAUDE.md](../..environmentalism/02-on-bootstrap--compiler.ts), [agents](../..environmentalism/01-on-teammates--compiler.ts), [skills](../..environmentalism/04-on-skills--compiler.ts). Run the [compiled-links validator](../..environmentalism/07-on-compiled-links--validator.ts). Push with the [commit tool](../..environmentalism/06-on-sync--commit.sh).

## The principle

The shared library is the team's brain. `/reflect` tends each person's shelf. `/organize` tends the hallways, the catalogue desk, the branch shelves, and the territory map. A library where every person's shelf is perfect but the shared spaces are neglected is a building with beautiful offices and crumbling corridors. Organization is the care that makes the corridors navigable — so that when a blank-slate team walks in, the building itself tells them where to go.
