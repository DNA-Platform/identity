# His basis set

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

*"You should be surprised how much you can do with multiple lines on a figure with annotations, one or two histograms
with annotations, scatter plots with regression lines, power spectra and other simple signal processing
visualization."* (2026-11-03)

*"We respond well to curves with peaks or curves that are different, things with bins and dots that make us feel we
are seeing all the data with strong guides that help us quickly retrieve the result by eye."* (2026-10-07)

## The forms

1. **One or two superimposed histograms.** Same bins, each in its colour, drawn as outlines so overlap makes no new
   colour. Annotations: a reference line, or a bar on the x-axis for a region of interest. He asked for this form by
   name: *"I ASK FOR PAIRS OF HISTOGRAM."*
2. **Several lines on one axes, annotated.** Curves that peak, or that differ. Example he praised: CaImAn and
   Suite2P MEI amplitude spectra superimposed (2026-10-18). His reading: *"One is noisily the same. The other are two
   smooth and different curves."*
3. **A scatter with a regression line.** And the identity line when both axes share units. Example he praised: each
   cell's explained variance before against after DOI (*"It is a beautiful result"*, 2026-09-17). He then changed it
   himself to initial value against change. He wants the regression visible: *"I can't see the damn regression I
   want."*
4. **Power or amplitude spectra.** Log units, DC removed, superimposed. *"Remove DC always in spectra."* A 2-D spectrum
   as a plain image: *"I want the old one that looked like an image, just with DC removed."* Use a library; never hand
   roll.
5. **Images in image space.** MEIs and metamers. Full field of view, aspect ratio kept, legible without zooming, one
   intensity scale where images are compared. Judged by eye against the reference. See
   [chapter 3](03-image-space-and-information.md).
6. **Convergence curves.** A quantity against how much data it used, so its limit is seen.

## Representations he reaches for

- **Entropy, as uncertainty.** His MEI energy entropy (square, divide by the sum, entropy; compared as a ratio), and
  spectral entropy (*"amplitude divided by sum to get probabilities and then -p log(p)"*, 2026-10-19). He drops a
  measure that fails a known case (2026-07-14).
- **Energy and power.** *"how much power is being compared at those higher frequencies."*
- **Log scales that weigh fairly.** *"do the log axis that weights frequency fairly."*
- **Variance explained, PC1, population average, r, FEV/FEVE, oracle.** In his lexicon.
- **His sinusoidal normalization.** Pointwise, the sort. Never restructured.

## What he rejected

- Stacked bars. Planes of derived fractions (% above against % below). Multi-panel plates.
- A model's prediction drawn as clean data. A thick black smooth line.
- Pre and post in one frame when they are unpaired: *"You can't pair unpaired things in data representation."*
- Side-by-side panels of incompatible things.
- A time series of four points, or any statistic at N=4.
- Raster or pixel images of the trace matrix.
- Contour, log-polar and radial-average renderings of a 2-D spectrum.
- Tiny figures: *"Don't make me zoom."*

## Titles and names

- A title expresses the question and its answer, fast (2026-11-03).
- File names identify the analysis and the condition, so the same analysis has the same name in every dataset
  (2026-10-06).
