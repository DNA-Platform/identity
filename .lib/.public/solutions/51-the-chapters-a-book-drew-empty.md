# The Chapters a Book Drew Empty

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

**keywords:** framework · model · demo · chapters drawn empty · frames without contents · a book view that draws its own chapters · `$(chapter)` in a view · binder-drawn *(proxy name, flagged for Doug)*

---

## The symptom

**Every chapter of the Wikipedia book rendered as its frame and nothing inside it** — `<article><div><span class="pd-chapter"></span></div></article>` — *while the same chapters, the same cover, and the whole of the book's block drew whole when rendered alone.* **No error, no warning, `tsc` 0, the suite green: happy-dom draws the same book with its chapters full.**

## What was measured, in the browser, 2026-09-06

| case | the book's `view()` | drew |
|---|---|---|
| **K** | the plain `$Book` | *whole* |
| **L** | a subclass returning `super.view()` | *whole* |
| **N** | a subclass returning `<main>{super.view()}</main>` | *whole* |
| **M0** | a subclass mapping `searchFor($TypeOfChapter)` to `<Written />` components | ***frames only*** |
| **M1** | ***`$Block.view()`'s code verbatim*** — `elements.map(piece => createElement($(piece), {key}))` | ***frames only*** |
| **M3** | `searchFor` called and discarded, then `super.view()` | *whole* |
| **P1** | a plain `$Chemical` whose view returns `$(chapter)` for a chapter that sits in some book's block | *whole* |
| **Q3 · Q4** | a `$Writing` subclass — `inline` true or false — whose view returns `$(chapter)` | *whole* |
| **P2 · P3** | any view returning `<Block />` of the book's block | *whole* |

***So it is not the read, not the call, not `inline`, not `$Writing`.*** **The one thing every empty case shares: the chemical returning the chapters' components is the chemical that BOUND them** — *the book, drawing its own bond-children through `$(child)`.* A `<Block />` between them is not their binder and draws them whole; an unrelated chemical is not their binder and draws them whole.

## What did not work

- ***The Format-children reading*** — that a Format's bond re-binds held children handed to it as elements. Plain `<main>` wrappers drew exactly as empty. **Retracted the same hour.**
- ***The instance form re-running the bond*** — [`chemical.ts`](../../../chemistry/package/src/abstraction/chemical.ts) says it does not, and `$lift` with no `bond` flag confirms it.
- ***The `inline` marker*** — Q3 and Q4 above.

## The mechanism — not yet found, and where it is not

**[`$lift`](../../../chemistry/package/src/abstraction/particle.ts) renders a held instance directly** (`direct` — the instance IS the component); **[`augment`](../../../chemistry/package/src/implementation/augment.ts) walks the returned tree, resolves `on=` assignments, chooses facades, and substitutes formulas.** *None of those three names a chemical's own children.* ***The step that empties a bound child rendered by its binder is somewhere the reading did not reach, and it is chemistry's.*** **Doug's to look at; the probes above reproduce it in one file.**

## The fix, on the library's side

***A `$Writing` never draws its own held parts through `$(part)` in a view. It draws a READING of its block.*** **`this._block.filter(…)` is a `$Block`, `$(block)` is a component, and a Block draws its pieces whole** — which is what "every reading of a block is a block" was for:

```tsx
override view(): ReactNode {
    const Opening = $(this._block.filter(piece => piece === this.cover || piece === this.synopsis));
    const Chapters = $(this._block.filter(piece => this.chapters.includes(piece as $Writing)));
    …
    return <><Header><Opening /></Header><Content><Chapters /></Content>…</>;
}
```

**Applied to `$Book.view()` and `$Table.view()` the same day.** *`$Index.view()` already drew `<Block />`.*

## Prevention

**A promise that a subclass view drawing its own parts still draws their contents — in the real browser, not happy-dom, which does not reproduce it.** *Until the mechanism is found, the rule stands in [Using the Public Library](../designing-inexplicable-phenomena/20-using-the-public-library.md#minimalism): organize the default drawing; do not replace it.*

---

*Written 2026-09-06 out of [The Wikipedia Demo](../projection/49-the-wikipedia-demo.md#measured).*
