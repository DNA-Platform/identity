# Cover, Synopsis and TableOfContents

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***Written 2026-09-25 with U2 of [Sprint 82](../projection/88-sprint-82--chapter-and-book.md#u2), to [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md); the code is [`Cover.tsx`](../../package/src/library/Cover.tsx), [`Synopsis.tsx`](../../package/src/library/Synopsis.tsx) and [`TableOfContents.tsx`](../../package/src/library/TableOfContents.tsx), the promises the first half of [`.tests/cover.test.tsx`](../../package/.tests/cover.test.tsx). Three classes in one chapter because they are one idea, what a chapter is in its book.***

---

## What they are

**Cover, Synopsis and TableOfContents are annotations a chapter carries, each a [Format](../writing/11-format-and-theme.md) holding its look, and each said only of a chapter.** Doug, in the brainstorm: *"Have you not read enough? We have an annotation system right? We are using it. They are going to end up holding the format and then also do structural validation, like coexpression with other annotations."* And of where they stand: *"The Cover annotation can only be applied to a chapter. The book can find its cover with it."* E30 named them first in a book; the Book ruling took the positions away — *"no need for it to be first."*

| member | what it is | cited |
|---|---|---|
| `Cover` | a Format whose `style` is `'header'`, so its chapter draws inside a header layer | R10; D7 |
| `Cover.specification` | `new CoverSpecification()`: **a cover is said of a chapter**; **a cover carries its author**; **a cover carries its subject** | R11, R12 |
| `Synopsis` | a Format with no style, so it adds no layer | R10; D7 |
| `Synopsis.specification` | `new SynopsisSpecification()`: **a synopsis is said of a chapter** | R11 |
| `TableOfContents` | a Format whose `style` is `'nav'` | R10; D7 |
| `TableOfContents.specification` | `new TableOfContentsSpecification()`: **a table of contents is said of a chapter** | R11 |

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

Five in the first half of [`.tests/cover.test.tsx`](../../package/.tests/cover.test.tsx): a cover draws its chapter inside a header and takes the layer back when it goes; a table of contents draws inside a nav and a synopsis adds no layer; each is said of a chapter, and on a section says so; a cover carries its author and its subject and says which is missing; a library's own cover draws its own element and is still a cover. In the compiler's suites: a table missing a chapter, a table answering without the synopsis, and a table listing what its book does not hold, each [raising its fault by name](../../package/.binding/catalogue/wellformed.test.ts); and a bound page drawing its cover in a `header` and its table in a `nav` [in the regression](../../package/.binding/.test/binding.regression.ts).

## Gate

Committed as `abd303d`. Measured 2026-09-25 at the close of U10: the package 202 of 202; the compiler's unit suite 95 of 95 and regression 11 of 11.

**Names.** Doug's: `Cover`, `Synopsis`, `TableOfContents`. Ours, flagged: `CoverSpecification`, `SynopsisSpecification`, `TableOfContentsSpecification`, and the rules `$saidOfAChapter`, `$carriesItsAuthor`, `$carriesItsSubject`.
