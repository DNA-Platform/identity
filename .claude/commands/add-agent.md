---
name: add-agent
description: Activate an existing agent or create a new one for this project. Updates the team roster in PROJECT.md.
---

Modify the project's agent team. Follow these steps:

1. Read `docs/PROJECT.md` to see the current active team and inactive agents.
2. Scan `.claude/agents/` to see all available agent definitions.

**If $ARGUMENTS is empty** — show a discovery list so the human can choose:

List all agents from `.claude/agents/` that are not currently active. For each, show:
- Agent name
- One-line description (from their `description:` frontmatter field)
- Typical projects they're useful for

Format as a simple table, then ask: "Which agent(s) would you like to activate, or would you like to create a new role?"

**If $ARGUMENTS names an existing agent** (one that's in `.claude/agents/` but listed as inactive):
- Move it from the Inactive to Active table in `docs/PROJECT.md`
- Briefly explain what this agent will contribute

**If $ARGUMENTS describes a new role** that doesn't match any existing agent:
- Ask the human what this agent should do, what tools it needs, and what model to use
- Create a new agent definition in `.claude/agents/` following the format in `docs/workflow/AGENT-REGISTRY.md`
- Add it to the Active table in `docs/PROJECT.md`
- Confirm the addition to the human
