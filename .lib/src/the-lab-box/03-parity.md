# Parity

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [David](../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Book: [The Lab Box](.cover.md)]

## The rulings

The first task Doug set, 2026-09-26: *"That is your first task to get us to parity. There should be nothing to commit over there."* And on the branch library, which the project repo was tracking: *"Well git shouldn't track it so look at ../inexplicable-phenomena gitignore to learn how to ignore it and remove it from git. That should be synced on identity."* The standing rulings behind it — identity never travels, `main` the only branch until a run — are now protocol: [The folder](../../../.claude/library/our-skillset/34-02-als-remote--the-folder.md).

Parity meant the same HEAD, the same index and the same working tree as the working copy here — uncommitted work included — reached without a commit on the box and without pushing to GitHub first.

## The branch library leaves the project's git

`library/.lib/` had been tracked by the project repository, re-included by three lines in its `.gitignore` under the reasoning that *the branch library is the reasoning record and belongs on the object of record*. The object of record for a branch library is the identity repository: the [commit tool](../../../.claude/library/..environmentalism/06-on-sync--commit.sh) mirrors `library/.lib` to identity's `altered-states` branch at `.lib/altered-states`. Before untracking, the two copies were compared by tree hash — the project's HEAD, identity's local branch and identity's GitHub branch all held the same tree, `12af65c` — so removing the project's copy lost nothing. The three lines went, leaving `**/.lib/` to ignore it as `inexplicable-phenomena` does, and commit `a011ad2` untracked the 65 files while leaving them on disk. On the box, fast-forwarding past that commit removed them.

## How parity is made

This was the first parity only. It was made to carry uncommitted work without a commit; under [the run protocol](../../../.claude/library/our-skillset/34-03-als-remote--the-run.md) everything is committed here first and the box pulls, so the method is retired.

**HEAD.** The box's clone stood at `a4d50c1` (GitHub's `main`); this working copy was 21 commits ahead. A git bundle of exactly those commits (116 MB) crossed by `scp` and was fast-forwarded in. Nothing was pushed to GitHub, so the box reports `ahead 21` of `origin/main`, the same line as here.

**The index and the working tree.** Copying files would have been wrong: this Windows checkout runs with `core.autocrlf=true`, and 1,980 tracked text files sit in the working tree with CRLF line endings. Copied across, every one would read as modified on the box and every shell script would fail on the carriage return. Instead git builds two patches here — the index against HEAD, and the whole working tree (tracked changes, deletions, untracked files, through a temporary index) against HEAD — so every file crosses in the normalized form a commit would record. The first pair was 0.2 MB and 183 MB, the latter mostly two untracked 53 MB homeostasis traces.

**The proof.** Three hashes on each end: HEAD, the tree of the index, and the tree of the working tree as `git add -A` sees it. On 2026-09-26 both ends read `a011ad2` / `fe25718` / `65c5f18`.

## The files git does not carry

The first send, under what became the protocol [The files git does not carry](../../../.claude/library/our-skillset/34-04-als-remote--the-files-git-does-not-carry.md): 117 paths, about 10 GB, the scans first, each verified on the box by sha256 before it was recorded.
