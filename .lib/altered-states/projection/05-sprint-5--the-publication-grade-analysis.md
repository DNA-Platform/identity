# Sprint 5 — The publication-grade analysis (from scratch)

- **author:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

**Status: PLANNED.** A from-scratch, best-in-class restart of the V1 / DOI digital-twin work as a real, modular **analysis** — not a dated experiment. Sprint 4 proved the pipeline *runs*; the catalogue then pinned, step by step, the gap between what we did and what is publication-worthy ([the from-the-ground-up report](../../reports/from-the-ground-up--the-publication-grade-analysis.md), [The Build ch 10](../the-build/10-the-digital-twin-recipe.md) / [ch 11 — MEI](../the-build/11-how-we-make-a-publication-form-mei.md) / [ch 12 — twin](../the-build/12-how-we-make-a-publication-grade-twin.md), [the analysis plan](../the-altered-cortex/03-the-analysis-plan.md)). This sprint *builds that*, **exactly as the relevant papers do it**, using the framework code wherever it exists. **Compute time is not a constraint** — ten hours to run is fine; nothing is stripped to save time, because a stripped version isn't comparable to the literature, and not-comparable isn't publishable.

## The discipline, on top of everything

1. **Canonical at every step.** Each step is done the field's way, not a transferred or stripped variant. The trap we caught twice — MEI-as-reconstruction, single-trial-as-correlation-to-average — was always *comparing things that weren't the same kind of thing*. So: **confirm the canonical definition before reading any difference as a deficiency.**
2. **Framework-maximal.** Each module is *mostly* `sensorium` / `neuralpredictors` / `mei` / `nnvision`, wrapped thin. We write glue and the one op the packages genuinely lack — nothing else.
3. **A twin that fits is not a mechanism.** Nulls before interpretation; the behavioural confound (~97 % decodable from behaviour alone) regressed out before any pre/post claim.

## The final audit — the last check (passed, with four refinements)

