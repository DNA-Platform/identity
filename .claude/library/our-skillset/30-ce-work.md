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

**A red gate on a page that was red at HEAD is inherited, not the unit's — added out of Sprint 69.** Before fixing a red the unit did not cause, measure HEAD: stash, build, gate, restore. What was red there is recorded beside the unit with its numbers and left; what the unit broke is the unit's. [Sprint 69's first day](../../../library/.public/.lib/projection/75-sprint-69--the-wart-hunt.md) went to chasing a page that had never been green, and every fix bred the next — Doug: *"you can't run off. You will make a mess."* A unit is done at its own mechanism and its own regressions.

## How the how gets decided

The plan gave guardrails, not choreography. So the implementer **decides signatures, structure, and sequence at execution time, with the code open** — that judgment is the reason a plan does not pre-write it. What the implementer may not do is quietly widen the scope, skip a stated test scenario, or contradict a decision the plan recorded. A guardrail that turns out wrong is [raised, not overridden](../teamspeak/03-discussion.md).

## <a id="the-loop"></a>Before the first edit: how this branch sees a change — added out of Sprint 99

**Every branch has a fastest way from a saved file to a seen result. Find it before the first edit, and take every look through it.** It is written in the branch library; for a library on `.public` it is [How a Library Is Developed](../../../library/.public/.lib/writing-a-book/01-02-how-a-library-is-developed.md) — a page kept open, where a save shows in under a second, and one command that looks.

**The full build is the gate at the end of a unit. It is never the way to look during one.** On 2026-10-05 a session built [Sprint 99](../../../library/.public/.lib/projection/104-sprint-99--the-link-aggregator.md) by binding Doug's library about twenty times, seven to thirteen seconds each, and writing a probe for every look, while the same edits would have shown on an open page in half a second. It had kept its documents faithfully: each one said to bind. Doug: ***"When doing UI work you need rapid feedback right? If the system doesn't give that to you, the system is a failure."***

**Three signs the loop is not being used:** a script written for one look; the full build run twice inside one unit; a claim about how something looks with no photograph named. **And if the branch library does not say how the branch is developed, finding out and writing it down is the first unit of the work.**

## Unit by unit

Take units in dependency order. For each one:

1. **Read the unit** — its files, its test scenarios, what it depends on — **and write into [Where things stand](32-ce-handoff.md) that it is begun, before the first edit.** A unit is recorded at both ends, not only at its green: on 2026-10-01 Sprint 95's U9 was half-built across seven files when a compaction fell, its chapter still said *not built*, and the next session found it only by reading `git status` — a working tree is the truth, but a record that contradicts it costs a catchup to notice.
2. **Write the specification first** where the unit bears behaviour — a [test is a promise](../..teamsmanship/..team/queenie/test-architecture/.cover.md), and the scenarios were enumerated so nobody has to invent them.
3. **Implement** the smallest thing that satisfies the guardrails.
4. **Verify with evidence.** Run the command. Read the output. [Green, driven, seen](../..teamsmanship/..team/queenie/test-architecture/04-the-three-steps.md) — and no completion claim without a fresh run in the same message.
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
