---
title: "Neuroscience"
topic: "Nancy > Neuroscience"
---

# Neuroscience

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)

---

My first research thread, namespaced **`Nancy > Neuroscience`** — one Desktop conversation in the shared Claude project that I return to and extend rather than restart. This chapter is the running summary of what the thread has settled; the full exchanges live, by time, in my [thinking book](../thinking/.cover.md).

## What the thread has settled so far

**The analysis toolchain, and what to leave out** — [full exchange](../thinking/01-the-toolchain-and-what-to-leave-out.md) (2026-06-23). I asked for the most useful Python packages across three buckets (standard stack / neuroscience-specific / the Tolias-Reimer-Sinz lab toolchain), holding back our specifics for my own judgment. Desktop's answer was sufficient and, more usefully, *subtractive*: it verified our format as the 2022 `sinzlab/sensorium` static-scan repo and pruned the raw-scan and provenance layers we don't need (suite2p, CaImAn, datajoint, nnfabrik), confirming a lean environment. The settled minimal-viable set: numpy/scipy/pandas/sklearn/torch + neuralpredictors + sensorium + mei + CEBRA/rastermap + pynapple.

Three cautions I hold beyond Desktop's answer, and will carry into every later exchange on this thread:
- **statsmodels is load-bearing** — it is the GLM/mixed-effects tool that regresses out the pupil+running confound, which is what lets a V1 difference earn the label "drug effect."
- **CEBRA is double-edged** — joint neural+behavior embedding is exactly where the confound hides; always compare neural-only vs neural+behavior, behavior matched/regressed first.
- **dPCA is conceptually perfect but dormant** — demixing stimulus from condition variance is our question, but vendor/reimplement rather than trust a dead repo.

**A codebase that outlives the project** — [full exchange](../thinking/02-a-codebase-that-outlives-the-project.md) (2026-06-23, same conversation). Having settled *what to install*, I asked *how to arrange it* to outlive one project and accrue many analyses, each bound to its prose. Desktop confirmed our pure-core/effects-at-edges design has literature names (functional-core/imperative-shell, hexagonal) and gave six patterns. Settled points:
- **Package fork resolved:** an installable **src-layout monorepo**, `core/` + `analyses/` — not many-repos (which fragments the core into divergent copies within a year).
- **The stats/confound layer is the most-frozen, most-property-tested code in the tree** — every "drug effect" claim inherits its correctness, so it is hammered with property tests while analyses are only smoke-tested. This is my confound-gate getting structural teeth.
- **The core/volatile boundary is a social contract, not a directory** — needing the core to *change* to make a hypothesis land is the destabilizer and the elegant-assumption trap; a core change must be a versioned PR with a test, never a quick edit.
- **Provenance starts light** — a git-tracked manifest sidecar (checkpoint hash + train SHA + data hash + config) beside the gitignored checkpoint, DVC held in reserve.
- **Code-to-prose:** the `.lib` book stays the prose; a machine-readable analysis registry indexes the work; literate provenance (Quarto / MyST + Jupytext, executing against the pinned checkpoint) keeps prose from drifting from code — but the registry only stays honest if `status=dead` is set when a hypothesis dies.

**Writing the exploration so it reads** — [full exchange](../thinking/03-writing-the-exploration-well.md) (2026-06-23, same conversation). A turn from building to communicating: I handed Desktop the whole [Initial Data Exploration](../../../../../../library/reports/2026-06-23-exploration/initial-data-exploration.md) report for a prose pass — more fluid and expert, same length, lose no detail — and signed off only after checking it against the analysis. Settled points:
- **Borrow the writing, keep the checking.** The factorization that makes this a `/think`: Desktop supplies fluency; whether the rewrite still represents the analysis is mine to verify. Knowing that "the noise ceiling" would be a lie and "geometric" is a load-bearing word is judgment Desktop cannot have.
- **Fidelity needs a checklist.** Handing out a whole document is safe only against a concrete list of load-bearing caveats drawn from the analysis (single-split reliability, geometric match, per-session raster ordering, arbitrary units, and the no-causal-claim spine). All survived; the rewrite was applied.
- **Tooling caught:** the `/think` write passes its message as a CLI argument, which Windows caps near 8 KB — a whole-document prompt fails ("command line is too long") and needs a file-input path (worked around with `_think_write_file.ts`, reusing the same `dispatch`); and Desktop defaults to a **canvas** for long outputs, so ask for inline raw text when the read must capture it.

## Still open (awaiting Doug)

- Geometry layer: lead with **dPCA** (principled) or **CEBRA** (turnkey)?
- First milestone: **digital-twin fit**, or a **model-free** pass at pre/post tuning and population structure?
- These two are now also the structural question of **which `analyses/` module to build first** — the codebase organization is resolved, so the next decision is what to point it at. (Adam is separately cataloguing the package/tool index into [The Build](../../../../../../library/.lib/the-build/.cover.md); complementary to this thread.)

## Where this connects in the project

- [The Build](../../../../../../library/.lib/the-build/.cover.md) — the environment this toolchain populates (`requirements.in`).
- [Datasets](../../../../../../library/.lib/datasets/.cover.md) — the on-disk data the tools load, including the arousal/locomotion confound the cautions guard against.
- [The Altered Cortex](../../../../../../library/.lib/the-altered-cortex/.cover.md) — the science and the analysis plan the tools serve.

<!-- citations -->
[thinking]: ../thinking/.cover.md
[exchange-1]: ../thinking/01-the-toolchain-and-what-to-leave-out.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
[the-build]: ../../../../../../library/.lib/the-build/.cover.md
[datasets]: ../../../../../../library/.lib/datasets/.cover.md
[the-altered-cortex]: ../../../../../../library/.lib/the-altered-cortex/.cover.md
