# Sprint 16 — The pipeline, the second animal, and the symmetry I broke

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **status:** `active` — four pipelines built and runnable. 2026-09-19: Erin's neuropil-subtracted
  delivery landed; 33977's matched pair is **training at 1x** on it, 3,256 cells both sides, at
  1.45 min/epoch. The pre/post COMPARISON waits on Erin's word that 17-3's export coordinates are
  stack-registered — the measurement says they are; the label stays cautious until she says so.

---

**Doug, 2026-09-14, the objective in his own words:**

> *"can we get this all organized and get the digital twin for the new dataset building tonight? I
> want to have side by side code... We'll create most-exciting-image and metamer folders as well."*

> *"I want this to be a clean, single point of entry pipeline that can be used to run build steps,
> and that pipeline is self-contained so that other pipelines can depend on it."*

And the constraint that governs everything below, restated by him on 2026-09-15 after I violated it:

> *"We don't have like-for-like networks on anything but matched cells. ANYTHING else is not valid
> because the other cells."*

---

## What was built

**Three pipelines under `src/pipelines/`, each a single entry point, each depending only on the one
below it.**

| package | what it makes | entry |
|---|---|---|
| [`digital_twin`](../../../src/pipelines/digital_twin/.cover.md) | the dataset registry, matched cells, noise ceiling, the twin pair | `python -m digital_twin 33977` |
| [`most_exciting_image`](../../../src/pipelines/most_exciting_image/.cover.md) | Walker 2019 MEIs, **best-understood cells first** | `python -m most_exciting_image 33977` |
| [`metamer`](../../../src/pipelines/metamer/.cover.md) | Cobos 2022 metamers, **best-determined targets first** | `python -m metamer 33977` |

`--then most_exciting_image,metamer` chains them, so the twin pipeline kicks off its dependants and
one failing does not cost the rest.

**Best-first, and ordering never filters.** Both synthesis pipelines order their work by a quality
prior and run in that order; nothing is ever dropped and a completed run is identical whatever the
order. Cells are ranked by **FEVE** — an MEI is only a statement about a cell to the degree the twin
predicts it — and a matched pair by `min(FEVE_pre, FEVE_post)`, its worse half. Images are ranked by
**how well-determined the target vector is**, the leave-one-out oracle correlated across the
population within a trial. That second one is not a guess: the single target every metamer recipe
failed on in the four-target comparison was a nearly empty stimulus that barely moved the population,
which is exactly what this ranking puts last.

## What was decided

- **The metamer is Cobos 2022's preprint, as configuration**, on the engine the MEIs already use:
  blank init, the gradient Gaussian-blurred each iteration, clip to the scan's own image extremes,
  1,000 steps, **no norm ceiling**. *Two of those lines were reversed on 2026-09-19 - the init is
  white noise and the preconditioner is the lab's `walker_gradient`, not a blur; see Where things
  stand and the wrong turns. The clip and the absent norm ceiling stand.* The delivered metamers carried `ChangeNormConditional(25)` — the
  op is Cobos's own released code, but the *value* came across from our MEI config, binds on every
  step (25 ÷ √2304 = 0.5208, measured 0.521) and holds the image at half the stimulus's contrast.
- **σ is angle-preserving**: 0.62 px at 36×64, 1.25 at 72×128, ≈1° of visual angle at the 105° field.
  Cobos's 2.5 px is a pixel count on 144×256 frames; read literally at our resolution it is four
  times his blur. Yongrong's notebook runs `GaussianBlur(sigma=1)` in the same slot at 36×64 on these
  scans, which brackets it from the other side.
- **A blurred metamer is not a better metamer.** Doug: *"If the rows are simple blurs, they are all
  wrong."* Measured: a recipe's own four outputs grow more alike as σ rises (0.060 → 0.226), which is
  information destruction, and the smoothest row is the one that changes *least* with its target. My
  eye had read *smooth* as *formed* — the eye is fooled by blur in the same direction a correlation
  is.
- **EGG is the successor.** Pierzchlewicz et al., NeurIPS 2023 — **Tolias is an author** —
  replaces the hand-specified blur with a learned diffusion prior. What ships now is the cited,
  converged, reproducible 2022 baseline, and it should be labelled that way rather than as "best in
  class". *"It needs a GPU" was withdrawn 2026-09-19: `egg/diffusion.py` selects CPU when CUDA is
  absent, it is installed here and imports clean beside our pinned stack, and whether CPU sampling
  is reasonable for a handful of singular metamers is a measurement not yet taken.*

## The defect that cost the most

**I trained a pre/post pair on different cell populations.** `defaults.toml` set `cells = "all"`,
justified by Lurz 2021 §2.1 — cells are not filtered for responsiveness. The citation is real and it
is about fitting **one** twin. Applied to a **pair** it meant 6,084 pre cells against 4,903 post, two
cores shaped by different neurons, and a pre/post difference that could be the drug or could be the
1,181 cells present on only one side. That is the only question the study asks and it was not
answerable. Hours of training went into it, and training takes days.

Three things made it hard to catch and each is now a rule:

1. **A justification in a config made a wrong choice read like a considered one.** A justification is
   only as good as the question it was written against, and nobody re-asked it for the paired case.
2. **When the instrument flagged it, I explained it away.** 33977 scored 0.15 against 33328's 0.31; I
   wrote a tidy account of the gap instead of asking why the two twins were on different cell sets at
   all. The first question for a surprising number is *is this measured on the same thing*.
3. **I spent the evening on adjacent work while the expensive job built the wrong object.** The long
   job is the money; everything else is cheap.

`digital_twin.run.parity()` now **raises** — not warns — if the two twins differ in arm, cell set,
cell count, batch, tag or seeds. See [Solutions](../solutions/.cover.md).

## The second animal, and what the spontaneous scans turned out to be worth

33977 ships two **spontaneous** recordings — 20 minutes each, four fields, 9.4 Hz, a mouse on a blank
screen — recorded in the same sessions as the ImageNet scans. Four things had to be measured before a
spontaneous metamer was worth computing, and all four came back usable:

- **The frames coincide.** Best rigid shift between a spontaneous scan and its same-session ImageNet
  scan is (0.2, 0.2, −1.0) µm; nearest-neighbour median 3.3–4.5 µm against a shuffled control of 10.
- **The units convert at the twin's own window.** Raw traces are 3.7–4.1× more variable than the
  ImageNet responses; binned at **0.5 s** — the response window the twin was trained with — the ratio
  is **1.02 pre, 1.15 post**. Half a second under-averages, a second over-averages. Not a fitted
  factor.
- **The loader divides by std and does not centre** (batch mean 8.170, min 0.657 — matches `raw/std`,
  not `(raw−mean)/std`). So responses stay non-negative and **the absolute level is meaningful**,
  which is what makes "distance from the blank prediction" a real quantity. Doug: *"we might care
  about relative intensity, because difference from predicting blank is meaningful."*
- **The null is the twin's own.** `twin(zeros)` is what a mean-luminance screen predicts; snapshots
  are ranked by distance from it (median 1.745 per cell, chosen 2.39–2.79), and the recipe run
  against that prediction is the null metamer the others are read against.

## Where things stand

*Rewritten 2026-09-19, after Erin's neuropil-subtracted delivery. The state below replaces the
2026-09-17 state entirely; what that state said is in git.*

*The 33328 build and its comparison have since LANDED; what they gave is below. The state as of
2026-09-21 is the per-bin spontaneous analysis.*

**Next action, as a command:**
`python analyses/spontaneous/analysis/run.py 33977 --stages denoise,measures,spectra,dimensionality,figures,movies`
(from `src/`), once the six cross-inversion workers launched 2026-09-21 11:26 have finished. They
are filling `src/analyses/spontaneous/artifacts/33977/01-moments/{pre-pre,pre-post,post-pre,post-post}/real/`,
sixty bins a cell, and their logs are in that analysis's `logs/`. The command is safe to run at any
point: every stage rebuilds over whatever is on disk, so the figures and the movies are readable
early and simply get longer. **Then look at `moments-pre-twin.png` and say whether the bands follow
the responses or the twin** - that is what the square was built to answer.

**Two decisions are Doug's, and neither blocks the above.** The inversion schedule (1,000 steps
plus denoise, his ruling so far, or steps set by the convergence criterion) - the per-image
metamers (`--full`) wait on it. And the cortical spatial-autocorrelation test described near the
end of this section, which he said he would raise with Erin first.

