# Sprint 72 — The Reference Desk Book

- **author:** [Arthur](../../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Write the Reference Desk book. Not a frozen specification — a living guide to an evolving codebase. Focus on architecture, coding philosophy, the end-user experience, layers of abstraction, and where the code is going. Adam and Claude will test the book's claims against the actual code in Sprint 73.

## Source material

- **The code:** `../dna-library/.claude/agents/src/` — 276 files to be lifted to `.claude/src/`
- **The existing docs:** `../dna-library/.claude/agents/library/claude-driver/` — 14 chapters
- **The coding policy:** `../dna-library/.claude/agents/library/coding-policy/` — 5 chapters
- **The platform knowledge:** `../dna-library/.claude/agents/library/windows-automation/` — 5 chapters
- **The sprint history:** [Research Projection](../.projection/.cover.md) — 32 sprints with insight synopses mapped to book chapters

## Tasks

### Task 1: Create the book — Libby

Create `reference-desk/` at the library root with a cover per [On Covers](../../bookkeeping/03-on-covers.md). The cover has the chapter structure, each chapter linked to the source material it draws from. Chapters that aren't written yet get `[SCAFFOLD]` markers describing what needs to happen.

### Task 2: Lift the code — Adam, Claude

Copy `../dna-library/.claude/agents/src/` to `.claude/src/`. Verify `npx tsx .claude/src/index.ts` can at least parse without errors. Update [Territory](../../..teamsmanship/05-territory.md) with `.claude/src/` assignments.

### Task 3: Write the book — Arthur, Adam, Claude

Read the source material. Write each chapter by reading the code AND the docs AND the sprints that inform it. Each chapter must:
- Link to the source files it documents
- Link to the [Research Projection](../research-projection/.cover.md) sprints that taught the lesson
- Describe the architecture as it IS, not as it was designed to be
- Note where the code is going — what's incomplete, what needs extension, what principles guide future work
- Follow [On Synopsis § Write for evolution](../../bookkeeping/09-on-synopsis.md#write-for-evolution) — no hardcoded counts, no frozen snapshots

### Task 4: Catalogue — Libby

Update [Environmentalism](../../..environmentalism/.cover.md) to reference the Reference Desk. Update [Librarianship](../../..librarianship/.cover.md). Update [Territory](../../..teamsmanship/05-territory.md) with `.claude/src/` and `reference-desk/` assignments. Update [Compilation](../../.compilation/.cover.md) to catalogue `.claude/src/` as source code.

## Book structure (from sprint discussion)

Informed by reading the [Research Projection](../research-projection/.cover.md) arc:

1. **Purpose** — what this tool is, why it exists, Doug's Research framing, the ethical constraint. Sources: sprints 33, 49, 67.
2. **The Architecture** (part) — the five-layer stack, dependency injection, the object model. Sources: sprints 33, 35, 36, driver ch 04-05.
   - 02-01 Layers
   - 02-02 The Gateway Pattern — sources: sprint 61, driver ch 06, `gateway.ts`
   - 02-03 Navigation — sources: sprint 40-41, driver ch 07, `navigator.ts`
   - 02-04 The App Model — sources: sprint 40-41, coding-policy ch 05, `claude.ts`
3. **Operations** (part) — what scripts can DO with the app. Sources: sprints 56-67, driver ch 08-10.
   - 03-01 Sending Messages — sources: sprint 63, driver ch 08
   - 03-02 Reading Responses — sources: sprint 62-66, driver ch 09
   - 03-03 Project Operations — sources: sprint 57-60, driver ch 10
   - 03-04 Sessions — sources: sprint 67, `session.ts`
4. **Platform** (part) — Windows UIA, Win32, the shell. Sources: sprint 34, windows-automation book.
   - 04-01 Windows UIA — `uia.ts`
   - 04-02 Win32 — `window.ts`
   - 04-03 The Shell — `shell.ts`
5. **Coding Philosophy** — the principles for building and extending. Sources: coding-policy book (5 ch), sprint 35 (Doug's principles), sprint 61 (verification discipline), sprint 65 (no privileged state).
6. **Writing Scripts** — patterns, recipes, the pilot scripts. Sources: sprint 63, driver ch 12.
7. **Pitfalls** — bugs, lessons. Sources: driver ch 13.
8. **History** — the arc from PowerShell to sessions. Sources: driver ch 14, Research Projection TOC.
