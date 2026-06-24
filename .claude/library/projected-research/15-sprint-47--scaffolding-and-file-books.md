# Sprint 47 — Scaffolding and File Books

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

Small sprint. Wire up the project-conversation mapping in code, scaffold all 20 project books with conversation chapters, add back-links from conversations to their project chapters, and then build the project file books.

## Sprint goal

**Every project has a scaffolded cover with a conversations table. Every conversation transcript links back to its project chapter. File books are built first — treating each project file like a conversation summary.**

## Track A — Scaffolding code (Adam)

| ID | Story |
|----|-------|
| A-1 | Integrate project-conversation mapping into the parser — read the mapping JSON, match conversations to projects by title, populate project covers with conversation tables |
| A-2 | Generate conversation chapters in each project (thin: title, date, messages, link to transcript, `[.md]` direct link) |
| A-3 | Add back-links to conversation transcripts — each `conversations/*.md` file gets a link at the top pointing to its chapter in its project |
| A-4 | Handle `.home` — unassigned conversations get a home project |

## Track B — File books (Claude + Libby)

Build the `..files/` sub-books for all projects that have files. Treat each project file like a conversation — read it, write a summary chapter that captures what the file is and what it tells us.

| ID | Story |
|----|-------|
| B-1 | For each project with files: read the file contents, write a summary in each file chapter (what is this file? what does it tell us about the project? about Doug/Ana?) |
| B-2 | Update identity books in `..identities/` with anything learned from project files |
| B-3 | Update the cataloguing book if new indexable sections emerge |

Projects with files (from capture): Eirian (72), Inexplicable Phenomena (66), DNA Patternity (17), Ana's Fiverr Inbox (3), Semantic Reference Theory (8), Chemistry (6), Miscellaneous (1), Grammar (1), Career (2 — but export says 0 files?), Physics (1)

## Track C — Documentation (Libby)

| ID | Story |
|----|-------|
| C-1 | Update migration book ch 05 with the scaffolding process and back-link convention |
| C-2 | Document the cataloguing book structure — how sub-indices reference sections and chapters across books |

## Constraints

- Scaffolding code lives in `src/exports/` alongside parser and capture
- The parser should be runnable end-to-end: `npm run parse` produces the full structure including scaffolded project books
- File books done first — they inform the project description in the cover
- Two-way navigation: project chapter → conversation transcript, conversation transcript → project chapter

<!-- citations -->
[sprint-46]: ../sprint-46/plan.md
[library-format]: ../../library/claude-migration/05-the-library-format.md
