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

## Final-audit update — the constraint is ours, and the fixed states

The [full-pipeline audit](../../../.claude/library/..teamsmanship/..team/nancy/thinking/07-the-full-pipeline-audit.md) (read against `nnvision/mei/regularizers.py`) confirmed the **gradient + image-blur recipe is verbatim canonical** (`walker_gradient` / `walker_postup`), and corrected two framings above:

- **`PNormConstraintAndClip` p=2 is *ours*, not the canonical post-up.** The literal `walker_postup` is bare `ClipRange` — no explicit norm constraint; energy is governed by the gradient schedule. Keep our p=2 budget (it is closer to Walker-2019 / Franke-2022's *stated* contrast-constrained method than bare clip), but **document it as our contrast-constraint implementation, not "the nnvision ops,"** and verify the clip rarely fires — if it fires often, the shared-panel display breaks.
- **Fixed behavioural states (Franke 2022).** MEIs are synthesized at a **held-fixed** state — a **separate MEI per state, quiet = 3rd percentile, active = 97th percentile** of (locomotion, pupil), at the percentiles of the **pre**-session distribution, with the shifter's eye-position **clamped identically** pre/post.

## Where the ops actually live — and the principle (catalogued by Doug's instruction)

A near-miss worth keeping. The walker ops *looked* gone: `nnvision/mei/regularizers.py` does `from featurevis import ops`, but the external `featurevis` package was **renamed to `mei`** (commit `0b193d2`) and the ops moved — so that import is broken in our stack, and `mei` HEAD has no `ops`. The trap was concluding the published code was unavailable and reaching to **reimplement** it. It was never gone: **nnvision bundles its own self-contained copy at `nnvision.legacy.featurevis.ops`** — `FourierSmoothing`, `DivideByMeanOfAbsolute`, `MultiplyBy`, `GaussianBlur`, `ClipRange` — composed with `nnvision.legacy.featurevis.utils.Compose`. The MEI *tool* is the current `mei.methods.gradient_ascent` (+ `mei.postprocessing.PNormConstraintAndClip`), the lab's demo recipe. The exact published `walker_gradient` / `walker_postup` rebuild from installed code: **no `featurevis` install, no reimplementation, no separate env.**

**Confirmed running, 2026-06-24.** The recipe now executes end-to-end on the Sprint-4 twin and produces real MEIs — localized, oriented light-dark structure on a flat mean-gray surround, well inside the clip budget (the clip barely fires). Two **env-compat shims** were needed, both the same pattern as the trainer's `verbose` shim (the lab's published ops target older library versions than our pins): `torch.rfft`/`torch.irfft` → `torch.fft.rfftn`/`irfftn` (torch 2.x removed the old FFT API), and `scipy.signal.gaussian` → `scipy.signal.windows.gaussian`. **Shims restore the old API so the op runs UNMODIFIED — not reimplementation** (per the standing principle below). This confirms the *recipe* visually on **one** twin; the **four-twin comparative** regeneration (and the grid-across-a-range-of-cells that distinguishes a real tiling of retinotopy from a readout collapse) remains the open step.

**The standing principle (Doug, in force for the whole analysis):** *we have no autonomy to reimplement anything that has been published.* If the code used in the canonical or most-recent publication exists, **we use it, period**, and we work around whatever packaging constraints it carries — a pinned commit, a bundled copy, a separate env if truly necessary. When something "can't be installed," the answer is to **find the real code** (the right commit, the bundled copy, the GitHub source), never to write our own version of a published method. We are programmers here only insofar as we use the right analysis code.

This is the work the [figure-display print](../projection/print--faithful-figure-display.md) tracks; the working recipe it scales from is [ch 10](10-the-digital-twin-recipe.md). Recorded as evolution — accreted, not overwritten — because the *path* (what we did → what we learned → what's left) is the value.
