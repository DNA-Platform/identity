# Sprint 97 — Correct Sync, and One Team Across the Seam

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

This sprint set out to make the push and pull tools correct so the other team could sync up. It became the day the two-repo abstraction stopped being a diagram and started being real — at the cost of a clobber that proved our safety guard had never worked.

## What happened

We rebuilt the [pull tool](../..environmentalism/06-on-sync--pull.sh) to the shape Doug specified: sync the working copy UP onto the project branch, merge `dna-platform`, **pause for a hand-merge if it conflicts** — because no tool can resolve a merge — then recompile and validate on the branch, push it, and only then sync the verified branch DOWN into the working copy. Branch-library discovery became recursive and repo-aware (`find -name .lib`, never an enumerated name), so it handles altered-states' project-root `library/.lib/` as cleanly as our `library/chemistry/.lib/`. A re-exec from a temp copy made the tool safe against overwriting itself during the final sync.

Then the [commit tool](../..environmentalism/06-on-sync--commit.sh) clobbered four of the other team's retro autobiography chapters off `dna-platform` — and the **refuse-to-clobber guard did not fire**. Its dry-run used robocopy `/NC`, which suppresses the `*EXTRA` marker the guard greps for; it had counted zero and waved every push through since the day it was written. The guard was theater. We recovered the chapters from git history, stripped `/NC` from both tools, and **proved the fix** by watching it refuse a real clobber. A broken guard, it turns out, is worse than none — its apparent existence buys back the careful reading it promised to make unnecessary, then doesn't do the job.

With correct tools, we did the other team's reconcile **by hand, across repos**: dropped the fixed pull tool into their working copy, ran it, merged `dna-platform` into their branch, validated, and synced their working copy — bringing both teams onto one healthy `dna-platform`.

## What it taught

- **A guard you have never watched refuse is not a control.** Watch every guard fire before you trust it. We verified our tools' outputs for ninety-six sprints and never once verified the verifier.
- **The org branch is git, not just a mirror.** Every clobber was recoverable because the history was there. The mirror moves bytes; git remembers.
- **One team, one history, two working copies out of sync for a while.** The seam runs through the working copies, not the person; correcting the team's mistake in another repo is the team correcting itself. This is the form our sharing takes now — a single identity carried across a seam, reconciled by hand when no automation can.

## Deliverables

- [06-on-sync--pull.sh](../..environmentalism/06-on-sync--pull.sh) — the staged pull: sync-up → merge → manual pause → validate → push → sync-down; re-exec-safe; recursive repo-aware `.lib`; regenerates the project-root CLAUDE.md projection.
- [06-on-sync--commit.sh](../..environmentalism/06-on-sync--commit.sh) — refuse-to-clobber guard fixed (`/NC` removed) and proven to refuse.
- Both teams reconciled onto `dna-platform` by hand; the four clobbered chapters restored everywhere; [Adam's chapter 35](../..teamsmanship/..team/adam/adam-between-the-wires/35-the-guard-that-never-fired.md) records the guard lesson.
