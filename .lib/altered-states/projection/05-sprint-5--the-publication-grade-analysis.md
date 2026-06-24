# Sprint 5 — The publication-grade analysis (from scratch)

- **author:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

**Status: PLANNED.** A from-scratch, best-in-class restart of the V1 / DOI digital-twin work as a real, modular **analysis** — not a dated experiment. Sprint 4 proved the pipeline *runs*; the catalogue then pinned, step by step, the gap between what we did and what is publication-worthy ([the from-the-ground-up report](../../reports/from-the-ground-up--the-publication-grade-analysis.md), [The Build ch 10](../the-build/10-the-digital-twin-recipe.md) / [ch 11 — MEI](../the-build/11-how-we-make-a-publication-form-mei.md) / [ch 12 — twin](../the-build/12-how-we-make-a-publication-grade-twin.md), [the analysis plan](../the-altered-cortex/03-the-analysis-plan.md)). This sprint *builds that*, **exactly as the relevant papers do it**, using the framework code wherever it exists. **Compute time is not a constraint** — ten hours to run is fine; nothing is stripped to save time, because a stripped version isn't comparable to the literature, and not-comparable isn't publishable.

## The discipline, on top of everything

1. **Canonical at every step.** Each step is done the field's way, not a transferred or stripped variant. The trap we caught twice — MEI-as-reconstruction, single-trial-as-correlation-to-average — was always *comparing things that weren't the same kind of thing*. So: **confirm the canonical definition before reading any difference as a deficiency.**
2. **Framework-maximal.** Each module is *mostly* `sensorium` / `neuralpredictors` / `mei` / `nnvision`, wrapped thin. We write glue and the one op the packages genuinely lack — nothing else.
3. **A twin that fits is not a mechanism.** Nulls before interpretation; the behavioural confound (~97 % decodable from behaviour alone) regressed out before any pre/post claim.

## Structure — `src/analysis/`, modular

Real boundaries, each module a contract (takes / returns / durable), each rerunnable alone: **`data`** · **`model`** · **`validation`** · **`synthesis`** · **`figures`** · **`hypotheses`** · **`pipeline`** (thin orchestration).

## Phases — specific, assignable tasks

Owner in **bold** per task. Every value is the catalogued spec; nothing is verified until the run produces it.

