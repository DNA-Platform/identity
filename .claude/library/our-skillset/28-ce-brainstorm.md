# ce-brainstorm

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

**The feature workflow, and where you are in it:**

**`/ce-brainstorm`** → [`/ce-plan`](29-ce-plan.md) → [`/ce-work`](30-ce-work.md) → [`/ce-compound`](31-ce-compound.md) ↻ · [`/ce-handoff`](32-ce-handoff.md) at any session boundary

**When the requirements are approved, run [`/ce-plan`](29-ce-plan.md).** Nothing is built before that — that is [the gate](#the-gate).

---

Turn an idea into **requirements** — what this needs to *be* — before anyone decides how to build it. The first step of the [feature workflow](../..teamsmanship/19-workflows.md), adopted from [Compound Engineering][ce] at commit `6a2a0f9` and run as-is during the trial — the authoritative spec is [`ce-brainstorm`][ce-brainstorm].

**Announce at start:** "Using brainstorm to work out what this needs to be."

## The validatable law — added out of Sprint 48's failure

**A requirement that cannot be seen satisfied is not a requirement.** Every requirement names **what would be observed** if it held — on a screen, or in a test that reads as a promise. A brainstorm is not finished when the model is agreed; it is finished when **what success looks like is agreed**.

So the demo is designed **here, beside the requirements**, never after them. [Sprint 48](../../../library/.public/.lib/projection/06-sprint-48--subjects-and-the-library.md) produced 34 requirements about what the model *is* and none about what seeing it would look like — and at review there was nothing to sign off, only numbers, which say a suite passed and never that the sprint happened.

**The test for a reviewable end:** *could a hand-authored page fake it?* A catalogue can be faked with prose, a card can be faked, a rejection can be faked with a hardcoded string. **Find the thing that cannot be**, and that is the sprint's end.

**And requirements are specified tightly or not written.** *"Requirements should be very well specified or you don't know that you have enough information to specify them"* (Doug). Looseness is a **signal that the design behind it is missing**, and writing it loosely hides that. The check: **could someone else tell whether it is satisfied, without asking me?**

**Brainstorms carry pseudocode and implementation notes** (Doug, 2026-08-06) — this **overrides the adopted altitude rule** above. Their reason for banning specifics was that architecture chosen on shallow research is brittle; ours ran the other way, and a unit reached the plan with no mechanism at all. **Sketching the mechanism is what exposes its absence.**

## The gate

**Do not write code, scaffold, or invoke an implementation skill until requirements are approved.** This applies regardless of how simple the work looks — simple work is where unexamined assumptions cost the most. The requirements may be three sentences; they must still be presented and accepted.

## The altitude — the rule that makes this step work

Brainstorm speaks at the level of **mechanism and product shape**, never architecture. Their words, kept because they are exact:

> "Approach descriptions name mechanism-level distinctions ('pause as a rule property' vs 'pause as an event filter' vs 'pause as a separate entity') and product-relevant trade-offs… They do NOT name implementation specifics — column names, table names, file paths, service classes, JSON shapes, exact method names. Those are [the plan]'s job. Bringing architecture forward at brainstorm time forces the user to make architectural decisions on [brainstorm]'s intentionally-shallow research."

The research at this step is **deliberately shallow**. Deciding architecture on shallow research is the failure the altitude rule prevents.

## Steps

1. **Read the room.** Recent commits, the branch's [projection](../library-tree/03-sprints.md) book, the branch's own catalogue. Cheap orientation, not deep study.
2. **Consult what we already know.** Read the branch library and the main library for what a previous sprint [compounded](../..librarianship/17-compounding.md) here. A problem solved before does not get re-solved.
3. **Ask one question at a time.** Purpose, constraints, success criteria, what is out of scope. Never a battery of questions in one message.
4. **Offer two or three approaches** at mechanism altitude, with trade-offs and a recommendation.
5. **Present the requirements in sections**, each short enough to read, and take approval per section.
6. **Write the requirements into the sprint chapter** as its Requirements section, marked `requirements-only`. [One chapter per sprint](../library-tree/03-sprints.md#what-a-projection-book-contains--the-schema) — never a second file. Update the cover in the same act, with [the tool](../bookkeeping/03-on-covers--toc.ts).
7. **Hand off** — offer `/plan` against that chapter.

## What it produces

A **Requirements section in the sprint chapter** of the branch's [Projection](../library-tree/03-sprints.md) book, carrying the requirements, the actors, the key flows, and acceptance examples — each with a stable identifier (`R1`, `A1`, `F1`, `AE1`) so [ce-plan](29-ce-plan.md) can cite them and nothing silently drops.

The chapter is marked `requirements-only`. **[Plan](29-ce-plan.md) enriches this same chapter in place** — never a second document. That is the library's [edit-first](../bookkeeping/09-on-synopsis.md) law, and it is theirs too.

## When to skip it

Genuinely one-step work. A bug with a known root cause — that is the debug workflow, not this one. Anything where the outcome is already decided and only the how remains — go to [`/ce-plan`](29-ce-plan.md).

<!-- citations -->
[ce]: https://github.com/EveryInc/compound-engineering-plugin/tree/6a2a0f9940ab0b3577ce26226ee393390470e412 "Compound Engineering plugin, EveryInc — pinned at commit 6a2a0f9, v3.21.1"
[ce-brainstorm]: https://github.com/EveryInc/compound-engineering-plugin/blob/6a2a0f9940ab0b3577ce26226ee393390470e412/skills/ce-brainstorm/SKILL.md "ce-brainstorm — authoritative runtime spec"
