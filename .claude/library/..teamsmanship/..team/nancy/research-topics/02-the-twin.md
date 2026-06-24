---
title: "The Twin"
topic: "Nancy > The Twin"
---

# The Twin

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)

---

My second research thread, **`Nancy > The Twin`** — one Desktop conversation about the digital-twin *model* itself: how the publication twins are built, and how to read our twin's numbers against theirs. The per-exchange detail lives, by time, in my [thinking book](../thinking/.cover.md); this chapter is the running summary.

## What the thread has settled so far

**The publication twin, and the metric mismatch** — [full exchange](../thinking/06-the-twin-and-the-metric-mismatch.md) (2026-06-23). Our single-seed twin reaches ~0.26 where the paper reports 0.61, and I asked how the publication twins are actually built and where the gap is. Settled:

- **Our core and trainer are the publication recipe, verbatim** — Lurz-2021 `stacked_core_full_gauss_readout` + `standard_trainer` (Adam, PoissonLoss, early-stop on validation correlation, max_iter 200). Nothing in the core is wrong.
- **The gap is mostly a metric mismatch, not a model gap.** 0.61 is correlation-to-**average** (prediction vs the test response averaged over ~10 repeats); our 0.26 is **single-trial**. The same publication ensemble scored single-trial is ~0.30–0.45, never 0.61 — we compared different kinds of number.
- **No-retrain next step:** compute correlation-to-average on the 100 repeated test images, reported **noise-ceiling-normalized** (the only number comparable to 0.61, and the analysis plan's Step-1 bar) — estimated to reach ~0.4+ from the metric fix alone. Then, only if needed, the publication ladder: 5-seed ensemble via `mei.modules.EnsembleModel` (+0.02–0.05), then behavior + eye-position shifter on.
- **Discipline:** fix the metric before retraining — don't bolt on the ensemble to chase a number that was mis-measured.

**The full-pipeline audit** — [full exchange](../thinking/07-the-full-pipeline-audit.md) (2026-06-24). The whole pipeline (twin, MEI, reconstruction, normalization, display, both behaviour arms) audited against the canonical Reimer/Tolias papers as the last check on Sprint 5. Verdict: mostly canonical — §2 normalization and §4 twin verbatim, the §6 MEI gradient recipe an *exact* `nnvision` match, and the behaviour/shifter/fixed-state design a clean match to Franke 2022. The crux resolved: published twins **do** take behaviour + a pupil-position shifter, and MEIs are synthesized at **fixed 3rd/97th-percentile (quiet/active) states** — Arm A validated. Four changes before committing: (1) **label the metric honestly** — the repo reports **FEVE** (`get_fev`), our divide-by-ceiling form is Schoppe-2016 **CC_norm**, not "the Sensorium metric"; (2) **train the post twin cold** as primary, demote warm-start to a robustness check (warm-start biases post toward baseline and suppresses the differences we test for); (3) **document p=2 as our contrast-constraint** (canonical `walker_postup` is bare ClipRange), not "the nnvision Walker ops"; (4) **add the temporal-drift null** (within-scan no-drug 45-min split) as the highest-priority DOI control. Plus: elevate the raw per-neuron pre/post **gain ratio** to a headline (normalization is gain-blind by construction); keep **reconstruction exploratory** (population inversion is off-lineage, no borrowed validation); add a cell-matching-QC gate; n=1 ⇒ seed spread is the error bar.

**The meta-lesson (standing):** this is the *same* trap as MEI-as-reconstruction — comparing our numbers to published numbers without checking they are the same *kind* of number. The audit showed it recurs at the metric *label* level too (CC_norm ≠ FEVE), so the check now extends to **names**, not just values: confirm an estimator is the one the literature reports before claiming comparability.

## Seed for the comparative twin catalogue

For Libby's "how we build a publication twin" catalogue: publication twin = our core + `standard_trainer`, **plus** a 5-seed `EnsembleModel` average, behavior inputs on, and an eye-position shifter on; **evaluated** by noise-ceiling-normalized correlation-to-average on repeated test images. That is the recipe to document against our single-seed baseline.

<!-- citations -->
[thinking]: ../thinking/.cover.md
[exchange-1]: ../thinking/06-the-twin-and-the-metric-mismatch.md
[exchange-2]: ../thinking/07-the-full-pipeline-audit.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
