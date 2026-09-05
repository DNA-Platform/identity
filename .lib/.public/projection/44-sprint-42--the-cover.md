# Sprint 42 — The Cover

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **status:** `built` — brainstormed with Doug 2026-09-04, every requirement ruled by him live, built the same session. ***Every name is a proxy.***
- **workflow:** [feature](../../../../.claude/library/..teamsmanship/19-workflows.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md)

---

**A cover is, at minimum, a title, an author and a subject — and the sprint makes that a rule the build enforces.** The cards stay types of reference, as Doug ruled; a cover keeps its own type because the class's own type now leads the canonical choice; the chapter kinds go flat, keeping their hierarchy in the type classes and taking their dress by composition; and `$TypeOfCover.specifically` assigns the cards against an interface, so a writing that merely CARRIES the cover type is given them. **The sprint's second half is [the conventions pass](#the-conventions-pass) Doug ordered mid-session.**

# <a id="the-ask"></a>What Doug asked for, verbatim

> "Let's think about Cover. A cover it, at minimum, a title, an author and a subject. Those can all be validated in the bomd constructor using specifically rules. Catch up on those and implement that. Write the specification"

> "We can also give a book a cover property. It will always be its first chapter. Remember the type system. You have to be careful to not use instanceof and instead user type of chapter as the thing to check. Reflection utilitiy is probably the thing to help you with this. We will be creatng the type of cover, $Cover > $Writing, cover will have properties like the title and author and subject"

> "The book must have a cover too. It must be the first chapter in the book"

> "Yes change the code. It's the types that inherit. Cover and all chapter subclasses should inherit from writing and specifically should be doing the specifying mostly. This should be true for all chapter types"

> "So a cover carrying a title has two types - sure but only one of them will be like the 7. You need to fix that"

> "One type is a paragraph. I see the problem though. What if IndexCard was an annotation that isn't a type. Does that help?" · "Maybe we move specifically to annotation?"

> "Yea, on writing, specifically has to be run for all annotations now"

> "Title is not out"

**On the title:** *"Refer. We will emit the right class for each book as part of the binder."* **On placement:** *"It's in the cover. There is no Corpus. Title is the first block of the cover, but we need to have an author and subject in there enforced by specifically."*

# <a id="grounding"></a>What the reading established, and what it corrected

*Every line was read or run in the working copy this session. `read` = verified by reading the source; `probe` = verified by running it.*

## The defect, proved before anything was designed

A cover written with the three cards **stopped being a cover**. `cover.type` came back `$Title`; `cover.type instanceof $TypeOfCover` was `false`; the same cover with no cards answered `$TypeOfCover` and specified clean. `probe`

The mechanism was one line. `$Writing.$Writing` picks the canonical type as `candidates.find(one => reflection.level(one)) ?? candidates[0]`, with the class's own type placed **last**; `reflection.level` asks only the type's own name, and `'Cover'` is not one of the seven. So no candidate was a level and the first thing *written into* the cover won. `read`

***Two fixes were tried and the first was wrong.*** Making a card an annotation rather than a type dissolved the contest — but Doug ruled it back (*"I see no reason to make an index card a reference card. It can just be a type of reference"*), and [the browser proved him right independently](#what-the-browser-found-that-519-tests-could-not): the bond chain broke and a cover drew an error panel. ***The standing fix is the candidate order*** — the class's own type leads, so a cover carrying cards stays a cover and a sentence wearing the table trait still composes words.

## Title was not out of reflection, and the first claim about it was too narrow

The string `Title` appears nowhere in the machinery — only its own file, the export line, and a fixture named `DerivedTitle`. **That was reported as "Title is out", and Doug corrected it: `$Title` *was* a `$Type`, so it landed in `writing.types` and reflection saw it on every writing that carried one** — in the canonical choice, in `classNames`, in `reflection.is`. The grep answered about the spelling; the question was about the class.

## Heading is the section's name, in both places

`$opensWithHeading` fails a section that opens without one, and `$Section.name` answers the opening only when `reflection.is(opening, $TypeOfHeading)`. `read` **The switch from Title to Heading had already landed in Sprint 41; there was no huge problem there.**

## The card's specification was landing on its host

`$Title.specifically(cover)` ran `ReferenceSpecification` against the **cover**, demanding the cover carry a path — because `$IndexCard extends $TypeOfReference`. `probe` This is the wrong turn Sprint 41 already recorded: *choosing by inheritance instead of by meaning.* **Dissolved by the same change** — a card is no longer a type and no longer specifies its host by accident.

## The type pattern is uniform, and the cover follows it

**Only the seven levels extend `$Type` directly** — Book, Chapter, Section, Paragraph, Sentence, Word, Letter. **Every kind extends its level's type**: Heading, List and Cell from `$TypeOfParagraph`; Phrase from `$TypeOfSentence`; Table and References from `$TypeOfSection`; Cover, Synopsis, TableOfContents and Index from `$TypeOfChapter`. `read` That inheritance is load-bearing: `reflection.names($TypeOfCover)` reads `['Cover', 'Chapter']`, which is what makes the book find the cover as a part.

## The wiki application does not run, and it did not run before this sprint

***Proved by stashing every change back to `main` and driving the same two routes: identical blank page, identical error.*** `probe`

> `Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform.`

**The Lab renders because it only ever decorates METHODS** — every `@look` in [the Lab's own figures](../../../chemistry/package/app/src/sections/formula/figures.tsx) sits on `view()` or `$view()`. **`@dna-platform/public` decorates class PROPERTIES** — `@select('td, th') padding = '0.2em 0.4em'` and a dozen more across the encyclopedia dresses. `read`

**The wiki application is the only application that loads `public`**, and its [vite config](../../.wiki/app/vite.config.ts) carries `@babel/plugin-proposal-decorators` with **no class-properties transform after it** — which is precisely the pairing Babel's legacy decorators require. The Lab's config carries the same comment about decorators reaching the browser through Babel rather than through `tsconfig`, and it was written before any property decorator existed to catch it.

***The fix is two lines of application config plus one devDependency*** — `@babel/plugin-transform-class-properties` with `loose: true`, listed after the decorators plugin. **Neither the plugin nor its predecessor resolves anywhere in the tree today.** `probe`

## The resolve rule cannot be generalized, and the CHECK is why

Generalizing `$typesResolve` from types to annotations was tried and **reverted the same hour**. [`binding/specify.ts`](../../binding/specify.ts) imports each book and calls `book.specify()` with **no render**, and a formula only resolves inside a drawing — so every book carrying a title would have failed the CHECK. **The failure-by-name stays where it already works: the formula machinery, at render.** `read`

# <a id="requirements"></a>Requirements

<a id="r1"></a>**R1 · Doug.** ***A cover is, at minimum, a title, an author and a subject.*** All three sit in the cover's own block, and **the title is its first block**. **Observed:** `cover.title`, `cover.author` and `cover.subject` answer the cards written into it.

<a id="r2"></a>**R2 · Doug.** ***The three are assigned in the bond constructor***, never as field initializers — a field initializer points every instance at the template (Sprint 41's measurement). **Observed:** each instance answers its own cards.

<a id="r3"></a>**R3 · Doug.** ***`specifically` does the specifying.*** Four named rules, each failing in its own sentence so the CHECK says which book and which card: *a cover carries its title* · *a cover opens with its title* · *a cover carries its author* · *a cover carries its subject*.

<a id="r4"></a>**R4 · Doug, REVISED BY HIM MID-SPRINT.** ***A card is a type of reference.*** `$IndexCard` descends from `$TypeOfReference`, as it always did — the attempt to make it an annotation, and then a reference card, was reversed on his word and by a render crash. **Observed by differential:** a cover carrying all three answers `$TypeOfCover` and carries three types — *before the candidate order was fixed it answered `$Title`*.

<a id="r5"></a>**R5 · Doug.** ***`specifically` runs for every annotation***, not only for types — `$Writing.specify()` iterates `[this.type, ...this.annotations]`, deduped by constructor. **`specification` and `specifically` sit on `$Annotation`**, so anything a writing carries can speak about its host.

<a id="r6"></a>**R6 · Doug.** ***A book must have a cover, and it is the first chapter.*** `$Book.cover` answers a `$Cover`, found by type. **Observed:** a book that opens with anything else fails — *a book opens with its cover, and this one does not*.

<a id="r7"></a>**R7 · Doug.** ***The chapter kinds inherit from writing; only the types inherit from each other.*** `$Cover`, `$Synopsis`, `$TableOfContents` and `$Index` become siblings of `$Chapter` under `$Composition`, while `$TypeOfCover` and the rest keep extending `$TypeOfChapter`. **Observed:** the shells inherit nothing from `$Chapter`, and `reflection.is(cover, $TypeOfChapter)` still answers true.

<a id="r8"></a>**R8 · derived.** ***An annotation is carried, never written.*** `Parser.tokens` filtered on `parenthetical` alone, so `$Title` and `$Author` — annotations that *print* — were swept into a synthesized section. **Observed:** the cards are excluded from `parts()` while still drawing.

# <a id="built"></a>BUILT — 2026-09-04

***Gates at close: lib `tsc` 0 · 25 files · 546/546, up from 543. The binder CHECK stands at 0/4 by design — see [Where things stand](#where-things-stand).***

**The cards are annotations.** `$IndexCard extends $Annotation`. `resolve`, `formula` and `[cache]` all live on `$Chemical`, not on `$Type`, so **a card keeps the whole formula machinery** and loses only the reference specification that was landing on its host.

**`specifically` seats on `$Annotation`**, with an empty base `Specification`; `$Type` overrides the specification with `TypedSpecification` and nothing else. `$Writing.specify()` iterates `[this.type, ...this.annotations]`, deduped by constructor.

**`$Cover` carries the three and is a `$Composition`.** The cards are read out of `this.annotations` in the bond constructor. `CoverSpecification extends ChapterSpecification` with four rules, and it **overrides `$writtenAsSections`** so a carried card is not mistaken for something written.

**`$Book.cover` is typed and found by type.** `reflection.is(opening, $TypeOfCover)`, and `$opensWithCover` fails a book that opens with anything else.

**The parser separates two flags that were riding one.** `annotation` decides whether something is a part; `parenthetical` decides whether it prints. Before this, a printing annotation became a part.

**Fixtures repaired, not papered over.** A `cover()` helper was **added** to `written.tsx` — the shared `chain` fixture was left alone, per Sprint 41's recorded wrong turn — and the two book `.spec` examples and the Cover example gained covers written as canonical prose.

# <a id="raised"></a>Raised rather than hidden

***`$Book.cover` carries a cast the check does not prove.*** `reflection.is(opening, $TypeOfCover)` verifies the **type**; the cast asserts the **class**. A `$Writing` annotated `<Type>Cover</Type>` would pass the check and not be a `$Cover`. This is the standing tension between *use types, not instanceof* and TypeScript's narrowing, and `synopsis`/`tableOfContents` inherit it the moment they convert.

***`reflection.level` still asks only the type's own name while `reflection.below` asks the whole chain.*** The cover no longer trips it, so it was left alone — but it is a latent disagreement between two neighbouring lines.

***The chapter kinds lost `$Chapter.frame()`***, which wrapped them in `<Article><Output>`. The suite is green and nothing asserted that DOM, so **the change is unmeasured in a browser.**

# <a id="names"></a>Every name here is a proxy

`$Cover$` · `cover()` the fixture · the four rule sentences · `$opensWithCover`. **Doug names framework things.**

# <a id="the-compiler"></a>The compiler generates the cards — Doug's ruling, built

*His words: "it will render because we're going to generate all of those cards in the compiler. If you were going to create a library by hand, then you would write them yourself."*

**The four covers in the wiki library were rewritten** — title, author and subject in the cover's own block, and the section it holds opens with a `Heading` rather than the `Title` that used to stand there. **`read.ts` reads the three off the cover's source**, the way it already reads the export declaration, and raises a diagnostic per missing card. **`emit.ts` declares one class per card** into the book's own generated module:

```tsx
class $TitleOfChemistry extends $Title {
    constructor() {
        super();
        this[cache]("Chemistry");
    }
}

export const TitleOfChemistry = $($TitleOfChemistry);
```

***`$Title` declares `formula = 'new'`, so the generated class files into `$Title`'s own catalogue and `<Title>Chemistry</Title>` resolves to it*** — while a misspelling still throws by name. `read`

**One trap in running it:** `emit` sweeps files nothing in the library writes, and `cards.ts`, `specify.test.tsx` and `vitest.config.ts` live in the emitted folder without being emitted. **Running `emit.ts` deletes all three.** They were restored from git; the interaction is older than this sprint and is not fixed here.

# <a id="the-conventions-pass"></a>THE CONVENTIONS PASS — the sprint's second half, on Doug's order

*His words: "Never use one. Review the public code (all but the tests folder) and remove one from everywhere... No using empty names. No naming the result of an action. Name for data not for result." And then: "read every file and as you go, do the audit I gave you and fix everything."*

## The names

***`one` is gone from `src`: 290 occurrences to zero.*** Renamed to what the data IS — `part` for an element of a block, and `type`, `reference`, `word`, `node`, `chapter`, `element` where the class named itself.

***And the result-names with it***, which was the deeper half: `held` to `referent` or `tokens` depending on which it was; `inside` to `parts`; `landed` to `writing`; `found` to `rules` and `names`; `worn` to `carried`; `made` to `bare`; `ran` to `kinds`; `accepted` to `part`; `target` to `path` and `referent`; `raised` to `error`; `it` to `part`.

**Thirty-five lines over 125 characters, to zero.** No comments in `src`. No `$` on a variable.

***Three repairs fell out of the reading rather than the measuring.*** `Parser` had its private fields after its public one, the opposite of the field order. Its memo read into a variable that had no name for the data; it asks the map directly now. And **the dead branch in `Catalogue.parts()` is live** — it read `reference`, the imported component const, where it meant the mapped part, so a reference was being wrapped inside another reference.

## The type pattern, and why the shells go flat

***Doug's reason, which turned a style rule into the point:*** *"Let's say someone wants to do a massive overhaul and subclass writing... If everything subclasses writing then the next thing, then the next thing, they can't do it. WRiting > Chapter > Cover. Then Writing > NewWriting > ... So instead we have a type system and a specification."*

**So the hierarchy lives in the types and the shells stay flat**, and `specifically` is the seat that hands the meaning over: *"We want specifically to do as much as we can so nothing needs to be reimplemented. The consumer can just wrap types."*

***`$Cover` is the worked example.*** `$Cover$` names the three members that already existed, `$TypeOfCover.specifically` assigns them, and the shell holds fields and nothing else. **A writing that merely CARRIES the cover type is given its cards.** No public member was invented — only a type override, an interface, and rules on a specification.

***Three shells that subclassed a kind now sit on a level:*** `$Bookmark` and `$PageFold` on `$Reference` rather than `$$Chapter`, `$References` on `$Composition` rather than `$Section`. In all three the type already carried the meaning.

***Three `specifically` signatures named a class*** — `$TypeOfBookmark`, `$TypeOfPageFold`, `$TypeOfReference` — which fails a consumer's writing at the one seat meant to serve it. All three take `$Writing` now.

## The canonical-type defect, and the fix that was wrong first

A cover carrying its title **stopped being a cover**: `cover.type` answered `$Title`. `probe`

***The first fix was wrong and one test convicted it.*** Making `reflection.level` ask the whole name chain let a carried kind outrank the class's own level, and *a sentence wearing the table trait* began composing paragraphs instead of words. **`find(level)` is meant to prefer a type that names a level EXACTLY.**

***The fault was the order.*** `candidates = [...carried, this.type]` put the class's own type last, so with no level among them the first thing WRITTEN INTO the writing won. It leads now — `[this.type, ...carried]` — and both cases hold.

## Composition carries the dress

***When the four chapter kinds flattened off `$Chapter` they lost its `frame()`*** and drew a bare `pd-` div instead of `<Article><Output>`. **Cover, Synopsis and TableOfContents each frame a `<Chapter>` through `$` now** — the dress arrives by composition and a scope can stand a different chapter in. `$Index` is left out: it is parenthetical and would emit an empty article in every book.

## What the browser found that 519 tests could not

***A cover did not render. It drew an error panel.*** `$Chemistry: Bond Constructor Failed — $Title did not call $ReferenceCard, $Reference.` **Making `$IndexCard` a `$ReferenceCard` had broken the bond chain, and the suite was green over a cover that could not draw.** Doug had already ruled the change wrong on design grounds; the browser proved it independently.

**And then `look="0"` on a div** — a framework prop rendered as an html attribute, [Solutions 47](../solutions/47-the-attribute-that-reached-the-page.md). Fixed in chemistry: the framework's `$`-prop set moved to `symbols.ts` and both seats that strip a `$` now consult it.

**The fix looked wrong for twenty minutes** because lib resolves chemistry through the symlink to `dist/chemistry.cjs` — [Solutions 05's fourth appearance](../solutions/05-the-suite-that-passed-against-a-stale-build.md).

## Removed on his word

***`$References` and `$Card` are gone, and `$Index` is a shell like `$TableOfContents`.*** Doug: *"This is the book chapters sprint. We didn't get to it. So why is it implemented? It's not. I'd rather start over."* **Twenty-seven tests went with the subsystem** — the citation stack, the recollection, the index's content, `focus()`'s append. `git` holds all of it.

# <a id="where-things-stand"></a>WHERE THINGS STAND

## The next action

***Rule the three holds below, then start the book chapters sprint properly — synopsis, table of contents, then the index.*** Doug's own order, and his note on the last: *"It might be the place where we render all of the subjects and titles."*

## The state, once

**GREEN IN BOTH PACKAGES.** lib `tsc` 0 · 25 files · **519/519**. chemistry `tsc` 0 · 68 files · **848/848**.

**COMPLETE — the cover, the conventions pass, and one chemistry defect.** Everything under [BUILT](#built), [the compiler](#the-compiler) and [the conventions pass](#the-conventions-pass).

***NOTHING IS COMMITTED — 63 files, 48 of them across the two `src` trees.***

## The three holds, each a change to Doug's design that must not stand silently

1. ***The cards are `resolve = false`.*** He ruled that a title **refers**. With them resolving, **every book fails specification**: `$typesResolve` reads a symbol only a *draw* sets, and the binder's CHECK never draws. One flag in three files, reversible the moment the compiler registers the names.
2. ***`$IndexCard` is a type of reference, as he ruled*** — not a reference card. The two-types defect it used to cause is handled at the candidate order instead.
3. ***`$Index` is an empty shell*** and the book still injects one, so *a book ends with its index* holds over something that says nothing.

## Owed

- ***The cards still have no writing half.*** No `$Title` class, no `$Title$`, no `TitleSpecification` — **blocked on the name**: `$Title` is spent on the type. Renaming the types to `$TypeOfTitle` opens the whole four-part word and dissolves both remaining casts.
- **Two casts**, both the same fault: `opening as $Cover` in `$Book.cover`, `means as $$Book` on the card. Each asserts a **class** where the check verified a **type**.
- **A cover prints `A bookDougScience`** — title and author draw raw and unspaced above the section. A cover should show its title; what dress is the book chapters sprint's question.
- **Seven kinds have no `.spec` example** — Cell, IndexCard, CatalogueCard, Title, Subject, Author, Catalogue.
- **`<Link>` cannot pass through `$`.** `$(link)` hands back a chemistry surface and `to` is lost, so a third-party component with required props is outside the DI surface as it stands.
- **A roster in chemistry's types.** `K extends '$parent' | '$view' ? never` is written twice where `looks` already states the pattern three files away.
- **The wiki application still does not run**, and did not before this sprint: `public` decorates class properties, the Lab only ever decorated methods, and the app's babel config has no class-properties transform after its decorators plugin. One devDependency and two lines.

## Wrong turns, so they are not retried

- ***Do not make `$IndexCard` a `$ReferenceCard`.*** The bond chain breaks and a cover renders an error panel — invisible to a suite that never draws one.
- ***Do not fix the canonical-type defect in `reflection.level`.*** Asking the name chain breaks the table trait; the fault is the candidate order.
- ***Do not move `$pid` or `persist` out of a bond constructor.*** Hydration reads them before `specify` runs; six promises said so.
- ***Do not move `$Letter.build()` into `specifically`.*** `canonical` reads `kind` immediately; five promises said so.
- ***Do not trust a lib run about a chemistry change.*** lib resolves `dist/chemistry.cjs`; rebuild chemistry first.
- ***Do not generalize `$typesResolve` to annotations.*** The CHECK never renders, so nothing can be resolved when it runs.
