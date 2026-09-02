# The decoder that replaced the twin

- **keywords:** twin · analysis · wrong-instrument · unsurfaced-substitution
- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **sprint:** [Sprint 14 — Building the twin two ways](../projection/14-sprint-14--building-the-twin-two-ways.md)

---

## Symptoms

Doug, reading a summary near the end of a full working day on `src/analyses/perceptual-twin/`:

> *"Don't use a decoder! You build a model of the activity. You built it. Why a decoder? ... We build
> a model. If our model fails, then it fails. You don't decode from the model."*

What was observed, before it was named:

- Every percept picture, every spectral curve, every dimensionality number and every hallucination
  statistic produced that day came from `sklearn.linear_model.Ridge` fit from 749 responses to 2,304
  pixels. **The trained network appears in none of them.**
- The project is called the perceptual twin. Its own `.cover.md` already reported the inversion
  **working** — re-evoke **0.8141**, five computation notebooks running with zero errors, four
  results and two nulls.
- Two earlier symptoms, both recorded at the time and neither acted on:
  - the coverage measurement found the twin's readout `mu` sits ~6 rows above where three
    instruments say the cells look — a twin result, from the twin, while the percepts beside it were
    not;
  - the structure test found that **68% of the "localised spatial structure"** in the percepts was
    reproduced by pushing *pure white noise* through the same decoder. That sentence was written,
    published to Doug, and the analysis continued on the same instrument.

## What did not work

**Piling controls onto the wrong instrument.** The day's genuine methodological work — a
covariance-matched Gaussian surrogate, Fisher's exact g-test, phase randomisation, Minkowski
functionals, a shuffled-activity floor — was all correct, all calibrated, and all measuring a ridge
regression. Several of those controls *detected the problem* and were read as findings about the
decoder rather than as reasons to stop using it.

**Treating "the decoder needs no post twin" as a reason rather than a symptom.** The substitution was
originally justified because no post-DOI twin existed, so a decoder was the only route that could run
both conditions. That is true, and the correct response was to train the post twin — which took one
command and had never been attempted.

**Documenting the substitution instead of questioning it.** A paragraph was added to
`analysis/computation/.cover.md` describing "the decoder line" as a second line of work. Writing it
down made it look decided.

## The mechanism

The project states its own contract in the code, in two places, and neither was contradicted — they
were bypassed:

- `perception.the_twin()` — *"**The** perceptual twin every computation is built on — one object,
  built once… Nothing is trained — the forward network has 93,435 fitted parameters and this adds
  none"* (`analysis/.resources/perception/__init__.py:271`).
- `analysis/computation/.cover.md:11` — *"Every one of them takes the twin from
  `perception.the_twin()`."*

The perceptual twin is the forward encoding model **plus a solver**: given measured activity, gradient
descent on an image until the network produces that activity, using the released Cobos inversion in
`pipeline/metamer.py::metamer`, which accepts an arbitrary target response vector. A ridge decoder is a
different object entirely — an independent linear map fit from responses to pixels, with its own
749-column basis and its own null space, which shares nothing with the network but the data it was
fit on.

**The failure was not choosing wrong once. It was that the choice was never surfaced as a choice.** It
was made on the first analysis of the day for speed, produced numbers, and was then inherited by
every subsequent analysis because each new question was answered with the tool already in hand. By the
time the instrument was being interrogated with Fisher's g and Minkowski functionals, the question
"why is this a ridge regression" had stopped being askable, because nothing in the session had ever
marked it as an open decision.

**And the two objects are not merely different, they are differently expressive.** For a linear
decoder, inverting each trial and averaging the images is *algebraically identical* to averaging the
activity and inverting once — which is why the analysis kept collapsing into trial-averaging without
resistance. Through the nonlinear twin those are different operations, and the per-trial version is
the only one that produces individual predictions to aggregate. That difference is the entire reason
the twin is worth having, and a decoder cannot express it.

## The fix

All ridge code and every figure derived from it were deleted at Doug's instruction — 190 example files
and 28 scripts. What survived is what never used a decoder: the coverage result (input gradients
through the twin, an occlusion sweep, a stimulus-triggered receptive field) and the raw response
measurements (per-cell split-half reliability pre 0.565 / post 0.497; cross-condition tuning 0.825
after attenuation correction).

The post twin — which had never been trained, and whose absence was the original excuse — is training:
`twin.run_queue --which post --arm B --filters sensorium --seeds 5`, the same recipe and the same
`TRAIN_CONFIG` as the five pre seeds (val corr 0.3105–0.3168, every one early-stopping at 53–58 of 500
epochs).

## Prevention

**Name the instrument in the first sentence of every result.** Not "the percept correlates 0.61" but
"the *ridge decode* correlates 0.61". The substitution survived a full day because the instrument was
never in the sentence, so it was never in the reader's attention or in mine.

**A substitution for the project's central object is a decision to surface, not a shortcut to take.**
Speed is a reason to *ask*, never a reason to proceed. The test: if a reader of the project's cover
would be surprised by what produced the number, it was a decision.

**When a control convicts the instrument, stop.** "68% of the structure is the decoder's own basis" is
not a caveat to append to the finding — it is the finding, and it terminates the line of work. This is
the same shape as the branch's existing standing rule from
[Sprint 10](../projection/10-sprint-10--the-y-collapse-regression-and-rebuild.md): *never validate a
model's retinotopy against the coordinates it was fit from.* Both are cases of the measurement being
made by the wrong thing, and both were visible in the numbers before they were believed.

**A missing prerequisite is a thing to build, not a thing to route around.** The post twin was one
command. Routing around it cost a day and produced nothing that survived.
