# Caveats that bound the science

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

[Book: [Datasets](.cover.md)]

A handful of facts about the files themselves constrain what the analysis may claim. They are listed here so the limits travel with the data; the falsifiable hypotheses and the controls that answer to them live in [The Altered Cortex](../the-altered-cortex/.cover.md).

- **No labelled stimulus-free epochs.** Every trial is a stimulus presentation; the files mark no "spontaneous" or blank period as its own labelled data. So "activity not driven by the shown image" cannot be read off directly — it is operationalized as the *residual*, the recorded response minus the baseline model's prediction for that image. This is why the structured-spontaneous-activity test ([The Altered Cortex, H5](../the-altered-cortex/02-the-question-made-falsifiable.md)) works from residuals rather than raw activity.

- **The matched-cell index is not yet verified.** The ~749 figure depends on the [match-cells](04-matching-cells.md) stub, which has the same-path bug. No per-cell pre/post claim should rest on the matched set until the matcher is fixed and the count reproduced.

- **The two conditions are not the same size.** 1654 vs 1449 neurons, 5936 vs 5996 trials, and different unique-image sets ([chapter 3](03-trials-tiers-and-counts.md)). Only the matched cells and the shared repeated test images support a like-for-like comparison; whole-population counts are not directly comparable.

- **The arousal / locomotion confound is visible in the data itself.** The behavioral covariates (`behavior`, `pupil_center`) change strongly under DOI — strongly enough that drug state is decodable from behavior alone, as the deck's preliminary classifier shows ([deck, the data and the analysis](../../altered-states-doi/resources/erins-presentation/03-the-data-and-the-analysis.md)). Any apparent change in neural responses must therefore be checked against matched or regressed behavior before it is called a representational effect.

- **`scan_idx` is not chronological.** Pre-DOI is `scan_idx` 2, post-DOI is `scan_idx` 1; order the conditions by session number ([chapter 1](01-the-two-scans.md)). Mixing this up silently swaps the conditions.

These are properties of the files. What to *do* about each — the residual construction, the behavioral regression, the time-matched and shuffle nulls — is the analysis plan's job, in [The Altered Cortex](../the-altered-cortex/03-the-analysis-plan.md).

---

[Previous: [Matching cells across the two scans](04-matching-cells.md)]
