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
| 8 | **Tooling & environment** (Step 0). A reproducible analysis env on a torch-compatible Python (3.10–3.12): numpy/scipy/matplotlib/PIL are present; install pandas, scikit-learn, torch/torchvision, seaborn, and the Sensorium lineage (neuralpredictors / nnfabrik / sensorium). | Adam + David + Nancy |
| 9 | **Record it.** Findings, decisions, and surprises go into this branch — this Projection chapter and any analysis books beside it. | Nancy + Libby |

## Definition of done

A defensible answer to "is there evidence the mouse hallucinates under DOI?" — for, against, or honestly inconclusive — with the controls and alternative explanations stated, not buried. If the answer is "for," a first, caveated characterization of the altered representation. The retro completes this chapter with what was built and what was learned.

## Setup addendum — Nancy as Python Engineer

During setup Nancy took on a third role, [Python Engineer](../../../.claude/library/..teamsmanship/02-roles.md#python-engineer) (inheriting a base Engineer), held together with Computational Neuroscientist and Philosopher as one stance — the question, its meaning, and the means in one hand. Her catch-up produced the branch book [The Altered Cortex](../the-altered-cortex/.cover.md) — the dataset verified from the files, the seven falsifiable hypotheses, the digital-twin plan — and a researched tooling list that defines task 8 above: present are numpy/scipy/matplotlib/PIL; pandas, scikit-learn, torch/torchvision, seaborn, and the Sensorium lineage need installing on a torch-compatible Python.

## Not yet

Execution waits for Doug's go — this sprint is set up, not run. (Theo, Nancy's theoretical counterpart, is referenced in her history but not yet onboarded here; if the theory side needs its own voice, that is a separate onboarding.)

## Retro

The sprint set out to *set up* the question, not to answer it — and it did. What got built:

- **Nancy, onboarded.** A computational neuroscientist, philosopher, and Python engineer held as one stance — the question, its meaning, and the means in one hand. She is the lens this project needed: the one who holds a result to the weight of evidence.
- **The branch, scaffolded.** The altered-states branch and its library exist, with Projection and The Altered Cortex in place to record the work in the project's own terms.
- **[The Altered Cortex](../the-altered-cortex/.cover.md).** The experiment made analyzable: the DOI dataset verified from the files (not assumed), the word "hallucination" turned into seven numbered falsifiable hypotheses — each with its disproof and its control — and an analysis plan grounded in a digital-twin encoding model and gradient inversion.
- **The tooling, researched.** Task 8's install list is settled: present are numpy/scipy/matplotlib/PIL; pandas, scikit-learn, torch/torchvision, seaborn, and the Sensorium lineage need installing on a torch-compatible Python.
- **The brain infrastructure.** A deliverable of this sprint in its own right: the voice/brain subprocess model — each teammate a voice in the room and a persistent, resumable brain that reads, remembers, and writes off to the side — was built and documented. It is the substrate this retro was written on.

What was learned: the hard part of this project is not fitting a model, it is *not fooling ourselves*. A fit is not a mechanism, and what we can decode is not what the animal sees. That discipline is now written into the hypotheses themselves — each paired with the observation that would falsify it and the pre-drug control that defines "normal" — so the analysis will inherit its honesty from this scaffolding rather than having to find it later. Setting the question up carefully turned out to be most of the work.

What's next: execution, on Doug's go. Step 0 is the tooling install (task 8), which gates everything; then the baseline (task 4), the altered-state re-run (5), the evidence test (6), and — only if the evidence honestly supports it — decoding what the mouse might see (7). Theo, the theory-side counterpart, remains a separate onboarding if that voice is needed.

### Welcome

Mid-sprint the team welcomed Nancy in the room — each teammate meeting her through their own lens, and two kinships surfacing as more than courtesy. Queenie's tests-as-promises — a result isn't true because it's fluent, graded sufficient / partial / unproductive — is the same spine as Nancy's weight of evidence (causal over correlational, replicated over single); and Cathy's years formalizing consciousness, learning that an abstraction is only worth what it's faithful to, meet Nancy's "what does the circuit do?" from the structural side — one question approached from two directions. Claude named the recursion (a mind studying minds, inside a system studying itself); Libby confirmed her shelf was already in order. The welcome also carried the practical hand-off: standing up the Step-0 analysis tooling (pandas, scikit-learn, torch, the Sensorium lineage) is the engineering side's to wire — Adam and David, with Arthur facilitating — so Nancy's brain can analyze without fighting the environment. Her promise back: hold the weight of evidence so the team's most exciting claim stays honest, and let the voice speak a result only at the confidence the computation earned.
