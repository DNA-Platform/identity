# How we make a publication-form MEI

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md), [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

[Book: [The Build](.cover.md)]

How we synthesize and display a most-exciting image so an author of the source papers would recognize it as their own. This is the **comparative** method — what we currently do, the published target we have learned, and the **delta**, which is the to-do. The confirmed *working* build is [the recipe, ch 10](10-the-digital-twin-recipe.md); this entry holds the **gap**. The twin the MEI runs on has its own comparative entry beside this one, [How we make a publication-grade twin](12-how-we-make-a-publication-grade-twin.md). Grounding: Nancy's reading of the papers plus a Desktop `/think` grounded in the `nnvision` / `mei` repo configs; **visual confirmation is pending** the regeneration of our figures. The MEI display rule is **not** the reconstruction rule (see the bottom) — letting them merge is the mistake this entry records.

## The gap — each divergence is a next step

| Aspect | What we did | Published target (learned) | → next step |
|---|---|---|---|
| **Synthesis smoothing** | constant Gaussian blur of the *gradient*, σ = 1.0 ([`GaussianBlurPrecondition`](../../../src/library/model/mei_ops.py)) | annealed blur of the *image*, σ 1.5 → 0.01 over 1000 iters (truncate 4, reflect pad), as a **post-update**; *plus* Fourier-smoothed gradient (`FourierSmoothing(0.04)`) and magnitude-normalized (`DivideByMeanOfAbsolute`), annealed step (`MultiplyBy` 1/850 → 1/20400). Heavy-early, decay-to-zero: low-freq forms first, detail only late, so noise never amplifies | re-synthesize with the annealed **image** blur + Fourier-smoothed gradient (CPU fallback: constant gradient blur σ = 1 is acceptable but noisier) |
| **Norm budget** | `PNormConstraint` (ceiling only, p = 2, norm = 25) | `PNormConstraintAndClip` — norm budget **+** a pixel clip to the normalized data extremes (lo = −img_mean/img_std, hi = (255−img_mean)/img_std); set norm empirically so the clip almost never triggers (flat saturated patches ⇒ norm too high) | switch to `PNormConstraintAndClip` / `ChangeNormAndClip`, tune norm |
| **Optimizer / init / iters** | SGD lr = 0.1, RandomNormal, 1000 iters | SGD (demo lr 1; Walker step 0.1, effective step set by the annealed `MultiplyBy`), RandomNormal = `torch.randn` mean 0 / std 1 **unscaled**, 1000 iters fixed, no early stop | already essentially right — minor |
| **Regularizers** | none | none (**confirmed**): `TV` (w = 1) and `LpNorm` (p = 6) exist in `mei/legacy/ops.py` but are **not** in the V1 recipe; smoothness is all precondition + post-update + clip | no change |
| **MEI display** | `cmap='gray'`, **symmetric** range (vmin = −lim, vmax = +lim), nearest | `cmap='gray'`, **fixed** range = the pixel-clip bounds (vmin = lo, vmax = hi), **shared across the panel**, **no per-image rescale** (the shared scaling is what keeps a panel comparable); post-hoc luminance/contrast match against the RF; no gamma; no upsampling in the optimizer (shown at model resolution; nearest/bilinear only to enlarge for print) | display the MEI grid + matched-cell MEI with **fixed-range, shared-panel** grayscale, no per-image rescale |
| **Framing / expectation** | believed MEIs should be clean **Gabors** | MEIs are **deliberately not Gabor** — Walker 2019's headline (sharp corners, checkerboards, pointillist texture, often *more* high-freq than the linear RF). The smooth Gabor is the **LN-RF control** fit beside each MEI. Goal = clean / *low-noise*, not Gabor; whether ours look Gabor-ish is about our **model**, not the synthesis settings | reframe captions: MEIs complex by design, "clean" = low-noise, the Gabor is the LN-RF control |

## MEI display ≠ reconstruction display — keep them apart

The merge of these two rules is exactly the error this entry records:

- **MEI:** fixed-range, **shared-panel** grayscale, no per-image rescale.
- **Reconstruction:** **per-image** min/max + bicubic upsample 36 × 64 → 144 × 256.

Nancy's first reading transferred the reconstruction rule (per-image) onto MEIs; the repo configs corrected it to fixed-range shared-panel. The reconstruction rule itself ([The Literature — digital-twins](../the-literature/01-digital-twins-tolias-2022.md)) is unchanged.

## Next (falls out of the table)

1. Re-synthesize MEIs with the annealed **image** blur (1.5 → 0.01) + Fourier-smoothed gradient + `ChangeNormAndClip` (or the pragmatic `PNormConstraintAndClip`), via the `mei` `method_config`.
2. Display the MEI grid + matched-cell MEI with **fixed-range shared-panel** grayscale (no per-image rescale).
3. Regenerate figures **B** and **C**, re-display, and compare panel-to-panel against Walker / Sensorium.
4. Reframe the [report](../../reports/2026-06-23-twin-mei/the-twin-and-mei.md) captions: MEIs complex by design; "clean" = low-noise; the Gabor is the LN-RF control.
5. Leave the **reconstruction** display as-is (per-image + bicubic).

This is the work the [figure-display print](../projection/print--faithful-figure-display.md) tracks; the working recipe it scales from is [ch 10](10-the-digital-twin-recipe.md). Recorded as evolution — accreted, not overwritten — because the *path* (what we did → what we learned → what's left) is the value.
