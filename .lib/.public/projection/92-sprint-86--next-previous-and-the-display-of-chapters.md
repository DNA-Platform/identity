# Sprint 86: Next, Previous and the Display of Chapters

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **status:** requirements-only — brainstormed 2026-09-27; `/ce-plan` next
- ***The sprint's name is a PROXY, the room's; Doug's to rename.***

---

## Where this sprint comes from

**Doug opened it at the close of [Sprint 85](91-sprint-85--headings-and-routes.md):** *"I think the next design is that we need, where possible, components that represent properties that they have access to. So Next and Previous could reach to their chapter and be chapter references. I like previous of the cover is the cover and next of the last chapter is the last chapter - I prefer self-reference to undefined. Those references are set by book as part of its binding perhaps."*

**And of the display of chapters:** *"Let's pretend we had the first M and last N chapters that we wanted to be fixed in view like an app, and you can think of the first as header and sidebar and the last as footer, and the rest of the chapters as tabs, scrollable content, or just with links that move between. Let's call this an advanced use case. I want an author to be able to implement such a thing. Add that to the extension story for Book, because implementing books is largely about how to display the chapters. You implement various types of chapters through direct types or annotations, and use them in Book. Then, Paginated is just one annotation that serves as an example, and might also be inherited from perhaps? That makes it less important than simply the ability to customize. A book can't be limited in how its chapters are displayed and .public gives its authors the ability to subclass Book and do sophisticated usecases."*

## What the room already holds

- **The bookmark is on the book and reactive** — `$bookmark`, the url the page is open at, set on the held instance by the app and the render; `bookmark` the chapter whose title means it — [Book](../library/05-book.md), Sprint 85's D2 as amended. A layout that shows one chapter at a time reads it and redraws with it; the redraw of every chapter on a move is [the cascade, pitched to chemistry](../../../chemistry/.lib/projection/00-planning.md#pitch-cascade).
- **The router never decides what is visible** — Sprint 85's D3: it keeps the address and the bookmark in step and lands on the fragment; the book's layout decides what to show.
- **The layout rulings of the first library still hold** — [The Book Is the Layout](../writing-a-book/05-the-book-is-the-layout.md): *"a template method for each part, like the header and the footer… the chapters go where put"*; nothing cached, a get-only property; one list, walked once; *a group is named, never left over*; `header()` and `footer()` a book kind's, not `$Book`'s.
- **An annotation acts through four powers** — [Developing an Annotation](../writing/10-developing-an-annotation.md): `defines`/`erase`, `specifies`, `note`; it marks its presence with a `pa-` class; a mark on a child from `defines` costs that child a draw, which on a book whose chapters redraw with every move is already paid.
- **A synopsis stands its Reference at `$Bound`, from what its book holds** — [Cover, Synopsis and TableOfContents](../library/03-cover-synopsis-and-table-of-contents.md); Next and Previous are the same shape, which Sprint 85's record already names.

## Rulings of the brainstorm, verbatim

| on | Doug's words |
|---|---|
| **where next and previous live** | offered get-only on Chapter, reading its book, over set by the book at its binding: *"Get-only on Chapter, reading its book"* |
| **the ends** | offered a Self reference where the cover's previous is the cover and the last's next is the last: *"Yes, a Self reference at the ends"* |
| **the parts of the advanced use case** | *"This is an example use case, not something we are implementing. We want to know that the author has a relatively easy time implementing this in book. Just imagine there were Header, Footer and Document annotations on the chapters and the book reads them to decide what to do with them, and it wants the router to be able to show the active tab based on the url - something like that. Just prove that we could implement it. It has to be possible otherwise our system is not flexible enough"* |
| **the visible end** | *"I am happy to see scrolling and next/previous simple paginated chapters as an example of what can be done in the test library. Send me links"* |
| **Next and Previous as exemplars** | on section A: *"Approve, but make Next and Previous loosely coupled components. They should be exemplars of how to make components that consume properties. It is a component for a type that represents properties, just as an annotation is like a component for a type that confers them"* |
| **Paginated** | on section B: *"I think so. I rely on you to make the most performant, elegant implementation of this possible as an example of what is possible"* |
| **the advanced use case** | on section C, after approving it as a promise: *"The demonstration is by analysis in the full. Explain to me how one would implement such a thing, and how complex it would be. The two examples are just good enough"* — so R8 is the analysis, and no book kind is built |

