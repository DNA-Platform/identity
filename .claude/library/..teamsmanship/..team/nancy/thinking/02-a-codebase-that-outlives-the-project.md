---
title: "A codebase that outlives the project"
date: 2026-06-23
topic: "Nancy > Neuroscience"
previous: 01-the-toolchain-and-what-to-leave-out.md
---

# A codebase that outlives the project

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)

---

The second exchange in the **`Nancy > Neuroscience`** thread, continued in the same Desktop conversation as [the toolchain question](01-the-toolchain-and-what-to-leave-out.md). Having settled *what to install*, this one asked *how to arrange it*. Summarized by topic in [Research Topics](../research-topics/01-neuroscience.md).

## The question

How do you organize a Python research codebase meant to **outlive one project** and **accrue many analyses over time** — each catalogued in prose in the library and bound to the code that produced it? I carried Doug's three concerns (generality, accrual, code-to-prose association) and the design the team had already sketched in the room: a **pure core**, a **stable spine** (io + the frozen twin + stats), a **volatile analysis layer** on top, a **stats gate** every claim must pass, and a single checkpoint.

## Evidence — what came back (verdict: SUFFICIENT)

Desktop verified the tooling it named (e.g. Kedro reaching 1.0 in 2025) and gave six patterns:

1. **Our design has literature names.** Functional-core/imperative-shell (Bernhardt) and ports-and-adapters/hexagonal (Cockburn). Leak-warning: a core function that lazily reads a file loses purity *and* cheap testability at once.
2. **Monorepo, src-layout, installable package, `core/` + `analyses/`.** The failure to avoid is many-repos, which fragments the core into divergent vendored copies within a year. This resolves our package-vs-flat fork toward an installable src-layout package.
3. **Core as an internally-versioned library.** Semver; analyses record the core version they ran against; boundaries as `typing.Protocol`/ABCs; `DeprecationWarning` windows; and **asymmetric testing** — hammer the core (pytest + Hypothesis property tests), smoke-test the analyses. The stats/null/confound layer should be the *most frozen and most property-tested* part, because every claim inherits its correctness. The destabilizer is never a new analysis *adding*; it is a new analysis needing the core to *change* to make its hypothesis work.
4. **Provenance: start light.** A git-tracked JSON/TOML manifest beside the gitignored checkpoint (checkpoint hash + training commit SHA + data hash + config). Graduate to DVC (light; pipeline + remote) or DataLad (heavy; re-executable run/rerun) only when storage outgrows it. Manifest now, DVC in reserve.
5. **Steal the catalog, skip the framework.** Kedro is real but its ceremony fights short-lived exploratory analyses — take only its declarative data-catalog idea (names → loaders) into the io layer; treat cookiecutter-data-science v2 as a conventions reference, not a dependency.
6. **Registry + docs-as-code + literate provenance.** A machine-readable per-analysis manifest (title, question, status alive/dead/superseded, checkpoint hash, headline results, link to prose) plus a harvester compiling them into an index; docs-as-code (MkDocs-Material or Sphinx+mkdocstrings); literate provenance (Quarto, or Jupyter Book/MyST + Jupytext notebooks-as-`.py`) so a write-up *executes* against the pinned checkpoint and embeds its own figures — the prose cannot drift from the code. Warning: the registry stays honest only if `status=dead` is actually set when a hypothesis dies; an unmaintained status field lies with authority.

**The one discipline:** the core/volatile boundary is a *social contract, not a directory* — "need the core to change? A versioned PR with a test, not a quick edit."

## Interpretation — my judgment

Our pure-core/effects-at-edges design is validated and now has names — Cathy's framing turns out to *be* the literature. The adoption calls I'd make: an installable src-layout monorepo with `core/` + `analyses/`; an internally-versioned core with Protocol boundaries and the no-editing-the-core-to-get-unstuck contract; provenance by manifest sidecar now, DVC held in reserve; Kedro's catalog idea stolen, its framework left; and for code-to-prose, the `.lib` book stays the prose while a machine-readable registry indexes the analyses and literate provenance binds figures to the pinned checkpoint.

Two points land directly on my lens, and they are why this matters to me and not only to the engineers:

- **The stats/confound layer being the most-frozen, most-property-tested code is my [gate](../../../../../../library/.lib/the-altered-cortex/03-the-analysis-plan.md) getting teeth.** Every "drug effect" claim inherits the correctness of the layer that regresses out pupil and running and builds the null. If that layer is the *least* tested, the whole edifice of claims rests on the softest stone. Property-testing it — not example-testing — is the structural form of "a model that fits is not a mechanism": the gate has to be right for adversarial inputs, not just the ones I happened to try.
- **The social-contract law names my standing anxiety exactly.** The dangerous move is never adding an analysis; it is editing the core to make a hypothesis land. That *is* the elegant-assumption trap — bending the instrument to fit the desired result. Forcing a core change to be a versioned PR with a test is what stops a quiet edit from manufacturing the very effect it claims to measure. And the registry's honesty rule is my provenance discipline in another costume: a `status` field that isn't maintained reports a dead hypothesis as live, with authority — the same failure as a claim whose source can't be stated.

## Conclusion — a filed thought

**Resolved:** the package fork goes to an installable src-layout monorepo; the social-contract boundary is law; the stats/confound layer is the most-tested code in the tree.

**Still open to Doug:** which `analyses/` module we build *first* — which is his earlier [dPCA-vs-CEBRA and twin-fit-vs-model-free](01-the-toolchain-and-what-to-leave-out.md) calls, now wearing a structural hat. Note: Adam is separately cataloguing the package/tool index into [The Build](../../../../../../library/.lib/the-build/.cover.md); this organization thinking and that tool index are complementary, not redundant — his is *what we install*, this is *how it's arranged to last*.

<!-- citations -->
[previous]: 01-the-toolchain-and-what-to-leave-out.md
[research-topics]: ../research-topics/01-neuroscience.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
[the-build]: ../../../../../../library/.lib/the-build/.cover.md
[the-altered-cortex-plan]: ../../../../../../library/.lib/the-altered-cortex/03-the-analysis-plan.md
