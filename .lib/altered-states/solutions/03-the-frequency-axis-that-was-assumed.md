# The frequency axis that was assumed

- **keywords:** analysis · pipeline · assumed-units · unsurfaced-substitution
- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **sprint:** [Sprint 15 — Four twins](../projection/15-sprint-15--four-twins.md)

---

## Symptoms

Doug, reading a two-panel figure that put the cortical sheet's spectrum beside the percept's on one
axis, after I had written that the two did not overlap:

> *"Yeah so keep working on the mapping. Did you look at the individual parts? ... really check the
> mapping before we decide the two things don't overlap"*

What was observed, before it was named:

- Figure 05 reported the cortical POST−PRE crossover at **0.61 cycles per pixel**, above the
  percept's band of 0.141–0.324, and I concluded in writing that cortex and percept "do not
  overlap". Both numbers were wrong and the conclusion was an artefact of the axis.
- The same figure's spectrum fell by **44×** from its coarsest to its finest bin, which read as
  strong spatial structure.
- Every fitted map of the sheet — thin-plate spline, then kriging — showed individual neurons as
  bright specks that no choice of smoothing parameter removed.
- The cell coordinates said **450 of 749 cells had a neighbour within 1 µm**, median 2D separation
  **0.155 µm**. No two somata can be 0.155 µm apart.

## What it turned out to be

**Three faults, stacked, each of which alone would have moved the axis.**

**One — the units of a library return value were assumed.** `powerbox.tools.get_power` has signature
defaults `a=1.0, b=1.0`, which is the convention in which its returned `k` is **angular wavenumber**,
radians per micron, not cycles. Multiplying it by microns-per-pixel and calling the product "cycles
per pixel" overstated every frequency by **2π**. Checked against a known 4-cycle sinusoid on the
project's own grid, the returned `k` came back at 6.76 times the true cycles-per-micron — 2π plus one
bin's width.

**Two — the magnification was matched, not measured.** The conversion from cortical microns to
stimulus pixels was obtained by setting the 749 cells' 614 µm cortical extent equal to the 31-pixel
width of the red rectangle, giving 19.8 µm per pixel. **The rectangle is the bounding box of the
coverage mask**, which is the union of the cells' receptive-field *extents*, not the spread of their
*centres*. The repository already ships the measurement: `validation.retinotopy_map`, fitted against
`validation.whitened_rf` — the model-free ridge-whitened receptive field, which owes nothing to any
readout and is the reason `readout_retinotopy` is marked circular. Run on these 749 cells it gives

```
  R_az = 0.587   R_el = 0.248   both past the permutation null   VFS = -1
  Jacobian singular values -> 80.9 and 291.1 um per pixel, anisotropy 3.6x
```

against the assumed 19.8 — **wrong by a factor of 4 to 15, and anisotropic where a scalar was used.**
The model-free RF centres span 19.9 × 11.5 px, not the rectangle's 31 × 13.

**Three — the estimator did not match the one it was compared against.** Figure 03 averages
one-dimensional row periodograms along x. The row-averaged periodogram at `kx` is the 2D power
**summed over ky** — a marginal. Figure 05 used powerbox's **radial** average, which mixes `kx` and
`ky`. Different quantities, plotted on shared axes.

**And the specks were a fourth fault, in the coordinates themselves.** `stack_z` is dropped from
`unit_stack_coords.csv` when the sheet is built, so a 37 µm slab is flattened and cells at different
depths land on each other. In 3D the median nearest-neighbour separation is **5.77 µm**, which is
physically sane. The interpolators were being asked to honour several different values at one point,
which is exactly what makes a lone neuron punch through a fit; no smoother can fix an ill-posed
question.

## What convicted it, and what the corrected axis then said

The controls, run on both routes: **white noise and position-shuffled data through the spline route
reproduced its spectrum almost exactly** (real 44× fall, noise 21×), and with the estimator held
fixed its real-to-noise ratio sat on **1.0 across the whole band**. The route could not tell the
tissue from noise. This is the same conviction, by the same method, as
[the decoder that replaced the twin](01-the-decoder-that-replaced-the-twin.md) — put the instrument
in the null before believing it.

With the magnification measured rather than assumed, the arithmetic that matters is one line:

```
  the band of interest, 0.141-0.324 cycles per pixel
      = 1088 down to 474 um per cycle OF CORTEX     (at 153.5 um/px, the geometric mean)
  the imaged patch is 614 um wide; the widest cell pair is 748 um apart
```

**At the coarse end of the band, one cycle does not fit inside the field of view.** Frequencies below
0.205 cycles per pixel are constrained by no pair at all. That is not a defect and no analysis can
remove it — it is a property of a 614 µm window, and it should be checked before any future
spatial-frequency work on this recording rather than after.

## IT HAPPENED AGAIN — 2026-09-21, the same fault, in the same hand, on the metamers

