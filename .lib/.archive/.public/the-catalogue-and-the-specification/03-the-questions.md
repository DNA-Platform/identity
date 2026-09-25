# The Questions

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

***What each of the nine readings was sent to find out, written down so that a later session can run the project again against a changed world*** — the field moves, and a research record whose questions are lost is a record of an answer nobody can re-derive. **Each dimension carries its questions and the searches that open them.** *The searches are a starting position, not a script; a reading that ends where its searches began has not read.*

## <a id="one"></a>1 · TypeScript plugins and transformers

***The commissioner asked for this by name and the answer turns on a distinction the word hides.*** **"Plugin" means at least three different things in TypeScript and only one of them is in an emit pipeline at all.**

- **What is a `tsconfig` "plugins" entry?** *Establish that these are LANGUAGE SERVICE plugins — they change what an editor knows and do not touch emit.*
- **What are CUSTOM TRANSFORMERS?** *`ts.transform`, `CustomTransformers` on `program.emit`, before / after / afterDeclarations — the AST access each gets and the stage each runs at.*
- **Does `tsc` support them from configuration?** *If not, what patches it — `ts-patch`, `ttypescript` — and what that costs a build.*
- ***THE DECIDING QUESTION: can a transformer read TYPE INFORMATION?*** **Our theme classes inherit their fields from a chain of base classes in another package**, so static extraction is impossible without resolving that chain. *Does a custom transformer get a `TypeChecker`, and can it walk a base class declared in a `.d.ts` of a dependency?*
- ***AND THE QUESTION THAT MAY VOID THE WHOLE DIMENSION:*** **Vite strips types with esbuild and never invokes `tsc`.** *If nothing forces `tsc` into the pipeline, a TypeScript transformer is not in the pipeline — so what would have to force it, and at what cost?*

**Searches:** *typescript custom transformers program.emit CustomTransformers · ts-patch vs ttypescript 2026 · typescript language service plugin vs transformer difference · does esbuild support typescript transformers · vite esbuild transpile only type checking.*

## <a id="two"></a>2 · Babel plugins and the extractors built on them

***The only real body of prior art for turning code into CSS at build time.*** **And it carries our hardest constraint at its centre**: a Babel plugin sees one file with no types and no cross-module resolution.

- **The plugin model** — visitors, paths, state, ordering, presets, and the difference between a plugin and a macro.
- ***How do the existing extractors resolve values they cannot see?*** **Linaria evaluates code at build time** — *what does it decide to evaluate, what does it do with imports, and what breaks?*
- **Compiled, StyleX and next-yak** — *what each extracts, what each refuses, and how each handles a value arriving from another module.*
- ***Does any of them support a CLASS whose FIELDS are declarations*** — our shape — *as opposed to a template literal or an object literal? If not, what would it take?*
- **What do they emit that lets a browser map a rule back to a source position**, and is that enough to write an edit BACK to source?

**Searches:** *babel plugin handbook visitors · linaria how it works build time evaluation shaker · stylex babel plugin static evaluation limits · compiled css-in-js atlassian how it extracts · next-yak styled-components compile away.*

## <a id="three"></a>3 · Vite's plugin surface

***The compiler we already stand on. If the insertion points are not here they are nowhere*** — and one of them, `binding:resources`, is already ours.

- **The full hook list and its ORDER**, for dev and for build, and what `enforce: 'pre' | 'post'` and `apply` change about it.
- ***The Environment API*** — *environments, `RunnableDevEnvironment`, `runner.import()`, the per-environment module graph.* **Can a long-lived server render N pages without restarting, and how does HMR propagate into an SSR environment?** *We spawn one node process per page today; this is the dimension that says whether that is necessary.*
- **`hotUpdate` / `handleHotUpdate`** — *the signature, what a plugin may do with the module list, how to send a custom event, and how to force a full reload rather than a partial update.*
- **`transformIndexHtml`** — *because the binder writes one `index.html` per page.*
- **The module graph at dev time** — *`getModuleById`, `invalidateModule`, and whether a plugin may emit files.*

**Searches:** *vite plugin api hook order enforce pre post · vite environment api RunnableDevEnvironment runner.import · vite hotUpdate hook HotUpdateOptions · vite transformIndexHtml · vite moduleGraph invalidateModule plugin.*

## <a id="four"></a>4 · Zero-runtime CSS systems

***The adopt-or-build question, asked against real tools rather than in the abstract.*** **Judged as candidates to replace a runtime layer in a system whose styles are class fields.**

- For **vanilla-extract, Linaria, Panda, StyleX, next-yak** and, briefly, **Tailwind v4**: *the authoring shape each requires and how far that is from ours; its Vite integration; whether it emits a real `.css` with a source map; whether it can emit into `@layer`; how it handles theming and inherited values; what a style change does to HMR; and what it refuses to compile.*
- ***The status of `styled-components`***, *which this framework depends on today.*
- **And the honest verdict:** *is there a tool to ADOPT, or is our shape unusual enough that we must write an extractor that BORROWS these mechanisms — and if so, which mechanisms?*

**Searches:** *zero runtime css-in-js 2026 comparison · vanilla-extract vite plugin sourcemap · linaria vite hmr · panda css vs stylex · styled-components maintenance mode announcement.*

## <a id="five"></a>5 · Cascade layers

***The mechanism that would end the specificity problem, and the single place it fails.***

