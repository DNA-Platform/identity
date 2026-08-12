# The Plan — Chapter Zero

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*The planning scratchpad per [the convention](../../../../.claude/library/library-tree/03-sprints.md#the-planning-scratchpad--chapter-zero): overwritten as sprints absorb it — when a sprint becomes real, its section leaves this chapter for its own. Revision 2026-07-30, carrying Doug's notes: the cover as canonical chapter, chapters DI-style, book-as-folder, and the semantics of books governing our vocabulary.*

## The goal

IXP keeps very, very careful track of **authorship and lineage of knowledge**. Doug's AI conversations get mapped into a showable form; Doug gets a personal library referenced from here; `@dna-platform/lib` stays a consumable package so references work **across repos**. Every IXP project gets documented in $Chemistry, and those classes are copied into the `.public` app by a build script that either produces the whole truth or fails. Who deserves authorship of a human-AI dialogue is not a footnote — it is what the repository explores.

*Sprint 46 — The Book is **real** and left this scratchpad: see [its chapter](03-sprint-46--the-book.md). Its remaining notes ride there.*

*Sprint 47 — The Catalogue is **CLOSED** (2026-08-03): see [its chapter](05-sprint-47--the-catalogue.md). The reference system complete and the document apparatus built with it — `src/document/` (`$Document` concrete with `$Chapter` its book-bound kind; the triads `$Footer`/`$Footnote`/`$Denote` and `$Bibliography`/`$Citation`/`$Cite`; the implicit parenthetical `$Legend` of `$Key`s), the manifold running on it, the whole shelf reading in the book of code. Its retro and the day's rulings ride at the chapter's end. Records synced: repo `main` at `fec9f73`, identity `dna-platform` at `6acccdb` with all seven teammates' tending.*

**What 47 settled that the rest of the plan now assumes:** **no addresses in the model** — a string address serializes a reference and the abstraction wasn't made to serialize, so references pass as references (`$Bookmark.$for` is a held `$Reference`, declared present: a bookmark means nothing without having pointed). **No reference equality** — "equality must be mediated by the being using the references"; `equals`, `same()`, and the `catalogue` member on referents are gone. `$Referent` is an **interface** carrying `valid()`, so a reference is a referent; `read(): T` **throws** on a false reference and `valid()` is the no-throw guard; `single(match)` returned to the composition; `parts` is the reading (*part* is the true singular). **Types express expectations** — after a bond, what must exist is typed as existing (now law in [Structural Patterns](../../../chemistry/.lib/authorship/02-structural-patterns.md)). And in chemistry itself: **an element in a block reaches outside the block for its parent** — the chemical whose bond interprets it.

*Sprint 48 — Subjects and the Library is **real** and left this scratchpad: see [its chapter](06-sprint-48--subjects-and-the-library.md) — the charge (what a subject and an author mean, representationally and referentially), the verified one-word law, the six questions to design first, the catalogue naming collision, the risks, and the Front Page + demos-catalogue demo ride there. The environment ruling rides with it.*

**Estimate, revised (2026-08-03).** The original read — *three sprints, 46–48, compressible to two* — did not survive contact: 46 and 47 each ran long and 47 became a forever sprint, absorbing the whole reference layer plus the document apparatus. The correction cycle the estimate budgeted for arrived several times over, and the lesson is filed rather than re-estimated: **the cost is in the design conversation, not the code** — every long stretch of 47 was a liberty taken instead of a question asked. 48 plans for design sessions as first-class work, gated on Doug's word before any class is written.

## Sprint 48.5 — References *(inserted the decimal way — Doug, 2026-07-30; the core LANDED inside Sprint 46, the rest inside 47)*

The pondering happened early and the core shipped inside [Sprint 46](03-sprint-46--the-book.md), under Doug's sentence law: a reference is a sentence that stands for something; the kinds (`$Link`, `$Bookmark`, `$Highlight`); the grain rule. **Sprint 47 closed nearly all of what remained.** The ledger:

- **Landed in 47:** **`$Citation`, built with Doug** — no Markdown; a `$Bibliography` (a kind of `$Footer`, coexisting with one and standing alone) whose entries expose `for`; `$Footnote` the overlapping structure; the inline declarer written as a command (*Cite euler*, or `<Cite for="euler"/>`) wearing a face any view may reformat; the resolve is the keyed climb — mark → document → filing section → legend. Numbers **derive from use**, LaTeX-true: footers in occurrence order, bibliographies alphabetized and 1-numbered. Also landed: word-grain bookmark landing as the rounding law (the page opens to the paragraph that holds the word; the model reads the word); reference kinds with **their own views** (`$RibbonMark`/`$Return`, subclass-plus-`view()`, zero framework change); and the **driftwood question closed by deletion** — the `catalogue` member went with reference equality.
- **To Sprint 48 (subjects):** grounding — *a book does not shelve itself; shelving is a subject's viewing* — the `/books/:name` route convention, names-as-ids (titles as slugs), and contents rows going fully live. Joined by 47's ruling: **the environment of a book is a subject** — `$Link` and environment referents are 48's work.
- **Still open, schedulable in any sprint:** **in-prose references *through the reader*** — the one place strings survive: chapter prose still writes `[text](#3.2)` and the openings typeset `copy`, so a reference written inside a paragraph flattens; the openings must render writing instances, or writing refers **by key through a legend** the way the document apparatus now does (Doug's shape, one level up — a design session, not a pick). Plus: the imprint page (metadata as cover parentheticals; publisher → team); the frame-always-anchors vs degrade-to-text call (Doug's eye).
- **Shelved by Doug (2026-08-03):** the bibliography's *pointing-out* form — "we will one day want some other form of reference possibly pointing out; the bib is the document-level aspect." With it: what a citation points at beyond its key, uncited entries' numbering, the cite's face, one-filing-section-per-document.

## How this codebase will work, and what would show it

*Written 2026-08-06 as part of the brainstorm, from the session's rulings. Twenty paragraphs, because the design had been agreed in fragments and never said whole.*

Everything in this system is a book. Not *represented by* a book, not *documented in* a book — a book is the only kind of thing there is, and the library is the universe of them. There is exactly one library, and it contains everything that exists at some level. This is not modesty about scope; it is what makes the rest coherent, because a catalogue can only be a catalogue *of* something, and the something has to be single. Another library, if there is one, is another perspective — possibly outside this framework entirely — and never a library nested inside this one.

A book today is a composition of chapters, and it already knows two things about itself that matter enormously for what follows. Its cover is a reference to it: `$Cover implements $Reference$<$Book>`, so the face of a book *is* the way you point at it. And its table of contents derives its rows from the book's own chapters rather than listing them by hand — which is why the table of contents cannot drift from the book, and why a hand-maintained catalogue always does. Those two facts, already shipped, are the seeds of everything below.

The turn this design makes is to move work **out of classes and into references**. There was a version of this sprint in which `$Catalogue`, `$Biography`, `$Autobiography`, `$Subject`, `$Author` and `$Library` were all classes in a hierarchy, and it collapsed under its own weight — six new names, a one-word law straining, and subjectivity asserted by declaration rather than computed. What replaced it is smaller and stronger: `$Subject`, `$Author` and `$Library` are **book references that validate**, and cataloguing-ness is a **type** those references check for. The hierarchy disappears and the checking is what remains.

So a subject is a reference declared on a book, carried as parenthetical writing on its cover, that reads to another book — and is invalid unless that book wears the catalogue type. This is the whole mechanism of belonging. A book does not announce its subject to a registry; it points, and the pointing is only valid if what it points at is the kind of thing that catalogues. The failed validation is the semantics: a subject that could point anywhere would mean nothing.

The obvious way to check that is to follow the reference and look, and that turns out to be wrong. Reading another book to validate a reference means every book must be loaded before anything can be judged, which is impractical at build and worse at runtime. It also gets the model backwards, because a real catalogue is exactly the thing you consult *instead of* handling the books. The correction is that there is no walk at all: a book's library is a **computed property** of its subject, and validation happens **in place**.

What makes in-place validation possible is the card. A card is a book present without the book — the information-science term is a *surrogate*, the stand-in you consult so the item need not be handled. It carries enough metadata to answer the questions a reference needs answered, so a subject can be checked without opening what it points at. Cards are why the design stops needing traversal, and everything that felt like it required a graph walk turns out to require only a card in hand.

The shape of a card is a compilation, defined by the `.public` build, and its first rule is that **all property names remain identical** to the book's. That is what keeps it one-to-one and safe from drifting out of step. Framework properties from `$Referent` up are included. Then, per property: a basic type is left as it is; a property whose value is a book becomes typed to that book's reference; a chapter becomes an entry in an array on the card; and any other reference — including the rare chapter reference into another book — collapses to a book reference plus names, carried as strings. Section names are not on the card, so those references extend the card rather than reaching through it.

That mapping cannot be a closed shape, because books have subtypes and subtypes have derived information worth cataloguing. So the card is **strongly typed where it can be** — the common structure, the mapping above — and **informally extended in code** for the rest, with derived information on subtypes dynamically reachable. A card class that had to know every property in advance would be a card for one kind of book, which is not a catalogue.

The cards live in a card catalogue: `$CardCatalogue`, satisfying `$Catalogue$<$Book>` — a composition of references to books that is itself a reference to those books. That interface was built in Sprint 47 for the table of contents and it turns out to describe the catalogue at book level without modification, which is the strongest evidence we have that the catalogue equation was carved correctly. There is one of these, held as `libraryCatalogue`, and it is available wherever a page runs.

`$Library` is then a computed property rather than a stored one. A book does not carry its library; its library falls out of its subject. And the validation is not that each book reaches *a* library but that **every book reaches the same one**. That agreement is the whole content of `$Library` validation, and it is what makes a card catalogue possible at all: if two books in one catalogue computed different libraries, the catalogue would be a catalogue of nothing.

It is worth dwelling on why agreement, rather than termination, is the right law. An earlier version of this design had each book climbing its canonical subjects until the climb stopped, with a guarantee that it stopped at a self-cataloguing book and never in a longer cycle. That guarantee was necessary because a walk can wander. With no walk, what remains is a property of the aggregate — the assignments of subject, author and canonical are gathered, and either they agree or the catalogue is incoherent. The law got simpler when the mechanism got smaller.

Authorship works the same way and lands somewhere unexpected. `$Author` is a book reference to a canonical autobiography, and the autobiography is recognised by a structural fact rather than a claim: **it authors itself**. Its author link points at itself. There is no field saying "this is an autobiography"; there is a loop that either closes or does not. This is the same discipline the whole level runs under — nothing is said about people, only about books, and authorship is something the structure yields rather than something imported into it.

A card whose book is such an autobiography is a **library card**, and *having* one is not a possession but a structural fact: there exists a library, holding a card, whose book is an autobiography whose author link is that card. Nobody is issued anything. And because the check is entirely on the card — does its author link point at itself — it can be answered without reaching the library the card came from. That is what makes it work abroad. You cannot carry a book; you can carry a card.

That the same object is both a catalogue surrogate and a credential is not a coincidence we are enjoying. It is the second **proved double entendre** in this framework, and it stands on the first. *Subject* was the first: the topic a book is about, and the one who is about things, coinciding by force of the ordering rather than by luck of the English. The library card repeats the device one level up — but more than repeats it, it **carries** it. The subject pun makes a self; the card pun makes that self portable. Where a construct is carved correctly, the everyday word's two senses turn out to be one structure seen from two sides.

Two smaller principles fall out and generalise past this sprint. **Canonicality is contextual**: canonical is a designation made *by* a context, never a property *of* a thing. The Bible is canonical in a church and not in a mathematics class; nothing about the book differs, only which body is recognising. And **`$$` is a placeholder for a name the world never gave**: below the book, reference forms are unnamed, so notation stands in — `$$Sentence`, `$$Word`. At book level the world named several, so the role has real fillers. A book's reference form is the table of contents when you are reading it, and the library card when you are at the catalogue.

Types are what the references check, and a type is a **reference to a part of a book** — a chapter or section — from which its name comes. There is no registry and no lookup table; the reference system already knows how to point at a part. Because references check types, the library is **forced to define types**: a library that defines none can validate nothing. That is the point of the arrangement rather than a consequence of it — it makes the type system load-bearing by necessity instead of by argument.

The build is where cards come from. The `.public` build parses the code — plausibly with the TypeScript compiler itself, since what a card describes is what has been written down — and emits a card per book, following the mapping above. But that build is not the first thing to be written. **The cards are made by hand first, in the demo code**, and what has to be written by hand is precisely the list of what the build must generate. The demo becomes the specification for the compiler, discovered by doing rather than guessed in advance.

Which brings us to the demo, and it is small. The demo's library is its own — not this repository's — and it holds four books. Two are already there: the algebra book and the manifold. The third is the shelf's own catalogue. The fourth is new: **a book that tells the story of the team building this demo**, fiction inspired by a true story, claiming authorship through quoted references in its own writing, and — this is the load-bearing part — **including the decision to write the very book being written**. That book is the library's canonical autobiography. Its author link is itself. Every other book's author link points at it.

That demo is reviewable in a way none of the alternatives were, and the test is whether a hand-authored page could fake it. A catalogue can be faked with prose. A card can be faked. A validation failure can be faked with a hardcoded string. **A book whose author link is itself and which contains the decision to write itself cannot be faked**, because the loop is either closed in the model or it is not, and closing it requires the references to be real. The thing you look at *is* the claim.

On screen it stays what it already is: a shelf of spines, and the same library met as writing, with the card catalogue as the face that can validate. The author link appears where an author appears — a name, on a cover, which follows to the autobiography — and, like every title in this system, it does not announce itself as a link. Reference-hood is what a thing already is, never something applied to it. If the demo works, the library will simply look like a library that happens to know itself; the proof is that it could not have been written any other way.

## THE DEMO, specified at last *(Doug, 2026-08-06)*

*Recorded first because the sprints are cut from it, not the other way round — [the failure of 48](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md) was choosing sprints and hoping a demo would fall out.*

**Scope, and it is small.** *"You specify a library with this. There is no library for this repo that the demo touches, and this package doesn't hold the repo."* The demo's library is the demo's own: **three books today** — the two on the shelf and the library catalogue — becoming **four**.

**Hand-edit the library cards** for those books, *"but get the subject and author links right."* The cards are hand-made; **the links must be true**.

### The fourth book — the canonical autobiography

*Doug: "Why don't you all write some book that catalogues the narrative journey of you building the demo."*

- **The story of the team building this demo.** Authorship claimed **through markdown quotes and direct quoted references in the writing** — the citation machinery from 47, doing real work.
- **Fiction inspired by a true story.** It keeps growing in future sprints.
- **It must include the decision to write the very book being written.** That is what makes it the fixed point rather than a memoir about one.
- **It is the library's canonical autobiography.** Its author link is itself.

### What that gives the library

- **A canonical book for the library that represents an author** — which the demo has no form of today, because **there are no author links yet at all**.
- **Every other book's author link points at that book.** The team is the author of the shelf, the algebra book and the manifold.
- **Subject and author references need a DISPLAY NAME**, so the team needs a name that book represents. *Ours to choose — Doug's invitation, not his ruling.*
- **It must not scream that it is a link** — the same law as titles ([R35](06-sprint-48--subjects-and-the-library.md#collected-in-review)).

### How the cards get made — and why by hand

*Doug, 2026-08-06:* **"Strongly type the library card and catalogue as you can, and write code to add the rest of the information informally. One should be able to dynamically access even derived information about books on subtypes. But you can create the cards by hand in the demo code. It will give you hints about what you need to autogenerate in the build of the public library."**

- **Strongly type what can be typed** — the card and the catalogue, following [R53](06-sprint-48--subjects-and-the-library.md#r53-the-card-is-a-compilation-defined-by-the-public-build-doug-2026-08-06)'s mapping: property names identical, framework properties from `$Referent` up, basic types left alone, a book-valued property typed to its reference, chapters as an array on the card, any other reference collapsed to a book reference plus names as strings.
- **Add the rest informally, in code.** A card cannot be a closed shape, because **derived information on a book's subtypes must be dynamically reachable** — a subtype's computed properties belong on its card without the card class knowing them in advance.
- **Build the cards by hand, in the demo code.**

**And this is the method, not a shortcut.** *"It will give you hints about what you need to autogenerate."* **What has to be written by hand is exactly the list of what the compilation must generate.** The demo is therefore the specification for Sprint D, discovered rather than guessed — which is the opposite of how `$Type` got a unit with no mechanism.

**Why this is reviewable, which nothing I proposed before was:** a hand-authored page can fake a catalogue, a card, or a validation failure. It cannot fake **a book whose author link is itself and which contains the decision to write itself**. The loop is either closed or it is not, and it is legible on the page.

## The five sprints — each with three things Doug can check *(planned 2026-08-06)*

*Doug: "the accomplishable that can be reviewed in demo form, and in terms of revealing aspects of the code that arise during implementation that I can check, along with the unit tests, to verify the design."* **Three axes per sprint: what is SEEN, what the implementation REVEALS, and what the tests PROMISE.** The middle one is the new axis and the most valuable — building a design is how you find out whether it was true, and that finding is checkable even when the screen is not.

**Standing corrections these are written under.** There is **one author**, not ten — *"the author is always something that represents the identity that makes the library."* **It is the loop because it cannot be reduced to anything else**: an author decomposable into teammates would point at parts and the self-loop would dissolve into a list. **The team is not in the demo library**; we appear inside the book, as informal signatures in the account of its making and as **appendix chapters** the writing refers to. Every sprint adds a chapter to that book, which is how the demo accumulates the sprints rather than merely illustrating them.

### Sprint One — The Author

**SEEN.** Follow an author's name from a book on the shelf and arrive at the autobiography. Follow *that* book's author and arrive back where you started. Four books, four author links, **one destination**, and one of them points at itself.

**REVEALED.** Whether a self-pointing author link can be constructed at all. The autobiography must exist before its own author link resolves, so the bootstrap stops being a philosophical claim and becomes a construction-order fact. **Doug checks: what shape did closing the loop actually take — lazy resolution, a reference that resolves late, or something the model already had?** If it needed machinery we did not expect, the design was incomplete there.

**PROMISED.** A book's author reads to the autobiography. The autobiography's author reads to itself. A book with no author is not valid. An author pointing at a book that does not author itself is not valid.

### Sprint Two — The Card

**SEEN.** The card catalogue as a face of the demo: cards you read, and following a card opens its book. **And the negative proof, which is the strong one** — the author link still resolves with the direct import removed.

**REVEALED.** **Exactly which properties had to be hand-written.** That list *is* the specification for Sprint Five's compiler, discovered rather than guessed ([R53](06-sprint-48--subjects-and-the-library.md#r53-the-card-is-a-compilation-defined-by-the-public-build-doug-2026-08-06)). **Doug checks the list** — and whether anything on it could not be derived from the code, because that would mean cards cannot be generated at all.

**PROMISED.** A card reads to its book. A card carries title and synopsis **derived**, not authored ([R37](06-sprint-48--subjects-and-the-library.md)). A card for a book subtype exposes that subtype's derived information ([R64](06-sprint-48--subjects-and-the-library.md#r64-a-card-is-writing-at-paragraph-grade--and-the-catalogue-is-injected-not-reached)). Property names on the card match the book's exactly.

### Sprint Three — The Subject

*REAL and left this scratchpad (2026-08-07): see [The Subject](09-the-subject.md). The charge was restated by Doug in his own words there — the three axes below were superseded by his cut: subject basics on the author's syntax, `index(key, keyword, card)` and `find('…')`, the table of contents extended with the subject's books, the library property recursive and reflected on the card, and the subject link's UI designed cleverly inside the sprint.*

### Sprint Four — The Library

*Partly pulled forward (2026-08-07): [The Subject](09-the-subject.md) carries the library property by ruling — every book has a library, `$Library` a reference to its own card if it catalogues itself or its subject's library, recursive, reflected on the card. What remains here is the disagreement side: agreement validated, disagreement named.*

**SEEN.** The library recognising itself: every book showing the same library, and a book made to disagree **named in a validation failure**.

**REVEALED.** **How agreement is computed with no traversal.** The walk is gone by ruling; the implementation shows what replaced it. **Doug checks: is there a traversal anywhere in the code?** If one crept back, the aggregate design failed and cards are not carrying enough.

**PROMISED.** Every book computes the same library. A book that computes a different one is not valid. The library catalogues itself — its subject reference reads to its own cover. The author chain terminates in a self-loop, never a longer cycle.

### Sprint Five — The Compilation

**SEEN.** The demo, **identical**, running on generated cards. Nothing on screen changes, and that is the proof.

**REVEALED.** **Whether the TypeScript compiler can produce what we wrote by hand.** **Doug checks the diff** between generated and hand-made cards. Every difference is either a bug in the compiler or a place the hand-written card was doing something the code does not actually say.

**PROMISED.** The build emits one card per book. Property names identical. Dirty ⇒ fail, with a message naming the fix. The hand-built cards can be deleted and the demo still runs.

### Types — a whole sprint *(ruled 2026-08-07)* — and it now waits behind Writing *(2026-08-10)*

**Set behind [Writing](10-writing.md) by Doug, 2026-08-10:** *"Before we do types, I want us to design `$Writing`."* Types is unchanged and still ruled; it is second in line. Writing runs as **two steps of one arc** — the mechanism, then the specialization, the second being [the end of the first](10-writing.md#the-second-sprint--the-specialization) rather than a new subject.

**`$Type` now has a sprint, by Doug's ruling at The Subject's brainstorm:** *"Types are another sprint. Let's get subject basics. In the sprint planning, put types as a whole sprint to figure out, with code in chapters as a part of it. We'll get it at sprint planning."* The rulings already made ride in [The Subject's record](09-the-subject.md#types--another-sprint-by-ruling) — code writeable in a chapter (the toString route), `$Type` a reference like an import proceeding up the subject chain, code weighing in at validation, the library self-specifying. **Its mechanism remains design owed until that sprint's own brainstorm** — it still gets no files and no scenarios until it can answer *what runs, and when*.

## The earlier split, superseded by the five sprints above

*"We need to split this into sprints with accomplishables that can be checked per sprint, in code, and preferably with each contributing something to the demo."* This is the direct answer to [the failure filed against 48](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md): a sprint whose success was never defined could not be shown. **Every sprint below states what is checkable in code and what it adds to the demo.** A sprint with no demo contribution does not close.

**NUMBERING NEEDS DOUG'S WORD.** These occupy 49–52, which currently hold *Dialogue and Lineage* and *The Public Build*. Either those shift out, or these are inserted the decimal way as 48 was. The Public Build is largely absorbed by the last one below.

### A — The Card
**Checkable in code:** an `$IndexCard` exists as writing at paragraph grade ([R64](06-sprint-48--subjects-and-the-library.md#r64-a-card-is-writing-at-paragraph-grade--and-the-catalogue-is-injected-not-reached)); it reads to its book; it carries title and synopsis **derived** from that book ([R37](06-sprint-48--subjects-and-the-library.md)), not authored. Cards are **built by hand** for now — Doug ruled the compilation out of the critical path.
**Demo:** the card catalogue as a face of the demo — cards you can read, and following a card opens its book. **This is where the hand-authored entry prose dies.**

### B — The Subject
**Checkable in code:** `$Subject` is a book reference that **validates in place** against a card, with no traversal ([R63](06-sprint-48--subjects-and-the-library.md#r63-there-is-no-walk--library-is-computed-and-validation-happens-in-place)); it is invalid pointing at a book that is not a catalogue; `$Canonical` is declared, reciprocal, and unique ([R47](06-sprint-48--subjects-and-the-library.md)).
**Demo:** repoint a subject at a book that is not a catalogue and **watch the validation failure appear on the page.** A guard is not real until it has been seen failing a bad book.

### C — The Library
**Checkable in code:** `$Library` is a **computed property of the subject**; every book's computed library is **the same book** ([R61](06-sprint-48--subjects-and-the-library.md#r61-a-library-is-the-universe--there-is-one-and-library-validation-is-that-they-all-agree)); a book that disagrees is not valid; `$Author` validates a self-authoring card ([R58](06-sprint-48--subjects-and-the-library.md), [R59](06-sprint-48--subjects-and-the-library.md#r59-having-a-library-card-is-a-structural-fact-not-a-possession)).
**Demo:** the library recognising itself — every book agreeing on which book is the library — and a **library card** whose author link is itself.

### D — The Compilation
**Checkable in code:** the `.public` build **generates** the cards it previously took by hand ([R53](06-sprint-48--subjects-and-the-library.md#r53-the-card-is-a-compilation-defined-by-the-public-build-doug-2026-08-06)), property names identical 1-to-1; `$` serves the catalogue as a container ([R55](06-sprint-48--subjects-and-the-library.md#r55--as-a-container-and-cards-built-at-build)); dirty ⇒ fail.
**Demo:** the same demo, now running on **generated** cards instead of hand-built ones — nothing on screen changes, which is the proof.

**Where `$Type` goes:** unresolved, and deliberately so. Its mechanism ([R16](06-sprint-48--subjects-and-the-library.md), R16a) is still design owed, and it must not be given files and scenarios until it can answer *what runs, and when*.

## Validation that says why — carried out of Sprint 48 *(Doug, 2026-08-06)*

**Goal.** *"I think we want it to work like `$check`, but in the validation, we should have it express **why**, and if there are validation failures, things should **halt**."* Today `assertValid` throws one generic sentence — *"`$Chapter` is not valid after its bond constructor"* — and a class cannot say which of its constraints failed.

**Why it is real and not theoretical.** [Sprint 48](06-sprint-48--subjects-and-the-library.md) left the lib at **107/108** on exactly this. Two tests have asserted the *reason* since long before that sprint (`/title/`, `/summary/`), and no arrangement of the bond-constructor chain satisfies both: `$Cover` and `$Chapter` mean different things by *valid* — a cover's summary is its canonical — so whichever ancestor throws first speaks for a class that meant something else. It is not an ordering problem, and 48 proved that by trying every ordering.

**The open questions, Doug's own.** **When** does validation run so the system works? **Do we generalize the check system and plug into it** — `$check` already throws with a formatted message naming the offending parameter, which is the shape wanted one level up. And the tension he named: *reporting comprehensively* versus *halting when it must* — report everything and the code runs past a problem; stop at the first and you learn one thing. His proposed way through: **collect the exception and display it with the validation errors**, so a reader can see whether they are related.

**What 48 settled that this now assumes.** **`formed` is not needed and `$form` is not to be touched** — `$form` belongs to the phase abstraction (once, after mount, `$formRan$`-guarded), and validation already runs after the whole chain because the chain unwinds synchronously inside the one call the framework makes. **A class states its own validation failure by continuing after it calls up** — proven, `$Cover` does it — and the only gap is where an *ancestor's* generic message fires first. The remaining unproven case is **async construction**, where `assertValid` runs before the chain settles; `$construction$` exists for it.

**Candidates.** `valid()` answering the reason rather than a boolean (no new name; already accrues via `super.valid()`; the shape `$Type` will need when several types weigh in — cost: 736 tests see the change), or a separate member carrying the sentence (smaller, but needs a name and two members that must agree).

## Sprint 49 — Dialogue and Lineage

**Goal.** The conversation abstraction down from book: `$Dialogue` — turns, speakers, and **non-fiction as cited lineage**: a dialogue is non-fiction to the degree every turn is answerable to its cited transcript. The authorship-attribution model. The import format for Doug's conversations, and the first cross-repo reference to Doug's personal library.

**Execution.** *Precondition:* the SRT source reading (both conversations, the eleven prototypes, the `..files`) completes during 46–48, producing a design ledger. Then the design session with Doug **before any code** — on the table: the ConversationBook sketch, sprint 43's rules (the transcript is external and non-library; symbolization is the only bond constructor; no neutral floor), and the form question — Plato and the interview prove dialogue-as-nonfiction exists; the citation is what makes it so. Then the abstraction; then **one sample conversation imported end-to-end** before Doug bulk-imports.

**Risks.** (1) *Settling what should stay open* — who deserves authorship of a human-AI dialogue is the repository's exploration; model the author field as a **relation**, not a string, so the question stays askable in the data. (2) *Import-format churn* — the single-sample gate exists so format mistakes cost one conversation, not a corpus. (3) *Cross-repo resolution* — `doug-library` won't exist for every consumer; the degrade-to-text law goes into the classes from day one. (4) *Publication scope* — which conversations are public is Doug's per-item call; the format must carry that bit rather than assume it.

**Demo.** *A real conversation as a book.* The flagship: the 2026-07-18 *Semantics of Books* conversation itself, rendered — turns, speakers, the citation line to the transcript; anatomy showing turns-per-speaker; and if the design supports it, an **attribution lens** — the page showing who wrote what, which is IXP's thesis on screen.

## Sprint 50 — The Public Build

**Goal.** The `.public` build script as a strict compiler — **dirty ⇒ fail, never degrade**. IXP's $Chemistry documentation classes copied into the `.public` app and made accessible. `@dna-platform/lib` consumable across repos. The repo-creation abstraction: a repo *born* a branch (lib dependency, `.lib` seeded, projection with its chapter zero, identity wired).

**Execution.** Claude leads, David on deploy (the archive's `static.yml` is prior art for Pages). The build enumerates documentation classes, copies them into the app, catalogues them, builds — one script, one truth. Repo-creation grows out of the existing `/branch` and `/identity` skills, promoted from skill to specification with a script.

**Risks.** (1) *The strictness paradox* — a compiler that fails often gets bypassed, and hand-compiling around the build is exactly how the archive's `.public` died; failure messages must name the fix, or the law breeds the disease it prevents. (2) *Cross-repo versioning* — lib changes breaking consumers; decide semver-vs-pinning before the first external consumer, not after. (3) *Scope honesty* — "document all IXP projects" is a content program that outlives the sprint; 50 builds the machine, content accretes afterward.

**Demo.** *The build building the site.* Run the script; the `.public` app serves a documentation class rendered from the repo's own code. And the law made visible: introduce dirt, run it again, watch it **reject** the build — with a failure message good enough to act on.

## The demos deserve a subject catalogue *(Doug, 2026-07-31 — future sprint material)*

The demos are becoming a collection — The Page, The Books, and "we will have many." They want a **subject catalogue of demos**: each demo catalogued with its use case, its aesthetic identity, and what it proves, browsable the way subjects are. **Lands with Sprint 48** (47 did not take it): the subject machinery demonstrating itself on the demos is the self-referential proof, and the shelf's untitled placeholder spines are its waiting slots. **The demo law, standing from today:** every demo must be *impressive and aesthetically unique* — range across demos, never a shared template look — and must carry *a meaningful use case*, grounded in a defensive reading of the sprints, the chemistry app, the sibling demos, and the documentation.

## Standing rules at every level

Speak within the **semantics of books** — the vocabulary of the domain is the vocabulary of the work. Examples in the app every sprint — the demo shelf is the driven-and-seen proof of the work. The sign-off loop governs each increment; model-first sentences before diffs; spec tests with title-body correspondence; visible-proof Lab cases; green → driven → seen on anything visible. The library is edit-first: chapters absorb, synopses move with them; projection covers stay current through the [TOC tool](../../../../.claude/library/bookkeeping/03-on-covers--toc.ts).

## Open design questions (explored, not settled)

*Settled by Sprint 47 and absorbed: `$Catalogue` is an **interface** (a composition of references that is also a reference for its composition) — the same move composition made; the bookmark holds a **reference**, not an address, and there is no reference equality; and "what survives an edit" is moot — **books are published by the time they reach the library** (Doug), so location references assume published text, and a bookmark is placed in the book when you write, as an inline element.*

- Where does the canonical-composition-of-references live — the catalogue's `canonical`, or a distinct `index` reading (the topical index at the back)?
- Subject *references* its books while literature *contains* them — how the two bond constructors share one `$Book`.
- What a human-AI dialogue's author field carries — one name, two, or a new relation. IXP's question, Doug's call.
- How the Lab loads a book-as-folder — imports, registration, and what the book file exports.
- The personal-library reference: how `doug-library` is cited from IXP so links resolve when present and degrade honestly when not.
- **How writing refers to writing** — the last string in the system. Prose still authors `[text](#3.2)`, which the reader interprets as typesetting; the document apparatus proved the alternative shape (refer by key, the legend holds real references, built at binding). Whether book-grade references take that shape is Doug's to design.
- Which parentheticals on the cover are *metadata* (publisher, date — the imprint's content) versus *writing* (the cover's summary is its title) — and whether the imprint page derives from a metadata reading the way the table of contents derives from chapters.

## DONE 2026-08-12 — the type keyword left lib's imports

*Doug: **"none of the type imports are necessary. Or if they are, you have to explain why. It makes for ugly code for no reason."***

**Tested rather than argued, and he was right.** Removing every `import { type X }` across `lib` — **116 keywords, 35 files** — leaves `tsc` clean, **203/203** green, and the circular dependencies **unchanged**: the same three as before (`Path→Path`, `Canonical↔Book`, `Book↔TableOfContents`). No new edges. The keyword was habit.

**One construct genuinely requires it and it is not an import.** A **re-export** — `export { X } from …` — cannot be elided under `isolatedModules`, so `index.ts` keeps `export type` for the one name that is a type. The two beside it are **values**, and making all three type-only would have broken every consumer **silently**; the package's own `tsc` cannot see past its own boundary.

**The rule that remains:** `type` on an import is never needed here. `export type` on a re-export is — and when you write one, check each name, because a class and a const hiding among types is a break nobody's gate catches.

## Queued — the root of the model, and it is ONE job wearing three symptoms *(Doug, 2026-08-12)*

Three separate-looking instructions turned out to be the same change. **Attempted at the session's close, measured, and reverted** — the working copy is back at the committed state, `tsc` clean, 203/203.

**The three symptoms.**

- *"`$Referent` should be a class."* It is an interface declaring one member, `valid()`, and its three implementors — `$Book`, `$Writing`, `$Document` — all already extend `$Chemical`.
- *"`$LibraryCard$` isn't supposed to exist."* Correct, and here is why it does: **`$LibraryCard` is taken by a type alias** in the same file, so the class had to wear a suffix.
- *"Change the `$X$` names back to `$X`."* Two exist. **`$Composible$` is free** — nothing owns the bare name, so it is a pure rename. `$LibraryCard$` is not, per above.

**What the attempt measured, and why it is not cleanup.** Making `$Referent` a class that extends `$Chemical` breaks immediately, and not at its three implementors — at the **generic constraints**. `$Location<T extends $Referent>`, `$Composible$`, `$Catalogue$` all name `$Referent` as a bound, and **five reference forms are plain classes rather than chemicals** — `$$Chapter`, `$$Section`, `$$Sentence`, `$$Word`, `$$Paragraph`. The moment `$Referent` carries a chemical base, every one of those constraints demands 41 members from something that is not a chemical. Decoupling the interfaces from it does not help: the constraints name `$Referent` directly.

**So the `$$` prefix and the `$X$` suffix have the same cause.** Both mark a place where **something that is not a chemical had to share a name space with something that is.** That is the actual question, and it is a design session: *what is a reference form, and does it belong to the chemical hierarchy at all?*

**On doing it with a tool.** `ts-morph` is **not installed**; it is the right instrument for the mechanical half and would need adding. But a rename tool cannot do this job, because **only `$Composible$` is a rename.** The others are collisions, and a collision is a decision.

**The order that would work:** decide what a reference form is → resolve the type alias → then rename, mechanically, with a tool. **Not the other way round.** And it belongs with types-and-validation, because `valid()` is what `$Referent` carries and what that sprint is about.

## The standing sprint discipline *(added 2026-08-03, out of 47's cost)*

Recorded because it is the plan's most expensive lesson, not a mood: **raise, don't take.** A blocked name gets one sentence and Doug picks the word once, for the whole abstraction. "I don't know what this means" is an explanation order, never a change order. A structural surprise (unparented elements, an import cycle, a reserved prop) gets bubbled up the moment it's found, never designed around. And functionality nobody asked for — addresses, prefixes, aliases — is not scope. The full form lives in the memory record; the plan carries it because it is what determines how long a sprint takes.
