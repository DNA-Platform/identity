# The Method

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

***How the research was run, written down before its results so that the results can be judged against the aim rather than the other way round.*** A method recorded after the fact is a rationalisation; this chapter was written while the work was still running.

## <a id="the-shape"></a>The shape — nine dimensions, then three syntheses

**The project is a fan-out and a fold.** *Nine readings are taken in parallel, each of one dimension and blind to the others; three syntheses then read all nine together.* **The blindness is the point**: a single reader researching plugin architectures would find the answer they set out with, and nine readers who cannot see each other's work disagree in ways that are informative.

| | dimension | why it is its own reading |
|---|---|---|
| 1 | **TypeScript plugins and transformers** | the commissioner asked for it by name, and the word is overloaded enough that the answer turns on a distinction |
| 2 | **Babel plugins, and the extractors built on them** | the only body of prior art for turning code into CSS at build time |
| 3 | **Vite's plugin surface** | the compiler we already stand on; the insertion points are either here or nowhere |
| 4 | **Zero-runtime CSS systems** | the adopt-or-build question, answered against real tools |
| 5 | **Cascade layers** | the mechanism that would end the specificity problem, and the one place it can fail |
| 6 | **Incremental build architecture** | what makes *re-run only what changed* computable rather than guessed |
| 7 | **Hot reload internals** | the anchor, so it gets a reading of its own |
| 8 | **Build performance testing** | the sixth of the six, and the one most often done badly |
| 9 | **Prior art in comparable pipelines** | including how documentation systems demo and test their own components |

## <a id="what-each-must-return"></a>What each reading must return, and why in that shape

***Every finding is returned as a record rather than as prose***, and the fields are chosen to answer the commissioner's own question of every feature — **"where it exists at in the pipeline… what are we modifying or emitting as part of the build and where is the most elegant insertion point?"**

| field | what it forces |
|---|---|
| **claim** | one sentence, falsifiable — *a paragraph is not a finding* |
| **evidence** | the quote, the API signature, the config key — **not a secondhand assertion** |
| **url** | where it was read, so a later session can check it rather than trust us |
| **pipelineStage** | parse · transform · emit · bundle · render · serve · watch — ***the question asked of everything*** |
| **insertionPoint** | the concrete hook, API or file a system would plug into |
| **confidence** | verified · likely · uncertain — **stated, never implied** |

**And three things beyond the findings, because a reading that only reports capabilities is half a reading:**

***The mechanism sketch*** — how the thing actually works, in enough detail to implement against. *A dimension that cannot produce one has been read at the level of a marketing page.*

***The limits*** — what the approach CANNOT do. **These are worth more than the capabilities**, because an architecture is chosen by what it forbids, and every dimension in this project has a boundary that decides the design.

***The recommendation***, which the synthesis is free to overrule.

## <a id="primary-sources"></a>Primary sources, and the standing instruction against summaries

**Every reader was instructed to fetch primary documentation and source rather than blog summaries**, and to prefer an API signature or a quoted line over an assertion. *This is the same discipline the branch already applies to its own code — [cite or stop](../the-coding-style/03-the-coding-style.md) — applied to the outside world.*

***The failure it is aimed at is specific and this session had already met it twice in a day:*** **a secondhand claim that sounds like knowledge and turns out to be a paraphrase of a paraphrase.** *The nearest example is in this project's own subject: the field's summaries say "CSS-in-JS is fine with cascade layers", and the primary layers documentation says the opposite about runtime-injected styles — a distinction that decides whether one of the six is possible at all.*

## <a id="the-three-folds"></a>The three syntheses, and why they are separate

**They are separated because they fail in different ways and one reader would let the strongest of the three carry the other two.**

***THE PIPELINE MAP*** answers the commissioner's question literally, one row per feature: the stage, what is modified or emitted there, the single most elegant insertion point named concretely, the alternatives and why they lose, and what must already exist for it to be possible. **Its failure mode is vagueness** — a map that names no hooks is a diagram.

***THE AGGREGATION*** looks for where tools and strategies combine, and — asked for explicitly — ***where one change deprecates the need for another.*** **Its failure mode is timidity**: an aggregation that adds everything and subtracts nothing has done no work.

***THE REWRITTEN LIST*** is the deliverable the project is judged by. **Its failure mode is already known and named**, because the first attempt at it failed exactly this way: *small items at four altitudes, none of them carrying the commissioner's six.* **So it is constrained** — five to seven changes, one altitude, each named as a *change* rather than a tactic, each stating by number which of the six it absorbs, each stating what it deprecates, its stage and insertion point, and what *done* looks like observably.

## <a id="what-this-method-cannot-do"></a>What this method cannot do

***It cannot tell us whether our own authoring shape is compilable.*** **The theme classes here are unusual** — fields grouped by a decorator, a prefix naming a selector, values arriving from getters and from a chain of base classes in another package — and no reading of another project's tool settles whether ours can be extracted statically. *That is an experiment, not a search, and [the questions chapter](03-the-questions.md) names it as the one thing the project will hand forward rather than answer.*

***And it cannot choose the names.*** **Naming is Doug's**, and every name this project produces stands as a proxy until he rules — including the name of the book it is written in.
