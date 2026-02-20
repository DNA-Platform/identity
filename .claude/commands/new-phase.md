---
name: new-phase
description: Start planning a new development phase. Creates the phase directory structure and initiates the PM agent to break down requirements into stories. Only involves agents that are active for this project.
---

Start a new development phase. Follow these steps:

## Pre-Flight Validation

Before doing anything else, verify:
1. `docs/PROJECT.md` exists and lists at least one active agent — if missing, stop and output: "Run `/intro` first to configure your project."
2. `docs/REQUIREMENTS.md` is non-empty (contains actual requirements, not just the template) — if empty, stop and output: "Add requirements to `docs/REQUIREMENTS.md` before planning a phase."

If all checks pass, continue.

## Planning

1. Read `docs/PROJECT.md` to understand the project scope and **active team roster**.
2. Read `docs/REQUIREMENTS.md` to understand the full product scope.
3. Read `docs/workflow/PHASE-LIFECYCLE.md` to understand the phase lifecycle.
4. Check `docs/phases/` to see what phases already exist and what's been completed. See `docs/phases/_example/` for a completed example phase to calibrate against.
5. Create a new phase directory at `docs/phases/phase-N-[short-name]/` with:
   - `PLAN.md` — Phase goals, scope boundary, success criteria, estimated stories
   - `STORIES.md` — User stories with acceptance criteria (use format from `docs/workflow/STORY-FORMAT.md`)
   - `STATUS.md` — Initial status tracker
6. **Only involve active agents** (check the team roster in `docs/PROJECT.md`):
   - Invoke **architect** to review the plan for technical feasibility.
   - If UX designer is active and phase has UI work: invoke for user journey mapping.
   - If marketing director is active and phase has user-facing elements: invoke for messaging review.
7. Present the completed phase plan to the human for approval.

The argument `$ARGUMENTS` may contain guidance on what this phase should focus on.
