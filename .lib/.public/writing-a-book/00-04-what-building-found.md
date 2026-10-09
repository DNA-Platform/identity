# What Building Found

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***Written 2026-10-07 as the fold of what five builds found, gathered from [How a Book Is Laid Out](01-04-how-a-book-is-laid-out.md), [How a Library Is Developed](01-02-how-a-library-is-developed.md) and [The Reference Manual](04-the-reference-manual.md). The record stands in those chapters and in the sprints.***

---

A line each: a rule that held or a thing that bit, and where it is caught. The records are the sprint chapters, [100](../projection/105-sprint-100--the-big-plan.md), [101](../projection/106-sprint-101--the-design-into-the-semantics.md) and [102](../projection/107-sprint-102--designing-together.md); the faults are named in [`catalogue/wellformed.ts`](../../package/.binding/catalogue/wellformed.ts).

## The binder's rules, met

- **`SAME-ADDRESS`** — two names that would stand at one address are refused: *"a name is a thing of its own only where its address is."*
- **`UNREFERENCED-MENTION`** — a place nobody refers to is refused. Doug: *"it should also refuse when nothing references a mention in the whole library. It is unnecessary in that case and we want a compact library."* A new concept is linked from the chapter that decides, or the bind names it.
- **`UNUSED-FILE`** — every file beside a chapter is inserted by a literal, `![[ code.tsx ]]`, or imported, or refused. Doug: *"the compiler can now enforce that all resources are used… every resource file (except this, which is optional) must be specified."*
- **`NO-AUTHOR`** — a cover without its author and its subject is refused. Doug: *"You guys don't seem to have to put the author and subject on the cover. This should be a compiler error."*
- **The whole heading is a place's address**, not the words inside the brackets: a number written into a heading's text moved every place and broke every link to it. The number is content, said by an annotation — [Solutions 103](../solutions/103-the-heading-that-took-a-number.md).
- **A longform page wears every chapter, so an id worn twice fails the proof**: section headings repeated across a manual's chapters stood twice. Name each chapter's sections for the chapter; an entry drawn once and referred to once ends the problem.
- **The live page checks the notation as a file is saved, and the catalogue's rules only when a cover, a synopsis or a table is saved**; each book's own rules, the print and every link are checked only in a bind. The bind is the gate.
- **What `.public` lacks is built as a pattern in the library first.** Doug: *"I take changes to .public very very seriously. Make this a pattern implemented in the library itself."* A rule the library needs is written over the notation, never TSX; proved in the manual; then pitched as a diff.

## The theme, and the shadowing of parts

- **A part of a theme or a Format must not take the name of a value, of a member the class has, or of a part the base already has** unless it says `override` and spreads the base's in. `side`, `book`, `chapter`, `text`, `theme`, `style`, chemistry's own `frame`, and `cards` each broke the page somewhere else without a word. The bind does not typecheck; `npx tsc --noEmit` in the binder's copy names a shadowed member and a shadowed value, not a shadowed part.
- **Every property is declared in the library's base theme.** One declared on one book's theme is `undefined` in every other book's rules.
- **A style is compiled once per class, on the class's specimen**, which stands in no book: read the theme through the provider's props, never through a closure over `this`.
- **A styled component is a field, once per class**, never made in a bond or a define — [Solutions 99](../solutions/99-the-sheet-that-was-one-file-per-page.md).
- **A face's rule with one `pa-` class alone ties with the theme's rule for the class**, and the tie breaks by the order the components were made, so it wins on one page and loses on another. Name the class with the mark, `.pd-chapter.pa-cover`.
- **A theme given through `$is` wraps only `div.pd-book`**; a Format on the same book whose rules read the theme says `themeProvider = true` — [`Format.tsx`](../../package/src/writing/Format.tsx), promised in [`format-theme.test.tsx`](../../package/.tests/format-theme.test.tsx).

## A press

- **A Format pressed through `$is` remounts the book.** A Format is a container, and a container put in front of the book replaces everything inside it — the held tab, book and pages all out of the document after the press, and no gate counts renders — [Solutions 105](../solutions/105-the-press-that-replaced-the-book.md). So a tone, an arrangement, a paper, a reading and the outline are annotations that add a class and nothing else, their rules in the theme or in the one layout every book is given at `$Define`. Doug's standing rule: *"a change costs one paint; green without render counts is not green."*
- **The `Code` figure re-inserts its highlighted HTML on every draw** whether or not its text changed — the one node a press still replaces; a pitch for `.public`.
- **A press lands by itself after the draw, and the router scrolls nothing.** What a press goes to stands at the top of what it opens; a layout that puts content above the heading scrolls it out of sight — [Solutions 104](../solutions/104-the-card-that-opened-out-of-sight.md). A look that loads a page by its address is not a look that presses.
- **The framework's bookmark knows chapters and no place inside one**; the base's `open` is the chapter whose title the address names, or whose sections hold a heading it names, by equality on what the compiler wrote.

## Modules, titles and files

