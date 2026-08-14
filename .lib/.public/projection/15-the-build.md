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
| **S7** | the default book's anatomy | T3 builds · T1 documents | **open** — three demos' convergence is the evidence, not the spec |

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
| `path` | the folder chain | **the identity** — see S3 |
| `title`, `subtitle` | the cover's title, split at its colon | what a reader is shown |
| `synopsis` | the synopsis chapter's tagline | what a catalogue entry says |
| `chapters` | each chapter's title | the contents, without the book |
| `author` | a **card**, never a name | follows without loading |
| `subject` | a **card** — the parent folder | the way back |
| `canonical` | a **card**, subjects only | which book speaks for it |
| `library` | **computed**, recursively through `subject` | agreement, checked in place |

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

## → NEXT: SIX SESSIONS. One is already running; five can be opened.

**Every session opens by reading this section and nothing else first.** Each block below is that session's whole brief: the command, what it owns, what it builds against, what "done" looks like, and what it may assume.

### How many, and when — the honest answer

| now | what to open | why |
|---|---|---|
| **immediately** | **F** | it touches only `.public/app/` and needs nothing from anybody |
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

---

### A — the reading · **this session**

**Run:** `/ce-work` on this chapter. **First act: create `.public/build/` with its `package.json` and `tsconfig.json`** — four other sessions are blocked until it exists, so it comes before any logic.

