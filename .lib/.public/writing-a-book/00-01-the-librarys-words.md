# The Library's Words

- **author:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- ***The fold of [What a Library Is](01-what-a-library-is.md) and [How a Library Is Designed](01-01-how-a-library-is-designed.md), written 2026-10-07 on Doug's word that the documentation be compacted until it is short enough to be read. The record stands in those two chapters, with every ruling whole.***

---

## The model

**A library is books, and nothing else.** Every book is filed under a subject, and a subject is a book — the catalogue of what is filed under it, which says with its About what it is about. Doug, 2026-09-27: *"any book can be about something but if a book catalogues others, it must be about something."* The library's words are eight, and every page is made of them:

| the word | what it is | what is written |
|---|---|---|
| **a book** | the unit: a folder of chapters with a cover, a synopsis and a table | `<Title>[[ Its Name ]]</Title>` |
| **a subject** | a book others are filed under; it becomes one by saying what it is about | `<About>[[ Its Name ]]</About>` |
| **filed under** | the one place a book stands; the subject's table answers for it with a row | `<Subject>**[[ A Subject ]]</Subject>` |
| **a cover** | what the book says of itself, and what stands for the book wherever it is named | `Title`, `Author`, `Subject`, `About` |
| **a synopsis** | what the book is, in a paragraph; a catalogue's chapter for a book imports that book's own | `<Synopsis>{TheirSynopsis()}</Synopsis>` |
| **a table of contents** | the book seen by its parts: a reference to every chapter and an answer for every book of its subject, or the bind refuses | `$[[ ./A Chapter ]]`; `[[ Their Name ]]**` |
| **a chapter** | a part of a book; its title is its name and its address; its kind is an annotation it carries | a numbered `.tsx` beside the cover |
| **a reference** | words that mean a thing, written as its address at the bind | `$[[ words ]]( Book / Chapter )`; a place, `[[[ A Heading ]]]` |

**An author is a book too** — the autobiography, the one book by its own subject, filed where its person stands; every other author is vouched for from it in one step, and a biography filed under it is a subject in turn. **The library's own catalogue is the top**, filed under what it is about, which is itself, said with words apart from a name: `**[[ Libraries ]]( The Library )` shows *Libraries* and means the book named The Library. The Subject says where a book stands and the About what it is; the two coincide only at the top. Doug: *"her subject is the library as she is its librarian, but her autobiography is about herself - Libby. It is a subject catalogue with zero books."* [The Semantics of Books](../the-semantics-of-books/.cover.md) derives it; [Author, Subject and About](../library/04-author-subject-and-about.md), [Biography and Autobiography](../library/06-biography-and-autobiography.md) and [The Language](../the-catalogue-and-the-specification/06-the-language.md) are the classes and the notation; [`catalogue/wellformed.ts`](../../package/.binding/catalogue/wellformed.ts) holds the rules.

**A library is closed under books, and the closure is its identity.** Whoever speaks of one speaks as a book in it, and the compiler is a reader inside the closure — it reads the notation an author wrote, never an element's class or a prop. Doug: *"You break polymorphism to have the compiler EVER care about a specific type of element."* A library's tools are its own books, code beside the chapters that document it — *"a library whose inside contains its own outside, at least in printed form."* [Levels of Closure](../the-semantics-of-books/01-levels-of-closure.md); [The Soundness of a Knowledge Graph](../the-semantics-of-books/18-the-soundness-of-a-knowledge-graph.md).

## The claim

**A library is designed by deciding how what it already is gets seen.** A design adds no kinds. Every element on a screen is a part of a book at some rank, a relation the catalogue holds, or something of the reader's; one that is none of the three asks the library to become something first — a book, an annotation, a form of the notation — and is ruled before it is drawn. So the question asked of every bar, column, card and count, before any mechanism is named, is **which of the library's words is this?**

**What a drawing reads is what the book exposes**: `book.cover`, `book.synopsis`, `book.table`, `book.title`, `book.author`, `book.subject`, `book.about`; a chapter's `title`, `next`, `previous` and its annotations; a file beside a chapter, shown by a figure; `book.bookmark`, where the reader is — [Book](../library/05-book.md). A library's own annotations extend the list; what is not on it cannot be drawn honestly, since a view reads and does not re-derive.