- **A module cycle through a book's file loads half a module.** The catalogue's table imports the manual's book file; the base imports the catalogue's subjects from a file beside that chapter that imports only the framework.
- **A specification shared by annotations cannot stand in a file still loading in an import cycle**; it stands in a file of its own.
- **A title that means the book its chapter is a synopsis of is a registered `Self`, set once at `$Bound` in an inert field.** Read as a getter while the title drew, it looped.
- **A file kept beside a chapter documents; it is never rendered.** Doug: *"If you allow html to be in the library, then all you have done is come up with a way to not build a library… The point of resources is to document, it is not to render."*
- **The framework's `src` and the binder's own files do not reach the open page.** A `src` edit is the package's build, then a look with `fresh`; a binder change is a sync, then the workbench closed and opened. A font named in `.pubconfig` reaches the live page only after a bind.

## The notation

- **A line break before `<Means>` swallows the space before it.** A line of JSX keeps the word and its reference together.
- **A thing said of a writing is an annotation in the chapter, never found by position and never written into a name**: the opening paragraph said `First`, a brief said `Brief`, a concept's number drawn as the note of the annotation that says it is a concept.
- **A close, a subject, a way back is a reference written in the chapter**, never an address composed in code; a reference's text is its compiled address.

## What a page may know of another book

- **A page knows of another book what it imports.** A catalogue's row imports its book's synopsis today and its cover next, held by an annotation as data; the subject's mark is the subject's cover imported — so a book's colour is said once, on its cover, and read everywhere by import, where today it is said twice, in the book's theme and in the catalogue's chapter that stands for it. Doug, 2026-10-07: *"other parts of the book can import the cover rather than the whole book, to access that information. This is a sensible way to share state… and the cover of other books can be injected in annotatively so that it's not a part of what would cause things to render."* What no import answers is the binder's.
- **The reverse of a reference, the chain upward, a count** — the binder holds all three while it runs and hands none to a page yet; a design names the fact in the library's words and the binder compiles it. Doug: *"If not, we should add that."*
- **At runtime `TableOfContents.contents` answers the chapters' own mentions and not the rows naming other books**, so a subject's books are presented by the table and not yet exposed.
- **A rule that a catalogue must hold a chapter for each book was tried and withdrawn.** Doug: *"I don't know how we'd validate that books have chapters, and I am worried that you might be looking for components."* The chapter is the library's choice; the link is the compiler's rule.

## What the bookshelf's build found — 2026-10-07

- **A chapter held in an annotation's field and never appended has run its `$Define`**, since a chemical defines itself at its construction: `Author` has its `means`, `Scheme` its colours, the drawing its markup, all read off a held cover. What a held chapter has not had is `$Bound`, which the book walks only through its text — a held cover's `BookLink` would not know its book.
- **A thing said of a cover with several values takes them as props, which land on `$`-fields** — `<Scheme ground="…" band="…" />` is `$ground`, `$band`, as `Append`'s `identifier` is `$identifier` — and sets them where the thing is drawn through a styled wrapper bound to the instance, `Coloured`'s device: the cover's own element through `defines`, and anything drawn *from* the cover by wrapping the drawing in the scheme's `painted`. A theme then reads `var(--band)` and knows no book by name.
- **The type of book stands in the manual and the library's book file is one line** — `export default class $Library extends $Catalogue { }` — the registrations on the type inherited, as the manual's own book file has always been. A theme that reads a class an annotation puts on belongs in the same chapter as that annotation, or a second library cannot wear it.
- **A theme part named for a value of the base is the shadowing the previous build warned of, met again**: `bar()` beside `bar = '#0c1b1f'` threw *this.bar is not a function* at the first draw. Read the base's fields before naming a part.
- **The base's `pages` leaves the appendix out** — it is what the turn walks — **and a book that draws its pages by walking `pages` never draws an appendix chapter.** Pages are drawn from `chapters`; the turn from `pages`.
- **Two escapes from the rule against combinators, both position-free.** A child that must fill its parent's height without `> *`: the parent `display: grid; grid-template-rows: minmax(0, 1fr)` stretches its one child. A hover that must reach a sibling region: `.pd-library:has(.pd-filed:hover) .pd-logo`, the one combinator that reads as a sentence about the bar, and the one the base's layout already uses.
- **A heading repeated across two chapters of a manual is an id worn twice on its page** — *What a cover says* stood in two chapters; the proof refused the page. Name a section for its chapter.

## Open

- **How the canonical type of chapter is asked for in code.** The base asks `[...chapter.classes].includes('pd-canonical')`, since the framework has no getter and *every chapter but the cover, the synopsis and the table* is a remainder.
- **How a library's own classes are promised.** His library has no test; the test library's two stand beside the binder with no account of how.
- **No promise holds the live path.** Nothing in the binder's suites starts the dev server; an edit could stop appearing in place and every gate would stay green.
- **The catalogue's rules on every save**, the dev server's port, `src` reaching the page without a build: each a change to the binder, and Doug's.
