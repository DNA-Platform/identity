# Working on the compiled output

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

**keywords:** prototype · backpropagate · DevTools · dist · sheet · theme · where a change is true

---

***Doug: "Did you work on the compiled output to prototype when hot reload fails and then backpropagate?"*** **No. The question is right and the day answered it the slow way, so this chapter is the rule the day should have followed.**

## <a id="principle"></a>The principle

***Prototype where a change is cheapest to see; carry it back to where it is true; delete the prototype.*** *Every layer of [the loop](01-the-loop-as-it-stands.md#layers) has a cheapest place to see a change and a different place where the change belongs, and a debugging session that confuses the two either pays a build for every guess or leaves a hack in the sheet.*

| the question | cheapest place to see it | where it is true | carry it back by |
|---|---|---|---|
| *does this selector reach the element?* | **the browser, against the bound page** — DevTools or `look style`, no build | the theme or the sheet | writing the rule that worked |
| *what padding makes the row Wikipedia's?* | **the sheet, hot** (1.4s) | the theme, if every reader of the theme wants it | the same rule, re-keyed, in the theme; then deleted from the sheet |
| *which element wears which class?* | nowhere but `src` — the framework assembles the class | `Writing.view`, `Catalogue.print`, `Ref.view` | a `src` change, a build, a bind |
| *where does this link lead?* | **never the output** — a URL in the bound HTML is the compiler's | the source, through the transform | writing the mention the compiler reads |

## <a id="did"></a>What the day did, once

**The contents rows were fixed exactly this way, by Doug's own instruction — "move those components to the page, get the hot reload, play with them, and then refactor into the reference manual."** *The row's line-height was played in the sheet (1.4s, hot), the page photographed, the rule understood; then the theme's eight `.pd-ref` rules were re-keyed to the one link class (a build, a bind), and the sheet's copies deleted.* **That is backpropagation, and it took a quarter of an hour. The theme rules it replaced had been wrong for five days.**

## <a id="didnt"></a>What it did not do, and should have

**Selectors were tried by build-and-bind when the browser would have answered for free.** *Whether `.pd-book > .pd-chapter .pd-title a.pd-meaning:empty` reaches a chapter's title is a question the bound page answers in DevTools in a second — it does not, the encyclopedia stands article chapters inside a body — and the day answered it with a bind and a photograph, thirty seconds, twice.* ***Rule: a selector is tested against the page before it is written into a file.***

**`dist/lib.js` was never edited by hand, and at a 4.7s build that was the right call.** *Vite reads `dist`, so a string edited there hot-reloads, and a rollup that took minutes would make it worth doing; at five seconds the build is cheaper than the risk of carrying the edit back wrong.* ***The exception is the bound HTML on the preview:*** *editing its CSS in DevTools costs nothing, changes nothing on disk, and is how a spacing question should be asked first.*

## <a id="never"></a>What must never be prototyped in the output

***An address.*** *Every `href` in a bound page is the compiler's — Doug, 2026-09-19: "There should not be anymore dynamic link generation." A URL typed into the output to see whether a link "works" makes the proof pass and the source lie, and the next bind removes it without a trace.* **A link is debugged in the source, through the transform's refusal, which names the file and the line.**

***A class.*** *The framework names an element's classes from its kinds and its types at run time (`reflection.classNames`); a class typed into the output prototypes nothing the framework can be made to draw. The question "which class should this wear" is a `src` question, and the day's answer to it — one class for a link, `pd-meaning` on every anchor — came from reading `Writing.view`, `Catalogue.print` and `Ref.view`, not from the page.*
