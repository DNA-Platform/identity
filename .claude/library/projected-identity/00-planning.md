# The Plan — Chapter Zero

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*The planning scratchpad per [the convention](../library-tree/03-sprints.md#the-planning-scratchpad--chapter-zero): overwritten as sprints absorb it — when a note becomes real work, it leaves this chapter for the sprint's own. Revision 2026-07-29, opening the driver-and-runtime ladder.*

## The goal

The team reaches outside its own context window by **driving Claude Desktop like a human at the screen**. That capability is real — [Sprint 93](64-sprint-93--retro.md) ran `/think` end to end five times — but it is reached today by cold scripts, described by chapters that drifted from the code, and debugged by editing and re-running. The work ahead makes the driver **honest** (it checks the screen before it acts), **legible** (it can tell you what screen it is on and what you can do), and **resident** (a runtime you talk to, rather than a script you launch). The end state is a **Claude Nexus**: one process where the team's outward reach converges, addressed by command, answering with structured data — Desktop first, the teammates' persistent thinking and the library's own tools after.

## Sprint 98 — The Precondition and the Visible Tree

**Goal.** Doug's cross-cutting requirement: query the UIA tree on every action, test the controller's assumption against it *before* executing, keep the tree accessible on any error and on demand. The insight that organizes it: the tree snapshot is the medium of every action — read before, read after, handed over always.

**Execution.** Un-invert the edge first (`Instruments`, one controller at a time, the compiler auditing each), then thicken the choke point with the `precheck` beat and `GatedAction {target, invoke, verify}`. Define the three-slot shape **once, up front** — it is the entire coordination surface between the two halves, and defining it late means a second pass over every call site.

**Risks.** (1) *Lazy rendering vs. the precondition* — the tree shows only painted elements, so "target absent" may be a false negative, and a precondition that fails on things really there is worse than none. This is the one that can sink M2. (2) *Snapshot cost* — a useful snapshot needs geometry and order, which is a heavier walk; benchmark before fixing the shape. (3) *Scope drift into the `turn.ts` seam* — it is sequenced inside M1 deliberately, because migrating `exports/format.ts` lets three `gateway.read` methods be **deleted** rather than moved.

**Demo.** An action whose target is not on screen failing *immediately*, naming the element it expected, with the tree attached — instead of a 30-second opaque timeout.

## Sprint 99 — The Claude Nexus

**Goal.** The resident runtime and its CLI in `.claude/cli/`. Three capabilities land **in the app**: `describe()` (the screen's object model and available commands), `check()` (identity, type, structure), `recover()` (starting over is the app's job). Plus the active controller — low-level tree/invoke/keys, deliberately exposed and deliberately marked.

**Execution.** `describe()` derived from the page object, never hand-listed — settle *how* the derivation works early, because that is what decides whether it can drift. `screen` and `tree` before any action command. Command handlers stay thin: anything that cannot be expressed as an existing View call means the View is missing something.

**Risks.** (1) *A hand-written `describe()`* — it would lie inside one sprint; this is ch.12's drift with a new name. (2) *Transport chosen before the command surface* — that is how a design gets shaped by its plumbing. (3) *The low-level hatch becoming load-bearing* — if a workflow depends on `invoke`, that is a missing page method, and the fix belongs in the app.

**Demo.** Run one command, see the screen you are on and everything you can do to it — then break the state deliberately and watch `check()` say what disagreed and `recover()` fix it.

## Sprint 100 — The CLI Test Suite

**Goal.** Three layers: protocol against a fake driver (fast, hermetic, no app), app-capability against the live app with each inconsistency provoked, and the acceptance flows reliably green.

**Execution.** Written *after* 99, from the sprint's promises rather than the implementation. `describe()`'s no-drift property tested by **adding a real method**, never by comparing to a frozen list.

**Risks.** (1) *A frozen expected-command fixture* — it re-introduces the exact drift the design exists to prevent. (2) *Layer 3 half-green declared done* — [Sprint 89's table](56-sprint-89--retro.md) was 19 tests, 6 existing, 0 running; we have paid for that once. (3) *A suite that seizes the foreground* cannot be automatic on Doug's machine — say so rather than pretend.

**Demo.** Layer 1 green on a machine with no Claude Desktop; layer 2 provoking a modal and watching `recover()` land.

## Sprint 101 — Importing a Whole Conversation

**Goal.** Adapt the conversation-import logic from `../dna-library/.claude/agents/src/exports/import-conversation.ts`. It matters because **the current driver cannot read a long conversation** — the app virtualises its message list, so `messages()` sees one viewport.

**Execution.** Capture trees *first* — no adaptation before the screens it depends on are photographed. Then pagination, then the viewport walk with fingerprint dedup and the app's own "Message N of M" as the completeness proof, then artifacts, then the library write. The walk moves **onto the page**; the script and the command stay thin.

**Risks.** (1) *Copying rather than adapting* — the old script calls a god object and builds legacy `turn.ts` objects; a copy rebuilds the seam Sprint 98 closes. (2) *Stale sensors* — every UIA assertion in it is months old and must be re-grounded. (3) *A silent partial import* — worse than none, because it puts a lie in the library.

**Demo.** A long conversation imported completely, the count read matching the count the app states.

**Sequence estimate: four sprints, one hard dependency** — 101 must follow 98's `turn.ts` migration. 99 depends on 98's M3 (snapshot and errors as serializable returned data). 100 follows 99 by design, not necessity.

## Standing rules on every rung

**"Done" is a claim with a truth-condition** ([Sprint 91](60-sprint-91--retro.md)) — certify what is checkable, and say plainly what is unproven. **Three truths, and the compiler guards one** ([Sprint 92](62-sprint-92--retro.md)): structural (model the screen's affordances, not our categories), perceptual (the verify must match the tree — ground every signal in a captured tree), temporal (the lifecycle must match the turn — the first ends). **Docs move with code, never after** — the `///:` annotation is the forcing function, and a promise to reconcile "next sprint" is a debt. **Commit early**: every guard in [On Sync](../..environmentalism/06-on-sync.md#uncommitted-work-is-not-protected-by-any-of-this) protects committed history and none protects a working copy. **Covers stay current through the [TOC tool](../bookkeeping/03-on-covers--toc.ts)** — it edits one entry without reading the book and fails rather than mangles.

## Open design questions (explored, not settled)

- How `describe()` derives its command list — runtime reflection over the instance, a build step over the source, or a declaration on each method. The answer decides whether it can drift.
- Whose job is scroll-to-materialize when a precondition target is below the fold — the View before it declares a target, or the precheck itself.
- What state the app is left in when a command is cancelled mid-action, and whether `recover()` is safe there.
- Whether `.claude/cli/` travels with the identity the way `.claude/src/` does, or is a tool that stays put.
- What the completeness proof for a conversation read is when "Message N of M" is absent.
- Where imported conversations live, now that an imported conversation is plainly not the same object as a *thought*.
- Whether the peer-push clobber is fixable in the commit tool's guard, or whether two active projects sharing one org branch needs a different protocol than fail-and-reconcile.
