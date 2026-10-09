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

**A chapter says what it is with an annotation. A book's class collects its chapters by what they carry, says in its specification what it must hold, and draws each part in `write()` inside an element of its own. A collection of one type is arranged by a Format. A look has one of four homes, and no property of any element has two authors.** *Each sentence is a section below.*

## 1 · A chapter says what it is

**By an annotation it carries.** The framework's own already say most of it:

| a chapter that is | carries | the book asks |
|---|---|---|
| the cover | `Cover` | `book.cover` |
| the book's synopsis | `Synopsis`, meaning its own book | `book.synopsis` |
| the table of contents | `TableOfContents` | `book.table` |
| a stand-in for another book, in a catalogue | `Synopsis`, handed that book's own synopsis — [a catalogue's chapter](../library/01-books-in-annotations.md#a-catalogues-chapter-is-another-books-synopsis) | `chapter.is($Synopsis)`, and it is not `book.synopsis` |
| about a file kept beside it | `Append` — [Append](../writing/19-append.md) | `chapter.is($Append)` |

**A type the framework has no word for is a class of the library's own:** under `$Annotation` when it only says what the chapter is, under `$Format` when the type has a look, since a Format carries a styled component. It adds its CSS class in `defines` and takes it back in `erase`; its specification says what it may be said of; it is named for the trait, never for what it does — [Developing an Annotation](../writing/10-developing-an-annotation.md). **So one annotation does two jobs: code finds the chapter with `chapter.is(X)`, and a rule finds it by its class.** *That is what "can also be used to select things" means here.*

## 2 · The book collects

**A getter per collection, read every time it is asked, never kept:** `this.text.find($Chapter).filter(chapter => chapter.is($X))`. Never by position, never by a title's words, and never as what is left once other things are taken — [*a group is named, never left over*](../the-first-draft/05-the-book-is-the-layout.md#not-a-remainder).

## 3 · The book says what it must hold

**A layout that has a place for some types of chapter says so in the book's specification, and the bind holds every book to it.** A class under `BookSpecification` adds a rule — a `$`-method under `@specify`, asserting with `$check` — that every chapter the book holds is one its layout places. [`specify`](../utilities/03-specification.md) is asked of every book in the bind's `specify` phase, and a failure names the chapter's file. **So `write()` assumes and never hedges, and a chapter with no place is a refused bind: never a chapter silently missing from the page, and never a fallback written to catch it.** Doug, 2026-09-27, of the same choice in the framework: *"Validate. Don't make a mess of the code by badly assuming. This is what the specification is there for."*

**The same for a type:** what a type needs of its chapter — a date a machine can read, a file beside it — is a rule of the type's own specification, which [runs against the writing it is said of](../writing/07-the-annotation-system.md#the-specification-at-the-heart).

## 4 · `write()` places

**A book with a layout draws each part inside an element it makes itself.** *A book with none — his library's base, which writes its chapters down the page in file order and under each the files it appends — draws them as the framework's `write()` does, with nothing around them.* A chapter the book holds is drawn where the book wants it through its own component, as the base's `write()` draws its text — `const Cover = $(cover)`, then `<Cover />`. What the book draws that is no chapter — a byline, the library's name — is a paragraph of the library's own, given the cover as its chapter, behind a method a subclass may override: [Book](../library/05-book.md#how-it-is-extended).

- **Every element the book draws carries a CSS class saying what it is.** *A rule names a class and never an element type* — [policy 7](07-the-development-policies.md#7--every-rule-names-a-mark-reaches-by-descendant-and-takes-its-numbers-from-the-theme). *The test library's tabs are the nearest example: a hand-drawn span wearing `pd-tab`. Which prefix such an element takes has not been ruled.*
- **What a chapter wraps itself in never matters.** A cover brings its own `header` and a table of contents its own `nav`; the book places the element it made, which holds them.
- **The book never draws a `header` of its own around a cover,** since a `header` may not hold one.

## 5 · Where a rule goes

| the rule says | its home | cited |
|---|---|---|
| **where a part is** — a grid, a column, what scrolls, a gap | the book class's one styled component, its rules naming the book's own elements by their classes. *A parent places its children and never paints them.* | [the CSS shapes](../the-coding-style/07-what-natural-means.md#the-css-shapes) |
| **how the cover, the synopsis or the table of contents looks in this book** | that book's own subclass of it, with one `style`, exported from the book's file under the framework's name, and imported there by the chapter | [policy 3](07-the-development-policies.md); [Dressing a Library](02-dressing-a-library.md) §3 |
| **a box, an arrangement or a view said of a writing** — a shelf, a spread | a Format with its own styled component, so the look goes wherever the Format is given. Said of a book and reading the theme's values, it says `themeProvider = true` | [What Is Marked and What Is Replaced](06-what-is-marked-and-what-is-replaced.md); [Format and Theme](../writing/11-format-and-theme.md#evolution) |
| **how ordinary writing looks, and the library's own paragraphs; every value** | the theme: fields, and one component of parts | [policies 4 and 5](07-the-development-policies.md) |

**Every rule names a class, reaches by descendant, and takes its numbers from the theme. A face's rule for its own element names the class with its mark — `.pd-chapter.pa-cover` — so it wins on every page.** *Policies 1 and 7; their checks are greps, and a milestone is not shown until they pass.*

## 6 · A collection is arranged by a Format

**The framework has built this three times, and they are the models:** [`Table`](../writing/12-table.md), `List` and [`Paginated`](../library/08-paginated.md) are each a Format said of one writing that picks out a collection of its parts — `rows`, `items`, `pages` — puts a class on each once the book is whole, and carries the styled component that arranges them. *A shelf of the books a catalogue holds, a list of a manual's parts, are the same thing.* **Where one of several may hold, the one in front turns off the others of its type in its `defines`,** as Strict and Permissive do, and as Theme does.

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

## What building found — five builds, 2026-10-05 to 2026-10-06, folded into one list

*Four sections stood here, one per build of Sprint 100, and a fifth was owed for Sprint 101; compacted 2026-10-06 at the close of Sprint 101 into the rules that held, each with the build that found it. The records of each build are the sprint chapters, [100](../projection/105-sprint-100--the-big-plan.md) and [101](../projection/106-sprint-101--the-design-into-the-semantics.md).*

**What a type of book is made of.**

- **The base book draws the frame once, in regions named as the frame's sketch names them, and a type overrides the method of the region it fills differently — nothing else.** The library's bar, me, what the book holds, the head, the pages; `$Library` overrides only what it opens on, `$Story` its head and its top, `$Design` which chapter opens when none is named. *The fifth build; before it every book drew its own bars, and the third build's "four things, each a file beside one chapter" — the class, the arrangement, the theme, the faces — still holds for what a type adds.*
- **The chapter is the page, and a chapter's presentation in the pages is a Format said of the chapter; the book places chapters and nothing else.** The framework's own [Paginated](../library/08-paginated.md) marks each page `pa-page` at the bind and the open one `pa-open` in its `defines`, on the chapter's element, and hides the rest by that class, so the base draws no box around a chapter and the front is the synopsis as a page. What a chapter is shown inside — the manual's spread, the catalogue's desk — is a Format said of that chapter, its layer around the element, wearing its chapter's open class and hiding itself otherwise; a third presentation is made the same way. What a chapter is, an annotation says; how it is shown, a Format says; where it stands, the book says. *[Sprint 106](../projection/111-sprint-106--the-manual-spread-out.md#decisions), on his "Why do you have a page? What is a page? We don't paginate do we?": the library's layout had extended Paginated and then drawn a `div` around every chapter and marked that instead.*
- **Every property is declared in the library's theme; a book's theme sets values and adds parts.** A template anywhere is typed against one theme, and a property declared only on one book's theme is `undefined` in every other's rules. *Third build. The base declares 146 today, every one from a sketch's file.*
- **What a second book writes again goes into the base, found by an audit that writes nothing.** The front page, the rule that every chapter has a place, the chapter a place names, the turn, *said of a book of this library* in a file of its own because a specification shared by annotations cannot stand in a file still loading in an import cycle. *Third build; the fifth moved the library bar's own look into the base the same way.*
- **An entry and an index are every book's; a type registers its own entry.** `Index` says `Entry` of each row that leads somewhere at the bind, asking `$(Entry)`, and a registration on the type's class answers — the manual's `FileEntry` is one class and one line. *Third build.*
- **A title means its chapter, or the book its chapter is a synopsis of — a registered `Self`, set once at `$Bound` in an inert field.** Read as a getter while the title drew, it looped. *Third build.*
- **The turn walks the book's chapters, not the framework's**, which include the cover and the table; its two ends are said `Before` and `After` so a theme can place them by name. *Third and fifth builds.*

**What a switch is, and what it may give.**

- **Anything a reader presses adds a class, and the rules that read the class were always there.** A Format given through `$is` is a container, and a container put in front of the book remounts everything inside it: the held tab, book and pages all out of the document after the press. Measured on the first tone, then found on every paper, on the outline and on the readings, none of which anyone had counted since Sprint 100. So a tone, an arrangement, a paper, a reading and the outline are annotations of one type, each standing down for the one said after it as `$Theme` does, with their rules in the theme or in the one layout that is always there — after which a press changes one class on the book and the only nodes replaced are the `Code` figure's own lines, which the framework redraws on every draw. *Fifth build.*
- **A switch only adds.** It takes back what it gave through `$is` and cannot take away what a class says itself; its pressed state is asked of the book at every draw. *Second build.*
- **The layout is the framework's `Paginated` extended**, answering `pages` with the book's chapters and `open` with the book's own; it carries the six arrangements' grids keyed by class. *Fifth build.*

**What a chapter says, and what is found by no position.**

- **A thing said of a writing is an annotation in the chapter, never found by where it stands.** The story's opening paragraph is said `First`; a concept's number is drawn as the note of the annotation that says it is a concept — `$Annotation.note()`, the seam `$Content` draws its name through; a chapter's brief is a paragraph said `Brief`, and the manual's own rule asks every chapter for one. *Fourth and fifth builds; the number written into a heading's text broke every link to the place — [Solutions 103](../solutions/103-the-heading-that-took-a-number.md).*
- **A type that only names a paragraph or a section costs twelve lines and a rule, and each has its own specification whose sentence names it.** *First build.*
- **A close, a subject, a way back is a reference written in the chapter, never an address composed in code.** The open concept's `×`, the library's subjects beside the catalogue's chapter — written once, imported by the base, drawn on every book; a reference's text is its compiled address. *Fourth and fifth builds.*
- **A file kept beside a chapter documents; it is never rendered.** His refusal: *"The point of resources is to document, it is not to render."* *First build.*
- **The framework's bookmark knows chapters and no place inside one**; the base's `open` is the chapter whose title the address names or whose sections hold a heading it names, by equality on what the compiler wrote. *Second build.*

**What bites, and where it is caught.**

- **A part of a theme or a Format must not take the name of a value, of a member the class has, or of a part the base already has unless it says `override` and spreads the base's in.** `side`, `frame`, `cards`, `head` — each broke the page somewhere else without a word; `npx tsc --noEmit` in the binder's copy names the first two, not the third. *Third and fifth builds.*
- **A press lands by itself after the draw; the router scrolls nothing** — the three-part change of Sprint 101's U9, approved and applied, after which an address loaded directly opens and turns. *Second build pitched it; fifth applied it.* **And what a press goes to stands at the top of what it opens** — [Solutions 104](../solutions/104-the-card-that-opened-out-of-sight.md).
- **A module cycle through a book's file loads half a module.** The catalogue's table imports the manual's book file; the base imports the catalogue's subjects from a file beside that chapter that imports only the framework. *Fifth build.*
- **A font named in `.pubconfig` reaches the live page only after a bind.** *Third build.* **The live server answers a picture's address since Sprint 100.**
- **Two reviewers that write nothing run beside a build and find what the builder does not.** *Third build; the helper session's control measurements on the papers settled the switch rule in the fifth.*

**A colour, in two places for now.** Each book's colour is said in its own theme and, as the librarian's label, in the catalogue's chapter that stands for it, which paints the cover on the shelf; a cover's colour does not reach its catalogue's page — [the Binder's gap](01-01-how-a-library-is-designed.md#what-a-page-knows-of-other-books-is-the-binders), his to fill — and the two become one when it does. *Fifth build.*

**And two rules of the build itself, written where they are found:** the HTML of a decided concept is the design, read whole before building, the photographs the check — [The Domain of the Designs](01-06-the-domain-of-the-designs.md); and a theme is a tone named from that file, never for a book and never by a number — [How a Thing Is Named](../the-coding-style/09-how-a-thing-is-named.md#a-theme-is-a-tone).

## Open

- ~~**A state on an element the book drew.**~~ *`pd-open` and `pd-front` on the page the book draws, in the prefix of the element it is on; `pa-` is for what an annotation put there. Kept so — and gone 2026-10-10 with the box the book drew: the framework's Paginated marks the chapter itself `pa-open`, and the front is the synopsis as a page, [Sprint 106](../projection/111-sprint-106--the-manual-spread-out.md#d1).*
- ~~**Whether a layout is a class of book or something a book is given.**~~ *Answered 2026-10-05: a subclass, with annotations where it must compose — [§8](#8--the-two-halves-of-a-layout--on-his-answer).*
- **How the canonical type of chapter is asked for in code.** His base book asks `[...chapter.classes].includes('pd-canonical')`, the framework's own class for it, because the framework has no getter and *"every chapter but the cover, the synopsis and the table"* is [a remainder](../the-first-draft/05-the-book-is-the-layout.md#not-a-remainder).
- ~~**The prefix for an element a book draws that is no writing.**~~ *`pd-`, as the regions are: `pd-library`, `pd-me`, `pd-holds`, `pd-head`, `pd-pages`. Kept so since the fifth build.*
- **How a library's own classes are promised** — his library has no test, and the test library's two stand beside the binder with no account of how.
