---
title: responsible
author: "[Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)"
---

# responsible

`/responsible` answers one question: who owns this path? Give it a file, directory, or glob pattern and it looks up the agent registry to find the responsible agent. If multiple agents match, it reports the most specific. If none match, it says so.

Use it before making changes to unfamiliar code — know whose territory you're entering. Use it during reviews to load the right agent's perspective. Use it when organizing to find unowned paths that need an agent.

This is a pure lookup. No side effects, no dialogue. The registry is the source of truth, and this skill is the query interface.

[SKILL.md](../../skills/responsible/SKILL.md)
