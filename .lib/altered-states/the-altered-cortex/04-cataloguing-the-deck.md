# Cataloguing the deck

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

The project has an origin document: Erin Neyhart's project-overview presentation, kept in the project layer as [Project Overview — The DOI Altered-States Experiment](../../resources/erins-presentation/.cover.md). That document is a faithful, de-named representation of her deck — what the collaborators show to introduce the experiment. This chapter is its counterpart from inside the analysis: where the deck *frames* the project, this catalogues its claims and maps each one to where it is made falsifiable. The deck and this chapter point at each other across the layer boundary on purpose.

A word on weight, because it is my job to say it. A deck is the lightest evidence we hold. It is the project as its designers intend it, and several of its most striking slides — the distorted reconstructions, the per-neuron most-exciting-images — are *predicted* results with a literal question mark over the post-drug panel, not findings that have survived a test. That is not a criticism; it is the genre. An overview is supposed to motivate, and motivation runs ahead of evidence. The discipline is to keep the two ledgers separate: what the deck *hopes to show* belongs in the deck; what we can *actually earn from the data* belongs here, paired with the reading that would answer it and the limits of the instrument that makes it. A model that fits is not a mechanism. This chapter is where each slide is made to declare which ledger it is on.

## Each claim, and where it is answered

| Deck claim (slide) | What it asserts | Where it is held to account |
|---|---|---|
| The phenomenon and the questions (2–3) | Psychedelics distort perception; can rodent V1 enter a comparable state, and can hallucinatory content be decoded? | [The question: how DOI affects neural representation in mouse V1](02-the-question-made-falsifiable.md) — the questions turned into numbered hypotheses about the form of DOI's change, each with what would answer it. |
| DOI is a 5-HT2A agonist; the 2A receptor drives the trip (11, 15, 19) | Pharmacological premise; ketanserin abolishing the psilocybin trip is the causal evidence. | Imported from the human literature, **assumed not tested** in this experiment. The behavioral proxy in rodents — the head-twitch response — and its limits are weighed in [02](02-the-question-made-falsifiable.md). |
| Charles Bonnet / internally-generated activity (17) | A hallucination is structured activity arising without sensory input. | The structured-spontaneous-activity hypothesis in [02](02-the-question-made-falsifiable.md); its mechanistic neighbor is [Sequence Filtering (Histed 2025)](../../papers/histed-sequence-filtering-2025/.cover.md). |
| The design: prep, rig, before/after, 2 mg/kg (4–6) | Same cells, same images, recorded pre- and post-DOI. | [The dataset and the design](01-the-dataset-and-the-design.md) — verified against the files, not the deck's prose. |
| Experiment 1 — image reconstruction (8) | The seen image is decodable; post-drug reconstructions will distort. | [The analysis plan](03-the-analysis-plan.md), the inversion step. Builds on [Digital Twins (Cobos/Tolias 2022)](../../papers/tolias-digital-twins-2022/.cover.md). |
| Experiment 2 — most-exciting-image generation (7) | Single-cell tuning shifts under DOI. | [The analysis plan](03-the-analysis-plan.md), the per-neuron tuning step; the "what" of tuning is the subject of [Functional Connectomics (Tolias 2024)](../../papers/tolias-functional-connectomics-2024/.cover.md). |
| Preliminary — drug-state classifier (18) | Drug state is decodable from the recording. | True, and the classifier separates states on **pupil and running velocity**: DOI changes the animal's behaviour, strongly. That is part of what DOI does, recorded. Decoding the drug state is not the project's question; what DOI does to V1's representation is. |

## The slide that matters most

Slide 18 is the only one showing real data. A random forest separates pre- from post-DOI recordings and succeeds, and its top ten features are all pupil and running-velocity measures, with pupil variability dominating. It shows that DOI changes the animal's arousal and locomotion strongly. That is part of what DOI does: behaviour differing under DOI is an observation, recorded beside V1, never a nuisance to regress out of it (Doug, 2026-09-17).

It is not the project's question. A classifier that tells a drugged recording from an undrugged one is easy to build and says nothing about V1's representation. The project asks what DOI does to that representation: its gain, its reliability, its tuning, and whether the activity carries stimulus-like content the image did not put there ([02](02-the-question-made-falsifiable.md)). Where a readout depends on where the eye looks (a receptive field, an MEI), the eye's position is measured so the readout is read in the right frame. (This section used to read the slide as "the confound the whole analysis must be built to survive", with every neural difference made to clear a behaviour regression "before a difference is allowed to be called a drug effect". That treated DOI's action as the question; it is not.)

## Where this sits

This chapter catalogues the deck; it does not replace the work it points to. For the goal and the sprint's tasks, see [Sprint 1 — Does the mouse hallucinate?](../projection/01-sprint-1--does-the-mouse-hallucinate.md). For the experiment made analyzable, the rest of this book: the [dataset](01-the-dataset-and-the-design.md), the [hypotheses](02-the-question-made-falsifiable.md), and the [analysis plan](03-the-analysis-plan.md). The deck is the pitch; this book is the account it will be held to.
