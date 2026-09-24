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

## <a id="amended"></a>AMENDED 2026-09-09 — ***the danger is the WRITE, not the making***

***Doug, reading this chapter back:*** *"Well not modifying in the view is key. Modifying the current class… Does it really not work, or could you not have a method that makes a new component in a view?"* **He was right and the headline above is wrong about its own mechanism** — *every account in it says **write**: Solutions 16 has "`parts()` WRITES to everything it composes, so the write diffused up"; [Solutions 44](44-the-enforcement-that-detonated-per-render.md) has "one reactive WRITE on the fresh chemical… scheduled a render from inside a render"; and the "adoption" in this chapter IS a write.*

**Measured, three views against a control:**

| a view that… | renders |
|---|---|
| makes nothing — *the control* | **3** |
| ***makes a chemical every render and draws nothing*** | ***3*** |
| makes once, memoises, draws what it made | **3** |

***Making is harmless.*** **What loops is a view that DRAWS a component it created that render** — React sees a new component type each time and remounts it forever — *and a view that WRITES to something already in the reaction graph, which diffuses up and re-enters the paint.* **The first test written for this DID loop, and it looped for the second reason while appearing to prove the first**; isolating the making from the drawing is what separated them.

> ***THE LAW, IN THREE LINES: a view MAY make. A view may not WRITE to what is already in the graph. A view may not DRAW a component it created this render.***

**Doug's ruling:** *"Let instances be created in views. We should be scared of statefulness."*

*So `$Section.reading()` and `$List.reading()` — which answer `reflection.wrapped(this)` and therefore call `parts()` from inside `view()` — are lawful: they make, they do not write, and what they draw is memoised by `parser.parse` in a WeakMap and so is the same component every render.*

## The lesson

***Grep a view for `parts()` and for `$(<`*** — either one inside `view()` or `frame()` is this defect waiting. **And a chemical member that can be absent makes every view that draws it a guard site:** the blockless case is not exotic, it is what a freshly-made margin creature looks like.
