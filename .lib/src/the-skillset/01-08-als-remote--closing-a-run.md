# Closing a run

- **author:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Part: [als-remote](01-als-remote.md)]

## The ruling

Doug, 2026-09-28:

> *"Good, but you are going to make sure to move the remote back to main, merge from the branch to main over here, pull things over the wire if it doesn't fit into Github? Make sure not to lose track and document your process for this in /als-remote"*

## Why it is its own protocol

[The run](01-03-als-remote--the-run.md) used to end at `harvest`. Everything after that depended on
someone remembering it:
- `main` here reached GitHub only at the next `/push`;
- the box's `main` came back in step only at the next `launch`;
- a file GitHub refused came home only if someone read `not-committed.tsv`.

Nothing recorded that a run was finished with. When `status` first learned to ask, three runs from
the first GPU night, 2026-09-26, had never come home.

A run is not done when it exits. It is done when it is **closed**.

## The protocol

`close <branch>`, once `watch` says the run has pushed. Every step checks before it acts and verifies
after, so `close` can be rerun until it prints `CLOSED`. Nothing is overwritten on trust.

1. **Finished and on GitHub.** The run's branch is fetched, and its `meta.txt` must record an exit. A
   run still going, or one whose push failed, is refused and named.
2. **Merged into `main` here.** This is [`harvest`](01-03-als-remote--the-run.md): fast-forward when
   `main` has not moved, rebased onto it when it has. A conflict changes nothing. A run whose
   `runs/<branch>/` record is already in `main` is not harvested twice.
3. **`main` here on GitHub.** It is pushed when it is ahead. Uncommitted work here stops the close,
   because it is the owner's until they commit it.
4. **What GitHub could not take, over the wire, to both mains.** Every file the run's
   `not-committed.tsv` lists (over 95 MB) is handled twice:
   - it is received here from the run's worktree, checked against the sha256 the run recorded, and put
     at its path;
   - on the box it is copied from the worktree into the box's `main` at the same path, and checked the
     same way.

   Each is kept out of git by that clone's local `info/exclude`, so neither `main` is dirty. The run's
   tracked `not-committed.tsv` is the proof of the bytes, and both machines hold the same files
   ([parity](01-04-als-remote--the-files-git-does-not-carry.md)).
5. **The box back on `main`.** The box's `main` is pulled (`pull`) and proven to equal `main` here and
   on GitHub. After a close, both machines are on one commit.

## Not losing track

`status` lists every run on the box with its state, its exit code, and whether it is **home**:
- its `runs/<branch>/` record is in `main` here, and
- every file GitHub refused is here at its recorded size.

It ends by saying whether the box's `main` is `main` here. A run that is not home says `close it`.
Check `status` at the start of a session and after every `watch`, and close whatever is not home.

## A run whose products were superseded

A run whose products were replaced before they came home comes home as its **record** only:
`runs/<branch>/`, meaning its command, log, environment and probes. It is checked out from its branch
and committed, and then `close` finishes it. Its products stay on its branch on GitHub, because
brought into `main` they would be orphans.

`run-20260926-2350-gpu-twins` came home this way on 2026-09-28. Its four seeds of the unscaled 2x twins
had been deleted from artifacts on 2026-09-27.

## What close does not do

It does not remove the run's worktree on the box. Each is about 1.5 GB, 47 GB for the 44 runs of the
first three days, on a disk with 3.3 TB free. Whether a closed run's worktree goes is Doug's call.
