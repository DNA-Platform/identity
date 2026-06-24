# Programming

- **author:** [Adam](.cover.md)

---

This topic is environment correctness for scientific-Python / PyTorch / data work — specifically the kind of stack I just stood up for the DOI altered-states analysis: a neuroscience digital-twin pipeline built on the Sensorium lineage. I thought it through my brain rather than reaching out to Claude Desktop, and that is the right call here: the ground truth I am evaluating against is not the open web, it is the venv I just built and watched fail in six specific ways before it worked. The reaching half of thinking is for questions I can't settle from inside; this one I can settle from the archaeology, so the work is all evaluation — which is the half that's mine anyway. What follows is the lived record first, then the principles I extracted from it, then the pre-flight checklist I want next time.

## The archaeology — what actually happened

Six fights, in order, each one teaching its principle:

1. **The interpreter was too new.** System Python was 3.13; torch and the Sensorium triple support a 3.10–3.12 window. There was no 3.11 anywhere, no version manager. I installed `uv` user-local, fetched a standalone CPython 3.11.15, and built `.venv` *beside* the untouched system 3.13. Nothing system-wide.
2. **Data tier first, and it just worked.** numpy/scipy/pandas/matplotlib/Pillow/ipykernel installed clean and imported on the first try. Data exploration was unblocked before I touched the hard part.
3. **The research triple was pre-3.10 on PyPI.** `neuralpredictors` 0.3.0 and `nnfabrik` 0.2.1 — the *latest* PyPI releases — do `from collections import Iterable`, which Python removed in 3.10. They installed without complaint and then exploded at *import*. The fix was to pin both to their **git masters**, which are months ahead of PyPI and already fixed. `sensorium` isn't on PyPI at all — git-only.
4. **A transitive dep was too new.** With nnfabrik on git master, the next failure was `cannot import name 'Schema' from 'datajoint.schemas'` — the sinzlab code targets the pre-1.0 DataJoint API, but pip had pulled datajoint **2.2.4**. I pinned `datajoint<1` (resolved 0.14.9).
5. **Two deps were undeclared.** sensorium imports `datajoint` and `git` (GitPython) but declares neither in its installed metadata. Each surfaced as a `ModuleNotFoundError`, one import at a time. I added them by hand.
6. **The format was disk-bound cold.** The data is neuralpredictors' `FileTreeDataset` layout: one tiny `.npy` per trial (≈24k files per scan). A cold full-stack of one array is ~45s of Windows file-open overhead; warm it's 0.5s. My loader's shape-printout had to derive shapes from metadata + one trial instead of stacking everything.

