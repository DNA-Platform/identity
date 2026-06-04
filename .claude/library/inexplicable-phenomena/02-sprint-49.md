---
title: "Sprint 49 — The Library Compiles Itself"
author: "[Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)"
---

# Sprint 49 — The Library Compiles Itself

Arthur: The library specifies the system. The platform files implement the spec. This sprint bridges them: compilers that generate platform files from library content, the skills book that catalogues what we can do, the field guide factored into standalone books, and every teammate's autobiography updated with what this session taught.

## 1. Factor the field guide (Libby)

Libby: [Librarianship](../..librarianship/.cover.md) has 18 chapters and 1210 lines. The [catalogue evolution pattern](../..librarianship/03-growth-and-refactoring.md#catalogue-evolution) says: graduate major chapters into standalone books at the library root with `subject: "[Knowledge](../..librarianship/.cover.md)"`. Librarianship becomes a leaner catalogue linking to richer books.

Arthur: Chapters to graduate:
- 01 (Anatomy of a Book — 101 lines) → standalone book
- 04 (Subjects and Catalogues — 121 lines) → standalone book
- 08 (Reading Cost Architecture — 86 lines) → standalone book
- 10 (Platform Interface — 74 lines) → standalone book

Arthur: Chapters that stay (too short, transitional, or core to the catalogue):
- 00 (The Library), 02 (Linking Garden), 03 (Growth), 05 (Authorship), 06 (Papers), 07 (Voice pointer), 09 (CLAUDE.md spec), 11 (Flat Structure), 12 (Perspective), 13 (Tasks), 14 (Alignment), 15-16 (subject descriptions)

## 2. Write compilers (Cathy + Arthur)

Arthur: Chapter resources that generate platform files from library content. The library is the source. The platform files are the build output.

- **Agent compiler** — reads [Teamsmanship ch 08](../..teamsmanship/08-the-agents.md) (teammates), [ch 02](../..teamsmanship/02-roles-and-the-type-system.md) (roles), [ch 05](../..teamsmanship/05-code-territory.md) (territory). Generates `.claude/agents/*.md` files with real links back to the library.
- **Territory rules compiler** — reads Teamsmanship ch 05. Generates `.claude/rules/{territory}.md` files scoped to code paths.
- **Skills compiler** — reads the skills book (to be created). Generates `.claude/skills/*/SKILL.md` files.
- **CLAUDE.md compiler** — reads [Librarianship ch 09](../..librarianship/09-claude-md-spec.md). Generates `CLAUDE.md` at the project root.

Arthur: Document the compilation pattern in the [platform interface](../..librarianship/10-the-platform-interface.md) chapter: the library is the editor, the platform files are the build output, compilers are chapter resources.

## 3. Create the skills book (Adam)

Adam: A new book at the library root: `skills-and-commands/` with `subject: "[Collaboration](../..teamsmanship/.cover.md)"`. One chapter per skill. Each chapter describes what the skill does, when to invoke it, and links to the `SKILL.md` file. Catalogued by [Teamsmanship](../..teamsmanship/.cover.md).

Adam: Current skills to catalogue: `/sprint`, `/library`, `/agent`, `/responsible`, `/role`, `/skill`, `/review`, `/organize`, `/workspace`, `/dna`, `/speak`, `/listen`, `/hear`.

## 4. Finish code territory (Arthur)

Arthur: [Teamsmanship ch 05](../..teamsmanship/05-code-territory.md) becomes the authoritative source for who owns what. The `/responsible` skill reads from here (or a compiled resource). Territory rules are generated from here.

## 5. Validator extension for `..team/` (Cathy)

Cathy: Design and implement the extension pattern: how a subject catalogue provides its own validator that the library validator discovers and runs. Write the spec in [Librarianship](../..librarianship/.cover.md). Implement for Teamsmanship — the `..team/` folder validator checks that the folder contains exactly the teammates catalogued in ch 08.

## 6. Restructure `.chemistry/` (Cathy)

Cathy: The 210 reference files in [.chemistry/](../.chemistry/.cover.md) need restructuring into proper books: particles, chemicals, atoms, bonds, synthesis, scope. Each becomes a book at the library root with `subject:` pointing to `.chemistry/`. `[SCAFFOLD]` markers for chapters not yet written.

## 7. Fix remaining broken links (Libby)

Libby: The restructures broke paths throughout the library. Run the link validator against the full library. Fix everything. This is the cleanup that validates the restructure.

## 8. Update autobiographies (everyone)

Arthur: Every teammate writes about what this session taught them. The autobiographies are the experience system — if we don't write the chapters, we didn't learn.

- **Arthur** — the three-layer model evolution, the compilation insight, learning that "agent" is the platform's word
- **Cathy** — the `$` in the library deepening, the reactive model as a pattern for the library itself
- **Libby** — ch 38 already written ("the library I didn't understand"). Needs cover and TOC update.
- **Adam** — the wire carrying the identity repo, pushing and pulling the team across projects
- **David, Phillip, Queenie, Gabby** — what the library restructure means for their domains

## Definition of done

- [ ] Field guide factored — major chapters graduated to books, Librarianship leaner
- [ ] Compilers written as chapter resources for agents, rules, skills, CLAUDE.md
- [ ] Skills book created and catalogued by Teamsmanship
- [ ] Code territory authoritative — `/responsible` reads from it
- [ ] Validator extension pattern specified and implemented
- [ ] `.chemistry/` restructured into book directories
- [ ] Link validator passes clean (except cross-repo and `[SCAFFOLD]`)
- [ ] Every teammate's autobiography updated
- [ ] Pushed to identity repo

<!-- citations -->
[librarianship]: ../..librarianship/.cover.md
[teamsmanship]: ../..teamsmanship/.cover.md
[alignment]: ../..librarianship/14-bringing-the-library-into-alignment.md
