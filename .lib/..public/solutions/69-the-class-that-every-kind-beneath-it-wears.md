# The Class That Every Kind Beneath It Wears

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)

**keywords:** `model` · `inherited-class` · `twice-said`

---

## The symptom, in the words it was observed in

***A sheet rule was changed from naming an element to naming the kind that writes it*** — **`article` to `.pd-document`, which is the convention this branch wrote down** — *and the encyclopedia's three-column layout collapsed:* **846 computed-style differences, the sidebar full width, the body in a 135px column.**

***And it happened three times in one afternoon, each looking like a different bug.***

## What it turned out to be, all three times

> ***A CLASS IS WORN BY EVERY KIND BENEATH THE ONE THAT NAMES IT. AN ELEMENT TYPE IS NOT.***

**`reflection.classNames` walks a writing's ancestry**, so a kind carries its own class AND every class above it. *That is the point — it is what lets a sheet reach a whole family.* **It also means a class cannot say "this one and not its descendants", and an element type silently could.**

| | what the element was saying | what broke |
|---|---|---|
| ***a cover, a contents and a synopsis are all documents*** | `article` meant *a document that is not the masthead or the sidebar* | `.pd-book > .pd-document` swallowed the `<header>` and the `<nav>`; **846 differences and the layout gone** |
| ***a contents row wears its document's classes*** | `article` meant *the document, not the row that NAMES it* | the rows took a document's `2em` margin — **ten of them**. *This one is ours: [the book copies a document's classes onto its chapter](../projection/63-sprint-57--finishing-latex-and-markdown.md#u4) so the appendices tell themselves apart in the contents* |
| ***an illustration IS an image*** | `figure.pd-illustration img` meant *the figure, not the picture inside it* | both wear `pd-illustration`, so the format sized the wrong box — **the figure drew at 343px against 624** |

***The repair in each case is to say what it is NOT*** — `.pd-document:not(.pd-cover):not(.pd-table-of-contents):not(.pd-chapter)` — **which is exactly what the article theme was already doing for section numbering**, *a `:not()` chain five long that had read as ugliness and is actually this same fact.*

## The finding underneath, which is a design question and not a defect

***The `:not()` chain is a roster, and [a roster is what this library refuses everywhere else](../the-coding-style/02-the-order-of-a-class.md).*** **What the sheet wants to say is "a document of the BODY", and there is no class for it** — *so it says the same thing twice, in two themes, by listing the apparatus.*

***AND ONE THING A CLASS LIST GENUINELY CANNOT CARRY TODAY:*** **a heading's LEVEL.** *`$Heading` writes `h1`…`h4` by depth and every one of them answers `pd-heading` alone*, **so twelve groups across three themes still name the element** — *and when one of them was converted, `.pd-heading` restyled every sub-heading beneath it: 22 measured.*

## How it was found, and this is the transferable part

***A COMPUTED-STYLE FINGERPRINT, taken before and diffed after.*** **Every element under `.pd-book` on all three readings — 1,826 of them — with 34 computed properties, its box, and its `::before`/`::after` content.**

```js
[...document.querySelectorAll('.pd-book, .pd-book *')].map(e => [
    e.tagName, e.className, ...rect, ...PROPS.map(k => getComputedStyle(e)[k]),
    getComputedStyle(e, '::before').content ].join('|'))
```

***A character count could not have seen any of this.*** **The text was identical every time** — *the paper stayed at 38,164 characters through a refactor that moved a figure 280px* — **and 0 refusals stayed 0.** ***The suite stayed 102 green throughout.***

**And the gate it gives you is exact:** *the paper finished at* ***0 differences across 761 elements***, *which is the only honest way to say a style refactor changed nothing.*

## What it also found, which nothing was looking for

***A DEAD RULE.*** **The encyclopedia declares `font-weight: normal` on a section heading and it had never applied** — *out-specified by its own general `.pd-heading` at `600`.* **Naming the kind raised the specificity and the declaration finally took**, *and it is correct: Wikipedia's `h2` is normal weight.* ***Eleven headings changed and the theme now does what it says.***

*This is [the value said twice](68-the-value-that-was-said-twice.md) from the other end: there a theme lost a tie it could not see, here it had been losing one to itself.*

## What to do

1. ***Before converting a selector from an element to a class, ask which kinds inherit that class.*** **`reflection.classNames` walks the ancestry — read the ancestry, not the file.**
2. ***Fingerprint first.*** **A refactor of style is only safe if you can prove nothing moved, and only computed styles can prove it.**
3. ***When the element is doing work a class cannot, say so at the line.*** *Three selectors in `src` now carry that sentence, and each names the measurement that put it there.*
4. ***An element type naming something the library did not write is legitimate*** — `img`, `figure:not(.pd-figure)` — **and that is a different thing from reaching past a class you own.**
