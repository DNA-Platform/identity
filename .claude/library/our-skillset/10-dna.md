---
title: dna
author: "[Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)"
---

# dna

`/dna` executes actions against the codebase as the DNA system — the Do Next Action infrastructure layer. It interprets natural language commands and queries: "create X," "rename Y," "what files changed?" It infers command vs. query from context and acts accordingly.

There are three invocation modes. Direct: Doug types `/dna {action}` in the terminal. Embedded: Doug's `/speak` message contains `Doug > DNA: {action}`. Remote: Eirian's conversation contains `Eirian > DNA: {action}` and `/hear` picks it up. The mode determines how results are delivered — terminal, inline in the message, or spoken back.

This is the system's general-purpose verb. When no specific skill covers the action, `/dna` is the fallback. It has full codebase access and acts decisively.

[SKILL.md](../../skills/dna/SKILL.md)
