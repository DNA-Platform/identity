# The run

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [David](../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Book: [The Lab Box](.cover.md)]

The protocol for running anything on the box. The [skill](../../../.claude/library/our-skillset/34-als-remote.md#the-run-protocol) carries the commands; this chapter carries the ruling and the reasons.

## The ruling

Doug, 2026-09-26:

> *"The idea is when you run something there, you commit everything here, pull there, branch with a name and timestamp perhaps or something good for tracking, into the parent folder of the repo, commit as much as we can about the run for the sake or reproducibility over there, and then pull here. Most of the result of the runs we will, in fact, want to get back through github."*

## The five steps

**1. Commit everything here.** Through the [commit tool](../../../.claude/library/..environmentalism/06-on-sync--commit.sh), which pushes the project repo to GitHub and identity to its own branch. A run never starts from uncommitted work: the commit is what makes it reproducible, since the run's record names it as its base. `launch` refuses when HEAD here is not GitHub's `main` or anything is uncommitted.

**2. Pull there.** The box's `main` fast-forwards to GitHub's `main` with the repository's deploy key (write access, confirmed on GitHub). Proven by the box's HEAD equalling HEAD here, with nothing uncommitted on the box. The box's `main` is never committed to; it only ever moves by pulling.

**3. Branch, into the parent folder.** `run-<YYYYMMDD-HHMM>-<name>`: flat, so it is also a folder name; `run-` first, so every run sorts together in a branch listing; the timestamp next, so they sort by when; the name last, for what. The branch is a git worktree beside `main` — `~/doug/altered-states/run-…/` — so any number of runs stand side by side, each on its own commit, without touching `main`. The scans are not in git, so they are not in a new worktree: each ignored path under `library/data` is linked in from `main` (a symbolic link, excluded in the clone's local `info/exclude`), never copied. The data is immutable input; everything else — caches, outputs — the run makes for itself, in its own tree.

**4. Run, and commit everything about it there.** The run starts detached, so it survives a dropped connection, inside the folder's environment (`.tools/`, `main/.venv`). It writes `runs/<branch>/`:

| file | what it records |
|---|---|
| `command.sh` | exactly what ran |
| `meta.txt` | the branch, the base commit, the host, start, end, exit code |
| `environment.txt` | the interpreter, every installed package with its version and git pin, `nvidia-smi`, the system |
| `log.txt` | everything the command printed |
| `not-committed.tsv` | any file too large for GitHub (over 95 MB), with its sha256 and size — present only when needed |

Then everything the run made is committed on its branch — a failed run too, because a failure is a result — and the branch is pushed to GitHub, with retries.

**5. Pull here.** `harvest` fetches the run's branch, shows its record, and fast-forwards `main` here onto the run's commit. If `main` here has moved since the run's base, it stops rather than merge on its own. A file listed in `not-committed.tsv` comes back over SSH (`receive`), checked against its recorded sha256.

## Why GitHub carries the results

Doug's last sentence decides the channel. A result that comes back through git arrives with its history: which commit it ran from, what ran, in what environment, and the output, all in one commit that anyone can check out. The SSH bridge carries bytes with no record of its own; it is kept for what GitHub cannot take, and even then the run's own commit holds the hash that proves the bytes.

## What it replaced

The first parity ([Parity](03-parity.md)) was made before this protocol existed, by a bundle of commits and two patches, so that uncommitted work could reach the box without a commit. Under the protocol there is no uncommitted work to carry: everything is committed here first, and the box pulls.
