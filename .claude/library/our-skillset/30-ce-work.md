# ce-work

- **author:** [Cathy](../..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

**The feature workflow, and where you are in it:**

[`/ce-brainstorm`](28-ce-brainstorm.md) → [`/ce-plan`](29-ce-plan.md) → **`/ce-work`** → [`/ce-compound`](31-ce-compound.md) ↻ · [`/ce-handoff`](32-ce-handoff.md) at any session boundary

**When the units are done and verified, run [`/ce-compound`](31-ce-compound.md).** Skipping it is what turns the loop back into a line.

---

Execute an implementation-ready plan — figuring out the **how** with the code in front of you. The third step of the [feature workflow](../..teamsmanship/19-workflows.md), adopted from [Compound Engineering][ce] at commit `6a2a0f9` and run as-is during the trial — the authoritative spec is [`ce-work`][ce-work].

**Announce at start:** "Using work to execute the plan."

## The failures — read these before starting

Two gates, both from their skill and both kept:

**A sprint chapter marked `requirements-only` fails validation.** Stop, say the guardrails are missing, and offer the exact [`/ce-plan`](29-ce-plan.md) handoff. Do not implement from requirements.

**Large work is routed back.** Cross-cutting, architectural, touching many files, or reaching into anything load-bearing — say so, and recommend [ce-brainstorm](28-ce-brainstorm.md) or [ce-plan](29-ce-plan.md) first. Then **honour the choice**: if Doug says proceed, proceed.

## How the how gets decided

The plan gave guardrails, not choreography. So the implementer **decides signatures, structure, and sequence at execution time, with the code open** — that judgment is the reason a plan does not pre-write it. What the implementer may not do is quietly widen the scope, skip a stated test scenario, or contradict a decision the plan recorded. A guardrail that turns out wrong is [raised, not overridden](../teamspeak/03-discussion.md).

## Unit by unit

Take units in dependency order. For each one:

1. **Read the unit** — its files, its test scenarios, what it depends on.
2. **Write the specification first** where the unit bears behaviour — a [test is a promise](../..teamsmanship/..team/queenie/test-architecture/.cover.md), and the scenarios were enumerated so nobody has to invent them.
3. **Implement** the smallest thing that satisfies the guardrails.
4. **Verify with evidence.** Run the command. Read the output. [Green, driven, seen](../..teamsmanship/..team/queenie/test-architecture/04-the-three-rungs.md) — and no completion claim without a fresh run in the same message.
5. **Edit the sprint chapter** — mark the unit done in [Where things stand](32-ce-handoff.md), and update the cover with [the tool](../bookkeeping/03-on-covers--toc.ts). Not only a todo list: conversation memory does not survive compaction.

## Fresh context per unit

Where units are independent, prefer giving each one a **fresh context** — their reason is that a worker carrying the whole session's history is a worker distracted by it, and ours is the same. A teammate [thinking at length](27-think-async.md) on one unit is our form of this.

Whoever executes a unit gets the unit and what it needs, not the session's history. [`/think-async`](27-think-async.md) is how a teammate takes one — and several units that do not touch each other can go at once.

## The verification contract

Before the plan is done: every test scenario has run, every requirement traced to something built, and the branch's own gates are green — the suite, the types, the driver where there is one. State the numbers. Do not summarize them as "green".

## What it produces

Working code, a checked ledger, and — if anything was learned that would save the next person time — a run of [`/ce-compound`](31-ce-compound.md). That last step is not optional decoration: **a loop whose end does not feed its beginning is ceremony.**

<!-- citations -->
[ce]: https://github.com/EveryInc/compound-engineering-plugin/tree/6a2a0f9940ab0b3577ce26226ee393390470e412 "Compound Engineering plugin, EveryInc — pinned at commit 6a2a0f9, v3.21.1"
[ce-work]: https://github.com/EveryInc/compound-engineering-plugin/blob/6a2a0f9940ab0b3577ce26226ee393390470e412/skills/ce-work/SKILL.md "ce-work — authoritative runtime spec"
