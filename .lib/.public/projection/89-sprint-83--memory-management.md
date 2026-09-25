# Sprint 83: Memory Management

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **status:** requirements-only — brainstormed 2026-09-25; the book as memory approved, the table of contents in design
- ***The sprint's name is Doug's subject, given in the room: "This is a session about memory management now."***

---

## Where this unit comes from

**Doug closed [Sprint 82](88-sprint-82--chapter-and-book.md) with:** *"Good. I believe we have the core of a real library now! Say that we're going to spend a sprint looking at Genesis and seeing what we are missing, and then get back to my library."* **And opened this one:** *"Okay catchup on Genesis and what might be next. We have changed things so be aware of what we might have. Is there anything else we truly need to do? We do, we need to think hard about the references in a table of contents and the way links work on chapter titles etc... and decide how this is going to work. Fortunately the requirement is mostly that references for them need to be in the table, and not much else, but let's imagine what a canonical realization of that might look like."*

**It became a sprint about memory the same hour:** *"This is a session about memory management now. We can imagine all writing having a book, so it would be great if we could use that as a memory space."* The table of contents is the first thing that needs it; Author, Subject and About are the second.

## What the Genesis says

| | the event | where this code stands |
|---|---|---|
| **the table** | E30: *"the Table of Contents is a container for titles and potentially summaries."* E31: Part, the book in a book, for nested tables | a table refers to each chapter by hand, `$[ ./The Argument ]`, landing on the title's id — [Sprint 82](88-sprint-82--chapter-and-book.md) |
| **the self-link chain** | E33: *"cover title → book; synopsis → cover; table of contents → synopsis → cover"* — and the Canonical, a nameless mark that reappears and takes you there | a cover's title links to its book; the synopsis → cover link went with v1's `<For>`; the Canonical is unbuilt |
| **upward** | E35: *"A Book sees its Cover's types and decides it deserves them; upward transit is informal; a parent may translate."* E57: *"Why not have it import those annotations upward to its level"* | the book reads its cover's Author, Subject and About through properties |

**What the catch-up judged still missing against the Genesis**, and not this sprint's: the page's shape, every composition a span; Part, the Summary, `<Type>` by name and several authors; the dot escape reaching every title, which Doug's library meets at its first bind; the synopsis → cover link.

## Found by measuring, before any design

*Every line was measured over this code's build with a probe in the scratchpad, 2026-09-25; nothing in `src` was changed.*

- **Every writing reaches its book while it is built.** A chapter's `$Define`, a paragraph three levels down, an annotation's `$Define` and its `defines` all see the whole chain up to the book, though the book's own `$Define` runs last — `annotation $Define: $DeepParagraph > $Section > $Probe > $ProbeBook`. *The team first said the opposite, reading `reflection.chemical`, and the probe corrected it.*
- **The chain does not end by itself.** Above the book is chemistry's root, whose parent is itself; a walk that stops only at an absent parent ran out of memory. A book is found by stopping at a Book, or at a writing that is its own parent.
- **An annotation cannot tell in its `$Define` what its writing carries.** A Content's `$Define` sees its book and not its sibling TableOfContents, which joins the chapter after the children are built; in `defines`, at the chapter's define, it does: `content defines — its writing is a table: true`.
- **The collection's `add` adopts.** `book.annotations.add(this, this)` from a table made the book its parent — *"its parent was $Chapter, is now $ProbeBook"* — and the book then ran it as its own gene.
- **An annotation the annotation installs, and takes back in its `erase`, churns.** It was in the book after construction, erased out when the book drew, and put back when the chapter drew — so the book's memory was whole only between the two draws. It cost no extra draw in a server render.
- **An annotation the writing puts in the book, cited to itself, is run and drawn there.** Doug's variant — the writing's define finding the annotations to put in the book: the page opened `<nav class="pd-container"><span><header…`, **the whole book drawn inside the table's nav**, and the table annotation drew 4 times rather than 2, once more for each place it stood.
- **The book's annotations are live.** *Measured in the package's own render-counting harness — a book wearing a counted Format, happy-dom, React's client — with a probe deleted the same turn.* An annotation added to a book's annotations after the mount redraws the book, whether from a handler in one of its chapters or from outside: **two draws and one paint** — the redraw and chemistry's diff after the commit — and the book then holds it. *Doug had asked "shouldn't adding to the collection trigger an update of the Book?", and it does: the collection is `@represented()` and `annotations` is a declared getter, which chemistry makes a reactive property.*
- **And filling the memory while the book is built is free.** A book whose table's annotation installs itself — in its `$Define`, or at every define — draws three times and paints once, **exactly as a book with nothing installed**: the render, React's development double, and chemistry's diff after the commit. *So memory filled at construction costs nothing because nothing has drawn, and memory changed after the mount is live at one paint — which is what "a change costs one paint" asks.* An added annotation is found only once the book has defined again, since the collection iterates what its last define established; the redraw defines it.