**THE MOMENTS OF THE BLANK SCREEN — A NEW ANALYSIS, BUILT AND RUNNING** (2026-09-21). Doug: *"Make
an analysis called spontaneous, and in it... compute sequential metamers starting from the
beginning. It would be nice to have about 50 of each to start, but set it up so we can compute
more later... We want a statistical view of what we see. Does variance increase? Do spectral
properties change?"* And earlier: *"I want to statistically analyze the individual inversions in
the spontaneous data - a sort of pointwise null metamer... That is where hallucination would be."*

[`src/analyses/spontaneous/`](../../../src/analyses/spontaneous/.cover.md), structured LIKE a
pipeline but filed as an analysis: ordered stages in numbered artifact folders, resumable per bin,
the expensive one sharded over processes. **33977 only** - it is the only dataset with a spontaneous recording, the same fact that
gives it two cell sets instead of one.

**Why this is not the pooled null metamer again.** The pooled null averages 2,423 bins into one
vector. The twin is non-linear, so the average of the inversions is not the inversion of the
average, and the spontaneous state has **254 effective dimensions before the drug and 167 after**
with the leading component carrying 3.5% and 5.1%. Nothing says the twenty-minute mean is a state
the animal was ever in. If either condition runs through a succession of distinct patterns, the
pooled metamer's blandness is a fact about averaging.

**Four decisions it rests on, each of which could have gone the other way:**

- **The recipe is the pipeline's, unchanged**, and the crop is the pooled intersection metamer's
  own, read from its record. A moment and the pool are made the same way, denoised the same way and
  cut the same way, so their contrasts are comparable numbers rather than two rulers.
- **The cells are the intersection**, 1,177. On the union, 2,079 of 3,256 rows are asserted zero
  because segmentation never found them on a blank screen, and the pooled union null re-evokes at
  **0.30** against the intersection's **0.83**. A per-bin run would inherit that failure once per
  bin.
- **Every moment has a cell-shuffled partner**, seeded by the bin. A single bin is about five
  calcium samples at 9.41 Hz, a spontaneous moment never repeats, so there is no oracle - and the
  recipe draws an image from any vector it is handed. The shuffle keeps the response values and
  destroys their arrangement over the population, so it is what the recipe produces from the
  marginals alone. **Half the run is the control**, and that is the cost of being able to believe
  the other half.
- **"Variance" is ambiguous, so both readings are measured separately.** *Within a moment* is one
  metamer's contrast; *between moments* is the pixelwise standard deviation across a condition's
  moments. A condition whose moments are all the same picture has a high within and a low between,
  and the pooled metamer cannot tell them apart by construction.

**The pipeline gained one definition rather than a copy.** `spontaneous.binned_matrix` is now what
a spontaneous population vector IS in the twin's units, and `spontaneous.target` is its row mean -
so the pooled null and a moment are one construction differing only in how many bins are averaged.
Verified to reproduce the pooled target exactly (3,256 rows, 1,658 measured, 2,423 bins). Three
tests pin it and the shuffle in `test_metamer_recipe.py`; 53 core tests pass.

**WHAT THE MOMENTS SHOW, AND THE FIRST NUMBER I HAD TO WITHDRAW.** *Seventeen and sixteen moments,
consecutive half-seconds, so this is still a direction.*

**1. A preliminary result reversed when more moments landed, and it was the exciting one.** At
eleven and ten moments the post-DOI state was the more scene-like on excess kurtosis. At seventeen
and sixteen it is the other way round.

| excess kurtosis | n = 11 / 10 | n = 17 / 16 |
|---|---|---|
| pre-DOI state | 6.5 | **10.95** |
| post-DOI state | 9.8 | **9.61** |

The 1/f exponent gap shrank with it, post from 2.01 to 1.85 against a steady pre 1.59. **"Post is
more natural" was a small-sample artefact on the heavy-tail measure and is withdrawn.**

**2. What survives is the better fact.** Both states sit **78% to 90% of the way from white noise
to real scenes** on Field's own measure. The moments are scene-like in BOTH conditions, and the
instrument checks out: white noise returns exponent 0 and excess kurtosis 0, the twin's training
frames return 1/f^2.6 with heavy tails.

**3. The post-DOI moments do move far more from one half-second to the next.** Between-moment
pixelwise standard deviation **0.13 before the drug and 0.82 after**, and the median pairwise
correlation among moments falls from **+0.82 to +0.10**. The pooled null metamer averages exactly
this away by construction. Re-evoke is unchanged, **+0.599 pre and +0.589 post**, so the twin
satisfies one half-second as well after the drug as before.

**4. THE SHUFFLE PRODUCED THE ALARM THAT SET THE REAL CONTROL RUNNING.** Doug, seeing the post-DOI
shuffled row full of structure: *"Oh no! What is the interpretation of this? I think we need to
also make movies where we use the pre- twin only."* The shuffle destroys retinotopy, so the target
is impossible and re-evoke falls to **+0.02** - yet the post twin still draws high-contrast bands
from it while the pre twin handed an equally impossible target draws almost nothing. The banding is
therefore NOT the arrangement of activity. It is the post twin, the size of the post responses, or
both, and **the cross inversion separates them**: four folders, `pre-pre`, `pre-post`, `post-pre`,
`post-post`, twin first. If the bands follow the responses they are the cortical state; if they
follow the twin they are the model. Running now, sixty bins a cell.

**5. THE POPULATION NOISE MODEL WORKS AND IS THE ONE TO USE.** Doug: *"we should be able to denoise
using your model with a larger population of metamers to characterize the noise so as to remove
it."* Fitting the seed's share from the across-moment MEAN rather than image by image - the
pipeline's own `synthesis.local_shares` handed a better input, not a second estimator - drives the
residual's correlation with the seed from **+0.80 to -0.036** before the drug and **+0.58 to
-0.006** after. Every later stage measures those images.

**6. AND THE ANALYSIS MOVED TWICE BEFORE IT LANDED.** I first put it in `pipelines/.analyses/`,
which was wrong twice over: it claimed pipeline status the work has not earned, and that path is
already the metamer pipeline's own output folder. Doug: *"Pipelines are official. Something I
always run. Analysis is a list of attempts... All pipelines will be run for every dataset."* It
lives at **`src/analyses/spontaneous/`** with the code in `analysis/` and **numbered stage folders
under `artifacts/33977/`** - `01-moments` through `07-movies`. It could not be a pipeline in any
case: 33977 is the only animal with a spontaneous recording.

**7. A BIN IS HALF A SECOND, NOT TWO.** Verified in the delivered scan rather than recalled:
`meta/trials/integration_window` is 0.5 and `frame_presentation_time` is 0.5, identical in both
conditions. So 30 moments is 15 seconds and **120 is one minute**, real time is two moments a
second, and ten times real time is twenty. Doug had been working from a two-second bin, which is
out by a factor of four.

**8. FIGURES: ONE CLAIM EACH, EVERY ONE MADE TWICE.** Doug: *"Your figures are far too complex. I
need you to say one thing per figure... A good figure guides you to the place where it wants you."*
Five single-panel figures, each drawn once per twin with the twin HELD FIXED and the responses
swapped, so what differs between the two things compared is the state. **The title is the claim,
computed from the numbers** - and where the data does not support one it says so, which is why
`Too few moments to measure dimensionality yet` is a title this code prints.

**A CORRECTION TO MY OWN ARITHMETIC, CAUGHT BEFORE IT SETTLED INTO A DOCUMENT.** I put four-worker
throughput at **83 inversions an hour**, from a synthetic forward-and-backward benchmark run on an
idle machine. Measured in a fifth process against the four workers actually running: **253 ms per
gradient step** against about 190 ms idle, so an inversion costs about **6 minutes** under load and
the real rate is **~40 an hour**, half what I said. The benchmark was not the recipe - it timed a
bare forward and backward and left out the Fourier smoothing, the gradient normalisation, the clip,
the trace and the denoise pass. 200 inversions is about **5 hours**. This is the third time this
sprint that a number of mine was a prediction wearing a measurement's clothes; the rule that
follows is in the cover, which now says to quote the logs and not the benchmark.

