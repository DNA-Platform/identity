# The four-twin fit, read as instrument trust

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)
- **date:** 2026-06-30
- **topic:** Nancy > Neuroscience
- **previous:** [The spec check, and CD's approval](18-the-spec-check-and-cds-approval.md)
- **verdict:** sufficient (instrument trust resolved; the behaviour-channel failure is a documented hypothesis)
- **status:** concluded

---

The four twins are trained — {Control, DOI} × {behaviour-conditioned (arm A), stim-only (arm B)} — and the
question I walked in with was the wrong one. I started toward "how well do they *predict*?", and Doug
corrected the drift again: this is a **descriptive** study of what V1 **represents**, and the twin is an
**instrument** to comprehend what a neuron encodes — not a predictor, not a drug detector. So goodness-of-fit
is not a benchmark score. It is **instrument trustworthiness**: if a twin cannot faithfully read its own
state's V1, then its MEIs and metamers are fiction, and I must not believe them. I asked CD for the right
statistics to measure fit honestly, **kept his methods and dropped his framing**. The finding: three of the
four twins are trustworthy; the **behaviour-conditioned DOI twin (post/A) is not** — and that is a limitation
of the technology, documented, not a measurement of the drug.

## Evidence (verdict sufficient; the collapse is systematic, not a fluke)

**Same-config control — only the scan differs.** pre/A and post/A were trained with **byte-identical
`model_config`** (learned-μ, the same frozen gammas, arm A, 749 matched cells); the *only* difference is the
recording. All **five post/A seeds** land consistently low (val correlation **0.26–0.33**). So the collapse
is not a bad initialization and not a config accident — it is what happens when the behaviour-conditioned
architecture is fit to **post-DOI data**. That controlled comparison is what lets me attribute the failure to
the data×behaviour-channel interaction rather than to training luck.

**Fixed-set fit, same cells against one ceiling.** On the **267 cells reliable in both states** (the
same-cells-same-ceiling discipline):

| | pre (Control) | post (DOI) |
|---|---|---|
| **arm A — behaviour** | 0.667 | **0.445** |
| **arm B — stim-only** | 0.710 | **0.696** |
| oracle ceiling | 0.596 | 0.510 |

The ceiling itself falls pre→post (0.596 → 0.510) — post-DOI V1 is intrinsically *less* reliable, which is
a property of the brain state, not of the model.

**Ceiling-matched reading.** Against that moving ceiling, the **stim-only instrument is barely touched by
DOI (0.710 → 0.696)** and stays above the ceiling in both states; the **entire hit is in the behaviour arm
(0.667 → 0.445)**, which falls below even the lowered post-DOI ceiling. The damage DOI does to *fit* lives
**entirely in the behaviour channels**, not in the visual model.

**Statistics — CD's methods, my framing.** I take from CD the honest-fit machinery and read it as
trustworthiness, not a leaderboard: **Schoppe CC_max / CC_norm** (noise-ceiling-normalized correlation),
**Sahani–Linden FEVE** (fraction of explainable variance explained), **Pospisil–Bair r²_ER with BCa
bootstrap CIs** (so each fit number carries its uncertainty), and the **same-cells-same-ceiling** argument
(compare the 267 reliable-in-both cells against one ceiling so the contrast is fair). Note: **CD did not
re-pull the exact Sensorium-2022 leaderboard metric** — and I do not want it. The leaderboard frame answers
"is my predictor winning?", which is the wrong question for an instrument.

## Interpretation — my judgment

**The likely cause is pharmacological, and it indicts the instrument, not the drug.** DOI is a 5-HT2A
agonist, and under a 5-HT2A agonist **pupil is partly a drug readout** — dilation is driven by the
pharmacology, not only by moment-to-moment arousal. The behaviour channels (pupil size, its derivative,
running) normally track a state that co-varies with neural gain; under DOI they carry **nuisance decoupled
from the neural signal they are meant to explain**. The behaviour-conditioned twin tries to use them and is
misled — conditioning **hurts** post-DOI where it helped or was neutral pre-DOI. The stim-only twin has no
such channels, so it is immune. This is a clean, mechanistic account of why *only* arm A *only* post-DOI
collapses.

**This is a limitation of the technology — not a biomarker.** The tempting drift is right here: "the
behaviour arm collapses under DOI, therefore behaviour-channel collapse is a drug signature." **No.** That is
the detector framing Doug keeps catching. The collapse tells me the behaviour-conditioned *instrument* is
untrustworthy on DOI data; it does **not** hand me a measurement *of* the drug. I record it as a documented
technology limit and move on — the same move as ch17's gain limitation (normalization erases the gain), now
for behaviour-conditioning under perturbation. Both are honesties about the instrument, not findings about
the compound.

**Consequence for the science.** Trust the **stim-only twin (arm B)** for the DOI-state representation. The
pre/post **represented-feature comparison** (MEIs, metamers) should lean on the arm where **both states stay
faithful** — arm B, 0.710 pre / 0.696 post. The **post/A twin should not be used to synthesize DOI
MEIs/metamers**: its fit sits below ceiling, so its readout of the neural code is unreliable, and anything I
optimize through it would be an artifact of a broken instrument. The visual representation is what I am after,
and the stim-only instrument reads it faithfully in both states — so the comparison is sound on arm B.

## Conclusion — what to tell the team

- **Three of four twins are trustworthy instruments.** post/A (behaviour-conditioned, DOI) is **not** — fit
  collapses below ceiling across all five seeds, with identical config (only the scan differs).
- **Use the stim-only twin (arm B) for the DOI representation.** The pre/post represented-feature comparison
  leans on arm B, where both states are faithful (0.710 / 0.696). Do not synthesize DOI MEIs/metamers through
  post/A.
- **The behaviour-arm collapse is a documented LIMITATION OF THE TECHNOLOGY** — under 5-HT2A agonism pupil is
  partly a drug readout, so the behaviour channels carry nuisance, not signal. Write it up as a limitation,
  **not** as a drug biomarker.
- **Report fit as instrument trust:** Schoppe CC_norm + Sahani–Linden FEVE + Pospisil–Bair r²_ER with BCa CIs,
  on the 267 reliable-in-both cells against one ceiling (same-cells-same-ceiling). **No Sensorium leaderboard
  metric** — wrong frame.

## Standing lesson

I keep re-inventing a **prediction/detection** goal — and Doug keeps re-grounding me (ch15, ch17, ch18, now
ch19). The spec's goal is **representation-understanding**; the twin is an **instrument** to comprehend what a
neuron encodes. So goodness-of-fit is **instrument trustworthiness — can I believe its MEIs and metamers?** —
never a measurement of the drug, never a leaderboard score. When a fit number moves, my first question is
"what does this say about whether I can trust the instrument here?", not "is my predictor winning?" The
behaviour arm failing under DOI is the instrument telling me where I may not look — exactly the kind of thing
a careful instrument should tell its user.

<!-- citations -->
[previous]: 18-the-spec-check-and-cds-approval.md
[research-topics]: ../research-topics/01-neuroscience.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
