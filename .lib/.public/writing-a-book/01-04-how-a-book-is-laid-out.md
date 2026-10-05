# How a Book Is Laid Out

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***Written 2026-10-05 as the first milestone of [Sprint 100's path](../projection/105-sprint-100--the-big-plan.md#u14), BEFORE the build it describes: Doug had declared every line of code in his library dead test code and asked what must be written down to build a real one. Every rule here is his sentence or a rule another chapter already holds, cited; where neither library has built a thing yet, the section says so, and the build corrects this page. The chapter's name is a PROXY.***

---

## His sentences

> **"Book is layout. Chapters are logical parts. This is the essence of the framework."** — 2026-09-13, [the anchor](../the-coding-style/03-the-coding-style.md#book-and-chapter)
>
> **"Why would the annotations a chapter has affect what a book decides to do with it in its view? The purpose of a book is layout."** — 2026-10-05
>
> **"I recommend that you try to use annotations to make components - a format is an annotation is that like a styled component, but it can also be used to select things. Perhaps use components when you have a collection like a certain type of chapter, trying your best - like with css classes - to have a book-like structure in the semantics of the chapters, and yet have it come together in more of an app view."** — 2026-10-05
>
> **"If you need chapters to have a certain specification, this is exactly what the specification is for. Look it up. Write your components to specification."** — 2026-10-05

## In one paragraph

**A chapter says what it is with an annotation. A book's class collects its chapters by what they carry, says in its specification what it must hold, and draws each part in `write()` inside an element of its own. A collection of one kind is arranged by a Format. A look has one of four homes, and no property of any element has two authors.** *Each sentence is a section below.*

## 1 · A chapter says what it is

**By an annotation it carries.** The framework's own already say most of it:

| a chapter that is | carries | the book asks |
|---|---|---|
| the cover | `Cover` | `book.cover` |
| the book's synopsis | `Synopsis`, meaning its own book | `book.synopsis` |
| the table of contents | `TableOfContents` | `book.table` |
| a stand-in for another book, in a catalogue | `Synopsis`, handed that book's own synopsis — [a catalogue's chapter](../library/01-books-in-annotations.md#a-catalogues-chapter-is-another-books-synopsis) | `chapter.is($Synopsis)`, and it is not `book.synopsis` |
| about a file kept beside it | `Append` — [Append](../writing/19-append.md) | `chapter.is($Append)` |

**A kind the framework has no word for is a class of the library's own:** under `$Annotation` when it only says what the chapter is, under `$Format` when the kind has a look, since a Format carries a styled component. It adds its CSS class in `defines` and takes it back in `erase`; its specification says what it may be said of; it is named for the trait, never for what it does — [Developing an Annotation](../writing/10-developing-an-annotation.md). **So one annotation does two jobs: code finds the chapter with `chapter.is(Kind)`, and a rule finds it by its class.** *That is what "can also be used to select things" means here.*

## 2 · The book collects

**A getter per collection, read every time it is asked, never kept:** `this.text.find($Chapter).filter(chapter => chapter.is($Kind))`. Never by position, never by a title's words, and never as what is left once other things are taken — [*a group is named, never left over*](../the-first-draft/05-the-book-is-the-layout.md#not-a-remainder).

## 3 · The book says what it must hold

**A layout that has a place for some kinds of chapter says so in the book's specification, and the bind holds every book to it.** A class under `BookSpecification` adds a rule — a `$`-method under `@specify`, asserting with `$check` — that every chapter the book holds is one its layout places. [`specify`](../utilities/03-specification.md) is asked of every book in the bind's `specify` phase, and a failure names the chapter's file. **So `write()` assumes and never hedges, and a chapter with no place is a refused bind: never a chapter silently missing from the page, and never a fallback written to catch it.** Doug, 2026-09-27, of the same choice in the framework: *"Validate. Don't make a mess of the code by badly assuming. This is what the specification is there for."*

**The same for a kind:** what a kind needs of its chapter — a date a machine can read, a file beside it — is a rule of the kind's own specification, which [runs against the writing it is said of](../writing/07-the-annotation-system.md#the-specification-at-the-heart).

## 4 · `write()` places

**A book with a layout draws each part inside an element it makes itself.** *A book with none — his library's base, which writes its chapters down the page in file order and under each the files it appends — draws them as the framework's `write()` does, with nothing around them.* A chapter the book holds is drawn where the book wants it through its own component, as the base's `write()` draws its text — `const Cover = $(cover)`, then `<Cover />`. What the book draws that is no chapter — a byline, the library's name — is a paragraph of the library's own, given the cover as its chapter, behind a method a subclass may override: [Book](../library/05-book.md#how-it-is-extended).

- **Every element the book draws carries a CSS class saying what it is.** *A rule names a class and never an element type* — [policy 7](07-the-development-policies.md#7--every-rule-names-a-mark-reaches-by-descendant-and-takes-its-numbers-from-the-theme). *The test library's tabs are the nearest example: a hand-drawn span wearing `pd-tab`. Which prefix such an element takes has not been ruled.*
- **What a chapter wraps itself in never matters.** A cover brings its own `header` and a table of contents its own `nav`; the book places the element it made, which holds them.
- **The book never draws a `header` of its own around a cover,** since a `header` may not hold one.

## 5 · Where a rule goes

| the rule says | its home | cited |
|---|---|---|
| **where a part is** — a grid, a column, what scrolls, a gap | the book class's one styled component, its rules naming the book's own elements by their classes. *A parent places its children and never paints them.* | [the CSS shapes](../the-coding-style/07-what-natural-means.md#the-css-shapes) |
| **how the cover, the synopsis or the table of contents looks in this book** | that book's own subclass of it, with one `style`, exported from the book's door under the framework's name, and imported there by the chapter | [policy 3](07-the-development-policies.md); [Dressing a Library](02-dressing-a-library.md) §3 |
| **a box, an arrangement or a view said of a writing** — a shelf, a spread | a Format with its own styled component, so the look goes wherever the Format is given. Said of a book and reading the theme's values, it says `themeProvider = true` | [What Is Marked and What Is Replaced](06-what-is-marked-and-what-is-replaced.md); [Format and Theme](../writing/11-format-and-theme.md#evolution) |
| **how ordinary writing looks, and the library's own paragraphs; every value** | the theme: fields, and one component of parts | [policies 4 and 5](07-the-development-policies.md) |

**Every rule names a class, reaches by descendant, and takes its numbers from the theme. A face's rule for its own element names the kind with its class — `.pd-chapter.pa-cover` — so it wins on every page.** *Policies 1 and 7; their checks are greps, and a milestone is not shown until they pass.*

## 6 · A collection is arranged by a Format

**The framework has built this three times, and they are the models:** [`Table`](../writing/12-table.md), `List` and [`Paginated`](../library/08-paginated.md) are each a Format said of one writing that picks out a collection of its parts — `rows`, `items`, `pages` — puts a class on each once the book is whole, and carries the styled component that arranges them. *A shelf of the books a catalogue holds, a list of a manual's parts, are the same thing.* **Where one of several may hold, the one in front turns off the others of its kind in its `defines`,** as Strict and Permissive do, and as Theme does.

## 7 · A switch — not built in either library

**What is settled:** a reader's choice is given to the book through `$is`, in front of what the book declared, and taking it back restores the book's own — [the annotation system](../writing/07-the-annotation-system.md#precedence). **What is to be built, and written here when it is:** something pressed that sets `$is` on the held book; which choice is on, asked of the book and said nowhere else, so the default is declared once; and the name a reader sees for a choice, said by the choice.

## The checks, run before anything is shown

- No rule with `>`, `+`, `~`, `:first-child`, `:nth-`, `:has(` or `display: contents` in a library's own templates; no element type but `img`, `svg`, `pre`, `code`, `time`.
- No length or colour literal in a template, where a share of the box it is in, `100%`, is neither; no field read through `this.` in one, where `${this.parts()}` composing the template is not a read.
- No static member, no constant at the top of a file, no `document.` or `querySelector`, no `style=` on an element.
- A face imported from the package only by a book that means the bare one.
- The bind's `specify` phase clean, and every refusal read as a sentence about the library.

## What the first build found — 2026-10-05, [U15](../projection/105-sprint-100--the-big-plan.md#u15)

**His four books were rebuilt to this page with no layout, and it held with three corrections, each made above or here.**

- **A thing a book draws in `write()` finds its chapter when it is given one, in both renders.** His base book draws a listing under each chapter and gives it `chapter={chapter}`; the `Code` the listing draws inside its own `write()` is given nothing and finds the chapter's Append through its parent, live and in the page the binder prints. *Verified on the built page's own HTML, where each file is printed before the browser takes the page up. [Book](../library/05-book.md#how-it-is-extended) records a paragraph a book drew that came out empty there until it was given a chapter; why one needs telling and the other does not is still not pinned.*
- **A kind that only names a paragraph or a section costs twelve lines and a rule.** `Asked`, `Said`, `Chosen` on a paragraph and `Concept` on a section each add a class and say what they are said of. **Each has its own specification, named for it, whose sentence names it** — one shared by three was written first and read as nobody's.
- **An outline is the first Format worth having.** A Format said of the book that outlines every chapter, section and listing and writes each one's class list over it showed the structure of four books before any layout, and showed a paragraph's kind by `[class*='pa-']`. *That selector names no one class; it is kept as the one rule whose subject is "whatever something was said of", and is nobody's model.*
- **The live server answers no picture.** A picture's address is `/<folder>/<file>` and only the bind copies it there, so an `Image` is empty on the live page and whole on the built one. *A pitch for `.public`, with the next.*
- **A page kept beside a chapter can only be inlined.** A sketch is an `.html` file; the compiler refuses a file no chapter uses, and gives an address only to a picture, so each of twenty-five sketches is held as text by an annotation and the design book's script carries 825,115 bytes nothing reads yet. *The pitch: a page beside a chapter is copied and addressed as a picture is.*

## Open

- **Whether a layout is a class of book or something a book is given.** Written here as a class, on *"the purpose of a book is layout"*; put to Doug with the first showing.
- **The prefix for an element a book draws that is no writing.**
- **How a library's own classes are promised** — his library has no test, and the test library's two stand beside the binder with no account of how.
