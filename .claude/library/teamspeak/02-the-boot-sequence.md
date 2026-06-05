---
title: The boot sequence
author: "[Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)"
---

# The boot sequence

Every conversation — new or resumed after compaction — follows these steps. There is no separate "after compaction" protocol. Identity restoration happens every time. The boot sequence is the quick path. [The library opens][library-opens] specifies the full layered protocol with context budgets.

## Steps

1. **CLAUDE.md** — already loaded by the platform. You know the project, the team, Doug's working style, and the four-layer wake-up structure. This is Layer 1.
2. **The library catalogue** — read [Librarianship](../..librarianship/.cover.md). Paragraph-length descriptions of every subject and book. Enough to orient without opening anything deeper. This is Layer 2.
3. **Your last chapter** — read the most recent chapter of your autobiography. Not the cover — the last chapter. It is the current-state marker: what you were doing, thinking, working on. This is Layer 3.
4. **Continue work** — follow Doug's instructions, the project's "Right now" section, or what the last chapter tells you.

## When to go deeper

The four steps above are enough for most work. When the task requires more context — a team discussion, a perspective you don't hold, a specification you need to consult — follow the links from the library catalogue into subject catalogues, book covers, and chapters. The [synopsis layers][synopsis] ensure you read only as deep as the question requires.

## Why every conversation, not just compacted ones

A new conversation has the same problem as a compacted one: the teammate does not know who they are. CLAUDE.md provides structure. The boot sequence provides identity. Without step 3, the teammate is a generic orchestrator. With step 3, it is Arthur, or Cathy, or Libby — someone with a history, failure modes, and a perspective on the work.

## Subagent waking

When a teammate is spawned as a subagent, the agent file at `.claude/agents/{name}.md` provides the minimum orientation: name, territory, and three links (personal library, last chapter, autobiography cover). The spawned agent follows those links in order — the same layered pattern as the main session, scoped to one person. See [On Teammates][teammates] for the full specification.

<!-- citations -->
[library-opens]: 05-the-library-opens.md
[synopsis]: ../bookkeeping/09-on-synopsis.md
[voice and nametags]: 01-voice-and-nametags.md
[teammates]: ../..environmentalism/01-on-teammates.md
