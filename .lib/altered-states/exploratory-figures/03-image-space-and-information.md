# Image space and information

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

The two lenses of this project's microscope ([Doing Science](../doing-science/01-the-scientist-and-the-assistant.md#the-question-is-how-doi-acts)).
Image space shows what activity may represent. Information says how much it carries. A tool borrowed from either field
is a claim that it represents something important here; I state the claim and Doug validates it.

## A representational space

A space built to place representations in (between blank and natural, by energy and scale) must be a sensible
representation of possible representations (Doug, 2026-11-04):

- **A coherent distance.** Every distance has a meaning: *"make sure distance means something like distance from some
  blank to some natural. If blank isn't one spot, I'm not sure you linearized it."* When an end is a set, measure from
  a member of it (each image's own blank).
- **Units with a reason.** Prefer units in which equal steps mean equal changes: octaves for spatial frequency,
  doublings (log2) for energy.
- **References that span what could be meant.** Blank and natural images, and, for hallucination, the fundamental
  patterns of the Ermentrout-Cowan model (stripes and lattices of cortical activity; spirals, tunnels and funnels in
  the visual field): *"post DOI the animal isn't going to be hallucinating real mice ... the structures could be more
  like fundamental patterns ala Cowan's hallucination model. We need to find what that activity means according to
  the twin."*

## Image space: MEIs and metamers

An MEI is the image that drives a cell most (Walker 2019). A metamer is an image that makes the twin reproduce a
recorded response (Cobos 2022; Freeman and Simoncelli 2011). Both translate activity into a picture.

How to show them:

- **Many per target.** A metamer is one sample from the set of images the twin cannot tell apart. What the samples
  share is what the twin represents; what varies, it ignores (Freeman and Simoncelli).
- **MEIs from different starts should converge** (Walker). If they do not, the image is not a property of the cell.
- **Controls in the same grid.** The reference image beside its metamer; the blank beside metamers of spontaneous
  activity.
- **One rendering scale** for anything compared (Walker equalised mean luminance and contrast). The lab's metamer
  recipe stretches each image to 0-255 on its own, so say so when comparing.

When to trust one:

- Convergence was measured.
- The match is far above a null of random pairs, on more than one measure (Feather 2023).
- The similarity sits between a ceiling (split halves) and a floor (different images) (Cobos).
- An independent observer agrees: the animal, or a held-out twin. Each twin has its own blind spots (Feather).
- No high-frequency texture the cells could not have produced (Olah 2017).

## Information

A bit halves the uncertainty (Quian Quiroga and Panzeri 2009). The quantities:

| quantity | for | note |
|---|---|---|
| **surprisal**, -log2 p(r) | one response | for continuous data only differences are meaningful |
| **entropy**, H | a distribution | estimates from few samples are biased low |
| **mutual information**, I | stimulus and response | estimates are biased high; plot against number of trials |
| **decoded bits** | a decoder's confusion matrix | a lower bound |
| **Mahalanobis distance**, d² | one response against a reference cloud | under a Gaussian, d² follows chi-squared with N degrees of freedom |

**-p log2 p is not a distance.** It is one term inside an entropy. It peaks at p = 1/e and is zero at 0 and 1, so two
very different responses can score the same.

**"How far from the blank" in bits**, if a Gaussian is assumed: (d² - N) / (2 ln 2) bits is the surprisal of a
response minus the blank's own entropy. It is zero on average for blank responses and grows with distance. It needs:

- a blank cloud with the right spread: measured trial-to-trial noise, not only the spread from jittering the input
  (jitter alone makes the cloud too narrow and every distance too large);
- many more blank samples than cells, or the inverse covariance is biased.

Show it as a histogram beside the same quantity for held-out blank responses, its null.

## Bias and sampling

- Information estimates need many trials per response state (Timme and Lapish 2018).
- Bias grows with the number of response states, so a richer code can look more informative only because it is
  richer (Ince, Schultz and Panzeri).
- Plot the estimate against the number of trials to show it has converged.