## Rulings of the brainstorm, verbatim

| on | Doug's words |
|---|---|
| **the Canonical** | asked whether the canonical realization meant E33's mark: *"I don't think we need that right now, but it's a good component to make."* |
| **which chapters a table refers to** | *"Get with the program! All of them. And it is a reference for the others. The table of contents even needs its own link. Plenty of tables have a Table of Centents title. Wonderful spot to be a self-link if it doesn't end up one already. We need all of them and it's the job of the table implementer to filter as needed"* |
| **Content, and the book** | *"Let's make a Content annotation, which is a type of Reference, and you can do <Content>[]()</Content>. But we are going to want to have a way for chidlren to know how to pass those contents up, in case they get rendered inward. Someone would likely want to give them to the parents annotations if possible and then anything can access its book (writing perhaps should have a book! and it recursively wanders up parent until it can return one - implement this beautifully), and then get its table (can be the property for its table of contents) and that thing could expose its references. Can everyone share the books annotations as a sort of denomic memory system and that's where we put things? It's where subject and author are already going if possible. How do we get thing into Book's annotations without triggering rerenders, so that all writing can interact with it if it wants?"* |
| **a downward scheme** | *"We'll find a downward scheme. So then does the book not exist and the parent is undefined on first render?"* — measured: it exists, and every writing reaches it while built · *"This is a session about memory management now. We can imagine all writing having a book, so it would be great if we coudl use that as a memory space"* |
| **what the memory is** | chosen: *"The book's annotations, holding entries that act on nothing"* |
| **`$book`** | *"Approve, give every writing a book. And give every writing a chapter. For book, overridde it and return the canonical which is its cover. You can recurse upards to find its chapter. We might also need to have a $book and $chapter properties so that for disconnected writing, we could lend it ones book and chapter. Maybe it shouldn't be a lookup. Maybe part of writing is just to assign $book and $chapter on the ones who need it. Book assigns itself to itself, and the chapters assign themselves to themselves, and writing always passes down what it has to its contents and annotations? That would propagate the system around. Actually forget chapters, let's just do this for $book - does that work as a relatively simple system? Although I guess we can do reaching with `protected _book` · `get $book() { check _book and if not assigned reach up }` · `set $book(value: $Book) { this._book = value; }` That works"* |
| **installation** | *"No I think we are still designing this. Content can be an annotation that knows how to register itself in the books annotations right? Cover should. TableOfContents should. The contents ones will actually know that they re being rendered in the table of contents and maybe can do something on that particular chapter, and then the whole table of contents puts itself in its parent. Let's get some tests on this installation-based system. I like it. It feels right for the semantics of annotations. They kind of mean things that can point upward and this is a nice expression of that"* · *"Wait so they can register upward?"* — measured: yes |
| **how the book holds them** | *"Added to annotations. Define can get its annotations and find ones to put in book"* — measured: the book then runs and draws them · *"This requires design. I like it"* |
| **the visible end** | *"Approve pending the design. We want to know that this whole strategy works"* |
| **live** | on the three shapes offered for holding an installed annotation: *"Hmm, no shouldn't adding to the collection trigger an update of the Book? This is where it becomes questionable. We need the annotations to be live I think"* — measured: they are, at one paint, and installing while built is free |

