# Cataloguing

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*Opened 2026-08-12 as a brainstorm, planned the same day. **Status: `requirements-only` — deliberately, and the gate stays shut.** Section A is approved and the Plan is set, but **Section B is not approved and eight rulings are owed** ([bubbled up](#bubbled-up--needs-dougs-judgment-before-work-starts)), four of which gate units. [`/ce-work`](../../../../.claude/library/our-skillset/30-ce-work.md) refuses this chapter until Doug has ruled and the marker is moved by him, not by the implementer.*

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

- **On a name:** *"Row is a bad name for what that thing is. How about `$$Chapter`?"* — [held open below](#open-and-named-rather-than-assumed).

- **On the reader, which is the reason any of this matters:** *"The library card is the reference, and it renders the synopsis for a chapter and the table of contents renders that synopsis inside itself… **The point is that the synopsis of another book rendered in a new one is a way for someone to learn about a book in such a way that they might read it.** And we have a title, tagline, and summary too for the table of contents of the cataloguing book."*

- **The correction that shrank the card back to its job:** *"I don't know what you think the card does, but **there is a build system which puts together the books**. The card helps with **book references** and perhaps that is the thing on the synopsis — the card for the book — but **the build system will put the synopsis in the book**."*

- **On the demo:** *"The demo is going to need to be the refactoring so that **the shelf is structured correctly**. We will assemble it right as this part of the work."*

- **On the collision, and its resolution:** *"I think we also have to have a book as a catalogue of books might make it hard to make it a catalogue of chapters. [Take] the table of contents is the document that is the catalogue of chapters if we can't have both. **That makes a book a pretty special sort of document.**"*

## Four corrections the implementer took, recorded because each was a real error

1. **`Carried<V>` was defended as proving the mapping.** It proves nothing the hand-written class does not already satisfy, and its catch-all arm cannot tell *compresses to a string* from *no rule for this*.
2. **The card was inflated into a delivery mechanism** — first holding the synopsis's declaration, then its component. Doug's correction: the card helps with **book references**; the **build** places the synopsis.
3. **`$Book implements $Catalogue$<$Book>` was reported as impossible.** It is impossible *given today's `$Chapter`*; under [R1](#r1) it is not. The implementer read a constraint as a law.
4. **A menu was put to Doug with all three options wrong** — one object, two objects, or both — when the answer was one class with two instances. *A question whose options are all wrong is worse than no question* ([filed before](08-the-author.md#wrong-turns-already-taken--do-not-repeat-these)).

## What was read — verified 2026-08-12

Each claim was checked against the source. Where a claim is reasoned rather than run, it says so.

- **`$Catalogue$` is two interfaces at once** — [`$Composition$<$Reference$<T>>` and `$Reference$<$Composition$<T>>`](../../package/src/reference/Catalogue.tsx), plus `follow()`. The catalogue equation, carved in Sprint 47.
- **The reference half is free for a book.** `$Book` has neither `read()` nor `then()`, so nothing collides; and `canonical` already passes, because [`$Cover implements $Reference$<$Book>`](../../package/src/book/Cover.tsx).
- **Only `parts()` refused, and only because a chapter is not a book reference.** *This is the dictionary finding from [the source conversation][conv], made by the compiler in July: "a dictionary carries **two** catalogues — its cover's table of contents (over chapters) and its body (over words)."* Under [R1](#r1) a chapter becomes a book reference and the refusal goes.
- **`$TableOfContents` already is the chapter catalogue** — [`extends $Chapter implements $Catalogue$<$Chapter>`](../../package/src/book/TableOfContents.tsx), deriving its rows from the book's chapters and filtering by parentheticality. **Nothing in this sprint changes it.**
- **`$Row` is the shipped precedent for a reference that is writing** — [`extends $Section implements $Reference$<$Chapter>`](../../package/src/book/Row.tsx), storing one address and reading its copy through it, **rebuilt on every render** by `parts()`. One class, many instances, honest parents. It is the pattern this sprint lifts one grade.
- **`$Synopsis` is seventeen lines** — [`extends $Chapter`](../../package/src/book/Synopsis.tsx), setting `parenthetical = true` and nothing else. Everything R1 asks of it is an addition to a nearly empty class.
- **`$Book.synopsis` is `chapters.find(...)`** — [the FIRST synopsis](../../package/src/book/Book.tsx). With several, it is ambiguous, and a catalogue-book carrying only other books' synopses passes the `A book requires a synopsis` check wrongly today.
- **`$Author`, `$Subject` and `$Canonical` are the `$for` pattern already** — each a `$Phrase` holding `$for?: $LibraryCard`, resolving `read()` through the card. `$Synopsis` gaining `$for` is the same pattern one grade up, not a new mechanism.
- **`$LibraryCard` is used as an opaque handle everywhere.** Twenty-plus sites across `src`, `app` and `tests`, and **not one reads a mapped-over property through the type**; `$LibraryCard$` declares all seven members by hand regardless.
- **`$(instance)` reuses, it does not build.** [`chemical.ts:1297`](../../../chemistry/package/src/abstraction/chemical.ts) — the bond does not re-run and the component is cached per instance; [`$lift`](../../../chemistry/package/src/abstraction/particle.ts) returns the same object when it is not a template, and assigns `p[$update$]` on every render, so **two placements of one instance share one update channel**. *Read from source, **not driven** — it wants a probe before anything depends on it.*
- **There is no build that assembles books.** `npm run build` is rollup. Books are hand-authored TSX modules, so this sprint's placements are **made by hand, and the hand-made list is the build sprint's specification** — the method that produced the cards.
- **The contents already carries a bolted-on second list** — [`inferred.map(card => <li>{card.title}</li>)`](../../package/src/book/TableOfContents.tsx) beside the real rows, because cards had nowhere to stand.

**Baseline, so every later number is a delta:** `02c4032` + the uncommitted working copy · chemistry **674/674** (61 files), `tsc` 0 · lib **224/224** (22 files), `tsc` 0 · app typecheck **65 files, 4 baselined by identity, 0 unexpected** · `verify-book.mjs` **51 checkpoints, exit 0** · `verify-demo.mjs` **25 checkpoints, exit 0** · chemistry Lab `verify-all.mjs` **exit 0**. *The two chemistry drivers and the Lab typecheck are in no gate, named rather than omitted.*

---

# Requirements

*Approved section by section. Identifiers are stable and never renumbered. Every requirement names what would be observed if it held.*

## Actors

- **A1 — The author of a book.** Writes a synopsis of their own book, and expects it to be the one anything else uses to stand for it.
- **A2 — The librarian.** Builds a catalogue: a book that holds accounts of other books, without copying them by hand.
- **A3 — The reader at the catalogue.** Meets a book they have not read and needs enough of it to decide to read it.
- **A4 — The reader of a failure.** Meets a catalogue that claims a book it does not hold, or a book that claims a subject that does not carry it, and needs to be told which.

## Section A — the shape of cataloguing

<a id="r1"></a>
- **R1. A chapter points at a book, and a synopsis points at a different one.** Every chapter is a `$Reference$<$Book>` reading to the book it stands **in**; a synopsis reads to the book it is **of**, carried on the synopsis rather than derived from its parent. *This is what makes a chapter's book answerable when something else draws it — today [`$Chapter.book`](../../package/src/book/Chapter.tsx) is `this.parent`, and [the parent is whatever rendered it](../solutions/09-the-parent-that-changed-on-screen.md). **Seen:** a chapter drawn outside its book still answers the book it belongs to.*

- **R2. A book's own synopsis is the one whose reference reads to that book.** Canonical by the loop closing, **never by a field declaring it** — the autobiography's structural test, one grade down. `$Book.synopsis` stops being *the first synopsis found* and becomes *the reflexive one*, and `A book requires a synopsis` becomes *a synopsis of itself*. *Seen: a book holding three synopses of other books and one of its own answers its own; a book holding only others' is refused, and the message says a book must account for itself.*

- **R3. The card is what a book reference resolves through, and nothing more.** A synopsis carries `$for?: $LibraryCard` exactly as `$Author`, `$Subject` and `$Canonical` do — the same pattern one grade up. **The card carries no writing.** *Doug: "The card helps with book references… but the build system will put the synopsis in the book." **Seen:** a synopsis of another book resolving with that book's module never loaded — [AE8's negative proof](08-the-author.md#acceptance-examples), one grade up.*

- **R4. A subject is a book whose chapters include synopses of other books.** Its table of contents lists them **with no change**, because [it already derives rows from chapters](../../package/src/book/TableOfContents.tsx) and filters by parentheticality. Following an entry reads through the synopsis to the book. *Seen: the Shelf's contents listing real chapters where it now prints a hand-inferred card list, and that `inferred` branch **deleted**.*

- **R5. A book is a catalogue of books; its table of contents is the catalogue of its chapters.** *Doug's resolution of the collision, and it holds because of [R1](#r1): once a chapter is a book reference, `$Book.parts()` satisfies `$Reference$<$Book>[]` and the composition half stops refusing.* `$Book` gains `read()`, `then()` and `follow()`; `canonical` already passes as the cover. **A book is a document whose parts are all book references — which is what makes it, in Doug's words, a pretty special sort of document.** *Seen: `$Book implements $Catalogue$<$Book>` compiling with no widening and no union, and `$TableOfContents` untouched.*
  **Bounded:** this is reasoned from the interfaces and **not compiled**. It gets a probe before any other unit depends on it, and if the composition half still refuses, that is a finding and the sprint reports it rather than widening `parts()`.

- **R6. `$Catalogue$` is implemented by writing only.** [`$CardCatalogue`](../../package/src/library/CardCatalogue.tsx) stops implementing it and becomes the holder Doug described; [`$LibraryCatalogue`](../../package/src/library/LibraryCatalogue.tsx) is examined for whether anything on it survives its `card`/`file`/`find` moving to the holder. *Doug: "I want catalogues to be within the library as a type of writing, and the card catalogue is an abstraction to help us hold cards." **Seen:** grepping `$Catalogue$` in `src/` returns only writing.*

- **R7. Canonicality is contextual, so other catalogues can be invented.** A book may hold synopses that are not the canonical synopsis of what they are of. A subject carrying the books' own synopses is the canonical catalogue of them; a subject carrying synopses it wrote is a different catalogue of the same books, and the difference is readable off the reference. *This is [R60](06-sprint-48--subjects-and-the-library.md) doing work rather than being quoted. **Seen:** two catalogues over the same three books, one canonical and one not, and a reader able to tell which is which without being told.*

- **R8. A subject reference and its catalogue must agree, and the check opens no book.** A book whose subject reads to S is valid only if S carries a synopsis whose card is that book's. *Doug: "the thing to bind is that if a book has a subject reference, then the book it references should have it in the table of contents." Both sides answer off cards, so [there is still no walk](06-sprint-48--subjects-and-the-library.md#r63-there-is-no-walk--library-is-computed-and-validation-happens-in-place). **Seen:** a book pointed at a subject that does not carry it, refused by name, drawn where it stands.*

- **R9. The card's transform is written long, on the card itself.** *Doug: "The library card itself was meant to be the transform type… Make it a long computed type."* One line per property, each naming what the book carries and what the card carries in its place; **no conditional, and no catch-all arm** — a property with no rule is a visible omission rather than a silent `string`. The 1-to-1 guarantee becomes **one separate line that names the unaccounted property** when it fails. *Seen: `Carried<V>` deleted, the card's mapping readable top to bottom, and a new member added to `$Book` breaking one line whose error prints its name.*

<a id="r16"></a>
- **R16. SUBJECTHOOD IS A COUNT, NOT A CLASS — and the subject reference is what brings it about.** *Doug, 2026-08-12, closing the last hole in Section A: **"The ones that catalogue zero books are like regular books, and those that do catalogue books become more like subjects."** And: **"The `$Subject` reference ensures that some book is now a cataloguing book."***

  **Every book catalogues books, uniformly** — that is [R5](#r5). A catalogue reads **the parts that point elsewhere**; a book whose chapters all point at itself catalogues **zero** and is an ordinary book; one that catalogues some **is** a subject. **There is no `$Subject` book class and there never will be.**

  **And it makes [R8](#r8) and this one law rather than two.** A's cover says `subject → S`; S must carry a synopsis of A; if it does, S catalogues at least one book and is therefore a subject. **Subjecthood follows from reciprocity holding** — there is nothing separate to check, and the reference does not *test* for a cataloguing book, it **makes** one.

  *This finishes the turn [Sprint 48](06-sprint-48--subjects-and-the-library.md) started, which replaced a class hierarchy with references that validate. The last step is that cataloguing-ness is not even a type the reference checks for — it is a property of the book the reference brings about.*

  *Seen: two books identical in every way except that one carries a synopsis of another — the first reading as an ordinary book, the second answering as a subject, **with no class distinguishing them**; and a book pointed at as a subject that carries nothing back, refused.*

  **Arrived after Section A was approved**, from Doug reading the open question. It takes a requirement rather than being appended to R5, because [a late answer folded into an existing requirement is how a design change goes unrecorded](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md).

## Section B — what the sprint must show

*Written 2026-08-12 after reading the four demo books. **Awaiting Doug's approval** — Section A is approved, this is not.*

*Doug's scope, in his words: **"The demo is going to need to be the refactoring so that the shelf is structured correctly. We will assemble it right as this part of the work."***

- **R10. The Shelf holds the accounts of the books it catalogues, as chapters.** The three catalogued books' synopses stand in it as its own chapters, non-parenthetical so they are listed; [`shelved.map(...)`](../../package/app/src/sections/book/library/the-shelf/contents.tsx) — the hand-drawn second list beside the real rows — is **deleted**. *Seen: the shelf's written face, every entry a real chapter of the book, and the diff showing a block removed rather than added.*

- **R11. The same synopsis stands in two books and reads the same in both.** `<ManifoldSynopsis />` is a chapter of The Manifold and a chapter of The Shelf: **one class, two instances**, each parented honestly to the book it stands in. *Verified available today: that module imports only `lib`, so no book imports another. **Seen:** the Manifold's synopsis on its own page and in the Shelf's contents, **agreeing word for word**, with the words written in exactly one place.*
  **This is the thing a hand-authored page cannot fake** — edit the synopsis once and both change, or the placement is a copy and the sprint failed.

- **R12. An entry shows the book, not the chapter.** A synopsis's own title is the word *Synopsis*, which is right in its book and wrong in a catalogue. The entry reads **title, tagline and summary through the card** and the account through the synopsis. *Doug: "we have a title, tagline, and summary too for the table of contents of the cataloguing book." **Seen:** the Shelf's entry for the Manifold headed* The Manifold of Sentences, *not* Synopsis.

- **R13. Following an entry arrives at the book.** *Seen: the Shelf's entry for the Manifold followed, landing on the Manifold — and the byline still resolving, since [the author link already works this way](08-the-author.md).*

- **R14. A subject that does not carry what points at it is refused, by name.** *Seen: a book repointed at a subject whose chapters hold no synopsis of it, drawing the framework's own exception where that book stands, the rest of the page intact.*

- **R15. The prose is made true again.** The Shelf's cover and synopsis currently assert *"a catalogue is not one of its own entries"* and *"the shelf itself has no spine here"* — sentences about the old shape. **This is authorial work on Doug's book and no unit owns it.** *Seen: the Shelf reading as an accurate account of what it now is.*

---

## Open, and named rather than assumed

*Under [the law filed against Sprint 48](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md), none of these gets files or scenarios in the plan until it can answer **what runs, and when**.*

- **What the chapter's reference form is called, and whether it is a chemical.** Doug: *"Row is a bad name for what that thing is. How about `$$Chapter`?"* — but [`$$Chapter` is taken](../../package/src/book/Chapter.tsx) by a plain class doing the same job differently, and [R56](06-sprint-48--subjects-and-the-library.md) says a reference form is **a role with several candidates**, not a class. This reaches [chapter zero's queued question](00-planning.md) — *"does a reference form belong to the chemical hierarchy at all? Answer that and `$Referent` becomes a class in one move."* **The domain's own word for the row is *entry*, marked taken in Sprint 48 by our informal use; reported, not proposed.**
- **Whether a specialized `$Synopsis` keeps its own view when a catalogue draws it.** [R27](08-the-author.md) says specializing how book content looks is the framework's reason for existing. If the build places the synopsis into both books, it does — but that is a claim about a build that does not exist yet, and it is not yet designed.
- **Whether the two exclusion sets on the card have names.** `Composed` and `Reflexive` are the implementer's. Doug's rule is stated — a card carries nothing below chapter grade, and nothing that points back at the book the card already is — but the words are unruled.
- ~~**What a catalogue reads, given that every chapter is a book reference.**~~ **ANSWERED by [R16](#r16) within the hour it was raised** — a catalogue reads the parts that point **elsewhere**, and the count of those is what makes a book a subject. *The struck text below is kept only so the question's shape is legible.* ~~The old wording:~~ *This is the joint of Doug's own sentence — **"Can we have a book be a composition of chapters that catalogues other books? That seems to be the dream"** — and it is the last hole in it.* Under [R1](#r1) an ordinary chapter reads to the book it stands **in** and a synopsis to the book it is **of**. So `follow()` over a catalogue's parts answers **its own book once per ordinary chapter**, plus the catalogued ones. Three readings are available and none is chosen: the catalogue reads **all** its parts and the self-references are honest noise; it reads **only the parts that point elsewhere**; or **only its synopses** are entries and the other chapters are prose that happens to be referable. *Design owed — it decides what `follow()` means, and therefore what a catalogue **is**.*

- **What `$LibraryCatalogue` leaves behind.** Its `card`, `file` and `find` are the holder's job; whether anything else on it is load-bearing is measured in the plan, not guessed here.

---

---

# Plan

*Set 2026-08-12. **WHAT, not HOW.** Unit identifiers are never renumbered.*

## BUBBLED UP — needs Doug's judgment before work starts

*Doug: **"I want you to bubble things up for my judgment because we want this to work well, and I am not entirely sure you see what it looks like to create a book. We need to be careful."** These are the calls the implementer must not make. Each one is a **ruling**, not a research question — the code has already been read.*

1. **The Shelf's prose stops being true, and it is your prose.** Its cover — *"a catalogue is not one of its own entries"* — and its synopsis — *"the shelf itself has no spine here"* — both describe the shape R4 replaces. **[U14](#u14) exists to hold this and the implementer writes none of it.**
2. **Does the Shelf catalogue itself?** [`shelved()`](../../package/app/src/sections/book/library/the-shelf/contents.tsx) filters the shelf's own card out today. Under [R2](#r2) its own synopsis is reflexive and parenthetical — so it is *not* an entry — but whether a catalogue should also list itself is the auto-categorical question one grade down, and it is yours.
3. **Where the catalogued books' synopses sit in the Shelf's chapter order** — before or after *The Card Catalogue*. Authorial.
4. **Does *The Team* get a chapter for this sprint?** [R19](08-the-author.md) says a chapter per sprint. If yes, it is writing, and it is budgeted as its own step rather than squeezed after the model.
5. **Does `$$` generalize below the book?** `$$Chapter` as *an item in a book's table of contents* is exact. `$$Word` would be *an item in a sentence's table of contents*, and a sentence has no contents in ordinary speech. The four sibling forms may not survive the meaning you just gave the notation.
6. **The two exclusion names on the card** — `Composed` and `Reflexive` are the implementer's. Your rule is stated; the words are not.
7. **Do the spines change?** The shelf's furniture face draws from cards. If entries become chapters, whether the spines follow is a design call, not a consequence.
8. **Eight unruled class names in the core framework** — `$Fenced`, `$Plate`, `$Displayed`, `$Break`, `$Quoted`, `$Item`, `$Pointing`, `$Inline`. **[U18](#u18) holds the population with what each one is**, and it is four ideas rather than eight. *Doug: "none of those are right."* **Design owed on his word; no unit renames anything until he names it.**

## Decisions

**D1 — `$$Chapter` is the canonical table of contents entry, and `$Row` merges into it.** *Doug's ruling: "what if we make that the canonical table of contents entry. `$$Chapter` is actually a good name for an item in the table of contents of a book." The existing [`$$Chapter`](../../package/src/book/Chapter.tsx) already reads that way — it references a chapter and catalogues that chapter's sections, which is an indented contents entry. `$Row` is the same thing built as writing. Chosen over keeping both: they are one role with two implementations, which is [the two-populations defect](../solutions/13-the-chapter-that-wrote-its-sections-twice.md) in the reference system.*

<a id="d2"></a>**D2 — [R5](#r5) is PROVED BY PROBE before anything depends on it.** *The claim that `$Book implements $Catalogue$<$Book>` compiles once a chapter is a book reference is **reasoned from the interfaces and not compiled**. [U2](#u2) is a throwaway probe that answers it in one run. Chosen over building toward it: the implementer already reported this impossible once and was wrong; being wrong the other way costs the sprint.*

<a id="d3"></a>**D3 — `parenthetical` is a declared `$` prop with a per-class default, and a SYNOPSIS IS NOT PARENTHETICAL.** *Doug's ruling, 2026-08-12: **"Perhaps parenthetical needs to be a `$` prop, so that it can be overridden. Different classes can make it default or not. I would say that a synopsis should not be parenthetical, and if a book does not want it visible it can choose to render its own as parenthetical."** Today [`$Synopsis`](../../package/src/book/Synopsis.tsx) assigns `this.parenthetical = true` **in its constructor**, which is not a prop — [props are construction and an assignment is not one](../solutions/10-the-prop-that-emptied-the-shelf.md). A declared default is overridable at the placement; an assignment fights it.*

**This REVERSES a ruling recorded in [The Subject](09-the-subject.md)** — *"the synopsis is a parenthetical chapter… displayed only when its author unsets parenthetical."* The default flips, and the reversal is stated rather than absorbed. **Its consequence is visible and is [U17](#u17)'s to carry: all four demo books' synopses become listed chapters unless each book hides its own.**

*And it makes the catalogue case free: a synopsis standing as an entry is visible with no special handling. **Reflexivity says whose synopsis it is; parentheticality says whether it shows** — still two independent bits, and neither substitutes for the other.*

**D4 — An entry reads its title through the card, never off the synopsis.** *A synopsis's own title is the word* Synopsis *— correct in its book, wrong in a catalogue. Doug's "title, tagline, and summary" already names the source.*

**D5 — Placements are hand-made this sprint, and the hand-made list is the build sprint's specification.** *There is no build that assembles books; `npm run build` is rollup. This is the method that produced the cards, and saying "the build will do it" is [the substitution that sank 48](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md).*

**D6 — The card's mapping is written long with no catch-all arm.** *Doug's ruling. A property with no rule is a **missing line**, not a silent `string`. The 1-to-1 check moves out of the mapping into one line that names what is unaccounted for.*

**D7 — `$LibraryCatalogue`'s fate is measured, not assumed.** *It looks like it goes once `card`/`file`/`find` move to the holder, but "looks like" is not a finding. [U8](#u8) reports what is left and deletes only what is proven dead — [the unproven-deletion class](../solutions/01-the-formulas-that-rendered-empty.md).*

**D8 — Nothing is named that Doug has not named.** *`$$Chapter` is his. `Composed` and `Reflexive` stay marked as proxies and are surfaced at the review rather than adopted by silence.*

<a id="d9"></a>**D9 — THE CUT LINE: the model and the Shelf, not the whole library.** *In scope: the four demo books, the Shelf restructured, one catalogue. **Out, and recorded rather than built:** a second non-canonical catalogue as a demo surface ([R7](#r7) is proved by promise, not by page), the spines, `$Type`, and anything about the build. If the work reaches past this list it stops and reports.*

**D10 — The prose is Doug's and the implementer writes none of it.** *[U14](#u14) is his step. A sprint that quietly rewrites an author's book to fit a model change has done the thing this whole library exists to prevent.*

## Units

### The floor

<a id="u1"></a>
- **U1 — Every gate run, and its number stated.** *Mechanism: the six gates before anything is edited — chemistry suite and `tsc`, lib suite and `tsc`, app typecheck, `verify-book.mjs`, `verify-demo.mjs`, the Lab's `verify-all.mjs`. Files: none. Depends on: nothing. Realizes: the baseline. **Visible end:** six numbers with their scopes named, and any pre-existing red identified as floor work.*

<a id="u2"></a>
- **U2 — THE PROBE, and it gates the sprint's spine.** *Mechanism: make `$Chapter implements $Reference$<$Book>` and `$Book implements $Catalogue$<$Book>` in a throwaway branch of the working tree, run `tsc`, read the errors, revert. Nothing ships. Files: none kept. Depends on: U1. Realizes: [D2](#d2). **Visible end: a yes or a no, with the compiler's own words** — and if it is a no, the sprint reports it before [U3](#u3) rather than widening `parts()` to force it.*

### The model

<a id="u17"></a>
- **U17 — `parenthetical` becomes a declared default, and a synopsis is shown.** *Mechanism: classes stop assigning `parenthetical` in constructors and **declare** `$parenthetical` with their own default; `$Synopsis`'s becomes `false`; a placement overrides it. The four demo books each decide whether to hide their own. Files: `writing/Writing.tsx`, `book/Synopsis.tsx`, `book/Author.tsx`, `book/Subject.tsx`, `book/Canonical.tsx`, the four demo books' composition sites. Depends on: U1. Realizes: [D3](#d3). **Visible end: a synopsis passed `parenthetical` at its placement is hidden and one that is not is listed — the same class, decided where it stands.***
  **Bounded, and this is the one that reaches furthest:** every class that assigns `parenthetical` in a constructor is touched, and each demo book's contents gains a row unless it opts out. If the change reaches past parentheticality into what a constructor may do generally, it stops and reports.

<a id="u3"></a>
- **U3 — A chapter points at its book.** *Mechanism: `$Chapter implements $Reference$<$Book>`, reading to the book it stands in, carried rather than climbed — `book` stops being `this.parent`. Files: `book/Chapter.tsx`, `book/Book.tsx`. Depends on: U2. Realizes: [R1](#r1). **Visible end:** a chapter drawn outside its book still answering its book, which [is what fails today](../solutions/09-the-parent-that-changed-on-screen.md).*
  **Bounded:** if carrying the book requires the book to exist before its chapters, it stops and reports — the card dissolved that once and may have to again.

<a id="u4"></a>
- **U4 — The synopsis carries the card of what it is of.** *Mechanism: `$Synopsis` gains `$for?: $LibraryCard` and `read()` through it — the `$Author`/`$Subject`/`$Canonical` pattern one grade up. Files: `book/Synopsis.tsx`, `index.ts`. Depends on: U3. Realizes: [R1](#r1), [R3](#r3). **Visible end:** a synopsis of another book resolving with that book's module never loaded.*

<a id="u5"></a>
- **U5 — A book's own synopsis is the reflexive one.** *Mechanism: `$Book.synopsis` stops being `chapters.find(first)` and becomes the synopsis whose card is this book's; `A book requires a synopsis` becomes *of itself*. Files: `book/Book.tsx`. Depends on: U4. Realizes: [R2](#r2). **Visible end:** a book holding three others' synopses and one of its own answering its own; a book holding only others' refused, and the message saying a book must account for itself.*

<a id="u6"></a>
- **U6 — A book is a catalogue of books.** *Mechanism: `$Book` gains `read()`, `then()`, `follow()`; `canonical` already passes as the cover; `$TableOfContents` is **untouched** and keeps the chapters. Files: `book/Book.tsx`. Depends on: U2, U3. Realizes: [R5](#r5). **Visible end:** the interface satisfied with **no widening and no union**, and the contents unchanged in the diff.*

<a id="u7"></a>
- **U7 — `$$Chapter`, the contents entry, as one class.** *Mechanism: `$Row` and the plain `$$Chapter` merge under Doug's meaning — writing that stands for a chapter, holding an address, cataloguing that chapter's sections as sub-entries. Files: `book/Row.tsx`, `book/Chapter.tsx`, `book/TableOfContents.tsx`, `index.ts`. Depends on: U3. Realizes: [D1](#d1). **Visible end:** one class where there were two, and the four sibling `$$` forms **examined and reported** rather than swept.*
  **Bounded:** whether `$$` generalizes below the book is [bubbled up](#bubbled-up--needs-dougs-judgment-before-work-starts) and unruled. This unit changes chapter grade only.

<a id="u8"></a>
- **U8 — Catalogues are writing only.** *Mechanism: `$CardCatalogue` stops implementing `$Catalogue$` and becomes the holder; `$LibraryCatalogue` is measured and only proven-dead members are removed ([D7](#d7)). Files: `library/CardCatalogue.tsx`, `library/LibraryCatalogue.tsx`, `index.ts`. Depends on: U6. Realizes: [R6](#r6). **Visible end:** grepping `$Catalogue$` in `src/` returning only writing, and a stated list of what `$LibraryCatalogue` had that survived.*

<a id="u9"></a>
- **U9 — The card's transform, written long.** *Mechanism: `Carried<V>`, `Named`, `Composed`, `Reflexive` and `Recursive` are deleted; the mapping is one line per property on `$LibraryCard`; the completeness check is one separate line that names the unaccounted member. Files: `library/LibraryCard.tsx`. Depends on: U4. Realizes: [R9](#r9). **Visible end:** the card's mapping readable top to bottom, and a member added to `$Book` breaking one line whose error prints its name — **watched going red before its green is trusted**.*

<a id="u10"></a>
- **U10 — Reciprocity, checked in place.** *Mechanism: a book whose subject reads to S is valid only if S carries a synopsis whose card is that book's; both sides answer off cards, so no book is opened. It states its reason through `$valid`. Files: `book/Subject.tsx` or `book/Book.tsx`. Depends on: U5, U6. Realizes: [R8](#r8). **Visible end:** a book pointed at a subject that does not carry it, refused **by name**, drawn where it stands.*

<a id="u11"></a>
- **U11 — Non-canonical catalogues, proved by promise.** *Mechanism: nothing new is built — two catalogues are constructed over the same books, one carrying the books' own synopses and one carrying synopses written for it, and the difference is read off the reference. Files: `tests/`. Depends on: U5. Realizes: [R7](#r7). **Visible end:** a promise that fails the moment canonicality becomes a stored field. **Not a demo surface** ([D9](#d9)).*

### The demo

<a id="u12"></a>
- **U12 — The Shelf restructured.** *Mechanism: the three catalogued books' synopses stand as non-parenthetical chapters of the Shelf; `shelved.map(...)` is **deleted** and the rows carry the entries; each entry reads title, tagline and summary through the card ([D4](#d4)) and the account through the synopsis. Files: `app/src/sections/book/library/the-shelf/**`. Depends on: U5, U7. Realizes: [R10](#r10), [R11](#r11), [R12](#r12), [R13](#r13). **Visible end: the Manifold's synopsis on its own page and in the Shelf's contents, agreeing word for word, with the words written in exactly one place — and a diff in which demo code is DELETED.***
  **Bounded:** if the entries stop reading and start re-deriving what a chapter is, this unit has become [the second parse](../designing-inexplicable-phenomena/04-ways-of-reading.md) and it stops.

<a id="u13"></a>
- **U13 — The refusal, drawn.** *Mechanism: a book repointed at a subject that carries no synopsis of it, rendering the framework's own exception in place. Files: the demo. Depends on: U10, U12. Realizes: [R14](#r14). **Visible end:** the failure on screen, named, with the rest of the page intact.*

<a id="u14"></a>
- **U14 — The prose made true. DOUG'S, not the implementer's.** *Mechanism: **none — this is authoring.** The Shelf's cover and synopsis assert what the old shape was; the new shape needs its own sentences. Files: `the-shelf/01-the-cover.tsx`, `the-shelf/02-the-synopsis.tsx`, and whatever [bubbled-up item 4](#bubbled-up--needs-dougs-judgment-before-work-starts) decides about *The Team*. Depends on: U12. Realizes: [R15](#r15). **Visible end:** the Shelf reading as an accurate account of what it now is.*
  **This unit has no mechanism because it is not work of that kind**, and it is marked so rather than dressed as a refactor.

### The names

<a id="u18"></a>
- **U18 — Eight class names in the core framework, none of them ruled. DOUG'S.** *Doug, 2026-08-12: **"I see so many problematic classes — Quoted, Pointing, Fenced — I don't sign off on any of these. Everything in the core framework has to be chosen carefully and its semantics have to be thoughtful and none of those are right."***

  **How they got in, stated plainly:** all eight landed in [The Parse](13-the-parse.md)'s U12, and that chapter's **D12 says *"nothing is self-named"* — which was false when it was written.** Two of the eight carry *"PROXY NAME, flagged"* in their own source comments and **the sprint record surfaced none of them**. That is [the naming law failing quietly](00-planning.md#the-standing-sprint-discipline-added-2026-08-03-out-of-47s-cost): a proxy that is never surfaced becomes a name by default.

  **The population, with what each thing IS — no proposals, because naming is Doug's:**

  | name | grade | what it is |
  |---|---|---|
  | `$Fenced` | paragraph | a part whose **content is not writing** — source, TeX, a picture — where the notation's fence chooses what draws it |
  | `$Plate` | paragraph | that, drawn as a picture; its alt text is its only words, so that is its caption |
  | `$Displayed` | paragraph | that, drawn as display mathematics |
  | `$Break` | paragraph | a division with **nothing to say** — the degenerate case, content-less and parenthetical |
  | `$Quoted` | paragraph | a paragraph **that knows an angle bounded it**; the mark is mentioned syntax kept on the part |
  | `$Item` | paragraph | a paragraph that knows a bullet or a number bounded it |
  | `$Pointing` | word | a word **carrying a target** — the word-grade form of a link, because `$Link` is a sentence |
  | `$Inline` | word | a word whose **content is not writing** — inline maths, a code span |

  **And they are fewer than eight ideas.** *Content that is not writing* appears twice, at paragraph grade and at word grade. *A paragraph that knows what bounded it* appears twice. *A word carrying a target* appears once. **Four ideas, eight classes** — so the naming question is smaller than the list.

  ### FRAMEWORK ROT — Doug's word, and the condition it names

  ***Doug, 2026-08-12: "Quoted and Item have the same property. We have framework rot."*** And: ***"Pointing and Inline have two classes in one file and neither should be classes as far as I can tell."***

  **Three symptoms, all from one sprint, all verified:**

  - **Duplication dressed as taxonomy.** [`$Quoted`](../../package/src/writing/Quoted.tsx) and `$Item` declare **the same property twice** — `$mark`, and a `mark` getter each. They differ in a **default value** and one extra flag. That is one idea split into two classes.
  - **Classes where Doug does not think classes belong.** [`$Pointing` and `$Inline`](../../package/src/writing/Pointing.tsx) are each a `$Word` subclass adding **one backing field** — a target, and a content. *His judgment, recorded without a counter-proposal, because what they should be instead is his to say.*
  - **Two classes in one file, and it is not two.** `Pointing.tsx` holds two, `Quoted.tsx` two, **`Fenced.tsx` four.** [See C9](#c9).

  **What let it in, because that is the part worth compounding.** The Parse ran the full loop — brainstorm, plan, work, **review**, compound — and its D12 states *"nothing is self-named."* **Eight classes were.** So the review did not ask the question, the record asserted the opposite, and the naming law was satisfied on paper by a sentence nobody checked. *A gate that reports a claim rather than testing it is the same defect as [a green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md), moved from numbers to names.*

  **The standing fix, and it costs one line per sprint:** a sprint states **every class and member it invented**, or states none **and is checked** — a grep of new exported classes against the record. [U16](#u16) carries it, and it is a candidate for compounding into the workflow rather than living here.

  ### And one of them is a WRONG HIERARCHY, not a wrong word

  ***Doug, 2026-08-12: "`$Fenced` is definitely not a type of `$Figure`, so that is 100% gone and we'll have to find a sensible replacement."***

  **And Doug cut it the same day, differently and better than the implementer's diagnosis:** ***"`$Figure` can be the base class of all visual things. And it can have a necessary caption that is perhaps parenthetical so that it has something for copy."***

  **So the line is VISUAL, not *content that is not writing*.** That is why `$Fenced` was never a figure: **a listing is source, not a picture.** A plate is visual; a thematic rule is a drawn line and is visual; a code block typeset in monospace is *text one is not reading as prose*, which is a different thing entirely. The implementer drew the boundary at *not-prose* and swept three unlike things together.

  **The caption ruling solves what the implementer hacked around.** A figure must have `copy` to be valid and a picture has no words — so today [`$Fenced` sets `parenthetical = true` in a constructor](../../package/src/writing/Fenced.tsx) and `$Plate` overrides `caption` to be its alt text. Doug's answer is one rule instead: **the caption is necessary, and it may be parenthetical**, so a figure always has copy and its author decides whether it shows.

  **That is the third appearance of one shape today** — a book's **synopsis**, a section's **summary**, a figure's **caption**: always present, displayed at the author's word. It is the same law [D3](#d3) just made general, and a figure is where it was already needed and faked.

  **What is still unnamed after this ruling**, stated so it is not lost: the paragraph-grade thing a **listing** is — content that is neither prose nor visual — and its **word-grade sibling**, which an inline code span and inline mathematics both are. *Two owed, not the four the implementer's diagnosis implied.*

  **So this was not only a naming debt.** [The Parse](13-the-parse.md)'s U12 shipped a **taxonomy** as well as a vocabulary. **`$Fenced` is struck on Doug's word rather than waiting for its replacement** — a wrong parent left standing is worse than an unnamed one, because everything under it inherits the mistake. *[The Levels of Writing](../the-semantics-of-books/15-the-levels-of-writing.md) says `$Figure` is the paragraph-grade form of "content that is not writing"; that sentence is now wrong and [U16](#u16) corrects it to the visual cut.*

  *Mechanism: **none until Doug names them** — [design owed on his word](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md), and given no files or scenarios until then. The re-cut is a design session, not a rename; once the shape and the words are his, `ts-morph` does the mechanical half. Depends on: Doug. Realizes: the naming law, and the correction above. **Visible end:** the paragraph-grade and word-grade kinds standing under a parent that is actually their parent, carrying names their author chose, and this table emptied.*

### Gates and records

<a id="u15"></a>
- **U15 — The drivers.** *Mechanism: `verify-book.mjs` and `verify-demo.mjs` gain checks for the two readings agreeing, for an entry followed arriving at its book, and for the drawn refusal; **each watched going red before its green is trusted**. Files: both drivers. Depends on: U12, U13. Realizes: R11, R13, R14. **Visible end:** both completing with checkpoint accounting, each watched failing first.*
  **The guard, out of [the checkpoint that compared a number to itself](../solutions/18-the-checkpoint-that-compared-a-number-to-itself.md):** the two readings must be walked by **two different paths** — the book's page and the catalogue's entry — never one expression compared to itself.

<a id="u16"></a>
- **U16 — The records.** *Mechanism: this chapter gains its state; [The Levels of Writing](../the-semantics-of-books/15-the-levels-of-writing.md) and [the register](../the-semantics-of-books/08-the-symbolizing-dyad-and-the-register.md) are edited where the model changed; chapter zero's Sprint D is corrected with what cataloguing turned out to be. Files: those. Depends on: everything.*

## Cleanup — carried alongside, discussed as we go

*Doug, 2026-08-12: **"So we need some cleanup along with this work. Just add cleanup items in the plan and we can discuss as we go."** These are **not scheduled units**. They are a list with citations, so a decision about any of them is cheap to make when the work passes it. Numbered so they can be referred to.*

<a id="c1"></a>**C1 — LOOSE MODULE BINDINGS: a file should be a set of objects related by name, and four files are not.**

*Doug, 2026-08-12, twice. First on the marks: **"Do we really want these as consts? Maybe we want them to be fields that can be overridden or reassigned? Those seem like the kind of things that one might want to futz with in an object hierarchy."** Then the general rule: **"No one said there was allowed to be constants in a file that help out. That is a code smell. Any file that isn't a set of objects related by name (probably with variants of `$`) is a code smell."***

**Swept `src/`. Seventeen module-level bindings that are not the `$X` class / `X` component pair, in four files:**

| file | loose in it | what they are |
|---|---|---|
| [`utilities/html.ts`](../../package/src/utilities/html.ts) | `block`, `text` | **the whole file — it holds no class at all** |
| [`writing/Section.tsx`](../../package/src/writing/Section.tsx) | `display`, `displayed`, `heading`, `opens`, `bullet`, `quote`, `picture`, `rule`, `blocks` | how a section divides — **the notation, as data** |
| [`writing/Sentence.tsx`](../../package/src/writing/Sentence.tsx) | `token`, `link`, `code`, `math`, `escaped` | the same, at sentence grade |
| [`writing/Writing.tsx`](../../package/src/writing/Writing.tsx) | `levels`, `beneath`, `parse` | **the level ORDER**, the step down it, and the walk |

**Three findings, in order of how much they matter:**

1. **The notation is not actually an axis.** [The register says a notation is an axis anyone may answer differently](../the-semantics-of-books/08-the-symbolizing-dyad-and-the-register.md) — but a subclass that wants one mark changed must restate the whole expression, because the marks are unreachable. **As members the claim becomes true; today it is asserted.**
2. **`levels` is the same defect one layer up, and worse.** The parse reads `levels.indexOf(part.level)` off a module array, so **the level ordering itself cannot be extended or reordered by anything.** [The Parse proved a derived *kind* needs no case because level is inherited](13-the-parse.md) — and then put the levels themselves out of reach.
3. **`utilities/html.ts` is the rule's clearest violation** — a file that is only helpers. *Whether `parse` is one too is a real question and not obviously yes: Doug asked for it as "a tool that takes a block and maybe a type that specifies the level," so it may be the one function that earns being one.*

*Discussed as we go, per Doug. **Not scheduled** — but [U7](#u7) and [U9](#u9) both open two of these files, so the decision arrives whether or not it is planned for.*

<a id="c12"></a>**C12 — WE HAVE A PARSER AND WE THROW ITS ANSWER AWAY.** *Doug, 2026-08-12: **"Why do we have those regexes? I thought we were using a markdown parser. It kind of feels like we need a parser if we are writing things that complex."** Checked, and the question was right.*

**At section grade the lexer is used — and its answer is discarded.** [`blocks()`](../../package/src/writing/Section.tsx) calls `lexer(prose)`, walks marked's tokens, reads `at.type` to absorb headings and split lists — and then **pushes `at.raw` and drops the type**. `compose()` then takes those raw strings and **re-recognises each one with the eight regexes**: heading, fence, bullet, quote, picture, rule. *The parser already said what every piece was.*

**That is two populations of one fact** — marked's token type, and our regex re-derivation of it — which is [the defect this branch has filed three times](../solutions/13-the-chapter-that-wrote-its-sections-twice.md) and the third law of [Ways of Reading](../designing-inexplicable-phenomena/04-ways-of-reading.md) broken inside the model rather than inside a view. **They agree today. Nothing makes them.**

**At sentence grade the lexer is not used at all.** `Sentence.tsx` imports nothing from marked; `token` is a **hand-written inline tokenizer** — one expression with eleven alternations — plus four recognisers. *This is the hand-rolled parser standing beside the real one.*

**So [The Parse's own claim needs correcting](13-the-parse.md).** It records *"`marked`'s lexer answers boundaries, our classes answer shape."* **Half true**: at section grade the lexer answers boundaries *and shape*, and we recompute the shape; at sentence grade it answers neither because it is never called.

**The shape of the fix, at mechanism altitude and not decided here:** `divide` carries the token's **kind** forward instead of only its text, so `compose` becomes a lookup rather than a second parse — which deletes most of the eight — and sentence grade uses the inline lexer it already has available. **That would make [C1](#c1) mostly moot**, because the marks that remain would be few enough to be members without ceremony.

*This is the strongest candidate in the cleanup list for becoming its own Solutions chapter, because it is a mechanism class and not a preference.*

**C2 — Two conventions for one filed hazard, in adjacent files.** `Section.tsx` writes `const display = () => /…/g` — a **factory**, built per call, because [a module-level global regex carries `lastIndex`](../solutions/17-the-regex-that-remembered-where-it-stopped.md). `Sentence.tsx` writes `token` as a bare `/…/gu` const, safe **only because `.match` resets it** — which nothing says. A reader cannot tell which is deliberate. *Folds into C1 if the marks become members.*

**C3 — `$IndexCard` declares no level and sets `inline = false`.** [It is the last exception to R1](13-the-parse.md) — held out by that sprint's D11 because Doug was unsure a card was writing. **He has since said it is**, and [R64](06-sprint-48--subjects-and-the-library.md) already proposed the grade. Level alone would let it stand as a part, and `inline` could go.

**C4 — Two members climb to find a book, and [U3](#u3) dissolves both.** [`$Chapter.book`](../../package/src/book/Chapter.tsx) is a single `this.parent` hop; [`$TableOfContents.book`](../../package/src/book/TableOfContents.tsx) is an **eight-hop walk with a counter**, written because the single hop lied on screen. Neither survives a chapter that carries its book.

**C5 — Four `$$` forms are plain classes rather than chemicals.** `$$Section`, `$$Paragraph`, `$$Sentence`, `$$Word`. [Chapter zero's queued question](00-planning.md) — *"does a reference form belong to the chemical hierarchy at all? Answer that and `$Referent` becomes a class in one move."* **[U7](#u7) answers it at chapter grade only**, and whether the meaning Doug just gave `$$` even reaches below the book is [bubbled up](#bubbled-up--needs-dougs-judgment-before-work-starts).

**C6 — `$Composible$` → `$Composible` is free.** Nothing owns the bare name; chapter zero calls it a pure mechanical rename and `ts-morph` is installed for it.

**C7 — `$LibraryCard$` stays as it is.** *Recorded so it is not re-raised: Doug settled it — "Yes I remember the type alias. Because we want there to be dynamic properties. Yes, `$LibraryCard$` is fine."* [U9](#u9) touches the type's body and **not** this.

<a id="c9"></a>**C9 — One file, several classes — and the convention is nowhere stated.** [`Fenced.tsx`](../../package/src/writing/Fenced.tsx) holds **four** exported classes, [`Quoted.tsx`](../../package/src/writing/Quoted.tsx) two, [`Pointing.tsx`](../../package/src/writing/Pointing.tsx) two. *Doug flagged it on Pointing: "two classes in one file."* **`Chapter.tsx` also holds two** — `$Chapter` and `$$Chapter` — and that one may be right, since [U7](#u7) says they are one role. So the rule is not simply *one class per file*; it is that **a file is one idea**, and by that rule `Fenced.tsx` is four ideas and `Chapter.tsx` is one. *Unstated anywhere, which is why it drifted.*

**C10 — `$Punctuation` is the precedent nobody checked against.** It is a `$Word` subclass that exists because a word can be **mentioned** — and `role` is a **property**, not a subclass, so `$Punctuation` earns its class by naming a real kind rather than by carrying a field. *Worth holding beside [U18](#u18): it is the shape a word-grade subclass should have, and the four new ones do not have it.*

<a id="c11"></a>**C11 — A REFERENCE FORM HAS NO COMPONENT, AND THE REASON IS A NAME COLLISION.** *Doug, 2026-08-12: **"We also never figured out how to export these: `export class $$Sentence` — it obviously has the problem of having its component have no good name. We would want it to be `$Sentence`. Hmm. This needs a resolution."***

**And Doug lowered it the same hour, which is the ruling this item carries:** ***"No, maybe `new $$(x)` is right. The reference does seem to take the thing in many cases. Let's not be bothered by that necessarily."*** *A reference is constructed **from what it refers to** — that is what a constructor argument is for — so the absence of a component is a consequence of the shape rather than a workaround for a taken name. **Not a defect. Recorded, not scheduled.***

**The measurement stands and is worth having:** five `$$` classes — `$$Chapter`, `$$Section`, `$$Paragraph`, `$$Sentence`, `$$Word` — **none with a component**, every one built `new $$X(this)` from a `ref` getter, and **all five the identical shape**: `$Catalogue$<the level below>` plus `$Reference$<itself>`. That is Doug's *canonical table of contents entry* at every grade — an entry standing for the thing and cataloguing what is under it, a word's contents being its letters. **Evidence that `$$` does generalize below the book** ([bubbled item 5](#bubbled-up--needs-dougs-judgment-before-work-starts)), offered rather than concluded.

**Where it still touches this sprint, and it is small:** [`$Row`](../../package/src/book/Row.tsx) is the one form that **is** written in JSX and drawn, because it is writing. If [U7](#u7) merges it into `$$Chapter`, that one class is both `new`-constructed and drawn — which may be fine and may not. *Seen when U7 gets there; not solved in advance.*

**C8 — The uncommitted working copy.** Seventy changed paths, and [the push is blocked on a sync ruling Doug already made](13-the-parse.md#blockers). Not this sprint's work, but this sprint's code lands on top of it.

## Test scenarios

**U2 · the probe** — `tsc` run with both interfaces declared; the errors read and reported verbatim; nothing kept.

**U17 · parenthetical** — a synopsis is listed by default · the same class passed `parenthetical` at its placement is hidden · a class's declared default is overridden by a placement, **which a constructor assignment does not permit** — *the promise that states why this is a prop and not an assignment* · each demo book's contents is asserted at its new shape, **because this changes what a reader sees on four pages**.

**U3 · a chapter's book** — a chapter answers its book · a chapter **drawn by something that is not its book** still answers its book · a chapter outside any book answers undefined rather than throwing.

**U4 · the synopsis's card** — a synopsis reads to the book its card stands for · a synopsis with no card is invalid, stating why · grep: no path from a synopsis reaches a book module.

**U5 · the reflexive synopsis** — a book with its own and three others' answers its own · a book with only others' is **refused, naming the missing account of itself** · the existing four demo books still bind unchanged.

**U6 · the book as catalogue** — `$Book implements $Catalogue$<$Book>` compiles with no widening · `follow()` answers the books it catalogues · **`$TableOfContents` is untouched** — the guard, asserted as a diff.

**U7 · `$$Chapter`** — one class where there were two · a contents entry stands for its chapter and catalogues that chapter's sections · the four sibling forms are **listed with what happened to each**.

**U8 · catalogues are writing** — grep: `$Catalogue$` in `src/` returns only writing · the holder still answers `card`, `file`, `find` · what `$LibraryCatalogue` had that survived is **stated**, not implied.

**U9 · the long type** — the mapping reads top to bottom with no conditional · a new member on `$Book` breaks one line and the error **names it** — *red first* · every existing card consumer compiles unchanged.

**U10 · reciprocity** — subject → S with S carrying the synopsis: valid · without it: **invalid, naming both books** · the check opens no book, asserted by module reach.

**U11 · non-canonical** — two catalogues over the same three books, one canonical and one not · the difference is read off the reference · *the promise that fails the moment canonicality becomes a field.*

**U12 · the Shelf** — the two readings of the Manifold's synopsis **agree word for word, walked by two different paths** · the entry is headed by the book's title, not by the word *Synopsis* · following an entry arrives at the book · the byline still resolves · `shelved.map` is gone, stated as a deleted line count · *driven, because none of this is provable by a suite.*

**U13 · the refusal** — the exception drawn where the book stands, the rest of the page intact.

**U15 · the drivers** — both complete with checkpoint accounting, each watched going red first.

**Throughout** — chemistry from **674**, lib from **224**, against a rebuilt chemistry `dist`, app typecheck baseline unchanged **by identity**.

## Risks

1. **[U2](#u2)'s answer may be no**, and the sprint's spine rests on it. *Mitigation: it is first after the floor, it is a throwaway, and a no is reported rather than forced.*
2. **[U3](#u3) changes how every chapter finds its book** — the most-reached member in the model. *Mitigation: bounded, landed alone, and the scenario is the on-screen case that [failed before](../solutions/09-the-parent-that-changed-on-screen.md).*
3. **[U12](#u12) is a rendering change on a page nothing tests.** *Mitigation: driven at the unit, not at the end; and the corroboration is two walks, never one expression.*
4. **[U14](#u14) is authorial and cannot be scheduled like code.** *Mitigation: it is Doug's, it is named as his, and the sprint does not close without it — [a demo contribution is a stop condition](../../../../.claude/library/our-skillset/33-ce-review.md).*
5. **The synopsis's parentheticality is load-bearing in two directions at once** — hidden in its own book, shown as an entry. *Mitigation: [D3](#d3) states the two bits, and a promise asserts each.*
6. **The card could re-inflate.** It was inflated twice in the design session. *Mitigation: [R3](#r3) says the card carries no writing, and the grep is part of the report.*
7. **Eight items are bubbled up and the sprint cannot start on the ones that block.** *Mitigation: items 1–4 gate [U12](#u12) and [U14](#u14) only; U1–U11 and U17 are unblocked, so the model can proceed while Doug rules.*
8. **[U18](#u18) is a naming debt from a previous sprint arriving inside this one.** Eight names in the core framework that its own record claimed did not exist. *Mitigation: it is design owed on Doug's word, given no files and no scenarios, and the population is presented with what each thing IS so the ruling is cheap to make. **The deeper mitigation is procedural:** every sprint from here states its invented names or claims none and is checked, because [this one claimed none and had eight](13-the-parse.md).*
9. **[U17](#u17) changes what a reader sees on four pages** — a flipped default is not a refactor. *Mitigation: it lands third, alone, with a driver checkpoint immediately after, and each book's contents is asserted at its new shape rather than assumed unchanged.*

## Order

**U1** → **U2** → **U17** → U3 → U4 → **U5** → U6 → U7 → U9 → U8 → **U10** → U11 → **U12** → U13 → **U14** → U15 → U16.

**U17 lands third, before anything reads a synopsis.** It changes what is listed and what is hidden across all four books, so every later unit that looks at a contents should look at the settled one.

**Four checkpoints where the drivers run and the numbers are stated:** after U17, after U5, after U9, after U12. A red driver stops the next track rather than being carried.

**U2 sits second on purpose.** Everything from U6 onward assumes an answer the implementer reasoned to and did not compile.

## Self-check

- **Every requirement lands.** R1 → U3, U4 · R2 → U5 · R3 → U4 · R4 → U6, U12 · R5 → U6 · R6 → U8 · R7 → U11 · R8 → U10 · R9 → U9 · R10–R13 → U12 · R14 → U13 · R15 → U14. **R16 → U6, U10** — it is one law with R8, so it lands in the unit that builds the catalogue and the unit that checks reciprocity, and adds no third. **[D3](#d3) → U17** and **the naming law → U18**, all of which arrived after the requirements were written and took their own identifiers rather than being folded into existing ones.
- **And back: every unit names a mechanism and a visible end** — with **three deliberate exceptions, each marked**: [U14](#u14) is authoring rather than building; [U18](#u18) is **design owed on Doug's word** and is given no files and no scenarios, which is [the exact discipline 48 lacked](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md); and [U2](#u2)'s mechanism is a probe that ships nothing.
- **The thinnest unit is U11**, and it is a promise rather than a surface by [D9](#d9)'s cut.
- **The riskiest is U3**, because every derived member that climbs today depends on the thing it changes.
- **The negative claims are greps and they are part of the report:** `$Catalogue$` only on writing, no synopsis reaching a book module, `$TableOfContents` untouched, `Carried<V>` gone.
- **What no unit can own** is whether the Shelf reads well afterwards. [U14](#u14) carries it and it is Doug's to judge at the review, which is where it belongs.

---

---

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

**Which is why the demo now declares its own figure kinds** — `$Equation` and `$Rule` in [`markdown/section.tsx`](../../package/app/src/sections/book/../../markdown/section.tsx) — and the framework ships none. *This caught a live defect: with every figure drawn by the demo's katex, a thematic rule was being typeset as mathematics. Both drivers were green only because no driven page contained a `---`.*

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

*One mechanism worth keeping: `$role? = 'mention' as const` broke every `$$` class's inheritance, because `as const` narrows the property out of the reach of the `$` machinery. `$role?: Role = 'mention'` compiles.*

## `$Referent` IS A CLASS — and the one thing it could not cover is the finding

Doug ruled this in sprint 47 and it had been queued ever since, blocked on exactly one thing: **five reference forms were plain classes rather than chemicals**, so every generic constraint naming `$Referent` demanded 41 members from something that was not one. Making the `$$` family writing removed the block, and then it went in one move — `$Referent extends $Chemical` declaring `valid()`, with `$Writing`, `$Book`, `$Key`, `$Location` and `$Path` extending it. **Sixty-three sites renamed, `tsc` 0.**

**What it could not cover is worth more than the rename.** `$Composible$.follow()` answers a **reading** — the composition you get by dereferencing a catalogue's entries — and a reading is not a chemical. So:

- **`$Composition$` stopped extending `$Referent`** and asks for `valid()` on its own. Everything anyone *writes* that has parts is a chemical besides; a reading is the exception.
- **`$Catalogue$` spells out its reference half** rather than inheriting `$Reference$<$Composition$<T>>`. It still reads to a composition and still continues onto another reference — the equation is unchanged — but the compiler is no longer asked to prove that a reading is a thing in the library.

**One direction was tried and abandoned rather than forced:** dropping the bound on a reference's *target*, so that a reference could point at anything. It produced **95 errors from variance**, not from semantics, and was reverted. *The sentence it was trying to say — a reference is a chemical, what it points at need not be — is still true, and `$Catalogue$` now says it in one place instead of in a type parameter.*

**Three promises hold it**, including the one that asserts a reading is **not** a referent, so the exception cannot be quietly closed later.

## AND THE DRIVER CAUGHT A REAL DEFECT, not just its own staleness

The book driver went red at two manifold checkpoints. **One was the driver's own staleness** — it asserted the manuscript shows `class $Book extends $Chemical`, which is now `$Referent`; that is the gate reading the model correctly and being told the model changed.

**The other was a live bug in the demo.** *"A turned page opens at its head"* failed with `scrollTop` at **9**, not 0. `head()` reset the scroll in a `setTimeout(0)`, which could land **before the turn had painted** — and `light()` leaves a `scrollIntoView({behavior: 'smooth'})` still animating, which then carries the freshly turned page a few pixels down after the reset. It now waits two frames and **jumps rather than glides**. *This was latent: the reset had always been a guess about ordering, and it happened to win until this sprint's extra render work changed the timing. Both drivers were re-run twice to confirm it was not a flake.*

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
