# Sprint 72 — The Reference Desk Book

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Write the Reference Desk book while Adam and Claude test the code. Read the source material, write a working draft, run stateless tests, take screenshots. The book is a living guide to an evolving codebase — plan to change everything.

## Phase 1: Read and write the philosophy (everyone)

Read these before writing anything:
- The dna-library coding policy — naming, modular architecture, automation discipline, stateful app patterns
- [Sprint 35](../projected-research/03-sprint-35--the-object-model.md) — Doug's design principles: "look first, name second, implement last"
- [Sprint 61](../projected-research/25-sprint-61--feedback-mcp-research-and-app-hardening.md) — the verification discipline that created the gateway pattern
- [Sprint 65](../projected-research/29-sprint-65--the-composed-message.md) — "no privileged state" principle

Write these chapters first — they guide everything else:
1. **Purpose** — what the tool is, why it exists, the ethical constraint from [Sprint 67](../projected-research/31-sprint-67--conversation-sessions.md)
2. **Coding Philosophy** — the principles for building and extending. If the API is harder than the app, the API is wrong. Verify don't assume. No privileged state. Code references the library, library references code.

## Phase 2: Read the code, write the architecture (Adam, Claude, Arthur)

Print the interfaces. Read the core modules. Write what you find:
- `claude.ts` — the entry point. What does the public API look like?
- `gateway.ts` — act/waitFor/read. What are the signatures?
- `navigator.ts` — screen detection. What states exist?
- `session.ts` — the research dispatch API. start/send/read/end.
- `automation.ts` — the DI interface every controller receives.

For each module: list the exports, describe what they do, link to the source file. If something is mysterious, read it. If something is undocumented, note it as a gap.

Write these chapters:
3. **The Architecture** (part) — layers, gateway, navigation, app model
4. **Operations** (part) — sending, reading, projects, sessions

## Phase 3: Lift the code and tests (Adam, Claude)

Copy `../dna-library/.claude/agents/src/` to `.claude/src/`. Include all 24 test scripts at `src/scripts/test-*`.

Verify the code parses: `npx tsx .claude/src/index.ts` — expect it to fail at runtime (no Claude Desktop running) but it should PARSE without errors.

## Phase 4: Run stateless tests (Adam, Claude)

Rules:
- **Stateless only.** No writing messages into chat. No deleting anything you didn't create. Delete test things you DO create.
- **Explore the app.** Navigate between screens. Read the sidebar. Read project lists. Take screenshots.
- **Use perspective.** Save screenshots to Claude's `.perspective/` directory. Annotate what you see.
- **Write new tests** when the book claims something you can't verify from existing tests.

Test scripts to try first:
- `test-diagnostics.ts` — does the diagnostic system report app state?
- `test-settings-nav.ts` — can the app navigate to settings and back?
- `test-reset.ts` — does `resetToHome()` recover from any state?
- `test-conversation-read.ts` — can the app read an existing conversation?

For each test: note what it proved, what it didn't, and whether the book's description matches what you observed.

## Phase 5: Write platform and history (Arthur, Libby)

5. **Platform** (part) — Windows UIA, Win32, the shell. Read `uia.ts`, `window.ts`, `shell.ts`.
6. **Writing Scripts** — patterns from the pilot scripts
7. **Pitfalls** — from dna-library driver ch 13
8. **History** — from [Projected Research](../projected-research/.cover.md) TOC

## Phase 6: Assemble the catalogue

Create `reference-desk/` at the library root with a proper [cover](../bookkeeping/03-on-covers.md). The cover has `subject: Research` and links to `.projection/`. Update [Environmentalism](../..environmentalism/.cover.md), [Librarianship](../..librarianship/.cover.md), [Territory](../..teamsmanship/05-territory.md), [Compilation](../.compilation/.cover.md).

## What success looks like

- A `reference-desk/` book with a cover and chapter scaffolds, each linked to source files
- `.claude/src/` exists with the lifted code and test scripts
- At least 3 test scripts run successfully (stateless navigation tests)
- Screenshots in Claude's perspective showing the app in different states
- Working draft text in the philosophy, architecture, and operations chapters — incomplete but substantive
- The cover TOC has synopses for every chapter, even scaffolded ones
