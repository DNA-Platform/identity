# The formulas that rendered empty

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** model · demo · stale-artifact · unproven-deletion
- **sprint:** [47 — The Catalogue](../projection/05-sprint-47--the-catalogue.md)

---

## Symptoms

- Every formula on the algebra page rendered as **blank space** — the display equation `e^{iπ} + 1 = 0` simply absent from the page.
- Sentences trailed off mid-clause: *"the way is computed from ."* — the inline math gone, its punctuation left behind.
- **No error anywhere.** Suite green, types clean, driver passing. The page was silently wrong and every gate said fine.

## What did not work

- **Looking at the renderer.** `$Latex.view()` called `katex.renderToString(this.copy, …)` and was correct. Nothing there to find.
- **Assuming the sweep was complete.** A `block` → `text` rename had run across the package and passed typecheck, so it looked finished.

## The mechanism

`$Latex` stored its content into one member and read it from another:

```tsx
block?: $Html<'block'>;                       // the bond stored HERE
get copy(): string { return text(this.text); }  // the view read HERE
```

The rename swept `copy`'s reader to `this.text` but left the bond writing `this.block`. So `this.text` was always undefined, `text(undefined)` returned `''`, and katex faithfully rendered an empty string. **Typecheck could not catch it** — both members existed and both were optional, so writing one and reading the other is legal TypeScript.

The second half was mine, and worse. While fixing it I also deleted `inline = true` from `$Latex` as apparent dead weight. It is not dead: it is chemistry's **inline-grouping marker**, and removing it made the two formulas block-level same-type siblings, which tripped the explicit-keys warning on the next driver run.

## The fix

Make the store match the read — one member, written and read as itself — and restore `inline`.

## Prevention

**A rename is not done when it compiles.** Optional members make a half-swept rename typecheck cleanly; the surviving gate is a rendering test or an eye on the page.

**Prove the mechanism before deleting.** *It looks unused* is an output-level read. Whether a member bears load is answerable only by driving the thing with it gone — green → driven → **seen**, aimed at deletion. The full form of the lesson is [Cathy's perspective note](../../../../.claude/library/..teamsmanship/..team/cathy/perspective/prove-the-mechanism-before-deleting.md); this chapter is the case it came from.
