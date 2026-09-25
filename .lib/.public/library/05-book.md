# Book

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Written 2026-09-25 with U4, U7 and U8 of [Sprint 82](../projection/88-sprint-82--chapter-and-book.md#u4), to [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md); the code is [`src/library/Book.tsx`](../../package/src/library/Book.tsx), the promises [`.tests/book.test.tsx`](../../package/.tests/book.test.tsx).***

---

## What it is

**A Book is a composition at 7, strict and closed, whose canonical is the chapter carrying its Cover, and which exposes what its cover says.** E32: *"Book is the top."* E35: *"The Book is bound, abstract, cannot be annotated directly; its Cover represents it… A Book sees its Cover's types and decides it deserves them."* Doug, on finding it: *"If Book can operate by type, it's more important that it has only one Cover, and no need for it to be first… As we go up in levels, the detection mechanism changes."* And on what it offers: *"book can reach in an expose them, and then everyone can access them."*

| member | what it is | cited |
|---|---|---|
| `Book.$Define()` | stands `<Level>7</Level>`, `<Strict />` and `<Closed />`, so it holds chapters and books | E30, E62; ruling 3 of Sprint 79 |
| `Book.canonical` | overridden: the chapter among its contents that `is(Cover)`, wherever it stands | R7 |
| `Book.cover` · `Book.synopsis` · `Book.table` | the chapter carrying Cover, Synopsis and TableOfContents, each found by type wherever it stands; `cover` answers the canonical | Doug, 2026-09-25: *"add the cover, synopsis and table properties on book"*, and of the table, *"(can be the property for its table of contents)"* — [Sprint 83](../projection/89-sprint-83--memory-management.md), `e6119fa` |
| `Book.title` | its cover's title | R8 |
| `Book.author` · `Book.subject` · `Book.about` | its cover's Author, Subject and About, expressed | R8; *"book can reach in an expose them"* |
| `Book.specification` | `new BookSpecification()`: **a book has one cover**; **one synopsis**; **one table of contents** | R11 |

**The book is layout** — [*"Book is layout. Chapters are logical parts."*](../the-coding-style/03-the-coding-style.md#book-and-chapter) It decides where its chapters go, and asks what each is by what it carries; it reads its cover rather than storing a word of it, so `book.author` is always what the cover says now.

**A book is a function, as a chapter is.** The compiler writes each book's module with `book`, a function returning the class `.book.tsx` declares with each chapter function called inside it, in the order of the files — [the front matter](01-books-in-annotations.md#a-whole-book-written-out). The page draws `book`, so the chapters are called when the book is made; and the bind's `specify` phase builds it with `$(book(), Book)` and asks it, placing each failure on the chapter file its code numbers, since a book's contents are its chapters in file order: `APaper / Chapter 3 / Section 1: a synopsis is said of a chapter, and this is not one` lands on `1-the-argument.tsx`.

### In use

**A library's book class** stands at the top of its `.book.tsx` and draws the book; the test library's draws a byline from what the book exposes before its chapters — [`the-library/.book.tsx`](../../package/.binding/.test/the-library/.book.tsx):

```tsx
export default class $TheLibrary extends $Book {
    override write(): ReactNode {
        const Paragraph = $(paragraph);
        const Word = $(word);
        const Reference = $(reference);
        return (
            <>
                <Paragraph>
                    by <Word><Reference>{this.author?.reference?.identifier}</Reference>{this.author?.name}</Word>,
                    filed under <Word><Reference>{this.subject?.reference?.identifier}</Reference>{this.subject?.name}</Word>
                </Paragraph>
                {super.write()}
            </>
        );
    }
}
```

**And it stands its Theme as a class stands any default trait**, in `$Define` after its base's — the ordinary view, [a Format said of a book](01-books-in-annotations.md#what-is-not-drawn-yet):

```tsx
protected override $Define(): void {
    super.$Define();
    this.annotations.add(this,
        <Theme />
    );
}
```

**And every other book of the library extends it**, `export default class $TheLog extends $TheLibrary { }`, so a change to what a book is there — its byline, its theme — reaches all five.

## How it is extended

- **A book kind** is a class under Book, overriding `write()` — or `view()` for its element — to place its chapters: a template method per part, as [The Book Is the Layout](../writing-a-book/05-the-book-is-the-layout.md#the-parts) has it, finding each part by what it carries and never by position or by name.
- **A book's theme** is a Format said of the book. Doug, 2026-09-25: ***"One might give the book a format called Theme which is a theme, which would be realized in its .book or as a resource in one of its chapters, perhaps as an appendix."*** A library writes it as a class under Format with `theme = true`, so its properties reach everything the book draws, and its `style` wraps the book — *"a format annotation that is also a theme that is global to a book"*; its specification says it is said of a book — *"The annotation validate that it is a book"*; and the book class stands it in `$Define`, or a chapter carries it as a resource. The test library's `Theme` draws the ordinary view, hiding every annotation's own writing — [the front matter](01-books-in-annotations.md#what-is-not-drawn-yet). **Import `styled` by name**, `import { styled } from 'styled-components'`: the binder's server loader hands the default import back as the module's namespace, so `styled.div` is not a function there — measured 2026-09-25, the specify phase failing at the theme's first bind, and the reason [the coding style](../the-coding-style/03-the-coding-style.md#styling) notes the two shapes of styled-components' default. *`src` has no Theme class and adds none: theming is a way of writing a Format ([Format and Theme](../writing/11-format-and-theme.md)), and the appendix is a chapter kind not yet written.*
- **What a book reads of its cover** is read there; a book kind that wants more asks `this.canonical?.annotations.expressed(…)` for it, as the four members do.
- **What a book must hold** is its specification: a kind that must hold more extends `BookSpecification`.
- **Part**, E31's book in a book, and the index are out of scope for now (D12); the strict pair already admits a book among a book's parts.

## Promises

Seven in [`.tests/book.test.tsx`](../../package/.tests/book.test.tsx): exposing its cover, its synopsis and its table, wherever they stand; the level and pair, holding the chapters its functions return; its canonical the chapter carrying the cover wherever it stands; a book with no cover, or two, or two synopses, saying so when asked; a section standing straight in it not a part it may hold; exposing what its cover says, its title, author, subject and what it is about; a chapter that does not specify making the book say so, coded to that chapter. In the compiler's: the module text for a book, calling each chapter function once in file order inside the book class ([`assembly/book.test.ts`](../../package/.binding/assembly/book.test.ts)); and the whole test library bound, specified clean, a runtime failure placed on its chapter's file, every page drawn inside its Theme, and the byline and the table seen in a real browser ([the regression](../../package/.binding/.test/binding.regression.ts)).

## Gate

Committed as `3f54cbf`, the compiler's half as `491177b`. Measured 2026-09-25: the package 202 of 202; the compiler's typecheck 0 errors, unit 95 of 95, regression 16 of 16; a bind of the test library reading 5 books and specifying 147 writings in 4.7s.

**Names.** Doug's: `Book`, `canonical`, `title`, `author`, `subject`, `about`. Ours, flagged: `BookSpecification` and its rules `$hasOneCover`, `$hasOneSynopsis`, `$hasOneTableOfContents`; and the compiler's `book` for the function a module exports, which the plan uses and Doug has not named.
