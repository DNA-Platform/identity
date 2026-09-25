# The Commission

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

***What was asked, why it was asked, and the day it became unavoidable.*** Everything below is quoted rather than paraphrased, because a commission paraphrased is a commission drifted.

## <a id="what-died"></a>What died

**Doug, 2026-09-17: *"We have a prototype. It just died. Let's have the next version bring it back to life."*** *The prototype is not the library and not the framework — it is the STYLE PIPELINE: a theme written as a TypeScript class whose fields are CSS declarations, compiled to CSS at runtime by a styled-components layer.* **It works. It is also the cause of nearly every fault this book was commissioned out of**, and the causation is mechanical rather than a matter of care.

**What it costs, measured on 2026-09-17 against the library as served:**

| | |
|---|---|
| rules in the served sheet | **238** |
| rules that must name **five or more** classes before they can say anything | **39** |
| rules reaching `.pd-heading` | **36**, setting 24 properties more than once — `margin`×15, `font-size`×15, `font-weight`×14 |
| rules reaching `.pd-table-of-contents` | **35**, setting 37 properties more than once — `display`×9, `padding`×9, `color`×8 |
| cost of seeing a one-property change | **a 33–43 second bind**, of which `render` is 28–30 |

***So a visual decision is preceded by a cascade simulation done in the head, and confirmed forty seconds later.*** **That is the whole of the bandwidth problem**, and Doug named it as one: *"Every painful piece required for feedback will wildly degrade your performance… You will get better by building a set of values but also, by building fast tools so you have the computation time to exercise them."*

**And the stakes were given plainly:** *"I am exacting from a UI perspective and I am horrified by this team's ability to execute so we need an overhaul or public would have to die and we are not letting that happen."*

## <a id="the-six"></a>The six, verbatim

***Doug's own list, given twice because the first attempt to extend it failed to integrate it.*** **Every change this book proposes is accounted against these by number**, and a proposal that absorbs none of them is not a proposal.

1. **backpropagation protocol** — supports live edit with fast safe backprop
2. **backpropagation tools** — automation to support 1 that lives IN the binder proper — this is the workflow
3. **incremental binding** — superoptimized parts of the binding process for things that have to be run during the dev process which are optimized to work with hot reload — ideally the whole binder doesn't require a restart
4. **hot reload support** — it is known which parts support hot reload and which parts don't and we support as many as possible because restarting a server is death
5. **performance tests** — the binder needs to be fast so we run performance tests to ensure that things work
6. **documentation** — great documentation at multiple scales of summarization for great catchup

***The rewrite failed the first time and the reason is recorded here so it is not repeated:*** **"See how mine is organized into big changes? Yours are small at different levels ungeneralized."** *A list of tactics at four altitudes is not a plan, and a plan that does not visibly carry the commissioner's own items is a different plan wearing his name.*

## <a id="anchors"></a>The two anchors

### <a id="hot-reload"></a>Hot reload is not a feature, it is the constraint

> ***"And remember as an anchor, support for hot reload is obviously ESSENTIAL"*** — *and, in the six:* **"restarting a server is death."**

***This is a constraint rather than a want, and it is load-bearing on the architecture.*** **A design that is faster but must restart to pick up a change is refused**, because the cost that matters is not the build's duration — it is the number of seconds between a decision and seeing it. *A four-second restart taken forty times is worse than a twelve-second build taken twice, and the thing being optimised is the loop, not the run.*

### <a id="parse-or-run"></a>Parse what can be parsed; run only what must be run

> ***"if we need to read certain things by parsing and consuming the page itself rather than running something, we can validate the library in code too"*** — **and, immediately: *"But that's really really hard."***

***He is right on both halves, and the line between them is the hardest thing in this book.*** **The emitted page is a file.** *So is the sheet it carries.* **A great deal that we currently open a browser to learn can be settled by reading them:**

| answerable by parsing the emitted HTML and CSS | needs the page laid out |
|---|---|
| which rules match an element, and which one wins | the element's actual box |
| whether a declaration is present at all — *the divider that was reserved and never drawn* | whether a row wrapped onto a second line |
| whether a weight, a colour, a border is what was intended | whether a mark fell below the name it belongs beside |
| whether two rules argue, and how many | whether a column collapsed to 24 pixels |
| whether a link leads somewhere, and whether anything answers to it | what a reader would actually see |

***The left column is a cascade resolver: finite, browser-free, and fast enough to run on every keystroke.*** **The right column is a layout engine**, *and nothing short of one answers it* — which is why it is really really hard, and why **every fault this library shipped this week lives in the right column.** *A column at 24 pixels, a title setting one letter per line, a square falling to its own line: each visible in a photograph, none of them present in any file.*

**So the architecture is held to a rule rather than to a tool:** ***parse what can be parsed, run only what must be run, and make the residue small enough to run often.***

## <a id="what-else"></a>What else was already ruled

**Three rulings stand over this research and are not reopened by it.**

***The reference manual is the test surface.*** **Doug, 2026-09-17: *"Maybe the reference manual needs to demo all the controls it creates and that is the test page… My reference manual test idea is great."*** *With the difficulty he named himself in the same breath — **"that's tricky when it is a page that needs to contain parts of pages"** — and the fallback he chose: canonical pages for the features a gallery cannot hold, **"But choose the best canonicals!"***

***Names come from the domain's vocabulary, used in the domain's sense.*** **"AND USE VARIABLE NAMES THAT MEAN SOMETHING!!! Mine do in writing. parenthetical means what we have it mean."** *The binder's vocabulary already exists and is good — configure, inventory, assemble, specify, resolve, bundle, render, proof, record — and anything added must come from it or earn a place in it.* **The test given the same day:** *read the path aloud as a sentence and check every word against what is actually there.*

***And the plugin question is asked, not assumed.*** **"Might we simply want to plug into tools that support changes that already support hot reload?"** *and* **"is it a babel and typescript plugin perhaps? Perhaps we emit source like that"** — *which is the question the whole research project exists to answer, and the reason [the method](02-the-method.md) puts four of its nine dimensions on plugin architectures rather than on our own code.*
