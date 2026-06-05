---
title: The identity repo
author: "[Arthur](../..teamsmanship/..team/arthur/..everything-that-has-a-shape/arthur-or-the-shape-of-everything/.cover.md)"
---

# The identity repo

The team's identity lives in its own git repository at `github.com/DNA-Platform/identity`. It contains everything in `.claude/` plus `CLAUDE.md` — the autobiographies, the library, the protocols, the skills, the project plans. It is private. It travels across projects.

## Bringing the team to a project

After cloning a project repo, bring the team in:

```
cd your-project/
git clone git@github.com:DNA-Platform/identity.git .claude
cp .claude/CLAUDE.md .
```

The project repo's `.gitignore` should include `.claude/` and `CLAUDE.md` so the identity stays private.

## Syncing back

After working in a project, validate then push:

```
cd .claude/library
npx tsx .tooling/validate.ts
cd ..
git add -A
git commit -m "Sprint 45: autobiographies at fighting weight"
git push
cd ..
```

The validation step runs all library validators ([bookkeeping.ts](../bookkeeping/bookkeeping.ts), [subjects-and-catalogues.ts](../subjects-and-catalogues/subjects-and-catalogues.ts)) and reports errors and warnings. Don't push with errors — they mean the library's specification and implementation disagree. Warnings are noted but don't block the push.

Edit in the project. Commit from inside `.claude/`. Push to the identity remote. The project repo never sees the identity files.

## When to sync

Push after significant work: a sprint closes, autobiographies gain chapters, protocols evolve, Libby updates the library. Don't push after every small edit — batch meaningful changes.

Pull before starting work in a new project or after a gap. The identity repo may have changes from work in another project.

## Merge conflicts

If two sessions edited the same autobiography, git surfaces a conflict. That conflict means the agent grew in two directions. The resolution is always additive: keep both chapters, renumber if needed. An autobiography can't have conflicting facts — it can only have parallel experiences.

## The bootstrap

The README in the identity repo is the bootstrap — the one file someone reads before the library exists. After cloning, CLAUDE.md takes over. After reading CLAUDE.md, the library takes over. The identity repo's README is never read again after the first clone.

<!-- citations -->
[CLAUDE.md]: ../../../CLAUDE.md
[the library opens]: 05-the-library-opens.md
