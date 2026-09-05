# The Parse

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force, and the register to check before a tidy crosses one.*

---

*Opened 2026-08-12 as a brainstorm, planned, built, driven and compounded the same day. **Status: `closed`** — seventeen of eighteen units; the one that remains is [named at the end](#the-state-once) and waits on Doug's prose rather than on code.*

*Doug's charge at the plan: **"Hold the code to the same standard of excellence. This is an extra sprint. I want it done right before we move on to build. But I also don't want it to take forever."** The cut line that answers the second half is [D9](#d9); the order that answers the first ran and is recorded below.*

*Sprints are **named, not numbered**; the title is the implementer's and stands for correction. **The Parse** is proposed because every requirement below routes through it — what it walks, what it may write, what it may judge, what supplies its rules.*

*It spans three packages: `library/chemistry/package` (the validation in flight), `library/.public/package/src` (the writing model), and `library/.public/package/app` (the demo).*

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

## How this sprint came to be first

It was not the plan. The previous session's handoff named **Types** as next, and Doug reversed it twice in one conversation.

**First, to the build:** *"I think we need to do the .public build before we do types. We need to know what it's like to lift this code first before we try to guess at what point code might be made to run."* That reversal stands — the build still precedes types, for the reason he gave: [the failure filed against Sprint 48](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md) was a feasibility case standing in for a mechanism, and guessing where code runs is the same move again.

**Then, to here:** asked whether the writing model needed a sprint before the build, he ruled **writing first**. The design session that produced these requirements ran the same day, out of one question he asked about a limit he had been told about and did not accept.

## Rulings from the design session — 2026-08-12, verbatim

Recorded because each one turned the design, and four of them corrected the implementer.

- **On the limit that started it.** *"I don't understand this. Please explain."* — of the claim that substitution could not reach into prose. The claim was **half wrong**, and the explanation is what found it.

- **On the block, which was the correction.** *"Doesn't compose run on a block? Can't that block include a sentence? Can't we parse around that sentence so that the sentence in the block is included in the final form?"*

- **And its two guards:** *"We better have the copy of any sentence we insert be the copy of exactly one sentence, and we better be using our new DI to ask for the specific sentence we use as part of the parse."*

- **On `inline`.** *"Nothing at the paragraph level should turn it off, including Figure… inline should be true for anything at the paragraph level so it is represented inside the block."* And later: *"I think sections need to be inline too… Have everything below document be inline."*

- **On the parse itself, which is the sprint's spine:** *"I wouldn't parse copy. I would do something like loop through the parts of the block and if something is too high a level, throw, if it's too low a level, assume that it is text and pull its copy, and if it is at the right level, literally use that element in the parse. This sort of function could be written abstractly as a tool that takes a block and maybe a type that specifies the level, and it can be reused in different parts of the code."*

- **On numbers:** *"We don't need an index on a part. I don't even like that if we can afford it."* Then, on being shown it could be removed everywhere: *"I don't think anything needs to carry a number. If it can be removed, it's fine."*

- **On a word of ours, struck:** *"I'm not sure what a reading is, but I don't like the concept."* **The word was ours, not his** — it entered from one Sprint 47 line, *"`parts` is the reading,"* and spread. It named a second thing standing beside the writing, and under these requirements the second thing does not exist. Struck from the library.

- **On nesting:** *"A section is like a subject which can have other subjects inside of it."* And: *"Is there any reason a section can't be a composition of sections or paragraphs with a union type?"* — there is none; see [R2](#r2--a-section-composes-sections-or-paragraphs).

- **On the author's misfit, which he diagnosed:** *"We want there to be something like a `$Phrase`. This sounds weird, but we do it with cover as chapters — why not make a `$Phrase` a type of word — maybe it's a word that can contribute multiple words if that's possible (if not we treat it as one) and then an author can be a phrase."*

- **On the document:** *"A document would be a wrapper for the topmost section, and it would inherit its title from the section title, and ideally it would have a parenthetical (or not) summary."* Clarified at approval: *"The document level means you have at least one section, and that section has a title from section, but also has to have a summary to be a document. That summary would be the first paragraph of the first section, but it can be parenthetical so that it is not visible."*

- **On markdown:** *"If we want to support markdown from the get-go, we can decide to use a markdown parser… I want something elegant and pragmatic. No reason markdown can't be part of the model, as it does help."* Ruled: **`marked`'s lexer answers boundaries, our classes answer shape.**

- **On validation, which corrected the requirement after it was approved:** *"We should be using valid as a part of this. We want the same validation system to play a role in this."* And then: *"It should answer by plugging into the validation framework that check does. I think it was supposed to throw, but we were adapting it to a more general validation system that plugs into the UI. And that system could be governed by an exception too, or something else."*

- **On what success is:** *"I want to see the demo code written well."*

- **On scope, ruled with the cut in front of him:** **one sprint, all thirteen.**

- **On vocabulary, for the fifth time:** *"There's no such thing as minting. Stop saying it."* The ban is on the word wherever it is typed — the two occurrences were in conversation, which a records sweep never reaches.

## What was read — verified 2026-08-12

Each claim was checked against the source, and the counts are what make the requirements below sized rather than guessed.

- **`inline` is set false at exactly four sites** — [`$Section`](../../package/src/writing/Section.tsx), [`$Document`](../../package/.archive/document/Document.tsx), [`$Figure`](../../package/.archive/writing/Figure.tsx), [`$IndexCard`](../../package/src/reference/IndexCard.tsx). Everything else takes `$Writing`'s `true`.
- **The block already holds everything.** [`gathered()`](../../package/src/utilities/html.ts) flattens the bond's whole sequence — blocks and standalone arguments alike — into one ordered element list, so `inline` never controlled representation. Its only real consumer is the parse's recognition test.
- **`index` appears at 20 sites in the model, and no author declares one** — zero occurrences of `index=` across the demo's book files.
- **The writes split by where they happen.** [`$Book`](../../package/src/book/Book.tsx), [`$Document`](../../package/.archive/document/Document.tsx) and `$CardCatalogue` write it **inside a bond constructor** — once, never again. [`$Writing.parts()`](../../package/src/writing/Writing.tsx) writes it **on every call**, to objects it just built. Only the second kind loops.
- **The loop's real cause was measured, and it was not parenting.** [`bond.ts:173`](../../../chemistry/package/src/abstraction/bond.ts) — `if (store[property] === value) return;` — so a write of an unchanged value is not news. A written part keeps its number across calls and wakes nobody; a freshly built part has `$index` undefined, so its number is *always* news. **Written parts were safe all along.**
- **`$Location` is the only thing standing on the number** — [`read()`](../../package/.archive/reference/Location.tsx) finds the part whose `index` matches. Position answers the same question with nothing stored. `$Composition$` and `$Catalogue$` both name `index` in their generic constraint.
- **`$Section.canonical` builds a fresh paragraph on every call** from its `title` block, so *the canonical is the special first at every level* is written in the derivation and not implemented.
- **`$Document` already derives what R3 asks for** — canonical is the first non-parenthetical section, summary the parenthetical one, title the canonical's heading. R3 is a deletion, not an addition.
- **The parse drops what it cannot compose, with a console warning** — [`Writing.tsx:88-94`](../../package/src/writing/Writing.tsx). Its own comment says the filter answers two questions and only one is the parse's business.
- **`$Word.valid()` admits letters, numbers and apostrophes only**, so `33A3a-112and-skjdfh` is invalid and disappears through that hole.
- **A failed bond is caught, kept, and drawn.** [`chemical.ts:261-263`](../../../chemistry/package/src/abstraction/chemical.ts) stores the error on the instance and still returns it; [`particle.ts:537`](../../../chemistry/package/src/abstraction/particle.ts) draws `renderException(...)` in place of its view. Modes are `render` / `silent` / `throw`.
- **`$ParamValidation` is already the accumulator Doug named** — [`chemical.ts:497`](../../../chemistry/package/src/abstraction/chemical.ts): `errors: string[]`, reset per bond, holding the chemical and the expected signature, raising **once** in `evaluate()`.
- **`marked` v18 is a dependency of `lib` and is used zero times.** Not a new dependency decision.
- **The demo's markdown mini framework is 1,083 lines** across nine files under `app/src/markdown/`.

**Baseline, so every later number is a delta:** `02c4032` · chemistry **674/674** (61 files), `tsc` 0 · lib **203/203** (21 files), `tsc` 0 · app **70 files, 4 baselined by identity, 0 unexpected** · `verify-book.mjs` **48 checkpoints, exit 0** · `verify-demo.mjs` **25 checkpoints, exit 0** · chemistry Lab `verify-all.mjs` **19 PASS**.

---

# Requirements

*Decided 2026-08-12 across the design session, approved section by section. Every requirement names what would be observed if it held.*

## Actors

*Compacted at the close of the sprint — the actors are the classes the units name.*

## Section A — the shape of writing

- **R1. Everything below document is inline.** `inline` stops being the parse's standing test and means only what chemistry means by it: *this arrives inside the block*. `$Section` and `$Figure` change; `$Document` stays; `$IndexCard` is out of scope pending whether a card is writing at all. *Seen: `gathered()` deleted, because chemistry's own grouping does its work.*

- **R2. A section composes sections or paragraphs.** <a id="r2--a-section-composes-sections-or-paragraphs"></a> Written parts may be sections; **composed parts are always paragraphs**, because prose only ever divides into paragraphs — a section exists because someone wrote one or a notation declared one. Nesting is structural; the flat list is a derived getter, the way [`$Book.paragraphs`](../../package/src/book/Book.tsx) already works. *Seen: one document with `#`, `##` and `###` whose model holds the tree and answers the flat paragraph list — both true of the same object.*

- **R3. A document has at least one section, and the first is its canonical.** The document's title is that section's title. *Seen: `$Document.$parts` as a section list gone, and the title reading off the first section.*

- **R3a. A document must have a summary, and it is the first paragraph of the first section.** It may be parenthetical, so it need not be visible. *Seen: a document with no summary rejected by name; a document whose summary is parenthetical valid and not drawn.*

- **R4. The canonical is part zero, at every level — including a section's title.** Today the title is a separate member and `canonical` builds a fresh paragraph on every call. *Seen: `section.parts()[0]` **is** the title, and it is the same object twice.*

  **This is the cover-and-synopsis shape one grade down.** A book is a cover at chapter zero plus a parenthetical synopsis; a section is a title at paragraph zero plus a summary that may be parenthetical. Same shape by grade, which is what this model produces when something is carved correctly.

## Section B — the parse

- **R5. One walk, written once, and it is a tool.** It takes a block and the levels it accepts, and treats each element by level: **too high → throw**; **too low → its copy joins the text run**; **at an accepted level → the element itself is a part.** Text runs are divided and composed. *Seen: one implementation called by every level, and the demo's separate copies gone.*

- **R6. Nothing carries a number.** Position answers: `at(7)` takes position 7 rather than searching for a match. `$Location` keeps its number, because that **is** the address rather than a property of a part. `first` and the 0-vs-1 special case are deleted. `index` leaves the `$Composition$` and `$Catalogue$` constraints. *Seen: grepping `.index` across the model returning only `$Location`'s own.*

- **R7. The parse does not judge what it composes.** `divide` returns no empty pieces, so everything composed is intended writing; the `valid()` filter and its console warning go, and an invalid part is a **validation failure** handled by the system that handles validation failures. *Seen: a book with one malformed piece drawing the framework's own exception where that part stands, the rest of the page intact, and the parts count equal to the writing.*

- **R8. The word specifications admit what people write.** `33A3a-112and-skjdfh` is one word. *Seen: that exact string surviving as one word in the parts.*

- **R9. `valid()` states its reasons into the validation in flight.** Not a return value — it plugs into the accumulator `$check` already writes to, so **parameter mismatches and validity reasons are collected together and raised once**, and a reader can see whether they are related. What is raised is what the UI plugs into, and it is an exception rather than a bare `Error`. *Seen: one bond failing on both a parameter and a validity constraint reporting both in one message, drawn in place.*

  **This is [chapter zero's open question](00-planning.md#done--validation-says-why-built-in-the-parse-2026-08-12) answered** — *"collect the exception and display it with the validation errors"* — and it is the shape `$Type` will need when several types weigh in.

## Section C — what it makes possible

- **R10. `$Phrase` is word grade, and an author is a phrase.** A phrase contributes several words if a part can contribute several, and one word if it cannot. `$Author extends $Sentence` claims a name is a whole sentence, which is the misfit the standing test was covering for. *Seen: an author written mid-paragraph leaving the sentence count unchanged — one sentence, not three.*

- **R11. Markdown is not a kind of writing — it is HOW WRITING IS WRITTEN.** *Doug, 2026-08-12: **"If we are integrating markdown, then it is just a part of `$Section`, not `$MarkdownSection`. We shouldn't have the word markdown in the framework. It will just be the canonical language for writing compositions."***

  **Scoped to the framework, and he said so plainly when the first reading of it went too far:** *"No the demo can have markdown classes. In the base framework, if it's there, we still use the current names. I wasn't talking about the demo."* So `lib` has no `$Markdown` anything and the word does not appear in `src/`; **what the demo names its own classes is the demo's business.**

  `$Section` divides at blank lines **and** pulls a fence whole **and** cuts at a heading; `$Section.compose` answers the kind the notation named; `$Sentence` divides its own inline marks. `marked`'s lexer answers where boundaries are; the classes answer what each piece is. **`#` depth becomes nesting**, which [R2](#section-a--the-shape-of-writing) already made possible. *Seen: the word* markdown *appearing **zero** times in `src/`, and a source with headings building a nested model through `$Section` itself.*

  **And this closes a gap rather than opening one.** Measured: of 143 prose strings in the demo's four books, **28 already carry markdown** — 18 with `[text](target)` links, 6 with block quotes, 12 with `*`, 8 with `_` — which something downstream typesets ad hoc. That is [chapter zero's own open question](00-planning.md#open-design-questions-explored-not-settled) verbatim: *"How writing refers to writing — the last string in the system."* The books were already written in this language; only the model did not read it.

  **The constraint that comes with it:** mathematics is written in the same prose, and `_` and `*` are TeX's too. A composite must be pulled **whole** before any mark inside it is read — the rule the demo already holds, moving to where it belongs.

- **R12. A composed part may carry a parent.** Nothing writes to it, so the lineage can be threaded without the loop [filed last sprint](../solutions/16-the-parse-that-woke-its-own-parents.md). *Seen: registering a sentence class on one book changing every sentence in it, with no subclass of `$Section` or `$Paragraph` anywhere, and a second book beside it unchanged.*

- **R13. The demo code reads well.** Doug's criterion, and the only one a number cannot fake. *Seen: a diff in which demo code is **deleted**.*

- **R14. The parse is proved by views that read it at every level.** *Doug, 2026-08-12: **"I want to see this as more alternative views like the one we have in Algebra, where you can see information about what's on the page. That is a good way to prove the parse works at different levels."*** The manifold already carries one — *the model, unadorned*, showing sections, words and addresses. This sprint makes it a family: the same writing read as sections, as paragraphs, as sentences, as words, with the counts agreeing across all of them.

- **R15. The parse must work on its own terms, and three things prove it.** *Doug, 2026-08-12, setting the bar: **"You're going to have to prove to me that markdown has been integrated into the base model well, and that parsing at all levels has been handled, and even handles inserted derived types of sections (or demonstrated that the way you handled that makes it unnecessary during the parse). Ultimately we will have to update the logic to have a more mature parsing framework. This one is a bit of a stand in, but I do want it to work on its own terms."***

  - **R15a — a derived kind is parsed by its LEVEL, never by its class.** This is the *unnecessary* answer rather than the *handled* one: the walk asks a part what level it stands at, and **`level` is inherited**, so a kind the model has never heard of needs no case. *Seen: a demo class two levels down from `$Section` standing as a part, and the same walk handling it with no class named anywhere in it.*
  - **R15b — the parse reaches every level, and the counts cannot disagree.** *Seen: document → section → paragraph → sentence → word → letter, and one word count whichever altitude it is reached from.*
  - **R15c — markdown is integrated well, judged on its own terms.** A stand-in is allowed to be a stand-in; it is not allowed to be partial. *Seen: [U12](#units)'s notation answering only `divide` and `compose` and getting the whole level system, with nothing in `lib` naming markdown.*

  **And the addresses become real.** Today `#3.1` and `¶ 1.2` are [string interpolation over array positions](../../.archive/app/src/sections/the-manifold.tsx); under R6 they are locations that **read back to the very part they name**. *Seen: one page, one piece of writing, four altitudes; the word count the same whichever level you arrive from; and following an address landing on that exact part — which a hand-authored page cannot fake, because a typed count can be typed and a resolving address cannot.*

## Key flows

*Compacted at the close of the sprint — the flows are what the sprint built; the units above name them.*

## Acceptance examples

*Compacted at the close of the sprint — the examples were accepted at the review; what they proved is in the record above.*

## Open, and named rather than assumed

*Each of these is design owed. Under [the specification filed against Sprint 48](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md), none of them gets files or scenarios in the plan until it can answer **what runs, and when**.*

- **Whether `compose` receives elements rather than text.** A word-grade part written inside a section is *too low*, so its copy joins the text run and the object does not survive into the sentence that would hold it. Carrying elements down would keep it. R10 fixes the sentence count without this; whether a written part should reach its own level is unanswered.
- **What a phrase does with several words.** Doug's fallback is explicit — *"if not we treat it as one"* — so the cheap form is buildable and the rich form is not yet designed.
- **Whether `$IndexCard` is writing at all.** Doug: *"I'm not sure that will end up as writing. It's not in the library."* Held out of R1 for that reason.
- **What the accumulator's exception is.** Doug: *"that system could be governed by an exception too, or something else."* The seam is named; the object is not.
- **Where a section's own `divide` comes from once markdown supplies one.** A plain section assumes one section until a notation says otherwise; which class holds that assumption is not settled.

---

# Plan

*Set 2026-08-12. **WHAT, not HOW.** Unit identifiers are never renumbered.*

## What the planning research measured, and what it changed

- **The `valid()` change is cheap, and [chapter zero's estimate is wrong](00-planning.md#done--validation-says-why-built-in-the-parse-2026-08-12).** It records *"cost: 736 tests see the change."* Counted by call site: **36 `valid()` implementations in `lib/src`, 29 `.valid()` calls in the lib tests, 11 overrides in the demo — 76 sites.** 736 was the suite's size, not its exposure. Recorded because a bad estimate is what keeps a cheap change queued for two sprints.
- **Chemistry has exactly one `valid()` mention** — `assertValid`. The framework half of R9 is one function and one accumulator, not a sweep.
- **`$Title` carries no level at all.** It extends `$Writing`, whose `level` is `undefined`, so the walk could not place it and R4 cannot land without moving it. This is [D5](#d5).
- **The title is already `elements[0]`.** [`$Section.$Section`](../../package/src/writing/Section.tsx) reads `this.elements[0]` and lifts it into a separate `title` member. R4 is *stop lifting it out*, not *put it in*.
- **Five reference forms carry the same two lines** — `$$Chapter`, `$$Section`, `$$Paragraph`, `$$Sentence`, `$$Word` each do `this.of.at(part.index)` then `reference.index = slot + 1`. One shape, five sites, all of it R6's.
- **The demo's markdown is 782 source lines and 301 test lines.** Of the source, the notation classes are `section.tsx` 183, `sentence.tsx` 96, `paragraph.tsx` 36 — **315 lines that move into `lib`**. `reading.tsx` 252 and `parallel.tsx` 215 are drawing and demonstration and mostly stay; `faces.tsx` 448 is styling and stays entirely.

## Decisions

**D1 — `valid()` keeps its boolean answer; the reasons are STATED, not returned.** *Chosen over changing the return type, and Doug's own correction points here: `$check` **returns its argument** while recording its error, so "plug into the validation framework that check does" means the same shape. The consequence is measured — none of the 76 sites change signature, and the sprint gets its biggest requirement for its smallest edit.*

**D2 — The stating form is the implementer's, with one guardrail: no short-circuit may swallow a second reason.** *Comprehensive reporting is the whole point of R9 — Doug, 2026-08-06, on reporting everything versus halting at the first — and an `&&` chain is exactly how it would be lost without anyone noticing.*

<a id="d3"></a>**D3 — `evaluate()` raises what it raises today; a typed exception is owed, not built.** *The raise already flows into `$devError$` and out through `renderException`, so the UI half works now. "Could be governed by an exception too, or something else" is exploratory and gets no unit.*

**D4 — Numbers go first, and `ts-morph` does the mechanical half.** *Chosen over doing it late: R12 depends on it, every later unit is simpler once nothing writes during a parse, and the tool was installed for exactly this kind of sweep.*

<a id="d5"></a>**D5 — `$Title` becomes paragraph grade.** *A consequence of R4 rather than a new idea: a section's part zero is a paragraph, and `$Title` has no level today, so the walk has nowhere to put it.*

**D6 — The walk is one function taking a block and the levels it accepts.** *Doug's words. Chosen over a method per level, because the three-way rule is identical everywhere and only the accepted levels differ.*

<a id="d7"></a>**D7 — `compose` keeps receiving text; carrying elements stays design owed.** *Verified rather than assumed: **no approved requirement needs it.** R10 fixes the sentence count on its own, and `$Cover.author` finds the author on the block rather than in the parts. Named as a decision because "obviously we need this" is how a bounded sprint acquires an unbounded unit.*

<a id="d8"></a>**D8 — A phrase is one word that admits what a name contains.** *Doug's own fallback — "if not we treat it as one." The several-words form is owed and gets no unit.*

<a id="d9"></a>**D9 — THE CUT LINE: marked's lexer is bounded to the notation the demo already exercises.** *Headings, paragraphs, lists, quotes, fences, images, rules, emphasis, links, inline code, and the two math forms — because that is what the demo's own three classes handle today. Anything the lexer surfaces beyond it — tables, reference links, setext headings, footnotes, HTML blocks — is **recorded in this chapter, not built.** This is the answer to "I don't want it to take forever," and it is a list rather than a feeling.*

<a id="d13"></a>**D13 — The notation is the base class's, and the framework has no `$Markdown` anything.** *Doug's ruling, 2026-08-12: it is not a kind of writing, it is how writing is written, so it belongs to `$Section`/`$Paragraph`/`$Sentence` under those names. The check is a grep, and it is **scoped to `src/`** — corrected the same hour, because the first reading of the ruling reached into the demo and he had not said that: "the demo can have markdown classes… I wasn't talking about the demo." Whether the demo's own classes survive is [R13](#section-c--what-it-makes-possible)'s question about whether its code reads well, not this decision's.*

**D13a — And the "third axis" survives as an override, not as a class.** *[The Levels of Writing](../the-semantics-of-books/15-the-levels-of-writing.md) names notation as an axis orthogonal to the levels. It still is: `divide` and `compose` are the axis, and anyone may answer them differently. What changes is the **default** — the levels now come with the canonical language already spoken.*

**D10 — The model is green and DRIVEN before the demo is touched.** *The lesson filed four times: no test renders a book, so a parse change is not verified until a book has been drawn. Both drivers run at every track boundary, not at the end.*

**D11 — `$IndexCard` is not touched.** *Doug held it out — "I'm not sure that will end up as writing. It's not in the library." Whether a card is writing belongs to the build sprint, where cards are the subject.*

**D12 — Nothing is renamed and nothing is self-named.** *`$Phrase` is Doug's. **"Reading" is struck rather than replaced** — there is no word for it because, under these requirements, there is no thing.*

## Units

### The floor

- **U1 — Every gate run, and its number stated.** *Mechanism: the six gates run before anything is edited — chemistry suite and `tsc`, lib suite and `tsc`, app typecheck, `verify-book.mjs`, `verify-demo.mjs`, the chemistry Lab's `verify-all.mjs`. Files: none. Depends on: nothing. Realizes: the baseline. **Visible end:** six numbers, each with its scope named, and any pre-existing red identified as floor work rather than met as a surprise later.*

### The parse's write problem — first, because everything is simpler after it

- **U2 — Nothing carries a number.** *Mechanism: `index` and `first` leave `$Writing` and every part; `at(n)` takes position `n` rather than searching for a match; `$Location` keeps its own number as the address; the five reference forms stop writing to what they build; `index` leaves the `$Composition$` and `$Catalogue$` constraints. `ts-morph` for the mechanical sweep. Files: `writing/Writing.tsx`, `writing/Composition.tsx`, `reference/Catalogue.tsx`, `reference/Location.tsx`, `utilities/Composible.tsx`, `book/Book.tsx`, `book/Chapter.tsx`, `book/TableOfContents.tsx`, `book/Row.tsx`, `document/Document.tsx`, `library/CardCatalogue.tsx`, the five `$$` forms. Depends on: U1. Realizes: R6. **Visible end:** grepping `.index` across `src/` returns only `$Location`'s own, both suites green, and the contents numbering its rows from 1 where it printed the chapter's place in the full list before.*
  **Bounded:** if removing the number reaches past addressing into what a reference *means*, it stops and reports.

### The shape

- **U3 — The walk, as a tool.** *Mechanism: one function taking a block and the levels it accepts — too high throws, too low contributes its copy to the text run, at an accepted level the element is used as itself; text runs are divided and composed. Every level calls it. Files: `writing/Writing.tsx`, plus a home for the tool. Depends on: U2. Realizes: R5. **Visible end:** one implementation, called by six levels, and the recognition test gone from every one of them.*

- **U4 — Everything below document is inline.** *Mechanism: `$Section` and `$Figure` stop setting `inline = false`; `gathered()` is deleted because chemistry's own grouping does its work. Files: `writing/Section.tsx`, `writing/Figure.tsx`, `utilities/html.ts`, `writing/Writing.tsx`. Depends on: U3. Realizes: R1. **Visible end:** `gathered()` gone and every book rendering unchanged, driven.*
  **Bounded:** if chemistry draws an inline chemical differently from a block one, it stops and reports — that half was never read.

- **U5 — A section composes sections or paragraphs.** *Mechanism: the accepted levels for a section become section and paragraph; written parts may be sections, composed parts are always paragraphs; the flat list becomes a derived getter recursing through nested sections. Files: `writing/Section.tsx`, `writing/Composition.tsx`. Depends on: U3. Realizes: R2. **Visible end:** a section holding a subsection as a part **and** answering the flat paragraph list — both true of one object.*

- **U6 — The document, and its summary.** *Mechanism: a document has at least one section, the first is its canonical and gives its title; the summary is the first paragraph of the first section and may be parenthetical; `$Document`'s search for a parenthetical section goes, and so does its own section list where the shape allows. Files: `document/Document.tsx`, `book/Chapter.tsx`, `book/Cover.tsx`. Depends on: U5. Realizes: R3, R3a. **Visible end:** a document with no summary rejected by name, and one whose summary is parenthetical valid and not drawn.*

- **U7 — The title is part zero.** *Mechanism: `$Section` stops lifting `elements[0]` into a separate member; `title` becomes `parts()[0]`; `$Title` becomes paragraph grade so the walk can place it; `canonical` stops building a fresh paragraph on every call. Files: `writing/Section.tsx`, `writing/Title.tsx`. Depends on: U5, U6. Realizes: R4. **Visible end:** `section.parts()[0] === section.parts()[0]`, and it is the title.*

### The parse's judgment

- **U8 — The parse stops judging what it composes.** *Mechanism: `divide` returns no empty pieces at any level; the `valid()` filter and its console warning are deleted; an invalid part stays in the parts carrying its failure. Files: `writing/Writing.tsx` and each level's `divide`. Depends on: U3. Realizes: R7. **Visible end:** a book with one malformed piece drawing the exception where that part stands, the rest of the page intact, and the parts count equal to the writing.*

- **U9 — The word specifications admit what people write.** *Mechanism: `$Word.valid()` and `$Sentence.divide` are widened to the characters a word actually contains; each states what it means in its own words. Files: `writing/Word.tsx`, `writing/Sentence.tsx`. Depends on: U8. Realizes: R8. **Visible end:** `33A3a-112and-skjdfh` surviving the parse as one word.*

### Validation

- **U10 — The validation in flight.** *Mechanism: the accumulator `$check` already writes to stops being about parameters — `valid()` states its reasons into the same collection, and one raise carries parameter mismatches and validity reasons together with the chemical and the expected signature it already holds. The raise is unchanged ([D3](#d3)). Files: `chemistry/package/src/abstraction/chemical.ts`, then the `lib` classes that have something to say. Depends on: U1. Realizes: R9. **Visible end:** one bond failing a parameter check and a validity constraint reporting **both**, in one message, drawn in place — and a subclass's reasons accruing with its superclass's rather than replacing them.*
  **Bounded:** the raise's own type is not redesigned. If the work reaches for a new exception class, it stops and reports.

### What it makes possible

- **U11 — `$Phrase`, and the author moves.** *Mechanism: a word-grade kind whose validity admits what a name contains; `$Author` becomes one; the two sibling reference kinds are examined for the same misfit and moved only if they have it. Files: a new writing module, `book/Author.tsx`, `book/Subject.tsx`, `book/Canonical.tsx`. Depends on: U9. Realizes: R10. **Visible end:** an author written mid-paragraph leaving the sentence count at one.*
  **Bounded:** a phrase contributes one word ([D8](#d8)). If the work starts building a part that flattens into several, it stops and reports.

- **U12 — The notation becomes the levels' own.** *Mechanism: `$Section.divide`/`compose` and `$Sentence.divide`/`compose` gain the notation itself — blank lines, fences pulled whole, headings cutting subsections, and the inline marks — with `marked`'s lexer answering boundaries. **The demo's three classes are DELETED, not moved**: `$MarkdownSection` becomes `$Section`. The kinds a fence can name (`$Figure` and its sort) live in `lib` under their own names, none of which is* markdown. *Bounded by [D9](#d9). Files: `src/writing/Section.tsx`, `src/writing/Sentence.tsx`, `src/writing/Paragraph.tsx`, new kind modules, `package.json`. Depends on: U5, U7, U9. Realizes: R11, R15c. **Visible end:** a source with `#`, `##` and `###` building a nested model; `cut()` deleted; and a grep for the word* markdown *in `src/` returning **zero**.*
  **Bounded, and this is the one that could run away:** a composite is pulled whole before any mark inside it is read, so mathematics keeps its underscores. If the notation starts reaching past [D9](#d9)'s list, it stops and reports.

- **U13 — A composed part carries a parent.** *Mechanism: the walk threads lineage into what it composes, which is safe once U2 has landed and nothing is written. Files: `writing/Writing.tsx`. Depends on: U2, U3, U8. Realizes: R12. **Visible end:** a grandchild of a book resolving a registration made on the book — and **both drivers still completing**, which is the test that failed last sprint.*
  **This is the unit that reverses a filed specification.** [The parse that woke its own parents](../solutions/16-the-parse-that-woke-its-own-parents.md) says region-scoped substitution is unavailable; when this lands, that chapter is amended rather than left standing.

- **U14 — The demonstration.** *Mechanism: one registration on one book's component scope replaces the class its sentences are drawn with; the book beside it is untouched; the framework line that produced both is shown by the existing `?raw` drawer. Files: `app/src/sections/`. Depends on: U13. Realizes: R12's visible half, and AE15. **Visible end: two books, one `$Book` class, one registration, every sentence in one of them redrawn and none in the other — with no subclass of `$Section` or `$Paragraph` in the diff.** This is the thing a hand-authored page cannot fake.*

### The demo

- **U18 — The level views, and they are the proof.** *Mechanism: the manifold's* the model, unadorned *stops being one view and becomes a family — the same writing read at section, paragraph, sentence and word grade, each asking `parts()` at that level instead of reading a hand-built structure; and the addresses stop being interpolated strings and become locations that resolve. Files: `app/src/sections/the-manifold.tsx` and its styled module, plus wherever a shared level view lands. Depends on: U2, U7 — **and deliberately not on U13 or U12**, so the parse is proved visible at the sprint's midpoint rather than at its end. Realizes: R14, AE18, AE19. **Visible end: one page, one piece of writing, four altitudes, ONE word count — and an address followed, landing on the very part it names.***
  **Bounded, and this is the guard that matters:** the views **read** the model and add no parse of their own. Today [`row()`](../../.archive/app/src/sections/the-manifold.tsx) flattens a chapter into ~55 lines of hand-copied strings — headings, subtitles, paragraph text — which is a second population of the model wearing a data structure. If a view starts computing what a level *is* rather than asking for it, it has become the second parse this sprint exists to delete.
  **And the `.slice(1)` calls scattered through it stop compensating.** They skip a first part the model does not currently name; after U7 the title *is* part zero, so they either read honestly or disappear.

- **U15 — The demo rewritten, and code deleted.** *Mechanism: the demo stops carrying a notation — its three classes are gone into `lib` — and what remains is drawing and demonstration; the faces stay, because styling is correctly demo-side. Files: `app/src/markdown/**`, `app/src/sections/page/**`, `app/src/sections/the-manifold.tsx`. Depends on: U12, U14, U18. Realizes: R13. **Visible end: a diff in which demo code is DELETED**, stated as a line count against the 1,083 in `app/src/markdown` plus the hand-copied structure U18 removes, and the facing-page comparison still agreeing exactly.*
  **The honest counterweight:** `faces.tsx` is 448 lines of styling and is **correct** where it is. If this unit starts moving styling into `lib`, it has misread the sprint.

### Gates and records

- **U16 — The drivers.** *Mechanism: `verify-book.mjs` and `verify-demo.mjs` gain checks for the demonstration and for a drawn validation failure; each is watched going red before its green is trusted. Files: both drivers. Depends on: U14, U15. Realizes: AE9, AE15, AE16. **Visible end:** both completing with checkpoint accounting, and each watched failing first.*

- **U17 — The records.** *Mechanism: this chapter gains its state; [The Levels of Writing](../the-semantics-of-books/15-the-levels-of-writing.md) is rewritten where the levels changed — the four-declarations table, the standing test, the 0-vs-1 counting, and the still-open list; **the word "reading" is swept from the branch library**; [the parse chapter in Solutions](../solutions/16-the-parse-that-woke-its-own-parents.md) is amended where U13 reverses it; chapter zero's 736 figure is corrected; $Chemistry's Projection gains an entry for U10. Files: those. Depends on: everything.*

## Test scenarios

*Compacted at compounding — The sprint's test scenarios stood here. **They are now the suite** — a scenario that survived is a promise, and a promise is read where it runs, not where it was planned.*

## Risks

*Compacted at compounding — The pre-flight risk list stood here. **A risk that fired is in the record below**, with what it cost; the rest did not.*

## Order

*Compacted at compounding — The build order stood here, and the sprint ran it.*

## Self-check

*Compacted at compounding — The plan's self-check stood here, and it passed before work started.*

# The record — what was built, and what the building found

*The account of the sprint. **State does not live here** — it lives once, in the last section.*

## What was built

**U1 — the floor.** All six gates run before anything was edited, and **none was red**: chemistry 674/674 (61 files) `tsc` 0 · lib 203/203 (21 files) `tsc` 0 · app typecheck 70 files, 4/4 baselined, 0 unexpected · `verify-book.mjs` exit 0, 48 checkpoints · `verify-demo.mjs` exit 0, 25 checkpoints · Lab `verify-all.mjs` exit 0. Every failure after this point is this sprint's.

**U2 — nothing carries a number.** `index` is gone from `$Writing`, `$Book`, `$CardCatalogue`, `$Path`, `$Key`, `$Location` and the five `$$` reference forms; from the `$Reference$`, `$Composition$` and `$Catalogue$` constraints; and from every bond that used to assign it. `first` is deleted with the 0-vs-1 special case. `at(n)` takes **position** and reads `parts()[n]` — `$Location` keeps its own number, because that is the address rather than a property of a part.

**Verified after U2:** lib `tsc` **0** · app typecheck **70 files, 0 unexpected** · suite **201/201** · `verify-book.mjs` **exit 0, 48 checkpoints** · `verify-demo.mjs` **exit 0, 25 checkpoints**. The suite was **watched red three ways on the way** — 19 failures, then 3, then 2 — so its green is a result rather than an assumption.

**The promise count moved 203 → 201, and it reconciles exactly:** three tests deleted, one net new pair added. Each deletion is named in the file with its reason, and each reason is the same: *the thing it promised can no longer be written.* A duplicated index, an authored index, an assignable index — all three described a number a part could be given.

**U3 — the walk, as a tool.** [`parse(elements, accepts, divide, compose)`](../../package/src/writing/Writing.tsx) — one function, called by every level, with Doug's three-way rule: **too high throws**, too low contributes its copy to the prose, at an accepted level the element **is** the part. `parts()` is now four lines that call it, and a level says what it accepts through `accepts`. Seven promises in [`parse.test.tsx`](../../package/tests/writing/parse.test.tsx), **two of them watched red first**.

**U4 — everything below document is inline.** `$Section` and `$Figure` no longer declare themselves non-inline, and **`gathered()` is deleted** — chemistry's own grouping does its work. `$Writing`'s bond now **throws** if a sequence reaches it, which is how the specification states itself rather than being remembered.

**U5 — a section composes sections or paragraphs.** `accepts` becomes `['section','paragraph']`; nesting is **structural**, and `paragraphs` reaches through it exactly as `$Book.paragraphs` always has. Written parts may be sections; composed parts are always paragraphs, because prose only divides into paragraphs.

**U7 — the title stands at position zero.** It is no longer lifted out of the block into a member of its own: `$Title` becomes **paragraph grade** — the level the walk can place it at — and `section.title` is `parts()[0]`, the very object that was written. `canonical` stops building a fresh paragraph on every ask, which was a third population of one thing. Four promises, and the heading's colon-split and the tagline still read.

**R15a and R15b — answered on demand, with the mechanism watched failing.** [`levels.test.tsx`](../../package/tests/writing/levels.test.tsx), 8 promises: a derived section stands as a part; a kind derived from *that* stands too, so depth of inheritance is not a case; a derived paragraph and one derived from it stand in written order among the prose; every level composes the one below down to the letter floor; and **one word count whichever altitude it is reached from**.

**The proof is the probe, not the green.** The walk was changed to ask what a part **is** rather than where it stands — a class-name guard in place of the level test — and **all three derived-kind promises failed**. Reverted, and the whole suite came back green in the same run. So *"the way it is handled makes a case unnecessary"* is a measured claim: `level` is inherited, and the walk names no class anywhere in it.

**Still owed on R15: markdown.** R15c is [U12](#units)'s burden and nothing about it is built yet. Saying otherwise now would be the feasibility-for-design substitution [filed against Sprint 48](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md).

**Verified at the second checkpoint (after U7):** lib `tsc` **0** · app typecheck **70 files, 0 unexpected** · suite **221/221** (23 files, from 203) · `verify-book.mjs` **exit 0, 48 checkpoints** · `verify-demo.mjs` **exit 0, 25 checkpoints**. Every unit was driven, not only suited — a parse change is not verified until a book is drawn.

**U12 — the notation is the levels' own.** `$Section`, `$Paragraph` and `$Sentence` speak it themselves; **the word appears zero times in `src/`**. A heading OPENS a section that absorbs everything under it until a heading of equal or higher rank; fences, quotes, items, plates, breaks and display maths fork into their own kinds in `lib`; links, inline code and inline maths are word grade. `marked`'s lexer answers boundaries. **15 promises**, and heading absorption was watched failing first. The demo shrank with it: `sentence.tsx`, `paragraph.tsx` and three test files **deleted**, `section.tsx` cut from **183 lines to 20** — all that survives is `attending`, which is genuinely the demo's; `$Attending` went entirely, because a fence carries its info string and what draws one is a drawing question. The classes drawer now shows the **framework's** own source.

**U8 — the parse does not judge.** The `valid()` filter and its console warning are gone: an empty piece is not a piece, and a part that will not validate stays in the parts carrying its failure.

**U9 — the word specifications admit what people write.** `33A3a-112and-skjdfh` is one word; a hyphen joins rather than divides.

**U10 — validation states its reasons.** `$valid(condition, reason)` in chemistry, built beside `$check` and working the same way — it **returns its condition** and records the reason, so `valid()` keeps its boolean and none of the 76 call sites moved. `assertValid` stops throwing and states; `evaluate()` raises **once** with parameter mismatches and validity reasons together. Three classes say their own sentence. **5 promises**, including the one that breaks the moment someone puts an `&&` in front of a `$valid` call.

**U11 — `$Phrase`, and a name stops claiming to be a sentence.** Word grade, admitting what a name contains. `$Author`, `$Subject` and `$Canonical` moved. An author written mid-paragraph now leaves the sentence count at **one**.

**U13 — the parse writes NOTHING, so it may carry a parent.** Not a number, not a role: **mentioning propagates by lineage** — a part is mentioned if what holds it is — so U13 and mention-propagation turned out to be one mechanism, exactly as this chapter predicted before it bit. **Both drivers green with lineage threaded**, which is [the specification filed as solutions/16](../solutions/16-the-parse-that-woke-its-own-parents.md) **reversed**: region-scoped substitution was unavailable *because the parse wrote*, and it no longer does.

> ***CORRECTED 2026-08-20, and the sentence above is the one that hid it.*** **The parse does not write nothing — it writes the parent**, at five sites, and `parent` is a chemical's own setter. *That write was harmless for a sprint and a half because nothing called `parts()` inside a render; the first drawing that did died of heap exhaustion.* **[The full diagnosis is filed where the specification lives](../solutions/16-the-parse-that-woke-its-own-parents.md#it-came-back-and-the-discharge-had-missed-a-third-write--the-theme-2026-08-20)**, and the specification now reads: *a parse may not be given a parent while it mutates what it makes — **and giving the parent is one of the mutations***.

**U18 — the level views, and they are Doug's proof.** The manifold's model view reads the **model** at four altitudes — sections, paragraphs, sentences, words — instead of a hand-copied structure, and every address is the position a reference resolves. **Driven: "260 words as paragraphs, 260 as words."** One count at every altitude, because each is a reading of one model rather than a second parse of the same text.

**Two corrections Doug made by reading the screen, and both were real.**

**The altitude checkpoint claimed more than it proved.** It printed one getter — `chapter.words.length` — beside four different lists, so switching altitude changed the rows and never re-derived the count. *"260 as paragraphs, 260 as words"* proved a getter is stable, not that the readings agree. **Each altitude now walks its own count**, four genuinely different ways down through the model, and two further checkpoints guard it: the **rows must differ** at every altitude, and the word altitude must print **one row per word**. Driven: *260 words through 4 sections, 11 paragraphs, 17 sentences, 260 words.*

**And a quotation was being cut into lines.** Doug: *"paragraphs need the empty line breaks. Not just one newline… I would take three lines as a single paragraph that would be at the stanza level of a poem."* A blockquote was split per line, so three lines under one angle were three paragraphs. **Only a blank line divides prose** — a quotation is one paragraph however many lines it runs, while a **list** stays many, because the notation marks each item. Four promises, including his exact example.

**Also landed on the way:** the manifold stopped **sniffing strings** (`startsWith('> ')`) where the model answers; its ribbon slot moved off the model into `$RibbonMark.$slot`; and the anchors and the authored addresses became **one numbering** — the model's — so `getElementById(path)` and `reference(path)` agree by construction rather than by a per-level arithmetic fudge.

## The order was changed, and here is why

**U6 moved behind U12 and U18**, on Doug's attention rather than on a dependency. He asked three times for proof that the notation is integrated *well*, so the work goes **U7 → U12 → U18 → U6**: the title at zero is what lets a heading become a section, U12 is the integration, U18 is where it is seen. U6 — the summary migration — is the widest-reach change in the sprint (15 sections in the demo, 29 in the tests, 10 readers) and touches nothing he is watching.

## What the building found

- **Two changes each surfaced their own requirement.** Making `$Figure` inline **hid it from the walk**, because the walk still used `inline` as its standing test — which is precisely what R1 removes, so level alone now decides. And making `$Section` inline meant a document's sections arrive **grouped in its block**, so `$Document` reads them off the block by level: the same three-way rule, one grade up.
- **Nothing below a document may declare itself non-inline, and the bond says so.** Two test classes still did; the throw caught both. The specification is enforced where it is broken rather than remembered where it is written.
- **A relative `-p` typechecks NOTHING and exits 0.** Running `tsc -p tsconfig.json` from `app/` reported clean while the gate reported four real errors — [the fifth appearance of the same defect](../solutions/14-the-green-that-exercised-nothing.md), and the gate caught it only because it uses an absolute path and prints its scope. **The gate was right and the shortcut was the lie.**
- **A promise already said the number was the position.** `ordinary.test.tsx` *(since deleted)* asserted `parts().map(p => p.index)` equals `parts().map((_, i) => i)`. We were storing a value the suite proved derivable.
- **The contents was printing its number twice.** `view()` wraps rows in an `<ol>`, and `row()` then printed `{row.copy} {row.index}` — the ordered list's own numbering plus a hand-written one. Removing the stored number removed a duplicate nobody had meant to write.
- **The demo was keeping app state in the model.** The manifold did `mark.index = this.ribbons.length` — a ribbon's slot among the other ribbons, stored in the writing's number because a number happened to be there. `$RibbonMark` now carries its own `$slot`.
- **Addressing below a section moved from 1-based to 0-based**, and that is the derivation's own specification finally holding: `$Section.first` was 0 while every other level was 1, and `$Composible$.canonical` has always been `parts()[0]`. The canonical now stands at position zero at every level. **It moves visible addresses in the manifold and the parallel text** — flagged rather than buried.
- **`at(n).read()` is identity-equal to `parts()[n]` only for HELD parts** — a book's chapters and a document's sections. Below that a reading builds fresh objects each call, so a location stands for the same *writing* and not the same object. That was already the suite's specification under another name; the position promises now say it explicitly.

## Correction to the plan, made before it bit

**U13's mechanism was stated incompletely.** It says threading a parent is safe "once U2 has landed and nothing is written." `parts()` writes **twice** — the number, and `part.$role = 'mention'` where mentioning propagates — and the second fires for the same reason the first did.

**The fix is that it stops being a write.** Once parts carry parents, a part is mentioned if its parent is, so mentioning propagates **by lineage** and U13 and mention-propagation become one mechanism. That is U13's work, done where the parent exists; it is recorded here because a red driver is the other way to find it.

## Every gate, at the close

| gate | baseline | now |
|---|---|---|
| chemistry suite + `tsc` | 674/674, 61 files, 0 | **674/674**, 61 files, **0** |
| lib suite + `tsc` | 203/203, 21 files, 0 | **220/220**, 22 files, **0** |
| app typecheck | 70 files, 4 baselined, 0 unexpected | **65 files**, 4 baselined, **0 unexpected** |
| `verify-book.mjs` | exit 0, 48 checkpoints | **exit 0, 50 checkpoints** |
| `verify-demo.mjs` | exit 0, 25 checkpoints | **exit 0, 25 checkpoints** |
| chemistry Lab `verify-all.mjs` | exit 0 | **exit 0** |
| the word *markdown* in `src/` | — | **ZERO** |

**Chemistry was rebuilt before lib ran against it**, every time chemistry changed — the stale-build specification, which this branch has filed three times.

## What this compounded — every room it edited

*[Compounding distributes](../../../../.claude/library/..librarianship/17-compounding.md): a defect goes to Solutions indexed by symptom, everything else goes to the room whose subject it already is. This list is what makes that retrievable — a reader who arrives here sees every room the work touched.*

| room | what went there | why there |
|---|---|---|
| [The Levels of Writing](../the-semantics-of-books/15-the-levels-of-writing.md) | **rewritten as settled** — three declarations instead of four, the union at section grade, the canonical at zero, one block, level-alone, the parse writing nothing, the notation as the levels' own, `$Phrase`, `$valid` | it is the account a session starts from instead of a sprint record, and a third of it had become false |
| [The parse that woke its own parents](../solutions/16-the-parse-that-woke-its-own-parents.md) | **DISCHARGED** — the specification holds, its condition was removed | a filed specification whose limit is gone is more dangerous than no specification |
| [The green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md) | **edited, not duplicated** — the relative `-p`, and the same disease inverted as a **false red** | overlap: both are a number true of a scope nobody stated |
| [The regex that remembered where it stopped](../solutions/17-the-regex-that-remembered-where-it-stopped.md) | **new** — `lastIndex` surviving a call, and the tell | a genuinely new mechanism class; nothing filed carried it |
| [The checkpoint that compared a number to itself](../solutions/18-the-checkpoint-that-compared-a-number-to-itself.md) | **new** — a green that could not go red, caught by Doug reading the screen | watching a gate go red would not have caught it, which is why it is its own chapter |
| [Ways of Reading](../designing-inexplicable-phenomena/04-ways-of-reading.md) | **a third specification** — a view READS, it does not re-derive | not a defect: a practice, and that book already holds the specifications for views |
| [Chapter zero](00-planning.md) | **compacted** — validation-says-why marked done with the 736 estimate corrected to 76; *how writing refers to writing* closed; the type-keyword note compressed | its own specification is that notes are overwritten when addressed |

**Not filed, deliberately:** the manifold's string-sniffing, the hand-built addresses and the borrowed model member are **one lesson**, and it is a practice rather than a defect — so it went to Ways of Reading whole instead of becoming three Solutions chapters that would drift apart.

---

---

# Where things stand

*One state, written 2026-08-12 at the session's close. Everything above is the record; this is the present.*

## → NEXT: two things, and the first is small

**1. `/ce-work` the sync ruling, then push this sprint's code.** Doug, this session: *"Identity only ever needs to go to the branch on identity with the repo name… This branch is always the object of record for `.claude` and the library branches there."* The change is in [`06-on-sync--commit.sh`](../../../../.claude/library/..environmentalism/06-on-sync--commit.sh) and [On Sync](../../../../.claude/library/..environmentalism/06-on-sync.md) — 29 references, three steps to two. **This sprint's code is not pushed until it lands**; see [Blockers](#blockers).

**2. `/ce-brainstorm` — the `.public` build**

**Run `/ce-brainstorm` for the build.** It is Doug's own reordering, in his words: *"I think we need to do the .public build before we do types. We need to know what it's like to lift this code first before we try to guess at what point code might be made to run."*

It is [Sprint D — The Compilation](00-planning.md#d--the-compilation), already sketched: **the `.public` build generates the library cards it currently takes by hand**, property names identical one-to-one, dirty ⇒ fail. Its demonstration is stated and it is the strong kind — *the same demo, running on generated cards, with nothing on screen changing.*

**It is a brainstorm and not work**, for the reason that has now held twice: the hand-built cards **are** the specification for what the build must generate, and that list has never been written down as one.

## Said plainly, for whoever is not tracking identifiers

**Writing now reads itself.** A section holds sections or paragraphs; its title is simply its first part; nothing carries a number, because where a part stands is its number. The parse is one walk that asks each thing what level it is written at — so a kind nobody told it about is handled anyway, since a level is inherited.

**And the language of writing is now the model's.** Headings make sections, fences make figures, a link is a word that points. Nothing in the framework says the word *markdown*, because it is not a kind of writing — it is how writing is written.

**The thing that had been impossible now works.** A registration can reach into prose, because the parse stopped writing to what it makes.

## The state, once

**Complete, verified and driven.** Seventeen of eighteen units. Nothing carries a number; one parse walk with the three-way rule; everything below a document inline with `gathered()` deleted; sections nesting; the title at position zero; the notation living in `$Section`, `$Paragraph` and `$Sentence`; the parse neither writing nor judging; `$Phrase` at word grade with the three name-kinds moved; `$valid` stating reasons into the same collection `$check` writes to; lineage threaded through the parse; and the model read at four altitudes in the manifold.

**Not built — one unit, and it waits on Doug rather than on code.** A document's summary becoming *the first paragraph of its first section*. The model change is small. The demo change is not: it moves **fifteen chapters'** summaries to the top as parenthetical opening paragraphs, which alters what those books say. **It was raised rather than taken.**

## Blockers

**None for the build.** The one open item above blocks nothing; it is a decision about prose.

**One blocker for PUSHING, and Doug ruled its fix mid-session.** *"Identity only ever needs to go to the branch on identity with the repo name. We need to update the system to make that the standard push."* And: ***"This branch is always the object of record for `.claude` and the library branches there."***

**The branch library IS pushed** — identity commit `4825df4` on `inexplicable-phenomena` carries this sprint's records, both new Solutions chapters and this handoff, verified by reading them back off the branch. **The project CODE is committed nowhere**: 52 changed files and 8 new ones sit in the working copy.

**Why the tool fails, diagnosed rather than guessed.** [`06-on-sync--commit.sh`](../../../../.claude/library/..environmentalism/06-on-sync--commit.sh) step 1 pushes `.claude/` to the shared `dna-platform` branch and fails when a `/MIR` would lose work. Its final two flagged paths are the **project-root** `CLAUDE.md` and `.gitignore` — and `dna-platform:CLAUDE.md` is **byte-identical to `.claude/CLAUDE.md`**, because the identity root file is a copy of it while the project root file is the *projection* with `.claude/` prefixes. **The check compares two files the system is designed to keep different**, so the failure is an artifact and `RECONCILED=1` would force past a check that is measuring the wrong pair.

**Do not chase it the way this session first did.** Copying the org's root `CLAUDE.md` down to satisfy the comparison **broke 47 compiled links**, because the project root file must be regenerated, never copied:

```bash
sed 's|\](\(library/\)|\](.claude/\1|g; s|\](\(agents/\)|\](.claude/\1|g; s|\](\(rules/\)|\](.claude/\1|g; s|\](\(skills/\)|\](.claude/\1|g' \
    .claude/CLAUDE.md > CLAUDE.md
```

**The fix is Doug's ruling, and it is a real change: 29 references to `dna-platform` in that script, three steps collapsing to two.** It was raised rather than patched at a session's tail, because getting it wrong breaks how every project syncs.

## Verified — every gate this branch has, including the ones not run

*Named in full rather than selectively, because [the last omission of an unrun gate](../solutions/14-the-green-that-exercised-nothing.md) cost a sprint.*

| gate | result |
|---|---|
| chemistry suite + `tsc` | **674/674**, 61 files, `tsc` 0 |
| lib suite + `tsc` | **224/224**, 22 files, `tsc` 0 (from 203) |
| app typecheck (`.public`) | **65 files**, 4 baselined by identity, **0 unexpected** |
| `verify-book.mjs` | **exit 0, 51 checkpoints** (from 48) |
| `verify-demo.mjs` | **exit 0, 25 checkpoints** |
| chemistry Lab `verify-all.mjs` | **exit 0** |
| chemistry `verify-check.mjs`, `verify-section.mjs` | **NOT RUN** — they exist and were not exercised this session, as in the last two |
| chemistry Lab app typecheck | **NOT IN ANY GATE** — 18 pre-existing errors, unchanged |
| the word *markdown* in `lib/src` | **zero occurrences** |

**Chemistry was rebuilt before lib ran against it**, every time chemistry changed.

**Nothing is left deliberately broken.** Two probes were run and reverted — a class-identity guard in the walk, and heading absorption disabled — each confirmed restored by a fresh green in the same run.

## Wrong turns already taken — do not repeat

- **Do not skip whitespace pieces in the parse.** A space between two words is syntax, and dropping it squeezes the spaces out of what the letters give back. Only the **empty string** is debris.
- **Do not hoist a `/…/g` regex to module level.** It carries `lastIndex` between callers. [Filed](../solutions/17-the-regex-that-remembered-where-it-stopped.md).
- **Do not run `tsc -p tsconfig.json` from inside `app/`** — it typechecks nothing and exits 0. Use `node app/typecheck.mjs`.
- **Do not drive against a dev server that has outlived a file deletion.** It reports failures that do not exist. [Filed](../solutions/14-the-green-that-exercised-nothing.md).
- **Do not assert a corroboration where both sides come from one expression.** [Filed](../solutions/18-the-checkpoint-that-compared-a-number-to-itself.md).
- **Do not test `made.parent` for absence** when threading lineage — a composed part arrives as its own parent, so the test never fires.

## How to see it

```
cd library/.public/package && npx vite app --port 5199
```

**Open `/books` → The Manifold → the contents → any chapter → the chip marked `the model`.** Four altitude chips appear — *sections, paragraphs, sentences, words*. Switch between them: the **rows change and the word count does not**, because each altitude walks its own count down a different path. That line reads *"260 words · 11 read as paragraphs"* and, at word grade, *"260 words · 260 read as words."*

`/page` is the other demo. Both drivers run against 5199: `node app/verify-book.mjs`, `node app/verify-demo.mjs`.

## Read these four, and they are sufficient — shaped for the build brainstorm ahead

*A handoff into a **brainstorm** names the sources the designing reads, not the code the last session touched.*

1. **[Chapter zero's Sprint D and R53](00-planning.md#d--the-compilation)** — what the build must generate, and the mapping it must follow: property names identical, framework properties from `$Referent` up, a book-valued property typed to its reference, chapters as an array, any other reference collapsed to a book reference plus names.
2. **[The hand-built cards](../../.archive/app/src/sections/book/library/the-team/card.tsx)** — **load-bearing, and the actual specification.** Doug's method was that building them by hand tells you what the build must autogenerate; that list has never been extracted. Read it as a requirements document.
3. **[Sprint 48's R53](06-sprint-48--subjects-and-the-library.md#r53-the-card-is-a-compilation-defined-by-the-public-build-doug-2026-08-06)** — the card as a compilation, and why it cannot be a closed shape.
4. **[The sprint that planned what it had not designed](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md)** — the failure the build is most likely to repeat, because "the TypeScript compiler can read our source" is a feasibility case and not a mechanism.
