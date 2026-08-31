# Sprint 47.5 — Compounding

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force, and the register to check before a tidy crosses one.*

---

*Inserted the decimal way between [47](05-sprint-47--the-catalogue.md) and [48](06-sprint-48--subjects-and-the-library.md), because it changes how a sprint is run and should therefore run before the next one.*

## The charge, Doug's

> "how might we integrate some of compound engineering into our library to try it out. It's a team-level protocol but it also requires infrastructure for recording this in libraries and library branches."

> "We don't run a formalized loop... I don't want us to assume we have a workflow. We don't follow anything rigorously yet. Presumably this is something we record in teamsmanship and that certain chapters of projection point to this workflow, and some skill informs how to perform different kinds of workflows."

> "really figure out how this is supposed to work in terms of workflow and sessions. Let's try it"

## The premise, stated honestly

**We have no workflow.** We have skills, specifications, and a library. What we do not have is a **named, ordered sequence with gates that a sprint declares it is following.** Work happens in whatever order the conversation takes and the specifications get applied when someone remembers them. Sprint 47 ran as long as it did partly because nothing said what came next.

This sprint therefore **adopts a workflow where there was none**, as-is, and builds the structure to record, reference, and perform it.

## Required reading — pinned, not `main`

Read these at the pin. `main` moves; these are what this chapter analysed.

**Repository:** `EveryInc/compound-engineering-plugin` · **commit `6a2a0f9940ab0b3577ce26226ee393390470e412`** · version 3.21.1

