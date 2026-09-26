# The whole machine

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Part: [als-remote](34-als-remote.md)]

## The ruling

Doug, 2026-09-26: *"There should be a way for you to poll. Make sure you get the most out of the machine. No one else is using it."*

## The protocol

**Pack the GPU by measurement.** A run with several independent GPU jobs lists them, one command a line, and hands the list to [34-als-remote--pack.sh](34-als-remote--pack.sh) (on the box as `.tools/pack.sh`, reached from a run's command as `$ALS_ROOT/.tools/pack.sh`). The first job runs alone until it is ready — its first epoch by default — and its memory is read from `nvidia-smi`; each next job starts only while free memory exceeds the largest job seen by a quarter. Nothing is guessed from a model's size. Each job logs to its own numbered file beside the list, and `pack.log` records when each started and what the card held. A job that dies anyway is not retried by the packer: the run's next step — for twins, the conductor — finishes whatever is still missing, one at a time.

**Share the CPU explicitly.** Several processes each defaulting to every core would fight; a run that packs sets `OMP_NUM_THREADS` so the jobs together use the cores once.

**Poll, don't wait.** `watch <branch> [minutes]` runs in the background and prints one line per interval — running or finished, the exit code, the GPU's load and memory, the run's last line, and each packed job's last line — and ends by itself when the run's branch has pushed. `status <branch>` is the same, once, in detail. The room never blocks on a run.

**Measure the first minutes, then say how long.** A duration is quoted only from the run's own clock — the trainer prints each epoch's time — and it is said which part is measured and which extrapolated.

## Measured on the box

The first GPU run, 2026-09-26: an RTX 5080 (16 GB). One 2x twin at batch 128 takes 5.3 GB and an epoch takes about 3.6 seconds on its own; two pack onto the card (10.7 GB, 95% busy); a third does not fit. The laptop's CPU took 3–5 minutes for the same epoch.
