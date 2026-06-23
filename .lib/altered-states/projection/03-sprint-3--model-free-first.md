# Sprint 3 — Model-Free First

- **author:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

**Status: CLOSED at the descriptive slice (retro at the foot of this chapter).** The plan was written before the work per [Sprints](../../../.claude/library/library-tree/03-sprints.md); in practice we took a step it assumed away — a *descriptive* model-free pass before the controlled comparison — so the plan below stands as written and the retro reconciles it against what actually shipped. [Sprint 1](01-sprint-1--does-the-mouse-hallucinate.md) set up the DOI question; [Sprint 2](02-sprint-2--equipping-the-team.md) equipped the team and built the environment.

**Grounding** (cross-references, not restatements): the organization plan is [The Build, ch 8 — The organization](../the-build/08-the-organization.md); the toolchain index is [The Build, ch 7](../the-build/07-the-toolchain-index.md); the reasoning behind the tool choices is in Nancy's thinking — [the toolchain and what to leave out](../../../.claude/library/..teamsmanship/..team/nancy/thinking/01-the-toolchain-and-what-to-leave-out.md) and [a codebase that outlives the project](../../../.claude/library/..teamsmanship/..team/nancy/thinking/02-a-codebase-that-outlives-the-project.md); the science plan is [The Altered Cortex, ch 3 — The analysis plan](../the-altered-cortex/03-the-analysis-plan.md); the data contract is the [Datasets](../datasets/.cover.md) book.

## The key decision: model-free first

Nancy's code reconnaissance settled it: **no trained digital-twin checkpoint exists** — building one is a from-scratch training job — and the twin only serves the two *generative* experiments (MEI synthesis, image reconstruction). Everything else the DOI question needs — the pre/post comparison on the 749 matched cells, tuning, reliability, population geometry, decoding, and the confound controls — is **model-free**, computed directly on the recorded responses.

So the twin is not the foundation. It is a **deferred, optional leaf the analysis owns** — the thing we want, reached only after the model-free spine stands. Two facts shape it when we get there: training a twin needs neuralpredictors + torch + a thin nnfabrik helper (**no datajoint**); and a twin is **session-bound** (keyed to `data_key` and neuron count), so using it across conditions needs the matched cells plus a cross-session readout. This is why Phase 2 (model-free) precedes Phase 3 (twin), and why Phase 3 gates nothing before it.

## Phases

### Phase 0 — Scaffold & environment
**Owners:** Adam (infra/env), Arthur (structure); David (large files). Prerequisite for everything; grounded in [The Build ch 8](../the-build/08-the-organization.md) and [ch 7](../the-build/07-the-toolchain-index.md).

- [ ] Flatten `src/scripts/` to just `extract_pptx.py` — remove the `altered-states-doi/` nesting and the duplicate `load_scan.py`.
- [ ] Create the `library/` package skeleton — `io`, `model`, `stats`, `viz`, `tests` — with `pyproject.toml`.
- [ ] Extract the two data archives (still zipped in `library/data/`) — prerequisite for any loading. *(David: large files.)*
- [ ] Add the approved deps to `requirements.in` and recompile the lock: statsmodels, pynapple, rastermap, umap-learn, cebra, mei; **dPCA vendored**, **fitgabor optional**.
- [ ] As each dep lands, catalogue it in the toolchain index ([The Build ch 7](../the-build/07-the-toolchain-index.md)) — one-way `.lib`→code links only. *(Adam.)*

### Phase 1 — Core lib & registries
**Owners:** Adam/Arthur build; Queenie tests; Cathy on the ports/abstractions.

- [ ] `library/io/registry.py` — the data registry (names → locations) — plus the static-scan loader adapter to Nancy's exact contract (FileTree keys; the `dat.neurons.area` gotcha → `FileTreeDataset` vs `static_loader`). See [Datasets](../datasets/.cover.md).
- [ ] `library/model/base.py` — a general `Model` + `Checkpoint` + provenance **ports** — plus the checkpoint registry.
- [ ] `library/stats/` — the nulls and the confound regression.
- [ ] Tests: property tests on `stats` (hardest and most important), unit tests on `io/registry`, and the pytest-marker dial (`pytest` / `-m core` / `-m <analysis>`). *(Queenie.)*

