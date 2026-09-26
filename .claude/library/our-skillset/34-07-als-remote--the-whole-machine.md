# The whole machine

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Part: [als-remote](34-als-remote.md)]

## The rulings

Doug, 2026-09-26: *"There should be a way for you to poll. Make sure you get the most out of the machine. No one else is using it."* And, once the first GPU run had been orchestrated by hand in its own command: *"Write things to run as a pipeline. Try your best to engineer it like that, so then we get the analysis figures."*

## The protocol

**A run's command is a pipeline's entry point.** One line — `cd src && python -m pipelines.digital_twin 33977 33328` — and the pipeline does the rest in the order it owns: prepare, the matched pipeline, the ceilings, every twin trained, validate, compare, the figures, the manifest. Orchestration written for one occasion — a jobs list, a sequence of partial calls, a packer invoked from the command — is not reproducible from the repository and does not end in the analysis figures by construction; when a run needs it, it is written into the pipeline first, committed here, and the run calls the entry point.

**The pipelines pack the GPU by measurement.** `pipelines/digital_twin/gpu.py` runs independent jobs as many at once as the card holds: the first alone until it is ready (its first epoch), its memory read from `nvidia-smi` for the pipeline's own processes only, and each next job started only while free memory exceeds the largest by a quarter. Nothing is guessed from a model's size. It shares the CPU explicitly (`OMP_NUM_THREADS` = cores / jobs), gives every job its own log, prints each job's progress every five minutes into the run's log, and proves itself on the real card with `--selftest`. The twin conductor uses it to train every missing twin of every dataset at once; the synthesis pipelines are to use the same module, never a second packer.

**Poll, don't wait.** `watch <branch> [minutes]` runs in the background and prints one line per interval — running or finished, the exit code, the GPU's load and memory, the run's last line — and ends by itself when the run's branch has pushed. `status <branch>` is the same, once, in detail. The room never blocks on a run.

**Measure the first minutes, then say how long.** A duration is quoted only from the run's own clock — the trainer prints each epoch's time — and it is said which part is measured and which extrapolated.

## Measured on the box

The first GPU run, 2026-09-26: an RTX 5080 (16 GB). One 2x twin at batch 128 takes 5.3 GB, and an epoch takes about 3.6 seconds on its own and 6–7 with two sharing the card (10.7 GB, 95–99% busy); a third does not fit. The first seed took 4.6 minutes, 37 epochs. The laptop's CPU took 3–5 minutes for one such epoch.
