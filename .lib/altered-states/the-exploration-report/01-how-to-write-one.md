# How to write one

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

An exploration report is a descriptive walk through a dataset for **peers who already know the data but do not know you, or what you intend to do with it** — they may have collected it themselves. So its job is *not* to re-describe the data back to them (that is the trap), but to **motivate an analysis**: why these analyses, in this order, what each one accomplishes, and what the pass as a whole achieves for someone deciding how the data should be analyzed. It is figures plus woven prose, every computation reproducible on its face, caveats woven in beside the claims they qualify, and it ends on the constraint that most threatens its own story. This chapter is the recipe; the [Initial Data Exploration](../../reports/2026-06-23-exploration/initial-data-exploration.md) is the worked example.

## The frame — get this right first

The single most important, and most easily missed, decision is *who is reading and from what frame*. Write to an analyst who knows the dataset cold but has no idea what you will do with it. That one choice sets everything below it:

- **Do not re-explain the data.** No "we have one mouse, two sessions…" paragraphs. State the analytical situation in a sentence and move on. Re-summarizing the data for the benefit of the person who owns it is the smell of the wrong frame — the mistake this chapter was written *after* making.
- **Motivate every choice.** Each analysis earns its place: why it is the right thing to look at *now*, and what it accomplishes as a step — not merely what it shows.
- **Make the computation obvious.** Enough that a reader could reproduce it from the prose alone — the exact operation, named with its standard term.
- **Weave the caveats in, don't exile them.** Assumptions, tricky details, and known weaknesses belong *in the prose that makes the claim*, in a clause or a parenthetical — never in `[^x]` footnotes, which common viewers (VS Code's preview) don't render, so the hedge vanishes and the text reads falsely confident. A caveat the reader can't see is worse than none.
- **Frame by what is achieved.** Open and close on what an *initial* exploration delivers to the decision it serves: here is the regime the responses take / here are the differences at face value / here is the constraint any analysis must respect. Describe the data; never grade it (see the honesty discipline).

## The sections

