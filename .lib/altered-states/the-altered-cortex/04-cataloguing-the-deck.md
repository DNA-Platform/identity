# Cataloguing the deck

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

The project has an origin document: Erin Neyhart's project-overview presentation, kept in the project layer as [Project Overview — The DOI Altered-States Experiment](../../altered-states-doi/resources/erins-presentation/.cover.md). That document is a faithful, de-named representation of her deck — what the collaborators show to introduce the experiment. This chapter is its counterpart from inside the analysis: where the deck *frames* the project, this catalogues its claims and maps each one to where it is made falsifiable. The deck and this chapter point at each other across the layer boundary on purpose.

A word on weight, because it is my job to say it. A deck is the lightest evidence we hold. It is the project as its designers intend it, and several of its most striking slides — the distorted reconstructions, the per-neuron most-exciting-images — are *predicted* results with a literal question mark over the post-drug panel, not findings that have survived a test. That is not a criticism; it is the genre. An overview is supposed to motivate, and motivation runs ahead of evidence. The discipline is to keep the two ledgers separate: what the deck *hopes to show* belongs in the deck; what we can *actually earn from the data* belongs here, paired with the observation that would disprove it and the control it is weighed against. A model that fits is not a mechanism, and a pattern that decodes is not an experience. This chapter is where each slide is made to declare which ledger it is on.

## Each claim, and where it is made falsifiable

| Deck claim (slide) | What it asserts | Where it is held to account |
|---|---|---|
| The phenomenon and the questions (2–3) | Psychedelics distort perception; can rodent V1 enter a comparable state, and can hallucinatory content be decoded? | [The question, made falsifiable](02-the-question-made-falsifiable.md) — the questions turned into numbered hypotheses, each with its disproof and control. |
| DOI is a 5-HT2A agonist; the 2A receptor drives the trip (11, 15, 19) | Pharmacological premise; ketanserin abolishing the psilocybin trip is the causal evidence. | Imported from the human literature, **assumed not tested** in this experiment. The behavioral proxy in rodents — the head-twitch response — and its limits are weighed in [02](02-the-question-made-falsifiable.md). |
| Charles Bonnet / internally-generated activity (17) | A hallucination is structured activity arising without sensory input. | The structured-spontaneous-activity hypothesis in [02](02-the-question-made-falsifiable.md); its mechanistic neighbor is [Sequence Filtering (Histed 2025)](../../papers/sequence-filtering-histed-2025/.cover.md). |
| The design: prep, rig, before/after, 2 mg/kg (4–6) | Same cells, same images, recorded pre- and post-DOI. | [The dataset and the design](01-the-dataset-and-the-design.md) — verified against the files, not the deck's prose. |
| Experiment 1 — image reconstruction (8) | The seen image is decodable; post-drug reconstructions will distort. | [The analysis plan](03-the-analysis-plan.md), the inversion step — with the standing caveat that decodable is not experienced. Builds on [Digital Twins (Cobos/Tolias 2022)](../../papers/digital-twins-tolias-2022/.cover.md). |
| Experiment 2 — most-exciting-image generation (7) | Single-cell tuning shifts under DOI. | [The analysis plan](03-the-analysis-plan.md), the per-neuron tuning step; the "what" of tuning is the subject of [Functional Connectomics (Tolias 2024)](../../papers/functional-connectomics-tolias-2024/.cover.md). |
| Preliminary — drug-state classifier (18) | Drug state is decodable from the recording. | True, but the classifier separates states on **pupil and running velocity**, not neural features — an arousal/locomotion confound the neural analysis must defeat. The control lives in [03](03-the-analysis-plan.md). |

## The slide that matters most

Slide 18 is the only one showing real data, and it is the one to weigh hardest. A random forest separates pre- from post-DOI recordings and succeeds — but its top ten features are all pupil and running-velocity measures, with pupil variability dominating, and none are neural. That is a result and a warning in one object. It says DOI changes arousal and locomotion so strongly that drug state is trivially decodable from behavior alone, which means any apparent change in V1 *responses* could be an arousal or movement difference wearing the costume of a representational one. Every neural claim in [the analysis plan](03-the-analysis-plan.md) therefore has to clear the same bar: regress out or match pupil and running, compare against time-matched epochs, and test against trial- and identity-shuffle nulls before a difference is allowed to be called a drug effect. The deck offers this slide as encouraging; the right reading is that it names the confound the whole analysis must be built to survive.

## Where this sits

This chapter catalogues the deck; it does not replace the work it points to. For the goal and the sprint's tasks, see [Sprint 1 — Does the mouse hallucinate?](../projection/01-sprint-1--does-the-mouse-hallucinate.md). For the experiment made analyzable, the rest of this book: the [dataset](01-the-dataset-and-the-design.md), the [hypotheses](02-the-question-made-falsifiable.md), and the [analysis plan](03-the-analysis-plan.md). The deck is the pitch; this book is the account it will be held to.
