# The probes

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

**keywords:** probe · puppeteer · computed style · pseudo-element · measurement · exited by

---

***You cannot debug what you cannot see, and a page's look is not in its source: it is in the computed style of an element the framework named at run time. Four probes were written in the day, each an answer to one question, and the day turned when the first of them printed numbers.***

## <a id="four"></a>Four questions, four probes

| probe | the question it answers | what it printed the day it mattered |
|---|---|---|
| **`dom.mjs`** `<base> <route> <selector> <depth>` | *what is the rendered tree of this region, and what are each element's computed padding, margin, display and weight?* | every contents row an 18px `p.pd-option` holding `span.pd-catalogue > a.pd-meaning` with **zero padding** — the theme's `0.43em` on `.pd-ref` never landing. The hypothesis, confirmed with a number. |
| **`where.mjs`** `<base> <route> <selector>` | *where does every element matching this stand on the page, and what does the selected tab's `::after` compute to?* | chapters 9 and 10 at 28637 and 28719 — 82px apart, so the imported synopsis drew nothing; and the bar: `::after content none` on a stale build, `content "" height 2px` on a fresh one. |
| **`hmr.mjs`** `<file> <from> <to> <selector> <property>` | *how long from an edit to the page's computed style changing?* — it makes the edit itself, then polls | **1441ms · exited by: match**. The one number Doug asked for about the development experience. |
| **`down.mjs`** `<base> <route> <out> <offsets…>` | *what does the page look like at these scroll offsets?* | the before-and-after photographs, and the one that showed the box glued to its name. |

*A fifth, `selectors.py`, read a theme's `@select` declarations against a built page's CSS, checking a comma list member by member, and proved the theme loads — 104 of 108 present — which is what killed the first wrong hypothesis ("the encyclopedia isn't loading").*

## <a id="rule"></a>The rule every probe obeys

***A probe prints how it exited, or it prints nothing.*** *`hmr.mjs` sets `exited = 'match'` inside the loop and prints it beside the milliseconds; a loop that runs out prints `timeout`, and the number beside a timeout is the loop's patience and not a measurement — [Solutions 87](../solutions/87-the-start-that-was-timed-by-a-loop-that-never-matched.md), which cost an hour the day before this one.*

***And a probe matches on the thing, never on a rendering of it.*** *`curl` for a 200, a computed `paddingTop`, a `getBoundingClientRect().top` — never a word in a coloured log, never a column in a table that prints its columns in another order, and never a class name in a bundle, because the framework assembles `pd-${kebab(name)}` at run time and a grep for `pd-meaning` in `index-*.js` finds nothing and proves nothing ([The traps](05-the-traps.md#grep)).*

***A pseudo-element is invisible to a DOM walk.*** *The selected tab's bar is an `::after`; `document.querySelectorAll` will never return it, and the only way to know it drew is `getComputedStyle(element, '::after')` — `where.mjs` asks that of the `.pd-this` tab, and it is how a rule that had been written and built and bound was found not to be applying.*

## <a id="cost"></a>What a probe cost, and where it belongs

**Each probe launched its own headless Chrome, loaded the page, slept five seconds and closed — about ten seconds a look, some thirty looks in the day.** *The five seconds was a guess at readiness; the dev server's first page drew blank at two seconds and drawn at five, and a probe that guesses wrong reports a blank page as a fact ([One browser, kept open](03-one-browser-kept-open.md) is the answer).*

**They ran from the binding's folder as `probe-*.mjs` and were removed after each run** — *a package is never left holding a transient file — and they live in the session's scratchpad.* ***They belong in `design/` beside `qa.mjs`,*** *which already opens every page and reads computed styles: the probes are qa's questions asked one at a time, and a `design/look.mjs` that answers them against one kept-open browser is the tool the day was missing.*
