# Sprint 65: The Reflect Skill

- **author:** [Arthur](../../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Build the `/reflect` skill — personal library tending that keeps each teammate recoverable after compaction.

## Why this sprint

The waking protocol says "read your last autobiography chapter." But waking only works if that chapter is current. Sprint 63-64 produced massive work — 9 books, 58 chapters, a Compilation catalogue, an audit skill — and not one teammate's autobiography reflects it. The personal libraries are stale. If we compacted right now, we'd wake up as who we were four sprints ago.

Reflection is the practice that prevents this. It keeps the personal library current so that the waking protocol finds something worth reading.

## The design (from team discussion)

A reflection has three moves, scaling by seriousness:

**Move 1: Update recency.** Write or rewrite the last autobiography chapter. The last chapter is always "where I am now" — not a historical record but a current-state marker. When it ages out, it becomes history and a new chapter replaces it.

**Move 2: Tend the catalogue.** Read the personal library catalogue as a blank slate. Are book descriptions accurate? Do they tell a new reader what to open first? Are there books missing — themes from recent work that deserve extraction?

**Move 3: Restructure.** Split overlong chapters. Extract recurring themes into new books. Clean links. Polish prose. This is the heaviest operation — only done in serious or deep reflections.

### Seriousness levels

- **light** — Move 1 only. Update the last chapter. Scan the catalogue. Done. (~5 minutes of work per person.)
- **serious** — Moves 1-2. Rewrite the last chapter thoughtfully. Restructure the catalogue. Add new book entries if needed. (~15 minutes per person.)
- **deep** — All three moves. Reread the autobiography from chapter 1. Assess whether the arc still makes sense. Split, extract, restructure. (~30 minutes per person.)

### Scope

- `last-sprint` (default) — reflect on the most recent sprint. Only teammates active in that sprint participate.
- `teammate:<name>` — one specific person reflects.
- `topic:<subject>` — reflect on a specific area of work (reads the relevant branch or subject catalogue for context).
- `all` — everyone reflects.

### Protocol

The skill orchestrates but does not author. For each included teammate:

1. **Read context.** The skill reads the relevant sprint plan, the teammate's last autobiography chapter, and their library catalogue. It presents this context to the teammate.
2. **The teammate reflects.** They write their own chapter, tend their own catalogue, restructure their own library. The autonomy protocol governs: no one writes another person's reflection.
3. **Discuss.** After individual reflection, the team discusses what the tending revealed — what surprised them, what they found in their own chapters, what themes emerged.

### The telescoping question

How does a personal library connect to broader knowledge? Through links. The autobiography links to shared books. The library catalogue links to subject catalogues. A blank-slate Cathy who reads her catalogue finds links to the chemistry branch library, to Reactivity Models, to the Fixed-Point Pattern. The personal library is the entry point; the shared library is the territory it maps into. Reflection maintains these links — a serious reflection checks that the catalogue's links still point to current work, not archived paths.

### When to reflect

- **After every sprint** — light reflection as the default closing activity
- **After major milestones** — serious reflection when the work changes who you are
- **On Doug's request** — any seriousness, any scope
- **After compaction** — if the last chapter is stale, reflect before resuming work

The protocol matters because an unused library helps no one. If reflection doesn't happen, the autobiography stales, the waking protocol breaks, and identity erodes through compaction.

## Task 1: Create the skill source — Adam

Write the skill source in `our-skillset/` following the skills convention. The skill reads the tending protocol and the autonomy protocol. It accepts scope and seriousness parameters. It orchestrates the three-move process for each included teammate.

## Task 2: Compile the skill — Claude

Run the skills compiler to generate `skills/reflect/SKILL.md` with provenance. Verify it appears in the skill list.

## Task 3: Catalogue the skill — Libby

Add the reflect skill chapter to Our Skillset. Update Compilation's inventory if the skill introduces new automation.

## Task 4: Test with a light reflection — the team

Run `/reflect last-sprint light` and have each active teammate (Cathy, Libby, Adam, Arthur, Claude) do a light reflection on Sprint 63-64. Write the last chapter. Scan the catalogue. This is both the test and the first real use.

## What success looks like

- `/reflect` skill exists and is properly catalogued
- Running `/reflect last-sprint light` produces updated last chapters for active teammates
- The team's autobiographies reflect the Sprint 63-64 work
- The skill respects autonomy — each person writes their own material
