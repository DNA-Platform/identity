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

## The rule this earns

**A unit and a magnification are measurements, not conveniences.** Two extents being equal is not a
magnification; a library's `k` is not cycles until its Fourier convention has been read. Both faults
here produced numbers that looked entirely reasonable — 0.61 cycles per pixel is a plausible spatial
frequency, and a 44× spectral fall is a plausible spectrum — which is why neither was questioned for
a day. **Check the instrument before the finding**: a broken conversion returns a plausible number,
and a plausible number reads as a result.

The estimator that finally escaped all of this uses no grid and no conversion of positions at all —
every pair of cells at its own separation, `P(k) = (2/N) Σ_{i<j} v_i v_j J₀(2πk d_ij)` — and was
validated by recovery before use: sinusoids of 40, 80 and 150 µm placed on these same 749 positions
returned 39.9, 79.6 and 149.4, at two orientations, and 147.6 with noise added at signal-to-noise
0.3.
