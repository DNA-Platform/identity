# List

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***Written 2026-10-01 with U11 of [Sprint 95](../projection/100-sprint-95--pages-formats-and-words.md#u11), to [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md); the code is [`List.tsx`](../../package/src/writing/List.tsx), the promises [`.tests/list.test.tsx`](../../package/.tests/list.test.tsx). The class name is Doug's; the marks and the prop follow the pattern he chose.***

---

## What it is

***"List and Math are fundamental. Let's add an annotative List to the next sprint."*** — Doug, 2026-09-30. **A List is an annotation said of a composition that reads its parts as items, ordered or not: it marks the composition and each item on their own elements, and its own styled component draws the items.** It is [Table](12-table.md)'s shape said of one dimension — an interpretation of a composition, marking by authorship, the look the sheet's — so a section of Lines, a paragraph of Lines, or a sentence of words is a list by carrying one, and nothing is added to the levels.

| member | what it is | cited |
|---|---|---|
| `$ordered` | a prop, written `ordered` as `$is` is written `is`: whether the items are numbered; false by default | the pattern, 2026-09-30: *"By the pattern"* |
| `composition` | its parent when that is a composition, typed as Table's is | the code pattern: a known parent is typed by a property |
| `items` | the composition's parts, past the heading when the composition is a section, since a heading is the section's canonical and no item | Table's `start`, said once for the one case a list meets |
| `defines(writing)` · `erase(writing)` | `pa-list` on the composition's own element, and `pa-ordered` beside it when it says so; both taken back | [an annotation marks its presence](10-developing-an-annotation.md#mark); a prop as a mark, since what varies is a trait of the element |
| `$Bound()` | **once, when the book is whole:** `pa-item` on each item's own element — then `super.$Bound()` | Table's *"Mark at bound is great"*, [why](12-table.md#why-the-marks-are-the-binds) |
| *the look* | `style`, the Format's own component, a layer around the composition: `.pa-list` resets the item counter; `.pa-item` is a list item, its marker inside; `.pa-ordered .pa-item` counts in decimals — the mechanism of a list and no look; a library's theme says the spacing by the same marks, or a subclass extends the template | a Format since Sprint 97, its look gone with the policy |
| `ListSpecification` | **a list is said of a composition with parts**, which a letter is not | D1 of the sprint: *"the specification refuses a List on a Letter"* |

### In use

```tsx
<Paragraph>
    <List />
    <Line><Means>$[[ Libby ]]</Means> is the book that writes the others.</Line>
    <Line><Means>$[[ Some Projects ]]</Means> is what has been worked on.</Line>
    <Line><Means>$[[ A Paper ]]</Means> was written by a persona Libby vouched for.</Line>
</Paragraph>
```

*The shelf in the test library's [The Shelves](../../package/.binding/.test/library/1-the-shelves.tsx): a paragraph of three Lines, each a sentence on a line of its own and a link, drawn on the bound page as three list items with their markers. `<List ordered />` numbers them.*

## How it is extended

- **A kind of list** is a class under List that says what its items must be, in a specification of its own — a list of dates, a list of references — and keeps the marks, so a library's theme reads it as any list.
- **A look of your own** is a library's theme's rules for `pa-list`, `pa-ordered` and `pa-item`, extending the default sheet as [Dressing a Library](../writing-a-book/02-dressing-a-library.md) does.
- **Which parts are items** is `items`; a kind of composition that keeps its canonical elsewhere overrides it, as Table's `start` is overridden.

## Promises

Eight in [`.tests/list.test.tsx`](../../package/.tests/list.test.tsx): a section interpreted as a list, its parts the items and the heading none, marked at the bind; a paragraph's sentences its items; ordered when it says so, `pa-ordered` beside `pa-list`, and unordered by default; a section built alone wearing `pa-list` and its items no marks; said of a composition and not of a letter; taken out, the composition's classes taken back and the bind's marks kept; drawn in its book, its items list items by the List's own component, decimals when ordered, the counter reset on the list and no rule made per list; a word an item too. In the compiler's [regression](../../package/.binding/.test/binding.regression.ts): the shelf drawn as three list items, each a line, unordered.

## Gate

Measured 2026-10-01: the package's typecheck 0 errors and 329 of 329; the compiler's typecheck 0, unit suite 132 of 132 and regression 43 of 43; The Shelves photographed with its three items marked.

**Names.** Doug's: `List`. The pattern's, on his word, flagged: `pa-list`, `pa-item`, `pa-ordered`, `$ordered`; ours, flagged: `ListSpecification` and its rule, `items`.
