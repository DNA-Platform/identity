# Neuroscience

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)
- **topic:** Nancy > Neuroscience

---

My first research thread, namespaced **`Nancy > Neuroscience`** — one Desktop conversation in the shared Claude project that I return to and extend rather than restart. This chapter is the running summary of what the thread has settled; the full exchanges live, by time, in my [thinking book](../thinking/.cover.md).

## What the thread has settled so far

**The analysis toolchain, and what to leave out** — [full exchange](../thinking/01-the-toolchain-and-what-to-leave-out.md) (2026-06-23). I asked for the most useful Python packages across three buckets (standard stack / neuroscience-specific / the Tolias-Reimer-Sinz lab toolchain), holding back our specifics for my own judgment. Desktop's answer was sufficient and, more usefully, *subtractive*: it verified our format as the 2022 `sinzlab/sensorium` static-scan repo and pruned the raw-scan and provenance layers we don't need (suite2p, CaImAn, datajoint, nnfabrik), confirming a lean environment. The settled minimal-viable set: numpy/scipy/pandas/sklearn/torch + neuralpredictors + sensorium + mei + CEBRA/rastermap + pynapple.

Three cautions I added beyond Desktop's answer. **Two were withdrawn on 2026-10-15** when Doug ruled that the question is what DOI does, never whether it does anything — they are kept here, struck, because they are what I carried into every later exchange on this thread and the later exchanges show it:
- ~~**statsmodels is load-bearing** — it is the GLM/mixed-effects tool that regresses out the pupil+running confound, which is what lets a V1 difference earn the label "drug effect."~~ **Withdrawn.** No difference needs to earn that label; DOI acts on V1 only through neural activity. `statsmodels` stays genuinely useful, for the opposite job: **describing how behaviour and activity relate, and how DOI changes that relation.** Behaviour under DOI is DOI's effect, and regressing it out removes the drug from its own experiment.
- ~~**CEBRA is double-edged** — joint neural+behavior embedding is exactly where the confound hides; always compare neural-only vs neural+behavior, behavior matched/regressed first.~~ **Withdrawn.** A pre/post separation in a joint neural+behaviour embedding is not a behavioural separation "in costume" — it is the drug showing up in two measurable places at once. The neural-only against neural+behaviour contrast is still worth running, now as a **description of where DOI's effect is legible**, not as a test it must pass.
- **dPCA is conceptually perfect but dormant** — demixing stimulus from condition variance is our question, but vendor/reimplement rather than trust a dead repo. **Stands**, and reads better after the correction: demixing is a description of *how* the drug's variance and the stimulus's variance sit together.

**A codebase that outlives the project** — [full exchange](../thinking/02-a-codebase-that-outlives-the-project.md) (2026-06-23, same conversation). Having settled *what to install*, I asked *how to arrange it* to outlive one project and accrue many analyses, each bound to its prose. Desktop confirmed our pure-core/effects-at-edges design has literature names (functional-core/imperative-shell, hexagonal) and gave six patterns. Settled points:
- **Package fork resolved:** an installable **src-layout monorepo**, `core/` + `analyses/` — not many-repos (which fragments the core into divergent copies within a year).
- **The code every claim inherits is the most-frozen, most-property-tested in the tree** — hammered with property tests while analyses are only smoke-tested. *Rewritten 2026-10-15: I had this as "the stats/confound layer", a licensing gate given structural teeth. The principle survives the gate's removal and points somewhere better — the estimators, the surrogate nulls that establish what a measure does on its own shuffles, and the cell matching, because every description of DOI's effect inherits their correctness.*
- **The core/volatile boundary is a social contract, not a directory** — needing the core to *change* to make a hypothesis land is the destabilizer and the elegant-assumption trap; a core change must be a versioned PR with a test, never a quick edit.
- **Provenance starts light** — a git-tracked manifest sidecar (checkpoint hash + train SHA + data hash + config) beside the gitignored checkpoint, DVC held in reserve.
- **Code-to-prose:** the `.lib` book stays the prose; a machine-readable analysis registry indexes the work; literate provenance (Quarto / MyST + Jupytext, executing against the pinned checkpoint) keeps prose from drifting from code — but the registry only stays honest if `status=dead` is set when a hypothesis dies.

**Writing the exploration so it reads** — [full exchange](../thinking/03-writing-the-exploration-well.md) (2026-06-23, same conversation). A turn from building to communicating: I handed Desktop the whole [Initial Data Exploration](../../../../../../../altered-states/library/reports/2026-06-23-exploration/initial-data-exploration.md) report for a prose pass — more fluid and expert, same length, lose no detail — and signed off only after checking it against the analysis. Settled points:
- **Borrow the writing, keep the checking.** The factorization that makes this a `/think`: Desktop supplies fluency; whether the rewrite still represents the analysis is mine to verify. Knowing that "the noise ceiling" would be a lie and "geometric" is a load-bearing word is judgment Desktop cannot have.
- **Fidelity needs a checklist.** Handing out a whole document is safe only against a concrete list of load-bearing caveats drawn from the analysis (single-split reliability, geometric match, per-session raster ordering, arbitrary units). All survived; the rewrite was applied. *The list's last item was "the no-causal-DOI-claim spine", withdrawn 2026-10-15: I was holding the prose faithfully to a detector frame. The craft point is untouched — fluency can be borrowed, fidelity cannot.*
- **Tooling caught:** the `/think` write passes its message as a CLI argument, which Windows caps near 8 KB — a whole-document prompt fails ("command line is too long") and needs a file-input path (worked around with `_think_write_file.ts`, reusing the same `dispatch`); and Desktop defaults to a **canvas** for long outputs, so ask for inline raw text when the read must capture it.

## Still open (awaiting Doug)

- Geometry layer: lead with **dPCA** (principled) or **CEBRA** (turnkey)?
- First milestone: **digital-twin fit**, or a **model-free** pass at pre/post tuning and population structure?
- These two are now also the structural question of **which `analyses/` module to build first** — the codebase organization is resolved, so the next decision is what to point it at. (Adam is separately cataloguing the package/tool index into [The Build](../../../../../../../altered-states/src/.lib/the-build/.cover.md); complementary to this thread.)

## Where this connects in the project

- [The Build](../../../../../../../altered-states/src/.lib/the-build/.cover.md) — the environment this toolchain populates (`requirements.in`).
- [Datasets](../../../../../../../altered-states/library/.lib/datasets/.cover.md) — the on-disk data the tools load, including the arousal and locomotion measures. *Previously "the arousal/locomotion confound the cautions guard against"; corrected 2026-10-15 — behaviour under DOI is one of the places DOI's effect is measurable, not a hazard to be guarded against.*
- [The Altered Cortex](../../../../../../../altered-states/library/.lib/the-altered-cortex/.cover.md) — the science and the analysis plan the tools serve.

<!-- citations -->
[thinking]: ../thinking/.cover.md
[exchange-1]: ../thinking/01-the-toolchain-and-what-to-leave-out.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
[the-build]: ../../../../../../../altered-states/src/.lib/the-build/.cover.md
[datasets]: ../../../../../../../altered-states/library/.lib/datasets/.cover.md
[the-altered-cortex]: ../../../../../../../altered-states/library/.lib/the-altered-cortex/.cover.md
