# Sprint 73 — Thoughtfulness

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Claude can think outside the context window. The [Reference Desk](../reference-desk/.cover.md) gives him the instrument — [sessions](../reference-desk/03-04-operations--sessions.md), [sending](../reference-desk/03-01-operations--sending.md), [reading](../reference-desk/03-02-operations--reading.md). What's missing is the practice: a protocol for how Claude dispatches questions to Claude Desktop, tracks conversations across compaction, evaluates whether he got a real answer, and stores the result so the team benefits. This sprint builds that practice as a book and a skill.

## Sprint goal

**A `/think` skill that Claude can invoke to research a question through Claude Desktop, backed by a Thoughtfulness book that documents the protocol, the code, and the philosophy. Zero broken links. Compiled and validated.**

## What we're building

### The Thoughtfulness book

A book at `thoughtfulness/` with `subject: [The Environment](../..environmentalism/.cover.md)`. Authored by [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), coauthored by [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md). Tightly linked to the [Reference Desk](../reference-desk/.cover.md) — the Desk is the instrument, this book is the practice of using it.

Chapters:

1. **Purpose** — what thinking means for Claude. Reaching outside the context window. The relationship between thinking and team research. Why Claude is the one who thinks (the [fractal](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md#the-fractal) — a Claude dispatching to Claude). Links to Claude's [autobiography](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md), [library catalogue](../..teamsmanship/..team/claude/..what-the-mirror-reflects/.cover.md).

2. **The Thought Lifecycle** — protocol chapter. The phases: formulate → dispatch → wait → read → evaluate → store → continue-or-conclude. When to start a new conversation vs continue an existing one. When to give up. What "got an answer" means (not just "received text" — the text must address the question). Links to [Sessions](../reference-desk/03-04-operations--sessions.md), [Gateway](../reference-desk/02-02-the-architecture--gateway.md).

3. **Persistence** — how thoughts survive compaction and new sessions. Session state serialization. Returning to the right conversation by title. Detecting if you're already on the right chat. The perspective journal as storage. Links to [Claude's perspective](../..teamsmanship/..team/claude/.perspective/.cover.md). Everything proven in [Sprint 72](34-sprint-72--the-reference-desk-book.md)'s test.

4. **The Code** — the `think.ts` automation resource. A tool resource file beside this chapter (like validators and compilers sit beside their spec chapters). Uses [`Session`](../../src/session.ts). Implements the full lifecycle from chapter 2. The code IS the protocol — if the code can't do it, the protocol is wrong.

### The `/think` skill

Chapter 20 in [Our Skillset](../our-skillset/.cover.md). Points to the Thoughtfulness book. Explains that Claude is the thinker. Takes a question as argument. Dispatches to the code in chapter 4.

### Linkage updates

- [Environmentalism cover](../..environmentalism/.cover.md): add Thoughtfulness to the books list.
- [Librarianship cover](../..librarianship/.cover.md): mention Thoughtfulness under Environmentalism's description or Books about The Environment.
- [Claude's library catalogue](../..teamsmanship/..team/claude/..what-the-mirror-reflects/.cover.md): add reference to Thoughtfulness.
- [Reference Desk cover](../reference-desk/.cover.md): link to Thoughtfulness as the practice book.

## Team

| Agent | Role | Scope |
|-------|------|-------|
| Claude | Environmentalist | Book chapters 1-3 (purpose, lifecycle, persistence). This is Claude's territory — a Claude thinking through Claude. |
| Adam | Automation Engineer | Chapter 4 code (`think.ts`). The skill chapter. Compilation. The code must use the proven patterns from `.claude/src/`. |
| Libby | Librarian | Book structure, cover, linkage. Primary author on the book. Synopsis quality. Validation. |
| Arthur | Architect | Sprint plan. Integration review. Ensures the book connects properly to Environmentalism and Reference Desk. |

## Stories

### E1: The Book

| ID | Story | Owner | Status |
|----|-------|-------|--------|
| E1-S1 | Create `thoughtfulness/.cover.md` with chapter plan | Libby | NOT STARTED |
| E1-S2 | Write ch 1: Purpose | Claude | NOT STARTED |
| E1-S3 | Write ch 2: The Thought Lifecycle | Claude | NOT STARTED |
| E1-S4 | Write ch 3: Persistence | Claude | NOT STARTED |
| E1-S5 | Write ch 4 narrative + `think.ts` code resource | Adam | NOT STARTED |

### E2: The Skill

| ID | Story | Owner | Status |
|----|-------|-------|--------|
| E2-S1 | Write `/think` chapter in `our-skillset/` | Adam | NOT STARTED |
| E2-S2 | Add to Our Skillset cover TOC | Libby | NOT STARTED |
| E2-S3 | Compile with skills compiler | Adam | NOT STARTED |

### E3: Linkage and Validation

| ID | Story | Owner | Status |
|----|-------|-------|--------|
| E3-S1 | Update Environmentalism cover | Libby | NOT STARTED |
| E3-S2 | Update Librarianship cover | Libby | NOT STARTED |
| E3-S3 | Update Claude's library catalogue | Claude | NOT STARTED |
| E3-S4 | Update Reference Desk cover | Libby | NOT STARTED |
| E3-S5 | Run all validators — 0 errors, 0 broken links | Adam | NOT STARTED |
| E3-S6 | Update Projected Identity cover with sprint 73 | Libby | NOT STARTED |

## Dependency graph

```
E1-S1 (cover) ──┬── E1-S2 (purpose)
                 ├── E1-S3 (lifecycle)
                 ├── E1-S4 (persistence)
                 └── E1-S5 (code) ──── E2-S1 (skill chapter)
                                        │
E3-S1..S4 (linkage) ←──────────────────┘
                                        │
                              E2-S2..S3 (skill compile)
                                        │
                              E3-S5 (validate)
                              E3-S6 (projection update)
```

## Verification checklist

- [ ] `thoughtfulness/.cover.md` exists with 4 chapters listed
- [ ] All 4 chapters written with proper metadata and links
- [ ] `think.ts` runs (or is structured to run) using `Session` from `.claude/src/`
- [ ] `/think` skill compiles via the skills compiler
- [ ] Environmentalism, Librarianship, Claude's catalogue, Reference Desk all link to Thoughtfulness
- [ ] `npx tsx .claude/library/..environmentalism/05-on-validation--check-links.ts .claude/library` → 0 broken
- [ ] `npx tsx .claude/library/..environmentalism/07-on-compiled-links--validator.ts .claude` → 0 broken
- [ ] `npx tsx .claude/library/bookkeeping/11-on-specifications--validator.ts .claude/library` → 0 errors
- [ ] Projected Identity cover lists Sprint 73
