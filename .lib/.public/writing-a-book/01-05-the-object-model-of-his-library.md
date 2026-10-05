# The Object Model of His Library

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***A DESIGN, written 2026-10-06 before any code that follows it, and his to correct. Three plain layouts stood in his library when he asked what they were made of, and the answer was class names taken from layouts. This chapter starts again from each design. Its output is the table of contents of his reference manual. The chapter's name is a PROXY, and so is every class name in it.***
- **Read it as a survey, not as the plan. His word on it the same day: *"that's a lot and they are very abstract… is that what is required to implement the designs? … those are the minimum abstractions you need."*** So nothing here was built because this chapter proposed it; each thing was built when a design on the screen needed it, and [what the third build found](01-04-how-a-book-is-laid-out.md#what-the-third-build-found--2026-10-06-u17-and-u19) is the record of what that came to. **Taken, because a design needed it:** a type of book as a class with its arrangement, theme and faces; `Entry` and `Index`; the catchword; one of a set and a family of views; a title that means the book its chapter is a synopsis of. **Proposed here and not taken:** the author and the subject as notes on the cover; removing `Paged`; the kinds Introduction, Guide, Lead, Question and Decision; anything named for a design that is not yet built.

---

## His words that set it

> **"Every book you build is different right? There's no generic one. You are defining the types of books for my library."**
>
> **"Find ways of specifying the types of chapters too. It might be through annotations, it might be base classes, though be careful not to have more than one chapter base class because then no one can subclass the base without rewriting the other subclass."**
>
> **"You have been obsessed with identifying ordinary chapters. Ever think that maybe there's no such thing as an ordinary chapter, and you should have them all typed and annotated?"**
>
> **"Have you come up with the type of book that each design corresponds to, and a way of specifying it as such? There might be a base class book, but what else? Have you designed an object model with thoughtful names and meaningful components to convey the semantic structure of the designs?"**
>
> **"I want to see the names of the design, the names of the parts of the design. An object model that captures the design, but in the semantics. What are the differences. What are the types of books that are different? Don't extend synopsis unless you are creating a new type of synopsis! And you can extend things by subclassing them, exporting a variable of the same name, and having that used instead."**
>
> **"Coming up with an object model for the design is as hard or harder than the design itself. The design has nothing to say about structure… It is deep work to fill the pages of the reference manuals with the tools that will help us build this library."**
>
> **"The annotation system is new. They are a form of adding trait. They give you a power that is almost like multiple inheritance. Like classes in the html so CSS could be moved out, annotations give you a place for the magic to allow the code to retain much of its semantic character."**

## The method

*From the research he asked for, each rule with its source. The checklist at [the end](#the-tests-applied) is applied to this model.*

- **A screen is evidence of the domain, never the domain.** Naming classes after a layout is the known failure. *Fowler's test:* imagine the same book in a completely different presentation; whatever would have to be written twice belongs in the model. — Evans, *Domain-Driven Design*, 2003 ("Smart UI"); Fowler, *Separated Presentation*, 2006.
- **Collect the words the owner uses, make them one vocabulary, and narrate each design aloud in those words only.** A thing with no word is a missing concept; an awkward word is a wrong model. — Evans.
- **Give each candidate one sentence of purpose and its responsibilities, then play what-if.** A responsibility with no home makes a new part or splits one. — Wirfs-Brock & McKean, *Object Design*, 2003; Beck & Cunningham, 1989.
- **Subclass only for a special kind of the thing.** Not for a role it plays, not when it could turn into another, not to reuse a utility's code. — Coad & Mayfield, *Java Design*, 1997; Liskov & Wing, 1994.
- **What an object can have two of, or gain and lose, is a role and not a type.** — Fowler, *Dealing with Roles*, 1997; traits, Schärli et al., 2003.
- **A part never sets its own outer position; its parent's element does.** — BEM; the template method of Gamma et al., 1994.
- **Walk the books to come through the model and count the classes edited against the classes added.** An edited base is a failed model. — Kazman et al., SAAM, 1994; Meyer's open–closed principle.
- **A name says what a thing is in the domain, never how it looks or where it sits; a noun or an adjective, never a verb.** — Evans; Meyer, *Object-Oriented Software Construction*, 1997.

## The lens: what the library already says a screen is made of

*All of this was ruled before the designs were drawn. [How a Library Is Designed](01-01-how-a-library-is-designed.md) holds it whole.*

- **A bar across the top is a cover, and a list down the side is a table of contents.** *"Might the top bar be a version of the cover and the side bar be a version of the table of contents?"* Where a screen shows two bars, the upper is the cover of the book this one is filed under.
- **A table of contents is where a book refers to everything it holds**, each chapter and each book filed under it, and the Binder refuses a table that misses one. So a list, a shelf and a table of books are the same table shown at another rank: by name, by cover, by synopsis.
- **A book seen from the book it is filed under is its cover.** *"If you want to think of a book as a chapter, then it is the chapter that contains only the title, or title author — and that's the Cover!"*
- **What a page shows of another book reached it at the bind**: written, imported or compiled. What the Binder does not hand a page yet: a count, the chain upward, what refers to this book, another book's cover.
- **Some of a screen is the reader's and no book's**: a view, a paper, an order, a favourite, a note, where they left off.

**So every part of every design below is one of three things:** a part of this book — its cover, its table of contents, its synopsis, a chapter of some kind; a relation between books that the Binder holds; or something of the reader's.

## Each design, part by part

*The first column is the design's own name for the part, from the sketch. The second is what it is in the library. The third is the `.public` structure that carries it; **new** means his library has to write it, and **not there** means nothing in `.public` or the Binder gives it yet.*

### 1 · The library's catalogue — *The Shelf* (1) under *Two Top Bars: Black, then Sky* (19)

**A reader comes to choose a book.** *In the model's words:* the cover, set as a bar, says the library's name, who it is by and what it is filed under. Its holdings list what it holds. Its entries, one for each book filed under it, are set on a shelf as covers, and the reader may set them as a list or a register instead. The entry that is open is shown large, with its synopsis.

| the design's part | what it is in the library | the `.public` structure |
|---|---|---|
| **the library's bar** — the mark and name, the subjects with their counts | the cover and the table of contents of the book this one is filed under | the cover's `Subject` leads there. *The other book's table on this page: not there.* For the library itself it is its own cover and table |
| **me** | the author | the cover's `Author`, drawn as a **byline** — new |
| **the title bar** — *filed under*, the title, *by*, the counts | this book's cover | `Cover`, `Title`, `Subject`, `Author`, drawn as a bar — new, the catalogue's own `Cover`. *Counts: not there* |
| **the views** — *Shelf*, *List*, *Table* | the reader's choice of the rank the entries are shown at | three Formats given through `$is` by a `Choice` — new |
| **holds** — what this book holds | the table of contents, by name | the `TableOfContents` chapter, drawn as **holdings** — new, the catalogue's own `TableOfContents`. *Counts, favourites: not there* |
| **the shelf** — each book as a cover, with its name, date and size | the entries, by cover | the entry chapters, arranged by the `Shelf` view. *Another book's author, colour, date and size on this page: not there* |
| **continue** — one book large: its cover, name, a line about it, a way in | the open entry, by synopsis | the chapter carrying that book's `Synopsis`, when the address names it. *Where the reader left off: not there* |
| **across** — *cited from outside*, *my notes* | what refers to this book; the reader's notes | *not there* |

**An entry is a chapter that carries the synopsis of a book other than its own.** That is the framework's own definition — *"A catalogue entry is a chapter that is a synopsis"* — so it needs no annotation of the library's. **`Catalogues` is struck**: it was not a kind of synopsis, it said nothing the `Synopsis` had not said, and it was a verb.

**What his library adds is its own `Synopsis`, and that is a new kind of synopsis:** one that, when it is of another book, makes its chapter's title lead to that book. *The framework left exactly this to a library — "skip the title as a default and customize from there for your library." It is exported under the framework's name, so an entry is still written `<Synopsis>{TheirSynopsis()}</Synopsis>`. And each entry opens with one sentence of its own that links to the book, as he asked.*

### 2 · The reference manual — *Side by Side* (6) with *The Workbench* (8)

**A reader comes to look something up.** *In the model's words:* the cover heads the index. The index lists every page in groups, each with the type of file it documents, and the open one lit. A page says what a tool is: its purpose in a lead, then sections, and a table of its properties. Its listing is set beside it. The turn leads to the page before and the page after. The reader may bring the listing forward or the words.

| the design's part | what it is in the library | the `.public` structure |
|---|---|---|
| **where**, **the book** | *filed under* and the title: the cover | `Cover`, drawn as the head of the index — new, the manual's own `Cover` |
| **the index** — groups, entries each with a file type, the open one lit | the table of contents, in sections | the `TableOfContents` chapter: `Section` and `Heading` for a group, a `Content` for an entry. The lit entry and the file type are new: the manual's own `TableOfContents` and `Content`. *Find: not there* |
| **the picker** (on a phone) — the open entry, *part 2 of 8* | the same table closed to its open entry; the **folio** | the same `TableOfContents` at a narrow width |
| **the page** — crumb, title, lead, sections | the open chapter | `Chapter`, `Title`, `Section`, `Heading`; the lead is the chapter's first paragraph, said so by a trait — new |
| **the fields** — name, type, what it is | the tool's properties: a table in a section | a `Section` carrying the framework's `Table`, three words to a row |
| **the turn** — the page before, the page after | the chapters either side | the framework's `Previous` and `Next`, drawn once by the book under every page |
| **the file** — its name, its numbered lines, lines lit, *copy* | the file the chapter appends | `Append`, printed by a `Code` as a **listing**. *Lit lines, copy: not there* |
| ***where it is used*** | what refers to this tool | *not there* |
| **the tree of parts** (8) — under each page the classes its file declares, each with its kind | one rank below a chapter | *not there: nothing reads a file's classes* |
| **the bench** (8) — one tool drawn alone, its properties changed by hand | — | *not there, and not in this build* |
| **words forward / code forward** | the reader's choice of which is given the room | two Formats given through `$is` — new |

**Two kinds of page.** A page about a tool appends the tool's file, and the framework's `Append` already says so. A page that says how something is done — *Initializing a Library* — appends nothing, or a tool it uses; it says it is a **guide**. *The canonical words agree: a reference page and a how-to guide are the two kinds a manual holds.*

### 3 · His autobiography — *The Reading View* (25)

**A reader comes to read it through.** *In the model's words:* a running head carries the title and the byline. One chapter is open on the sheet, set as prose with an initial, and its dateline says when it is from. The turn leads on. At the front are the synopsis and the table of contents. The reader chooses the paper, and takes the chapters as written or newest first.

| the design's part | what it is in the library | the `.public` structure |
|---|---|---|
| **the papers** — *book*, *night*, *white* | the reader's choice among three sets of the theme's values | three `Theme`s given through `$is` — new |
| ***the library →*** | *filed under* | the cover's `Subject` |
| **the running head** — the title, *by* | the cover, as one line | `Cover` with its `Author`'s byline — new, the story's own `Cover` |
| **the chapter** — title, an initial, the text | the open chapter | `Chapter`; the initial is a rule for the opening paragraph, which says it is the lead |
| **the dateline** (his words, not drawn) | when a chapter is from | `Dateline`, said of a chapter and holding the framework's `Date` — built, as `Dated` |
| **the turn** — before, *chapter 1 of 3*, after | the chapters either side; the folio | `Previous`, the folio, `Next` |
| **the front** — the synopsis in italics, the table | the book's own two | `Synopsis`, `TableOfContents`, on the page that is open when no chapter is |
| **the order** (his words, not drawn) | the reader's: as written, or newest first | an order over chapters that carry a dateline — new |

### 4 · The design book — its own page

**A reader comes to compare and to decide.** *In the model's words:* a concept has a number, a name, what it is after, its idea in a sentence, two photographs, what he said of it, and its listing. A question is put by letter about some concepts, and answered. A decision records what was chosen for a kind of book and from which concepts. The reader may see the concepts as a gallery, and the book in a library mode or a gallery mode.

| the design's part | what it is in the library | the `.public` structure |
|---|---|---|
| **the index** | the table of contents | `TableOfContents` |
| **a concept** | a section of a chapter | a `Section` that says it is a `Concept` and gives its number — built; `Image` twice; a paragraph that is `Said`; a `Code` |
| **a question** — its letter, the question, the concepts, the answer | a section | a `Section` that says it is a `Question` — new; paragraphs that are `Asked` and `Said` — built |
| **a decision** — the kind of book, what was chosen, from which concepts, the story, the book it is for | a section | a `Section` that says it is a `Decision` — new; a paragraph that is `Chosen` — built |
| **the gallery** — concepts as cards | the concepts, by their photograph and name | a Format given through `$is` — new |
| **a card opened across the screen** | the concept the address names | the place, which the book already knows. *No new state* |
| **library mode / gallery mode** | the reader's choice between two sets of values | two `Theme`s — new |

### 5 · The three to come

- **The Claude project catalogue — *The Database* (9) under *Two Top Bars: White, then Opal* (20).** A catalogue. Its entries are set as a **register**: a row for each, with columns for its name, what it is filed under, when it was kept, its size and where it is cited. *A board is the same rows grouped by what they are filed under. A row opened beside the table is the open entry.*
- **A project's conversations.** A catalogue, its entries a list, ordered by date or by size.
- **A conversation — *A Conversation, in the Black Side Bar* (23).** A book that is a transcript: each chapter is turns, each turn by a speaker, with listings and figures in it.

## The differences

**Read across, the designs differ in six things and nothing else.**

| | catalogue | manual | story | design book | conversation |
|---|---|---|---|---|---|
| **a reader comes to** | choose | look up | read through | compare and decide | follow |
| **the widest place holds** | its entries | the open page beside its listing | the open chapter | the open chapter, or its concepts | the open chapter's turns |
| **the cover is drawn as** | a bar | the head of the index | a running head | the head of the index | a bar |
| **the table of contents is drawn as** | holdings; and again as the shelf | an index in groups, with types | a list at the front only | an index | a list at the side |
| **its chapters are** | entries | pages about a tool; guides | dated chapters | chapters of concepts, of questions, of decisions | parts of a transcript |
| **the reader may switch** | shelf, list, register | words forward, code forward | the paper; the order | the mode; the gallery | — |

**And they share seven things:** a cover that says the title, the author and the subject; a table of contents; a synopsis; one place open at a time; a way to switch; the entries of whatever books are filed under them; and, at the back, pages about the tools they are built with.

## The types of book

**Five types, four of them needed now. Each is named for what a reader does with it, in his own words for it.**

| type | a book of this type is | books |
|---|---|---|
| **`Catalogue`** | read to choose another book: its entries are the main thing | *Dougs Library*; later *Conversations with Claude*, and each project |
| **`Manual`** | read to look something up: every chapter is a page with its file beside it | *Dougs Reference Manual*; later any book's back pages that outgrow it |
| **`Story`** | read through, a chapter at a time | *Dougs Story* |
| **`DesignBook`** | read to compare and decide | *Dougs Design* |
| **`Conversation`** | followed, turn by turn | later |

**The three catalogues are one type.** *"The shelf, the table and the map are all good for different catalogues… These should all look like different things."* They differ by which view each names as its own and by their colours, which is one line and a theme each.

**Cataloguing stays what any book does.** *"Something does not need to JUST be a catalogue. I would argue that a reference manual that catalogues reference manuals is still a reference manual."* So every type has a place for entries. A `Catalogue` is the type that gives them the widest place.

## What a type is made of

**A type of book is a small family of `.public` structures, and a book says its type by using them.**

| member of the family | what it is | how a book uses it |
|---|---|---|
| **its `Book`** — a class under the library's base | where each part goes: `write()` places the cover, the table, the open page. Its own element carries the rules that arrange them. Its specification says which kinds of chapter it holds | the book's `.book.tsx` extends it, in one line |
| **its `Cover`** — a class under the framework's `Cover` | how this type draws a cover: a bar, the head of an index, a running head | the book's `.cover.tsx` imports `Cover` from the type |
| **its `TableOfContents`** — a class under the library's | how this type draws its contents: holdings, an index with types | the book's `.table.tsx` imports `TableOfContents` from the type |
| **its kinds of chapter** — annotations | what a chapter of this type says it is | written in the chapter, as `<Cover />` is |
| **its views** — Formats | the arrangements a reader may switch among | given through `$is`; the type names one as its own |

**Each is exported under the framework's own name**, so a chapter file reads as it always has — `<Cover />`, `<TableOfContents />`, `<Synopsis>` — and what changes is the line that imports them. **And the type's specification holds the book to it:** a book that extends `Manual` and carries another type's cover is refused by the bind.

**Under the types is one base, and it is never a book by itself.** It holds what is true of every book of his: which chapter is open; a page for each chapter, with one shown; what a book must hold. *Its `write()` that printed chapters in file order goes: no book used it.*

**And there is no chapter base class.** A kind of chapter is an annotation, as the framework's own three are. *If his library ever needs chapters to draw something themselves, it gets exactly one `Chapter`, exported under that name, and every kind stays an annotation so the kinds compose.*

## The kinds — what a piece of writing says it is

**Every chapter of his library says a kind, and a type's specification refuses one that does not.** *"Ordinary chapter" is gone from the code and from the words.*

| said of | kind | what it is | from |
|---|---|---|---|
| a chapter | `Cover`, `TableOfContents` | the book's own | the framework |
| a chapter | `Synopsis` | the book's own; or, of another book, an **entry** | the framework; his library's own for the title |
| a chapter | `Append` | a page about a tool, with the tool's file | the framework |
| a chapter | `Guide` | a page that says how something is done | new |
| a chapter | `Introduction` | says what its book holds and how to use it | new |
| a chapter | `Dateline` | from a day, and says which | built, as `Dated` |
| a section | `Concept`, `Question`, `Decision` | the design book's three | one built, two new |
| a paragraph | `Asked`, `Said`, `Chosen`, `Lead` | who is speaking, or that it opens its chapter | three built, one new |
| a book | a view; a `Theme`; `Outlined` | how the reader has chosen to see it | some built |

*One hole, left open rather than papered: the design book's three main chapters each hold one kind of section, and what such a chapter itself is called is not found yet. A* register*, a list in sequence by number, is the nearest canonical word.*

## Subclass or annotation

**The rule, and it is Coad's first two tests with his own sentence on top.**

- **A subclass, when it is a special kind of the thing and will never be anything else.** A `Manual` is a kind of book. The manual's `Cover` is a kind of cover. A `Listing` is a kind of paragraph. *Each is written its own way: it has its own `write()`, its own members, its own specification.*
- **An annotation, when it is a trait a writing has, and a writing may have several.** A chapter is from a day *and* is a page about a tool. A book is shown as a shelf *and* outlined. *"They are a form of adding trait. They give you a power that is almost like multiple inheritance."*
- **A Format, when the trait has a look.**
- **Never a subclass to borrow code.** `Catalogues extends Synopsis` failed this, and so did `Spread extends Sidebar` in what stands in his library today: a spread is not a kind of sidebar.
- **A change to one of the framework's own is a subclass exported under its name.** *"You can extend things by subclassing them, exporting a variable of the same name, and having that used instead."* His library's `Author` is an author that draws its own byline; its `Subject` draws *filed under*; its `Synopsis` sends an entry's title to its book.

**What that does to the chapter files is the point.** A chapter stays a title, sections, paragraphs, pictures and a file, with a word or two saying what it is. *"Like classes in the html so CSS could be moved out, annotations give you a place for the magic to allow the code to retain much of its semantic character."* Where a thing is put, how it looks, and what happens when it is pressed are in the type and in the annotations, and never in the chapter.

## The tools — the pages of his reference manual

*Each is a page of the manual: what the tool is, written first, with its file beside it. **G** is general and kept in the manual; **L** is used by one book and kept at that book's back, until a second book needs it.*

**What every book is**

| page | the tool | state |
|---|---|---|
| The Book | the base: the open chapter, the pages, what a book must hold | built; loses its own layout and its *ordinary chapters* |
| The Author and the Subject | `Author` and `Subject` that draw the byline and *filed under*, on the cover | built as two paragraphs the book drew; becomes the two annotations |
| The Table of Contents | lights the entry that is open | new |
| The Synopsis | of another book, sends its chapter's title there | new |
| The Listing | a file's name and the file | built |
| The Turn | the page before, the folio, the page after | new |
| The Switch | a `Choice`, and a set of views of which one holds | built; the set is new |
| The Theme, The Outline, The Dateline | — | built |
| The Kinds | `Guide`, `Introduction`, `Lead` | new |

**The types of book**

| page | the tools | where |
|---|---|---|
| The Catalogue | its `Book`; its `Cover`, a bar; its `TableOfContents`, holdings; the views `Shelf`, `List`, `Register` | G |
| The Manual | its `Book`; its `Cover`; its `TableOfContents` and `Content`, an index with types; the views words forward and code forward | G |
| The Story | its `Book`; its `Cover`, a running head; the papers; the order | L, in *Dougs Story* |
| The Design Book | its `Book`; `Concept`, `Question`, `Decision`; the gallery; the two modes | L, in *Dougs Design* |

## <a id="the-tests-applied"></a>The tests applied

**The model was put to the research's checklist before it was written here, and three earlier passes failed it.**

1. **Every name is a word of the domain.** *Pass one named classes `SidebarBook`, `Sheet`, `TwoBars`: positions on a screen. They go.* What is left: catalogue, manual, story, entry, holdings, index, listing, byline, dateline, lead, folio, turn, shelf, register — each his word or a word of the book trade, checked against the EPUB structural vocabulary, DocBook, DITA, TEI and the librarians' glossaries.
2. **Each design can be said aloud in the model's words.** *The four sentences above are that test. The words they needed and the model lacked were* entry, holdings, turn, folio, lead *and* register.
3. **Every subclass is a special kind of its base.** *Two were not, and are struck.*
4. **What a thing may have two of is an annotation.** *A chapter with a dateline and a file; a book with a view and an outline.*
5. **No part sets its own outer position.** *The type's `write()` places; a cover, a table and a chapter are never told where they are.*
6. **Redrawn in another presentation, nothing is written twice.** *A catalogue shown as a register reuses its entries, its cover and its table, and adds one Format.*
7. **Five books to come, walked through:**

| the book to come | classes added | classes edited |
|---|---|---|
| *Conversations with Claude*, a register in Claude's colours | a book file, a theme | none |
| a project, a list by date and by size | a book file; a trait for an entry's size | none |
| a conversation | the `Conversation` type and its kinds | none |
| a book's back pages spun off as their own manual | a book file; an entry in the book they left | none |
| a manual that catalogues other manuals | entries, which are chapters | none |

## What changes in what is built

- **The classes named for a layout go**, and with them the registration of an arrangement: `SidebarBook`, `Sidebar`, `Spread`, `Sheet`, `TwoBars`, `Paged`. A type's own element carries its arrangement; a view is a Format.
- **The design book gets a type of its own.** It extends the manual's layout today.
- **The base book loses its file-order `write()`, its `chapters`, and the check of `pd-canonical`.**
- **The byline and *filed under* move from paragraphs the book draws to the cover's own `Author` and `Subject`.**
- **Entries are found in the base**, so any book may hold them, and each entry's title leads to its book.
- **Every chapter file says its kind.**

## Open, and his

- **The names**, all of them.
- **Whether `Story` and `DesignBook` are kept at their own books' backs** until a second book of the type exists, or in the manual from the start.
- **What a chapter of concepts, of questions or of decisions is called.**
- **What a shelf shows of a book beyond its name and synopsis.** The canonical answer is that book's own cover, handed to the entry as its synopsis is; nothing does that yet.
- **Where a reader's choice is kept** from one page to the next.