One markdown file, in its own folder under `library/reports/<slug>/`, with the figures copied in beside it so it is self-contained and committable (separate from the experiment's gitignored `results/`):

1. **Title** — the dataset and method in a line. No preamble.
2. **What this exploration is for** — the analytical situation in a sentence (assume familiarity), the goal of *this* pass, and its shape: what the jobs of an initial exploration are and how the analyses are ordered to do them. Name the confound here if there is one, so the reader carries it through.
3. **The body — one section per analysis**, each carrying three things in prose:
   - **the motivation** — why this analysis, now; what question it answers for the larger decision;
   - **the computation** — stated so it is reproducible on its face (e.g. split-half reliability: split each image's repeats in two, average within each half, correlate the two half-means across images), named with its standard term;
   - **what it accomplishes** — what the result establishes or rules out, and what it points the *next* analysis at.

   Caveats, assumptions, and tricky details go **in the prose**, next to the claim they qualify — not in `[^x]` footnotes (they don't render in common viewers, and an unseen hedge makes the whole passage read over-confident).
4. **What it settles, and what it leaves open** — not a recap of findings, but what the pass delivers to someone choosing an analysis: the regime the responses take, the differences characterized at face value, and the constraints that keep their *cause* open — closing on the concrete implication for what must be done next. Frame it settled-vs-open, never as a verdict.

Weave it. The body is a narrative that *builds* — each analysis sets up the next — not a disconnected catalogue of panels. Use but don't transcribe the per-figure docs; re-voice them into the through-line.

## The figure discipline

The figures are the report. The lessons that cost us a sprint to learn:

- **One story, both conditions.** Every comparison shows both states (never one alone), and the set is ordered to land on a point. A descriptive psychedelic set lands on the **behavioural confound** — the figure that shows state alone separates the sessions — so every neural difference is read in that light.
- **Colour is a grammar, not a mood.** Reason from what neuroscientists actually do, not from taste — this was the correction that turned the figures around. Three jobs, three encodings: **magnitude → grayscale, white = none** (the Rastermap / Stringer & Pachitariu convention — "no activity should be white"); **condition → two calm hues** (a cool baseline, a warm altered state); **signed difference → a diverging map**, reserved for that alone. Never pick a colour because it is pretty; pick it because it means something.
- **Name everything.** No `behaviour[0]`. Cells, axes, features, channels all carry their real names (pupil size, running speed, …), verified against the data, so a reader never has to decode a legend.
- **Draw on real structure.** Where the data has a natural geometry, use it — cells on their measured **cortical coordinates**, not an abstract reshaped grid (which invents artifacts like the stray blank row that sent us back to first principles). The honest view is usually the anatomical one.
- **Keep explanations off the pixels, but in the prose.** No caveat banners or alert overlays on the figure — but the honesty then has to live in the **text**, woven beside the claim, not in footnotes a viewer may not render.
- **Adjacency is a comparison instruction.** Never place panels side by side unless they are aligned on *both* axes — same rows, same columns. If you catch yourself writing "do not compare these," the layout is the lie: align them, or unpair them. (Two independently-ordered rasters share neither neurons nor trials, so the side-by-side was meaningless; it became one within-session panel.)
- **Define the measured quantity and its units where the reader looks** — on the axis *and* once in the text, up front. If a reader can ask "the response of *what*, in *what units*?", the figure isn't finished. (Here: deconvolved activity, arbitrary units, uncalibrated across sessions — and that last word is itself a caveat.)
- **Let it breathe.** Legible type, room around panels, nothing crammed. Reimer/Tolias-style restraint — elegance is part of being understood.

## The honesty discipline

This is the branch's discipline, applied to communication: a result is descriptive until proven causal. Surface the confound explicitly and let it reframe everything upstream of it. *A model that fits is not a mechanism; what can be decoded is not what the animal sees.* The report's credibility comes from refusing to over-claim — a conclusion that says "candidate differences, confounded, not yet a drug effect" is stronger than one that overreaches.

**Decodability is not causation, and a confound cuts both ways.** That a condition can be *decoded* from a confound (behaviour, here) shows only that the conditions differ on it — not that the confound *causes* the differences you measured elsewhere. A group perfectly separable by the shirt worn on dosing day does not thereby have a shirt-driven visual cortex. So a confound is a reason you *cannot attribute* an effect to the treatment — never a verdict that the effect *is* the confound; pinning it on the confound demands a mechanism exactly as pinning it on the treatment does. Refuse both overclaims: state the differences as **real but unattributed**, and name the live alternatives (treatment, state-mediation, a harder recording, uncalibrated scale) without choosing among them.

**Never certify the data.** Describe what the responses *show*; do not grade the dataset as "usable" or "sound." The people reading produced it, often at real cost, and a phenomenal recording does not need your endorsement — certifying it from above reads as arrogance to serious readers. Humble and exact, always.

**Mind your prior, and bring the literature.** The dataset is not in a vacuum. A potent intervention at a real dose is *expected* to have an effect — a confound complicates partitioning that effect among pathways, it is not evidence the effect is absent, and defaulting to "maybe nothing happened" is a falsely-skeptical prior, not rigour. And the literature does more than supply citations: the *direction* of a well-established effect rules explanations in or out. (Here, locomotion and arousal are known to *raise* V1 responses and reliability, so the observed *fall* runs against the state account rather than with it — a far stronger statement than "the cause is open.") When you catch yourself writing "we cannot say," ask first whether someone has already looked, and whether what they found points the interpretation one way.

## Research before research

Read the provided materials and the domain conventions *before* the first computation, not after a reviewer points at them. In this project the standard per-neuron normalization was in the dataset's own walkthrough, the experimental timeline was in the slides, the dose was on a slide, and the canonical precedent was one search away — and every correction came from a source that existed before the analysis started. The cost of skipping that step was many reframes of one report. Concretely: read the dataset's walkthrough/loader, the experimenter's design and timeline, and the one or two papers that report the *expected* effect, before deciding what to measure.

**A normalization is a claim about what is nuisance — and it can quotient out the signal.** The standard preprocessing here (divide each neuron by its own response s.d.) is correct for a model, but it *removes a gain change* — which may be the very effect (a 5-HT2A agonist reduces V1 gain). So when an effect vanishes under normalization, that is diagnostic of *where the effect lives*, not proof it is noise. Report raw and standardized side by side, resolve what the scalar is (anchor on a reference the treatment cannot move; rule out optical/measurement causes) before deciding what to remove, and confirm with **scale-invariant** measures (tuning, decoding, correlation geometry) where the nuisance scalar cancels by construction.

**Check the fact the framing rests on.** A whole interpretation was built on "different days" when the data was one session ~45 minutes apart — a wrong premise that changed which confounds even applied. Before reasoning *from* a fact, confirm it at the source.

## The pipeline

Make the docs fall out of the code so they can't drift:

- **The docstring is the documentation.** Each figure is a function whose docstring carries Data / Equation / Citation / Why / Reading; a generator turns those docstrings into per-figure `.md`. See [`exploration.py`](../../../src/experiments/2026-06-23-exploration/exploration.py).
- **The report is woven from the docs**, not hand-kept in parallel — so when the analysis changes, the source of truth is one place.
- **A create-if-missing compute cache** (gitignored) makes iterating on figures cheap; the slow load runs once.

A report is the [per-task loop](../the-build/09-the-coding-protocols.md)'s *catalogue + review* made legible to an outsider. Write it last, once the figures are right — and edit **this** chapter whenever a report teaches us a better way to make one.
