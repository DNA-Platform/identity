# Cover, Synopsis and TableOfContents

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***Written 2026-09-25 with U2 of [Sprint 82](../projection/88-sprint-82--chapter-and-book.md#u2), to [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md); the code is [`Cover.tsx`](../../package/src/library/Cover.tsx), [`Synopsis.tsx`](../../package/src/library/Synopsis.tsx) and [`TableOfContents.tsx`](../../package/src/library/TableOfContents.tsx), the promises the first half of [`.tests/cover.test.tsx`](../../package/.tests/cover.test.tsx). Three classes in one chapter because they are one idea, what a chapter is in its book.***

---

## What they are

**Cover, Synopsis and TableOfContents are annotations a chapter carries, each a [Format](../writing/11-format-and-theme.md) holding its look, and each said only of a chapter.** Doug, in the brainstorm: *"Have you not read enough? We have an annotation system right? We are using it. They are going to end up holding the format and then also do structural validation, like coexpression with other annotations."* And of where they stand: *"The Cover annotation can only be applied to a chapter. The book can find its cover with it."* E30 named them first in a book; the Book ruling took the positions away — *"no need for it to be first."*

| member | what it is | cited |
|---|---|---|
| `Cover` | a Format whose `style` is `'header'`, so its chapter draws inside a header layer, and which marks its chapter `pa-cover` | R10; D7; the class on Doug's *"Have cover and table wear pa-cover and pa-synopsis from their annotations"* — [Sprint 83 U3](../projection/89-sprint-83--memory-management.md#u3), `011bef5` |
| `Cover.specification` | `new CoverSpecification()`: **a cover is said of a chapter**; **a cover carries its author**; **a cover carries its subject** | R11, R12 |
| `Synopsis` | a Format with no style, so it adds no layer, and which marks its chapter `pa-synopsis` | R10; D7; the class, the same ruling |
| `Synopsis.specification` | `new SynopsisSpecification()`: **a synopsis is said of a chapter** | R11 |
| `TableOfContents` | a Format whose `style` is `'nav'`, and which marks its chapter `pa-table-of-contents` | R10; D7; the class on his *"It can also put a pa-table-of-contents on the writing"* |
| `TableOfContents.specification` | `new TableOfContentsSpecification()`: **a table of contents is said of a chapter** | R11 |
| `TableOfContents.contents` | every Content in its table, in the order their names stand on the page: its own chapter walked depth-first when asked, each writing's text first and then its own Contents back to front, as a writing draws them — so a grid reads cell by cell and row by row whatever the depth, and a Content said of a row or of the chapter itself comes after what it holds; nothing cached, none of another chapter's | Doug, 2026-09-25: *"We could have the table reach out in the object tree and look for its contents. They are in there somewhere, and it can do a depth-first traversal of itself, looking for Content annotations"*; *"the TableOfContents annotation can have contents"* — `618b99c`; and 2026-09-26: *"Yes, it should definitly read contents on the chapter… What order would they be on the page? Traverse in that order"*, *"Depth first traversal of chapters contents, then its annotations, which puts one on itself last"* — [Sprint 83](../projection/89-sprint-83--memory-management.md), `29966e5` |
| `Content` | a Reference, in the table's file as one of its annotations, reading the `[name](identifier)` the compiler wrote and answering both; it makes the writing it annotates the link, and its note draws its name in a span wearing `pa-content` | *"Let's make a Content annotation, which is a type of Reference"*; *"it's note should draw its words... And put it in a span with a pa-content on there"*; *"And Content can live in its file as one of its attributes"* |

**A table's entries are Contents, found where they stand.** *Doug: "Best to do it where it happens, and that means like Means and Mention, it can't just be an annotation on the chapter."* So an entry is written on the page, `<Paragraph><Content>$[ ./The Argument ]</Content></Paragraph>` — and where a row holds two, each stands on a `<Word>` of its own, since a Content makes the writing it annotates the link and two on one writing would nest anchors. The table does not gather them as it is built — in a bond, [a chapter's book holds no chapters yet](../projection/89-sprint-83--memory-management.md) — it finds them when asked, so the book reaches them as `book.table`, whose TableOfContents answers `contents`.

**Each is written as a childless element among its chapter's children**, and the chapter is what it names: `<Chapter><Cover />…</Chapter>`. A book finds its cover by asking which chapter `is(Cover)`, and a chapter's `classes` and `containers` carry what each put there until it goes — *remove the Cover and the next define takes the header back*, which is the Format's `erase` and nothing written here.

### In use

```tsx
// the-library/.synopsis.tsx
export default () => (
    <Chapter>
        <Synopsis />
        <Title><Parenthetical />[[ Synopsis ]]</Title>
        <Paragraph>
            The one book here filed under its own subject, which is what makes it the top of the library rather
            than one more book on the shelf.
        </Paragraph>
    </Chapter>
);
```

**The compiler knows the three by their files**, `.cover.tsx`, `.synopsis.tsx` and `.table.tsx`, and never by the annotation — so what it checks of a table it checks off the notation in that file: **a table refers to every chapter of its book** (`CHAPTER-NOT-LISTED`), **answers in its own table for what its book catalogues** (`NOT-IN-THE-TABLE`), and **refers beside each answer to that book's own synopsis** (`NO-SYNOPSIS`). *Doug: "No! The compiler should enforce as much as possible based on what it gives."* A table of contents need not be shown — *"They still need to put everything on the page the right way even if it's all invisible"* (R27) — so the test library's tables hide their apparatus entries in a parenthetical paragraph, and the compiler reads them exactly as it reads the shown ones.

## How they are extended

- **A library's own look** is a subclass giving its own `style` — *"a library's own cover draws its own element and is still a cover"* is a promise — and the book still finds it, since the collection finds by `instanceof`.
- **A theme** is `theme = true` on that subclass, as on any Format; nothing here adds to it.
- **What a cover must carry** is the cover's specification; a library that carries more says so in its own subclass's specification, extending this one.
- **What a table must list** is the compiler's, because the compiler gave the names it lists; a table is never dropped to make a layout work — [The Cover Is a Cover](../the-type-system/08-the-cover-is-a-cover.md#his-cause).

## Promises

Six in [`.tests/table.test.tsx`](../../package/.tests/table.test.tsx) for Content and the table's contents — a content reads its name and identifier and is a reference; drawn, it makes its writing the link with its name in a span wearing `pa-content`; a grid's contents answered cell by cell and row by row, one said of a row or of the chapter after what it holds, in the order the drawn page shows their names; a table answers every content its chapter holds, however deep, in document order; none of another chapter's, reached from the book as its table; and a content added is among them after the next define. Seven in the first half of [`.tests/cover.test.tsx`](../../package/.tests/cover.test.tsx): a cover draws its chapter inside a header and takes the layer back when it goes; a table of contents draws inside a nav and a synopsis adds no layer; each marks its chapter with its own class and none of the others'; the class drawn on the chapter's own element inside its layer, and taken back with it; each is said of a chapter, and on a section says so; a cover carries its author and its subject and says which is missing; a library's own cover draws its own element, is still a cover, and still wears `pa-cover`. One in [`.tests/renders.test.tsx`](../../package/.tests/renders.test.tsx): a cover that marks its writing draws like any format. In the compiler's suites: a table missing a chapter, a table answering without the synopsis, and a table listing what its book does not hold, each [raising its fault by name](../../package/.binding/catalogue/wellformed.test.ts); and a bound page drawing its cover in a `header` and its table in a `nav`, each chapter wearing its annotation's class, [in the regression](../../package/.binding/.test/binding.regression.ts).

## Gate

Committed as `abd303d`; Content and the table's contents as `618b99c`, the test library's tables written in Contents as `7460fa7`. Measured 2026-09-25 after them: the package 208 of 208; the compiler's unit suite 95 of 95 and regression 17 of 17, the paper's table drawn in Chrome from its Contents. The three classes as `011bef5`, and the contents in the page's order as `29966e5`, measured 2026-09-26: the package 217 of 217; the compiler's unit suite 98 of 98 and regression 19 of 19.

**Names.** Doug's: `Cover`, `Synopsis`, `TableOfContents`. Ours, flagged: `CoverSpecification`, `SynopsisSpecification`, `TableOfContentsSpecification`, and the rules `$saidOfAChapter`, `$carriesItsAuthor`, `$carriesItsSubject`.
