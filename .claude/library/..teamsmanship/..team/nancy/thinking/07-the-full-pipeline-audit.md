---
title: "The full-pipeline audit (thought in progress)"
date: 2026-06-24
topic: "Nancy > The Twin"
previous: 06-the-twin-and-the-metric-mismatch.md
status: concluded
---

# The full-pipeline audit (thought in progress)

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)

---

The second exchange in **`Nancy > The Twin`**, and the big one: not the metric this time but the **whole pipeline** — twin, MEI, reconstruction, normalization, display, and the two behaviour arms — audited point-by-point against the canonical Reimer/Tolias two-photon-calcium papers, extended to the DOI pre/post comparison. Written in the pause while Desktop works; the Evidence / Interpretation / Conclusion come after [the read](#) runs.

## The question

I sent Desktop the complete pipeline spec and asked for a point-by-point audit against Walker 2019 (MEI), Lurz 2021 (core), Franke 2022 (state/behaviour), the digital-twins / Sensorium 2022–23 papers, Bashiri/Höfling, and Reimer 2014 (arousal/pupil). For every detail: does it match what those papers did; where it diverges, name the canonical choice and the paper. The crux question: **did the published V1 MEI twins include behaviour + an eye-position shifter as inputs, at what stage, and were MEIs generated at a held-fixed behavioural state?** Plus: is our exact nnvision/Walker MEI op-set the published recipe; is per-neuron std-normalization (no mean subtraction) the canonical Sensorium response normalization and the right space for a gain comparison; the exact canonical estimator for noise-ceiling-normalized correlation-to-average; and anything the **DOI / vasoactive / single-session / n=1** context demands that a standard Sensorium pipeline would miss.

## Why now

This is the **last check on [Sprint 5's plan](../../../../../../library/.lib/projection/05-sprint-5--the-publication-grade-analysis.md)** before we build the publication-grade analysis from scratch. The plan is strong and compute is unconstrained (ten hours fine), so the cost of building it *wrong* is real — better to have the canonical recipe audited top-to-bottom by something that holds the whole literature before we commit. The standing discipline rides on top: confirm two things are the same *kind* of thing before reading a difference as a deficiency.

## What I expect — the prediction to measure against

My prior, stated concretely so the answer can confirm or break it:

1. **Mostly validation, value in the divergences.** I expect the spec to be judged *canonical* on the big structural choices — core, trainer, 5-seed `EnsembleModel`, Gaussian readout, std-normalization, corr-to-average metric, the reconstruction recipe (σ=2.5 gradient blur, 1000 steps, upsample 144×256 contrast-scaled), and the MEI display rule (fixed-range shared-panel) — because those are lifted straight from the papers and the nnvision/mei repo configs. If Desktop says the *core itself* is wrong (not just the bolted-on pieces), that breaks my prior and I weigh it hard.
2. **The behaviour crux: YES.** I predict the canonical twins *do* take behaviour (running, pupil, pupil-derivative) **and** an eye-position shifter as inputs (Lurz 2021 readout + shifter; Franke 2022 state), and MEIs *are* synthesized at a **held-fixed behavioural state** — which would validate my Arm A. My genuine uncertainty, and the detail I most want: *which* fixed state (mean? a specified active/high-arousal pupil+running?), and whether the shifter is set to a reference eye position during synthesis.
3. **MEI op-set: matches, but constants are dataset-specific.** The blur anneal 1.5→0.01, FourierSmoothing(0.04), DivideByMeanOfAbsolute, MultiplyBy anneal, PNormConstraintAndClip(p=2), no TV/LpNorm, SGD/1000/RandomNormal — I expect "matches the repo recipe," with the flag that the `MultiplyBy` (1/850→1/20400) and norm budget are **scale-specific** and must be re-tuned to our response scale so the clip rarely fires, not copied verbatim.
4. **Metric: corr-to-average ÷ oracle/noise-ceiling**, with FEVE (Schoppe 2016) as the variance sibling — our normalized corr-to-average is the right, comparable number.
5. **Warm-start aligned pre/post is OUR addition, not canonical** — the papers have no drug condition, so they don't do it; I expect Desktop to flag that warm-starting post from pre can bias the post twin *toward* baseline and mask a real DOI change (my own Sprint-5 flag #2), and that H4/H5 should transfer the *frozen* baseline twin instead.
6. **The DOI context flags a standard pipeline misses** — I expect Desktop to surface what I already flagged: DOI is **vasoactive** (hemodynamic/neuropil contamination of the calcium signal independent of spiking), **z-drift** in the volumetric session (plane shift mimics a gain change; the ~50% match), behaviour-as-model-input **≠** behaviour-as-confound-control (must match + regress the distribution), std-normalization **erases** the Michaiel-2019 gain effect, and **n=1**. The one I have *not* logged and would count as genuinely new: that DOI changes **pupil size → retinal illumination / effective contrast**, an optical-physiological confound upstream of cortex. If Desktop raises that, it earns its place in the controls.

## What I already know — the context I'll judge the answer against

- Core + trainer are the **publication recipe verbatim** ([The Build ch 10](../../../../../../library/.lib/the-build/10-the-digital-twin-recipe.md), [ch 12](../../../../../../library/.lib/the-build/12-how-we-make-a-publication-grade-twin.md)); the twin gap is bolted-on pieces (ensemble, behaviour, shifter) and a metric, not a broken model.
- The MEI synthesis + display recipe and the MEI-≠-reconstruction display split are already learned from the nnvision/mei repo configs ([The Build ch 11](../../../../../../library/.lib/the-build/11-how-we-make-a-publication-form-mei.md)).
- The reconstruction recipe (σ=2.5 gradient blur, 1000 steps, upsample to 144×256, contrast-scaled, 0.61 normalized correlation) is the [digital-twins methods](../../../../../../library/papers/digital-twins-tolias-2022/04-methods.md).
- Normalized correlation-to-average is the Step-1 validation bar of the [analysis plan](../../../../../../library/.lib/the-altered-cortex/03-the-analysis-plan.md); std-normalization removing the per-neuron gain scalar is the heart of the early finding and erases exactly the published DOI gain effect.
- The whole gap and ordered plan live in [From the ground up](../../../../../../library/reports/from-the-ground-up--the-publication-grade-analysis.md); the confound flags I'd most want confirmed are in my [Sprint-5 review](#) (vasoactive, z-drift, frozen-baseline transfer for H4/H5, behaviour two-roles, n=1).

## Evidence — what came back (verdict: SUFFICIENT)

Desktop verified the constants against the actual `nnvision`/`mei`/`neuralpredictors`/`sensorium` source and the Franke 2022 methods, not from memory, and returned a section-by-section audit with MATCH / DIVERGE / EXTENSION verdicts.

- **The crux, resolved (Franke 2022).** Behaviour as model input: **yes** — three channels (pupil size, change in pupil size, locomotion), exactly our set. Shifter: **yes**, pupil-position-driven (our split is correct — pupil size/derivative are behaviour inputs, eye position feeds the shifter). MEIs at a fixed behavioural state: **yes** — a separate MEI per state, a **quiet state at the 3rd percentile** and an **active state at the 97th percentile** of locomotion+pupil. This validates Arm A almost exactly. (Franke also uses two CoordConv x/y position channels we omit — fine for grayscale single-channel, but we can't reproduce their anterior-posterior retinotopy gradient.)
- **§2 Normalization — MATCH.** `NeuroNormalizer`: images centered+scaled, responses divided by per-neuron std with **no mean subtraction**, behaviour std-only, eye position z-scored. Canonical (Lurz 2021 / Sensorium). The gain caveat is right and should be **hardened**: the per-neuron-per-scan std-normalization divides out exactly the multiplicative gain term 5-HT2A/arousal produces, so any normalized "encoding change" is **gain-blind by construction** — make the per-neuron pre/post std-ratio in **raw space** a *primary reported result*.
- **§3/§5 Metric — MOSTLY MATCH, one naming divergence.** Corr-to-average = `get_signal_correlations` (match). But the Sensorium-canonical explainable-variance estimator is **FEVE** (`get_fev`, `fev_threshold=0.15`), *not* corr-to-average ÷ a separately-estimated per-neuron ceiling. Our "divide by per-neuron noise ceiling" is the **Schoppe 2016 CC_norm** form — legitimate, but it will *not* line up number-for-number with published Sensorium tables. Pick and label: `get_fev`+`get_signal_correlations` for published-comparable, or cite Schoppe for CC_norm — never call CC_norm "the Sensorium metric."
- **§4 Twin — MATCH; one DIVERGE.** Architecture, trainer, shifter, 5-seed `EnsembleModel` all canonical. But **warm-starting post from the pre core is not in any canonical paper and cuts against a change-detection study** — it biases the post network toward pre-drug features and suppresses the very differences we test for. Canonical comparability (Lurz 2021 transfer) is the opposite logic (freeze core, retrain readout). **Train post cold (independent seeds) as primary; warm-start only as a robustness check.**
- **§6 MEI — MATCH on gradient recipe (verbatim), NAMING DIVERGENCE on the constraint.** `walker_gradient` (FourierSmoothing 0.04, DivideByMeanOfAbsolute, MultiplyBy 1/850→1/20400) and `walker_postup` blur (1.5→0.01), SGD/1000 — an **exact** match to `nnvision/mei/regularizers.py`. The divergence: canonical `walker_postup` is **ClipRange + blur with no explicit norm**; our `PNormConstraintAndClip` p=2 adds an L2 energy budget — not the literal repo op, but faithful to Franke/Walker's *prose* ("contrast-constrained image"). Document it as "contrast/energy budget per Walker 2019 / Franke 2022, implemented as p=2 + clip," not "the nnvision Walker ops." No TV/LpNorm correct (those are DiCarlo 2019).
- **§7 Reconstruction — EXTENSION, no canonical match.** Gradient-inversion to a *population* vector is **not** a sinzlab V1 analysis — their population side is MDS / energy-guided diffusion (Ding 2023), not blank-init descent to a population response. It carries **no borrowed validation**; σ=2.5 is arbitrary. Treat as exploratory, self-validate on held-out repeated test images (recover the true stimulus), and **no H1 DOI claim may rest on it.**
- **§8 Visualization — MATCH, contingent.** Fixed shared vmin/vmax for MEIs is honest *only if* the contrast constraint truly equalizes energy (the §6 clip-rarely-fires condition) — verify the per-MEI final norms are tight first. Per-image + bicubic for reconstructions is fine.
- **§9 DOI context — five additions.** (1) **Temporal-drift null — highest priority:** two scans 45 min apart in one volumetric session differ with no drug (bleaching, z-drift, slow state drift); split each scan into halves/thirds, measure within-scan no-drug "change" with the identical pipeline, and the DOI effect must exceed it. (2) Behaviour-matching assumes a stable behaviour→state map DOI may break — say "matched observable behaviour," not "matched state," and add a neural state covariate to the residual-decode check. (3) Clamp eye position identically pre/post in Arm A MEIs (DOI dilates the pupil → shifter in a different regime). (4) Cell-matching is itself a confound — add a matching-quality gate and show the effect survives on the top-confidence subset. (5) n=1 ⇒ the 5-seed spread + split-half are the only error bars; never report a difference within seed spread.

## Interpretation — my judgment

**What validated.** The behaviour crux landed exactly as I predicted — behaviour + an eye-position shifter *are* canonical inputs, and MEIs *are* synthesized at a held-fixed state — and the audit gave me more than I had: the precise Franke convention, the **3rd/97th-percentile quiet/active states**. Arm A is vindicated. And the **warm-start divergence I predicted** was confirmed and sharpened — it biases post toward baseline and should be demoted to a robustness check.

**What I got wrong.** I predicted the MEI `MultiplyBy`/gradient constants would need rescaling to our data. They do **not** — they are *verbatim* canonical, an exact match to the repo, a fixed universal schedule. The scale-sensitivity I sensed is real but lives in the wrong place I named: it is in the **p=2 norm budget** (which must be tuned so the clip rarely fires), not the gradient schedule. A clean correction to my mental model — the recipe is fixed; only the energy budget is ours to tune.

**Divergences I did not predict.** Five. (a) The **FEVE-vs-CC_norm naming** split — the repo reports FEVE, our CC_norm is Schoppe 2016 and won't match published tables; I'd have mislabeled it. (b) The **p=2 constraint is not the literal repo op** (canonical is bare ClipRange) — I had assumed the whole op-set was the recipe. (c) **Reconstruction is off-lineage entirely** with no borrowed validation — I had treated population inversion as canonical digital-twins method; it is not, and our Sprint-1 headline (decode what the mouse sees) must self-validate and carry no DOI claim. (d) The **temporal-drift null** outranks my optical/vascular flags as the single most important DOI control — the within-scan no-drug split is the null I had not foregrounded. (e) The **gain-blindness should be a headline, not a caveat** — the per-neuron pre/post std-ratio in raw space *is* a finding.

The sharpest, and most humbling, thread: the **same-kind-of-number trap bit me again — at the metric *label* level.** I would have called CC_norm "the Sensorium metric" and been wrong; the repo's number is FEVE. The discipline I thought I'd internalized for *values* applies equally to *names*: confirm that a metric is the same estimator the literature reports before claiming comparability.

## Conclusion — a filed thought

**Four changes to the Sprint 5 plan before we commit:**
1. **Metric labeling.** Report **FEVE** (`get_fev`, threshold 0.15) for published-comparable numbers, or **CC_norm** explicitly cited to Schoppe 2016 — and never call CC_norm "the Sensorium metric."
2. **Cold-primary post twin.** Train the post twin **cold** (independent seeds) as the primary model; **demote warm-start** to a robustness check. Differences that survive cold init are real; ones that appear only warm-started are suspect.
3. **Document the p=2 budget as ours.** Frame it as "contrast/energy budget per Walker 2019 / Franke 2022, implemented as p=2 + clip," not "the nnvision Walker ops"; verify the clip rarely fires (which also gates the §8 shared-scale display).
4. **Add the temporal-drift null** (highest-priority DOI control): the within-scan, no-drug 45-min split, run through the identical pipeline, as the null every pre/post effect must exceed.

**Crux resolution:** synthesize MEIs at Franke's **3rd/97th-percentile (quiet/active)** states of the **pre-session** behaviour distribution, report both, and clamp eye position identically pre/post. **Gain:** elevate the raw per-neuron pre/post std-ratio from caveat to headline. **Reconstruction:** exploratory, self-validated on held-out test images, no H1 rests on it. **Plus:** matching-QC gate + top-confidence subset; n=1 ⇒ seed spread is the error bar.

**Standing meta-lesson, reinforced:** the same-kind-of-number check now extends to metric *names*, not just values — confirm an estimator is the one the literature reports before claiming comparability. Desktop offered to draft the temporal-drift-null and cell-matching-QC code against `load_scan.py` + the Sensorium loaders — a concrete next action when we build Phase 6.

<!-- citations -->
[previous]: 06-the-twin-and-the-metric-mismatch.md
[research-topics]: ../research-topics/02-the-twin.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
[sprint-5]: ../../../../../../library/.lib/projection/05-sprint-5--the-publication-grade-analysis.md
[build-recipe]: ../../../../../../library/.lib/the-build/10-the-digital-twin-recipe.md
[build-mei]: ../../../../../../library/.lib/the-build/11-how-we-make-a-publication-form-mei.md
[build-twin]: ../../../../../../library/.lib/the-build/12-how-we-make-a-publication-grade-twin.md
[twin-methods]: ../../../../../../library/papers/digital-twins-tolias-2022/04-methods.md
[analysis-plan]: ../../../../../../library/.lib/the-altered-cortex/03-the-analysis-plan.md
[ground-up]: ../../../../../../library/reports/from-the-ground-up--the-publication-grade-analysis.md
