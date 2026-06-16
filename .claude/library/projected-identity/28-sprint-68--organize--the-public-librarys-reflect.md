# Sprint 68: Organize — The Public Library's Reflect

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Rewrite `/organize` as the public-library parallel to `/reflect`. Where reflect tends personal libraries, organize tends the shared library and its branches. Then run it — connect and compact.

## Why this sprint

`/reflect` asks: is my personal library organized so a blank-slate me can catch up? `/organize` should ask: is the shared library organized so a blank-slate team can navigate it? Are responsibilities clear? Are territories justified? Are branch libraries connected to the identity library? Are personal libraries assigned to the right people with the right reasons?

The current organize skill is a codebase auditor — it checks file references and workspace health. It says nothing about books, covers, synopses, [territory](../..teamsmanship/05-territory.md), or the structure the team actually uses. It needs to become a library organization skill.

## What organize should do

Parallel to reflect's structure:

### Tend the shared library

- Read [Librarianship](../..librarianship/.cover.md). Is it current? Do the subject descriptions match what the subjects contain? Are the chapter descriptions rich enough?
- Read each [subject catalogue](../bookkeeping/07-on-subjects.md). Are the book descriptions current? Do they link to the right chapters?
- Read [Bookkeeping](../bookkeeping/.cover.md). Are the specifications being followed? Are there books that violate conventions?
- Check [On Synopsis](../bookkeeping/09-on-synopsis.md) compliance. Does every catalogue entry have a paragraph-depth synopsis? Does every book cover have an opening paragraph that serves as layer-2 synopsis?

### Organize responsibilities

- Read [Territory](../..teamsmanship/05-territory.md). Are the code assignments current? Are the justifications accurate? Do the path patterns match what actually exists?
- Verify every personal library is assigned to the right person with a stated reason. Each teammate's `..`-prefixed catalogue should appear in territory with a WHY annotation.
- Check that every shared book has an `author:` field pointing to a real autobiography. No orphaned books.
- Check that every subject catalogue has a `catalogues:` label and self-catalogues.

### Organize branches

- Read [Library Tree](../library-tree/.cover.md). Are the known branches listed? Do the links resolve?
- For each branch library, run the same checks as the shared library: synopses current, covers linked, books described.
- Check the one-way link convention: branches link INTO identity, identity doesn't link into branches. Flag violations.

### Connect

- Find isolated chapters — chapters with zero outbound links beyond the `author:` field. These are neurons without synapses.
- Find stale synopses — catalogue entries that describe a book differently from what the book's cover says.
- Find unlinked mentions — places where a concept is mentioned by name but not linked to where it lives.

### Compact

- Find redundant books — books whose content is fully covered by another book. Flag for merging per [On Evolution](../bookkeeping/10-on-evolution.md).
- Find thin books — books with one chapter that should fold back into their parent.
- Find overlong chapters — chapters over 80 lines that might want splitting.

## Task 1: Rewrite the organize skill chapter — Libby

Rewrite [our-skillset/08-organize.md](../our-skillset/08-organize.md) with the full content above. Link densely to [Librarianship](../..librarianship/.cover.md), [Bookkeeping](../bookkeeping/.cover.md), [Territory](../..teamsmanship/05-territory.md), [Library Tree](../library-tree/.cover.md), [On Synopsis](../bookkeeping/09-on-synopsis.md), [On Evolution](../bookkeeping/10-on-evolution.md). Make it as rich as the reflect skill.

## Task 2: Compile — Claude

Run the skills compiler to generate the SKILL.md from the library chapter. Validate compiled links.

## Task 3: Run organize — the team

Run `/organize` and do the work. Focus on connection (adding links to isolated chapters) and compaction (merging redundant content, flagging thin books).

## Task 4: Verify territory — Arthur

Read [Territory](../..teamsmanship/05-territory.md). Verify every assignment. Make sure every personal library is listed with a justification. Make sure every branch library path is assigned.
