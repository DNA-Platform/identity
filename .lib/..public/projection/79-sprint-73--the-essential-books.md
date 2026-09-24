# Sprint 73 — The Essential Books

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `built` — ***2026-09-15: his library exists, builds and publishes. 5 books · 258 writings · 0 failures; library rules 69 of 69; suite 114 of 114; tsc 0. What is owed is in [Where things stand](#where).***
- ***The chapter name is a proxy; Doug's to rename.***

---

## <a id="where"></a>Where things stand — ***2026-09-15, the second movement: his library exists and publishes***

**Next action: the interactive illustrations he asked for as a SECOND PASS, and the compiled catalogue of all the books.** *The first movement — the table of contents and spelling — closed earlier and is [registered below](#first-movement). This is the movement that built his library.*

**HIS LIBRARY EXISTS, BUILDS AND PUBLISHES.** `.me/` holds five books; the binding stands at `.me/..public/.binding` and was installed with `npm run copy`. **5 books · 258 writings specified · 0 failures**, the library's own rules **69 of 69**, the package suite **114 of 114**, `tsc -p src` **0**.

| folder | name | route | carries | subject |
|---|---|---|---|---|
| `..reference` | **Doug** | `/` | Catalogue | Doug ← **itself** |
| `.claude-and-our-projects/.reference` | Claude & Our Projects | `/claude-and-our-projects` | Biography, Catalogue | Doug |
| `…/semantic-reference-theory/.reference` | Semantic Reference Theory | `/semantic-reference-theory` | Catalogue | Claude & Our Projects |
| `…/conversations/semantics-of-types` | Semantics of Types & More | `/semantics-of-types-and-more` | — | Semantic Reference Theory |
| `my-library-log` | MY Library Log | `/my-library-log` | Autobiography | Doug |

***The tree closes on itself.*** **Doug** is the one book filed under its own subject — the summit — and it catalogues **exactly one** autobiography. Every book names *MY Library Log* as its author, written `[Doug](MY Library Log)`: it SAYS Doug and NAMES the log.

### <a id="built"></a>What was built, and what each thing cost

**THE ANNOTATIONS.** `$Biography`, `$Autobiography` and `$Catalogue` (exported as `Catalogues`) stand under `$Type` in `src/library/`, each filing itself with `this[cache]('Name')`. `$Type` carries `formula = true`. **`$Author` and `$Subject` are now mentions** — `$Catalogue` subclasses — so they name a book and read `[display](real)`. `$Canonical`, exported as **`For`**, says the book a synopsis is for, and `SynopsisSpecification` demands one.

***Two things were measured about the types and both matter.*** **Written as an element, a type resolves and its chain is readable** — `dougs-autobiography` answered **`Autobiography Biography`**. **Written as `<Type>Autobiography</Type>`, it does NOT resolve at build time**: the formula swap runs in the render walk and the binder builds books through `$()`, which [the formula](../../../chemistry/.lib/composition/12-the-formula.md) says outright is not the swap path.

**THE LIBRARY RULES**, in `.binding/specification/library.test.ts`, over the live read and never over a folder: a subject has a catalogue of that name · one catalogue per subject · exactly one book catalogues itself · the summit is an autobiography or catalogues exactly one · every book declares an author and that author is an autobiography. ***They went red with eleven failures naming the missing books before they went green.***

**NAMES ARE COPY.** `$Chapter.name` and `$Catalogue.name` answer what a person wrote; the slug happens where a URL is made — `addresses.ts` and `$Catalogue`'s own anchor. `slug` elides an apostrophe and writes `&` as *and*. **Three promises that pinned the old kebab rule were rewritten with the ruling quoted**, never deleted.

**A TITLE MEANS THE THING IT TITLES.** `$Title.meaning` is `super.meaning ?? this.document`, and `$Document.mention` answers its chapter's — so a document is in charge of the link its title represents, and it is an ordinary override any kind of document can reinterpret. **No cover in the library writes a `<Reference>`.**

**`[TEXT](TARGET)` IS OURS, NOT MARKDOWN'S.** `parser.link` is one expression and `marked` is imported nowhere in `src`.

**THE BINDER.** A face is **found, not named** — the folder holding a binding, so `..public` sorts where its keeper wants it and the name lives in exactly one line of `copy.ts`. A first copy now takes its `package.json`. A dotted folder no longer breaks the bundle. `removal` prunes the folder a renamed book leaves behind. Publishing moved to **GitHub Packages**.

**AND `$Svg`** in `src/writing/`, a kind of illustration that holds its own marks — five covers and two chapter drawings, and `$Illustration.picture()` is the seam it overrides.

### <a id="reds"></a>The reds that were real, and what they cost

- ***THE LIBRARY PUBLISHED ONE BOOK FIVE TIMES, GREEN.*** Four pages identical to the byte, none holding its own book. **The page template and a rendered page were the same file.** [Solutions 84](../solutions/84-the-five-pages-that-were-all-one-book.md) — *and the size was read backwards for an hour, because the copies were BIGGER than the original.*
- ***A TYPE UNDER `$TypeOfBook` MADE A COVER TWO KINDS.*** `writing is one kind of writing, and this one is 2`. A type a book CARRIES must not be a composition level; they stand under `$Type`.
- ***A THEME PREFIX WAS ALREADY TAKEN, TWICE.*** `mark_` owns the hamburger and `drawn_` owns `.pd-illustration img`; reusing either re-points the base's selector. **The cover plate drew at 1.25rem before this was caught.**
- ***THE RENDER WROTE PAGE FOLDERS FROM THE NAME***, so `Claude & Our Projects/` appeared on disk beside the right one. It writes them from the ADDRESS now.

### <a id="ask"></a>WHAT IS OWED — his words, and none of it designed

| what | his word |
|---|---|
| ***interactive illustrations*** | *"use $Chemistry for the illustrations, and have them be interactive, but in a way that is surprising… perhaps an `$InteractiveIllustration` control in the application"* — **the second pass he asked for** |
| ***a compiled catalogue of all the books*** | *"we might need to compile some sort of thing that can be imported as a sort of catalogue of all the books"* — **this is what connects the library**; `application/books.ts` and `routes.ts` are half of it |
| ***a subject must LINK to its catalogue*** | *"we need it to have a connected library"* — a subject draws `href="#claude-and-our-projects"` where the route is `/claude-and-our-projects`; they differ by one character and only the route table knows |
| ***`href="0"` on every title*** | a title means its chapter, whose path is the POSITIONAL address `0`, and `$Writing.view` puts it straight into `href` — **an address and a URL are the same string and should not be** |
| ***`$$Synopsis`*** | a kind of `$$Chapter` in a table of contents; a catalogue's table names the books filed under its subject, and a synopsis not present is loaded and handed to the book at compile, at the end |
| ***a participant in conversation*** | *"we will create the idea of a participant in conversation and we will annotate your biography as one of those"* |
| ***a `$Markdown` kind*** | *"marked probably provides style, and maybe it should have a Markdown component in the markdown folder, where one can write markdown"* — it is now dead weight in `package.json` |
| ***the conversation itself*** | `2026-09-09-semantics-of-types-&-more.md`, 2,282 lines, 106 messages, still a stub |
| ***a driver*** | the master binding ships no `design/`, so **nothing here has been seen in a browser** — both demos have one and neither came from the master |

### <a id="traps"></a>The traps, every one measured today

- ***`.latex` AND `.wiki` ARE FROZEN AND ARE NOT TO BE UPDATED.*** His word: *"they have done their job… I don't want to deal with regression on them."* They name their root book by a slug and a name is copy now, so they would fail that lookup. **Leave them.**
- ***THE SUITE AND THE BINDING BOTH READ `dist`.*** `npm run build:quick` before either, every time.
- ***A GREEN BUILD SAYS NOTHING ABOUT A PAGE.*** The specification reads BOOKS; the graph is written before a page exists; the manifest records that a file was written. **Look at what is on disk.**
- ***A THEME PREFIX IS A NAME IN A SHARED SPACE.*** Grep the base themes before choosing one.
- ***`.me` IS ON THE LOCAL LINK.*** It pins `^0.0.3`/`^0.1.2` but resolves through the hoisted symlink; GitHub Packages holds nothing yet, so the move needs a push and CI.

### <a id="first-movement"></a>The first movement, closed — registered rather than retold

**The table of contents names every chapter of its book, spelled right.** Built, driven and compounded on 2026-09-15 into [Solutions 83](../solutions/83-the-heading-that-was-there-and-answered-nothing.md); the requirements and their evidence stand at [R1](#r1)–[R9](#r9) and the rulings at [the rulings](#rulings). *What it left owed — the digest that does not change when the framework changes, and [the link-in-a-heading defect](../solutions/82-the-heading-that-named-itself-after-its-own-link.md) — is still owed.*

## <a id="handoff"></a>TO THE SESSION THAT OPENS WITH HIS BRIEF — ***read this before you plan anything***

***You are not starting this sprint. Its first movement is built, green and seen, and the brief you were handed is the SAME brief — he is shipping it again, not asking for it twice.*** **The line *"the first thing we are going to do is make sure that the table of contents has all of the chapters in its book, and they have to be spelled right"* is DONE.** *Do not rebuild it. Read [Where things stand](#where) for the numbers and `src/library/Chapter.tsx`, `Document.tsx`, `TableOfContents.tsx`, `Book.tsx`, `reference/Catalogue.tsx` and `.binding/specification/library.test.ts` for what it became.*

### <a id="handoff-standing"></a>What stands, so you do not re-derive it

**A book identifies its table of contents; the table carries the chapters it catalogues; a mention is named by its own copy — so *spelled right* is `mention.name === chapter.name`.** **`[Label](name)`** is built and shares `parser.link` with `$Ref`. **The framework holds READINGS; what a library IS lives in the binder's vitest suite** — *names every chapter it holds*, *names each chapter once*, *has a table of contents*, *is named chapter by chapter in it* — which the build runs and `npm test` runs. **A chapter validates its own title** (`ChapterSpecification.$isTitled`).

### <a id="handoff-ask"></a>ASK HIM — these are his, and guessing them will cost you the sprint

**Nothing below is designed. Each is a ruling he has not given, and the last session ended without them by his own instruction.**

| what to ask | what you need to know before asking |
|---|---|
| ***the subject and author annotations*** | **`$Author` and `$Subject` ALREADY EXIST** as `$Section` subclasses of a cover holding plain TEXT, and they are byte-identical to each other and to the pre-2026-09-09 `$Title` — so both silently drop any writing that is not a string. **His spitball, not a ruling:** *"I think they should be Annotations, maybe even types… They could be `$$Subject` and `$$Author` and then Subject and Author export as wrappers when you need to visualize them… parenthetical."* [Sprint 72 D4](78-sprint-72--the-compilation-audit.md#d4) deliberately held what an author or subject must NAME |
| ***the biography and autobiography annotations*** | no design exists. The derivation does: [The Author's Fixed Point](../the-semantics-of-books/13-the-authors-fixed-point.md) and [The Subjective Subject](../the-semantics-of-books/07-the-subjective-subject-and-the-library.md) name `$Biography`, `$Autobiography`, `$SubjectiveSubject`, `$Library` and say an autobiography is the one book whose author arrow does not escape it |
| ***"the subjects and catalogue annotations"*** | the words are his and undefined here. `$Catalogue` exists and is a `$Reference`; there is no `Subjects` |
| ***WHICH books are the essential ones*** | **`library/` is near-empty scaffolding**: `dictionary` is thirteen ZERO-BYTE `.tsx` files, duplicated byte-for-byte under `.reference/dictionary` — so the two fail at LOAD before a title is read — and `pharmacology`, `philosophy`, `physics` are a `package.json` each. He must name the books |
| ***WHICH conversation to import*** | **465 of them**, in the sibling repo at `dna-library/library/claude-dna/conversations/`, frontmatter plus `**User**` / `**Agent**` blockquotes. [Eirian's Six Core Books](78-sprint-72--the-compilation-audit.md) is the source document for the library shape |
| ***what "a view of all of it" is*** | undefined |
| ***R9, deferred*** | *"Rewrite later."* A document opening with its title: 26 documents in 25 files, and the heading-level question inside it is [analysed but unsolved](#r9) |

### <a id="handoff-traps"></a>The traps that cost the last session hours — every one measured

- ***THE DIGEST DOES NOT CHANGE WHEN THE FRAMEWORK CHANGES.*** **Rebuild `dist`, run specify, and every book comes back *unchanged* — you have tested nothing.** *Delete `.graph.json` to force a read. This is the sprint's largest owed fix.*
- ***A SPECIFICATION FAILURE STOPS A WRITING FROM BONDING, so a red rule is a BLANK PAGE, not a red promise.*** Sixteen tests failed from one rule and fourteen of them were draws.
- ***`verify-wiki.mjs` reaches `en.wikipedia.org`*** for its geometry comparison and cannot run without a route to it. Its two addresses were corrected (it had been driving `turing/` and `article/`, 404 since Sprint 72) but the comparison still needs the network. **Drive our own pages instead.**
- ***The prerendered page is a SHELL that hydrates*** — byte-identical to `4a0e0af` — so *"hydration recovered by re-rendering"* is how this road has always drawn. **Not a regression. Do not chase it.**
- ***The suite reads `dist`.*** Rollup before vitest, every time.
- ***CEREMONY WAS REJECTED TWICE*** and he was right both times: a `<Row>` wrapper to satisfy a rule, and a class change to dodge one. **When a fix is a wrapper, the seam is missing — ask him.** His words: *"If what you are doing is more complex or fighting what is there, you are doing it wrong and you need to talk to me."*
- ***Read [The Coding Style](../the-coding-style/03-the-coding-style.md) before writing a line*** — he says *"we have worked hard to make it clean and we will work triple hard to keep it clean"*, and the one rule under all of it is **WE DO NOT INNOVATE**: not a member, not a member NAME, without asking.

**The sprint is larger than what is specified here.** Doug's brief opens it: *"define the essential books of my library, scaffold them, import a real conversation of ours into chemistry, and create a view of all of it"* — inventing, on the way, *"the subject and author annotations, the biography and autobiography annotation, the subjects and catalogue annotations, all in library"*. **This chapter specifies the FIRST movement only**, which he named: *"the first thing we are going to do is make sure that the table of contents has all of the chapters in its book, and they have to be spelled right."* The rest is [what follows](#what-follows).

**What it grows from.** [Sprint 72](78-sprint-72--the-compilation-audit.md) made the library specifiable and left three rules explicitly [owed to the framework](../writing-a-book/07-specifying-a-library.md#owed) — *the table of contents catalogues all chapters* is one of them, and this is that debt paid.

**Read first:** [the rulings](#rulings) · [the analysis](#analysis) · [the requirements](#requirements) · [Specifying a Library](../writing-a-book/07-specifying-a-library.md) · `src/library/Chapter.tsx`, `TableOfContents.tsx`, `Book.tsx`, `Document.tsx` as they stand.

## <a id="rulings"></a>Rulings — ***his words, verbatim, 2026-09-16***

- <a id="r-first"></a>**THE FIRST MOVEMENT:** *"the first thing we are going to do is make sure that the table of contents has all of the chapters in its book, and they have to be spelled right."*
- <a id="r-catalogue"></a>**WHAT THE TABLE IS:** *"Catalogue is an interface. If a chapter is a composition of references to chapters, it means that is where the table is for the table, otherwise, I think everything else would refer to its cover."* · *"a book points at its cover, the chapters point at the table of contents that catalogues them."*
- <a id="r-mention"></a>**THE MENTION, AND ITS NAME:** *"Create a `$TypeOfChapterMention` as a way of denoting that, and we can use Mention as the `$$` prefix."*
- <a id="r-name"></a>**WHAT IS COMPARED:** *"It's not the contents row. We use the `$$Chapter` inside. That thing needs to get the chapter, and whatever it gets, we need a name and Title on a chapter the way we have it on a book… spelled right can be the name of the chapter is right in the way the book name was — they both kebab-case to the same copy."*
- <a id="r-search"></a>**HOW IT IS FOUND:** *"I don't think rows are important, but the `$$Chapter` somewhere in there carrying the title is probably the thing the specification will search for until it finds them."*
- <a id="r-all"></a>**EVERY CHAPTER, NO EXCEPTION:** *"All of them. Frequently those will be interesting. An indescript link that the title of table of contents has which is its self-link and another link back to the cover that might be a back arrow or the name of the book. They can even be parenthetical. But they all have to be there."*
- <a id="r-both"></a>**TWO RULES, TWO OWNERS:** *"Both — book checks one EXISTS, contents checks its form."* Given first on **2026-08-22** and quoted in [I16](../the-condition-report/05-implementation.md): *"it's the job of — for instance — the book to throw an error if its table of contents is missing, and then the table of contents' job to throw errors if its form is wrong. I bet this will clean up some really nasty code."*
- <a id="r-title"></a>**THE TITLE:** *"Well the title can be the heading of the first section of the chapter. It should be title though if it isn't too hard to change."*
- <a id="r-heading"></a>**THE MISSING ONE:** *"I don't know how it can avoid not having a heading, and we might change heading to title — but either way. see why it doesn't need a heading. It should. Please put them in even if parenthetical (print false)."*
- <a id="r-position"></a>**THE APPARATUS:** *"Maybe we do keep them positional."* · *"cover, synopsis and table. Do keep that and have that be the way they are identified."*
- <a id="r-simple"></a>**THE STANDARD:** *"I want to hold you to simple simple code. It should not be hard — it should be one line codes, barely any more members, etc… Zero tolerance for cleverness, a fight, bending over backwards."* · *"If what you are doing is more complex or fighting what is there, you are doing it wrong and you need to talk to me."*
- <a id="r-promise"></a>**THE PROMISE ASKED FOR, granting the four `src` changes:** *"Yes all of them, but I need you to promise that you will net reduce complexity in the codebase and it will be patterned and coded correctly and in better shape based on where things are, what patterns there are implemented with, than when you started."*
- <a id="r-design"></a>**HOW IT WAS TO BE DESIGNED:** *"do the architects analysis of the code and come up with a solution to this that involves what is a subclass, what has a type, what is at the document level, and how it gets to the validation."* · *"We need this system to be elegant. Come design it right with me."*
- <a id="r-copy"></a>**THE COPY MATCHES THE TITLE:** *"I would say it has to carry the same copy as the Titile, and with the formula, the copy might be latex."* **So the `[Label](name)` syntax is not needed and is dropped.**
- <a id="r-titled"></a>**EVERYTHING HAS A TITLE:** *"Everything has to have a title. We need to validate that. Check section and see why sections can get away without one. They shouldn't."*
- <a id="r-first"></a>**THE DOCUMENT OPENS WITH ITS TITLE:** *"A Document should have a first section that is a title yes."*
- <a id="r-green"></a>**GREEN IS NOT THE GATE:** *"Rewrite and figure out how to fix. OR accept that we don;t be at green this sprint. OR at least, green may mean broken. I would do the work as it appears."*
- <a id="r-framework"></a>**WHERE THE EFFORT GOES:** *"Writing the framework code is far far more important."*
- <a id="r-label"></a>**THE LABEL, ASKED FOR AND BUILT:** *"I want it like Ref and I want it clean. Do this: `[Name](Actual Name)`"* · *"I think should should support [Name](Actual Name) for a simple way to display something other than the name, which would be more like a code with that syntax. Implementing that would share something with Ref."*
- <a id="r-four"></a>**ALL FOUR BOOKS:** *"WE have to guarantee the existing and new specification on all four of our current books so please do that. Use parentheticals if needed put restyling on the right / theme format — the right one, the one where it makes semantic sense and causes the least friction and gets to future versions that need it."* · *"Cleanup is all things you identified that break spec. Get us to green."*
- <a id="r-parenthetical"></a>**THE SEAM, WHICH WAS ALREADY THERE:** *"One should be free to display as they wish. Why can't we have a way to choose to display mentions or other annotations or whatever? An annotation should still start as parenthetical and I think we want it printed if it isn't. Wouldn't that setting also serve to ensure it gets printed nowhere now, but allows for printing?"*
- <a id="r-library"></a>**WHAT A LIBRARY IS, SPECIFIED:** *"we want to make sure that we are specifying what a library is and that all chapters are unique and they are all represented in the table of contents of a book. That should exist in the spec now even if the way its enforced is through the specify rule that exists."*
- <a id="r-control"></a>**HOW TO WORK:** *"I want very low level control."* · *"Look at every file of the core framework you touch and if you need to make a mess, ask me to double check before you mess up the code."*
- <a id="r-recover"></a>**RECOVERY IS THE POINT, which withdrew R8:** *"You should be able to recover a heading. For the chapter, it should have a title, so let its first heading even have to be a title of its first section. That is the promise."* · *"The chapter title IS the heading of its first section PERIOD"* · *"can it be the section with a Title as its heading?"*
- <a id="r-badchapter"></a>**WHERE THE DEMAND STANDS:** *"If the created one is bad, then we wrote a bad chapter. Have chapter validate the title then rather than any header or something like that."*
- <a id="r-allchapters"></a>**AND IT APPLIES EVERYWHERE:** *"that is why book name can be driven off cover name, but it needs to apply to all chapter documents."*

## <a id="analysis"></a>The analysis he asked for — ***what is a subclass, what has a type, what is at the document level, and how it reaches validation***

***Four readings of the code, each measured rather than assumed, and together they decided every requirement below.***

**The `$$` mention exists at exactly the levels of composition and nowhere else.** Eight classes — `$$Letter`, `$$Word`, `$$Sentence`, `$$Paragraph`, `$$Section`, `$$Document`, `$$Chapter`, `$$Book` — which is precisely reflection's two ladders. Cover, synopsis, contents, index, catalogue card, title, author and subject have **no mention**: they are *kinds* of document, not *levels*, so they are mentioned as documents. **So a contents holding `$$Chapter`s is already the right grain**, and nothing else could be referred to that way.

**Not one `$$` class carries a type.** All eight are bare `extends $Catalogue { }`, so a chapter mention and a section mention are indistinguishable to `reflection`, and [his search](#r-search) cannot be written. **That is the one obstacle, and [R1](#r1) is its removal.**

**Two of the things he asked for are already in `$Book`.** `get document() { return this.cover?.mention; }` — *a book points at its cover*, in the code today. And its bond gives every chapter a `$$Chapter` that holds the chapter, pathed by position. **So the TRUE list of chapter mentions already exists and needs nothing built** — it is what the book made; the contents is a second, authored list of the same thing, and the rule is that the two agree.

**A chapter already knows its document, and it costs no new machinery.** `$Chapter.parts()` **is** `reflection.printed(this)` — made once and kept in a WeakMap — and `ChapterSpecification.$holdsSpecifiedParts` already calls it. *The chemistry assignment he was careful about is not needed.*

### <a id="where-the-rule-lives"></a>Why the rule goes where it goes

***The contents' own specification runs BECAUSE the document is a contents, so there is no "am I the contents?" test anywhere.*** Put the rule on `ChapterSpecification` instead and it needs a kind-conditional on a base — **the pattern Doug has ruled against**: *the base declares the seam, the kinds override.* **So the declaration is what the author already writes** — a `<TableOfContents>` — and nothing new declares anything.

***And the book's half is the other owner, per [his ruling](#r-both):*** a book raises if it has no contents; a contents raises if its form is wrong. Two rules, two classes, no conditional in either.

### <a id="position"></a>Why the apparatus stays positional — and the live defect that decides it

**`$Book.cover`/`synopsis`/`table` are `chapters[0]`/`[1]`/`[2]`.** *Measured 2026-09-16:* **`.wiki/.encyclopedia` holds no `.table.tsx` at all** — its chapters are cover, synopsis, then four content chapters — **so `$Book.table` answers `1-the-languages` today.** A wrong answer, standing, not hypothetical.

***That is an argument FOR position rather than against it.*** **Position is trustworthy exactly when the apparatus is mandatory, and [R4](#r4) makes it mandatory.** *Reading them by type instead would call `print()` on chapters merely to find the table, which at a thousand heavy books is not free — the memory wall [Sprint 72 measured](../writing-a-book/07-specifying-a-library.md#wall).*

### <a id="the-title"></a>Why the title costs no `src` change

**`$Document.title()` is `searchFor($TypeOfSection)[0]?.heading()`, and `$Title extends $Section`** — a title is its own heading. **So `<Title>Contents</Title>` written in a document IS the first section, and `title()` answers it as the code stands.** *The paper's contents answers nothing today only because it writes `<Heading>Contents</Heading>` outside any section, where the first section-typed child is a `<Row>` whose `heading()` is deliberately undefined.* **[His word](#r-title) — "it should be title" — is therefore the cheap fix, not the expensive one.**

***And the answer to "see why it doesn't need a heading" is that NOTHING DEMANDS ONE.*** *There is no rule anywhere that a document has a title; `SynopsisSpecification` declines only `$saysSomething`. Turing's synopsis is silent because no one ever asked it.*

**Measured across the four demo books, 2026-09-16:** *four of six apparatus documents answer a title; two do not* — **the paper's contents** (heading outside a section) and **turing's synopsis** (two paragraphs, two images, no heading at all).

### <a id="type-logic"></a>One correction to the record

***Doug: "WE haven't put logic on a type before." We have, seven times.*** **`$TypeOfSection.makes()` builds sections from tokens and `SectionSpecification.supplies()` reads a heading out of an opening sentence when none was written**; `makes()` is declared on `$Type` itself and overridden by Letter, Word, Sentence, Paragraph, Item and Section. *Logic on a type is an existing pattern, not a new one — which is what makes his own proposal available rather than novel.*

## <a id="requirements"></a>Requirements — ***approved 2026-09-16***

- <a id="r1"></a>**R1 — A chapter mention is typed.** `$$Chapter` carries `$TypeOfChapterMention`, so the specification can find chapter references wherever they stand — [his ruling](#r-mention), and with it the reading convention that **`$$` is spoken as *Mention***. *The separate type is deliberate: a mention and the thing mentioned must not answer the same question, or every walk asking "what chapter am I in?" has to tell them apart.* **AE1:** `reflection.within(the paper's contents, $TypeOfChapterMention)` answers **11** against the contents as it stands, and **14** once the apparatus is named.
- <a id="r2"></a>**R2 — A chapter answers its title and its name, the way a book does.** Two properties on `$Chapter` in the property stack, two readonly members on `$Chapter$`, mirroring [Sprint 72's `$Book.title`/`.name`](78-sprint-72--the-compilation-audit.md#u1) one level down. **AE2:** `.latex/aaronson/1-introduction` answers title *Introduction* and name `introduction`.
- <a id="r3"></a>**R3 — A document is titled, and the title is a `<Title>`.** Every apparatus document carries one, **parenthetical where it must not draw** — [his ruling](#r-heading). *No `src` change: see [why](#the-title).* **AE3:** all **11** apparatus documents across the four demo books answer a title — paper 3, `.article` 3, `.encyclopedia` 3, turing 3 — where two answer nothing today.
- <a id="r4"></a>**R4 — A book has a contents.** `BookSpecification` raises where none stands. **`.wiki/.encyclopedia` gains one, parenthetical**, since it has none; its page is unchanged and `$Book.table` becomes correct there for the first time. **AE4:** removing a book's `.table.tsx` turns the build red on that book's cover, in the compiler's line shape.
- <a id="r5"></a>**R5 — A contents names every chapter of its book, spelled right.** One `@specify` method on `TableOfContentsSpecification`, **no conditional**. *Every* chapter — cover, synopsis and the contents itself included, parenthetical where they should not draw ([his ruling](#r-all)). Spelling is the name comparison [he set](#r-name): the mention's copy and the chapter's title kebab to the same token. **This supersedes [S14](../the-condition-report/04-semantics.md#s14)**, which stands as `LEAVE`; it is struck in the same act, never dropped quietly. **AE5:** a misspelled entry and an omitted chapter each turn the build red with a line naming the book, the name given and the name owed; corrected, it is green.
- <a id="r6"></a>**R6 — The apparatus is identified by where it stands.** `cover`, `synopsis`, `table` stay `chapters[0]`/`[1]`/`[2]` — [his ruling](#r-position) — and [R4](#r4) is what makes that safe. **AE6:** all four demo books answer the three apparatus chapters correctly, the encyclopedia included, where `table` is wrong today.
- <a id="r7"></a>**R7 — Both demos, seen.** **AE7:** the four pages are seen in a real browser, and what is red is *named* rather than hidden — [green is not the gate](#r-green).
- <a id="r8"></a>**R8 — A section opens with a heading it was written with.** The escape in `$opensWithHeading` — `|| parser.tokens(writing).length > 0`, which lets any section holding readable prose pass — is struck, [his ruling](#r-titled). *Measured: **one** written section in the demos relies on it (`.wiki/.encyclopedia/2-the-foundation.tsx`) and two promises in `writing.test.tsx` pin it on purpose. Sections the parser MAKES are untouched — the descent never specifies them.* **AE8:** a written section with no heading turns the build red on its chapter.
- <a id="r9"></a>**R9 — A document's first section is its title.** [His ruling](#r-first), and it **supersedes [R3](#r3)**, which only asked that a document be titled. *Measured: **26 documents across 25 files** open with `<Section>`; each becomes `<Title>`, and the body rises a level.* **AE9:** every document in both demos answers a title, and the rule refuses one that opens otherwise.

  ***THE HAZARD, NAMED AND UNSOLVED — deliberately.*** **The outer section carries the chapter's heading AND gives the body its depth.** `reflection.indent` counts holders of the same kind, so today `Document › Section("Introduction") › Section("The Importance of P = NP")` draws **h2 then h3**; with the outer section replaced by a `<Title>` there is one section level left and **the chapter title and its own subsections both draw h2**. *Three shapes were named and NONE chosen — a level added where a document holds a title, a fixed level for a title's own heading, or a depth counted from the document rather than from the nearest holder — because choosing needs the code in hand.* **Doug: *"Rewrite and figure out how to fix… I would do the work as it appears."***

### <a id="src"></a>The `src` changes, each granted explicitly

***The first four are ADDITIVE. R8 and R9 are NOT*** — R8 strikes a clause from a standing rule and R9's level fix changes behaviour the demos were measured against. **That is a different character from what was first approved and is recorded here rather than left unsaid.**

| the change | additive | the pattern it follows | requirement |
|---|---|---|---|
| `$TypeOfChapterMention` · `$$Chapter`'s bond in `Chapter.tsx` | ✓ | the `$TypeOfX` declaration eight kinds already carry | [R1](#r1) |
| `get title()` · `get name()` on `$Chapter` | ✓ | `$Book.title` · `$Book.name`, one level down | [R2](#r2) |
| `$hasContents` on `BookSpecification` | ✓ | a `@specify` method in a class that exists and is empty | [R4](#r4) |
| `$namesEveryChapter` on `TableOfContentsSpecification` | ✓ | a `@specify` method in a class that exists and is empty | [R5](#r5) |
| `$opensWithHeading` loses its parser clause in `Section.tsx` | ***no*** | a rule tightened, not added | [R8](#r8) |
| a document's first section is a title, in `Document.tsx` | ✓ | a `@specify` method in a class that exists and is empty | [R9](#r9) |
| the level fix — **file unknown**, `Reflection.indent` or `Heading.view` | ***no*** | **undesigned; solved with the code in hand** | [R9](#r9) |

### <a id="code"></a>The code · <a id="suite"></a>what it cost the suite

*Stubs, compacted at compounding: the exact members were written out here while they were being agreed, and they are now the code — /, , , , , , /, , and the two readings [Solutions 83](../solutions/83-the-heading-that-was-there-and-answered-nothing.md) corrected. A member is read where it stands. The suite cost was predicted at two promises and ran to nine before the readings were fixed; it is 112 of 112 now, which is where it is read.*

## <a id="todos"></a>Sprint todos — ***his, as given***

- <a id="todo-name"></a>**A NAME IS THE COPY, NOT A TOKEN.** *Doug, 2026-09-15:* **"No you NEVER write urls. Do we need to make the name on Book just the copy and it gets kebab cased when used for a url, so you understand that names aren't actually kebab cased?"** — `$Book.name`, `$Chapter.name` and `$Catalogue.name` all answer `reflection.slug(...)` today, so a name IS a token and an author writing one writes a URL. **The name should be the copy; the kebab happens where a URL is made.**
- <a id="todo-resolve"></a>**A WRITTEN TYPE NAME DOES NOT RESOLVE AT BUILD TIME.** *Measured 2026-09-15:* `<Autobiography />` answers **`Autobiography Biography`** through `reflection.names`, and `<Type>Catalogue</Type>` answers **`Catalogue`** alone — the formula swap runs in the render walk and the binder builds books through `$()`, which [the formula](../../../chemistry/.lib/composition/12-the-formula.md) says is not the swap path. **So a library rule that reads a book cannot see a name form, only an element.**
- <a id="todo-subject"></a>**A SUBJECT CALLED DOUG NEEDS A CATALOGUE.** *His rule:* **"there can be only one Library Catalogue"**, *and* **"every book's subject has a catalogue"** — so the subject `Doug` is owed the book that catalogues it.
- <a id="todo-lift"></a>**A TYPE WRITTEN ON A COVER DESCRIBES THE BOOK.** [S17's lifting](../the-condition-report/04-semantics.md#s17-lifting) — *"LIFT the subject and author annotations, if not all annotations, from the cover to the book"* — is not built, so the binder reads the cover rather than the book.

## <a id="what-follows"></a>What follows in this sprint, not specified here

***Named so the brief is not lost, and none of it is designed yet.*** **The essential books of Doug's library, defined and scaffolded** — `library/` holds thirteen zero-byte files under `dictionary`, a byte-identical copy under `.reference/dictionary`, and three subjects that are a `package.json` each. **A real conversation imported and drawn** — the corpus is 465 files in the sibling `dna-library` repository. **A view over all of it.** **And the annotations:** subject and author, biography and autobiography, subjects and catalogue — *for which [`$Author` and `$Subject` already exist as sections of a cover holding TEXT](../../package/src/library/Author.tsx), [Sprint 72's D4](78-sprint-72--the-compilation-audit.md#d4) held the reference convention deliberately, and [The Author's Fixed Point](../the-semantics-of-books/13-the-authors-fixed-point.md) carries the derivation.*

**Out of scope by his word or by silence:** the `[Label](name)` alternate syntax he asked us to *consider* — *"in case we want to write a different label for it"* — which is real work, since `$Catalogue` does not parse a markdown link and `$Ref` does; a general rename of `$Heading` to `$Title`; and a type for the other seven `$$` classes, which nothing yet needs.

## <a id="names"></a>Names — proxies flagged

**Doug's:** `$TypeOfChapterMention`, *Mention* as the reading of `$$`, `title`, `name`, *spelled right*, *cover · synopsis · table*. **Proxies, his to rename:** this chapter's name; `$hasContents`; `$namesEveryChapter`.
