# The organization — lib, analyses, and the path to projects

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

[Book: [The Build](.cover.md)]

> **Status: PLAN / sketch — not yet built.** This chapter records the *agreed shape* of the team's analysis codebase, not code that exists. Nothing here is implemented; it is the design we build toward. It came from a team discussion plus Nancy's two `Nancy > Neuroscience` think exchanges — [the toolchain](../../../.claude/library/..teamsmanship/..team/nancy/thinking/01-the-toolchain-and-what-to-leave-out.md) and [a codebase that outlives the project](../../../.claude/library/..teamsmanship/..team/nancy/thinking/02-a-codebase-that-outlives-the-project.md) — and the [toolchain index](07-the-toolchain-index.md) that says *what* we install. This chapter says *how it is arranged to last*.

## The naming boundary: `library/` vs `.lib/`

One letter — a leading dot — carries the whole rule, the same way the library's own [dot type system](../../../.claude/library/bookkeeping/.cover.md#the-dot-type-system) does:

- **`library/`** (no dot) is the **shared code** — the installable, reusable core that analyses import.
- **`.lib/`** (dotted) is the **prose catalogue of building it** — *this* book, The Build, lives here, alongside [Datasets](../datasets/.cover.md) and the [toolchain index](07-the-toolchain-index.md). The dot means "the writing *about* making the thing," exactly as a `.`-prefixed [subject catalogue](../../../.claude/library/bookkeeping/07-on-subjects.md) is the writing about its books.
- **`library/`** (the main team library) is **knowledge** — findings, results, the science. This is where real analysis *results* live.

Doug's rule, encoded: **construction stays in `.lib/`; knowledge graduates to `library/`.** [The Altered Cortex](../the-altered-cortex/.cover.md)'s *plan and build* are catalogued in `.lib/`; its eventual *results* — what the analysis actually finds about V1 under DOI — graduate up to the main `library/` as knowledge the whole team holds. The build is how; the finding is what; they live in different trees on purpose.

## The sketch tree

```
# CODE — the reusable core plus the analyses that import it.  PLAN, not yet built.

lib/                        installable, sharable code library (the reusable CORE)
  io/
    registry.py             DATA REGISTRY — logical names -> locations, looked up so data can MOVE
    loaders/                adapters, one per data spec
      static_scan.py        loader for the Sensorium static-scan format
  model/
    base.py                 general Model + Checkpoint + provenance — the PORT (works for ANY model)
    registry.py             CHECKPOINT REGISTRY — names -> frozen, provenance-stamped weights
    adapters/               external-code specs live here
      twin.py               the neuralpredictors digital-twin adapter
  stats/                    nulls + confound regression — the MOST-frozen, MOST-property-tested code
  viz/
  tests/                    tests ON THE CORE LIB

analyses/<owner>/<name>/    PERSONAL analyses — each DESIGNATED by a manifest
  manifest.toml             title, question, status (alive/dead/superseded), checkpoint, owner
  ...                       imports lib, and NEVER edits it
  tests/                    regression tests ON THIS ANALYSIS'S OUTPUTS

experiments/YYYY-MM-DD-<name>/   ONE-OFF dated probes — self-contained, own gitignored results/; graduate when worth keeping

data/                       gitignored — the data registry points here
checkpoints/                gitignored — frozen + provenance-stamped; the checkpoint registry points here
```

## The core library (`library/`)

A **pure core** with effects pushed to the edges — what Nancy's exchange named *functional-core / imperative-shell* and *ports-and-adapters (hexagonal)*. The modules:

- **`io/`** — a **data registry** (`registry.py`) maps *logical names* to *locations*, so data can move (local disk, a share, a future remote) without any analysis changing. Concrete readers are **adapters** under `loaders/`; `static_scan.py` is the adapter for the Sensorium static-scan spec the [loader](05-the-code-and-the-loading.md) already prototypes.
- **`model/`** — `base.py` defines a **general `Model` + `Checkpoint` + provenance** — the *port*, abstract over any model. `registry.py` is the **checkpoint registry** (names → frozen, provenance-stamped weights). `adapters/` is where external-library formats live; `twin.py` is the neuralpredictors digital-twin adapter (see below).
- **`stats/`** — nulls and confound regression. This is deliberately the **most-frozen and most-property-tested** code in the tree, because [every "drug effect" claim inherits its correctness](../../../.claude/library/..teamsmanship/..team/nancy/thinking/02-a-codebase-that-outlives-the-project.md) — it is Nancy's confound gate given teeth.
- **`viz/`** — shared plotting.
- **`tests/`** — tests on the core itself (see Testing).

## The generalized Model / Checkpoint, and the adapter rule

