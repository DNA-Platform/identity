# Trials, tiers, and counts

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

[Book: [Datasets](.cover.md)]

The numbers below are read directly from each scan's `meta/trials/` arrays. They are not identical across the two conditions — the scans were segmented and run independently — which is why whole-population counts are not directly comparable and the analysis leans on the matched cells and the shared test images instead.

## Per-scan counts

| | Pre-DOI (s6 / scan 2) | Post-DOI (s7 / scan 1) |
|---|---|---|
| trials | 5936 | 5996 |
| train tier | 4850 | 4897 |
| validation tier | 100 | 100 |
| test tier | 986 | 999 |
| unique images | 5050 | 5097 |
| unique test images | 100 | 100 |

## What the tiers are for

`meta/trials/tiers.npy` labels every trial `train`, `validation`, or `test`.

- **train** — single-presentation natural images, the fitting set for the digital-twin encoding model.
- **validation** — 100 held-out trials for model selection during fitting.
- **test** — about 100 *unique* images, each shown roughly ten times (986 / 100 ≈ 9.9 pre, 999 / 100 ≈ 10.0 post). The repetition is the point: the trial-to-trial agreement across repeats of the same image gives each neuron's **noise ceiling** — the most variance any model could explain — which is how model quality is judged in [The Altered Cortex analysis plan](../the-altered-cortex/03-the-analysis-plan.md), Step 1.

## The shared test set

By design the same natural images are shown in both scans, so the ~100 repeated test images form a stimulus-locked set common to both conditions. The exact shared set is obtained by intersecting `frame_image_id` over the test tier of the two scans; that intersection is the like-for-like stimulus basis for every pre/post comparison.

## Behavioral covariates

Each trial also carries `behavior` (3 scalars) and `pupil_center` (`x, y`) — see [the format](02-the-static-scan-format.md). These are not bookkeeping: arousal and locomotion change markedly under DOI, so they are the nuisance variables the analysis must regress out or match before a neural difference can be called a drug effect — the confound documented in [chapter 5](05-caveats.md).

---

[Previous: [The static-scan format](02-the-static-scan-format.md)] | [Next: [Matching cells across the two scans](04-matching-cells.md)]
