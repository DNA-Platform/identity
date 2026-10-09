# The Clusters

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***Read from [`src`](../../package/src/) on 2026-10-01. A cluster is the set of classes one replaceable Format owns — puts on the page, and carries the meaning of in its own styled component. A library that wants the cluster to look otherwise subclasses the Format, writes its styled component, and puts its own in place; it never dresses a cluster from the theme unless it chose to keep the base's Format.***

---

## What a cluster is, and the shape of every override

**A Format is a shell of a class with `style` set to a styled component, and the marks it puts on the writing it is said of and on that writing's parts.** The styled component is a *layer* around the writing's own element, wearing `pd-container`; the marks stay on the writing and its parts, so the Format's template reaches them by descendant under its own layer, and so can anything above. The base's template carries what the marks *mean* — a grid, a marker, a hidden page — and no look.

**Every override is the same four lines**, and the only choice is whether to extend the base's template or write another:

```tsx
export class $LibraryTable extends $Table {
    override style = selection(this.style)`.pa-col { … }`;     // extending: the grid kept, the look added
}
export class $LibraryCover extends $Cover {
    override style = selection.header`.pa-cover { … }`;        // rewriting: the header kept, the template yours
}
```

**And it is put in place one of two ways,** by what the framework does with the word: where the framework stands the Format for itself — the Theme on every book, the Self on every title — the library's book file *registers* its subclass on the library's book class; where a chapter *writes* the word — `<Table />`, `<Cover />` — the book file *exports* the subclass under the framework's name and the chapter imports it from there, as it imports a word the framework has no name for, Framed, Literary, a Card. *Corrected 2026-10-05: this said a registration makes every written `<Table />` the library's, which [`registration.test.tsx`](../../package/.tests/registration.test.tsx) promises it does not; [policy 3](../writing-a-book/07-the-development-policies.md) is the rule. Sprint 97's U17, which would have made a written word ask, was pitched and parked.*

## Table — nine classes

| class | on | put there | the base's template says |
|---|---|---|---|
| `pa-table` | the composition's own element — a section's `div`, a chapter's | `$Table.defines` | `display: grid; grid-auto-columns: minmax(0, 1fr)`; a heading or a self-reference under it spanning every column |
| `pa-row`, `pa-row-start-n` | each row's own element, a paragraph's `div`, from the first row the table counts | `$Table.$Bound`, once | `display: contents`, and the anchor around a linked row the same, so cells are placed by their own marks |
| `pa-col`, `pa-col-start-n` | each cell's own element, a word's or sentence's `span` | `$Table.$Bound` | `grid-column-start: n`, generated for twelve columns |
| `pa-col-span-n` | the last cell of a short row | `$Table.$Bound` | `grid-column-end: span n` |

*The layer:* `div.pd-container` around the composition, the Format's `style`. *There is no mark for a header row* — the first row is `.pa-row-start-1`, and a library that dresses it says so by that mark; a `pa-header` would be the Table's to add in its own semantics if a second library asks. *What a library writes:* gaps, padding, the header row's weight and rule, cell borders — on `.pa-col`, `.pa-row-start-1 .pa-col`, `.pa-table` — extending the base's grid, or a grid of its own.

## List — three classes

| class | on | put there | the base's template says |
|---|---|---|---|
| `pa-list` | the composition's own element | `$List.defines` | `counter-reset: list-item` |
| `pa-ordered` | the same, when `ordered` | `$List.defines` | `.pa-ordered .pa-item { list-style-type: decimal }` |
| `pa-item` | each item's own element | `$List.$Bound` | `display: list-item; list-style: disc inside` |

*The layer:* `div.pd-container`. *What a library writes:* the items' spacing, the marker's glyph and colour, an indent — on `.pa-item`, `.pa-list`.

## Paginated — three classes

| class | on | put there | the base's template says |
|---|---|---|---|
| `pa-paginated` | the book's own element | `$Paginated.defines` | nothing of its own |
| `pa-page` | each chapter's own element | `$Paginated.$Bound` | `.pa-page:not(.pa-open) { display: none }` — the closed page unseen, no `!important` |
| `pa-open` | the bookmarked chapter's, or the cover's | `$Paginated.defines`, moved at each define, cited to the book | — |

*The layer:* `div.pd-container` around the book, inside the theme's. *What a library writes:* a page's box and spacing on `.pa-page`, the open page's on `.pa-open`; which chapters are pages is a subclass's `pages`, as the manual's Tabbed.

## Cover — one class and a header