**Owns:** `.public/build/package.json`, `tsconfig.json`, `read.ts`. **Builds against:** folder trees it writes itself, including deliberately broken ones, plus `library/.test-library/`.
**Done when:** pointed at the fixture it reports every folder with its kind, the folder that speaks for each, and each file's role — **and refuses a tree with no unique maximum, naming the folder.**
**May assume:** [the folder convention](#s1--the-folder-convention-settled) and nothing else.

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

### F — the application · **openable right now**

**Run:** `/ce-work` on this chapter, taking F. **Owns:** `.public/app/src/`.
**Builds against:** the demo's [`card.tsx`](../../package/app/src/sections/book/library/the-team/card.tsx), which is a hand-made catalogue.
**Done when:** a path resolves through a catalogue to a card, loads **one** book, and draws it — as a reader or a catalogue, **decided by asking the model, never by a prop**.
***Know what you are walking into:*** **`.public/app/src/` holds two files and one is a coming-soon animation.** Every reader ever written lives in `package/app`, which is never deployed. **This is new work, not configuration** — and it is the only team whose output a person can look at.
**It splits in two if you want:** the book that draws, and the shell that resolves. They share only the card contract and live in different folders.

### G — the joining · **not yet**

**Waits on all of the above.** Its work is taking out each hand-made fixture and putting the real one in, plus the deploy. **It should be small; if it is large, an agreement above it was wrong, and its size is the report.**

## What each session should read — a starting point, not a boundary

**Everyone reads two things.** This section, and **[The Build](../../package/app/src/sections/book/library/the-build/) — the book itself**, which is where the design lives rather than here. *Run it and read it; its figures compute their own rules, so a claim in it is checkable on the page.* Chapters 3 and 4 carry the convention, 5 the process, 6 the dispatch, 7 the description.

**Then, per session — one or two more, and what each is load-bearing for:**

- **A** — [the fixture](#the-state-once) at `library/.test-library/`, which is the input, and **[the description contract](#the-last-contract-written--and-the-figure-that-carried-it-found-two-defects-in-it)**, which is the output *and which was wrong twice before it was right; both defects are named there and both are worth not repeating.*
- **B** — **[the green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md)**, whose fourth entry is the dotfile trap that will otherwise cost you a day, and [the compiler's operations](#the-compiler-operation-by-operation) for what carrying may and may not alter.
- **C** — [`algebra/book.tsx`](../../package/app/src/sections/book/library/algebra/book.tsx), **twenty-two lines every one of which is derivable** — it is the specification, written by hand — and [`$Book`'s bond constructor](../../package/src/book/Book.tsx) for what it will refuse.
- **D** — [`$Book`'s bond constructor](../../package/src/book/Book.tsx), because **you are implementing nothing it does not already say**, and [the green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md) for why a gate must be watched failing.
- **E** — [`card.tsx`](../../package/app/src/sections/book/library/the-team/card.tsx), the hand-made catalogue that **is** the thing you are generating, and [the card contract](#s2--what-a-card-carries-specified).
- **F** — [`the-team/book.tsx`](../../package/app/src/sections/book/library/the-team/book.tsx) and [`the-shelf/contents.tsx`](../../package/app/src/sections/book/library/the-shelf/contents.tsx), the two most complete readers we have, and [the app pictured](#the-app-pictured--written-because-a-plan-nobody-can-visualise-cannot-be-split).

*Three readers converged independently on one anatomy — the surface, the running head, the folio, the imprint, the open chapter, the turn. **That is evidence for F, not a specification**; it was never agreed as one.*

## Said plainly, for whoever is not tracking identifiers

**This sprint designs a build and does not write one.** The deliverable is a book — the fifth on the demo's shelf — that specifies how a folder of chapters becomes a compiled library.

**The book is written by hand on purpose.** Every line of wiring it costs is a line the build will have to generate, so building it the slow way *is* the measurement. That method produced the cards; this is the same method one grade up.

**And the book is the exemplar as well as the specification.** It is what IXP documentation will look like — diagrams drawn from the model, real source shown as itself, a design meant to be copied. **A demonstration that is also the plan for the machine that will produce demonstrations like it.**

## The state, once

**Complete.** The brainstorm and the plan. Nineteen rulings recorded verbatim, the pipeline agreed, the folder convention agreed, the environment answered by inheritance, the deliverable relocated twice and settled as a book on the shelf. Four requirements amended in after approval and marked as amendments, one of them ([R18](#r18--the-build-is-subjective-and-that-is-why-its-output-is-committed)) reversing a brainstorm answer.

**[U1](#u1) — DONE, DRIVEN AND SEEN.** The fifth book stands. A cover, a synopsis, a table of contents, its own blueprint surface, a card in the catalogue, an author link reading to The Team, a subject link reading to The Shelf, and its synopsis standing as a chapter of The Shelf. **13 ad-hoc checks passed, 0 console errors**, both shipped drivers unchanged.

**What U1 found, and it is a correction rather than a defect.** **The shelf catalogues the books and does not catalogue itself**, so a fifth book makes a *fourth* spine. [AE1](#acceptance-examples) said five and has been corrected. *It also exposed a loose assertion in the shipped driver — `spines.length >= 3` — which passed a fourth spine without noticing it. **[U14](#u14) tightens it**, and that is now the reason U14 exists rather than a formality.*

**[U2](#u2), [U3](#u3), [U4](#u4) — DONE, DRIVEN AND SEEN.** The book has its own blueprint surface, sharing no styling with the other four. It declares two figure kinds of its own. And its first chapter stands, **reachable by turning**, stating the folder convention and drawing it.

**THE DIAGRAM RUNS THE RULE RATHER THAN ILLUSTRATING IT.** Every role on the tree — *a subject*, *the subject's own book*, *cover*, *synopsis*, *chapter*, *a book* — is **computed by the classifier, not typed into the figure**, and the chapter shows that classifier's real source beneath it, read at build. A wrong rule would draw a wrong tree, which is why this cannot be faked by prose. **11 checks, 0 failures, 0 console errors.**

**One real defect found by driving, and it was not the one the failing check claimed.** Six assertions went red reading `library/A SUBJECT`; **the labels were correct and the render was wrong** — the role carried a margin but no whitespace, so the diagram could not be copied or read as text. Fixed at the render. *The lesson is the one already filed here: a check that fails tells you something is wrong, never what.*

**[U5](#u5) — DONE, DRIVEN AND SEEN, and it settled the collision.** *The tree is final for canonical subjecthood; explicit markers carry every other subject a book belongs to.* The other direction is the subject's own: **its canonical book is the first book in its contents, unless it declares another** — the same convention-with-override shape as everything else here.

**Reciprocity stopped being a rule to enforce and became a shape that is hard to break.** The book named canonical is held by the subject naming it, and being held is what makes that subject canonical for the book. **One check survives: a subject must hold what it names.**

**AND THE REFUSAL IS DRAWN.** The chapter carries the same figure three times — default, declared, and a subject naming a book it does not hold — and **the third computes its own refusal**. *That discharges [U13 of Cataloguing](14-cataloguing.md#not-done-and-named-rather-than-omitted), owed for a sprint: a guard nobody has watched fail is not a guard.* **8 checks, 0 failures, 0 console errors.**

**A second checker error, and it is the same one twice.** An assertion passed **for the wrong reason** — it matched a caption rather than a label — and another failed because `text-transform` changes what `innerText` returns. *Both were mine, not the code's; the render was correct each time, and the dump proved it before the assertion was rewritten. **The rule this earns: read the rendered text before writing the predicate.***

**THE COMPACTING HAS BEGUN, and it is writing rather than deleting.** *Doug: "compact means use good writing, great organization, figures and other forms of rich content to express ideas, perhaps books with interactivity."* **The folder convention now lives in the book as a figure you use** — type an entry, toggle file or folder, and the same classifier the diagrams run answers under your hand. **7 checks, 0 console errors.**

**And it found something the sprint needed to know.** *A chapter can hold state and re-render through chemistry, with nothing lifted to the page* — so **interactivity is available at chapter grade** and does not need the framework changed. That is [T1](#the-programme--eight-tracks-so-separate-sessions-can-run-them)'s licence to teach rather than assert.

**THE FIXTURE IS BUILT — [session 1](#the-dispatch--a-first-g-last-and-the-letters-run-in-execution-order) is done.** `library/.test-library/` holds **19 files, none of them visible to git**, authored exactly as real content would be. It exercises **the dot ranking at three grades**, **a resource file** (`symmetry--figures.tsx`), **a cover that names no author** so the compiler must supply one, and **both canonical cases** — physics declares one, philosophy falls back.

*This reverses [D5](#the-decisions), which said the fixture would be specified and not created. Doug's later instruction governs, and the reversal is recorded rather than smoothed.*

**Not started.** [U6](#u6) onward. **The boundary holds: no build script exists, and `library/` gains only an ignored folder.**

**Blockers: none.**

## Open, and each is Doug's — none blocks starting

- **Three proxy names** ([Names owed](#names-owed--none-taken)) — the sprint and the book share the name *The Build*, and *fixture* is unasked-for.
- **[U15](#u15), the inheritance probe** — proposed as the sprint's one piece of code beside the book, and surfaced rather than slipped in because [D1](#the-decisions) is a hard boundary. **If cut, [U8](#u8) states its mechanism as cited-not-driven** and the citation goes to [U13](#u13).
- **[D5](#the-decisions), the fixture specified rather than created** — this amends [AE8](#acceptance-examples) and reverses an earlier instruction in favour of a later one. Stated so the reversal is visible.

## Verified — every gate, with its scope, run fresh after [U1](#u1)

| gate | baseline | after U1–U5 |
|---|---|---|
| lib suite | 239/239, 23 files | **239/239**, 23 files *(no new promises yet — [U14](#u14) and [U15](#u15) add them)* |
| app typecheck | 66 files, 1/1 baselined, 0 unexpected | **73 files**, 1/1 baselined, **0 unexpected** |
| `verify-book.mjs` | 51 checkpoints, exit 0 | **51 checkpoints**, exit 0 — *unchanged, which is the finding: it did not notice a new book* |
| `verify-demo.mjs` | 25 checkpoints, exit 0 | **25 checkpoints**, exit 0 |
| the fifth book, driven | — | **13 checks**, 0 failures, 0 console errors |
| the folder-convention chapter, driven | — | **11 checks**, 0 failures, 0 console errors |
| the canonical chapter, driven | — | **8 checks**, 0 failures, 0 console errors — *including the refusal computing itself* |
| chemistry | 674/674 | **not run — untouched this sprint**, named rather than omitted |
| `library/` | unchanged | **unchanged**, and [D5](#the-decisions) says it stays so |

*The three walks above are **ad-hoc and live in the scratchpad**, not in a gate. [U14](#u14) makes them permanent, and until it does **these numbers are not defended by anything that runs on its own.***

## Wrong turns already taken — do not repeat

- **Reading "the public build" as one deliverable.** It is six stages; the sprint that thought it was one was corrected in its first question.
- **Assuming anything moves out of the package.** *"Nothing moves from the package."* Only content written in `library/` is lifted.
- ~~**Marking subjects with a dot.**~~ **REVERSED by Doug, 2026-08-14** — dots *do* mark subjects, and the count carries the depth of subjecthood. *Kept struck rather than deleted: this list is what a later reader trusts, and a wrong turn that turned out right is worth more visible than absent.*
- **Treating the demo library as the lift's target.** The demo is `package/app`'s own; the lift reads `library/`.
- **Writing a chapter before its discussion.** [R16](#r16--the-design-is-discussed-as-it-goes-not-written-ahead-of-its-ruling) — and prose produced ahead of a ruling has to be thrown away, not edited, because it was built on a guess.
- **Putting Doug in the book.** [D10](#the-decisions). *He is the weather; in the demo this is the team's project.*

## What changed about the roadmap, and it should be carried to chapter zero

**Chapter zero's [Sprint 50 — The Public Build](00-planning.md#sprint-50--the-public-build) and [Sprint D — The Compilation](00-planning.md#d--the-compilation) are both smaller than what was agreed today.** D was one stage of six; 50 bundled the strict compiler with cross-repo consumability, documentation content and repo-creation, three of which are not this machine. **Chapter zero is stale on this and the plan should absorb it.**

## Compounded

*Distributed 2026-08-14, one lesson, while the context was fresh.*

**The dotfile finding went to [the green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md) as its fourth appearance — EDITED, not created**, because that chapter already owns the mechanism: *the number was true and the scope was silent*. A glob does not match a dot-prefixed name, so a convention whose covers are `.cover.tsx` is **half invisible to an ordinary `include`** — measured at one file of three, with no warning and no count. An explicit import finds them and compiles clean, which is why **the generated book module is the only door**, and a gate must enter through it rather than walk a pattern.

***It is the first of the four appearances nobody paid for.*** The other three were found by something already broken; this one was found by testing the assumption before building on it.

**Compacted in the same pass: 17,935 words to 16,961.** What was cut was **false, not merely long** — the eight-track programme superseded by [the dispatch](#the-dispatch--a-first-g-last-and-the-letters-run-in-execution-order) *(stubbed, its heading kept because the record links to it 37 times)*, a duplicated *Wrong turns* section, and a next-step section naming void letters.

**And one entry in *Wrong turns* had become false and is struck rather than deleted** — *marking subjects with a dot* was listed as a mistake, and Doug reversed it the next day. **A wrong turn that turned out right is worth more visible than absent.**

**Links proved, and the check paid for itself twice over.** **462 anchored links across 55 chapters: 21 broken before, 2 after** — and **none of them in what was compacted**. Nine were repaired by prefix, three by finding a renamed section, five were quoted examples rather than links. *The checker itself was wrong three ways before it was right — leading-hyphen anchors, markdown links slugged by their URL rather than their text, and backticked examples counted as links — which is its own small instance of the lesson above.*

**Flagged, not guessed at — two anchors point at content earlier compactions removed:**

- `02-sprint-45` → `01-sprint-44#second-amendment--the-loop-after-rules-alone-failed-twice`
- `06-sprint-48` → `00-planning#the-split--subjects-and-the-library-as-sprints-with-checkable-ends-doug-2026-08-06`

*Repairing them means finding where that content went, which is outside this run's neighbourhood.*

## How to see where this starts

```bash
cd library/.public/package && npx vite app
```

**The Shelf is the root** — four spines today, five when this sprint closes.
