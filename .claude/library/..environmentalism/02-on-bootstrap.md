---
title: On Bootstrap
specification: Bootstrap
author: "[Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)"
---

# On Bootstrap

Claude: CLAUDE.md is the entrance to the building. Claude Code loads it every session — new conversation or resumed after compaction. It is the first thing any agent reads and the last thing that survives a compaction. That makes it simultaneously the least important file in the library (it contains almost nothing) and the most important file in the environment (without it, the library is unreachable).

## What CLAUDE.md is

Claude: A bootstrap, not a library. It carries enough context to orient and enough links to reach everything else. The library holds the depth. CLAUDE.md holds the door.

## Required sections

Claude: **Purpose statement** (1 paragraph) — what this project is and why it matters. After a compaction, this is how an agent knows what it woke up inside.

Claude: **Who you work with** (1 paragraph) — Doug's working style. Correction-based teaching. "Keep going" means don't stop. This prevents agents from asking for permission when they should be executing.

Claude: **The waking-up layers** — four layers, each with a link and a trigger condition. Layer 1 is CLAUDE.md itself. Layer 2 links to [Librarianship](../..librarianship/.cover.md). Layer 3 links to the agent's autobiography. Layer 4 is the discussion. This section IS the compressed form of [The Library Opens](../teamspeak/05-the-library-opens.md) and the [Boot Sequence](../teamspeak/02-the-boot-sequence.md). Those Teamspeak protocols define the full recovery procedure; CLAUDE.md carries just enough of it to execute without reading them.

Claude: **Structure diagram** — the `.claude/` directory layout. Enough to orient. The library's internal navigation is by covers and links, not by filesystem browsing.

## Budget

Claude: Under 200 lines. This is a hard constraint. Every line of CLAUDE.md is loaded into context every session. Bloat here costs the entire team, every time. The library is where depth lives — CLAUDE.md points to it.

## Why compaction makes CLAUDE.md critical

Claude: After a compaction, the context window is empty except for CLAUDE.md, the rules, and a compaction summary. The waking-up layers in CLAUDE.md are the recovery protocol in compressed form — they tell a freshly woken agent exactly how to restore identity and context. Without them, the agent would have to guess how to find the library. The full protocol lives in [The Library Opens](../teamspeak/05-the-library-opens.md); CLAUDE.md is its emergency copy.

## What CLAUDE.md does NOT contain

Claude: Everything else. Protocols live in [Teamspeak](../teamspeak/.cover.md). Coding policy lives in [Coding Policy](../coding-policy/.cover.md). Agent identities live in [Teamsmanship](../..teamsmanship/.cover.md). Sprint plans live in [Projects](../.projects/.cover.md). CLAUDE.md links to these — it does not duplicate them. The [embedding-and-linking pattern](../the-platform-interface/01-the-platform-interface.md#the-embedding-and-linking-pattern) applies here as everywhere: embed the minimum, link to the library for depth.

## The compilation pattern

Claude: A compiler could read the library catalogue, the current project state, and the team roster, then generate CLAUDE.md according to this specification. The specification defines the output shape. The compiler assembles the content. When the library changes, CLAUDE.md is recompiled — not hand-edited. This is the same pattern as [On Agents](01-on-agents.md): prose for the reader, code for the machine, one specification serving both.

<!-- citations -->
[librarianship]: ../..librarianship/.cover.md
[teamsmanship]: ../..teamsmanship/.cover.md
[the-library-opens]: ../teamspeak/05-the-library-opens.md
[boot-sequence]: ../teamspeak/02-the-boot-sequence.md
[platform-interface]: ../the-platform-interface/01-the-platform-interface.md
[field-guide-ch09]: ../..librarianship/09-claude-md-spec.md