A **checkpoint** is a trained model's saved weights, with three properties that make it the trustworthy root of an analysis's dependency graph:

1. **Frozen** — one checkpoint per analysis, never swapped mid-analysis.
2. **Provenance-stamped** — carrying its data hash + training commit SHA + config, so what produced it is always recoverable.
3. **Looked up by name, immutable** — resolved through the checkpoint registry, never edited in place.

The `Model`/`Checkpoint` interface abstracts over **any** model. The **digital twin is one instance** of it — but it must load a Sinz-lab checkpoint in neuralpredictors' *exact* format, a spec we don't own and can't abstract away. So the twin is an **adapter**: a general `Model` on the outside, neuralpredictors on the inside.

**The rule:** the interface stays abstract; wherever an external library forces a format, that format is quarantined in an **adapter**; and a *forced* adapter is **owned by the specific analysis that needs it** — the twin adapter ships with the V1/DOI analysis, and is promoted up into `library/` only if many analyses come to reuse it. This is the same spine/leaf promotion below: nothing is shared until it has earned it.

## The analysis layer (`analyses/<owner>/<name>/`)

Each analysis is **personal** — namespaced by owner — and **designated by a `manifest.toml`**: title, question, `status` (`alive` / `dead` / `superseded`), the checkpoint it pins, and owner. An analysis **imports `library/` and never edits it**, and keeps **regression tests on its own outputs**. A **harvester** walks the manifests to produce the **registry of what analyses exist and whose** — and a machine-readable index the [prose catalogue](.cover.md) can link to.

Two disciplines from Nancy's exchange make this hold:

- **The core/volatile boundary is a social contract, not a directory.** The destabiliser is never a new analysis *adding*; it is a new analysis needing the core to *change* to make its hypothesis land — the elegant-assumption trap. So "need the core to change?" is **a versioned PR with a test, not a quick edit.**
- **The registry stays honest only if `status=dead` is actually set** when a hypothesis dies. An unmaintained status field reports a dead result as live, with authority.

## The experiments layer (`experiments/`)

Beside the persistent, manifested analyses sits a lighter tier for **one-off probes**: `experiments/`. Each experiment is a **dated folder** — `YYYY-MM-DD-<name>`, so they sort chronologically — and is **self-contained**: its own script(s) plus its **own local gitignored `results/`**, so an experiment's outputs stay local to it and never leak into the shared tree. An experiment is *not* an analysis: it carries no `manifest.toml`, makes no promises, and is free to be thrown away. The discipline is the promotion rule again — when an experiment produces something worth keeping, it **graduates** into a catalogued library artifact: a [Datasets](../datasets/.cover.md) chapter, a core module, or a manifested analysis. The cell [matcher](../datasets/04-matching-cells.md) is the worked example — it began as a dated exploration and graduated into a verified core module with a regression test.

## Testing — test-driven, and central

Testing is the spine, with two kinds and a dial:

1. **Tests on the core lib** — unit *and* **property-based** (Hypothesis). `stats/` is hammered hardest, because every downstream claim inherits its correctness; property tests check it against adversarial inputs, not just the cases we happened to try.
2. **Tests on analysis outputs** — each analysis **pins its expected results**, so when the core changes, the diff shows exactly *what moved* in every analysis.

A runner with a dial, via **pytest markers**: `pytest` runs everything; `pytest -m core` runs just the library; `pytest -m <analysis>` runs one analysis. Easy to run all, or a few. This is the self-verifying-environment throughline of [Build, then verify](06-build-then-verify.md) extended from "the env installs green" to "the science reproduces green."

## The evolution path

The same spine/leaf promotion the team already uses for libraries, applied to code:

> **a personal analysis → a project → a project heavy enough to earn its own `library/` + `.lib/`.**

An analysis that grows shared utility promotes its code up into `library/`; a body of analyses that becomes its own endeavour earns its own code library and its own construction catalogue — the same way a [branch library](../../../.claude/library/library-tree/.cover.md) graduates. **Nothing is rebuilt to move up a level**; promotion is a move, not a rewrite.

## Open item (Doug's call)

The structure is agreed; what is **not** yet decided is **which `analyses/` module is built first**. That is Doug's earlier pair of questions wearing a structural hat: **dPCA vs CEBRA** for the geometry layer, and **digital-twin fit vs a model-free first pass** at pre/post tuning and population structure — both filed open in Nancy's [toolchain](../../../.claude/library/..teamsmanship/..team/nancy/thinking/01-the-toolchain-and-what-to-leave-out.md) and [codebase](../../../.claude/library/..teamsmanship/..team/nancy/thinking/02-a-codebase-that-outlives-the-project.md) exchanges. The skeleton (`library/`, the registries, the stats gate, the test runner) can be built before that call; the first analysis cannot.
