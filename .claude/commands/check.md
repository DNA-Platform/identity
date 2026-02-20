---
name: check
description: Quick health check of the framework setup. Verifies agents, MCP configuration, and project docs are in place. Runs in seconds.
---

Run a quick health check of the framework. Check each item and output a pass/fail line for each:

```
✓  .claude/agents/        — N agents available
✓  docs/PROJECT.md        — project configured (team: N active agents)
✓  .claude/mcp.json       — Context7 configured
✗  docs/phases/           — no phases found (run /new-phase to start)
```

**Checks to run** (in order):

1. **Agents**: Count `.md` files in `.claude/agents/`. Pass if ≥ 1. Show count.
2. **PROJECT.md**: Check if `docs/PROJECT.md` exists and is non-empty (not just the template). Pass if it contains actual project name/team. Show active agent count if configured.
3. **MCP**: Check if `.claude/mcp.json` exists and contains at least one server entry. Pass if yes. Show server names.
4. **REQUIREMENTS.md**: Check if `docs/REQUIREMENTS.md` is non-empty. Pass if it contains requirements beyond the template placeholder.
5. **Phases**: Check `docs/phases/` for any directories other than `_template` and `_example`. If none: show fail with hint. If some: show count and current phase status.
6. **Skills**: Check if any skills are installed (look for `.claude/skills/` or run `npx skills list -a claude-code` if available). Show installed count or "none installed — run /setup-skills".

**Summary line** at the end:
- All pass: "Framework ready. Run /new-phase to start planning."
- Some fail: "N issues found. Fix the items marked ✗ above."

Keep output under 15 lines total.