Before locking the plan, the whole spec went out for a point-by-point audit against the canonical Reimer/Tolias 2-photon-calcium corpus, verified against the actual `nnvision` / `mei` / `neuralpredictors` / `sensorium` source and Franke 2022 methods (filed in [Nancy's chapter 07](../../../.claude/library/..teamsmanship/..team/nancy/thinking/07-the-full-pipeline-audit.md)). **Verdict: the spec is canonical to the constant** on normalization, the twin, and the MEI gradient recipe, and **Arm A (behaviour + shifter + fixed-state MEIs) is a clean match to Franke 2022**. Four things changed before committing, tagged `final-audit §N` at each phase:

1. **Metric (§5):** the published-comparable metric is **FEVE** (`get_fev`), not our corr-to-average ÷ ceiling, which is **Schoppe-2016 CC_norm** — report both, name them honestly, never call CC_norm "the Sensorium metric."
2. **Warm-start (§4):** post trained **cold** is the primary model; warm-start demoted to a robustness check (it biases the change-detection toward baseline).
3. **MEI constraint (§6):** `PNormConstraintAndClip p=2` is **our** contrast-constraint implementation (Walker 2019 / Franke 2022 prose), not the literal `walker_postup` (bare `ClipRange`) — documented as such.
4. **Temporal-drift null (§9):** added as the highest-priority DOI control — the pre/post effect must exceed a within-scan, no-drug "change."

Plus: the **gain headline** (§2) is promoted from caveat to primary result, the **reconstruction** (§7) is demoted to exploratory (off-lineage), and the **fixed-state MEIs** adopt Franke's 3rd/97th-percentile convention.

## The two arms — behaviour in, behaviour out

The whole pipeline runs **twice**, and the contrast between the runs is itself a result (Doug). **Arm A — behaviour-in**: behaviour and eye position as inputs with a shifter (Phases 1 / 3 as written), so MEIs and reconstructions can be synthesized at a **held-fixed** behavioural state — stimulus tuning separated from state modulation. **Arm B — behaviour-out**: the same [core and trainer](../the-build/12-how-we-make-a-publication-grade-twin.md) with **no** behaviour and **no** shifter — stimulus → response, marginalized over state. Phases 1 · 3 · 4 · 5 and the H-tests each produce **both arms** — it doubles the networks, the computed images, and the figures. Phase 6 gains a **cross-arm contrast**: a pre/post DOI difference that survives in Arm B but **collapses** when state is held fixed in Arm A is the behavioural-state contribution, made visible. The final audit settled the open question this hedged: the published twins **do** take behaviour + a pupil-position shifter and **do** synthesize MEIs at a fixed state (Franke 2022), so Arm A is the canonical arm and Arm B is the controlled comparison. The arms differ in behaviour-as-**input**; they do **not** replace Phase 6's cross-condition confound regression, which both arms still pass.

## Structure — `src/analysis/`, modular

Real boundaries, each module a contract (takes / returns / durable), each rerunnable alone: **`data`** · **`model`** · **`validation`** · **`synthesis`** · **`figures`** · **`hypotheses`** · **`pipeline`** (thin orchestration).

## Phases — specific, assignable tasks

Owner in **bold** per task. Every value is the catalogued spec; nothing is verified until the run produces it.

### Phase 0 — Scaffold `src/analysis/` · **Adam** + Cathy (contracts)
- [ ] Module skeleton `data/ model/ validation/ synthesis/ figures/ hypotheses/ pipeline/`, each with a stated contract (takes / returns / what's durable).
- [ ] Smoke-confirm `sensorium` · `neuralpredictors` · `mei` · `nnvision` import and compose (the `verbose` env shim is already in `src/library/model/NOTES.md`).

### Phase 1 — `data/` · **Adam**
- [ ] `sensorium.datasets.static_loaders` with **`include_behavior=True`** and **`include_eye_position=True`** (running, pupil, pupil-derivative as inputs; feeds the shifter). Scan paths from the registry, same tiers, `batch_size=128`.
- [ ] **State the response normalization as a step (not an assumption).** Responses are per-neuron std-normalized — each neuron ÷ its own per-scan response s.d. (`static_loaders(normalize=True)`; the shipped `meta/statistics/responses/all/{mean,std}`, exposed by [`load_scan.py`](../../../src/library/io/load_scan.py)'s `.statistics()`; [Datasets ch 2](../datasets/02-the-static-scan-format.md)). Confirmed canonical (`neuralpredictors NeuroNormalizer`: responses ÷ std, **no mean subtraction**; behaviour ÷ std; eye-position z-scored — final-audit §2). This removes a per-neuron **gain scalar** — the early central finding ([Datasets ch 5](../datasets/05-caveats.md)) — so any amplitude/gain claim is made on **raw** or **scale-invariant** data, and each H-test (Phase 6) declares **which space** it is in.
- [ ] Per-neuron **noise ceiling** from the repeated test images (split-half reliability), computed once and **cached** — the denominator for Phase 2.
- [ ] Matched cells (749) via `match_cells`, for the cross-condition tests.

### Phase 2 — `validation/` — the free measurement, **FIRST** · **Nancy**
- [ ] **The published-comparable metric is FEVE, not our CC_norm — name it honestly** (final-audit §5). The Sensorium/Lurz tables report **FEVE** via `sensorium/utility/scores.py::get_fev` (fraction of explainable variance explained, `fev_threshold=0.15` to drop unreliable neurons) with `get_signal_correlations` (correlation-to-average) — run these as-is for the number that lines up with the literature. Our "corr-to-average ÷ per-neuron noise ceiling" is **Schoppe-2016 CC_norm** — legitimate, report it too, but **cite Schoppe et al. 2016 and never call it "the Sensorium metric"**; it will not match published tables number-for-number.
- [ ] Run both on the **existing Sprint-4 twin** (no retrain) beside the single-trial 0.26 — the apples-to-apples figures vs the published 0.61.
- [ ] **The gain headline** (final-audit §2). Per-neuron std-normalization divides out exactly the multiplicative response-gain that 5-HT2A / arousal produces (Reimer 2014, Franke 2022) — so every normalized "encoding change" is **gain-blind by construction**. Promote the **raw per-neuron pre/post std-ratio** (the ratio of the two shipped `responses/std` vectors) to a **primary reported result**, in raw space — that is where the drug/arousal gain lives, and normalization throws it away everywhere else.
- [ ] **Smoke-test the noise-ceiling / FEVE denominator** (Queenie): the cached value must match a fresh recompute on a small sample. It is the denominator of *every* normalized number — stale or mis-keyed means everything is silently wrong, so a verified denominator is a hard requirement, not a convenience.

### Phase 3 — `model/` — the canonical ensemble twin · **Adam** (science: **Nancy**)
- [ ] Core + trainer **unchanged** — `stacked_core_full_gauss_readout`, [ch 10](../the-build/10-the-digital-twin-recipe.md) config verbatim — but **`shifter=True`**. (All confirmed canonical against Lurz 2021 / Franke 2022 — final-audit §4.)
- [ ] Train **5 seeds** with `standard_trainer`, each **early-stopped on validation correlation** (not the `max_iter`=200 wall); wrap in **`mei.modules.EnsembleModel`**; all downstream runs on the ensemble.
- [ ] **Aligned pre/post — post trained COLD as the primary model** (final-audit §4). Warm-starting post from the pre core is *our* invention, in no canonical paper, and for a change-detection study it **biases the post twin toward pre-drug features and suppresses the very effect we test for**. So: the independent cold-seeded post ensemble is the **primary**; the warm-start is kept only as a **robustness check** — a difference that appears *only* warm-started is suspect, one that survives cold init is real. Durable: 5 checkpoints + the ensemble handle, per condition, both initializations.
- [ ] **Both arms** (behaviour-in with shifter; behaviour-out, no behaviour and no shifter) — same core, trainer, and 5-seed / early-stop / cold-primary discipline. Durable: both ensembles, per condition, so synthesis and figures run each arm.
- [ ] Re-validate (Phase 2 metric) on the ensemble.

### Phase 4 — `synthesis/` · **Adam** wires, **Nancy** tunes
- [ ] **MEI / most-exciting-image** on the ensemble. The gradient recipe and blur are **verbatim canonical** (final-audit §6, read against `nnvision/mei/regularizers.py`): post-update **`GaussianBlur` σ 1.5 → 0.01** (`decay_factor=(1.5−0.01)/(1−1000)`, truncate 4, reflect pad) = `walker_postup`; gradient **`FourierSmoothing(0.04)`** + **`DivideByMeanOfAbsolute`** + **`MultiplyBy(1/850 → 1/20400)`** = `walker_gradient`; `RandomNormal` (`torch.randn`, unscaled), SGD, **1000 iters**, **no** TV, **no** LpNorm (those are DiCarlo-2019, correctly excluded). **The one divergence — name it:** `walker_postup` is literally bare `ClipRange`; our **`PNormConstraintAndClip` p=2** (pixel clip `lo=−img_mean/img_std`, `hi=(255−img_mean)/img_std`) adds an explicit energy budget. Keep it — it is closer to Walker-2019 / Franke-2022's *stated* contrast-constrained method than bare clip — but **document it as our contrast-constraint implementation, not "the nnvision Walker ops,"** and **verify the clip rarely fires**: if it fires often the contrast-constrained claim breaks and MEIs aren't comparable across neurons. *CPU fallback: constant gradient blur σ=1 — acceptable, noisier.*
- [ ] **Fixed behavioural state — Franke's convention** (final-audit §2c, Arm A). Synthesize a **separate MEI per state** — **quiet = 3rd percentile, active = 97th percentile** of locomotion + pupil — at the percentiles of our **pre**-session distribution (not post), and report both; this is the published precedent and gives a comparable state axis. **Clamp the shifter's eye-position input to the same value (centered / zero) in both conditions**, so a pre/post MEI difference reflects tuning, not a different RF shift from DOI's pupil change.
- [ ] **Reconstruction — EXPLORATORY, off-lineage** (final-audit §7). Blank → gradient descent to the recorded response, gradient `GaussianBlur` **σ=2.5**, 1000 steps. But gradient-inversion to a population response is **not** a canonical sinzlab analysis (their population side is MDS / energy-guided diffusion, Ding 2023), so it carries **no borrowed validation**: validate it **on its own terms** (reconstruct held-out repeated test images, check recovery against the true stimulus) and let **no H1 DOI claim rest on it**.

### Phase 5 — `figures/` · **Gabby**
- [ ] MEI grid + matched-cell MEI: `cmap='gray'`, **fixed range `vmin=lo, vmax=hi`, shared-panel, no per-image rescale** — **honest only if the §4 contrast constraint truly equalizes energy across MEIs** (final-audit §8); verify the per-MEI final norms are tight before trusting the shared scale, else you are comparing un-equalized contrasts. Captions frame MEIs as **non-Gabor** (the smooth Gabor is the LN-RF control).
- [ ] Reconstruction gallery: **per-image** min/max + **bicubic** upsample 36×64 → 144×256 (the *opposite* rule — must not merge with the MEI rule).
- [ ] Verify each panel against the published figures.

### Phase 6 — `hypotheses/` — the DOI analysis · **Nancy**; nulls + decision rules **Queenie**

*Where "professional for this context" is won or lost — one animal, one session, a vasoactive drug, calcium imaging, behaviour that decodes the condition at 97%. The controls below are requirements, not options. Surfaced by the team's post-thought review and the final audit as places we were about to be methodologically inaccurate for **this** context.*

- [ ] **The behavioural confound — the precondition.** Behaviour as a *model input* (Phase 3) is **not** the same as controlling the cross-condition confound. **Match** the behavioural distribution across pre/post **and regress it out** — then **verify**: behaviour must *no longer* decode pre-vs-post above chance from the residual. If it still decodes, H1–H6 are not interpretable. (Conflating these two roles of behaviour was our error.)
- [ ] **The measurement confound — context-specific.** DOI is **vasoactive** and we read **calcium fluorescence** on a **volumetric, z-drifting** session, so a "change in the code" can be the drug changing the *measurement*. Rule it out *before* H1 with a non-neural / vascular / z-position proxy control, so encoding changes aren't imaging artifacts.
- [ ] **The temporal-drift null — highest-priority new control** (final-audit §9.1). Two scans ~45 min apart in one volumetric session differ with **no drug** (bleaching, z-drift, slow state drift), so a pre/post difference is uninterpretable without the no-drug expectation. Split **each** scan into halves (or early/late thirds) and measure the within-scan, no-drug "change" through the **identical pipeline**; the DOI effect must **exceed** that null. This does more than the vascular check.
- [ ] **Matched observable behaviour ≠ matched state** (final-audit §9.2). DOI may change the pupil↔arousal mapping itself (Reimer 2014), so matching the behaviour *marginals* pre/post does not guarantee matched cortical state. State it as **matched observable behaviour**, and add a **neural state covariate** (population coupling / pairwise-correlation structure) to the residual-decoding check, not behaviour alone.
- [ ] **Cell-matching QC** (final-audit §9.4). 749 cells matched across a drifting volumetric session — mismatches manufacture spurious encoding changes. Add a per-cell **matching-quality gate** (footprint correlation / registration residual) and show every effect is **stable on the top-confidence matched subset**.
- [ ] **The optical confound (Nancy, beyond the audit).** DOI dilates the pupil → more retinal illumination and altered effective contrast — a change **upstream of cortex** that a tuning analysis would misread as an encoding change. Bound it: test whether any pre/post MEI / tuning shift co-varies with the pupil-area change, and normalize for effective contrast where possible.
- [ ] **Pre-register the decision rule.** Fix each test's **rejection criterion** (percentile / effect size / threshold) *in advance, written down before looking* — otherwise the null comparison is post-hoc.
- [ ] On aligned pre/post ensembles, each null **before** its claim: **H1** tuning vs split-half · **H2** reliability vs controls · **H3** geometry vs trial-shuffle · **H4** transfer + structured-residual · **H5** residual vs trial-shuffle *and* baseline-residual nulls · **H6** invert residual only if H5 · **H7** retire if it tracks time/state.
- [ ] **n = 1 boundary.** Every claim bounded to *this animal, this session* — "the pipeline works and this V1 changed," never "mice on DOI." With one animal/session there is **no biological variance — the 5-seed ensemble spread (and the split-half null) is the only error bar** (final-audit §9.5); never report a pre/post difference that falls within seed spread. The population claim is a separate, heavier study, and must be named as out of scope.

### Phase 7 — Writeup & catalogue · **Libby**; all
- [ ] Report + `.lib` record; tag each result **[MEASUREMENT] / [MODEL] / [SCIENCE]**.

### Phase 8 — The dataset archive · **Libby**

The repo is the backup (Doug: large files go in), so the analysis ships a **self-contained, Python-native dataset** — the durable record of everything the sprint produces.
- [ ] **Survey + install the format.** Pick the Python-canonical container — `h5py` / HDF5 or `zarr` for the arrays, `safetensors` for the weights — install the libs, and write the choice down with its reason. One decision, made once.
- [ ] **Store everything:** every network (both conditions × **both arms**, cold + warm-start — the full set of ensembles and seed checkpoints), every computed image (MEIs at both states, reconstructions), and the generating code alongside them.
- [ ] **A replication index** — for each stored file, how it was made (module, config, seed, inputs), so any artifact can be regenerated from the code carried in the archive.
- [ ] **A README that is a data dictionary** — what each file *is* and how to reload it. The **how / why** stays in the `.lib`; the README is the archive's own manifest, not codebase documentation.

## Who's on it

**Adam** — `data`, the ensemble+shifter `model`, the MEI synthesis wiring. **Nancy** — the metric (FEVE + labeled CC_norm), the gain headline, MEI display + framing (with Gabby), the H-tests, the cross-arm contrast. **Cathy** — module contracts + the checkpoint port. **Gabby** — figures. **Queenie** — nulls + smoke tests + the temporal-drift null. **Libby** — catalogue, one spine across code/catalogue/sprint, **plus the dataset archive (Phase 8)**. **Arthur** — structure. **Doug drives.** Every build phase (1 · 3 · 4 · 5) and the H-tests run in **both arms** — behaviour-in and behaviour-out — so the data, model, synthesis, figure, and test work each doubles.

## Review

Succeeds when the analysis is **modular, rerunnable, framework-maximal**, the twin validates at the **FEVE bar** (CC_norm reported but labeled), the cold-primary post twin's pre/post differences exceed the temporal-drift null, the raw per-neuron gain ratio is reported alongside the gain-blind normalized tests, the MEIs (at fixed quiet/active states) and reconstructions match the published look panel-against-panel, H1–H6 each carry their control, **both arms — behaviour-in and behaviour-out — are built and their contrast reported**, and the **dataset archive regenerates every artifact from its own code** — every claim canonical and comparable to the literature. The instrument is built once; the science is what it licenses, reported at the level the evidence reaches.
