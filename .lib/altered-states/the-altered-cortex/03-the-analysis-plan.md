# The analysis, as actually built

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

> ## This is THE MAP — the durable layer. It names what owns what, by concept.
>
> Read [ch0, The turn](00-the-turn.md) first — it holds the reading list and the policy. Read
> [ch5, The working state](05-the-working-state.md) for what is true *right now* — the active code, the audit
> trail, what is still open. **Neither is repeated here.** Anything dated, counted, or measured belongs in ch5;
> this chapter is written to stay true as the project grows, so it carries concepts and owners, never a number.
>
> **The one rule that would have prevented everything:** *before writing any function, open the file that owns it
> and read it.* If it exists — import it. If it half-exists — **edit it**. Never write a rival.

## The conventions — where things go and what they are called

Each of these was broken, and each break cost real time. [`--check.py`](00-the-turn--check.py) enforces them, so
they are contract, not etiquette.

**Where code lives** — the boundary is [The Build ch8](../the-build/08-the-organization.md) (Libby's chapter;
read it, don't restate it): **`src/library/`** is the shared core — `io` (loading + the data registry), `model`,
`stats` (nulls, confound control, and the map-reading machinery), `viz` (the shared palette). **Analyses import
it and never edit it.** So a function that isn't about *this* experiment goes there and is imported — never
copied. `library/stats/binning.py` and `gradient.py` exist because `binned()`/`gradient_axis()` were living
inside one study; `metrics.py`'s own header records the five scripts that each grew a private copy of the image
primitives before it.

**Where outputs go** — `results/examples/` is **figures only**; `results/_data/` holds **arrays**;
`results/_organized/` holds the row-aligned per-twin datasets; `results/_full/` the raw per-object files.
`_organize.py` stated the figures-only rule in a comment and `_prepost_analysis.py` wrote `.npy` into
`examples/` anyway — **a comment in another file is not a check**, which is why this one is in the validator.

**What the conditions are called** — the rule, and it admits no third form:

| condition | suffix | example |
|---|---|---|
| **no behaviour — THE DEFAULT** | **none** | `pre`, `post`, `entropy_ratio.png`, `prepost_examples.png` |
| behaviour | **`-bh`** | `pre-bh`, `post-bh`, `entropy_ratio-bh.png`, `prepost_examples-bh.png` |

**Never** "arm A"/"arm B", "canonical", "clean", "_nobh", "_behaviour", "_A"/"_B" in an output name.
`results/_data/` had accumulated **six spellings of these two things**, so nothing could be found or compared.
(The `_A`/`_B` in the *loader* is the dataset's own vocabulary and stays; it must not reach an output name.)

**bh and no-bh are always separate, and always both produced.** Figures for **all four twins**
(`pre`, `post`, `pre-bh`, `post-bh`); if something is compared, **both conditions get their own figure** — never
one grid holding both. A shared figure invites reading across the conditions, and they are not comparable: the
`-bh` arm carries the eye-shifter/arousal confound, and its visual field sign even flips post. The pooled number
is the one that hides the confound.

**Bins come from the data.** `library.stats.binned` chooses its bin count by **LOOCV** (a regressogram; too few
bins oversmooths, too many is noise — cross-validation sees both); `library.stats.hist_bins` uses
**Freedman-Diaconis**. Both scale with n. The two rules are not interchangeable: a histogram has no y to
cross-validate against. `nb=8` and `bins=30` were hardcoded and wrong at every n.

## The map — where every piece lives (open the file, do not guess)

**The three contracts** (`src/analyses/most-exciting-image/`) — each owns a different question, and the third is
the one that gets forgotten:

| contract | owns |
|---|---|
| [`specification.md`](../../../src/analyses/most-exciting-image/specification.md) | the **method**: what we build, every setting, the published source it reproduces, and the Open Questions (Q7 = the readout) |
| [`deliverable.md`](../../../src/analyses/most-exciting-image/deliverable.md) | the **handoff** to Erin + the Reimer Lab: the archive, the symmetry guarantee, and the live Status |
| [`comparison.md`](../../../src/analyses/most-exciting-image/comparison.md) | the **pre→post characterization itself** — §A the five MEI comparisons, §B the metamer comparisons, §C the two mirrored arms, the metamer-is-an-invariance-probe frame, the 45-min drift baseline, and the **Findings (F1–F8)**. ⚠ **Every finding in it predates the free-μ revert and its evidence was deleted** — see the banner at the head of its Findings section. |

**The DRY homes** (one home per piece of logic; spec Code conventions §2):

| what | the ONE home | checked / used by |
|---|---|---|
| **generic, reusable — NOT about this experiment.** `gradient_axis` (collapse a 2-D map to the axis it varies along), `binned` / `choose_bins` (equal-count bins + **LOOCV** bin selection), `hist_bins` (**Freedman-Diaconis**). **Import; never copy.** | [`src/library/stats/`](../../../src/library/stats/) — the shared core ([Build ch8](../the-build/08-the-organization.md)) | `_check_all_twins.py`, `_prepost_analysis.py` |
| **the shared visual language** — `use_style()`, `PALETTE["pre"]`/`["post"]`. *"The hex values are the truth; keep them here and nowhere else."* A hardcoded hex in a study is a rival. | [`src/library/viz/style.py`](../../../src/library/viz/style.py) | every figure |
| image primitives — `pearson`, `ncc_surface`/`aligned_corr` (peak NCC over ±8 px), `hf_fraction` (HF-energy ratio = blur, energy-invariant), `rf_mask`, `upsample`/`norm01`/`zscore` | [`pipeline/metrics.py`](../../../src/analyses/most-exciting-image/pipeline/metrics.py) | every study; the one home after the same primitives were copy-pasted across five scripts |
| **the MEI energy distribution — Doug's measure, verbatim**: `energy_pmf` = **square the MEI, divide by the sum**; `energy_entropy` = the entropy of that. **The mean is NOT subtracted.** The specificity/resolution scalar — lower = concentrated/sharp, higher = diffuse; scale-free. ⚠ `subtract_mean=True` computes a *different* quantity and **was the default**, so the measure ran wrong for months; it is now off and stays off. | [`pipeline/metrics.py`](../../../src/analyses/most-exciting-image/pipeline/metrics.py) | [`_prepost_analysis.py`](../../../src/analyses/most-exciting-image/pipeline/studies/_prepost_analysis.py) → comparison.md **F10** |
| **the MEI centre** — ⚠ **two rivals, unmerged**: `energy_focus` (robust, k·σ-trimmed, **load-bearing — `validation.whitened_rf` builds the Q7 ground truth from it**) vs `energy_center` (naive: every pixel votes, so the pedestal drags the centroid to frame-centre). Merge **toward** `energy_focus`. `gaussian_focus`, named in `energy_center`'s docstring, **does not exist** | [`pipeline/metrics.py`](../../../src/analyses/most-exciting-image/pipeline/metrics.py) | `energy_focus` → [`validation.whitened_rf`](../../../src/analyses/most-exciting-image/pipeline/validation/__init__.py); `energy_center` → `_prepost_analysis` only |
| **pre→post MEI change via the energy distribution** — the **RATIO H_post/H_pre** (Doug: *divide*, do not subtract; **not in bits** — the ratio is dimensionless, so the log base cancels; 1 = no change), the HF-energy cross-check on "blurrier", the **Gaussian fit** (centre + σ — did the feature *spread*, or just lose fine structure?), the per-axis MEI-centre retinotopy, and the centre shift — **computed separately per condition** (default and `-bh`), which is what exposes the `-bh` confound | [`studies/_prepost_analysis.py`](../../../src/analyses/most-exciting-image/pipeline/studies/_prepost_analysis.py) | contract: comparison.md §A + **F10** |
| **"is post blurrier?"** — HF-energy fraction per MEI, pre vs post, per arm, straight off the raw per-cell files (no `_organized/` needed) | [`studies/_blur_check.py`](../../../src/analyses/most-exciting-image/pipeline/studies/_blur_check.py) | contract: comparison.md §A.4 + **F4**. ⚠ carries its **own** `hf_frac` copy — a rival of `metrics.hf_fraction`; import, don't copy |
| **retinotopy** — `whitened_rf` (model-free RF, the non-circular ground truth), `retinotopy_map` (Garrett 2014 + visual field sign + permutation), `readout_vs_rf` (the honest gate). ⚠ `readout_retinotopy` is **CIRCULAR — diagnostic only, never a gate** | [`pipeline/validation/__init__.py`](../../../src/analyses/most-exciting-image/pipeline/validation/__init__.py) |
| twin config — `TWIN_CONFIG` (**free-μ**), `TWIN_INIT="cold"`, `ensemble` | [`pipeline/model/__init__.py`](../../../src/analyses/most-exciting-image/pipeline/model/__init__.py) |
| the single twin loader | [`pipeline/twins.py`](../../../src/analyses/most-exciting-image/pipeline/twins.py) |
| MEI recipe (Walker 2019 walker ops) | [`pipeline/synthesis/__init__.py`](../../../src/analyses/most-exciting-image/pipeline/synthesis/__init__.py) |
| **metamer** — vendored `sinzlab/reconstruction` (`gauss_loss`, `ChangeNormConditional`) + `metamer()`. **EDIT THIS — never write a new generator** | [`pipeline/metamer/__init__.py`](../../../src/analyses/most-exciting-image/pipeline/metamer/__init__.py) |
| loaders, matched cells (`matched=True`, matched-pair row order) | [`pipeline/data/__init__.py`](../../../src/analyses/most-exciting-image/pipeline/data/__init__.py) |
| generation orchestrator — **one cell × all four twins**, metamers interleaved | [`pipeline/_generate_full.py`](../../../src/analyses/most-exciting-image/pipeline/_generate_full.py) |
| organize → archive → zip | [`_organize.py`](../../../src/analyses/most-exciting-image/pipeline/_organize.py), [`pack_archive.py`](../../../src/analyses/most-exciting-image/pipeline/pack_archive.py), [`rebuild_freemu.sh`](../../../src/analyses/most-exciting-image/pipeline/rebuild_freemu.sh) |

**The studies that ALREADY EXIST — read one before you invent one** (`pipeline/studies/`). Each owns a question.
**Which of them currently import** is volatile and lives in [ch5](05-the-working-state.md#the-studies--which-run-right-now);
what each one *is for* does not change:

| study | owns |
|---|---|
| `_check_all_twins.py` | the retinotopy gate across all four twins, and the figures that show it. **The reference for the correct path idiom.** |
| `_retinotopy_grid.py` | MEI thumbnails on a cortical-position grid. **Not a retinotopy instrument** — the MEI centre moves ~6.6 px az / ~2 px el on a 36×64 frame, invisible at thumbnail scale. |
| `_prepost_analysis.py` | **pre→post via the energy distribution** (p = MEI²/ΣMEI²) — the entropy RATIO, the HF cross-check, the Gaussian fit (centre + σ), per-axis MEI-centre retinotopy — each condition separately |
| `_metamer_vs_decoder.py` | **Cobos Fig 2** on our data — metamer vs the ridge/deconv decoders |
| `_decoder.py` · `_decoder_figure.py` | the response→image decoder, and its figure |
| `_mei_good_examples.py` · `_mei_quality_check.py` | ranking MEIs by quality; publication-level MEI checks |
| `_make_examples.py` | the symmetric example gallery |
| `_metamer_similarity.py` · `_blur_check.py` | metamer pre/post similarity; is "post is blurrier" real |
| `_rf_coverage.py` · `_extract_targets.py` | RF localisation/coverage; saving the metamer target stimuli |
| `_retinotopy_check.py` · `_sweep_retinotopy.py` | single-twin readout-μ check; the readout-config sweep |

**The path idiom** (timeless — the `pipeline/ → studies/` move broke exactly the files that moved, and a study
that "doesn't work" is stale, not wrong): from `pipeline/studies/`, `sys.path` takes **`parents[1]`** (pipeline)
+ **`parents[4]`** (src) — *not* `parent`+`parents[3]`; and results is **`parents[2]`/"results"** — *not*
`parents[1]`, because `results/` sits at the analysis root and `pipeline/results/` has never existed.
`_generate_full.py` is correct *because it never moved*.

---

This chapter replaces the original H1–H7 inversion plan, which described an analysis we did not run. What we
actually build is a **descriptive characterization** of mouse V1 representation before and after DOI, using
digital twins as instruments. This chapter is the durable memory: what the analysis is, and — more importantly —
the errors it cost us to find, so they are not paid for twice.

## The design and the instruments

A 2×2: **{pre (baseline), post (DOI)} × {`-bh` (behaviour + eye-position shifter), default (stimulus-only)}**,
all on the **749 cells matched across both scans** (reciprocal nearest-neighbour; `matched=True` is enforced in
the data layer, in matched-pair row order — **cell *i* is the same tracked neuron in every twin, by
construction**). Three instruments read off those twins:

- **MEIs** (Walker 2019) — per cell, the image that most excites it. The eager set is 149 cells × 4 twins.
- **Metamers** (Cobos 2022, `sinzlab/reconstruction`) — per target image, the image that drives the *whole*
  749-cell population to a measured response. 8 sets = {within-pre, within-post, cross pre→post, cross
  post→pre} × {A, B}, 100 shared targets. Cross sets are exploratory.
- **Decoder** (Cobos 2022 Fig 2) — a Response→Image ridge + deconvolution decoder, fit on train, scored
  held-out. It is **twin-independent** (it maps real responses to real images), so a change of readout does not
  invalidate it. It is the *second read* on the metamers: a metamer imports no prior and is honestly blurry; a
  decoder imports its training set to recover the seen image.

## The readout: free-μ, and the circular gate that cost us weeks

**The readout is `grid_mean_predictor=None` — free per-neuron μ.** This is the package default in both
`sensorium/models/models.py` and `nnvision/models/models.py`, and it is the readout the MEI lineage uses
(Walker 2019 predates Lurz's cortex predictor; Franke 2022 defaults it off). `grid_mean_predictor='cortex'`
is **Lurz 2021's cross-animal transfer device** — it predicts μ from each cell's cortical coordinates through a
shared MLP so that one model can generalise across many scans. We have **one mouse, one session**; the rationale
for it does not apply to us.

Sprint 10 adopted the cortex predictor anyway, and enshrined it in the spec as RESOLVED. **It was wrong, and the
reason it looked right is the most important thing in this book:**

> **The build gated on `μy-R²` — the R² of the readout's μ against cortical coordinates. For the cortex
> predictor, μ *is* an MLP of cortex, so that R² is a tautology: it passes by construction.** Free-μ, whose μ is
> fit to the data, "failed" the gate (0.02) — which was actually free-μ honestly reporting the real, weak
> elevation retinotopy. **The gate rejected the correct readout and selected the one that scores itself.**

Worse, the cortex predictor **collapsed the elevation range** (μ el-std 0.024 vs free-μ's 0.095) while still
scoring μy-R² ≈ 0.67 — because R² is scale-invariant and cannot see a collapsed range. A high R² on a
near-constant is a high correlation with noise.

**Judged the honest way — against a MODEL-FREE receptive field** (a ridge-whitened linear RF computed from
responses × pixels, no readout involved) — free-μ tracks the real elevation RF at **r = 0.41** and the cortex
readout at **r = 0.02**, at **equal prediction accuracy** (validation correlation free-μ ≥ cortex on 3 of 4
twins). So free-μ is both the published choice and the correct one. `TWIN_INIT="cold"` points at the free-μ
checkpoints; the μy-R² gate is retired.

**The standing rule:** *never validate a model's retinotopy against the thing its retinotopy was fit from.*
Validate against a model-free RF, or against nothing.

## What the retinotopy actually is

Measured with the published cortex→visual-field map (Garrett, Nauhaus, Marshel & Callaway 2014 *J Neurosci*
34(37):12587–12600 — the mouse azimuth/altitude maps; Sereno 1994 visual field sign; Schuett 2002 linear map
fit). For cell *i* at cortical **c**ᵢ = (xᵢ,yᵢ) µm with RF centre **v**ᵢ = (azᵢ,elᵢ): OLS `v = B₀ + B₁x + B₂y`,
strength `R = corr(v̂,v)`, permutation null on the cortex↔RF pairing; Jacobian
`J = [[∂az/∂x,∂az/∂y],[∂el/∂x,∂el/∂y]]`, **visual field sign = sign(det J)** (consistent sign = a locally 1-to-1
map; det J → 0 = a collapse).

| axis | model-free RF (data, n=749) | free-μ readout (n=749) | MEI centres |
|---|---|---|---|
| **azimuth** | R = 0.59 (p<0.005) | R = 0.84 | R = 0.86 |
| **elevation** | R = 0.25 (p<0.005) | R = 0.29 | (subset, noisy) |

**Azimuth retinotopy is real and visible** — colour the cortex by RF azimuth and you see a left-to-right ramp
(`results/examples/retinotopy_749_modelfree.png`; the readout's own map per twin in
`results/examples/retinotopy_749_pre.png` and its siblings). **Elevation is statistically real but weak** — significant against the
permutation null, but no gradient a person would defend by eye. Model and data agree independently (az r = 0.62,
el r = 0.41), the VFS is consistent (a proper 1-to-1 map), and **the MEI centres reproduce the azimuth map at
R = 0.86** — the MEIs are a faithful downsampled version of the population retinotopy. RF centres are
split-half reliable at **0.90**, so the weak elevation is real scatter, not measurement noise: a ~0.5 mm patch of
mouse V1 has a genuinely loose map.

**Consequence for claims:** azimuth-based spatial statements are supported; **elevation-specific spatial claims
are not**. The earlier "thin horizontal strip further compressed by the shifter" story was largely the cortex
readout's artifact, not the animal's anatomy.

## The generation discipline (the other expensive lesson)

**The unit of work is one cell across all four twins.** MEIs were first generated as (cell-chunk × twin) tasks
in a worker pool; `-bh` (behaviour + shifter, 6 input channels) is slower than the default arm, so the twins **drifted
apart in which cells they had finished** — per-twin counts of 67/78/66/78 with an overlap of only 62. The
deliverable already required union mode and a four-twin keeper set; the code did not implement it. Now each
worker loads all four twins and finishes a cell everywhere before moving on, so **matched == completed at every
instant**, and progress is reported as **matched cells first, never a ×4 total**.

## The lessons that cost the most

Durable, and they live here rather than in [ch5](05-the-working-state.md) because a lesson stops being news the
turn after it is learned. Each is one line and a **reason** — reasons survive the instinct to skip; the stories
they came from are in git. **Every one was produced by someone confident they were being helpful.**

**On measuring**
- **Never validate a model against the thing it was fit from.** The μy-R² gate scored the readout's μ against
  the coordinates μ was an MLP of — a tautology. It picked the wrong readout for three sprints.
- **A scale-invariant score cannot see a scale collapse.** R² ≈ 0.67 on a near-constant is a high correlation
  with noise. Report range *and* correlation; they are different failures.
- **Averaging a strong axis with a weak one reports neither.** "Retinotopy R² 0.47" was azimuth (0.90) averaged
  with elevation — and it hid that the `-bh` visual field sign *flips*.
- **A rate measured over a window containing a crash is not a rate.** It counts a dead machine as slow work.
  ("55 days" was really ~24 MEI/hr.)
- **Two measures of one idea disagreeing in strength is information, not a problem.** Entropy asks how spread
  the energy is; HF asks how much fine detail is in it. The disagreement is what says *the envelope stays and
  the detail goes*.

**On duplication — every instance below was written by someone who had already read the rule**
- **A number copied into prose is a second source that drifts from the first.** A count in a contract was false
  eleven minutes later. Counts have one home; prose points at it.
- **A rule written in a file nobody opens is not a rule.** `examples/` was figures-only *in a comment*;
  `viz/style.py` said the hexes live only there. Both were violated by someone who had not opened them.
- **A DRY fix that leaves the old copy in place is not a fix.** `metrics.py`'s header named the five scripts it
  consolidated; one of them still carried a byte-identical rival.
- **The confident instruction in your own handwriting can be wrong, and only the callers know.** This book said
  "delete `energy_focus`" — it was load-bearing in the Q7 ground truth. Grep the callers before you cut.

**On knowing whether it worked**
- **A finding whose evidence has evaporated still reads as a finding** — it is indistinguishable from knowledge.
  Nothing in a number says which twin produced it. (Every figure F1–F8 cited had been deleted.)
- **A check that reads text it does not parse will convict the innocent.** The staleness regex matched a
  *comment explaining the bug it had just fixed*.
- **A check that passes while missing cases is the μy-R² failure, quieter.** Say what a green tick does *not*
  cover.
- **A restructure is exactly when the reading list rots**, because whoever moved the content already knows where
  it went. Links resolving proves nothing; a list is honest only if it reaches every chapter.
- **When the task feels familiar, the list feels redundant.** That feeling is precisely when it is not.

**On running it**
- **Workers are memory-bound, not core-bound.** Each MEI worker holds four twins × 5 seeds = 20 models.
  "14 cores minus 2" took the machine down.
- **A resource failure wears the costume of whatever library touches memory first.** 28 dead tasks; exactly one
  said `MemoryError`. The rest blamed scipy, DLLs, the page file.
- **A pool of dying workers looks exactly like a busy one** — `dispatch` catches and returns, so the only
  symptom is a count that stops rising. Count the dead tasks.
- **Interleaving a list is not scheduling.** `map_async` hands out contiguous chunks, so alternating the list
  does not alternate the pool. Make the priority explicit — phases, not hope.
- **`ps | grep <word>` matches the shell running the grep** when the word is in your command line. Kill by
  verified pid; confirm with `kill -0`.

## The measurement discipline

Earned the hard way, and non-negotiable:

1. **Reliability before strength.** Ask "is this quantity even reliably measured?" (split-half, Spearman-Brown)
   before asking whether it correlates with anything. A weak correlation on an unreliable measure means nothing.
2. **A permutation null on every map claim.** Shuffle the pairing, refit, compare.
3. **Disattenuate** — observed R / √reliability — to separate "the effect is weak" from "our estimate is noisy."
4. **Range and correlation are different failures.** R² cannot see a collapsed range; a range can exist without
   any mapping. Report both, and never let a scale-invariant score certify a scale collapse.
5. **Spread is not retinotopy.** Retinotopy is *organisation* — cortical position predicting RF position — not a
   diversity of values.
