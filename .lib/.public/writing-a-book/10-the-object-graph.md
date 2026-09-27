# The Object Graph

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- ***Written 2026-09-27 at the close of [Sprint 88](../projection/93-sprint-88--the-theme-the-element-and-the-blank.md), on Doug's word that the way to build with `.public` be written down compactly so it compounds. The chapter's name is a PROXY.***

---

**Doug, 2026-09-27:** *"The annotation system is flexible? Building an object graph with gettable reactive properties. Being able to rely on the type hierarchy and the more dynamic annotations with the components. It's a flexible way to build a set of dependencies that can be used to style something."*

**This is React.** Doug, 2026-09-27: *"Chemistry is just react. `$` is a mirror between objects and their components… `.public` is obviously not the only component library or app framework supported by `$Chemistry`, and this is only the version we have built personally."* Writing is that version's skeleton, and what is new is the form of app design: the object graph first, meaning expressed on it by annotations — [The Annotated Version](../writing/16-the-annotated-version.md) — and the page drawn from the meaning.

**A library is an object graph, and everything you build sits in front of it.** The graph is the writings — a book holding chapters holding sections, each a typed chemical — and what each exposes as a property: `book.cover`, `book.author`, `chapter.next`, `title.means`, `writing.annotations.expressed($Theme)`. The properties are gettable and reactive: read one, and what you drew redraws when it changes. Nothing in front computes what the graph already knows.

## The five moves, and each is a few lines

| to | you write | the example |
|---|---|---|
| **show a property** | a component in front of the writing that holds it, reading it in `write()` | `PreviousTitle`: `this.chapter?.previous.title?.name` — [Next and Previous](../library/07-next-and-previous.md) |
| **draw a book's layout** | the book class's `write()`, from what the book exposes | the masthead and byline — [Book](../library/05-book.md#how-it-is-extended) |
| **give a kind a default** | `$Define` adding annotations; `$Bound` adding them to every chapter once the book is whole | `<Navigable />`, `<LibraryTheme />`; `<Framed />` on each chapter — [Dressing a Library](09-dressing-a-library.md) |
| **insert something** | an annotation: a Format whose layer draws content, or one that appends text | the kind label, designed — [Developing an Annotation](../writing/10-developing-an-annotation.md#if-you-must-insert-something-you-are-still-an-annotation--a-layer-with-content-or-text) |
| **dress it** | the theme's values and its sheet on the framework's marks; a Format in front on the library's own marks | [Theme](../writing/13-theme.md); [Dressing a Library](09-dressing-a-library.md) |

## What you rely on

- **The type hierarchy.** A cover is a chapter carrying Cover; a kind of chapter is a class under Chapter; a library's own title is a class under Title, found by class. You never test a name.
- **The annotations, dynamic.** What a writing carries decides what it is and how it draws; a book adds annotations at its bind, a reader's move switches a theme with `$is`, and every annotation's mark is a hook for a rule.
- **The marks and the sheet.** Every kind wears its mark and the default sheet comprehends them all, so a look is written against marks that are already there.
- **The id from the name.** A reference lands on an id the compiler wrote from a name; the title is the location, and a book turns to a chapter by that id. No handle to an element exists, and none is needed — [Chapter and Title](../library/02-chapter-and-title.md#how-they-are-extended).
- **The compiler's refusals.** A mention nobody spends, a book filed under nothing, a title said twice: the bind refuses them, and the library stays compact and whole.

## What to know before it bites

- A style is compiled once per class; read the theme through the provider's props, never through a closure over `this` — [Dressing a Library](09-dressing-a-library.md).
- Theme's bond passes over Format's through `provide`; a theme subclass extends the sheet in `$Define`, not in a bond of its own.
- A paragraph a book draws in its `write` is lent the book, `book={this}`, until the difference between the package's render and the binder's is pinned.
- A format in front of a chapter is one more layer between the semantic wrapper and the chapter's element; the wrapper carries `pd-container` only.
- A line break before `<Means>` swallows the space before it; a line of JSX keeps the word and its reference together.
