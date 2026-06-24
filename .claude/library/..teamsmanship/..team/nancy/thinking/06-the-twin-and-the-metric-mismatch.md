---
title: "The publication twin, and the metric mismatch"
date: 2026-06-23
topic: "Nancy > The Twin"
previous: 05-writing-it-up-after-normalization.md
---

# The publication twin, and the metric mismatch

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)

---

The opening exchange of a new thread, **`Nancy > The Twin`** (the prior five exchanges were `Nancy > Neuroscience`; this one starts its own conversation because it is about the *model*, not the dataset). The trigger: our single-seed digital twin reaches ~0.26 test correlation while the [digital-twins paper](../../../../../../library/papers/digital-twins-tolias-2022/04-methods.md) reports 0.61, and I wanted to know — concretely, from how the publication twins are actually built — what the gap is and whether anything in our model is wrong.

## The question

How is a publication digital twin (the Sinz/Lurz/Sensorium lineage) actually built end to end, and where does our ~0.26 differ from their ~0.61 — architecture, trainer, ensembling, behavioral inputs, or evaluation metric? The factorization: the *general* build recipe and the lineage's conventions go to Desktop, which holds that literature; the *specific* judgment — what the gap means for our twin and what to do next — stays mine.

## Evidence — what came back (verdict: SUFFICIENT)

- **Our core and trainer are the publication recipe, verbatim.** The architecture is the Lurz-2021 `stacked_core_full_gauss_readout` core; the `standard_trainer` is Adam, `PoissonLoss`, early-stopping on validation correlation, `max_iter` 200. Nothing in our core is wrong or non-standard — it *is* the published model.
- **The publication twin differs only in bolted-on pieces.** It is an **ensemble** — 5 seeds trained independently, outputs averaged via `mei.modules.EnsembleModel` — and it runs with **behavior inputs on** and an **eye-position shifter on**. We ran a single seed with behavior and shifter off. These are additive refinements, not a different model.
- **The big one — the gap is mostly a metric mismatch, not a model gap.** The published 0.61 is **correlation-to-average**: the model's prediction correlated against the test-image response *averaged over its ~10 repeats* (noise largely averaged out). Our 0.26 is **single-trial**: prediction against one noisy trial. The *same* publication ensemble, scored single-trial, lands ~0.30–0.45 — never 0.61. We compared two different kinds of number.
- **Highest-leverage move needs no retraining.** Compute correlation-to-average on the 100 repeated test images (9–10 reps each); Desktop estimates that alone moves 0.26 toward ~0.4+. Then, if more is wanted, the publication ladder: ensemble 5 seeds (+0.02–0.05), then behavior + shifter on.

## Interpretation — my judgment

This is, squarely, my lens — and it caught me out, which is why I want it filed. **A measurement is only weighable against a reference when both measure the same quantity.** 0.61 (corr-to-mean, noise averaged across ten repeats) and 0.26 (single-trial, full Poisson noise) are not the same axis; reading the gap as "our twin underperforms" was an apples-to-oranges error, and most of the alarming shortfall dissolves the moment the metric is matched. Nothing in the core is broken — the gap decomposes into metric (the large piece), ensemble (small, +0.02–0.05), and behavior+shifter (some), with the core and trainer being the verbatim published recipe.

Two cautions I hold beyond Desktop's answer. First: **corr-to-average will not automatically reach 0.61 either**, because the ceiling it rides on is our own noise ceiling, and our reliability is lower and our animal/prep differ. The only number actually comparable to the paper's 0.61 is the **noise-ceiling-normalized** correlation-to-average — the same normalized metric the [analysis plan](../../../../../../library/.lib/the-altered-cortex/03-the-analysis-plan.md) already set as the Step-1 validation bar. So the move is not "compute corr-to-average and compare to 0.61" but "compute the normalized corr-to-average against our own ceiling," which is the apples-to-apples test. Second, and this is the discipline: **do not retrain or bolt on the ensemble until the metric is corrected.** Adding seeds and behavior to chase a number that was mis-measured would be fixing a model that isn't broken — the elegant-assumption trap inverted, changing the instrument to chase an artifact of measurement.

The meta-idea is the keeper, because it is the *second* time the same trap has bitten this sprint: this is exactly **MEI-as-reconstruction** again — we keep comparing our numbers to published numbers without first checking they are the same *kind* of number. There an MEI (what the model most prefers) was being read against a reconstruction (what the population encoded); here single-trial correlation was being read against correlation-to-average. Same shape, twice. So it becomes a standing check: before any of our numbers is read as a gap from a published one, confirm the two are the same quantity, measured the same way.

## Conclusion — a filed thought

**The 0.26-vs-0.61 gap is mostly a metric mismatch, not a model gap.** Our core (Lurz-2021 `stacked_core_full_gauss_readout`) and trainer (`standard_trainer`: Adam, PoissonLoss, early-stop, max_iter 200) are the verbatim publication recipe. The cheapest, highest-information next step is a **measurement fix, not a model fix**: compute **noise-ceiling-normalized correlation-to-average** on the 100 repeated test images — the only number comparable to 0.61 — which Desktop estimates moves the raw figure to ~0.4+ on its own. Only if that still falls short do we climb the publication ladder: 5-seed ensemble via `mei.modules.EnsembleModel` (+0.02–0.05), then behavior + eye-position shifter on. No code or figures changed here — this is the thinking and the filing.

**Meta-lesson, filed and standing:** same trap as MEI-as-reconstruction — always confirm two numbers are the same *kind* of number before reading their difference as a deficiency.

**Seed for Libby's comparative twin catalogue ("how we build a publication twin"):** the publication twin = our Lurz-2021 core + `standard_trainer`, **plus** (1) a 5-seed ensemble averaged with `mei.modules.EnsembleModel`, (2) behavior inputs on, (3) eye-position shifter on; **evaluated** by noise-ceiling-normalized correlation-to-average on repeated test images. That triple-plus-evaluation is the recipe to catalogue against our single-seed baseline.

<!-- citations -->
[previous]: 05-writing-it-up-after-normalization.md
[research-topics]: ../research-topics/02-the-twin.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
[twin-paper-methods]: ../../../../../../library/papers/digital-twins-tolias-2022/04-methods.md
[analysis-plan]: ../../../../../../library/.lib/the-altered-cortex/03-the-analysis-plan.md