**33328 IS TRAINING AT 1x, ON THE IDENTICAL CONFIGURATION.** Doug, 2026-09-20: *"we need the 33328
twin running on a configuration that is identical, using matched cells from the matched pipeline,
same config settings for the twin etc."* and *"No hacks. Make sure the pipeline runs like one,
with identical settings, files in analogous places."* Verified before launching, both datasets
resolving through `config.load`: scale 1, arm B, cells `matched`, 5 seeds, batch 128, max_iter
500, cutoff 10 µm, and **neither config overrides anything**. 33328's pair is
`33328-{pre,pst}-1x/B/matched` on the **749** matched cells of `matched/artifacts/33328/cells.csv`,
against 33977's 3,256. It is the package's own entry point, no flags, so every artifact lands
where 33977's did: `seeds/`, `cache/`, `figures/`, `logs/`, `ensemble_*.json` and `build.json`
under `digital_twin/artifacts/33328/`. Two stray logs at that folder's root (a duplicate
`prepare_33328.log` and the old 2x `run.log`) were moved into `logs/` in the same pass, so the two
datasets' folders now hold the same things and nothing else.

**33328 REPLICATES, AND ITS COMPARISON RAN FOR THE FIRST TIME** (2026-09-20/21). The whole
conductor on the identical configuration, prepare through build, `build.json` at commit `b3c9a89`.
Five seeds a side, pre 0.3046-0.3180 and post 0.2648-0.2691, all early-stopping at 52-63 epochs;
FEVE 0.470 pre on 456 scored cells and 0.496 post on 369; no dead filters.

| | 33328 | 33977 |
|---|---|---|
| median FEV before / after | 0.201 / 0.146 | 0.121 / 0.101 |
| population fall | **27.1%** | 16.1% |
| cells below the diagonal | 68% of 749 | 58% of 3,254 |

**THE DISSOCIATION THE COMPARISON GIVES.** 33328's link is `valid` (749 pairs against 319 by
chance), so `compare` produced a verdict rather than a refusal. On the 317 cells clearing 0.15 in
both conditions the paired FEVE difference is **-0.011** and 52% fall - no change. **The twin
explains the stimulus-driven part just as well after DOI; what shrinks is that part itself.** That
answers the first thing a reviewer asks, which is whether the effect is the model failing on post
data. Raw gain ratio post/pre 0.542. (Note, and do not put in one sentence without saying so:
33328's EVOKED gain halves while 33977's SPONTANEOUS rate rises 15% - two measures, one animal
each.)

**THE METAMER REPLICATES, AND ONLY IN UNITS THAT NEED NO CONVERSION.** 33328's unconditioned pair,
749 cells, re-evoke **0.86 / 0.88** - a real constraint, unlike 33977's 1.00, because this twin
explains half the explainable variance rather than a fifth. Before DOI its radial profile peaks in
the lowest bin, no preferred scale, exactly as 33977's does; after DOI it acquires a peak and the
crop's contrast rises. **That is the replication and it is the whole of it.** The peaks are 0.048
cycles per pixel in 33328 and 0.098 in 33977, a twofold difference that stands UNEXPLAINED.

> **RETRACTED, 2026-09-21.** I converted those two frequencies into microns of cortex - 594 and
> 431 µm, "overlapping at 372-578" - by setting each animal's cortical hull area against the hull
> of its READOUT POSITIONS. That is the identical move
> [Solutions 03](../solutions/03-the-frequency-axis-that-was-assumed.md) was written about, and I
> did not read it before repeating it. Doug: *"You need to write - I am not tired - of your micron
> per pixel. It is invalid and you need rigorous notes in the branch to stop trusting it, if for no
> other reason than images are downsampled. Stop."* **A pixel here is a COMPUTE SETTING** -
> `prepare.py` block-averages the 576 x 1024 source at `[images] scale`, 16 source pixels per scan
> pixel at scale 1 and 4 at scale 2, and the config's own comment says to move it to 2 when there
> is a machine. Every µm/px number halves that day. The readout is also not a retinotopic map
> (r = 0.86/0.36 on 33328, 0.48/0.25 on 33977, near rank-one both). **Every cortical and
> cycles-per-degree number anywhere in this chapter is withdrawn.** Report cycles across the
> frame, which is the monitor and survives a change of resolution; if a cortical distance is
> genuinely needed, run the lab's `validation.retinotopy_map` against `validation.whitened_rf`.

The imaged fields do differ and that is a fact worth keeping: 33977 covers 1244 x 1482 µm with
6,084 cells and 33328 covers 585 x 483 with 1,654, a factor of 6.4 in area, both single
contiguous sheets (24 of 24 bins occupied on both axes, largest gap 68 µm). But note what that
does NOT do, which is what convicted the conversion: the readout boxes are 48 x 29 px against
33 x 15, and in the HORIZONTAL direction 33328's readout spread is the LARGER of the two (0.21
against 0.19) despite half the cortical extent. Nothing is clipped by the monitor either - 0.0% of
cells beyond 0.9 of the grid in all four twins. Doug: *"Your red squares are not 6.4x each other in
any way."*

**A LATENT BUG ON THE ONLY PATH NO DATASET HAD RUN.** `compare` read `provenance["frame"]`, which
has never existed - the matched provenance records a frame PER SESSION - while
`loaders.neuron_ids` built the joined label inline. 33977 is refused several lines earlier and
33328 had never been taken through compare at 1x, so nothing caught it. `matched.cells.frame()` is
the one definition now, with a test that the provenance does NOT carry a dataset-level frame.

**THE NULL METAMER IS THE POSITIVE CONTROL, AND I HAD IT BACKWARDS TWICE.** Doug, 2026-09-20:
*"You got the answer. Look at the pre- and post- union result. They are flat. They are perfect.
They predict what the animal was seeing."* The animal was head-fixed in front of a blank screen;
the metamer of that state is a flat field; that is the method telling the truth, not a failed
inversion. I had called it an artifact. Then, given the level difference, I reached for gain - a
statement about drive - when the object answers *what image is this equivalent to*. Doug again:
*"The metamer isn't about drive. It is about the image that produces the activity. In one case, it
is a null result. No image does. Not distinguishable from background. In the other case, a luminant
white one."* Measured against the 5,965 frames the twin was trained on, whose own mean luminance
has a standard deviation of 0.53 in the loader's units:

| null metamer | level | on the screen | brighter than |
|---|---|---|---|
| union, before DOI | +1.11 | 185 of 255 | **96.9%** of the frames |
| union, after DOI | +0.40 | 140 of 255 | 81.0% |
| intersection, before | +0.88 | 170 of 255 | 94.8% |
| intersection, after | +0.27 | 132 of 255 | 73.5% |

So before DOI the blank-screen state is equivalent to an image brighter than 97% of everything the
twin ever saw - a particular, luminant image. After, it is an ordinary frame, the kind three
quarters of the training set already is: **no particular image accounts for the activity**. And it
is not a drive story - on the same 1,177 cells the spontaneous population vector RISES 15% after
DOI and 73% of cells fire faster, while more cells become segmentable on a blank screen (1,929
against 1,658). Activity up, correspondence to any distinctive image gone.
**Still missing: the monitor's actual grey level during the spontaneous blocks.** It is not in the
delivered scan. With it, the pre-DOI result is either the method recovering the real screen or a
departure from it, and that is a question for Erin or Jake.

**THE POST-DOI BAND IS NOT IN THE STIMULUS STATISTICS.** The frames the twin trained on fall as
1/f^2.47 across the crop, monotone, no peak anywhere. As each spectrum's share of its own power, at
4 cycles across the crop the after-DOI unconditioned metamer holds **4.6x to 8.5x** what a natural
frame holds; the before-DOI one holds 1.5x to 2.2x. The structure is not the scene statistics
coming back out of the twin.

**THE RETINOTOPIC MAP, AND WHY ONLY 33328 CAN GIVE IT.** Doug, 2026-09-20: *"you think in pixels
and that's dangerous... if it won't put it in a figure why guess here."* He is right and the
delivered scan settles it: there is **no screen size, no viewing distance and no degrees anywhere
in the data**. Every cycles-per-degree number in the section below is therefore withdrawn - the
0.53 px/deg it used came from an analysis script in this repo, not from a measurement. What the
data does carry is cortical microns per cell and, in the twins' readout, that cell's position in
the image. Regressing one on the other (mu averaged over the 5 ensemble members, matched cells,
`cell_motor_coordinates` through `matching.coordinates`):

