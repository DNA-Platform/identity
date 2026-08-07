# Sprint 48 — Subjects and the Library

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*Opened 2026-08-03, the day [Sprint 47](05-sprint-47--the-catalogue.md) closed. **Status: `implementation-ready`** — the design session with Doug ran 2026-08-05/06 and its rulings are the [Requirements](#requirements); the [Plan](#plan) was set 2026-08-06 and enriches this same chapter in place, per the [one-chapter law](../../../../.claude/library/library-tree/03-sprints.md#what-a-projection-book-contains--the-schema).*

## The workflow this sprint follows

**The [feature workflow](../../../../.claude/library/..teamsmanship/19-workflows.md)** — [ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md), with [ce-handoff](../../../../.claude/library/our-skillset/32-ce-handoff.md) at a session boundary. Declared here because [a sprint that declares none cannot be judged against one](../../../../.claude/library/library-tree/03-sprints.md#the-sprint-may-declare-a-workflow), and this is the trial [47.5](07-sprint-47-5--compounding.md) was run to set up.

**What the declaration costs us, deliberately.** The gates bind: brainstorm does not propose a solution until the problem is agreed; the plan carries **WHAT, not HOW**; work stops at a unit boundary rather than running past it; compound distributes before the sprint closes. The naming collision that opened this sprint is exactly the kind of decision a brainstorm gate exists to hold open.

## The charge, Doug's

> "Primarily we are going to come up with what a subject and an author means in this library, representationally and referentially. We do want `$Biography`, `$Autobiography`, a subject catalogue (let's explore what to use to refer to cataloguing books — books that serve to catalogue other books) and `$Library`. `$Literature` as a composition of `$Book` will likely come into this. If we decide that a `$Catalogue` is a good name for the book, then we may need to rename the abstraction."

**The naming collision closed before the session opened.** Commit `a09a3f9` gave interfaces the trailing `$` — `$Reference$`, `$Referent$`, `$Catalogue$`, `$Composition$`. The word *catalogue* is free for the book, and the cataloguing book is `$Catalogue`. No rename, no compound name, no proxy.

## The one-word law, verified

Doug, ruling `$SubjectiveSubject` out before it was written: *"there's no `$SubjectiveSubject`. You can verify that we'd never name something like that in this framework. Notice how just about everything is one word? That's a sign that we are working with primitive subjects."*

Verified against the package: **35 classes, exactly one multiword** — `$TableOfContents`, a fixed phrase naming a real page. The discipline for finding a name is [On Kinds](../../../../.claude/library/bookkeeping/15-on-kinds.md): read the population, apply the two filters, report what survives — **never argue a candidate into place.** And the standing law above it: *nothing in this framework is named except by Doug.*

---

# Requirements

*From the design session of 2026-08-05/06. Every item below is Doug's ruling unless marked OPEN. Identifiers are stable and never renumbered.*

**What is being built, stated so it cannot drift.** This sprint designs **`@dna-platform/lib`** — a **code framework** of `$Chemistry` classes in [`library/.public/package/src`](../../package/src/). A book here is a `$Book` instance, not a `.md` file.

**And what the team's own library is to it.** Ours is markdown a person writes by hand. It is **not** built on `$Chemistry` and it is **not being migrated** — *"maybe one day, but not today"* (Doug). What it **is** is the **proof of concept**: the thing we ran long enough to learn how the next version should work. Doug: *"Your library is a proof of concept that helps us all understand how to make the next version, enforced by code, better than the hand written one."* So it is evidence about **what the idea needs**, never a specification to copy — and the code version earns its place by being **enforced** where ours is merely disciplined. Every drift we have suffered by hand is a constraint the framework should make impossible.

## Actors

- **A1 — The author.** Writes a book: its prose, its cover, and the references its cover declares.
- **A2 — The librarian.** Organizes the library: what catalogues what, which subject a book belongs to, what a subject specifies.
- **A3 — The reader.** Reads a book and follows its references outward — to its subject, its author, its library.
- **A4 — The implementer.** Writes classes against the model, and is judged by validation rather than by convention.

## The frame — what closure claims here

- **R1.** The **library is closed under books**; the **code is not**. Not everything one can refer to is a book. Machinery is machinery — one may write a book *about* it, and the formalism does not require that book to exist. *(Doug, correcting an over-application of [Closure Under Books](../the-semantics-of-books/10-closure-under-books.md).)*
- **R2.** The vocabulary of the code is the vocabulary of its domain. `@dna-platform/lib` speaks **library semantics** — book, cover, chapter, subject, catalogue, shelf, spine, slot. `$Chemistry` speaks **chemistry** — bond, binder, catalyst. Hardware and building words belong to neither, in a class name, a member name, a comment or a sentence spoken about the work. **The word *ladder* is banned** (Doug, 2026-08-06); where it described the composition of writing, the derivation's own word is [**levels**](../the-semantics-of-books/01-levels-of-closure.md).

## Subject, author, and the summit

- **R3.** A **subject is a reference declared on the book**, carried as **parenthetical writing on the cover**. It reads to a subject catalogue in the library.
- **R4. BOTH — the `$Catalogue` class exists, and the catalogue TYPE constrains it.** *Ruled 2026-08-06 at the first review, over two earlier readings of mine.* Doug's argument for the class: **without it, libraries do not belong in the framework at all** — the summit needs somewhere to exist. The type is what a book wears to be judged as one. **Still open and Doug's to design: what is being SPECIFIED in a `$Catalogue`** — what its parts must be, what it may catalogue, what it refuses.
- **R37. A catalogue derives what it lists.** It **automatically grabs the title and the synopsis** of each book it catalogues, **unless explicitly specified** — *"just like the table of contents up a level."* `$TableOfContents.parts()` already derives its rows from `this.book.parts()`; a catalogue does the same one level up, over books. **A hand-maintained catalogue drifts; a derived one cannot** — Libby's finding in 47, now a requirement. *Buildable today: `$Book.synopsis` exists and `$Document.summary` is its parenthetical section. The demo currently violates this — its entries are hand-authored prose.*
- **~~R4 (superseded)~~. `$Catalogue` as a type only**, alongside `$Biography` and `$Autobiography` — Doug: *"`$Catalogue`, `$Biography`, `$Autobiography` are all valid types and one of the things they can do is put constraints on the type."* The interface `$Catalogue$` (trailing `$`) stays what it is: a composition of references that is also a reference for its composition. **CORRECTED 2026-08-06** — this requirement previously said `$Catalogue` was the kind of book a subject references, and [the plan's D4](#decisions) invented an exception making it *"a real cataloguing book with parts of its own."* **Doug never ruled that; the implementer did.** U12 is built on the invention and must be removed rather than implemented.

## The reference-checks-type design *(Doug, 2026-08-06 — supersedes R4)*

**The move: deprecate the `$Catalogue` class in favour of references that check.** `$Subject`, `$Library` and `$Author` are **book references that validate structure — and validate types.**

- **R38. `$Catalogue` the class is deprecated.** It does not need to exist in the library. Cataloguing-ness is a **type**, and the reference is what enforces it. *(Supersedes R4 in both its earlier readings.)*
- **R39. `$Subject` is a book reference that validates its referent wears the catalogue type.** A subject refuses to point at a book that is not a catalogue. The check lives in the reference, not in a class hierarchy.
- **R40. `$Library` may be on every book, and it is read rather than stored.** A book's library is reached **through its canonical subject**, which gives *that* subject's library, **recursively — and the walk must terminate.** The terminus **must be a library**, and the `$Library` reference **validates that**, as the subject does.
- **R41. `$Author` is the same kind of thing** — a book reference that checks structure and type, rather than a class.
- **R42. Because references check types, the library is FORCED to define types.** This is the point, not a side effect: the type system stops being optional decoration, because **the reference system cannot work without it.** A library that defines no types can validate nothing.
- **R43. The bootstrap is the self-reference, and it is already ruled.** *We know a library because it catalogues itself; we know the canonical autobiography because it authors itself* (R9). A library is recognised **structurally**, without a type lookup — which is what stops the walk without requiring the very type system the walk exists to reach. **The circle closes on the fixed point rather than on a lookup.**
- **R44. The author chain and the library chain share one termination law.** [R12](#subject-author-and-the-summit) already demands the author chain terminate in a self-loop and never a longer cycle. R40's walk needs exactly the same guarantee. **One law, two chains** — and a mutual-subject two-cycle must be refused for the same reason a mutual biography is.

**What this buys, stated so it can be argued with:** no class hierarchy for the referential family; subjectivity genuinely **computed** rather than declared, because a reference's validity *is* the computation; and the type system made load-bearing by necessity instead of by assertion.

**Still open and Doug's:** what a catalogue type actually **specifies** — what parts a book must have to wear it, and what it refuses.

## What a catalogue specifies, and how validation runs *(Doug, 2026-08-06)*

- **R45. Speak book semantics: a chapter is to a book as a part is to a composition.** Say **chapters**, not parts, when the composition is a book. *(Doug, correcting the vocabulary mid-design.)* **A catalogue's CHAPTERS are references to books**, and they carry those books' **synopses** — which is why R37's derivation is the catalogue's nature and not a convenience.
- **R46. A catalogue may have unwritten chapters.** The way a table of contents pulls its chapters implicitly, a catalogue **reaches to see what books have it as their subject**, and those appear automatically. Nobody lists them by hand.
- **R47. `$Canonical` — a book reference a subject declares.** *Doug's word.* Validation: the canonical must actually **have that book in its subject**, and **there can be only one**.
- **R48. Every table of contents must be able to check subject references, and a table of contents must be EXTENSIBLE.** Not a new class — the existing one gains the ability. The flexible abstraction has to allow a table of contents to **override one chapter**, or to **add book references for books that do not declare themselves part of the subject**. *Doug: "We need a flexible abstraction for this."*
- **R49. How validation runs — DESIGN OWED, and it is the sprint's central mechanism.** *Doug: "We need to find a mechanism for this… This requires real design."* Three shapes on the table, his:
  - **All validation at `.public` build time** — references are compiled into a library there. *"Not sure that is practical."*
  - **A version of the app run in validation mode** in `.public`, where all books are loaded so books can be accessed.
  - **The build generates book references** — *"reference cards?"* — available on all pages, and **books validate themselves against those**.
  - **The naive fallback, if we punt:** a subject, on getting its reference, **reads the referent** to see its table of contents contains book references and that the current book is one of them. `$Library` validates that *and* that the library catalogues itself — it is its own subject reference. `$Author` validates that the book's author link is itself.

**This is the unit that was written without a mechanism.** It is marked **design owed** and gets no files and no scenarios until it can answer *what runs, and when* — per [the failure filed against this sprint](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md).

### R51. A requirement is specified well enough to know it is satisfied — or it is not a requirement yet

*Doug, 2026-08-06: "Requirements should be very well specified or you don't know that you have enough information to specify them."*

**Under-specification is a signal, not a style.** A requirement you cannot state precisely is telling you that **the design behind it is missing** — and writing it loosely hides that. This sprint's 34 requirements were mostly *rulings*, correctly captured, and several were loose enough to pass into the plan as units while the mechanism under them was absent (R13, R16, R17 above all). **Looseness was the symptom that was available and nobody read it.**

The test, applied before a requirement is accepted: **could someone else tell whether it is satisfied, without asking me?** If not, it is a design question wearing a requirement's number. Together with [R50](#r50-brainstorms-carry-pseudocode-and-implementation-notes) — sketch the mechanism — and the demo law, this is what keeps a brainstorm from producing a plan that cannot be built.

### R50. Brainstorms carry pseudocode and implementation notes

*Doug, 2026-08-06: "I recommend you write pseudocode and detailed implementation notes as part of a brainstorming session."* **This overrides [ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md)'s adopted altitude rule**, which forbids implementation specifics at this step on the grounds that they force architectural decisions on shallow research. Our failure ran the other way: a unit reached the plan with **no mechanism at all** and looked buildable. Sketching the mechanism is what exposes its absence. Recorded as a divergence from the pinned source, not a drift.

### The mechanism, sketched — R49

```
$Subject  =  a book reference that validates by READING its referent

  valid():
      catalogue = read()                        // the book this subject points at
      rows      = catalogue.tableOfContents.chapters()
      return rows.every(r => r.reads_to_a_book())   // it catalogues BOOKS, not chapters
          && rows.some(r  => r.read() === this.of)  // and I am one of them

$Library  =  a subject that additionally validates the summit

  valid():
      return super.valid()
          && read().subject.read() === read()   // it catalogues ITSELF (R8, R43)

$Author   =  a book reference to a canonical autobiography

  valid():
      biography = read()
      return biography.author.read() === biography    // it AUTHORS itself (R9)
```

*Vocabulary, ruled: **`$Author` reads a biography.** The word **life** is out — Doug: "Remove the word life from the semantics of this. NOT THE SEMANTICS OF BOOKS." It appears in [On Kinds](../../../../.claude/library/bookkeeping/15-on-kinds.md)'s population as a plain synonym; it is not our word.*

### R52. `$Card` and the `$Catalogue` singleton — DESIGN OWED

*Doug, 2026-08-06: "So this is a serious thing that needs a design."* The shape as he stated it:

- **`$Catalogue` is a singleton**, the catalogue **of the library**, and **for now it can exist on every page**. It is **the list of cards**, carrying the metadata we need from them.
- **A `$Card` refers to a book.** *Doug's word.*
- **The lifting.** *"Anything that is a type can be realized as a reference"* — generate, from a type, a form that keeps **all members and values** but with **types converted to references through the cards**. This is the `$Sentence` → `$$Sentence` move generalised: the double-`$` form is a sentence's reference that catalogues **references to** its words rather than holding the words.
- **The depth rule, which is what makes it finite.** Below the book level there is no direct access. A **chapter property becomes a chapter reference**, which points at the book; the book carries chapter references that again hold **certain properties but not the sections** — enough to read **metadata**, not enough to pull the contents through. *Books to chapters, with subject and author links and whatever else as dynamic types — like **reflection**.*

**Why this answers R49.** Validation needs every book present at once, and a card is exactly *a book present without the book being loaded*. The singleton on every page is where they are all present.

### R53. The card is a COMPILATION, defined by the `.public` build *(Doug, 2026-08-06)*

- **All property names remain identical.** That is what keeps it **1-to-1** and safe from drifting out of step with the book.
- **Framework properties from `$Referent` up** are included.
- **Per property, the rule:** a **basic type** is left as it is. A piece of writing that is a **book** → the property is typed to **the reference**. A **chapter** → becomes the chapter-equivalent, **an array on the book card**. **Any other reference** — including the rare chapter reference on another book — collapses to **the book reference plus names**: book, chapter name, section name. **Section names are not on the card**, so those references carry **strings that extend the card**.
- **Probably generated with the TypeScript compiler**, describing what is written in the code — *"which is like what has been written down."*

**And the law of depth is purposive, not structural** *(Doug)*: a card is a thing in the app that **can take you to the book**, and cards can be followed — but the point is that **you can do the checks without following**. A card carries what a catalogue card carries: enough to learn about the book without handling it.

**Names — reported, not adopted.** Doug asked for the real library terminology and for more technical alternates:

| candidate | what it is | filter |
|---|---|---|
| **surrogate** | information science's term for a catalogue record: a **document surrogate** stands in for the item so the item need not be consulted | **exactly the described function**, one word, free here; unfamiliar outside the field |
| **card** | the physical unit of a card catalogue | plain, free, and already in use in conversation |
| **record** | the modern cataloguing word (bibliographic record) | free in the domain but heavily spoken for in software |
| **description** | ISBD's word — the catalogue's account of a work | free, but generic |
| **index card** | stationery, not a library kind | fails filter one: it names the paper, not the catalogue function |
| **entry** | the record under a heading — main entry, added entry | **taken**: we already use *entry* for a catalogue's rows |

**Still open:** what the chapter-equivalent on a card is called — the real term for the field listing a work's chapters is the **contents note**, which is multiword and fails the one-word law.

### R54. The card catalogue, typed — Doug's design, checked against the interfaces

*Doug, 2026-08-06: the old (pre-OPAC) thing is a **`$CardCatalogue : $Catalogue$<$Book>`**, holding **`$IndexCard<$Book>`** which serve as **`$Reference$<$Book>`**; the singleton variable is **`libraryCatalogue`**. British spelling throughout. **We name the old-fashioned thing because these things are visible.***

**What checks out.** `$Catalogue$<$Book>` is legal: `$Book implements $Referent$` and carries `copy`, `index`, `parenthetical` — exactly the constraint. Its composition is over `$Reference$<$Book>`, so `$IndexCard<$Book>` slots in as a part, and `follow(): $Composition$<$Book>` returns the books. The catalogue is **also** a `$Reference$<$Composition$<$Book>>` — the catalogue equation, at book level, satisfied.

**Two carries to correct.**

1. **`$$Book` cannot be the card and keep the double-`$` pattern.** Every existing double-`$` form is *a catalogue of the level below* — `$$Sentence implements $Catalogue$<$Word>`, `$$Chapter implements $Catalogue$<$Section>`. Below a book are chapters, and **`$TableOfContents` already implements `$Catalogue$<$Chapter>`**. A pattern-consistent `$$Book` duplicates the table of contents; a card wearing that notation makes `$$` mean two things.
2. **A book would gain a second reference form.** [R22](#writing) rules `book.ref` is its **cover**. A card is a different reference to the same book — the cover is its **face**, the card its **surrogate**. Coherent, but *"the reference to a book"* stops having one answer and something must say which is wanted where.

**Names.** `$CardCatalogue` and `$IndexCard` are multiword and earn it the way `$TableOfContents` did — **fixed phrases naming real things**, not compounds we assembled. Keeping `libraryCatalogue` as the variable avoids a second multiword class. *Flagged: `$Index` already exists as the back-of-book index, so a reader meets **index** twice meaning different things.*

### R56. `$$Book` is a ROLE with several candidates — and canonicality is CONTEXTUAL

*Corrected by Doug 2026-08-06, after I asked twice which single thing `$$Book` "is":* **"`$TableOfContents` is one candidate for `$$Book`, as will a `$LibraryCard`. There is no such thing as a unique reference. One canonical reference in a context is perhaps what one needs, but there can be more than one — and in the card catalogue it isn't a table of contents."**

So the book's reference form is **not a class**. It is a position that several things occupy:

- **`$TableOfContents`** — the book's reference form **inside a book you read**, catalogueing its chapters.
- **`$LibraryCard`** — the book's reference form **inside a card catalogue**, carrying its surrogate.

**What is unique is not the reference but which reference is canonical IN A CONTEXT.** Canonicality is a property of *a thing in a setting*, never of the thing alone. A book does not have *the* reference to it; a **context** has a canonical one.

**R60. Canonical is a designation made BY a context, not a property OF a thing.** Doug: *"The Bible is the canonical book in some context. It isn't the canonical book in my mathematics class."* Nothing about the book differs between those rooms; **which body is recognising differs.**

*The model has been doing this all along without our seeing it as one thing:* `$Document.canonical` designates a part; `$Cover` overrides what **summary** means for covers; a subject designates its canonical book ([R47](#what-a-catalogue-specifies-and-how-validation-runs-doug-2026-08-06)). Those read as special cases. **They are the general case.**

*And it dissolves a ruling in [On Kinds](../../../../.claude/library/bookkeeping/15-on-kinds.md), which excluded **canon** from the population because it "collides with the canonical, which names a designated first part at every level."* **There is no collision — it is the same operation at two scales.** A canon is *the works a body recognises as authoritative*; a canonical is *the part a composition designates*. Body and composition are both **contexts**.

*Consequence for R47:* a subject's canonical is **the subject designating**, not the book being intrinsically special. The same book may be canonical in another subject, or in none.

*This is [R57](#r57-references-are-not-unique-and-never-were) applied — and I recorded R57 and then violated it in the next question. The failure mode: treating a role as if it needed a single filler, which is the same move as asking which reference is "the" reference.*

### R57. References are not unique, and never were

*Doug, 2026-08-06: "Why do you think references need to be unique? That's ridiculous."* **Many references may point at one referent.** A cover and an index card are both references to the same book; a subject reference and a canonical reference may both arrive there too. Nothing has to choose, and no design question arises from having more than one.

**This was already formalised in our own derivation** — [The Category, and What Escapes It](../the-semantics-of-books/12-the-category-and-what-escapes-it.md): `read(ref(x)) = x` always, but `ref(read(r)) = r` **not in general**, because *"many references arrive at one referent, and arriving tells you nothing about which reference you came by."* Referents are a **retract** of references. The plain reading is the point of reference itself: **you can point at one place from many places.**

### R58. `$LibraryCard` replaces `$$Book` — and the notation becomes vocabulary at book level

*Doug, 2026-08-06, offered as a joke and kept because it works.* **`$LibraryCard` is what replaces `$$Book`** — a book's surrogate reference form, an `$IndexCard<$Book>`.

**Why the notation gives way to vocabulary here.** Doug: *"`$$Sentence` is just called that because, as far as I know, there is no such thing as a sentence pointer which indexes references for its words. So we defined it like that. If we have an object to hold the semantics let's use it."* **`$$` is a placeholder for a name the world never gave.** Below the book, reference forms are unnamed, so notation stands in. At book level the world named **several** — table of contents, library card — so [the role has real fillers](#r56-book-is-a-role-with-several-candidates--and-canonicality-is-contextual) and the notation is not needed.

**The special case that gives it its name.** A library card whose book is an **autobiography whose author link is that same card** — the self-loop [R9](#subject-author-and-the-summit) demands, carried on a card.

### R59. *Having* a library card is a structural fact, not a possession

*Doug, 2026-08-06, completing the joke:* **"What does it mean to have a library card? It means there is a library where you author an autobiography and the autobiography link is a library card that is its own author link. That is having a library card."**

**Nobody is issued anything.** To *have* one is for a configuration to exist:

```
has_library_card(who):
    THERE EXISTS a library L, and a card c in L's card catalogue, where
        c.read()          is an autobiography
        c.read().author   is c itself        // the card is its own author link
```

Three things follow, and each is load-bearing.

**Identity is existential, not local.** *Having* is a claim that somewhere such a configuration holds — not that this library holds it. So a being's standing in the system is the existence of a self-authoring card, wherever it lives.

**The credential is self-contained.** Present the card and the check is *does its author link point at itself* — answerable **without reaching the home library**. That is precisely what makes it work abroad, and it is why the surrogate had to exist before this could.

**It is subjectivity computed, once more.** [Chapter 07](../the-semantics-of-books/07-the-subjective-subject-and-the-library.md) says subjectivity is read off catalogue structure rather than imported. *Having a library card* is that same move at the level of a whole person: **not a status granted, a shape that either obtains or does not.**

**What it buys.** *"That ends up being the kind of thing one needs to have to be an author in other libraries. Like a library card."* A library card is what identifies you **to a library you do not belong to** — so a subject from one library can be an **author in another** without that library holding the autobiography. **The card is a surrogate, so the fixed point travels while the book stays home.**

**And it answers a question chapter zero has carried since Sprint 46** — *"the personal-library reference: how `doug-library` is cited from IXP so links resolve when present and degrade honestly when not."* A self-authoring card is the mechanism: present, it validates; absent, it degrades to the names it carries.

**Open:** whether [`$Author`](#the-reference-checks-type-design-doug-2026-08-06) is *typed* as a `$LibraryCard` — which would make every author link portable by construction — and whether a card validates the same way at home and abroad.

### R61. A library is the universe — there is one, and `$Library` validation is that they all agree

*Doug, 2026-08-06, correcting a false choice I put to him:* **"A library is the universe. Don't worry about multiple libraries right now. The whole point of subject validation will be that everything in the library catalogue shares one single book that is the library all of them are in. Hence the library catalogue is possible."**

- **There is one library.** *"There will always be one that contains everything that exists on some level."* It is not one of many and it is never nested.
- **`$Library` validation, stated exactly:** **every book in the card catalogue must arrive at the same library book.** Not merely *a* terminus each — **the same one.** If two books walked to different libraries, the catalogue would be a catalogue of nothing. **That agreement is what makes a card catalogue possible at all.**
- *"That might earn you the location."* Location is meaningful only inside one universe — which is why [`$Location`](../../package/src/reference/Location.tsx) can mean anything.
- **No library inside a library.** Another library *"might not even be in this framework."* Two libraries are **two different perspectives**, not a containment.

**Consequence for [R58](#r58-librarycard-replaces-book--and-the-notation-becomes-vocabulary-at-book-level) and [R59](#r59-having-a-library-card-is-a-structural-fact-not-a-possession):** the library card's *"author in other libraries"* means **other perspectives — possibly outside this framework entirely** — not a second library modelled here. The card is what survives leaving the universe, which is a stronger claim than portability within it.

**Consequence for the demo:** a two-library demonstration is **out**. The visible claim is one library where **every book agrees on which book is the library** — and a book that disagrees is refused.

### R62. The library card is a formal literary joke — the second one, and that is a method

*Doug, 2026-08-06:* **"A library card in this framework validates your ability to have one in another framework. It's a joke. A double entendre. A connection between two things that mean different things in different contexts. Yet this is their formal association. It's a formal literary joke."**

**This is the same device the theory already turns on.** *Subject* was the first — the topic a book is **about**, and the one who **is about** things — and [chapter 12](../the-semantics-of-books/12-the-category-and-what-escapes-it.md) is explicit that it is **proved rather than admired**: the two senses *"coincide by force of the ordering, not by luck of the English."*

**The card does it again.** Two senses in ordinary use: the **surrogate** standing for a book in a catalogue, and the **credential** letting you use a library you do not belong to. Their formal association: **a card that authors itself is exactly what validates authorship elsewhere.** The pun is the proof, not a gloss on it.

**So it is a method, not two coincidences.** Where the framework's constructs are right, the everyday word's two senses turn out to be **one structure seen from two sides** — and finding a word whose senses collapse under the formalism is *evidence the construct is carved correctly*. Where a name needs an argument invented for it ([On Kinds](../../../../.claude/library/bookkeeping/15-on-kinds.md)), that is the same signal running the other way.

*Filed as a requirement because it governs naming: a candidate whose second sense is **also** true of the structure is stronger than one that merely fits.*

### R63. There is no walk — `$Library` is COMPUTED, and validation happens in place

*Doug, 2026-08-06, correcting a traversal I kept re-introducing:* **"Everything is a book. Everything could be on a shelf. What do you think is walking? We are talking about the validation of a `$Subject`. We know that all books belong to a `$Library`, and that that is a computed property from the subject that has to have certain properties."**

**This supersedes the `libraryOf(book)` pseudocode in [R49](#the-mechanism-sketched--r49).** There is no climb, no `seen` set, no terminus reached by stepping. A book's library is **computed from its subject**, and the subject is validated **where it stands**.

**Why it can be in place: the cards.** *"The whole point of library cards is that enough metadata floats around to do in-place validation."*

- References are specified **by a reference name** into the library catalogue, and **cards are inserted**.
- Cards are **generated with metadata in the code**, much of it **dynamic**.
- **The subject link can itself BE a library card with special properties** — because the assignments of **subject, author and canonical must be aggregated** to assign properties to the library catalogue. The aggregation is what gives the catalogue its content; the card is what carries it back to the point of use.

**And [R44](#the-reference-checks-type-design-doug-2026-08-06)'s cycle law changes shape with it.** A termination guarantee was needed for a walk. With no walk, what remains is that the aggregated assignments **agree** — every book's computed library is the same book ([R61](#r61-a-library-is-the-universe--there-is-one-and-library-validation-is-that-they-all-agree)) — which is a property of the aggregate, not of a traversal.

### R64. A card is writing, at paragraph grade — and the catalogue is injected, not reached

*Doug, 2026-08-06.* **"A card is a piece of writing right? Maybe it's a paragraph level?"** So a card sits in the writing levels rather than beside them — which is consistent with [R16](#the-type-system): a type is writing, and a card is what a type is realised as.

**The library catalogue is dependency injected for dynamism, but assigned to reference types at build** *"so that one doesn't even need to access that."* The container exists for the dynamic case; in the ordinary case a reference already holds its card and reaches nothing. *Connects to [R55](#r55--as-a-container-and-cards-built-at-build) — `$` as the container, since it already constructs instances.*

### R55. `$` as a container, and cards built at build

*Doug, 2026-08-06.* **Index cards are created at build.** The **subject, author, library and canonical** book links carry card references **constructed at build**. And the singleton may be a **resource requested in a constructor and filled in by `$()`** — *"if we make `$` a DI container somehow, it will be slick because we already use it to construct instances."* **DESIGN OWED**; recorded because it is the first proposal for how a book reaches the catalogue without importing it.

**Not designed yet:** who runs the compilation and when; whether the cards ship to every page or stay at build; and what a `$Catalogue` specifies.

**The walk, which is R40 and R44 in one:**

```
libraryOf(book):
    seen = {}
    b    = book
    forever:
        s = b.canonical_subject                 // R47 — declared, exactly one
        if s is absent:      refuse "a book must declare a canonical subject"
        next = s.read()
        if next === b:       return b           // self-cataloguing — the terminus
        if next in seen:     refuse "the chain cycles without a fixed point"   // R44
        seen += next;  b = next
```

**The same shape terminates the author chain** — self-loop returns, longer cycle refuses. One law, two chains, one implementation.

**And what has to be true for any of it to run:** every one of these `valid()`s **reads another book**. So validation needs **every book reachable at once** — which is exactly why R49 is a build-and-runtime question and not a per-class one. The three shapes differ only in *where the books are all present*: at `.public` build, in an app run in validation mode, or through generated references available on every page.

## What was NOT designed, and was supposed to be

*Named at the first review, 2026-08-06. This is the sprint's actual work and none of it was done.*

**How a type weighs in.** R16 says a type is a reference to a part of a book and the name comes from that part. **Unanswered:** how the link to that part is constructed and authored; how it locates the right part **at build**; what actually runs, and when. Doug: *"Build time validation is interesting, no? But maybe we run something in some way to achieve that. This is what was supposed to be designed."*

**Feasibility was established and mistaken for design.** [R16b's evidence](#r16b--the-feasibility-case-with-its-evidence) shows code *can* run at build and app time, and Doug deferred the **build** to Sprint 50. The deferral of a build is not the deferral of a design, and the implementer let one stand in for the other.

**Consequence for the demo.** The shelf demo is built entirely from `$Book`, `$Cover`, `$Section` and `$TableOfContents` — all of which predate this sprint. It is a **regression check** proving the bond-constructor migration did not break how books render. It demonstrates **nothing of Sprint 48**: its catalogue omits itself because an array was filtered, not because a catalogue cannot contain itself; its entries are chapters, not references to books; no subject carries a specification; no book wears a type.
- **R5.** A book has an **author** and a **subject**, reached **through its cover**, and `valid()` requires both. *Consequence: every book we have — the manifold, the algebra book, the book of code — carries neither today. This is a migration inside the sprint, not a footnote.*
- **R6.** A book declares **one canonical subject** and **may declare further memberships** — "something of a using statement for the specification." A book may reference the specifications only of subjects it declares membership in.
- **R7.** A book may be catalogued by **secondary, non-canonical subjects** it does not declare. Those catalogue it; they specify nothing for it.
- **R8. Self-cataloguing is declared by pointing home** — a book's subject reference points at **its own cover**. `$Cover` is already `$Reference$<$Book>`, so the loop closes on shipped machinery.
- **R9. We know a library because it catalogues itself. We know the canonical autobiography because it authors itself** — both referentially, and **both confirmed by validation** rather than asserted.
- **R10.** An **author reference points to the canonical autobiography of a subject.** Only one subject in a library can have that: the subject representing the librarian, which is the subject representing the library. *The four-hop walk in [The Author's Fixed Point](../the-semantics-of-books/13-the-authors-fixed-point.md) is the derivation, not the mechanism — steps are not validation.*
- **R11.** A **biography is a book about a subject in the subjective sense.** One subject may have **more than one** biography, and none need be a comprehensive account of a life. For a subject that represents a being, **the canonical book of the subject must be a biography**.
- **R34. `$Literature$` is an interface, not a class** — the trailing `$`, consistent with the rename that freed `$Catalogue`. It names **a catalogue of references to books**, which the type system does not yet have: `$TableOfContents` catalogues *chapter* references, and nothing catalogues *book* references. **The `$Subject` reference, through the table of contents, is what implements it.** *(Doug, ruled 2026-08-06 during the plan.)* Two ends stay open and are named rather than guessed: **how to find the part of a table of contents that catalogues a given book** — an inverse lookup the model has no move for today — and **whether a reference kind is needed that specifies across the levels of writing**. Neither is designed; both are raised.
- **R12. The author chain terminates in a self-loop, never a longer cycle.** Arthur's edge case from [chapter 13](../the-semantics-of-books/13-the-authors-fixed-point.md): mutual biography — A files to a subject whose canonical is B, B's files back to A — never escapes and has **no self**. Validation must refuse it, or "the chain stops" does not mean "someone is home."

## The type system

- **R13.** Books do not have a type today. **`$Type` is the sprint's central new class.** It is declared **on the book**, and read in the bond constructor either from the book or inserted by the cover through `$`. The declaration is parenthetical writing on the cover, per R3.
- **R14.** A `$Type` may **derive from multiple types** — multiple inheritance, so a book can hold several types at once.
- **R15. All applicable types must hold.** Conjunction, no exceptions. To change what a type demands, **subclass the type**.
- **R16.** A type is **writing** — *"it can't be parenthetical if it's not"* — and carries a **name**: `<Type>Sentence</Type>`. **A type is a reference to a part of a book — a chapter or section — and the name comes from there.** No registry, no lookup table: the reference system already does this, and the part it points at is the specification (R19). *Closed 2026-08-06; was the last open piece of the type system.*
- **R16a.** **Code is associated with that part.** A type is not only a constraint stated in prose — the specification carries code that runs.
- **R16b. Code runs in more than one place.** Some runs **when `.public` is put together**; some runs **when the app runs**, where it is *"likely just code in a book."* **Not built this sprint** — Doug: *"Convince yourself that it can be done. We will build it and commit parts of a demo to it in the future."* The feasibility case is below; the build belongs with [Sprint 50 — The Public Build](00-planning.md), and parts of a demo get committed to it then.

### R16b — the feasibility case, with its evidence

*Each claim marked with what backs it, per the standard that a claim carries its state.*

1. **A type's code needs no new mechanism.** A type references a part of a book (R16); a part is a `$Chemical`; chemicals already carry methods, and `valid()` is already *"the accruing instance specification."* Constraint code is the referenced part's own method. **Verified** — [Check](../../../chemistry/.lib/composition/04-check.md).
2. **Markup becomes live instances outside a render.** `$()` eval *"runs the real bond-constructor synthesis over a single element and returns the materialized instance"* — no parallel construction path. **Verified** — built in [chemistry's Sprint 44](../../../chemistry/.lib/projection/43-sprint-44--eval-and-the-block-model.md), locked by `eval.test.tsx`.
3. **That path already runs under Node today.** Both suites — 622 chemistry, 108 lib — materialize and validate chemicals under vitest with `environment: 'happy-dom'`, targeting `node14`. A build-time run is that same environment with a different caller. **Verified** by reading both `vitest.config.ts` files. **Precisely: Node *with a DOM shim*, not bare Node** — whether the model materializes with no DOM at all is **unproven** and wants a probe before 50 relies on it.
4. **One artifact serves both callers.** The package already ships dual-format — `dist/lib.js` (ESM), `dist/lib.cjs`, `dist/lib.d.ts` — so a build script and the app import the same code. **Verified** in `package.json`.
5. **The split is a line the framework already draws.** `valid()` reads the model and answers a boolean, touching no DOM; `view()` is React. So **constraint code runs anywhere, view code runs in the app** — which is the existing seam, not a new one. **Reasoned from the built model**, not yet exercised at build time.

**Conclusion: it can be done**, and the only unproven step is bare-Node materialization, which a single probe settles.
- **R17.** A book has access to **all types specified in any catalogue that catalogues it, recursively**, up to the library — restricted by R6 to subjects it declares.
- **R18. Form is the type system.** Dewey gives botany one number and a standard subdivision says whether a work is a dictionary, a history or a bibliography *of* it. A dictionary of trees is **the dictionary type applied to a book in the trees subject** — not a second subject, not a different shelf. *(Doug: "Good to reference dewey.")*
- **R19.** A subject's **reference manual is a book in that subject**, distinguished by its type. It may live as a **part of the catalogue** and become **its own book as it grows** — the [overflow law](../the-semantics-of-books/09-composition-and-collection.md) already in the derivation: *when the payload outgrows the entry, containment turns into reference.* **Two tracks remain two: cataloguing a subject and specifying it are not the same.**
- **R20.** A **subject may constrain the books it catalogues** — the specification of a subject exists in the catalogue that represents it. *(Ruled out earlier in the session, then reversed: "Both in — the earlier ruling reverses.")*

## Writing

- **R21.** A **sentence is a composition of words.** `$$Sentence` **is not a sentence** — it is the sentence's canonical reference, which also catalogues references to its words. That was intentional; use it.
- **R22. `book.ref` is its cover** — semantically, we see the cover of a book first. The **table of contents is a reference for the book and a catalogue of its chapters, and it references the book through the cover.** *Verified: [`$TableOfContents.read()`](../../package/src/book/TableOfContents.tsx) already reads through `this.cover`. No change.*
- **R23. `role` is a property of writing itself**, values `use | mention`, **`use` the default**. *Doug's word, ruled 2026-08-06 over the reported population — "it has more to do with quotation."* Prose is used: words mean things. **Mention is the marked case** — *"'Cat' has three letters"* mentions the word — and quotation is what marks it.
- **R24.** **Syntax is a typed word.** The word's **copy stays faithful to the sentence** — the mark itself, which is being **used**, doing syntactic work — and the **type carries the name** *Period*. Doug's own test settles it: *"it's not actually in the sentence"* — what is in the sentence is the mark, not its name, so naming belongs to the type (R16), which is where names live. *Verified as genuinely blocked today: [`$Word.valid()`](../../package/src/writing/Word.tsx) admits letters, numbers and apostrophes only, and [`$Sentence.parts()`](../../package/src/writing/Sentence.tsx) finds words with a regex that steps over punctuation. Syntax is not missing by oversight — it is discarded by the parse.*

## Collected in review

*Requirements that arrived from **seeing** rather than from describing. [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md)'s product; numbered on and never renumbered.*

- **R35. A reference is followed by its own name.** The name **is** the link — you do not print a name and add an affordance beside it. Doug: *"You literally have the name of the book in the title, but that is not a reference… You think Wikipedia should not use the name of a person as a link, but needs to add some text that says 'read about the author' somewhere else?"* **The same lesson the table of contents taught** — do not litter with metadata. Applies to the model and to every surface: a book's title in a catalogue entry dereferences to that book. *Violated and fixed the day it was written — two turn buttons, a running head and an "entry N" label died, and the titles became the references.*
- **R36. The implementer owns being done; review is where Doug weighs in.** Doug: *"You own being done and the review is where I weigh in. Build requirements. Decide if you have satisfied them, but move checking to the review."* Satisfaction is asserted with evidence by whoever built it. **Asking Doug to rule on doneness inverts the responsibility** and turns a check into a bottleneck.

## The parts of books

- **R25.** **`$Preface`** and **`$Foreword`** join the chapter kinds. Simple extensions of `$Chapter`. Each **unique**; both **before the chapters**. What they each mean is design still owed.
- **R26.** `$Book` validation extends to **all derived chapter kinds** — uniqueness, and placement where placement matters (before, after, or neither). **The book carries the meaning of its typed parts** — these are the basic parts of books. *Today `valid()` checks four things; that becomes the general rule.*

## The framework — `$Chemistry` changes this sprint

*Sprint 48 reaches into the framework package. Named as scope, not discovered as drift.*

- **R27. All bond constructors on the chain must be called.** Today the framework [walks the class chain and binds with the **nearest** method it finds](../../../chemistry/.lib/composition/03-binding-constructor.md), calling it **once** — a subclass that declares one silently **replaces** its parent's. That is why types cannot be reconfigured.
- **R28.** The framework calls **only the last declared** bond constructor; **the previous ones are called by it**, as C# constructors call each other. **Arguments may be adapted** on the way up.
- **R29.** A system **ensures they have all been called** — probably by wrapping the bond constructor so a side effect can be monitored.
- **R30. Skipping is fine.** A subclass that declares no bond constructor still binds through its ancestor's; the system starts at the last declared. *The standing ban on ceremonial binding constructors (Doug, 2026-07-31) survives untouched.*
- **R31. Async is already handled** — `$construction$` awaits, and the wrapper monitors completion. The compiler cannot help here: bond constructors are **named after their own class**, so TypeScript sees unrelated methods with no override relationship, no signature check and no missing-await check. Enforcement must be runtime by construction.
- **R32.** A **`formed`** method, called after all bond constructors complete — the natural place for validation. *Consequence: moving `assertValid` off the bond constructor changes behaviour for every chemical — 622 tests in chemistry, 108 in the lib.*
- **R33. Validation is diagnosable in the UI.** *Verified already built: a failed bond stores [`$devError$`/`$devException$`](../../../chemistry/package/src/abstraction/chemical.ts) on the chemical and renders through `$exceptions.render(error).view()`. The invalid instance survives and renders its own refusal.* What is missing: `assertValid` throws one generic sentence — *"`$Book` is not valid after its bond constructor"* — with no reason and no source. With types weighing in from several places, a refusal must say **which** refused.

## Out of scope, named

- **Routing and the library.** The relationship between routing and the library is not designed. *Doug: "Why do you know where a book is constructed? We haven't gotten there yet. The demo is ad hoc."* Nothing in this sprint may assume construction order.
- **Writing levels as types.** Whether letter, word, sentence and paragraph are conveyed as types of writing rather than classes — raised, not ruled, and re-askable once the terminology is clean.
- **The bibliography's pointing-out form**, shelved by Doug in 47.

## Key flows

- **F1 — A book declares itself.** An author writes a cover; the cover carries the book's title, its subject reference, its author reference, and its types as parenthetical writing. The book reads them at its bond and `valid()` judges.
- **F2 — A type resolves.** A written type name on a cover reaches its type by climbing the subjects the book declares, recursively, up to the library. Every type found must hold.
- **F3 — The loop closes.** The library's subject reference points at its own cover. Following it arrives back where it started; validation confirms the library catalogues itself and its canonical authors itself.
- **F4 — A refusal is read.** A book fails a type; the bond refuses; the exception carries which type refused and why; the page renders it.
- **F5 — A subject specifies.** A subject's reference manual states what books in that subject must be. A book declaring membership is judged by it.

## Acceptance examples

- **AE1.** A book with no subject and no author on its cover **refuses to bind**, and the refusal says which is missing.
- **AE2.** A book whose cover declares a type it does not satisfy **refuses**, and names the type that refused and the constraint it broke — not "is not valid."
- **AE3.** The library's subject reference reads to its own cover, and following it arrives at the library. `valid()` answers true for exactly one such book.
- **AE4.** Two books in mutual biography — each author reference leading to the other's subject — are **refused**. The chain has no self and the model says so (R12).
- **AE5.** A book in the trees subject wearing the dictionary type validates against the trees subject's reference manual, and the same book without that type does not (R18, R20).
- **AE6.** A subclass whose bond constructor calls its parent's binds correctly; one that does **not** call upward is refused with a message naming the ancestor never reached (R27–R30).
- **AE7.** A `$Preface` and a `$Foreword` before the chapters validate; two prefaces, or a preface after chapter one, refuse (R25, R26).
- **AE8.** A sentence containing a period yields a word typed *Period*, marked **use**, and the sentence's prose is unchanged by its presence (R23, R24).

## Names — what was ruled, and what stays unnamed

*Per the naming law: the population is reported, nothing is argued into place, nothing is adopted before a ruling.*

**`role` — RULED (Doug, 2026-08-06)** for the property holding `use | mention` (R23). The reported population was *supposition* (medieval logic's term for how a term stands for something; material supposition is exactly mention), *autonymy* (a word used to mention itself) and *signification* (wrong axis — meaning, not standing-for). Doug took none of them: **role**, *"it has more to do with quotation."*

**Nothing else is named.** The subject's reference-manual class, if it becomes one, is unnamed. `$Type`, `formed`, `$Preface`, `$Foreword` and `role` are Doug's own words, kept as given.

## The team's library is inspiration, not scope

*Recorded because this session kept reaching for it, and the reach has a boundary.*

We may **draw inspiration** from the hand-written library — it is the [proof of concept](#requirements), and Doug drew on it himself when he pointed at how the specification of library types lives there as chapters. **We are not changing it.** No migration, no sweep, no rewriting its books to match the framework's vocabulary. The banned word (R2) governs how we speak and what we write in `@dna-platform/lib` going forward; the 47 places it already stands in the team's own books are not this sprint's business.

---

---

# Plan

*Set 2026-08-06. **WHAT, not HOW** — decisions, units, files, scenarios and risks. No signatures, no choreography, no pseudo-code: pre-written implementation is brittle and robs whoever writes it of judgment they should exercise with the code open. **Unit identifiers are never renumbered**; a split keeps the original identifier and takes the next unused number, a deletion leaves a gap.*

## Decisions

**D1 — The framework changes land first, and they land in the other package.** R27–R33 are `$Chemistry` work in [`library/chemistry/package`](../../../chemistry/package/). Every lib requirement validates through them, so building the lib first would mean building against a mechanism scheduled to change. *Chosen over: doing the lib first and retrofitting — which is how a framework change becomes a rewrite.*

**D2 — Types weigh in on validation, not on construction.** `valid()` already accrues up the chain by calling `super.valid()`; bond constructors do not. Types contribute constraints to the side that already composes. *Chosen over: types reconfiguring what children a class accepts — which is a second framework change on top of D1, and no requirement asks for it.*

**D3 — The chain is author-driven, the check is framework-driven.** The framework invokes only the most-derived bond constructor (R28); the author calls upward, adapting arguments; the framework verifies every declared constructor on the chain was reached (R29). *Chosen over: the framework calling missing constructors itself — which makes argument adaptation impossible, and adaptation is the capability chaining exists for.*

**D4 — Biography, autobiography and catalogue are types, not `$Book` subclasses.** They are read off structure and enforced by constraints. `$Catalogue` is the one exception: it is a real cataloguing book with parts of its own. *Chosen over: a class per position — which the one-word law and [On Kinds](../../../../.claude/library/bookkeeping/15-on-kinds.md) both push back on, and which makes "subjectivity is computed" a claim the code does not make.*

**D5 — No unit assumes construction order.** Routing and the library are undesigned (Doug: *"we haven't gotten there yet"*). Anything needing to know where or when a book is built is out. *Chosen over: designing around the gap — which is taking a liberty instead of asking a question, 47's most expensive lesson.*

**D6 — Nothing is named that Doug has not named.** `$Type`, `formed`, `role`, `$Preface`, `$Foreword` are his. Where a unit needs a name he has not given, the unit **stops and reports the population**; it does not proceed on a proxy.

**D7 — Verified-no-change requirements produce no unit.** R21 (a sentence composes words; `$$Sentence` is not a sentence) and R22 (`book.ref` is the cover; the table of contents reaches the book through it) were checked against the code during the design session and already hold. They are recorded as confirmed behaviour and get **regression coverage**, not construction. *Chosen over: writing units that change nothing — ceremony that reads as progress.*

## Units

### The framework — `library/chemistry/package`

- **U1 — The bond-constructor chain.** All declared bond constructors on a class chain are reachable; the framework invokes the most-derived, the author calls upward, arguments may be adapted on the way. A subclass that declares none still binds through its ancestor's, unchanged. *Files: `src/abstraction/chemical.ts`. Depends on: nothing. Realizes: R27, R28, R30.*
- **U2 — Chain-completion enforcement.** Each declared constructor's having run is observable, and a chain that failed to reach an ancestor is refused with the unreached ancestor named. *Files: `src/abstraction/chemical.ts`. Depends on: U1. Realizes: R29.*
- **U3 — `formed`.** A hook the framework calls after the whole chain completes and after async construction settles; validation moves here from immediately-after-the-bond-constructor. *Files: `src/abstraction/chemical.ts`. Depends on: U1, U2. Realizes: R31, R32.*
- **U4 — A refusal that names its source.** A refusal carries which constraint refused and why, instead of one generic sentence, and reaches the existing exception rendering path unchanged. *Files: `src/abstraction/chemical.ts`. Depends on: U3. Realizes: R33.*
- **U5 — Framework documentation.** The branch library's account of binding and validation is brought to the built truth in the same act. *Files: `library/chemistry/.lib/composition/03-binding-constructor.md`, `04-check.md`, `library/chemistry/.lib/particle/02-lifecycle.md`. Depends on: U1–U4.*

### The type system — `library/.public/package`

- **U6 — `$Type`.** A type is writing, declared on the cover as parenthetical writing, read by the book when it binds, and it **references a part of a book** — the part from which its name comes. *Files: new under `src/`, plus `src/writing/Writing.tsx`, `src/book/Cover.tsx`, `src/book/Book.tsx`, `src/index.ts`. Depends on: U3. Realizes: R13, R16.*
- **U7 — Type composition.** A type may derive from several types; every applicable type must hold; changing what a type demands is done by subclassing the type. *Files: the `$Type` unit's files. Depends on: U6. Realizes: R14, R15.*
- **U8 — Resolution and scope.** A type name reaches its type through the part it references; the search is scoped to the subjects a book declares, climbing recursively to the library, and a catalogue's specification contributes constraints to the books it catalogues. *Files: `src/book/Subject.tsx`, `src/book/Book.tsx`, the `$Type` unit's files. Depends on: U6, U9, U12. Realizes: R6, R17, R18, R20.*

### The referential family — `library/.public/package`

- **U9 — `$Subject`.** A reference declared on the book, carried as parenthetical writing on the cover, reading to a cataloguing book. One canonical; further memberships may be declared. *Files: `src/book/Subject.tsx` (currently empty), `src/book/Cover.tsx`, `src/index.ts`. Depends on: U6. Realizes: R3, R6.*
- **U10 — `$Author`.** A reference to the canonical autobiography of a subject. The four-hop derivation is not the mechanism; the constraint is validated, not walked. *Files: `src/book/Author.tsx` (currently empty), `src/book/Cover.tsx`, `src/index.ts`. Depends on: U9. Realizes: R10.*
- **U11 — The cover carries both, and `valid()` requires them.** Every book reaches its author and subject through its cover, and a book missing either is refused. **This is the migration**: every book in the demos and the test suites gains both. *Files: `src/book/Book.tsx`, `src/book/Cover.tsx`, every book in `library/.public/app` and both test suites. Depends on: U9, U10, U4. Realizes: R5.*
- **U12 — `$Catalogue`.** The cataloguing book — a composition of references to books that is also a reference, satisfying the interface `$Catalogue$` already describes. It carries its subject's specification as a part until that outgrows the entry, and it may catalogue books that do not declare it. *Files: new under `src/book/` or `src/library/`, `src/reference/Catalogue.tsx`, `src/index.ts`. Depends on: U9. Realizes: R4, R7, R19.*
- **U13 — Biography and autobiography, as types.** A book about a subject in the subjective sense; a subject may have more than one. The autobiography is the one whose author reference and subject reference are the same reference — it **authors itself**, confirmed by validation. A subject representing a being must have a biography as its canonical. *Files: the `$Type` unit's files, `src/book/Subject.tsx`. Depends on: U7, U8, U10. Realizes: R9, R11.*
- **U14 — `$Library`, the self-cataloguing summit.** A book declares it catalogues itself by pointing its subject reference at its own cover; validation confirms exactly that, and confirms its canonical authors itself. *Files: `src/library/Literature.tsx`'s directory, `src/book/Subject.tsx`, the `$Type` unit's files, `src/index.ts`. Depends on: U12, U13. Realizes: R8, R9.*
- **U15 — The author chain terminates in a self-loop.** A chain that cycles without a fixed point — mutual biography — is refused. *Files: the validation added by U13, U14. Depends on: U14. Realizes: R12.*
- **U16 — `$Literature$`.** The interface naming a catalogue of references to books, and the subject reference implementing it through the catalogue book's table of contents. **The unit stops at its two open ends** (R34) and reports rather than inventing: the inverse lookup from a book to the part of a table of contents that catalogues it, and whether a reference kind spanning the levels of writing is needed. *Files: `src/library/Literature.tsx` (currently empty), `src/book/Subject.tsx`, `src/book/TableOfContents.tsx`, `src/index.ts`. Depends on: U9, U12. Realizes: R34.*

### The parts of books — `library/.public/package`

- **U17 — `$Preface` and `$Foreword`.** Chapter kinds, following `$Synopsis`'s pattern of extending `$Chapter` with no bond constructor of its own. Each unique; both before the chapters. What each *means* is design still owed and is raised, not invented. *Files: new under `src/book/`, `src/index.ts`. Depends on: U18. Realizes: R25.*
- **U18 — General chapter-kind validation.** `$Book` judges all its derived chapter kinds — uniqueness, and placement where placement matters — in place of today's four hardcoded checks. The book carries the meaning of its typed parts. *Files: `src/book/Book.tsx`. Depends on: U4. Realizes: R26.*

### Writing — `library/.public/package`

- **U19 — `role` on `$Writing`.** `use | mention`, `use` the default. Mention is the marked case. *Files: `src/writing/Writing.tsx`, `src/index.ts`. Depends on: nothing. Realizes: R23.*
- **U20 — Syntax as a typed word.** The parse admits marks it currently discards; a mark's copy stays faithful to the sentence and is a **use**; its type carries the name. Word validity widens to admit it. *Files: `src/writing/Word.tsx`, `src/writing/Sentence.tsx`. Depends on: U6, U19. Realizes: R24.*

### The demo — `library/.public/app`

- **U21 — The shelf is the library of the demo.** The shelf page is the library; its books are the demos, each keeping its own aesthetic world. *Files: `library/.public/app`. Depends on: U14. Realizes: F3.*
- **U22 — The alternate view, switchable.** A textual representation of the library itself beside the shelf, showing what the shelf cannot: subjects, types, and the auto-categorical loop **followed on screen**, arriving home. Types shown as **form** — a book wearing a type, and the type changing what it must be. A **refusal read on the page**, naming which type refused. *Files: `library/.public/app`. Depends on: U21, U8, U4. Realizes: R18, R33, AE2, AE3.*
- **U23 — The demos' subject catalogue.** Each demo catalogued with its use case, its aesthetic identity and what it proves; the shelf's untitled spines become its entries. *Files: `library/.public/app`. Depends on: U12, U21.*

### Records

- **U24 — The branch library moves with the code.** The [register](../the-semantics-of-books/08-the-symbolizing-dyad-and-the-register.md) is brought to the built truth, and the derivation chapters this sprint changed are edited by their authors rather than appended to. *Files: `library/.public/.lib/the-semantics-of-books/`, this chapter. Depends on: everything.*

## Test scenarios

*Each names input, action and expected outcome. Where a scenario covers an acceptance example, it says which.*

**U1, U2 — the chain.** A three-class chain where each declares a bond constructor and each calls upward: all three run, in order, and children reach the most-derived signature. · A subclass declaring **no** constructor: binds through its ancestor's exactly as today — the ceremonial ban survives (regression against `tests/react/synthesis-bond-ctor.test.tsx`, `tests/regression/bond-behavior.test.tsx`). · A subclass declaring one and **not** calling upward: refused, naming the ancestor never reached — **AE6**. · A subclass adapting arguments on the way up: the ancestor receives the adapted children, not the authored ones.

**U3 — `formed`.** A chemical whose chain completes: `formed` runs once, after the last constructor. · An **async** constructor in the chain: `formed` runs only after construction settles (regression against `tests/abstraction/async-construction.test.ts`). · A chemical defining no `formed`: unchanged behaviour. · **Templates are not judged** — the existing exemption holds.

**U4 — the refusal.** A chemical failing one constraint: the refusal names that constraint and its reason. · Failing several: all are reported, not just the first. · The refusal reaches the existing exception rendering path and is readable on the page (regression against `tests/abstraction/error.test.tsx`, `tests/react/validation.test.tsx`).

**U6, U7 — `$Type`.** A cover declaring one type: the book carries it, and the declaration does not print in the prose. · A cover declaring several: all hold, and the book is valid only if every one does. · A type deriving from two types: both inherited constraints hold. · A type whose constraint the book breaks: refused, naming the type — **AE2**.

**U8 — resolution and scope.** A type name declared on a book whose subject specifies it: resolves. · The same name where **no declared subject** specifies it: refused, unresolved. · A name specified only by a subject that catalogues the book **without the book declaring it**: does **not** resolve (R7). · A book in one subject wearing a type from that subject's specification validates; the same book without the type does not — **AE5**.

**U9, U10, U11 — subject, author, cover.** A book whose cover declares both: binds. · Missing either: refused, saying which — **AE1**. · A book declaring a canonical subject and one further membership: both reachable, one canonical. · Every existing book in both suites and the demos, migrated: full suites green.

**U12 — `$Catalogue`.** A catalogue of three books: its parts are references, following them arrives at the books, and it reads back to itself as a reference. · A catalogue holding its subject's specification as a part; and the same specification as a separate book it catalogues — both valid (R19).

**U16 — `$Literature$`.** A subject whose catalogue holds three books: asked for its literature, it answers a catalogue of three book references, and following them arrives at the books. · A catalogue with no books: answers an empty catalogue, not an absence. · The inverse lookup — given a book, find the part of the table of contents that catalogues it — is **not implemented on a guess**; the unit stops and reports (R34).

**U13, U14, U15 — the summit.** A subject whose canonical reads to a biography: the subject is subjective. · A book whose author reference and subject reference are the same reference: it authors itself. · A book whose subject reference points at its own cover: it catalogues itself; following arrives home; exactly one such book answers valid — **AE3**. · Two books in mutual biography: **refused** — **AE4**.

**U17, U18 — parts of books.** A preface and a foreword before the chapters: valid. Two prefaces: refused. A preface after chapter one: refused — **AE7**. · Today's four checks (cover at zero, no second cover, a synopsis, at most one table of contents) still hold under the general rule.

**U19, U20 — writing.** Writing with no stated role: `use`. · Writing marked mention: reads as mention. · A sentence containing a period: yields a word for the mark, typed, marked **use**, and the sentence's flattened prose is unchanged by its presence — **AE8**. · Regression: `$Sentence` still composes its words and `$$Sentence` still catalogues references to them (**D7**, R21); `book.ref` is still the cover and the table of contents still reaches the book through it (**D7**, R22).

**U21, U22, U23 — the demo.** Driven and **read**: the loop followed on screen arrives home; a book wearing a type shows the type changing what it must be; a refusal renders on the page rather than in a console. Per the standing law: green → driven → **seen**, and a demo's real test is being read.

## Origin tracing

| requirement | lands in |
|---|---|
| R1, R2 | **Decisions and review discipline** — framing and vocabulary laws, not buildable units. Held by D6 and by every unit's naming behaviour. |
| R3, R6 | U9, U8 |
| R4, R7, R19 | U12 |
| R5 | U11 |
| R8, R9 | U14, U13 |
| R10 | U10 |
| R11 | U13 |
| R12 | U15 |
| R13, R16 | U6 |
| R14, R15 | U7 |
| R16a, R16b | **Deferred by Doug** with the feasibility case recorded; built in [Sprint 50](00-planning.md). |
| R17, R18, R20 | U8, U22 |
| R21, R22 | **D7** — verified already true; regression coverage under U19/U20's scenarios, no unit. |
| R23 | U19 |
| R24 | U20 |
| R25 | U17 |
| R26 | U18 |
| R27, R28, R30 | U1 |
| R29 | U2 |
| R31, R32 | U3 |
| R33 | U4 |
| R34 | U16 |
| A1–A4 | F1–F5, and through them the units above. |
| F1 | U9, U10, U11, U6 |
| F2 | U8 |
| F3 | U14, U21 |
| F4 | U4, U22 |
| F5 | U8, U12 |
| AE1–AE8 | Named in the scenarios above. |

## Order

1. **U1 → U2 → U3 → U4 → U5** — the framework, in the other package, complete before anything depends on it.
2. **U19** — independent of everything; can run alongside the framework work.
3. **U6 → U7** — `$Type` and its composition.
4. **U9 → U10 → U12 → U16** — subject, author, the cataloguing book, and the literature it answers.
5. **U8** — resolution, which needs both the type and the subject.
6. **U11** — the migration, once the cover knows what it carries.
7. **U18 → U17** — the general rule before the two kinds that use it.
8. **U13 → U14 → U15** — the summit, and **drive the loop the day it exists** rather than after content piles on it.
9. **U20** — syntax, which needs the type system.
10. **U21 → U22 → U23** — the demo.
11. **U24** — the records, in the same act as the work, not after it.

## Self-check

*Where this plan is thin, stated rather than hidden.*

- **`$Literature` was the plan's one gap, and it is closed.** The charge named it, the design session never reached it, and the self-check surfaced it rather than letting it pass. Doug ruled it during the plan (R34): an **interface**, `$Literature$`, a catalogue of references to books, implemented by the subject reference through the table of contents. **U16 is filled** — no gap in the identifiers after all. *This is the self-check doing the job it exists for: it found the one thing that would have been discovered mid-work.*
- **U16 carries two open ends and must stop at them.** The inverse lookup — book to the part of a table of contents that catalogues it — has no move in the model today, and whether a reference kind spanning the levels of writing is needed is unanswered. **The unit reports; it does not invent.** *Raise, don't take.*
- **U17's meaning is owed.** What a preface *is* versus a foreword is design Doug flagged as still owed. The unit builds the parts and the validation; the meaning gets raised, not invented.
- **U8 is the largest single unit** and the one most likely to want splitting once the code is open. Resolution and catalogue-supplied constraints are one idea in the requirements and may be two in practice. A split keeps U8 on resolution and takes the next unused identifier.
- **The migration in U11 is unmeasured.** Every book in two test suites and the demo app gains a subject and an author. The count is not known until the work starts, and it should be counted first rather than discovered.

## Risks, and what mitigates each

1. **Size.** The referential family, the summit, a type system and a framework change — four sprints' worth by 47's measure. Doug ruled the full family knowingly. *Mitigation: the [order](#order) front-loads the framework so nothing is built twice, and U8 and U11 are pre-identified as the two most likely to grow. **The honest signal to watch:** if U1–U5 have not closed before the referential family starts, the sprint is running long and Doug should hear it then, not at the retro.*
2. **The auto-categorical loop** (U14) is a genuine cycle in code, not only in theory — rendering and reference-resolution both run through a book that points at itself. *Mitigation: order step 8 drives the loop **the day it exists**, before content piles on it. AE3 is its test and it is written already.*
3. **The `valid()` migration** (U11) touches every book in two suites and the demo app. It is the change most likely to be discovered late. *Mitigation: **count it before starting it.** The count is unknown today and that is stated in the self-check rather than assumed away.*
4. **Moving `assertValid` into `formed`** (U3) changes behaviour for **730 tests across two packages** — 622 chemistry, 108 lib. *Mitigation: U3's scenarios are written as regressions against the named existing tests, so the change is measured against them rather than discovered through them.*
5. **Class inflation.** *Mitigation: D4 makes biography, autobiography and the summit **types rather than classes**, so the sprint adds far fewer classes than the derivation names. D6 stops any unit that needs a name Doug has not given.*
6. **Code in books, running in two places** (R16a, R16b) is **out of this sprint's build** by Doug's call — feasibility established, construction deferred to [Sprint 50](00-planning.md) with parts of a demo committed to it then. *Mitigation: the one unproven step is bare-Node materialization; a single probe settles it, and 50 should not start without one.*
7. **`$Literature$`'s two open ends** (R34, U16) — the inverse lookup from a book to its part in a table of contents, and whether a reference kind spanning the levels of writing is needed. *Mitigation: named in the requirement and built into the unit's own scenarios as a stopping point. U16 reports rather than inventing, and neither question is designed around.*

## Demo

*A demo is part of this and every sprint, and it is how the sprint shows it understood itself.*

**There is no library — there is the library of the demo** (Doug, correcting me). The shelf page **is** the library. Its books are the demos, each with its own book and its own aesthetic world, and the demo law stands: **impressive, aesthetically unique, never a shared template look**, carrying a meaningful use case.

**THE DEMO, specified by Doug (2026-08-06) — this is the brief, not a menu.**

1. **The bookshelf view of the demo app becomes a view of the library.** The shelf stops being a page that lists demos and *is* the library, seen one way.
2. **The library catalogue is NOT on the shelf** — *"in the way that the table of contents isn't an option in the table of contents."* **The precedent is already in code**: [`$TableOfContents.parts()`](../../package/src/book/TableOfContents.tsx) filters out itself and the cover. A catalogue omitting itself is shipped behaviour, not a special case.
3. **A cataloguing book is made for the existing two demos.** Real entries, real books, not placeholders.
4. **A second way to view the bookshelf**, where you **interact with the library catalogue** — a writing-based view of the library, against the shelf's visual one.
5. **"Please do a good job designing the library catalogue"** — the catalogue's own design is part of the brief, not incidental furniture.
6. **"A beautiful and unique aesthetic experience when swapping"** between the shelf and the writing-based view. The **transition itself is the designed thing**, not a toggle.

Two views of one library — spines and writing — is the [perspectives](../../../chemistry/.lib/particle/08-perspectives.md) design doing exactly what it was built for. **Phillip and Gabby lead**; the *extremely well-designed* filter runs here before Doug sees it.

**What it must show.** The auto-categorical loop **followed on screen** — the library's subject reference pointing at its own cover, followed, arriving home (R8, AE3). Types as **form** — the same book wearing a type, and the type changing what it must be (R18). And a **refusal read on the page** rather than in a console, naming which type refused (R33, AE2).

**Folded in from Doug's standing note, now due:** each demo catalogued with its use case, its aesthetic identity and what it proves. The subject machinery demonstrating itself on our own demos is the self-referential proof, and the shelf's untitled placeholder spines are its waiting slots.

## The literature of this sprint

1. [The Book and Subjectivity](../the-semantics-of-books/04-the-book-and-subjectivity.md) — subject before author; the two subjects meeting.
2. [The Subjective Subject and the Library](../the-semantics-of-books/07-the-subjective-subject-and-the-library.md) — the summit: biography, autobiography, auto-categorical, said only in books.
3. [Closure Under Books](../the-semantics-of-books/10-closure-under-books.md) — closure as a guarantee under reaching; the library closed, the code not (R1).
4. [The Author's Fixed Point](../the-semantics-of-books/13-the-authors-fixed-point.md) — author as an endomorphism; the two-cycle edge case (R12).
5. [Composition and Collection](../the-semantics-of-books/09-composition-and-collection.md) — the two container operations; the overflow law (R19).
6. [On Kinds](../../../../.claude/library/bookkeeping/15-on-kinds.md) — the naming discipline: population, two filters, never argue a candidate into place.
7. [On Subjects](../../../../.claude/library/bookkeeping/07-on-subjects.md) and [On Libraries](../../../../.claude/library/bookkeeping/08-on-libraries.md) — subject and library catalogues as we already live them.
8. [The Binding Constructor](../../../chemistry/.lib/composition/03-binding-constructor.md) and [Check](../../../chemistry/.lib/composition/04-check.md) — what R27–R33 change.
9. [Sprint 47 — The Catalogue](05-sprint-47--the-catalogue.md) — every standing law this sprint must not break.
10. [Structural Patterns](../../../chemistry/.lib/authorship/02-structural-patterns.md) — the coding law for every class this sprint adds.

## A fifth step — PROPOSAL, tried here first

*Ruled by Doug 2026-08-06. Recorded in this chapter and **not** in [Workflows](../../../../.claude/library/..teamsmanship/19-workflows.md), because [a workflow earns a section there only after it has run twice with its steps unchanged](../../../../.claude/library/..teamsmanship/19-workflows.md#adding-a-workflow). Until then it is a proposal, and it belongs to the sprint trying it.*

**Why it is a step and not a subsection.** Of the four gates, **only brainstorm's is human** — *"requirements approved by Doug"*. Plan's, work's and compound's are all **self-assessed by the implementer**. The workflow has a person at the front door and nobody at the back, which is exactly how this session reported "630/630" with a red lib and no demo. And ordering is load-bearing: **compound distributes lessons**, so a review must precede it or wrong work compounds into the library. Libby's deciding argument: every step produces one artifact, and **none of the four produces an artifact made for Doug to judge**.

**What it carries.**
1. **The requirement walk** — how many of the 34 are satisfied, how many are not, stated as a number. *Today: **four** — R27, R28, R30 by U1, R29 by U2.*
2. **The epiphenomenal decisions** — judgements made in flight that nobody ruled, surfaced so the decision procedure itself is auditable. *This session had four; Doug saw three of them only because he asked.*
3. **The demo**, with our own *extremely well-designed* filter run on it **before** it reaches Doug — an internal gate ahead of the external one.
4. **Questions cheap to answer** — short, concrete, one decision each. If reviewing costs an hour of reading it will not happen, and the step dies.

**What it costs us to say honestly:** we adopted [Compound Engineering's](https://github.com/EveryInc/compound-engineering-plugin/tree/6a2a0f9940ab0b3577ce26226ee393390470e412) loop *as-is* for the trial. Their loop is **four** steps. **The fifth is ours**, and the record says so rather than blurring it into theirs.

**And work gets stricter in the same act.** A demo is a **stop condition**, not a closing flourish — no unit reports done without one. That law already existed (green → driven → **seen**; the demo was already in this chapter) and I broke it. The augmentation is not a new idea; it is the existing one made refusable.

## The sprint closes — 2026-08-06

**Doug's call:** *"How about we call this the end of the sprint, and we move forward to making the different sprints the thing that is accomplished here."* **The split is the deliverable.** [Chapter zero](00-planning.md#the-split--subjects-and-the-library-as-sprints-with-checkable-ends-doug-2026-08-06) carries four sprints — **A The Card, B The Subject, C The Library, D The Compilation** — each with a **code check** and a **demo contribution**, and the rule that a sprint with no demo contribution does not close.

### What this sprint actually accomplished

**In code, and verified.** The **bond-constructor chain**: U1 turned out to need no code and became a specification; **U2 is built** — every declared constructor on a chain must be reached, refused by name when it is not, observed on the prototype so `super.` counts, keyed per instance so nested binds cannot contaminate. **8 tests.** It fired on four real violations, and migrating them **deleted duplicated code** — `$Footer`'s constructor was `$Section`'s verbatim and is gone. Chemistry **630/630** (from 622), three packages **tsc 0**.

**In design — which was the charge, and arrived only at the review.** R38–R64: references that check types rather than a class hierarchy; the card as *a book present without the book*; `$LibraryCard` replacing `$$Book`; **a library is the universe** and `$Library` validation is that every book agrees; **no walk** — the library is computed and validation is in place; **canonicality is contextual**; and the **second proved double entendre**, standing on the first.

**In process.** [`/ce-review`](../../../../.claude/library/our-skillset/33-ce-review.md) — a fifth step, written, compiled, corrected by its own first run, and the only step of the loop that is ours.

### What it did not accomplish, stated plainly

**4 of 64 requirements built**, and all four are the framework floor. **No `$Type`, `$Subject`, `$Author`, `$Library` or `$Catalogue`** — those files are still empty. The **demo is a regression check**, not a demonstration of this sprint. The lib carries **107/108** with its cause written into chapter zero. **Nobody has read the demo.**

### The two failures filed

[The link I built three times](../solutions/03-the-link-i-built-three-times.md) — using the reviewer as the search process instead of opening the prior art. [The sprint that planned what it had not designed](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md) — origin tracing runs one way only, so a unit with no mechanism looked buildable; and **success was never defined, so it could not be shown.**

## Where things stand

*Written 2026-08-06 at the end of the first work session. The working copy is the truth; this orients, it does not replace reading it.*

**Verified numbers, from fresh runs in this session.** Chemistry **628/628** (58 files), `tsc` **0** — baseline was 622/622 before any change. Lib **107/108** (9 files), **one failure**, described below. Chemistry `dist` **rebuilt** — this matters: the lib resolves `@dna-platform/chemistry` from `dist/chemistry.cjs`, not from source, so a lib run against a stale `dist` proves nothing.

**U1 — DONE, and it needed no code.** The chain was already callable: `this.$Ancestor(...)` and `super.$Ancestor(...)` both work, a subclass declaring none still binds through its ancestor's, and arguments can be adapted on the way up. Four of the five scenarios passed against unmodified source. U1 is now a **specification** rather than a change — `tests/react/bond-ctor-chain.test.tsx`, 6 tests.

**U2 — DONE.** `$Synthesis` discovers every declaring class on the chain (own property on each class's prototype named after the class), and refuses when the most-derived fails to reach one. The observation sits on the **prototype**, not the instance, because `super.$Ancestor()` resolves there and never sees an instance property — that hole was found and closed, and the `super` form has its own test. The record is keyed per instance in a `WeakMap` so a nested bind cannot contaminate an outer one. Zero cost where a class has fewer than two declared constructors, which is 50 of the 56.

**The audit that made this safe — and it was wrong twice before it was right.** `scratchpad/chain-audit.mjs`. Final answer: **56 classes declare a bond constructor; 6 have a declaring ancestor; all 6 failed to call up.** The first run keyed class names globally and let chemistry's test specimens overwrite the lib's real `$Book`/`$Cover`/`$Chapter`; the second missed `super.` calls and wrongly accused `$TextbookChapter`. **Do not trust a count from that script without re-reading how it scopes.**

**Migrated, and the duplication died with them.** `$Textbook` (chemistry specimen) collapsed to one line. `$Section` now calls `super.$Writing(text)` instead of copying its body. **`$Footer` deleted its bond constructor entirely** — it was `$Section`'s verbatim, and the chain resolves. `$Cover` and `$TableOfContents` call `super.$Document(...)`.

**THE ONE FAILURE, diagnosed in two moves — and both halves are findings.**

*First diagnosis, mine, and only half right:* `$Document` hardcodes its refusal text, so once `$Cover` chained the ancestor threw first and `$Cover`'s title check was unreachable.

*Doug's correction, which was the better diagnosis:* **the problem is WHERE validation runs.** `$Document` threw **mid-chain** — an ancestor judging an object that is not finished being built, while `$Cover` still had work to do. That is exactly what `formed` (U3) exists to prevent, and the framework **already** runs `assertValid` after the bond constructor, so `$Document`'s in-body throw was redundant. Removing it **fixed the cover test.** *Verified by deleting one line.*

*What the fix then exposed, which is R33 standing on its own feet:* the failure moved to *"a chapter without a summary is rejected at binding"*, which expects `/summary/` and gets `assertValid`'s generic **"$Chapter is not valid after its bond constructor."** **Two different tests each assert WHY something was refused, and the framework can only say THAT it was.** R33 is not decoration — the suite already demands it. **Not hacked around**: it needs a member Doug has not named, and the naming law stops there.

**Wrong turns already taken, so nobody repeats them.** Wrapping the bond constructor on the **instance** looks right and silently misses every `super.` call. Running the lib suite without rebuilding chemistry's `dist` gives a false green. And an unexplained pass is as suspicious as an unexplained failure — both audit errors surfaced that way.

**Doug's ruling on the refusal (2026-08-06):** **wait for `formed`** — the shape falls out of where validation ends up running, and the lib stays at 107/108 until it does. Direction, not today's build: *"we will want something similar to `$check` if possible"*, and the tension is named — **reporting comprehensively versus stopping the code when it must stop.** Report everything and the code runs on past a problem; stop at the first and you learn one thing. His proposed way through: **collect the exception and display it with the validation errors**, so a reader can see whether they are related.

**THE THREE-PART SHAPE, proven (Doug's question: "can a type do its configuration, then run its parent bond constructor, and then continue on?").** **Yes** — `tests/react/bond-ctor-chain.test.tsx`, 8 tests. A subclass may **configure**, **call up**, and **continue on what the parent did**, in that order, verified by recorded sequence. And the continuing part **states its own refusal in its own words** — which is how `$Cover` keeps "A cover requires a title" without any new member. **That is where a class owns its reason**; the only gap left is when the framework's generic `assertValid` fires instead of the class's own check.

**U3's prerequisite, read and it changed the unit.** **`$form` already exists** in `$Chemistry` — a lifecycle hook that runs **once after mount**, guarded by `$formRan$` so it never repeats, with `$formPromise$` carrying async completion (`particle.ts`, `tests/react/form-lifecycle.test.tsx`). **It is not what U3 needs.** `formed` must run **after the bond-constructor chain completes, on every bind** — a different moment and a different frequency. Reusing `$form` would be wrong.

**RAISED, NOT RESOLVED — a naming collision on the framework's visible semantics.** `$form` (existing, mount-time, prop-shaped) and `formed` (Doug's word for the after-the-chain hook) are one letter apart. By [the grammar](../../../chemistry/.lib/authorship/01-the-grammar.md), a no-`$` method is author-facing — `view`, `valid`, `next` — so `formed()` fits that family and `$form` stays where it is. **Doug's word before anything is written.**

**The first `/ce-review` round ran, and it corrected the step itself.** I asked Doug to *rule on doneness* — which inverts the responsibility. He fixed it: **the implementer owns being done**, review is where he **weighs in**, and what a round produces is **new requirements** that loop back to work (R35, R36). The skill was rewritten and recompiled the same act; the cover moved with it. **The round's own product is R35 and R36** — which is the step working, not a detour.

**The demo, honestly.** Built and serving at `/books`: The Shelf as a real book, two faces, the names carrying the references. **App tsc 0, every module serves. Nobody has looked at it yet** — the round turned into a correction of the step before it reached the page.

**Next.** U3, once the `$form`/`formed` collision is ruled — and R35 swept through the model, not only the demo. **Read `symbols.ts` first**: `$formed$`, `$formRan$`, `$formPromise$` and `tests/react/form-lifecycle.test.tsx` already exist, so some of `formed` may already be built. Do not write U3 without reading them.

## The team

**Cathy** (the model — subject, author, `$Type`), **Arthur** (the ontology, this chapter, and the framework scope), **Libby at the center** (subject catalogues are her lived subject; the reference manual), **Queenie** (validation as specification, the refusal, and the loop's tests), **Phillip** and **Gabby** (the demo and the demos' own catalogue). Bench: Adam, David, Nancy; Claude on call.

*(Requirements written 2026-08-06 from the design session. The plan step enriches this chapter in place; the retro completes it.)*
