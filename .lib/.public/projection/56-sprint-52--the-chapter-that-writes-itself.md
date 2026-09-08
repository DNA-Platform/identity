# Sprint 52 — The Chapter That Writes Itself

- **author:** [Cathy](../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **state:** `requirements-only` — **SEVEN PROBLEMS, NO UNITS AND NO PROPOSED MEMBERS.** *Doug struck every member this chapter had proposed; the problems stand and the fixes are his to rule.*
- **opened:** 2026-09-08

---

> ***THE ASK, verbatim:*** **"I need you to start developing with what we want it to look like to write a chapter. I think it's: `MyChapter extends Cover { view() { <> <Stuff> </> } }`. It's a chapter with stuff. The Book needs to have chapters that have access to some of the stuff."** — *and the constraint that governs the whole plan:* **"If we can do this today, don't change anything."** *And then:* **"Maybe we can achieve that design today with a chapter registering itself. If so, leave our current design."**

## <a id="the-answer"></a>What the framework can do today — measured, five promises green, and REFUSED anyway

***The subclass half of the shape works completely, with no framework change at all.*** **`.tests/authoring.test.tsx`, 5 of 5:**

| written | what happens |
|---|---|
| ***`class $Masthead extends $Cover` whose bond constructor concats a Title, an Author and a Subject — NOTHING at the call site, just `<Masthead />`*** | **it is built; the book finds it as `book.cover`; `title()`, `author()` and `subject()` all answer; it draws.** |
| ***`class $EarlyLife extends $Chapter` whose bond constructor concats a Section*** | **`book.chapters` finds it, `searchFor($TypeOfSection)` answers 1, and the TABLE OF CONTENTS CATALOGUES IT.** |
| ***the same chapter with its stuff in `view()` instead*** | ***REFUSED AT CONSTRUCTION.*** *Not "draws but is invisible to the book" — it does not build.* **`$saysSomething`: "a piece of writing says something, and this one says nothing at all"**, raised one statement after the bond constructor ([`chemical.ts:297`](../../../chemistry/package/src/abstraction/chemical.ts)). |

***The MODEL half of the shape is therefore available today: a chapter is a SUBCLASS, its stuff is written IN THE CLASS, and nothing is written at the call site.*** *It needs no Document, no new level and no change to the seven.* **What is NOT available is a way to write it that anyone would accept** — *see [the rule this sprint produced](#ceremony).* ***"It works, measured" was the wrong fact to report, and the right one is that the system has no seam for this yet.***

## <a id="the-two-gates"></a>Two acceptance criteria, added by Doug mid-plan, and they govern every unit

> **"This feature isn't designed until it is performance tested and we prove it doesn't cause problems."**
> **"It has to pass an elegant code / elegant use test."**

***THE PERFORMANCE GATE IS BUILT AND ITS BASELINE IS TAKEN*** — **[`56-sprint-52--the-chapter-that-writes-itself--perf.mjs`](56-sprint-52--the-chapter-that-writes-itself--perf.mjs)**, *which installs its own probe, drives every page in a real browser, and removes the probe again on success or failure.* **It measures what no suite can see: how many times each chemical is DRAWN, how many times each bond constructor RUNS, how many reactions fire on a page nobody touched, and the milliseconds spent inside drawing.**

| page | chemicals | draws | each | bond runs each | reacts | ms drawing |
|---|---|---|---|---|---|---|
| **portal** | 673 | 2,019 | **3.00** | **2.00** | **0** | **447.7** |
| **article** | 788 | 2,364 | **3.00** | **2.00** | **0** | 369.9 |
| **turing** | 1,032 | 3,096 | **3.00** | **2.00** | **0** | 424.0 |

***And it found something on its first run that nobody was looking for:*** **the portal is the MOST expensive page and has the FEWEST chemicals** — *447.7ms over 673, against Turing's 424.0ms over 1,032.* **`$BookLink` alone is 98.1ms of it, and `$Block` is the costliest class on every page.** *Neither is this sprint's business; both are now on the record with a number.*

***The contract the gate holds, and raising a limit is a decision written down beside the number, never a quiet edit:*** **`drawsEach` limit 3.00 walking towards 1.00 · `bondRunsEach` limit 2.00 walking towards 1.00 · `reacts` 0 · refusals 0 · page errors 0.** *The first two are held above their target on purpose so the gate reports today's cost honestly instead of failing every run; the [chemistry team owns closing them](../../../chemistry/.lib/particle/12-the-three-passes.md).*

***A note on the gate itself, because it earned its keep by failing correctly.*** **Its first run reported "the probe never reported" and could not say why, which is not a gate.** *It now prints what the page said, and the very next run named the fault in one line — an import of `$Chemical` from `symbolic` where it lives in the root entry.*

## <a id="the-three-themes"></a>DOUG'S RULING, 2026-09-08 — three themes, and markdown is the default

> **"I think the mistake is that Wikipedia is too complex a style for the default framework… What if Github markdown was default. We still want to get wiki working, but maybe we should integrate markdown first."**
> **"Yes, book will have its own format classes, and article can perhaps be latex, encyclopedia can have its own book and components."**
> **"What if we make a default view where we integrate markdown and we use a markdown parser for a lot of things."**
> ***AND THEN, CORRECTING IT IN THE SAME BREATH:*** **"No, no markdown parser. I want to support markdown, but not IN markdown. I just want to add # and - and what not. We don't need the full thing. It doesn't help."**
> ***"Let me think very hard about how I want this to work."*** — **NOTHING IS BUILT AGAINST THIS. He is thinking; this records the ruling and the inventory, and stops.**

***THE STRONGEST ARGUMENT FOR IT IS NOT THAT WIKIPEDIA IS COMPLEX.*** **It is that the framework's own corpus is already GitHub-flavoured markdown** — *the team library, every `.lib` book, every sprint chapter including this one.* **That is the writing this framework exists to hold. Wikipedia is a skin; markdown is the native register.**

### <a id="not-a-parser"></a>NOT A PARSER — the look, not the source

***A markdown PARSER is struck before it was ever designed.*** **The framework does not read `.md` source and it is not going to.** *Authoring stays what it is — `<Heading>`, `<Paragraph>`, `<List>` — and what becomes markdown-shaped is the DRAWING.*

***"I just want to add # and - and what not. We don't need the full thing."*** **So the work is a handful of KINDS the model does not have yet, plus a GitHub-shaped format over the ones it does** — *not CommonMark, not a tokenizer, not an input path.*

**Present already, in `writing/`:** *`$Heading`, `$Paragraph`, `$List`, `$Table`, `$Illustration`, `$Section`, `$Summary`, `$Phrase` — and `$Ref` in `reference/` already carries `[text](url)`, which is how the table of contents is built today.*
**Missing, and it is short:** ***code — block and inline — blockquote, emphasis and strong, a rule, task lists.*** *All at paragraph level or below.*

***A DRAFT READING THAT WAS WRITTEN AND IS NOW WITHDRAWN, kept because the trap is reusable:*** **"a markdown parser is the framework's own parse one rung higher"** — *true as an observation about `parser.parse`, and it argued for a thing Doug had already decided against.* **An elegant connection is not a reason to build something.**

### <a id="what-the-folders-mean"></a>What the ruling does to the four folders — the inventory, today

| folder | today | what the ruling makes it |
|---|---|---|
| **`writing/`** | **17 files, all KINDS** — the seven levels plus Heading, Illustration, List, Table, Summary, Phrase, Type, Format, Theme, Annotation | *unchanged — the model, shared by every theme* |
| **`book/`** | **16 files, all KINDS, ZERO formats** | ***gains format classes it does not have*** — **the markdown default** |
| **`encyclopedia/`** | **16 files, all FORMATS, ZERO kinds** | ***gains kinds it does not have*** — "its own book and components" |
| **`article/`** | ***EMPTY*** | *LaTeX* |

***So the split today is KINDS-versus-FORMATS, and the ruling makes it THEME-versus-THEME.*** **That is a reframe of what those folders mean, not a move of files into them** — *and it is the first thing to be sure of, because `$Book` currently imports FIVE formats from `encyclopedia/` ([`Book.tsx:22-26`](../../package/src/book/Book.tsx)), which is the coupling Doug named as "you forgot to make Book a Book".*

### <a id="what-markdown-does-not-solve"></a>What it does NOT solve, recorded so it is not mistaken for a cure

**It removes the LAYOUT question outright** — *markdown has no grid, no named areas and no sidebar, so `_opening`, `_contents`, `_body`, `_closing`, `$at` and the four regions all become encyclopedia apparatus.* ***And it leaves the other two exactly where they are:***

- ***the ceremony*** — `$check(block, $Block).concat($check($TypeOfChapter, '!'))` is in every bond constructor whatever the page looks like;
- ***the cost*** — **`$Eval` 6,421 per page load and `$Block` 3,802** *come from that same idiom, not from the grid. The ~1900ms first paint is CONSTRUCTION, not layout.*

## <a id="ceremony"></a>THE RULE THIS SPRINT PRODUCED — ceremony is a diagnosis

> ***Doug, 2026-09-08, on being shown the shape that works:*** **"Write down that ceremony like that is never never never acceptable. I would never let something like that be so messy. The system doesn't support the feature yet clearly and redesign needs to happen. Take that solution as a sign that you need help and seek it out."**

***CEREMONY IS NOT A STYLE COMPLAINT TO BE WEIGHED AGAINST CORRECTNESS. IT IS EVIDENCE ABOUT THE SYSTEM.*** **When the only way to say a thing is to wrap it in scaffolding, the framework has no seam for that thing yet** — *and reporting "it works, measured" is then reporting the wrong fact.*

**The shape that provoked it, and it is kept here as the specimen:**

```tsx
class $EarlyLife extends $Chapter {
    $EarlyLife(block: $Block) {
        super.$Chapter($check(block, $Block).concat($(<Section><Heading>Early life</Heading>...</Section>)));
    }
}
```

***Six pieces between the author's intent and the content*** — *the bond method name repeated, the block threaded, `$check`, `super`, `concat`, `$()`.* **It is valid. It is fast. It is measured green. It is refused.**

**What follows, and it is three things:**

1. ***Count the pieces between an author's intent and their content.*** *More than one or two and the answer is not "it works" — it is that the system does not support this yet.*
2. ***Seek help rather than announce that you will.*** *This chapter's own answer was dispatched the same turn: three assessments of Doug's proposals and three independent redesigns of the authoring surface.*
3. ***A FEATURE IS NOT DESIGNED UNTIL IT PASSES BOTH GATES*** — **"This feature isn't designed until it is performance tested and we prove it doesn't cause problems"** *and* **"It has to pass an elegant code / elegant use test."** *[The performance gate is built](#the-two-gates). The elegance gate is a person reading it.*

***And the corollary Doug stated in the same breath, about this chapter's own earlier drafts:*** **"So many properties I don't consent to. What problems are they solving."** *When a design is unsettled the artefact is a numbered list of PROBLEMS with what each costs today — [as below](#the-problems) — and no proposed properties at all.*

## <a id="decisions"></a>Decisions, each with what it was chosen over

| | decision | over | rationale |
|---|---|---|---|
| **D1** | ***The bond constructor is the authoring seat, not `view()`.*** | *authoring in `view()`* | **`view()` is already the DRAWING** — `$Writing.view()` returns `$(this.reading())`. A member cannot be both the surface an author writes and the drawing of what they wrote without a circle. *And the bond constructor is already the composition seat by decision: [`chemical.ts:288`](../../../chemistry/package/src/abstraction/chemical.ts) — "a bond constructor is the chemical composing what it was handed" — and [`$Book.contents()`](../../package/src/book/Book.tsx#L95-L115) builds an entire `<TableOfContents>` inside one.* **Measured: the `view()` spelling does not build.** |
| **D2** | ***A chapter TELLS its book; the book stops reaching into chapters.*** *(the DIRECTION is decided; the member is not, and none is proposed)* | *the book pulling with `searchFor`* | **Doug: "Maybe the chapters set things on their book… the collections are not reactive by design."** *Measured feasible: `.tests/registration.test.tsx`, 4 green — every chapter bonds before its book, the book bonds LAST, and each chapter reaches its book from inside its own bond constructor.* **Today [`Book.tsx:101-104`](../../package/src/book/Book.tsx) reaches THREE levels into every chapter — `searchFor($TypeOfSection)` → `searchForOne($TypeOfHeading)` → `html.text` — to build its own contents.** |
| **D3** | ***The collections must not be reactive, and this is mandatory rather than tidy.*** | *ordinary members* | **[`chemical.ts:288`](../../../chemistry/package/src/abstraction/chemical.ts) in its own words: "A chemical's own construction is not news… Writes to OTHER chemicals still react."** *A reactive collection has every chapter wake the book while the book is being built.* **The shipping precedent is `@inert() mention` on [`Writing.tsx:31`](../../package/src/writing/Writing.tsx), written by `$Section`'s bond onto each paragraph it holds.** |
| **D4** | ***Document is PARKED, not struck.*** | *building the six now* | **Doug: "Maybe we don't need document."** *The [design is written](#the-document-design-parked) and stands if it is wanted; nothing here needs it.* |
| **D5** | ***`format()` composes; it is not overridden per kind.*** | *a `format()` override per kind* | **[`Reflection.formatted`](../../package/src/utilities/Reflection.tsx#L94-L96) REDUCES over every type a writing carries**, so format is many-to-one by construction and a subclass override REPLACES where the mechanism was built to stack. *An earlier draft of this chapter got this wrong from a sample of one; the correction is [below](#format-composes).* |

### <a id="the-problems"></a>The problems, stated as problems — no member is proposed for any of them

***Doug, 2026-09-08:*** **"Delete said. So many properties I don't consent to. What problems are they solving. Ask me how I'd fix."** *Every member this chapter had proposed is deleted. What follows is the list of problems, each with what it costs today and how it is known, and nothing else.*

| | the problem | what it costs today, measured or cited |
|---|---|---|
| **P1** | ***A chapter cannot say what it says without ceremony.*** | *To write a chapter as a subclass with nothing at the call site, the author writes a bond constructor that repeats its own name, threads a block, `$check`s it, calls `super`, `concat`s and `$()`s the content.* **Six pieces of ceremony around the content.** *It works — `.tests/authoring.test.tsx`, 5 green — and it fails the elegance test.* |
| **P2** | ***The book reaches three levels into every chapter to build its contents.*** | [`Book.tsx:101-104`](../../package/src/book/Book.tsx) — *`chapter.searchFor($TypeOfSection)` then `searchForOne($TypeOfHeading)` then `html.text(...)` then `part.$indent`.* **The book knows what a chapter is made of.** |
| **P3** | ***The book can only find chapters that are its own direct children.*** | [`Book.tsx:50-53`](../../package/src/book/Book.tsx) *is a ONE-LEVEL `searchFor` over `_block`.* **A chapter inside a part is invisible to it** — *[Sprint 51's U5](55-sprint-51--the-article-that-is-a-part.md).* |
| **P4** | ***The book slices its own block into four regions.*** | *`_opening`, `_contents`, `_body`, `_closing` on [`Book.tsx:40-43`](../../package/src/book/Book.tsx) exist because [`$BodyFormat`](../../package/src/encyclopedia/BodyFormat.tsx) is a named-area grid and `> .pd-book { display: contents }` makes the book's four children the four grid items.* **Doug: "I need this to be feasible without any of that."** |
| **P5** | ***A footer is not part of a book, and a book has one.*** | *`$Book.footer` ([`:65`](../../package/src/book/Book.tsx)), `_closing` ([`:66`](../../package/src/book/Book.tsx)), `$endsWithFooter` ([`:163`](../../package/src/book/Book.tsx) — **already approved for striking**), and the whole of [`src/book/Footer.tsx`](../../package/src/book/Footer.tsx).* **The demo needs one, in `.article` and in `alan-turing/.margin.tsx`.** *And `src/article/` exists and is EMPTY.* |
| **P6** | ***A `<Title/>` written inside a `<Section>` is deleted.*** | [`Composition.tsx:31`](../../package/src/writing/Composition.tsx) *asks `instanceOf` where it means "my own kind".* **`.tests/title.test.tsx:27` red; it fires in exactly one place in `src`, `.tests` and both `.wiki` trees.** |
| **P7** | ***Every chemical draws three times and every bond constructor runs twice.*** | *Measured by the gate above on all three pages.* **Chemistry's, not this sprint's** — *[The Three Passes](../../../chemistry/.lib/particle/12-the-three-passes.md).* |

***Nothing below P7 is designed. The next act is Doug's ruling on how each is fixed, and no unit is written until he has given it.***

## <a id="risks"></a>Risks, and what mitigates each

| | risk | mitigation |
|---|---|---|
| **1** | ***A chapter registering with its book writes a member of ANOTHER chemical from inside a bond constructor — the one case the `$rendering$` guard does NOT cover.*** *[`bond.ts:225`](../../../chemistry/package/src/abstraction/bond.ts) tests the WRITTEN chemical, and the book is not the one rendering.* | **the collection is non-reactive (D3), and the promise that holds it is a `react()` count of ZERO on all three pages** — not a passing suite, a measured count |
| **2** | ***`this.book` is a recursive parent walk*** ([`Writing.tsx:39-42`](../../package/src/writing/Writing.tsx)) *and it guards only the self-loop, never a two-cycle* | *nothing measured so far creates a parent cycle; a chapter built alone, with no book, must register with nothing and not raise* |
| **3** | ***Registration order is written order today and nothing states it*** | *a promise that three flat chapters register in written order — scenario U2(1) — so a later change that reorders them fails loudly* |
| **4** | ***`$Book.chapters` currently EXCLUDES the cover, synopsis, table, index and footer by identity*** ([`Book.tsx:50-53`](../../package/src/book/Book.tsx)). *Registration must not quietly re-admit them.* | *the demo's own page is the gate: `/turing` draws 33 contents entries, and a re-admitted cover would show* |
| **5** | ***Two of these units touch `src/book/Book.tsx`, whose bond constructor is the most load-bearing in the package*** | *U2 and U3 are sequenced, not parallel; and every `src` change waits on Doug's explicit yes* |

## <a id="format-composes"></a>Format COMPOSES — a correction carried forward

> ***Doug, 2026-09-08:*** **"this assumes 1-to-1 format so it breaks multiple format — I never made this decision."**

**[`Reflection.formatted`](../../package/src/utilities/Reflection.tsx#L94-L96) reduces over every type a writing carries**, *so a writing carrying two types is formatted twice, one wrapping the other.* ***Format is many-to-one by construction, and a subclass overriding `format()` REPLACES its parent's rather than composing with it.*** **The seam is the BLOCK — [`addType`](../../package/src/writing/Writing.tsx#L90-L92) writes another type in, and each type formats.**

***And the reason an earlier draft said otherwise is a process fault worth keeping.*** **`$TypeOfChapter.format()` being the only `format()` override in the package is a FACT; "therefore overriding `format()` is how kinds format" is an INFERENCE from a sample of one, presented as design.** *Nobody decided it. It is the only one written so far.* ***The rule that follows: when existing code is cited as precedent, say which it is — DECIDED (point to the ruling), ENFORCED (a test or `$check` holds it), or JUST THERE.***

## <a id="the-document-design-parked"></a>The Document design — parked, not struck

> **Doug ruled it, then parked it: "I like Document at top of 6, Chapter and Book are special types of document" — and later, "Maybe we don't need document."**

***It is kept here because the FINDING under it is true whether or not Document is built.*** **The type lattice does two jobs with one hierarchy:** *`$TypeOfTitle extends $TypeOfSection` says "a title stands at section level", and every reader that walks the chain hears "a title IS a section".* **Measured: `reflection.composition()` reports 26 of the 40 `$Type` classes as composition LEVELS when only 7 are**, *because [`names()`](../../package/src/utilities/Reflection.tsx) walks the whole constructor chain and matches "Section" three links up.*

***And the wall any six would hit:*** **a `$Type.below()` chain CANNOT express a level that holds itself.** *[`Reflection.beneath`](../../package/src/utilities/Reflection.tsx#L74-L81) walks `below()` and exits only when it runs out, so a self-pointing level spins forever — and `$composesWhatItHolds` calls `beneath` on every composed part of every writing.* **Doug's own answer was the move: "Composition maybe can do this if type changes? Can it be done there in place of Type?"** — ***`$Type` says what KIND, `$Composition` says what LEVEL and what it may HOLD***, *because the class hierarchy carries no termination requirement.*

***The one live symptom, still red on purpose:*** **`.tests/title.test.tsx:27`** — *a `<Title/>` written inside a `<Section>` is dissolved by [`Composition.tsx:31`](../../package/src/writing/Composition.tsx), because the dissolve asks `instanceOf` where it means "my own kind".* **It fires in exactly ONE place in `src`, `.tests` and both `.wiki` trees: that test.** *Doug declined the general predicate — "the dissolved title is the requirement… the generalization is a note, not a spec" — and declined the `$Title.parts()` override too, on the ground that it patches a conflation rather than fixing the lattice.* ***So it stands red, named, and owed to whichever sprint takes the lattice.***
