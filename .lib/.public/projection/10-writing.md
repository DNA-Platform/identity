# Writing

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*Opened 2026-08-10 as a brainstorm, the sprint after [The Subject](09-the-subject.md) closed. **Status: `implementation-ready`** — the [Plan](#plan) was set the same day, enriching this chapter in place, after five probes answered Doug's question about where the loop comes from.*

*Originally: **`requirements-only`.** Doug set it aside from chapter zero's cut stones with one sentence — **"Before we do types, I want us to design `$Writing`"** — so [Types](00-planning.md#types--a-whole-sprint-ruled-2026-08-07--and-it-now-waits-behind-writing-2026-08-10) stands ruled and waits. Sprints are **named, not numbered**; the title is the implementer's and stands for correction.*

*Cut in two by Doug's ruling at the interview's close: **this chapter is the mechanism.** The specialization — the markdown rewritten, `$Page` replaced, all four books given specialized parts and their own aesthetics — is [the sprint after](#the-second-sprint--the-specialization), recorded here so nothing silently drops.*

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

## The charge, Doug's — 2026-08-10, verbatim

> "Before we do types, I want us to design `$Writing`. Right now, we don't have the power to specialize a word, sentence, paragraph, etc... and parse around it so that it effectively changes how the page is interpreted. I'm not sure why.
>
> How do we merge the composition block from the composition parse? Why can't we put other types of content in there? Can we do something like notice in the block that some elements are paragraphs for sections / sentences for paragraphs / words for sentences, and parse around them so that they end up being in the parsed representation and so we can inject specialized content?
>
> And then, as the demo for this, we want to rewrite the markdown implementation, itemizing it at various levels to give a targeted code block or other features that prove we can customize. Make `$Figure`, in the framework, the beginning of something at the paragraph level — though we will need to be thoughtful about a figure's copy and how to represent it."

**This is [R24](08-the-author.md#r24-every-part-is-authorable--and-it-supersedes-the-parse-only-law-doug-2026-08-07) and [R27](08-the-author.md#r27-specializing-how-book-content-looks-is-the-point-of-the-framework-doug-2026-08-07) arriving as a sprint** — *"there is no point to this framework if we can't specialize how book content looks"* — with the mechanism now named by Doug rather than sketched by the implementer.

## Rulings from the interview, verbatim

- **Mixing, and what makes it hard:** *"It has to be a mix. But then we also need the part to be in the parse right? We need to infer around the inserted form. That's the tricky part. That's the part that makes this hard and it's the part where we need elegant code to solve the problem. We also need to know that only the right kind of part is read. A lot of the parsing is post-hoc. We don't technically do it readily, but we still need to implement it correctly, so I want all of the `$Writing` components to be looked at with a careful eye for elegance, and to see if the code pushes us to consider alternate designs."* **This closes [R24b](08-the-author.md#r24-every-part-is-authorable--and-it-supersedes-the-parse-only-law-doug-2026-08-07)**, open since 2026-08-07 and explicitly reserved from the implementer.

- **The figure, answered by looking rather than by choosing:** *"What is the code in the figure? What is being interpreted as the figure? Do we want a parenthetical (or not) caption for the figure? It can be different for different types of figures. See what jumps out naturally."* A menu of three shapes was put to him and **declined** — the answer was to read the figures that had already been written.

- **The parse is not what the standard view renders:** *"Why do we even care about this? Someone has to be doing something interesting to render the parsed input. It shouldn't be used in the standard view at all."* Said while ruling out a question about part identity — **and it dissolves the question**, because the standard view renders the block, which already carries the authored part in place.

- **The loop is not accepted as a framework defect on our say-so:** *"Well, yeah but you need to figure out where the bug comes from. It's surprising to me, so look for what might be wrong in your implementation. Where is this looping coming from?"*

- **What must be seen:** *"I want to see figures. I want to see the code in the demo for the rewritten markdown, and I want to see other examples of specially crafted writing at different levels."*

- **Where, and the standing direction:** *"Both, but spruce up all the books in the library. It doesn't need to be in one place. Don't forget to add ways to view key pieces of code. Also, I don't think you should be reusing `$Page`. Consider replacing it entirely. Our books don't really have pages. Think harder. And don't reuse across books in the demo. Make it easy to customize. Also remember that each demo should have a unique aesthetics — different colors, different organizations, different functions. **Always move the whole demo app in the direction of specialization of the parts.**"*

- **Vocabulary, corrected mid-interview and owed a sweep:** *"Minting is a word we need to remove from our vocabulary. I have asked this many many times."* The word is struck from this chapter and from the room. It joins *fail* and *mint* in [the queued historical sweep](09-the-subject.md#collected-at-the-review--2026-08-10-from-dougs-answers). **Three bans, all re-issued after being written down — the sweep is not optional tidying.**

## The starting condition, verified 2026-08-10 by reading the source

*Each claim carries its state: **read** means the file was opened and the line is cited.*

- **The block already carries everything the parse throws away.** **Read** — `$Writing.text` is an `$Html<'block'>`, whose `$elements` is the *ordered, mixed* list of children: text runs arrive as `$Html$<'string'>` chemicals carrying `$value`, and an authored chemical sits in the same list, in position ([chemical.ts:903-922](../../../chemistry/package/src/abstraction/chemical.ts), [html.ts](../../package/src/utilities/html.ts)).
- **The parse reads the flattened string instead.** **Read** — [`$Section.parts()`](../../package/src/writing/Section.tsx) splits `this.copy` on `\n{2,}`; [`$Paragraph.parts()`](../../package/src/writing/Paragraph.tsx) runs a regex over `this.copy`; [`$Sentence.parts()`](../../package/src/writing/Sentence.tsx) and [`$Word.parts()`](../../package/src/writing/Word.tsx) do the same. **Nothing consults `elements`.** *That is the whole answer to "why can't we put other types of content in there" — nothing forbids it; the parse does not look.*
- **Four classes are one class, four times.** **Read** — `$Section`, `$Paragraph`, `$Sentence` and `$Word` each declare `canonical`, `ref`, `at`, `where`, `select`, `single`, `parts`, `valid`, and six of the eight are one-line delegations to `$Composible$`. Each carries a `$$X` shadow repeating nine more. **What actually differs is four things:** the part kind, the split, the numbering base, and validity.
- **The numbering base is inconsistent.** **Read** — `$Section` numbers its paragraphs from **0**; `$Paragraph`, `$Sentence` and `$Word` number from **1**. The [member audit](04-the-member-audit.md) ruled *counting starts at 1 with a special first at 0*, so this may be correct and deliberate; it is nowhere stated, and a single generic implementation must decide it.
- **`$Figure` today is a `$Sentence` whose copy is its caption**, drawing a rule ([figures.tsx](../../package/app/src/sections/book/library/the-team/figures.tsx)). The three figures that were **written and never shipped** — the loop, the card, the code listing — are in the record at `0341d6f` and are `$Paragraph` subclasses.
- **`$Page` is a styled skin over a markdown section** ([page/](../../package/app/src/sections/page/)), and it is the demo's last surface that is not a book viewing itself.

### The loop — where it comes from, answered

*Doug asked directly. This is what reading the framework found; the last step is **inferred and owed a probe**, per [the filed rule](../solutions/06-the-class-that-was-not-the-class.md) that three failed attempts mean instrument rather than theorize.*

1. **Every render runs `view()` a second time and compares.** **Read** — [`particle.ts:504-513`](../../../chemistry/package/src/abstraction/particle.ts): an effect with **no dependency array** calls `$renderView$()` again, `diff`s it against `$viewCache$`, and calls `$update$()` when they differ. So a render schedules another render **whenever `view()` does not equal itself**.
2. **`diff` is a structural reconcile, not identity** — **read**, [`reconcile.ts`](../../../chemistry/package/src/implementation/reconcile.ts): element type, key, and props compared through `equivalent()`, which handles functions by source, arrays element-wise, and elements recursively.
3. **But `equivalent()` never accepts any value that is a class instance.** **Read** — [`reconcile.ts:97-100`](../../../chemistry/package/src/implementation/reconcile.ts): `if (protoA !== Object.prototype && protoA !== null) return false`. A prop whose value is a chemical is equivalent **only when it is the same object by reference**.
4. **Therefore** — **inferred** — a `view()` that carries a freshly-constructed chemical anywhere in its props can never settle, and loops forever.

**Why this fits every filed data point, where "a subclass with props cannot render" fit none of them.** A bare `$Figure` returns one stable `<Rule />` and does not loop. A subclass overriding `drawn()` builds its output from data every call. Hoisting the array out of render did not help, because it was never the array. Removing the derived getter did not help. Suppressing the sentence parse did not help. And ordinary writing is fine because [`$Writing.view()`](../../package/src/writing/Writing.tsx) renders `$(this.text)`, which is **cached**, so it hands back the same reference both times.

**The earlier reading was wrong about the cause and right about the symptom**, and correcting it is a deliverable ([R14](#the-loop)).

---

# Requirements

*Inferred from Doug's answers, 2026-08-10. Identifiers are internal bookkeeping and never his interface. Every requirement names **what would be observed** if it held. Two are marked as the implementer's proposal rather than his ruling.*

## Actors

- **A1 — The author.** Writes a chapter: prose, and the specialized parts written into it.
- **A2 — The reader.** Reads the chapter and sees the specialized parts standing where they were written.
- **A3 — The implementer.** Asks the model what a section is made of, and is answered with everything that is there.

## The parse

- **R1. A composition's parts are read from its block's ordered elements, not from its flattened copy.** *Seen: a section holding a written `<Figure/>` answers it from `parts()`, at the position it was written.*
- **R2. Authored and found parts mix freely, and the runs between authored parts parse as they do today.** *Doug: "It has to be a mix."* *Seen: prose · figure · prose answers three parts, the figure at index 1, the prose still parsed.*
- **R3. Only the right kind of part is read at a level.** *Doug: "We also need to know that only the right kind of part is read."* **PROPOSED MECHANISM, the implementer's, evidence cited:** an element is a part at a level when it is that level's part kind **and** declares itself **not inline** — the marker [The Author](08-the-author.md#two-structural-findings-both-from-the-framework-rather-than-the-design) already needed, where a card was absorbed into the catalogue's text until it declared `inline = false`. *Seen: an `$Author` — a `$Sentence`, inline — written into a cover's prose is **never** a sentence-level part of the section; it stays inside the sentence that holds it. This is live in the shipped demo, so it is a regression as well as a promise.*
- **R4. The parse stays post-hoc and pure — a read of the block, never a stored structure.** *Doug: "A lot of the parsing is post-hoc… Someone has to be doing something interesting to render the parsed input. It shouldn't be used in the standard view at all."* **The standard view renders the block**, which is why an authored part already renders today and why part identity is not a rendering concern. *Seen: `view()` unchanged in shape; `parts()` called twice answers the same content.*
- **R5. Numbering accounts for authored parts.** *Seen: inserting a figure between paragraphs 1 and 2 re-numbers what follows; the figure carries an index of its own and is not skipped.*
- **R6. Nothing above the level changes.** A section holding a figure is still a section; a book holding it is still a book. *Seen: both suites green, with the existing promises about chapters, sections and covers unchanged.*

## The figure

*Answered by reading the three figures that were written for The Team and never shipped, per Doug's instruction to see what jumps out.*

- **R7. `$Figure` is framework, at paragraph level**, in `src/writing/`. *Doug: "Make `$Figure`, in the framework, the beginning of something at the paragraph level."*
- **R8. A figure's content is what it interprets, and it is not writing.** In all three written figures the content arrives as the figure kind's own member — a list of titles, a library card, a source string — and the figure draws it. *Seen: three figure kinds carrying three different content types, none of them prose.*
- **R9. A figure is valid because it has content, not because it has letters** — and **each kind states its own reason**, which is the `$Cover` pattern that took the suite fully green in [The Author](08-the-author.md). *This is what actually invalid all three written figures: `$Paragraph.valid()` demands a letter or number in `copy`. **The earlier record read that as a copy problem; it is a validity problem.*** *Seen: a code listing with no caption at all binds, and a figure with neither content nor caption is invalid, in its own words.*
- **R10. A figure's caption is per-kind, including whether it is parenthetical.** *Doug: "It can be different for different types of figures."* *Seen: two figure kinds in the same chapter, one whose caption reads into the chapter's prose and one whose does not — and the chapter's tagline demonstrably drawn from the prose rather than from a caption.*

## `$Writing`, reviewed

- **R11. Every `$Writing` class is read with an eye for elegance, and the alternate designs the code pushes toward are REPORTED BEFORE ANYTHING IS BUILT.** *Doug: "I want all of the `$Writing` components to be looked at with a careful eye for elegance, and to see if the code pushes us to consider alternate designs."* *Seen: a written report naming, per class, what it carries that is genuinely its own and what is repeated — presented to Doug, not acted on unilaterally.*
- **R12. The repetition already found is either resolved or defended.** Four classes repeat one shape and differ in four things. **PROPOSED, the implementer's:** one base carrying the composible surface and the mixing parse, with each level declaring only its part kind, split, numbering and validity. *Seen: the line count of the writing directory, before and after, with the four differences visible per class.*
- **R13. The numbering base is settled and written down.** *Seen: one stated rule, and the section-from-zero behaviour either preserved with its reason or changed with its migration counted.*

## The loop

- **R14. The loop is diagnosed by a probe that prints the actual comparison that fails** — not by a fifth theory. *Seen: one run's printed output naming the prop, the element or the value that `equivalent()` is invalid.*
- **R15. The mechanism is filed in [Solutions](../solutions/.cover.md), indexed by the symptom as observed, and the earlier reading is corrected in place** — *"a `$Figure` subclass that declares its own props will not render"* is the wrong law and it is currently written down in two chapters.
- **R16. A figure that draws data renders without looping.** *Seen: the loop figure, the card figure and the code listing all standing in a chapter, driven, with no page errors and no re-render warning.*

## What is seen — this sprint's visible end

*The demo is designed here, beside the requirements, per [the law written out of Sprint 48](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md). This sprint proves the mechanism on **one book**; [the next](#the-second-sprint--the-specialization) spreads it.*

- **R17. Figures stand in a chapter and are answered by the model.** *Doug: "I want to see figures."* The three written for The Team — the loop drawn from the model, a card printing its own fields, a code listing — finally ship. *Seen: three figures on the page **and** the chapter's own parts list showing them at their written positions.*
- **R18. A code part shows real source.** *Doug: "Don't forget to add ways to view key pieces of code."* *Seen: a code figure whose content is a genuine file's source rather than a pasted string.*
- **R19. The claim that cannot be faked.** A hand-authored page can fake a rendered figure, a caption, and a code listing. **It cannot fake a chapter whose parts list contains the figure at the index it was written at, with the prose re-numbered around it and the word count not swallowing the figure's content.** *Seen: the chapter beside its own reading — parts by kind, prose numbered around the insert.*

## Out of scope, named

- **The markdown rewrite, `$Page`'s replacement, and the four books' specialization** — [the second sprint](#the-second-sprint--the-specialization), by Doug's cut.
- **Types.** Ruled a sprint of its own and deliberately set behind this one. No `$Type`, no code-in-chapters.
- **[R8 of The Subject](09-the-subject.md#the-subject-reference)** — a subject pointing at a non-catalogue — still held, still waiting on types.
- **`$` as a container** ([R25](08-the-author.md#r25--becomes-a-dependency-injection-container--a-chemistry-level-feature-doug-2026-08-07)), recorded since The Author and not disturbed here.
- **The historical vocabulary sweep** — queued, and now three words rather than two. Not this sprint unless Doug says so.

## Key flows

- **F1 — An author writes a part into prose.** A `<Figure/>` is written mid-section. The block holds it in position; the runs either side parse; the section answers all of them as its parts.
- **F2 — A reader meets it.** The block renders, so the figure draws itself where it stands, with nothing announcing that it is special.
- **F3 — The model is asked.** `section.parts()` answers prose paragraphs and the figure together, in order, numbered; `words` does not swallow the figure's content.

## Acceptance examples

- **AE1.** A section written *prose · `<Figure/>` · prose* answers three parts, the figure at index 1.
- **AE2.** An `$Author` written inline in a cover's prose is not a part at any level above the sentence that holds it. *(Regression: the shipped demo depends on this.)*
- **AE3.** A code figure with no caption binds and is valid; one with neither content nor caption is invalid in its own words.
- **AE4.** A chapter's tagline derives from its prose and never from a parenthetical caption.
- **AE5.** The three figures render, driven, with no console error and no re-render warning.
- **AE6.** `parts()` called twice answers the same content.
- **AE7.** Both suites green — chemistry from 630, lib from 154 — against a **rebuilt** chemistry `dist`, per [the filed law](../solutions/05-the-suite-that-passed-against-a-stale-build.md).

## The second sprint — the specialization

*Doug, 2026-08-10, closing the interview: **the next sprint is the end of this one.** The cut is a session boundary, not a change of subject — one arc in two steps, and this chapter is not finished until the second has run. Recorded so it cannot drop, and so nobody reads the first half's green suite as the work being done.*

*It is cheap once the mechanism lands and brittle if built first.*

- **The markdown implementation rewritten, itemized at every level** — the source resolving into real parts rather than one prose blob per section, with a targeted code block. *"Rewrite the markdown implementation, itemizing it at various levels to give a targeted code block or other features that prove we can customize."*
- **`$Page` replaced, not reused.** *Doug: "Our books don't really have pages. Think harder."* The three shipped books answer the shape — a chapter or book **viewing itself** — and naming a view after paper is the same error the manifold's reader made when it invented page notation the model could not speak.
- **The code of the rewritten markdown, shown in the demo.** *"I want to see the code in the demo for the rewritten markdown."* The move The Team's appendices already make, one turn tighter: the implementation of code blocks displayed as a code block.
- **Specially crafted writing at several levels, across all four books.** *"Spruce up all the books in the library. It doesn't need to be in one place."*
- **No component reused across books.** *"Don't reuse across books in the demo. Make it easy to customize."*
- **Each demo keeps a unique aesthetic** — colours, organization, function.
- **The Team gains its chapter**, as it does every sprint.

**And the standing direction, which outlives both sprints:** *"Always move the whole demo app in the direction of specialization of the parts."*

## Owed before the plan

- **R11's report.** The `$Writing` review is presented to Doug **before** a class is changed. It is the one place this sprint could quietly become an architecture decision nobody ruled.
- **R3's kind test** and **R12's one-base proposal** are the implementer's, flagged as proposals, and both are cheap to overturn while they are still on paper.
- **The sprint's title** is the implementer's and stands for correction.

---

---

# Plan

*Set 2026-08-10, the same day as the requirements, because Doug's plan instruction was **"put it together, and if there is an error in `$Chemistry`, identify it and we will add it to this sprint, though I would imagine that our code in this package is the more likely culprit but I am not set on that. It's just a prior."*** **WHAT, not HOW.** Unit identifiers are never renumbered.

## What the probes found — 2026-08-10

*Five probes, run against a **rebuilt** chemistry `dist`, deleted from the package afterwards. Their content is here because it is the plan's foundation, and [U1](#the-framework--librarychemistrypackage)/[U2](#the-model--librarypublicpackagesrcwriting) restore them as promises rather than as probes.*

### Finding 1 — THE MECHANISM ALREADY SHIPS, and we have been discarding it

**`$Section`'s bond constructor receives THREE arguments** for prose interrupted by an authored block-level part:

```
count: 3
kinds: $Html$,  $NoProp,  $Html$
types: block,   —,        block
```

**Chemistry already does exactly what Doug described.** It groups the inline runs into blocks and hands block-level authored parts over as **their own arguments, in order**. And [`$Writing.$Writing(text: $Html<'block'>)`](../../package/src/writing/Writing.tsx) takes **one** — so the authored part **and every argument after it** are dropped on the floor.

**That is [route one's filed symptom](08-the-author.md#r26-a-figure-is-writing-that-draws-itself--partly-solved-and-what-remains-is-r27)** — *"a block-level `$Paragraph` ends the section's block early: the figure and every paragraph after it vanish"* — and it was never the framework ending anything. Proven: a section written *H · Before. · `<Plate/>` · After.* renders `"H\n\nBefore.\n\n"`, its `copy` stops at the plate, and `elements` holds four `$Html$` runs with **the plate not among them**, because the plate arrived in argument two and was never stored.

**The two grades have two paths, and both already work:**

| grade | how an authored part arrives |
|---|---|
| **block-level** (`inline = false`) | its **own bond argument**, in order, between the prose blocks |
| **inline** (`inline = true`) | inside a block's **`$elements`**, in order — verified: one block, text `"Before. m After."` |

**So "how do we merge the composition block from the composition parse" has a small answer: nothing needs merging.** The block is whole and the sequence is ordered. We read one argument and one flattened string, and threw the rest away.

### Finding 2 — the loop is `$Chemistry`'s, and it is four lines

*Doug asked directly where it comes from. The earlier filed law — "a subclass that declares its own props and overrides a method its `view()` calls will not render" — is **false**: that exact shape renders fine standalone. The real rule:*

**An inline chemical that is PASSED a prop, standing inside a block, makes its HOST re-render forever — and never renders itself.**

Reproduced with `$Chemical`, `$check` and `$Html<'block'>` and **no lib class in the file**:

| case | result |
|---|---|
| inline child **with a declared prop passed**, inside a block | **loops** — host renders 41+, **child renders 0** |
| inline child with **no declared prop**, inside a block | fine |
| the same child **with a prop, standalone** | fine |
| prop **declared but not passed**, inside a block | fine |
| **block-level** child with a prop passed, inside a block | fine |
| declared backing **with a default**, no prop passed, inside a block | fine |

**What it is not:** not the array, not reading the prop in `view()`, not the override, not the derived getter. Reading the prop is irrelevant — case two loops without it. Scalar and array behave identically.

**Where to look, stated as a lead rather than a diagnosis.** The host loops and the child never renders, so **the host's own output is unstable**. [`particle.ts:504-513`](../../../chemistry/package/src/abstraction/particle.ts) runs `view()` a second time per render with no dependency array and calls `$update$()` when `diff` disagrees; [`reconcile.ts:97-100`](../../../chemistry/package/src/implementation/reconcile.ts) never accepts any prop value that is a class instance unless it is reference-identical; and [`$apply$`](../../../chemistry/package/src/abstraction/particle.ts) writes `$`-backed fields **during** render. **Which of those it is, is U1's to determine by instrument, not by argument.**

## Decisions

**D1 — The bond takes the whole sequence; the block-only signature dies.** `$Writing` accepts the ordered arguments the framework already hands it and keeps every one. *Chosen over: reading `$elements` alone — which was the brainstorm's sketch and would have missed block-level parts entirely, because they never reach `$elements`. **The probe changed the design**, which is what a probe is for.*

**D2 — Two arrival paths, one parse.** Block-level authored parts come from the argument sequence; inline ones from a block's `$elements`. `parts()` walks the sequence in order, taking authored parts of its own grade in place and parsing the prose runs between them. *Chosen over: one path — the framework draws this line already and fighting it would mean re-implementing the grouping.*

**D3 — The kind test is grade, not class alone.** An element is a part at a level when it is that level's part kind **and** stands at that grade — the `inline` marker [The Author already needed](08-the-author.md#two-structural-findings-both-from-the-framework-rather-than-the-design). *Chosen over: `instanceof` alone — which would read the cover's `$Author` (a `$Sentence`, inline) as a section-level part and break the shipped demo. **Flagged as the implementer's proposal** per [R3](#the-parse).*

**D4 — The `$Writing` review is PRESENTED before a class changes.** [R11](#writing-reviewed) is a gate inside the sprint, not a deliverable at its end. *Chosen over: refactoring first and reporting after — which is how an architecture decision nobody ruled arrives as a fait accompli.*

**D5 — The framework defect is fixed in `$Chemistry`, and it is scoped to this sprint by Doug's word** — *"we will add it to this sprint."* *Chosen over: working around it in the lib — which would constrain what a figure can be for reasons nobody understands, and leave 630 tests standing on a defect.*

**D6 — A figure states its own validity.** Content, not letters; each kind in its own words, the `$Cover` pattern. *Chosen over: relaxing `$Paragraph.valid()` — which would let a genuinely empty paragraph through and lose a promise the suite already keeps.*

**D7 — Nothing is named that Doug has not named.** `$Figure` is his. Where a unit needs a name he has not given, **it stops and reports the population** rather than proceeding on a proxy.

## Units

### The framework — `library/chemistry/package`

- **U1 — The inline-prop loop.** *Mechanism: reproduce with the four-case probe above, **instrument to print which comparison fails** rather than reasoning about it, then fix the cause. The three candidate sites are named in Finding 2 and none is assumed. Files: `src/abstraction/particle.ts`, `src/implementation/reconcile.ts` — **whichever the instrument names**, and only that one. Depends on: nothing. Realizes: R14, R16. **Visible end:** the four-case probe, kept as a test, all four passing — and a figure that draws data standing in a chapter without a re-render warning.*
  **If the instrument shows the fault is in the lib after all, that is a finding and it is reported, not quietly re-scoped.** Doug's prior deserves that check.

### The model — `library/.public/package/src/writing/`

- **U2 — `$Writing` keeps the whole sequence.** *Mechanism: the bond accepts the ordered arguments and stores all of them; `copy` flattens the sequence; `elements` answers across it. Files: `src/writing/Writing.tsx`. Depends on: nothing — this is independent of U1 and can go first. Realizes: R1, R6. **Visible end:** a section written* H · Before. · `<Plate/>` · After. *rendering all four, where today it renders two — the exact case that produced `"H\n\nBefore.\n\n"`.*

- **U3 — The mixing parse.** *Mechanism: `parts()` walks the sequence in order — an authored part of this level's grade is taken in place, the prose runs between are parsed as today, and numbering counts across both. One implementation, parameterized by part kind, split, numbering and validity. Files: `src/writing/` — the class the review settles on. Depends on: U2, U6. Realizes: R1, R2, R3, R5. **Visible end:** `section.parts()` answering prose · figure · prose as three parts with the figure at index 1.*

- **U4 — The kind test.** *Mechanism: grade plus part kind, per D3; the `$Author` regression is the proof. Files: with U3. Depends on: U3. Realizes: R3. **Visible end:** the shipped cover still resolving its author, with the author absent from every parts list above the sentence that holds it — AE2.*

- **U5 — Numbering settled.** *Mechanism: one stated rule; the section-from-zero behaviour preserved with its reason or changed with the migration counted. Files: with U3, and the sprint chapter. Depends on: U3. Realizes: R13. **Visible end:** the rule written in one sentence, and the count of tests that moved.*

- **U6 — THE `$Writing` REVIEW — A GATE, NOT A DELIVERABLE.** *Mechanism: read every class in `src/writing/`, report per class what is genuinely its own and what is repeated, and name the alternate design the code pushes toward. **Presented to Doug before U3 changes a class.** No files are edited by this unit. Depends on: U2. Realizes: R11, R12. **Visible end:** the report itself, and Doug's ruling on it recorded in this chapter.*

- **U7 — `$Figure`, in the framework at paragraph level.** *Mechanism: a `$Paragraph` kind whose content is its own member and is not writing; validity answered by having content; the caption per-kind, parenthetical or not. Files: `src/writing/Figure.tsx`, `src/index.ts`. Depends on: U3, U6. Realizes: R7, R8, R9, R10. **Visible end:** a code listing with no caption at all binding and rendering — the case that has never worked.*

### What is seen — `library/.public/package/app/`

- **U8 — The three figures stand.** *Mechanism: the loop, the card and the code listing — written at `0341d6f`, never shipped — restored onto `$Figure` and placed in a chapter of The Team. Files: `app/src/sections/book/library/the-team/`. Depends on: U1, U7. Realizes: R16, R17. **Visible end:** three figures on the page, driven, no console error.*

- **U9 — A code part showing real source.** *Mechanism: a figure kind whose content is a genuine file's source rather than a pasted string; **how the source reaches it is a HOW, decided with the code open, and raised if it needs a build step.** Files: with U8. Depends on: U7. Realizes: R18. **Visible end:** a listing whose text cannot drift from the file it shows.*

- **U10 — The claim that cannot be faked.** *Mechanism: the chapter shown beside its own reading — parts by kind, in order, with the prose numbered around the figure and the word count not swallowing the figure's content. The Living Page's counted-off-the-model shape, at chapter grade. Files: `app/src/sections/`. Depends on: U3, U8. Realizes: R19. **Visible end:** the parts list on screen, matching what was written.*

- **U11 — The records move with the code, and the session ends with a push.** *Files: this chapter, [Solutions](../solutions/.cover.md). Depends on: everything.*

### Filed, not built

- **U12 — The two defects filed in Solutions**, indexed by symptom as observed, **and the earlier reading corrected in place** — *"a `$Figure` subclass that declares its own props will not render"* is written down in two chapters and is false. *Realizes: R15. **Visible end:** two chapters findable by the symptom a reader arrives holding.*

## Test scenarios

*Compacted at compounding — The sprint's test scenarios stood here. **They are now the suite** — a scenario that survived is a promise, and a promise is read where it runs, not where it was planned.*

## Origin tracing — both directions

| requirement | lands in |
|---|---|
| R1, R6 | U2, U3 |
| R2, R5 | U3 |
| R3 | U3, U4 |
| R4 | **held, not built** — the parse stays post-hoc and the standard view keeps rendering the block; U2/U3 must not change that |
| R7–R10 | U7 |
| R11, R12 | U6 |
| R13 | U5 |
| R14, R16 | U1 |
| R15 | U12 |
| R17 | U8 |
| R18 | U9 |
| R19 | U10 |
| A1–A3 | F1–F3, and through them the units above |
| AE1–AE7 | named in the scenarios above |

**And back:** every unit names a mechanism and a visible end. **U6 is the one unit with no files and no visible artefact but a report — marked so, because it is a gate.** No unit here is design owed; the probes removed the last one.

## Order

*Compacted at compounding — The build order stood here, and the sprint ran it.*

## Risks

*Compacted at compounding — The pre-flight risk list stood here. **A risk that fired is in the record below**, with what it cost; the rest did not.*

## Self-check

*Compacted at compounding — The plan's self-check stood here, and it passed before work started.*

## The team

**Cathy** on `$Writing`, the parse and the loop. **Arthur** on the ontology and this chapter. **Libby** on what a figure is as a piece of writing. **Queenie** on the promises and the regression that AE2 protects. **Gabby** and **Phillip** on the figures seen. Bench: Adam, David, Nancy; Claude on call.

## The session record — batch by batch

*The narrative of the work as it happened. The current state lives once, in [Where things stand](#where-things-stand).*

### U2 — the bond keeps the whole sequence. DONE.

**Built:** [`$Writing`](../../package/src/writing/Writing.tsx) takes the ordered sequence and normalizes it into the one block it already holds; [`$Section`](../../package/src/writing/Section.tsx) forwards it up. A single block arrives exactly as before, untouched. `block()` and `gathered()` join [`html.ts`](../../package/src/utilities/html.ts).

**Verified:** lib `tsc` **0**, **154/154** carried, plus **6 new promises** in `tests/writing/writing.test.tsx`. A section written *Heading · Before. · `<Plate/>` · After.* now keeps `After.`, holds the plate among its `elements`, and draws both — where it previously rendered `"Heading\n\nBefore.\n\n"` and dropped the rest.

### The audit Doug ordered — `$Document.written()`, and what it hid

*Doug, mid-work: **"What is `$Document.written` — that is not specified by me. Who is doing the writing? It is writing. It isn't written writing."** And: **"It sounds like you are breaking polymorphism. Document should be overwriteable. There should [not] be any form of self-check. That is just a terrible code smell of an incorrect implementation. Why not audit what is being accomplished here and look for hidden design flaws."***

**The name was the smallest thing wrong with it.** It was invented, never on a proxy list, and it collided with `$IndexCard.written(property)`, which means something else entirely.

**What the audit found, with numbers:**

```
built during the bond:        2      model parts: "A Chapter", "Summary"
built after rendering:        4      (delta 2)
model parts still:            2      same objects as before rendering: true
sections given as CHILDREN:   0 extra builds
```

**Every chapter in the demo declares its sections in `view()`** — twenty-odd classes — and every one of them **built its sections twice**: one set the model read, a different set the reader saw. *A thing that exists and is not the thing that renders* — the mirror of the complaint that opened this sprint.

**The mechanism.** `view()` carried two contracts, *declare* and *draw*, and the base told them apart with `this.view === $Document.prototype.view` — a class asking whether it had been overridden. That is the broken polymorphism: a subclass overriding `view()` purely to **restyle** would have had its sections harvested out of its styling.

**Doug's ruling:** *"IF sections are declared in the view, they should be the ones parsed. The whole part of last sprint was to unify declared writing types with inferred writing types."* And, confirming the parse's standing: *"writing right now has a way of understanding it in parsed form in a way that is accessible, lazy, and not used in the default implementation. That's fine."*

**Built:** the member is gone; the work folds into the bond as `declaration()`, which reads the writing once and then **sets `$view` to the base view** through the shipped [`frame`/`$view` seam](../../../chemistry/package/src/abstraction/particle.ts) — *"frame wraps the view; the framework calls frame which calls view"* (Doug's own line, in the framework's comment). The document draws the sections it holds. **The self-check is deleted with no replacement**, because a document that writes none falls through with nothing on its own.

**Verified:** two promises — a chapter that writes its sections builds them **once**, and the parts it holds are the ones drawn; a chapter handed its sections builds no others.

**And it retro-explains two filed defects.** [The parent that changed on screen](../solutions/09-the-parent-that-changed-on-screen.md) and [the constructor that captured the wrong instance](../solutions/11-the-constructor-that-captured-the-wrong-instance.md) are both *two populations of one object* wearing different clothes. The symptom was filed twice; this is the source.

### Referential sameness — raised, and ruled NOT a debt

*Four shipped sites compare cards with `===` ([`$Canonical.valid()`](../../package/src/book/Canonical.tsx), `$LibraryCard$.library` *(deleted; the demo declares its own card)*, the shelf's self-exclusion, the demo's membership filter). Raised as a possible return of the equality Sprint 47 deleted.*

**Doug: *"Those are okay. That is not an equals or same method implementation. It is not that no one can check for equality. It's just not a necessary function."*** So the distinction is recorded rather than the debt: what died was **`equals`/`same()` as members the model required**, not a caller's plain comparison. No unit, no change.

### U6 — the `$Writing` review. THE GATE.

*Presented before any class changes, per [D4](#decisions). Eleven files, 582 lines.*

**What is genuinely each class's own — and it is four things, exactly as the plan predicted:**

| level | part kind | how parts are found | numbering | validity |
|---|---|---|---|---|
| `$Section` | `$Paragraph` | split on blank lines | **from 0** | its title is not empty |
| `$Paragraph` | `$Sentence` | sentence regex | from 1 | one letter or number |
| `$Sentence` | `$Word` | word regex | from 1 | one letter or number |
| `$Word` | `$Letter` | grapheme spread | from 1 | letters, numbers, apostrophes |

**What is repeated, counted:**

1. **The composible surface, four times.** `at`, `where`, `select`, `single`, `canonical` in `$Section`, `$Paragraph`, `$Sentence`, `$Word` — **twenty methods**, every one a single-line delegation to `$Composible$`, differing only in a type parameter.
2. **The `$$X` shadow, four times.** `$$Section`, `$$Paragraph`, `$$Sentence`, `$$Word` — **~50 lines each, ~200 total**, differing only in the part type. One class written four times.
3. **`parts()`, four times**, all the same shape: find the parts, filter the valid ones, number them.
4. **`$Title`, `$Subtitle` and `$Tagline` are byte-identical** apart from the class name — ten lines each, `copy !== ''`.
5. **`Summary.tsx` is an empty file**, exported nowhere and referenced nowhere. Dead.

**The alternate design the code pushes toward:** one composition base carrying the composible surface, the shadow, and the walk — each level declaring only its four differences. **And the reason it matters to this sprint specifically: the mixing parse otherwise has to be written four times, and the fourth will drift.** That is the same failure the table of contents was built to prevent one level up.

**Where the base does not fit, stated rather than hidden.** `$Section` is not a peer of the other three — it carries title, heading, subtitle, tagline and a document. `$Letter` is a leaf with no parts at all. And nine shipped classes ride on these (`$Row`, `$Footer` on `$Section`; `$Legend` on `$Paragraph`; `$Author`, `$Subject`, `$Canonical`, `$Footnote`, `$Link`, `$Highlight`, `$Bookmark` on `$Sentence`), so the base carries their weight too.

### U6's outcome, and the rulings that came with it — 2026-08-10

**Doug's questions at the gate reshaped the unit.** Verbatim: *"I'm fine with collapsing it, though… what type of thing is the collapse? Is this an abstract class? Do we need a way of marking the level of the writing with a string enum? What about the use versus mention parse of the syntax of the sentence? How do we sensibly collapse those parts? **Also, how is `$Writing` written four times? Didn't we create `$Writing` to help with exactly this?** You can abstract but you need to think hard about what the thing you define actually means."*

**That last question was a correction and it was right.** `$Writing` is not written four times — it is the base and does its job. What is written four times is the **composition** layer, and the reason is structural: `$Composition$` is an **interface**, so it carries no code, and `$Composible$` exists as a bag of statics **precisely because there was no class to put that code in.** The gap was never in `$Writing`; it was that nothing sat between `$Writing` and the levels.

**So the answer to *"only if you are sure that we need a generalization"* is: we do not need a new one. We need to use the one we have.** Doug's own alternative — *"why can't all of this just be on writing, and we make sure that higher level pieces of writing override?"* — is what was built.

**And the levels are Doug's, six of them:** *letter, word, sentence, paragraph, section, **document*** — with *chapter, book, subject, library* being **the things we do with a document**.

- **`$Document` was outside its own base.** It extended `$Chemical`, so it **re-declared `$Writing`'s members by hand** — `$index`, `$parenthetical`, `index`, `parenthetical`, `copy`, `canonical`, and the whole delegating surface. **Ruled in: it is a writing level and now extends `$Writing`.**
- **`Level` and `Role` carry no `$`.** Doug: *"`$Level` — no clue what this is, but I doubt it's something viewable."* The prefix means a chemical; these are string unions. Corrected on the spot.
- **`role` is built** — Doug: *"Just implement role."* Values `use | mention`, `use` the default, immutable per class, on `$Writing` where a distinction on writing belongs.
- **`$Punctuation` is Doug's name** — *"you can build `$Punctuation` as a mentioned form of word? … If it makes things more elegant, do it."* It earned its place the moment the sentence's divider began yielding syntax.
- **A mention is not parsed.** Doug: *"A mention doesn't get parsed right? Now you start seeing differences and these differences can be displayed in alternative views of chapters in the demo."* Mentioned writing stands for itself, so `parts()` stops at it. **And the demo idea is recorded**: the per-level parse differences are themselves a view.
- **Position counts the syntax.** Ruled at the suite: a sentence's parts are everything written in it; its **words** are the used ones. `sentence.at(2)` is the space and the second used word stands at 3 — the same shape as a book, whose `parts()` holds its parenthetical chapters while the contents numbers only the reading. **Five promises restated, not patched.**
- **The document's title and summary** — Doug: *"you need a title and a summary… both can be required… This would have to be made consistent with how chapters work,"* then *"The section itself needs to have a title, which can be a canonical paragraph."* **Nothing new is needed: the canonical part at each level carries the title** — section → canonical paragraph (already so), document → canonical section, book → cover. The one real gap is that `$Document.valid()` demands a summary and not a title. **OWED, not built.**

### What the collapse cost and bought — counted

**Built.** `$Writing<P>` — generic over the writing it composes — now carries `level`, `role`, the bond that keeps the sequence, **the mixing parse**, the composible surface, and `first`. Each level declares only its four differences: `level`, `divide()`, `compose()`, `valid()`. `$Document` joins as the sixth. `$Punctuation` is new. **`Summary.tsx`, an empty dead file, is deleted.**

**Two defects the collapse surfaced, both ours, both fixed:**

1. **`$Document.$Document` did not call up.** Inheriting `$Writing`'s bond without reaching it breaks [Sprint 48's chain law](06-sprint-48--subjects-and-the-library.md#the-framework--chemistry-changes-this-sprint). **70 failures.**
2. **A document is block-level, and inherited `inline = true`.** Chapters became inline, so chemistry grouped all four of a book's chapters into **one block** instead of handing them over separately — and `$Book.chapters[0]` was an `$Html$`. **From 70 failures to 9 with one line.**

**Verified, fresh runs:** lib **160/160** (15 files, up from 154) · lib `tsc` **0** · app `tsc` **0** · **driven, zero page errors** — the shelf's spines and its written face, The Team opening with its sections wrapped and reading, the manifold, the algebra, the lab.

### U1 — the loop, and what it actually was

**The filed law was false.** *"A subclass that declares its own props and overrides a method its `view()` calls will not render"* — that exact shape renders fine standing alone. The true rule, from five one-variable cases: **inline, passed a prop, inside a block.** Host renders 41 times, child renders zero.

**The cause: props are construction, and were being recorded as mutation.** A chemical written inside another chemical's writing is **built during that chemical's render** and handed its props in [`$Bond.bond`](../../../chemistry/package/src/abstraction/chemical.ts); the `lastProps` guard is empty for a fresh child, so every prop is a change, the reactive setter records it into the running scope, the scope finalizes dirty, and the host renders again — forever.

**The fix is one guard in the bond**, raising the flag the framework already uses to say *this write is not news*. **Not in the setter:** guarding there on *"has not mounted"* looks equivalent, silently drops real mutations of a lensed instance, and chemistry's own perspectives suite catches it — which it did, immediately.

### U7–U10 — what is seen

- **`$Figure`** ships in `src/writing/`, at paragraph level: content is not writing, the caption is its copy, and it is **valid because it has something to draw**. Each kind states its own reason.
- **Three figures stand in The Team**, driven: the loop drawn from the model and the card printing its own fields in *The Decision*; the listing in *The Author, In Code*.
- **The listing shows the real file** — `Author.tsx` read at build. *A finding on the way: the appendix had a hand-pasted copy of the source in a constant that was **never rendered**. The chapter claiming to carry the framework's code showed prose about code and no code.*
- **The parse stands beside the chapter**, read off the model:

```
6  paragraph | The card is what got us out…
7  figure    | Four books, four author links, one destination
8  figure    | This book's own card, printing what is on it
9  paragraph | Nothing new had to be invented…
counted: 11 parts · 490 words used · 491 mentioned
```

**The figures stand at 7 and 8 and the prose keeps counting around them.** In *The Author, In Code* the listing is part 5 and prose resumes at 6. That is the claim a hand-authored page cannot fake: a rendered figure is easy, a parts list that accounts for it is not.

## Epiphenomenal decisions — the unruled ones, and what they say about the design

*Doug asked for these to be kept: **"keep note of epiphenomenal design decisions that might help indicate whether or not the original design was correct or needs modification."** Each is a choice nobody ruled, with what it suggests.*

1. **The sequence is normalized into the block, not stored beside it.** The plan's [D2](#decisions) said `parts()` would walk the argument sequence. In code it was better to flatten once at the bond, so there is **one** place the parse reads at every grade. *Signal: the design got simpler under contact — a good sign. It also means D2's "two arrival paths" are a fact about the framework, not about the model.*
2. **`declaration()` sets `$view` rather than adding a flag.** Nobody ruled it; it uses a seam that already existed for exactly this. *Signal: **the framework had anticipated this and the implementer had not used it.** A shipped seam going unused for the problem it was built for is evidence the original design was right and the code drifted.*
3. **The self-check was deleted with nothing put in its place**, and nothing broke. *Signal: it was guarding a case that resolves itself — ceremony, not logic.*
4. **The `.section` wrapper now appears** around the sections of view-writing chapters, where before it did not. **Two stylesheets already carried `.section` rules** — [catalogue.styled.ts](../../package/app/src/sections/book/catalogue.styled.ts) and [the-team.styled.ts](../../package/app/src/sections/the-team.styled.ts). *Signal, and it is the strongest one here: **the styling was written against the intended design, and the implementation had drifted away from it.** Somebody styled a wrapper that never arrived and nobody noticed.* **Driven and seen: The Team opens with `.section` = 2 and reads correctly; zero page errors across the whole click-through.**
5. **`$Writing` was made GENERIC over what it composes** rather than typed loosely. The interfaces forced it — `$Composition$<$Section>` will not accept a surface typed to bare writing. *Signal: the interface layer was already carrying the constraint the class layer lacked, which is why the duplication was survivable for so long. The types knew; the classes did not.*
6. **The two defects the collapse surfaced were both about `$Document` not being writing** — an unreached bond constructor and an inherited `inline`. Neither is about the parse. *Signal: **the cost of a level living outside its own base is paid in ways nobody connects back to the cause.** Seventy failures from one missing `super` call and one boolean.*
7. **`divide()` and `compose()` are PROXIES** — the two halves of a parse, named by the implementer. Doug's `level` and `role` are his. *Signal: the fact that exactly two hooks were needed, and no more, is evidence the four-differences reading was right.*

## Where things stand

*One state, written 2026-08-10 at the session's close. Everything above is the record; this is the present.*

**→ NEXT: `/ce-brainstorm` for the specialization — the back half, which is what closes this sprint.** It opens a **new chapter in this book** and starts from [the rulings already given for it](#the-second-sprint--the-specialization), which are Doug's own words and enough to interview against. **Not `/ce-plan`:** two things in it are open design — what replaces `$Page`, and what each book's specialization actually is.

**Said plainly, for whoever is not tracking identifiers.** The machinery is built and **nothing has been made beautiful with it yet**. A chapter can now hold a figure, a code listing, or a specialized word: the model sees them, numbers the prose around them, and draws them where they were written. What has not happened is *using* that on the four books.

### What the remaining half is, in Doug's words

> "Both, but spruce up all the books in the library. It doesn't need to be in one place. Don't forget to add ways to view key pieces of code. Also, I don't think you should be reusing `$Page`. Consider replacing it entirely. **Our books don't really have pages. Think harder.** And don't reuse across books in the demo. Make it easy to customize. Also remember that each demo should have a unique aesthetics — different colors, different organizations, different functions. **Always move the whole demo app in the direction of specialization of the parts.**"

And earlier in the same interview: *"we want to rewrite the markdown implementation, itemizing it at various levels to give a targeted code block or other features that prove we can customize."*

**One reading already offered and not yet ruled:** `$Page` may want no replacement name at all — the three shipped books each became *a book viewing itself*, and a chapter that draws itself is the same move one level down. Naming a view after paper is the error the manifold's reader made when it invented page notation the model could not speak.

### The state, once

**Complete, verified and seen** — the mechanism half, twelve units. The bond keeps the whole ordered sequence it is handed; the parse is written **once**, on `$Writing`, generic over what it composes; six levels declare only their four differences; `role` (`use`/`mention`), `$Punctuation`, and *a mention is not parsed*; `$Document` is a writing level rather than a thing beside one; a document writes its sections **once** and draws the ones it holds; `$Figure` at paragraph level, valid because it has something to draw; three figures standing in The Team, a listing showing the real file, and each chapter's own parse beside it.

**Not started** — everything in the remaining half: the markdown itemized, `$Page` replaced, the four books specialized, code viewable in more than one place, The Team's chapter for this sprint.

**Owed and Doug's** — a document requiring a **title** as well as a summary, consistent with chapters. The canonical part at every level already carries one (section to canonical paragraph, document to canonical section, book to cover), so it is one validity line, not a new abstraction.

**Skipped by ruling** — the review. *"I'm going to skip review because this is a two part sprint."* **So nothing here is signed off**, and the demonstrations are reviewed together with the second half. Do not read the green numbers below as acceptance.

**Queued, older than this sprint** — the historical vocabulary sweep (*fail*, *mint*, *minting*) across chapters 01–08, Sprint 48's record, the older Solutions entries and the skills.

### Blockers

**None.** The half that remains is unblocked; the framework defect that would have stopped it is fixed and covered by promises.

### Verified — fresh runs at the close, all three packages

Chemistry **635/635** (59 files, from 630) · lib **164/164** (15 files, from 154) · chemistry `tsc` **0** · lib `tsc` **0** · app `tsc` **0** · the full click-through with **zero page errors**. Chemistry's `dist` was rebuilt after the framework fix and **before** the lib suite ran, per [the filed law](../solutions/05-the-suite-that-passed-against-a-stale-build.md).

### How to see it

Run `npm run dev` in `library/.public/package` and open **`/books`** at the port vite prints.

**See first:** click *the shelf* above the spines — it turns to the written catalogue saying DEMONSTRATION. Open **The Team**, then **The Decision** from the margin's contents. **Two figures stand in the prose** — the loop drawn from the model, and this book's own card printing its fields — and in the margin, under *What this chapter is made of*, the chapter's own parse:

```
7  figure    | Four books, four author links, one destination
8  figure    | This book's own card, printing what is on it
9  paragraph | Nothing new had to be invented…
counted: 11 parts · 490 words used · 491 mentioned
```

**That is the thing to look at.** A rendered figure is easy to fake; a parts list that accounts for it, with the prose still counting around it, is not. Then open **The Author, In Code** — the listing there is `Author.tsx` itself, read at build.

### Wrong turns already taken — do not repeat

- **Do not guard the reactive setter** to fix a render loop. Guarding on *"this chemical has not mounted"* looks equivalent to guarding prop assignment and is not: it silently drops real mutations of an instance rendered through a lens. Chemistry's perspectives suite catches it immediately, which is the only reason it was caught.
- **Do not theorize about a loop from the reconciler.** The reading that `equivalent()` never accepts class instances is **true and was not the cause**. Five one-variable cases found the real rule in minutes.
- **Do not add a figure or a listing to a chapter without driving it.** The previous appendix held a hand-pasted copy of the source in a constant that was **never rendered at all**, and nothing complained for two sprints.
- **Do not run a reconcile with unpushed library work.** If the push is rejected, secure the branch library first — and when the guard reports paths "reverted", **diff ignoring line endings before overriding**; this session's three were pure CRLF.
- **Probe files do not live in the package.** Write them, read them, delete them; their inputs and outputs belong in the chapter.

### Read these five, and they are sufficient — shaped for a brainstorm

1. **[The Levels of Writing](../the-semantics-of-books/15-the-levels-of-writing.md)** — the settled account of what writing now is, on one page. **Read this before the code.** It exists so this chapter does not have to be read.
2. **[The remaining half](#the-second-sprint--the-specialization)**, in this chapter — Doug's rulings for the work ahead, verbatim.
3. **[Ways of Reading](../designing-inexplicable-phenomena/04-ways-of-reading.md)** — the view catalogue and the two laws every view answers to. Load-bearing for *"each demo a unique aesthetic"*: patterns are compositions of three shipped moves, and a new lens must name the sibling that corroborates it.
4. **[Markdown with LaTeX](../designing-inexplicable-phenomena/02-markdown-with-latex.md)** — what `$Markdown`, `$Latex` and `$Page` are today. This is the thing being rewritten, and its open questions are already written down.
5. **[Solutions 12](../solutions/12-the-writing-that-looped-its-page.md) and [13](../solutions/13-the-chapter-that-wrote-its-sections-twice.md)** — the two defects this sprint diagnosed. Read 13 before writing any chapter that draws itself.

*If five are not enough, that is a finding about this chapter rather than a reason to read twenty more.*

### Pushed this session

Project code to `DNA-Platform/inexplicable-phenomena` at **`bc9c57e`**. Branch libraries to the identity repo, branch `inexplicable-phenomena`, at **`b6a96a3`**. Identity itself unchanged — it had nothing to contribute.
