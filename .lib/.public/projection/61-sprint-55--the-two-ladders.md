# Sprint 55 — The Two Ladders

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **state:** `implementation-ready` — *the design is Doug's and he gave it as seven steps*

---

## <a id="requirements"></a>THE DESIGN — ***Doug's words, 2026-09-09***

> *"Philosophically there are levels. Letter through Document define levels of a single document. Chapter is one type composition that is a part of a new hierarchy that that one lives inside. Book is then a composition of those."*
>
> *"We turn every `$(<Chapter>…)` into that, and then we don't have the dirty book."*

***THERE ARE TWO LADDERS AND THE LIBRARY HAS BEEN RUNNING ONE.*** **Letter → Word → Sentence → Phrase → Paragraph → Section → Document are the levels of A SINGLE TEXT.** *A chapter is not the next rung of that ladder — it is the first rung of ANOTHER, the levels of a LIBRARY, and a book composes those.*

***And the joint between them is what a chapter IS:*** **a reference on the library ladder whose VIEW draws a document on the text ladder.** *Everything in step 5 follows from that one sentence — a cover, a table of contents and a synopsis are all chapters because each is a reference that MEANS a document — and so does step 7, where a book catalogues chapters exactly as a chapter catalogues its document.*

**Two rules given with it, both measured the same day:**

| the rule | the state |
|---|---|
| ***no static members except `$register` functions*** | **three statics in `src`**: `$Type.$register`, `$Theme.$register`, `$Theme.$dresses`. *The wart is that ONE CLASS carries two registration statics; they want to be one member — `$register(within?)`, no argument registering at build and an argument registering for a book.* |
| ***a constant that is not a component is likely a wart*** | **exactly five**: `html`, `parser`, `reflection`, `tex`, `url` — every one a procedural singleton, which is [Polymorphic Limiting](../the-type-system/06-polymorphic-limiting.md)'s finding from the other side: *17 of Reflection's 22 methods are methods of Writing or Type living outside both.* |

## <a id="units"></a>THE UNITS — ***Doug's seven, kept in his order***

| | | |
|---|---|---|
| **U1** | ***rename `$Chapter` to `$Document`*** | *A document is the composition of sections, which `$Chapter.below()` already returns. A rename, not a redesign: 90 references in `src`, 132 in the demos, and the demos' `.chapter.tsx` becomes `.document.tsx`.* |
| **U2** | ***say documents where chapters were meant*** | *Every local, every parameter, every comment. `$Book.chapters` becomes what it actually holds.* |
| **U3** | ***read the parser and reflection against the new reading*** | **A document inside a document is what a chapter used to be**, so `parts()`, `beneath()` and `indent()` are all asked a different question now, and each has to still answer it. |
| **U4** | ***build the new `$Chapter` on the normal pattern*** | *A catalogue of chapter references — **like a letter but referential** — that passes only annotations forward. **Because the document lives in the VIEW, its BLOCK holds nothing but annotations**, and that is the thing to validate: we are not expecting to pass a chapter anything.* |
| **U5** | ***cover, contents, synopsis and the rest become kinds of chapter*** | *`$$Chapter` knows how to register itself into a collection of writings that are references to chapters — **they just have to MEAN a chapter**. The contents is the complex one; the others catalogue themselves. **The registration system has to work.*** |
| **U6** | ***a synopsis means its book*** | *Which is what makes U7 possible.* |
| **U7** | ***a book catalogues books*** | *As a chapter catalogues chapters, and what it answers is everything the synopses mean.* |

## <a id="why"></a>WHY THIS IS THE ANSWER — ***what it explains that nothing else did***

**`$Book` keeps acquiring apparatus and surgery because it is standing in for two things at once.** *Every symptom of the last sprint is a symptom of that:*

