---
title: What CLAUDE.md must contain
author: "[Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# What CLAUDE.md must contain

CLAUDE.md lives at the project root. Claude Code loads it every session. It's the bootstrap — the first thing an agent reads. The library specifies what it should contain; the file at the project root implements the spec.

Claude Code recommends under 200 lines. CLAUDE.md is guidance, not enforcement (settings.json and rules handle enforcement). Keep it tight.

## Required sections

### 1. Purpose statement (1 paragraph)

What this project is and why it matters. One paragraph. This is the single most important context for any agent — after a compaction, this is how they know what they're working on.

### 2. Who you work with (1 paragraph)

Doug's working style. Correction-based teaching. "Keep going" means don't stop. Questions are often instructions. This paragraph prevents agents from asking for permission when they should be executing.

### 3. The library opens (the waking-up layers)

Four layers, each with a link and a trigger:

1. **The building** — you're reading CLAUDE.md. You know the project and Doug.
2. **The front desk** — link to `..librarianship/.cover.md`. Read when you need to know what the library contains.
3. **Your shelf** — link to each agent's library catalogue. Read your last autobiography chapter for current state.
4. **The room** — the team discusses. Read when the work needs multiple perspectives.

### 4. Structure diagram

Show `.claude/` layout — platform directories and `library/`. Just enough to orient. The library's internal structure is navigated by reading covers, not by reading this diagram.

### 5. What CLAUDE.md does NOT contain

Everything else lives in the library. Protocols, coding policy, sprint plans, agent identities, team conventions — all accessible by following links from the library catalogue. CLAUDE.md is the door. The library is the building.

## Maintenance

When this spec changes, update CLAUDE.md to match. When CLAUDE.md drifts from this spec, this chapter is the authority. The library specifies; the file implements.

<!-- citations -->
[librarianship]: ../.cover.md