## Requirements

*Written 2026-09-25 in three sections; the first approved, the second in design, the third approved pending it. Each says what would be observed if it held.*

### The book as memory — approved

| | the requirement | observed |
|---|---|---|
| **R1** | Every writing has a `$book`: the book it was lent, else its parent's, reached for up the chain — Doug's shape, `protected _book` · `get $book()` returning it when assigned and reaching up when not · `set $book(value)` lending one to writing that stands in none. A Book is its own; the walk ends at a Book or at a writing that is its own parent. Chapters are left out: *"Actually forget chapters, let's just do this for $book"* | a paragraph three levels down answers its book in its own `$Define`; a writing built alone answers none, and nothing loops; a writing lent a book answers that one |
| **R2** | The book's annotations are the memory every writing shares — *"a sort of denomic memory system"* — holding entries that act on nothing | a book holding an entry is not changed by it: no layer, no link, no class of the entry's |
| **R3** | The memory is live: filled while the book is built it costs no render — *"without triggering rerenders, so that all writing can interact with it if it wants"* — and changed after the mount it updates the book at one paint — *"We need the annotations to be live I think"* | a render count shows a book with its memory filled drawing and painting exactly as one without; an entry added after the mount redraws the book once, one paint, and is found there after |
| **R4** | Author, Subject and About are in the book's memory — *"It's where subject and author are already going if possible"* — and the book's `author`, `subject` and `about` read them from there | the book answers them from its own annotations |

### The table of contents — in design

*Doug: "No I think we are still designing this."* **What stands:** a table refers to every chapter of its book, its cover, its synopsis and itself — *"All of them"* — and its own entry is its title, a self-link; each reference is a **Content**, *"a type of Reference"*, written `<Content>[]()</Content>`; what a table shows is its implementer's — *"it's the job of the table implementer to filter as needed"*; the table is reached from any writing as its book's `tableOfContents`, which exposes its references; and **annotations install themselves upward** — Content, Cover and TableOfContents — *"They kind of mean things that can point upward."*

**The one question the design must answer**, from what was measured above: an annotation in the book's annotations is run and drawn by the book — a Format there wraps the whole book, a Reference there would make it a link — while R2 asks that an entry act on nothing. **How does a Cover, a TableOfContents or a Content stand in its book's memory, found there by anything that asks, without the book running it or drawing it again?** With it: when each installs — an annotation knows its book in its `$Define` and its sibling annotations only at the chapter's define — and whether installing makes the book its parent.

### The test library and the visible end — approved pending the design

| | the requirement | observed |
|---|---|---|
| **R10** | Every table of the test library refers to its chapters as Contents, with no hidden paragraph | the library's files carry no parenthetical list of their apparatus |
| **R11** | A chapter that is not the table reads its book's table from memory and draws it — the paper's argument listing the chapters of its book | add a chapter to a staged copy and the list grows with no edit to the chapter drawing it — what a hand-written page cannot fake |

**Out of scope:** E33's Canonical — *"a good component to make"*, later; the synopsis → cover link; Part, the Summary, `<Type>` by name; the spans; the dot escape.

## Where things stand

**Next: the design of installation, with Doug — then `/ce-plan` on this chapter.** *Doug: "This requires design. I like it."* The question is written above under [the table of contents](#the-table-of-contents--in-design), with the measured facts it must answer to — the last two, that the memory is live at one paint and free while the book is built; the probes that measured them were thrown away and are not the design.

**Read these first:** this chapter's [measurements](#found-by-measuring-before-any-design) and [rulings](#rulings-of-the-brainstorm-verbatim); [Developing an Annotation](../writing/10-developing-an-annotation.md), for the four powers and why an erase is `revert(this)`; [The Annotation System](../writing/07-the-annotation-system.md), for what a define establishes and expresses; and [Book](../library/05-book.md), for what the book exposes today.

**Standing:** nothing in `src` is changed until the plan's list has Doug's yes; commit locally and never push until he says.
