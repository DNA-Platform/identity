# Sprint 100: The Big Plan

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **state:** **IN WORK since 2026-10-05. Changed twice by his word that day: first it builds; then, that evening, everything built is dead test code and the work begins again from structure — [the path](#the-path), eight milestones; the first two, [U14](#u14) and [U15](#u15), built that night and shown to him for audit.** Planned on his `/ce-plan` as a sprint that writes a plan and no code; an hour later he set it to work as a build — *"Do you want to start implementing the designs… work on everything at once, in sketching fashion… /ce-work Start getting to work"* ([R13](#r13)). The requirements are his sentences. [Where things stand](#where-things-stand) is the ledger.
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

- <a id="r14"></a>**R14 — everything in his library is dead test code; harvest it, then build four real books by structure.** Given that evening, after the first report was corrected and the rebuild still broke the written policies: *"I want you to consider everything in my library has dead test code. We hadn't even had designs. There was no thought. Harvest that code for clues on what you need documented to be able to build a real library. And then review the /ce-plan I want to see an implementation of the library catalogue, the reference manual, the design book and my autobiography - four books with four very different looks. And I think if you look at them structurally, you'll see a lot of similarities and differences that can be reflected in a structural annotation-based system. I recommend that you try to use annotations to make components - a format is an annotation is that like a styled component, but it can also be used to select things. Perhaps use components when you have a collection like a certain type of chapter, trying your best - like with css classes - to have a book-like structure in the semantics of the chapters, and yet have it come together in more of an app view."* · *"Show me a todo list of accomplishable and milestones along this path, so we can begin to chip away and make progress."* **Seen:** the four books at their addresses, each in its own design, every one drawn by a book class that collects its chapters by the annotations they carry; and before that, a page a programmer can read to build one. *The path is [below](#the-path).*

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

**CORRECTED BY DOUG THE SAME DAY — the first three fights below were ours, and the code was rebuilt on his answers.** His three sentences, what was measured, and what changed are in [How a Book Is Implemented](../writing-a-book/01-03-how-a-book-is-implemented.md#corrected). *The fights are kept as first written, each struck with what is true, so the wrong account is not met again as a finding.*

**What stands after the correction, in one sentence each.** The library's book finds its chapters by what they are — the cover, the table of contents, the pages — and draws four things itself through a method each: the library's name, *filed under*, *by*, and the switch. By itself it writes them down the page. **A layout is a class under it whose `write()` places every part inside an element of the layout's own,** with its CSS in one styled component on that class: the side bar in his manual, the sheet in his story, the two bars in his catalogue. The table gives each entry a CSS class for whether its chapter is open and whether its row answers for a book. A chapter that carries a file is set as a spread. A switch gives a view to the book through `$is`, in front, and nothing else.

### What reads as natural

- **The pages** are a class under Paginated answering two questions, which pages and which is open, by equality of identifiers. *The documented extension, written as documented.*
- ~~**The cover's lines are the cover's own content,** appended to the chapter…~~ **Reversed with the correction: *filed under* and *by* are lines the book draws from what its cover says,** as [Book](../library/05-book.md#how-it-is-extended) had it — *"What a book draws in its own `write` is layout, not a chapter — a masthead, a byline."* They had been put inside the cover only so that a rule could reach them, and the catalogue's bars then tore the cover apart with `display: contents` to set the author at the far end of another bar. *Now each layout puts each line where it wants, and the story's sheet leaves one out by not placing it.*
- **A chapter about a part needs no mark of its own.** The framework's Append, subclassed and exported under its name, marks the chapter it is said of. So the manual's body and any book's appendix are one kind, and [R45](103-sprint-98--dougs-design.md#r45) — an appendix wears the manual's view — holds without a line written for it.
- **The shelf is the table of contents, restyled.** The same rows; a row that answers for a book is drawn as a cover. *His third wondering answered with rules alone.*
- **Every switch is one door.** A book's `views`; a press sets `$is`; which view is shown is read back from `$is` and stored nowhere. *The first control in either library on that door, and seen on the built site: the catalogue's shelf to a list, the manual's words forward to code forward, the story's three papers, the design book's two modes.*

### The fights — what had to be known rather than met

1. ~~**A theme given through `$is` provides only inside itself**… **Missing: a theme given from outside providing to the whole of its book.** `.public`'s; a pitch.~~ **WRONG, and withdrawn.** The nesting is as described — a theme assigned through `$is` runs first, so its provider wraps only `div.pd-book` — but the framework answers it: a Format whose styled component reads theme values says `themeProvider = true` and is handed the book's current theme wherever it is nested. *We never set it. Measured on his story: with the flag a Format on the book followed paper, night and white; without it, none.* **And the layouts no longer meet it at all,** since what a book draws in `write()` is inside the provider.
2. ~~**A chapter that wears a format's layer cannot be placed by its book's grid**… **Missing: a layer that says whose it is, or one that does not box.**~~ **OURS.** The book was not laying out: `write()` was left to the base and a CSS grid in the theme moved the book's children, so the `header` and `nav` that Cover and TableOfContents add were the grid's children and the rule missed. **A book whose `write()` places each part in an element of its own never meets what a chapter wraps itself in.** *Rebuilt so: four of the five `display: contents` rules are gone, with the `order` and the two painted backgrounds. One stays, in the catalogue's shelf, which still makes a grid of the table's section from the theme — the same habit, one level down, not yet rewritten. The test library's explorer writes it too.*
3. ~~**An annotation given through `$is` is never bound.**~~ **OURS.** `$Bound()` runs once when the book is built; an annotation meant to be given at any time does its work in `defines()` and takes it back in `erase()`, which run at every draw. *The spread was already written that way by the time this was listed.*
4. ~~**`$is` is the whole set, so two switches on one book merge by hand.**… **Missing: giving and taking back one annotation.**~~ **OURS.** What `$is` gives overrides by standing in front, and the one in front turns off those of its kind. *The switch now puts the pressed view in front of what was given and removes nothing.*
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

*His library's code went from about 830 lines to 1,323.* The design book lost its private pages and frame, two chapters and about 210 lines. The manual holds nine code files, 574 lines, and three more books wear a design from them. *It adds, and what it adds is three designed books and four switches.* **Positional rules that remain: four child selectors of fight 2, and two `:has` chains in the design book's own theme, which is the part of that book not yet rewritten.** *After the correction: 1,352 lines; the family of frame annotations, the cover's subclass and three parts of three themes are gone, and three classes of book each hold a `write()` and one styled component. One wrapper rule remains, in the shelf; the two `:has` chains stand.*

### The verdict

~~**The frame would be written as a format with its own rules, and it would break at the first theme given from outside** — *so the one thing that most improves this is fight 1, in `.public`.*~~ **The verdict as first written blamed the framework for what we had not read.** *What most improved it was his second sentence: the purpose of a book is layout.* It was already written in this library, in his words, from 2026-09-13, and listed in this chapter's own reading list; the sketch followed the test library's explorer and the app-like analysis in [Book](../library/05-book.md#the-app-like-book-analysed-in-full) instead, which place chapters from a theme's grid. **Both of those are owed the same correction.** The rest of the fights stand as written, small, and each the same shape: something the book already knows that a part had to work out again.

## <a id="the-path"></a>The path — the plan reviewed on [R14](#r14), 2026-10-05

*Proposed and shown to him the same evening; his to reorder or cut. Every name of a kind, a class or a member in it is a stand-in until he gives one.*

### The plan, reviewed

- **What stands:** his fourteen requirements; the decisions that are his rulings ([D10](#d10), cataloguing is not a kind of book) and the working ones — with the page open ([D9](#d9)), nothing under `.public` changes ([D15](#d15)), a part begins where it is first needed ([D13](#d13)), every piece graded ([D14](#d14)); and [the first reading](#a-first-reading--what-the-plan-is-expected-to-say) of what the designs share.
- **What is dead:** everything built under [U7](#u7) to [U12](#u12), both forms of it. *It is read once more, for what it shows must be written down, and deleted as each real part replaces it. Nothing new imports a dead file.*
- **What is folded:** [U1](#u1) to [U6](#u6) were five chapters of his design book with ten drawings. *By "we are going to be building things as needed and not proactively", they become one table read off the designs ([U15](#u15)), written into his design book once he has corrected it.*

### What the dead code shows must be written down — the harvest, first pass

*Each is something that code had to work out, guessed at, or got wrong, with no one page to read. A second, independent pass by the helper session is merged in [Where things stand](#where-things-stand).*

1. **How a book class lays out its chapters in `write()`.** Said in his words in two places and shown nowhere in the current code; the one built example, the test library's explorer, lays out from a Format's grid.
2. **How a book draws one of its own chapters in a chosen place.** The base shows only `super.write()`; the dead code grew a helper for it.
3. **A CSS class for every element a book draws itself,** and what such a class is named. Nothing says it; the dead code selected its own elements by tag and child.
4. **Where each CSS rule goes** — the book's layout, a book's own Cover or TableOfContents subclass, the theme, a Format. Stated across four chapters and on no one page; got wrong twice in one day.
5. **`themeProvider = true` for a Format that reads theme values.** In Format and Theme, absent from the how-to.
6. **One choice out of several, switched while the page is open.** *The loop by which the one in front turns off the others of its kind is the framework's own idiom — Strict and Permissive, Open and Closed, Inline and Block each write it — so its three copies were not the fault.* What nothing says is how a control sets `$is`, and how it shows which choice is on.
7. **How a control is written at all** — buttons, state, keys, full screen. The design book's viewer keeps its state in `data-` attributes, finds its parts with `document.querySelector`, and is made of static methods and file-level constants.
8. **Reading the rows of a table of contents at run time** — which chapter a row means, whether it is open, whether it answers for another book. Worked out again per row by an annotation put on each at the bind.
9. **Finding a writing anywhere in a book.** `find` looks one level down; the dead code walks chapters, sections and paragraphs by hand.
10. **What a catalogue's page can show of a book filed under it** beyond its name and synopsis.
11. **A chapter shown with its file:** which section prints the file is `Listing` here and `Appendix` in the test library — two names for one thing.
12. **A chapter's date.** The dead code wrote an annotation of its own for it. *Read against `src` the same evening, how it reads its words and its day is the framework's own way — `binder.reference(html.copy(this.text))`, as Title, Means and the framework's Date all do — so nothing is missing there; what is undecided is whether a dated chapter carries an annotation or simply holds a Date.*
13. **Facts kept inside a file beside a chapter,** read out with a regular expression.
14. **Ordering chapters by something they carry;** not built.
15. **Keeping a reader's choice from one page to the next;** not built.
16. **Promising a library's own parts:** his library has no test; the test library has two files and no how-to.
17. **That the coding style binds a library's own code,** said in his manual where a librarian would meet it.

**Added by the helper session's independent pass, 2026-10-05** — *read-only, every file of the four books and of `src` read, nothing run; each checked here by reading before it was kept. Thirty-one rows with file and line; these are the ones the first pass did not have.*

18. **A layout that is a class of book cannot be given or taken back through `$is`.** So a switch may change a rule and never where a part is put. *Whether a layout is a class of book or something a book is given is undecided, and is his.*
19. **A chapter no layout places is not drawn.** None of the three layouts calls the base's `write()`, so a chapter that is not the cover, the table or a page would vanish. *Needed: the rule that a layout draws what it did not place, in file order.*
20. **A view's rules belong with the view.** The shelf, the list and the spread are annotations that add a class, with their rules in a theme — against [What Is Marked and What Is Replaced](../writing-a-book/06-what-is-marked-and-what-is-replaced.md), *"a box or a layout said of a writing… carries its own styled component"*. *Given another theme, the catalogue's shelf would lose its look.*
21. **The default of a switch is said twice:** once where the book declares it, and again as *the first of the list* where the switch shows which is on.
22. **A row of a table that names a heading inside a chapter finds nothing.** Five rows of the design book's table do — *The Library's Home* is a heading of Every Concept — so they are never lit. And `pa-open` is put on by two classes with two meanings.
23. **An address that names a heading opens the chapter holding it,** worked out by a search over every page's sections in his library and again in the test library's; the book exposes no such thing.
24. **The design book's figure:** three files taken by their position, a sketch's name and details read out of its HTML by regular expression, 771,288 bytes of sketch inlined into one chapter's text, and a figure in one chapter found from another by searching the whole book at every draw.
25. **A theme value made from other values in a field** — the design theme's two — is fixed when the class is made, so a mode that changes the paper never reaches it. *Policy 4 already says how: in the template.*
26. **A book's theme that adds fields** declares the type every template reads a second time, widening it for every book.
27. **Lengths and colours written as literals** through the layouts and the design theme, against policies 4 and 7; *which dimensions of a layout are theme fields, and their names, is unsaid.*
28. **A label written as CSS `content`** — *how it came to be*, the dot before the byline, the shelfmark's square. *The label as an annotation was designed on 2026-09-27 and never built.*
29. **Fetching through `$` a component declared in the same file** needs a second file-level name, which the coding style forbids; the test library does it too. *Nothing says the approved way.*
30. **A class name with two meanings:** the catalogue's list view puts `pa-list` on the book, the framework's List puts it on a list, and the catalogue's door exports a `List` that is not the framework's.
31. **`pd-` and `pa-` on elements that are no writing** — a button, a span of a control, the dateline. *Which prefix such an element takes, if any, is unsaid.*
32. **Two documents contradict a promise:** [What Is Marked and What Is Replaced](../writing-a-book/06-what-is-marked-and-what-is-replaced.md) and [The Clusters](../the-styling-surface/02-the-clusters.md) say a registration makes every written `<Table />` the library's; [`registration.test.tsx`](../../package/.tests/registration.test.tsx) promises it does not, and policy 3 agrees. *And [Append](../writing/19-append.md) still names the dot as the separator where his library uses `~`.*

### The four designs, read for structure

| every screen has | the catalogue — 19 over 1 | the manual — 6, and 8 | the design book | his story — 25 |
|---|---|---|---|---|
| **the library,** and a way home | left of the black bar, its books as tabs, its author at the right | a line over the manual's name | as the manual | a pill, *the library →* |
| **this book's cover** — title, filed under, by | the sky bar | the head of the side | the head of the side | one running line |
| **its table of contents** | the list *holds*, at the left | a side list in sections, each entry with its file's type; a tree in 8 | a side list | at the front only |
| **its synopsis** | under the title; one book's shown large as *Continue* | — | at the front | at the front, in italics |
| **one collection of chapters, in the widest place** | *chapters that each stand for a book*, as covers | *a chapter about a part*, its words | *a chapter that shows concepts*, as cards | *a dated chapter*, typeset |
| **what goes with the open chapter** | cited from outside; notes | its file; where it is used | — | — |
| **a switch** | shelf, list, table | code forward, words forward | library mode, gallery mode | book, night, white |

**The framework already has his recommendation built three times, and they are the models to write from:** `Table`, `List` and `Paginated` are each a Format said of one writing that picks out a collection of its parts (`rows`, `items`, `pages`), puts a CSS class on each at the bind, and carries the styled component that arranges them. *A shelf of books, a side list of parts, a sheet of dated chapters are the same thing said of a book.*

**The helper's second pass read each sketch's own HTML region by region, and it agrees with the table.** Every sketch has the library's name, this book's cover, its table of contents, and one collection of chapters in the widest place; 6 and 8 add a file that goes with the open chapter; 6 and 25 add previous and next. **What the sketches draw that nothing in the framework or his library gives yet:** something a reader presses; the library's name and table on another book's page; a count — *chapter N of M*, *holds 3 projects*; another book's cover details on a catalogue's page; cited by and where used; search, favourites, notes, where a reader left off; which section a table's row is in, and the type of a row's file; an order by recency; a class on a chapter's opening paragraph; and for 8, a part drawn live with its properties. *Each is met when the milestone that draws it comes, as a pattern in his library first.* **The switches drawn:** shelf, list, table (19); the papers (25); file and where used (6); paper, width and tabs (8). *Code forward and words forward is asked for and drawn nowhere.*

**So what differs between the four is three things: which kind of chapter is the main collection, how that collection is drawn, and where the cover and the table of contents are put.** *Every book also carries, at its back, chapters about the parts it is built with — the manual's main collection is every other book's appendix.*

### The milestones

- <a id="u14"></a>**U14 — what the dead code taught, written down. No new code. DONE 2026-10-05:** [How a Book Is Laid Out](../writing-a-book/01-04-how-a-book-is-laid-out.md). *As planned:* (a) The harvest above, merged with the helper's independent pass — **done 2026-10-05.** (b) One page in this branch library, *laying out a book*: `write()` places, and draws what it did not place; a class on every element a book draws; where each rule goes, and that a view carries its own; `themeProvider`; a control that sets `$is`, with one place for its default. (c) The places still teaching what is struck or false, corrected: a paragraph of [How a Library Is Designed](../writing-a-book/01-01-how-a-library-is-designed.md) — **done 2026-10-05**; the two that say a registration reaches a written word; the separator in Append; and the test library's explorer flagged for its rebuild. **Seen:** one page a programmer reads to build a book, agreeing with every other.
- <a id="u15"></a>**U15 — the structure of the four books, with no look. All four at once. BUILT 2026-10-05, with (e) moved to U16 and (f) declared by the class — [where things stand](#where-things-stand).** *As planned:* (a) The designs read region by region into one table, shown to him. (b) The kinds of chapter proposed from it, each name **asked of him**; and one question with it — **is a layout a class of book, or something a book is given, so that it can be switched?** (c) Each kind written in his manual, its chapter before its class: a Format where the kind has a look of its own, a plain annotation where it only says what the chapter is; each adds its CSS class and checks it is said of a chapter. (d) Every chapter file of the four books says its kind. (e) The library's book class: a getter for each kind's chapters, and no layout; a test file beside the library promising each book's collections. (f) One annotation, given through `$is`, that outlines every kind on the page with its name. **Seen:** each book in file order on the bare framework, a plain document; and with the outline switched on, its structure. *The dead layout code is deleted here.*
- <a id="u16"></a>**U16 — four layouts, placed and plain. All four at once.** Each book's own class places its collections where its design has them — the manual: side, words, file; the story: a thin bar over a sheet; the catalogue: two bars over its books; the design book: side and page. A component for each collection, drawn plainly. One switch, written once. **Seen:** four pages in four different arrangements of plain boxes over one base. **Gate:** the policies' own checks pass on every file — no child or element selector, no `:has`, no `display: contents`, a look only in a subclass or the theme.
- <a id="u17"></a>**U17 — the reference manual as concept 6.** First, so the parts can be read there. Its table as a side list in sections with each file's type and the open entry lit; a part's words beside its file, code forward or words forward; its cover at the head of the side; its values. Photographed against the sketch at a desk and on a phone until it matches; bound once; graded. *Asked for by the design and not built here: the table of fields, where it is used, find a part, the bench of 8.*
- <a id="u18"></a>**U18 — his story as concept 25.** The sheet; the cover as one running line; the title, the opening letter and the justified text; book, night and white; the table at the front only; his own order or by recency. Photographed against the sketch; bound; graded.
- <a id="u19"></a>**U19 — the catalogue as the shelf of 1 under the bars of 19.** Two bars; its books as covers, as a list and as a table, three views of one collection; what a cover on the shelf may show of its book put to him. Photographed; bound; graded. *Not built here: Continue, favourites, notes, cited from outside.*
- <a id="u20"></a>**U20 — the design book, light and airy, in two modes.** Its own kinds — a gallery of concepts, a question with its answer, a chosen design; the card and its viewer rewritten as components that keep their state in fields, with no static method, no file-level constant, no element looked up and no inline style; a concept's files named and not counted, its details said once and not read out of its sketch, a concept shown in another chapter found by its id; its theme's two derived values moved into the template; library mode and gallery mode. Photographed against the page he liked; bound; graded.
- <a id="u21"></a>**U21 — the close.** What two books share is in the manual with its chapter, the rest in each book's appendix, and every appendix reads as a page of the manual. No dead code left. What `.public` lacks, each as a diff for his yes. His read of every chapter in his voice, and the names.

**The helper session** reads, reviews and checks — the second harvest, the designs' own HTML region by region, the policies' checks at each gate, a review of each file before it is shown. *It is told to catch up first; code it writes is audited line by line; nothing is shown to him while it runs.* **Its first task was sized too large:** a catchup of fourteen documents and all of `src` before the audit took longer than the whole of the lead's own work, the list was shown to him while it still ran, and its report came after. *A task for it is cut to finish inside the lead's, with the catchup it needs counted in.*

## Order

**As changed by [R14](#r14): [U14](#u14) to [U21](#u21), in that order, U15 and U16 across all four books at once.** *Before it, as changed by [R13](#r13): the build first, U7 to U13, and the plan's chapters after it, U1 to U6, written from what the sketches found. As first planned: U1 and U2, which wait on nothing; then U3, U4, U5 in turn; then U6.*

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

**Next: Doug's audit of the first two milestones, then `/ce-work` on this chapter at [U16](#u16) — four layouts, placed and plain, and the one switch.** *What is his before U16 goes on: the names below; whether a layout is a class of book or something a book is given; and a yes or no to each of two changes to `.public`.* **Before any edit: open the workbench** — [the protocol](../writing-a-book/01-02-how-a-library-is-developed.md#the-protocol). **Before any word to him about code: a programmer's words** — a CSS class, a wrapper element, a subclass, `defines()`; never *a mark*, *a layer*, *stands*, *wears*.

**Built 2026-10-05, bound and seen: [U14](#u14) and [U15](#u15).**

- **U14, what the dead code taught.** One page, [How a Book Is Laid Out](../writing-a-book/01-04-how-a-book-is-laid-out.md), with a closing section for what the first build found; and four places that taught what was struck or false, corrected — [What Is Marked and What Is Replaced](../writing-a-book/06-what-is-marked-and-what-is-replaced.md), [The Clusters](../the-styling-surface/02-the-clusters.md), [Append](../writing/19-append.md), and the square in [How a Library Is Designed](../writing-a-book/01-01-how-a-library-is-designed.md#a-pattern-in-the-library-first).
- **U15, the structure of the four books with no look.** All sixteen dead code files are gone — nine parts of the manual, two of the story, three of the catalogue, two of the design book — fifteen deleted with the chapters that printed them, and the book's rewritten whole under its old name. **What his library holds now is seven code files, each beside the chapter that says what it is:**

| in | file | what it is |
|---|---|---|
| the manual | `1-the-book~code.tsx` | `$DougsBook`: draws its chapters in file order and under each the files it appends; its specification says a book holds only chapters; the theme is registered on it once |
| the manual | `2-the-listing~code.tsx` | `$Listing`, a paragraph: the name a file was appended under, and the file as a `Code` |
| the manual | `3-the-theme~code.tsx` | `$DougsTheme`: two values, `measure` and `space`, and three parts — the page, the spacing of writing, figures |
| the manual | `4-the-date~code.tsx` | `$Dated`, said of a chapter and holding one framework `Date`, which it draws at the chapter's foot |
| the manual | `7-the-outline~code.tsx` | `$Outlined`, a Format said of a book: a dashed line round every chapter, section, listing and annotated paragraph, with its class list over it |
| the design book | `90-the-paragraphs~code.tsx` | `$Asked`, `$Said`, `$Chosen`, each said of a paragraph |
| the design book | `91-the-concept~code.tsx` | `$Concept`, said of a section and given its number; `$Sketch`, said of a concept and holding the sketch's page |

**And each book says what it is in its own files.** The catalogue: three chapters that each carry another book's synopsis, and a table whose row for each ends in `[[ □ ]]( Its Name )**`. The story: four chapters, each `Dated`. The manual: a chapter and its file, five times, and two chapters about making a library. The design book: *Every Concept* is twenty-five sections, each a `Concept` with its number, its `Sketch`, a heading, what it is drawn after, the idea, two `Image`s and what he said of it; the other two chapters link to a concept by its number and show none. *The twenty-five sketches' titles, ideas and his words were read once out of each sketch's head into the chapter, by a script run once and deleted; nothing reads a sketch with a pattern now.*

**What U15 did not build, and why.** *(e) A getter for each kind's chapters and a test file promising them:* nothing reads a collection until a layout does, so they are U16's first act and not written ahead. *(f) The outline given through `$is`:* nothing can be pressed yet, so the book's class declares it and every book shows it; it comes off the class when U16's switch exists. *(b) The names:* asked of him at this showing, not before the build.

**Verified.** His library binds in 22.0s: **68 keys, every reference resolving, 738 writings specified with no failure, 5 pages proved.** On the built site in Chrome, loaded fresh, all four books at a desk and on a phone: nothing past the right edge and nothing wrong on the page but a missing `favicon.ico` at the root. A press on *19* in *The Designs I Am Going With* lands on *Two Top Bars: Black, then Sky*; a press on a square in the catalogue's table opens that book. Each code file is printed in the built page's own HTML before the browser takes it up. The policies' checks find nothing in the seven files: no child, sibling or positional selector, no `:has`, no `display: contents`, no static member, no constant at the top of a file, no element looked up, no inline style, and no length or colour outside the theme's two fields.

**Not verified, and known.** No suite covers his library. **On the live site a picture is empty** — the live server answers a picture's address with the page — so the design book's photographs are seen built only. **A save while a tab is open logs two errors from the live site's own hot update** (`createRoot` on a container already taken, then a hydration recovery); a clean load logs none. *Both are the binder's, met and not caused.*

**To see it.** `http://localhost:4242/dougs-library/` · `http://localhost:4242/dougs-story/` · `http://localhost:4242/dougs-reference-manual/#the-book` · `http://localhost:4242/dougs-design/#the-shelf`. Each is one plain column, every part outlined with the classes it carries.

**The helper's review, task 3 — sixteen findings, thirteen taken.** The outline's literal lengths and its spacing (moved to the theme, which had set none); two sentences of *The Outline*; a file's name in *The Listing*; *appends* for *keeps* in *The Book*; a second `Dated` on one chapter, now a rule; a `Concept` with no number, which had passed as 0; one specification shared by three annotations. **Three answered and left:** the `Code` inside a listing does find its chapter in the binder's page (measured); an appended picture would print as an address, and none is appended; the square is the link's only words, on his sentence — *"a little square outline character as the last character after the name, and have that character be a link to the book."* **One kept against its reading:** the outline's `[class*='pa-']`.

**Pitches for `.public`, each needing his yes.** (1) *The live server answers a picture's address,* as the bind's copy does. (2) *A page kept beside a chapter, `.html`, is copied and addressed as a picture is,* so a sketch can be opened and the design book's script loses the 825,115 bytes it carries as text.

**Owed to his eye — words in his voice.** In his manual: The Book, The Listing, The Theme, The Date, The Outline, and its synopsis. In his design book: The Paragraphs, The Concept, the opening of Every Concept, the opening of What I Am Asked, and a sentence of The Designs I Am Going With where a link to a deleted chapter stood. In his story: the list in Closure's *Where the parts are*, and one sentence there on how another chapter points to a sketch. *And across all four, "stands" and "wears" were taken out of the chapters written this week, and "the door" out of the manual.*

**Stand-in names, his to give.** `DougsBook`, its `listings`; `Listing`; `DougsTheme`, its `measure`, `space`, `page`, `writing`, `figures`; `Dated`; `Outlined`; `Asked`, `Said`, `Chosen`; `Concept`, `Sketch`; the classes `pd-listing`, `pa-dated`, `pa-outlined`, `pa-asked`, `pa-said`, `pa-chosen`, `pa-concept`; and the titles of the seven chapters that say what these are.

**Wrong turns, kept.** **The layout done outside the book** — chapters left in file order and moved by a grid in the theme — and three of its consequences reported to him as defects of `.public`, in words he could not read. *The check: before calling anything missing from the framework, grep its source and its promises for the property that answers it, and ask of any layout whether the book's `write()` is doing it.* **A rebuild that moved the layout into `write()` and still selected elements by tag through child selectors** — 56 of 101 rules; *the check is the greps in [How a Book Is Laid Out](../writing-a-book/01-04-how-a-book-is-laid-out.md#the-checks-run-before-anything-is-shown), run before anything is shown.* **A fallback proposed for a chapter a layout does not place** — his answer: *"this is exactly what the specification is for."* **A helper task sized past the lead's own** — a task for it is cut to finish inside the lead's, catchup counted.

**Before this, the same day, and gone:** U7 to U13 built four designs in a sketching fashion; he declared all of it dead test code ([R14](#r14)), and [the grade](#grade) keeps what it taught. *His old library is in the dougs-library repository at `1beb5e7`.*

**To read first.** *A start and not a boundary.*

1. **[How a Book Is Laid Out](../writing-a-book/01-04-how-a-book-is-laid-out.md)**: the page U16 is built to — the book collects, says what it must hold, and `write()` places; where each rule goes.
2. **`.me/.manual/`**, chapters 1 to 4 and 7 with the code beside each, and **`.me/.design/91-the-concept~code.tsx`**: everything his library is now, under three hundred lines.
3. **[The four designs, read for structure](#the-four-designs-read-for-structure)**, and the sketches it reads: `001`, `006`, `008`, `019`, `025` beside `.me/.design/3-every-concept.tsx`.
4. **`Table`, `List` and `Paginated` in the framework's source**: the three models for a Format that arranges a collection.
5. **[Book](../library/05-book.md#how-it-is-extended)**: chapters placed by what they carry.
