# Parity

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [David](../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Book: [The Lab Box](.cover.md)]

## The rulings

Doug, 2026-09-26, in order:

- *"I just want us getting this repo setup over there with you driving over SSH and using the FTP server or whatever to get the files not in git either from here or because we can run pip/npm install."* — and, on a proposal to route data through Git LFS against a budget: *"Don't listen about budgets."*
- *"That is your first task to get us to parity. There should be nothing to commit over there."*
- *"Oh, don't move anything that goes to identity."* / *"CLAUDE.md and /.claude do not need to be transported."*
- On the branch library, which the project repo was tracking: *"Well git shouldn't track it so look at ../inexplicable-phenomena gitignore to learn how to ignore it and remove it from git. That should be synced on identity."*
- *"We don't need anything but main though in terms of branches in this repo. We will make them when we dispatch jobs."*

So the box's `main` is a mirror. Parity means the same HEAD, the same index and the same working tree as the working copy here — uncommitted work included — reached without a commit on the box and without pushing to GitHub first.

## The branch library leaves the project's git

`library/.lib/` had been tracked by the project repository, re-included by three lines in its `.gitignore` under the reasoning that *the branch library is the reasoning record and belongs on the object of record*. The object of record for a branch library is the identity repository: the [commit tool](../../../.claude/library/..environmentalism/06-on-sync--commit.sh) mirrors `library/.lib` to identity's `altered-states` branch at `.lib/altered-states`. Before untracking, the two copies were compared by tree hash — the project's HEAD, identity's local branch and identity's GitHub branch all held the same tree, `12af65c` — so removing the project's copy lost nothing. The three lines went, leaving `**/.lib/` to ignore it as `inexplicable-phenomena` does, and commit `a011ad2` untracked the 65 files while leaving them on disk. On the box, fast-forwarding past that commit removed them.

## How parity is made

This was the first parity only. It was made to carry uncommitted work without a commit; under [the run protocol](04-the-run.md) everything is committed here first and the box pulls, so the method is retired.

**HEAD.** The box's clone stood at `a4d50c1` (GitHub's `main`); this working copy was 21 commits ahead. A git bundle of exactly those commits (116 MB) crossed by `scp` and was fast-forwarded in. Nothing was pushed to GitHub, so the box reports `ahead 21` of `origin/main`, the same line as here.

**The index and the working tree.** Copying files would have been wrong: this Windows checkout runs with `core.autocrlf=true`, and 1,980 tracked text files sit in the working tree with CRLF line endings. Copied across, every one would read as modified on the box and every shell script would fail on the carriage return. Instead git builds two patches here — the index against HEAD, and the whole working tree (tracked changes, deletions, untracked files, through a temporary index) against HEAD — so every file crosses in the normalized form a commit would record. The first pair was 0.2 MB and 183 MB, the latter mostly two untracked 53 MB homeostasis traces.

**The proof.** Three hashes on each end: HEAD, the tree of the index, and the tree of the working tree as `git add -A` sees it. On 2026-09-26 both ends read `a011ad2` / `fe25718` / `65c5f18`.

## The files git does not carry

What `.gitignore` excludes — the scans in `library/data`, the pipeline and analysis caches, logs — crosses by the skill's `send`: one tar stream per path, the sha256 of every file taken here and checked on the box before the path is recorded as sent. A path that already verifies is skipped, so a stopped run resumes. The first full list was 117 paths, the scans first; `.vscode/` stays behind, being this machine's editor settings.

What never travels: `.claude/`, `CLAUDE.md` and every `.lib/` (identity carries them), `.venv/` (rebuilt on the box, see [The box](02-the-box.md#open)), bytecode.
