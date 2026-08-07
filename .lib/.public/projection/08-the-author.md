# The Author

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*Opened 2026-08-07, the first of the [five sprints](00-planning.md#the-five-sprints--each-with-three-things-doug-can-check-planned-2026-08-06) cut from the demo. **Status: `implementation-ready`.** The requirements below were worked out from scratch with Doug on 2026-08-07 and **supersede the first draft of this chapter**, which was written before the card system was pulled into scope.*

***Sprints are NAMED, not numbered*** *(Doug, 2026-08-07). Numbers have been a churn source; names do not collide.*

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

## What this sprint is, stated so it cannot drift

**The author, made to work as a real reference — which means building the card system it resolves through.** Doug, 2026-08-07: *"Let's get the author on all books in the library, minimally, along with the autobiography. Let's get the author as a reference working, which means implementing enough of the catalogue and card system to make that work."* And on how much card: ***"The full types, hand built."***

**So this sprint absorbs the core of what chapter zero planned as [Sprint Two — The Card](00-planning.md#sprint-two--the-card), and the record says so rather than pretending it is still a small first sprint.** The reason it merged is not ambition: an author link that resolves by importing a book is not a reference, it is a variable. The card is what makes pointing real.

**And the merge paid for itself immediately.** The bootstrap — *how does a book author itself before it exists* — was this sprint's stated open question. **The card dissolves it**: a surrogate is minted independently of the book, so the self-pointing link has something to point at before the book is built. That is the card earning its place rather than being asserted.

## Rulings, verbatim — the most expensive thing to lose

**From 2026-08-06/07, carried:**

- **"The book can't lie about its authors. There's semantic validation. Don't write a cookbook as the canonical autobiography."**
- **"The author is always something that represents the identity that makes the library in some way. It is the loop because it cannot be reduced to some other thing."** — hence **one author, not ten**; a decomposable author points at parts and the loop dissolves into a list.
- **"You don't exist in the demo library."** Teammates appear as informal signatures in the account of the making, and as **appendix chapters**.
- **"We aren't formalizing what the first person perspective means for now. That is far outside of the scope of this part of the theory."**
- **The two closures are one** — narrative and structural — and the sprint reveals whether they can be made to **coincide**.
- **"You own being done and the review is where I weigh in."**

**From 2026-08-07, new:**

- **"Write it now. It's part of the demo… It's certainly not the hard part although I expect it to be executed flawlessly as it is an essential demo to show what kind of representation authorship must be embodied within."** — the autobiography is **written in full this sprint**.
- **"The full types, hand built."**
- **"The shelf is still the library catalogue, which is a book called the shelf. The card catalogue… it's not really something viewable, but if you'd like to write a chapter about it where you give a card-like display within a specification chapter in The Shelf, that would be okay… The card still has writing. It is a valid thing to exist in a book."**
- **"I think we want the `$CardCatalogue`, `$IndexCard<T>`, `$LibraryCatalogue > $CardCatalogue`, `$LibraryCard > $IndexCard<$Book>`. There are interfaces these need to implement. A card catalogue catalogues T through index cards, and the library catalogue catalogues books through library cards."**
- **The correction that fixed the model**, after a false choice was put to him: *"The author reference is on the book through the cover and set as a property. The LibraryCard is a computed type based on `$IndexCard<$Book>` though it will have dynamic properties. The author reference on the book turns into a library card reference on the book's library card. So too for subject… when the library card is initialized, it is initialized from the code with all static information. If it's a derived type, there should be additional dynamic properties on the library card… And the actual author link has a card from the catalogue at runtime. The library card is a book reference and the author link can be a book reference through its library card."*
- **The team's name, and the book's: "The Team."**
- **"There is a library folder for the card abstraction to go in."**

---

# Requirements

*Approved 2026-08-07. Identifiers are stable and never renumbered. Every requirement names what would be observed if it held.*

## Actors

- **A1 — The author.** Writes a book: its prose, its cover, and the references its cover declares.
- **A2 — The librarian.** Organizes the library: which cards are in the catalogue, and what each stands for.
- **A3 — The reader.** Reads a book and follows its references outward — to its author, and home.
- **A4 — The implementer.** Writes classes against the model and is judged by validation rather than by convention.

## The card family

- **R1. `$IndexCard<T>` is a reference to a T carrying T's surrogate** — what you consult instead of handling the thing. It implements `$Reference$<T>`. *Seen: a card reads to its referent.*
- **R2. `$CardCatalogue` catalogues T through index cards** — a composition of cards that is also a reference to that composition, which is `$Catalogue$<T>`, the interface [Sprint 47](05-sprint-47--the-catalogue.md) already carved. *Seen: it satisfies the interface with no change to the interface.*
- **R3. `$LibraryCard` extends `$IndexCard<$Book>`; `$LibraryCatalogue` extends `$CardCatalogue`** and catalogues books through library cards. *This is what replaces `$$Book` ([R58](06-sprint-48--subjects-and-the-library.md#r58-librarycard-replaces-book--and-the-notation-becomes-vocabulary-at-book-level)).*
- **R4. A card's shape is its book's shape with references converted.** Property names stay **identical**; a property whose value is a book becomes that book's **card**. A book's `author` is an `$Author`; its card's `author` is a `$LibraryCard`. Same for subject. *Seen: the two property lists match name for name.*
- **R5. The card graph is closed — card to card, never card to book.** *Seen: a check completes without any book's module being reached.*
- **R6. A card is initialized from the code with its static information**, and a **derived book type puts additional dynamic properties on its card**. Hand-built this sprint — and **what has to be written by hand is exactly the list the build must later generate** ([R53](06-sprint-48--subjects-and-the-library.md#r53-the-card-is-a-compilation-defined-by-the-public-build-doug-2026-08-06)).
- **R7. A card is writing, and it is a valid thing to exist in a book.** *Seen: a card renders inside a chapter as a card, not as prose.*
- **R8. The author link is a book reference through its library card**, and it takes that card **from the catalogue at runtime**. *Seen: the link resolves with the direct import of the autobiography removed.*

## The author and the loop

- **R9. All four books carry an author on their cover.** *Seen: four names on four covers.*
- **R10. An author renders as its name and nothing else** — the name **is** the reference, with no affordance beside it ([R35](06-sprint-48--subjects-and-the-library.md#collected-in-review)). *Seen: no underline, no button, no label.*
- **R11. All four links arrive at one book: *The Team*.**
- **R12. *The Team*'s own author link arrives at *The Team*.** The self-loop is **in the model**, not in the prose.
- **R13. The canonical autobiography is recognised structurally** — by that self-pointing link — and **never by a field declaring it.** *Seen: a book whose author link points at a book that does not author itself is refused.*
- **R14. An author with a name and no card still renders its name; one with neither is refused.** References degrade honestly.

## The book — *The Team*

- **R15. It narrates how the catalogued books came to be** — the algebra book, the manifold, the shelf — and at the summit, **the invention of the library**. A well-written book by the same author narrating something else **fails**. *This is semantic validation, not editorial taste.*
- **R16. It contains the decision to write the very book being written.** The fixed point, not a memoir about one.
- **R17. Fiction inspired by a true story**, claiming authorship through **quoted references in its own writing** rather than an asserted field — the citation machinery from [Sprint 47](05-sprint-47--the-catalogue.md), doing real work.
- **R18. Teammates appear inside it** — informal signatures and **appendix chapters**. **We are not in the demo library**; the library holds books, the book holds us.
- **R19. It grows a chapter per sprint hereafter.**

## What is seen

- **R20. The Shelf stays the library catalogue, and stays a book.**
- **R21. The Shelf gains a specification chapter that displays a card as a card** — card-like, not prose, and **the card still has writing**. This is the card made visible without pretending the catalogue is a view.
- **R22. Following an author name arrives at *The Team*; following *its* author arrives back where you started.**
- **R23. The shelf's catalogue entries read title and synopsis off the cards** rather than from hand-authored prose — [R37](06-sprint-48--subjects-and-the-library.md#subject-author-and-the-summit), and a violation the demo carries today. *Proposed at the brainstorm and not explicitly ruled; adopted because the sprint went to plan without a no. **Flag it at review if it was not wanted.***

### R24. Every part is authorable — and it supersedes the parse-only law *(Doug, 2026-08-07)*

> **"Every part should be authorable. You should be able to author a sentence one word at a time if you want. Maybe if one word is found, the whole sentence needs to have them? We obviously care more about this at the paragraph and section level. But we need to be able to insert things into sections."**

**This changes the composition model.** The standing law is that a composition's creator writes **prose** and the levels beneath are **found by the parse, never authored** — *"the creator of a paragraph does not specify sentences."* Doug is not repealing the parse; he is saying **authored parts must be able to stand beside found ones**, and the level that matters most is a section accepting something written into it.

**How it surfaced, which is the useful part.** The demo needed a **figure** — a drawn plate inside a chapter. It can be written into a section's text and it renders exactly where it stands, but `$Section.parts()` parses paragraphs out of the section's *copy*, so **the figure is invisible to the model**: it appears on the page and is not one of the section's parts. *A thing that renders and does not exist is the failure mode this whole framework was built to make impossible.*

- **R24a. The mechanism, sketched.** `$Section.parts()` walks its text **in order**, yielding authored block-level writing as parts in place and parsing the prose between them. Nothing above section grade changes.
- **R24b. The open question is Doug's own** — *"maybe if one word is found, the whole sentence needs to have them?"* Whether a level may **mix** authored and found parts, or must be wholly one or the other once anything is authored. **Not answered, and not to be answered by the implementer.**
- **R24c. A code block is owed, and it is PARAGRAPH level.** *"We haven't even invented a code block."* Doug means the **``` fenced** kind — *"I would think a code block is paragraph level. You think code is an insert into a sentence? It can, but I am talking about ``` markdown."* **Inline code is a different thing and may well be sentence-level; the fenced block is a paragraph.** It may be implemented through markdown behind the scenes — his own allowance — but it must exist as a **part**. *Recorded as a correction: the implementer first wrote this down as sentence-level, taking an earlier line too literally.*

**U14 — every part authorable.** *Framework work in `library/.public/package/src/writing/`. **DESIGN OWED on R24b** and therefore refused files and scenarios beyond the sketch until it is ruled. Realizes: R24. **Visible end:** a figure that is a paragraph of its section, and a code block that is a part rather than a rendering.*

**Not started, and it did not exist when this sprint was planned.** Named here rather than absorbed, because [a sprint that grows a framework change mid-work and does not say so](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md) is how 47 became a forever sprint.

### R25. `$` becomes a dependency-injection container — a `$Chemistry`-level feature *(Doug, 2026-08-07)*

> **"I think we want `$` to operate as a DI container for the framework, and that is a `$Chemistry` level feature, but I think it's a really interesting one."**

**This is the proper answer to a hole this sprint papered over twice.** [R55](06-sprint-48--subjects-and-the-library.md#r55--as-a-container-and-cards-built-at-build) proposed it and left it design owed; when the author needed to reach the library catalogue, the implementer invented a module-level holder, and Doug removed it — *"a library catalogue is just a catalogue."* **The right shape is not a holder anywhere; it is `$` supplying what a chemical asks for**, which it is already positioned to do because it is already what constructs instances.

**Framework work, not lib work.** It belongs in [`library/chemistry/package`](../../../chemistry/package/), and it is **not this sprint's** — recorded here because this sprint is where the need was demonstrated rather than argued.

**U15 — `$` as a container.** *`$Chemistry` work. **DESIGN OWED** and therefore refused files and scenarios. Realizes: R25, and closes R55. **Visible end:** a reference that asks for the library catalogue and is given it, with nothing holding a singleton.*

### R27. Specializing how book content looks is the point of the framework *(Doug, 2026-08-07)*

> **"We are definitely going to have to itemize the markdown implementation… When a block has a paragraph, maybe it just parses around it and that paragraph has to be one of them. Maybe we decide that it has to render at the paragraph level in its view. What if we want special types of sentences or words? We need to find a way to support this. There is no point to this framework if we can't specialize how book content looks."**

**This is the strongest statement of [R24](#r24-every-part-is-authorable--and-it-supersedes-the-parse-only-law-doug-2026-08-07) and it raises it from a gap to the framework's reason for existing.** Three things in it, each separable:

- **R27a. Itemize the markdown implementation.** Today a chapter is one prose blob per section, parsed. It must resolve into items.
- **R27b. A block containing an authored paragraph parses AROUND it**, and that paragraph is one of the block's parts — Doug's own sketch. The alternative he names: **the part must render at its own level in its view.**
- **R27c. Specialized sentences and words too**, not only paragraphs. *"What if we want special types of sentences or words?"*

**Naming, corrected the same day.** The implementer wrote `$TheLoop`, `$TheCard` and `$TheCode` — *"What is a loop and why does it have a view? I don't use the phrase loop and it certainly isn't in the semantics of books. You are confusing it with the semantics of knots."* **All three are deleted.** What ships is `$Figure`, a book word, and `$Heading`.

### R26. A figure is writing that draws itself — PARTLY SOLVED, and what remains is R27

**It works, and the answer was Doug's.** *"Can't you just create an inline element that can insert into markdown?"* — **yes.** A figure is a `$Sentence` **whose copy is its caption**: it is valid because it has words, it stands inside a section's prose, and it draws itself around them. That is the shipped `$RibbonMark`/`$Author` seam, and the demo renders with a figure in *The Decision*.

**What was tried and failed, each for a different reason — recorded because each looked correct:**

1. **A block-level `$Paragraph`** ends the section's block early: the figure and **every paragraph after it** vanish.
2. **An inline `$Paragraph` with no copy** is refused at binding — `$Paragraph.valid()` demands letters.
3. **Forcing it valid** renders and then **loops** — *too many re-renders*.
4. **A `$Sentence` subclass declaring props** loops **as well** — and it still loops with the array prop replaced by a scalar, with the derived getter removed, and with sentence-minting suppressed. **A bare `$Figure` with no subclass does not loop.**

**So the residue is precise and it is a framework question, not a demo one: a `$Figure` subclass that declares its own props and overrides a method its `view()` calls will not render.** That is the thing [U14](#r24-every-part-is-authorable--and-it-supersedes-the-parse-only-law-doug-2026-08-07) and R27 have to make possible, and until they do, **a figure can carry a caption but cannot carry data.** Nobody should re-attempt route 1, 2 or 3.

### R26a. The earlier reading of R26, superseded

The demo's figures — the loop drawn from the model, a card printing its own fields, a code listing — **are written and do not render.** Three shapes were tried and each failed differently, which is the finding:

1. **A block-level `$Paragraph`** ends the section's block early: the figure and **every paragraph after it** disappear.
2. **An inline `$Paragraph`** is refused at binding — `$Paragraph.valid()` demands letters and a figure has none — so the whole chapter refuses with *"the binding rejects ''"*.
3. **An inline `$Paragraph` declared valid** renders and then **loops** — *too many re-renders* — and it still loops with sentence-minting suppressed and with array props hoisted out of render.

**This is [R24](#r24-every-part-is-authorable--and-it-supersedes-the-parse-only-law-doug-2026-08-07) biting exactly where it was predicted to.** A figure is a part that must be **authored**, and every route available today smuggles it in as inline writing instead. *The demo ships without figures rather than with a page that renders an error*, and the classes stay in the tree as the specification for what U14 has to make possible.

## Key flows

- **F1 — A book declares its author.** An author writes a cover; the cover carries a name that is a reference. The book reads it through the cover as a property.
- **F2 — A card is minted.** A library card is initialized from the code with the book's static information, and takes its place in the library catalogue.
- **F3 — The loop closes.** An author link asks the catalogue for its card at runtime and reads through it to a book. *The Team*'s link arrives at *The Team*.
- **F4 — A card is read as writing.** A card stands inside a chapter of The Shelf and renders as a card.

## Acceptance examples

- **AE1.** A library card reads to its book.
- **AE2.** The library catalogue answers a card for each of the four books and satisfies `$Catalogue$` **without the interface changing**.
- **AE3.** A book's card carries the **same property names** as the book, with `author` typed as a card rather than as an `$Author`.
- **AE4.** Following any book's author name arrives at *The Team*.
- **AE5.** *The Team*'s author link reads to *The Team*.
- **AE6.** An author link pointing at a book that does **not** author itself is **refused** (R13).
- **AE7.** An author with a name and no card renders the name; with neither, it is refused (R14).
- **AE8.** The author link resolves **with the direct import of *The Team* removed** (R8) — the negative proof.
- **AE9.** A card renders **as a card** inside a chapter of The Shelf (R7, R21).
- **AE10.** The shelf's entries show title and synopsis **read off cards** (R23).

## Out of scope, named

- **`$Subject` validating.** A card carries the subject link as data; only the **author** link is a working, validating reference this sprint. The subject's refusal is [its own sprint's demo](00-planning.md#sprint-three--the-subject).
- **`$Type`.** Its mechanism is still design owed and it gets no unit ([the rule this plan carries](../../../../.claude/library/our-skillset/29-ce-plan.md)).
- **The build.** Cards are hand-built; that hand-built list is the compiler's specification, and the compiler is [Sprint Five](00-planning.md#sprint-five--the-compilation).
- **`$Book.valid()` requiring an author.** Every book in both suites would have to be migrated, and no requirement here asks for it. *Named so it is not discovered as scope mid-work.*
- **The `[link](Name)` parsing form**, whose naming convention is **owed and unruled**. No unit invents it.
- **Anything about the first person**, by ruling.

---

---

# Plan

*Set 2026-08-07. **WHAT, not HOW.** Unit identifiers are never renumbered — U1–U4 keep the concepts they had in this chapter's first draft; the card family takes U5 onward.*

## Decisions

**D1 — The card family lands before any author link is written.** The author points at a card, so building the links first would mean building them on direct imports and retrofitting. *Chosen over: links first — which is precisely what makes AE8's negative proof unprovable, because a retrofit leaves the import in place.*

**D2 — The card graph is closed card-to-card.** A book-valued property on a card is a **card**, never a book. *Chosen over: cards holding their books — which would make "validation without opening a book" a claim the code does not make, and would reintroduce the traversal [R63 deleted](06-sprint-48--subjects-and-the-library.md#r63-there-is-no-walk--library-is-computed-and-validation-happens-in-place).*

**D3 — The self-loop is closed by the card, not by new machinery.** A card is minted independently of its book, so *The Team*'s author link has a target before *The Team* is built. *Chosen over: a late-resolving reference kind — new machinery for a problem the surrogate already solves.* **If this turns out false, it is [raised the moment it appears](00-planning.md#the-standing-sprint-discipline-added-2026-08-03-out-of-47s-cost), never designed around.**

**D4 — Cards are hand-built, and their contents are the specification for the compiler.** Doug ruled the compilation out of the critical path. *Chosen over: generating them now — which would guess the mapping instead of discovering it.*

**D5 — Only the author link validates this sprint.** Subject rides on the card as data. *Chosen over: building `$Subject` alongside — two refusals in one sprint, and the subject's refusal is the next sprint's whole visible end.*

**D6 — The card is made visible inside a book, not as a view of the catalogue.** Doug: the card catalogue *"is not really something viewable."* *Chosen over: a catalogue screen — which would invent a surface he explicitly declined.*

**D8 — The transform is four rules and two exclusions, and it has no exceptions.** *(Doug, 2026-08-07 — this replaced five hand-listed special cases, which was the implementer failing to find a rule.)*

| | |
|---|---|
| a **basic** value | passes through |
| a list of **chapters** | becomes their **title strings** |
| a **book reference** | becomes that book's **card** |
| **everything else complex** | compresses to a **string** — *"replace things you find with the value input to them"* |

**Excluded, as rules rather than lists.** ***Composed*** — everything below chapter grade, `copy` among them: *"You think an index card representation of something includes all words in it? No."* ***Reflexive*** — what points back at the very book the card is for, which the card already **is**. *The second exclusion is the implementer's, not Doug's; applying his rule literally would make `cover`, `canonical` and `ref` each resolve to this card, which is cohesive but redundant. **Flagged for the review.***

**And the rule has no exception for the synopsis.** *Doug: "What part of an index card representation don't you understand? If it has a chapter named Synopsis, what's wrong with having that in the list? It tells you a book has a synopsis."* The implementer proposed an exception; it was refused, and rightly. **The check it turned into:** `$Synopsis` must let an author override its title — *"if a person can't override the title of synopsis by inputting it, that's a bug on synopsis that needs to be fixed."* **Verified: it can.** `$Synopsis` extends `$Chapter` with no bond constructor and no forced title, so its title is whatever the author writes. No bug.

**D9 — `$LibraryCard` is a computed type; `$LibraryCard$` is the class that implements it.** The `$Html$` pattern from `$Chemistry`. *Chosen over: a hand-written class alone — because `implements $LibraryCard` makes **`tsc` prove the mapping is implementable**, not merely expressible, so a future rule that produces something nobody can build stops compiling.*

**D7 — Nothing is named that Doug has not named.** `$IndexCard`, `$CardCatalogue`, `$LibraryCard`, `$LibraryCatalogue` and *The Team* are his. Where a unit needs a name he has not given, **it stops and reports the population**.

## Units

### The card family — `library/.public/package/src/library/`

- **U5 — `$IndexCard<T>`.** A reference to a T that carries T's surrogate, implementing `$Reference$<T>`.
  *Mechanism: the shipped reference-kind pattern — a writing-level chemical holding static metadata, `read()` answering the referent, `then()` composing a path, exactly as `$Bookmark` and `$RibbonMark` do. Zero framework change expected. Files: new under `src/library/`, `src/index.ts`. Depends on: nothing. Realizes: R1. **Visible end:** a card that reads to its referent — AE1.*

- **U6 — `$CardCatalogue`.** Catalogues T through index cards; a composition of cards that is also a reference to that composition.
  *Mechanism: implement `$Catalogue$<T>` against `$Composible$`, the way `$TableOfContents` already does one level down — the interface is not to be changed to fit. Files: new under `src/library/`, `src/index.ts`. Depends on: U5. Realizes: R2. **Visible end:** the interface satisfied unchanged — AE2.*

- **U7 — `$LibraryCard`.** Extends `$IndexCard<$Book>`. The book's surrogate: property names identical to the book's, with book-valued properties carried as **cards**.
  *Mechanism: a subclass fixing T to `$Book` and declaring the surrogate members; `author` typed as `$LibraryCard`. Files: new under `src/library/`, `src/index.ts`. Depends on: U5. Realizes: R3, R4, R5. **Visible end:** a card whose property names match its book's, `author` among them — AE3.*

- **U8 — `$LibraryCatalogue`.** Extends `$CardCatalogue`, cataloguing books through library cards. The one catalogue the demo's four books are in.
  *Mechanism: a subclass fixing the card kind; lookup from a book's identity to its card. **How an author link obtains the catalogue instance is a HOW**, decided with the code open — and if it needs machinery the framework does not have, it is raised. Files: new under `src/library/`, `src/index.ts`. Depends on: U6, U7. Realizes: R3, R8. **Visible end:** four books, four cards, one catalogue — AE2.*

- **U9 — The card's computed type.** The mapping from a book's type to its card's type expressed **as a type** where it can be, with dynamic properties for derived book types.
  *Mechanism: a mapped type over the book's members converting book-valued properties to their card references, plus an informal extension surface for subtype-derived information. Files: the card unit's files. Depends on: U7. Realizes: R4, R6. **Visible end:** the mapping holds at `tsc` rather than by convention — AE3.*

### The author — `library/.public/package/src/book/`

- **U2 — `$Author`, revised.** A book reference carrying a display name, resolving **through its library card**, taken from the catalogue at runtime. Declared on the cover and read by the book as a property.
  *Mechanism: a writing-level reference kind whose copy is the display name; `read()` goes card → book. **Partly built already** — the class, the cover accessor and 8 green tests exist in the working tree from before the card system was in scope, and they resolve through a `$Reference$<$Book>` rather than through a card. **That is the part this unit changes.** Files: `src/book/Author.tsx`, `src/book/Cover.tsx`, `src/book/Book.tsx`, `src/index.ts`. Depends on: U8. Realizes: R8, R10, R14. **Visible end:** a name on a cover that follows — AE4, AE7.*

- **U4 — The team's name.** ***The Team*** — the display name every author link prints, and the title of the book it arrives at. **The same words**, so the fixed point is legible before anything is followed.
  *Mechanism: none — it is a name, and it is Doug's. Realizes: R11. **Visible end:** the name on four covers.*

### The book — `library/.public/package/app/src/sections/book/library/`

- **U1 — *The Team*, the autobiography.** The fourth book, **written in full**: the account of how the algebra book, the manifold and the shelf came to be, and at the summit the invention of the library. It contains **the decision to write the very book being written**. Fiction inspired by a true story; authorship claimed through **quoted references in its own writing**. Teammates appear as informal signatures and appendix chapters.
  *Mechanism: an ordinary `$Book`, authored the way algebra and the manifold are, using Sprint 47's citation apparatus for the quoted references. Files: new under `app/src/sections/book/library/the-team/`. Depends on: U4. Realizes: R15–R19. **Visible end:** a book you can read that describes its own writing — and it is [the thing a hand-authored page cannot fake](00-planning.md#the-fourth-book--the-canonical-autobiography).*
  ***Doug's standard, in his words: "I expect it to be executed flawlessly."** Cycles are budgeted for this rather than squeezed after the model.*

- **U10 — The four hand-built cards.** One library card per demo book, initialized from the code with its static information, placed in the library catalogue.
  *Mechanism: hand-authored card construction in the demo code; the list of everything that had to be written by hand is **recorded as it is written**, because that list is the compiler's specification. Files: new under `app/src/sections/book/library/`. Depends on: U8, U9. Realizes: R6. **Visible end:** the list itself, reviewable — and every entry on it either derivable from the code or a finding.*

- **U3 — The links, and the loop.** Each of the four books gets an author link to *The Team*; *The Team*'s own link points at *The Team*. A link pointing at a book that does not author itself is refused.
  *Mechanism: this is where D3 is tested — the card is minted before the book, so the self-pointing link resolves. Files: the four demo books. Depends on: U2, U10. Realizes: R9, R11, R12, R13. **Visible end:** following any author arrives at one book; following that book's author arrives back — AE4, AE5, AE6.*

### What is seen — `library/.public/package/app/src/sections/`

- **U11 — The card, displayed as a card.** A specification chapter in The Shelf that shows a library card **as a card** rather than as prose, with its writing intact.
  *Mechanism: a `$Chapter` subclass whose view renders the card's own writing in card form — the self-rendering-reference pattern, subclass plus `view()`. Files: new under `app/src/sections/book/library/the-shelf/`, a styled sheet. Depends on: U7, U10. Realizes: R7, R21. **Visible end:** a page where a card looks like a card — AE9.*

- **U12 — The shelf's entries read off cards.** The written face of the shelf takes title and synopsis from the cards instead of from hand-authored prose.
  *Mechanism: the entry view reads the card rather than a written chapter; the hand-authored entry chapters die. Files: `app/src/sections/the-books.tsx`, the shelf's entry chapters. Depends on: U10. Realizes: R23. **Visible end:** entries whose text cannot drift from the books — AE10.*

### Records

- **U13 — The branch library moves with the code**, and **the session ends with a push**. The register is brought to the built truth by its authors, and the work reaches the [object of record](../../../../.claude/library/..environmentalism/06-on-sync.md) rather than sitting in a working copy.
  *Files: this chapter, `../the-semantics-of-books/`. Depends on: everything.*

## Test scenarios

*Each names input, action and expected outcome, and says which acceptance example it covers.*

**U5 — `$IndexCard<T>`.** A card made for a referent: `read()` answers that referent — **AE1**. · A card with a name and no referent: renders its name, and `read()` refuses with a sentence saying it never pointed. · A card composed with `then()`: answers a path, like every other reference kind.

**U6 — `$CardCatalogue`.** A catalogue of three cards: its parts are cards, following them arrives at the referents, and it reads back as a reference to that composition — **AE2**. · An empty catalogue: answers an empty composition, **not an absence**. · The interface is satisfied **with no edit to `$Catalogue$`** — if an edit is needed, that is a finding and it is reported.

**U7, U9 — `$LibraryCard` and its type.** A card for a book: every property name on the card matches a property name on the book — **AE3**. · The card's `author` is a **card**, not an `$Author` — **AE3**, and this is D2. · A card for a book **subtype**: the subtype's derived information is reachable on the card without the card class knowing it in advance. · No path from a card reaches a `$Book` module — **the closed-graph check, D2**.

**U8 — `$LibraryCatalogue`.** Four books, four cards, one catalogue; each card found from its book's identity — **AE2**. · A lookup for a book with no card: refuses, naming the book rather than answering undefined.

**U2 — `$Author`.** An author reads to its book **through its card** — **AE4**. · An author renders its display name and **nothing announcing it is a reference** — R10. · An author with a name and no card: renders the name; `read()` refuses — **AE7**. · An author with neither: refused — **AE7**. · A book answers the author standing in its cover; a book with none answers nothing. *(Regression: the 8 tests already written must still pass, or their promise changed and the change is stated.)*

**U3 — the loop.** Each of the four books' author reads to *The Team* — **AE4**. · *The Team*'s author reads to *The Team* — **AE5**. · An author link pointing at a book whose own link points elsewhere: **refused** — **AE6**. · **The negative proof:** the link resolves with the direct import of *The Team* removed — **AE8**.

**U1 — *The Team*.** It binds as a valid book — a cover at zero, a synopsis, at most one table of contents. · Its quoted references resolve. · Its appendix chapters are reachable and are **not** mistaken for its narrative chapters. · It contains the passage recording the decision to write it, and that passage is **findable in the model**, not only on the page — R16.

**U11, U12 — what is seen.** Driven and **read**: a card renders as a card in a chapter of The Shelf — **AE9**. · The shelf's entries show title and synopsis read off cards — **AE10**. · Following an author name on a cover arrives at *The Team*; following its author arrives back — **AE4, AE5**. Per the standing law: green → driven → **seen**.

**Regression, the whole time.** Chemistry **630/630**, lib **≥115/116** (the one red is the [refusal-message defect](00-planning.md#validation-that-says-why--carried-out-of-sprint-48-doug-2026-08-06), carried and **not this sprint's to fix**), three packages **tsc 0**.

## Origin tracing

| requirement | lands in |
|---|---|
| R1 | U5 |
| R2 | U6 |
| R3 | U7, U8 |
| R4, R5 | U7, U9 |
| R6 | U9, U10 |
| R7 | U11 |
| R8 | U2, U8 |
| R9, R11, R12, R13 | U3 |
| R10, R14 | U2 |
| R11 | U4 |
| R15–R19 | U1 |
| R20 | **held, not built** — The Shelf already is the library catalogue and already is a book; U12 must not change that |
| R21 | U11 |
| R22 | U3, U11 |
| R23 | U12 |
| A1–A4 | F1–F4, and through them the units above |
| F1 | U2, U3 |
| F2 | U8, U10 |
| F3 | U2, U3 |
| F4 | U11 |
| AE1–AE10 | named in the scenarios above |

**And back the other way — every unit names a mechanism and a visible end.** U4 is the one unit with no mechanism, because it is a name and not a build; it is marked so rather than dressed as work.

## Order

1. **U5 → U6 → U7 → U9 → U8** — the card family, complete before anything points through it.
2. **U4** — the name, which every later unit prints.
3. **U2** — the author reference, revised onto cards.
4. **U10** — the four hand-built cards, with the hand-written list recorded as it is written.
5. **U1** — *The Team*, written in full. **Its own stretch, not a tail on the model's.**
6. **U3** — the links and the loop, **driven the day they exist** rather than after content piles on them.
7. **U11 → U12** — the card seen, and the entries read off cards.
8. **U13** — the records and the push, in the same act as the work.

## Risks, and what mitigates each

1. **This is two sprints in one**, merged by ruling. *Mitigation: the order front-loads the card family. **The honest signal to watch:** if U5–U9 have not closed before *The Team* is being written, the sprint is running long and Doug hears it then, not at the retro.*
2. **The computed card type may not be fully expressible.** A mapped type over a class of getters and methods is not free. *Mitigation: U9 may fall back to a per-book hand-written type **with the mapping stated**, and the gap is reported as the compiler's problem rather than hidden — that report is exactly what [Sprint Five](00-planning.md#sprint-five--the-compilation) needs.*
3. **The autobiography is real writing and must be flawless** (Doug's word). *Mitigation: it is its own step in the order with cycles budgeted, never squeezed in after the model.*
4. **How an author link obtains the catalogue is a HOW, undecided here.** *Mitigation: decided with the code open; if it needs framework machinery, it is **raised the moment it appears**.*
5. **D3 may be wrong** — the card may not dissolve the bootstrap. *Mitigation: it is the sprint's REVEALED question, so a surprise here is a **finding**, not a failure — but it must be raised, never designed around.*
6. **The demo law binds:** impressive, aesthetically unique, a meaningful use case. *Mitigation: the *extremely well-designed* filter runs before Doug sees it, per [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md).*

## Self-check

*Where this plan is thin, stated rather than hidden.*

- **U8 is the unit most likely to grow.** Lookup, identity and catalogue access are one idea in the requirements and may be two in practice. A split keeps U8 and takes the next unused identifier.
- **U9 is the unit least proven.** Nothing in the codebase does type-level mapping today, so it is the one place the plan is reasoning rather than pointing at prior art.
- **R20 has no unit and that is correct** — it is a constraint on U12, not work. It is in the tracing table as *held, not built* so it cannot be read as a drop.
- **R23 was proposed, not ruled.** It is adopted, and it is flagged in its own requirement so the review can undo it cheaply.
- **U2 is partly built already**, from before cards were in scope. The plan says what changes rather than pretending the tree is clean.

## The team

**Cathy** on the card family and the author reference. **Arthur** on the ontology and this chapter. **Libby** on *The Team* as a book, and on the quoted references doing real work. **Queenie** on the loop's promises and the negative proof. **Phillip** and **Gabby** on the card seen as a card. Bench: Adam, David, Nancy; Claude on call.

## Where things stand

*Written 2026-08-07 at the plan. **The next session opens by reading this and verifies against the working copy before acting.***

### State

**Complete and verified.** **U5** `$IndexCard` (8 tests) · **U6** `$CardCatalogue` · **U7/U9** the `$LibraryCard` computed type and `$LibraryCard$`, the class that implements it · **U8** `$LibraryCatalogue` · **U2** `$Author`, resolving through the catalogue · **U4** the name, *The Team* · **U3 in the model** — the loop closes, 12 tests.

**THE LOOP CLOSES.** An author resolves **by name** through the library catalogue and never holds or imports a book — its only book reference is a `type` import, which erases at runtime, **so [AE8](#acceptance-examples)'s negative proof is a fact about the compiled output rather than a discipline anyone keeps.** The autobiography authors itself; every other book arrives at it; following the destination's own author lands back. *And the name Doug chose is what makes it work: an author's display name and its book's name are the same words, so resolution by name is the loop.*

**Not started:** **U1** — *The Team*, the book itself, written in full · **U10** the four hand-built cards in the demo · **U11** the card shown as a card · **U12** the shelf's entries read off cards · **U13** the records.

### Members invented without consulting Doug — ALL PROXIES, for the review

*Doug, 2026-08-07: **"bring up all members that you invented in the framework without consulting me. They should be considered proxies."** Every name below is the implementer's, held only until it is ruled on. **None of them is adopted.** Recorded here rather than in conversation because a proxy that is never surfaced becomes a name by default, which is [the naming law failing quietly](00-planning.md#the-standing-sprint-discipline-added-2026-08-03-out-of-47s-cost).*

| member | on | what it does |
|---|---|---|
| `name` / `$name` | `$IndexCard` | what the card is filed under, and its heading |
| `of` / `$of` | `$IndexCard` | how the card reaches its referent — **held lazily, which is what lets a card exist before its book** |
| `properties()` | `$IndexCard` | the fields the card carries, enumerated |
| `written(property)` | `$IndexCard` | one field's value, as writing |
| `printed(value)` | `$IndexCard` | how a value becomes a string |
| `cards` | `$CardCatalogue` | its parts, as cards |
| `card(name)` | `$CardCatalogue` | the lookup; refuses and names what was asked |
| `holds(name)` | `$CardCatalogue` | whether the lookup would succeed |
| `name` | `$Author` | its display name — its own copy |
| `card` | `$Author` | the library card it holds |

**Not invented, and named so the list is honest:** `$for` on `$Author` follows `$Bookmark.$for`, which is shipped precedent rather than a new name.

**And a `$…$`-wrapped property is a code smell** *(Doug)*. Two were written this session — `$machinery$` and `$held$` — and both are gone: the first when the enumeration stopped caching, the second with the singleton it served.

### Two structural findings, both from the framework rather than the design

1. **A card must declare itself NOT inline.** `$Writing` makes everything inline, so cards were absorbed into the catalogue's *text* instead of arriving as its children — the same mechanism that lets an `$Author` sit inside a sentence. A card is a block, as a section is.
2. **The held catalogue cannot be a `static`.** Chemistry **lifts classes**, so a static assigned inside a bond constructor lands on the lifted copy and is never seen through the imported class. It lives in module state. *This is the same lifting that defeated three attempts at property enumeration; it is worth knowing once.* **The holder is provisional plumbing and wants Doug's [R55](06-sprint-48--subjects-and-the-library.md#r55--as-a-container-and-cards-built-at-build) design (`$` as a container) rather than a name.**

### The demo's existing range — read before designing the fourth book

- **The Algebra** — indigo night chrome (`#232a4d → #0f1326`) around a **warm cream sheet** (`#fbf9f3`), gold accent, serif on the paper and monospace on the frame.
- **The Manifold** — green night (`#213528 → #0e1a12`), sage text, mint accent, a wooden rail at `#8a6238`.
- **The Shelf** — graphite spines turning over to warm parchment (`#eae4d8 → #dcd4c3`).

**Both readers are dark chrome around a light page, and both are cool.** *The Team* must not be a third of those. **Proposed and not yet approved:** full light, no chrome — a working manuscript, warm paper edge to edge, with **the citation apparatus visible as the design**, since its quoted references *are* its authorship claim ([R17](#the-book--the-team)).

### What U5 turned out to be — Doug's correction, and it improved the design

**I built a bookmark with a label on it and called it a card.** Doug: *"Why is index card a bookmark? It is a thing that is intended to have metadata. It doesn't function on its own… It is a card that prints what's on it. It is not special because it has a reference system. It is a card. Look at the name."*

So a card's defining behaviour is **enumerating its own fields and printing them**, and the reference system is incidental to being a card. **The same mechanism satisfies two requirements at once** — [R4](#the-card-family) (property names identical to the book's) and [R6](#the-card-family) (a derived card's extra properties appear without the class knowing them) are one behaviour, not two features.

**Three wrong instruments before the right one, all corrected by Doug and worth recording because each looked reasonable:**
1. **Walking the prototype chain for getters** — *"Fields are not prototype level. This is basic JavaScript."*
2. **`Object.keys(this)`** — *"many chemicals are made by object create. You don't want the instance's own prototype."* Under `Object.create` the fields live on the object the instance was made from, so own-keys misses them.
3. **`for…in` over `$`-prefixed keys** — correct. And the machinery is excluded by **diffing against a bare card** rather than by a hardcoded list, so it cannot fall out of step with the framework.

**And the property D3 depends on is now proven rather than argued:** a card made *before* its book exists reads correctly once the book arrives — `tests/library/card.test.tsx`, *"reaches its referent late."*

### Verification, with numbers — from fresh runs this session

Chemistry **630/630** (58 files). Lib **123/124** (11 files) — the one red is the refusal-message defect, carried and not this sprint's. Lib **tsc 0**. Chemistry `dist` **rebuilt before the lib suite ran**, without which the number proves nothing.

### Pushed this session

Library to identity `inexplicable-phenomena` at `cfe7fb0` — **the branch was three chapters behind and nobody knew**. Code to the project repo at `fe4e41c`.

### Blockers

- **The `[link](Name)` convention** — owed, unruled, Doug's. No unit invents it, and none is blocked on it.
- **Nothing else.** The team's name and the card family's names are ruled.

### Wrong turns already taken — do not repeat these

- **Running the lib suite without rebuilding chemistry's `dist`** gives a false green. [Filed](../solutions/05-the-suite-that-passed-against-a-stale-build.md).
- **Adding an affordance beside a name to make it followable.** The name *is* the reference. [Filed](../solutions/03-the-link-i-built-three-times.md).
- **Interpolating a built chemical instance into JSX.** It does not bind; author the element instead.
- **Putting a false choice to Doug** — asking whether an author *holds* its card or *reaches* for it, when the real answer was that the card graph is card-to-card and the link takes its card from the catalogue at runtime. **A question with two wrong options is worse than no question.**
- **Writing a handoff that does not commit.** The branch library sat three chapters behind the working copy because the last session's handoff wrote the record and never pushed it.

### Pointers, with what is load-bearing at each

- [Chapter zero](00-planning.md) — **the twenty paragraphs**, the only place the whole design is said at once.
- [Sprint 48](06-sprint-48--subjects-and-the-library.md) — **R38–R64 with the reasoning behind each**. Closed; do not reopen. Note **R54 is superseded** here: the catalogue is a class, not a variable.
- [`marks.tsx`](../../package/app/src/sections/book/library/the-manifold/marks.tsx) — the prior art for a reference that renders itself. **Open it before U5.**
- [`Bookmark.tsx`](../../package/src/book/Bookmark.tsx) — the reference-kind template `$Author` was built on, and the one `$IndexCard` should follow.
- [Solutions](../solutions/.cover.md) — five chapters, indexed by symptom.
