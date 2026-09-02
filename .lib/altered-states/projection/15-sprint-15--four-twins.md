# Sprint 15 — Four twins: the filtered-pupil pair and the reverse pair

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **status:** `active` — **all four twins have their five seeds** (verified on disk against
  `_checkpoints/results.jsonl`). The analysis they were built for has started; the MEI comparison
  has not.

---

**Doug, 2026-08-30, the objective in his own words:**

> *"I need four new twins, two forward stim => activity with filtered behavior, and two reverse:
> activity => PRP with no behavior in another analysis project."*

Two projects, two directions, five seeds each.

| # | twin | direction | behaviour | project |
|---|---|---|---|---|
| 1 | forward pre | stimulus → activity | **filtered pupil** | `most-exciting-image` |
| 2 | forward post | stimulus → activity | filtered pupil | `most-exciting-image` |
| 3 | reverse pre | activity → PRP | **none** (arm B) | `perceptual-twin` |
| 4 | reverse post | activity → PRP | none | `perceptual-twin` |

---

## Where things stand

**Next action, as a command:** `/ce-brainstorm`. Doug, closing the session on 2026-09-02:

> *"Interesting work. I want to start a new analysis. /ce-compound and /ce-handoff this one so we
> can branstorm whats next in the next session."*

**The subject is his to set and he sets it in the room.** What this session expected is written under
*What was left open* below; read it as an expectation, not as a brief.

### Complete

- **All four twins, five seeds each** — verified on disk against `_checkpoints/results.jsonl`, not
  from memory. Forward pre and post with filtered pupil in
  `most-exciting-image/pipeline/_checkpoints_optical_behaviour_eye0p02/`; reverse pre and post in
  `perceptual-twin/analysis/.resources/reverse/_checkpoints/`. Forward pre validation correlation
  0.3810-0.3999.
- **The pupil-arm audit.** Run on real tensors before training: stimulus channel unchanged, pupil
  scaled x1.1937 and x0.8700, running held at 0.0146, every held value inside the trained range.
  `PASS`.
- **The decoder is out of `most-exciting-image`.** Doug: *"No decoder arrays. That was a mistake."*
  Code moved to `perceptual-twin/.../reverse/from-most-exciting-image/`; arrays removed from
  `_organized`, `_data` and the deliverable's `data/`.
- **`twinarchive.py`** — pack, unpack and **verify**, manifest keyed folder to model to sha256.
  `status` answers "is what is on disk what was committed", which was unanswerable for most of this
  sprint.
- **The percept side of the spectral analysis** — figures 01, 02, 03 and 03b in
  `perceptual-twin/examples/analysis/computation/most-plausible-perception/`. These stand and were
  not touched by the defect below.

### In progress

- **The cortical side of the spectral analysis.** Rebuilt from nothing after
  [Solutions ch 3](../solutions/03-the-frequency-axis-that-was-assumed.md). Two figures survive:
  **04**, the cortical sheet band-limited so no single neuron can be drawn, and **06**, the pair
  spectrum. Every earlier version was deleted, and the scripts for them are gone with them.

### Not started

- **The MEI comparison the sprint was called for.** Doug: *"MEI similarity across PRE-POST twins,
  which should be independent."* The forward pair is finished, so this is unblocked and simply not
  begun.
- **`loop.py` — composing forward and reverse, iterating for fixed points.** The reverse pair now
  exists. Unblocked, not begun.
- **`browse-pupil.ipynb` figures** — needs MEIs and metamers run on the finished forward post pair.

### What was left open, as a question rather than a plan

**The percept and the cortex have opposite signs through the band of interest.** Through 0.14-0.29
cycles per pixel the percept carries *more* relative power after DOI (+3.5%) while the cortical field
carries *less*, and that holds under two cortical routes that share no code. Either the reverse twin
inverts the input-output spectral relationship in this band — which a nonlinear network is entitled
to do — or one of the two measurements is wrong. **This is an expectation of where the work was
heading, not the next sprint's brief.**

### Blockers

| blocker | waits on |
|---|---|
| any spatial-frequency claim about the cortical sheet at 474-1088 um | **nothing that can be fixed** — the imaged patch is 614 um wide and the widest cell pair is 748 um apart, so at the coarse end of the band one cycle does not fit inside the field of view |
| `browse-pupil.ipynb` figures | MEIs and metamers, not yet run |

### Rulings — Doug, verbatim

Carried forward:

- *"parity modulo the needs of each direction. activity to image and image to activity is not the
  same."*
- *"We need 5 seeds always."*
- *"This is perception NOT representation."*
- *"Data should live in library data... The trained twins don't live there but the dataset from Erin
  does."*

Given this session, and each one changed what was built:

- *"It propagates on the cortical surface"* — so the spatial measurement is made in **microns of
  cortical tissue**, and the retinotopy is used for one thing only: relabelling the finished
  frequency axis.
- *"We aren't doing retinotopy. We use that scale but I am looking for DOI-based activity"*.
- *"We need a network measure that doesn't bin"* — binning distances is a choice nobody can defend,
  and a binned magnitude cannot separate a noise floor from an oscillation.
- *"I want you to remove all techniques that you don't feel good about. We can't use the null result
  for that, but we can use the smoothness of the result"* — **a technique may not be selected or
  rejected by the answer it gives.** Two routes were deleted on exactly that ground and had to be
  restored.
