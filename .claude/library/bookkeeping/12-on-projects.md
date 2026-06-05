# On Projects

- **specification:** Project
- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

A project is a [book](01-on-books.md) that contains the narrative of building something. It is catalogued by a [subject](07-on-subjects.md) — typically [Collaboration](../..teamsmanship/.cover.md) — and has `subject:` in its [frontmatter](03-on-covers.md) like any book. But a project book has a particular shape: its chapters are sprints, its cover has a history table, and its content is a living record of what was built, what was learned, and what's next.

## The project book

A project book sits at the library root like any book. It has a [cover](03-on-covers.md) with:

- An opening paragraph: what the project IS and why it exists
- A "what the team built" section: key deliverables
- A "what the team learned" section: insights that outlast the project
- A sprint history table: one row per sprint, linking to the sprint chapter
- Key references: which autobiography chapters relate to this project

The cover IS the project's executive summary. A reader who opens only the cover should understand what the project accomplished without reading any sprint chapter.

## Sprints as chapters

Each sprint is a [chapter](02-on-chapters.md) — numbered, signed, inside the project book. The sprint chapter is the plan. It follows the chapter convention: frontmatter with `title:` and `author:`, prose in the body.

A sprint chapter contains:
- **What the sprint aims to do** — the goal in one paragraph
- **Tasks** — numbered, with owners and scope
- **Definition of done** — what "complete" means

Sprint chapters may have subdirectories for artifacts that belong to the sprint: `sprint-51/plan.md`, `sprint-51/retro.md`, `sprint-51/spikes/`. The plan IS the chapter. Supporting artifacts sit beside it.

## The narrative

A project book is chronological. Sprint 1 comes before Sprint 2. The narrative is the story of the project — not just what was built but why decisions were made, what was tried and abandoned, what Doug corrected. The sprint chapters are diary entries. The cover is the summary of the diary.

This distinguishes a project book from a reference book. A reference book's chapters are organized by topic — the reader picks the chapter they need. A project book's chapters are organized by time — the reader follows the story or jumps to a specific sprint.

## Projects and subjects

A project book belongs to a subject via its `subject:` field, like any book. Typically a project belongs to Collaboration because it represents the team's work together. A project's sprint chapters don't have `subject:` — they inherit the book's subject as all chapters do.

When a project produces lasting knowledge — a framework, a specification, a tool — that knowledge lives in its own book, not in the project book. The project book records the building. The knowledge book contains the result. The project book links to the knowledge book. The separation means the knowledge survives the project's completion.

## The sprint history table

The project cover includes a table summarizing every sprint:

```markdown
| Sprint | Name | What happened |
|--------|------|---------------|
| 4 | $Chemistry | The first lift — Doug's monolith split into 8 modules |
| 51 | Make It Valid | 33 warnings fixed, validator extended, field guide slimmed |
```

Each row links to the sprint chapter. The table IS the project's [synopsis](09-on-synopsis.md) at the sprint level — a reader scanning it knows the project's arc without opening any chapter.

<!-- citations -->
[books]: 01-on-books.md
[chapters]: 02-on-chapters.md
[covers]: 03-on-covers.md
[frontmatter]: 03-on-covers.md
[subjects]: 07-on-subjects.md
[synopsis]: 09-on-synopsis.md
[evolution]: 10-on-evolution.md
