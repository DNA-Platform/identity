# Paginated

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***The code is [`src/libraries/Paginated.tsx`](../../package/src/libraries/Paginated.tsx); cited here since [Sprint 91](../projection/96-sprint-91--the-comments-leave-the-code.md).***

---

## What it is

**Paginated is an annotation said of a book, under which the book's chapters are pages and one page is open at a time — the chapter its bookmark names, or the cover when it names none.** It is one annotation that serves as an example, and it is the smaller half of the extension story: Doug, 2026-09-27: *"Paginated is just one annotation that serves as an example, and might also be inherited from perhaps? That makes it less important than simply the ability to customize. A book can't be limited in how its chapters are displayed and .public gives its authors the ability to subclass Book and do sophisticated usecases."* How an author displays chapters in general is [Book's extension story](05-book.md); this chapter is the one worked case, written on his word to make it *"the most performant, elegant implementation of this possible as an example of what is possible."*

| member | what it is | cited |
|---|---|---|
| `Paginated` | a Format since [Sprint 97](../projection/102-sprint-97--formats-are-the-unit-of-styled-components.md): its own styled component, a layer around the book, carries the one rule that is its meaning — a page that is not open is not displayed — with no `!important` and no layer order; it changes nothing of how the book writes, and marks. Until Sprint 97 an Annotation whose rule stood in the base's sheet as an invariant | D3 of [Sprint 86](../projection/92-sprint-86--next-previous-and-the-display-of-chapters.md#plan): *"over a Format, since no layer is added; over the book drawing differently, since an annotation cannot change what a writing writes — and need not"* |
| `style` | the Format's own component since Sprint 97: `.pa-page:not(.pa-open) { display: none }`, scoped by the layer it lends, so an unpaginated book is untouched; a library that wants a page to have a box subclasses it, as the manual's Tabbed subclasses it for which chapters are pages. From Sprint 95's U5 to Sprint 97 the rule stood in the base's sheet as an invariant; before that, a global style in the annotation's note | R4 |
| `Paginated.book` | its parent when that is a Book, else none | a known parent typed by a property, as `heading.section` is |
| `Paginated.pages` | the book's own chapters, in order — **overridable**, so a class under it may say which chapters are its pages | R5; Doug: *"might also be inherited from perhaps?"* |
| `Paginated.open` | the page that is open: the book's `bookmark`, else its cover — overridable too | R4: *"the bookmarked chapter — the cover when the bookmark names none"* |
| `Paginated.note()` | the style | the [note power](../writing/10-developing-an-annotation.md) |
| `Paginated.defines(book)` | marks the book `pa-paginated`; then asks the pages which one wears `pa-open`, and only when it is not the open one takes that mark back and puts the open one's — **two writes on a move, none when nothing moved**. The open mark is authored by the book, since which page is open is the bookmark's doing; the page marks are authored by the annotation | D3: *"keeps the open mark true with the fewest writes"* |
| `Paginated.erase(book)` | takes back the book's mark and leaves the pages' — so a book that stops being paginated shows every page, as the Table's marks stay when the Table goes | D3 |
| `Paginated.$Bound()` | marks every page `pa-page` once, when nothing has drawn, as the [Table](../writing/12-table.md) marks its rows | Doug, Sprint 84: *"Mark at bound is great"* |
| `Paginated.specification` | `new PaginatedSpecification()`: **paginated is said of a book** | R6 |

**What a move costs, measured.** A book turning its page redraws whole today — [the cascade](../../../chemistry/.lib/projection/00-planning.md#pitch-cascade), chemistry's, pitched — and under Paginated the two chapters whose class changed redraw with what is under them: on a book of two chapters with a counted paragraph each, a move is 10 draws against the cascade's 6, and one paint either way; a bookmark set where it stands is 0. The number is pinned in [`renders.test.tsx`](../../package/.tests/renders.test.tsx) so a change to either cost turns a promise red. Nothing here adds to the cascade or waits on it: when chemistry ends it, the two pages' redraw is what remains, and it is the DOM's own cost — two elements whose class attribute changed.

### In use

```tsx
// projects/.book.tsx
export default class $SomeProjects extends $TheLibrary {
    protected override $Define(): void {
        super.$Define();
        this.annotations.add(this,
            <Paginated />
        );
    }
}
```

*Stood in the book class's `$Define`, as the test library's Theme is, so Some Projects shows one chapter at a time on its one page: `/some-projects/` the cover, `/some-projects/#the-work` the work — a fragment since [Sprint 95](../projection/100-sprint-95--pages-formats-and-words.md#d1), a route of its own before — and its catchword's Previous turns to the table in place — U4 of [Sprint 86](../projection/92-sprint-86--next-previous-and-the-display-of-chapters.md#u4).* The router is untouched: it sets the bookmark and the book turns; Paginated only reads what the book already exposes.

## How it is extended

- **Which chapters are pages** is `pages`, overridden: a class under Paginated whose pages are the chapters carrying a test-local annotation marks only those, and the rest — a header, a footer — stay in view. It is still Paginated wherever one is asked for, since the book finds it by `instanceof`.
- **Which page is open** is `open`, overridden when the bookmark may name a chapter that is not a page.
- **The look** is `style`, overridden: tabs, a sidebar, a fade; the marks are the same three, `pa-paginated`, `pa-page` and `pa-open`, and a subclass keys its own sheet on them.
- **The app-like book** — the first M chapters fixed as header and sidebar, the last N as footer, the middle as tabs — is a type of book reading annotations its chapters carry and a Paginated whose `pages` are the middle; [Book](05-book.md#how-it-is-extended) carries the analysis in full.
- **What a subclass never does:** re-mark every page at each define, which costs every chapter a draw per move; author the open mark as itself, which `revert` would take back with the page marks; or change what the book writes, which an annotation cannot.

## Promises

Eight in [`.tests/paginated.test.tsx`](../../package/.tests/paginated.test.tsx): bound, every chapter a page, the book paginated, the cover open when no bookmark is set, and the book's specification clean; given a bookmark, that chapter alone open once the book has drawn; the bookmark moved, the old page losing the mark and the new gaining it, exactly two chapters' classes changing; set where it stands, no chapter's classes changing; drawn, the book's element wearing its mark, every chapter's the page mark, and the open chapter's alone the class the style keys on; a class under it saying which chapters are its pages and giving its own style, still paginated; said of a section, saying so; taken out of expression through `$is`, the book's mark going and the pages' staying. One in [`.tests/renders.test.tsx`](../../package/.tests/renders.test.tsx): the move's cost above. *What the style does with the marks is seen in Chrome, in [the regression](../../package/.binding/.test/binding.regression.ts) — happy-dom carries no stylesheet, so no package promise reads injected CSS, as none does for the Table's grid.*

## Gate

Committed as `397cfd4`. Measured 2026-09-27, Sprint 86's U3: the package typecheck 0 errors and 268 of 268 across twenty files. **Some Projects paginated, U4:** the compiler's typecheck 0 errors, unit 98 of 98 and regression 30 of 30 — on `/some-projects/the-work/` the work alone open and every chapter a page, no other book marked; in Chrome the work's words shown and the synopsis's not, four pages of which one has a box, and the catchword's Previous turning to the table with the address moved and no reload; served at `/some-projects/` and `/some-projects/the-work/`.

**Names.** Doug's: `Paginated`, `pages`, `book`. Ours, flagged: `open`, the page that is open; `PaginatedSpecification` and its rule `$saidOfABook`; and the three marks `pa-paginated`, `pa-page` and `pa-open`.