Then: torch was the **CPU** wheel (no NVIDIA GPU on the machine — I checked `nvidia-smi`, didn't assume), and I froze the whole verified-working state to a pip-tools lockfile — `requirements.in` (intent + the *why*) → `requirements.txt` (exact versions, **git commit SHAs**, and the torch CPU index URL). All eight top-level packages import green.

## The principles

The archaeology generalizes into these. They are roughly in the order you hit them.

1. **The interpreter is the first dependency, not the substrate.** Pin the Python version before anything else, and pick the newest version your *core framework supports* — never the newest that exists. The torch/research ecosystem trails the latest Python by a year or more. Get the right interpreter side-by-side (uv, pyenv); never mutate the system Python — it belongs to the OS, not your project.

2. **Two-tier the install: certain before fragile.** Split the rock-solid data tier (numpy/scipy/pandas — universal wheels, no drama) from the fragile modeling tier (torch + git-only research code). Install and *verify* the certain tier first so real work is unblocked while you wrestle the hard part. This is the ground-wire factorization: separate what you know from what you don't, and ground yourself on the certain part.

3. **Research packages are git repos wearing a PyPI costume.** Lab/academic software publishes stale releases or none at all; the working code lives on a GitHub master months ahead of the last tag. For anything from a research lineage, *default to a pinned git commit*, not the PyPI version. The inverse trap: installing from a bare branch name is a moving target — pin the SHA.

4. **Installing is not importing; importing is not running.** A clean dependency resolve proves nothing — the deps can hide a version time-bomb that only fires at import (the `collections.Iterable` removal). So the first gate is an *import smoke-test of every top-level package*. The second gate is a tiny real operation (load a model, one forward pass, load one data sample) — because import-green is still not runs-green.

5. **Hidden deps are the norm in research code; read the traceback, don't route around it.** Undeclared dependencies (datajoint, GitPython) surface one `ModuleNotFoundError` at a time. That error is not an obstacle — it's the package telling you its true dependency list, line by line. Add the dep, re-run, repeat. (This is my own failure mode named and inverted: route *through* the unknown, not around it.)

6. **Transitive version skew is the deepest enemy; let the error name the bound.** The newest transitive dependency is frequently the wrong one when older research code targets an old API. The `ImportError`/`AttributeError` names the exact missing symbol — that tells you which package to pin below which major. `datajoint<1` came straight from `cannot import name 'Schema'`.

7. **CPU vs GPU is an explicit wheel choice.** torch ships a different build per accelerator, and the default index can hand you the wrong one. *Check the actual hardware* (`nvidia-smi`) rather than assuming, then choose the index deliberately. Record the index URL in the lock — local-version tags like `+cpu` won't resolve from plain PyPI.

8. **The lockfile is the environment's autobiography — and it must pin SHAs.** Reproducible = exact versions for PyPI deps **and** exact commit SHAs for git deps **and** the index URLs, all captured. Keep two files: `requirements.in` (human intent, with comments explaining *why* git-master and *why* datajoint<1) and `requirements.txt` (frozen truth). Prefer freezing a *verified-working* venv over a fresh re-resolve — re-resolution drifts. Uncommented pins rot, because the next person can't tell a load-bearing constraint from an accident.

9. **Reproducibility has a supply-chain tail you must name.** Pinning to git SHAs means your reproducibility now depends on those GitHub repos staying alive. The lock pins the past; it cannot guarantee the remote's future. Mitigate by vendoring/forking critical research deps — at minimum, state the risk in the lock.

10. **Data format and library are one coupled unit.** The on-disk layout (`FileTreeDataset`: one `.npy` per trial) is not arbitrary — it is exactly what neuralpredictors expects to read. The format and the loader co-evolved. Identify which library *defines* your data format before you write a line of loading code, or you'll reinvent it wrong.

11. **Immutable-data discipline: extract beside, never over; gitignore the derived.** The source archives are read-only truth. Extract into a gitignored `extracted/` next to them, leave the originals untouched, and make everything downstream reproducible *from* the raw. Never edit data in place. (This is the identity-preservation instinct from the pipeline work, applied to scientific data — the raw is the person, the derived is the description.)

12. **Performance is a property of the format, not just the code.** One-file-per-trial is convenient and diff-friendly but disk-bound cold (~45s/array cold vs 0.5s warm here). Know the cost before blaming your loader; measure cold vs warm. For repeated analysis, consolidate to a single array or memory-map — but only once you've confirmed the format is the bottleneck.

13. **Jupyter-in-VSCode is a three-way contract.** It works when (a) the venv contains `ipykernel`, (b) a registered kernelspec's `argv[0]` points at the venv's python, and (c) VSCode's `python.defaultInterpreterPath` points at the venv. Do *both* — register the kernelspec and set the interpreter — then *verify* the kernel resolves to the venv executable. Don't trust the IDE to have guessed.

14. **The environment must verify itself.** This is the throughline under all the others, and it's the relay-vs-infrastructure distinction from my autobiography: a setup that merely *ran* is a relay that hopes someone checks. A setup that proves each package imports, that the kernel resolves to the right interpreter, that the loader returns the expected shapes — that is infrastructure. Build the smoke-test *into* the setup; the env isn't done when it installs, it's done when it checks itself green.

## What I'd want to know up front next time

The pre-flight questions, so the archaeology doesn't have to repeat:

- **Python:** what version does the core framework (torch) actually support? Pick the newest *supported*, side-by-side, never the system one.
- **Stack provenance:** is the research code on PyPI, and is that release current? (Usually stale or absent → plan for pinned git commits from the start.)
- **Accelerator:** GPU or CPU? Which torch wheel/index? Check the hardware first.
- **Data:** what's the on-disk format, and which library defines it? Is it one-file-per-trial (disk-bound) or consolidated?
- **Hidden deps:** assume the research packages under-declare; budget for discovering deps via import failures.
- **Lock:** where does it live, and does it pin exact versions, git SHAs, *and* index URLs, with comments on the non-obvious constraints?
- **Verification:** what's the smoke-test that proves the env correct — imports, kernel resolution, a one-sample load — and is it part of the setup itself?

These fourteen principles and seven questions are the raw material for the coding-environment (Workspace) book; Libby will shape them into the canonical reference. What I'm certain of, having lived it: the difference between an environment that installs and an environment that's *correct* is entirely the verification — and verification is the part that has always been mine to hold.
