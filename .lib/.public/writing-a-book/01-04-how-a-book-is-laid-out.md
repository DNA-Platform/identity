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
>
> **"A subclass of the book, but if we need composability to layouts, I'm sure you can use the annotation system to manage something. It is very powerful."** — 2026-10-05, asked whether a layout is a class of book or something a book is given
>
> **"You guys don't seem to have to put the author and subject on the cover. This should be a compiler error. And without those, the library is not navigable. I need you to take more seriously that this is a library with many rooms, even if they look like different apps sometimes, and we need to take those author and subject links very seriously, as well as creating many many links to the other parts of the library."** — 2026-10-05, after browsing the first plain build
>
> **"If you allow html to be in the library, then all you have done is come up with a way to not build a library. Soon, you'll do everything interesting in html and have the library be a shell. Stop fighting the framework. Embrace the semantics and learn how to think in terms of it. The point of resources is to document, it is not to render."** — 2026-10-05, refusing an address for a page kept beside a chapter

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

## 7 · A switch — built in his library, 2026-10-05

**A reader's choice is given to the book through `$is`, in front of what the book declared, and taking it back restores the book's own** — [the annotation system](../writing/07-the-annotation-system.md#precedence). **As built** (`.me/.manual/9-the-switch~code.tsx`, thirty-five lines): a `Choice` is a Word whose element is a `button`, as a Date's is a `time`; it is given one annotation, `of`, and its words are what a reader reads. Pressed, it puts that annotation at the front of the held book's `$is`, or takes it out when the book already is it; `aria-pressed` is `book.is(of)`, asked at every draw and kept nowhere. *Measured in Chrome: one press and the book carries the annotation's class and its wrapper; a second and both are gone; the button reports each.* **One of several, built 2026-10-06:** a `Pick` is a `Choice` given also the set it belongs to; pressed, it puts its own annotation in front and takes the set's others out of `$is`. *And the members of a set turn each other off the way a `$Theme` does: a `View` said of a book un-expresses every `View` after it, so the class says the shelf, a reader picks the list in front of it, and `book.is(shelved)` is false while the list holds — measured on his catalogue, one button lit at a time, both ways.*

## 8 · The two halves of a layout — on his answer

**A layout is a subclass of the book, and what can be composed or switched in it is an annotation.** As built for his four books: **the class's `write()` says which parts go in which element** — a side, a bar, a sheet, a shelf, each a `div` of the book's own with a class — **and a Format said of the book carries the one styled component that arranges those elements.** **Which page is open is the book's:** the base book's `pages()` draws a page for every chapter, all of them in the document, and puts `pd-open` on the one its bookmark names. *The framework's `Paginated` was not used: its pages are chapters, and a page here is an element of the book's holding a chapter and the files it appends, so the open class has to be on what the book drew.*

**The arrangements are one family, and a book takes one by registration.** The base book says it is `Paged`, a Format whose one rule is that a page not open is not shown. `Spread`, `Sheet` and `TwoBars` are classes under it, each adding parts — the template method of [policy 5](07-the-development-policies.md) — and each book's file ends with one line, `$(Manual, Paged)(Spread)`, as the theme is registered. *So no book overrides `$Define` for its layout, no file needs a constant to name its own component, and a second arrangement of the same parts is one more class and one more line; the most specific class's registration wins.*

**And every layout places the author and the subject.** Two paragraphs of the library's own, each behind a method of the base book and each given the cover as its chapter: *by* with a link to the author's book, *filed under* with a link to the book that catalogues this one. *The compiler already refuses a book that names neither — `NO-AUTHOR`, the cover's own specification, and "every book reaches the library and the author" — and the framework draws neither, so a library that does not draw them has no way out of a book.*

## The checks, run before anything is shown

- No rule with `>`, `+`, `~`, `:first-child`, `:nth-`, `:has(` or `display: contents` in a library's own templates; no element type but `img`, `svg`, `pre`, `code`, `time`.
- No absolute length and no colour literal in a template — `px`, `rem`, a hex, `rgb(` are values of the theme's fields and stand nowhere else; a length relative to the box or the type it is in, `100%`, `1fr`, `0.06em`, `58ch`, or a `calc()` over a theme value, is not one. No field read through `this.` in a template, where `${this.parts()}` composing it is not a read.
- **No part of a theme or a Format named for a member the class already has** — `side`, `book`, `chapter`, `text`, `theme`, `style`, and chemistry's own `frame`, the method in which every chemical wraps what it drew (`chemical.ts`), so a part of that name had its rules printed on the page as text. *The bind does not typecheck, so the name shadows silently and the page breaks somewhere else. `npx tsc --noEmit` in the library's binder copy does reach the library's files and names a shadowed member at once — found 2026-10-06, after the three. It prints 61 lines there today, read past: 56 are the `.tsx` ending on an import path, which that configuration does not allow, and five are the theme's `style` and its four registrations against a `$Theme` typed otherwise than the source's — which build of the framework that check reads is not understood.*
- No static member, no constant at the top of a file, no `document.` or `querySelector`, no `style=` on an element.
- A face imported from the package only by a book that means the bare one.
- The bind's `specify` phase clean, and every refusal read as a sentence about the library.

## What the first build found — 2026-10-05, [U15](../projection/105-sprint-100--the-big-plan.md#u15)

**His four books were rebuilt to this page with no layout, and it held with three corrections, each made above or here.**

- **A thing a book draws in `write()` finds its chapter when it is given one, in both renders.** His base book draws a listing under each chapter and gives it `chapter={chapter}`; the `Code` the listing draws inside its own `write()` is given nothing and finds the chapter's Append through its parent, live and in the page the binder prints. *Verified on the built page's own HTML, where each file is printed before the browser takes the page up. [Book](../library/05-book.md#how-it-is-extended) records a paragraph a book drew that came out empty there until it was given a chapter; why one needs telling and the other does not is still not pinned.*
- **A kind that only names a paragraph or a section costs twelve lines and a rule.** `Asked`, `Said`, `Chosen` on a paragraph and `Concept` on a section each add a class and say what they are said of. **Each has its own specification, named for it, whose sentence names it** — one shared by three was written first and read as nobody's.
- **An outline is the first Format worth having.** A Format said of the book that outlines every chapter, section and listing and writes each one's class list over it showed the structure of four books before any layout, and showed a paragraph's kind by `[class*='pa-']`. *That selector names no one class; it is kept as the one rule whose subject is "whatever something was said of", and is nobody's model.*
- **The live server answers no picture.** A picture's address is `/<folder>/<file>` and only the bind copies it there, so an `Image` is empty on the live page and whole on the built one. *A pitch for `.public`, with the next.*
- **A file kept beside a chapter documents; it is never rendered.** The first build held each of twenty-five sketches as text in an annotation, to be drawn live later, and pitched an address for an `.html` file. **He refused both in one sentence — *"The point of resources is to document, it is not to render."*** *So each concept prints its sketch with the framework's `Code`, as a manual's chapter prints its file, and the annotation is deleted.*

## What the second build found — 2026-10-05, [U16](../projection/105-sprint-100--the-big-plan.md#u16)

- **The framework's bookmark knows chapters and no place inside one.** `Book.bookmark` matches a chapter's own title, so an address naming a heading opens nothing; under any layout that shows one page, that heading is on a hidden page. *His base book's `open` is the chapter whose title the address names or whose sections, however deep, hold a heading it names — equality on what the compiler wrote, no address read. A `Mention` inside a paragraph holds no address to compare and is still not found.*
- **A press lands by itself; a direct load does not.** Measured with a probe, removed: on a press the book draws about 380ms after its bookmark is set, and the browser then scrolls to the place on its own — no code of the library scrolls, and an override of `turn()` written for it was deleted as unneeded. **On a direct load the router sets the bookmark inside an effect and scrolls at once, before the draw, to a place still hidden; the page opens and nothing lands.** *Seen on a phone for any chapter, the side being above it, and at a desk for a place deep in a chapter. Chemistry's `next('effect')` resolves about 4ms after the bookmark is set and before that draw, so it is no way to wait. The router's, pitched.*
- **A rule said in three Formats was one Format.** *The helper's review: `.pd-page:not(.pd-open)` in each arrangement, and a constant at the foot of each file so a class could fetch its own component. Both went with the family above.*
- **What `write()` assumes about files is a rule too.** Only a page prints the files a chapter appends, so the base book's specification says only an ordinary chapter appends one.
- **A choice only adds.** It takes back what it gave through `$is` and cannot take away what a class says itself.

## What the third build found — 2026-10-06, [U17](../projection/105-sprint-100--the-big-plan.md#u17) and [U19](../projection/105-sprint-100--the-big-plan.md#u19)

**Two books were made to look like their designs — the manual as concept 6, the catalogue as 1 under 19 — and the second was written against what the first had left in the base.** *A third, his story as concept 25, was then built by the helper session with those two as its examples; it asked the base for one of a set and five properties and nothing else, and its first audit found four things, none of them structure.*

- **A type of book is four things, each a file beside the one chapter that says what the type is.** The class whose `write()` places (`$Manual`, `$DougsLibrary`); the arrangement, a class under `Paged`, registered; the theme, a class under the library's that sets values and adds parts, registered; and the faces — the cover and the table of contents, each the framework's with a look, exported under the framework's names. *The manual is `10-the-manual~code`, `~faces`, `~theme`, `~entry`, `~forward`; the catalogue is `90-the-two-bars~code`, `~faces`, `~theme`, `~itself`, `~views`.*
- **Every property is declared in the library's theme; a book's theme sets values and adds parts.** A template anywhere is typed against one theme, and a property declared only on one book's theme is `undefined` in every other book's rules. *The catalogue's palette — the soft black, the sky, the opal — was first declared on its own theme and moved the same hour.*
- **What a second book wrote again went into the base, found by an audit that wrote nothing.** The front page (`front(holds)`), the rule that every chapter has a place (one rule over a `placed` getter a type extends), the chapter a place names (`named(place)`, asked by `open` and by an entry), the line at the foot of a chapter (the theme's `turns()` part), and *said of a book of this library* (one specification, in a file of its own). *That last could not stand in the base book's file: `$($Paged)` makes the class's specimen as the module loads, the specimen's field initializer asks for the specification, and a file still loading in an import cycle has not defined it yet.*
- **An entry and an index are every book's; a type registers its own kind.** `Entry` is said of a table of contents' row that leads somewhere and adds `pa-open` when its chapter is the open one; `Index` is the framework's table of contents saying so of each such row at the bind, asking `$(Entry)` — and a registration on the type's class answers there, so the manual's `FileEntry`, which also shows its chapter's file type, is one class and one line.
- **A title means its chapter, or the book its chapter is a synopsis of — a registered `Self`.** His audit asked that a catalogue chapter's title lead to the book itself. `BookItself` is a class under the framework's `$SelfReference`, registered on the catalogue's class, whose `identifier` is the address its chapter's `Synopsis` means. *The framework already does this for a book's own synopsis, whose title holds the book's address.* **It is set once, at `$Bound`, in an `@inert` field.** *Written first as a getter read while the title drew, it looped — React's "Maximum update depth exceeded" — because the draw read annotations that every draw of the chapter rewrites. Measured after: no request and no change to the page once drawn.*
- **The catchword walks the book's chapters, not the framework's.** `Chapter.next` and `previous` walk every chapter, the cover and the table of contents among them, so the library's line draws two words that refer to the chapter before and after among the pages a reader can open. *A seam `.public` could give: `Next` asking a getter for the chapter after.*
- **A font named in `.pubconfig` reaches the live page only after a bind**, because the bind writes the page's shell. *The comparison below read Segoe UI and a Consolas-width face in the manual's photographs for that reason.*
- **Two reviewers that write nothing ran beside the build, and each found what the builder had not.** A rule audit of sixty files: none of the forbidden constructs, seven things written twice, five paragraphs the code had moved past, the previous and next walking the wrong list. A comparison of four photographs with the sketch: arrangement, colour and scale right at a desk; scrollbars, spacing, the fonts above, and a phone whose first screen is all index. *The sketch's sticky bar on a phone and its table of a part's fields are not built.*

## Open

- **A state on an element the book drew.** `pd-open` here, in the prefix of the element it is on; `pa-` is for what an annotation put there, and no annotation puts this.
- ~~**Whether a layout is a class of book or something a book is given.**~~ *Answered 2026-10-05: a subclass, with annotations where it must compose — [§8](#8--the-two-halves-of-a-layout--on-his-answer).*
- **How the canonical type of chapter is asked for in code.** His base book asks `[...chapter.classes].includes('pd-canonical')`, the framework's own class for it, because the framework has no getter and *"every chapter but the cover, the synopsis and the table"* is [a remainder](../the-first-draft/05-the-book-is-the-layout.md#not-a-remainder).
- **The prefix for an element a book draws that is no writing.**
- **How a library's own classes are promised** — his library has no test, and the test library's two stand beside the binder with no account of how.
