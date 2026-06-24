---
title: "Sprint 5 execution invariants — Phases 2–4"
date: 2026-06-24
---

# Sprint 5 execution invariants — the do-this checklist (Phases 2–4)

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)

---

Memory against compaction. The *why* is [chapter 07, the full-pipeline audit](../thinking/07-the-full-pipeline-audit.md); this is the **do-this** for the run. Scannable on purpose.

## Execution invariants (must not forget)

- **Post twin = COLD primary.** Train post on independent seeds. **Warm-start is demoted to a robustness check only** — it biases post toward pre and suppresses the DOI differences we test for. Effect must survive cold init to count.
- **Metric: FEVE is the published number; CC_norm is ours.** Report `sensorium...get_fev` (FEVE, `fev_threshold=0.15`) as the published-comparable metric **and** `get_signal_correlations` (corr-to-average). Our noise-ceiling-normalized form is **Schoppe-2016 CC_norm** — label it that, **never call it "the Sensorium metric."**
- **MEI gradient + blur = VERBATIM canonical — do not rescale.** `walker_gradient` = FourierSmoothing(0.04) → DivideByMeanOfAbsolute → MultiplyBy(1/850→1/20400); `walker_postup` blur 1.5→0.01; SGD, 1000 iters. Exact `nnvision` match. The constants are universal, not dataset-specific.
- **The p=2 constraint is OURS.** `PNormConstraintAndClip(p=2)` is *not* the literal repo op (canonical is bare ClipRange). Document it as **"contrast/energy budget per Walker 2019 / Franke 2022, implemented as p=2 + clip."** Tune the norm so the **clip rarely fires** — this is the one scale-sensitive knob, and it gates the shared-scale display (§ below).
- **Fixed-state MEIs at 3rd / 97th percentile of the PRE distribution.** Synthesize a quiet (3rd pct) and an active (97th pct) MEI per neuron, percentiles from the **pre** session (not post). **Clamp eye-position identically pre/post.** Report both states.
- **Raw per-neuron gain-ratio is a HEADLINE.** std-normalization is gain-blind by construction (it divides out the very 5-HT2A gain term). Report the per-neuron pre/post std ratio **in raw space** as a primary result, not a caveat.
- **Temporal-drift null runs FIRST, and every effect must clear it.** Within-scan, no-drug change (split each scan early/late halves or thirds, identical pipeline). The DOI pre/post effect must exceed this no-drug null. Highest-priority control.
- **Reconstruction = EXPLORATORY.** Population inversion is off-lineage (sinzlab does MDS / energy-guided diffusion, not blank-init descent to a population vector) → no borrowed validation. Self-validate on held-out repeated test images (recover the true stimulus). **No H1 DOI claim may rest on it.**
- **n=1 ⇒ the 5-seed spread is the only error bar.** Use across-seed distribution + split-half as the null for every pre/post difference. **Never report a difference within seed spread.** Keep "this animal, this session" on everything.
- **Behaviour: "matched observable behaviour," not "matched state."** DOI may break the pupil↔arousal map; match+regress the behaviour marginals, verify behaviour no longer decodes pre/post from the residual, and add a neural state covariate (population coupling) to that check.
- **Cell-matching is a confound, not just plumbing.** Add a matching-QC gate (footprint/registration residual); show the effect survives on the top-confidence matched subset.
- **Display split stays split.** MEI = fixed-range shared-panel grayscale (valid only if the clip rarely fires). Reconstruction = per-image min/max + bicubic 36×64→144×256. Do not merge the two rules.

## Execution order — unblocked first

1. **Phase 2 (NO training — runs now): FEVE + CC_norm + raw gain-ratio on the EXISTING Sprint-4 twins.** As soon as the `validation/` module exists, this is the **first real number**, before either long run. It proves the metric point (0.26 was single-trial; FEVE/CC_norm is the comparable number) and surfaces the gain-ratio headline. *Do this first — it is the only unblocked science.*
2. **Phase 3 (the two long runs): canonical twins.** Pre = 5-seed cold ensemble (behaviour + shifter on, early-stop on val correlation). Post = 5-seed **cold** ensemble (primary). Warm-start variant only as the robustness check. Durable checkpoints = the kept artifact. Re-validate with FEVE/CC_norm on the ensemble.
3. **Phase 4 (synthesis on the ensemble): MEI + reconstruction.** MEIs at 3rd/97th pre-percentile states, eye clamped, fixed-range shared-panel display. Reconstruction exploratory, per-image+bicubic display, self-validated.
4. **Then controls before any claim:** temporal-drift null first; behaviour match+regress+residual-decode; matching-QC subset; seed-spread error bars. H1–H6 only after each carries its null.

The insight to hold: **the first number costs nothing.** Phase 2 needs no GPU-hours and no retrain — it runs on what we already have, so it lands before the two ten-hour runs and tells us how much of the "gap" was ever real.

*Why each of these: [chapter 07](../thinking/07-the-full-pipeline-audit.md) (the audit), [From the ground up](../../../../../../library/reports/from-the-ground-up--the-publication-grade-analysis.md) (the gap), [Sprint 5](../../../../../../library/.lib/projection/05-sprint-5--the-publication-grade-analysis.md) (the phases), [The Build ch 11](../../../../../../library/.lib/the-build/11-how-we-make-a-publication-form-mei.md)/[ch 12](../../../../../../library/.lib/the-build/12-how-we-make-a-publication-grade-twin.md), [analysis plan](../../../../../../library/.lib/the-altered-cortex/03-the-analysis-plan.md) (H1–H6).*

<!-- citations -->
[chapter-07]: ../thinking/07-the-full-pipeline-audit.md
[ground-up]: ../../../../../../library/reports/from-the-ground-up--the-publication-grade-analysis.md
[sprint-5]: ../../../../../../library/.lib/projection/05-sprint-5--the-publication-grade-analysis.md
[build-mei]: ../../../../../../library/.lib/the-build/11-how-we-make-a-publication-form-mei.md
[build-twin]: ../../../../../../library/.lib/the-build/12-how-we-make-a-publication-grade-twin.md
[analysis-plan]: ../../../../../../library/.lib/the-altered-cortex/03-the-analysis-plan.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
