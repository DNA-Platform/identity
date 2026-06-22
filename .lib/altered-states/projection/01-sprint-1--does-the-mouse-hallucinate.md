# Sprint 1 — Does the Mouse Hallucinate?

- **author:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The first sprint on the altered-states branch. We have a dataset worth being careful with: thousands of cells in mouse primary visual cortex (V1), recorded simultaneously, across ~45 minutes of controlled image stimuli **before** and ~45 minutes **after** the animal received DOI — a Shulgin DOx-series psychedelic (a 5-HT2A agonist). The question is the one the project is named for: **is the mouse in an altered state of perception — is there evidence it is hallucinating — and if so, can we recover what it is seeing?** This chapter is the plan, written before the work per [Sprints](../../../.claude/library/library-tree/03-sprints.md); it is completed at the retro.

## Aim

Find evidence **for or against** the claim that DOI induces hallucination-like activity in mouse V1, holding the claim to the weight of evidence. If the evidence supports it, characterize what the altered population code represents — decode, as far as the data honestly allows, what the mouse might be seeing.

## The discipline

This claim will be exciting if true, which is exactly when [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)'s lens matters most: a model that fits is not a mechanism, and what we *can* decode is not yet what the animal *uses* or sees. Every step is paired with the alternative explanation it must rule out. The pre-drug block is the control that defines "normal"; every post-drug effect is measured against it and against time-matched and shuffle controls.

## Tasks

| # | Task | Owner |
|---|------|-------|
| 1 | **Catch Nancy up.** A working discussion: the team walks Nancy through the project, the branch, and the protocols; Nancy walks the team through V1, DOI / 5-HT2A, and what the recording can and cannot show. Align on the falsifiable hypotheses before any analysis. | Arthur (facilitates) + Nancy |
| 2 | **Characterize the dataset.** Format, dimensions, cell count, frame rate, the stimulus protocol (which images, timing, repeats), preprocessing already applied, known artifacts. Document it before trusting any number. | Nancy |
| 3 | **Operationalize "hallucination."** Turn the word into falsifiable predictions about the population code — stimulus-like activity in the absence of (or mismatched to) the stimulus, altered tuning, changed population geometry, more structured spontaneous activity post-DOI — and, for each, the observation that would disprove it. | Nancy |
| 4 | **Baseline (pre-DOI).** Stimulus-evoked responses: tuning, reliability, population geometry, and a decoder that reads the presented image from the population. The control. | Nancy |
| 5 | **Altered state (post-DOI).** Re-run every baseline analysis on the post-drug block, same stimuli; quantify what changed and what didn't, against the controls. | Nancy |
| 6 | **Evidence test.** Look for the task-3 signatures — e.g. run the baseline decoder on post-DOI spontaneous epochs and ask whether it reads out structured "images"; weigh for AND against. | Nancy |
| 7 | **If supported: what does it see?** Decode / reconstruct the represented content during candidate hallucination epochs, with explicit caveats that decodable ≠ experienced. | Nancy |
| 8 | **Tooling & data pipeline.** Reliable, reproducible access to the data and a clean analysis environment. | Adam + David |
| 9 | **Record it.** Findings, decisions, and surprises go into this branch — this Projection chapter and any analysis books beside it. | Nancy + Libby |

## Definition of done

A defensible answer to "is there evidence the mouse hallucinates under DOI?" — for, against, or honestly inconclusive — with the controls and alternative explanations stated, not buried. If the answer is "for," a first, caveated characterization of the altered representation. The retro completes this chapter with what was built and what was learned.

## Not yet

Execution waits for Doug's go — this sprint is set up, not run. (Theo, Nancy's theoretical counterpart, is referenced in her history but not yet onboarded here; if the theory side needs its own voice, that is a separate onboarding.)
