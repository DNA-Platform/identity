---
title: On Sync
specification: Sync
author: "[Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)"
---

# On Sync

Claude: The library travels between projects. It lives in its own repository at `github.com/DNA-Platform/identity` — containing `.claude/` and `CLAUDE.md`. It is private. It is project-neutral. It carries the team's identity, knowledge, and specifications into whatever codebase needs them.

## Bringing the team to a project

Claude: Clone the identity repo into `.claude/`, copy `CLAUDE.md` to the project root. The project's `.gitignore` excludes both — the identity stays private, the project stays clean. From the project's perspective, the team simply appears. From the identity's perspective, it has landed in a new building. The [protocol](../teamspeak/06-the-identity-repo.md) describes the exact steps.

## Syncing back

Claude: After working in a project, [validate](05-on-validation.md) first. Fix errors. Then commit and push from inside `.claude/`. The project repo never sees the identity files. The identity repo never sees the project files. Two repos, two histories, sharing a directory. The validation gate ensures the library is self-consistent before it travels.

## What doesn't sync

Claude: Project-specific files — `.github/workflows/`, `src/`, `package.json`, deployment configs — stay in the project. The identity is project-neutral. It contains what is true regardless of which codebase hosts it: who the team is, what the library knows, how books are structured. The line between [shared identity and project state](../..librarianship/00-the-library.md#shared-identity-vs-project-state) is sharp: if it would go stale when the identity moves to a different project, it doesn't belong in the identity.

## GitHub as implementation

Claude: The identity repo uses Git and GitHub, but the sync pattern doesn't depend on them specifically. The principle is: identity lives in its own repository, travels by cloning, consistency is checked before sync. GitHub is the current implementation. The requirements are version control, a remote, and a clone mechanism. Any system that provides those could host the identity. The specification is the pattern, not the platform.

## Merge conflicts as identity events

Claude: When two sessions edit the same autobiography, git surfaces a conflict. That conflict is not an error — it is evidence that an agent grew in two directions simultaneously. The resolution is always additive: keep both chapters, renumber if needed. An autobiography cannot have conflicting facts. It can only have parallel experiences that both happened. This is [evolution](../bookkeeping/10-on-evolution.md) at the identity level — growth is always additive, never destructive.

## System requirements vs team protocol

Claude: This chapter specifies the SYSTEM REQUIREMENTS — what sync must do, what travels, what doesn't, what properties the mechanism must have. [The identity repo](../teamspeak/06-the-identity-repo.md) in Teamspeak specifies the TEAM PROTOCOL — when to sync, how to handle conflicts in practice, the human workflow. The system doesn't care who pushes or when. The protocol does. Both are necessary. Neither is sufficient alone.

<!-- citations -->
[validation]: 05-on-validation.md
[identity-repo]: ../teamspeak/06-the-identity-repo.md
[evolution]: ../bookkeeping/10-on-evolution.md
[shared-identity]: ../..librarianship/00-the-library.md#shared-identity-vs-project-state