## Requirements

*Written 2026-09-27, for Doug's approval by section. Each names what would be observed if it held.*

### A. Next and Previous

| | requirement | observed |
|---|---|---|
| **R1** | `Chapter.next` and `Chapter.previous` are get-only, computed each time from the book the chapter stands in: the mention of the chapter after it, and before it, among the book's chapters in order; at either end, and for a chapter standing in no book, a Self reference to the chapter's own mention. Nothing is stored | in a book of cover, synopsis, table, A and B: `A.next` is B's mention and `B.next` is B's own; the cover's `previous` is the cover's own; a chapter built alone answers itself |
| **R2** | `<Next>` and `<Previous>` are writings that stand in a chapter — the nearest chapter above them — and mean what that chapter's `next` and `previous` mean: their words the writer's, their Reference stood at `$Bound`, when the book is whole; at the ends the Reference is a Self, so the link wears `pa-self-reference` and no underline. Built outside a chapter, each says so when asked. `means` is their property, as it is Means's. **They are loosely coupled and written as the exemplar of a component that represents a property:** each knows only that its chapter answers a Reference by one name, computes nothing of the book itself, and draws what it is answered — the dual of an annotation, which confers a property; [How Writing Is Extended](../writing/06-how-writing-is-extended.md) gains the pattern as a row, with the test library's running head as the hand-written case before it | drawn in the paper's evidence, *next* links to the evidence itself without an underline and *previous* to the argument; in the argument, *next* to the evidence; the promises count what a mount costs, no more than a Means; the class reads as a pattern an author copies |
| **R3** | The compiler changes nothing for them: a next or previous is the url the compiler already wrote into a chapter's title, and no notation names one | the bound pages carry the links and the proof reads them; the compiler's suites unchanged in number |

### B. Paginated, one annotation that serves as an example

| | requirement | observed |
|---|---|---|
| **R4** | `<Paginated />` is an annotation said of a book. Where it is expressed, the book's chapters are pages: the pages are marked once, at `$Bound`, as the Table marks its rows; the bookmarked chapter — the cover when the bookmark names none — is marked open at each define, so a move costs two marks, the old page's taken back and the new one's put; and the note styles a page that is not open away, keyed on the book's own mark so an unpaginated book is untouched. Nothing in how the book writes changes; the router keeps landing and the book keeps turning. *Doug: "the most performant, elegant implementation of this possible as an example of what is possible"* — the draws of a move are counted in a promise and stated | on a paginated book's page at `/book/chapter/`, that chapter alone is visible; `/book/` shows the cover; a Next link shows the next chapter with the address moved and no reload; back returns; the same book without the annotation shows every chapter down the page |
| **R5** | Paginated is written to be subclassed: a class under it keeps the marks and gives its own style — tabs, a sidebar — and may say which chapters are its pages, so an app-like book keeps its header and footer out of the pages; it is still Paginated wherever one is asked for | a promise with a subclass whose style differs and whose pages are a named group |
| **R6** | Paginated is said only of a book, and says so when asked otherwise | its specification, and a promise |

### C. The extension story for Book — the advanced use case demonstrated by analysis, in full

| | requirement | observed |
|---|---|---|
| **R7** | [Book](../library/05-book.md)'s *How it is extended* carries the display of chapters as its first concern: a book kind places its chapters by what they carry — a group found by an annotation or a type, never by position, never as a remainder — and reads its bookmark to decide what is open; the look is the format's; Paginated and Next are the two examples, an annotation that confers and a component that represents, and *"the two examples are just good enough"* | the chapter, and Doug reading it as the way he would do it |
| **R8** | **The analysis, written in full into that chapter:** how an author implements the app-like book — the first M chapters fixed as header and sidebar, the last N as footer, the middle as tabs with the open tab read off the url — step by step in the library's own files, with the count of what each step is, what in `src`, the compiler and the router it touches (nothing), where a fight would appear and what already answers it; and how complex it is, said as lines and files. Doug: *"Explain to me how one would implement such a thing, and how complex it would be"* — [the sketch below](#the-analysis) is the brainstorm's, and the chapter's is the sprint's | the section, and its complexity stated as a number an author can check against their own count |

