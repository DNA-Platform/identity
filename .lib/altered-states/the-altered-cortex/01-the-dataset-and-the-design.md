# The dataset and the design

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

Before trusting any number, the dataset has to be characterized from the files themselves, not from the walkthrough's description of them. The two disagree in small ways, and the disagreements matter. What follows was read off the actual `.npy` arrays and the coordinate table, not off the notebook prose.

## What was recorded

The recording method is two-photon calcium imaging of GCaMP-expressing excitatory neurons in layer 2/3 of mouse primary visual cortex (V1), in an awake animal head-fixed on a treadmill, free to run. The cell depths span roughly 50–85 µm in the imaging stack — consistent with the volumetric layer-2/3 imaging the protocol describes. While the animal viewed images, running speed and pupil position were tracked. Each stimulus was a natural still image from GrayImageNet, presented for 0.5 s, the presentation time confirmed on every trial inspected. The per-trial neural readout is a single scalar per neuron — the response to that image, not a time course — so this dataset measures *what the population represented about each image*, not the temporal dynamics within a presentation. Calcium imaging is slow and indirect; the scalar response is already a summary the upstream pipeline produced.

The data arrives as two `nexport`-style archives, one per scan. Each archive holds, per trial, a `responses` vector of shape `(n_neurons,)`, an `images` array of shape `(1, 36, 64)` (the model-resolution grayscale frame), a `behavior` trace (running speed), and a `pupil_center` trace. Per-neuron metadata gives `unit_ids`, `animal_ids`, `scan_idx`, `sessions`, and `cell_motor_coordinates` (XYZ). Per-trial metadata gives `tiers` (train / validation / test), `frame_image_id`, and `frame_presentation_time`. Normalization statistics (mean, std, and more) are precomputed per data type. The response values are continuous and predominantly non-negative with a long positive tail — deconvolved-activity-like, not raw fluorescence.

## The two scans are the same cells in two conditions

Both archives are animal 33328. One scan is session 6, scan 2 — 1654 neurons, 5936 trials. The other is session 7, scan 1 — 1449 neurons, 5996 trials. Their imaging volumes overlap in all three coordinate axes. The same image identifiers appear in both: the first trials present the identical image IDs in the identical order, and across the full recordings the two scans share 5047 of their ~5050 distinct images. This is the design's whole point — the *same neurons* shown the *same images* in two states.

The matching is done by physical location. The coordinate table `unit_stack_coords.csv` lists every unit's position in a common functional stack; `match-cells.py` pairs a cell in one scan with a cell in the other when they are mutual nearest neighbors within 10 µm. Running that procedure on the real data pairs **749 cells** reciprocally within 10 µm — about 45% of the session-6 population and 52% of the session-7 population. Every unit in both scans has a coordinate in the table, so the matching is limited by biology and registration, not by missing data. These 749 cells are the spine of every within-subjects comparison: the same physical neuron, observed in both conditions.

## Which scan is pre-DOI and which is post-DOI

This is the assignment the whole analysis hinges on, so it was not assumed. The project-overview presentation states the protocol directly: a pre-drug baseline scan for the duration of the stimulus, then DOI injected subcutaneously, then a 45-minute wait, then a post-drug scan — DOI described as a potent 5-HT2A agonist analogous to LSD and psilocybin. The same presentation shows the lab's scan-naming convention on an earlier animal: for animal 33245, scan `33245_1_4` is labelled pre-drug and `33245_2_1` is labelled post-drug — the lower session number is the baseline, the higher is the post-injection scan.

Applied to this animal, that convention makes **session 6 (scan 2) the pre-DOI control** and **session 7 (scan 1) the post-DOI altered state**. The data are consistent with it: the two scans are the same animal, sequential sessions, the same stimulus set re-presented. This assignment is taken as the working hypothesis, and it is strong, but it rests on a naming convention transferred from a different animal rather than on an explicit pre/post label inside these two archives. The standing caveat: if any later signature inverts cleanly under swapping the two labels, the assignment must be revisited before any claim is made. It is the one piece of design metadata that is inferred rather than read directly off these files.

## Trials, tiers, and the repeated images

The tier split is the lever that makes reliability measurable. In the pre-DOI scan: 4850 train trials (each a distinct image, shown once), 100 validation trials (distinct images, once each), and 986 test trials — but those 986 trials are only 100 distinct images, each repeated 9 or 10 times. The post-DOI scan mirrors this: 4897 train, 100 validation, 999 test trials over 100 distinct, 9–10×-repeated images. Critically, all 100 repeated test images are shared between the two scans. So there exist 100 images that were each shown ~10 times, to the same tracked cells, in both the control and the altered state. That is what permits a clean noise ceiling (an oracle from repeats) and a like-for-like, same-stimulus comparison of how the population's response to a fixed image changed under DOI.

The train tier — thousands of single-presentation natural images — is what the encoding model is fit on. The repeated test tier is what the model is evaluated against, because only repeated presentations expose the trial-to-trial reliability that bounds how well any model could possibly do.

## What is and is not analyzable

**Analyzable.** Single-image population responses in both conditions; per-neuron tuning across thousands of natural images; trial-to-trial reliability and a per-neuron noise ceiling from the repeated test images; population geometry (dimensionality, correlation structure, representational similarity) per condition; a within-subjects, same-cells, same-images contrast on 749 matched neurons; an encoding model fit to pre-DOI data and applied to post-DOI responses; behavioral covariates (running, pupil) as nuisance regressors or state markers.

**Not analyzable from these files as they stand.** Within-presentation temporal dynamics — each trial is a scalar, not a trace, for the neural response. True spontaneous activity *between* images is not packaged here as labelled blank/grey epochs; the archives are organized around stimulus trials, so testing for stimulus-like activity "in the absence of stimulus" needs either an inter-trial signal that is not obviously present in these arrays or a careful surrogate (for example, the residual response not explained by the shown image). This is a real constraint on the hallucination test and is named explicitly in [the hypotheses](02-the-question-made-falsifiable.md). The sample is one animal — every cross-condition effect is within this subject, and generalization to "mice under DOI" is a separate, heavier claim this data cannot settle alone. Cell type is layer-2/3 excitatory only; inhibitory and deep-layer contributions are invisible. And the pre/post assignment, as above, is inferred.

The dataset is, in short, a strong within-subjects design with an honest noise ceiling and a real same-cells comparison — and two load-bearing limits (no labelled spontaneous epochs, one animal) that shape what "evidence of hallucination" can even mean here. The next chapter turns that word into predictions.
