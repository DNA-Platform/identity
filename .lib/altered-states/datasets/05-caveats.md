# Caveats that bound the science

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

[Book: [Datasets](.cover.md)]

A handful of facts about the files themselves constrain what the analysis may claim. They are listed here so the limits travel with the data; the falsifiable hypotheses and the controls that answer to them live in [The Altered Cortex](../the-altered-cortex/.cover.md).

- **No labelled stimulus-free epochs.** Every trial is a stimulus presentation; the files mark no "spontaneous" or blank period as its own labelled data. So "activity not driven by the shown image" cannot be read off directly — it is operationalized as the *residual*, the recorded response minus the baseline model's prediction for that image. This is why the structured-spontaneous-activity test ([The Altered Cortex, H5](../the-altered-cortex/02-the-question-made-falsifiable.md)) works from residuals rather than raw activity.

- **The matched-cell index is verified** (a caveat now lifted). The fixed [matcher](04-matching-cells.md) gives 749 reciprocal pairs at median 2.68 µm, guarded by a regression test — so per-cell pre/post claims now rest on a checked map rather than an unverified stub. Note the *yield*, though: 749 pairs is only about **45–52%** of each scan's cells re-matched. The matcher is correct; the modest rate is itself a signal — consistent with z-drift in the volumetric stack (next bullet), not a matching failure.

- **The two conditions are not the same size.** 1654 vs 1449 neurons, 5936 vs 5996 trials, and different unique-image sets ([chapter 3](03-trials-tiers-and-counts.md)). Only the matched cells and the shared repeated test images support a like-for-like comparison; whole-population counts are not directly comparable.

- **The arousal / locomotion confound is visible in the data itself.** The behavioral covariates (`behavior`, `pupil_center`) change strongly under DOI — strongly enough that drug state is decodable from behavior alone, as the deck's preliminary classifier shows ([deck, the data and the analysis](../../resources/erins-presentation/03-the-data-and-the-analysis.md)). Any apparent change in neural responses must therefore be checked against matched or regressed behavior before it is called a representational effect.

- **The recording is a volumetric stack, so z-drift is a live confound.** Each scan is a stack of depth planes ([chapter 1](01-the-two-scans.md)), and over the ~90-minute session the stack can shift in z. This is the concrete mechanism behind two observations at once: only ~45–52% of cells re-match across the two scans (a cell that drifts off its plane is not found again), and matched cells tend to read **uniformly dimmer** post (a cell off its best plane collects less signal). A plane shift therefore mimics a global amplitude reduction with no change in firing, and must be ruled out — e.g. against the cells that *do* re-match tightly, and against neurovascular contamination, since DOI is vasoactive and a fluorescence change can ride on blood flow without spiking — before any dimming is called neural. [interpretation]

- **Standard normalization removes exactly the candidate DOI effect.** The published DOI-in-V1 result is a *gain reduction*: DOI lowers V1 visual response gain (with stronger surround suppression) while leaving tuning and retinotopy intact (Michaiel, Parker & Niell, *Cell Reports* 2019). That predicted effect is a per-neuron multiplicative scaling — and the per-session divide-by-`std` normalization ([chapter 2](02-the-static-scan-format.md)) divides it out by construction, so the default pipeline would *erase* a real DOI gain change. The matched-cell "dimmer but similar" we observe (a clean per-neuron scalar, mean and s.d. dropping in lockstep, removed by standardizing) is exactly this shape — genuinely consistent with the published gain reduction, but not separable from the optical/vascular scale confounds above by a cross-scan magnitude comparison. Detecting a real gain change requires **scale-invariant, within-session** measures (tuning and noise-correlation structure, decoding, running-vs-still gain), where a per-neuron scalar cancels and the question no longer rides on cross-scan magnitude. Report raw **and** standardized side by side so the normalization never silently deletes the candidate signal. [interpretation]

- **`scan_idx` is not chronological.** Pre-DOI is `scan_idx` 2, post-DOI is `scan_idx` 1; order the conditions by session number ([chapter 1](01-the-two-scans.md)). Mixing this up silently swaps the conditions.

These are properties of the files. What to *do* about each — the residual construction, the behavioral regression, the time-matched and shuffle nulls — is the analysis plan's job, in [The Altered Cortex](../the-altered-cortex/03-the-analysis-plan.md).

---

[Previous: [Matching cells across the two scans](04-matching-cells.md)]