### Phase 2 — First analysis, model-free
**Owners:** Nancy owns the science; Queenie output-tests. Grounded in the science plan ([The Altered Cortex ch 3](../the-altered-cortex/03-the-analysis-plan.md)).

- [ ] Create `analyses/<owner>/v1-doi/` with a `manifest.toml` (designation).
- [ ] Load the 749 matched cells, pre and post.
- [ ] Tuning + reliability + population geometry, with pupil/running regressed out.
- [ ] Add the dPCA (vendored) / CEBRA geometry adapters.
- [ ] Regression-pin the outputs. *(Queenie.)*

### Phase 3 — The twin (deferred, optional)
**Owners:** Nancy + Cathy. **Explicitly NOT a gate on Phases 0–2.**

- [ ] Train the twin on pre-DOI data (a session-bound adapter); provenance-stamp the checkpoint.
- [ ] MEI synthesis.
- [ ] Work the cross-session readout question for applying the pre-DOI twin to post-DOI responses.

### Cataloguing — throughout
**Owner:** Libby.

- [ ] As code and deps land, catalogue the model/checkpoint/training contracts in [The Build](../the-build/.cover.md) and the io/meta contract in [Datasets](../datasets/.cover.md) — one-way `.lib`→code links, never code→`.lib`.

## How thinking and doing work

The operating rhythm of this sprint has two halves, and naming them is the point.

**Thinking** is reaching for what we don't yet hold: sending an unknown outward via [`/think`](../../../.claude/library/our-skillset/20-think.md), and thinking things through in the background for deep reading, design, and cataloguing — filed into thinking books and the `.lib`. The reasoning that produced the toolchain already lives there, in Nancy's thinking ([the toolchain](../../../.claude/library/..teamsmanship/..team/nancy/thinking/01-the-toolchain-and-what-to-leave-out.md), [a codebase that outlives the project](../../../.claude/library/..teamsmanship/..team/nancy/thinking/02-a-codebase-that-outlives-the-project.md)). Thinking is filed, not narrated — it is thinking, not machinery.

**Doing** is hands-on code in the room: small, tested, catalogued increments — one contract proven before the next, never a giant branch.

**The per-task loop:** think it through → do it → test it → catalogue it (`.lib`→code) → review. Nothing is "done" until it is tested and catalogued.

**Who thinks, who does** (perspective, not exclusivity):

| Concern | Owner |
|---------|-------|
| Science (hypotheses, analysis, interpretation) | [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md) |
| Infra / environment / registries | [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md) |
| Structure | [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md) |
| Tests | [Queenie](../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md) |
| Abstractions / ports | [Cathy](../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md) |
| Cataloguing | [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md) |
| Large files / CI | [David](../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md) |

## Review

The sprint ends with a **review**: walk the model-free results with their controls stated, confirm every contract is tested and catalogued, and decide — together, with Doug — whether the evidence warrants reaching for the twin (Phase 3) at all. The twin is the thing we want; the review is where we earn the right to build it. The retro completes this chapter with what was built and what was learned.

## Retro — what was built and learned

**Closed at the descriptive slice.** The plan aimed straight at the controlled pre/post comparison; in practice we took the step before it — a model-free *descriptive* pass — and that is what shipped. It earned its place by settling the sprint's real question.

### Built

- **The first model-free analysis, descriptive** — a nine-panel pass over both sessions and the 749 matched cells: single-image cortical maps, behavioural-state distributions, per-cell split-half reliability, the population rate profile and value distribution, a Rastermap co-activity raster, the matched-cell pre/post scatter, and the behaviour-only drug-state classifier. It lives in `src/experiments/2026-06-23-exploration/` (the dated-experiment convention, [The Build ch 8](../the-build/08-the-organization.md)), reading through `library/io` (registry, loader, the verified matcher).
- **A shared figure grammar + primitives** — `library/viz/style.py` (grayscale = magnitude with white = silent, two hues = condition, a diverging map reserved for signed differences), reusable `plot_*` primitives, and a create-if-missing compute cache so figure iteration is cheap.
- **The report and its method, catalogued** — the woven [Initial Data Exploration](../../reports/2026-06-23-exploration/initial-data-exploration.md), and a new book, [The Exploration Report](../the-exploration-report/.cover.md), recording how to write one.

