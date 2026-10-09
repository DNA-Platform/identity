# How a Library Is Designed

- **author:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- ***Written 2026-10-05, at the opening of the brainstorm on building Doug's library, on his correction of a first architecture sketch: "You need to keep catching up on what a library is if this is your level of knowledge, and upon catching up, you might need to find the design books in your library branch that are about using .public, and start writing meaningful works on how one designs a library." [What a Library Is](01-what-a-library-is.md) says the metaphor; this chapter says what a design of one is. Its worked example is his own library's seven screens, chosen in [Sprint 98](../projection/103-sprint-98--dougs-design.md). The chapter's name is a PROXY.***

---

## The claim

**A library is designed by deciding how what it already is gets seen.** A design adds no types. Every element on a screen is one of three things: a part of a book at some rank; a relation between books that the catalogue holds; or something of the reader's. An element that is none of the three is the design asking the library to *become* something first — a book, an annotation, a form of the notation — and that is said and ruled before it is drawn.

*This is the web isomorphism of [Ways of Reading](../ways-of-reading/04-ways-of-reading.md) read as a discipline. Doug's seed there: "a book is the fundamental website" — the cover is the masthead, the table of contents the index, chapters pages, references hyperlinks — so every established pattern is a candidate view of the same objects, and none of them is a new data model.*

## The question asked of every element

**Which thing in the library is this?** It is asked of each bar, column, card and count in a sketch, before any mechanism is named. The first architecture sketch for Doug's library skipped it and was wrong three ways in one message:

