# The criteria for hallucination

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **book:** [The Altered Cortex](.cover.md)

---

[H5 and H6](02-the-question-made-falsifiable.md) say the unexplained component should be
*low-dimensional and image-like*. That was written before we had measured anything, and it is not
sharp enough: a Gaussian process with the right covariance satisfies both and contains no events at
all. This chapter records the sharper operational definition Doug stated on 2026-08-30, why each
clause is there, what each one measured, and what precedent exists for it.

The definition is stated as three clauses because **no single one is evidence.** Each clause exists to
kill a specific alternative that the other two cannot.

## The three criteria

**1 — Asymmetry.** Reading post activity through the intact (pre) model and reading pre activity
through the post model should both leave a great deal unexplained, but **not the same thing**. Both
directions suffer from mismatch; only one of them should be leaving *content* behind. Magnitude
symmetry is not the test — the **character** of each direction's error is.

*What it kills:* a pure loss of fidelity. If DOI only degraded the code, the two directions would be
mirror images of each other and nothing more.

**2 — Unexplained variance.** The variance the stimulus does not account for, measured **both** across
repeats of one image **and** across every trial of every image. It should be larger under DOI.

*What it kills:* nothing on its own. This clause is necessary and never sufficient — it is
[H2](02-the-question-made-falsifiable.md), and a drowsier or more motion-contaminated animal produces
it for free. It is here because the other two are meaningless without it.

**3 — White across trials, structured within one.** The unexplained component should be **white across
trials** — each event fresh, not repeating with the image, which would make it a retuning rather than
an event — and **spatially structured within a trial**, less white than a central-limit criterion
allows. The structure itself may be **randomly selected** trial to trial, which is precisely why
averaging destroys it.

*What it kills:* both remaining alternatives at once. A tuning change is *not* white across trials.
Measurement noise *is* white within a trial. Only a spontaneous structured event is white across and
structured within.

## Why clause 3 is the one that matters, and the null it names

Clause 3 contains its own null, and the null is severe. Everything measurable about second-order
structure — the collapse in dimensionality, the clustering of the residual on the cortical surface —
is a statement about the **covariance**, and a Gaussian process with that covariance reproduces all of
it while containing no events whatsoever. So the surrogate must hold the covariance *exactly* and
Gaussianise the single trials:

    Y = Q X,   Q a random orthogonal matrix in TRIAL space

Then `Y'Y = X'Q'QX = X'X` exactly — identical covariance, eigenspectrum, participation ratio, and
expected Moran's I — while each surrogate trial is a random mixture of ~1000 real trials and is
therefore Gaussian by the central limit theorem. **The surrogate is the criterion, made computable.**
Any excess in a real single trial over this null is higher-order: sparse, discrete, event-like.

This is why the criterion had to be stated as *less white than a central-limit criterion* rather than
simply *not white*. "Not white" is satisfied by the covariance alone.

## Every measurement against these criteria has been withdrawn

The criteria above were stated by Doug on 2026-08-30 and are sound. **What was measured against them
that day was not** — it was produced by a ridge regression standing in for the twin, and is
[Solutions ch1](../solutions/01-the-decoder-that-replaced-the-twin.md). Clause 2 (unexplained
variance), clause 3 (events against a covariance-matched Gaussian, and the localised-structure tests),
clause 1 (asymmetry), the 2x2 and its parity controls: all withdrawn, all deleted.

**Two things from that day are worth keeping, and neither is a result.**

**The rotation surrogate is the right null and it earned its keep immediately.** `Y = QX` with `Q`
random orthogonal in TRIAL space preserves `X'X` exactly — same covariance, eigenspectrum,
participation ratio — while Gaussianising each trial by the central limit theorem. On its first use it
convicted a cortical-clustering result that had already been reported: the surrogate reproduced
Moran's I to within 0.013, so the clustering was second-order all along. Clause 3 had to be stated as
*less white than a central-limit criterion* rather than simply *not white* for exactly this reason.

**The instrument must be in the null.** Pushing pure white noise through the same decoder reproduced
68% of the "localised spatial structure". That number was the diagnosis and was read as a caveat. Any
future structure test on this branch carries the generator itself as a control — for the twin that
means inverting noise targets through the same network with the same solver, because the solver has a
basis too.

## Precedent

Searched 2026-08-30. Each clause has partial precedent; the **conjunction**, and its use as a
criterion for hallucination read through a generative encoding model, does not appear to.

- **Clause 3's phenomenon** is Kenet, Bibitchkov, Tsodyks, Grinvald & Arieli, *Spontaneously emerging
  cortical representations of visual attributes*, Nature 425:954 (2003) — spontaneous cortical states
  in cat V1 reproduce evoked orientation maps, switching dynamically between them. That is "structured
  within, randomly selected, white across" observed directly. Caveat that matters for us: those
  spontaneous maps were reported in anaesthetized and **not** awake animals.
  <https://www.cns.nyu.edu/events/spf/SPF_papers/kenet_etal_2003.pdf>
- **Clause 3's null** is Elsayed & Cunningham, *Structure in neural population recordings: an expected
  byproduct of simpler phenomena?*, Nature Neuroscience 20:1310 (2017) — surrogates that preserve the
  mean and covariance across times, neurons and conditions, so that any reported population structure
  must be shown to exceed what those primary features already imply. This is exactly the logic of the
  rotation surrogate, and it is why the Moran's I result had to be withdrawn.
  <https://www.nature.com/articles/nn.4617>
- **The preparation and the drug** are Michaiel, Parker & Niell, *A hallucinogenic serotonin-2A
  receptor agonist reduces visual response gain and alters temporal dynamics in mouse V1*, Cell
  Reports 26:3475 (2019) — DOI in awake mouse V1, two-photon and single-unit, finding reduced
  sensory-evoked amplitude and disrupted temporal dynamics, read as support for *reduced bottom-up
  sensory drive* models of hallucination. Our clause 2 result is the same direction as theirs.
  <https://www.cell.com/cell-reports/fulltext/S2211-1247(19)30290-6>
- **Sparse, non-Gaussian single-trial population responses** are long established — Vinje & Gallant,
  *Sparse coding and decorrelation in primary visual cortex during natural vision*, Science 287:1273
  (2000), and the population-sparseness measures that followed. Our kurtosis-14 result is that
  phenomenon; what is new here is only using a covariance-matched surrogate to show it is not implied
  by the covariance. <https://www.science.org/doi/10.1126/science.287.5456.1273>
- **The digital-twin machinery** is Wang et al., *Digital twin reveals combinatorial code of
  non-linear computations in the mouse primary visual cortex*, bioRxiv 2022.02.10.479884 — the ~30-mode
  functional vocabulary this branch already builds on.
  <https://www.biorxiv.org/content/10.1101/2022.02.10.479884v1>

**What was not found.** No precedent for a digital twin fit in one pharmacological state and
transferred to another as the definition of the unexplained component (clause 1); none for the three
clauses used jointly as a hallucination criterion; none combining a covariance-matched
Gaussianisation null with a psychedelic condition. A negative literature search is weak evidence and
is recorded as such — the searches are listed above so the next person can extend rather than repeat
them. This dataset is unusual (the same matched cells before and after a 5-HT2A agonist, with a
trained generative encoding model on both), so the absence of precedent is as likely to reflect the
novelty of the preparation as an error in the criteria.
