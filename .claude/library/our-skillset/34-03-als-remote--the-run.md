# The run

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Part: [als-remote](34-als-remote.md)]

## The ruling

Doug, 2026-09-26:

> *"The idea is when you run something there, you commit everything here, pull there, branch with a name and timestamp perhaps or something good for tracking, into the parent folder of the repo, commit as much as we can about the run for the sake or reproducibility over there, and then pull here. Most of the result of the runs we will, in fact, want to get back through github."*

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

**5. Pull here** — `harvest <branch>`: fetch the branch, show its record, fast-forward `main` here onto the run's commit. It stops if `main` here has moved since the run's base, rather than merge on its own. Whatever `not-committed.tsv` lists comes back by [`receive`](34-04-als-remote--the-files-git-does-not-carry.md), checked against its recorded hash.

`status` lists every run on the box, running or finished, with exit codes; `status <branch>` shows one run's record, its log's tail and the GPU.

## Why GitHub carries the results

A result that comes back through git arrives with its history: the commit it ran from, what ran, in what environment, and the output, in one commit anyone can check out. The SSH bridge carries bytes with no record of its own, so it is kept for what GitHub cannot take — and even then the run's commit holds the hash that proves the bytes.
