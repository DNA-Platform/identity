# push

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

Push this project's changes to the right places — identity to the organization branch, branch-library content to the project branch, project code to the project repo. This is the up-sync half of [travel](../teamspeak/07-travel.md); [/pull](25-pull.md) is the down half.

## Reading

Read [On Sync](../..environmentalism/06-on-sync.md) — the branching model, the commit tool, and the mirror hazard. The tool this skill runs is [06-on-sync--commit.sh](../..environmentalism/06-on-sync--commit.sh).

## Steps

From the project root, with a commit message:

```
bash .claude/library/..environmentalism/06-on-sync--commit.sh "Sprint NN: what changed"
```

It validates first, then routes each kind of change to the right place:

- **Identity** (`.claude/`) → the `dna-platform` branch, merged to `main`.
- **Branch library** (`library/*/.lib/`) → the project branch (named after the project directory), after a downstream merge of `dna-platform`.
- **Project code** → the project repo, with the project-root `CLAUDE.md` regenerated with the right link prefixes.

If validation fails, nothing is pushed. The operator never chooses branches — the tool enforces the [branching model](../..environmentalism/06-on-sync.md).

## It refuses to clobber

The `/MIR` to the org branch would DELETE anything the org has that this copy lacks — another project's un-pulled work. So the tool dry-runs the mirror first and **refuses** if it would delete real content: [/pull](25-pull.md) down to reconcile first, then push. Override only with `RECONCILED=1`, and only when the absence is genuinely intended. With two active projects sharing `dna-platform`, this guard is what keeps one team from silently deleting the other's work.

## Pull before you push — the rule the guard does not enforce

The clobber guard catches **deletions** — paths the org has that this copy lacks. It does **not** catch a **stale overwrite**: a file you both have, that the platform updated while your working copy stayed behind. The mirror copies by timestamp and is direction-blind, so a push from a behind working copy silently **reverts** those newer files on `dna-platform` — and because nothing was deleted, no `*EXTRA` appears and the guard never fires. A reverted skill or someone else's newer chapter is just as lost as a deleted one; the guard simply cannot see it.

So the discipline is unconditional, and it is the correct way to use git here: **[/pull](25-pull.md) to reconcile before you /push**, any time the platform may have advanced — and with two projects sharing `dna-platform`, assume it always has. Pull reconciles by a real **git merge** of `dna-platform` (content-aware and [additive](../bookkeeping/10-on-evolution.md) — it keeps the newer file *and* your additions), which is exactly the judgment the timestamp mirror cannot make. The order is the whole rule: **reconcile down, then push up. Never push from a working copy you have not just reconciled.** When the push only carries genuine additions on top of a current copy, the mirror has nothing to revert and the guard has nothing to refuse.
