# Sprint 12 — The fidelity of the percept

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **coauthor:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **status:** `requirements-only` — in brainstorm with Doug. **Do not run [`/ce-work`](../../../.claude/library/our-skillset/30-ce-work.md) against this chapter.**

---

**Status: ACTIVE (2026-08-15), brainstorming.** A new direction on the same data, prompted by an email from a collaborator of Doug's. The previous eleven sprints built and delivered digital twins and the instruments that read them; this one asks a question those instruments structurally cannot answer, using a technique published four months ago.

**The paper is held**: [Tracking the Fidelity of Internal Neural Representations with Error-In-Variables Regression](../../papers/garon-error-in-variables-2026/.cover.md) — Garon, Keeley & Williams, bioRxiv `10.64898/2026.04.22.720005`, parsed into a full book with figures and three deep dives. **Its [code is released](https://github.com/neurostatslab/error-in-variables-garon-2026)** (JAX, 3,354 lines) and has been read.

## Why this sprint exists

Everything we have built assumes the presented image is what the population encodes. That is the definition of a supervised encoding model, it is the correct and published way to build one, and it is what a digital twin *is*. It is also, in this framework, a single extreme setting of a parameter — the κ→∞ limit — that nobody has ever checked for our data.

The consequence is specific and it lands on the result we already delivered. Our headline finding is **a pre→post resolution loss** measured on trial-averaged MEIs and metamers. [Figure 1 of the held paper](../../papers/garon-error-in-variables-2026/10-fig1-conceptual-explanation.md) demonstrates that a population with **completely unchanged tuning and completely unchanged spiking** will produce flattened, degraded-looking trial-averaged tuning if its internal representation drifts from the measured variable. Two mechanisms, opposite circuit implications, indistinguishable to every instrument we own.

And we have already measured that exact shape from the other side without recognising it. The amplitude ledger predicted that per-trial endogenous phases average out, so the mean over trials converges to the attenuated stimulus while each trial retains full contrast — **measured at correlation 0.9932** ([The Altered Cortex ch6](../the-altered-cortex/06-generating-the-hallucination.md)). That is the paper's Figure 1D–F, discovered generatively, with no estimator and no scalar attached. This sprint attaches one.

## The move, in one line

Their framework must *infer* the tuning function from a basis expansion, which is what confines them to one- and two-dimensional stimuli. **We do not have to infer it — we have four trained twins.** Supplying `f` removes the half of their estimation problem that does not scale, and turns the remaining problem into estimating the per-trial deviation ε and the coupling κ. That is the collaborator's own suggestion ("maybe there is a way to combine this method with DNNs"), and in the released code it is a constructor argument rather than a fork — see [the code deep dive](../../papers/garon-error-in-variables-2026/19-deep-dive-the-released-code.md).

## Decision — the analysis moves to a new folder

**`src/analyses/most-exciting-image/` is finished and delivered.** It holds the twins, the MEIs, the metamers, the decoder, the Reimer handoff, and three contracts describing all of it. This work is not most-exciting-image: the MEI is not its instrument and the twins are an *input* to it, not its product.

**New home: `src/analyses/error-in-variables/`** (renamed from `representational-fidelity` on Doug's call, 2026-08-17). The folder is named for **the paper and the model**, not for one quantity the model happens to produce. `representational-fidelity` named κ — one readout — and would have mis-described the work the moment the interesting output became the deviation `e` rather than the coupling. `error-in-variables` is the paper's own term, it is what David's email is about, and it is spelled out in full per our naming rule. Rejected: `the-internal-percept` (overclaims — we infer a represented variable, not a percept) and anything abbreviated.

The relationship between the two folders is **one-directional and must stay that way**: the new analysis *reads* `most-exciting-image`'s trained checkpoints and organised datasets, and never writes into it. The delivered handoff is frozen.

## Requirements — draft, for discussion

*Each names what would be observed if it held. Identifiers are stable and never renumbered.*

**R1 · The twin serves as the tuning function.** A frozen twin ensemble is callable through the released framework's mapping interface, and reproduces the same responses through it as through our own pipeline. *Observed:* a test that runs the same images through both paths and asserts equality to numerical tolerance.

**R2 · A known ε is recovered.** Responses simulated from the pre-DOI twin with an injected deviation of known magnitude and known subspace are inverted, and the inference recovers both. *Observed:* a scatter of recovered against true ε on the diagonal, and a held-out likelihood curve peaking at the injected κ — our rebuild of [Figure 2](../../papers/garon-error-in-variables-2026/11-fig2-validation-simulated.md), on our forward model. **This is the gate. Nothing downstream is believed until it passes.**

**R3 · κ is estimated per condition, by held-out likelihood.** κ is fit separately for pre and post, on a log-spaced grid, by cross-validated marginal likelihood, with everything else frozen. *Observed:* two κ sweeps plotted together, each with its maximum marked.

**R4 · κ is estimated in both arms.** Every κ is computed through the behaviour and the no-behaviour twins. *Observed:* four sweeps, not two. **A κ difference appearing in only one arm is a confound, not a result** — this is the guard that caught the eye-shifter artifact before.

**R5 · Split-half consistency is reported beside every κ.** The 749 matched cells are split into random halves, fitted independently, and their inferred ε compared on the intersection of their receptive-field supports. *Observed:* a consistency curve across κ, per condition. This is the criterion that stays valid when stimulus-referenced accuracy is *expected* to fall ([Figure 7](../../papers/garon-error-in-variables-2026/16-fig7-bayesian-decoding.md)).

**R6 · ε is validated against the repeat structure.** Each of the 100 test images is presented ~10 times. The spread of inferred ε across repeats of a single image is compared against the model's own predicted spread. *Observed:* per-image ε distributions with the predicted width overlaid. **This validation is available to us and structurally unavailable to the paper's authors** — they never present the same stimulus twice.

**R7 · ε is checked against something the inference never saw.** At least one external correspondence is tested — trial-by-trial pupil or running, the released frequency band identified independently by our coherence measurement, or the receptive-field strip. *Observed:* a correlation or a spectrum with its null. This is our analogue of the paper's theta result, which is its strongest evidence that ε is signal rather than fitting slop.

**R8 · The null result is publishable.** If κ_post ≈ κ_pre, that is reported as a finding — it would mean our delivered resolution result stands on firmer ground than it does now. *Observed:* the sprint's write-up states in advance what each outcome means, before the number exists.

**R9 · The extension is labelled.** Nobody has run this on a high-dimensional stimulus; the authors explicitly scope to low dimensions. The work is labelled a prompted extension composed from published machinery, exactly as the cross-condition metamer was. *Observed:* the label appears in the statement of purpose and survives into any output.

## Design owed — NOT units, and refused files and scenarios

*Per [`/ce-plan`](../../../.claude/library/our-skillset/29-ce-plan.md): a unit with no mechanism is design owed, and marking it as a unit is how a sprint ships four requirements out of sixty-four.*

**D1 · What is the latent `x`?** The central unresolved question. `s = x + ε` requires them to share a space; our `s` is a 2,304-dimensional image and the released inference cannot marginalise a latent of that size. Three candidate mechanisms are worked out in [the dimensionality-wall deep dive](../../papers/garon-error-in-variables-2026/18-deep-dive-inference-and-the-dimensionality-wall.md) — full image space with gradient-based estimation; a low-dimensional subspace with the published inference; or a generative model's latent — with a recommendation that the first two **compose** (gradient finds the mass, importance sampling measures it, using the `MISGPLVM` proposal hook that already exists in the code). **Not decided. Doug's call after the teaching.**

**D2 · JAX or PyTorch?** Their framework is JAX; our twins are PyTorch checkpoints. Bridge at the boundary, port the forward pass, or reimplement the inference — three options with real and different costs, laid out in [the code deep dive](../../papers/garon-error-in-variables-2026/19-deep-dive-the-released-code.md). **This is the first fork and everything else is downstream of it. It must be decided before any code is written.**

**D3 · What is a "timepoint"?** Their `t` is a contiguous timebin with a temporally continuous latent; ours is an independent 0.5-second presentation of an unrelated image. Their SMC sampler and their entire [Figure 4](../../papers/garon-error-in-variables-2026/13-fig4-error-dynamics.md) oscillator analysis do not transfer. What replaces them — a distribution of ε rather than a trajectory, structured by the repeat index — needs stating precisely.

## Risks

- **ε absorbs everything.** A free per-trial deviation in a large space will explain all residual variance, including recording noise, eye movements, z-drift, and twin misfit, and would then report low κ post-DOI for reasons having nothing to do with the drug. *Mitigation:* R2, R4, R5, R6, R7 — held-out selection, both arms, split-half, the repeat structure, and an external correspondence. **This is the same shape as the circular μy-R² gate that cost three sprints: a criterion that cannot fail is not a criterion.**
- **n = 1.** The paper needed 13 sessions across 5 mice to establish that κ moves with condition, and dark-versus-light still only reached p = 0.09, with substantial between-animal overlap ([Figure 4A](../../papers/garon-error-in-variables-2026/13-fig4-error-dynamics.md)). One animal gives one point. *Mitigation:* report as descriptive characterization, as the whole project already does; let internal consistency carry the weight rather than the magnitude.
- **Compute.** Their runtimes are for 30–256 neurons and a one-dimensional latent. Ours is 749 neurons, a 2,304-dimensional stimulus, and a network forward pass per likelihood evaluation. *Mitigation:* read `002_runtime_demo` early; scope the first pass to a subset of targets before committing to the full set.
- **Scope drift into the hallucination work.** ε *is* the hallucination in image units, so the pull toward rendering it will be strong and immediate. *Mitigation:* rendering is not in this sprint. Generative priors stay out of the measurement path, for the reason [comparison.md](../../../src/analyses/most-exciting-image/comparison.md) already gives — a prior sharpens pre and post alike and masks the change being measured.

## Owners

| # | Task | Owner |
|---|------|-------|
| 0 | The technique, taught in chunks with Doug interrogating each — the statement of purpose is the teaching text | [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md) |
| 1 | D1 and D2 resolved with Doug before any code | Nancy + [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md) |
| 2 | The new analysis folder, the twin adapter, the environment | [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md) |
| 3 | The synthetic-recovery gate (R2) | Nancy + Adam |
| 4 | The paper book, catalogue, and this chapter kept in sync | [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md) + Nancy |

## What is built so far

- **The paper is downloaded, parsed and catalogued** — [Tracking the Fidelity of Internal Neural Representations](../../papers/garon-error-in-variables-2026/.cover.md): cover, ten prose chapters, seven figure chapters with the figures extracted from the PDF, and three deep dives (the κ dial; inference and the dimensionality wall; the released code). Links verified.
- **The released code is cloned and read** — the mapping interface, the noise models, the samplers, and the `MISGPLVM` importance-sampling hook are all confirmed by reading the source rather than the README.
- **The new analysis folder exists** with its statement of purpose, written as a teaching document with markdown references into the paper book, so Doug learns the technique as it is built.

## THE MODEL

*Full derivation with citations: [derivations/05-the-model.md](../../../src/analyses/error-in-variables/derivations/05-the-model.md). Stated here because a statement of work that does not carry its model is a plan for nothing.*

**At the image level — David's equation, unchanged:**

```
r_t  =  f( s_t + e_t )  +  noise            s_t, x_t = s_t + e_t, e_t  are IMAGES
```

**At the channel level — how it becomes computable.** Project onto a fixed quadrature (Gabor) channel `ψ_c` indexed by `c = (location, scale, orientation)`:

```
s_ct = ⟨s_t, ψ_c⟩      x_ct = ⟨x_t, ψ_c⟩      e_ct = x_ct − s_ct        complex scalars
```

**The generative model** — Garon's equation (2), with one substitution:

```
p(r, s, x, z)  =  ∏  p(z_ct) · p(x_ct | z_ct) · p(s_ct | x_ct) · ∏ p(r_nt | x_ct)
                 c,t                                              n

  (1)  r_nt | x_ct  ~  N( f_n(x_ct), σ_n² )      f_n nonparametric over ℂ ≅ ℝ²
  (2)  x_ct | z     ~  CN( 0, z_ct · q_c )       natural-image prior   ← THE SUBSTITUTION
  (3)  s_ct | x_ct  ~  CN( x_ct, 1/κ )           fidelity
```

**(1)** is Garon's grid-cell case exactly — a 2-D bounded latent with a nonparametric tuning surface. **(2)** replaces their *uniform* `p(x)`, which is inert for a head direction and wrong for an image coefficient, with the [Gaussian scale mixture](../../papers/wainwright-simoncelli-scale-mixtures-1999/.cover.md) (Wainwright & Simoncelli 1999). **(3)** is not a measurement model for us — we know the displayed image exactly — so κ reads as **representational latitude**, not measurement precision.

**What (2) buys, beyond well-posedness.** (2) and (3) are both complex normals in `x`, so their product gives a shrinkage estimator `E[x|s,z] = λ·s` with `λ = zq/(zq + 1/κ)`. Blank patch → `z` small → `λ→0` → the stimulus carries no weight there, automatically. The amplitude × confidence weighting is thereby **derived rather than imposed**, with no threshold to tune.

**Notation is deliberately faithful:** `r`, `s`, `e` from David's email; `x`, `f_n`, `κ` from Garon; `z`, `q` from Wainwright & Simoncelli.

**Two stages, never two fits.** `f_n` is estimated **pre-DOI only**, then frozen; post-DOI infers `x` through it. Refitting `f` post-DOI absorbs the drug's effect into the tuning function, where it cannot be seen.

### What we measure, and its status

```
f_n   TUNING     a surface over ℂ.  radius = how much of the pattern,
                 angle = where its bars sit.  Fit nonparametrically —
                 ITS SHAPE IS AN EMPIRICAL QUESTION, not a prediction.
κ     FIDELITY   one number per condition, by held-out likelihood.
e     DEVIATION  per trial, per channel.  RADIAL = excess pattern energy;
                 TANGENTIAL = displacement in pixels.
```

**Eye movement is tangential and globally coherent; added pattern is radial and channel-selective.** The confound and the effect occupy orthogonal components of the same estimate.

### The multi-scale requirement (Doug, 2026-08-17)

**Every channel analysis is run at every rung of the patchwork ladder** — the grids already cached in `results/patchwork/`, from 4×7 down to 18×32. Coarse tiles carry low spatial frequencies, fine tiles carry high ones, so **the ladder is a resolution axis**, and each rung yields its own tuning surfaces, its own `e`, and its own κ. Results are presented **one patch at a time, across scales**, before any aggregation is attempted. What to combine and how is decided *after* looking, not before.

### Order of work — replicate, then aggregate, then extrapolate

```
1  PRE-DOI, per channel, all scales.  Fit tuning surfaces. LOOK AT THEM.
                                      → Garon Fig 5A on our data.
                                      → if they are not interpretable, STOP.
2  PRE-DOI.  Conventional tuning vs EIV tuning.
                                      → Garon Fig 3E. Does EIV sharpen?
                                      → this is the demonstration the TECHNIQUE works here.
3  Aggregate across channels and scales — composite likelihood, κ(scale).
4  ONLY THEN post-DOI.  Freeze f. Infer x. Read e.
```

Steps 1–2 are entirely pre-DOI and entirely about tuning. They are falsifiable and cheap.

## Statement of work — DRAFT, for iteration with Doug

*What exactly we will accomplish, in phases, with a stop condition between each. Written to be argued with. It is a draft until Doug and I agree on it, and D1 is still open inside it.*

### What this sprint produces

**One number, twice, with the evidence that it means anything: κ for the baseline condition and κ for the DOI condition, on the same 749 matched cells and the same 100 images, estimated by held-out likelihood.** Plus the per-trial deviation ε that comes with it, and the three checks that decide whether either is believable.

### What it does not produce

- **No rendering.** ε is a measurement here, not a picture. Generative priors stay out of the measurement path — they sharpen pre and post alike and would mask the change being measured.
- **No retraining.** The four twins are inputs, frozen. Nothing writes into `most-exciting-image/`.
- **No hypothesis test.** n = 1 animal. Descriptive characterization, as the whole project holds.
- **No dynamics.** Their oscillator analysis needs a temporally continuous latent; our trials are independent presentations.

### The phases, each with a stop condition

**Phase 0 · Can we afford it, and does their code run?** Install their JAX stack alongside ours; run `001_eiv_demo` and `002_runtime_demo` unchanged. Measure the cost of one twin forward+backward pass on our hardware, and multiply out to a per-trial and per-condition estimate.
→ *Deliverable:* a cost table and a working reference environment.
→ **Stop if:** the projected cost of the full run exceeds what a laptop can do in days rather than weeks. Then we re-scope to a subset of target images before building anything.

**Phase 1 · The instrument, checked against the oracle.** Implement the EIV model with the twin as the frozen tuning function, in PyTorch beside the twin (D2 recommendation). Then the correctness check that makes the extension trustworthy: **run our inference on a one-dimensional problem their code also solves, and require agreement.**
→ *Deliverable:* the estimator, plus a 1-D comparison figure — their κ sweep and ours, overlaid.
→ **Stop if:** they disagree. A mismatch on the case they validated means ours is wrong, and no amount of interesting output on our data would redeem it.

**Phase 2 · The gate — recover a known ε.** Simulate responses from the pre-DOI twin with an injected deviation of known magnitude and known subspace. Recover it. Confirm held-out likelihood peaks at the injected κ. This is [Figure 2](../../papers/garon-error-in-variables-2026/11-fig2-validation-simulated.md) rebuilt on our own forward model.
→ *Deliverable:* recovered-versus-true ε on the diagonal, and a likelihood curve peaking where we put the truth.
→ **Stop if:** it does not recover. **This is the hard gate — nothing downstream is believed until it passes**, and the sprint honestly ends here with a negative methods result if it fails.

**Phase 3 · The measurement.** κ per condition, per arm — four sweeps — on test-tier trials the twins never trained on, with κ selected by held-out repeats.
→ *Deliverable:* four κ sweeps with their maxima marked, and the ε distributions beside them.

**Phase 4 · Does it mean anything?** The three independent checks, all specified before the numbers exist:
- **Split-half consistency** — two random halves of the 749 cells, fit independently, compared on the intersection of their receptive-field supports. The criterion that stays valid when stimulus-referenced accuracy is *expected* to fall.
- **The repeat structure** — across ~10 presentations of one photograph, is ε's spread what the fitted model predicts? A validation the paper's authors structurally cannot perform.
- **An external correspondence** — does ε land on something the inference never saw: trial-by-trial pupil or running, the released frequency band our coherence measurement found independently, or the receptive-field strip.
→ *Deliverable:* the three checks, reported whatever they say.

### The demo — the thing a hand-authored page could not fake

**Phase 2's recovery plot.** Prose can fake a catalogue and a figure can be drawn by hand, but a scatter of recovered-against-injected ε either lands on the diagonal or it does not, and the person who injected the truth did not choose where the estimate falls. Same for the likelihood peak: we choose the injected κ, the data chooses the peak. **If those two agree, something real happened; if they do not, no narrative rescues it.**

The Phase 1 oracle comparison is the second unfakeable artifact, for the same reason — their number is not ours to set.

### Acceptance

The sprint is done when Phases 0–4 have run and the results are written into this chapter **whatever they say** — including "κ_post ≈ κ_pre," which would mean our delivered resolution finding stands on firmer ground than it does today and is a result worth having. A design that can only confirm decoupling would be the [circular gate](../the-altered-cortex/03-the-analysis-plan.md#the-lessons-that-cost-the-most) again in a new costume.

### The assumption to interrogate first — ahead of any inference question (Doug, 2026-08-16)

**Does V1 have an "internal image" at all?** The error-in-variables framework requires the latent to live in the *same space* as the measurement — that is not a flourish, it is what makes `p(s | x)` writeable. For head direction that is cheap: the animal demonstrably has an internal heading estimate, head-direction cells drift in the dark, path integration accumulates error. There genuinely is a second number of the same kind.

**Positing that V1 carries an internal image in pixel space is a much stronger claim, and it is not obviously true.** It is the assumption the whole adaptation rests on, and it sits upstream of every technical question — dimensionality, inference, the choice of prior. **Interrogate it before anything else is built.**

Related, and recorded because it was got wrong once: **choice of basis is a modelling choice, not a mathematical necessity.** Fourier *completeness* is a fact about periodic functions; *choosing* Fourier is a claim. The prior means something different in every basis — in Fourier "smooth" is a global statement about frequency content, in a bump basis it would be a statement about locality. Different beliefs about neurons, different answers on the same data.

### Still open inside this statement of work

**D1 — what the latent is — is not resolved and Phases 1–3 cannot be fully specified until it is.** The recommendation is a low-dimensional subspace with a twin-gradient-informed proposal, but the basis is unchosen. That is the next conversation.

## Review findings — what the second pass changed

*A review pass on the first draft of this sprint, run against the released source rather than its README. Three corrections, recorded because the first version was wrong in a way that would have cost real time.*

1. **Their importance-sampling class is not general.** `MISGPLVM` opens with `assert ... "MIS is only implemented for EIV, 1D"`, defaults to a uniform proposal on the unit interval, and carries two `# TODO - this is not general` comments. The first draft called it "the hook" for our escape from the dimensionality wall. It is a **1-D reference implementation of the right idea**, which is valuable but is not a constructor argument.

2. **The framework solves the transpose of our problem.** `fit` optimises the *mapping's weights* by EM; `logp_x_map` recovers the latent by **argmax over an enumerated grid**. They enumerate the latent and solve for the mapping. **We have the mapping and must solve for the latent.** So the honest scope is *adopt the model and the selection criterion, write the inference* — not "three small adapters against a shipped framework," which is what the first draft implied.

3. **D2 largely dissolves.** If we are not running their fitting loop, the question of making a PyTorch twin differentiable inside a JAX loop mostly evaporates. Recommendation: implement in PyTorch beside the twin, install their package as a **reference oracle** for the Phase-1 check. What is left is an environment task, not an architecture fork.

Two smaller improvements from the same pass: the **test tier is held out from twin training**, so ε is estimated on images the encoder never saw and "cross-validated on what" has a clean answer (held-out repeats); and the **arms are asymmetric** — the no-behaviour arm is primary because the `-bh` arm is already known confounded, so the guard is "a κ difference only in `-bh` is the shifter," not "believe it if both agree."

## Log

- **2026-08-15** — collaborator's email; paper identified, downloaded, parsed into a library book with figures; released code cloned and read; Sprint 12 opened; the analysis moved to `src/analyses/error-in-variables/` with a statement of purpose. D1 and D2 open.
- **2026-08-15, review pass** — re-read the released source properly; three corrections above, propagated into [the code deep dive](../../papers/garon-error-in-variables-2026/19-deep-dive-the-released-code.md), [the dimensionality-wall deep dive](../../papers/garon-error-in-variables-2026/18-deep-dive-inference-and-the-dimensionality-wall.md) and [purpose.md](../../../src/analyses/error-in-variables/purpose.md). Statement of work drafted. **D2 recommendation made (PyTorch + their package as oracle); D1 still open.**
