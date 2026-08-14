# The Subject

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*Opened 2026-08-07 as a brainstorm — the next of the [five sprints](00-planning.md#the-five-sprints--each-with-three-things-doug-can-check-planned-2026-08-06) cut from the demo, after [The Author](08-the-author.md) absorbed the core of The Card. **Status: `implementation-ready`** — the interview closed 2026-08-07 with Doug's cut stated in his words, and the [Plan](#plan) was set the same day, enriching this chapter in place. Sprints are **named, not numbered** (Doug, 2026-08-07).*

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

## The charge, Doug's — 2026-08-07, verbatim

*Given at the brainstorm's opening, after setting aside the implementer's aggregation of the record: "I have no clue what that means. That is an aggregation of something that is not my domain language." The charge is these words, not chapter zero's compression of them.*

> "Some books catalogue other books. It is not unlike how the author tag points to a certain type of book. Such a book defines its subject. Much like a TableOfContents reaches into a book's chapters, grabs the summaries and taglines and constructs something, a book that represents a subject will largely be constructed from the books that declare themselves part of the subject. It won't appear from nowhere."

**And a ruling on shipped behaviour, in the same breath — the table of contents changes:**

> "Actually, I think we should change the table of contents — books should have to put one there. It doesn't appear out of nowhere, but it can have its parts automatically created. Change that."

**The subject book, same shape:**

> "But with the subject, the book doesn't appear out of nowhere, but maybe we can have the chapters dedicated to the books in the subject be automatically inferred if absent. The subject should have the power to override them. The subject should have a canonical book and that is something that should be declared. Maybe multiple canonical books of different types."

**And the specification, which is the part to figure out:**

> "Now, other chapters of the subject catalogue can provide a specification for the meaning of the subject. It can specify types, those types can have code, and in some way, they can weigh in to constrain the properties of the book in the subject. We need to figure out how all of that can work."

**The pattern under all of it, stated once:** a book is **declared by its author and constructed by the model** — the table of contents is put there and its parts auto-create; the subject book is written and its book-chapters auto-infer, overridable; nothing appears from nowhere, and nothing is hand-maintained that the model can derive.

## What chapter zero promises for this sprint

*Carried from [the five sprints](00-planning.md#the-five-sprints--each-with-three-things-doug-can-check-planned-2026-08-06), written 2026-08-06. The three axes, verbatim:*

> **SEEN.** Point a subject at a book that is not a catalogue, and **read the validation failure on the page** — naming the type demanded and the book that failed it.
>
> **REVEALED.** **Whether in-place validation is actually possible** ([R63](06-sprint-48--subjects-and-the-library.md#r63-there-is-no-walk--library-is-computed-and-validation-happens-in-place)). If any check has to reach the book rather than the card, the card's shape is wrong and we learn it here rather than in Sprint Five. **Doug checks: did anything have to open a book to validate?**
>
> **PROMISED.** A subject pointing at a non-catalogue is invalid. `$Canonical` is unique, and reciprocal — the canonical has that book in its subject. A subject validates without loading its referent.

## Rulings carried, verbatim — the most expensive thing to lose

- **[R39](06-sprint-48--subjects-and-the-library.md#the-reference-checks-type-design-doug-2026-08-06--supersedes-r4):** "`$Subject` is a book reference that validates its referent wears the catalogue type." A subject cannot point at a book that is not a catalogue. The check lives in the reference, not in a class hierarchy.
- **[R63](06-sprint-48--subjects-and-the-library.md#r63-there-is-no-walk--library-is-computed-and-validation-happens-in-place):** "The whole point of library cards is that enough metadata floats around to do in-place validation." No walk, no climb, no `seen` set.
- **[R47](06-sprint-48--subjects-and-the-library.md#what-a-catalogue-specifies-and-how-validation-runs-doug-2026-08-06):** `$Canonical` — a book reference a subject declares. The canonical must actually **have that book in its subject**, and **there can be only one**.
- **[R46](06-sprint-48--subjects-and-the-library.md#what-a-catalogue-specifies-and-how-validation-runs-doug-2026-08-06):** a catalogue may have unwritten chapters — it **reaches to see what books have it as their subject**, and those appear automatically.
- **[R61](06-sprint-48--subjects-and-the-library.md#r61-a-library-is-the-universe--there-is-one-and-library-validation-is-that-they-all-agree):** a library is the universe; the point of subject validation is that **everything in the library catalogue shares one single book that is the library** — held for Sprint Four, but the subject is what it computes from.
- **[The Author's D5](08-the-author.md#decisions):** only the author link validated that sprint; **"the subject's validation failure is the next sprint's whole visible end."**
- **Validation that says why** ([carried out of 48](00-planning.md#done--validation-says-why-built-in-the-parse-2026-08-12)): a validation failure states its reason. The Author sprint proved the shape — the more specific class states its own reason (`$Cover`, and the suite went fully green on it).

## The starting condition, verified 2026-08-07

- [`Subject.tsx`](../../package/src/book/Subject.tsx) and [`Literature.tsx`](../../package/src/library/Literature.tsx) were **zero bytes** — the files existed and nothing was in them.
- The word *subject* appeared **nowhere in the package source** (`grep -i subject src/` — no matches). No cover carried one, no card carried one, no book read one.
- What The Author left standing: the card family ([`IndexCard`](../../package/src/library/IndexCard.tsx), `LibraryCard` *(deleted; the demo declares its own card)*, `LibraryCatalogue` *(deleted)*), the [author resolving through a card](../../package/src/book/Author.tsx), [four hand-built cards](../../package/app/src/sections/book/library/the-team/card.tsx), and the loop closed in the model.
- **[The Author's R13](08-the-author.md#the-author-and-the-loop) was never built:** a book whose author link points at a book that does not author itself is not caught — no author validation existed at all.

## Rulings from the interview, 2026-08-07

- **The canonical: ONE, for now.** Exactly one declared canonical per subject this sprint; reciprocity carried from [R47](06-sprint-48--subjects-and-the-library.md#what-a-catalogue-specifies-and-how-validation-runs-doug-2026-08-06). *"Maybe multiple canonical books of different types"* stays **recorded as a direction, not built** — the declaration should not have to be reworked to admit a second of a different type, but nothing beyond one is scope.

- **Code, types, and the specification — Doug's, verbatim:** *"A subject catalogue can be a specification. Maybe that type can be formalized somehow, but for now, I think code needs to be writeable in a chapter, and a type reference needs to be something like an import statement. Types can be expressed in the book, and we need `$Type` to be a sort of reference that proceeds up the subject chain to the library. We are going to need to specify what it means for content in a book to be code. Yes, I think that code should weigh in at validation. Let's build a way for that to happen. The library system should be extensible through code. That's one of the ways that makes it powerful. It is self-specifying."*

- **The route to code in a book — Doug's, verbatim:** *"A function itself can be toString'd into the code, so there's no reason why a code block couldn't be populated by a function on the class. It will be part of the book. I don't think that should be the only way it can get there but it is an easy way to get TypeScript support."* **The same object is the running constraint and the printed chapter** — the book shows exactly the code that judges, which is self-specification made visible.

- **What this settles about direction:** validation runs where the book binds — a book judging itself against its types is judging a thing **already present**, so no referent loads. What is *reached* is the **type**, resolving up the subject chain like an import ([R17](06-sprint-48--subjects-and-the-library.md#the-type-system)'s scoping, [R16](06-sprint-48--subjects-and-the-library.md#the-type-system)'s reference-to-a-part). The in-place law ([R63](06-sprint-48--subjects-and-the-library.md#r63-there-is-no-walk--library-is-computed-and-validation-happens-in-place)) governed *subject* validation and is untouched by this.

- **A collision to keep visible, not resolved here:** code as book content brushes against [The Author's R24](08-the-author.md#r24-every-part-is-authorable--and-it-supersedes-the-parse-only-law-doug-2026-08-07) (authored parts, explicitly *not next*) and R24c (the code block, owed, paragraph level). Code at **chapter** grade works today — The Team's two appendices carry the framework's own code as chapters — while an authored part **inside a section** is the residue the figure work filed.

- **The demo's subject — Doug's, verbatim:** *"The Shelf represents the library. It is the subject that catalogues itself, and there can only be one of those per library. That's the subject. Now what subject is at the top of this library? I would say that the top level subject might be called **Demonstration** — it is a library about demonstration, authored by the team. See how it's a library that contains its own identity? That's what libraries do."* No fifth book — the self-cataloguing subject is The Shelf, and *Demonstration* is his proposed name for what it represents (hedged with "might," so held as his proposal, not yet adopted).

- **There is no one name — Doug's, verbatim, closing the naming thread:** *"No, the name of the autobiography does not need to be the name. There is no one name. Perhaps the team has a different identity when writing about manifolds. My name is Doug sometimes, and Douglas Michael Rubino other times. There is no single name. Math / Maths / Mathematics — there is no single name for the subject. The person writing the subject chooses how to display it. It's like choosing a font, except instead, it's choosing its exact representational form."* **What this settles:** no authority record, no enforced heading, no uniqueness of names anywhere — the display form belongs to the **writer of the reference**, and the association to the referent is the **held card**. This is [R57](06-sprint-48--subjects-and-the-library.md#r57-references-are-not-unique-and-never-were) extended to names: **many names, one referent, and the name is part of the reference's own writing.** The Author sprint's resolution-by-name was construction convenience, not law; the law is the card.

- **Finding uniquely is the catalogue's job — Doug's, verbatim:** *"This is what the library catalogue does. And I want you to read the primary source and whatever you can to understand how that works. How are library cards constructed in the demo and how will they be constructed. I think the build that constructs them might be a later sprint. Perhaps the library catalogue has ways of looking things up — author: whatever, subject: whatever, title: whatever — those are the standard ways that cards are indexed in a library catalogue."*

- **The reading he ordered, done the same hour** *([the conversation](../../../../../dna-library/library/claude-dna/conversations/2026-07-18-the-semantics-of-books.md), quoted by line):* **L891, Doug:** *"A Reference is not a type of name. The card in a card catalogue is a reference right? It is not a name. You are missing Title, Author — aren't those book basics…?"* — and the correction it forced, **L914:** *"the same anatomy appears every time: identification coupled with location. A reference has a name and a locator."* **L336, Doug:** *"The subject functions in a catalog and it serves as a catalogue. It gets you to a section of the library and then once you're there, it serves as a way of indexing the books."* **L1065:** *"Subject (the book type): a book whose own chapters describe the subject and whose table of contents catalogues other books rather than only its chapters."* **L599:** *"canonical synopses are what make catalogues emergent rather than authored from nothing."* **L538:** the subject's canonical compression is the **scope note** — *"librarians' actual term."*

- **The finder — Doug's, verbatim, closing the lookup thread:** *"I would probably do 'subject: whatever', 'author: whatever' and find a way of saving things like that in the library catalogue so that it's a bit more extensible. Ultimately, it could be a little book search engine, but for now, it can just be a `find('…')` and subject, author, title are three possibilities that get you a library card."* One method, a prefixed query; the indexings **saved in the catalogue** so ways are extensible; what a find answers is **a library card**.

- **The sprint cut — Doug's, verbatim, and it bounds itself:** *"What should be done is that subject should be possible. Use the same syntax author uses for now. Create a way to register library cards with the library catalogue with a certain key so that `'{key}: {keyword}'` works with find — `index(key, keyword, card)` so that when initialized, these things can be looked up. We don't have to go further than that. But we want the subject link working, and we need to find a way for the table of contents to be extended to have chapters for the books in the subject. And in the demo what's seen is that we need to figure out how to work the subject link into the UI — it might be different than you think. We should be clever about it. And I also want the library property on Book to work recursively and it should also be reflected on the library card."* **`index(key, keyword, card)` is his signature.** The construction lands specifically as **the table of contents extended** with chapters for the subject's books; the library property is recursive on the book **and reflected on the card**; and the subject link's place in the UI is a **design task inside the sprint** — *"it might be different than you think."*

- **Every book, period — Doug's, verbatim:** *"Every book period must carry an author and a subject and that should be in validation."* And: *"They should be on the cover. And the book receives them from there."* And: *"A cover has to have a title, an author and a subject, and every book must have a library. The `$Library` is a reference to its own card if it catalogues itself (it is its own subject), or its subject's library."* Book-level law on `$Book.valid()` — [The Author's out-of-scope entry](08-the-author.md#out-of-scope-named) reversed by ruling; the migration comes with it. **The library ruling pulls the heart of chapter zero's Sprint Four into this sprint.**

- **Process, ruled:** Doug does not read requirement numbers — *"That is your system. You need to infer my needs from the answers to questions."* The identifiers below are the team's bookkeeping for tracing; approval is taken in Doug's language, through the interview, and this section records what his answers ruled.

## Requirements

*Inferred from Doug's answers, 2026-08-07 — the identifiers are internal bookkeeping, never his interface; every requirement quotes the answer it came from. **The interview closed on the sprint cut and the types ruling; this section is the approved record.** Two proposals were not adopted and are marked so. The types rulings moved to [their own sprint](00-planning.md#types--a-whole-sprint-ruled-2026-08-07--and-it-now-waits-behind-writing-2026-08-10) by ruling.*

### The book — every book, period

- **R1. A cover has to have a title, an author and a subject — and the book receives them from there.** `valid()` requires all three. *Seen: a book missing any of the three does not bind, and the error says which.*
- **R2. A validation failure states its reason in the class's own words** — the shape The Author proved with `$Cover` stating its own sentence. No generic "is not valid."
- **R3. The migration is counted before it starts.** Every book in the demo and every book specimen in both suites gains an author and a subject. The count is a deliverable of the plan, not a discovery of the work.

### The table of contents

- **R4. Books have to put a table of contents there.** *Doug: "It doesn't appear out of nowhere, but it can have its parts automatically created. Change that."* A book without a declared table of contents does not bind.
- **R5. Its parts auto-create.** Declaring the table of contents is the author's act; its rows derive from the book's chapters exactly as today. Nothing hand-lists chapters.

### The subject reference

- **R6. A subject is a reference on the book, carried through its cover, holding the subject book's card — using the same syntax the author uses, for now** *(Doug: "Use the same syntax author uses for now")*.
- **R7. The name is the writer's chosen representational form.** No authority, no enforced heading, no uniqueness — the association is the **held card**. Many names, one referent.
- **R8. A subject pointing at anything but a cataloguing book is invalid** ([R39](06-sprint-48--subjects-and-the-library.md#the-reference-checks-type-design-doug-2026-08-06--supersedes-r4) carried). **HELD — see the tracing note.**
- **R9. A subject with a name and no card renders its name; `read()` throws** — the degrade law ([The Author's R14](08-the-author.md#the-author-and-the-loop)), generalized to subjects.

### The subject book

- **R10. A subject book is largely constructed from the books that declare themselves part of it — and the construction lands as the TABLE OF CONTENTS EXTENDED with chapters for the subject's books.** Chapters dedicated to member books are **automatically inferred if absent**.
- **R11. The subject has the power to override an inferred chapter**, and may carry chapters for books that do not declare it ([48's R46/R48](06-sprint-48--subjects-and-the-library.md#what-a-catalogue-specifies-and-how-validation-runs-doug-2026-08-06) carried).
- **R12. One declared canonical, reciprocal.** The canonical must have this subject in its subject; there is exactly one. *Multiple canonicals of different types: recorded as a direction, not built.*
- **R13. The self-cataloguing subject is The Shelf, and there can be only one per library.** *"The Shelf represents the library. It is the subject that catalogues itself."*

### The library

- **R22. Every book has a library, the property works RECURSIVELY, and it is REFLECTED ON THE LIBRARY CARD.** *Doug: "The `$Library` is a reference to its own card if it catalogues itself (it is its own subject), or its subject's library." And: "I also want the library property on Book to work recursively and it should also be reflected on the library card."* The definition is recursive and terminates at the self-cataloguing subject — so in the demo, every book's library resolves to **The Shelf's card**, and every card carries it.

### The finder

- **R23. The library catalogue answers `find('…')`.** One method; the query carries its way (`subject: …`, `author: …`, `title: …`); the answer is **a library card**.
- **R24. Cards are registered with the catalogue by `index(key, keyword, card)`** — Doug's signature — **when initialized**, so that `'{key}: {keyword}'` works with `find`. The indexings are saved in the catalogue; three keys ship; adding one is an addition, not a rework. *"We don't have to go further than that"* — the *"little book search engine"* is direction, not scope.
- **R25. How the representative is unique within a way is the plan's to propose** — the fixed point (the self-authoring, self-subjecting card) and the filing name are the candidates; neither is ruled.

### Types — ANOTHER SPRINT, by ruling

*Doug, closing the interview: **"Types are another sprint. Let's get subject basics. In the sprint planning, put types as a whole sprint to figure out, with code in chapters as a part of it. We'll get it at sprint planning."***

- **R14–R16 move to the types sprint, rulings intact:** code writeable in a chapter (the toString route — the same object the running constraint and the printed chapter); `$Type` a reference like an import, proceeding up the subject chain to the library; code weighing in at validation — *"the library system should be extensible through code… It is self-specifying."* Recorded here because this interview ruled them; **built nowhere until that sprint's brainstorm**. The identifiers keep their numbers so nothing silently drops when that chapter cites them.
- **R17. NOT ADOPTED — the synopsis constraint** (*a demonstration says what it demonstrates*, failing today's placeholder synopses). Proposed twice; no yes; out of the requirements, kept so it is not re-proposed cold. The placeholder synopses on all four cards remain an honest debt.

### Collected at the review — 2026-08-10, from Doug's answers

- **R26. VOCABULARY LAW, re-affirmed and made a sweep:** *"Refusal and mint are not domain terms. Mint is money. Books are not minted. Delete both of these concepts from all documentation and sprint writeups. Speak in natural sentences using the names of members and the functionality I specified."* Both words were already banned 2026-08-02 and this sprint wrote them anyway. **Executed:** the model, the new tests, this chapter, chapter zero, and Solutions 07 (retitled *The contents that failed before adoption*) are swept clean. **Queued:** the historical sweep — chapters 01–08, Sprint 48's record, the older Solutions entries and cover lines, and the skills — a compound-scale pass.
- **R27. The contents pulls itself together, and validation covers the half-formed case.** *Doug: "I asked for a table of contents to pull together its contents if unspecified, which it normally will be. If the chapters are not fully formed, it might fail to do this, so there is still validation required. Make this as elegant as possible."* **Executed as:** `valid()` keyed on the one condition that matters — no cover answering for it yet means it stands outside a book and an empty contents is lawful; inside a book, the accrued law runs. Elegance reviewed again when validation's why-shape lands.
- **R28. Canonical reciprocity is the subject's check, not a throw on read.** *Doug: "This would be a validation for the subject. If it has a canonical, it should be able to check. Perhaps the subjects in a library will always be loaded when a book is loaded. Perhaps there will be build-time validation in .public."* **Executed as:** `$Canonical.read()` just reads through its card; `valid()` answers the reciprocity check without throwing, whenever the cards are in place — and **where the check runs is open design** (books loading their subjects, or build-time in `.public`), recorded for the types/library sprints.

- **R29. THE SUBJECT LINK IS A BACK ARROW — and it never stands on the index.** *Doug, verbatim: "The subject link is like a link back to the index. You put it on the index. The subject catalogues its books. You are failing to understand the way that the subject link is a back arrow."* The link lives **in a book**, pointing back to the catalogue that files it — never on the catalogue itself, where it is a self-link and worthless (*"three self-links to the self in a row"*). **Executed:** the spine labels on the shelf are deleted, along with their light-up-and-flip interaction; what remains is exactly the back arrows — the open book's top line (*THE SHELF*) and the manifold's *← The Shelf* chip and cover line. The design-gate idea he had actually approved — a mark on **a book's own spine view** — awaits a book having a spine view at all, and is direction, not scope.

- **R30. The demonstration presents its subject, and its links instruct.** *Doug: "'demonstration' standing alone isn't enough to signal that it is the subject. The Shelf is much clearer… You are showing them a shelf but perhaps not showing demonstration, so referring to it as such is missing in the UI."* **Executed:** the shelf's written side now says **DEMONSTRATION** under its title — the subject's own words off the cover, so the name has a home in the UI — and every subject link reads **← The Shelf**: the arrow instructs, the title says where.
- **R31. The synopsis is a parenthetical chapter carried on the book.** *Doug: "Maybe a synopsis is a parenthetical chapter, but one that is carried on the book." And: "We need a way for a book author to decide to display the synopsis, but it is essential that books have one so they can be catalogued."* **Executed:** `$Synopsis` marks itself parenthetical — the summary's pattern one grade up; an author displays it by writing `parenthetical={false}` (the legend's shipped affordance); validation still demands one; and the contents filter became one law — **the numbered chapters are the chapters that are neither the canonical, nor parenthetical, nor the contents itself.** The card carries `synopsis` because **the card inherits the book's properties** — Doug's own closing of the loop.
- **R32. A card is an abstraction for assigning references on books, not a live part of the library.** *Doug: "A card is not a live part of the library. It is an abstraction to help specify references. Maybe it needs one to satisfy an abstraction, but the card is just a way of assigning references on books."* Properties stand on the card to satisfy the book's shape, and for no other reason.

### The demo

- **R18. The top-level subject of the demo's library is named *Demonstration*** *(Doug's proposal, his hedge kept: "might be called")* — *"a library about demonstration, authored by the team… a library that contains its own identity. That's what libraries do."*
- **R19. The four books declare their subject, and The Shelf's table of contents carries the derived member chapters.** *Seen: entries the shelf did not hand-author.*
- **R20. The subject link is worked into the UI, and HOW is a design task inside the sprint.** *Doug: "it might be different than you think. We should be clever about it."* Nothing about its face assumed from the author's byline; the design is owed to Doug before it is built.
- **R21. NOT ADOPTED — names shown free** (a second display form arriving at the same book). Proposed; no yes; kept here so it is not re-proposed cold.

---

---

# Plan

*Set 2026-08-07. **WHAT, not HOW.** Unit identifiers are never renumbered; a split keeps the identifier and takes the next unused number.*

## What the research read, and what it changed

- **The book already spliced in a table of contents from nowhere** — [`$Book.$Book`](../../package/src/book/Book.tsx) inserted one when none was authored. The ruling kills exactly this line; the rows' derivation survives it.
- **The author's syntax is an element found in the cover's writing** — [`$Cover.author`](../../package/src/book/Cover.tsx) scans its sections' elements. The subject reuses the scan, the element shape, and both authoring forms: bare `<Author>Name</Author>` pointed in a second act, and `<Author for={card}>Name</Author>` direct.
- **The self-subject must card-before-book.** A cover cannot import its own card without cycling through the books the catalogue holds — the author self-loop's shipped pattern, reused for The Shelf.
- **The migration, COUNTED (R3):** **ten construction sites in the suites** — `book.test.tsx` builds through **one factory** plus six direct specimens (three deliberately invalid, which keep their errors and re-assert the new messages), `author.test.tsx` one, `card.test.tsx` one — **plus the four demo books.** The factory carries the bulk.

## Decisions

**D1 — The subject reuses the author's built shape wholesale.** Element in the cover's writing, display as copy, a held card, read through it, card-before-book where imports would cycle. *Chosen over: any new declaration form — "use the same syntax author uses for now" is the ruling.*

**D2 — The auto-spliced table of contents dies; declaring one is the author's act.** The bond stops splicing; validation requires exactly one; the rows keep deriving. *Chosen over: keeping the splice as a default — "it doesn't appear out of nowhere. Change that."*

**D3 — One finder, saved indexings.** `index(key, keyword, card)` registers; `find('key: keyword')` answers a library card; three keys ship and registration at initialization derives them from the card's own properties; the method stays callable so ways extend. *Chosen over: three lookup methods — extensibility is the stated reason for the query shape.*

**D4 — The library is computed, never stored.** Own card if the book is its own subject; otherwise the subject book's library, recursively. No walk bookkeeping — one universe. *Chosen over: a stored property — "read rather than stored" (48's R40), "computed" (R63).*

**D5 — The card graph stays card-to-card.** A card's subject and library are **cards**, never books — The Author's D2, carried unbroken.

**D6 — The migration edits factories first, specimens second.** The count above makes the order cheap and the risk measurable.

**D7 — Nothing is named that Doug has not named.** `index`, `find`, subject, library, Demonstration are his. Where a unit needs a name he has not given, **it stops and reports the population.**

**D8 — The subject link's UI is designed with Doug before it is built.** His instruction makes this a **gate inside the sprint**: *"it might be different than you think. We should be clever about it."*

## Units

- **U1 — `$Subject`, the reference.** *Mechanism: the author's reference kind exactly — writing-level, copy the display form, a held `$LibraryCard`, `read()` card → book, honest degrade. Files: `src/book/Subject.tsx`, `src/index.ts`. Realizes: R6, R7, R9. **Visible end:** a subject written on a cover that follows to The Shelf.*
- **U2 — The cover's three, and the error that names the missing one.** *Mechanism: the cover scans for its subject as it does its author; the book receives the three through the cover; `valid()` demands them; the class states its own sentence. Files: `src/book/Cover.tsx`, `src/book/Book.tsx`. Realizes: R1, R2. **Visible end:** a book missing one of the three failing to bind, the reason readable.*
- **U3 — The table of contents is declared, not spliced.** *Mechanism: the bond's splice deleted; `valid()` requires exactly one; rows keep deriving. Files: `src/book/Book.tsx`. Realizes: R4, R5. **Visible end:** a book that authors none does not bind.*
- **U4 — The migration, in the counted order.** *Files: the three test files, the four demo books. Realizes: R3. **Visible end:** both suites green with the new laws on, against a rebuilt chemistry `dist`.*
- **U5 — `index` and `find` on the library catalogue.** *Mechanism: saved indexings keyed `key → keyword → card`; `find` parses the way, answers a card, throws naming the query; initialization files titles; registration timing under card-before-book decided with the code open and **raised if it needs framework machinery**. Files: `src/library/LibraryCatalogue.tsx`, `src/index.ts`. Realizes: R23, R24, R25. **Visible end:** `find('subject: Demonstration')` answering The Shelf's card.*
- **U6 — The card carries subject and library.** *Files: `src/library/LibraryCard.tsx`, the demo's `card.tsx`. Realizes: R22 (reflected half), R6. **Visible end:** a card printing subject and library lines it was never hand-typed with.*
- **U7 — The library, recursive.** *Mechanism: own card when the subject's card is its own; else the subject book's library, recursing on cards; the card mirrors. Files: `src/book/Book.tsx`, `src/library/LibraryCard.tsx`. Realizes: R22. **Visible end:** four books asked, one answer.*
- **U8 — The self-cataloguing subject.** *Mechanism: The Shelf's cover writes its subject; the card pointed in the second act; display form* Demonstration *(hedge kept). Files: the shelf's cover, `card.tsx`. Realizes: R13, R18. **Visible end:** the shelf's subject following home.*
- **U9 — The table of contents, extended with the subject's books.** *Mechanism: member entries beside derived rows, **inferred when absent, overridable when authored**; if the row wants a name or kind the model lacks, the unit stops and reports. Files: `src/book/TableOfContents.tsx`, the shelf's book files. Realizes: R10, R11, R19. **Visible end:** contents entries nobody hand-listed.*
- **U10 — The canonical: one, declared, reciprocal.** *Files: `src/book/Canonical.tsx` (the declaration place decided with code open, reported). Realizes: R12. **Visible end:** the canonical named; a second failing to bind.*
- **U11 — The subject link in the UI — THE DESIGN GATE.** *No mechanism written **by instruction** — Doug reserved this design. Given no files and scenarios until the ruling. Realizes: R20.*
- **U12 — The records move with the code, and the session ends with a push.**

## Test scenarios

*Compacted at compounding — The sprint's test scenarios stood here. **They are now the suite** — a scenario that survived is a promise, and a promise is read where it runs, not where it was planned.*

## Origin tracing — both directions

| requirement | lands in |
|---|---|
| R1, R2 | U2 |
| R3 | U4 |
| R4, R5 | U3 |
| R6, R7, R9 | U1, U6 |
| **R8** | **HELD, flagged for Doug:** *a subject pointing at a non-catalogue is invalid* is the catalogue **TYPE** check, and **types are another sprint by his ruling this same interview.** This sprint validates presence, resolution and the structural loop. |
| R10, R11, R19 | U9 |
| R12 | U10 |
| R13, R18 | U8 |
| R14–R16 | moved to [the types sprint](00-planning.md#types--a-whole-sprint-ruled-2026-08-07--and-it-now-waits-behind-writing-2026-08-10) by ruling |
| R17, R21 | not adopted |
| R20 | U11 |
| R22 | U6, U7 |
| R23, R24, R25 | U5 |

**And back:** every unit names its mechanism and visible end; U11 is the one with neither, because Doug reserved its design.

## Order

*Compacted at compounding — The build order stood here, and the sprint ran it.*

## Risks

*Compacted at compounding — The pre-flight risk list stood here. **A risk that fired is in the record below**, with what it cost; the rest did not.*

## Self-check

*Compacted at compounding — The plan's self-check stood here, and it passed before work started.*

## The team

**Cathy** on the model. **Arthur** on the ontology, this chapter, the counts. **Libby** on the subject book's construction. **Queenie** on validation failures as promises and the migration. **Phillip** and **Gabby** on the design gate. Bench: Adam, David, Nancy; Claude on call.

## The session record — batch by batch

*What follows is the narrative record of the work as it happened, kept for its verbatim rulings and its findings. The current state lives once, in [Where things stand](#where-things-stand) at the chapter's end.*

### State

**Built and verified.** The subject reference, the author's shape exactly (**U1**, 5 tests) · the cover's three with errors naming the missing one, and the splice deleted (**U2/U3**) · the migration in the counted order (**U4**) · `find('way: keyword')` answering a library card, titles auto-filed, ways extensible, unfiled queries throwing, naming the query (**U5**, 6 tests) · cards carrying subject, the library **computed recursively on cards** and reflected as one truth (**U6/U7**, 5 tests) · the shelf's self-subject and declared canonical, made before the book and pointed after (**U8**) · the contents-extension slot with the override-skip, suite-proven (**U9**, 3 tests) · the canonical — one, reciprocal, a second failing to bind (**U10**, 3 tests) · the design gate ruled and built (**U11**, below) · the records (**U12**).

**Verification, from fresh runs.** Chemistry **630/630** (58 files). Lib **154/154** (14 files, up from 129 — every new promise counted). Lib `tsc` **0**. App `tsc` **0**. The lib ran against chemistry's `dist` **rebuilt this session**, per [the filed law](../solutions/05-the-suite-that-passed-against-a-stale-build.md). **Two drives with zero page errors** (below).

### Promise changes, stated

1. *"Answers undefined when no author stands in the cover"* became **a validation failure naming author**.
2. *"The bond constructor renders a table of contents into the chapters"* became **a validation failure naming the table of contents** — the splice is dead by ruling.
3. *"At most one table of contents"* became **exactly one**.

### Findings — each filed or queued

1. **Authored contents pages always dev-erred at bind and nobody knew** — children bind before adoption, and the contents' summary derives from the book. Filed: [The contents that failed before adoption](../solutions/07-the-contents-that-failed-before-adoption.md).
2. **`index` is a blocked name.** Doug's signature collides with `index` the number, which the catalogue carries because it implements `$Catalogue$`. **`file(...)` stands as the PROXY.** His answer opened deeper ground, verbatim: *"The library catalogue is not, at this time, a piece of writing. Odd to say, perhaps, but unless we invent a book for this — which then kind of deprecates the need for subjects as cataloguing books — it's not a piece of writing in the sense that it's not a part of any book. I'm not sure what to say about that. I'm not sure the library catalogue implements the catalogue interface. This thing is more of a utility that is used to connect books to each other. Hmm."* **Recorded, not acted on** — a hmm is not a ruling; if the catalogue stops being writing, `index` frees itself, and the interface question is a design session.
3. **The manifold's card drifted from its book** — Doug: *"The title is the title. You are taking me too literally."* Fixed: the card carries *The Manifold of Sentences*, subtitle *A Geometry of Prose*; filing name stays *The Manifold*.
4. **Author, subject and canonical are parenthetical writing** — 48's R3 honored; copy and tagline stay clean while the faces render.
5. **Tests that point cards must hold the class** — `$`-backings live on `$LibraryCard$`, not the computed type; that hiding is D9 working.

### Members invented this session — PROXIES for the review

| member | on | what it does |
|---|---|---|
| `file(key, keyword, card)` | `$LibraryCatalogue` | **the proxy for Doug's `index(...)`**, blocked by the writing `index` |
| `$indexings` | `$LibraryCatalogue` | the saved filings `find` consults |
| `$cards` | `$TableOfContents` | the extension slot holding member cards |
| `Recursive` (type) | `LibraryCard.tsx` | excludes `library` from the mapping so the type terminates; `library` declared directly |
| `shelf` (prop) / `$shelf` | the two readers (app) | the travel channel the subject-follow uses — app-level UI naming |
| `SpineMark`, `ImprintMark`, `CoverImprint` | styled (app) | the three faces' styled pieces — app-level UI naming |

`find` is Doug's word; `subject` and `library` on book and card are his words; `$Subject`/`$Canonical` reuse The Author's standing proxies (`name`, `card`, `$for`).

### The design gate ran, was ruled, and the ruling is BUILT, DRIVEN AND SEEN

**Doug's ruling, verbatim:** *"Okay, so I like the idea that it's on some sort of spine mark. But also, the link that takes you back to the shelf, in the demo, is effectively the subject link — in the demo, there is only one subject so far. So why don't you experiment with the spine label with an interesting interaction to visualize that — try out a cover one too in a different place, but then definitely make the link that brings you to the shelf an expression of the subject reference. That's its most natural form."*

**Built, each face reading the model and none dressed as a link:**

1. **The call mark** — a small band at each catalogued spine's foot carrying the subject's display form (the real name, CSS-clipped where the spine is narrow). Pressing one **reads the subject reference live**, lights every mark on the shelf — the kinship visible — then **turns the shelf to its writing face**: the destination of the subject is the catalogue you were already holding.
2. **The Team's masthead imprint** — *THE TEAM · DEMONSTRATION · CHAPTER I* — the subject the imprint's middle piece; following it reads the reference and arrives at the shelf's writing face. The margin's card slip **now prints `subject: The Shelf` and `library: The Shelf` on its own** — the card printing what is on it, no face edited.
3. **The manifold's cover imprint** — *DEMONSTRATION* at the cover's foot, the Cataloguing-in-Publication experiment in its different place; follows home.
4. **THE link, per the ruling's "definitely":** the manifold's standing *"← the shelf"* chips now read **"← Demonstration"** — the label read off `manifold.subject`, the click reading the reference, the router travelling.

**Driven, answers printed:** three spine marks reading *Demonstration* · press → lit → turned **true** · team imprint → returned home **true** · cover imprint → returned home **true** · chip reads *← Demonstration* → arrives **true** · **page errors: none** across both drives. Seen in screenshots (scratchpad only). App `tsc` **0** after every face.

**For the review:** the clipped mark (`DEMONST`) is the honest CSS clip of the real name on a 42px spine — whether it wants a designed short form is Doug's eye's call. The demo wiring of the contents extension stays held: the shelf's hand-authored entries ARE overrides, and inferred siblings would duplicate beside them until that face is designed.

### The official questions were answered — verbatim rulings in the findings above

The blocked name (opened the catalogue-is-not-writing ground, recorded); the card drift (fixed — the title is the title); the design gate (ruled and built, above); the push (*"I don't really care"* — pushed under the standing law).

### Wrong turns already taken — do not repeat

- **Theorizing three times about the render failure.** The probe (devError + chapters + innerHTML written to a file) answered in one run. The runner eats `console.log`; write probe reports to a file.
- **Typing test cards as the computed `$LibraryCard`** when the test must point them — the backings are class members.
- **Expecting the catalogue to auto-file author and subject at initialization** — they arrive card-before-book; the demo files them explicitly, which is what *"register"* meant.
- **THE SYNC CLOBBER — the expensive one.** Running `06-on-sync--resolve.sh` mid-session, on the tool's own advice from a stopped push, **overwrote the working copy's `.lib` with the identity branch's older state** — this chapter, Solutions 07, chapter zero's edits and two cover entries were deleted and had to be reconstructed from the conversation. The resolve's down-sync is built for session OPENINGS, not for mid-session reconciles with unpushed `.lib` work. **Before running any reconcile, commit or copy the branch library aside** — and the tool's closing line ("CHECK BY HAND") is not ceremony; it is what caught this.

### The inspection batch — Doug's feedback, and what it built (2026-08-10)

**The charge, his, condensed with the rulings verbatim where they bind:** some links broken and *"The Team seems to give an error… click around"* · **"The table of contents should only have the numbered chapters — make sure cover and table of contents are different"** · the subject link says **"The Shelf"** wherever it is not absolutely clear it is a subject · **"Have the subject link actually take the reader to the shelf view — remember that is a view of the book. If that isn't represented as a view of the book in the actual code for the shelf, then it's not coded correctly"** · the shelf book *"a bit underpowered"* · the team and the shelf as **unique, sophisticated demos** · and the standing question: **"For every bit of implementation, ask yourself — am I using the framework correctly to implement this feature? If you aren't, you aren't giving a demo."** Then, mid-batch: the shelf's contents **"cobbled together from the subject links… all books, including itself, are part of its subject"**, using **pieces of the other books**; the synopsis/summary/tagline–card elegance checked and surfaced if wanting; and **"the flipping around interaction is beautiful. Perhaps it's just an alternative view of the table of contents?"**

**Built, and the framework-correctness ledger:**

1. **The contents law (model):** a table of contents lists **numbered chapters only** — not itself, not the cover, not the synopsis. Three shipped promises re-stated in the suite.
2. **The elegance surfaced and closed:** the card's `synopsis` was a placeholder string on all four cards. Now it **derives through the model's own compression chain** — synopsis chapter → summary → **tagline** — at making for the three standing books, and **`shelve()` backfills The Team's when the book arrives**, which is what shelving always meant. Summary and tagline are chapter-grade and stay off the card; the card's one line IS the tagline. *Flagged for review as the compression rule for R53's mapping.*
3. **Membership from the subject links, self included:** `libraryCatalogue.cards.filter(c => c.subject === theShelf)` — all four cards, the shelf's own among them — feeds the contents extension and the drawer.
4. **The shelf is a `$Book` subclass viewing itself**, and Doug's insight is the architecture: the two faces are **two views of ONE table of contents** — a contents subclass carries the flip, spines on one face, the written catalogue on the other, rows and member cards both from the model. The hand-authored entry chapters **died** (The Author's U12, finally executed); entries read **title, tagline-synopsis and byline off cards**; the self-card is filtered from the faces by the contents' own self-exclusion law.
5. **The drawer chapter** — *The Card Catalogue*, the specification chapter Doug pre-authorized — four cards rendered **as cards**, printing their own fields; The Team's slip reads *subject: The Shelf, library: The Shelf, author: The Team* — **the loop on paper**. This also completes The Author's U11 (the card displayed as a card).
6. **The Team is a `$Book` subclass viewing itself** — the manuscript is the book's view; the margin's contents lists the six numbered chapters with numerals; the masthead reads **THE TEAM · THE SHELF · CHAPTER I** (the clarity ruling: navigation says The Shelf; the spine call-marks and the manifold's CIP imprint stay *Demonstration*, where a label is clearly a label). Drop-cap, page-turn rise, slip hover.
7. **Travel lands on the book's view:** following any card renders `card.read()`'s own view — the subject follow arrives at the shelf **as the shelf book rendering itself**. The manifold's chips read **← The Shelf** off the subject's card.

**Impurities held up to the standing question, stated:** the manifold's reader remains a chemical beside its book (its self-viewing is owed); the team's margin reads the book's composition directly instead of contents rows (the row machinery is what breaks under re-parenting — below); the route holds a module-level pointer registered in its view, because slot-wiring through a constructor met dev-mode double-construction.

**Three defects found by probing, each a filed-lesson candidate for compound:**

1. **The route twin** — module wiring set in a constructor spoke to the discarded dev-mode twin; registering in the view speaks to the rendered one.
2. **Prop-binding over external state** — passing a `travel` prop through the membrane to an already-bound singleton **emptied its externally-set `$cards`**; props re-run binding over state the bond did not own. Framework-level observation, review-worthy.
3. **Render re-parenting breaks one-hop `book`** — rendering the contents as an element re-parents it to whatever rendered it, so `book = parent` stopped being the book (`this.book.at is not a function`). The canonical's guarded climb, applied as the contents' own `book` getter, fixes it — and this is the likely shape of **Doug's reported Team error** (plus HMR-stale singletons on the long-lived server, which made it unreproducible on fresh serves).

**Verified:** lib **154/154**, lib `tsc` **0**, app `tsc` **0**, full drive with **zero page errors** — spines/marks, the flip, the drawer, the team masthead and numeral contents, both returns, byline, algebra's route. Seen in screenshots (scratchpad).

### The review, round by round — 2026-08-10

**Round one collected R26–R28** (the vocabulary law and its sweep; the contents pulling itself together with validation for the half-formed case; canonical reciprocity as the subject's check). **Round two collected R29** — the subject link is a back arrow, and the shelf's self-pointing spine labels were deleted for what they were: three links to where you already stand. **Round three collected R30–R32** — the demonstration presents its subject (DEMONSTRATION on the shelf's written side), links instruct (**← The Shelf**), the synopsis became a parenthetical chapter carried on the book with the author deciding display, the contents filter became one law by parentheticality, and the card was set right as an abstraction for assigning references. **Filing ruled acceptable as built** (later filings replace earlier). Suite **154/154** through every correction, both `tsc` **0**, drives with **zero page errors**.

**SIGNED OFF as a demonstration: the subject link** — ← The Shelf in each open book, the shelf presenting its subject, `$Subject`/`$Book.subject`/`$Book.library` reading through The Shelf's card.

**SIGNED OFF as a demonstration: the card catalogue chapter** — with Doug's caveat recorded and written into the chapter itself: *"this isn't a standard form of UI, and we are doing this for demonstration. A library catalogue doesn't always show its cards so don't make it as if it does."* The chapter now says a catalogue answers questions with its cards rather than showing them, and lays them out only to be seen.

**SIGNED OFF as a demonstration: the library property** — every book computing its library through its subject to The Shelf's own card, seen on every card, five tests including the subject chain.

**R33 — the catalogue's place, ruled at the review:** *Doug: "The catalogue is a build time compilation that is used to hand out references. It is not necessarily used at all. Yes the code can verify it."* `find()` and `file()` stand verified by their six tests; no screen owes them a face; the catalogue's role is **compile-time reference assignment**, which is R53's compilation frame confirmed from the other side.

### The review's last round — Doug's rule applied to the three leftovers

*His test: "Are you using the code wrong or right based on what I said? If it's wrong so that the demonstration is not correct, fix it. Look at the other sprints. Do they say we are working on this later? If not, this is the time to fix it."*

1. **The Team's chapter list — FIXED.** It now reads `tableOfContents.chapters`, the member that owns that answer. What had blocked it was a defect worth its own filing: **a field named `at` on The Team** (its open-page number) **shadowed `$Book.at()`**, the location method every contents row builds with — so the first honest read of the contents threw *"this.book.at is not a function."* The field is renamed `page`. **The lesson: a book subclass shares its book's name space — a state field can silently bury a model method, and nothing complains until someone asks the model.** The contents also now says plainly, when it stands under something that is not a book, what it found instead.
2. **The Manifold — FIXED.** Its page code is now the manifold book's own `view()` — `$TheManifold extends $Book`, built with its chapters, exactly as The Shelf and The Team are. Its page data derives from the book instance itself.
3. **The page switcher — RIDES, by the record.** [R25 / `$` as a container](08-the-author.md#r25--becomes-a-dependency-injection-container--a-chemistry-level-feature-doug-2026-08-07) is already written down as the later answer for how things reach each other without holders; this is that, and its sprint is recorded.

**After the fixes:** suite **154/154**, both `tsc` **0**, the full click-through with **zero page errors**.

### Compounded — 2026-08-10, five runs, one lesson each

- [The contents that failed before adoption](../solutions/07-the-contents-that-failed-before-adoption.md) — filed during the work session.
- [The field that buried a method](../solutions/08-the-field-that-buried-a-method.md) — a `$Book` subclass's state field shadowed `$Book.at()`; a subclass lives in its book's name space.
- [The parent that changed on screen](../solutions/09-the-parent-that-changed-on-screen.md) — one hop of `parent` is a bind-time fact; derived members climb, and the climb now ships in the model.
- [The prop that emptied the shelf](../solutions/10-the-prop-that-emptied-the-shelf.md) — props belong to construction; a singleton that accumulates state renders bare. The in-framework path is flagged, not asserted.
- [The constructor that captured the wrong instance](../solutions/11-the-constructor-that-captured-the-wrong-instance.md) — a constructor knows it ran, not that it was kept; register in `view()`.
- **Distributed to [On Sync](../../../../.claude/library/..environmentalism/06-on-sync.md#uncommitted-work-is-not-protected-by-any-of-this)** (Claude's chapter, edited not duplicated): treat every reconcile as a session boundary — push or copy the branch library aside before pull/resolve. The environmentalism cover's stale On Sync paragraph was brought to the built truth in the same act.

## Where things stand

*One state, written 2026-08-10 at the session's close. Everything above is the record; this is the present.*

**→ NEXT: `/ce-brainstorm` — Doug chooses the next sprint's subject.** Chapter zero holds the cut stones: [Types](00-planning.md#types--a-whole-sprint-ruled-2026-08-07--and-it-now-waits-behind-writing-2026-08-10) (a whole sprint, code-in-chapters riding with it), The Library's remaining half (disagreement made visible), The Compilation. **One decision is Doug's before or beside that:** whether the queued tending — sweeping *refuse* and *mint* from the older records, and compacting sprint chapters into the topical books — runs as its own session or waits for the retro.

**The objective, and Doug's latest intent in his words:** the sprint built the subject; his close was *"go back to the start of this session and improve the handoff each time to make it more seamless"* — done in the handoff's own chapter, which now carries eight fixes.

**Complete and signed off by Doug at review:** the subject link as a **back arrow** — *← The Shelf* in every open book, the shelf presenting DEMONSTRATION on its written side; the card catalogue chapter, its caveat written into its own text; the recursive library property on every card. Also standing: the synopsis is a parenthetical chapter carried on the book, displayed only when its author unsets parenthetical; the contents lists the numbered chapters by one law; all three books draw their own pages; `find`/`file` verified in code — the catalogue is a build-time compilation handing out references.

**Verified, fresh runs this session:** lib **154/154** (14 files) · chemistry **630/630** (58 files) · both `tsc` **0** · the full click-through with zero page errors.

**The demo, and how to see it:** `npm run dev` in `library/.public/package`, open `/books` at the port vite prints. See first: click *the shelf* above the spines — it flips to the written catalogue saying DEMONSTRATION under its title; open *The Team* and follow *← The Shelf* in its top line home.

**Open, each with its owner:** the types sprint — Doug's, at sprint planning · `file()` stands as proxy for his `index(…)`, blocked by the writing's own `index`, and his thought that the catalogue may not be writing at all is recorded, not acted on · canonical reciprocity answers through `valid()`, and where that check runs (books loading their subjects, or build-time in `.public`) is open design · `$` as the container, recorded since The Author.

**Read these, and they are sufficient:** (1) this chapter's Requirements — R26–R33 are the review's rulings in Doug's words; (2) the [Solutions cover](../solutions/.cover.md) — five chapters filed this sprint, indexed by symptom; (3) chapter zero's [Types section](00-planning.md#types--a-whole-sprint-ruled-2026-08-07--and-it-now-waits-behind-writing-2026-08-10); (4) the three self-viewing books — [the shelf](../../package/app/src/sections/book/library/the-shelf/book.tsx) with [its contents](../../package/app/src/sections/book/library/the-shelf/contents.tsx), [the team](../../package/app/src/sections/book/library/the-team/book.tsx), [the manifold](../../package/app/src/sections/the-manifold.tsx).

**Wrong turns, the four that cost most:** speak Doug's words — *refuse*, *mint*, and invented vocabulary are not domain terms, and he reads neither our identifiers nor our conversations · a stopped push is a session boundary — secure the branch library before any reconcile · when three theories each fit some of the evidence, print the actual shape instead of forming a fourth · a `$Book` subclass lives in its book's name space — check every state name against the model's members.