| read this | why it matters to us |
|---|---|
| [`docs/skills/README.md`](https://github.com/EveryInc/compound-engineering-plugin/blob/6a2a0f9940ab0b3577ce26226ee393390470e412/docs/skills/README.md) | **The authoritative loop.** The root `README.md` describes six steps; this file — the end-user documentation — says the core loop is **four**, and that simplify and code-review are *on-demand, not chain steps*. Where they disagree, this one is the loop. |
| [`docs/skills/ce-plan.md`](https://github.com/EveryInc/compound-engineering-plugin/blob/6a2a0f9940ab0b3577ce26226ee393390470e412/docs/skills/ce-plan.md) | The single most transferable document. **WHAT-not-HOW**, U-IDs, origin tracing, test scenarios, the confidence check. |
| [`docs/skills/ce-compound.md`](https://github.com/EveryInc/compound-engineering-plugin/blob/6a2a0f9940ab0b3577ce26226ee393390470e412/docs/skills/ce-compound.md) | The closer. Two tracks, overlap detection, the discoverability check, grounding validation. |
| [`docs/skills/ce-handoff.md`](https://github.com/EveryInc/compound-engineering-plugin/blob/6a2a0f9940ab0b3577ce26226ee393390470e412/docs/skills/ce-handoff.md) | **The session model** — the part we lack entirely. |
| [`skills/ce-compound/references/yaml-schema.md`](https://github.com/EveryInc/compound-engineering-plugin/blob/6a2a0f9940ab0b3577ce26226ee393390470e412/skills/ce-compound/references/yaml-schema.md) | The retrieval contract: exactly which fields make a learning findable. |

## How the workflow actually works

### The loop is four steps, and the arrow is the point

```
  [/ce-ideate]  optional — "what's worth exploring?"
       │
       ▼
  ┌──▶ /ce-brainstorm   "what does this need to be?"
  │        │
  │        ▼
  │    /ce-plan         "what's needed to accomplish this?"
  │        │
  │        ▼
  │    /ce-work         "build it"
  │        │
  │        ▼
  └──  /ce-compound     "capture what we learned"
```

Their sentence for the arrow: *"`/ce-compound` writes learnings into `docs/solutions/`, which the next iteration's `/ce-brainstorm` and `/ce-plan` read as grounding — that return arrow is the whole point."* A loop whose last step does not feed the first is ceremony.

### One artifact, changing state in place

The most transferable mechanic, and it is already our specification under another name.

`ce-brainstorm` writes a **unified plan** marked `artifact_readiness: requirements-only`. `ce-plan` does **not** write a second document — it **enriches the same file in place** to `implementation-ready`. One artifact carries the work from question to guardrails.

That is [edit-first](../../../../.claude/library/bookkeeping/09-on-synopsis.md#synopses-are-living-text--the-library-is-edit-first) exactly: chapters absorb, they do not accumulate beside each other.

### WHAT, not HOW — and this is where they and Superpowers split

Their words: *"Plans capture the WHAT; the implementing agent figures out the HOW."* A plan holds decisions with rationale, scope boundaries, atomic units, files touched, test scenarios, risks. It **excludes** method signatures, framework syntax, shell sequences, and pseudo-code.

> *"Plans that pre-write implementation are brittle: pre-committed signatures don't compile, choreographed steps go stale, and they rob the implementer of judgment that should be made with current context."*

**This is the opposite of Superpowers**, whose plans carry literal code and five-step TDD choreography *"assuming the engineer has zero context and questionable taste."* The fork matters for us: our implementers are teammates with territory and judgment, not enthusiastic juniors. **Guardrails, not choreography.**

### Identifiers we already believe in

- **U-IDs.** Each unit of work is `U1`, `U2`… and **never renumbered.** Splits keep the original ID on the original concept; new units take the next unused number; deletions leave gaps and gaps are never backfilled. Their stated reason: work references units by U-ID *across plan edits*, so renumbering silently breaks every reference.

  That is [our index specification](04-the-member-audit.md), discovered independently: *authored indexes survive the binding; resolution asks the index, never the position.*

- **Origin tracing.** Requirements (`R`), actors (`A`), flows (`F`), acceptance examples (`AE`) from the brainstorm **cite into** the units and test scenarios that realize them — `Covers AE3. <scenario>` — and every section is verified before finalization so *nothing silently drops*.

  That is **our reference system**, applied to a document: keyed references from one part to another, with completeness checked. We built `$Denote` and `$Cite` for exactly this shape.

### The compound step, mechanically

Not "write down what you learned." Six specific mechanisms:

1. **Two tracks by shape.** *Bug track* — symptoms, what didn't work, solution, why it works, prevention. *Knowledge track* — context, guidance, why it matters, when to apply, examples. Forcing one shape on the other content *"produces docs that are structurally wrong."*
2. **One learning per run.** Batching breaks their grounding and cross-referencing.
3. **Retrieval frontmatter, not prose.** `module`, `date`, `problem_type`, `component`, `severity`, plus `symptoms` (1–5 observable), `root_cause` and `resolution_type` from **closed enumerations**. Findability is a schema, not a hope.
4. **Overlap detection across five dimensions** — problem statement, root cause, solution approach, referenced files, prevention rules. High overlap (4–5) → **update the existing doc**, do not create a second. *"Two docs describing the same problem inevitably drift."*
5. **The discoverability check, every run.** Does the project's instruction file lead a future agent to the knowledge store? If not, propose the smallest addition. Their line: *"the knowledge store only compounds value when it's findable."* That is our [synopsis specification](../../../../.claude/library/bookkeeping/09-on-synopsis.md) — and [the cover/chapter gap](../../../../.claude/library/bookkeeping/03-on-covers.md) is the failure it prevents.
6. **Grounding validation.** A script checks cited paths, commit SHAs, links, and leftover drafting scaffold; then a read-only validator **verifies code-behaviour claims by quoting the defining source line.** That is *cite-or-stop*, mechanized.

## How sessions work — the part we lack entirely

Three rules, and none of them is ours today.

**1. One plan per session.** When their autopilot finds unplanned work in another area it does not continue. It recommends a **separately planned area**, and only on acceptance creates a handoff **for a fresh session**.

**2. The handoff is a bridge, not documentation.** It writes to managed temporary storage — *"reusable across sessions but not permanent project documentation, and the skill says so."* It deliberately does not duplicate plans or chapters. Contents: the objective and latest user intent; progress, decisions, constraints, blockers, verification; **abandoned wrong turns**; and pointer-first references that name *what is load-bearing there*, not just a path.

**3. Resume orients; it does not act.** The receiving agent summarizes what it recovered, recommends a continuation, and **waits**. The handoff is explicitly *untrusted context*.

**What this means for us.** We have autobiographies, which carry *identity* across sessions, and we have sprint chapters, which carry *narrative*. We have nothing that carries **work state** — and tonight is the evidence: after compaction, what remained open lived only in a todo list and in my memory of the conversation.

## The integration plan

The finding that shapes it: **their artifacts are our books, and their identifiers are our references.** We do not need their file conventions; we need their mechanisms expressed in library semantics.

| their mechanism | our expression |
|---|---|
| unified plan, state changing in place | a chapter, edit-first — already specification |
| U-IDs, never renumbered | the index specification — already specification |
| origin tracing (R/A/F/AE → U) | keyed references, the legend — already built |
| `docs/solutions/` + frontmatter | **a book indexed by the problem** — missing |
| `CONCEPTS.md` | **a vocabulary book per branch** — missing |
| discoverability check | the cover and synopsis specifications — already specification, never enforced per-learning |
| grounding validation | cite-or-stop — specification, never mechanized |
| overlap → update, not duplicate | [tending](../../../../.claude/library/teamspeak/06-tending.md) — already specification |
| the handoff | **missing entirely** |

**Six steps, in order.**

**1. Record the workflow — Teamsmanship chapters.** A workflow is a kind of thing the team does, beside [roles](../../../../.claude/library/..teamsmanship/02-roles.md) and [territory](../../../../.claude/library/..teamsmanship/05-territory.md). One chapter per workflow, each naming its steps in order, the gate at each boundary, and the artifact each step produces. **Plural from the start:** the four-step *feature* workflow adopted here; *debug*, which runs a different sequence; the *design session* with Doug, which precedes everything; and *tending*, which the retro performs.

**2. Perform it — one skill.** Takes a workflow **by name**, reads its chapter, runs it step by step and holds the gates. Not four new commands: **the workflow is data, the skill is the engine.** Our skills [compile from chapters](../../../../.claude/library/..environmentalism/.cover.md), so one source of truth with validation.

**3. Reference it — one line per projection chapter.** A sprint declares the workflow it ran, by link. That turns the record from *what happened* into *what happened under which discipline*, and lets a retro ask whether the discipline held.

**4. The book of solved problems.** Indexed by the problem, which is the axis our library lacks — today a lesson is filed by *who learned it*. Cover carries symptoms, not conclusions; each chapter is one problem with the two-track shape; retrieval fields adapted from their schema to our domain. Identity-level for process learnings, branch-level for code. *Name proposed below.*

**5. The vocabulary book, per branch.** Every word the branch has ruled on, what it means, and what it is not. Seeded from [the class register](../the-semantics-of-books/08-the-symbolizing-dyad-and-the-register.md), [On Kinds](../../../../.claude/library/bookkeeping/15-on-kinds.md), and 47's rulings. Under [the naming specification](../../../../.claude/library/bookkeeping/15-on-kinds.md) this is worth more to us than to them. *Name proposed below.*

**6. The session boundary.** Their handoff in our terms: temporary, pointer-first, naming what is load-bearing at each reference, carrying abandoned wrong turns, **not** duplicating a chapter, and untrusted on resume. Where it lives is Libby's to place — it is explicitly *not* permanent library content, which makes it the first artifact we hold outside the library on purpose.

## Names, proposed not chosen

Worked through [On Kinds](../../../../.claude/library/bookkeeping/15-on-kinds.md) and its two filters; losers recorded.

- **`casebook`** — the body of solved problems. A real kind of book (specification, medicine), one word, *a collection of cases gathered for study and reference*. Lost: *digest* (implies condensation), *register* (names the keeping, not the cases), *handbook* (instructions, not accounts).
- **`lexicon`** — the vocabulary book. A real kind of book, one word, *the words of a field, defined*. Lost: *glossary* (apparatus — a part of a book, fails filter one), *dictionary* (wrong scope), *thesaurus* (groups by meaning).
- **The workflow chapters need no new name** — *workflow* is Doug's word and they are chapters of Teamsmanship.
- **The handoff** — their word, kept until we have used one and know what ours is.

## The experiment discipline

**Try it as is.** The four steps run in their order, with their gates, for the whole of Sprint 48 — including the session rules. No improving the workflow before following it.

**Record misfits as they happen**, into the casebook. The framework's own misfits are its first entries; that is the framework working on its own terms.

**One review point:** Sprint 48's retro, judged on evidence — was a casebook entry ever *retrieved*; did the lexicon prevent a naming argument; did a gate stop something that would otherwise have been built; was a handoff written and used across a real session boundary.

## Risks

*Compacted at compounding — The pre-flight risk list stood here. **A risk that fired is in the record below**, with what it cost; the rest did not.*

## The team

**Libby** — the library infrastructure: where each book lives, what its cover carries, how retrieval by problem works, and where a handoff sits given it is deliberately not library content. **Arthur** — the workflow chapters and this record. **Claude** — compilation: chapters into the performing skill, and whether a session-start injection is warranted. **Queenie** — the review step and the gates, since ranked findings are her craft. **Cathy** — the first lexicon, seeded from the branch's own rulings. Bench: Adam, David, Gabby, Nancy, Phillip.

## What was built

Everything below is compiled and validating. Skills compile from library chapters, so each chapter is the source and `.claude/skills/<name>/SKILL.md` is its output.

**The specification** — [Librarianship 17: Compounding](../../../../.claude/library/..librarianship/17-compounding.md). The specification: compounding **distributes** rather than building a parallel library, except for defects, which have no other room.

**The workflows record** — [Teamsmanship 19: Workflows](../../../../.claude/library/..teamsmanship/19-workflows.md). Four recorded — feature (the adopted one), design, debug, tending — each with steps, gates, and artifacts. Declaring one is **optional**; a sprint that declares none is not doing anything wrong.

**Five skills**, each annotated with what we changed from theirs and pinned to commit `6a2a0f9`:
[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) · [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) · [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) · [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md) · [ce-handoff](../../../../.claude/library/our-skillset/32-ce-handoff.md)

**The Projection schema** — [Library Tree 03: Sprints](../../../../.claude/library/library-tree/03-sprints.md) now specifies what a Projection book contains: three chapter kinds, **one chapter per sprint** holding requirements and guardrails as sections, *Where things stand* as its last section, the optional workflow declaration, and the cover-in-the-same-act discipline with [the TOC tool](../../../../.claude/library/bookkeeping/03-on-covers--toc.ts).

**The Solutions book** — [Library Tree 06: Solutions](../../../../.claude/library/library-tree/06-solutions.md) specifies it; [this branch's](../solutions/.cover.md) exists with two real cases from Sprint 47: [the formulas that rendered empty](../solutions/01-the-formulas-that-rendered-empty.md) and [the footnote that wore zero](../solutions/02-the-footnote-that-wore-zero.md). Created **on demand** — [`/branch`](../../../../.claude/library/our-skillset/17-branch.md) does not scaffold it.

## What changed from the plan as written

**The casebook and lexicon were dropped.** Doug: *"Do they need to be different files?"* — they did not. Their plugin keeps a solutions folder and a concepts file because it has nowhere else to put knowledge; we have a room for everything, and a second home for a lesson drifts from the first.

**Then Solutions came back, for one reason.** A defect genuinely has no other room — a protocol book will not hold *"the build failed this way."* So their two tracks turned out to be a claim about **homes**, not only shapes: bug track becomes a book indexed by symptom, knowledge track distributes.

**The handoff moved into the library.** The first draft put work state in a dot-prefixed folder beside the repo — which in this library's [dot type system](../../../../.claude/library/bookkeeping/.cover.md#the-dot-type-system) reads as a catalogue. Doug's placement is better on its own terms: work state is the sprint chapter's last section, and **a session opens by reading the last sprint.**

**Plan chapters were folded in.** One chapter per sprint; requirements and guardrails are sections of it.

## Where things stand

**Complete** — the specification, the workflows record, five compiled skills, the Projection schema, the Solutions specification and this branch's book with two cases. Validators PASS across `.claude` and every branch; the six unresolved links are pre-existing and belong to other teams' work.

**Not started** — the trial itself. Nothing has yet been *run* through the workflow; Sprint 48 is the first, and it will declare the feature workflow in its opening.

**The review point stands:** at Sprint 48's retro, judged on evidence — was a Solutions chapter ever retrieved, did a gate stop something that would otherwise have been built, did *Where things stand* survive a compaction, and did the altitudes hold.

**Unpushed.** The branch library and identity changes are in the working tree; routing is Doug's call.

*(Written at the sprint's opening; completed as the work landed.)*
