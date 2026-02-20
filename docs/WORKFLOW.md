# Workflow: Spec-Driven Development

> **TL;DR**: Requirements → Design → Implementation → Testing → Documentation → Review. Humans approve at three gates per phase. Agents resolve everything else.

## Getting Started

Run `/intro` to kick off a new project. The project director will understand scope, assemble the team, choose a tech stack, and install relevant skills. The active team is defined in `docs/PROJECT.md`.

## Contents

| Document | What's in it |
|----------|-------------|
| [`docs/workflow/AGENT-REGISTRY.md`](workflow/AGENT-REGISTRY.md) | All available agents, roles, and how to add new ones |
| [`docs/workflow/PHASE-LIFECYCLE.md`](workflow/PHASE-LIFECYCLE.md) | The 5-step phase flow, checkpoint/resume, context rules |
| [`docs/workflow/STORY-FORMAT.md`](workflow/STORY-FORMAT.md) | User story template, quality checklist, pruning rule |
| [`docs/workflow/ESCALATION.md`](workflow/ESCALATION.md) | What requires human input vs. agent resolution |

## Quick Reference

- **Phase plan approval** → human decision (see ESCALATION.md)
- **Story format** → Given/When/Then (see STORY-FORMAT.md)
- **Adding agents** → drop `.md` in `.claude/agents/` (see AGENT-REGISTRY.md)
- **Stuck?** → document in STATUS.md, PM aggregates for human
