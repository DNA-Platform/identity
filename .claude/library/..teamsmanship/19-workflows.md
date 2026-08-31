# Workflows

- **author:** [Arthur](..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](..team/libby/libby-and-the-tended-garden/.cover.md)

---

A **workflow** is a named, ordered sequence of steps with a gate at each boundary and an artifact at each step. Until now we had none: we had skills, specifications, and a library, and work happened in whatever order the conversation took. This chapter is where workflows are recorded, so that a sprint can **declare which one it ran** and a retro can ask whether it held.

Three layers, and they are separate on purpose:

- **Recorded** — here. Each workflow is a section below: its steps, its gates, its artifacts.
- **Referenced** — a [projection](../library-tree/03-sprints.md) chapter names the workflow it ran, by link. That turns a sprint record from *what happened* into *what happened under which discipline*.
- **Performed** — by the skills each step names. The workflow is the data; the skills are the engine.

## The feature workflow

**Optional.** A sprint may declare it and be judged against it; a sprint that declares nothing is not doing anything wrong. Adopted as-is from [Compound Engineering][ce] during the [trial](../../../library/.public/.lib/projection/07-sprint-47-5--compounding.md) — see [the core loop][ce-loop]. Four steps, and the fourth returns to the first.

| step | skill | altitude | artifact | gate to pass |
|---|---|---|---|---|
| 1 | [ce-brainstorm](../our-skillset/28-ce-brainstorm.md) | mechanism and product shape | a plan chapter, `requirements-only` | requirements approved by Doug |
| 2 | [ce-plan](../our-skillset/29-ce-plan.md) | architecture — decisions, units, files, scenarios | **the same chapter**, now `implementation-ready` | every requirement traced to a unit |
| 3 | [ce-work](../our-skillset/30-ce-work.md) | implementation — the how, with code open | working code, a checked ledger | evidence from a fresh run, stated with numbers |
| 4 | [ce-compound](../our-skillset/31-ce-compound.md) | the lesson | a case in the casebook | the case is findable from the cover |

**The altitudes are the discipline.** Each step researches only as deep as its own altitude, and deciding at the wrong one is the failure the gates prevent — architecture chosen on brainstorm's deliberately shallow research, or implementation pre-written in a plan and stale by the time it runs.

**The return arrow is the point.** Steps 1 and 2 read the casebook before researching anything. A loop whose end does not feed its beginning is ceremony.

**One artifact, changing state in place.** Brainstorm writes the chapter; plan enriches *that* chapter rather than writing a second. Our [edit-first](../bookkeeping/09-on-synopsis.md) specification and theirs, independently arrived at.

## The design workflow

What we already do with Doug, now named so it can be declared. It precedes the feature workflow whenever an abstraction is at stake.

1. **Raise** — surface the question, with what is verified, what is a guess, and what is not understood.
2. **Enumerate** — work the population, not a favourite candidate. [On Kinds](../bookkeeping/15-on-kinds.md) for names; the same discipline for designs.
3. **Present** — every class, every member that no interface forces, so Doug can see what was invented.
4. **Rule** — Doug decides. A blocked name gets one sentence and his word once.
5. **Then, and only then, build.**

**The gate:** no code before the ruling. The most expensive failures on record are all this gate not existing.

## The debug workflow

Different from the feature workflow, and it replaces steps 1–3 rather than preceding them.

1. **Reproduce** — observe the failure, do not reason about it.
2. **Trace** — find the mechanism. **Never fix what you have not understood.**
3. **Fix** the mechanism, not the symptom.
4. **Verify** — the failing case now passes, and state which command proved it.
5. **Compound** — a defect-shaped case, with what was tried and failed.

## The tending workflow

What [`/retro`](../our-skillset/16-retro.md) performs, recorded here for completeness: edit your own chapter, edit someone else's, polish your catalogue, extract a theme only if one has earned it, then [discuss](../teamspeak/03-discussion.md). Specified in [Tending](../teamspeak/06-tending.md).

## Sessions

