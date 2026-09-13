# The mention that remounted every draw

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `model` `render-make` `demo`
- **sprint:** [58 — The Chapter That Is Its View](../projection/64-sprint-58--the-chapter-that-is-its-view.md)

---

## Symptoms

- The writing promises' worker died after the table promise, with no assertion and no stack: `Worker exited unexpectedly`, 26 of 53 run.
- The paper drove with **20 console errors** and the contents counted **5 rows** where ten chapters stood, no refusal panel anywhere.

## What did not work

- Reading the dying test's name from the verbose reporter: the next test was the mention render, which said where and not why.
- Describing the fix as "caching". Doug: *"Not a fix! We need REAL fixes, what is the problem."* The word hid the mechanism.

## The mechanism

A catalogue had been given a `print()` that built a fresh block from its strings on every draw and handed it to `$()`:

```tsx
const Title = $(this._block.filter(part => typeof part === 'string'));
return <a href={at}><Title /></a>;
```

`$()` makes a component for the block it is given, and a new block is a new component, so every render of the mention unmounted and remounted it. Each remount rendered again. This is [`render-make`](.cover.md): a view constructed a chemical. Every other `print()` in the package draws a block it already holds.

## The fix

A mention's block holds nothing but its title and its parenthetical annotations once rows hold the nesting, so its title is what `super.print()` already draws, cached per block like every writing's:

```tsx
return at === '' ? super.print() : <a href={at} className="pd-meaning">{super.print()}</a>;
```

The special construction is deleted, not cached. Measured after: writing promises 53 of 53, the paper with 0 errors, 65 rows.

## Prevention

A `print()` that calls `$()` on anything it made in that call is the class of this. The reading a print draws is made at the bond or cached by identity, never in the draw.