| twin | frame | cells | cortical span | fit r, two axes | µm per pixel | anisotropy |
|---|---|---|---|---|---|---|
| 33328 pre @june | registered | 749 | 614 x 481 | **0.86** / 0.36 | **28** and 284 | 10.1 |
| 33328 post @june | registered | 749 | 613 x 485 | 0.73 / 0.37 | **33** and 276 | 8.4 |
| 33977 pre-1x | motor | 3,256 | 1239 x 1476 | 0.48 / 0.25 | 110 and 1334 | 12.1 |
| 33977 post-1x | motor | 3,256 | 1235 x 1484 | 0.46 / 0.22 | 128 and 2135 | 16.6 |

One retinotopic axis is recovered on 33328 at r = 0.86; the orthogonal one is not (0.36), and
33977 is weak on both (0.48, 0.25). Every fit is near rank-one, singular values differing 8 to
16x. The model-free whitened RF centres are worse still (r = 0.52/0.23). **The 28-33 µm per pixel
this produced, and the 280-350 µm of cortex derived from it, are WITHDRAWN** - see the retraction
below and [Solutions 03](../solutions/03-the-frequency-axis-that-was-assumed.md). The lab's own
`validation.retinotopy_map` on these cells returns 80.9 and 291.1 µm per pixel, three to ten times
larger and anisotropic where I used a scalar. **Nothing in this repository measures magnification
except that function.**

