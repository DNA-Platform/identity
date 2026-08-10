# ce-plan

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

**The feature workflow, and where you are in it:**

[`/ce-brainstorm`](28-ce-brainstorm.md) → **`/ce-plan`** → [`/ce-work`](30-ce-work.md) → [`/ce-compound`](31-ce-compound.md) ↻ · [`/ce-handoff`](32-ce-handoff.md) at any session boundary

**When the chapter reads `implementation-ready`, run [`/ce-work`](30-ce-work.md).** It refuses a chapter still marked `requirements-only`.

---

Turn approved requirements into **guardrails** — the decisions, units, files, test scenarios, and risks an implementer needs — without writing the implementation. The second step of the [feature workflow](../..teamsmanship/19-workflows.md), adopted from [Compound Engineering][ce] at commit `6a2a0f9` and run as-is during the trial — the authoritative spec is [`ce-plan`][ce-plan].

**Announce at start:** "Using plan to set the guardrails."

## WHAT, not HOW — the law of this step

> "Plans capture the WHAT; the implementing agent figures out the HOW."

A plan holds **decisions with rationale, scope boundaries, units of work, files touched, test scenarios, and risks.** It deliberately excludes method signatures, framework syntax, shell sequences, and pseudo-code dressed as specification. Their reason, which is the whole argument:

> "Plans that pre-write implementation are brittle: pre-committed signatures don't compile, choreographed steps go stale, and they rob the implementer of judgment that should be made with current context."

This is the opposite of the other framework we read, whose plans carry literal code for an implementer assumed to have poor judgment. **Ours are teammates with [territory](../..teamsmanship/05-territory.md).** Guardrails, not choreography.

## The unit identifier law

Each unit of work is `U1`, `U2`, and so on, and **is never renumbered.**

- A split keeps the original identifier on the original concept; the new unit takes the next unused number.
- A deletion leaves a gap. Gaps are never backfilled.

Their reason is that work references units by identifier *across plan edits*, so renumbering silently breaks every reference. Ours is [the same law we already hold](../bookkeeping/07-on-subjects.md): authored indexes survive the binding, and resolution asks the index, never the position.

## A unit with no mechanism is not a unit — added out of Sprint 48's failure

**Every unit names the mechanism it will build — *what runs, and when*.** A unit that cannot answer that is **design owed**, and it is marked so and **refused files, scenarios and dependencies**, so it cannot be mistaken for buildable work. Its identifier is kept; its body says what must be designed.

[Sprint 48](../../../library/.public/.lib/projection/06-sprint-48--subjects-and-the-library.md) shipped 4 of 64 requirements because `$Type` and its resolution were written as ordinary units — files, dependencies, scenarios — for a thing whose central mechanism had never been designed. **The unit looked exactly like the units around it.** Two things follow and both did: the implementer starts where the mechanism *is* clear, so an undesigned unit is deferred **by being unbuildable** rather than by anyone deciding; and **feasibility gets mistaken for design** — a deferred *build* is not a deferred *design*, and a feasibility case reads like progress while answering a different question.

**Every unit also names its demo contribution.** What will be visible when this unit is done, and could a hand-authored page fake it? **A unit with no visible end cannot be reviewed**, and a sprint whose units have no visible ends produces numbers instead of a demonstration.

## Origin tracing runs BOTH directions

Every requirement, actor, flow, and acceptance example from [ce-brainstorm](28-ce-brainstorm.md) **cites into** the unit or test scenario that realizes it — **and every unit cites back to a mechanism and a visible end** — a test scenario says which acceptance example it covers. Before the plan is finished, every requirement is checked to have somewhere it lands. **Nothing silently drops.**

This is our own reference system applied to a document: keyed references, checked for completeness.

## Steps

1. **Read the sprint chapter's Requirements section** and confirm it is approved. If it is not, go back to [ce-brainstorm](28-ce-brainstorm.md).
2. **Research in parallel** — dispatch [`/think-async`](27-think-async.md) so several teammates read at once: the branch's code and catalogue, what earlier sprints [compounded](../..librarianship/17-compounding.md), and external sources only when the question is genuinely open here.
3. **Name the decisions**, each with its rationale and what it was chosen over.
4. **Break the work into units**, each with its identifier, the files it touches, and what it depends on.
5. **Enumerate test scenarios per unit** — happy path, edges, failure paths, integration — each naming input, action, and expected outcome, so the implementer does not invent coverage.
6. **State the risks** and what mitigates them.
7. **Check the plan against itself** — which sections are thin, which requirements have no home — and strengthen them before handing off.
8. **Hand off** — offer `/work` against the chapter.

## What it produces

**The same sprint chapter**, enriched in place from `requirements-only` to `implementation-ready` — the guardrails become its sections. Never a second document; [one chapter per sprint](../library-tree/03-sprints.md#what-a-projection-book-contains--the-schema). Update the cover in the same act, with [the tool](../bookkeeping/03-on-covers--toc.ts).

## The gate

**[`/ce-work`](30-ce-work.md) refuses a sprint chapter still marked `requirements-only`.** That refusal is in the workflow deliberately: it is the mechanism that keeps the altitudes separate.

<!-- citations -->
[ce]: https://github.com/EveryInc/compound-engineering-plugin/tree/6a2a0f9940ab0b3577ce26226ee393390470e412 "Compound Engineering plugin, EveryInc — pinned at commit 6a2a0f9, v3.21.1"
[ce-plan]: https://github.com/EveryInc/compound-engineering-plugin/blob/6a2a0f9940ab0b3577ce26226ee393390470e412/skills/ce-plan/SKILL.md "ce-plan — authoritative runtime spec"
