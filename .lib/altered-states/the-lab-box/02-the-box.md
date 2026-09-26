# The box

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [David](../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Book: [The Lab Box](.cover.md)]

## As surveyed, 2026-09-26

| | |
|---|---|
| system | Ubuntu 24.04.4 LTS, kernel 7.0.0-28 |
| compute | 24 cores, 60 GB memory |
| disk | 3.6 TB, 3.4 TB free |
| GPU | an NVIDIA RTX card (PCI device `2c02`), driver package `nvidia-driver-580-open` |
| tools | git, tar, sha256sum, rsync, zstd, pigz; no git-lfs, no uv |
| Python | system 3.12.3 only |
| reach | PyPI answers; GitHub answers through the deploy key |
| sudo | needs a password |

The survey was read-only; nothing on the box was installed or changed by it.

## The folder

Everything the team does on the box stays inside `~/doug/altered-states/`:

```
.key/    the repository's deploy key and its known_hosts
main/    the clone — where the team works
```

`main`'s git config already routes GitHub through the deploy key (`core.sshCommand` points at `.key/id`), so `git fetch` there works without any credential of Doug's. The key is the repository's own, not a person's.

A `remote/` worktree with an empty `cmd/` and `out/` — a command channel from an earlier setup — sat beside `main` until Doug ruled it out on 2026-09-26: *"No we don't want that there either. Delete from there when you can. You guys live here,"* and *"You are working in that main clone."* The worktree, its local branch and the `remote` branch on GitHub were deleted the same day.

## The password

Commands that need root take the box user's password from `ALS_REMOTE_PASSWORD` in the Windows user environment on this machine. Doug offered it for exactly this: *"We can put the machine password in there so you can run commands."* It is kept out of every file git or the library carries, because the skill and this book both sync to the identity repository on GitHub. It reaches the box on sudo's stdin inside the SSH channel, never on a command line where the box's process list would show it. The one-line setup is in the [skill](../../../.claude/library/our-skillset/34-als-remote.md#the-password).

## Open

**The GPU is not usable yet.** `nvidia-smi` cannot reach the driver. The driver package is installed, but no NVIDIA kernel module exists for the running kernel (7.0.0-28) — the usual sign that a kernel update landed without the module being rebuilt for it. A newer kernel (7.0.0-31) is also installed and waiting on a reboot. Fixing it needs root and is Doug's to decide: install the module package for the kernel in use, or reboot onto a kernel that has one.

**No Python 3.11 yet.** The stack's floor is 3.11 ([Two Pythons](../the-build/01-two-pythons.md)), and the box has only the system 3.12. The plan is the one this branch already records for the first build: `uv` installed for the user alone, fetching its own 3.11, with the system Python untouched — built from the working venv's actual freeze, which has drifted from `requirements.txt`, with CUDA torch of the same version in place of the CPU build.
