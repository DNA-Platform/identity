# The analysis plan

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

The method is the [digital twin](../../papers/digital-twins-tolias-2022/.cover.md): a deep encoding model that predicts each neuron's response to an image, fit on one condition and used as the instrument for the others. Two operations on that model do the work. *Validation* tells us how much of the neural response is real signal the model captures versus noise no model could. *Inversion* — gradient descent on the input image until the model's predicted population response matches a recorded response — reconstructs the stimulus the population is encoding. The same trained model is both the yardstick for "did the code change" and the lens for "what does the altered code represent." A separate, older technique reconstructs what a *single* neuron most prefers by gradient ascent — the "most exciting input," from the inception-loops work — and is the right tool for per-neuron tuning, distinct from the population reconstruction this plan leans on. The order below builds the baseline before touching the drug, so that every altered-state number is a change from a control that was characterized first.

## Step 0 — Pipeline and provenance

Reliable, reproducible access to the two archives and a clean environment is a prerequisite the sprint assigns to the tooling pair; this plan assumes it. The analysis needs: the matched-cell index (the 749 reciprocal pairs from `match-cells`), the per-condition trial tables with tiers and `frame_image_id`, the repeated-test-image groupings, and the normalization statistics. Every figure should carry the provenance of its claim — which trials, which cells, which control — in the same spirit as the paper-reading convention. A result whose source cannot be stated should not be reported.

## Step 1 — Build and validate the encoding model on pre-DOI data

Fit the digital twin on the session-6 (pre-DOI) train tier — the ~4850 single-presentation natural images — predicting the response vector over the pre-DOI population. The architecture follows the published recipe: a convolutional core that extracts image features, a per-neuron readout that learns each cell's receptive-field location and reads the features there through a linear weight. The model input is the 36×64 grayscale frame already provided; behavioral covariates (running, pupil) can be included as the published model does, which also makes them available as nuisance variables later. The loss and optimizer follow standard practice for this model family.

Validation is non-negotiable and uses the repeated test images. For each neuron, the trial-to-trial agreement across the ~10 repeats sets the noise ceiling — the most any model could explain. Model quality is the test-set correlation between predicted and mean measured response, *normalized by that ceiling* (the normalized correlation coefficient). The published model reaches roughly 0.61 normalized correlation — about 37% of explainable variance — on comparable data; that is the realistic bar, and a model far below it cannot support inversion. No inversion or cross-condition claim is made until the baseline model clears a pre-stated validation threshold. This step alone answers nothing about DOI; it builds the trustworthy instrument the rest depends on.

## Step 2 — Characterize the baseline code

With a validated model and the raw responses, characterize the control state — the "normal" that H1–H3 are changes from:

- **Tuning.** Per-neuron selectivity across the natural-image set; receptive-field positions from the readout; the distribution of response strength and sparseness.
- **Reliability.** The per-neuron noise ceiling from repeated images — the baseline value H2 must drop below to count.
- **Population geometry.** Dimensionality (participation ratio / eigenspectrum of the response covariance), signal vs noise correlation structure, and a representational-similarity description of how images sit relative to each other in population space. These are the baseline quantities H3 is measured against.

All of this is computed on the matched cells as well as the full population, so that the cross-condition comparison has a like-for-like reference.

## Step 3 — Re-run everything under DOI, on matched cells and matched images

Apply every Step-2 analysis to the session-7 (post-DOI) scan, restricted to the 749 matched neurons and, for the stimulus-locked comparisons, to the 100 shared repeated images. This directly tests **H1** (tuning change for matched images), **H2** (reliability drop), and **H3** (geometry shift). Each comparison is reported as a change from baseline with its control: split-half baseline as the noise reference, trial shuffle for chance geometry, behavioral regression so arousal and motion are not mistaken for representation. Then transfer the *baseline-trained model* to the post-DOI responses and measure its normalized correlation against its own baseline test value — this is **H4**. A structural, not uniform, degradation — with structured residuals — is the signal that turns "different" into "differently encoding."

## Step 4 — Test for structured, stimulus-like internal activity

This is the **H5** test and the one most constrained by the data: there are no labelled stimulus-free epochs, so "activity not driven by the shown image" is operationalized as the *residual* — the recorded post-DOI response minus the baseline model's prediction for the shown image. Characterize that residual:

- Is it low-dimensional or white? (dimensionality vs trial-shuffle null)
- Does it resemble the bank of real evoked responses to *other* images more than a shuffled surrogate does? (representational similarity to the evoked library, against the shuffle)
- Is it more structured than the *baseline* residual computed the same way? (baseline residual as the within-subject control)

H5 is supported only if the DOI residual is both more structured than its trial-shuffle null and more structured than the baseline residual. If the residual is white, the hallucination claim stops here, honestly, at the weak construal — and that is a real result.

## Step 5 — Only if H5 holds: invert the twin to reconstruct candidate content

If, and only if, Step 4 finds stimulus-like residual structure, reconstruct what it encodes. Feed a blank image to the baseline-trained model and run gradient descent on the image to minimize the error between the model's predicted population response and the target — here, the DOI residual structure — following the published inversion recipe (gradient computed by autodifferentiation, the gradient image Gaussian-blurred each iteration to suppress high-frequency artifacts, on the order of a thousand steps). A natural-image prior — inverting in the latent space of a generative model — can be added to keep reconstructions on the manifold of plausible images, as the paper demonstrates.

This is **H6**, and it is run *against its nulls before it is interpreted*: the same inversion applied to baseline residuals, to trial-shuffled activity, and to identity-shuffled activity. A reconstruction counts as evidence only if it is more coherent and more mutually consistent than those nulls by a measure fixed in advance. The yardstick for "coherent" is the reconstruction quality on real held-out images, where the answer is known.

## The standing caveat, kept in front

Inversion produces the image the *model* would need in order to reproduce the activity. It is not a window into the animal's experience. Across the whole plan the strongest licensed statement is "the altered population code is organized like a representation of structured visual content" — never "the mouse saw X." A model that fits is not a mechanism; a pattern that decodes is not a percept. The plan is built to find evidence for *and* against, to report the level the evidence actually reaches, and to retire the claim cleanly if **H7** shows the effect tracks time or state rather than the drug. The point of the discipline is that "no evidence of hallucination" and "evidence of hallucination" are both publishable answers here — and only the controls tell them apart.