| class | on | put there | the base's template says |
|---|---|---|---|
| `pa-cover` | the chapter's own element | `$Cover.defines`, which also takes `pd-canonical` off | nothing — the template is empty |

*The layer:* `header.pd-container` around the chapter. *What a library writes:* the card — ground, rule, padding — on `.pa-cover`; the title's size on `.pa-cover .pd-title`; a label by `::before`; the cover's byline is the library's own kind drawn by its book, with its own mark.

## TableOfContents — one class, a nav, and Content's span

| class | on | put there | the base's template says |
|---|---|---|---|
| `pa-table-of-contents` | the chapter's own element | `$TableOfContents.defines`, which also takes `pd-canonical` off | nothing — the template is empty |
| `pa-content` | the `span` a Content's note draws inside each entry | `$Content.note`, through `attrs` | nothing — the span carries its class alone |

*The layer:* `nav.pd-container` around the chapter; each entry a word inside an anchor, since a Content is a Reference. *What a library writes:* the box on `.pa-table-of-contents`, the entries' rhythm on `.pa-table-of-contents .pd-paragraph`, the names on `.pa-content`, the headings' voice on `.pa-table-of-contents .pd-heading`; a counter on the entries if they are numbered. A library whose entries need another element replaces Content's `span` by subclassing Content and registering it — rarely.

## Synopsis — one class and no layer

| class | on | put there | the base's template says |
|---|---|---|---|
| `pa-synopsis` | the chapter's own element | `$Synopsis.defines`, which also takes `pd-canonical` off and appends the synopsized chapter's text | no template: Synopsis is a Format for its power over the text |

*What a library writes:* on `.pa-synopsis` in its theme, by mark — italic paragraphs, a rule — or a subclass with a `style` if a synopsis needs a box of its own.

## Biography and Autobiography — two classes and no layer

| class | on | put there | the base's template says |
|---|---|---|---|
| `pa-biography` | the chapter's own element | `$Biography.defines` | none; under the policy an annotation that marks |
| `pa-autobiography` | the same, over `pa-biography` | `$Autobiography.defines` | none |

*What a library writes:* a label by `::before`, the title's variant — on `.pa-biography .pd-title`, `.pa-autobiography .pd-title` — in its theme; a subclass with a `style` only for a box.

## Bold, Emphasis, Underline — one class each, on the element itself

| class | on | put there | the base's template says |
|---|---|---|---|
| `pa-bold` | the `b` layer itself, through `attrs` — **not** on the writing | `$Bold.style` | nothing; `b` is the meaning |
| `pa-emphasis` | the `em` layer | `$Emphasis.style` | nothing |
| `pa-underline` | the `u` layer | `$Underline.style` | nothing |

*These three put no mark on the writing;* the element is the mark. *What a library writes:* usually nothing; a subclass with another element or a look, or a basic of its own by the same six lines.

## Theme — the outermost layer

| class | on | put there | the base's template says |
|---|---|---|---|
| `pd-container` | the theme's own element, a `div`, around the book | the provider, at every draw, which answers chemistry's `theme` with the Theme so its fields reach every template beneath | nothing — the base theme has no style; the library's component is this element |

*What a library writes:* its whole base sheet — the font, size, leading, ink and paper read from its own fields; every rule of [the first chapter](01-the-base-themes-classes.md); the marks of any cluster above it chose not to replace.

## The clusters at a glance

| Format | the writing it is said of | its own layer | the classes it owns | replaced by |
|---|---|---|---|---|
| Table | a composition | `div` | `pa-table`, `pa-row`, `pa-row-start-n`, `pa-col`, `pa-col-start-n`, `pa-col-span-n` | subclass, `style`, register |
| List | a composition with parts | `div` | `pa-list`, `pa-ordered`, `pa-item` | the same |
| Paginated | a book | `div` | `pa-paginated`, `pa-page`, `pa-open` | subclass for `pages`, `style` for a box |
| Cover | a chapter | `header` | `pa-cover` | subclass, `style`, register |
| TableOfContents | a chapter | `nav` | `pa-table-of-contents`; `pa-content` through Content | the same |
| Synopsis | a chapter | none | `pa-synopsis` | the theme by mark, or a subclass with a `style` |
| Biography, Autobiography | a chapter | none | `pa-biography`, `pa-autobiography` | the theme by mark |
| Bold, Emphasis, Underline | any writing | `b`, `em`, `u` | the class on the element | a subclass, rarely |
| Theme | a book | `div`, outermost | none; its fields reach every template beneath | **always** — the library's theme is this |
