# Claude Code Workflow Template

A reusable project template for **spec-driven development** with Claude Code. Start with a conversation, not a config file — the framework discovers what your project needs and assembles the right team.

## Quick Start

```bash
# 1. Copy this template to your new project
cp -r claude-workflow-template/ my-project/
cd my-project/

# 2. Start Claude Code and kick off your project
claude
> /intro
```

The `/intro` command starts a guided conversation with the **project director** — think of it as your first meeting with a senior leader. They'll:

1. Ask about what you're building, who it's for, and why
2. Recommend which agents should be on the team (a CLI tool doesn't need a UX designer)
3. Hand off to the architect for tech stack decisions
4. Search for and install relevant skills
5. Generate your project configuration

**You define requirements → Agents plan, build, test, and document → You review completed work.**

## How It Works

Not every project needs every agent. A web scraper needs an architect, a backend lead, and QA. A SaaS app needs the full team. The framework adapts.

During `/intro`, the project director scans the available agents in `.claude/agents/` and recommends a team based on your project's scope. You approve (or adjust), and from then on, only the active agents participate in the workflow.

Need to add an agent later? Run `/add-agent` — you can activate a dormant agent or define an entirely new one.

## Available Agents

| Agent | Role | Typical Projects |
|-------|------|-----------------|
| **Project Director** | Kickoff, scoping, team assembly | All (runs once) |
| **Project Manager** | Story management, orchestration | All (always active) |
| **Architect** | Tech stack, system design, APIs | All (always recommended) |
| **Marketing Director** | Brand voice, messaging, emotional design | Products with public identity |
| **UX Designer** | User journeys, wireframes, design system | Products with a UI |
| **Backend Lead** | APIs, databases, business logic, unit tests | Anything with server-side code |
| **Frontend Lead** | UI components, client state, component tests | Web/mobile apps |
| **Security Reviewer** | Vulnerability analysis, threat modeling | Auth, PII, payments, public apps |
| **QA Engineer** | Functional/integration tests, verification | All (always active) |
| **DevOps Engineer** | CI/CD, infrastructure as code, monitoring | Deployed services |
| **Technical Writer** | Documentation currency and clarity | Larger projects, libraries, APIs |

**Extensible**: Add new agents anytime by dropping a `.md` file in `.claude/agents/`.

## Commands

| Command | Description |
|---------|-------------|
| `/intro` | **Start here.** Guided project kickoff (with resume support) |
| `/check` | Health check — verify framework is correctly set up |
| `/new-phase` | Plan a new development phase (with pre-flight validation) |
| `/implement-phase` | Execute the current phase (with checkpoint/resume) |
| `/status` | Get status overview — leads with decisions needed |
| `/add-agent` | Activate or create an agent (shows discovery list if no arg) |
| `/setup-skills` | Install recommended skills |

## Project Structure

```
CLAUDE.md                    # Root config (lean — references docs)
docs/
  PROJECT.md                 # Project identity, active team, tech stack
  WORKFLOW.md                # Slim overview + links to sub-docs
  workflow/                  # Focused workflow sub-docs (load only what you need)
    AGENT-REGISTRY.md        # All agents, roles, how to add new ones
    PHASE-LIFECYCLE.md       # 5-step phase flow, checkpoint/resume, context rules
    STORY-FORMAT.md          # Story template, quality checklist, pruning rule
    ESCALATION.md            # What requires human input vs. agent resolution
  REQUIREMENTS.md            # Product requirements (source of truth)
  DECISIONS.md               # Architecture Decision Records (with example ADR)
  phases/                    # Phase plans and story tracking
    _template/               # Copy this for new phases
    _example/                # Completed example phase (reference for calibration)
  architecture/              # System design documents (each starts with TL;DR)
  ux/                        # Brand, design system, specs, journeys
  api/                       # API specifications (with example endpoint)
  runbooks/                  # Operational procedures
.claude/
  agents/                    # Agent definitions (extensible)
  commands/                  # Slash commands
  mcp.json                   # MCP server config (Context7 pre-configured)
```

## Design Principles

1. **Start with a conversation, not a config file.** `/intro` discovers what's needed.
2. **Right-size the team.** Only activate agents the project actually needs.
3. **Context is precious.** Files are small and focused. Agents load only what they need.
4. **Progressive disclosure.** Every doc starts with a summary. Relevance is clear from the first 10 lines.
5. **Extensible by default.** Add new agents, commands, or skills by dropping files in the right directory.
6. **Test everything.** No story is complete without passing tests.

## Customization

- **Add agents**: Drop a `.md` file in `.claude/agents/`, or run `/add-agent`
- **Change workflow**: Edit files in `docs/workflow/` (split by concern)
- **Add MCP servers**: Edit `.claude/mcp.json` (Context7 is pre-configured)
- **Add skills**: Run `/setup-skills` or `npx skills add <repo>`
- **Add commands**: Create `.md` files in `.claude/commands/`
