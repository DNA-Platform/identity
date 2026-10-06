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

## The prototype workflow

Named by Doug on 2026-09-28, when the team was asked to make a reference manual into an application and reached for requirements before it had seen anything: *"this is a new workflow where you prototype as a team, discuss, get it to a form where you can figure out what to build, and then move it to .public. Remember to think in the semantics of the thing. Be creative… Invest in design to see what words semantically, interactively, visually before committing to it. And you have to make fundamental changes too."* It runs where an **experience** is at stake, before the feature workflow's brainstorm can say what the thing needs to be.

1. **Sketch** — in the cheapest medium that can be looked at: HTML written to be thrown away, photographed at a real size, and looked at before it is described. *"Sketch what you want in HTML that you can throw away to see what you want as your design medium."*
2. **Discuss** — in the room, every voice by territory: the **words**, what each part is in the semantics of the thing rather than in the medium it resembles; the **interaction**, one sentence per move; the **visual**, what stays and what the sketch adds. A sketch nobody discussed is a picture.
3. **Iterate** — the discussion's conclusions drawn into the next sketch, photographed and looked at again, until the form is one the team can build from and say what it will cost.
4. **Then the feature workflow** — the requirements written to the form reached, the fundamental changes to the framework among them and not routed around, and the plan and the work moving it into `.public`.

**The sketch is kept.** *"The throwaway sketch doesn't literally need to be thrown away. Maybe Libby wants to put it in her Library somewhere. But it is the design."* It stands beside the sprint chapter it belongs to, with its photograph, and where the thing sketched has a chapter of its own the photograph is that chapter's appendix. The first run is [Sprint 93](../../../library/.public/.lib/projection/98-sprint-93--the-explorer.md); the second is [Sprint 98](../../../library/.public/.lib/projection/103-sprint-98--dougs-design.md), where the sketches stand numbered in the design book of the library they design.

**The gate:** no requirements before a sketch has been discussed. The failure it exists for is the one it was named on: a brainstorm that maps parts to a medium's names — tree, tabs, outline — and asks for approval of the mapping, where the thing's own semantics had a word for each part and nobody had looked.

### What the second run added — out of Sprint 98

*The workflow's second run was the design of a whole library, over two days, with Doug in the room choosing. It reached a design for each of seven books, and it reached it late: every rule below was learned by breaking it first, and each is given in the words that corrected it. The record is [Sprint 98](../../../library/.public/.lib/projection/103-sprint-98--dougs-design.md).*

- **The thing looked at lives in the library.** *"Your numbered sheet is in the archive, and is not a chapter in the book. So you are not succeeding at having the canonical thing we inspect actually be in the book."* · *"If the thing you think is most productive for me to look at isn't the thing you are putting in the design book, that is something to seriously consider."* A sketch is given a number once, its own for good, and stands in one chapter of the book that records the design. A page of sketches kept beside the library is a second catalogue, and its numbers are positions that move. **And so does everything that makes it** — the sources, the questions and their answers, and any tool. At the close a script in the archive was still writing his book's chapters: *"There shouldn't be any script. If you need scripts, they should be in the appendix of the design book right?… Closure. The code to build it lives inside it and is documented along with it."* A tool stands beside the chapter that documents and prints it, in the book it builds; a chapter is written by hand in its book. *"You are going to be reading files in the library to be caught up on how to build the library. It is not a thing that has code and context that are separated."*
- **Whoever draws it looks at it first**, at every size it must work at. *"Don't just photograph it. Why don't YOU look at the photos and see if you have created something usable?"* · *"Don't show me anything that you would never choose as a design."*
- **A question about a design is asked by showing.** *"If you want to ask me a design question SHOW ME SOMETHING."* A poll in words about sketches he had not looked at was answered *"I don't know! I need to see things."* What worked, and he said so: the question written into the book with the numbered sketches it is about drawn under it, then asked by its letter, his answer written under it in his own words.
- **Options, never one guess, and marked as ideas until he chooses.** *"You really want to give options. Not to one guess."* One drawing with the one thing varied — the frame, a tone — so that only that thing differs between the options.
- **A correction is answered by correcting or deleting, never by adding.** *"Why did you extend rather than correct?"* · *"Please be subtractive. You are accruing all of these bad designs… Delete the bad ones."*
- **A value that has a source is measured from the source.** Told the blue was the one his own page suggests, a blue was chosen; it was a periwinkle. The hue was then read from the page's two colors in a minute.
- **Step 2 is not optional.** The discussion by territory was skipped for a day, and the corrections that day were each one a voice in its own territory would have made before he had to: the words, by the librarian; the moves, by whoever owns the visible layer; the look, argued from what the thing is.
- **Fast is part of it.** *"It was meant to be a design brainstorming session… That's not the same as me waiting half an hour between prompts."* A few sketches in minutes, looked at, beats a finished round in an hour.

### What the third run added — out of Sprint 100

*The third run was the correlation of the designs with the books — "so let's correlate them" — done with the design book open, by number, through one question per kind of book, after the books had first been built to a matching nobody had chosen. The record is [Sprint 100](../../../library/.public/.lib/projection/105-sprint-100--the-big-plan.md#where-things-stand).*

- **The HTML is the design, and it is read whole before building.** *"Don't look at the photos. Look at the html of the designs that were decided on, and then look at the photos of them."* · *"If you have been working from photos and not html, you have been trying to create something that could have been created far more accurately because we literally designed in HTML."* The sketch's values are replicated exactly; the photographs check the built page. The map from each design's regions to the library's parts is [The Domain of the Designs](../../../library/.public/.lib/writing-a-book/01-06-the-domain-of-the-designs.md).
- **The matching per book is his, by number, and never recommended.** The catalogue had been built as two bars he had never approved — *"I never approved a two-bar design."* · *"I'm not even sure why you would recommend one. That's not a standard for anything."* The question is asked with the numbered cards in front of him, one kind of book at a time, the record's reading marked as the record's; his answer written verbatim under it.
- **What no concept draws is sketched as a new numbered concept, and shown full screen.** *"You need to show me designs."* · *"I can barely see these designs."* Six were sketched in one evening from the files already there — [the protocol](../../../library/.public/.lib/writing-a-book/01-02-how-a-library-is-developed.md#sketch-first) — and a press on a card opens it full screen with its close.
- **Numbers are for speaking; nothing in the code is labelled by one.** *"The numbers are dangerous because then you have some trouble displaying similar ones together. It is a brittle design, do try to label the themes based on what they are and not what their number is."*

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