- *"if white noise is doing something we have done something wrong"*.
- *"Havign a figure generated doesn't mean you are done. It means you get the first bit of
  feedback."*
- *"All figures should be independently comparisons that are similar"* — hence one shared renderer,
  and each figure carrying its own control rather than a separate control figure.
- *"Don't put NULL on the figure"*.

### Verification — what was actually run, with the numbers

- **The pair estimator was validated by recovery before it was used.** Sinusoids of known wavelength
  placed on the real 749 cell positions return **39.9, 79.6 and 149.4 um** against true values of
  40, 80 and 150, at two orientations, and **147.6** with noise added at signal-to-noise 0.3. Longer
  waves read 2-7% high as they approach the 614 um patch. Against numpy's radially averaged FFT on
  regular grids it correlates 0.80-0.91 at unit scale — it tracks that estimator without being
  bin-for-bin identical, and that distinction is stated on the figure.
- **The band-limited sheet reproduces a constant exactly**, 3.7000 to 3.7000, and its sampling
  density is divided out.
- **The k-range is not doing the work.** The pair result's peak, trough and both zero crossings move
  by under 2% across five different normalisation ranges.
- **Statistical power scales with cells, not pairs.** 280,126 pairs are built from 749 numbers; each
  cell sits in 748 of them. For this estimator the spread under an uncorrelated field does not fall
  with N at all, while the signal grows like N — so the budget is sqrt(749) = 27, not
  sqrt(280,126) = 529. Measured standard error across the 100 images: 0.094 against a PRE signal of
  0.90.

### Wrong turns already tried — do not repeat

1. **`torch.manual_seed(seed)` before `load_pairs()` does nothing** — `static_loaders(seed=1)`
   reseeds the global RNG. [Solutions ch 2](../solutions/02-the-seed-that-was-overwritten.md).
2. **A dense Gaussian scatter is 1,568x the work of the forward readout.** Use the bilinear adjoint.
3. **Killing the Python leaves the shell, which restarts the queue.** Verify zero processes first.
4. **Two concurrent training jobs page on this machine.** One at a time.
5. **`rf_mask` takes readout centres, not dimensions.**
6. **Do not convert cortical microns to stimulus pixels by matching two extents**, and do not read a
   library's `k` as cycles without checking its Fourier convention.
   [Solutions ch 3](../solutions/03-the-frequency-axis-that-was-assumed.md).
7. **Do not try to make the cortical map smooth and keep the band.** They are mutually exclusive
   here: 265 columns give a sampling limit of 67 um per cycle, the filter that hides a single neuron
   passes nothing finer than 174 um per cycle, and the band of interest is 61-140 um per cycle on
   that grid. A smoother that produced a smooth field would be drawing structure the tissue has not
   got.
8. **A brick-wall lowpass is the wrong filter for scattered points.** Its kernel rings, its density
   estimate went to -1.05 of its own mean, and dividing by that blew the maps up. Use a Gaussian.
9. **`scikit-gstat`'s `use_nugget` defaults to `False`**, so a fitted nugget of zero is the library's
   choice, not the data's — and a zero nugget makes kriging an exact interpolator, which is what
   puts single neurons through a fit.

### Reading list — shaped for a brainstorm, three items, and a starting point not a boundary

1. [The Altered Cortex, ch0 — The turn](../the-altered-cortex/00-the-turn.md), then its validator.
   **Load-bearing:** the reading list and what must be true before a turn may end. Doug's standing
   instruction is to open it fresh every turn rather than work from recollection.
2. [Solutions ch 3](../solutions/03-the-frequency-axis-that-was-assumed.md). **Load-bearing:** the
   field-of-view arithmetic. Any brainstorm that proposes a spatial-scale measurement on this
   recording has to clear 474-1088 um per cycle against a 614 um patch first.
3. [The Altered Cortex, ch7 — The criteria for hallucination](../the-altered-cortex/07-the-criteria-for-hallucination.md).
   **Load-bearing:** the three operational clauses, and the standing rule that the generator belongs
   in the null.

### How to see what this sprint made

```bash
cd src/analyses/perceptual-twin/examples/analysis/computation/most-plausible-perception
```

Six figures. **Read 03 first** — the percept's spectrum, where the band of interest is defined by its
own trend crossing zero. Then **06**, the cortical pair spectrum on the same axis, which is where the
two disagree in sign. **04** is the cortical sheet, band-limited; its fourth panel is a white-noise
control and it is 80% as blobby as the data, which is the honest limit of that picture.

### Pointers — what is load-bearing in each

- [`reverse/mirror.py`](../../../src/analyses/perceptual-twin/analysis/.resources/reverse/mirror.py)
  — the reverse architecture stage-for-stage against the forward twin, and `BilinearScatter`, the
  exact adjoint of the readout's `grid_sample`. **The retinotopy lives inside the generator**: it
  deposits each cell's activity at its own mu.
- [`reverse/loop.py`](../../../src/analyses/perceptual-twin/analysis/.resources/reverse/loop.py)
  — composition, and the comparability constraint it enforces rather than assumes. Untouched this
  sprint and now unblocked.
- [`validation.py`](../../../src/analyses/most-exciting-image/pipeline/validation.py)
  — `whitened_rf` is the model-free receptive field and the only non-circular retinotopy;
  `retinotopy_map` is the published magnification measure; `readout_retinotopy` is marked circular
  and must never be used as a gate.
- [`twinarchive.py`](../../../twinarchive.py) — `status` answers whether what is on disk is what was
  committed.
