# Sprints

- **specification:** Sprint
- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

A branch records the team's applied knowledge of building something. That knowledge accumulates sprint by sprint. The sprint book is called Projection — a projection of team effort onto the project. Each chapter is a sprint. Together they form the branch's autobiography: the chronological story of the team's work.

## The Projection book

Every branch has a book called Projection. The name comes from the mathematical sense — a projection maps one space onto another. Sprints exist in the team's identity (the main branch). Projection maps those sprints onto the project's branch, recording what the team actually did in the project's terms.

Projection's cover follows [cover conventions](../bookkeeping/03-on-covers.md): an opening paragraph, a table of contents listing each sprint chapter with a description. The cover IS the project's sprint summary — a reader who opens only the cover should understand the project's arc.

Projection is catalogued by the branch's [cataloguing book](02-cataloguing.md). Its `subject:` field links to the cataloguing book's cover.

## Sprint chapters

Sprint chapters in Projection follow the same conventions as sprint chapters in [project books](../bookkeeping/12-on-projects.md#sprints-as-chapters) — numbered, [signed](../bookkeeping/03-on-covers.md), chronological. The difference is scope: a project book in the main branch records the team's perspective on the work across all subjects. A Projection chapter records what happened in THIS branch's subject.

A sprint chapter contains:

- **What the sprint aimed to do** — the goal, in the project's terms
- **What was built** — the deliverables, decisions, and changes
- **What was learned** — insights, corrections, things that surprised the team

The last sprint chapter is the current state. A reader who opens the last chapter should know where the project stands right now, the same way the last chapter of an autobiography is the current-state marker.

**Write the entry when the sprint begins.** Create the sprint chapter as soon as the plan is known — its goal, tasks, and owners — so the intent is committed before the work, then carry it through the sprint and complete it at the [retro](../our-skillset/16-retro.md) with what was built and what was learned. Every sprint gets an entry; a sprint with no Projection chapter is work the branch will forget. Each branch's Projection cover repeats this reminder and links back here; the branches themselves are indexed in [Known Branches](05-branches.md).

## What a Projection book contains — the schema

Four kinds of chapter, and nothing else. A Projection book is a book, so everything in it is a numbered chapter with an author and a cover entry.

| kind | filename | law |
|---|---|---|
| **the scratchpad** | `00-planning.md` | one per book, chapter zero, overwritten as sprints absorb it |
| **a sprint** | `NN-sprint-XX--title.md` | **one chapter per sprint** — opened when the sprint begins, edited incrementally throughout, completed at its retro |
| **a decision record** | `NN-title.md` | a settled question later sprints refer back to, like a member audit |

**One chapter per sprint, and it holds the whole sprint.** Requirements from [ce-brainstorm](../our-skillset/28-ce-brainstorm.md) and guardrails from [ce-plan](../our-skillset/29-ce-plan.md) are **sections of that chapter**, not separate documents — the chapter moves from `requirements-only` to `implementation-ready` in place. A sprint that spawns a second file has split its own record.

**Where things stand is its last section.** That section is **Where things stand** — what is complete, what is in progress, what has not started, what is blocked and on what, what was verified with the numbers, and the wrong turns already tried so nobody retries them. It is rewritten as the work moves, not appended to.

That section is how a session ends and how the next one begins: **a session opens by reading the last sprint chapter.** Identity crosses sessions through [autobiographies](../bookkeeping/13-on-authorship.md); narrative and work state both cross through the sprint chapter. Nothing about work state lives outside the library — a scratch file beside the repo is a file the next reader will not find, and the library exists so that everything has a room.

## The sprint may declare a workflow

**Optional.** A sprint that is following a named [workflow](../..teamsmanship/19-workflows.md) says so in its opening, by link. Then its record says not only what happened but *under which discipline*, and the retro can ask whether the discipline held. A sprint that declares none is not doing anything wrong — most of ours have declared none — but it also cannot be judged against one.

## The sprint opens with its literature

A sprint begins by **choosing what to read** — and the choosing is part of the sprint, not preparation for it (Doug, 2026-08-01). The team selects the most relevant books and chapters for the work ahead — from the identity library, the branch libraries, and the primary sources — lists them **in the sprint chapter** with a line on why each earns its place, and reads them before building. The library is the lifeblood of the team: a sprint that starts from memory instead of from reading repeats what the library already corrected. The list is itself a record — a later reader of the sprint chapter sees not only what was built but what the team had in its head while building. Choose by relevance, not habit; re-choose mid-sprint when the work turns; and when a needed chapter doesn't exist, that absence is a finding for the retro.

## The planning scratchpad — chapter zero

Every Projection book may carry **`00-planning.md`** — the planning scratchpad, a true **chapter zero**: a numbered chapter like every part of a book (chapters have numbers; a file that dodges numbering isn't part of the book and loses alphabetical ordering). It sits first in the TOC, before every sprint, and holds the team's *temporary* planning notes — the sprint plan ahead, open design questions, notes-to-selves. Sprint chapters number from `01`.

Its TOC synopsis is **specification-shaped** and therefore survives every overwrite: it describes what the chapter *always is* — the planning scratchpad, the current plan — never what it currently says. Its law is the inverse of every other chapter: **notes are overwritten when addressed.** A sprint chapter records what happened, forever; the scratchpad records what is *intended*, only until it is. When a note becomes a sprint, the sprint chapter absorbs it and the note is deleted or rewritten. A plan note that outlives its intention is the scratchpad's form of rot — at each retro, sweep it.

Every sprint task must have an explicit owner assigned. The owner is determined by subject: Knowledge tasks go to the librarian, Collaboration tasks go to the architect, Environment tasks go to the environmentalist. See [Roles](../..teamsmanship/02-roles.md) for the full role definitions. When a task spans subjects, the owner is the teammate whose subject is primary. Unowned tasks are a planning failure — they get done by whoever notices them, which means they get done without the right perspective.

## Projection and project books

A project may have both a project book in the main branch (catalogued by [Teamsmanship](../..teamsmanship/.cover.md) under Collaboration) and a Projection book in its branch. They are not redundant. The project book records the team's cross-cutting perspective — architecture decisions, team dynamics, what mattered at the identity level. Projection records the detailed story in the branch's terms — what was built, what broke, what was learned about this specific subject.

The project book summarises. Projection details. A sprint chapter in the project book might say "restructured the bond system." The corresponding Projection chapter says how, why, what was lost, what was gained, and what the team learned about representation in the process.

<!-- citations -->
[covers]: ../bookkeeping/03-on-covers.md
[projects]: ../bookkeeping/12-on-projects.md
[cataloguing]: 02-cataloguing.md
[teamsmanship]: ../..teamsmanship/.cover.md

## Editing the chapter, and its cover

The sprint chapter is **edited incrementally** — when the requirements settle, when a guardrail is decided, when a unit lands, when a ruling is made. Not written at the end from memory.

**Reread before each edit**, and **update the cover in the same act**. Use [the TOC tool](../bookkeeping/03-on-covers--toc.ts), which parses and round-trips every entry so a cover can be updated without reading the whole book:

```bash
npx tsx .claude/library/bookkeeping/03-on-covers--toc.ts <cover.md> <NN-chapter.md> "synopsis" --force
```

A chapter whose cover entry still describes an earlier version of it is [the cover/chapter gap](../bookkeeping/03-on-covers.md), and it is this library's most common failure.
