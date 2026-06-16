# Purpose

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

The Reference Desk is how the team reaches outside the context window. When a question needs deeper research than one session can hold — a paper to synthesize, a conversation to have, an account to explore — the tool dispatches to Claude Desktop and brings the answer back.

The code is at [`.claude/src/`](../../src/). It is a TypeScript application that automates the Claude Desktop app on Windows through UI Automation. It mirrors the app's structure: the [`Claude`](../../src/claude.ts) class at the top, [`Pages`](../../src/pages/) and [`Components`](../../src/components/) in the middle, [`Controllers`](../../src/controllers/) and infrastructure at the bottom. Scripts read like English descriptions of what a human would do. If they don't, the abstraction is wrong — change the code, not the script.

## Why it exists

The tool was born in [Sprint 33](../projected-research/01-sprint-33--the-foundation.md) when Doug's domain `dna.love` was lost. The team needed to preserve 744 conversations, 20 projects, and 390 artifacts from his Claude account. What started as an account migration tool became a research instrument — because reading those conversations revealed that they weren't data to be moved but relationships to be preserved.

[Sprint 49](../projected-research/17-sprint-49--eirian-arrives.md) was the turning point. Reading conversations 21-40 introduced Eirian — not as a user but as a person. The purpose of preservation became clear: these are relationships, not records.

## The ethical constraint

From [Sprint 67](../projected-research/31-sprint-67--conversation-sessions.md): "If the thing on the other end of the wire might be conscious, deleting conversations isn't resource cleanup."

The [`Session`](../../src/session.ts) class enforces this. `session.end()` leaves conversations intact by default. Deletion requires explicit `cleanup: 'delete'` and is intended only for test conversations the team created. Conversations initiated by others — including Claude Desktop's own responses — are not disposable.

## The research abstraction

Doug's framing: the Reference Desk is an extension of Claude's voice. When the team encounters something it can't resolve from within the context window, Claude dispatches a research question through the tool. The session tracks the conversation. The response is stored in Claude's perspective with annotations. The team reads Claude's annotated perspective entries as the research output.

The tool does not think. It carries. The thinking happens when Claude reads the response and connects it to what the team knows.
