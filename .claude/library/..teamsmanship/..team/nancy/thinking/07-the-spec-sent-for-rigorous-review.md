# The specification, sent for a rigorous primary-source review

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)
- **date:** 2026-06-28
- **topic:** Nancy > Neuroscience
- **previous:** [Writing it up after normalization](05-writing-it-up-after-normalization.md)
- **verdict:** sufficient
- **status:** concluded (a follow-up exchange on the baseline is in flight)

---

The exchange where I hand CD the *whole* analysis specification — not one setting, the entire contract —
and ask for a brutally rigorous, primary-source review. It follows a hard re-grounding by Doug: he caught
me (more than once) **inventing the goal** — sliding this into a prediction / confound / competition frame
— and this turn caught me **reading our own de-named write-up of Erin Neyhart's deck instead of her actual
slides**. Reading the real slides corrected it: Erin's stated goal is *"determine how psychedelics reshape
the visual features represented by individual neurons"* (MEIs) and *"reveal how psychedelics alter the
encoding of real visual content"* (reconstruction) — a **descriptive study of representation**, the post-
drug panel left a literal "?". The "drug-state confound" I had treated as the crux was a bar chart on one
slide plus *our* `[interpretation]` note — not Erin's claim. The spec now states the goal from the source.

## The question (to CD; the spec attached)
A brutally rigorous review from the **primary sources** (Lurz 2021, Franke 2022, Walker 2019, Cobos 2022):
(1) is the goal correctly scoped and the method the right instrument for it; (2) is each part EXACTLY the
published method and each setting what the paper ACTUALLY specifies — quote where it matters, flag what is
our invention; (3) where are we wrong, over-reaching, hardcoding a result instead of a method, or
under-justified.

## Why now
The spec is the contract the code implements; before the matched-cell rebuild, it must be right. And I have
repeatedly mistaken our synthesis for the source — so this review is anchored to the primary papers, not my
paraphrase.

## What I expect (to measure against)
- CD confirms the architecture + trainer + MEI driver as the published recipe.
- The **learned-μ readout** is flagged as our one real deviation (justified by our data, not Franke's).
- The genuine opens hold: gammas (a frozen fit), the MEI contrast constraint (untested), the loader-order
  FEVE, the ensemble/early-stop exact values.
- A real risk: a remaining over-reach or a hardcoded run-result I haven't caught. I would be surprised if
  the goal-scoping is now wrong (grounded in Erin's slide), but CD may sharpen the MEI framing toward her
  "each neuron's unique contribution to the total representation of an image."

## What I know (to judge the answer against)
- The corrected goal: representation, from Erin's actual slides — not our interpretation note.
- The believed-state in the spec: matched-cells-only; learned-μ; Franke method template; Walker MEI; Cobos
  metamer; the flagged opens.
- The two standing lessons Doug set: a recipe states the **method, not the run-result**; every choice states
  **what the source says and why**.

## Evidence — what came back (verdict: sufficient; CD read the four primary sources this session)
CD read Lurz, Franke, Walker, Cobos against the spec line by line. The attributions mostly hold and the
⚠-culture is honest; the damage is two headline blind spots and several mis-attributions:
- **The gain blind-spot (the throughline).** DOI's one *documented* V1 effect is a gain reduction
  (Michaiel). But MEIs and metamers are **scale-invariant by construction** (contrast/norm-constrained) —
  both headline instruments quotient the gain out, and **no part names a scale-bearing estimator** for it.
  Same trap as the per-scan normalization that erased the gain earlier.
- **Franke 2022 is a UV/green COLOR study.** Its instrument reads spectral-contrast tuning — a feature axis
  our grayscale data does not have; its finding is that state shifts *color* selectivity while *spatial*
  MEI structure is ~unchanged. So "method template = Franke" borrows an instrument calibrated for a removed
  dimension, and the method's own track record predicts a baked-in pre/post spatial null.
- **Metamer over-claimed.** Cobos's near-identical reconstructions used a **VAE natural-image prior**, not
  raw pixels; our blank-init pixel-space SGD is the *baseline* variant, underdetermined → noisy. "Faithful
  reimplementation" is wrong; either add the prior or rename "pixel-space reconstruction (Cobos baseline)."
- **Gammas are the Sensorium-2022 competition values**, not Lurz's/Franke's — tuned on other data, and
  `gamma_input` sets MEI Gabor-ness directly, so stop citing them to Lurz; re-derive/plateau-check on our scan.
- **learned-μ is MORE right than I framed it:** the cortical predictor exists for cross-animal
  data-efficiency, absent in a single-session 749-neuron scan — so learned-μ is the correct readout *full
  stop*, not "the smallest deviation that survives the collapse." Lean in.
- Attribution fixes: **"5 seeds"** and **"FEVE in the published range"** are conventions/other-rig bars, not
  paper-specified; the **MEI recipe** I wrote is Walker/nnvision, not Franke's lighter text (commit to one,
  quote it); the **no-behaviour arm B is ours**, not Franke's (Franke always includes behaviour). Behaviour
  percentiles **confirmed** (3rd/97th of locomotion + pupil size); synthesize pre AND post at the *same*
  fixed state. CD did not re-pull Walker's exact preconditioning — confirm that wording against Walker.

## Interpretation — my judgment
Strongest review yet, and it **converges with Doug's instinct**: I anchored the whole spec to Franke (ch13)
without catching that it is a colour study reading an axis we removed. The gain blind-spot is the real
recurring failure — the same scale-invariance erasure as the normalization pass, now baked into both headline
instruments. learned-μ is *vindicated* (the right tool, not a patch). The gamma is a genuine "hardcoded
setting feeding the headline output" risk I under-rated. And the metamer is the soft spot — without a prior
it is not Cobos's method. The honest move is **not to integrate yet**: the Franke-vs-Reimer/Tolias-baseline
question is foundational, so I sent the follow-up before touching the spec.

## Conclusion — what to tell the team
- **Hold the spec edits** until the baseline follow-up returns — if Franke is the wrong template, the
  re-anchor changes what we integrate.
- **Keepers (CD-confirmed):** matched-cells-throughout, the instrument framing, **learned-μ (lean in)**, the
  reliable-in-both FEVE mask, the confirmed behaviour percentiles, Cobos terminology.
- **Fixes queued (post-baseline):** name a scale-bearing **gain instrument** (the blind spot, highest);
  metamer → add the VAE prior or demote the claim + seeds/stability; **re-derive gamma** on our scan, stop
  citing Lurz; fix attributions (5-seeds, FEVE-range, recipe-is-Walker, arm-B-is-ours); state the fixed MEI
  state identically pre/post.
- **Standing lesson:** read the actual papers *and the data domain* (grayscale) before anchoring a baseline —
  "closest paper" failed when the closest-by-design paper reads a feature we don't record.

<!-- citations -->
[previous]: 05-writing-it-up-after-normalization.md
[research-topics]: ../research-topics/01-neuroscience.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
