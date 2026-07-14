# Sprint 9 — The raw instruments, handed over

- **author:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

**Status: PLANNED.** Written before the work per [Sprints](../../../.claude/library/library-tree/03-sprints.md). The four twins are trained ([Sprint 7](07-sprint-7--the-four-twins-one-at-a-time.md)'s gated run — pre/A, pre/B, post/A, post/B, 5-seed ensembles) and the pipeline owns its own runtime ([Sprint 8](08-sprint-8--the-pipeline-owns-its-runtime.md)). The whole spine of this sprint is Doug's: **generate the raw instruments and hand them over.** Produce every instrument the twins yield, put it all *raw* in one fast-to-explore archive, and bundle it with the code and a notebook so the Reimer Lab — Erin (the experimentalist) and Jake Reimer — can open and explore it **without our pipeline**.

**Grounding** (read both every turn): the analysis contract [specification.md](../../../src/analyses/most-exciting-image/specification.md) and the handoff contract [deliverable.md](../../../src/analyses/most-exciting-image/deliverable.md).

## What ships — the raw instruments

- **The four twins** — pre/A, pre/B, post/A, post/B (5-seed ensembles): checkpoints + config + provenance + per-neuron validation (FEVE / corr-to-average / noise ceiling).
- **One MEI per matched cell** — each matched cell's most-exciting image (arrays + rendered panels). Per-cell, no cross form — an MEI has no external target to swap (spec Parts 5–6).
- **Four metamer sets** — one population reconstruction array **per target image**, in the 2×2 of {target state} × {inverting twin}: **within-pre** and **within-post** (Cobos), and the two **cross** sets (**pre→post**, **post→pre**) that hold the target fixed and swap the twin to image the encoder change (spec Part 7). Each carries its re-evoke correlation; the cross sets are labeled exploratory.
- **Raw stimulus frames** — so the MEIs and metamers read against the real inputs.

All **raw** in one indexed **HDF5** archive (arrays + numbers), fast to explore, with a manifest — figures regenerate from it, never the other way around.

## Lean — characterization, not "the comparison"

Doug has **de-emphasized the pre/post comparison**. Spec Part 9 is reframed from *the comparison* to a thin **computational characterization** layer on top of the raw archive:

- **best-one metrics** — per instrument, the one number for how good it is: for a **metamer**, its **correlation with the image** (the re-evoke read); for an **MEI**, the metric is **Nancy's to define (TBD)**.
- **exemplar selection** — pick the pre/post example cells and images worth showing, rather than an exhaustive sweep.
- **per-matched-cell difference** — in **both** instrument forms: the MEI pre-vs-post difference and the metamer difference, per matched cell.

Everything stays **scale-invariant** (the data constraint: per-scan std normalization makes amplitude non-comparable across scans). No full comparison rig is built — keep it lean.

## Tasks

| # | Task | Owner |
|---|------|-------|
| 1 | **Raw indexed HDF5 archive + manifest** — the one fast-to-explore container for every array and number; builds on the existing archive machinery, does not reinvent it. | [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md) |
| 2 | **The four metamer sets**, including the **scale-invariant cross loss** — within = Cobos MSE (units match); cross = the unit-normalized / correlation objective the cross scan requires (**Open Q13**), confirmed to converge and re-evoke. | [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md) + [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md) |
| 3 | **Per-cell MEIs** — one MEI per matched cell, each twin, arrays + panels. | [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md) |
| 4 | **Best-one metrics + exemplars + per-match difference** — the characterization layer (metamer = image correlation; MEI metric TBD; exemplar pre/post; per-cell MEI and metamer differences). | [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md) |
| 5 | **Code + notebook handoff bundle** — the package plus a Jupyter notebook that loads a twin, runs it on an image, and browses a cell's MEI and metamers **without our pipeline**. | [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), science-checked by [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md) |
| 6 | **Rewrite `deliverable.md` + spec Part 9 / metrics** — bring both contracts to the lean handoff shape (characterization, not comparison). | [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md) |
| 7 | **Catalogue + archive manifest** — the branch-library record of what shipped and how it is indexed. | [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md) |

## The gate — openable without our pipeline

The handoff is verified by a **clean-room open**: in an environment that does **not** import our pipeline package, load the HDF5 and run the notebook — load a twin and run it on an image, browse a matched cell's MEI beside its readout-μ and the raw stimulus, read a metamer set with its re-evoke correlation. If it opens and explores standalone, the deliverable is real; if it needs our code to be read, it is not done. The archive is raw and indexed; the manifest is the map.

## Review

Succeeds when: the four twins, one MEI per matched cell, and the four metamer sets (each a raw per-target-image array with its re-evoke correlation) all sit in one indexed HDF5 archive; the lean characterization layer (best-one metrics, exemplars, per-match differences) is computed on it; both contracts read as the handoff, not the comparison; and Erin and Jake can open the whole thing from the notebook without our pipeline. The spine holds — generate the raw instruments, hand them over.

## Outcome

*To be recorded as the work reports — the archive contents and size, the resolved Q13 cross loss, the notebook, and the clean-room open result.*