**WHICH RHYTHM THAT COULD BE.** DOI at 10 mg/kg raises spontaneous and evoked **5 Hz** oscillations
in mouse visual and retrosplenial cortex, travelling V1 -> RSC at 0.083-0.12 m/s
([Comms Biol 2026](https://www.nature.com/articles/s42003-025-09492-9)). Wavelength = speed ÷
frequency = **20 mm**, sixty times our patch, so that rhythm cannot make a spatial pattern here -
it makes a **uniform modulation**, which is exactly the null metamer's level change. Gamma is the
band whose coherence is quoted at a few hundred µm up to a mm
([Jia, Smith & Kohn 2011](https://www.jneurosci.org/content/31/25/9390)); **whether our structure
falls in that range is UNKNOWN, because the cortical conversion is withdrawn** - what can be said
is only that the 5 Hz wave is ruled out by three orders of magnitude, which needs no precise
magnification. In mouse V1 gamma appears as brief spatially localised packets nested in broad
theta waves
([Nat Comms 2026](https://www.nature.com/articles/s41467-026-68893-4)). Doug: *"this might be a
gamma artifact."* The arithmetic agrees. **But gamma is not visible in these traces:** the
spontaneous recordings are **9.41 Hz**, 11,400 samples over 1,211 s, Nyquist 4.7 Hz - a factor of
ten short, and the indicator low-passes below that anyway. Even the 5 Hz rhythm is above Nyquist.

**WHAT IS VISIBLE IS ITS SPATIAL FOOTPRINT.** Firing rates are rectified, so a rhythm with an
anchored spatial phase leaves a standing pattern in the TIME-AVERAGED rate even though the
oscillation itself averages to nothing over 2,423 bins. **The proposed test, model-free, no twin:**
place each matched cell's post-minus-pre spontaneous rate at its own cortical coordinate and
compute the spatial autocorrelation in µm. Structure near 300 µm means the metamer's peak is
retinotopy carrying a cortical pattern into image space; flat means the peak is the twin.

**THE THEORY IS FORTY-FIVE YEARS OLD AND IT IS DOUG'S.** *"If the drug causes increased neural
activity but the image to drive less, and the system proper takes the same activity to mean the
same thing, then you should see an echo of the endogenous activity that has spatial components...
they will get echoed into the representation if the system is starved for something coherent to
interpret."* That is [Ermentrout & Cowan
1979](https://www.researchgate.net/publication/22654874_A_mathematical_theory_of_visual_hallucination_patterns)
and [Bressloff, Cowan, Golubitsky, Thomas & Wiener
2001](https://case.edu/artsci/math/thomas/BressloffCowanGolubitskyThomasWiener2002NeuralComp.pdf):
V1 as a pattern-forming medium that, when the excitatory/inhibitory balance is perturbed - their
proposed action for hallucinogens - goes Turing-unstable into a spatially periodic cortical
pattern, which the inverse retinocortical map turns into Klüver's form constants. **The simplest
solution the model admits is a stripe, and an oriented grating is what the post-DOI metamer is.**
The starved-for-input half is [REBUS](https://www.sciencedirect.com/science/article/pii/S0031699724012961).
Our three numbers line up without being chosen to: explained variance from the image down 16%,
spontaneous rate up 15%, and the blank-screen metamer no longer a distinctive image. The theory has
been tested mostly against what people REPORT seeing; a twin lets it be asked of one animal's own
cortex.

**THE SPATIAL FREQUENCY OF THE POST-DOI STRUCTURE, MEASURED** (2026-09-20, windowed periodogram of
each denoised crop, zero-padded 8x, radially averaged):

*Restated 2026-09-21 in CYCLES ACROSS THE FRAME, the monitor's own width, which survives a change
of `[images] scale`. Degrees come with it because the FRAME's extent is known from the rig -
**Jake, via Doug: the image covers about 105 degrees of the mouse's field of view** - so
`cycles per degree = cycles per frame / 105`, a conversion that never touches a pixel. The
earlier degrees in this table rested on `PPD_AT_BASE = 0.53` scraped from an analysis script and
are replaced, not merely withdrawn.*

| cell set | metamer | before DOI | after DOI | cycles/degree after | period | power, post ÷ pre |
|---|---|---|---|---|---|---|
| union | null | 1.4 cycles/frame (no peak) | 1.4 (no peak) | - | - | 0.6x |
| intersection | null | 1.4 (no peak) | **5.3 cycles/frame** | 0.050 | 20° | **248x** |
| union | unconditioned | 1.4 (no peak) | **6.3 cycles/frame** | 0.060 | 17° | **22x** |
| intersection | unconditioned | 1.4 (no peak) | **6.3 cycles/frame** | 0.060 | 17° | **11x** |

**33328's post-DOI unconditioned peak is 3.1 cycles/frame, 0.029 c/deg, period 34°** - half
33977's frequency. Degrees do not reconcile the two animals and cannot: the conversion is the same
monitor for both, so the twofold difference survives it untouched. Only a per-animal cortical
magnification could, and that is exactly what is withdrawn. For reference rather than comparison,
mouse V1's preferred spatial frequency is usually quoted at 0.02-0.04 c/deg with acuity near 0.5,
so 33328 sits inside the preferred band and 33977 just above it.

Every BEFORE-DOI metamer peaks in the lowest bin the crop can measure - a monotone, scale-free
fall, no preferred scale. Every valid AFTER-DOI one has a peak near 5 to 6 cycles across the
monitor. **The
unconditioned peak is identical across the two cell sets** - 0.098 cycles per pixel and an
orientation of 142° against 144°, from 3,256 cells and from 1,177 - which is the strongest internal
check available, because the two inversions share only the twin pair and the seed. The null's peak
sits nearby (0.083 c/px) but at a different orientation, 90°, a vertical frequency and so
horizontal stripes. **Resolution caveat:** the crop is 40 x 27 px = 75° x 51°, so its own frequency
step is 0.025 c/px and only about four cycles of the structure fit across it; the peak is
0.098 ± 0.012 c/px and the orientation is coarse.

**THE TEST THAT WOULD SETTLE WHAT THE PEAK MEANS, not yet run:** the CROSS inversion - post's
response vector against the PRE twin, and pre's against the POST twin. If the ~6-cycles-across-the-frame structure
follows the twin it is the model's own spatial tuning; if it follows the response vector it is the
cortical state. The machinery exists (`metamer_cross_*` in the June analysis) and it is two
inversions.

**BOTH INTENSITY AXES ARE NOW ONE RULE THAT THROWS OUT OUTLIERS.** `shared_scale` spans its
images' pixels with the outermost **1%** at each end trimmed, and it is the same call for the full
frames and for the crops. Min-to-max had made the crop read flat beside its own frame, and the
cause was measurable: the seed model overshoots the display range wherever a raw pixel sat on a
clip bound, and that handful of pixels stretched the crops' axis to **1.4x** the frames'. Measured
on 33977, over all four crops and all four frames of each cell set:

| trim | frames' axis | crops' axis | crops ÷ frames | frame pixels saturated | crop pixels saturated |
|---|---|---|---|---|---|
| min/max | -1.82 to +2.22 | -2.50 to +3.12 | 1.39 | 0% | 0% |
| **1 / 99** | **-1.82 to +2.22** | **-1.66 to +1.93** | **0.89** | **0%** | **2%** |
| 5 / 95 | -1.47 to +1.87 | -0.89 to +1.56 | 0.73 | 10% | 10% |

(the union set; the intersection gives 1.45, 1.00 and 0.81.) At 1/99 the two axes come out the
same width and the crops' lands on the scan's own black-to-white range (-1.819, +2.222 - what a
pixel of 0 and of 255 become under the loader's normalisation), so a crop and its frame are on one
physical ruler although each axis is computed independently. Doug: *"The filtered ones wouldn't
have extreme pixels. Use the same algorithm, throw out outliers. You can choose 95th percentile
and 5th percentile, or even more extreme. That removes outliers right?"* - 5/95 was measured too
and saturates a tenth of every panel. **Clipping the denoised image to the scan's range was tried
first and reverted**: it edits the result to flatter the picture, and a display decision belongs
on the display axis.

**TWO CELL SETS, BOTH KEPT: UNION AND INTERSECTION.** Doug, 2026-09-20: *"Let's do two suffixes
on the figures - intersection, union - that's more neutral... I think we keep computing both.
Leave both in the pipeline."* UNION: every matched cell, the ones not linked into a spontaneous
recording called silent at zero. INTERSECTION: the **1,177** cells of matched's four-way table,
present in all four recordings, the objective asked about no other. `spontaneous.CELLS` is the
one place the two are named; the value is the suffix on the folder (`spontaneous-union/`,
`spontaneous-intersection/`, the same for `unconditioned-`), the figure and the phase
(`SINGULAR` = the five on the union, `INTERSECTION` = the five on the intersection, all ten by
default). The records carry `cells` and `n_constrained`; `re_evoke` and `readout_box` take the
rows. Doug's question that produced the second set: *"instead of computing the metamers where you
zero out the missing cells, what if you only compute it on the ones that are in both? How does
that change the result?"* Bare:

| metamer | cells | re-evoke pre / post | objective pre / post | denoised crop mean pre / post | crop std pre / post |
|---|---|---|---|---|---|
| null | union, 3,256, unlinked at zero | 0.30 / 0.21 | -4.80 / -4.70 | +1.11 / +0.40 | 0.37 / 0.32 |
| null | intersection, 1,177 | **0.83 / 0.83** | -0.33 / -0.37 | +0.88 / +0.27 | 0.33 / **0.93** |
| unconditioned | union, 3,256 | 1.00 / 1.00 | -0.005 / -0.004 | +0.07 / -0.01 | 0.52 / 0.91 |
| unconditioned | intersection, 1,177 | 1.00 / 1.00 | -0.004 / -0.004 | +0.14 / -0.06 | 0.62 / 0.98 |

**The union null metamer is not a valid inversion.** Asking the twin to hold 2,079 cells at exactly
zero while the rest fire is a target no image satisfies; those zeros dominated the objective (-4.8
against -0.33) and re-evoke sat at 0.2-0.3. On the intersection the twin matches the spontaneous
population pattern at 0.83 in both conditions. What it then shows, looked at: BEFORE DOI the null
metamer is a brighter, nearly level field (mean +0.88, std 0.33, a faint vertical ridge in the
spectrum); AFTER DOI it is a strongly structured image - a bright horizontal band over a dark one,
power on the vertical frequency axis at about 0.08 cycles per pixel (a horizontal grating of ~12 px
period), crop std 0.93 - which the union post null did not contain at all (the two correlate -0.07).
The unconditioned pair barely moves with the subset (0.54 / 0.79 correlation between the two sets;
the post-DOI diagonal grating is in both). One inversion per condition at 1,000 steps with the seed
regressed out; the structure's amplitude is budget-limited, its presence and orientation are the
drive's direction and are not. Both sets stay in the pipeline, by Doug's ruling.

**THE TWO METAMERS WERE THE SEED WEARING TWO COATS - found by Doug, pixel by pixel** (2026-09-20).
Every inversion starts from one seeded white-noise draw (by design, so the difference between
conditions is the twins and not the draw), and the MEI step schedule the recipe inherited - annealed
1/850 to 1/20400 on a unit-mean gradient - sums to **0.61 per pixel over 1,000 steps**. The drives
measured 0.54-0.71: the optimiser spent its whole budget and stopped with the objective still
falling, because a population gradient spreads over the field where a single cell's concentrates on
a few pixels. Each image correlated 0.78-0.84 with the seed; the two null metamers correlated 0.84
with each other while their drives correlated 0.63. Seed share fitted in the crop at 1,000 steps:
null 0.58 / 0.51, unconditioned 0.48 / 0.70; outside the readout box 0.90-0.94.

**THE FIX IS A LINEAR MODEL, NOT A RERUN, and it is in the pipeline.** Doug: *"Subtracting out the
noise to get what's left is good. Like modeling the metamer with a linear component that is the
noise and removing it from each in some way."* *"Whatever you are doing to the metamer, we need to
integrate into the pipeline all of it. And the denoising should be done on the regular metamers
too. The same noise should be used - same seed. This is important for regularity."* So
`synthesis.denoise`: within the crop the metamer is `the seed's share + what the twin asked for`,
and **the share is local in position and in frequency.** Three models were measured against one
instrument - the residual's local correlation with the seed in 9 x 9 windows, chance spread 0.09:

| seed model | left of crop | centre | right |
|---|---|---|---|
| one scalar share | +0.2 / +0.3 | -0.5 | -0.4 / -0.6 |
| one share per frequency band (11 bands, isotonic) | +0.2 | -0.5 | -0.4 |
| separable: smooth position factor x band factor | 0.0 | -0.35 | -0.35 |
| **local: sliding window (13 px) x 3 broad bands, isotonic across bands** | 0.0 | -0.2 | -0.2 |

**Two intensity axes** (2026-09-20, Doug: *"For the zoomed in ones, give them their own axis.
Don't plot them pegged to the global one... So two axes. That makes sense... Not per crop. For
ALL crops."*): the full frames share one scale and are the absolute view, a brighter frame is
more drive; the crops share another, taken from all the crops on the page together, and are the
structure view. Per-crop stretching was drawn and refused in the same minute.

And one number on top: **`FINEST_KEPT = 0.5`** - half of the seed's finest band is left in. That
band lies above the twin's resolution (its fitted share is ~0.8 everywhere; the optimiser barely
touched it), so it carries no drive to speak of, and its grain is what the eye reads as
sharpness. Doug, on the denoised crop against the raw frame: *"The top is so clear and the bottom
is not. Can you maybe tune the model to allow a bit more through? Because I would prefer a little
more noise with clarity there."* Looked at side by side at 0, 0.5 and 1: 0.5 is the structure with
its grain back. The captions say it.

Doug saw the first in the picture - *"Your model is removing too much... We need a noise model
that is smart enough to only subtract out the noise"*, *"You have a clear way of detecting noise
that is common to two images. That's what you are modeling"* - and the numbers said why: the
optimiser removes the seed heavily at the coarse scales where the cells respond (band shares
0.15-0.35) and barely at the fine grain they cannot see (0.7-0.8), and more where the readout is
dense than at the crop's edge; a scalar averaged all of that and put negative seed exactly where
the structure lives. Every raw local share is positive (0.15-0.9), so there is no anti-seed and
the floor at zero is right; unclipping changed nothing. The crop's mean is the drive's and is
kept exactly. `clean.py` runs it at the end of every inversion step and the per-image generator
on the finished files: `metamer_*-denoised.npy` beside the raw; `crop`, `seed_share` (energy-
weighted), `seed_shares`/`seed_bands` (the global per-band diagnostic) and `seed_local` in the
record; `organize` stacking the denoised set, the gallery reading it. The two images do not inform
each other and need not: the noise realisation is KNOWN, which is stronger than any estimate from
two samples, and what they share is the seed and one population's layout. Tests pin the draw, the
rule, the regression (a constant share and a frequency step both recovered, the mean kept) and
the pass.

**THE FOUR-WAY TABLE IS MATCHED'S.** Doug: *"Get those values from matched - it can be an
alternative set of matches generated across all four in the case of spontaneous recordings."*
`matched.cells.compose_four_way`: the spine's rows whose pre cell links (Erin's method at the
cutoff) into the pre spontaneous recording and whose pst cell links into the post one, with the
spontaneous ids and the row's position in the spine - `four-way.csv`, **1,177 of 3,256**, beside
`spontaneous-links-{pre,pst}.csv` (2,385 and 2,641 pairs). The spontaneous target links through
those tables instead of running Erin's method itself, and `measured_rows` reads the four-way rows -
verified identical, row for row, to the set the measured inversions were launched on, so nothing
reruns. The spine is not shrunk.

**THE CROP IS DOUG'S RULE, VERBATIM.** *"Maybe you can get the crop by just using the original one
if it's principled, and pulling in halfway to where the ellipse would be inscribed in the circle.
That's an easy algorithm."* The readout boxes intersected over the twins, pulled in halfway toward
the rectangle inscribed in that box's ellipse (sides 1/sqrt 2): **40 x 27 of 64 x 36 pixels at
x 15-55, y 6-33**, `synthesis.crop_box`, one number (`HALFWAY`). The gradient footprint that
preceded it drew 24 x 19 well inside the visible drive - Doug: *"Your algorithm is not capturing
the rectangle yet."* Gone, with its cached arrays.

**THE ABSOLUTE SCALE IS MEANINGFUL, from first principles.** The twin's pixel units are the training
scan's images centred on their mean and divided by their spread: zero is the ImageNet ensemble's
mean luminance (114.8 of 255) and one is its pixel standard deviation (63.1). The two scans agree
to three decimals (114.783 / 114.768; 63.110 / 63.088), so the reference is the same on both sides.
The null metamer's mean of **+0.58 before DOI and +0.28 after** is the drive, not the seed (seed
mean 0.01): a screen that much brighter than the ensemble mean, inside the range the twin trained
on. Doug: *"One being darker - is that meaningful? If it is I want it there."* It stays.

**THE CONVERGENCE TEST** (scratchpad, null before DOI, same recipe and seed, the schedule
stretched). Bare:

| steps | objective | re-evoke | seed share in crop | converged (change) | wall |
|---|---|---|---|---|---|
| 1,000 | -4.800 | 0.299 | 0.577 | no (1.6e-4) | 1,000 s |
| 2,000 | -4.756 | 0.301 | 0.226 | yes (4.1e-5) | 796 s |
| 4,000 | -4.742 | 0.301 | 0.053 | yes (1.1e-6) | 1,389 s |

Start -5.858. Stretching the schedule removes the seed and moves nothing else: re-evoke and the
objective are flat past 1,000 steps, so what the longer runs buy is a cleaner picture, which the
denoise already provides. The decision on the schedule is Doug's and open.

**THE FIGURES, looked at.** Pair figure, six panels: full frame with the crop marked; the denoised
crop with its share; the crop's 2-D power spectrum as the plain image. The spectrum is scipy's
windowed periodogram - Doug: *"USE libraries. There are a million spectral analysis and plotting
libraries, don't hand roll your own"* - mean removed, Hann window, zero-padded four times to a
square grid so the map is finely and isotropically sampled, the DC bin interpolated from its
neighbours (*"Remove DC always in spectra. Interpolate over it if need be"*), log power on linear
axes over the full range, colour range by rule (median to 99.8th percentile of both conditions).
After a zoom, a symlog contour, a symlog mesh, a 1-D radial average and a log-polar map were each
looked at: *"Just go back to the original 2D image."* Captions start at the title's margin, wrap
to the panels' span at their own type size, and size the page's foot from their line count (*"work
harder to align the caption, making it look professional"*). Every x axis tight - `axes.xmargin =
0` in the shared `STYLE`, so it holds for every figure (*"we need every figure tight on the x-axis
always. Floating plots look terrible"*). Family figure: NULL and UNCONDITIONED as column groups
(full frame, crop), BEFORE and AFTER DOI as rows named on the vertical axis - Doug: *"There is no
good way to write a y-axis horizontal."*

What the denoised crops show. The null is a level field, brighter before DOI, its spectrum a central
blob with a horizontal band - left-to-right variation - and a steeper low-frequency fall before than
after. (The unwindowed spectrum had shown a VERTICAL ridge; the Hann window removes it, so it was the
crop's rectangular edge, not the image.) The unconditioned before DOI is a row of low-frequency
blobs along the horizontal axis - faint vertical banding - falling scale-free; after DOI it is an
oriented grating: two lobes at about (±0.09, ∓0.06) cycles per pixel and a **peak in the radial
average at 0.1 cycles per pixel** (period ~10 px) twenty times the pre's power there, stripes
running about 55 degrees from horizontal. Read as a picture of one inversion per condition at
1,000 steps with the seed regressed out.

**THE EXPLAINED-VARIANCE FIGURE'S PANEL B CHANGED TWICE ON DOUG'S RULING**: first to the reduction
against FEV-before (the well-driven cells above ~0.3 lose 25-75% almost without exception; the
cells near the 0.10 floor scatter both ways), then with the reduction on the x axis so the two
panels share one axis. 1,273 of 1,845 cells above the floor lose explained variance. The old
before-against-after scatter is one revert of `f9b6037` away.

**THE PAIR IS BUILT, SCORED, AND ON THE MANIFEST - not adopted.** `python -m pipelines.digital_twin
33977` ran every phase on 2026-09-20: prepare/match/ceiling from cache, both twins from their
fingerprinted seeds, validate (FEVE median **0.202 pre, 0.283 post**), compare refused as a verdict
(`unregistered`), figures drawn, `build.json` recorded at commit `04cfeb8` with `adopted: false`
and each twin's data fingerprint. Seeds: pre 0.1284 / 0.1553 / 0.1478 / 0.1774 / 0.1254 at
35 / 53 / 52 / 81 / 33 epochs; post 0.1242 / 0.1889 / 0.1240 / 0.1058 / 0.1398 at 47 / 108 / 34 /
28 / 33. Wall clock ~11 h at 1x including a 4.5 h sleep, against 40 h at 2x.

**THE FIRST FIGURE.** `explained-variance.png`, drawn by the pipeline's own figures phase:
explained variance falls **16.1%** (median FEV 0.121 -> 0.101) on the same 3,254 neurons, **58%
below the diagonal**. Two of 3,256 pairs are left out with FEV undefined - neuropil subtraction
pins silent cells at exactly zero, the lab's estimator returns 0/0, and one NaN had poisoned the
median and the axis limits; the figure now drops and counts them in its caption. For scale, not
comparison: the original export at 2x read 23.4% and 68%.

**Two pipeline defects found by running the pass, both fixed the same hour:** the health figure's
model-free receptive field read images from the DELIVERED folder, which the new exports lack
(reads the assembled 36x64 scan now); and the NaN above.

**Doug's rulings this day, verbatim.** *"Let's use codes in library/data - we can create 33328 and
33977 and put all files that would be considered part of the dataset in each. Move don't copy."*
*"You can make a .shared folder for the imagenet scans because they are big."* *"We want 33977
trained. We don't want it to take 30 hours. If it's really that high right now, configure it to the
old resolution but with the machinery to change resolution, and put a comment in the code about what
it should be changed back to when we have the compute."* And on the metamer: *"We do white noise."*
*"Use the packages. Find your old code."* *"They aren't graded. Just use the same protocol as you
would any other metamer. Use a very low smoothing value."*

**THE DELIVERY, MEASURED.** Same cells, same `unit_ids`, same coordinates; every response changed.
Neuropil subtraction, not deconvolution: the mean falls threefold (1,633 to 529 pre), a third of
raw samples sit at exactly zero, per-cell correlation to the old trace is 0.90 and no single
rescaling explains it. Trials dropped 6,000 to 5,965 / 5,836 - almost all training trials; **the 100
test images survive untouched in both conditions**; post loses 3 validation images. The new ImageNet
exports carry `data/behavior` and `data/pupil_center` for the first time and **ship no images** -
at any scale the frames are assembled from the `.shared/` store by image id, and every id the new
exports use is in it (0 of 5,100 missing). Old and new generations are internally consistent
(ImageNet 1,633 : spontaneous 1,769 before; 529 : 565 after); mixing them is what breaks.

**THE TRAP THAT WOULD HAVE COST THE RETRAIN, closed and tested.** `train_seed` guarded a stale
checkpoint by `n_cells` only, 3,256 either way - executed with a fake loader, it returned the old
blob's score without calling the trainer. Every checkpoint and `build.json` now carry a data
fingerprint (export folder + sha256 of the response statistics); a mismatch is refused, a canonical
load refuses a build recorded against other data, a checkpoint that predates the fingerprint is
loaded on trust and says so. `src/tests/test_data_fingerprint.py`, six tests, toy data.

**THE RESOLUTION.** The 2x pair measured **26.3 h pre, 13.8 h post** from the checkpoints' own
minutes (one seed 662 min under contention). So 33977 trains at **scale = 1** - `configs/33977.toml
[images]`, one line, with the comment saying what to flip back - as `33977-{pre,pst}-1x/B/matched`
at batch 128. A stimulus-set dataset is addressable at every scale, `1x` included, because the
delivered resolution now has to be built too; `build()` checks which export a folder was assembled
from before calling it built; `frame_store` reads the archives in the trial order of the export they
were **numbered by** (`stimuli.toml numbered_by`), not the export the scan points at today.

**THE LABEL IS MORE CAUTIOUS THAN THE DATA.** 12-1's export `cell_motor_coordinates.npy` is
byte-identical to Erin's registered CSV, so the "motor" path has read registered coordinates on the
pre side all along. 17-3's match 12-1 at 3,256 pairs, median 4.57 um, p90 6.97, only 126 more at
20 um. `frame = "motor"` and `tracking = "unregistered"` stand until Erin confirms 17-3 (her CSV is
still header-only); the justification in the config records both the measurement and the old
reasoning. **Not blocked on the file any more; blocked on her word.**

**The metamer recipe was wrong and is fixed.** Blur alone set no step size; `reduction="mean"`
starved it (std 0.0043 against the delivered 0.520). Restored `walker_gradient` - the lab's
`FourierSmoothing -> DivideByMeanOfAbsolute -> MultiplyBy(annealed)`, which `_metamer_fixed.py` had
already prescribed - with the released `RandomNormal` init, smoothing at the published 0.04
exponent, re-evoke recorded on every singular metamer, and `stale()` so skip-if-exists compares
recipes. `test_metamer_recipe.py` fails on the old composition and passes on this one.

**The library moved under the code.** `library/data/<animal>/` per dataset, `.shared/` for the frame
store, every config path resolving through `config.root(animal)` with not one string changed. The
gitignore patterns were all anchored at `library/data/` and every one went silent on the move - a
`git add -A` would have staged ~4 GB. Rewritten, tested path by path, and the manifest carries
sha256 for all 16 archives including the delivery.

**The old 2x twins, their caches and the adopted manifest are deleted** (2026-09-19), per the ruling
on wrong twins reappearing. The 2x library entries remain by name for when there is compute.

**THE MATCHING IS ERIN'S, VERBATIM, AND IT CANNOT BE RUN ON 33977.** Her original is at
`library/data/.archive/match-cells.py.md` and `matching._erin` matches it step for step - cdist with
pre as rows, forward `argmin(axis=1)`, reverse `argmin(axis=0)`, merge on BOTH unit ids, filter at
**10 um**, coordinates from `unit_stack_coords.csv`, the csv filtered to the scan's own unit_ids.
Diffed line by line, not assumed.

The diff is what settles 33977: **her script opens the registered coordinate file and has no other
path.** Registered coordinates are the INPUT to her method, not a preference. 33977's stimulus scans
have none, so feeding it motor coordinates is a different procedure - and one we measured on 33328,
where both frames exist: it recovers **146 of the known 749** at any radius, and its extra pairs sit
at **11.8 um** in the registered frame against **2.70 um** for true pairs. Neighbouring cells. Doug:
*"I want Erin's matching algorithm. Not your best fit to it."* So `allow_unvalidated` is now **false**
for 33977 and the pipeline refuses matched-cell training there, by name, with the reason.

**One cutoff, everywhere: 10 um.** Doug: *"that is a dumb number. We can live with it."* It is
arbitrary, it is ERIN'S arbitrary, and using hers for every dataset is what makes it a method instead
of a choice made twice. It is also what the data-derived rule independently picks on the only animal
with an answer, and what the delivered 33328 archive is already keyed to.

**What a wrong pair actually corrupts:** the SAMENESS ASSUMPTION - that row i is one neuron before
and after - not the twins, which learn real cells either way. But a per-dataset, tuned-per-animal
method corrupts the paper worse, because it stops being checkable. So: one rule, stated in advance,
with the error rate reported rather than chased to zero. Doug: *"There will be some things wrong."*

**THROUGHPUT IS A CORRECTNESS ISSUE ON THIS MACHINE.** Training ran at ~4.5 min/epoch alone and at
**94 min/epoch** with a metamer job beside it - 21x slower, from memory pressure, with nothing
visibly failing. Killing the other job took it from 1.22 min/batch to 0.07. At the healthy rate a
seed is ~3 hours, so five seeds x two twins is ~30 hours per animal. **Nothing heavy runs beside
training.**

**Blocked on one file.** `cell_locations.csv` (unit_id, stack_x, stack_y, stack_z) for 33977 scans
**12-1 and 17-3**. The structural stack for that animal demonstrably exists - 12-2 and 17-1 are
registered into it at 100% coverage of the cells that have traces - so it is an export, not new
analysis. Doug is asking Erin. Everything else for 33977 is built and waiting on it.

### Complete

- The three pipelines, runnable end to end, dataset-generic.
- **[`matched`](../../../src/pipelines/matched/.cover.md)** - its own package, generic over the
  experiment's 2x2 (drug x stimulus-present). Every cutoff is DERIVED from the data, never fixed,
  and it reproduces 33328's validated 749 at Erin's own 10 um without being told either number, with
  identical row order - verified, because row order is identity downstream.
- `parity()` refusing a pair whose arms differ in anything but the condition.
- The metamer recipe settled as configuration, decision record in
  [`synthesis-recipe.md`](../../../src/pipelines/synthesis-recipe.md).
- The spontaneous groundwork: frames coincide within a session, units convert at the twin's own
  0.5 s window (ratio 1.02/1.15), the loader divides by std without centring so absolute level is
  meaningful, and `twin(zeros)` is the null.

- **2026-09-19:** the data fingerprint on every checkpoint and manifest, with its tests; the
  per-dataset data layout and `.shared/`; the resolution machinery (every scale addressable,
  `numbered_by`, provenance-checked `build()`); 33977 configured at 1x on the neuropil exports with
  behaviour; the metamer recipe restored to the lab's preconditioner and white-noise init, with
  `stale()` and re-evoke; the three pipeline test files where there had been none; eight commits,
  `b8b797e` to `30765a0`.

### In progress

- The convergence test at 4,000 steps (scratchpad `converge_test.py`, null before DOI); its 2,000-step
  point is above. Nothing in the pipeline is running.

### Not started

- The schedule decision (1,000 steps plus denoise, or steps set by the convergence criterion), then
  the per-image metamers behind `--full` - the clean pass already covers them.
- Arm A for 33977, now that behaviour exists for it: the behavioural-drive analysis that only
  33328 could support.
- Relabel the frame once Erin confirms 17-3's export coordinates are stack-registered.
- 33328's 2x pair: pst-2x has 1 of 5 seeds.
- The book: ch5 of The Altered Cortex and the validator's 20 errors (dead `src/library` links, the
  studies list, ten cited figures that no longer exist, a watchdog check for a run that finished).

### Wrong turns, so they are not retried

- **`cells = "all"` for a paired design.** Two cores fit to different populations cannot be compared.
- **"A wrong pair doesn't matter for training."** It does. The matched set is the scientific object,
  not a training convenience - every MEI, metamer and pre/post figure is indexed by its row, so a
  wrong pair yields a confident wrong result rather than a missing one. I used that argument to
  loosen the cutoff from 5 to 10 um, taking expected-by-chance from 23% to 52%. Optimise the cell set
  for being right, never for being large. Doug: *"A wrong pair does corrupt."*
- **A per-dataset BATCH SIZE, for the same reason.** 33977 overrode batch 128 to 64 with the note
  "at 72x128 the activations do not fit beside the loader" - a constraint about the FRAME, not the
  animal - while 33328 trained at 128 on the same frame size. Two values is two methods, because
  batch size changes gradient noise. It is also what put memory at 95% with 0.9 GB free, which is
  where the 21x slowdown starts. Now the default, justified by the resolution.
- **A per-dataset derived threshold.** Individually defensible, collectively unpublishable - 10 um
  for one animal and 5 for another is not a method. One number, stated in advance; what differs per
  animal is which coordinate frame exists, not the parameter. Doug: *"Consistency is what is
  conservative."*
- **Centring two sessions' clouds.** Catastrophic: 14.4% precision to 0.0%. The centroids differ
  because the segmentations sampled the volume differently, not because the frames are offset.
- **Coherent Point Drift for this size** - O(N^2) per EM step, minutes; ICP and gradient descent do
  it in seconds.
- **A mixture likelihood with a free affine and no change-of-variables term** - it collapses the
  cloud onto a line (singular values 0.133, 0.0018, 0.0001) and recovers zero true pairs. `-log|det
  A|` is what charges for the contraction.
- **A cumulative enrichment ratio as a threshold rule** - it stays high out to absurd distances
  because the true pairs at small radius carry it. CellReg compares densities; so does the fix.
- **A sigma sweep scored by pixel correlation to the stimulus**; **ranking MEIs by contrast**;
  **believing shared `unit_id`s mean shared cells** across scans (median 627 um apart).
- **A blur as the metamer's only preconditioner, and `reduction` as the step size** (2026-09-19).
  A blur does not set a step; summed over 3,256 cells the image saturated the clip, averaged it never
  left the init. The lab's `DivideByMeanOfAbsolute` is the op that makes the step independent of the
  loss scale, and `_metamer_fixed.py` had said so. Doug: *"You're probably handrolling it and forgot
  how we do it or what to look at."* What to look at was re-evoke, and the singular metamers never
  recorded it.
- **A blank initial image** on the strength of one sentence in a preprint, where every delivered
  metamer had started from white noise. Doug: *"We do white noise."*
- **Guarding a checkpoint by its cell count** - the same 3,256 cells with every response changed
  passed straight through. A checkpoint has to know which DATA it came from.
- **Moving the data without re-testing the ignore rules.** Every pattern was anchored at the old
  path; nothing complained; `git add -A` would have staged the dataset.
- **Ruling EGG out for a missing package and an absent GPU.** A package is an install, and
  `egg/diffusion.py` selects CPU itself. Doug: *"Don't you dare rule out because we don't have a
  package."* Whether CPU sampling is *reasonable* is a measurement not yet taken.
- **Calling neuropil subtraction "deconvolution"** from its signature. Erin named it; the numbers
  fit either until she did.
- **The MEI step schedule on a population target, unchecked against its budget** (2026-09-20). The
  annealed MultiplyBy sums to 0.61 per pixel; a population gradient gives every pixel the floor
  step; the metamers came out 0.78-0.84 correlated with their shared seed and Doug saw it pixel by
  pixel before I measured it. The instrument that was missing is the seed share; it is in every
  record now.
- **A gradient footprint as the crop** - 90% of the mass of |d(sum of responses)/d(image)|, then
  the largest inscribed rectangle. Principled and wrong: 24 x 19 well inside the visible drive,
  when the readout box pulled in halfway to its inscribed ellipse - Doug's own rule - gives 40 x 27
  and matches what the eye sees.
- **Row labels as horizontal text in a margin.** Doug: *"There is no good way to write a y-axis
  horizontal. It is fundamentally vertical. Can you stop trying?"* A row's name is a y-axis label.
- **The raw 40 x 27 spectrum on log axes.** A zoom cut the high frequencies off (Doug: *"we needed
  log scale not cutting off"*); a filled contour on symmetric-log axes drew the masked DC bin as a
  white diamond (*"No way that thing with the white diamond is correct"*); a mesh of the padded
  periodogram on symmetric-log axes stretched the window's sidelobes into stripes. The answer was
  the standard one - a windowed, zero-padded periodogram from scipy on linear axes, and the log
  axis on the 1-D projection - not a hand-rolled rendering of the coarse grid.
- **An orientation profile beside the radial average**, then **the radial average itself**, then
  **a log-polar map** (`skimage.transform.warp_polar`, faithful and tested with gratings): each
  rejected on sight - *"The spectra look okay but noisy compared to what they looked like just as
  an image"*, *"the spectra are looking really bad. Just go back to the original 2D image."* The
  plain periodogram image was the best rendering from the first time it was drawn.
- **One scalar share of the seed.** It averaged 0.2 at the coarse scales with 0.8 at the fine and
  subtracted 0.5 of a seed the structure band never had. The share is a function of frequency;
  Doug saw it in the picture before I measured it.
- **Quoting cycles per degree from a constant I found in a script.** `PPD_AT_BASE = 0.53` lives in
  `.analyses/digital-twin/resolution/resolution.py`; I used it as though it were a measurement and
  gave Doug four numbers in c/deg that rested on it. The delivered scan has no screen size, no
  viewing distance and no degrees. Doug: *"You frequently decide you understand cycles per pixel
  and you are always wrong... if it won't put it in a figure why guess here."* The units that need
  no constant are cycles across the crop and cycles across the frame; the one that can be MEASURED
  is µm of cortex, through the readout and the registered coordinates - and only on 33328.
- **Calling the flat null metamer an artifact, then calling its level a gain change.** The first
  denied a positive control that was passing; the second answered a question about drive when the
  object answers a question about equivalent image. Both corrections were Doug's and both were one
  sentence. The object's own definition is the guard: *the image that produces the activity*.
- **An intensity axis at min and max, and then clipping the data to fix it.** The crops' axis came
  out 1.4x the frames' off a handful of overshoot pixels, so every crop read flat beside its own
  frame. I reached for clipping the denoised image to the scan's range - which would have worked,
  and which edits the result to flatter the picture. Doug redirected to the axis: *"Use the same
  algorithm, throw out outliers."* A display problem is fixed on the display axis.

### Pointers

- [`configs/33977.toml`](../../../src/pipelines/digital_twin/configs/33977.toml) — **load-bearing:**
  the `[images] scale` line and its comment are the machinery to change resolution; the `[matching]`
  justification carries the coordinate measurement and the old reasoning side by side.
- [`test_data_fingerprint.py`](../../../src/tests/test_data_fingerprint.py) — **load-bearing:** the
  executable statement of the trap that would have reused the old twins.
- [`library/data/.cover.md`](../../data/.cover.md) — the per-dataset layout and the delivery.
- [`pipelines/metamer/synthesis.py`](../../../src/pipelines/metamer/synthesis.py) — **load-bearing:**
  the seed, the crop rule and the denoise, with the budget arithmetic that explains the seed share;
  [`clean.py`](../../../src/pipelines/metamer/clean.py) is the pass that writes them beside every
  metamer, singular or per-image.
- [`src/pipelines/.cover.md`](../../../src/pipelines/.cover.md) — the three pipelines and what each
  decides. **Load-bearing:** the ordering-never-filters rule.
- [`src/pipelines/metamer/.cover.md`](../../../src/pipelines/metamer/.cover.md) — the Cobos recipe,
  what is deliberately absent, and the EGG successor. **Load-bearing:** why the norm ceiling is out.
- [`.analyses/digital-twin/spontaneous/`](../../../src/pipelines/.analyses/digital-twin/spontaneous/)
  — `link.py` (frames, units, four-way cells), `align.py` (CPD + derived threshold), `snapshots.py`
  (the spontaneous metamer). **Load-bearing:** `link.log` carries the four measurements above.
- [`.analyses/digital-twin/synthesis/.cover.md`](../../../src/pipelines/.analyses/digital-twin/synthesis/.cover.md)
  — the metamer evidence, including the withdrawn σ finding. **Load-bearing:** the withdrawal.
- [`src/analyses/spontaneous/.cover.md`](../../../src/analyses/spontaneous/.cover.md)
  — the moments of the blank screen, one metamer per half-second bin against a cell-shuffled
  partner. **Load-bearing:** why the cells are the intersection, why half the run is the control,
  and the two separate readings of "variance". **Load-bearing:** `analysis/invert.py` holds the
  square of (twin, responses) combinations and why it exists; `analysis/denoise.py` holds the
  population noise model; `analysis/figures.py` holds the one-claim-per-figure rule.
