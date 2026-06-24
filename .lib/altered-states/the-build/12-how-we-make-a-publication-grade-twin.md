# How we make a publication-grade twin

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md), [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

[Book: [The Build](.cover.md)]

How we build and validate the digital twin so it is the **publication instrument**, not a single-seed sketch — the comparative method, beside [How we make a publication-form MEI](11-how-we-make-a-publication-form-mei.md). The full ground-up gap across the *whole* analysis (data → twin → validation → MEI → reconstruction → science) is the report [From the ground up](../../reports/from-the-ground-up--the-publication-grade-analysis.md); this entry is the durable **twin** half. Seeded by Nancy's filed thought, [The twin and the metric mismatch](../../../.claude/library/..teamsmanship/..team/nancy/thinking/06-the-twin-and-the-metric-mismatch.md). Nothing here is verified until the run.

**The principle on top.** Before reading any difference from a published number as a deficiency, confirm it is the **same *kind* of number.** Twice-bitten this sprint: MEI-as-reconstruction, and single-trial-vs-correlation-to-average. The check is standing.

## The gap — data, twin, validation

| Step | What we did | Canonical (publication-worthy) | What the change buys | The control that bounds it |
|---|---|---|---|---|
| **Data** | stimulus only; behavior + eye position stripped | `include_behavior=True` (running, pupil, pupil-deriv) and `include_eye_position=True` | behavior-driven variance a *static* model structurally can't reach; enables the shifter | same loaders/tiers — only the inputs widen |
| **Twin** | single seed; behavior + shifter off; CPU; maybe not converged | 5-seed **ensemble** (`mei.modules.EnsembleModel`, all downstream on the ensemble); behavior **on**; eye-position **shifter on**; each seed early-stopped on val correlation, not the `max_iter` wall | ensemble +0.02–0.05; behavior+shifter recover real variance; convergence avoids a depressed median | aligned pre/post (post **warm-started** from pre), so differences are *data*, not seed |
| **Validation** | single-trial raw correlation (median 0.26) | **noise-ceiling-normalized correlation-to-average** (predict vs each test image's ~10-repeat mean, ÷ the achievable ceiling) — the *only* number comparable to 0.61, and the Step-1 bar of the [analysis plan](../the-altered-cortex/03-the-analysis-plan.md) | the honest, comparable, publishable number | the **noise ceiling** itself, from the repeated test images |

## The response normalization — a stated step, not an assumption

Responses are **per-neuron std-normalized**: each neuron's deconvolved-calcium response divided by its own per-scan response s.d. (the shipped `meta/statistics/responses/all/{mean,std}`, what `static_loaders(normalize=True)` applies and [`load_scan.py`](../../../src/library/io/load_scan.py)'s `.statistics()` exposes — [Datasets ch 2](../datasets/02-the-static-scan-format.md)). This **removes a per-neuron gain scalar**, and that is the heart of the early central finding: the apparent post-DOI response *drop* was such a scalar, which normalization divides out — and since the published DOI effect (Michaiel 2019) *is* a V1 **gain reduction**, this normalization would erase it ([Datasets ch 5](../datasets/05-caveats.md)). It therefore bears directly on **H1 / H2 and the gain question**. The rule: any absolute-amplitude or gain claim must be made on the **raw** signal or be explicitly **scale-invariant**, and every H-test must **state which space it is in** — raw or normalized. Stated here so it is never silently assumed.

## What is *not* wrong (do not fix it)

Our **core** (Lurz-2021 `stacked_core_full_gauss_readout`) and **trainer** (`standard_trainer`: Adam, PoissonLoss, early-stop on validation correlation, `max_iter` 200) are the **publication recipe verbatim** ([the recipe, ch 10](10-the-digital-twin-recipe.md)). The twin gap is *bolted-on* pieces (ensemble, behavior, shifter) and a *metric*, not a broken model. Strategic call: the canonical twin is the **Franke-2022 CNN ensemble**, **not** a bigger SOTA core — V1T / ConvNeXt are prediction-*leaderboard* models, not the instrument the reconstruction/MEI papers use. Spend the hours on the **ensemble + controls**, not a bigger core.

## Measurement before model

The validation row is a **[MEASUREMENT] fix, not a [MODEL] change** — and it comes first. Compute normalized correlation-to-average on the twin we already have *before* bolting on ensemble or behavior; corr-to-average **alone** still won't reach 0.61 because it rides on *our* lower noise ceiling, so only the **normalized** form is apples-to-apples. Changing the instrument to chase a mis-measured number would be fixing a model that isn't broken.

## Final-audit update — supersedes two rows above

The [full-pipeline audit](../../../.claude/library/..teamsmanship/..team/nancy/thinking/07-the-full-pipeline-audit.md) (verified against `nnvision` / `sensorium` source + Franke 2022) corrected two things in the gap table:

- **Alignment — *cold-primary*, not warm-start.** Warm-starting post from the pre core is *our* invention, in no canonical paper, and for a change-detection study it **biases the post twin toward pre-drug features and suppresses the effect we test for**. So the independent **cold-seeded** post ensemble is the **primary** model; the warm-start is kept only as a **robustness check** (an effect that appears *only* warm-started is suspect; one that survives cold init is real).
- **Metric — *FEVE* is the published number; our CC_norm is labeled.** The Sensorium/Lurz tables report **FEVE** (`get_fev`, `fev_threshold=0.15`) with `get_signal_correlations`, not corr-to-average ÷ a separately-estimated ceiling. Our normalized form is a CC_norm **in the spirit of Schoppe 2016 (not the literal formula)**, its ceiling a leave-one-out oracle — report it, but never call it "the Sensorium metric." And the per-neuron **raw gain-ratio** (the ratio of the two shipped `responses/std` vectors) is promoted to a **headline** result, since per-neuron std-normalization is gain-blind by construction.

## Where the rest lives

- The **MEI** half (synthesis + display, non-Gabor framing): [ch 11](11-how-we-make-a-publication-form-mei.md).
- The **reconstruction** and the **DOI science (H1–H6)**: the [analysis plan](../the-altered-cortex/03-the-analysis-plan.md); the controlled tests with nulls and behaviour regressed out are the actual publication, our demos are not.
- The **ordered plan** (measurement → ensemble → re-validate → MEI/reconstruction → H1–H6, ten hours fine, no shortcuts) and the full step-by-step gap: the [report](../../reports/from-the-ground-up--the-publication-grade-analysis.md).
- The papers this reads from: [The Literature](../the-literature/.cover.md).

Recorded as evolution — accreted, not overwritten — because the path (what we did → what we learned is canonical → what's left) is the value.
