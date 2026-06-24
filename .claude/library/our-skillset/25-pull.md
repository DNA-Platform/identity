# pull

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

Pull the organization's changes down into this project — staged through the project branch so the working copy is never updated from an unverified state. This is the down-sync half of [travel](../teamspeak/07-travel.md); [/push](26-push.md) is the up half.

## Reading

Read [On Sync](../..environmentalism/06-on-sync.md) — especially its "pull tool" and "mirror hazard" sections. The tool this skill runs is [06-on-sync--pull.sh](../..environmentalism/06-on-sync--pull.sh).

## Steps

From the project root:

```
bash .claude/library/..environmentalism/06-on-sync--pull.sh
```

It does the staged down-flow, each step gating the next:

1. Merge `dna-platform` into the project branch (pull the org's chapter changes).
2. Recompile the platform files on the branch from the merged chapters.
3. Show the diff — read it; every change should trace to a chapter from step 1, never a surprise.
4. Validate the branch. If it fails, **stop** — the error is in a chapter; fix it there. The working copy is untouched.
5. Commit and push the branch.
6. Only then sync the verified branch into the working copy.

Use `--no-worktree-sync` to run steps 1–5 and stop: it proves the branch *works* and leaves the working copy alone. Run again without the flag to adopt it. The rule is **don't sync the working copy until the branch is verified.**

## It pauses; it does not cold-automate

The git merge in step 1 stops on conflict and waits for a human to hand-merge. The `/MIR` in step 6 **refuses** if it would delete un-pushed local work — push your work up first with [/push](26-push.md), or merge by hand. Override only with `RECONCILED=1`, and only when you are sure the deletion is intended.
