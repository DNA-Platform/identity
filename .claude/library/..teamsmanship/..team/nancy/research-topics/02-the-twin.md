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

**The meta-lesson (standing):** this is the *same* trap as MEI-as-reconstruction — comparing our numbers to published numbers without checking they are the same *kind* of number. Confirm the metric definition before reading a gap as a deficiency.

## Seed for the comparative twin catalogue

For Libby's "how we build a publication twin" catalogue: publication twin = our core + `standard_trainer`, **plus** a 5-seed `EnsembleModel` average, behavior inputs on, and an eye-position shifter on; **evaluated** by noise-ceiling-normalized correlation-to-average on repeated test images. That is the recipe to document against our single-seed baseline.

<!-- citations -->
[thinking]: ../thinking/.cover.md
[exchange-1]: ../thinking/06-the-twin-and-the-metric-mismatch.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
