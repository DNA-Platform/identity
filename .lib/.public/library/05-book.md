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
| `Book.$Book(...chemicals)` | its bond: Writing's, and then `$Bound()` last, once every chapter is in — **the only bond constructor that calls it**, so every writing in a book is bound top to bottom the moment the book is whole; and, once mounted, it turns to its bookmark | Doug, 2026-09-26: *"$Book is the only bond constructor that actually calls it"* — [Sprint 84](../projection/90-sprint-84--means-and-the-table.md#u2); the turn, [Sprint 85, U4](../projection/91-sprint-85--headings-and-routes.md#u4) |
| `Book.$bookmark` · `Book.bookmark` | **the bookmark**: the url the page is open at — a reactive member, written as a prop in a promise, `bookmark="/a-paper/the-argument/"`, and **set on the held instance by whoever draws the book**: the render for each page it draws, the app for the pathname it loads at and on every move — never by rendering the tree again, since a prop handed by a render is a paint. A getter and setter over `_bookmark`, and the setter turns the book to it. And `bookmark`, the chapter whose title means it, found by equality of two identifiers and nothing read; none when no bookmark is given or no chapter means it | Doug, 2026-09-26: *"Call it bookmark - it is a bookmark right? It is the place where the user is (recently was) and it is a record of him being there"*; *"A property isn't an action"*, of the `$open` it replaced; 2026-09-27: *"the thing can't render without intact routing that would be nonsensical. And we should have still been on our first paint"*; *"Why would you make a prop inert?"* — [Sprint 85, D2](../projection/91-sprint-85--headings-and-routes.md#plan) |
| `Book.turn()` | protected: scrolls the element wearing the bookmarked chapter's title's id into view, and does nothing where there is no bookmark; called when the bookmark is set and once the book has mounted, through `next('mount')`. Down the page is the book's default, so the turn is a scroll — and the bookmark is reactive all the same, since a layout that shows one chapter at a time reads it and redraws with it. **What a move costs today is the cascade, chemistry's:** a reactive write on a book redraws the book twice and every chapter under it twice, though nothing of theirs moved — 2 / 6 / 1 on a book of three paragraphs, 0 / 0 / 0 on an unchanged write, pinned in [`.tests/renders.test.tsx`](../../package/.tests/renders.test.tsx) and [pitched to chemistry](../../../chemistry/.lib/projection/00-planning.md#pitch-cascade): the lift draws on every React render of a component, and a memo on the lifted component would end it — [D2, D3](../projection/91-sprint-85--headings-and-routes.md#plan). **`turn` is ours, flagged: a book turns to its bookmark** | Doug: *"Down the page is the book's default, and the router never decides what is visible"*; *"This sounds like a chemistry bug that a change is so painful… I thought prop changes were cheap"*; the seam for `<Paginated />`, the later layout |
| `Book.canonical` | overridden: the chapter among its contents that `is(Cover)`, wherever it stands | R7 |
| `Book.$book` | overridden: the book itself, so every writing in it that asks its parent for [its book](../writing/05-the-writing-class.md) ends here — the walk ends by override, never by a condition in Writing | R1 of [Sprint 83](../projection/89-sprint-83--memory-management.md#u1): *"give every writing a book"*, `b90d70f` |
| `Book.cover` · `Book.synopsis` · `Book.table` | the chapter carrying Cover and the one carrying TableOfContents, each found by type wherever it stands, `cover` answering the canonical; and **the chapter that is its synopsis of itself** — whose Synopsis means the book — since a catalogue's chapters are synopses of other books, and a book may carry any number of those | Doug, 2026-09-25: *"add the cover, synopsis and table properties on book"*, and of the table, *"(can be the property for its table of contents)"* — [Sprint 83](../projection/89-sprint-83--memory-management.md), `e6119fa` |
| `Book.title` | its cover's title | R8 |
| `Book.means` | what its cover means — its cover's mention, the Reference to the book | Doug, 2026-09-26: *"Book can mean what its Cover means - return that, because a link that goes to the cover is one that goes to the book"* — [Sprint 84](../projection/90-sprint-84--means-and-the-table.md#u1) |
| `Book.author` · `Book.subject` · `Book.about` | its cover's Author, Subject and About, expressed | R8; *"book can reach in an expose them"* |
| `Book.specification` | `new BookSpecification()`: **a book has one cover**; **one synopsis of itself**; **one table of contents** | R11; *of itself* since 2026-09-26, forced by the catalogue's shape — [Sprint 84, D4](../projection/90-sprint-84--means-and-the-table.md#plan) |

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

**Implementing a book is largely about how to display its chapters.** Doug, 2026-09-27: *"implementing books is largely about how to display the chapters. You implement various types of chapters through direct types or annotations, and use them in Book… A book can't be limited in how its chapters are displayed and .public gives its authors the ability to subclass Book and do sophisticated usecases."* So the first seam of a book is the display of its chapters, and it is three rules and two examples.

- **A book kind places its chapters by what they carry — a group found by an annotation or a type — never by position and never as a remainder.** What a chapter is, it is by what it carries: a cover is the chapter carrying Cover, and a kind's own groups are its own marks, classes under Annotation or Format in the book's file, each putting its `pa-` class on the chapter it is said of and taking it back. The book asks `this.text.find($Chapter)` and filters by `is`.
- **It reads its bookmark to decide what is open.** `bookmark` is the chapter the address names; a layout that shows one chapter at a time reads it, and the router never decides what is visible — it sets the bookmark on the held book and the book turns.
- **The look is the format's.** A Format said of the book, the theme, carries the frame's CSS keyed on the marks; an annotation never adds an element the author did not ask for, and a kind that needs its own element overrides `view()`.
- **Two examples, and *"the two examples are just good enough"*:** [Paginated](08-paginated.md), an annotation that **confers** a display on the book — its chapters pages, the bookmarked one open; and [Next and Previous](07-next-and-previous.md), components that **represent** a property of the chapter — the chapter after and before, drawn as links. One confers and one represents, and a kind composes both.

### The app-like book, analysed in full

*Doug: "Let's pretend we had the first M and last N chapters that we wanted to be fixed in view like an app, and you can think of the first as header and sidebar and the last as footer, and the rest of the chapters as tabs, scrollable content, or just with links that move between… Just imagine there were Header, Footer and Document annotations on the chapters and the book reads them to decide what to do with them, and it wants the router to be able to show the active tab based on the url… Explain to me how one would implement such a thing, and how complex it would be."* **Five things, all in the library's own files — the book's `.book.tsx` and one resource of its header chapter — and nothing in `src`, the compiler or the router.** Each names the mechanism it rests on and what it costs in lines.

**1. Three marks, in `.book.tsx` — about sixteen lines.** A header and a footer that should be elements are classes under Format with that `style`, as Cover is; a document is a class under Annotation, as Biography is. Each puts its class on the chapter and takes it back:

```tsx
export class $Header extends $Format {
    style: ElementType = 'header';
    override defines(writing: $Writing): void { super.defines(writing); writing.classes.add(this, 'pa-header'); }
    override erase(writing: $Writing): void { super.erase(writing); writing.classes.revert(this); }
}
export class $Footer extends $Format { /* the same, 'footer' and 'pa-footer' */ }
export class $Document extends $Annotation {
    override defines(writing: $Writing): void { writing.classes.add(this, 'pa-document'); }
    override erase(writing: $Writing): void { writing.classes.revert(this); }
}
```

The author writes `<Header />` in the first M chapter files, `<Footer />` in the last N and `<Document />` in the rest, exactly as `<Cover />` is written; a sidebar is a fourth mark of the same six lines. *The mechanism is the [annotation's four powers](../writing/10-developing-an-annotation.md); the compiler reads no tag, so it learns nothing and refuses nothing here, and every chapter keeps its route.*

**2. Which chapters are pages — seven lines, and four in the kind's `$Define`.** A class under Paginated says its pages are the documents, and that the open page is a document even when the address names the header:

```tsx
export class $Tabbed extends $Paginated {
    override get pages(): $Chapter[] { return super.pages.filter(page => page.is($Document)); }
    override get open(): $Chapter | undefined {
        const open = super.open;
        return open !== undefined && this.pages.includes(open) ? open : this.pages[0];
    }
}
```

The book kind stands `<Tabbed />` in its `$Define` beside its theme, as Some Projects stands `<Paginated />`. *The mechanism is Paginated's: the header and footer never wear `pa-page`, so its note never hides them; the open document is the bookmarked one, and the router already lands there.*

**3. The fixed frame is the theme's — some twenty lines of CSS, and no element.** The book's Format, which the test library already gives every book, becomes a grid whose areas are the marks:

```tsx
style = styled.div`
    > span { display: grid; grid-template-rows: auto 1fr auto; grid-template-columns: 12rem 1fr; min-height: 100vh; }
    .pa-header { grid-column: 1 / -1; position: sticky; top: 0; }
    .pa-sidebar { grid-column: 1; grid-row: 2; }
    .pa-document { grid-column: 2; grid-row: 2; overflow: auto; }
    .pa-footer { grid-column: 1 / -1; position: sticky; bottom: 0; }
`;
```

The grid stands on the book's own element, the child of the theme's layer; a kind that wants that element to be a `div` overrides `view()` in one line. *The mechanism is [Format's](../writing/11-format-and-theme.md): a layer around the writing, its sheet global to the book.*

**4. The tabs are a table of contents drawn from what the book exposes — about fifteen lines**, in a resource of the header chapter, as the test library's [Entries](../../package/.binding/.test/projects/.table.tsx.tsx) draws Some Projects' table: a Section whose `write()` makes an entry per document, each a Word with a Reference to the document's mention, and marks the one whose mention is the book's bookmark:

```tsx
export class $Tabs extends $Section {
    override write(): ReactNode {
        const book = this.$book;
        const open = book?.bookmark?.mention?.identifier;
        const documents = book?.text.find($Chapter).filter(chapter => chapter.is($Document)) ?? [];
        const Word = $(word);
        const Reference = $(reference);
        return (
            <>
                {super.write()}
                {documents.map((document, index) => (
                    <Word key={index}>
                        <Reference>{document.mention?.identifier}</Reference>
                        <span className={document.mention?.identifier === open ? 'pa-open-tab' : undefined}>{document.title?.name}</span>
                    </Word>
                ))}
            </>
        );
    }
}
```

*The mechanism is `$book` and what the book exposes — `bookmark`, its chapters, each chapter's `mention` and `title` — read while drawing at no extra cost, [promised](../../package/.tests/renders.test.tsx); the open tab is one comparison of two identifiers, and the span inside the Word is plain React, side by side.*

**5. The active tab by the url costs nothing more.** The url is the bookmark: the router sets it on the held book, the book redraws, the tabs' `write()` reads it again and the comparison marks the other tab, while Paginated's define moves the open mark to the other document — two writes. The server draws each page with its bookmark set, so the open tab and the open document are in the served markup and the first paint is the paint; hydration draws nothing again.

**Complexity, as lines and files:** three marks at sixteen, a fourth for the sidebar at six, the Paginated subclass at seven, the kind's `$Define` at four, the theme's grid at twenty, the tabs at fifteen — **about seventy lines**, in `.book.tsx` and one resource of the header chapter, plus one tag at the top of each chapter file; four classes that are annotations, one Paginated, one theme, one drawn section. Every line is in the author's register, and not one is a hook, a registry or a flag.

**Where a fight would appear, and what already answers it.** *The header redrawing on a move* — the book redraws whole on a move today, [the cascade](../../../chemistry/.lib/projection/00-planning.md#pitch-cascade), chemistry's to end, costing the author no line; when it ends, the two documents whose mark changed and the two tabs are what redraw. *A document opened should stand at its top* — the book's `turn` scrolls the bookmarked title into view, and inside a scrolling document area the browser scrolls that area. *The address names the header* — the `open` override above, four lines. *The tabs should not be a page* — they stand in the header chapter, which carries no Document. *A chapter belongs to two groups* — it carries two marks, and each rule reads its own.

**What would make it impossible, and is not there.** A book that could not read its chapters' marks — it can, by `is`. A layout the router decided — it never does; it sets the bookmark. A url the classes had to parse — they compare identifiers and never read one. A display that needed the compiler to know the kind — it knows files and notation, and every chapter file here is an ordinary chapter file with one tag more.

- **A book kind** is a class under Book, overriding `write()` — or `view()` for its element — to place its chapters: a template method per part, as [The Book Is the Layout](../writing-a-book/05-the-book-is-the-layout.md#the-parts) has it, finding each part by what it carries and never by position or by name.
- **A book's theme** is a Format said of the book. Doug, 2026-09-25: ***"One might give the book a format called Theme which is a theme, which would be realized in its .book or as a resource in one of its chapters, perhaps as an appendix."*** A library writes it as a class under Format with `theme = true`, so its properties reach everything the book draws, and its `style` wraps the book — *"a format annotation that is also a theme that is global to a book"*; its specification says it is said of a book — *"The annotation validate that it is a book"*; and the book class stands it in `$Define`, or a chapter carries it as a resource. The test library's `Theme` draws the ordinary view, hiding every annotation's own writing — [the front matter](01-books-in-annotations.md#what-is-not-drawn-yet). **Import `styled` by name**, `import { styled } from 'styled-components'`: the binder's server loader hands the default import back as the module's namespace, so `styled.div` is not a function there — measured 2026-09-25, the specify phase failing at the theme's first bind, and the reason [the coding style](../the-coding-style/03-the-coding-style.md#styling) notes the two shapes of styled-components' default. *`src` has no Theme class and adds none: theming is a way of writing a Format ([Format and Theme](../writing/11-format-and-theme.md)), and the appendix is a chapter kind not yet written.*
- **Every book has its own class, wherever anything is registered on a class** — the general pattern for dependency injection. *Doug, 2026-09-26: "we document that if we use DI, we need all books to have their own class as a general design pattern."* A book that injects anything by registering it on a class — a theme, a format, a service — registers it on its own class and never on one another book shares, so a book drawn beside another in [the one server](../the-catalogue-and-the-specification/07-the-binder.md#render) carries only what it registered. The test library keeps it: every book extends the library's class with one of its own, `$APaper extends $TheLibrary`, and the paper's typewritten Format stands in its own class's `$Define`, where no other book reaches it.
- **What the rest of a book reads of it** is read through `$book`: any writing in it asks `this.$book` and reads what the book exposes — its cover, synopsis and table, its title, author, subject and about. *Doug: "just have the book expose its cover, table, synopsis... and other things use it from there."*
- **What a book reads of its cover** is read there; a book kind that wants more asks `this.canonical?.annotations.expressed(…)` for it, as the four members do.
- **What a book must hold** is its specification: a kind that must hold more extends `BookSpecification`.
- **Part**, E31's book in a book, and the index are out of scope for now (D12); the strict pair already admits a book among a book's parts.

## Promises

Thirteen in [`.tests/book.test.tsx`](../../package/.tests/book.test.tsx): given a bookmark, the chapter whose title means it is the bookmark, and none when none is given or no chapter means it; mounted, the book turns to its bookmark and turns again when it moves, and not to a place no chapter means; exposing its cover, its synopsis and its table, wherever they stand; the level and pair, holding the chapters its functions return; its canonical the chapter carrying the cover wherever it stands; a book with no cover, or two, or two synopses, saying so when asked; a section standing straight in it not a part it may hold; exposing what its cover says, its title, author, subject and what it is about; a chapter that does not specify making the book say so, coded to that chapter; and four that every writing has a book — a paragraph three levels down answering it in its own `$Define` and when drawn, the book answering itself, a lent book answered over the one above and by the paragraph inside it, and a writing built alone answering none. One in [`.tests/renders.test.tsx`](../../package/.tests/renders.test.tsx): a book whose paragraph reads `$book` while it draws draws and paints exactly as one whose paragraph does not. In the compiler's: the module text for a book, calling each chapter function once in file order inside the book class ([`assembly/book.test.ts`](../../package/.binding/assembly/book.test.ts)); and the whole test library bound, specified clean, a runtime failure placed on its chapter's file, every page drawn inside its Theme, and the byline and the table seen in a real browser ([the regression](../../package/.binding/.test/binding.regression.ts)).

## Gate

Committed as `3f54cbf`, the compiler's half as `491177b`. Measured 2026-09-25: the package 202 of 202; the compiler's typecheck 0 errors, unit 95 of 95, regression 16 of 16; a bind of the test library reading 5 books and specifying 147 writings in 4.7s. `$book` committed as `b90d70f`, measured 2026-09-26: the package's typecheck 0 errors and 213 of 213; the compiler's typecheck 0 errors and unit 95 of 95. **The bookmark, [Sprint 85, U4](../projection/91-sprint-85--headings-and-routes.md#u4), `5de3a89`, measured 2026-09-27:** the package's typecheck 0 errors and 250 of 250; the compiler's typecheck 0 errors, unit 98 of 98, regression 24 of 24 — the evidence's page opening turned to the evidence in Chrome; 23 pages rendered in 3.8s. Amended at `e33086d`: the book built once and told its bookmark on the instance, never rendered to be told; the cascade pinned at 2 / 6 / 1 and pitched; the package 250 of 250, the regression 26 of 26. **The extension story rewritten with [Sprint 86](../projection/92-sprint-86--next-previous-and-the-display-of-chapters.md#u5), 2026-09-27**, nothing of the class changed: the package 268 of 268; the compiler's typecheck 0 errors, unit 98 of 98, regression 30 of 30, Some Projects paginated and every chapter carrying its catchword.

**Names.** Doug's: `Book`, `canonical`, `title`, `author`, `subject`, `about`, `bookmark`. Ours, flagged: `BookSpecification` and its rules `$hasOneCover`, `$hasOneSynopsis`, `$hasOneTableOfContents`; `turn`, the protected method by which a book turns to its bookmark, and `_bookmark` behind it; and the compiler's `book` for the function a module exports, which the plan uses and Doug has not named.