- **The precise cascade semantics** — *where layer order sits relative to specificity, importance and origin.*
- **Syntax** — *statement form, block form, nesting, anonymous layers, `@import ... layer()`.*
- ***THE CRITICAL QUESTION: how do UNLAYERED declarations rank against layered ones?*** **A library that injects `<style>` at runtime is unlayered** — *which is exactly what we do today.* **Find the authoritative statement and the workarounds.**
- **How a design system declares an order** for a reset, a base, a third-party framework, components and a consumer's overrides — *with real stacks.*
- **How a BUILD TOOL emits into a layer**, and the gotchas with SSR and critical-CSS extraction.
- ***And the applied question:*** **we have three levels of theme inheritance producing rules that fight, plus per-component styles that should always win.** *What layer stack models that, and what does it forbid?*

**Searches:** *css cascade layers specification order of precedence unlayered · @layer third party override design system · cascade layers runtime injected styles problem · @layer sourcemap devtools · cascade layers browser support 2026.*

## <a id="six"></a>6 · Incremental build architecture

***What makes "re-run only what changed" computable rather than guessed.***

- **Astro's incremental static builds** — *the `cacheKey`, how a route's full module graph is hashed, what invalidates it, and its limits.*
- **Content-addressed caching generally** — *Turbopack, Rspack, Nx, Bazel: what the DAG must know.*
- ***The general rule: what must a stage DECLARE about itself for incrementality to be computable?*** *Inputs, outputs, purity, side effects — and the prior art for declaring them.*
- **Persistent caches and their classic failure** — ***a cache that reports green over work nothing did.*** *We have already been bitten by exactly this: `specify` answered "6 unchanged" from cache while the book underneath was broken, and the fault was older than every number quoted about it.*
- **Watch-mode architecture** — *watching, debouncing, and choosing the minimal set of stages to re-run.*
- ***Applied:*** **for each of our nine phases, what are its true inputs and outputs, and what should a change to one chapter, to a theme, and to the binder itself each invalidate?**

**Searches:** *astro incremental static builds cacheKey · nx task inputs outputs cache · bazel action inputs declared · turbopack incremental computation · vite watch mode rebuild only changed.*

## <a id="seven"></a>7 · Hot reload internals

***The anchor, so it gets a reading of its own.***

- **Vite HMR internals** — *the boundary concept, `import.meta.hot.accept` / `dispose` / `invalidate` / `prune`, and what causes propagation to the root and therefore a full reload.*
- **Why CSS hot-reloads cleanly**, how a style tag is swapped, and *what happens instead with CSS-in-JS.*
- **Server-side HMR** — *re-running server modules without restarting; `ssrLoadModule`, module graph invalidation, and the Environment API's story.*
- ***What FORCES a restart in practice*** — *config changes, plugin changes, externalised dependencies, files outside the module graph.* **The concrete list, because the anchor is written against it.**
- **Fast Refresh** — *what preserves state, what discards it, and the rules that break it.*
- ***Applied:*** **for each of our nine phases, could a change to its inputs be handled hot, and what would have to be true?** *The hard ones are named up front: an emitted `.ts` file changing, a theme class changing, a new chapter appearing.*

**Searches:** *vite hmr api accept dispose invalidate propagation full reload · vite ssr hmr server modules without restart · what causes vite dev server restart config change · react fast refresh rules preserve state · css-in-js hmr full reload problem.*

## <a id="eight"></a>8 · Build performance testing

***The fifth of the six, and the one most often done badly.***

- **What real projects measure** — *cold build, warm build, one-file incremental, HMR update latency* — *how variance is handled and what a budget looks like.*
- **Harnesses** — *hyperfine, tinybench, vitest bench, CI regression detection* — *and how flaky perf gates are avoided on noisy machines.*
- **What the Vite, Turbopack and Rspack teams themselves publish**, and their methodology.
- **Profiling a node build** — *`--cpu-prof`, `--heap-prof`, attributing time to a phase.*
- ***Applied:*** **our binder already prints a duration per phase.** *What should a performance test for a phase-structured compiler assert, what should it refuse to assert, and how do you test a pipeline whose slowest phase spawns subprocesses?*

**Searches:** *build performance benchmark methodology hyperfine variance · measuring hmr latency benchmark · vite build performance profiling --profile · ci performance regression detection flaky · node --cpu-prof build profiling.*

## <a id="nine"></a>9 · Prior art in comparable pipelines

***Two halves, because the second is a ruling already given and needs its prior art found.***

**HALF ONE — pipeline and plugin surface.** *For Astro, Next, Eleventy, Gatsby, Docusaurus, VitePress and Storybook: the named stages, the hook surface exposed, how N pages are rendered — in process, in workers, in processes — and how intermediate source is emitted.* **Attend especially to the ones that EMIT CODE as we do** — *a generated routes module, a generated manifest* — **and how they keep that emission incremental.**

**HALF TWO — the documentation site as its own test surface.** *Doug's ruling: the reference manual, which demos every control it documents, IS the fixture.* **Find how this is actually done** — *Storybook stories as the test surface, docs-as-tests, kitchen-sink galleries, visual regression against a gallery* — **and the problem he named himself: some components only make sense inside a whole page, so a gallery cannot host them.** *How do real systems solve "this component needs a page around it"?*

**Searches:** *astro build pipeline stages integration hooks · eleventy vs astro build architecture · docusaurus plugin lifecycle · storybook stories as tests portable stories · visual regression testing component gallery chromatic playwright · documentation site component demo test fixture.*

## <a id="not-asked"></a>The question this project does not ask

***Whether OUR authoring shape can be statically extracted.*** **No reading of another project's tool settles it**, because the shape is ours: *fields grouped by a decorator, a prefix naming a selector, values arriving from getters and from base classes in another package.* **That is an experiment, not a search** — *take one theme class, resolve its inheritance chain statically, and see whether every declaration it produces can be determined without running it.* ***The project hands that forward rather than answering it, and names it as the first thing the next sprint should do.***