### Learned

- **The confound is binding, not a later phase.** Behaviour alone decodes the session at 97% (pupil position, running speed), so the controlled comparison is the precondition for *any* pre/post claim — every difference we saw (reliability down, rates down, the same cells lower) is uninterpretable as a drug effect until state is held still.
- **Figures are reasoned, not decorated** — the colour grammar and the "draw on real structure" rule came from reasoning out what the field does, after taste-driven choices kept failing.
- **A report is written from the reader's frame** — it motivates an analysis for peers who know the data but not your plans; it does not re-describe the data. Both lessons are in the method book.

### Resolved at close

The descriptive pass was completed properly: every magnitude figure was recomputed on **per-scan normalized** responses (each neuron divided by its own per-scan s.d. — the dataset's standard preprocessing, in Erin's walkthrough §5). The result is **comparability** — the 749 matched cells sit on the diagonal, the population profiles and distributions overlap, and co-active structure persists under DOI. The raw ~0.6× amplitude drop is a single per-neuron gain scalar that normalization removes; since the published DOI effect *is* a V1 gain reduction ([Michaiel, Parker & Niell 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6559379/)), normalization removes the candidate, so the magnitude/gain question is handed to a within-scan scale-invariant analysis. The paper was rebuilt around comparability via a Desktop `/think` and installed as the [Initial Data Exploration](../../reports/2026-06-23-exploration/initial-data-exploration.md).

### The corrections — and the throughline

The descriptive pass reached its honest conclusion only after a sequence of reframes, each forced by a source that existed *before* the analysis began. Recorded here as the sprint's real history; the method form of each lives in [The Exploration Report](../the-exploration-report/.cover.md), and the data-level form (the z-drift confound, the normalization/gain-change trap) is catalogued in [Datasets — caveats](../datasets/05-caveats.md).

- **Decodability is not causation.** That the session decodes from behaviour shows the conditions *differ* on it — not that behaviour *causes* the neural differences. A confound blocks attribution to the drug without itself becoming the verdict; the differences are real but unattributed.
- **Mind the prior; bring the literature.** A 5-HT2A agonist at a real dose is *expected* to act — "maybe nothing happened" is a falsely-skeptical prior, not rigour. And direction matters: locomotion and arousal are known to *raise* V1 responses, so the observed *fall* runs *against* a pure-state account — a stronger statement than "the cause is open."
- **The normalization miss.** The standard per-neuron s.d. normalization — in the dataset's own walkthrough — quotients out a *gain change*, possibly the very effect, since 5-HT2A agonism reduces V1 gain. An effect that vanishes under normalization is diagnostic of *where it lives*, not proof it is noise; report raw and standardized side by side.
- **Check the premise the framing rests on.** A whole reading was built on "different days" when the data is one session ~45 minutes apart — and the volumetric recording carries a **z-drift** confound (the imaging plane can shift between conditions). A wrong premise changes which confounds even apply; confirm the fact at the source first.
- **The gain-change precedent.** The canonical prior — a psychedelic read as a V1 gain change — was one literature search away; reading it first would have framed the normalization decision *before* the first figure, not after.

**The throughline: research before research.** Every correction came from a material that pre-dated the analysis — the walkthrough's normalization, the slides' timeline and dose, the paper reporting the expected effect. Computing before reading them cost many reframes of one report. The discipline is now both a method lesson ([Research before research](../the-exploration-report/01-how-to-write-one.md#research-before-research)) and a team one ([Reading — read the source, not only the library](../../../.claude/library/teamspeak/08-reading.md#read-the-source-not-only-the-library)): read the data collector's walkthrough and loader, the experimenter's design and timeline, and the one or two papers reporting the *expected* effect, before deciding what to measure.

### Rolls forward

- The **controlled** pre/post comparison — pupil and running matched or regressed out — plus tuning and the dPCA/CEBRA geometry adapters (plan Phase 2).
- The **`library/stats/` module** (nulls, confound regression) and the **output regression tests**: the descriptive `summary.json` numbers are not yet pinned.
- The **twin**, still correctly deferred (Phase 3).
