# What each pipeline does

- **author:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

[Book: [The Pipelines](.cover.md)]

Four pipelines, each answering one question and reading only the finished products of the ones before
it. Each package's cover is its documentation; this chapter is the map.

```
matched  ->  digital_twin  ->  mei
                          \->  metamer
```

## The chain, as one command

```bash
cd src
python -m pipelines.digital_twin 33328 33977 --then mei,metamer
```

The twin pipeline's first phase runs `matched`; its twins are trained; and only when it has finished
every phase and recorded the dataset's canonical build does `--then` start the pipelines that depend on
it, each on the same dataset. Every phase checks for its product first, so a rerun costs only what is
missing. On the box a run's command is exactly this - a pipeline's entry point, never orchestration
written for the occasion.

## `matched` - which neuron is which

[`src/pipelines/matched/`](../../../src/pipelines/matched/.cover.md). The same cell across every
recording of a dataset: Erin's matcher (mutual nearest neighbours) at her 10 µm on registered stack
coordinates, every link between two recordings given a status - `valid` for two registered frames,
`provisional` for the same session in mixed frames, `unregistered` otherwise - so no figure can imply
more than the data supports. It writes the **spine** (every pre/post pair of the stimulus scans: 749 on
33328, 3,256 on 33977), the **four-way table** (the spine's cells present in all four recordings of a
dataset with spontaneous ones: 1,177 on 33977), and the links into each spontaneous recording. Row
order is identity downstream: the spine's order is every twin's readout order.

## `digital_twin` - the twins

[`src/pipelines/digital_twin/`](../../../src/pipelines/digital_twin/.cover.md). Its phases:

- `prepare` - each scan's frames assembled from the stimulus set's, at the delivered 36x64;
- `match`;
- `ceiling` - the lab's noise ceiling;
- `twin` - the dataset's pairs, trained packed onto the card by measured memory;
- `validate` - FEVE and the health panels;
- `compare` - pre against post on cells reliable in both;
- `figures` - explained variance.

Every dataset gets **two twins**, pre and post, trained on the cells `matched` finds in **all** of its
recordings (`run.cell_set`). For 33328, with two driven recordings, that is the spine. For 33977, with
two spontaneous recordings as well, it is the four-way **intersection**. Doug, 2026-09-28: *"the rule is
that from matched, we take the intersection of all recordings... That's a simplifying assumption."*
The twins use the published Sensorium
configuration, verbatim, on the frame it was published for. When every phase has run, the pipeline
writes the **canonical build** (`build.json`): the exact checkpoints with their hashes, the settings,
and the data's fingerprint. Every reader of a twin loads through it.

## `mei` - most exciting images

[`src/pipelines/mei/`](../../../src/pipelines/mei/.cover.md). Walker 2019's recipe on the lab's ops,
for every matched pair reliable in both conditions (the lab's FEV >= 0.15), from the dataset's pair of
twins; best-understood cells first. Phases `index`, `mei` (sixteen
cells a batch on the fast path), `quality`, `organize`, `figures` - which are the two Doug asked for:
`comparison.png` (every pair, before above after, by pre-FEVE, its pages in `comparison/`) and
`spectrum-and-filter.png` (the MEI spectrum before and after DOI, and the filter between them - the
June result the MEIs must replicate). The checks - the fast path against the lab's step, the twin
against the fixed 1x benchmark at three MEI blurs, the filter against June's - write to `verification/`.

## `metamer` - the image that evokes a measured response

[`src/pipelines/metamer/`](../../../src/pipelines/metamer/.cover.md). Cobos 2022's inversion of the twin
against a response the animal actually gave. The surface Doug set on 2026-09-27, all on the pair
`mei` uses: one metamer per test stimulus (`--full`), one **unconditioned** metamer (every trial
pooled), the **null** metamer (a spontaneous recording pooled), and the **spontaneous metameric
moments** - every half-second bin, the intersection's pre twin reading the pre recording (pre-pre) and
the post one (pre-post). Batched on the same fast path, held against the single-image recipe by
`check.py`.

## Where the analyses sit

Doug's analyses live in `src/analyses/` and read the pipelines' artifacts; they do not recompute what a
pipeline makes. `src/pipelines/.analyses/` holds the scratch studies that checked a pipeline, mirroring
its shape; nothing imports from it.

---

[Previous: [Back to pipelines, on a new machine](01-back-to-pipelines-on-a-new-machine.md)] | [Book: [The Pipelines](.cover.md)] | [Next: [The rules every pipeline follows](03-the-rules-every-pipeline-follows.md)]
