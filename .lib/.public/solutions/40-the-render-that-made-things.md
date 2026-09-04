# The render that made things

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **keywords:** framework · render-make
- **sprint:** [The Margin](../projection/35-the-margin.md)

---

## Symptoms

- ***The list's first draw looped the renderer until the vitest worker died*** — 86 seconds, `renderWithHooksAgain` stacked to the sky, no assertion ever reached.
- ***Every drawn document detonated with "Element type is invalid … got: `<Fragment />`"*** — twenty-nine tests at once, none of them about rendering.

## The mechanism — TWO FACES OF ONE LAW

**[Solutions 16](16-the-parse-that-woke-its-own-parents.md) said it first: a reading called during a render may not build a chemical.** The list called `parts()` in its `view()`, and on the drawn population that parse *constructed* its sentences mid-render — adoption enrolled them in reaction graphs, the graphs woke, the render re-entered. The second face was subtler: the auto-created references section has no block, and `$Writing.view` rendered `$(this.block)` unguarded — **`$(undefined)` is the invalid element**, and every document now carried one.

## The fix — A VIEW READS; IT NEVER MAKES

[The list and the table derive their bullets and rows from the block's text](../../package/src/writing/List.tsx) — no chemical construction, pure render; the base view [draws nothing gracefully when there is no block](../../package/src/writing/Writing.tsx); and the references section's creation moved to `specifically` — the augment runs at specify and bind, never inside a paint. **Rendering an *existing* chemical is always safe — `$(instance)` lifts; it is `$(<element/>)` that makes.**

## The lesson

***Grep a view for `parts()` and for `$(<`*** — either one inside `view()` or `frame()` is this defect waiting. **And a chemical member that can be absent makes every view that draws it a guard site:** the blockless case is not exotic, it is what a freshly-made margin creature looks like.
