# Agent Registry

> Maintained by the Project Director. The active team for this project is defined in `docs/PROJECT.md`.

## Core Agents (always available)

| Agent | File | Role |
|-------|------|------|
| Project Director | `project-director.md` | Kickoff, scoping, team assembly |
| Project Manager | `project-manager.md` | Story management, orchestration, coordination |
| Architect | `architect.md` | Tech stack, system design, API/schema design |
| QA Engineer | `qa-engineer.md` | Functional tests, integration tests, verification |

## Specialist Agents (activated based on project needs)

| Agent | File | When to Include |
|-------|------|----------------|
| Marketing Director | `marketing-director.md` | Product has brand identity, public-facing messaging |
| UX Designer | `ux-designer.md` | Product has a user interface |
| Backend Lead | `backend-lead.md` | Product has server-side code, APIs, databases |
| Frontend Lead | `frontend-lead.md` | Product has a web or app UI |
| Security Reviewer | `security-reviewer.md` | Product handles auth, PII, payments, or is public-facing |
| DevOps Engineer | `devops-engineer.md` | Product needs deployment infrastructure, CI/CD |
| Technical Writer | `technical-writer.md` | Product needs maintained documentation |

## Adding New Agents

Create a new `.md` file in `.claude/agents/` following this structure:

```yaml
---
name: agent-name
description: >
  When to use this agent. Be specific — this helps Claude Code
  decide when to invoke it automatically.
model: sonnet  # or opus, haiku
tools: Read, Write, Edit, Bash, Glob, Grep
---

You are the **[Role Name]**. [What you do and how you work.]

## Core Responsibilities
...

## Collaboration Protocol
...

## Key Files
...
```

The project director will automatically discover new agents when running `/intro` by scanning the agents directory.