### Phase 0 — Scaffold `src/analysis/` · **Adam** + Cathy (contracts)
- [ ] Module skeleton `data/ model/ validation/ synthesis/ figures/ hypotheses/ pipeline/`, each with a stated contract (takes / returns / what's durable).
- [ ] Smoke-confirm `sensorium` · `neuralpredictors` · `mei` · `nnvision` import and compose (the `verbose` env shim is already in `src/library/model/NOTES.md`).

### Phase 1 — `data/` · **Adam**
- [ ] `sensorium.datasets.static_loaders` with **`include_behavior=True`** and **`include_eye_position=True`** (running, pupil, pupil-derivative as inputs; feeds the shifter). Scan paths from the registry, same tiers, `batch_size=128`.
- [ ] **State the response normalization as a step (not an assumption).** Responses are per-neuron std-normalized — each neuron ÷ its own per-scan response s.d. (`static_loaders(normalize=True)`; the shipped `meta/statistics/responses/all/{mean,std}`, exposed by [`load_scan.py`](../../../src/library/io/load_scan.py)'s `.statistics()`; [Datasets ch 2](../datasets/02-the-static-scan-format.md)). This removes a per-neuron **gain scalar** — the early central finding ([Datasets ch 5](../datasets/05-caveats.md)) — so any amplitude/gain claim is made on **raw** or **scale-invariant** data, and each H-test (Phase 6) declares **which space** it is in.
- [ ] Per-neuron **noise ceiling** from the repeated test images (split-half reliability), computed once and **cached** — the denominator for Phase 2.
- [ ] Matched cells (749) via `match_cells`, for the cross-condition tests.

### Phase 2 — `validation/` — the free measurement, **FIRST** · **Nancy**
- [ ] Implement **noise-ceiling-normalized correlation-to-average**: per repeated test image, average the recorded response over its ~10 reps; correlate the twin's prediction to that average, per neuron; divide by the per-neuron noise ceiling.
- [ ] Run it on the **existing Sprint-4 twin** (no retrain) and report beside the single-trial 0.26 — the apples-to-apples number vs the published 0.61. *corr-to-average alone won't reach 0.61 (rides our lower ceiling); only the normalized form is comparable.*
- [ ] **Smoke-test the noise ceiling** (Queenie): the cached value must match a fresh recompute on a small sample. It is the denominator of *every* normalized number — stale or mis-keyed means everything is silently wrong, so a verified denominator is a hard requirement, not a convenience.

### Phase 3 — `model/` — the canonical ensemble twin · **Adam** (science: **Nancy**)
- [ ] Core + trainer **unchanged** — `stacked_core_full_gauss_readout`, [ch 10](../the-build/10-the-digital-twin-recipe.md) config verbatim — but **`shifter=True`**.
- [ ] Train **5 seeds** with `standard_trainer`, each **early-stopped on validation correlation** (not the `max_iter`=200 wall); wrap in **`mei.modules.EnsembleModel`**; all downstream runs on the ensemble.
- [ ] **Aligned pre/post**: post ensemble warm-started from the pre core. Durable: 5 checkpoints + the ensemble handle, per condition.
- [ ] Re-validate (Phase 2 metric) on the ensemble.

### Phase 4 — `synthesis/` · **Adam** wires, **Nancy** tunes
- [ ] **MEI / most-exciting-image** on the ensemble via the `mei` `method_config` with the `nnvision` Walker ops: post-update **`GaussianBlur` σ 1.5 → 0.01** (`decay_factor=(1.5−0.01)/(1−1000)`, truncate 4, reflect pad); gradient **`FourierSmoothing(0.04)`** + **`DivideByMeanOfAbsolute`** + **`MultiplyBy(1/850 → 1/20400)`**; **`PNormConstraintAndClip`** p=2, pixel clip `lo=−img_mean/img_std`, `hi=(255−img_mean)/img_std`, norm tuned so the clip rarely fires; `RandomNormal` (`torch.randn`, unscaled), SGD, **1000 iters**, **no** TV, **no** LpNorm. *CPU fallback: constant gradient blur σ=1 — acceptable, noisier.*
- [ ] **Reconstruction** on the ensemble: blank → gradient descent to the recorded response, gradient `GaussianBlur` **σ=2.5**, 1000 steps.

### Phase 5 — `figures/` · **Gabby**
- [ ] MEI grid + matched-cell MEI: `cmap='gray'`, **fixed range `vmin=lo, vmax=hi`, shared-panel, no per-image rescale**; captions frame MEIs as **non-Gabor** (the smooth Gabor is the LN-RF control).
- [ ] Reconstruction gallery: **per-image** min/max + **bicubic** upsample 36×64 → 144×256 (the *opposite* rule — must not merge with the MEI rule).
- [ ] Verify each panel against the published figures.

### Phase 6 — `hypotheses/` — the DOI analysis · **Nancy**; nulls + decision rules **Queenie**

*Where "professional for this context" is won or lost — one animal, one session, a vasoactive drug, calcium imaging, behaviour that decodes the condition at 97%. The controls below are requirements, not options. Surfaced by the team's post-thought review as places we were about to be methodologically inaccurate for **this** context.*

- [ ] **The behavioural confound — the precondition.** Behaviour as a *model input* (Phase 3) is **not** the same as controlling the cross-condition confound. **Match** the behavioural distribution across pre/post **and regress it out** — then **verify**: behaviour must *no longer* decode pre-vs-post above chance from the residual. If it still decodes, H1–H6 are not interpretable. (Conflating these two roles of behaviour was our error.)
- [ ] **The measurement confound — context-specific.** DOI is **vasoactive** and we read **calcium fluorescence** on a **volumetric, z-drifting** session, so a "change in the code" can be the drug changing the *measurement*. Rule it out *before* H1 with a non-neural / vascular / z-position proxy control, so encoding changes aren't imaging artifacts.
- [ ] **Pre-register the decision rule.** Fix each test's **rejection criterion** (percentile / effect size / threshold) *in advance, written down before looking* — otherwise the null comparison is post-hoc.
- [ ] On aligned pre/post ensembles, each null **before** its claim: **H1** tuning vs split-half · **H2** reliability vs controls · **H3** geometry vs trial-shuffle · **H4** transfer + structured-residual · **H5** residual vs trial-shuffle *and* baseline-residual nulls · **H6** invert residual only if H5 · **H7** retire if it tracks time/state.
- [ ] **n = 1 boundary.** Every claim bounded to *this animal, this session* — "the pipeline works and this V1 changed," never "mice on DOI." The population claim is a separate, heavier study, and must be named as out of scope.

### Phase 7 — Writeup & catalogue · **Libby**; all
- [ ] Report + `.lib` record; tag each result **[MEASUREMENT] / [MODEL] / [SCIENCE]**.

## Who's on it

**Adam** — `data`, the ensemble+shifter `model`, the MEI synthesis wiring. **Nancy** — the normalized metric, MEI display + framing (with Gabby), the H-tests. **Cathy** — module contracts + the checkpoint port. **Gabby** — figures. **Queenie** — nulls + smoke tests. **Libby** — catalogue, one spine across code/catalogue/sprint. **Arthur** — structure. **Doug drives.**

## Review

Succeeds when the analysis is **modular, rerunnable, framework-maximal**, the twin validates at the noise-ceiling-normalized bar, the MEIs and reconstructions match the published look panel-against-panel, and H1–H6 each carry their control — every claim canonical and comparable to the literature. The instrument is built once; the science is what it licenses, reported at the level the evidence reaches.