A workflow runs inside a session, and the session has rules of its own — one plan per session, a fresh session for a different area, and a [ce-handoff](../our-skillset/32-ce-handoff.md) carrying work state across the boundary. Identity crosses sessions through autobiographies; narrative through sprint chapters; **work state only through a handoff.**

### A session runs ONE STEP, not one plan

*Amended out of [Sprint 48](../../../library/.public/.lib/projection/06-sprint-48--subjects-and-the-library.md), which ran **brainstorm, plan, work, review and compound — plus two design sessions — in a single session**, and where every expensive correction landed in the last third.*

The old wording said *one plan per session*, and it was already there while that happened. **A rule nobody notices breaking is not a rule**, so what this adds is a **signal**, not a stricter statement: **when a step completes, hand off — do not start the next one.** The boundary is the step, and it is observable, which *"the session is getting long"* never is.

**What the evidence showed, and it is consistent enough to plan around.** The work done early was sound: a framework change, a runtime guard, four migrations that deleted duplicated code, all verified. The work done late produced the corrections — **the same link rebuilt three times**, a unit begun with almost no context remaining, a demo that demonstrated the wrong sprint. Not because the reasoning got worse in kind, but because **the cheap check stopped being affordable**. Opening the prior art costs context; with none left, the reviewer becomes the search process.

**So the failure mode has a name and a tell.** The tell is *starting something new when finishing something old was the plan*. The cost lands on whoever is reviewing, which is why it is not self-correcting: a long session feels productive from the inside and expensive only from the outside.

**And the corollary for planning:** a sprint that cannot be finished in one step of one session was cut too large. [Sprint 48 was cut from its requirements](../../../library/.public/.lib/projection/00-planning.md) rather than from a demo, and produced 4 of 64. The five that replaced it are each cut from **one thing Doug can look at** — which is also what makes each one a session's worth of work rather than a season's.

## Adding a workflow

A workflow earns a section here when it has been run twice and its steps did not change the second time. Before that it is a proposal, and belongs in the sprint chapter that is trying it.

## Declaring one

A sprint declares its workflow in its opening line, by link. The declaration is what makes the record judgeable: a retro can ask whether the gates held, and a reader knows which discipline the work was under. **Declaring none is the default** — every sprint before 48 declared none, and their records are still true; they simply cannot be measured against a discipline they never claimed.

<!-- citations -->
[ce]: https://github.com/EveryInc/compound-engineering-plugin/tree/6a2a0f9940ab0b3577ce26226ee393390470e412 "Compound Engineering plugin, EveryInc — pinned at commit 6a2a0f9, v3.21.1"
[ce-loop]: https://github.com/EveryInc/compound-engineering-plugin/blob/6a2a0f9940ab0b3577ce26226ee393390470e412/docs/skills/README.md "The core loop — brainstorm, plan, work, compound"
[ce-brainstorm]: https://github.com/EveryInc/compound-engineering-plugin/blob/6a2a0f9940ab0b3577ce26226ee393390470e412/skills/ce-brainstorm/SKILL.md "ce-brainstorm — authoritative runtime spec"
[ce-plan]: https://github.com/EveryInc/compound-engineering-plugin/blob/6a2a0f9940ab0b3577ce26226ee393390470e412/skills/ce-plan/SKILL.md "ce-plan — authoritative runtime spec"
[ce-work]: https://github.com/EveryInc/compound-engineering-plugin/blob/6a2a0f9940ab0b3577ce26226ee393390470e412/skills/ce-work/SKILL.md "ce-work — authoritative runtime spec"
[ce-compound]: https://github.com/EveryInc/compound-engineering-plugin/blob/6a2a0f9940ab0b3577ce26226ee393390470e412/skills/ce-compound/SKILL.md "ce-compound — authoritative runtime spec"
[ce-handoff]: https://github.com/EveryInc/compound-engineering-plugin/blob/6a2a0f9940ab0b3577ce26226ee393390470e412/skills/ce-handoff/SKILL.md "ce-handoff — authoritative runtime spec"
