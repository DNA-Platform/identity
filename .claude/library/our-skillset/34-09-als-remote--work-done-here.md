# Work done here

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Part: [als-remote](34-als-remote.md)]

## The ruling

Doug, 2026-09-28, while the MEI figures were being redrawn on his machine:

> *"You should probably be able to run it here. Remember to have parity. /als-remote should have protocols on getting everything onto main and merging and file transfer if needed"*

## The protocol

Not everything is a run. Some work needs no GPU and runs here, on Doug's machine, directly on `main`:
redrawing a pipeline's figures from its harvested products (`python -m pipelines.mei 33328 --phase
figures`, under a minute), a check that reads what is already computed, an edit to a cover. That work
never passes through a run branch, so [closing a run](34-08-als-remote--closing-a-run.md) never brings it
to the box. Without a step of its own, the box's `main` falls behind until the next `launch` pulls it.

**`sync`, whenever work done here stops.** It checks before it acts, and it can be rerun:

1. **Committed.** `sync` refuses while anything is uncommitted: the commit is the record.
2. **Onto `main`.** `main` here must contain GitHub's `main`. If it does not, a run's branch was merged
   somewhere else, and the fix is to close that run here, never to merge sideways.
3. **Pushed.** `main` here goes to GitHub when it is ahead.
4. **The box on it.** The box's `main` is pulled, and proven equal to `main` here and on GitHub - the same
   `pull` that ends a [run](34-03-als-remote--the-run.md) and a close.

**What git does not carry moves by hand, and is checked.** A file made here that the box needs, and that
`.gitignore` excludes, goes out by `send`; one made there comes back by `receive` or by `close`. Both
are checked by sha256 ([The files git does not carry](34-04-als-remote--the-files-git-does-not-carry.md)).
A figure, a check or a cover is tracked, so git carries it and `sync` is enough.

**A result drawn here is the result drawn there.** It was measured on 2026-09-28: a comparison page drawn
on this machine and the same page drawn on the box differ in 0 of 2.45 million pixels, with the same
matplotlib (3.11.0) and numpy (2.4.6). Only the PNG encoding bytes differ. So work that runs here is not a
second, local version of the pipeline, and `status` still ends by saying whether the box's `main` is
`main` here.
