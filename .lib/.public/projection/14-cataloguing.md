# Cataloguing

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*Opened 2026-08-12 as a brainstorm, planned the same day, built and driven. **Status: CLOSED**, and compacted at compounding.*

*Doug's subject, in his words: **"Figuring out cataloguing books can be the subject of this sprint. And the next sprint can be about the build."** That order is deliberate — the build compiles what cataloguing turns out to be, so deciding the build first would be [the substitution filed against Sprint 48](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md) a second time.*

*Sprints are **named, not numbered**; the title is the implementer's and stands for correction. **Cataloguing** is proposed because every requirement below is about what it means for one book to hold an account of another. **Sprint 47 already took *The Catalogue***, which is why this one does not.*

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

## How this sprint came to be

It was not the plan. [The Parse's handoff](13-the-parse.md#-next-two-things-and-the-first-is-small) named the `.public` build as next, and the design session opened on something much smaller — a type the implementer had written and Doug did not like.

**The whole sprint came out of that one objection.** Asked about `Carried<V>` — the conditional type standing in for the card's transform — Doug said: ***"What could that possibly mean and can we work around it? It certainly doesn't have the semantics of the framework."*** Pulling on it reached the card, then the catalogue, then what a catalogue *is*, and by the end the build had a sprint in front of it.

## Rulings from the design session — 2026-08-12, verbatim

Recorded because each one turned the design, and four of them corrected the implementer.

- **On the type that started it.** *"Well don't like that `Carried<V>` type. What could that possibly mean and can we work around it? It certainly doesn't have the semantics of the framework."*

- **And its replacement.** *"The library card itself was meant to be the transform type, why can't all the mappings be done on it as a computed type? **Make it a long computed type.**"*

- **On catalogues, which opened the sprint.** *"The catalogue should be represented by books. And we might need to explore having Book implement `$Catalogue$` of Book and not feel that the library catalogue has to implement anything."*

- **On what a book is, at the top of the design:** *"The `$Book` should be the fixed book where it is a catalogue for other books. Then the dynamic part of the framework takes over. After that, we'll have code in the book serve to validate other parts of the library."*

- **On the synopsis, which is the sprint's spine:** *"I think I am imagining first that **chapters should point to their book**, and that **a synopsis is a chapter that points to another book**."*

- **And why the pointing must be carried:** *"Perhaps synopses need to have a reference to what book they are a synopsis of **that it carries with it**, so that we can render the same synopsis twice in two places."*

- **What a synopsis is for:** *"A synopsis is like a chapter that **bridges a book with the subject that catalogues it**."*

- **On canonicality, which is what makes other catalogues possible:** *"A book should be able to include synopses that aren't the canonical synopsis of a book. So that non-canonical subjects and other forms of book catalogues can be invented as well."*

- **On the library catalogue, which may not survive:** *"Library catalogue doesn't even need to be writing. It isn't a catalogue in that sense. Maybe we don't need it at all, and we just have a card catalogue, and that itself doesn't even need to implement the catalogue type."*

- **And the split that governs the whole model:** ***"I want catalogues to be within the library as a type of writing, and the card catalogue is an abstraction to help us hold cards."***

- **On the same synopsis in two places:** *"One chemical, one class, with two instances — the same component gets rendered in two places."*

- **On where it lives:** *"Well it has to be rendered in the book. A reference to the synopsis can live on the card. Perhaps references to all the chapters live on the card to solve that problem."*

- **On what that reference is:** *"A reference to one. What do we have on the table of contents? Maybe we can lift those for the chapters to put on the card."*

- **On a name:** *"Row is a bad name for what that thing is. How about `$$Chapter`?"* — [held open at plan time and answered](#open-at-plan-time-and-how-each-closed).

- **On the reader, which is the reason any of this matters:** *"The library card is the reference, and it renders the synopsis for a chapter and the table of contents renders that synopsis inside itself… **The point is that the synopsis of another book rendered in a new one is a way for someone to learn about a book in such a way that they might read it.** And we have a title, tagline, and summary too for the table of contents of the cataloguing book."*

- **The correction that shrank the card back to its job:** *"I don't know what you think the card does, but **there is a build system which puts together the books**. The card helps with **book references** and perhaps that is the thing on the synopsis — the card for the book — but **the build system will put the synopsis in the book**."*

- **On the demo:** *"The demo is going to need to be the refactoring so that **the shelf is structured correctly**. We will assemble it right as this part of the work."*

- **On the collision, and its resolution:** *"I think we also have to have a book as a catalogue of books might make it hard to make it a catalogue of chapters. [Take] the table of contents is the document that is the catalogue of chapters if we can't have both. **That makes a book a pretty special sort of document.**"*

## Four corrections the implementer took, recorded because each was a real error

1. **`Carried<V>` was defended as proving the mapping.** It proves nothing the hand-written class does not already satisfy, and its catch-all arm cannot tell *compresses to a string* from *no rule for this*.
2. **The card was inflated into a delivery mechanism** — first holding the synopsis's declaration, then its component. Doug's correction: the card helps with **book references**; the **build** places the synopsis.
3. **`$Book implements $Catalogue$<$Book>` was reported as impossible.** It is impossible *given today's `$Chapter`*; under [the requirements that are now law](#the-requirements-that-are-now-law) it is not. The implementer read a constraint as a law.
4. **A menu was put to Doug with all three options wrong** — one object, two objects, or both — when the answer was one class with two instances. *A question whose options are all wrong is worse than no question* ([filed before](08-the-author.md#wrong-turns-already-taken--do-not-repeat-these)).

## What was read — verified 2026-08-12

Each claim was checked against the source. Where a claim is reasoned rather than run, it says so.

- **`$Catalogue$` is two interfaces at once** — [`$Composition$<$Reference$<T>>` and `$Reference$<$Composition$<T>>`](../../package/src/reference/Catalogue.tsx), plus `follow()`. The catalogue equation, carved in Sprint 47.
- **The reference half is free for a book.** `$Book` has neither `read()` nor `then()`, so nothing collides; and `canonical` already passes, because [`$Cover implements $Reference$<$Book>`](../../package/src/book/Cover.tsx).
- **Only `parts()` refused, and only because a chapter is not a book reference.** *This is the dictionary finding from [the source conversation][conv], made by the compiler in July: "a dictionary carries **two** catalogues — its cover's table of contents (over chapters) and its body (over words)."* Under [the requirements now law](#the-requirements-that-are-now-law) a chapter becomes a book reference and the refusal goes.
- **`$TableOfContents` already is the chapter catalogue** — [`extends $Chapter implements $Catalogue$<$Chapter>`](../../package/src/book/TableOfContents.tsx), deriving its rows from the book's chapters and filtering by parentheticality. **Nothing in this sprint changes it.**
- **`$Row` is the shipped precedent for a reference that is writing** — [`extends $Section implements $Reference$<$Chapter>`](../../package/src/book/Chapter.tsx), storing one address and reading its copy through it, **rebuilt on every render** by `parts()`. One class, many instances, honest parents. It is the pattern this sprint lifts one grade.
- **`$Synopsis` is seventeen lines** — [`extends $Chapter`](../../package/src/book/Synopsis.tsx), setting `parenthetical = true` and nothing else. Everything R1 asks of it is an addition to a nearly empty class.
- **`$Book.synopsis` is `chapters.find(...)`** — [the FIRST synopsis](../../package/src/book/Book.tsx). With several, it is ambiguous, and a catalogue-book carrying only other books' synopses passes the `A book requires a synopsis` check wrongly today.
- **`$Author`, `$Subject` and `$Canonical` are the `$for` pattern already** — each a `$Phrase` holding `$for?: $LibraryCard`, resolving `read()` through the card. `$Synopsis` gaining `$for` is the same pattern one grade up, not a new mechanism.
- **`$LibraryCard` is used as an opaque handle everywhere.** Twenty-plus sites across `src`, `app` and `tests`, and **not one reads a mapped-over property through the type**; `$LibraryCard$` declares all seven members by hand regardless.
- **`$(instance)` reuses, it does not build.** [`chemical.ts:1297`](../../../chemistry/package/src/abstraction/chemical.ts) — the bond does not re-run and the component is cached per instance; [`$lift`](../../../chemistry/package/src/abstraction/particle.ts) returns the same object when it is not a template, and assigns `p[$update$]` on every render, so **two placements of one instance share one update channel**. *Read from source, **not driven** — it wants a probe before anything depends on it.*
- **There is no build that assembles books.** `npm run build` is rollup. Books are hand-authored TSX modules, so this sprint's placements are **made by hand, and the hand-made list is the build sprint's specification** — the method that produced the cards.
- **The contents already carries a bolted-on second list** — [`inferred.map(card => <li>{card.title}</li>)`](../../package/src/book/TableOfContents.tsx) beside the real rows, because cards had nowhere to stand.

**Baseline, so every later number is a delta:** `02c4032` + the uncommitted working copy · chemistry **674/674** (61 files), `tsc` 0 · lib **224/224** (22 files), `tsc` 0 · app typecheck **65 files, 4 baselined by identity, 0 unexpected** · `verify-book.mjs` **51 checkpoints, exit 0** · `verify-demo.mjs` **25 checkpoints, exit 0** · chemistry Lab `verify-all.mjs` **exit 0**. *The two chemistry drivers and the Lab typecheck are in no gate, named rather than omitted.*

---

# What was required, and what was decided

*Compacted at compounding. The full requirements, unit plan, cleanup list, test scenarios, risks and self-check ran the sprint and are recoverable from this chapter's history; what stands here is what still binds, plus a register of the identifiers the record cites.*

**Four actors.** The **author** of a book, who writes a synopsis of it and expects that to be the one anything else uses to stand for it. The **librarian**, building a catalogue — a book holding accounts of other books without copying them by hand. The **reader at the catalogue**, meeting a book they have not read and needing enough of it to decide. And the **reader of a failure**, meeting a catalogue that claims a book it does not hold, who needs to be told which.

## The requirements that are now law

<a id="r5"></a>Every chapter is a `$Reference$<$Book>` reading to the book it stands in, and **a synopsis points at a different one** — so a book's own synopsis is canonical **by the loop closing, never by a field declaring it**. A subject is a book whose chapters include synopses of others, and its table of contents lists them with no change. **<a id="r16"></a>Subjecthood is therefore a COUNT and not a class** — catalogue zero and you are an ordinary book, catalogue some and you *are* a subject — and the subject reference does not test for a cataloguing book, it **makes** one. **A book is a catalogue of books; its table of contents is the catalogue of its chapters** — Doug's resolution of the collision, and it compiles through the same members with no widening and no union. `$Catalogue$` is implemented by **writing only**. Canonicality is contextual, so other catalogues can be invented. <a id="r9"></a>The card is what a book reference resolves through and nothing more, and its transform is **written long, on the card itself, with no catch-all arm** — a property with no rule is a *missing line*, not a silent `string`.

## The decisions, and the two that reversed something

<a id="d1"></a>**D1 — `$$Chapter` is the canonical table of contents entry and `$Row` merges into it.** Doug's name. Attempted at [U7](#u7), stopped at its bound, and landed later for free once the `$$` family became writing.

<a id="d2"></a>**D2 — the spine is PROVED BY PROBE before anything depends on it.** It was reasoned and never compiled; the probe both confirmed it and found a live defect nobody had predicted.

**D3 — `parenthetical` is a declared `$` prop with a per-class default, and A SYNOPSIS IS NOT PARENTHETICAL.** *Doug: "a synopsis should not be parenthetical, and if a book does not want it visible it can choose to render its own as parenthetical."* **This REVERSES a ruling recorded in [The Subject](09-the-subject.md)** — that a synopsis is parenthetical and displayed only when its author unsets it. The default flipped, and it makes the catalogue case free: a synopsis standing as an entry is visible with no special handling. **Reflexivity says whose synopsis it is; parentheticality says whether it shows.**

**D4 — an entry reads its title through the card, never off the synopsis**, because a synopsis's own title is the word *Synopsis* — right in its book and wrong in a catalogue.

**D5 — placements are hand-made this sprint, and the hand-made list IS the build sprint's specification.** What has to be written by hand is exactly what the compilation must generate.

**D8 — nothing is named that Doug has not named**, and proxies are surfaced at review rather than adopted by silence. **D10 — the prose is Doug's and the implementer writes none of it**, because a sprint that quietly rewrites an author's book to fit a model change has done the thing this library exists to prevent.

<a id="d9"></a>**D9 — the cut line: the model and the Shelf, not the whole library.**

## The register — what the record below cites

| id | what it was |
|---|---|
| <a id="u3"></a>**U3** | a chapter points at its book, carrying `$in`, written once by the book's bond |
| <a id="u7"></a>**U7** | `$$Chapter` as one class — the contents entry and the catalogue of its chapter's sections |
| <a id="u9"></a>**U9** | the card's transform, written long |
| <a id="u11"></a>**U11** | non-canonical catalogues, proved by promise |
| <a id="u12"></a>**U12** | the Shelf restructured |
| <a id="u13"></a>**U13** | the refusal, drawn |
| <a id="u14"></a>**U14** | the prose made true |
| <a id="u15"></a>**U15** | the drivers |
| <a id="u16"></a>**U16** | the records |
| <a id="c1"></a>**C1** | loose module bindings — a file should be a set of objects related by name, and four files are not |
| <a id="c3"></a>**C3** | `$IndexCard` declares no level and sets `inline = false` |
| <a id="c4"></a>**C4** | two members climb to find a book, and [U3](#u3) dissolves both |
| <a id="c6"></a>**C6** | `$Composible$` → `$Composible` is free |
| <a id="c12"></a>**C12** | the parse re-derives what `marked`'s lexer already answered |

## Open at plan time, and how each closed

Four questions were named rather than assumed, under [the law filed against Sprint 48](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md) — none of them got files or scenarios until it could answer *what runs, and when*.

- **What the chapter's reference form is called, and whether it is a chemical.** **Answered:** `$$Chapter` is Doug's name, and it *is* a chemical — a `$Section`, which is what let `$Row` be deleted rather than merged.
- **What a catalogue reads, given that every chapter is a book reference.** **Answered within the hour it was raised:** a catalogue reads the parts that point **elsewhere**, and the count of those is what makes a subject.
- **What `$LibraryCatalogue` leaves behind.** **Answered by measuring:** nothing. The file is deleted.
- **Whether a specialized `$Synopsis` keeps its own view when a catalogue draws it**, and **whether the two exclusion sets on the card have names.** **Both dissolved** when the card collapsed to `$IndexCard<$Book>` and the demo took over declaring its own.

# The record — what was built, and what the building found

*The account of the sprint. **State does not live here** — it lives once, in the last section.*

**The marker was moved by Doug, not by the implementer.** *"Now get to work!"* — with the demo delegated: *"do your best with the demo. Think hard but I don't need to sign off on everything. Surface demo code through the demo. That's how we do it."* So [U14](#u14)'s bubbled items are answered by that latitude, and **[U12](#u12) shows its own code through the demo** rather than being described.

## U1 — the floor, and none of it was red

| gate | result |
|---|---|
| chemistry suite + `tsc` | **674/674**, 61 files, `tsc` **0** |
| lib `tsc` | **0** |
| app typecheck | **65 files, 4/4 baselined by identity, 0 unexpected** |
| lib suite | **224/224**, 22 files |
| `verify-book.mjs` | **exit 0, 51 checkpoints** |
| `verify-demo.mjs` | **exit 0, 25 checkpoints** |
| chemistry Lab `verify-all.mjs` | **exit 0, 19 ✓, 0 ✗** |

**Chemistry's `dist` was rebuilt before the lib suite ran** — the stale-build law, filed three times on this branch. Every failure after this point is this sprint's.

## U2 — the probe said YES, and then found a live defect nobody had predicted

**The answer to [D2](#d2) is yes.** With `$Chapter implements $Reference$<$Book>` and `$Book implements $Composition$<$Chapter>, $Catalogue$<$Book>` both declared, **`tsc` reported zero errors in either file.** No widening, no union, no second parts list. **Doug's sentence — *a composition of chapters that catalogues other books* — compiles.**

**And the probe caught `Carried<V>` failing exactly the way its catch-all arm was accused of failing.** Forty errors, every one downstream of a single flipped conditional:

- `$Synopsis extends $Chapter`. The moment a chapter became a `$Reference$<$Book>`, **`Carried`'s third arm caught `$Book.synopsis`** — `[V] extends [$Reference$<$Book> | undefined] ? $LibraryCard : …` — and the card's `synopsis` **silently retyped from `string` to `$LibraryCard`**.
- **Nobody edited `LibraryCard.tsx`.** A conditional type re-routed a property because an *unrelated* class gained an interface, and the only signal was 40 errors in three other files.

**This is [R9](#r9) demonstrated rather than argued**, and it is why a catch-all arm is not a rule: the mapping had no line saying what a synopsis carries, so it fell through to a rule meant for something else.

**It reorders the sprint.** [U9](#u9) now lands **before** [U3](#u3), because the card's type is coupled to the chapter's interfaces through that conditional, and doing U3 first means building against 40 errors that are not U3's.

**Nothing shipped from the probe.** It was reverted by hand — never by `git checkout`, because the working copy carries the previous session's uncommitted work — and `tsc` confirmed **0** afterwards.

## U17 — parenthetical became a declared default, and a synopsis is shown

Seven classes stopped **assigning** `parenthetical` in a constructor and now **declare** it: `$Synopsis`, `$Author`, `$Subject`, `$Canonical`, `$Fenced`, `$Legend`, `$Denote`. `$Synopsis`'s default flipped to shown.

**Ten promises encoded the old default and each was moved with its reason.** The one that read *"the cover, the synopsis and itself are apparatus"* was **wrong as a law** — under Doug's ruling it is a **choice a book makes** — so it split into two: *a synopsis is listed by default*, and *a book that marks its own parenthetical keeps it out of the contents*. **Both halves are asserted, because a default nobody can override is not a default.**

## U9 — the long type, and the check caught two members nobody asked it to

`Carried<V>`, `Named` and `Recursive` are deleted. The mapping is **one line per property**, no conditional and no catch-all. The 1-to-1 guarantee stands apart as a type that resolves to **a property nobody can implement, keyed by the member that went unruled** — so `implements $LibraryCard` fails and the compiler prints its name.

**Watched going red, twice, and the second time was not a drill.** A probe member `$Book.edition` produced *"`$Book.edition` is carried by no rule on its card"*. Then later in the sprint, a new member landed and the check fired **unprompted**: *"`$Book.shelved` is carried by no rule on its card"* — before any test ran and before anyone thought to look.

## U3, U4, U5, U6 — the model

- **U3.** `$Chapter implements $Reference$<$Book>`, carrying `$in`, written once by the book's bond. **The `this.parent as $Book` cast is gone and so is [`$TableOfContents`'s eight-hop climb](../../package/src/book/TableOfContents.tsx)** — [C4](#c4) closed. A loose chapter now answers **undefined** instead of an evaluation wrapper wearing the type.
- **U4.** `$Synopsis` carries `$for` and reads through it — the `$Author`/`$Subject`/`$Canonical` pattern one grade up.
- **U5.** A book's own synopsis is the **reflexive** one, and the bond says so: *"a book requires a synopsis OF ITSELF."*
- **U6.** **`$Book implements $Composition$<$Chapter>, $Catalogue$<$Book>` — `tsc` 0, no widening, no union, `$TableOfContents` untouched.** `follow()` answers the parts that point elsewhere. Doug's sentence, compiling.

**And three things left the framework on Doug's correction**, because they were the demo's needs wearing the framework's clothes: `catalogued`, `shelved`, and the reciprocity check. *"Do not confuse what the framework needs with what books need. The demo is all about customizing this framework."*

## U18 — the three files are gone, and the taxonomy was re-cut

*Doug: **"I still see the Fenced, Pointing and Quoted files. All three of those need to disappear."*** They are deleted.

| was | is | why |
|---|---|---|
| `$Fenced` | **`$Code`** | Doug's name. Framework-level **because code will be live** in this framework |
| — | **`$Caption`** | Doug's class: a sentence, **possibly parenthetical but never absent**, so a figure always has copy |
| `$Plate` `$Break` `$Displayed` | ~~kinds of **`$Figure`**, one file each~~ — **struck by [the last cut](#the-last-cut--doug-stopped-the-implementer-adding-words)**; `$Figure` **is** the thing added | Doug's ruling: `$Figure` is the base of all **visual** things |
| `$Quoted` | ~~**`$Quotation`**~~ — **struck**; only **`mark` moved to `$Paragraph`** survives | the duplication Doug named as *framework rot* |
| `$Item` | ~~its own file~~ — **struck**: *"an `$Item` is not an essential element in the writing ontology"* | one idea per file |
| `$Pointing` | **dissolved** | `$Link` was the right word at the wrong level and had **zero consumers**, so it became word grade. **No name was needed.** |
| `$Inline` | **`$Formula`** and **`$Snippet`** | *"$Inline sounds like it can be a phrase"* — and `$Phrase` already admits them, being `$Word` with the whitespace rule lifted |

**The method, in Doug's words, and it is worth more than the eight names:** *"instead of inventing programming jargon, we bend familiar semantics a bit… is a cover a type of chapter? Wikipedia is like an encyclopedia. And like an encyclopedia, it has a cover — even if it happens to have a search engine. Of course, the cover is one of its pages."* **`$Inline` was jargon standing where a bent domain word belonged.**

**And the real answer to inline code is recorded rather than built** *(Doug)*: **one `$Code` with an `inline` boolean whose LEVEL moves between paragraph and phrase.** That needs **dynamic layering** — a level that follows a property and carries its composition with it — which the framework does not have. `$Formula`/`$Snippet` stand until it does.

**One collision, and the demo yielded.** The manifold had its own `follow(spot)`, which now clashes with `$Catalogue$.follow()`. The demo's became `openAt`, because **`follow` is the framework's word**.

## Verified at this point — every gate, with its scope

| gate | baseline | now |
|---|---|---|
| chemistry suite + `tsc` | 674/674, 61 files, 0 | **674/674**, 61 files, **0** *(untouched this sprint)* |
| lib suite | 224/224, 22 files | **238/238**, **23 files** |
| lib `tsc` | 0 | **0** |
| app typecheck | 65 files, 4 baselined, 0 unexpected | **65 files, 4/4 baselined, 0 unexpected** |
| `verify-book.mjs` | exit 0, 51 checkpoints | **exit 0, 51 checkpoints** |
| `verify-demo.mjs` | exit 0, 25 checkpoints | **exit 0, 25 checkpoints** |

**Chemistry's `dist` was rebuilt before lib ran against it**, and **both drivers were run against a server restarted after the file deletions** — the two filed wrong turns, both avoided deliberately.

## U7 — STOPPED AND REPORTED, at the bound the plan gave it

Doug ruled `$$Chapter` the canonical table of contents entry, and the merge with `$Row` was attempted. It broke four promises that assert **the catalogue equation descending level by level** — chapter → sections → paragraphs — because a chapter's reference form is **already two roles**: the contents entry *and* the catalogue of its own sections. That is [R56](06-sprint-48--subjects-and-the-library.md)'s *"a role with several candidates"* arriving concretely.

**The unit stopped rather than forcing one name onto both**, and reverted by hand so [U3](#u3) survived. *(An earlier claim of "zero consumers" was wrong — it came from grepping `src/` and `app/` and missing the tests. The promises are the consumers.)*

**Doug's direction, recorded for whoever takes it up:** *"any reasonable version that uses a table of contents would create their own types. And we can probably use dependency injection on book to enforce which ones… Or we create a live code system where chapters of one book can validate chapters and books in others. That's where we are headed."*

## U8 — catalogues are writing only

`$CardCatalogue` stopped implementing `$Catalogue$` and became the holder Doug described: `cards`, `card`, `holds`, `file`, `find`. **It is not a chemical and has no view** — *"it is not real in this framework."* Grepping `$Catalogue$` in `src/` now returns writing only.

## U12 — the Shelf restructured, and the demo shows its own code

**The three catalogued books' synopses stand in The Shelf as its own chapters** — `<AlgebraSynopsis />`, `<ManifoldSynopsis />`, `<TeamSynopsis />`, the very components those books render. **One class, two instances, an honest parent each.** `card.tsx` hands each its card after the cards exist, the same act as the author and subject links one grade down.

**And [`shelved.map(...)`](../../package/app/src/sections/book/library/the-shelf/contents.tsx) is deleted** — the hand-drawn second list beside the real rows. The entries are chapters now, so the contents lists them with no special case, and each reads its **title, note and byline through the card**, because a synopsis is titled *Synopsis* inside its own book and that is wrong in a catalogue.

## THE CARD COLLAPSED — Doug's last cut, and it deleted the most

***"Do we even need `$LibraryCard` beyond just an `$IndexCard<$Book>`? Just make a version of that. No need for anything fancy… it is not real in this framework."***

**`LibraryCard.tsx` and `LibraryCatalogue.tsx` are deleted.** The long computed type, its completeness check, `Composed`, `Reflexive`, `Carded`, `Considered`, `Unaccounted`, `Accounted` and the class — all of it. The framework ships `$IndexCard<$Book>`, which enumerates whatever fields it is given, and **the demo declares its own card** in [`librarycard.tsx`](../../package/app/src/sections/book/library/the-team/librarycard.tsx) with the fields this library's cards carry. *When the build lands, that class is what it generates.*

**`$Book.library` left the framework with it**, and the library recursion now lives on the demo's card where the agreement law belongs. So did `$Canonical`'s twelve-hop reciprocity walk.

**And the collapse paid a debt.** The app typecheck's baseline went from **4 to 1** — three baselined errors were *"$-backed access on a computed type"*, and there is no computed type any more. The gate refused to pass until the baseline was corrected, which is the baseline-by-identity law working in the direction nobody plans for.

**The honest note on [U9](#u9):** its long type is gone, deleted by a later ruling. What it bought before it went is not wasted — it is what caught `$Book.shelved`, and it is the reason the mapping is now the demo's to state rather than the framework's to guess.

## Every gate, at the close

*(Superseded — the closing numbers are [at the very end](#every-gate-at-the-actual-close).)*

## THE LAST CUT — Doug stopped the implementer adding words

***"You have figure now have a plate. You created fenced again. You need to stop. Make figure the thing that's added. No wrapper. Figure out how to make it the top. Stop adding in extra things and stop adding words to the framework. You think Plate is part of the semantics of writing?"***

**Five classes the implementer had just added are deleted:** `Plate.tsx`, `Break.tsx`, `Displayed.tsx`, `Quotation.tsx`, `Item.tsx`. The table above records them because they were built; this records that **they were wrong**, and the correction is not a rename.

**`$Figure` IS the thing added, and Doug said what it is:** *"maybe the default figure is just a caption and to subclass it is to add something that's pure view."* So `$Figure extends $Paragraph`, carrying a necessary `$Caption` — **that alone satisfies its role as a paragraph** — and `drawn()` returns `null`. A subclass overrides `drawn()` and nothing else. There is no wrapper above it and no kind beneath it in the framework.

**Which is why the demo now declares its own figure kinds** — `$Equation` and `$Rule` in [`markdown/section.tsx`](../../package/app/src/sections/book/../../markdown/section.tsx) — and the framework ships none. *This caught a live defect: with every figure drawn by the demo's katex, a thematic rule was being typeset as mathematics. Both drivers were green only because no driven page contained a `---` — filed as [the rule that was typeset as mathematics](../solutions/19-the-rule-that-was-typeset-as-mathematics.md).*

**`$Item` was struck on its own ruling:** *"Item is not a form of paragraph… it needs to either be more specific than the writing folder, or something else, but an `$Item` is not an essential element in the writing ontology."* And Doug's replacement is the elegant one, **designed and not yet built**: *"I would put list at the paragraph level and let items be the sentences within it."* Attempted, it broke six promises, and was **reverted to the commit rather than left red** — carried forward as owed work.

## A SECTION COMPOSES PARAGRAPHS — the flattening, and why each layer earns its level

***Doug: "`# X / ## Y / ### Z / # A` — that's just 4 sections, and the levels and nesting can be handled elsewhere."*** *And: "sections add titled paragraphs, the title still has to be at the paragraph level to interpret the section as a composition of paragraphs anyways."*

`$Section extends $Writing<$Paragraph>` and implements `$Composition$<$Paragraph>` — **flat**. The `$Paragraph | $Section` union is gone, `blocks()` no longer absorbs anything under a heading, and a heading of **any** depth becomes a `$Title` standing among the paragraphs. Depth is a containment to bolt on later.

**And that flattening is what let the algebra close.** *Doug: "Make the paragraph section thing feel good… Sections add titles as a canonical to multiple paragraphs. Documents add summary as a canonical to multiple sections along with the first title — see the elegance of introducing things. Each layer adds something interesting."* So: a section's **canonical is part zero, the title**, standing where it was written rather than lifted into a member; a document's **canonical is the section that carries the title and the summary**, and `summarised()` is what recognises it.

## THE `$$` FAMILY IS WRITING — and a reference mentions its referent

***Doug: "Why aren't the `$$` classes writing?"***

They are. **Each reference form is a chemical one grade below what it stands for**, and catalogues the level beneath:

| form | is | catalogues |
|---|---|---|
| `$$Chapter` | a `$Section` | `$$Section` |
| `$$Section` | a `$Paragraph` | `$$Paragraph` |
| `$$Paragraph` | a `$Sentence` | `$$Sentence` |
| `$$Sentence` | a `$Word` | `$$Word` |
| `$$Word` | a `$Letter` | — |

**The floor had to open for it.** `$Letter` stopped implementing `$Reference$<$Letter>` and no longer answers `read()`, because a reference form must be free to read **elsewhere** and the floor was the one place that forbade it. *Doug: "If it's blocking anything change it. Not important."* A letter is still its own `ref`.

**`$Row` is deleted, and `$$Chapter` is the row.** This is [D1](#d1) landing after [U7](#u7) stopped at its bound — and it landed **for free**, because once `$$Chapter extends $Section` the two classes were the same shape. The merge U7 could not force became a deletion. `$TableOfContents` builds `$$Chapter` entries directly and drops the position-carrying filter, since a row holds no number of its own.

**And Doug named the view:** *"The sentence reference is literal. Maybe you display the sentence as the reference in quotes?"* So every reference declares `$role = 'mention'` — **the framework's existing word, no new one** — and draws its referent **named where the referent has a name, quoted where it has none**. Four promises hold it.

*One mechanism worth keeping, and the first reading of it was wrong: `$role? = 'mention' as const` broke every `$$` class's inheritance with thirty errors naming members nobody had touched. It is not `as const` — **any** narrowing of a `$` prop does it, because props are contravariant. Filed as [the narrowed prop that disowned its base](../solutions/20-the-narrowed-prop-that-disowned-its-base.md).*

## `$Referent` IS A CLASS — and the one thing it could not cover is the finding

Doug ruled this in sprint 47 and it had been queued ever since, blocked on exactly one thing: **five reference forms were plain classes rather than chemicals**, so every generic constraint naming `$Referent` demanded 41 members from something that was not one. Making the `$$` family writing removed the block, and then it went in one move — `$Referent extends $Chemical` declaring `valid()`, with `$Writing`, `$Book`, `$Key`, `$Location` and `$Path` extending it. **Sixty-three sites renamed, `tsc` 0.**

**What it could not cover is worth more than the rename.** `$Composible$.follow()` answers a **reading** — the composition you get by dereferencing a catalogue's entries — and a reading is not a chemical. So:

- **`$Composition$` stopped extending `$Referent`** and asks for `valid()` on its own. Everything anyone *writes* that has parts is a chemical besides; a reading is the exception.
- **`$Catalogue$` spells out its reference half** rather than inheriting `$Reference$<$Composition$<T>>`. It still reads to a composition and still continues onto another reference — the equation is unchanged — but the compiler is no longer asked to prove that a reading is a thing in the library.

**One direction was tried and abandoned rather than forced:** dropping the bound on a reference's *target*, so that a reference could point at anything. It produced **95 errors from variance**, not from semantics, and was reverted. *The sentence it was trying to say — a reference is a chemical, what it points at need not be — is still true, and `$Catalogue$` now says it in one place instead of in a type parameter.*

**Three promises hold it**, including the one that asserts a reading is **not** a referent, so the exception cannot be quietly closed later.

## AND THE DRIVER CAUGHT A REAL DEFECT, not just its own staleness

The book driver went red at two manifold checkpoints. **One was the driver's own staleness** — it asserted the manuscript shows `class $Book extends $Chemical`, which is now `$Referent`; that is the gate reading the model correctly and being told the model changed.

**The other was a live bug in the demo.** *"A turned page opens at its head"* failed with `scrollTop` at **9**, not 0. `head()` reset the scroll in a `setTimeout(0)`, which could land **before the turn had painted** — and `light()` leaves a `scrollIntoView({behavior: 'smooth'})` still animating, which then carries the freshly turned page a few pixels down after the reset. It now waits two frames and **jumps rather than glides**. *This was latent: the reset had always been a guess about ordering, and it happened to win until this sprint's extra render work changed the timing. Both drivers were re-run twice to confirm it was not a flake. Filed alongside the katex defect in [the rule that was typeset as mathematics](../solutions/19-the-rule-that-was-typeset-as-mathematics.md), because both were live, deterministic, and invisible to every gate that ran.*

## Every gate, at the actual close

| gate | baseline | now |
|---|---|---|
| chemistry suite + `tsc` | 674/674, 61 files, 0 | **674/674**, 61 files, **0** *(untouched)* |
| lib suite | 224/224, 22 files | **239/239**, **23 files** |
| lib `tsc` | 0 | **0** |
| app typecheck | 65 files, **4** baselined, 0 unexpected | **66 files, 1/1 baselined, 0 unexpected** |
| `verify-book.mjs` | exit 0, 51 checkpoints | **exit 0, 51 checkpoints** |
| `verify-demo.mjs` | exit 0, 25 checkpoints | **exit 0, 25 checkpoints** |

**Files deleted this sprint:** `Fenced.tsx`, `Quoted.tsx`, `Pointing.tsx`, `Inline.tsx`, `LibraryCard.tsx`, `LibraryCatalogue.tsx`, `Row.tsx`, `utilities/Composible.tsx`, and the five the last cut struck — `Plate.tsx`, `Break.tsx`, `Displayed.tsx`, `Quotation.tsx`, `Item.tsx`. **Added and standing:** `Caption.tsx`, `Code.tsx`, `Formula.tsx`, `Snippet.tsx`, and the demo's `librarycard.tsx`, `$Equation` and `$Rule`.

*`$Composible$` moved below `$Composition$` in `writing/Composition.tsx` on Doug's word — "small cleanup but I like simplicity" — removing a file from `utilities/`.*

## Not done, and named rather than omitted

- **[U15](#u15) — the drivers gained no new checkpoints.** They pass at 51 and 25 unchanged, which means the Shelf's new entries are **driven but not asserted**. The next session's first job.
- **[U13](#u13) — the refusal is not drawn.** Reciprocity left the framework on Doug's ruling and has not been rebuilt as the demo's own law.
- **[U11](#u11) and [U16](#u16)'s remaining library edits** — not reached. *([U14](#u14) is done: the Shelf's cover and synopsis were rewritten true, because both said a catalogue is not one of its own entries and that is now false.)*
- **A list is a paragraph and its items are its sentences** — Doug's design, attempted and reverted. The strongest single piece of owed work.
- **Dynamic layering** — one `$Code` whose level moves with an `inline` boolean. `$Formula`/`$Snippet` stand until it exists.
- **[C1](#c1), [C3](#c3), [C6](#c6) and [C12](#c12)** — the loose module bindings, `$IndexCard`'s missing level, the `$Composible$` rename, and the parse re-deriving what the lexer already answered. C12 is still the strongest Solutions candidate on the list.

**Next sprint is the build**, as planned before this one opened.

<!-- citations -->
[conv]: ../../../../../dna-library/library/claude-dna/conversations/2026-07-18-the-semantics-of-books.md "The Semantics of Books — Doug, 2026-07-18; the primary source"

# Where things stand

*One state, written 2026-08-13 at the session's close. Everything above is the record; this is the present.*

## → NEXT: `/ce-brainstorm`, and the subject is Doug's to set

**Run `/ce-brainstorm`.** The sprint is closed, committed and pushed; nothing is half-built and no gate is red.

**What this session expected the subject to be — and it is an expectation, not a brief.** Doug's ruling at the close was *"The build — as planned before tonight"*, meaning [Sprint D — The Compilation](00-planning.md#d--the-compilation): the `.public` build generates the library cards that are currently written by hand. *Said as an expectation deliberately: the last handoff named a subject, and Doug redirected it inside the session — the step follows from where work stopped, the subject does not.*

## Said plainly, for whoever is not tracking identifiers

**A book can now catalogue books.** A chapter *is* a reference to a book, so a book that holds other books' accounts of themselves is a catalogue without becoming a different kind of thing — and **subjecthood is a count, not a class**: catalogue nothing and you are an ordinary book, catalogue something and you *are* a subject.

**A synopsis can stand in two places at once.** It is written once, in the book it is of, and the catalogue holds that same account rather than a copy — so an entry cannot drift from the book it names.

**Every reference is now writing.** A reference to a chapter is a section, to a section a paragraph, to a sentence a word — each one grade below what it stands for, each drawing its referent *mentioned*: named where the referent has a name, in quotes where it has none.

**And a figure is just a caption.** The framework ships no kinds of figure; a book declares its own. That cut is what exposed a live bug where every figure was being drawn as mathematics.

## The state, once

**Complete.** The sprint's model work, its demo restructuring, and its records. `$Row` deleted, `$Referent` made a class, the `$$` family made writing, the Shelf's prose rewritten true, the library compacted and every link resolving.

**Not started, and named rather than omitted** — none of it blocks the next sprint:

- **A list should be a paragraph whose items are its sentences.** Doug's design, attempted, broke six promises, reverted rather than left red. **The largest single piece of owed work.**
- **Dynamic layering** — one `$Code` whose level moves between paragraph and phrase with an `inline` boolean. `$Formula` and `$Snippet` are two classes standing where Doug named one.
- **The drivers gained no checkpoints of their own** for the Shelf's new entries, so those are driven but not asserted.
- **The refusal is not drawn** as the demo's own law; reciprocity left the framework on Doug's ruling and was never rebuilt.
- **Four cleanups:** loose module bindings; `$IndexCard` declaring no level; the free `$Composible$` rename; and the parse re-deriving what `marked`'s lexer already answered — that last one is the strongest Solutions candidate on the list.

**Blockers: none.**

## Verified — every gate, with its scope

| gate | result |
|---|---|
| lib `tsc` | **0** |
| lib suite | **239/239**, 23 files *(from 224)* |
| app typecheck | **66 files, 1/1 baselined, 0 unexpected** |
| `verify-book.mjs` | **51 checkpoints**, run twice |
| `verify-demo.mjs` | **25 checkpoints**, run twice |
| chemistry | 674/674 — **untouched this sprint** |
| library links | **0 broken**, across `.claude` and every branch |

**Pushed.** Project `1aae2cb` on `main`; identity branch `inexplicable-phenomena` at `05ba2ee`, local and origin identical, carrying `.claude` and both branch libraries.

## Wrong turns already taken — do not repeat

- **Dropping the bound on a reference's *target*** so a reference could point at anything: **95 errors**, from variance rather than semantics. The sentence it was reaching for is true and `$Catalogue$` now says it in one place instead of in a type parameter.
- **Narrowing a `$` prop in a subclass** — `as const` or otherwise. Thirty errors naming members nobody touched. [Filed](../solutions/20-the-narrowed-prop-that-disowned-its-base.md); the rule is *declare a `$` prop at the base's type, never at the value's.*
- **Making a list a paragraph** broke six promises and could not be diagnosed cleanly in the time available. Reverted to the commit rather than left red — **that reversion was correct**; do not "finish" it without designing it first.
- **A blanket rename across the package** has bitten twice: `.content` → `.source` also matches inside `.contents`. Target the sites.

## How to see it

```bash
cd library/.public/package && npx vite app
```

Open the port it prints. **The Shelf is the root** — four spines in a row, and the three catalogued books' own synopses standing as its chapters. Follow a spine into The Manifold to see a book read at four altitudes. `/page` is the other demo.

## Read these, and each is load-bearing for the reason given

*Shaped for a **brainstorm**, so these are sources the designing reads rather than code the last session touched. **A starting point, not a boundary** — if the conversation goes somewhere else, read for that instead.*

1. **[Chapter zero's Sprint D](00-planning.md#d--the-compilation)** — what the build must generate, and the mapping it must follow.
2. **[The demo's hand-built card](../../package/app/src/sections/book/library/the-team/librarycard.tsx)** — **the actual specification.** Doug's method is that writing them by hand tells you what the build must autogenerate, and this is that list in code.
3. **[The Levels of Writing](../the-semantics-of-books/15-the-levels-of-writing.md)** — the settled account of what writing is, on one page. Corrected this sprint; read it rather than the sprint records that produced it.
4. **[The sprint that planned what it had not designed](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md)** — the failure the build is most likely to repeat, because *"the compiler can read our source"* is a feasibility case standing where a mechanism is owed.
5. **[Compounding](../../../../.claude/library/..librarianship/17-compounding.md)** — changed this sprint: compounding now **subtracts** as well as adds, and a closed sprint chapter gets compacted into an index.
