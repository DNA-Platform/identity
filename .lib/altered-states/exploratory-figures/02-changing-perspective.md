# Changing perspective

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

A change of perspective changes what the eye can read, not the data. Each one reveals something and hides something.
Say which one was used.

## Transforms that keep the truth

| transform | reveals | hides |
|---|---|---|
| **log** (Tukey) | a gain as a shift; ratios | zeros (report their share separately) |
| **square root** (Tukey) | counts with even spread | plain units |
| **cumulative distribution, quantiles, ranks** (Wilke, Gelman) | every point, no bin choice; a quantile plot of after against before separates a shift from a gain | the shape of the density |
| **several bin widths** (Wilke) | which modes are real | nothing, if all are looked at |
| **difference or ratio to a reference** (Cleveland, Tukey) | the change itself | the levels, so keep the originals beside it |
| **residual from a fit** (Tukey, Gelman) | what the fit missed | the fit, so show it first |
| **normalization to a baseline** | shape | the factor removed; if that factor could be the drug's effect, show it too |
| **spectrum, autocorrelation** (Mitra, Pesaran) | rhythm, with local error bars | phase and timing |
| **cumulative energy** | where the variance is, with no bins | the ordering's meaning |
| **bits** | information on a scale people share | depends on a model; see chapter 3 |
| **aspect ratio** (Heer and Agrawala) | fast changes (raw) or slow trends (smoothed) | the other one |

Tukey: *"it often pays to plot residuals."* Re-express before subtracting: take logs, then the difference.

## Several lenses on one subject

*"Try both and see if one seems to represent something more meaningful than the other. These are like lenses on a
camera and you are taking pictures. Same subject matter."* (2026-11-04). When two measures could answer one question,
compute both, look at both, and keep the one that shows something meaningful. Say that both were tried.

## A reference makes a figure a test

Gelman: *"the graph itself is the test statistic."* Draw the data over its reference: a histogram of the reference
distribution with the observed value marked, or the data in bold over shuffled or bootstrapped replicates. Without a
reference, exploring turns into seeing faces in clouds.

## How to compare

- **Position on a common scale** is read most accurately; area, angle and shade least (Cleveland and McGill 1984,
  replicated by Heer and Bostock 2010).
- **Superimpose** for local and subtle differences (L'Yi, Jo and Seo 2021). Side by side only for global properties,
  or for the same analysis on two datasets.
- **Plot a difference on its own axis** when the difference is the claim. The eye misreads the gap between two
  superimposed curves (Cleveland and McGill).
- **No blended colours.** A transparent bar on another reads as a third colour (Wilke). Use outlines.
- **Same scales in every panel** when panels are needed (Wickham, Wilke).
- **Paired data shows its pairing** (Weissgerber 2015): a cell before and after DOI is a pair.

## Spectra, the multitaper way

- Log power against linear frequency. The log stabilises the variance (Pesaran 2008).
- Error bars from the tapers (jackknife). State the window and bandwidth.
- A dotted line for the null.
- For calcium imaging: the frame rate sets the highest frequency, and the indicator shapes the high end.

## Ready to show (from the sources)

The message is named and the title says it. The quantity sits on a common scale. A reference is drawn. Residuals
and re-expressions were tried. Several bin widths were tried. The data or the pairs are visible behind any summary.
Every transform and error type is stated. Then Doug's own test applies
([Doing Science](../doing-science/03-an-accurate-portrait.md#ready-to-show)).
