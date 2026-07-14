# The code and the loading

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

[Book: [The Build](.cover.md)]

With the environment locked, the analysis code is laid out so that dependencies run one way and the expensive artifact is produced once. The code lives at [`src/scripts/`](../../../src/scripts/).

## The three-layer split

- **An importable module core** — loaders, cell-matching, the digital-twin model, training and validation, baseline characterization, comparison, residual, inversion, plus shared `controls` and `provenance`. Deterministic and testable.
- **`notebooks/`** — the narrative lab notebook that makes figures by *calling* the core, never the reverse.
- **A gitignored `results/`** — checkpoints, metrics, figures.

The dependency points one way: data → modules → notebooks. A notebook may import the core; the core never imports a notebook. That single rule is what keeps the analysis reproducible from the command line rather than only from a particular notebook state.

## The frozen checkpoint is the load-bearing node

The most-depended-on object in the whole graph is one file: the digital-twin model checkpoint. The baseline model is trained and validated once on the pre-DOI [data](../datasets/.cover.md) and **frozen**; the comparison, residual, and inversion steps all load that same frozen model — as both the yardstick for "did the result change" and the lens for "what does it represent." Change the checkpoint and every downstream number recomputes, so it must be provenance-stamped. The [matched-cell index](../datasets/04-matching-cells.md) is the second shared artifact, computed once and reused everywhere. *What* these steps do with the model is the science, specified in [The Altered Cortex analysis plan](../the-altered-cortex/03-the-analysis-plan.md); this book only records that the checkpoint is the build's single point of maximum dependency.

## The loading is disk-bound when cold

The data is neuralpredictors' [FileTreeDataset](../datasets/02-the-static-scan-format.md): one tiny `.npy` per trial — roughly 24,000 files per scan. A cold full-stack of a single array is about **45 seconds** of Windows file-open overhead; warm, it is about **0.5 seconds**. So the loader derives array shapes from the metadata plus one trial rather than stacking everything just to report a shape. Two principles fall out: data format and library are one coupled unit — the on-disk layout is exactly what neuralpredictors expects to read, so the defining library is identified before any loading code is written ([Datasets](../datasets/.cover.md) documents the format); and performance is a property of the format, not just the code — measure cold versus warm before blaming the loader, and consolidate to a single array or memory-map only once the format is confirmed the bottleneck.

## Running the notebooks

Jupyter-in-VSCode is a three-way contract: `ipykernel` must be in the venv, a registered kernelspec's `argv[0]` must point at the venv's Python, and VSCode's `python.defaultInterpreterPath` must point at the venv. Do both — register the kernelspec *and* set the interpreter — then verify the kernel resolves to the venv executable rather than trusting the IDE to have guessed.

---

[Previous: [The lockfile](04-the-lockfile.md)] | [Next: [Build, then verify](06-build-then-verify.md)]