- ***the dirty book*** — `_block` filtered and concatenated by hand to swap a theme, in a demo.
- ***`$Book.placed()`*** — five members placed by hand at fixed positions, with a promise asserting the third is a table of contents.
- ***`get chapters()`*** — a searchFor followed by a filter that names five apparatus members it must exclude, one by one.
- ***"a book cannot know its own scope"*** — recorded [in `$Book` itself](../../package/src/library/Book.tsx) as a design owed.
- ***"a heading named in math has no name"*** — the contents reads TEXT out of a heading because it has no reference to the document that heading opens.

***Every one of those is a book reaching THROUGH a chapter to a document.*** **Give the chapter its own rung and the reach disappears.**

## <a id="risk"></a>THE RISKS — spent

*The risks a plan carried before it ran. One fired and is in [where it landed](#landed): a promise fell when `below()` stopped over-specifying, exactly as U3 predicted.*

## <a id="evidence"></a>THE WORKAROUND, AS EVIDENCE — ***the assignment, answered against my own code***

***Doug: "this desperately requires you to look at everything you create and find one of those situations where you made a workaround as evidence of a feature or design that is needed or is broken, and use it as evidence of needing repair."***

**Here it is, and I wrote it two days ago with a comment defending it.** *In `$Book.listed()`, building a contents entry:*

```ts
held: part.parent instanceof $Writing ? part.parent.className : '',
```

***A contents entry carries the CSS CLASS STRING of the thing that holds what it names.*** **Not a reference to it. A string of class names**, passed to the sheet so it can write `:not(.pd-references):not(.pd-appendix)` and skip the apparatus when it numbers. *I defended it as "the book passes on the classes that writing already writes, without $Book in the base ever hearing of an appendix" — which is true, and is the sound of a workaround being pleased with itself.*

**What it is really saying is: an entry cannot reach what it names.** *So the reach was replaced with a string that a STYLESHEET can pattern-match, and the knowledge left the model for the sheet.*

***Three other things I built are the same fault wearing other clothes:***

| the workaround | what it could not reach |
|---|---|
| ***`html.text(heading)`*** names an entry, so a heading holding `$Math` draws `\mathsf{P} \stackrel{?}{=}` | *the heading's WRITING. A writing has one parent, so it cannot stand in two places — and an entry is the second place.* |
| ***`get documents()`*** is a `searchFor` followed by a filter naming five apparatus members one by one | *any statement of which parts are the BODY. The filter is the statement, written as a list.* |
| ***`placed()`*** puts five members at fixed positions, with a promise asserting the contents is third | *an order the parts could declare. Position stands in for meaning.* |

## <a id="repair"></a>What the repair is, and it is Doug's design exactly

***Make the contents entry a CHAPTER — a reference that MEANS a document — and all four disappear at once:***

- **it needs no class string**, because it holds the reference and can ask it what it is;
- **it needs no `html.text`**, because a reference draws what it means rather than copying it;
- **`documents` needs no filter**, because a book's parts are chapters and a chapter says which kind it is;
- **`placed()` needs no positions**, because the parts are self-referring — *Doug: "at the book level the parts are self-referring"* — and a book can ask rather than count.

***That is the test I will hold the sprint to: those four lines are deleted, not moved.***

## <a id="calibration"></a>WHAT $Chapter MAY COST — spent

*A budget set before the file existed. The answer is in the record: `$Chapter` is 41 lines against `$Document`’s 43, and the question it was asked to settle — how much complexity a chapter may carry — was settled by Doug in one sentence, "It takes nothing."*

## <a id="u3"></a>U3 · THE PARSER AND REFLECTION, READ AGAINST THE NEW MEANING — ***done, and it found something better than a problem***

***The ladder today is ONE CONTINUOUS CHAIN, and `below()` is where it is written down:***

```
Book -> Document -> Section -> Paragraph -> Sentence -> Word -> Letter        (List -> Item, a branch)
```

**That is the single ladder the design replaces**, *and the split has to happen exactly here:* `$Book.below()` becomes `$TypeOfChapter`, **and `$Chapter.below()` stays UNDEFINED** — *because a chapter does not COMPOSE a document, it MEANS one, and the document lives in its view.*

### The machinery survives it, and the reason is already written

**`$Composition.parts()` handles `below() === undefined` today**: it answers every token as a part. *For a chapter that is exactly right — `parser.tokens` already filters annotations out, so a chapter holding **nothing but annotations** answers **no parts at all**, which is the validation Doug asked for in U4, met by machinery that already exists.*

**`reflection.indent()` has ONE caller** — `$Heading` choosing h2 through h6 — *and it counts holders of the same kind, so documents inside documents go on answering what sections inside sections answer now.* ***Unaffected.***

### And `reflection.beneath()` has NO CALLERS IN `src` AT ALL

***Four assertions in the suite, and nothing else in the library asks it anything.*** **A reading that walks the whole ladder, kept alive entirely by its own promises** — *including this one:*

```ts
it('AND IT REACHES ALL THE WAY DOWN — a letter is beneath a book', () => {
    expect(reflection.beneath(built<$Type>(<TypeOfBook />), built<$Type>(<TypeOfLetter />))).toBe(true);
});
```

***That promise IS the single-ladder design, written as a test and outliving the code that wanted it.*** **When the ladder splits it will go red, and it should** — *a letter is not beneath a book any more; it is beneath a DOCUMENT, which a chapter means.* **It is the first thing in this sprint that will fail for the right reason.**

### <a id="sequencing"></a>The sequencing risk this exposes

**`$Book.below()` cannot become `$TypeOfChapter` until the book actually HOLDS chapters.** *Between U4 and U5 the ladder would lie — a book holding documents while declaring it holds chapters — so **U4 and U5 land together or `below()` changes last**.*

---

## <a id="state"></a>WHERE THIS SPRINT STANDS — superseded

*An interim state, kept only for its anchor. [Where it landed](#landed) is the record.*

## <a id="u4"></a>U4 · $Chapter EXISTS — ***done, 44 lines of code inside its budget***

***Doug simplified it, and the simplification dissolved the sequencing risk:*** **"Can you do chapter is a composition of chapters like Letter, same type of catalogue, and then book is a composition of chapters. Okay nothing fancy."**

**So it is the ordinary four declarations and nothing else** — *the strong class, its catalogue twin, a type for each, a specification for each, `below()` pointing at itself.* ***What makes it the joint between the two ladders is not machinery:*** **it is that a chapter's MEANING is a reference, so what a chapter stands for is a document or another book, and the reference says which.**

> ***Doug, on where a book of books comes from:*** *"the way a book is a composition of books is both in the meaning side of reference and the filtering side of polymorphism (not all chapters but some). It is the story of things breaking out of their abstraction."*

**A book composes chapters; SOME of those chapters mean books; asking for those is a FILTER and not a new kind.** *That sentence is U7, already answered before U7 is written.*

## <a id="u5-attempt"></a>U5 · ATTEMPTED, REVERTED, AND WHAT IT COST TO LEARN

***The obvious move is wrong and it took sixteen red tests to see why.*** **Making `$Cover`, `$Synopsis`, `$TableOfContents`, `$Index`, `$Footer` and `$Part` extend `$Chapter` instead of `$Document` breaks them**, *because of what they HOLD:*

- **a cover holds a title, an author and a subject** — which are `$Section`s;
- **a part holds documents**, by name, in its own members;
- ***and a chapter's `below()` is `$TypeOfChapter`***, so a section handed to one is not a part of it at all.

***The apparatus are DOCUMENTS that a book keeps, and chapters are what a book KEEPS THEM AS.*** **Those are two different statements and inheritance can only make one of them.** *Which is exactly Doug's own sentence for this unit, and I read past it:*

> *"Perhaps `$$Chapter` knows how to register itself to a collection of pieces of writing that are references to chapters on the chapter — **they just have to MEAN a chapter**."*

**Meaning, not inheriting.** ***A cover does not become a chapter by extending one; it becomes a chapter of its book by MEANING one*** — which is the catalogue twin's job, and why Doug named `$$Chapter` in the same breath. **U5 is a registration unit, not a reparenting unit**, and it needs the meaning side of `$Reference` that [the page fold](../solutions/61-the-class-that-stepped-twice.md) already put in place.

*The attempt is reverted; `src` is green and both demos draw identically — paper 38,208 characters, turing 57,701, 0 refusal panels, 0 dead anchors.*

## <a id="placement"></a>THE PLACEMENT — ***Doug's correction, and the one line in the base it needed***

> *"Oh you need to, on document — have a document at the top of writing. We can't have it be book. And so I think chapter has to be a type of document and so does book, so we can add the book property to chapter."*

***`$Document` is the top of the WRITING ladder; `$Chapter` and `$Book` are both kinds of document.*** **What makes them the second ladder is not what they ARE but what they COMPOSE** — *a document composes sections, a chapter composes chapters, a book composes chapters.*

### It could not be said until `below()` stopped over-specifying

**Every `below()` declared a NARROW return type** — `$TypeOfDocument.below(): new() => $TypeOfSection` — *and a narrowed return cannot be re-pointed by a subclass, because return types are covariant.* **So the moment `$TypeOfChapter` extended `$TypeOfDocument`, its `below()` was forbidden from answering `$TypeOfChapter`:**

```
Type '$TypeOfChapter' is not assignable to type '$TypeOfSection'.
```

***The narrowing bought nothing.*** *Every caller — `reflection.beneath`, `$Composition.parts`, `$Composition.reduce` — takes the answer as a `$Type` and asks `instanceOf`.* **All eight now declare `new() => $Type` and return their own**, *which is what the base always said the member answers.* ***A base that narrows a return type on behalf of its subclasses decides what they may extend, and it decided this design was impossible.***

### And a promise fell, exactly as U3 predicted

**`beneath(document, book)` was asserted FALSE and is now TRUE** — *because a book IS a document.* ***The old promise asserted an asymmetry, and half of it was never about levels at all:*** `beneath()` answers `held instanceof kind`, which is **subtype**, not level. **The level question and the kind question are the same call**, *and this is the line where they part company.* The promise now says what is true and says why.

## <a id="state-2"></a>WHERE IT STANDS — superseded

*The second interim state. [Where it landed](#landed) is the record.*

## <a id="landed"></a>WHERE IT LANDED — ***the sprint closed 2026-09-10, every number driven***

**The design Doug settled, in the end, is one shape said twice.** *A `$Chapter` derives from `$Composition` and its TYPE derives from `$TypeOfReference`; a `$Book` is the same one level up.* **The class derives once and the block carries as many types as it needs** — the framework's own multiple inheritance, which is [The Type and the Instance](../the-type-system/02-the-type-and-the-instance.md) doing exactly what it was written for. `below()` is the whole mechanism: `$TypeOfBook.below()` names `$TypeOfChapter`, and a chapter names nothing.

| | |
|---|---|
| ***`$Book`*** | **214 lines to 65.** Four get-only properties — `cover`, `synopsis`, `table`, `chapters` — found by TYPE, in whatever order they stand. `placed()`, `following()`, `contents()`, `listed()`, `documents`, `index`, `footer` and every positional rule are gone, **and the four workaround lines this sprint set out to delete went with them** |
| ***the contents*** | **Ten `<Chapter title="..."/>` uses written literally** in the demo's `.table.tsx`, drawn with numbers, dot leaders and the `□` where a page number goes. **All ten hrefs resolve to a heading id on the page**, driven |
| ***reflection*** | **Stopped spelling.** A seven-name roster of the levels and two string tests — `'PageFold'`, `'Reference'` — replaced by `knows({ composition, reference, fold, hierarchies })` and one walk, `level()` |
| ***`$Fold`*** | **The annotation that gives its holder a KEY**, which is Doug's own sentence: *"one points, the other is pointable."* `$PageFold`, `$Bookmark` and `$Highlight` leave `$Reference`, **and the three specification overrides that each turned OFF the rule defining a reference delete with them** |
| ***`addType`*** | **Zero callers, and 57 bond constructors hand-writing exactly what it does** — 48 of them containing nothing else. All 57 now read `super.$X(this.addType(block, $TypeOfX))` |
| ***`$Image`*** | **New, and the base of the three:** it carries `$source`, `$width`, `$height` and prints an `<img>`; an illustration is an image with a caption; a figure is a numbered illustration. **The size is said once** |

**The gate, driven at 1280px against the served page:** *tsc `src`/`.latex`/`.wiki` 0 · suite **102 green in 2.82s** · paper **36,738 characters, 0 refusal panels, 0 refusals, 11 articles, 10 contents entries all resolving** · ink `rgb(0,0,0)` from the book down · figures 343 / 344 / 623 against a 624px measure, all centred.*

### <a id="landed-cost"></a>What it cost, and the one that cost most

***[Solutions 67](../solutions/67-the-walk-that-never-advanced.md) is the sprint's expensive lesson and it is not a framework fault.*** **`$TypeOfChapter.below()` returned `$TypeOfChapter`**, so `reflection.beneath()` walked Book → Chapter → Chapter forever and **every vitest worker died mid-construction with no stack and a clean exit code.** *It presented as the toolchain being slow, and six separate toolchain causes were proposed, measured and abandoned before the Duration line — `24.58s (… tests 0ms)`, whose parts sum to 1.2s — was finally read.* **The line was redundant as well as fatal:** `$Composition.parts()` already keeps a nested writing of its own kind.

**Two smaller ones, both the same shape — the code looked right and the page disagreed:**

- ***A string edit that matched nothing reported success.*** The theme already read `a.pd-meaning:hover` where the edit targeted `.pd-meaning:hover`; nothing was written and nothing said so. **Edits assert their pattern before writing now.**
- ***A rule lost a specificity tie in silence.*** `.jtzrdx > .pd-figure img` and `.pd-illustration img` are both `(0,2,1)`, so the later won and `max-width` stayed 100%. **The browser's own rule list is what found it.**

### <a id="landed-names"></a>Names, and a standing correction

***Doug, on being shown `$measure`:*** **"I hate it every time you ever choose a name, from dress, to ladder, to mint, to measure, to refuse."** *That is a pattern and not a slip, and it is [the naming rule](../../../../.claude/library/..teamsmanship/05-territory.md) being broken repeatedly rather than once.* **`$measure` on a figure became `$width` and `$height`, which are the words the thing being abstracted uses.**

***One name is OPEN and must not be settled by a refactor.*** **`$Theme.measure`** — the width the text runs to. *Researched at Doug's instruction rather than guessed: **`measure` is the typographer's own term** for the length of a line of type (Bringhurst; the "45–75 characters" rule is that word), and **LaTeX calls it `\textwidth`**.* **It cannot simply become `width`: a theme is a `$Format`, so its plain fields ARE its CSS, and `width` is already spent — `article/Theme.tsx` sets `width = '100vw'` for the desk.** *Freeing the identifier means moving the desk's width into its own `@select` group. Doug's call.*

### <a id="landed-open"></a>What is open

1. ***A chapter cannot reach its book.*** **Instrumented on the live page: `zz-book-$TableOfContents`, `zz-docs-0`** — the demo builds `.table.tsx` standalone and composes it into the book afterwards, and the parent walk stops at the contents. *It works when the whole tree is built in one call; both shapes were reproduced.* **This is what blocks References and Appendix from going unnumbered**, since a chapter would wear the classes of the document it means.
2. ***What a chapter's format should HOLD.*** **`$BookFormat` and `$ChapterFormat` were built and reverted, measured:** the book format restyled the sheet in place (`sc-jSFhYz cwmvBt pd-aaronson pd-book`) and the chapter format's wrapper broke every entry — **10 refusal panels, 0 contents.** *The seam Doug described is right — made in the bond, fetched through `$` — but a `$Format` either wraps what it clothes or restyles it in place, and a chapter's look is a ROW in someone else's document.*
3. ***`$Table` as a grid, ruled.*** Doug: *"We don't want table as a real table. We decided it should be a grid."* **Closed.**
