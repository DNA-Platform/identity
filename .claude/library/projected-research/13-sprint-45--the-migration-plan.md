# Sprint 45 — The Migration Plan

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

A brainstorming sprint. The deliverable is a decision document: what gets pushed to the new account, in what form, and how the library stays in sync afterward.

## Sprint type

**Conversation-as-sprint.** No code this sprint. We discuss, we decide, we take notes. The output is a book in the library: `claude-migration/` — a plan that the team can execute in subsequent sprints.

## Context

We have:
- 20 projects with 694 conversations, 221 project files, 390 artifacts, and a memories file
- A parser that extracts the export ZIP into browsable markdown (`npm run parse`)
- An app driver that captures project-conversation mappings from the live app
- One complete project book (DNA Patternity) as the template for all 20
- The ELM — a navigable identity structure that preserves perspective, not just data

We need to figure out:
1. What can be pushed to the new `claude-dna` account?
2. In what form?
3. What is the right order of operations?
4. How does the library stay current after migration?

## Known constraints

- Projects can be created on the new account
- Project files can be uploaded (in reverse order to preserve ordering)
- Conversations cannot be uploaded — they are read-only history
- Memories cannot be directly imported — but project instructions can seed context
- The new account will have its own conversations that need to be captured incrementally

## Questions to resolve

1. **What is the unit of migration?** A project? A file set? A briefing document? All of the above?
2. **What does the new Claude need to know?** The full ELM? A synopsis? Per-project context?
3. **Should we rebuild the projects identically or design new ones?** (Same 20 projects, or reorganized?)
4. **What role do project instructions play?** Can they point to the library?
5. **How do we handle the 694 conversations?** They can't be uploaded — do they exist only in the ELM?
6. **Incremental sync:** How does the library capture new conversations from the new account without a full export?
7. **Back-and-forth:** What does it mean for the app and library to stay in dialogue?

## Team

| Agent | Contribution |
|-------|-------------|
| Arthur | Migration architecture — what goes where, dependency order, structural integrity |
| Adam | Tooling — what the parser and app driver need to do differently for the new account |
| Libby | The ELM — how the library book structure serves the migration, what conventions apply |
| Claude | Interaction design — what the new Claude experiences, how to seed identity without replaying history |

## Deliverable

A book: `.claude/agents/library/claude-migration/` — already exists, but will gain chapters from this sprint's decisions.

<!-- citations -->
[dna-patternity]: ../../../library/claude-legacy/projects/dna-patternity/.cover.md
[elm]: ../library/..team/libby/libby-and-the-tended-garden/14-closed-under-books.md
[export-format]: ../library/export-format/.cover.md