Doug, after I had converted the post-DOI metamer's spatial period into microns of cortex for two
animals and reported that they agreed:

> *"You need to write — I am not tired — of your micron per pixel. It is invalid and you need
> rigorous notes in the branch to stop trusting it, if for no other reason than images are
> downsampled. Stop"*

**What I did was fault Two above, verbatim.** I set the matched cells' cortical hull area equal to
the hull area of their READOUT POSITIONS and took the square root of the ratio as microns per
pixel — 28.5 for 33328 and 42.2 for 33977 — then multiplied the metamer's period by it and
published 431 µm and 594 µm as cortical wavelengths that "overlap at 372–578 µm". It is the same
move as setting 614 µm equal to a 31-pixel rectangle. **This chapter already said not to, by name,
and I did not read it before doing it.** The lab's own `validation.retinotopy_map` on these very
cells returns 80.9 and 291.1 µm per pixel; my 28.5 is three to ten times smaller and a scalar
where the measurement is anisotropic 3.6×.

**And Doug's reason is stronger than any of that, because it kills the UNIT and not just the
estimate.** The frames are downsampled: `prepare.py` block-averages Erin's 576 × 1024 source into
the scan at `[images] scale`, which is 16 source pixels per scan pixel at `scale = 1` and 4 at
`scale = 2`. **`scale` is set for compute, and `defaults.toml` says in its own comment to move it
to 2 when there is a machine.** So every microns-per-pixel number, and every spatial frequency in
cycles per pixel converted through one, changes by a factor of two the day someone changes a
setting that has nothing to do with biology. A quantity that moves when the compute budget moves
is not a measurement of cortex.

The second reason, from the same day, is that the readout positions are not a retinotopic map to
begin with: regressed on cortical coordinates they give r = 0.86 and 0.36 on 33328's two axes and
**0.48 and 0.25 on 33977's**, and the fitted maps are near rank-one (singular values differing 8
to 16×). Most of the readout's spread is not position. Two of the animals' numbers then "agreeing"
is two unreliable estimates landing near each other, which is not evidence and reads exactly like
evidence.

## The rule this earns

**A unit and a magnification are measurements, not conveniences.** Two extents being equal is not a
magnification; a library's `k` is not cycles until its Fourier convention has been read. Both faults
here produced numbers that looked entirely reasonable — 0.61 cycles per pixel is a plausible spatial
frequency, and a 44× spectral fall is a plausible spectrum — which is why neither was questioned for
a day. **Check the instrument before the finding**: a broken conversion returns a plausible number,
and a plausible number reads as a result.

**STRENGTHENED 2026-09-21, after the recurrence. Three rules, and the first is absolute.**

1. **Never convert a spatial frequency out of pixels.** A pixel of a twin's input is a block
   average of the source frame whose size is a COMPUTE SETTING (`[images] scale`). Report
   **cycles across the frame** — resolution-independent, because the frame is the monitor — or
   cycles across the crop beside it. Both survive a change of `scale`; microns per pixel and
   cycles per degree do not.
2. **If a cortical distance is genuinely needed, run `validation.retinotopy_map` against
   `validation.whitened_rf`** and report its two singular values, not a scalar. Nothing else in
   this repository measures magnification. A ratio of two extents is not a measurement however it
   is dressed — as a bounding box, as a convex hull, or as the square root of an area ratio.
3. **Degrees come from the FRAME, never from a pixel.** The screen geometry is not in the
   delivered data - no screen size, no viewing distance, no degrees anywhere in a scan's `meta/` -
   so the one legitimate anchor is the rig itself. **Jake, via Doug, 2026-09-21: the image covers
   about 105 degrees of the mouse's field of view.** That attaches to the MONITOR, which does not
   change when `[images] scale` does, so

   ```
       cycles per degree = cycles across the frame / 105
   ```

   is safe and `cycles per pixel x pixels-per-degree` is not, because the second reads a compute
   setting as if it were geometry. Do not use `PPD_AT_BASE = 0.53` from
   `.analyses/digital-twin/resolution/resolution.py`: it is that same conversion frozen at one
   scale, it is a script constant rather than a measurement of these recordings, and it disagrees
   with Jake's frame (0.61 px/deg at 64 px across 105 degrees).
   **Degrees do not reconcile two animals.** The conversion is identical for both, so a twofold
   difference in cycles per frame stays a twofold difference in cycles per degree. Only a
   per-animal cortical magnification could reconcile them, and that is the thing this chapter
   says cannot be had from a ratio of extents.

The estimator that finally escaped all of this uses no grid and no conversion of positions at all —
every pair of cells at its own separation, `P(k) = (2/N) Σ_{i<j} v_i v_j J₀(2πk d_ij)` — and was
validated by recovery before use: sinusoids of 40, 80 and 150 µm placed on these same 749 positions
returned 39.9, 79.6 and 149.4, at two orientations, and 147.6 with noise added at signal-to-noise
0.3.
