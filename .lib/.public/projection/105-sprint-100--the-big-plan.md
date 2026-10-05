# Sprint 100: The Big Plan

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **state:** **IN WORK since 2026-10-05, and changed by his word the same day: it builds.** Planned on his `/ce-plan` as a sprint that writes a plan and no code; an hour later he set it to work as a build — *"Do you want to start implementing the designs… work on everything at once, in sketching fashion… /ce-work Start getting to work"* ([R13](#r13)). The requirements are his sentences. [Where things stand](#where-things-stand) is the ledger.
- **workflow:** [the feature workflow](../../../../.claude/library/..teamsmanship/19-workflows.md#the-feature-workflow) — the brainstorm was the talk in the room that day, kept in [How a Book Is Implemented](../writing-a-book/01-03-how-a-book-is-implemented.md).
- ***The title is his phrase, "a big plan"; a PROXY for the sprint.***

---

## Where this sprint comes from

**[Sprint 98](103-sprint-98--dougs-design.md) ended with a design chosen for each of seven books, and no code that is right.** Doug, 2026-10-05: *"We have not implemented any code yet for my library. What was written was enough to get .design up and running. Consider none of it right. Consider all of it being rewritten."* He then said how the library is to be built — *"I will teach you how to use annotations and types to mark up different kinds of chapters, and to collect them so that we can support different kinds of layouts in the book base classes that we use"* — and set the work: look at the designs, decide what is common and what is local, imagine where the chapters go, and plan.

**So this sprint is the plan and only the plan**, written where he asked for it: *"be sure to put this in the design book!"* The sprints after it build what it names.

## Requirements — his words, and what would be seen

*Each is his sentence of 2026-10-05, followed by what a person would observe if it held.*

- <a id="r1"></a>**R1 — the plan says which designs each book will have, in his design book.** *"build a big plan that includes the different designs, which books will have them - and be sure to put this in the design book!"* **Seen:** a chapter of Dougs Design naming, for each of the seven books, its design or designs, each concept shown beside the words.
- <a id="r2"></a>**R2 — where he liked two, a toggle.** *"where I note that I like two versions we might provide toggles to switch between different ways of showing the same data."* **Seen:** every place his answers name more than one way — the catalogue among 1, 2 and 3; the manual between code forward and words forward; the design book between its two modes; the story among its papers, and between its own order and recency — is listed as a switch, with what stays the same under it.
- <a id="r3"></a>**R3 — what is common, and what is local.** *"decide what structure is common across them versus what is local to a specific book"*; *"common themes across them."* **Seen:** every region of every chosen concept is named as one of a small set of things all the designs share, or as local to one book, and it is drawn: each concept beside a drawing of the same screen with its regions named.
- <a id="r4"></a>**R4 — where the chapters go, and so the kinds of chapter.** *"Try to imagine where the chapters go, and therefore, what the different types of chapters are - and we can create annotations for the different types of chapters to help our base book organize them. This will give our base books much more power to place and render books as they want. The different chapter types can come with classes and formats."* **Seen:** a list of kinds of chapter, each with where the designs put it, how a book knows it, and what it comes with.
- <a id="r5"></a>**R5 — chapters are plugins a book is given, and the book is still a document.** *"…to make it more like the chapters are modular plugins provided to a book, and the book chooses how to work with them in specific ways, while also managing to be a sensible document of their own in linear order."* **Seen:** for each kind, what a book reads like with that chapter in its place in file order and nothing choosing; and for each kind of book, what it chooses to do with each kind it is given.
- <a id="r6"></a>**R6 — the semantics are protected, and the look is said from outside.** *"We can use annotations to protect the semantic structure of the content, so that we have the power to restyle it easily with $is, and to use the annotation system to apply formatting or expose data or do all sorts of useful things."* **Seen:** each switch of [R2](#r2) is stated as the same writing under another annotation, with no chapter rewritten for it.
- <a id="r7"></a>**R7 — components beside the base classes.** *"building components to accompany our base classes that consume and expose certain properties by navigating the composition."* **Seen:** the components each base book comes with, each saying what it reads and from where in the composition.
- <a id="r8"></a>**R8 — the three wonderings, answered from the designs.** *"genuinely wonder how we will render a cover in different ways, or how to reinterpret a table of contents as another application experience, or what to put in a synopsis and whether it should be parenthetical."* **Seen:** every rendering of a cover, a table of contents and a synopsis that the chosen designs hold, listed.
- <a id="r9"></a>**R9 — general code in the reference manual, local code in a book's appendix.** *"Is it pretty clear which code is general and deserves to be in the reference manual? Remember that the reference manual is one of the things that needs style. Things that are more local can get catalogued in the appendix, which might also be given a view similar to a reference manual. But we want to make sure to keep the more general things scoped to the right place."* **Seen:** every planned part listed once with its home, and the rule that put it there.
- <a id="r10"></a>**R10 — reference manuals that catalogue reference manuals.** *"We can possibly create reference manuals that, in addition to having their code, also catalogue other reference manuals, so that you can move back and forth between a subject of reference manuals if needed."* And, when the first reading asked whether that made a book two things at once: ***"Something does not need to JUST be a catalogue. I would argue that a reference manual that catalogues reference manuals is still a reference manual. Can we design a combination reference manual that can have others, so that we don't need to split everything up to create a new reference manual, we can just make new ones as needed and extend the current ones to catalogue them."*** **Seen:** one manual drawn holding both its own parts and the manuals filed under it; and a new manual made by adding a book, one chapter and one row, with nothing in the manual above it moved.
- <a id="r11"></a>**R11 — none of the existing code is the plan.** *"Consider none of it right. Consider all of it being rewritten."* **Seen:** the plan names no class of `.me` as a part to keep.
- <a id="r12"></a>**R12 — seen through books, and not restrictive.** *"We will use those designs but we will see them through the lens of books in a library. We should not find this design restrictive at all."* **Seen:** an element of a design that is no part of a book is said to be so and listed as something asked for, never quietly dropped from the design.

- <a id="r13"></a>**R13 — it is built, by sketching every book at once, the reference manual's design first, and graded as it goes.** Given with `/ce-work`, after the plan above was written: *"But how shall we do this? Do you want to start implementing the designs, making sure to structure your code using annotations and types and components in the way I suggested to get semantic structure and the ability to reinterpret the page more? And maybe as you develop, you look for places to reuse or places where you find yourself writing similar code, and you move things [to] the library reference manual? Or maybe you find the reference manual gets too big too fast. Maybe it has sections? And the table of contents can be used to navigate it like it is different books? Or maybe we just have multiple reference manuals for different types of parts? Reference manuals are supposed to be big though, so I wouldn't worry too much about one getting big."* · *"And remember to work on everything at once, in sketching fashion, because otherwise it's hard to find an abstraction that fits all of them. But also remember that things will be most organized if you figure out the reference manual design! Because then we can navigate that together."* · *"Start getting to work, and keep grading yourself on whether or not you think your implementation of the design is making use of the library design patterns correctly, and perhaps what could improve things."* **Seen:** all four standing books wearing a sketch of their design, drawn from parts kept in his manual; the manual itself navigable by its own design; and a written grade beside each piece.

## Decisions

- <a id="d1"></a>**D1 — the plan is chapters of his design book, in his voice, and this chapter holds only the work's guardrails.** [R1](#r1), and closure: *"you are going to be reading files in the library to be caught up on how to build the library."* A part is planned in the design book and, once built, documented where it stands — his manual or a book's appendix. *Chosen over the plan standing in the branch library with a summary in his book.*
- <a id="d2"></a>**D2 — it is read off the designs region by region, and shown.** Each chosen concept stands beside a drawing of the same screen with every region outlined and named, in one key used for all of them, so that what is common is seen as the same few tints rearranged. *Chosen over prose alone: a design question is put by showing.*
- <a id="d3"></a>**D3 — it plans parts and their places, never pages.** A kind of chapter, a book that places kinds, a component that goes with a book. No screen is transcribed.
- <a id="d4"></a>**D4 — every kind of chapter is held to both halves of his sentence.** A book can place it by what it is; and in file order, with nothing placing anything, the book is still a sensible document. *A kind that only makes sense once a book has moved it is not a kind of chapter.*
- <a id="d5"></a>**D5 — what is his to rule is asked in his book, by letter.** The plan asserts nothing in his voice that he has not said. An open choice is written under [What I Am Asked](../../../../.me/.design/2-what-i-am-asked.tsx) beside the concepts it is about, asked in the room by its letter, and his answer written under it in his words — the pattern of Sprint 98.
- <a id="d6"></a>**D6 — every name is a stand-in.** Each kind, book and component is said by its use first; where a word is needed it is a proxy, listed at the end of the plan for him to name.
- <a id="d7"></a>**D7 — nothing is built. REVERSED the same day by [R13](#r13); [D11](#d11) to [D14](#d14) stand in its place.** *As planned:* No class, annotation or component is written in this sprint. The new chapters use only what the framework gives and the words his design book's chapters already write.
- <a id="d8"></a>**D8 — the rule for where a part is kept, proposed:** a part is general when a base book needs it or a second book uses it, and it stands in the manual; otherwise it is catalogued in its own book's appendix. *It is proposed, since [R9](#r9) is a question he asked.*
- <a id="d9"></a>**D9 — the work is done with the page open**, by [the protocol](../writing-a-book/01-02-how-a-library-is-developed.md#the-protocol), and bound once at the close. *A chapter that shows drawings is looked at built, since pictures beside a chapter do not show on the live site.*
- <a id="d10"></a>**D10 — cataloguing is not a kind of book; it is what any book does for the books filed under it.** His ruling under [R10](#r10): *"Something does not need to JUST be a catalogue."* So the plan has no base book that is only a catalogue. A book holds a chapter that stands for each book filed under it and answers for each in its table, beside whatever chapters of its own it has; the one book every other stands on gathers those chapters, and each book shows them its own way — the library as a shelf, a manual as branches of its tree. **It needs nothing new of the Binder:** the test library's *Libby* has five chapters of her own and answers for *A Persona*, which is filed under her, and binds in every regression. *What a book needs in order to be filed under is a cover that says what it is about; his manual's cover does not yet, and the name is his to give.* *Chosen over a catalogue class and a manual class side by side, which a manual holding manuals would have had to be both of.*
- <a id="d11"></a>**D11 — it is sketched across every standing book at once.** A part is written once for the first book that needs it and tried on the others the same hour, since *"otherwise it's hard to find an abstraction that fits all of them."* A sketch is real code on real pages and is allowed to be rough; it is never a mock.
- <a id="d12"></a>**D12 — the reference manual wears its design first,** so the parts can be navigated there by both of us as they are written. Every general part stands beside a chapter of the manual, the chapter written with it. *The manual is one book and may grow large; its table of contents groups its chapters in sections, and it may hold other manuals ([D10](#d10)).*
- <a id="d13"></a>**D13 — a part begins where it is first needed and moves to the manual when a second book uses it or a base book needs it** ([D8](#d8), now by doing). *Chosen over deciding every home ahead of the code.*
- <a id="d14"></a>**D14 — every piece is graded as it lands, in this chapter.** By [the three tests](../the-coding-style/07-what-natural-means.md#the-three-tests) and the one question under them: would the next librarian write this without being told? Each grade names the fights that remain, with the word or the mechanism each is missing, and what would improve it. *The grade is ours to give and is read in the library, where the code is printed.*
- <a id="d15"></a>**D15 — nothing under `.public` changes.** Every part is his library's own. What the framework or the Binder lacks is written down as a fight in the grade, built as a pattern in his library where it can be, and pitched.

## A first reading — what the plan is expected to say

*Proposed by the team from the ten chosen concepts and the chapters his four books hold, in answer to the questions he put. It is tested against every design during the work, and it is his to correct. Every name in it is a stand-in.*

**What every chosen design shares — six things, placed differently.**

| | the thing | where it stands in the designs |
|---|---|---|
| 1 | **the library's cover**: its mark, its name, its author | the ends of the top bar in **19** and **20**; the head and the foot of the side bar in **23**; the first word of the trail in **6**, **8** and **9**; *the library →* in **25** |
| 2 | **the library's table of contents**: the subjects and books it holds | the row in the top bar of **19** and **20**; the list in the side bar of **23**; the tree at the left of **9**; the side list of **1** |
| 3 | **this book's cover**: its title, what it is filed under, who wrote it | the second bar of **19** and **20**; *filed under* over the title in **23**; the trail and the title in **9**; the running line of **25** |
| 4 | **this book's table of contents**: what it holds | *holds 3 projects* and the shelf itself in **19**; *holds 8 chapters* in **23**; the list of parts in **6**, the tree in **8**; the rows of **9** |
| 5 | **the open chapter**, one at a time, in the widest part | the turns of **23**; the sheet of **25**; the words of **6**; the part on the bench in **8** |
| 6 | **what goes with the open chapter**, at the right | its file in **6**; what it cites and what cites it in **23** and **19**; an entry opened beside the list in **9** |

*With them on most screens: a switch of view, a way to find, and things that are the reader's — where I left off, a favourite, a note.* **A frame is the six placed:** two bars across the top (**19**, **20**), a side bar (**23**, **6**, **9**), or a sheet under a thin bar (**25**).

**What is local to one kind of book.** A catalogue: its entries at a rank, their grouping and their order. A manual: a part's fields, its bench, where it is used. The design book: concepts, questions and their answers, the viewer. The story: dates, papers, recency. A conversation: turns by a speaker, what was made in a turn, a note on a passage.

**The kinds of chapter — the necessary set.**

| the kind | where the designs put it | how a book knows it | in file order |
|---|---|---|---|
| **the cover** | a bar, a trail, a running line, a board on a shelf | the framework's Cover | first: the title and what the cover says |
| **the synopsis** | under the title at the front; the card that stands for a book elsewhere; nowhere on a chapter's sheet | the framework's Synopsis | what the book is, in a paragraph |
| **the table of contents** | a side list, a row of tabs, a tree, a shelf, the rows of a table | the framework's TableOfContents | the list of what follows |
| **a chapter that is read** | the widest part, one open at a time | the canonical type; it carries no mark | the body |
| **a chapter that stands for a book**, in any book that has books filed under it | a cover on the shelf, a row, a card, the entry opened beside the list in **9**; a branch of a manual's tree | by what it already carries: another book's synopsis | an entry: the book's name and what it is |
| **a chapter about a part**: words, with the file beside them | the spread of **6**, the bench of **8** | a mark, or the file it carries | a chapter that ends in a listing |

*The last is one kind in two places: the body of a reference manual, and the appendix of any book. That is what lets an appendix become a manual without a chapter being rewritten.* **No chapter fills the right-hand column yet**, and what stands there is a question he was asked in Sprint 98 and has not answered.

**The books that place them.** One book every other stands on. It knows the six and places them in a frame, and it gathers the chapters that stand for books, since any book may have books filed under it ([D10](#d10)). Under it, a manual, which gathers the chapters about parts and is still a manual when it also holds manuals. His seven: three whose chapters are nearly all entries — the library's under black and sky, the Claude projects' under white and opal, a project's conversations as a list — each showing its entries its own way; the manual; and three that are read — the story on its sheet, the design book, a conversation in the side bar.

**The manual that holds manuals, as his ruling makes it.** One table lists two kinds of chapter: the parts, each with its files as leaves, and the manuals filed under it, each ending in its shelfmark. A held manual is opened by its entry and left by its own cover, which says what it is filed under. A new manual is a new book filed under an existing one, with one chapter and one row added there; nothing already in the manual above moves. An appendix that outgrows its book becomes a manual the same way, its chapters unchanged, since a chapter about a part is one kind wherever it stands.

**What goes with a book.** A cover drawn as a bar, as a board, as a running line. A table drawn as a side list, as tabs, as a tree. The place: which chapter of how many, the next and the one before. The switch. The column at the right. The author's name on every screen.

**General and local, by [D8](#d8).** In the manual: the one book and its frames; the renderings of a cover and a table; the switch; the ways of showing the chapters that stand for books; the manual's own view, which every appendix wears too; the theme; the date; the shelfmark. In a book's appendix: the design book's concepts, questions and viewer; the camera. *Three are not clear and are put to him: the sheet of **25**, which he called right "for bookish chapters like the autobiography"; an order by recency, which the story needs now and a project's conversations later; and everything a conversation needs, which is local to one kind of book and shared by hundreds of them — the first candidate for a manual of its own under the library's.*

## Units

*Each says what runs and when, its files, what it waits on, what would be seen, and its scenarios. All are chapters of `.me/.design/`, written by hand, in his voice, numbered after Every Concept; their titles are stand-ins.*

### <a id="u1"></a>U1 — which book wears what

**What runs, and when.** A chapter written by hand: for each of the seven books, its frame, its design or designs, and each switch with what stays the same under it. The concepts are shown by their numbers, as the book's chapters already show them. It is bound with the book and listed in its table, which the Binder holds complete.

**Files.** `.me/.design/4-which-book-wears-what.tsx`; `.me/.design/.table.tsx`; `.me/.design/1-the-designs-i-am-going-with.tsx`, for a link each way.

**Waits on.** Nothing.

**Seen when done.** At the chapter's address, seven books each with its concepts beside it, and five switches listed.

**Scenarios.**
1. The book binds, and its table lists the chapter.
2. Every concept shown is one that stands in Every Concept; none is redrawn.
3. Each of his answers that names two ways appears as a switch ([R2](#r2)), five in all.
4. The three books that wait on an importer are present and say so.
5. On a phone, nothing runs past the right edge.

### <a id="u2"></a>U2 — what the designs share, drawn

**What runs, and when.** A chapter and one drawing for each chosen concept: the same screen as outlined regions, each named and tinted by one key — the library's cover, the library's table, this book's cover, this book's table, the open chapter, what goes with it, a control, the reader's. A drawing is a file beside the chapter, shown by the framework's own figure.

**Files.** `.me/.design/5-what-the-designs-share.tsx`, and ten drawings beside it.

**Waits on.** Nothing.

**Seen when done.** The ten concepts each beside its drawing, the same tints in different places.

**Scenarios.**
1. Every region of every chosen concept is outlined and named; one with no name in the key is listed under what the designs ask for ([R12](#r12)).
2. The key is identical in all ten.
3. The renderings of a cover, a table and a synopsis are each listed with the concepts they come from ([R8](#r8)).
4. Looked at built, at a desk and on a phone, every drawing shows.

### <a id="u3"></a>U3 — the kinds of chapter

**What runs, and when.** A chapter: each kind with what it is, how a book knows it, what it comes with, where the designs place it, what it exposes, and how it reads in file order. And a register: every chapter file of his four books today, under exactly one kind.

**Files.** `.me/.design/6-the-kinds-of-chapter.tsx`.

**Waits on.** U2.

**Seen when done.** The kinds, and the thirty-four chapters of his library each under one.

**Scenarios.**
1. Every chapter file in `.me` appears once in the register.
2. Every kind states both halves of [D4](#d4).
3. A kind found in one book only is said to be local, with the book.
4. What no kind covers is listed and asked ([D5](#d5)).

### <a id="u4"></a>U4 — the books that hold them, and what goes with a book

**What runs, and when.** A chapter: the base books, what each gathers and how it lays out; which of his seven stands on which; the components that go with each, and what each reads from the composition; and each switch said as the same writing under another annotation.

**Files.** `.me/.design/7-the-books-that-hold-them.tsx`.

**Waits on.** U3.

**Seen when done.** Each of the seven books traced from its design to the base book under it and the kinds it is given.

**Scenarios.**
1. Each of the seven books stands on exactly one base book, or the chapter says why it cannot yet.
2. Each component names what it reads and where in the composition it finds it ([R7](#r7)); one that needs what the Binder does not hand over says so.
3. Each of the five switches is stated without a chapter being rewritten ([R6](#r6)).
4. No class of `.me` is named as a part to keep ([R11](#r11)).

### <a id="u5"></a>U5 — where each part is kept, and what is built first

**What runs, and when.** A chapter: every part the plan names, once, with its home and the rule that put it there; how the manual is itself styled by a part it documents; how an appendix wears the manual's view; which manuals there would be and how one is reached from another; and the order of building.

**Files.** `.me/.design/8-where-each-part-is-kept.tsx`.

**Waits on.** U4.

**Seen when done.** A register of parts, each with one home, and a first thing to build.

**Scenarios.**
1. Every part named in U3 and U4 appears once.
2. Each home follows from the rule, or the part is put to him ([R9](#r9)).
3. One manual is drawn holding its parts and the manuals filed under it together, and the way down to a held manual and back up is stated ([R10](#r10), [D10](#d10)).
4. The first build is one a person could see fail.

### <a id="u6"></a>U6 — what is his to rule, and the records

**What runs, and when.** The choices the plan could not make are written into What I Am Asked by letter, each beside its concepts. His story gains a dated paragraph that leads to the plan, linked both ways. The proxies are listed. The notes in the branch library, this chapter and its cover entry are brought true.

**Files.** `.me/.design/2-what-i-am-asked.tsx`; a chapter of `.me/.librarian/`; [How a Book Is Implemented](../writing-a-book/01-03-how-a-book-is-implemented.md); this chapter.

**Waits on.** U1 to U5.

**Seen when done.** The questions in his book, each with a letter; and a list of every new sentence in his voice, for his eye.

### The build — units added with [R13](#r13)

*Each is a sketch across the books, kept in his manual. Files are under `.me/`; names in them are stand-ins.*

- <a id="u7"></a>**U7 — the one book, its pages and one frame, and all four books standing on it.** *What runs:* the library's book class draws the library's name before a book's chapters, stands a paging that keeps the cover and the table in view and opens one chapter, and stands a frame, a Format that places the cover, the table and the open chapter. *Seen:* each of the four books at its address inside the same frame, a press on a table's entry opening that chapter in place.
- <a id="u8"></a>**U8 — the reference manual's design.** *What runs:* a mark on the section that prints a chapter's file; a format that sets an open chapter with such a section as a spread, the words beside the file; and a switch between the file forward and the words forward, given through `$is`. *Seen:* the manual at its address as the spread of concept 6, and one press exchanging the two.
- <a id="u9"></a>**U9 — the story's sheet and its papers.** *What runs:* a frame that sets the open chapter as one typeset sheet under a running line, and three themes switched through `$is`. *Seen:* his story as concept 25, and a press changing the paper with no chapter redrawn differently.
- <a id="u10"></a>**U10 — the catalogue's bars and its shelf.** *What runs:* a frame of two bars, and a way of showing the chapters that stand for books as a shelf and as a list, switched through `$is`. *Seen:* Dougs Library as the shelf of 1 under the bars of 19, and a press showing the same books as a list.
- <a id="u11"></a>**U11 — the design book on the same parts,** with what is its own kept in its appendix.
- <a id="u12"></a>**U12 — the manual's chapters and its table in sections,** each general part beside a chapter that says what it is.
- <a id="u13"></a>**U13 — the grade, the one bind, and the records.**

## <a id="grade"></a>The grade, as each piece landed — 2026-10-05

*Ours to give, by [the three tests](../the-coding-style/07-what-natural-means.md#the-three-tests) and the question under them: would the next librarian write this without being told? Read where the code is printed, his manual and each book's appendix. Each fight names the word or the mechanism it is missing. Every class name is a stand-in.*

**What was built, in one sentence each.** The library's book stands its pages and a frame and says which views it offers. A frame is a mark on the book — the side bar, the two bars, the sheet — and what it looks like is a part of the theme. The cover writes its own lines, filed under and by. The table marks each entry with the chapter it means, whether that chapter is open, what file it carries and whether its row answers for a book. A chapter that carries a file is marked by the file itself and set as a spread. A switch gives a view to the book through `$is`.

### What reads as natural

- **The pages** are a class under Paginated answering two questions, which pages and which is open, by equality of identifiers. *The documented extension, written as documented.*
- **The cover's lines are the cover's own content,** appended to the chapter as the framework's Synopsis appends an imported chapter. *A first form kept two chemicals in fields and made them through `reflection`; rewritten the same hour to hold them as the annotation's text, as the test library's catchword holds its parts — two fields and an import fewer.*
- **A chapter about a part needs no mark of its own.** The framework's Append, subclassed and exported under its name, marks the chapter it is said of. So the manual's body and any book's appendix are one kind, and [R45](103-sprint-98--dougs-design.md#r45) — an appendix wears the manual's view — holds without a line written for it.
- **The shelf is the table of contents, restyled.** The same rows; a row that answers for a book is drawn as a cover. *His third wondering answered with rules alone.*
- **Every switch is one door.** A book's `views`; a press sets `$is`; which view is shown is read back from `$is` and stored nowhere. *The first control in either library on that door, and seen on the built site: the catalogue's shelf to a list, the manual's words forward to code forward, the story's three papers, the design book's two modes.*

### The fights — what had to be known rather than met

1. **A theme given through `$is` provides only inside itself.** It stands in front, so its provider is the innermost layer, and every other format on the same book now sits outside it and reads no theme. *Measured: under a night theme given from outside, the sheet's frame kept `display: flex` and lost its ground, its padding and its width — every declaration that read a value.* The framework's promise tests the theme alone. **What the library does instead: a frame, a spread and an arrangement are marks, and their rules are parts of the theme,** so a theme given from outside brings them. *That goes against the first of [the three sentences](../writing-a-book/02-dressing-a-library.md#the-three-sentences), a component owning its structure, and it puts the sheet's look in the chapter on the papers rather than the chapter on the sheet.* **Missing: a theme given from outside providing to the whole of its book.** `.public`'s; a pitch.
2. **A chapter that wears a format's layer cannot be placed by its book's grid** until the layer stands down: `> .pd-container { display: contents }`, four times across three themes. *A child selector on a box with no mark, which [the styling surface](../the-styling-surface/01-the-base-themes-classes.md) rules out and the test library's explorer also writes.* **Missing: a layer that says whose it is, or one that does not box.**
3. **An annotation given through `$is` is never bound.** `$Bound` runs once, from the book's bond, so nothing switched in may mark parts there. *It decided the design of the spread: the chapter's mark had to come from the file it carries.*
4. **`$is` is the whole set, so two switches on one book merge by hand.** The switch filters its own family's views out of what is given and adds one. **Missing: giving and taking back one annotation.**
5. **The rows of a table are two shapes,** a line that is one link and a line of words, and an entry reads both to find what it refers to. **Missing: the table exposing its rows as what they refer to,** which is the runtime half of [the link aggregator](../writing-a-book/01-01-how-a-library-is-designed.md#the-link-aggregator).
6. **A note is drawn in the reverse of the order its annotation stands in.** The entry had to be put in front of the row's content for its words to follow the name.
7. **"Everything but the listing" is a number:** `grid-row: 1 / span 99`, the explorer's own. *A concept nobody named, placed by a count.*
8. **A control is not writing.** The switch hand-writes `button`s, and labels each from its class's name. **Missing: a word for something pressed, and where a view's own name is said.**
9. **The family rule — one of a kind holds, the one in front takes the others out — is written three times** beside the framework's own for Theme. *Four simple lines each, and noted as a concept the framework has only for a theme.*
10. **In development, a first load at a chapter's address warns** that one component was updated while another drew. *The framework's Paginated moves its open mark during the book's draw. Not chased.*

### What the designs still ask for, met again by building

- **The library's upper bar holds only its name.** The row of subjects in concept 19 is the library's table of contents on another book's page.
- **A cover on the shelf is the book's name on a board.** Its colour, mark and date are said on that book's own cover and do not reach the catalogue's page.
- **The drop initial of concept 25 is not built:** the opening paragraph of a chapter has no mark, and the only other way to it is by position.
- **Not built at all:** the wall of concept 3, which needs every chapter that stands for a book shown together at the front; recency; the bench of concept 8; *where it is used*; *continue*; a way to find.

### The counts, as evidence

*His library's code went from about 830 lines to 1,323.* The design book lost its private pages and frame, two chapters and about 210 lines. The manual holds nine code files, 574 lines, and three more books wear a design from them. *It adds, and what it adds is three designed books and four switches.* **Positional rules that remain: four child selectors of fight 2, and two `:has` chains in the design book's own theme, which is the part of that book not yet rewritten.**

### The verdict

**The kinds, the faces and the switch a librarian would write unprompted. The frame would be written as a format with its own rules, and it would break at the first theme given from outside** — *so the one thing that most improves this is fight 1, in `.public`.* The rest are small, and each is the same shape: something the book already knows that a part had to work out again.

## Order

**As changed by [R13](#r13): the build first, U7 to U13, and the plan's chapters after it,** U1 to U6, written from what the sketches found. *As planned: U1 and U2, which wait on nothing; then U3, U4, U5 in turn; then U6.*

## Risks

- **Words in his voice he has not said.** *[D5](#d5): what is not his is asked by letter, never asserted; every new chapter is listed for his eye.*
- **A taxonomy larger than the designs need.** *The set is the necessary one: a kind stays only if a design places it and it reads in file order; a kind used by one book is local.*
- **The plan teaching the wrong mechanism before he has taught the right one.** *It says what a part is for and what it reads, and leaves how it is written to his teaching and the build.*
- **The existing code read as a model.** *[R11](#r11) is a scenario of U4.*
- **Names hardening.** *[D6](#d6); the list is part of U6.*
- **The plan kept in two places.** *The design book holds it; the notes in the branch library hold his words and point to it.*
- **A drawing that does not show.** *[D9](#d9): looked at built.*

## The plan checked against itself

| requirement | lands in | proved by |
|---|---|---|
| [R1](#r1) which designs each book will have, in his design book | [U1](#u1) | U1's 1, 2, 4 |
| [R2](#r2) a toggle where he liked two | [U1](#u1), [U4](#u4) | U1's 3; U4's 3 |
| [R3](#r3) common and local | [U2](#u2), [U3](#u3) | U2's 1, 2; U3's 3 |
| [R4](#r4) the kinds of chapter | [U3](#u3) | U3's 1, 2 |
| [R5](#r5) plugins, and still a document | [U3](#u3), [U4](#u4) | U3's 2; U4's 1 |
| [R6](#r6) restyled from outside | [U4](#u4) | U4's 3 |
| [R7](#r7) components beside the base classes | [U4](#u4) | U4's 2 |
| [R8](#r8) the three wonderings | [U2](#u2) | U2's 3 |
| [R9](#r9) general and local code | [U5](#u5) | U5's 1, 2 |
| [R10](#r10) manuals that catalogue manuals | [U5](#u5) | U5's 3 |
| [R11](#r11) none of the existing code | [U4](#u4) | U4's 4 |
| [R12](#r12) through books, and not restrictive | [U2](#u2), [U3](#u3) | U2's 1; U3's 4 |

## Where things stand

**Next: Doug reads the four books and [the grade](#grade), and teaches.** *He set this subject as his to lead; the sketches are what there is to correct. After that, `/ce-work` goes on from U11.* **Before any edit: open the workbench** — [the protocol](../writing-a-book/01-02-how-a-library-is-developed.md#the-protocol).

**To see it.** The built site, after the day's last bind: `http://localhost:4242/dougs-library/` — the two bars and the shelf, *shelf* and *list* at the right; `http://localhost:4242/dougs-reference-manual/#the-frames` — the spread, *words forward* and *code forward*; `http://localhost:4242/dougs-story/` — the sheet, *paper*, *night* and *white*; `http://localhost:4242/dougs-design/` — the same side bar, *library mode* and *gallery mode*.

**Sketched, bound and seen, 2026-10-05.**

- **U7, the one book** — its pages, the side bar, the cover's lines, the table's entries; all four books stand on it.
- **U8, the reference manual's design** — a chapter that carries a file set as a spread; the switch between the words forward and the code forward; each entry noting its chapter's file.
- **U9, the story** — the sheet and three papers.
- **U10, the catalogue** — two bars, and the table of contents as a shelf and as a list.

**In work.** **U11, the design book**: it stands on the shared parts with two modes and its scaffold's pages and frame are gone; *its own parts — the concept, the viewer, its marks, its theme's rules — are still the code that got it standing and are not rewritten.* **U12, the manual's chapters**: each general part has its chapter and the table is in four sections; *the words are his voice and he has read none of them.*

**Not begun.** U13's records beyond this chapter. U1 to U6, the plan's chapters in his design book.

**Verified.** His library binds: **56 keys, every reference resolving, 768 writings specified, 5 pages proved.** On the built site in Chrome, loaded fresh: the catalogue's three covers at 176 by 264 become three rows at 640 by 49 on one press; the story's page goes to white with a chapter opened in place; the manual's listing goes from the narrow side to 488 wide; the design book opens a chapter with its mode shown. On a phone, nothing runs past the right edge in any of the four. *The bind caught two things the live page had not, both mine: two headings with one name in the manual.*

*And after the day's last bind:* a chapter's address loaded directly opens that chapter with its entry lit; the design book's gallery mode turns the side bar pale and its words dark; on a phone the manual's open entry is dark and bold where the bar has stood down, the story goes white, and the catalogue goes to a list.

**Not verified.** No suite covers any of it. Nothing was measured for how many draws a switch costs.

**Owed to his eye — new words in his voice.** In his manual: The Pages, The Frames, The Cover, The Table, The Listing, and changed paragraphs in The Book and The Theme. In his story: The Sheet, The Papers, and three changed sentences in Closure. In his catalogue: The Bars, The Shelf, The Black and Sky. In his design book: the first section of The Theme. *Its chapters The Pages and The Frame were removed with the code they printed.*

**Stand-in names, his to give.** `Paged`, `Frame`, `SideBar`, `TopBars`, `Sheet`, `Spread`, `WordsForward`, `CodeForward`, `Arrangement`, `Shelf`, `List`, `Listing`, `Entry`, `Filed`, `Byline`, `LibraryTitle`, `Switch`, `views`, `Paper`, `Night`, `White`, `BlackAndSky`, `LibraryMode`, `GalleryMode`; the theme's `bar`, `bright` and `tint`; the marks `pa-front`, `pa-answer`, `pa-append`; and the titles of every new chapter.

**Wrong turns, kept.** A frame written as a format with its own rules — right by the documents, and broken by the first theme given through `$is` ([fight 1](#grade)). The cover's lines kept in fields. A probe of the live site that read a page before the book had turned to its place, three times, each now a rule in the workbench.

**Before this, and still true:** *the workbench is closed at the end of each session and opened at the start of the next.*

**Read before the first line, so the code is written in the library's idiom:** the framework's source whole; [the coding style](../the-coding-style/03-the-coding-style.md#code-patterns), [the shape of TSX](../the-coding-style/06-the-shape-of-tsx.md) and [what natural means](../the-coding-style/07-what-natural-means.md); [Developing an Annotation](../writing/10-developing-an-annotation.md); [Dressing a Library](../writing-a-book/02-dressing-a-library.md); and the test library's own parts, which are the worked examples.


**His words that set it** are in [the frame](../writing-a-book/01-03-how-a-book-is-implemented.md#frame), whole.

**To see it, once there is something.** `node .me/.manual/6-developing-a-library~workbench.mjs`, then the same file with `look dougs-design`; the chapters with drawings are looked at with `built fresh` after the one bind.

**To read first.** *A start and not a boundary.*

1. **[How a Book Is Implemented](../writing-a-book/01-03-how-a-book-is-implemented.md)**: his frame, the eleven mechanisms as read, and what the designs ask for.
2. **`.me/.design/`**, chapters 1 to 3 with the ten chosen concepts beside chapter 3: `001`, `002`, `003`, `006`, `008`, `009`, `019`, `020`, `023`, `025`.
3. **[Book](../library/05-book.md#how-it-is-extended)**: chapters placed by what they carry, and the app-like book in seventy lines.
4. **[The Annotation System](../writing/07-the-annotation-system.md)**: one annotation, one property; `$is` as the one door.
5. **[How a Library Is Designed](../writing-a-book/01-01-how-a-library-is-designed.md)**: which thing in the library is this, and every list a rank.