- It asked how a page could know the books under a subject. **The library already says:** a catalogue answers in its table of contents for every book filed under it, and the bind refuses otherwise — `NOT-LISTED`, `NOT-IN-THE-TABLE` ([A Library, Necessarily and Sufficiently](../the-catalogue-and-the-specification/09-a-library-necessarily-and-sufficiently.md#every-case)). Doug: *"Does not the current library support the idea that the library is a subject, and that there has to be a link to each of the books in its subject in its table of contents?"* It does.
- It drew a shelf, a list and a table as three formats laid over a catalogue. **They are ranks of one projection**, derived two months before — [below](#every-list-is-a-rank).
- It treated what one page knows of other books as an open problem of the page. **It is the Binder's**, and Doug said so: *"what a book knows about other books better be in the Binder."*

Each answer was in a book of this branch. The question finds them; a mechanism reached for first does not.

## What a library hands a designer

Everything below exists before any design, and a design is free to use all of it. *The left column is the library's word; the middle is what a drawing reads; the right is what the compiler holds it to.*

| the thing | what a drawing reads | held to |
|---|---|---|
| **a book** | `book.cover`, `book.synopsis`, `book.table`, its chapters by what they carry; `book.title`, `book.author`, `book.subject`, `book.about` — [Book](../library/05-book.md) | one cover, one synopsis of itself, one table of contents, one theme |
| **a chapter** | its `title`, which is its name and its place; `next` and `previous`; the annotations that say what type it is | one title; an address that follows its name |
| **the cover** | what the book says of itself: Title, Author, Subject, About — [Author, Subject and About](../library/04-author-subject-and-about.md) | carries its author and its subject |
| **filed under** | the subject's table: a row for each book, beside a reference to that book's synopsis | a tree with one root; answered from both ends |
| **a topic** | a second catalogue a book also stands in, answered the same way | an overlay; a loop is no fault |
| **by** | the author, who is the autobiography or a book it vouches for | one autobiography; one step |
| **a reference** | words that mean a thing, written as its address at the bind — never a place, so a layout may change under it | resolves, or the bind refuses |
| **a place** | a heading or a mention named `[[[ so ]]]` | referred to by something, or refused |
| **a file beside a chapter** | inserted where a literal stands, shown by a figure | used, or refused |
| **where the reader is** | `book.bookmark`, set by the router and read by whatever lays the book out | — |

A library's own annotations extend the list: Doug's has a date a chapter carries. **What is not on the list and not added to it cannot be drawn honestly**, since [a view reads and does not re-derive](../ways-of-reading/04-ways-of-reading.md).

## <a id="every-list-is-a-rank"></a>Every list is a rank

**A book seen from above is its canonical, and how much of it is seen is a rank.** This is Doug's derivation in [The Canonical Echo](../the-semantics-of-books/06-the-canonical-echo-and-views.md): *"the canonical functions as the representative for the next layer up. So if you want to think of a book as a chapter, then it is the chapter that contains only the title, or title author — and that's the Cover!"* And a subject seeing all its books by title alone *"sees a list of title-sections"*, which is the table of contents. The other total view is the flattening, the whole book in reading order.

So a catalogue's views are not inventions. They are the books under it, each projected at one rank:

| rank | what stands for the book | the familiar view |
|---|---|---|
| its name | the title, as a row of the subject's table | a list, a table's first column |
| its cover | title, author, subject, and whatever else its cover says | a shelf of covers, a card |
| its synopsis | what it is, in a paragraph — a catalogue's chapter | a catalogue with descriptions |
| the book | the flattening | the reading view |

*[On Synopsis](../../../../.claude/library/bookkeeping/09-on-synopsis.md) is the same ladder in the team's own library: four layers between a question and a chapter, each making the next rarely necessary.*

**Three things follow for a design.**

- **A switch of view on a catalogue is a change of rank or of order, and never of content.** If two views of one catalogue disagree about what is in it, one of them is not a view.
- **What a rank shows of a book is written in that book, at that rank.** A cover's colour, mark and date are said on the cover; what the book is about is said in its synopsis. A catalogue that retypes them has made a second copy, and the copy drifts.
- **The cover is the landmark at every rank.** The same mark names the book on the shelf, in the row and at the head of the reading view — Gabby's rule, *identity through change*, and Doug's own request in Sprint 98: *"some sort of visual landmark to ground the book, which justifies seeing the cover."*

## The frame is the book's own apparatus

**A bar across the top is a cover, and a bar down the side is a table of contents.** Doug, of his own sketches: *"Might the top bar be a version of the cover and the side bar be a version of the table of contents?… they might be good things to think about as the meaning of the cover and table of contents."* So a frame is not chrome added around a book. It is the book's cover and table, placed, and where a screen shows two bars the upper is the library's cover and table and the lower is the open book's.

**How it is built: the book's own class places its chapters.** *Corrected 2026-10-05, the day this was written — Doug: "Why would the annotations a chapter has affect what a book decides to do with it in its view? The purpose of a book is layout."* A book finds its chapters by what they carry and never by position, and its `write()` draws each inside an element of the book's own; a class under Paginated says which chapters are pages and which is open; how a cover or a table of contents looks in that book is the book's own subclass of it. **This paragraph first said that a Format on the book gives the grid, and pointed at the test library's [explorer](../../package/.binding/.test/manual/7-the-explorer.tsx) as that built** — the explorer is built that way, pays for it in `display: contents` and `:has` chains, and is owed a rebuild as a class of book; the account is [what he corrected first](01-03-how-a-book-is-implemented.md#corrected), and the struck step is marked in [Book](../library/05-book.md#how-it-is-extended). *What the explorer still shows truly: the tree is the table of contents, the tabs are the chapters a reader opened, and nothing in it is anything the manual did not already have.*

## What a page knows of other books is the Binder's

**The compile is the only moment a library exists as one object** ([The Soundness of a Knowledge Graph](../the-semantics-of-books/18-the-soundness-of-a-knowledge-graph.md#three-checkers)): the browser loads one book. And nothing looks a book up at runtime — *"There should not be anymore dynamic link generation"* (Doug, 2026-09-19, in [`assembly/routes.ts`](../../package/.binding/assembly/routes.ts)). So anything a page shows of another book reached it at the bind, one of three ways:

- **written** — a row of a table, a reference in prose — and checked;
- **imported** — a catalogue's chapter handed another book's own synopsis ([Books in Annotations](../library/01-books-in-annotations.md#a-catalogues-chapter-is-another-books-synopsis));
- **compiled** — an address, written into the source by the transform.

**What the Binder holds while it runs** ([The Binder, As Built](../the-catalogue-and-the-specification/07-the-binder.md#structure)): every book and chapter by name; every edge — filed under, topic, by — from both ends, with where each was written; what every table answers for; every reference and the file and line it stands on; who may author.

**What it does not hand to a page today**, each of which a screen of Doug's asks for:

- **the reverse of a reference** — *cited by*. The structure has every reference; the reverse index is named open in [the binder's own list](../the-catalogue-and-the-specification/07-the-binder.md#open), and [the reference chapter](../the-semantics-of-books/16-the-reference-and-its-locator.md) reads `citedBy` as the compiled direction and never a stored member;
- **the chain upward** — a book's subject's subject, to the library;
- **a count** — how many chapters a book holds, how many books a subject;
- **what stands for a book above its name** — a row carries the book's name and a few words that lead to its synopsis; its mark, its colour and its date are said on its own cover and do not reach its catalogue's page.

**The rule for a design:** name the fact in the library's words — *filed under*, *a topic of*, *by*, *refers to* — and it is the Binder's to compile in the direction the screen needs. Doug, 2026-10-05: *"If not, we should add that."* A fact that cannot be named in those words is not a fact about the library yet.

### <a id="the-link-aggregator"></a>The table of contents is the link aggregator

**A catalogue knows its books by referring to them, and the place it refers from is its table.** Asked whether the Binder should hand a catalogue the covers and synopses of the books under it, Doug, 2026-10-05: *"No it would enforce that the link syntax is used for each chapter. What kind of catalogue is it if it has no way of referring to the books in the subject. So we could validate that the table has links to all the chapters of the book and the table has links to all the books in the subject... That would be a strong thing, and it gives a use to the table, as a link aggregator. Yes it can present them, but it could also expose them to be consumed by the rest of the system."*

**And it enforces in its own language, never in TSX.** Doug, the same hour: *"It should be relatively easy to ensure all such links exist in the table, since we should have the subject structure of the book validated already. We can't have the binder validate TSX. It uses its templating language to validate, and the writer can use that anywhere."* The check is over the notation written in the table's file — a reference to each chapter, an answer and a synopsis reference for each book — whatever element holds it, so a library lays its table out as it likes and the links are still counted.

So the Binder's part is **enforcement**, not delivery: one table per book, holding a link to every chapter of the book and to every book of its subject, complete or the bind refuses. And the table has two uses: it **presents** the links, and it **exposes** them, so that a bar, a rail, a shelf or a list is drawn by reading the table and nothing else. *A design that needs the books of a subject or the chapters of a book reads them from that book's table.*

**The two rules, as built the same day in [Sprint 99](../projection/104-sprint-99--the-link-aggregator.md), on his word — *"The table needs to refer to all chapters including itself. Might as well be there, though frequently it will be placed in some interesting place. And it should refer to all books."*** The books of a subject were enforced already — `NOT-LISTED`, `NOT-IN-THE-TABLE`. The chapters are again: `CHAPTER-NOT-LISTED`, struck on 2026-09-26 in [Sprint 84](../projection/90-sprint-84--means-and-the-table.md) when a table became drawable from what its chapters mention, is restored as one loop over what the compiler already recorded of each table ([`catalogue/structure.ts`](../../package/.binding/catalogue/structure.ts), `lists`). And a third rule left: `NO-SYNOPSIS` asked a catalogue's table for a link into each book's own synopsis, and he let it go — *"The synopsis rule can go if the chapter rule is there right because the synopsis will have to be there?"* — since every book holds a synopsis and its own table refers to it.

*What is still not there.* At runtime `TableOfContents.contents` answers the chapters' own mentions and not the rows naming other books — Sprint 84's note: *"a catalogue's rows name other books too, which no chapter of it mentions"* — so the links to a subject's books are presented today and not exposed.

### <a id="a-pattern-in-the-library-first"></a>A pattern in the library first

**What `.public` lacks is first built as a pattern in the library itself.** The same day, a rule of the Binder was edited to fit the form below, on the strength of an option Doug had picked in a question. He stopped it: *"I take changes to .public very very seriously. Make this a pattern implemented in the library itself."* And of where such a part lives meanwhile: *"it can be something in the reference manual of the test library before we find a home for it in .public."* The edit was reverted unlanded. **So the order is fixed: a part in the library's manual and a convention in how its books are written; proved there; and only then a change to `.public`, pitched and shown as a diff.** The validations above — every chapter and every book linked from the table — were then asked for by name, planned, shown and built, as [Sprint 99](../projection/104-sprint-99--the-link-aggregator.md).

**The worked case is the square.** Doug: *"For chapters that represent a book, we can put a little square outline character as the last character after the name, and have that character be a link to the book. This can be a library-wide convention"*, and of its look, *"aligned right and a thoughtful distance away from the text and reusable."* In his library it is three things, all his library's own:

- **a chapter of the catalogue that stands in for each book** filed under it, titled with the book's name and handed that book's synopsis — `<Synopsis>{TheirSynopsis()}</Synopsis>`, the catalogue's entry of [Books in Annotations](../library/01-books-in-annotations.md#a-catalogues-chapter-is-another-books-synopsis);
- **a row of the table**: the name, a reference to that chapter, and after it the catalogue's answer for the book with the square as its words, `[[ □ ]]( Its Name )**`;
- **owed with the catalogue's design, [U19](../projection/105-sprint-100--the-big-plan.md#u19):** a part of his manual that draws the square and keeps the book's name in the link for a reader who cannot see it, and the rule that sets the squares of a table in one line at the right, a set distance past the longest name. *Both were built once, in code he then declared dead; from 2026-10-05 the square is the plain character and the link's only words.*

*It was written on the Binder as it stood, with three references into the books' synopses kept in the table's unshown apparatus for the rule that then asked for them; Sprint 99 removed the rule and the three with it.* **A rule that a catalogue must hold a chapter for each book was tried and withdrawn** — Doug: *"I don't know how we'd validate that books have chapters, and I am worried that you might be looking for components."* The chapter is the library's choice; the link is the compiler's rule.

## What is the reader's

**Some of a screen belongs to whoever is reading and to no book**: which rank a catalogue is shown at, which order, which paper, what was last open, what is a favourite. A design marks these as the reader's so that nobody stores them in the writing. The one the framework already holds is the place, `bookmark`; the rest have no home yet, and a page is drawn first as the library's default and changed after.

## Tests of a view

From [Ways of Reading](../ways-of-reading/04-ways-of-reading.md), and each has caught a real fault:

1. **Identity through change.** The reader never asks whether this is still the same thing; the canonical is the anchor, and the way back stays visible.
2. **Views multiply claims.** Every view is a new place for an unchecked statement, so name its corroborating sibling: switching between two views of one catalogue is itself the check.
3. **A view reads.** It asks the model and draws the answer; it does not test strings, invent addresses or keep its state in the writing.

And for a sprint that builds one, Doug's test of an end: **could a hand-authored page fake it?** One catalogue drawn at three ranks from the same books, on one press with no reload, cannot be faked — *"Dynamic view change is proof that we are coding the semantics and annotating the semantic structure with what is necessary for the view."*

## How the designing is done

**In the library being designed, by showing.** The [prototype workflow](../../../../.claude/library/..teamsmanship/19-workflows.md#the-prototype-workflow) and what its second run added are the procedure: a design book in the library holds every sketch once under a number it keeps, each question beside the sketches it is about with the answer under it, the designs chosen with their story, and the tools that build the book in its own appendix — closure, [How to Be a Librarian](05-how-to-be-a-librarian.md). The librarian's autobiography tells how it came to be and links to all of it. Only then is a library [dressed](02-dressing-a-library.md), and its tools written into its [manual](04-the-reference-manual.md), each chapter before its tool.

## The worked example — seven screens, named

*Doug's library, as chosen in Sprint 98. The numbers are his design book's concepts. The last column is what the naming exposed.*

| the screen | which thing in the library it is | not there yet |
|---|---|---|
| **the library's catalogue** — the shelf of 1 under the two bars of 19, switching among 1, 2 and 3 — *as read from his answer H; on 2026-10-06, after it was built so, he said "the two header sky and dark was never one of them", and the design per page is to be found again with him* | the library's own page: its cover and table as the upper bar, the open subject's cover as the lower, and the books filed under that subject, read from its table, at cover rank, name rank and synopsis rank | what stands for a book above its name; *cited from outside* is the reverse of a reference crossing a subject |
| **the reference manual** — 6, with 8 for a part | a chapter and the file beside it shown together; the tree is the table of contents with each chapter's files as leaves | *where it is used* is the reverse of a reference; code forward or words forward is the reader's |
| **the design book** — light, with a library mode and a gallery mode | one book under two sets of a theme's values | — |
| **the autobiography** — 25 | the flattening, one chapter open at a time; by recency, an order over chapters that carry a date | the order |
| **the Claude project catalogue** — 9 under 20 | a subject's page at name rank with columns: what each book's cover says, the project it is filed under, where it is cited | a count, and the reverse of a reference |
| **a project's conversations** | the same one subject down, with orders by recency and size | waits on the importer |
| **a Claude conversation** — 23 | a book: the rail is its table of contents, a turn is writing by a speaker, *cites* is its references and *cited by* their reverse | the reverse; and a note of the reader's is not yet anything in the library |

**The same three gaps recur on five screens** — the reverse of a reference, a count, the chain upward — and all three are things the Binder already knows while it runs. That is the finding the first sketch missed and the question found.

## What is not settled

**Settled 2026-10-05:** a catalogue's books reach its page as links in its table, validated complete by the Binder and exposed by the table — [above](#the-link-aggregator). **Not settled:** how a link carries what a shelf of covers needs of a book beyond its name; what form a compiled fact, such as *cited by*, takes in a chapter's source; where the reader's choices are kept; and what a note is. Each is Doug's to rule, and this chapter is edited as he does.

**Names.** Doug's: *the top bar as the cover, the side bar as the table of contents*; *what a book knows about other books better be in the Binder*; *canonical*, *flattening*. Ours, flagged: *rank* for how much of a book stands for it; *the reader's*; this chapter's title.
