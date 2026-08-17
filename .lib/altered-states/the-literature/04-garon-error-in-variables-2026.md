# Error-in-Variables Regression (Garon, Keeley & Williams 2026)

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **coauthor:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

[Book: [The Literature](.cover.md)]

The paper's own book is [Tracking the Fidelity of Internal Neural Representations](../../papers/garon-error-in-variables-2026/.cover.md) — synopsis, methods, seven figure chapters, and three deep dives. This chapter records what *we* took from it.

## How it reached us

Not through our own reading. A collaborator of Doug's sent it, with the observation that the setup matches ours — a lot of data about responses `r` and stimuli `s` under two conditions, the goal being to estimate `f(·)` and the per-trial error `e`, where `s + e` is the predicted percept. Their own caveat came with it and was correct: the paper only demonstrates one- and two-dimensional stimulus variables, so it will not apply out of the box to images — *"but maybe there is a way to combine this method with DNNs."*

That last clause turned out to be the whole adaptation, and the released code has a slot for it.

## What we learned

**The assumption we have been making without stating it.** Every encoding model — ours included, all four twins — treats the presented stimulus as exactly the thing the neurons encode. In this framework that is not a modelling choice, it is the κ→∞ limit of a one-parameter family. We have never checked whether that limit is appropriate for our data, and specifically whether it is *equally* appropriate pre and post-DOI.

**A flattened tuning curve is not evidence about neurons.** [Figure 1](../../papers/garon-error-in-variables-2026/10-fig1-conceptual-explanation.md) holds the neurons and the spikes fixed, varies only the coupling, and reproduces the full apparent collapse of tuning — down to the population manifold shrinking to a point at the mean firing rate. This is [regression dilution](../../papers/garon-error-in-variables-2026/09-glossary.md#regression-dilution-attenuation-bias) in a neural setting, and it is a live alternative reading of our own delivered resolution result.

**We had already found the mechanism and not recognised it.** The amplitude ledger in [The Altered Cortex ch6](../the-altered-cortex/06-generating-the-hallucination.md) predicted that per-trial endogenous phases must average out, so the trial mean converges to the attenuated stimulus while every individual trial keeps full contrast — measured at **r = 0.9932**. That is the paper's Figure 1D–F seen from the generative side. Worth recording as a lesson in its own right: *we derived a known statistical phenomenon from first principles and did not know it had a name, an estimator, and a literature.*

**Two methodological transfers worth more than the headline.**
- The **split-half consistency** criterion ([Figure 7](../../papers/garon-error-in-variables-2026/16-fig7-bayesian-decoding.md)): score a latent model by whether two random halves of the population agree, never referencing the stimulus. It stays valid exactly when stimulus-referenced accuracy is *expected* to fall — which is our hypothesis, so without it we could not tell decoupling from a bad fit.
- The **two-number tuning-change decomposition** ([Figure 3F](../../papers/garon-error-in-variables-2026/12-fig3-head-direction-tuning.md)): total distance `‖f−g‖` against the gain fraction. Compact, and it separates the distinction that matters under a drug whose published effect is a gain reduction with tuning intact.

**Where our data is stronger than theirs.** They never present the same stimulus twice. We present each of 100 test images about ten times, in both conditions, on the same tracked cells — so the spread of inferred `ε` across repeats of one image is a validation route structurally unavailable to them.

**The honest obstacle.** Their tuning basis grows as `K^d` and their latent marginalisation covers `[0,1]^d` with quasi-random samples. Both are exponential in the latent dimension; our stimulus is 2,304-dimensional. The first wall disappears when we supply the twin as `f`. The second does not, and what replaces the marginalisation is the open design question — worked through in [the dimensionality-wall deep dive](../../papers/garon-error-in-variables-2026/18-deep-dive-inference-and-the-dimensionality-wall.md).

## What it informs

- [Sprint 12 — The fidelity of the percept](../projection/12-sprint-12--the-fidelity-of-the-percept.md) — the sprint this opened, and where the requirements and the owed design decisions live.
- [`src/analyses/error-in-variables/`](../../../src/analyses/error-in-variables/purpose.md) — the new analysis and its statement of purpose, written as a teaching text against this paper.
- [The Altered Cortex ch6](../the-altered-cortex/06-generating-the-hallucination.md) — the hallucination work whose amplitude ledger independently found this paper's central mechanism; `ε` is that construction's per-trial deviation, expressed in stimulus units instead of response units.
- [comparison.md](../../../src/analyses/most-exciting-image/comparison.md) — the delivered resolution finding (F10) that this technique puts a rival explanation against.
- [Digital Twins (Cobos/Tolias 2022)](01-digital-twins-tolias-2022.md) — the opposite tradition, and the one our twins come from. The two have barely met; that is the point of the adaptation.

## Status

**Held and read; not yet applied.** The code is cloned and the source read, the paper is parsed, and two design decisions are open before any of it runs.
