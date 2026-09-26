# The run

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Part: [als-remote](34-als-remote.md)]

## The ruling

Doug, 2026-09-26:

> *"The idea is when you run something there, you commit everything here, pull there, branch with a name and timestamp perhaps or something good for tracking, into the parent folder of the repo, commit as much as we can about the run for the sake or reproducibility over there, and then pull here. Most of the result of the runs we will, in fact, want to get back through github."*

And, the same night, once runs were long: *"remember that all code it written here and is transported there via git. We want the object of record to be here while things are long-running. You probably rebase the branch. You can have probes you run as test code, but remember to record them in the branch there as something we commit. Probably good records from the perspective of reproducibility."*

## The protocol

**1. Commit everything here** — [/push](26-push.md), which pushes the project repository to GitHub and identity to its branch. A run never starts from uncommitted work: the commit is its reproducibility anchor. `launch` refuses when anything is uncommitted or HEAD is not GitHub's `main`.

**2. Pull there** — `pull` (and `launch` pulls first). The box's `main` fast-forwards to GitHub's `main` with the deploy key. It is proven by the box's HEAD equalling HEAD here, with nothing uncommitted on the box. Uncommitted state on the box is dropped only when it is exactly the tree being pulled, or on `pull --discard`.

**3. Branch, into the parent folder** — `run-<YYYYMMDD-HHMM>-<name>`: flat, so it is also a folder name; `run-` first, so runs sort together; then when; then what. A git worktree beside `main`, so runs stand side by side without touching `main`. The ignored paths under `library/data` are symbolic links into `main`, excluded in the clone's local `info/exclude`: the data is immutable input and is never copied per run. Caches and outputs the run makes for itself, in its own tree.

**4. Run, and commit everything about it there** — detached, so it survives a dropped connection, inside the folder's environment. `runs/<branch>/` records:

| file | what it records |
|---|---|
| `command.sh` | exactly what ran |
| `meta.txt` | branch, base commit, host, start, end, exit code |
| `environment.txt` | interpreter, every package with its version and git pin, `nvidia-smi`, the system |
| `log.txt` | everything the command printed |
| `not-committed.tsv` | any file over 95 MB, with its sha256 and size — only when there is one |

Everything the run made is committed on its branch — a failed run too, since a failure is a result — and the branch is pushed, with retries. A file over GitHub's limit stays on the box, recorded by hash.

**5. Pull here** — `harvest <branch>`: fetch the branch, show its record, and bring its commits onto `main` here. **Main here is the object of record** and keeps moving while a run is long, so when it has moved past the run's base, the run's commits are rebased onto it and `main` fast-forwards onto the result; a conflict aborts the rebase and changes nothing. The branch on GitHub keeps the commits exactly as they ran, and `meta.txt` still names their base. Whatever `not-committed.tsv` lists comes back by [`receive`](34-04-als-remote--the-files-git-does-not-carry.md), checked against its recorded hash.

`status` lists every run on the box, running or finished, with exit codes; `status <branch>` shows one run's record, its log's tail and the GPU; `watch <branch>` polls it in the background until it pushes. A run with several GPU jobs packs them onto the card by measured memory, and its command sees `$ALS_ROOT` (the folder) and `$ALS_RUN` (its branch) — [The whole machine](34-07-als-remote--the-whole-machine.md).

A failed run is kept, branch and record, like any other: the first GPU run (`run-20260926-2347-gpu-twins`) stopped in two minutes on a stale scan folder, and its branch is the record of the bug its successor ran without.

## Code, and probes

**All code is written here** and reaches the box only through git — the run's command included, which travels inside the run's own record. Nothing is edited on the box.

**A probe is test code, and it is recorded.** `probe <branch> <name> '<command>'` runs a check in a run's worktree, in the folder's environment, and writes the command and everything it printed into `runs/<branch>/probes/<time>-<name>.sh` and `.out`. A probe on a running run is committed with the run; on a finished one it gets its own commit on the branch, pushed. A check run on the box and not recorded is a finding nobody can reproduce, so there is no other way to run one. The first recorded probes, on `run-20260926-2350-gpu-twins`: the card and torch on it, one file per trial in every 2x scan folder, and parity on every pair.

## Why GitHub carries the results

A result that comes back through git arrives with its history: the commit it ran from, what ran, in what environment, and the output, in one commit anyone can check out. The SSH bridge carries bytes with no record of its own, so it is kept for what GitHub cannot take — and even then the run's commit holds the hash that proves the bytes.