## Every list is a rank

**A book seen from above is its canonical, and how much of it is seen is a rank.** Doug, in [The Canonical Echo](../the-semantics-of-books/06-the-canonical-echo-and-views.md): *"the canonical functions as the representative for the next layer up. So if you want to think of a book as a chapter, then it is the chapter that contains only the title, or title author — and that's the Cover!"* A catalogue's views are its books, each at one rank:

| rank | what stands for the book | the view |
|---|---|---|
| its name | the title, a row of the subject's table | a list |
| its cover | title, author, subject, whatever else the cover says | a shelf, a card |
| its synopsis | what it is, in a paragraph | a catalogue with descriptions |
| the book | the flattening | the reading view |

A switch of view is a change of rank or of order, never of content. What a rank shows is written in the book at that rank; a catalogue that retypes it drifts. The cover is the landmark at every rank.

## The frame is the book's own apparatus

**A bar across the top is a cover, and a bar down the side is a table of contents.** Doug: *"Might the top bar be a version of the cover and the side bar be a version of the table of contents?"* Where a screen shows two bars, the upper is the library's cover and table and the lower is the open book's. A frame is the book's cover and table, placed.

**The book's own class places its chapters.** Doug: *"Why would the annotations a chapter has affect what a book decides to do with it in its view? The purpose of a book is layout."* A book finds its chapters by what they carry, never by position, and its `write()` draws each inside an element of the book's own. [How a Book Is Built](00-02-how-a-book-is-built.md) is the pattern.

## What a page knows of other books is the Binder's

**The compile is the only moment a library exists as one object; the browser loads one book**, and nothing looks a book up at runtime — Doug: *"There should not be anymore dynamic link generation."* What a page shows of another book reached it at the bind: written, a row or a reference, and checked; imported, a catalogue's chapter handed another book's own synopsis — [Books in Annotations](../library/01-books-in-annotations.md#a-catalogues-chapter-is-another-books-synopsis) — or that book's cover as data, since the cover is a book's importable data model — [Designing a Page from Its Print](00-03-designing-a-page-from-its-print.md#the-rules-that-held); or compiled, an address the transform wrote. Doug: *"what a book knows about other books better be in the Binder."*

**The table of contents is the link aggregator.** Doug: *"it gives a use to the table, as a link aggregator. Yes it can present them, but it could also expose them to be consumed by the rest of the system."* And of how: *"We can't have the binder validate TSX. It uses its templating language to validate, and the writer can use that anywhere."* So the Binder requires one table per book with a link to every chapter and to every book of its subject — `CHAPTER-NOT-LISTED`, `NOT-LISTED`, `NOT-IN-THE-TABLE` — and a bar, a rail or a shelf is drawn by reading the table. [The Binder, As Built](../the-catalogue-and-the-specification/07-the-binder.md#structure) says what it holds; what it does not hand a page yet — the reverse of a reference, the chain upward, a count — is [its open list](../the-catalogue-and-the-specification/07-the-binder.md#open). A design names the fact in the library's words — *filed under*, *by*, *refers to* — and the Binder compiles it in the direction the screen needs. Doug: *"If not, we should add that."*

## What is the reader's

Which rank a catalogue is shown at, which order, which paper, what was last open: the reader's, stored in no writing. The framework holds one, `bookmark`; a page is drawn as the library's default and changed after.

## Tests of a view

From [Ways of Reading](../ways-of-reading/04-ways-of-reading.md):

1. **Identity through change.** The canonical is the anchor, and the way back stays visible.
2. **Views multiply claims.** Switching between two views of one catalogue is itself the check.
3. **A view reads.** It asks the model and draws the answer; it tests no strings and invents no addresses.

And Doug's test of a sprint's end — could a hand-authored page fake it? *"Dynamic view change is proof that we are coding the semantics and annotating the semantic structure with what is necessary for the view."*
