# The Build

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*Opened 2026-08-13 as a brainstorm, planned the same day. **Status: `implementation-ready`.** The requirements were approved, and the plan enriched this same chapter in place rather than starting a second document.*

*The sprint is **named, not numbered**, and the name is the implementer's, standing for correction. **The Build** is Doug's own word for it, used throughout the session. **It collides with the book this sprint writes, which carries the same name** — flagged rather than resolved, because naming is his.*

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

## How this sprint came to be

It was planned. [Cataloguing's handoff](14-cataloguing.md#-next-ce-brainstorm-and-the-subject-is-dougs-to-set) named the `.public` build as next, and Doug had reordered the roadmap twice to put it there: *"I think we need to do the .public build before we do types. We need to know what it's like to lift this code first before we try to guess at what point code might be made to run."*

**What the brainstorm changed is the size of it.** The chapter-zero entry for [Sprint D — The Compilation](00-planning.md#d--the-compilation) described one stage — the build generating the cards the demo writes by hand. Doug's first answer named **six**, and the last stage is GitHub Pages.

**And then it changed the deliverable twice.** First to a design with no code: *"Let's design the system without building any of it this sprint."* Then to a **book in the demo** — because the specification, written as a book, is itself a demo contribution and the fifth data point for what the build must generate.

## Doug's rulings — 2026-08-13, verbatim

*Recorded because the design is theirs, and because seven of these turned a proposal that was already on the table.*

- **The whole machine, first answer.** *"The public build is code that lifts chemistyr [chemistry] code from the library and its folders, modifies it using the typescript language analysis tools, compiles it into books, runs validation, generates the cards that the various books will use as book references, and the end result is a runable app that is the github pages for the repo. Obviously we won't get all of this done this sprint, and we don't even have anything in the repo yet so we'll have to generate some test files. **We need to build conventions for how to organize files and folders so they can be compiled into a library.** This is a tough project."*

- **And the sprint's size, in the same breath.** *"For this sprint, I think it will be enough to design the system and set up some temporary test code to prove to ourselves that it works."*

- **What the modification is for.** *"Normalization. We might remove autogeneration of the table of contents from the framework level and move it to here. We might have a folder convention where we add subject links that aren't specified. Maybe we have a canonical author and add those links unless specified. **Maybe each subject gets a subclass of Book. We lift the book components into the book for the subject.** And all the code as to be organized so that it can be served in github pages."*

- **The correction that saved a wrong machine.** *"The app relies on the package that has the framework. **Nothing moves from the package.** But we will write classes in the Library folder that depend on lib (the public library) and those will get lifted and assembled."*

- **What the build is.** *"The build is a standard build for the app in public. **It is not unlike a compiler.** It will read all folder in Library, left [lift] the code, modify it, copy it in, and **probably create a runtime so it can perform validation outside of the app that is served on github pages**. **No code in the library folders will actually be served.** All code is lifted, modified, and moved into the .public app."*

- **What governs every convention.** *"I think it will be more like **conventions that can be overridden if needed**. The chapters might be rendered into the book, so that only chapters need to be written. **Live code in the app will be written in chapters and should be capable of doing certain things**, subjects will be written but parts of their table of contents might be inferred. This is the system we are designing."*

- **What an author gets, and the open question inside it.** *"They write a chemical. The author can do all things a chemical can do. **But the book provides the environment. Where is that written? We'll have to figure that out.**"*

- **The subject as its own app — and the inheritance that answers the question above.** *"Suppose each subject is meant to be something like its own app with its own UI. We can build default UI into public. The subject itself is meant to contain a specification. Might the subject itself contain code that customizes the look and feel of the app? Perhaps we build a little framework to make the app environment modifiable. **If we imagine that the subject has a subclass of book that extends the parent subject's book, we need a place to put that. Perhaps it belongs in the book** — which is pretty meta. **We would literally write the code for the parent into the view of the subject**… interesting."*

- **The questions the document must answer, in his words.** *"We need to come up with a plan — a set of conventions that get us started. **Do we start doing .Cover, and 1-… for the chapters? Something else? How do we specify the book associated with the subject? Should we generate a test subject that we don't commit so we can do local testing of the system?**"*

- **The hierarchy ruling, reasoned aloud and then decided.** *"A book can have more than one subject, and many books can index other books. Having a tree hierarchy in the folders either serves to express canonical subjects, or it is a problem… **thinking… the canonical subject map does make it compelling as an organizational structure, and it doesn't prohibit non-canonical subjects from indexing other books, we just need to use explicit subject markers.**"*

- **The deliverable becomes a demo.** *"Okay, that's interesting but **you have to design it**. Sure, why document this there. We are just going to have to evolve it and link to it if we are going to use it. So okay let's document. **Let's make it a demo. Let's keep it up to date. Add that to the plan.** Since the plan is to develop this, we can make **the book on the shelf** the thing we build to document."* And, on the misreading that produced it: *"Oh no, you didn't mean a book in the demo. **But why not do it there? No one said the output of the sprint can't be the document for it.**"*

- **Where it lives.** *"**The shelf only**, though you will have to link to it in the project notes and the library. You can have a chapter point to it that you keep well documentation and compact."*

- **Numbers are refused, and the reason is a cost.** *"**Numbers are awful and you should avoid them.** You have an O(n) renumbering of all other files every time you create a numbered chapter… **There are 47 chapters and you want to add a new chapter 3. Well that's an awful lot of file renames.** Maybe file order should be a UI layer — which you can modify by file."*

- **What the dots mean, ruled.** *"In a flat folder world, **the dots are for subject catalogues**. When talking about tsx files for chapters, **the dots might be the cover or synopsis**. **The cover might even have two dots since it's so special.**"*

- **A part of a book, raised as a test of the folder convention.** *"What if we have a part of a book with multiple chapters? **This is the sort of thing that might make a book split into a subject and other books.** What might that look like? We might want to develop the convention so code should exist that makes it clear."*

- **The subject's own book is a folder, and it is `.subject`.** *"Definitely not `.book`, because the other folders all have books… **`.subject` would be the solution there.** There would only ever be at most one. But **technically, the `.` could be followed by anything, because there would be at most one.**"* **That last sentence is the rule**: the dot carries the role, and the word after it is only a label for a reader.

- **Where the build code lives, and the principle under it.** *"**In the `.public` folder** — it becomes public when something is lifted into there, and it likely gets modified on the way."* **Publicity is lifting**: nothing in `library/` is public, and a thing becomes public by being lifted into `.public`. The build therefore sits in `.public` beside `package/` and `app/`, in neither of them.

- **A book may declare its own class, and sharing one is the point.** *"Multiple views doesn't replace the need for the book. **A class can want to have its own book.** That book can evolve into a subject catalogue perhaps. **By sharing a book, it ensures us that the subject looks something like the books in it.**"* So `.Book` is optional, and a declared one **must derive from its subject's** — the constraint is what makes the sharing hold.

- **AND THE VIEW ASKS THE MODEL — no prop.** *"The two views doesn't even need to be a hard rule, but perhaps the prop that makes the distinction is. **The view should just figure out on its own whether the book is or isn't a subject catalogue. We don't need a prop.**"* *Reversed inside one message, and the reversal is right: **[`$Book.read()`](../../package/src/book/Book.tsx) already answers the chapters that read elsewhere**, and [subjecthood is a count](14-cataloguing.md#r16). **The rule that makes a subject a subject is the rule that decides how it draws.***

  **<a id="c20"></a>C20 — `follow()` IS TO BE REMOVED, and the hedge that first survived it was wrong.** *Doug: "`Book.follow` shouldn't exist. We changed the `$Reference$` method to `read` ages ago… **read is the reference interface, and if follow is there, it is old.**"*

  **The correction I owe.** I first reported that `follow()` was redundant *only on the catalogue half*, because on a chapter it answers something different. **That reading was wrong: [`$Composition$`](../../package/src/writing/Composition.tsx) does not declare `follow()` at all.** Only `$Catalogue$` does — where it duplicates `read()` exactly — so every other `follow()` in the package **satisfies no interface**. They are free-floating leftovers of the rename, and Doug was right the whole way.

  **Machine-confirmed.** A ts-morph pass over the package reports **`$Catalogue$: read / follow → $Composition$<T>()`** — the identical signature — and `$Book.read()` is a pure pass-through returning `this.follow()`. A promise already asserts `'follow' in catalogue` is false for the card catalogue, so the intent was recorded and half-executed.

  **Removal is [T4](#the-programme--eight-tracks-so-separate-sessions-can-run-them)'s or its own cleanup**, not this sprint's, because [D1](#the-decisions) holds — **but it is now a decision rather than a note.**

  **<a id="c21"></a>C21 — the sweep Doug's worry asked for, and what it found.** *"I'm worried that we have other situations like that in the code."* **Answered by looking**: across 48 source files, **`read`/`follow` is the only duplicate-signature pair.** One leftover, not a pattern.

  *What the same pass did find is a different and milder thing:* **six public methods with no caller outside their own file** — `$Book.accounts()`, `$TableOfContents.row()`, `$Document.summarised()`, `$Document.declaration()`, `$IndexCard.printed()`, `$Link.anchor()`. Most are used internally and are simply **public where they need not be**. *Filed, unranked, and deliberately not acted on.*

  **AND THE PASS WAS ITSELF THE PROBE.** ts-morph opened the package's own `tsconfig` and loaded **71 files in 569ms**. *So the question underneath [T4](#the-programme--eight-tracks-so-separate-sessions-can-run-them) — can the tooling read our source at all — is answered with a number rather than a hope, which is what [Sprint 48's filed failure](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md) demanded.*

- **THE BUILD IS COMMITTED, AND THE REASON IS SUBJECTIVITY.** *"**We are committing the build**, btw. I forgot. Look at that `.me` folder — that is going to be part of **a subjective build process**. Different team members have a different thing there, and **we will have to store what they add because we can't replicate it. Subjective builds.**"* ***This reverses the brainstorm's answer that generated code lands in gitignored output.***

## What was read — verified 2026-08-13

Each claim was checked against the source. Where a claim is reasoned or cited rather than run, it says so.

- **There is no build that assembles books.** `npm run build` is rollup, building the package. Books are hand-authored TSX modules. *[Verified last sprint](14-cataloguing.md) and re-confirmed against [package.json](../../package/package.json).*
- **The public build already ships, and it ships a teaser.** [`deploy-pages.yml`](../../../../.github/workflows/deploy-pages.yml) builds [`library/.public/app`](../../app/) to Pages on every push to `main`. That app is `$Teaser` — a title, drifting orbs, and the words *coming soon*. **The four-book demo lives in [`package/app`](../../package/app/) and is not deployed.**
- **A subject is already declared to be a workspace package.** [`library/physics/package.json`](../../../physics/package.json) is `@dna-platform/physics`, private, depending on `@dna-platform/lib`, described as *"a subject of the library, documented with $Chemistry"*. Philosophy and pharmacology are identical, all three are in the [root workspaces](../../../../package.json) — **and all three hold exactly one file.** `identity/` and `.specification/` are empty. Doug's *"we don't even have anything in the repo yet"* is literally true.
- **`ts-morph` 28.0.0 is a root devDependency**, installed last sprint for the model's rename and unused since.
- **`book.tsx` is twenty-two lines and every one is derivable from the folder.** [The algebra's](../../package/app/src/sections/book/library/algebra/book.tsx) imports are its numbered files in order; its composition is that order, with `<TableOfContents />` inserted by hand at position two. **That insertion is the one thing the folder does not say.**
- **A cover already declares its links as writing.** [`01-the-cover.tsx`](../../package/app/src/sections/book/library/algebra/01-the-cover.tsx) carries `<Author>The Team</Author>` and `<Subject>Demonstration</Subject>` — by name, in the prose. The build's job is to **resolve names to cards** and **supply the ones the author left out**, not to invent declarations.
- **The hand-wiring in [`card.tsx`](../../package/app/src/sections/book/library/the-team/card.tsx) is as much the specification as the card class is.** Sixty-nine lines: four cards, author links, subject links, two index filings, membership, and the entry placements.
- **The card's transform is now a quoted string, and its const is dead.** [`08-the-card-in-code.tsx`](../../package/app/src/sections/book/library/the-team/08-the-card-in-code.tsx) declares `const transform` as a template literal and never uses it. The live `$LibraryCard` is six plain fields. **The mapping [R53](06-sprint-48--subjects-and-the-library.md#r53-the-card-is-a-compilation-defined-by-the-public-build-doug-2026-08-06) specifies exists today only as prose describing a type that no longer compiles.**
- **`$Book` binds its chapters**, holding them as `$parts` — so a book already *is* the scope for what it contains, under The Representative's finding that **a scope reaches only what it binds**.
- **A derived scope is prototypal.** [`chemical.ts`](../../../chemistry/package/src/abstraction/chemical.ts) builds one with `Object.create(from)`, and registrations are held per chemical in the reflection catalogue. **The class-inheritance half is cited from [The Representative's record](12-the-representative.md), not driven** — it wants a probe before anything depends on it.
- **`$CardCatalogue.find()` already indexes by key and keyword** — [`author: …`, `subject: …`](../../package/src/library/CardCatalogue.tsx) — which is the answer to deep shelves and is shipped.
- **The failure this sprint is most likely to repeat** is [the sprint that planned what it had not designed](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md): *"the TypeScript compiler can read our source"* is a feasibility case standing where a mechanism is owed.

**Baseline, so every later number is a delta:** `1aae2cb` on `main`, working copy clean · chemistry **674/674** (61 files), `tsc` 0 · lib **239/239** (23 files), `tsc` 0 · app typecheck **66 files, 1/1 baselined, 0 unexpected** · `verify-book.mjs` **51 checkpoints, exit 0** · `verify-demo.mjs` **25 checkpoints, exit 0**.

---

# What this needs to be

## The boundary, stated first because it is the sprint's shape

**The build is not built this sprint. The book is.**

No compiler, no `ts-morph` script, no generated output, no change to the deploy. *"Let's design the system without building any of it this sprint."* Writing chapters is not writing the build, and the plan must keep that line visible.

**What is built is a book** — the specification, written as the fifth book in the demo's library, standing on the shelf. That is the deliverable, and it is also the sprint's demo contribution under the convention that [a sprint with no demo contribution does not close](00-planning.md#the-earlier-split-superseded-by-the-five-sprints-above).

## The actors

- **A1 — The author of a subject.** Writes chapters in a folder and expects a library to come out. Declares nothing structural, and should not have to know that a card exists.
- **A2 — The implementer of the build**, next sprint. Needs every stage to answer *what runs, and when* — or to be told plainly that it is design still owed, so it gets no files and no scenarios.
- **A3 — The reader at the shelf.** Opens The Build having never seen the repository, and learns how a folder becomes a library well enough to write one.
- **A4 — The reader of the branch library.** Finds the design without running the app, through one compact chapter that points at it and does not duplicate it.

## The key flows

- **F1 — Authoring.** A person creates `library/<subject>/<book>/` with a cover and numbered chapters, and writes nothing else. The library that results has their book in it, subject-linked, author-linked, catalogued and carded.
- **F2 — Compilation.** Lift → modify → copy in → validate → cards → build → `dist`. Six stages, one script, one truth, and nothing in `library/` is ever served.
- **F3 — Overriding.** An author names a subject, an author, or a non-canonical catalogue in the cover, and the build honours it instead of its own default. *Convention with override, everywhere.*
- **F4 — Inheritance.** A subject's book class extends its parent subject's. A registration made on the library is resolved by a chapter in a book two levels down, with nothing passed and nothing mounted above it.
- **F5 — Reading.** A visitor to the demo sees a fifth spine, follows it into The Build, and reads the specification in the framework the specification is about.

## The requirements

*One per chapter of the book, plus the four that are about the book rather than in it. Each names what must be **answerable** — a chapter that cannot answer its requirement belongs in R11 rather than being written vaguely.*

### R1 — The Build is a book in the demo library, and a real one

It stands as the **fifth spine on the shelf**, with a cover, a synopsis, chapters, a card in [`libraryCatalogue`](../../package/app/src/sections/book/library/the-team/card.tsx), an author link reading to **The Team**, and a subject link reading to **The Shelf**. It is wired by hand exactly as the other four are — **and that hand-wiring is the fifth data point for what the build must generate.**

### R2 — The pipeline chapter names six stages, each with what runs and when

Lift, modify, copy in, validate, cards, build. For each: **what executes, at what moment, reading what, writing what.** A stage that cannot answer this goes to R11 by name. *This requirement exists because the failure filed against Sprint 48 was a feasibility case standing where a mechanism was owed.*

### R3 — The folder convention, stated so any folder can be classified without asking

**A folder is a book. A folder that holds folders is a subject** — because [subjecthood is a count, not a class](14-cataloguing.md#r16), which is already settled. `library/` is therefore the library, and its own chapter files are the literal chapters of the library catalogue.

**No dot-marker on subject folders.** The folder shows the count; a marker would be a second source of truth that can disagree with the first.

### R4 — The canonical hierarchy, and the collision it creates, settled

**The folder tree expresses canonical subjecthood.** Non-canonical subjects index other books by **explicit subject markers**, declared rather than positional.

And it must settle the collision, because two shipped classes both say *canonical* and point opposite ways: **`$Subject`** is a book naming the subject it belongs to; **`$Canonical`** is a subject naming its canonical book. [R47](06-sprint-48--subjects-and-the-library.md) makes them reciprocal. Under a positional hierarchy one side is **inferred** and the other **declared** — the chapter must say which comes from where, which may override, and what reciprocity means once one side is not written down. *[The reciprocity check left the framework and was never rebuilt](14-cataloguing.md#not-done-and-named-rather-than-omitted); this is where it gets decided.*

### R5 — What the author writes, specified tightly enough to work from

`.cover.tsx` — chapter zero, carrying the title, the tagline, and any overrides. `NN-name.tsx` from `01` — ordinary chapters, **the number being the position**. Nothing else is authored.

**The test:** a person given this chapter alone creates a folder that satisfies every rule in it without asking a question. *Both file forms are already in use — no new naming.*

### R6 — What the build supplies, each with its rule and its override

Eight artifacts: the book class; the subject subclass; the table of contents placement; the subject link; the author link; the entry placement into the cataloguing book; the card; and normalized imports. For each, **the rule that produces it** and **the declaration that beats it**.

Two of these have known answers worth stating: the author link defaults to **the library's canonical author, recognised structurally** — the book whose author link points at itself — and the subject link defaults to **the parent folder**.

### R7 — The environment, and where it is written

**A subject's book class extends its parent subject's book class**, and registrations resolve through the class chain — which is inheritance, not containment, so nothing climbs and nothing needs mounting. The chapter must say **where the default UI lives**, **how a subject customizes look and feel**, and **what a chapter may ask for**.

*An author writes a chemical and may do everything a chemical can do. The book supplies the environment; the environment is not a restriction on the author.*

### R8 — Validation, in a runtime that is not the served app

*"Probably create a runtime so it can perform validation outside of the app that is served on github pages."* The chapter must say **what that runtime instantiates**, **what it asks** — `valid()`, `parts()`, or something else — **what makes it fail**, and **what a failure message must contain**: at minimum the file and the fix, under chapter zero's own warning that a compiler which fails uselessly gets bypassed.

### R9 — The cards, read off validated books

What [R53](06-sprint-48--subjects-and-the-library.md#r53-the-card-is-a-compilation-defined-by-the-public-build-doug-2026-08-06)'s mapping becomes now that the card is six plain fields and the computed type is gone. **The dead `transform` const is the evidence** that the mapping is currently prose describing something that does not compile; the chapter either restates it as a rule the build follows, or records that the mapping is smaller than R53 says.

### R10 — The fixture, and how the system is run locally

A **test subject** under `library/`, exercising the whole convention — a subject with its own chapters, at least two books beneath it, one taking every default and one overriding.

**Committed, and plainly marked a fixture.** *A build with no corpus in CI is a build nobody exercises, and [the green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md) is already filed against this branch for exactly that.* Doug asked whether it should be uncommitted; this is the answer proposed, and it is his to reverse.

### R11 — What is not settled, with what would settle each

Every open question named, never smoothed. **Already known to belong here:** whether a chapter answers `parts()` outside a browser; whether class-level registrations inherit as [The Representative's record](12-the-representative.md) claims, which is cited and not driven; where the default UI lives concretely; and what *"the subject itself is meant to contain a specification"* means as a mechanism.

**Each entry carries what would settle it** — a probe, a ruling, or a reading — so the next brainstorm inherits work rather than doubt.

### R12 — One home, and one pointer

The specification lives **on the shelf only**. The branch library gains **one compact chapter** — in [Designing Inexplicable Phenomena](../designing-inexplicable-phenomena/.cover.md), whose cover already describes exactly this kind of content — that says what The Build is and links to it, and **does not copy it**. [Chapter zero](00-planning.md) is updated to point there too.

*Two homes drift. That is the compounding law, and it is why no new book is created in `.lib/`.*

### R13 — The book gets its own aesthetic world

Four exist — the algebra's, the manifold's, the shelf's, and The Team's full-light apparatus. **A fifth that reuses one of them breaks [the demo law](00-planning.md#the-demos-deserve-a-subject-catalogue-doug-2026-07-31--future-sprint-material)**: every demo must be aesthetically unique and carry a meaningful use case. Doug's instruction was *"you have to design it."*

### R14 — Keeping it up to date is part of the plan

*"Let's keep it up to date. Add that to the plan."* A standing commitment, recorded here so it survives the sprint: **when the build changes, The Build is edited in the same act** — the same discipline the library already runs on for covers and synopses.

### R15 — The book is the exemplar of IXP documentation, not only its specification

*Doug, during planning: **"this is a demo of what IXP (inexplicable phenomena) documentation will actually be like. This is what we are doing in the repo."*** So the book carries a second job: it is the **form** every subject's documentation will copy.

That makes richness a requirement rather than a flourish. **Diagrams that draw from the model**, not pictures of it. **Code samples shown as themselves and styled well.** *"Use many resources."* A design good enough to be imitated, **because it will be.**

*The patterns are shipped and this is not a new capability: [`$Circuit`](../../package/app/src/sections/book/library/the-team/figures.tsx) already draws the author loop out of the books; `$Listed` shows real source through `?raw`; `$Slipped` prints a card's own fields. **What is not shipped is syntax highlighting inside a book** — `$Listed` is a plain `<pre>`, and prism lives in the Page's markdown port.*

### R16 — The design is discussed as it goes, not written ahead of its ruling

*Doug: **"we will have to discuss as you go."*** Each design chapter **opens with a discussion and is written to the ruling that comes out of it.** A chapter drafted ahead of its discussion is this sprint's own version of the Sprint 48 failure — an artifact correctly shaped and hollow at the centre.

**Consequence for the plan:** a chapter unit is not done when prose exists; it is done when a question was put, answered, and written down.

### R17 — The book says why it exists, and the reason is a fixed point

*Doug, during planning: **"look at how we have created a fixed-point between demonstrable team output and future team planning. IXP is going to be an open-source nexus of projects, the most important one of which is the formalization of the thing that inspired the design of IXP itself. It should look like accomplishables that organize the work for other ones. That's what this kind of library is for."***

**The book's own account of itself must say this**, because it is what makes the book more than a specification with nice figures. It is **a demonstration that is also the plan for the machine that will produce demonstrations like it** — and a library of this kind exists to hold accomplishables that organize the work of other projects.

*[The Team](../../package/app/src/sections/book/library/the-team/) closed the author loop: a book containing the decision to write itself. **This closes a second one**, and the two are the same move at different scales — which is the evidence this project keeps producing that the construct was carved right.*

### R18 — The build is SUBJECTIVE, and that is why its output is committed

*Doug, during work: **"we are committing the build… that `.me` folder is going to be part of a subjective build process. Different team members have a different thing there, and we will have to store what they add because we can't replicate it. Subjective builds."*** **This reverses the brainstorm's ruling that generated code lands in gitignored output**, and the reversal is not a preference — it is forced.

**The argument, stated because it is what makes the reversal correct rather than merely instructed.** `.me/` is [gitignored in this repository](../../../../.gitignore) and lives in the identity repo, exactly as `.claude/` does. So **a build input is absent from the repository the build runs in**, and CI cannot reproduce the output. **A build whose inputs are not all present must ship its result**, or the site cannot be rebuilt by anyone but the person who made it.

**And the chapter must say what a subjective build IS** — not merely that this one is committed. A build is subjective when its inputs include something only a particular teammate has, which cannot be regenerated and therefore must be **stored rather than derived**. *This is the framework's own subjective/objective distinction arriving at the level of the build, which is worth saying out loud: private state that cannot be recomputed, and a public view that anyone can read.*

**A concrete case is already here, and it is the ordering.** [`.vscode/`](../../../../.gitignore) is gitignored too, so **`sort-order.json` — now the home of every book's chapter order — is not in the project repository either.** A person arranged it; it cannot be replicated; it must be stored. **Either the order is subjective content that ships with the build, or the manifest has to move somewhere committed.** The chapter must answer which, and it is the sharpest test of the concept.

### R19 — Publication: the output mirrors the library, and a book is a page

**The lifted tree keeps the shape of `library/`** — a folder per subject, a folder per book — *"mirrors the tree"* — so a generated file sits where its author would look for it and a diff reads as *this subject changed*. The generated catalogue and the assembly stand beside the mirror as the two things nobody authored.

**A book has a route by default, and the route is the subject chain ending in the book's own name.** *Doug's rule, and his illustration is deliberately not recorded here at his instruction.*

**And a route must be a FILE.** *Verified 2026-08-14: the app is a client-side SPA — [`createBrowserRouter`](../../package/app/src/main.tsx), a single `index.html`, no `404.html`, no multi-entry input — so **on GitHub Pages every deep link 404s today***. Publication therefore **emits a real page per book** rather than routing in the browser. *This is what makes the library crawlable, linkable, and actually published rather than merely served.*

**And the design already there must be honoured** — *"look at the current app… we need to honor that design"*: it is React, it deploys to Pages from `.public/app`, and the emitted pages have to keep both facts true rather than replacing the app with a generator.

### R20 — The whole library is never loaded at once, and that is what the card was for

*Doug: **"We can't have a whole library loaded at once."*** **This is [R53](06-sprint-48--subjects-and-the-library.md#r53-the-card-is-a-compilation-defined-by-the-public-build-doug-2026-08-06)'s original argument arriving as a hard constraint** — a card is a surrogate you consult *so the item need not be handled* — and today's [`card.tsx`](../../package/app/src/sections/book/library/the-team/card.tsx) violates it outright by **importing every book to build the catalogue.**

**The split is already drawn, and it resolves this.** **At build, every book loads at once — deliberately**, inside the validation runtime, which is exactly why that runtime sits [outside the served app](#dougs-rulings--2026-08-13-verbatim). **At serve, nothing loads but the page you are on.** So the generated catalogue carries metadata and **imports no books**.

**Therefore following a card is a NAVIGATION, not a dereference.** You consult the card; to read the book you go and get it. *And that makes [R19](#r19--publication-the-output-mirrors-the-library-and-a-book-is-a-page)'s page-per-book the same line as the chunk boundary as the answer to this constraint — one decision paying three debts, which is the mark of a construct carved right.*

**DESIGN OWED, and named rather than assumed.** [`$IndexCard.read()`](../../package/src/library/IndexCard.tsx) is **synchronous** and throws when a card never pointed. A generated card that imports no book has nothing to hand back. **What `of` means for an unloaded book is undesigned** — a loader, a route, or absent-with-navigation — and it gets no files and no scenarios until it can answer *what runs, and when*. *It belongs to [T6](#the-programme--eight-tracks-so-separate-sessions-can-run-them), and T6 may not start without it.*

*R15 through R20 arrived after the requirements were approved, from Doug, and are recorded as **amendments** rather than folded into the approved set as though they had always been there. **R18 reverses a brainstorm answer**, **R19 corrects a stated premise about the app**, and **R20 names a mechanism as owed rather than assuming one** — which is why each carries its argument rather than only its instruction.*

## Acceptance examples

- **AE1.** The shelf shows **four spines** — *corrected at [U1](#u1), and the correction is the point: **a shelf catalogues the books, and does not catalogue itself**, so a fifth book makes a fourth spine.* Following it opens The Build; its byline reads *The Team*; the back arrow returns to the shelf. **Driven 2026-08-13: four spines, The Build among them, 13 checks passed, 0 console errors.**
- **AE2.** The card catalogue shows **five cards**. The Build's card carries its title, its synopsis and its chapter titles — **derived from the book, not typed**.
- **AE3.** A person handed only *What the Author Writes* creates a folder that satisfies every rule in that chapter **without asking a question**.
- **AE4.** For each of the six stages, the pipeline chapter answers *what runs, and when* — **or** that stage appears in *What Is Not Settled* with what would settle it. **Stated as a count: six of six accounted for.**
- **AE5.** The book's look shares **no styling** with the other four.
- **AE6.** Both drivers pass, and the shelf's driver gains **checkpoints for the fifth entry** — which is [U15's owed work](14-cataloguing.md#not-done-and-named-rather-than-omitted) arriving with a reason.
- **AE7.** The branch library's pointer chapter resolves to the book and says what it is in **under a paragraph**, with no duplicated specification.
- **AE8.** `library/` is unchanged except for the fixture, and **no build script exists** — the boundary held.

## What a hand-authored page could fake, and what it could not

**A book of prose can be faked**, and this sprint's product is prose — so the demo test has to be applied to the part that is not.

**What cannot be faked is the book participating in the library.** A fifth card in the catalogue, an author link that resolves to The Team, a subject link that returns to the shelf, and the shelf's contents deriving a fifth row from its own chapters. Those are the model, not the writing — the row is either derived or it is typed, and the difference is visible the moment a chapter is added.

*That is also why R1 insists the book be wired by hand exactly as the others are: a book bolted onto the page would prove nothing and teach the build nothing.*

## Out of scope, named so it is not drifted into

- **The build itself** — no script, no `ts-morph`, no generated output, no deploy change.
- **`$Type` and code-in-books.** Doug's ordering stands: the build precedes types, and this sprint precedes the build.
- **Retiring the teaser.** The Pages deploy is untouched; the teaser finding is [recorded](#what-was-read--verified-2026-08-13) and is the build sprint's to act on.
- **Moving anything out of the package.** *"Nothing moves from the package."*
- **The owed work from Cataloguing** — the list as a paragraph, dynamic layering, the refusal drawn — none of it blocks this and none of it belongs here.

## Names owed — none taken

**Three proxies stand and each is flagged for Doug's word:**

- **The Build**, as the **sprint's** name — his word, and it **collides with the book's**.
- **The Build**, as the **book's** title.
- **Fixture**, for the committed test subject — an ordinary English word, but not yet one the domain has been asked for.

*No framework member is invented by this sprint, because no framework code is written by it.*

---

# The plan — guardrails, not choreography

*Written 2026-08-13. **Status: `implementation-ready`.** [WHAT, not HOW](../../../../.claude/library/our-skillset/29-ce-plan.md) — no signatures, no shell sequences, no pseudo-code dressed as specification. Every unit names **what runs and when** and **what will be visible**; a unit that cannot is marked design owed and refused files and scenarios.*

## The decisions

**D1 — The build is not built.** No compiler, no `ts-morph` script, no generated output, no deploy change. *This is the boundary and it is a decision so that crossing it is a visible act rather than a drift. Chosen over building a first stage "to prove feasibility", which is [the exact substitution filed against Sprint 48](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md).*

**D2 — The book is wired EMPTY, first, before a single chapter is designed.** Cover and synopsis only, then the card, the links, the entry and the spine. *Because the wiring is the sprint's experiment: every line added by hand is a line the build must generate, and [U8](#u8) reports that list. Doing it last would make it a formality; doing it first makes it evidence.*

**D3 — The chapters are written in dependency order, and the pipeline chapter is written LAST.** The folder convention, then the hierarchy, then what the author writes, then what the build supplies, then the environment, then validation, then the cards — and only then the six stages. *You cannot honestly say what runs and when until you know what the stages do. An overview written first would be the feasibility case again.*

**D4 — The implementer writes this book's prose. This REVERSES [D10 of Cataloguing](14-cataloguing.md#the-decisions-and-the-two-that-reversed-something).** There the rule was that the prose is Doug's and the implementer writes none of it, because rewriting an author's book to fit a model change is the thing this library exists to prevent. **Here the specification is the implementer's work product**, and Doug's role is the discussion that settles each ruling ([R16](#r16--the-design-is-discussed-as-it-goes-not-written-ahead-of-its-ruling)). *Stated explicitly because a silent reversal of a standing decision is how records rot.*

**D5 — The fixture is SPECIFIED, not created.** [R10](#r10--the-fixture-and-how-the-system-is-run-locally) describes it; no folder appears under `library/`. *Doug's later ruling — "design the system without building any of it" — governs his earlier "set up some temporary test code". **This amends [AE8](#acceptance-examples): `library/` is unchanged, full stop.** The convention already has four books' worth of writability evidence in the demo; what the fixture exercises is the build, which does not exist.*

**D6 — One code artifact beyond the book is proposed, and it is Doug's to cut: [the inheritance probe](#u15).** *Cataloguing's D2 — prove the spine by probe before anything depends on it — paid for itself twice, and [R7](#r7--the-environment-and-where-it-is-written) currently rests on a claim **cited from a record rather than driven**. A promise is not build machinery. **Surfaced rather than slipped in**, because D1 is a hard boundary and this sits beside it.*

**D7 — The book gets its own figure kinds, and it declares them itself.** The framework ships no figure kinds; the demo declares its own. *This book needs at least a diagram that draws from the model and a listing that shows real source. **Their names are the book's to choose and are surfaced at review, never adopted by silence.***

**D8 — Nothing is named that Doug has not named.** Three proxies already stand ([Names owed](#names-owed--none-taken)); any further name is a proxy, flagged.

**D9 — The cut line: the book and its wiring. Not the shelf's redesign, not the teaser, not `library/`.**

**D10 — DOUG DOES NOT EXIST IN THE BOOK.** *His own instruction, and it is a constitutional rule rather than a stylistic one: **"I recommend that I, Doug, do not exist in the book in the demo. I am the weather. I supply constraints. But in the demo, this is your project."***

**So the book has no person outside the team in it.** A ruling that shaped the design appears in the book **as the shape of the problem** — a constraint the work met — never as someone's instruction, never as a quotation with a name on it.

**And the two rooms have opposite rules, which is why this is stated rather than assumed.** *This chapter is the team's record and keeps every ruling **verbatim and attributed**, because a record that launders where a decision came from is worthless. The book keeps none of them.* Prose that would cite him is rewritten as the team's own finding, or dropped.

*This governs [U4](#u4)–[U13](#u13) without exception, and it is the first thing to check when a chapter is reread.*

## Where the code lives — every path, so a session can start without asking

*Written 2026-08-14 out of Doug's question: **"Where does the code that we write even live? Where do we specify the build in the app? Should code that helps with the build be part of the package?"** It had never been written down, and a plan that cannot say where a file goes is not one somebody can build from.*

**The compiler is this repository's own tool, in `.public`, written in TypeScript.** *Settled in three moves and the reversals are recorded rather than smoothed: first "in the package, so another repo can build a library easily", then the packaging facts, then the ruling — **`.public` only.***

**The packaging facts that turned it.** `ts-morph` is a **root `devDependency`** and is not in the package at all. The package declares `files: ["dist"]` and builds **one rollup bundle for browsers**, with no Node dependency anywhere. Putting the compiler in its `src/` means either **ts-morph becomes a dependency of a browser package**, or the build code never ships and helps nobody. *The TypeScript compiler can technically run in a browser; nothing here would ever want it to.*

**So sharing is a later move rather than a lost one.** Extract the compiler into its own package when a second repository actually needs it — which is a decision made against a real requirement instead of a guessed one.

```
library/                          AUTHORED CONTENT — never served
  <subject>/…                     the corpus
  .test/                          an UNCOMMITTED sandbox, to see what gets generated

library/.public/                  where a thing becomes public
  package/                        @dna-platform/lib — the runtime, browser, UNTOUCHED
  build/                          THE COMPILER — TypeScript, Node, this repo's own
  app/                            THE PUBLIC APP
    src/
      shell/                      AUTHORED — resolve a path, find a card, load, draw
      book/                       AUTHORED — the default book
      generated/                  COMMITTED OUTPUT
        library/…                 the mirror of library/
        cards.tsx                 the catalogue
        books.tsx                 the assembly
    dist/                         → GitHub Pages
```

**So the three answers, plainly.** The compiler lives at **`.public/build/`**, in TypeScript, unpublished. The generated catalogue lands at **`.public/app/src/generated/cards.tsx`**. And the app's *authored* surface is **two folders** — the shell and the default book — with everything else on the page being a book drawing itself.

***The package is not touched by any of this***, which was the standing instruction from the day the sprint opened.

## The app, pictured — written because a plan nobody can visualise cannot be split

*Added 2026-08-14 on Doug's challenge: **"I need you to actually be able to picture the app we are building. If you can't, how can we have different teams work on it in parallel."** He was right, and the tracks below read like scaffolding because this section did not exist.*

**THE APP IS A SHELL AND A BOOK.** The URL is a folder path. The shell resolves that path to a **card**, loads **that one book**, and draws it. Whether it draws as a **reader** or as a **catalogue** the book decides for itself, by counting what points elsewhere. **There is nothing else in the app.**

**And the demo is NOT that app** — *corrected by Doug, 2026-08-14, after this section first claimed it was:* **"The demo isn't part of the public app. It was a use of the library that helped us get to what we need to build. But it is by hand. We are building another sort of convention."**

**What the demo actually is, and it is not nothing.** It is a **hand-made use of the library**, composed as TSX in the package's own app, following **no folder convention at all**. It gave us two things and neither is a prototype: **evidence** — three readers built independently converged on one anatomy — and **a measurement** — what wiring a book by hand costs, line by line, which is the compiler's specification. *It taught us what to build and it is not the thing being built.*

**So the public app shares nothing with it but the classes.** Its content is generated from `library/` under the folder convention; the demo's is typed by a person. **The Build stands in the demo deliberately** — the specification written as a hand-made book, which is what makes it the measurement rather than an illustration.

### What a visitor sees, at three depths

- **The front door** — the site root. `library/` is a folder of folders, therefore a subject, therefore **a book that catalogues** — so the front door is not a special screen, it is **the library's own book drawn as a catalogue**. Its cover and its own chapters, and an entry per subject, **each entry drawn from a card and not from the subject's book.** Nothing but the library's own module is loaded.
- **A subject** — one segment down. The subject's own book, which is both things at once: **its own chapters, and the books it catalogues as entries.** That is precisely [what Cataloguing built](14-cataloguing.md) — a composition of chapters that catalogues other books, through the same members. **Its books are not loaded**; their cards supply every entry.
- **A book** — one segment further. The book, drawn as a **reader**: cover, contents, chapters, the turn. **This is the only point at which a book's own module loads**, and it is the only one that does.

### What that settles, and it is most of what was missing

- **Routing is not a routing table.** The path is the subject chain, so **resolution is a lookup in the catalogue**, and the catalogue is generated. Nothing maps URLs to components by hand.
- **The load boundary is the page**, and it falls out rather than being imposed: a catalogue page needs **cards**, a reader page needs **one book**. That is [R20](#r20--the-whole-library-is-never-loaded-at-once-and-that-is-what-the-card-was-for) satisfied by the shape of the app rather than by discipline.
- **The default book is the app's only real component** ([T3](#the-programme--eight-tracks-so-separate-sessions-can-run-them)). Everything else a visitor sees is a book drawing itself.
- **Parallel work divides along what a visitor meets:** the shell that resolves and loads · the book that draws · the compiler that produces · the content that fills. **Four teams, four nouns**, and each can be described without the others.

### What the picture does NOT yet settle, named rather than glossed

- **Whether a chapter is its own page or an anchor within its book's.**
- **How the shell is served.** A real page per book means static emission; the app today is a browser-routed SPA with one `index.html`. **Both cannot be true unaltered**, and which gives way is [T7](#the-programme--eight-tracks-so-separate-sessions-can-run-them)'s first question.
- **Whether the front door needs anything the convention does not already give it** — a search, a recent shelf, an editorial face. *The convention gives a catalogue; whether that is a good front door is a design question and not a structural one.*

## The shared requirements — where work cannot be split until something is written

*Written 2026-08-14 on Doug's instruction: **"Look for points of uncertainty where the work couldn't be distributed across teams because there's an unspecified shared requirement."** Each entry below is a place two tracks would build things that do not meet.*

| # | the shared requirement | who needs it | state |
|---|---|---|---|
| **S1** | **the folder convention** | T2 authors it · T4 reads it · T7 routes by it | **settled below, on its third revision today** |
| **S2** | **what a card carries** | T3 draws from it · T6 generates it | **specified below** |
| **S3** | **a card's identity** | T7 resolves a path · T6 keys the catalogue · T3 shows a title | **specified below** |
| **S4** | where placed synopses land in a subject's book | T4 places · T3 draws | **settled below** |
| **S5** | the read-versus-consulted predicate | T3 implements · T4's books rely on it | **settled below** |
| **S6** | what the validation runtime *is* | T5 builds · T6 depends | **design owed** |
| **S7** | the default book's anatomy | F builds · the book documents | **closed for v1, 2026-08-14** — it is [`$Book`](../../package/src/book/Book.tsx) as it ships. *Three demos' convergence was evidence and was never a spec; rather than promote it, [Doug cut the question](#dougs-rulings--2026-08-14-verbatim): "assume the library book is book."* **Where a richer reader eventually lives is open, on the second-repository criterion.** |

**And S1 moving three times in one day is itself the finding.** A team starting the corpus this morning would have authored content the compiler rejects tonight. ***No track that depends on a shared requirement may start while that requirement is still moving*** — which is why the corpus, the highest-leverage unstarted work, has correctly not been started.

### The four blockers, resolved 2026-08-14 — and the plan now lives in the book

*Doug: **"Resolve these problems in the best way… get this done so we can work in parallel."** Each is settled below with its reason, and the design itself was written into [The Build's own chapters](../../package/app/src/sections/book/library/the-build/) rather than described here — **that is the compacting instruction obeyed rather than acknowledged.***

**1 — Where order lives. The manifest is committed.** `.vscode/sort-order.json` is **un-ignored by an explicit negation**, so an arrangement a person made by dragging survives into a build nobody ran by hand. *No new file format, no second home, and the tool that writes it keeps working.* The comparator was read from source: **listed entries in their order, unlisted to the end.**

**2 — What supplies an author a cover never named. The mirror gains it; the source never does.** *This was reported as fatal — editing an author's writing is a violation — and the objection dissolves on a distinction: **the mirror is generated code and is not their writing.** The authored file stays exactly as it was left; the generated copy is allowed to be complete.*

**3 — Where the judging runs. Bare Node, no browser — MEASURED, not assumed.** The book suite was run under a node environment: **58 of 62 promises hold**, and the **four that fail are the four that call `render`**. *Constructing is not drawing, which is why judging can happen somewhere the reader never goes.* **That mechanism is no longer owed.**

**4 — What a card hands back for a book not loaded. Nothing, until the shell hands it one.** A generated card carries its path and no book. When a route loads that book, **the shell fills the card's reference in** — so a card becomes readable once its book is present. *This is what a catalogue has always done: it tells you where the volume is, and once you have fetched it the card is standing beside it.*

**And a fifth thing was found while resolving them, which changes how any gate must be written.** **Files beginning with a dot are invisible to pattern matching** — `include: ["src/**/*.ts"]` saw only the undotted file — **but an explicit import finds them and compiles clean.** *So the generated book module is the only door into every cover and synopsis, and **any check that walks by pattern will silently pass over half of every book.***

### The last contract, written — and the figure that carried it found two defects in it

**[S-description] The description is a FLAT list of folders, keyed by path.** Every folder appears once carrying its path, its dot count, whether it is a subject or a book, which folder speaks for it, what it holds, and its files with each role. **The hierarchy is not stored, because the paths already have it** — and a flat list can be written down, compared against yesterday, and read by something not compiled with it. **Order is resolved here and never again. Complaints travel with it rather than stopping it.** *It carries no writing at all: reading looks at names and arrangement, which is what lets a whole library be checked before a line of prose is compiled.*

**And it was wrong twice before it was right, both caught by drawing it rather than describing it.**

1. **Intermediate folders vanished.** Deriving folders from the paths of files never produces a folder that holds only folders — so `.physics` and `.philosophy` and the library root were all missing. **Eight folders were described where there are eleven.** Fixed by walking every ancestor.
2. **Dots alone cannot decide a kind.** A dotted folder that *speaks for its container* is that container's **book**, not a subject — so `..the-library` and both `.subject` folders were classified subjects and then complained of holding nothing. **Position decides the kind; the dots only rank.**

*Both were defects in the contract, not in a test, and they were found before anything was built on it. That is the whole argument for a figure that runs its rule instead of illustrating it.* **Driven: the fixture describes clean at 8 folders and 0 complaints; a deliberately broken tree yields 2 faults in one pass.**

### A README was written into the fixture, and removed

*Doug: **"Why is there a README.md in the library? That isn't a library book… You do understand that this is a documentation system, right? Are the writing semantics of the system not expressive enough for you? I'm pretty sure the library catalogue cover would be the readme as the entry to the library."***

**Correct on every count.** A `README.md` is not a book, is not in the convention, and reaching for one is an admission that the system cannot document itself. **The library's own book is the entry to the library** — so the file was deleted and what it said became a chapter of `..the-library/`, which is where a library explains itself.

*The fixture now holds **19 files and not one markdown**. **The rule that earns: if the answer seems to need a file the convention does not have, the convention is being doubted rather than the file being needed.***

### S8 — how one book names another, settled 2026-08-14 and PROVEN

*Doug's construct, and it does two jobs with one thing: **"import the cover as desired and stick it in… the compiler reads Math as the text and uses the cover as the link. Name the import as desired."***

**Authored — the alias is the display name, the import is the link:**

```tsx
import { Cover as Math } from '../.mathematics/.subject/.cover';
<Subject><Math /></Subject>
```

**Emitted — a card, assigned as a prop:**

```tsx
import { card as math } from '../.mathematics/.subject/card';
<Subject for={math}>Math</Subject>
```

**PROVEN, not assumed.** A ts-morph pass over a two-file fixture read `<Subject><Math/></Subject>` and reported **`display="Math" -> src/mathematics/.cover.tsx`** — the alias as text and the import as target, with two aliases on one cover giving two different names. *That is "a book gets to choose its subject name" holding literally.*

**Why this and not the alternatives.** A *name alone* is ambiguous between two books sharing a title and breaks silently on a retitle. A *typed prop taking a cover* would need `$Author`, `$Subject` and `$Canonical` to accept one, which is a framework change. **And a cover that resolved itself at runtime was considered and refused by Doug on the load boundary** — *"that adds a big import to the page… it drags in the whole book"* — which is exactly what cards exist to prevent. **The card is assigned, and it is assigned as a prop**, which [`$Bookmark` already does today](../../package/tests/book/book.test.tsx) with no framework change at all.

**And the reference is the identity.** [The cover's location is the book's location](#the-four-blockers-resolved-2026-08-14--and-the-plan-now-lives-in-the-book) — so importing a cover *is* naming a book, and the link and the identity are one fact rather than two that can disagree.

**Two notations, and the braced one is preferred.** *Doug: "`<Subject>{Math}</Subject>` — that this is an alternate? Maybe better because the other one is more confusing."* **Both were proven in the same pass**, resolving alias and target identically:

```
<Subject>{Math}        display="Math"   ->   mathematics/.cover.tsx
<Canonical><Math/>     display="Math"   ->   mathematics/.cover.tsx
```

**The braced form says *here is a reference*; the element form looks like it draws a whole cover inside a phrase.** They cost the build the same — one reads a `JsxExpression`, the other a tag name — so the choice is entirely about what a reader thinks is happening. *Recorded as alternates with the braced one preferred; either may be met and both must be read.*

### S9 — where reference-kind validation lives: THE BUILD

*Doug: **"Author and Subject are not identical in what books can be an author or a subject link. But where does that validation come from? Maybe from the build system."***

**The classes are one body; the constraint is on what they may point at.**

| reference | may point only at |
|---|---|
| **author** | a book that **authors itself** — the canonical autobiography |
| **subject** | a book that **catalogues** — one that holds books |
| **canonical** | a book **its own subject holds** — [the reciprocity](#s4--a-synopsis-has-no-characteristic-spot) |

**And only the build can check any of it, for the reason the model already gave: [there is no walk](06-sprint-48--subjects-and-the-library.md#r63-there-is-no-walk--library-is-computed-and-validation-happens-in-place).** Deciding whether a book catalogues means knowing every book at once — precisely what the served page refuses to have and what the build has by definition.

**So both of Doug's statements hold, at different levels.** ***One body, because behaviour is identical. Different constraints, because the build enforces them.*** *That is why [C22](#c22) is a real cleanup rather than a contradiction — a common type loses nothing, because nothing distinguishing ever lived in the class.*

**<a id="c22"></a>C22 — three classes, one body, measured.** Normalised for their names, **`$Author` and `$Subject` are byte-identical**, and `$Canonical` is the same file **minus `valid()`** — so a canonical carrying neither text nor card is valid where an author in that state is not. *Doug: "we probably need a common type."* **Filed, not taken** — the package is untouched this sprint.

**<a id="s9-open"></a>Open, and it belongs to whoever builds the catalogue:** whether the build **stamps its verdict on the card** — *this book catalogues, this book authors itself* — so a later runtime check needs no walk either, or whether the check is build-only and the card stays silent about kind.

### S1 — the folder convention, settled

**Dots mark subjects, and the count is the depth of subjecthood.** *Doug: "I want to have a subject with only books having one dot, but if it becomes a subject of subjects, it might have two dots so they can have one."*

- **`..` is for subjects only.** A **subject over books** wears **one** dot; a **subject over subjects** wears **one more than the deepest subject it holds**.
- Within any folder, **the FOLDER with the highest count is that folder's own book** — *"the folder with the most dots is the current book, which is the subject of all the others"* — and **there must be exactly one holder of that maximum.**
- A **plain folder is a book**. A **plain file is a chapter**. **Among files the count carries nothing** — *corrected by Doug: `..` applies to subjects, and a cover and a synopsis are the same level of dot* — so `.cover.tsx` and `.synopsis.tsx` are **dotted and named**, and nothing else in a book wears a dot.
- **Among folders the word after the dots is a label**; among files the name is what distinguishes the two.
- **A book carries code as a RESOURCE** — `chapter--resource.ext`, [the convention already ours](../../../../.claude/library/bookkeeping/03-on-covers--toc.ts). *This replaced recognition-by-export and removed `.Book` entirely.*

**This is checkable, not merely followed.** The counts must agree with the tree — a two-dot subject holding no one-dot subject is a **named failure**, and so is a folder with no unique maximum. *Room is deliberately left for later designations that will not use dots.*

### S2 — what a card carries, specified

**This is the contract between the generator and every reader of a catalogue**, and it has been prose since [R53](06-sprint-48--subjects-and-the-library.md#r53-the-card-is-a-compilation-defined-by-the-public-build-doug-2026-08-06). Written now because two tracks cannot meet without it.

| field | from | why |
|---|---|---|
| `path` | **the ROUTE**, not the folder chain — see the correction below | the identity |
| `title`, `subtitle` | the cover's title, split at its colon | what a reader is shown |
| `synopsis` | the synopsis chapter's tagline | what a catalogue entry says |
| `chapters` | each chapter's title | the contents, without the book |
| `author` | a **card**, never a name | follows without loading |
| `subject` | a **card** — the parent folder | the way back |
| `library` | **computed**, recursively through `subject` | agreement, checked in place |

*There is no `canonical` row and there never should have been. **A canonical link is a subject's way of naming the book that speaks for it, and a card catalogues nothing** — so the field was wrong before it was also shadowed. [Deleted, with its reason](#s10--a-card-is-a-section-and-the-books-title-is-its-canonical-part).*

**And the shape stays open.** A subtype's derived information must be reachable without the card class knowing it in advance — [R53's own requirement](06-sprint-48--subjects-and-the-library.md#r53-the-card-is-a-compilation-defined-by-the-public-build-doug-2026-08-06), and the reason `$LibraryCard` is an intersection rather than a class.

### S4 — a synopsis has no characteristic spot

*Doug: **"A synopsis shouldn't need a characteristic spot… It needs to be a synopsis for the current book."*** **Position is free; identity is what matters.**

**Nothing in the model reads a position.** A book's own synopsis is [found by pointing home](../../package/src/book/Book.tsx) — `accounts()` asks whether the chapter reads back to this book — and a catalogue entry is found by pointing elsewhere. **So the build must not invent an ordering the model does not consult.**

**Order therefore comes from the arrangement that already exists**: authored chapters in their manifest order, then each catalogued book's synopsis **in the order that book's folder sits in**. The same manifest, one grade up, and no new mechanism.

*Unsettled and recorded as such:* whether being before or after the table of contents is what makes a synopsis parenthetical. **Cataloguing already ruled parentheticality is visibility rather than position**, so this is a design choice about reading and not a structural one.

### S5 — the read-versus-consulted predicate

**A book is consulted when it catalogues anything, and read when it does not.** *Doug: "the view should just figure out on its own whether the book is or isn't a subject catalogue. We don't need a prop."*

**The test is the count that already defines subjecthood** — the parts that read **elsewhere**, which [`$Book.read()`](../../package/src/book/Book.tsx) answers directly. Nothing is declared, nothing is passed, and **the rule that makes a subject a subject is the rule that decides how it draws.**

*One consequence worth stating: a book that gains its first catalogued sibling changes how it draws, with nothing edited. That is the count being load-bearing rather than decorative, and it is the behaviour we want.*

### S2 CORRECTED, TWICE — both found by two sessions building against it

*The card contract above was written from the design and **two of its lines were wrong**. Neither was found by rereading it; both were found by somebody implementing it, which is the argument for dispatching against a contract rather than perfecting one.*

**1 — `canonical` cannot be a field on a card.** Found by **F while building the application**: *"`$Writing` already declares `canonical`, which every card inherits, so the card contract's field of that name cannot be added without shadowing it. Flagged rather than renamed."* **Verified — [`Writing.tsx:164`](../../package/src/writing/Writing.tsx) declares it.** *So the contract asked for something the base class already owns, and the field is dropped rather than renamed until Doug names it.*

**2 — `path` and `route` are two different strings, and the contract called both `path`.** Found by **A and F meaning different things by one word**: A's folder path is `.physics/.subject`; F's card path is `/physics`. *Dots are an authoring mark with no business in a URL, and **a subject's own book IS the subject as far as a reader is concerned**, so it collapses onto its parent rather than appearing beneath it.*

**Resolved by the walk computing both**, so nothing downstream derives a route twice and no two stages disagree about what a path is. **Driven: A's routes now match F's exactly — `/`, `/physics`, `/physics/the-standard-model`, `/philosophy/the-hard-problem` — with neither session having read the other's code.**

*That is the seam working. **Two implementations, one contract, and the contract was what got corrected.***

### S10 — A CARD IS A SECTION, and the book's title is its canonical PART

*Doug, 2026-08-15, and the second half of it is a correction to how this was first written: **"Why does the card have a canonical link? It's not a catalogue. It is a reference for a book. The title of the book can be its canonical part… Think about an index card. Is that a paragraph? Maybe it's a section with a title that is the title of the book."***

***A canonical LINK and a canonical PART are not the same thing, and conflating them is what produced the wrong field.*** **A canonical link is a subject's** — it is how a subject names the book that speaks for it, and it points at another book. **A canonical part is any composition's part zero.** *A card is a reference for one book and catalogues nothing, so **it never had any business holding a link** — and the shadowing F reported was the symptom rather than the cause.*

**So the card contract's `canonical` field is not renamed, deferred or awaiting a word. It is DELETED, and for the better of two reasons:** not because `$Writing` owns the name, but because **a card is not a catalogue.**

**Both halves are right, and the first is forced rather than chosen.**

**A title is paragraph grade** — [`$Title extends $Paragraph`](../../package/src/writing/Title.tsx). **Only a section composes paragraphs.** *So a card that carries a title cannot be a paragraph, because a paragraph composes sentences and a title will not fit inside one.* **A card is a section**, and the code decides it rather than taste.

**And then the canonical needs no field, because a section already has one.** [`$Writing.canonical` is `parts()[0]`](../../package/src/writing/Writing.tsx), and [a section's part zero is its title](../../package/src/writing/Section.tsx). **So the card's canonical IS its title, and the title names the book** — which is exactly the link [F could not add](#s2-corrected-twice--both-found-by-two-sessions-building-against-it) without shadowing the base.

***The collision was the design saying the field was redundant.*** *A card does not need a canonical field; it needs to be the kind of thing that already has one — and the shadowing F reported was the model refusing a duplicate rather than a name clash to route around.*

**It is the same figure one grade down, which is this project's recurring evidence that a construct was carved right:**

| | its parts | its canonical | and that canonical IS |
|---|---|---|---|
| **a book** | chapters | the **cover**, at chapter zero | [a reference to the book](../../package/src/book/Cover.tsx) |
| **a section** | paragraphs | the **title**, at paragraph zero | the heading it stands under |
| **a card** | its fields, as paragraphs | the **title**, at paragraph zero | **a reference to the book** |

**<a id="c3-answered"></a>And this answers [C3](14-cataloguing.md#c3), filed at Cataloguing and open since.** *`$IndexCard` extends `$Writing` and **declares no level at all**, setting only `inline = false`.* **It had no level because nobody had asked what it composes.** Now that the question is answered, the card declares `section` — and its fields become paragraphs, which is what they always were.

**Owed to whoever implements it, and small:** the card is a framework class, so this is a **package change** and the package is untouched this sprint. *Filed with its answer rather than as an open question.*

### A RESOURCE WAS INVENTED AND REMOVED — and it exposed the question it was hiding

*Doug, 2026-08-15: **"Why is [the walk] building `symmetry--figures` — that is not an agreed upon naming convention here… I don't like the double dash, and you didn't include the code as a resource (read what that means in the .claude library) so it's very very very wrong."***

**Read, and the correction is complete.** [On Chapters](../../../../.claude/library/bookkeeping/02-on-chapters.md#resources) says a resource is **a NON-markdown file beside the markdown chapter that documents it** — *"the chapter documents what the resource does, the resource is the code, they are one thing in two languages."* And: ***"A resource without a chapter is an orphan."***

**In a code library a chapter is already code, so the pattern has no second half to occupy.** *`symmetry--figures.tsx` was code beside code, documented by nothing — an orphan wearing a resource's name. I took the filename shape and left behind the only thing that made it a resource.* **Removed from the fixture, from the seam type, from the walk and from its promises.** *The suite still passes at 26 checks; the fixture is 18 files.*

**And the question it was papering over is structural.** *Doug: **"We need to figure out where application code goes. It might be in the package. It might have to be since all workspaces have to depend on it."*** **He is right and it is forced, not preferred.**

[`library/physics/package.json`](../../../physics/package.json) declares **exactly one dependency: `@dna-platform/lib`.** So a book in a subject workspace **cannot import from `.public/app`, from a sibling subject, or from anywhere else.** *Any component a book uses has only one place it can arrive from.* **The demo escapes this only because it lives inside the package's own app** — which is why its `$Equation` and `$Rule` work and prove nothing about content.

**So the choice is narrow and it is owed:** the package ships every component a book may use · or a subject declares further dependencies and the compiler learns to carry them · or a book has no components of its own beyond what the framework gives it. ***Not decided here.*** **The fixture now stands on a framework figure and says so in its prose**, rather than faking a mechanism nobody agreed.

### S11 — WHERE COMPONENT CODE LIVES: the package, and customization is invisible

*Doug, 2026-08-15, answering the question the invented resource had been hiding.*

**1 — Component development lives in the package.** ***"For now, assume that component development should live in the package."*** A subject workspace depends on `@dna-platform/lib` and nothing else, so this is where a component can arrive from — and it is a ruling rather than a workaround.

**2 — What a book uses belongs to its SUBJECT, not to the book.** *"I think we would prefer the code used by a book to be a part of its subject, otherwise it should mostly be writing the view of its own components."* **A per-book component was the wrong grain.** *What varies between books of one subject is how that subject draws; what varies between subjects is the subject.*

**3 — And customization is INVISIBLE, through `$`.** *"Most books can just use a paragraph, and the paragraph gets written somewhere at the subject level, and if dependencies get pulled in with `$`, there can be a lot of invisible customization."*

***A book writes a plain paragraph. The subject decides what a paragraph is.*** **This is the machinery [The Representative](12-the-representative.md) built and nothing new is needed**: a registration on the subject's class resolves through the chain, and every book beneath draws differently **without being subclassed, told, or handed anything.** *A book stays ordinary writing, which is what makes it portable.*

**4 — The application's code goes to the package too**, and it wants designing. *"The package, but we have to think about organizing it. We do want to create something of a component library, but seeing as how apps will want to be unique, we will want there to be something specific. Perhaps we can try to add as much as we can to the package, doing different types of themes and designs."* **That widens what `@dna-platform/lib` is** — from a model to a model plus a component library plus themes — *and it is the thing [F's organisation review](#owed--the-public-applications-organisation-gets-a-serious-review-once-it-works) will actually be deciding.*

**5 — The resource pattern is DEFERRED, not dead.** *"We want to use the resource pattern to associate chapters with parts that perhaps have to be used in certain contexts. We can design much of that later."* **It has a real job waiting** — attaching a chapter to parts required in some context — *and the thing removed this sprint was my misuse of its name, not the idea.*

**6 — AND THE OPERATIVE INSTRUCTION FOR NOW.** ***"We need to design all of that carefully. Be minimal at this stage with the compiler to get things working."*** *So none of 1 through 5 is built here. The walk stays as small as it is, and the component library is designed rather than started.*

### S3 — a card's identity is its path

**The catalogue is keyed by path**, because that is what a route arrives holding. **The title is writing** — it may change without breaking a link, and two books may share one.

**And this does not reintroduce addresses.** A URL is a string before it is anything; turning one into a card is a **boundary operation**, like parsing prose into writing. *Inside the model nothing changes: `author`, `subject` and `canonical` remain cards, and no reference is ever serialised.*

## The compiler, operation by operation

*Written 2026-08-14. Until now "normalize with the TypeScript tools" named an intent and no mechanics, which is why nobody could start [T4](#the-programme--eight-tracks-so-separate-sessions-can-run-them). **Assumptions are marked ⚠ and each says what would settle it** — they are assumptions rather than findings, and the sandbox exists to turn them into findings.*

**Per file.**

1. **Classify by what it exports, not by what it is called.** A module exporting a class that reaches `$Chapter` through its bases is **content**; anything else is **support code** — lifted and compiled, never composed. *This is what makes a figures module legal beside the chapters, and without it the folder convention composes it into the book.* ⚠ *Assumes ts-morph resolves a base class across files; settled by opening two files in the sandbox and asking.*
2. **Re-anchor the imports.** Every relative specifier is rewritten for the file's new home in the mirror; every framework import is normalized to the package's published name. **Nothing semantic is touched.** ⚠ *Assumes ts-morph re-emits `.tsx` with JSX intact and at acceptable cost; settled by rewriting one real chapter.*
3. **Emit to the mirror path.**

**Per book folder.**

4. **Assemble the book module.** Import the cover, the synopsis and each chapter **in the order the manifest gives**, compose them inside `<Book>` with the table of contents inserted after the cover, and export the instance. *This is [`book.tsx`](../../package/app/src/sections/book/library/algebra/book.tsx) — twenty-two lines, every one derivable, which is why writing it by hand was the measurement.*
5. **Supply what the cover left unsaid.** No `<Subject>` → the parent folder's. No `<Author>` → the library's canonical author, recognised structurally. **The edit lands on the emitted cover and never on the authored one.**

**Per subject.**

6. **Generate the subject's book class**, extending its parent subject's. If `.subject/` declares its own, **check that it derives from the parent's and refuse if it does not**.
7. **Place the synopses.** Each catalogued book's synopsis becomes a chapter of the subject's book — *"the build system will put the synopsis in the book."*

**Once, over the whole library.**

8. **Validate by constructing.** [`$Book`'s bond constructor](../../package/src/book/Book.tsx) already throws on a missing cover, a second cover, a missing self-synopsis, a missing or duplicated table of contents, a coverless author and a coverless subject. **The runtime invents no rules — it builds every book and reports what the model refuses.** ⚠ *Assumes a book constructs outside a browser; this is the sprint's central unknown and [U15](#u15) is the probe.*
9. **Read the cards off the live books** and emit the catalogue. Title, subtitle, synopsis and chapter list come from the constructed book, never from parsing its source — **which is why cards come after validation and not before.**
10. **Publish.**

## Publication — a route displays a book

*Corrected 2026-08-14. **An earlier draft of this section had the build emit a page per book**, and Doug refused it: **"I don't think a route becomes a file. I think a route displays a book by default."** The static-emission design was over-built, and it is recorded as a wrong turn rather than quietly replaced.*

**A route displays a book, and that is the whole of it.** The path is the subject chain. The shell strips the deploy base, **looks the path up in the generated catalogue**, dynamic-imports that one book's module, and draws it. Nothing maps URLs to components by hand — **resolution is a catalogue lookup**, which is what a catalogue is for.

**The load boundary still falls out.** A catalogue page needs cards; a reader page needs one book. So [R20](#r20--the-whole-library-is-never-loaded-at-once-and-that-is-what-the-card-was-for) holds by the shape of the app rather than by static emission, and the app stays the React app it already is.

**One deploy fact still has to be met.** GitHub Pages serves files, so a deep link into a browser-routed app resolves to nothing — verified: [one `index.html`](../../package/app/src/main.tsx), no `404.html`, no multi-entry input. **The standard remedy is a fallback copy of the shell**, which is one file in the deploy step rather than a generator. *That is [T7](#the-programme--eight-tracks-so-separate-sessions-can-run-them)'s job and it is small.*

⚠ **Assumed and not yet checked:** that dynamic imports chunk per book rather than collapsing into one bundle. *Settled by building the demo once and looking at `dist`.*

**Still open, and named rather than glossed:** whether a chapter is its own route or a position within its book's.

## Two more conventions, settled 2026-08-14

**Resource files, and they are already ours.** *Doug: "Look at how we do resource files in this library… we'll use a naming convention so a file can be like a chapter. **Writing code is specifying semantics.** No need for a `.Book`."*

A file named `<chapter>--<resource>.<ext>` is **a resource of that chapter** — the convention [`03-on-covers--toc.ts`](../../../../.claude/library/bookkeeping/03-on-covers--toc.ts) has run under for sprints. So a book may carry whatever code it needs beside its chapters, **attached by name to the chapter it serves**, and that code is part of the subject's specification rather than an exception to it.

***This replaces recognition-by-export and it removes `.Book` entirely.*** The compiler need not open a file to know it is not a chapter, and a book that wants its own class simply writes one as a resource. *One idea fewer, and the one that goes was mine.*

**Filenames: lowercase kebab for content, PascalCase for the framework** — and the two are not an inconsistency, they mark two kinds of file. **A framework file is named for its class** (`TableOfContents.tsx`); **a content file is named for its title** (`what-physics-is.tsx` is the chapter *What Physics Is*, not the class inside it). Content casing also matches the folders, matches the routes, and avoids PascalCase rename hazards on the case-insensitive filesystem this repository lives on.

## The split that did not work, and why — kept because the correction is the design

*A first split named a **Team A — The Corpus** and drew three lanes. Doug refused it: **"Content could be added by the team that needs examples to implement the thing they work on. How can they work in parallel? … First, they can't because things aren't built. Second, they can't because content only exists to test features."***

**Both objections land, and a third was mine to notice.** Content is not a deliverable — it exists to exercise a feature, so the team building the feature is the only team that knows what content it needs. There is nothing to author before there is something to author *for*. **And the lanes were dressed up**: `C → D → E → F` was a strict chain, which is one team in four phases rather than four teams.

### How a pipeline parallelises — at its seams, not along its flow

**Every stage is built against a fixture of its input and produces a fixture of its output, and the CONSUMER authors the fixture** — because only the consumer knows what it needs to exercise. **What parallelises the work is the contract at each seam**, never the order data happens to travel in.

*This is why [S2 and S3](#the-shared-requirements--where-work-cannot-be-split-until-something-is-written) mattered more than they looked: two written contracts are two teams unblocked.*

**And one fixture already exists, unnoticed.** **The demo is a set of hand-made book modules with a hand-made catalogue** — which is precisely the input the back half of the pipeline consumes. *So validation and the catalogue can be built **today, against the demo, with no compiler at all**. That is what "a use of the library that helped us get to what we need to build" turns out to mean: it is the fixture.*

## The dispatch — A first, G last, and the letters run in execution order

*Relettered 2026-08-14 on Doug's instruction: **"Dispatch A first and G last… have letter order mirror execution order. That's so much easier."** The earlier meanings of these letters are void.*

**A goes first, alone. B through F go together. G goes last, alone.**

| | builds | builds against | waits on |
|---|---|---|---|
| **A** | **the description** — folders become an account of what is there | trees it writes in order to break them | nothing |
| **B** | **the mirror** — the code, carried to where it is served | a description written by hand | nothing |
| **C** | **the assembly** — folders become books | the demo, whose folders already are a mirror | nothing |
| **D** | **the judging** — books constructed, bad ones refused | the demo, whose books already stand | nothing |
| **E** | **the catalogue** — cards read off living books | the demo, whose books already stand | nothing |
| **F** | **the application** — a book that draws, a path that resolves | the demo, whose catalogue was typed by hand | nothing |
| **G** | **the joining** — one command, and the library on the open web | everything above | **all of them** |

**A is first by choice, not by constraint.** It waits on nothing and could run beside the rest — but **its output is the fixture the other five would otherwise fake**, so landing it first turns five hand-typed inputs into one real artifact. *Nothing is unblocked by waiting; a great deal of pretending is ended by not.*

**B through F are unordered in the strong sense.** Data flows B→C→D→E, **but the building does not**, because each already holds a version of its input good enough to work against. *Two people can write either side of a seam on the same afternoon and meet at the end of it.* **F is the one that comfortably splits in two** — the reader and the shell share only the card contract and live in different folders.

**G cannot be brought forward, and that is its definition rather than its misfortune.** Its work is taking out each hand-made input and putting the real one in. **It should be small. If it is large, an agreement above it was wrong, and its size is the report.**

**What this is written against.** Every row can name a fixture because **the hand-made demo is exactly the shape the second half of the machine consumes** — books composed by a person, a catalogue typed out, links wired by hand. *What was built to find out whether the idea worked turns out to be the input four teams need.*

**And the honest caution about F.** The public application is **a title and an animation**; every reader ever written for this library lives in a demonstration that is never deployed. **F is new work, not configuration** — and it is the only team whose output a person can actually look at, which is an argument for starting it early whatever the letters say.

## F, brainstormed 2026-08-14 — and it was NOT ready to skip to work

*A session was dispatched to F and asked whether the plan was tight enough to go straight to [`/ce-work`](../../../../.claude/library/our-skillset/30-ce-work.md). **The answer was no**, and the brainstorm that followed produced three things that were in no plan — the reader's state, subjects as pages, and **minimal in service of the compiler**, which cuts F down considerably from what the dispatch implied.*

### The reading correction that came first

**The demo is READ, not imported.** *Doug: "**You are meant to read the demo because the demo contains instructions.** Perhaps that needed to have been made clearer. **The demo should contain an account of the work that we are doing. Artful crossing of levels is an important part of this project.**"*

**And the session had earned the correction by grepping the book instead of reading it**, after [the handoff](#what-each-session-should-read--a-starting-point-not-a-boundary) said in as many words that the design lives in the book rather than in this chapter. *Read properly, [The Process](../../package/app/src/sections/book/library/the-build/05-the-process.tsx) hands F its whole mechanism in one sentence and [The Dispatch](../../package/app/src/sections/book/library/the-build/06-the-dispatch.tsx) hands it the seam field by field.*

**The import worry was therefore the wrong question, and the fact under it still stands.** [`package/app`](../../package/app/) has **no `package.json`** and is **not in the [root workspaces](../../../../package.json)** — it is the lib package's own demonstration, run by `npx vite app`. So F could never have linked to it. **It reproduces what the demo specifies; it does not depend on it.**

***The consequence for this sprint: The Build gains its chapter on the showing.*** Every stage that needed exactness got one — [the description](../../package/app/src/sections/book/library/the-build/07-the-description.tsx) exists because A's seam did. **The showing is the only stage a person actually meets and it has none.**

### Doug's rulings — 2026-08-14, verbatim

- **THE READER'S STATE IS SERIALISED, AND COOKIES HOLD IT.** *"I think a chapter's address would be dynamic, though **I think we are likely going to want to serialize the user's whole state in the library so it's there for them when they return.** Perhaps routing can be dynamic if we have a way of lazy loading certain things in the library."* And, on where it lives: *"**The cookies of the page would likely hold it. This is github pages. That is probably the best we can do to give a nice experience.**"* ***This is new scope arriving at the one stage a person meets, and it was in no requirement, no unit and no seam.***

- **EACH SUBJECT IS ITS OWN PAGE — and the condition he put on it is already met.** *"**I think each library subject should be its own page**, but again **only if we find a way to be able to not load all the books of a subject at once.**"* **Answered by the contract rather than by a promise:** [the cataloguing→showing seam](../../package/app/src/sections/book/library/the-build/06-the-dispatch.tsx) already says a catalogue carries title, synopsis, chapter titles and card references **and imports no book at all**. *So a subject page loads its own book module plus metadata, and never the books it catalogues. The condition is satisfied by [S2](#s2--what-a-card-carries-specified) as written.*

- **V1 IS MINIMAL AND IT EXISTS TO SERVE THE COMPILER.** *"**We need to get something minimal and easy to change stood up.** Where do we want to store the top-level book for the app? **It probably needs to be in lib as a starting point for a library, but I am not sure. It needs to be considered.** But **we are writing a compiler. For now, we can just assume the library book is book** and choose something simple to put together to **get a v1 on the compiler**."*

  **And "assume the library book is book" is not a shortcut — it is what the framework already ships.** [`$Book.view()`](../../package/src/book/Book.tsx) draws every non-parenthetical chapter in order, so **lib already holds a default reader**; what `.public/app` adds is the **shell** and a **surface**, neither of which is a book class. ***This closes [S7](#the-shared-requirements--where-work-cannot-be-split-until-something-is-written) for v1*** — the one row in that table that was still marked **open**, and the row F's whole deliverable sat on.

  **Where a richer reader eventually lives is OPEN, and it gets the criterion this branch already uses.** The compiler was kept out of the package on exactly this reasoning — *[extract it when a second repository actually needs it](#where-the-code-lives--every-path-so-a-session-can-start-without-asking)*, a decision made against a real requirement rather than a guessed one. **Same rule, one grade up.**

- **THE TEST LIBRARY IS THE LIBRARY, RESTRICTED BY A FLAG.** *"**Assume `.test-library` is the main library. We will delete it in the future.** And maybe right now **only use folders that start with test** — and then you can **put a flag or whatever in the code that runs the compiler only with those subset of folders.** In that way **the app can run completely but will be restricted to the right books**."*

- **NO DEPLOY. THE TEASER STAYS.** *"**No deploy. Leave the teaser.** What if we **disable the github pages deploy for now**, so that the teaser stays?"* **Forced rather than preferred:** [`deploy-pages.yml`](../../../../.github/workflows/deploy-pages.yml) builds `library/.public/app` **on every push to `main`**, so F's first commit would replace the live teaser with a building site. *The push trigger comes off; turning it back on is [G](#the-dispatch--a-first-g-last-and-the-letters-run-in-execution-order)'s, with the deploy.*

- **IDENTIFIERS ARE INTERNAL NOTES AND ARE NEVER PUT TO HIM.** *"**I don't know the numbers. You need to figure it out by talking to me. Those are your internal notes.**"* **So a requirement set is never presented for approval by identifier.** The interview happens in plain language and the identifiers are derived from it afterwards — they exist so [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) can cite without dropping anything, and for no other reason.

- **A SUBJECT IS OPENED LIKE A BOOK, AND THE PLACE IS KEPT PER SUBJECT.** *"**For each subject, the view for the library would be like opening a book and the app should remember where they left off there.**"* ***This sharpens the cookie ruling rather than repeating it:*** the state is not one position in the library, it is **a place per subject**, held the way a reader keeps a finger in each of several books at once. *And it follows from the shape already agreed — a subject IS a book, so opening one is opening a book, and there is no second reading mechanism to design.*

- **BOOKMARKS, AND THE READER BUILDING THEIR OWN VIEW OF THE LIBRARY.** *"**And maybe we can have bookmark like interactions to help the user configure references to build themselves their own view of the library.**"*

  **The framework already answers this and it should be said before anyone designs a mechanism.** A bookmark **is a reference** — the domain word, not a new one — and [subjecthood is a count](14-cataloguing.md#r16): a thing that catalogues books **is** a subject. **So a reader's bookmarks are a subject of their own**, standing beside ours, built from the same members and drawn by the same rule that decides how any catalogue draws. *A reader configuring references is a reader authoring a catalogue, which is the construct arriving one more level out.*

  **It is recorded and not scoped.** *Not v1, not sized, and no mechanism claimed* — the point of writing it here is that **the shape it wants already exists**, so whenever it is taken up it is a use of the model rather than an addition to it.

### Two seams this found that belong to nobody

**The tsconfig, and B cannot close it.** [`.public/app/tsconfig.json`](../../app/tsconfig.json) carries `include: ["src/**/*.ts", "src/**/*.tsx"]`, and **B emits into `.public/app/src/generated/`** where every cover is `.cover.tsx`. That glob will not see them — *[the dotfile finding](../solutions/14-the-green-that-exercised-nothing.md), compounded this sprint*. **The file is in F's territory and no session edits another's**, so **F closes it** and B builds against the result.

**The Pages fallback was assigned to a letter that no longer exists.** [Publication](#publication--a-route-displays-a-book) sends it to *"T7"*, and **the eight-track programme was voided** by the dispatch the same day. Deep links 404 today — verified: `base: '/inexplicable-phenomena/'`, [one `index.html`](../../package/app/src/main.tsx), no `404.html`. **It is G's, with the deploy**, and it is named here so it stops being nobody's.

## F — the plan · status `implementation-ready`

*Written 2026-08-14, straight out of the brainstorm above. **[WHAT, not HOW](../../../../.claude/library/our-skillset/29-ce-plan.md)** — no signatures, no shell sequences. **Units continue the sprint's sequence at [U22](#u22)** and are [never renumbered](../../../../.claude/library/our-skillset/29-ce-plan.md#the-unit-identifier-law). Every unit names **what runs and when** and **what will be visible**; the two that cannot are marked and refused files and scenarios.*

### What the planning found by RUNNING things — five facts, each measured rather than reasoned

1. **`dist` was two days stale, and `.public/app` compiles against `dist`.** Built **12 Aug**; [`$Book`](../../package/src/book/Book.tsx), `$Bookmark`, `$Chapter`, `index.ts` and sixteen more are newer — the whole [`$$` family rewrite](14-cataloguing.md) landed after it. Since [`.public/app`](../../app/package.json) depends on `@dna-platform/lib`, which resolves to `dist/lib.js`, **F would have built against a model that predates the sprint before last.** *Rebuilt during planning: `dist/lib.js`, `dist/lib.cjs`, `dist/lib.d.ts` created, exit 0.* **F's first act is that build, and it is now known to succeed.**
2. **`.public/app` does not declare `react-router-dom`.** lib names it a **`peerDependency`** for [`$Link`](../../package/src/reference/Link.tsx), and the app's dependencies are lib, chemistry, react, react-dom and styled-components. **It resolves today only because the root workspace hoists it.** *An accidental resolution is not a declared one, and this is the kind of thing that works locally and fails in a fresh install.*
3. **The fixture already imports the published name.** Every one of its nineteen files says `@dna-platform/lib`, never a relative path into the package. **So carrying is close to a plain copy** — the only specifier that moves is a chapter's own `--resource` sibling, which keeps its relative form if the mirror keeps its shape. ***This makes [B](#b--the-mirror) smaller than its brief implies, and B should be told.***
4. **`$Bookmark` ALREADY SHIPS.** [A sentence-grade reference](../../package/src/book/Bookmark.tsx) with `read()`, `valid()` and `then()`, exported from the package index. *So the bookmark idea has its member already — see [U34](#u34), which is why that unit is design owed rather than unimagined.*
5. **The fixture's `gauge-theory` cover names NEITHER author NOR subject**, and [`$Book`'s bond constructor throws on each](../../package/src/book/Book.tsx). **So a hand-written assembly that does not supply them cannot construct at all.** *The fixture's hardest case is load-bearing from the first unit rather than the last, which is the fixture doing its job.*

### The decisions

**<a id="d11"></a>D11 — F HAND-WRITES `generated/` ITSELF, IN PLACE, exactly as the compiler would emit it.** Not a `fixture/` folder beside it. *Because then the swap is a **regeneration** rather than a deletion: B, C and E overwrite the same paths, and **[G](#g--the-joining--not-yet)'s job shrinks to running the thing and deleting nothing**. And every line F writes by hand is the specification those three build to — **the same measurement that produced the cards, one grade up**, which is [the method this branch keeps proving](#said-plainly-for-whoever-is-not-tracking-identifiers).* **Chosen over a throwaway fixture folder**, which would have made G's work a rewrite and thrown away the measurement.

**<a id="d12"></a>D12 — The app declares NO book class.** The reader is [`$Book`](../../package/src/book/Book.tsx) as it ships. *Doug's ruling, and it is not a shortcut: `$Book.view()` already draws every non-parenthetical chapter in order.* **Chosen over promoting the three demo readers' converged anatomy**, which was always [evidence and never a specification](#what-each-session-should-read--a-starting-point-not-a-boundary).

**<a id="d13"></a>D13 — The surface is ONE module and it is deliberately disposable.** Tokens and layout, no per-book aesthetics. *"Something minimal and easy to change."* **This is explicitly NOT [the demo law](#r13--the-book-gets-its-own-aesthetic-world)**, which governs demonstrations; this is the product, and v1 exists to put a target under the compiler. *Stated as a decision so that making it beautiful later is a visible act rather than a drift inside this sprint.*

**<a id="d14"></a>D14 — Resolution is a CATALOGUE LOOKUP, and there is no route table.** The path is the subject chain; the shell strips the deploy base and asks the generated catalogue. **Nothing maps a URL to a component by hand.** *Chosen over a router configuration, which would be a second description of a hierarchy the paths already carry — and [two opinions are one more than a library can afford](../../package/app/src/sections/book/library/the-build/07-the-description.tsx).*

**<a id="d15"></a>D15 — F closes the tsconfig seam AND installs the app's own gate.** `.public/app` has no typecheck script and no driver today. **Both are F's**, because B, C and E emit into F's folder and cannot edit F's config. *The gate enters through the generated module and prints its scope, [never a bare PASS](11-markdown.md) — the pattern [`package/app/typecheck.mjs`](../../package/app/typecheck.mjs) already runs.*

**<a id="d16"></a>D16 — The teaser is PRESERVED, unmounted.** [`app.tsx`](../../app/src/app.tsx) stays on disk; `main.tsx` mounts the shell instead. *Restoring it is one line. Deleting a shipped design to make room for an unfinished one is the move that cannot be undone in a hurry, and [the deploy being off](#the-deploy-is-off-and-that-is-a-decision-rather-than-a-pause) is what makes keeping it cheap.*

**<a id="d17"></a>D17 — F touches neither `library/` nor `package/`.** The corpus is read to be reproduced, never edited; the package is the standing instruction from the day the sprint opened. **F's whole surface is `.public/app/`.**

### The units

*`U22`–`U34`. [U20](#u20) and [U21](#u21) are the book's and are untouched.*

#### <a id="u22"></a>U22 — The workspace stands, and the app boots on something that is not the teaser

**Mechanism:** build `@dna-platform/lib` so `dist` is current; declare `react-router-dom` in the app; mount a shell module from `main.tsx` in place of `App`. **What runs, and when:** at `npx vite`, once.
**Files:** [`.public/app/package.json`](../../app/package.json); [`.public/app/src/main.tsx`](../../app/src/main.tsx); a new `src/shell/`. **[`app.tsx`](../../app/src/app.tsx) is not deleted** ([D16](#d16)).
**Depends on:** nothing. **Realizes:** the ground every unit below stands on.
**Visible end:** the app serves at `localhost`, **0 console errors**, and what is on screen is not *coming soon*. *A hand-authored page could fake this one outright, which is why it is scaffolding and not a demonstration — it is listed because it is where the two measured blockers get discharged.*

#### <a id="u23"></a>U23 — The dotted files are typechecked, and the gate says its scope

**Mechanism:** `include` extended so `generated/`'s `.cover.tsx` and `.synopsis.tsx` are seen, **entered through the generated module rather than matched by a pattern**; a typecheck script for `.public/app` printing **files seen, baselined, unexpected**.
**Files:** [`.public/app/tsconfig.json`](../../app/tsconfig.json); a new typecheck script beside it.
**Depends on:** [U22](#u22). **Realizes:** [the seam that belonged to nobody](#two-seams-this-found-that-belong-to-nobody).
**Visible end:** the gate prints a **file count that includes the dotted files**, and is **watched going red** — remove one cover's import from the book module and the count drops and the gate names it.
***This is the sprint's own compounded lesson being spent rather than re-learned:*** [the green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md), fourth appearance. **B is blocked on this in practice**, because B's output is what it protects.

#### <a id="u24"></a>U24 — The mirror, hand-written

**Mechanism:** the fixture's nineteen files reproduced under `generated/library/` **at the same relative places**, imports untouched — they already name the published package ([finding 3](#what-the-planning-found-by-running-things--five-facts-each-measured-rather-than-reasoned)) — with only each `--resource` sibling's relative specifier moving with it. **What runs, and when:** nothing; this is source.
**Files:** `generated/library/…`. **Depends on:** [U23](#u23). **Realizes:** the carrying seam's *output* side, as the fixture C and D consume.
**Visible end:** the gate's file count **rises by nineteen**, the dotted ones among them, stated as a number.

#### <a id="u25"></a>U25 — The assembly, hand-written — and the cover that names nobody

**Mechanism:** one module per book folder composing **cover, table of contents, synopsis, chapters** in manifest order inside `<Book>`; one per subject for its own book. **`gauge-theory`'s copy gains an author and a subject; [the authored file is not touched](#the-four-blockers-resolved-2026-08-14--and-the-plan-now-lives-in-the-book).** **What runs, and when:** at module load — every book constructs, and [the bond constructor refuses six malformations](../../package/src/book/Book.tsx) as it goes.
**Files:** `generated/library/**/book.tsx`. **Depends on:** [U24](#u24). **Realizes:** the assembling seam's output side, as the fixture D and E consume.
**Visible end:** **every book in the corpus constructs**, and the count is stated. **A hand-authored page cannot fake it** — remove the supplied author from `gauge-theory`'s copy and **the model throws by name**, which is the same refusal the compiler will later have to satisfy.

#### <a id="u26"></a>U26 — The catalogue, hand-written — and it imports no book

**Mechanism:** `generated/cards.tsx`, keyed by path, carrying [the S2 fields](#s2--what-a-card-carries-specified), with `author`, `subject` and `canonical` as **cards** and `library` computed recursively. **It imports no book module at all.** **What runs, and when:** at module load, standing alone.
**Files:** `generated/cards.tsx`. **Depends on:** [U25](#u25). **Realizes:** [R20](#r20--the-whole-library-is-never-loaded-at-once-and-that-is-what-the-card-was-for), and the cataloguing seam's output side as the fixture the shell consumes.
**Visible end:** **the catalogue module's own import list contains no book**, asserted rather than asserted-about; every card's author, subject and canonical resolve **card to card with nothing opened**; and `library` agrees across every card.
***Written after the assembly deliberately***, because [cards are read off constructed books and never parsed from source](../../package/app/src/sections/book/library/the-build/05-the-process.tsx) — the hand-written ones are read the same way, or they are not the specification E builds to.

#### <a id="u27"></a>U27 — The shell resolves a path to one book

**Mechanism:** strip the deploy base, look the path up in the catalogue, **dynamic-import that one book's module**, hand the card its book, draw. A path the catalogue does not hold gets a **named refusal**, not a blank page. **What runs, and when:** on navigation, once per path.
**Files:** `src/shell/`. **Depends on:** [U26](#u26). **Realizes:** [F1 of the flows](#the-key-flows) and [D14](#d14).
**Visible end:** **the network panel shows one book chunk per navigation and not a bundle** — which is [the assumption the plan marked ⚠ and never checked](#publication--a-route-displays-a-book), settled here by looking. And an unknown path names itself in the refusal.

#### <a id="u28"></a>U28 — The book decides for itself whether it is read or consulted

**Mechanism:** [the count that already defines subjecthood](#s5--the-read-versus-consulted-predicate) — `$Book.read()` answers the parts that point elsewhere. **No prop, no flag, nothing declared.** **What runs, and when:** at draw, per book.
**Files:** `src/book/`. **Depends on:** [U27](#u27). **Realizes:** [S5](#s5--the-read-versus-consulted-predicate), and the three depths of [the app pictured](#what-a-visitor-sees-at-three-depths).
**Visible end — AND THIS IS THE ONE A HAND-AUTHORED PAGE CANNOT FAKE:** **give a book a catalogued sibling and it stops drawing as a reader and starts drawing as a catalogue, with nothing edited.** *Add one synopsis that reads elsewhere; the same module, the same surface, a different face. The rule that makes a subject a subject is the rule that decides how it draws, and that is either true in the model or it is typed into a page.*

#### <a id="u29"></a>U29 — The surface

**Mechanism:** one module of tokens and layout ([D13](#d13)) — the front door, a catalogue, a reader. **What runs, and when:** styling only.
**Files:** `src/shell/`'s styled module. **Depends on:** [U28](#u28).
**Visible end:** the three depths legible on a screen, and **the whole look changeable from one file** — which is the requirement, not an aside.

#### <a id="u30"></a>U30 — The driver, and it is watched going red

**Mechanism:** a checkpoint walk over `.public/app` in the shape of [`verify-book.mjs`](../../package/app/verify-book.mjs): front door → a subject → a book → a chapter → back, with **checkpoint accounting** so a mid-walk stall says what it reached.
**Files:** a new driver beside the app. **Depends on:** [U29](#u29). **Realizes:** the gate F has none of today.
**Visible end:** a **checkpoint count and exit 0** — and **three watched failures before its green is trusted**: a book removed from the catalogue, a chapter dropped from an assembly, and the sibling test of [U28](#u28) reversed.
*[The green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md) is filed against this branch four times. A number nobody watched fail is not evidence.*

#### <a id="u31"></a>U31 — Chapter: The Showing

**Mechanism:** a discussion settling what the chapter claims, then the chapter — written into [The Build](../../package/app/src/sections/book/library/the-build/) as the account of this work, **to the ruling and not ahead of it** ([R16](#r16--the-design-is-discussed-as-it-goes-not-written-ahead-of-its-ruling)).
**Files:** a new chapter of The Build; its `book.tsx`; the shelf's entry if the chapter list is read off it. **Depends on:** [U28](#u28). **Realizes:** *"the demo should contain an account of the work that we are doing."*
**Visible end:** the chapter standing in the book, **carrying a figure that runs its own rule** the way [the description's does](../../package/app/src/sections/book/library/the-build/07-the-description.tsx) — the load boundary drawn from the real catalogue rather than described.
***[D10](#the-decisions) is checked hardest here.*** Every ruling above arrived from Doug and **none of them appears in the book as anyone's instruction** — each is written as the shape of the problem the work met.

#### <a id="u32"></a>U32 — The records

**Mechanism:** this chapter gains F's account and its state; [the cover](.cover.md) is updated in the same act with [the tool](../../../../.claude/library/bookkeeping/03-on-covers--toc.ts). **Depends on:** everything.
**Visible end:** every gate stated **with its scope**, and the cover entry matching what happened.

#### <a id="u33"></a>U33 — The reader's place, per subject — SPECIFIED, DEFERRED FROM v1 BY DECISION

**The mechanism is known and is not owed:** a cookie holding **a place per subject** — *"for each subject, the view for the library would be like opening a book and the app should remember where they left off there"* — read on load, written on each move. **A finger in each of several books at once**, not one position in the library.
**Deferred because** it is not what gets a target under the compiler, and [the deploy is off](#the-deploy-is-off-and-that-is-a-decision-rather-than-a-pause) so nobody is returning to anything yet. ***Deferred by decision and not by discovery*** — it gets no files and no scenarios in v1, and it is not design owed.

#### <a id="u34"></a>U34 — Bookmarks, and the reader's own view of the library — DESIGN OWED

**Refused files, scenarios and dependencies**, under [the law](../../../../.claude/library/our-skillset/29-ce-plan.md#a-unit-with-no-mechanism-is-not-a-unit--added-out-of-sprint-48s-failure). What is owed is *what runs, and when* — where a reader's references are held, what makes one, and how a view assembled from them is drawn.
**What is NOT owed, and it is most of the shape:** **[`$Bookmark` already ships](../../package/src/book/Bookmark.tsx)** — a sentence-grade reference with `read()` and `valid()` — and **a thing that catalogues books IS a subject** ([subjecthood is a count](14-cataloguing.md#r16)). *So a reader's bookmarks would be a subject of their own, drawn by the same rule as every other, and taking this up is a **use** of the model rather than an addition to it.*
**What would settle it:** a ruling on where a reader's own subject lives given that [the host serves files and nothing more](#r18--the-build-is-subjective-and-that-is-why-its-output-is-committed).

### Test scenarios

*Each names input, action and outcome. **A scenario that survives becomes a promise**, and a promise is read where it runs.*

**The corpus stands** · *[U24](#u24), [U25](#u25)*
- Every book in the mirror constructs. → *the count, stated*
- **Failure path:** the supplied author removed from `gauge-theory`'s copy → **the bond constructor throws naming the cover**, not a blank render.
- The authored file under `library/.test-library/` is **byte-identical** before and after. → *the mirror is generated code; the source is somebody's writing*

**The catalogue is a catalogue** · *[U26](#u26)*
- `generated/cards.tsx` **imports no book module.** → *asserted on the module, not on intent*
- Every card's `author`, `subject` and `canonical` resolve **card to card**, with no book loaded.
- `library` computed recursively **agrees across every card.**
- A card whose book has not been loaded **hands back nothing and says so**; once the shell hands it one, it reads.

**The shell resolves** · *[U27](#u27)*
- A subject-chain path → the right card → **one** book module fetched. → *one chunk in the network panel*
- A path the catalogue does not hold → **a named refusal**, not a blank page.
- The deploy base is stripped before the lookup. → *the same path resolves under `/inexplicable-phenomena/` and under `/`*

**The book decides — [the unfakeable one](#u28)** · *[U28](#u28)*
- A book with nothing pointing elsewhere draws as a **reader**.
- **The same book, given one catalogued sibling, draws as a catalogue.** Nothing edited, no prop passed.
- A subject page loads its own book module **and no book it catalogues.**

**The gates are honest** · *[U23](#u23), [U30](#u30)*
- The typecheck's file count **includes the dotted files**; an import removed from a book module **drops the count and is named**.
- The driver stalls by name when a book leaves the catalogue, when a chapter leaves an assembly, and when the sibling test is reversed. → *watched red before trusted green*

**The boundary** · *all units*
- `library/` is unchanged. `package/src` is unchanged. **The deploy workflow runs on `workflow_dispatch` only.**

### Risks

1. **THE COMMITTED MIRROR HAS NO VISIBLE SOURCE, and it is [R18](#r18--the-build-is-subjective-and-that-is-why-its-output-is-committed) arriving by accident.** `generated/` is committed; **`library/.test-library/` is gitignored — nineteen files invisible to git.** So the repository would hold output whose input nobody else can see, which is **the definition of a subjective build**, reached without anyone choosing it. ***Flagged for Doug rather than decided:*** either the fixture is committed, or the mirror is the only record of it and that is stated on purpose.
2. **`dist` goes stale again and nothing says so.** It just did, by two days and a whole family rewrite. *Mitigated by [U22](#u22) making the build F's first act; **not** mitigated by anything that runs on its own, and that is worth someone's attention.*
3. **The dotfile trap fires inside F's own gate.** The one place it has already cost this branch a day. *Mitigated by [U23](#u23) coming before the mirror rather than after it, and by the gate being watched going red.*
4. **`react-router-dom` resolves by hoisting and would fail a fresh install.** *Mitigated by [U22](#u22) declaring it — a one-line fix, listed because it is invisible until it is fatal.*
5. **Hand-writing `generated/` drifts from what the compiler would emit.** The whole value of [D11](#d11) is that it does not. *Mitigated by writing it to [the compiler's stated operations](#the-compiler-operation-by-operation) rather than to whatever is convenient, and by B, C and E overwriting the same paths so the drift shows up as a diff rather than as a surprise.*
6. **The surface eats the sprint.** *Mitigated by [D13](#d13) making disposability the requirement, and by [U29](#u29) sitting after everything it would otherwise delay.*
7. **[U31](#u31) written ahead of its discussion.** [R16](#r16--the-design-is-discussed-as-it-goes-not-written-ahead-of-its-ruling), and prose built on a guess is thrown away rather than edited. *Mitigated by U31 depending on [U28](#u28) — there is nothing honest to write about the showing until it shows something.*

### Self-check

**Every ruling from the brainstorm has a home.** The demo read not imported → [D11](#d11) and [U24](#u24)–[U26](#u26) · the reader's state → [U33](#u33) · subjects as pages → [U28](#u28) · minimal for the compiler → [D12](#d12), [D13](#d13) · the test library restricted → [U24](#u24) · no deploy → **done, and in the boundary scenario** · the tsconfig seam → [U23](#u23) · the Pages fallback → **[G](#g--the-joining--not-yet)**, named · the chapter on the showing → [U31](#u31) · bookmarks → [U34](#u34) · where the top-level book lives → **[open, with its criterion](#open--and-none-of-it-blocks-a-session-starting)**. **Eleven of eleven.**

**Every unit names a mechanism and a visible end** — eleven of thirteen. **[U33](#u33) is deferred by decision** with its mechanism stated, and **[U34](#u34) is design owed** and refused files, scenarios and dependencies. *Neither is disguised as buildable work, which is the whole point of [the law](../../../../.claude/library/our-skillset/29-ce-plan.md#a-unit-with-no-mechanism-is-not-a-unit--added-out-of-sprint-48s-failure).*

**Where the plan is thin, stated rather than hidden.** [U29](#u29) is the least specified unit and deliberately so — [D13](#d13) makes "one file, changeable" the requirement and a fuller design would contradict it. **And [U31](#u31) cannot be specified further** until [U28](#u28) has run, because a chapter about the showing written before anything shows is [this sprint's own version of the Sprint 48 failure](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md).

**The one thing this plan does NOT defend:** *"the app runs completely but restricted to the right books"* is satisfied here **by F writing only the test library's mirror by hand** — there is no flag, because there is no compiler to flag. ***The restricting flag is A–E's and is recorded as theirs***, not silently satisfied by scope.

## THE PHASES — the re-cut, 2026-08-15, and the mirror does not survive it

***Doug: "I want you to imagine designing this a bit more like a compiler. Mirror… is that really a durable function? What if we end up moving things around? **We want to think in phases not in strategy.** … We need to dispatch this work into the future."***

**He is right and the mirror is the weakest thing in the plan.** A mirror is an answer to *where does emitted code go* — "keep the shape of the source." **Move anything and the answer changes**, so a stage named after it evaporates. **A phase is named for the representation it produces**, and the mirror produces no representation; it produces a file layout.

**Read that way, three of the seven stages are one phase.** [Carrying, assembling and cataloguing all EMIT](#the-compiler-operation-by-operation) — a module, a composed book, a catalogue. **They differ by artifact, not by phase.**

### The four phases, and the runtime after them

| phase | takes | makes |
|---|---|---|
| **READ** | the folder tree | **a description** — every entry with its role, order resolved, complaints carried. *[A has this.](#a--the-reading--this-session)* |
| **RESOLVE** | the description | **a library** — names become references, and what a cover left unsaid is supplied. ***This phase has no owner today***, and it is where supplying a missing author actually belongs — not in a copy, not in an assembly. |
| **EMIT** | the library | **a program** — modules, catalogue, entry. **Layout is a POLICY of this phase**, so moving things around costs a policy rather than a stage. |
| **CHECK** | the program | **a verdict** — every book opened and asked. |

**And then it runs.** *That is not a phase; it is [the application](#f--where-it-stands--the-library-is-on-screen-driven-and-seen).*

***What this buys for dispatch, which is what it was asked for:*** **phases are sequential; artifacts inside a phase are parallel.** Four people can emit four different artifacts at once without the line pretending to be four lines — and **when a layout changes, no team's brief changes**, because layout stopped being anybody's stage.

### CHECK is construction, and the runtime is PROVEN rather than proposed

***Doug's ruling: "Validation needs to happen, in large part, based on the valid checks. We aren't rewriting that. After assembling the app, is there a way to invent a runtime that loads all the books which is part of the build so we can run valid. Think about it."***

**Yes, and it exists — measured 2026-08-15, not argued.** [`valid.mts`](../../app/valid.mts) opens **every book in the emitted library** in bare Node and asks the model:

> **`valid (no browser): 6/6 books stand, 214 parts constructed and asked.`**

**And it was watched refusing.** With one synopsis removed from a book module: **`5/6 books stand, 204 parts` · `REFUSED /physics/the-standard-model`.**

**Why it works, stated so nobody re-derives it.** **Constructing is not drawing** — the bond constructors run at import and refuse six malformations before `valid()` is ever called, and nothing on that path paints. *This is the 58-of-62 measurement arriving as a working thing rather than as a feasibility case.*

**And it enters through the generated door.** The runtime imports **one module** — the catalogue's book map — and reaches every cover and synopsis through it. ***A pattern would find none of them***, which is why the door is the mechanism and not a convenience.

**So CHECK is a phase, and it is the phase that runs the program.** It invents no rules; it opens the library somewhere the reader never goes and reports what the model refuses, with the file named.

### What this changes, and what must follow

- **[B](#b--the-mirror)'s brief is void as written.** There is no mirror stage. **B's work is an EMIT artifact** — carrying authored modules into the program — and *where* they land is a policy it reads rather than a rule it owns.
- **A RESOLVE phase has no owner.** Supplying the author a cover never named, turning `<Subject>Physics</Subject>` into a card, deciding which book speaks for a subject — **all of it currently sits scattered across three briefs**, and it is one phase.
- **[The Build must be updated](#u31)** — *"remember to update the demo if things change."* [The Process](../../package/app/src/sections/book/library/the-build/05-the-process.tsx) still names seven stages including carrying, and [The Dispatch](../../package/app/src/sections/book/library/the-build/06-the-dispatch.tsx) still lists a mirror seam. **Owed, and named rather than quietly left.**

### The demo brought back in sync — 2026-08-15

***Doug: "We need to bring the demo back in sync because we are going to continue on from the demo… without sacrificing and even improving its unique aesthetic and the interesting level crossing role it plays."***

**[The Process](../../package/app/src/sections/book/library/the-build/05-the-process.tsx) is four phases now**, and the chapter says why in its own second paragraph: *"An earlier version of it had seven entries, and three of them turned out to be one thing wearing three coats."* **Carrying is gone.** The stale `owed` on reading is cleared, because [the description](../../package/app/src/sections/book/library/the-build/07-the-description.tsx) delivered it.

**[The Dispatch](../../package/app/src/sections/book/library/the-build/06-the-dispatch.tsx) re-cut onto phases**, and it now names **two kinds of parallel** that the old arrangement confused: *"Phases are sequential… but the ARTIFACTS a phase produces are independent, and emitting produces three."* **That is the durability Doug asked for** — a change of mind about layout costs a policy and not a team.

**[The Library](../../package/app/src/sections/book/library/the-build/09-the-library.tsx) is new — the chapter for RESOLVE**, the phase with no owner, named for what it produces the way The Description is. **Its figure runs the resolution** rather than illustrating it, and it does something better than look complete: ***it reports the corpus's own gap.*** With no book in the fixture that is its own author, the verdict reads *"every author it supplies stands for nobody — a corpus that never leaves the author unsaid never tests the rule that fills it."* **A finding stated by the figure, in the book, computed.**

**AND THE BOOK'S TYPOGRAPHY WAS BROKEN THE WHOLE TIME.** A section arrives from the framework as **one run of text** — no heading element, no paragraph element — so nine chapters rendered as a wall with the title running into the first sentence: *"The Library Reading produces a description…"*. **Fixed with two properties and no framework change:** `white-space: pre-wrap` restores the breaks the author wrote, and `::first-line` sets the title *the way a book sets an opening line rather than the way a document sets a heading* — because there is nothing to hang a heading on. *A title long enough to wrap would take it on its first visual line only; the limit is written into the stylesheet rather than discovered later.*

**One warm mark on a cool page.** The blueprint is cyan on navy, so a single warm colour can mean something instead of decorating — and it is spent on exactly one distinction: **what a person wrote against what the machine put there.** *Roles now take their branch's colour rather than having one threaded to them, so a role can never disagree with the line it belongs to.*

**THE BUILD IS DRIVEN AT LAST — [U14](#u14) discharged, owed since Cataloguing.** `verify-book` gained **eight checkpoints of its own, 51 → 61**, walking the book and asserting the computed answers: the refusal computing itself, *8 folders and no complaints*, the supplied marks, *three of six drawn as catalogues*. **And the loose assertion was tightened** — `spines.length >= 3` became `=== 4`, which is the reason U14 existed rather than a formality.

***And the driver taught its own lesson in the process:*** matching a chapter by its TITLE lands one chapter early, **because the turn buttons carry the neighbouring chapters' titles.** Every check after it then reads the wrong page and fails for the wrong reason. *Matched on body text instead, and the reason is written where the helper is.*

**TERRITORY HAD NO ENTRY FOR EITHER APP.** [The map](../../../../.claude/library/..teamsmanship/05-territory.md) gave Phillip and Gabby the Lab and said nothing about the demo or the public app — **so the book three sessions were editing belonged to nobody but the fallback owner.** Both are now named, with the distinction that matters written down: **the demo follows the demo law and the public app deliberately does not.**

## What F found for other tracks — reported rather than fixed

**1 — `$Book.then()` MAKES A BOOK UN-AWAITABLE, and every phase that loads one meets it.** `$Book` declares `then()` for reference paths, so `Promise<$Book>` is a thenable collision: **TypeScript refuses it (`TS1058`)** and at runtime a promise resolving to a book would call `then()` and never settle. *F hands back a holder instead. **This is the reference API and the language's own protocol colliding on one word**, the same shape as [the `at` collision](09-the-subject.md) already filed here — and it is the framework's to answer, not F's.*

**2 — A RESOURCE IS REACHED BY ITS FOLDER, NEVER BY THE IMPORT GRAPH.** Entering through the generated module reaches every chapter, cover and synopsis — **but a chapter need not import the code beside it.** The corpus stopped importing `symmetry--figures.tsx` mid-run and the file went unreachable; **F's scope floor caught it, 33 files to 32.** *So EMIT must add resources **by computed path**, and this is [A's own rule](#a--the-reading--this-session) arriving from the other end.*

**3 — THE CORPUS EXERCISES NO AUTHOR BOOK.** Every cover names `The Team`, and **there is no book called The Team in the fixture** — so the author resolves to no card, and **[R6](#r6--what-the-build-supplies-each-with-its-rule-and-its-override)'s structural author rule has nothing to run against.** *The name renders as writing, which is valid; but the default that was supposed to be the interesting case is untested. **The corpus needs a book that is its own author**, the way [The Team closed the loop](08-the-author.md) in the demo.*

## The programme — eight tracks, so separate sessions can run them

*Compacted at compounding, and **superseded rather than spent**. Eight lettered tracks with stated interfaces stood here; they were replaced the same day by [the dispatch above](#the-dispatch--a-first-g-last-and-the-letters-run-in-execution-order), whose letters run in execution order. **The heading survives because the record links to it 37 times**; the meanings of the old letters are void, and any T-reference below should be read as pointing at the dispatch.*

## The units

*Order is dependency order. `U1`–`U20`, [never renumbered](../../../../.claude/library/our-skillset/29-ce-plan.md#the-unit-identifier-law); a deletion leaves a gap.*

### <a id="u1"></a>U1 — The fifth book, wired empty

**Mechanism:** a book folder carrying only a cover and a synopsis, composed in `<Book>` the way the other four are; then a card in `libraryCatalogue`, an author link resolving to The Team, a subject link resolving to The Shelf, its synopsis standing as a chapter of The Shelf, and its entry given the card. **What runs, and when:** at module load, exactly as the existing four do — nothing new executes.
**Files:** a new book folder under the demo library; `the-shelf/book.tsx`; `the-team/card.tsx`; the shelf's contents (the spine ink map is keyed by title and will not know a fifth name).
**Depends on:** nothing. **Realizes:** [R1](#r1--the-build-is-a-book-in-the-demo-library-and-a-real-one).
**Visible end:** **five spines on the shelf.** The fifth follows into a book; its byline reads *The Team* and follows there; the back arrow returns. **A hand-authored page cannot fake it** — the fifth entry is derived from the shelf's own chapters, so it is either in the model or it is not.

### <a id="u2"></a>U2 — The book's aesthetic world

**Mechanism:** a styled module of its own, in the idiom of the other four but sharing none of their surfaces — the demo law is range, never a shared template. **What runs, and when:** styling only; nothing computes.
**Files:** a new styled module beside the existing four; the book's own view.
**Depends on:** [U1](#u1). **Realizes:** [R13](#r13--the-book-gets-its-own-aesthetic-world), and it serves [R15](#r15--the-book-is-the-exemplar-of-ixp-documentation-not-only-its-specification).
**Visible end:** the book open on screen, sharing no styling with the algebra, the manifold, the shelf or The Team.
**Ordered second deliberately:** chapters written into an undesigned surface get rewritten when the surface arrives.

### <a id="u3"></a>U3 — The figure kinds this book needs

**Mechanism:** figure subclasses declared by the book, each overriding `drawn()` and nothing else — at minimum **a diagram that draws from the model** (the shape [`$Circuit`](../../package/app/src/sections/book/library/the-team/figures.tsx) already proves) and **a listing that shows real source** read with `?raw`. **What runs, and when:** at render, inside the book's own view.
**Files:** the book's figures module; its styled module.
**Depends on:** [U2](#u2). **Realizes:** [R15](#r15--the-book-is-the-exemplar-of-ixp-documentation-not-only-its-specification).
**Visible end:** a diagram on the page whose content came from the library rather than from a string, and a listing showing a real file.
**Named risk, carried into [U18](#u18) if unresolved:** *code samples styled well* may want syntax highlighting, which lives today in the Page's markdown port and not in the book layer. **A plain listing is the honest fallback and it is not a failure** — pulling the port into books is a second sprint's work.

### <a id="u4"></a>U4 — Chapter: a folder is a book — **DISCUSSION DONE 2026-08-13, and this is what it settled**

**The convention, in five rows.** Dot count and file-versus-folder decide the role; nothing is declared and nothing is looked up.

| form | what it is | how many |
|---|---|---|
| `..name.tsx` | the book's **cover** — its reference to itself | at most one |
| `.name.tsx` | the book's **synopsis** — its account of itself | at most one |
| `.name/` | the **subject's own book** — by convention `.subject` | at most one |
| `name.tsx` | a **chapter** | many |
| `name/` | a **book this subject catalogues** | many |

**A folder of files is a book. A folder of folders is a subject.** No mixed case, because the subject's own book is a folder like every other book — **and that is what makes it right**: under the rejected alternative, promoting a book to a subject meant moving every chapter file into a new sub-folder, which is [the same O(n) restructuring cost that killed numbering](#dougs-rulings--2026-08-13-verbatim), one level up. Here you add a sibling and touch nothing.

**And the dot means one thing everywhere: the reflexive.** What points home wears a dot; what points elsewhere does not. *That is the distinction the model already uses to compute subjecthood — [a catalogue reads the parts that point elsewhere](14-cataloguing.md#open-at-plan-time-and-how-each-closed) — so the filesystem and the model are saying the same thing in two notations.*

**Ordering is not in the name.** Numbers are refused for their renaming cost; order lives in the [drag-and-drop manifest](#u20), whose comparator was read from source — **listed entries first in their order, unlisted to the end.**

**Mechanism:** the settled convention above, written as the chapter. **Answerable when done:** given any folder, a reader classifies it — book, subject, or neither — without asking. **What runs, and when:** nothing; this is design, and the chapter is the artifact.
**Files:** one chapter of the book.
**Depends on:** [U2](#u2). **Realizes:** [R3](#r3--the-folder-convention-stated-so-any-folder-can-be-classified-without-asking).
**Visible end:** the chapter standing in the book, carrying **a diagram of a folder tree with each node labelled by what it is** — which is a claim a reader can test against the tree beside it.

### <a id="u5"></a>U5 — Chapter: the canonical hierarchy, and the collision settled

**Mechanism:** a discussion settling which side of the reciprocal pair is inferred from position and which is declared, then the chapter. **Answerable when done:** for a book in a folder, which subject is canonical, how a non-canonical subject indexes it, who may override, and what reciprocity means when one side is not written down.
**Files:** one chapter.
**Depends on:** [U4](#u4). **Realizes:** [R4](#r4--the-canonical-hierarchy-and-the-collision-it-creates-settled).
**Visible end:** the chapter, with a diagram showing one book reached by a canonical subject **and** an explicit marker from elsewhere — the two paths distinguishable on sight.
**This is the unit most likely to halt the build later if it is written softly.**

### <a id="u6"></a>U6 — Chapter: what the author writes

**Mechanism:** a discussion confirming the file forms, then the chapter. **Answerable when done:** a person creates a valid book from this chapter alone.
**Files:** one chapter. **Depends on:** [U5](#u5). **Realizes:** [R5](#r5--what-the-author-writes-specified-tightly-enough-to-work-from).
**Visible end:** the chapter, carrying **a listing of a real cover file from this demo** — so the example is a file that exists rather than one invented for the page.

### <a id="u7"></a>U7 — Chapter: what the build supplies

**Mechanism:** the list is **read off [U1](#u1)'s hand-wiring**, not imagined — every line written by hand there is an artifact named here, with the rule that produces it and the declaration that beats it. Then a discussion, then the chapter.
**Files:** one chapter. **Depends on:** [U1](#u1), [U6](#u6). **Realizes:** [R6](#r6--what-the-build-supplies-each-with-its-rule-and-its-override).
**Visible end:** the chapter, and **a count stated on the page**: how many hand-written lines the fifth book cost, each mapped to a rule. *That number is the sprint's hardest evidence, because it was measured rather than asserted.*

### <a id="u8"></a>U8 — Chapter: the environment

**Mechanism:** a discussion settling where the default UI lives, how a subject customizes it, and what a chapter may ask for; then the chapter, written against whatever [U15](#u15) actually found.
**Files:** one chapter. **Depends on:** [U7](#u7), and reads [U15](#u15). **Realizes:** [R7](#r7--the-environment-and-where-it-is-written).
**Visible end:** the chapter, with a diagram of the class chain showing a registration made high and resolved low.
**If [U15](#u15) is cut**, this chapter states the mechanism as **cited and not driven**, and the citation goes to [U13](#u13). It does not quietly claim more than was proved.

### <a id="u9"></a>U9 — Chapter: validation

**Mechanism:** a discussion settling what the separate runtime instantiates, what it asks, what makes it fail, and what a failure message must contain; then the chapter.
**Files:** one chapter. **Depends on:** [U8](#u8). **Realizes:** [R8](#r8--validation-in-a-runtime-that-is-not-the-served-app).
**Visible end:** the chapter, showing **a specimen failure message** — a real filename, a real fix — because chapter zero's own risk is that a compiler which fails uselessly gets bypassed.

### <a id="u10"></a>U10 — Chapter: the cards

**Mechanism:** measure what the card actually carries today against [R53](06-sprint-48--subjects-and-the-library.md#r53-the-card-is-a-compilation-defined-by-the-public-build-doug-2026-08-06)'s mapping, settle the difference in discussion, then the chapter.
**Files:** one chapter. **Depends on:** [U7](#u7). **Realizes:** [R9](#r9--the-cards-read-off-validated-books).
**Visible end:** the chapter, carrying **The Build's own card printing its own fields** — the [`$Slipped`](../../package/app/src/sections/book/library/the-team/figures.tsx) shape, showing this book's real card rather than an example one.

### <a id="u11"></a>U11 — Chapter: the fixture

**Mechanism:** specify the test subject — its folders, its two books, which takes every default and which overrides, and the commands that would run it. **Nothing is created** ([D5](#the-decisions)).
**Files:** one chapter. **Depends on:** [U6](#u6), [U7](#u7). **Realizes:** [R10](#r10--the-fixture-and-how-the-system-is-run-locally).
**Visible end:** the chapter, with the fixture's tree drawn as a diagram — the same figure kind [U4](#u4) introduces, reused, which is itself evidence the figure was carved right.

### <a id="u12"></a>U12 — Chapter: the pipeline

**Mechanism:** written **last**, once every stage is known ([D3](#the-decisions)). Six stages, each with what executes, when, reading what, writing what. A stage that cannot answer goes to [U13](#u13) **by name**.
**Files:** one chapter. **Depends on:** [U5](#u5)–[U11](#u11). **Realizes:** [R2](#r2--the-pipeline-chapter-names-six-stages-each-with-what-runs-and-when).
**Visible end:** the chapter, and **the count stated on the page: how many of six stages are answered and how many are owed.** That is [AE4](#acceptance-examples), and it is the number the review will ask for first.

### <a id="u13"></a>U13 — Chapter: what is not settled

**Mechanism:** every open question gathered from the units above, each with **what would settle it** — a probe, a ruling, or a reading. Written after [U12](#u12), because the pipeline is what exposes the gaps.
**Files:** one chapter. **Depends on:** everything. **Realizes:** [R11](#r11--what-is-not-settled-with-what-would-settle-each).
**Visible end:** the chapter. **A design document that smooths its gaps hands the next sprint units with no mechanism**, which is the failure this whole workflow exists to stop.

### <a id="u14"></a>U14 — The driver gains the fifth entry

**Mechanism:** `verify-book.mjs` gains checkpoints for the fifth spine, the follow, the byline and the return. **Watched going red before its green is trusted.**
**Files:** the book driver. **Depends on:** [U1](#u1). **Realizes:** [AE1](#acceptance-examples), [AE6](#acceptance-examples).
**Visible end:** a checkpoint count above 51, and a named stall when the fifth book is removed.
*This also discharges [U15 of Cataloguing](14-cataloguing.md#not-done-and-named-rather-than-omitted) — the drivers gained no checkpoints for the Shelf's new entries — which has been owed for a sprint.*

### <a id="u15"></a>U15 — The inheritance probe — PROPOSED, and Doug's to cut

**Mechanism:** one promise in the lib suite asking whether a registration made on a base chemical class is resolved by an instance of a subclass. **What runs, and when:** in `vitest`, once. **It builds nothing** and touches no framework source.
**Files:** one test file. **Depends on:** nothing. **Realizes:** the evidence [R7](#r7--the-environment-and-where-it-is-written) rests on.
**Visible end:** a stated result — inherits, or does not — replacing a citation with a fact.
**Why it is proposed and not assumed:** [D1](#the-decisions) is a hard boundary and this is the only code beside the book. **[The Representative's record](12-the-representative.md) claims class inheritance is in; nobody has driven it**, and [U8](#u8) is written differently depending on the answer.

### <a id="u16"></a>U16 — The pointer chapter, and chapter zero

**Mechanism:** one compact chapter in [Designing Inexplicable Phenomena](../designing-inexplicable-phenomena/.cover.md) saying what The Build is and linking to it — **a pointer, never a copy**; its cover updated in the same act with [the tool](../../../../.claude/library/bookkeeping/03-on-covers--toc.ts). Chapter zero's stale Sprint 50 and Sprint D sections absorbed, and [R14](#r14--keeping-it-up-to-date-is-part-of-the-plan)'s standing commitment written into its standing rules.
**Files:** the branch book's new chapter and its cover; [chapter zero](00-planning.md).
**Depends on:** [U12](#u12). **Realizes:** [R12](#r12--one-home-and-one-pointer), [R14](#r14--keeping-it-up-to-date-is-part-of-the-plan).
**Visible end:** a reader of the branch library finds the design without running the app, in under a paragraph.

### <a id="u17"></a>U17 — The records

**Mechanism:** this chapter gains its account and its state; the cover is updated in the same act.
**Files:** this chapter; the [projection cover](.cover.md). **Depends on:** everything.
**Visible end:** the cover entry matching what happened, and every gate stated **with its scope**.

### <a id="u18"></a>U18 — Cleanups, taken only if free

**Mechanism:** the dead `const transform` in [`08-the-card-in-code.tsx`](../../package/app/src/sections/book/library/the-team/08-the-card-in-code.tsx) — a template literal declared and never used, describing a type that no longer compiles. **Deleted or made live**, decided in [U10](#u10)'s discussion since the chapter's prose depends on which.
**Files:** that chapter of The Team. **Depends on:** [U10](#u10).
**Visible end:** the file carrying no unused declaration.
*Nothing else is taken. The four cleanups owed from Cataloguing are not this sprint's.*

### <a id="u19"></a>U19 — The book's account of itself

**Mechanism:** the synopsis written for real — replacing [U1](#u1)'s scaffolding — saying what the book is and **why it exists in the terms that make it a fixed point**: a demonstration that is also the plan for the machine that will produce demonstrations like it, held in a library whose purpose is accomplishables that organize other projects' work. Written **last**, when the book can be described honestly rather than aspirationally.
**Files:** the book's cover and synopsis. **Depends on:** [U12](#u12), [U13](#u13). **Realizes:** [R17](#r17--the-book-says-why-it-exists-and-the-reason-is-a-fixed-point).
**Visible end:** the synopsis standing **twice** — in the book, and as The Shelf's entry for it — one account, two placements, so a reader at the shelf meets the claim before opening the book.
***[D10](#the-decisions) is checked here hardest.*** The temptation to write *"Doug asked for…"* is greatest in the chapter explaining why the book exists, and that sentence must instead say what the work found.

### <a id="u21"></a>U21 — Chapter: publication, and why the library is never loaded at once

**Mechanism:** a discussion settling the load boundary, then the chapter. **Answerable when done:** where a route becomes a file, why a book is a page, what the generated catalogue may import (**nothing**), and what happens when someone follows a card whose book is not loaded.
**Files:** one chapter. **Depends on:** [U10](#u10). **Realizes:** [R19](#r19--publication-the-output-mirrors-the-library-and-a-book-is-a-page), [R20](#r20--the-whole-library-is-never-loaded-at-once-and-that-is-what-the-card-was-for).
**Visible end:** the chapter, drawing **the two load boundaries side by side** — everything at build inside the validation runtime, one page at serve — with the route shown as the path it becomes.
***This chapter carries a design owed rather than hiding it***: what `of` means for an unloaded book is not settled, and the chapter says so in the same voice it says everything else.

### <a id="u20"></a>U20 — Chapter: the subjective build

**Mechanism:** a discussion settling what makes a build subjective, then the chapter. **Answerable when done:** what counts as a subjective input, why a subjective build's output must be **stored rather than derived**, and **where the ordering manifest lives** given that `.vscode/` is not in this repository.
**Files:** one chapter. **Depends on:** [U9](#u9). **Realizes:** [R18](#r18--the-build-is-subjective-and-that-is-why-its-output-is-committed).
**Visible end:** the chapter, drawing **the two input sets side by side** — what the repository holds and what only a person holds — with the committed output shown as what bridges them.
*This is the chapter most likely to teach something the rest of the project needs, because subjective-versus-objective is the framework's own distinction arriving one level up.*

## Test scenarios

*Each names input, action and expected outcome, and cites the acceptance example it covers. **A scenario that survives becomes a promise**, and a promise is read where it runs.*

**The book participates in the library — [AE1](#acceptance-examples), [AE2](#acceptance-examples)** · *[U1](#u1)*

- The catalogue holds five cards; asking for The Build's by name returns one. → *its card reads to the book*
- The Build's card `author` reads to The Team's card. → *one destination, unchanged by a fifth book arriving*
- The Build's card `subject` reads to The Shelf's card, and its computed `library` agrees with the other four. → *[R61](06-sprint-48--subjects-and-the-library.md)'s agreement rule surviving a new member*
- The shelf's contents derives **five** entries from its own chapters, not four. → *the row is derived, never typed*
- The Build's synopsis standing in The Shelf is **the same account** the book renders, one class and two instances.
- The Build's card carries title, synopsis and chapter titles **derived from the book**; changing a chapter title changes the card.

**The book is a valid book** · *[U1](#u1), [U4](#u4)–[U13](#u13)*

- Every chapter validates; the book validates; the cover carries a title and the synopsis is found.
- **Failure path:** a chapter with an empty title does not validate, and the reason names the chapter.

**The environment — [AE4](#acceptance-examples)** · *[U15](#u15)*

- A registration made on a base chemical class, asked for by an instance of a subclass → resolved, or not. **Either result is the deliverable**; the promise asserts what was found, not what was hoped.

**The driver — [AE6](#acceptance-examples)** · *[U14](#u14)*

- Five spines present; the fifth followable; its byline reads The Team; the back arrow returns to the shelf.
- **Watched going red:** the fifth book removed → a named stall at its checkpoint, not a silent pass.

**The boundary — [AE8](#acceptance-examples), as amended by [D5](#the-decisions)** · *all units*

- `library/` is unchanged. No build script exists anywhere in the repo. The deploy workflow is byte-identical.

**The design answered its questions — [AE3](#acceptance-examples), [AE4](#acceptance-examples)** · *[U12](#u12), [U13](#u13)*

- Six of six stages accounted for — each answered *what runs and when*, or named in *What Is Not Settled* with what would settle it. **Stated as a number.**
- A person handed *What the Author Writes* alone creates a conforming folder without asking a question.

## Risks

1. **A chapter written softly to avoid a hard question.** The likeliest failure, and it looks exactly like progress. *Mitigated by [U13](#u13) existing and by [AE4](#acceptance-examples) being a count — an unanswered stage must appear somewhere, so vagueness has nowhere to hide.*
2. **Drift across [D1](#the-decisions) — building "just the first stage."** *Mitigated by the boundary being a decision and a test scenario, and by [U15](#u15) being surfaced rather than slipped in.*
3. **The discussion gates stall the sprint.** [R16](#r16--the-design-is-discussed-as-it-goes-not-written-ahead-of-its-ruling) makes every chapter wait on a ruling. *Mitigated by [U1](#u1), [U2](#u2), [U3](#u3) and [U14](#u14) needing no ruling at all — there is always unblocked work — and by chapters after [U5](#u5) being largely independent of each other.*
4. **[U5](#u5) settled weakly.** The canonical collision is the one thing that stops a compiler mid-flight. *Mitigated by it being scheduled early and given its own discussion rather than folded into [U4](#u4).*
5. **"Styled well" pulls the markdown port into the book layer.** A whole second sprint wearing a nice-to-have. *Mitigated by [U3](#u3) naming a plain listing as the honest fallback in advance, so the fallback is a decision rather than a defeat.*
6. **The shelf's spine styling is keyed by title.** A fifth name it does not know falls to a default ink and may look wrong beside four deliberate ones. *Small, known, and [U1](#u1)'s files include it.*
7. **The book's prose ages into a lie once the build exists.** *Mitigated by [R14](#r14--keeping-it-up-to-date-is-part-of-the-plan), which is why it is a requirement and not a good intention.*
8. **A fifth book perturbs the four demonstrations already signed off.** *Mitigated by both drivers running before and after [U1](#u1), and by the baseline above being a delta rather than an absolute.*

## Self-check — run before work starts

**Every requirement has a unit or a track.** R1→[U1](#u1) · R2→[U12](#u12) · R3→[U4](#u4) · R4→[U5](#u5) · R5→[U6](#u6) · R6→[U7](#u7) · R7→[U8](#u8) · R8→[U9](#u9) · R9→[U10](#u10) · R10→[U11](#u11) · R11→[U13](#u13) · R12→[U16](#u16) · R13→[U2](#u2) · R14→[U16](#u16) · R15→[U3](#u3) and [U2](#u2) · R16→every chapter unit's mechanism · R17→[U19](#u19) · R18→[U20](#u20) · **R19→[U21](#u21) and T7** · **R20→[U21](#u21) and T6**. **Twenty of twenty.**

*R19 and R20 describe the build, which [D1](#the-decisions) forbids this sprint — so each gets **a chapter here** ([U21](#u21)) and **a track later**, and neither gets build files now. That is the split working rather than an exception to it.*

**Every decision governs something.** D1 and D5 govern the boundary scenario · D2 governs [U1](#u1)'s position in the order · D3 governs [U12](#u12)'s · D4 is stated because it reverses a standing decision · D6 governs [U15](#u15) · D7 governs [U3](#u3) · D8 governs every name · D9 is the cut line · **D10 governs [U4](#u4)–[U13](#u13) and [U19](#u19) without exception.**

**Every unit names a mechanism and a visible end.** Nineteen of nineteen. **None is marked design owed** — and that is a claim worth challenging, so here is why: the chapter units' mechanism is *a discussion producing a ruling, then prose written to it*, and their visible end is *the chapter on the page carrying a figure a reader can test*. **That is a real mechanism because the design is the deliverable**, which is the one situation where a design session is work rather than a substitute for it.

**Every acceptance example has a scenario.** AE1, AE2 → the participation scenarios · AE3, AE4 → the design scenarios · AE5 → [U2](#u2)'s visible end · AE6 → the driver · AE7 → [U16](#u16) · AE8 → the boundary scenario, **as amended by [D5](#the-decisions)**.

**Where the plan is thin, stated rather than hidden:** [U8](#u8) is the least specified unit because it depends on [U15](#u15)'s result, and it says what it does in both cases. [U3](#u3)'s highlighting question has a named fallback rather than an answer. **Neither is design owed; both are decisions deferred to the moment they can be made with the code in front of us**, which is [ce-work's own altitude](../../../../.claude/library/our-skillset/30-ce-work.md).

---

# Where things stand

*One state, written 2026-08-13 at the plan's close. Everything above is the record; this is the present.*

## → NEXT: `/ce-work` on this chapter, taking **B, C, D or E** — one team per session

**Four sessions can be opened right now and none blocks another.** Each owns one module under `.public/build/`, each has its input fixture in hand, and each is briefed below. **A and F are done** — [the state is one section down](#the-state-once--2026-08-15-two-sessions-one-state).

**If only one session is opened, make it B — the mirror**, because everything after it consumes what it produces and it is the only one of the four with no upstream at all.

***Two things to do before writing code, in this order:***

1. **Compact this chapter.** It is 29,000 words and compaction was deferred because two sessions were editing it at once. **It is now safe and it is the first job.**
2. **Take the corpus seriously as shared ground.** `library/.test-library/` has **no owner rule** while every build module has one — and two sessions editing it in one hour is how the last defect was found. *Say who holds it before touching it.*

## The six sessions — one is running, five can be opened

**Every session opens by reading this section and nothing else first.** Each block below is that session's whole brief: the command, what it owns, what it builds against, what "done" looks like, and what it may assume.

### How many, and when — the honest answer

| now | what to open | why |
|---|---|---|
| **immediately** | **F**, at [`/ce-plan`](../../../../.claude/library/our-skillset/29-ce-plan.md) | it touches only `.public/app/` and needs nothing from anybody — **but it was brainstormed 2026-08-14 and does not go straight to work**, because [three things arrived that were in no plan](#f-brainstormed-2026-08-14--and-it-was-not-ready-to-skip-to-work) |
| **once A has laid the workspace** *(its first act, minutes)* | **B · C · D · E** | all four live in `.public/build/`, which does not exist yet |
| **already running** | **A** | this session |
| **not yet** | **G** | its work is replacing hand-made inputs with real ones, and none exist |

**So: five sessions besides this one — F now, then B, C, D and E.**

### The one thing that makes four sessions in one folder possible

**Each stage owns exactly one module, and touches no other.** Without this, B–E collide.

```
.public/build/
  package.json  tsconfig.json    ← A creates these, first, before anything else
  read.ts          A
  mirror.ts        B
  assemble.ts      C
  judge.ts         D
  catalogue.ts     E
  index.ts         G — wires them, and nobody else writes it
```

***No session edits another session's module.*** If one needs to, a seam agreement is missing and belongs in [the shared requirements](#the-shared-requirements--where-work-cannot-be-split-until-something-is-written) before either continues.

**AND THE RULE HAS A HOLE, FOUND BY FALLING IN IT — 2026-08-14.** The modules are owned; **this chapter and [its cover entry](.cover.md) are not.** A and F both wrote the cover the same afternoon and **F overwrote A's entry**, which the [TOC tool](../../../../.claude/library/bookkeeping/03-on-covers--toc.ts) survived only because it **prints the previous text as `was:` before writing** — so the entry was reconstructed from the tool's own output and merged rather than lost.

***Two things follow and both are cheap.*** **The cover is written by the session that is closing, not by every session as it goes** — and when two are open, **the writer reads the `was:` line and merges rather than replacing.** *The tool already refuses a silent overwrite without `--force`; the refusal was correct and `--force` was the mistake.* **Inside the chapter itself there is no problem:** the sections are per-session and both survived intact, because a chapter is long and its edits are anchored where a one-line cover entry cannot be.

---

### A — the reading · **this session**

**Run:** `/ce-work` on this chapter. **First act: create `.public/build/` with its `package.json` and `tsconfig.json`** — four other sessions are blocked until it exists, so it comes before any logic.

**Owns:** `.public/build/library.ts` *(the type — write it FIRST, it is what unblocks B–E)*, `package.json`, `tsconfig.json`, `walk.ts`.
**Builds against:** folder trees it writes itself, including deliberately broken ones, plus `library/.test-library/`.
**Done when:** pointed at the fixture it reports every folder with its kind, the folder that speaks for each, and each file's role — **and refuses a tree with no unique maximum, naming the folder.**
**May assume:** [the folder convention](#s1--the-folder-convention-settled) and nothing else.

***Two things A must know, both learned the hard way this sprint:***

1. **ADD FILES BY COMPUTED PATH, NEVER BY GLOB.** A pattern does not match a dot-prefixed name — **and this bit three times**: `tsc`'s `include` saw one file of three, ts-morph's `addSourceFilesAtPaths` loaded **nothing**, and only `addSourceFileAtPath` found them. *The walker computes its own paths; nothing downstream may reach for a pattern.*
2. **The seam is a TYPE, not a file.** There is no serialized intermediate — `library.ts` declares what a walk produces, and B through E import it and write functions against it. *That is the shortest thing that still lets five sessions work apart.*

### B — the mirror

**Run:** `/ce-work` on this chapter, taking B. **Owns:** `.public/build/mirror.ts`.
**Builds against:** a description written by hand — [its shape is specified](#the-last-contract-written--and-the-figure-that-carried-it-found-two-defects-in-it) and `library/.test-library/` is the source.
**Done when:** the source appears under `.public/app/src/generated/library/`, at the same relative places, and a typecheck **entered through a book module** passes over it.
***The trap, and it is the sprint's most expensive finding:*** **a glob will not see `.cover.tsx` or `.synopsis.tsx`.** Any check walking `src/**` reports a confident zero over half a missing book. **Enter through the generated module, never by pattern.**

### C — the assembly

**Run:** `/ce-work` on this chapter, taking C. **Owns:** `.public/build/assemble.ts`.
**Builds against:** the demo's book folders, which already are a mirror.
**Done when:** one module per folder composes its chapters in order with the contents inserted after the cover — and **a cover naming no author gains one in the copy**, never in the source. *`.test-library/.physics/gauge-theory/` exists to be that case.*
**May assume:** a mirror is source at the same relative places. Nothing about how it got there.

### D — the judging

**Run:** `/ce-work` on this chapter, taking D. **Owns:** `.public/build/judge.ts`.
**Builds against:** the demo's books, which construct in a suite today.
**Done when:** every book is constructed and a **planted fault fails naming its file and its fix**. *Watch it go red before trusting its green.*
**Settled, so do not redesign it:** **it runs in bare Node, no browser** — measured at **58 of 62** promises, the four failures being exactly the four that call `render`. And **it invents no rules**: [the bond constructor](../../package/src/book/Book.tsx) already refuses six malformations, so judging is construction, watched.

### E — the catalogue

**Run:** `/ce-work` on this chapter, taking E. **Owns:** `.public/build/catalogue.ts`.
**Builds against:** the demo's books, live.
**Done when:** a catalogue module is emitted that **imports no book at all**, keyed by path, carrying title, subtitle, synopsis, chapter titles, and card references for author, subject and canonical.
**Settled:** [the card contract](#s2--what-a-card-carries-specified) field by field · [identity is the path](#s3--a-cards-identity-is-its-path) · **a card hands back no book until the shell hands it one.**

### F — the application · **brainstormed 2026-08-14, and the brief below is the result**

**Run:** `/ce-work` on this chapter, taking F — **and take [F's plan](#f--the-plan--status-implementation-ready), which is `implementation-ready` as of 2026-08-14 and carries units [U22](#u22)–[U34](#u34).** *It was first asked whether it could skip straight to work, and [the answer was no](#f-brainstormed-2026-08-14--and-it-was-not-ready-to-skip-to-work): the reader's state, subjects as pages and minimal-for-the-compiler were in no plan. They are now.* **Owns:** `.public/app/`, its [`tsconfig.json`](../../app/tsconfig.json), and its [`package.json`](../../app/package.json).

***Two blockers were measured and discharged during planning, and F starts past them:*** **`dist` was two days stale** and has been rebuilt, and **`react-router-dom` is undeclared** and resolves only by root hoisting. *Both are [U22](#u22).*

**Builds against the demo by READING it.** [`card.tsx`](../../package/app/src/sections/book/library/the-team/card.tsx) is the shape to reproduce, not a module to import — `package/app` is not a workspace package and never could be linked to. **The demo contains the instructions.**

**What v1 is, and it is smaller than this section used to imply.**

- **The shell** — take a path, strip the deploy base, find **one card** in the catalogue by path, dynamic-import **that one book's module**, draw it. Resolution is a catalogue lookup; nothing maps URLs to components by hand.
- **The reader is [`$Book`](../../package/src/book/Book.tsx) as it ships.** *"We can just assume the library book is book."* **No new book class in v1** — `$Book.view()` already draws every non-parenthetical chapter, so what F adds is a surface, not a subclass.
- **A minimal surface, easy to change.** Explicitly **not** [the demo law](#r13--the-book-gets-its-own-aesthetic-world), which governs demonstrations. This is the product, and v1 exists to put a target under the compiler.
- **Reader-or-catalogue is [counted, never declared](#s5--the-read-versus-consulted-predicate)** — `$Book.read()` answers it.
- **Each subject is its own page**, loading its own book module plus card metadata and **never the books it catalogues**.
- **A hand-made catalogue in [the S2 shape](#s2--what-a-card-carries-specified)**, keyed by path, **importing no book** — written in `.public/app`, describing **the test library**, so what the compiler later emits replaces it file for file and **G's swap is exact rather than approximate**.
- **The corpus is [`library/.test-library/`](#the-state-once--2026-08-15-two-sessions-one-state), treated as the main library**, reached under **a flag restricting the run to the test folders**. *"The app can run completely but will be restricted to the right books."*
- **[`tsconfig.json`](../../app/tsconfig.json) is F's to fix**, because B emits dotted files into F's folder and cannot edit F's config. **Enter through the generated module; never walk a pattern.**

**Designed and owed rather than built in v1:**

- **The reader's place, in cookies — and it is a place PER SUBJECT.** *"For each subject, the view for the library would be like opening a book and the app should remember where they left off there."* **A finger in each of several books at once**, not one position in the library. *No second reading mechanism to design: a subject is a book, so opening one is opening a book.*
- **A chapter's address, which is dynamic rather than a route.**
- **Bookmarks — a reader configuring references into their own view of the library.** ***Recorded, not scoped.*** **The shape it wants already exists**: a bookmark is a reference, and a thing that catalogues books **is a subject** — so a reader's bookmarks are a subject of their own, drawn by the same rule as any other. *Whenever it is taken up it is a use of the model rather than an addition to it.*

*All three are ruled; none of them is what gets a target under the compiler.*

**Also F's, and it is the level-crossing:** **The Build gains its chapter on the showing.** *"The demo should contain an account of the work that we are doing."*

***Know what you are walking into:*** **`.public/app/src/` holds two files and one is a coming-soon animation** — and it stays on the live site, because **[the Pages deploy is disabled](#the-deploy-is-off-and-that-is-a-decision-rather-than-a-pause) while this is built.** Work is seen locally. **This is new work, not configuration.**
**It splits in two if you want:** the book that draws, and the shell that resolves. They share only the card contract and live in different folders.

### F — WHERE IT STANDS · **the library is on screen, driven and seen**

**[U22](#u22)–[U30](#u30) DONE, DRIVEN AND SEEN, 2026-08-15.** A path resolves through a catalogue to a card, **one** book's module loads, and the book draws itself — as a reader or as a catalogue, decided by counting. **19 checkpoints, 19 passed, 0 console errors, exit 0**, and it was **watched going red twice** before its green was trusted.

**AND `generated/` IS GONE — the naming was wrong and Doug said so.** *"Does generated help? The whole `.public` workspace is in there. Technically you are generating the whole site right?… consider normal app design in naming here."* **Correct: it named a folder for how its contents arrived rather than for what they are**, and [R19](#r19--publication-the-output-mirrors-the-library-and-a-book-is-a-page) already says the output mirrors `library/`. So the folder is **`src/library/`**, and with [D12](#d12) declaring no book class there is no `book/` either. What is left is an ordinary small app: `main.tsx` · `app.tsx` · `library/` · `catalogue.tsx` · `theme.ts` · `teaser.tsx`. ***One word fewer, and the word that went was mine.***

**THE UNFAKEABLE CLAIM, WATCHED IN THE NEGATIVE.** With the card assignment disabled, **the front door drew as a READER instead of a catalogue** — same module, same surface, the only change being whether anything points elsewhere. *And with one card removed the walk stalled naming it: `The catalogue holds no card for "/physics/gauge-theory"`.*

#### Three defects found, and two of them were nobody's fault but everybody's problem

**1 — THE PUBLISHED PACKAGE COULD NOT DRAW A BOOK, AND HAD NEVER BEEN ASKED TO.** [`tsconfig.build.json`](../../package/tsconfig.build.json) overrode `"jsx": "react"` — the **classic** runtime — so the rollup bundle emitted **22 bare `React.createElement` calls** while binding React only as `React$1`. Every reader crashed with `ReferenceError: React is not defined`.

***It survived because nothing had ever run `dist`.*** [The demo's vite config](../../package/app/vite.config.ts) aliases `@` to the package **source**, and the teaser imported no lib at all — so the artifact GitHub Pages has been building on every push was **broken and unexercised**. *`react/jsx-runtime` was already listed as external in [the rollup config](../../package/rollup.config.js), so the automatic runtime was plainly the intent and the override defeated it.* **Fixed — one line — and flagged, because [D17](#d17) put `package/` outside F's boundary and a guardrail that turns out wrong is [raised, not silently overridden](../../../../.claude/library/teamspeak/03-discussion.md).** *`React.createElement` in the bundle: 22 → 1, and that one now has a binding.*

***This is [the green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md) at its largest scale yet — on the published artifact.***

**2 — THE FIXTURE'S ORDINARY CHAPTERS WERE ALL INVALID.** [`$Chapter`'s bond constructor](../../package/src/book/Chapter.tsx) requires a summary — *"A chapter requires a summary — a parenthetical section"* — and **six of six ordinary chapters had none.** Only the synopses did. **The corpus was counted at nineteen files and reported done, and no book in it had ever been constructed**, so nobody knew.

**Fixed AT THE SOURCE, and the reason is a line worth keeping:** a missing author link is **structure** and [the build may supply it in the copy](#the-four-blockers-resolved-2026-08-14--and-the-plan-now-lives-in-the-book) — **a summary is WRITING, and the build never writes prose.** *So this could not be papered over in the mirror; it had to be fixed where its author left it, and it was.*

**3 — A BOOK CANNOT BE RETURNED FROM AN ASYNC FUNCTION.** `$Book` declares `then()` for reference paths, so `Promise<$Book>` is a thenable collision — TypeScript refuses it (`TS1058`) and at runtime a promise would call `then()` and never settle. **Every stage that loads a book asynchronously meets this.** *Worked around by handing back a holder rather than the book; recorded because it is the reference API and the language's own protocol colliding on one word, which is the same shape as [the `at` collision](09-the-subject.md) already filed here.*

#### Two more findings, smaller and still worth having

- **The card contract's `canonical` field cannot be added.** `$Writing` already declares `canonical`, which every card inherits, so [S2](#s2--what-a-card-carries-specified)'s field of that name **shadows it and does not compile.** *Left off the card and flagged rather than renamed — the name is Doug's.*
- **The fixture exercises no author book**, so `<Author>The Team</Author>` resolves to no card and the **author-link default is not exercised by the corpus.** *The cover renders the name as writing, which is valid; but [R6](#r6--what-the-build-supplies-each-with-its-rule-and-its-override)'s structural author rule has nothing to run against.*

#### Verified — every gate, with its scope

| gate | result |
|---|---|
| `verify-library.mjs` *(new)* | **19 checkpoints, 19 passed, 0 failed, 0 console errors, exit 0** — watched red twice |
| `.public/app` typecheck | **31 files, 0 errors** — *and the dotted files are among them, entered through the module* |
| `.public/app` build | **6 `book-*.js` chunks, one per book** — *which settles the ⚠ nobody had checked* |
| lib suite | **239/239**, 23 files |
| demo app typecheck | **76 files, 1/1 baselined, 0 unexpected** |
| lib rollup build | exit 0, **`React.createElement` 22 → 1** |
| `verify-book` | **51 checkpoints reached**, PASS — *run because `tsconfig.build.json` changed beneath the demo, and the demo had to be shown unharmed* |
| `verify-demo` | **25 checkpoints reached**, PASS |

#### The second run — the bookmark, the addresses, the gate, and the chapter

***Doug: "What is stopping you from building something."*** **Nothing was, and [U31](#u31) and [U33](#u33) both landed** — U33 having been deferred by decision and then asked for.

- **A SUBJECT PAGE WAS DRAWING HALF OF ITSELF.** *Found by looking at the screenshot rather than at the test*: the page showed its cover and its entries and **not its own chapters**, so `What Physics Is` was invisible. **A subject is both things at once** — its own writing and the books it catalogues, through the same members — and the page now says so. *Driven: three of its own, two entries.*

- **THE READER'S PLACE IS KEPT, AND IT IS THE MODEL'S OWN WORDS.** *Doug: "Not for each subject. For the top level subjects in the library. Subjects can catalogue other subjects as well. As for remembering where — definitely the book, the place on the page. **We should have a bookmark. We have to build an abstraction for saving state to browser storage.**"*

  **Nothing was invented, because both halves already ship.** **[`$Bookmark`](../../package/src/book/Bookmark.tsx)** is a sentence-grade reference and **[`$Location`](../../package/src/reference/Location.tsx)** is the place — *"a location is the one thing that holds a number, because a number is what it IS."* **So a bookmark holds a location in a book**, one per **top-level subject**, and returning to a subject opens the book that was open at the place it was left. *Storage is an abstraction of its own so the drawer behind it is one line to change; it is `localStorage` rather than `document.cookie` — the same place and the same reader, without a size limit or a needless round-trip, and that swap is named rather than slipped in.*

- **A CHAPTER HAS AN ADDRESS AND IT IS A FRAGMENT.** The route stays the book, because the book is what loads; the fragment **follows the reader down the page** rather than waiting to be clicked. *And one real rule came out of driving it: **a reader at the foot of the page is reading the last chapter**, however little there was to scroll — a short book can never bring its final chapter to the top of the screen.*

- **THE APP HAS ITS OWN GATE, AND THE GATE HAS A FLOOR.** `npm test` in `.public/app` runs the typecheck then the driver. **The typecheck reports how many dot-prefixed files it reached**, because that number is the only evidence the compiler entered through the module rather than walking a pattern. ***And a floor was added after watching it fail to care:*** closing one door in the catalogue took it from 33 files to 28 **and it still said PASS**. It now says `SCOPE FELL BELOW ITS FLOOR` and exits 1. *My own first version of that count was also wrong — it matched `/.public/` in every path and reported all 33 as dotted, which is a gate lying in the direction that feels like success.*

- **THE BUILD GAINS ITS CHAPTER ON THE SHOWING** — [`08-the-showing.tsx`](../../package/app/src/sections/book/library/the-build/08-the-showing.tsx), the seventh stage in the book that specifies the machine. **Its figure runs the rule rather than illustrating it**: six books in, three computed *consulted* and three *read*, each with what a visit costs, **and the answer matches what the running application does** because it is the same rule. *Driven: 6 rows, `data-consulted="3"`, 0 console errors. **Doug appears nowhere in it**, per [D10](#the-decisions).*

#### What the second run found

- **A RESOURCE IS REACHED BY ITS FOLDER, NEVER BY THE IMPORT GRAPH — and the floor caught it on its first real use.** The corpus stopped importing `symmetry--figures.tsx` mid-run, the count fell to 32/24, and the gate refused. ***That is the finding rather than the inconvenience:*** entering through the module reaches every chapter, cover and synopsis, **but a chapter need not import the code beside it**, so anything carrying a library must add resources **by computed path** or leave them behind. *This is [A's own rule](#a--the-reading--this-session) arriving from the other end, and [B](#b--the-mirror) needs it.*
- **Two sessions edited the corpus in the same hour**, which is how the above was found. *The fixture has no owner rule the way the build modules do.*

#### Verified — the second run

| gate | result |
|---|---|
| `.public/app` typecheck | **32 files, 24 dotted, 0 baselined, 0 unexpected** — floor enforced, **watched refusing a closed door** |
| `verify-library.mjs` | **29 checkpoints, 29 passed, 0 console errors** — *watched red on the bookmark and on the predicate* |
| demo app typecheck | **77 files** from 76, 1/1 baselined, **0 unexpected** |
| `verify-book` | **51 checkpoints reached** |
| `verify-demo` | **25 checkpoints reached** |

**Not done.** [U32](#u32) beyond this section · [U34](#u34) design owed · **and four things that are not F's**: [the `then()` collision](#three-defects-found-and-two-of-them-were-nobodys-fault-but-everybodys-problem), the corpus's missing author book, the `canonical` name, and [G's deploy](#the-deploy-is-off-and-that-is-a-decision-rather-than-a-pause).

### The deploy is OFF, and that is a decision rather than a pause

**The push trigger comes off [`deploy-pages.yml`](../../../../.github/workflows/deploy-pages.yml) and the teaser stays on the open web.** *Doug: "No deploy. Leave the teaser."* Without this, **F's first commit publishes a building site**, because the workflow builds `library/.public/app` on every push to `main`. **Turning it back on is [G](#g--the-joining--not-yet)'s, alongside the deep-link fallback** — which is also G's, and which had been assigned to a track that no longer exists.

### G — the joining · **not yet**

**Waits on all of the above.** Its work is taking out each hand-made fixture and putting the real one in, plus the deploy. **It should be small; if it is large, an agreement above it was wrong, and its size is the report.**

## What each session should read — a starting point, not a boundary

**Everyone reads two things.** This section, and **[The Build](../../package/app/src/sections/book/library/the-build/) — the book itself**, which is where the design lives rather than here. *Run it and read it; its figures compute their own rules, so a claim in it is checkable on the page.* Chapters 3 and 4 carry the convention, 5 the process, 6 the dispatch, 7 the description.

**Then, per session — one or two more, and what each is load-bearing for:**

- **A** — [the fixture](#the-state-once--2026-08-15-two-sessions-one-state) at `library/.test-library/`, which is the input, and **[the description contract](#the-last-contract-written--and-the-figure-that-carried-it-found-two-defects-in-it)**, which is the output *and which was wrong twice before it was right; both defects are named there and both are worth not repeating.*
- **B** — **[the green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md)**, whose fourth entry is the dotfile trap that will otherwise cost you a day, and [the compiler's operations](#the-compiler-operation-by-operation) for what carrying may and may not alter.
- **C** — [`algebra/book.tsx`](../../package/app/src/sections/book/library/algebra/book.tsx), **twenty-two lines every one of which is derivable** — it is the specification, written by hand — and [`$Book`'s bond constructor](../../package/src/book/Book.tsx) for what it will refuse.
- **D** — [`$Book`'s bond constructor](../../package/src/book/Book.tsx), because **you are implementing nothing it does not already say**, and [the green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md) for why a gate must be watched failing.
- **E** — [`card.tsx`](../../package/app/src/sections/book/library/the-team/card.tsx), the hand-made catalogue that **is** the thing you are generating, and [the card contract](#s2--what-a-card-carries-specified).
- **F** — **[its own brief](#f--the-application--brainstormed-2026-08-14-and-the-brief-below-is-the-result) first**, which was rewritten after a brainstorm and is smaller than the rest of this chapter implies. Then [`the-team/book.tsx`](../../package/app/src/sections/book/library/the-team/book.tsx) and [`the-shelf/contents.tsx`](../../package/app/src/sections/book/library/the-shelf/contents.tsx), the two most complete readers we have, and [the app pictured](#the-app-pictured--written-because-a-plan-nobody-can-visualise-cannot-be-split).

*Three readers converged independently on one anatomy — the surface, the running head, the folio, the imprint, the open chapter, the turn. **That is evidence for F, not a specification**; it was never agreed as one — and rather than promote it, **v1 takes [`$Book`](../../package/src/book/Book.tsx) as it ships** and leaves the anatomy to be earned later.*

## Said plainly, for whoever is not tracking identifiers

**This sprint designs a build and does not write one.** The deliverable is a book — the fifth on the demo's shelf — that specifies how a folder of chapters becomes a compiled library.

**The book is written by hand on purpose.** Every line of wiring it costs is a line the build will have to generate, so building it the slow way *is* the measurement. That method produced the cards; this is the same method one grade up.

**And the book is the exemplar as well as the specification.** It is what IXP documentation will look like — diagrams drawn from the model, real source shown as itself, a design meant to be copied. **A demonstration that is also the plan for the machine that will produce demonstrations like it.**

## The state, once — 2026-08-15, two sessions, one state

**A AND F ARE BOTH DONE.** The compiler reads a library; the application draws one. *Neither read the other's code, and they met at the contract.*

**A — the reading.** `.public/build/` holds the seam type, the walk, the reference resolution and its gate. **Pointed at the corpus: 8 folders, 18 files, 4 references, 0 complaints. 26 checks, watched red three ways.** *The seam is a **type**, not a file on disk, so B through E import declarations and write functions against them.*

**F — the application.** A path resolves through a catalogue to a card, one book loads, and the book draws itself — reader or catalogue, decided by counting. **29 checkpoints, 29 passed, 0 console errors**, watched red twice. *The deploy is OFF by ruling; the teaser stays on the open web.*

**And they agreed without coordinating.** A computes routes — `/`, `/physics`, `/physics/the-standard-model` — and F had written the same ones by hand. **The contract was what made that possible, and the contract is also what got corrected twice** ([the shadowed field, and one word meaning two things](#s2-corrected-twice--both-found-by-two-sessions-building-against-it)).

### What the two sessions found about each other, and it is the real finding

**THE CORPUS HAS NO OWNER, AND THE BUILD MODULES DO.** *Two sessions edited `library/.test-library/` in the same hour.* **A removed a file mid-run and F's gate refused**, counting 32/24 where it had counted more. *The refusal was correct — that is the floor working — but nothing said the corpus was shared, while every module under `build/` says who owns it.*

**AND A COUNTED FILES WHERE IT SHOULD HAVE CONSTRUCTED BOOKS.** F found that **six of six ordinary chapters in the corpus were invalid** — [`$Chapter`'s bond requires a summary](../../package/src/book/Chapter.tsx) and only the synopses had one. ***The corpus was reported done at nineteen files and no book in it had ever been built.*** *A file count is not a corpus; a corpus is what constructs.* **Fixed at the source by F, because a summary is writing and [the build never writes prose](#the-four-blockers-resolved-2026-08-14--and-the-plan-now-lives-in-the-book).**

**Both are the same shape as [the green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md)** — a number that was true, with a silent scope. *Held for the next compound run, alongside the `.gitignore` rule that was swallowing the whole compiler.*

### Not done, and named rather than omitted

- **B, C, D and E have not started.** Each has its input fixture and its own module; none blocks another.
- **G waits**, and its work now includes **turning the deploy back on** and the deep-link fallback.
- **Compaction is owed.** This chapter is **29,000 words** and the law says compact at compounding. ***It was deliberately not done: F was editing this same file this session***, and a whole-file rewrite under another session's in-flight edits risks losing their work. **First thing when only one session holds it.**
- **The `.gitignore` lesson is held** for the next compound run — one lesson per run, and that chapter already took one today.

### Open — and none of it blocks a session starting

*One list. An earlier one stood lower in this section carrying items that had since been decided — the fixture listed as specified-when-it-exists, a probe the design moved past — and it is deleted rather than left to be reconciled by a reader.*

- **The corpus has no author book**, so `<Author>The Team</Author>` resolves to nothing and the structural author rule has nothing to run against. *The one gap in the fixture that is a gap in coverage rather than in size.*
- **Where the top-level book lives.** *Doug, raised and deliberately left: "It probably needs to be in lib as a starting point for a library, but I am not sure. **It needs to be considered.**"* **Not blocking** — the criterion is the one this branch already runs on: **it moves into lib when a second repository actually needs it.**
- **The application's organisation**, reviewed once it works — [the note below](#owed--the-public-applications-organisation-gets-a-serious-review-once-it-works), now sharpened by the ruling that component and application code belong in the package.
- **Two proxy names still standing:** the sprint and the book share *The Build*, and *fixture* was never asked for.

***Nothing waits on Doug.*** *The last question that did — what a card calls its canonical link — was [answered by being dissolved](#s10--a-card-is-a-section-and-the-books-title-is-its-canonical-part): a card is not a catalogue, so it never needed one.*

## OWED — the public application's organisation gets a serious review once it works

*Doug, 2026-08-15, looking at what F built: **"I see someone building the library app, with various classes. They are lowercase and all in one folder. Might we want these in the package? It's important code. It should be organized well. Put a note somewhere that we have to review this seriously once we get something working."*** **Noted, not acted on** — F was asked for the shortest path to something visible, and got there.

**What the review has to look at, measured rather than felt:**

| | as built | why it wants a second look |
|---|---|---|
| `app.tsx` | **234 lines**, exporting `here`, `catalogued`, `Library` | three jobs in one file — the route resolver, the catalogue face, the reader |
| `catalogue.tsx` | **121 lines**, exporting `$Card`, `catalogue`, `at`, `held`, `fetch` | a class, the data, two lookups and the loader, together |
| naming | all lowercase, flat | ***it names a class in a content file*** — by [this sprint's own rule](#two-more-conventions-settled-2026-08-14) a file named for its class is PascalCase, and only *content* is named for its title |
| shape | one folder | [the plan named two](#where-the-code-lives--every-path-so-a-session-can-start-without-asking) — `shell/` and `book/` |

**The naming rule has a third case it does not cover, and this is it.** We split *framework* from *content* and never said what **application code** is. `$Card` is a class in a file named like a chapter. *Either the rule gains a case or the file gains a capital, and neither should be decided while the thing is still being built.*

**And the real question underneath is whether any of it belongs in the package.** *A library's own card is correctly app-side — the framework ships `$IndexCard` and a library declares its own, exactly as it ships no figure kinds.* **But the shell is different**: turning a path into a card, fetching one book and drawing it is what **any** app serving this kind of library needs, and there is nothing repository-specific in it.

***The standing precedent says wait.*** The compiler faced the same question and the answer was [`.public`, unpublished, extract when a second repository actually needs it](#where-the-code-lives--every-path-so-a-session-can-start-without-asking) — a decision made against a real requirement instead of a guessed one. **The same applies here, and the review is the moment to ask whether that requirement has arrived.**

## Verified — every gate, with its scope, run fresh at the close

*Run against the working copy, not recalled — and one number had moved without this session noticing.*

| gate | result |
|---|---|
| `build` `tsc` | **0** |
| `verify-walk` | **26 checks, 0 failed**, exit 0 — *watched red three ways* |
| public app typecheck | **32 files, 24 of them dot-prefixed** and reached only through the module, 0 unexpected |
| `verify-library` | **29 checkpoints, 29 passed, 0 console errors** |
| demo app typecheck | **78 files**, 1/1 baselined, 0 unexpected |
| `verify-book` | **61 checkpoints** — *up from 51; F added ten, and reporting 51 from memory would have been wrong* |
| `verify-demo` | **25 checkpoints** |
| lib suite | **239/239**, 23 files |
| branch library links | **600 anchored, 7 flagged, none in this chapter** |

## Wrong turns already taken — do not repeat

- **Reading "the public build" as one deliverable.** It is six stages; the sprint that thought it was one was corrected in its first question.
- **Assuming anything moves out of the package.** *"Nothing moves from the package."* Only content written in `library/` is lifted.
- ~~**Marking subjects with a dot.**~~ **REVERSED by Doug, 2026-08-14** — dots *do* mark subjects, and the count carries the depth of subjecthood. *Kept struck rather than deleted: this list is what a later reader trusts, and a wrong turn that turned out right is worth more visible than absent.*
- **Treating the demo library as the lift's target.** The demo is `package/app`'s own; the lift reads `library/`.
- **Writing a chapter before its discussion.** [R16](#r16--the-design-is-discussed-as-it-goes-not-written-ahead-of-its-ruling) — and prose produced ahead of a ruling has to be thrown away, not edited, because it was built on a guess.
- **Putting Doug in the book.** [D10](#the-decisions). *He is the weather; in the demo this is the team's project.*

## What changed about the roadmap, and it should be carried to chapter zero

**Chapter zero's [Sprint 50 — The Public Build](00-planning.md#sprint-50--the-public-build) and [Sprint D — The Compilation](00-planning.md#d--the-compilation) are both smaller than what was agreed today.** D was one stage of six; 50 bundled the strict compiler with cross-repo consumability, documentation content and repo-creation, three of which are not this machine. **Chapter zero is stale on this and the plan should absorb it.**

## Compounded — 2026-08-15, the second lesson

**A contract is corrected by implementation, never by rereading** — distributed into [ce-plan's chapter](../../../../.claude/library/our-skillset/29-ce-plan.md), because it changes how a plan divides work rather than explaining why something broke. *Not a Solutions entry: nothing failed.*

**The evidence is this sprint's own.** [The card contract](#s2-corrected-twice--both-found-by-two-sessions-building-against-it) was written from the design, reread across a whole session, and carried **two faults** — a field the base class already owned, and one word meaning a folder to one side and a route to the other. **Both were found within hours of two sessions building against it, and neither by anyone looking at it again.**

**Two practices went with it.** *Dispatch against an imperfect contract rather than polish one — a seam two people are building against is being tested, while a seam nobody has built against is only being admired.* And *when a builder reports the contract cannot be met, **believe the builder***: both faults arrived as "this cannot be done as specified", and both times the specification was wrong. **F flagged the shadowed field rather than renaming around it, which is the only reason it reached the contract at all.**

**Cover updated in the same act; the skill recompiled**, because a library edit that never reaches the compiled file is an edit nobody reads. *Validators: 0 anatomy errors, 0 broken compiled links, 0 broken library links, 0 warnings.*

**Held for the next run, one lesson per run:** the `.gitignore` finding — a generic `build/` rule swallowing the entire compiler — which is [the green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md) in a **fifth** costume, and that chapter already took one entry today.

## Compounded — 2026-08-14, the first lesson

*Distributed while the context was fresh.*

**The dotfile finding went to [the green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md) as its fourth appearance — EDITED, not created**, because that chapter already owns the mechanism: *the number was true and the scope was silent*. A glob does not match a dot-prefixed name, so a convention whose covers are `.cover.tsx` is **half invisible to an ordinary `include`** — measured at one file of three, with no warning and no count. An explicit import finds them and compiles clean, which is why **the generated book module is the only door**, and a gate must enter through it rather than walk a pattern.

***It is the first of the four appearances nobody paid for.*** The other three were found by something already broken; this one was found by testing the assumption before building on it.

**Compacted in the same pass: 17,935 words to 16,961.** What was cut was **false, not merely long** — the eight-track programme superseded by [the dispatch](#the-dispatch--a-first-g-last-and-the-letters-run-in-execution-order) *(stubbed, its heading kept because the record links to it 37 times)*, a duplicated *Wrong turns* section, and a next-step section naming void letters.

**And one entry in *Wrong turns* had become false and is struck rather than deleted** — *marking subjects with a dot* was listed as a mistake, and Doug reversed it the next day. **A wrong turn that turned out right is worth more visible than absent.**

**Links proved, and the check paid for itself twice over.** **462 anchored links across 55 chapters: 21 broken before, 2 after** — and **none of them in what was compacted**. Nine were repaired by prefix, three by finding a renamed section, five were quoted examples rather than links. *The checker itself was wrong three ways before it was right — leading-hyphen anchors, markdown links slugged by their URL rather than their text, and backticked examples counted as links — which is its own small instance of the lesson above.*

**Flagged, not guessed at — two anchors point at content earlier compactions removed:**

- `02-sprint-45` → `01-sprint-44#second-amendment--the-loop-after-rules-alone-failed-twice`
- `06-sprint-48` → `00-planning#the-split--subjects-and-the-library-as-sprints-with-checkable-ends-doug-2026-08-06`

*Repairing them means finding where that content went, which is outside this run's neighbourhood.*

## How to see it — two applications, two ports

**The public library — what F built, and the thing a visitor would meet:**

```bash
cd library/.public/app && npx vite --port 5299
```
Open **`http://localhost:5299/inexplicable-phenomena/`**. **The front door is the library drawing itself as a catalogue** — its own chapters and an entry per subject. Follow one into a subject, then into a book. *A subject page loads no book; a book page loads exactly one.*

**The demonstration — where the design is written, including this plan:**

```bash
cd library/.public/package && npx vite app
```
**The Shelf is the root, five spines.** The fifth is **The Build**, which specifies the machine — and its figures **run their rules rather than illustrating them**, so a claim in it is checkable on the page.

**The compiler has no screen. It has a report:**

```bash
cd library/.public/build && npx tsx see.ts ../../.test-library
```

## The rulings this session turned on — verbatim, because they are the expensive thing

- **On what a card is.** *"Why does the card have a canonical link? It's not a catalogue. It is a reference for a book. The title of the book can be its canonical part… Think about an index card. Is that a paragraph? Maybe it's a section with a title that is the title of the book."*
- **On how one book names another.** *"Import the cover as desired and stick it in… the compiler reads Math as the text and uses the cover as the link. Name the import as desired."* And on the alternative form: *"`<Subject>{Math}</Subject>` — maybe better because the other one is more confusing."*
- **On a cover resolving itself at runtime, refused.** *"That adds a big import to the page right? It drags in the whole book. It's probably a bad idea."*
- **On where code lives.** *"For now, assume that component development should live in the package."* And: *"Most books can just use a paragraph, and the paragraph gets written somewhere at the subject level, and if dependencies get pulled in with `$`, there can be a lot of invisible customization."*
- **On the invented resource.** *"That is not an agreed upon naming convention here… you didn't include the code as a resource (read what that means in the .claude library) so it's very very very wrong."*
- **On the application's shape.** *"I see someone building the library app, with various classes. They are lowercase and all in one folder… It should be organized well. Put a note somewhere that we have to review this seriously once we get something working."*
- **On the deploy.** *"No deploy. Leave the teaser."*