### D. The visible end

| | requirement | observed |
|---|---|---|
| **R9** | The test library shows both: every book carries `<Previous>` and `<Next>` in a resource of its own — the test library's own name, from the book arts — and one book is `<Paginated />`; bound, served, and photographed in Chrome | Doug sent the links: a scrolling book with next and previous at each chapter's foot, and the paginated book one chapter at a time, walked by its links |

**Out of scope:** the advanced kind as a book, in the test library or a promise — R8 is analysis; Part; any change to the router; the cascade, which is chemistry's.

### <a id="the-analysis"></a>The analysis, sketched — how an author would implement the app-like book, and how complex it is

*The brainstorm's sketch, at mechanism altitude; the sprint writes it in full into Book's chapter.* **In the library's own files, five things, and nothing in `src`, the compiler or the router:**

1. **Three marks, as annotations in the book's own file** — `Header`, `Footer`, `Document`, each a class under Annotation that puts its `pa-` class on the chapter it is said of and takes it back, as Biography does: about six lines each. A header or footer that should be *an element* — a `<header>`, a `<footer>` — is a class under Format with that `style`, as Cover is, and costs the same six lines. The author writes `<Header />` on the first M chapters, `<Footer />` on the last N, `<Document />` on the rest. *The compiler reads no tag, so it learns nothing and refuses nothing here; every chapter still has its route.*
2. **Which chapters are pages** — a class under Paginated, five lines, saying its pages are the chapters that are documents, so the header and footer are never hidden; Paginated's own marks and note do the rest. The open document is the bookmarked one; the router already lands there and the book already turns.
3. **The fixed frame is the theme's** — the book's Format, which the test library already gives every book: a grid whose areas are named for the marks — `.pa-header` in the header row, `.pa-footer` in the footer row, sticky where the author wants them fixed — some twenty lines of CSS, and no element added, since a format never adds one.
4. **The tabs are a table of contents drawn from `contents`**, as the test library's `Entries` already draws one: an entry per document, each a Reference to its chapter, and the entry whose mention is the book's `bookmark` wearing an open class — one comparison of two identifiers, which is the one thing done with two. Some fifteen lines.
5. **The active tab by the url** costs nothing more: the url is the bookmark, the bookmark is the open document, and the tab that mentions it is marked in the same draw.

**Complexity:** on the order of sixty to eighty lines across the book's `.book.tsx` and its table's resource, every one of them in the author's register; three classes that are annotations, one that is a Paginated, one theme, one drawn table. **Where a fight would appear, and what answers it:** a tab that should *not* redraw the header on a move — the book redraws whole on a move today, the cascade, which is chemistry's to end and costs the author no line; a document that must be scrolled to its top when opened — the book's turn does it, since a page's title wears its id; hydration — the server draws each page with its bookmark set, so the open tab is open in the served markup and the first paint is the paint. **What would make it impossible, and is not there:** a book that could not read its chapters' marks (it can, by `is`), a layout the router decided (it never does), a url the classes had to parse (they compare, never read).

**Actors and flows.** *A1 the reader*, on a page, following next and previous; *A2 the author*, subclassing Book to display chapters as the book wants; *A3 the router*, unchanged. *F1* a reader on the evidence follows *previous* to the argument: the address moves, the book turns, nothing reloads. *F2* a reader on a paginated book follows *next*: the open page changes with the address. *F3* an author writes a book kind with header, footer and documents and a tab is open by the url.

**Acceptance examples.** *AE1* `B.next.identifier === B.mention.identifier` and `B.next instanceof $SelfReference`. *AE2* the evidence's page drawn: `a.pa-self-reference` around *next*. *AE3* `/some-book/chapter/` paginated: one `.pa-open`, the rest `.pa-page` hidden, seen in Chrome. *AE4* the R8 book kind's markup: `header > …`, `footer > …`, one open document between.

**Names, ours and flagged:** `next`, `previous`, `Next`, `Previous`, `Paginated` are Doug's; `pa-page`, `pa-open`, `Header`, `Footer`, `Document` in the proof, and the resource's name in the test library are ours.
