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

## Design Foundation Check

If the active team includes `frontend-lead` or `ux-designer`, check whether foundational design docs exist **before** planning a phase with any UI or frontend work:

1. Does `docs/ux/MARKET-RESEARCH.md` exist with real content (not a stub)?
2. Does `docs/ux/BRAND.md` have its TL;DR and Brand Voice sections filled in?
3. Does `docs/ux/DESIGN-SYSTEM.md` have its TL;DR and at least a color palette / type scale?

If **any of these are missing**, stop and inform the human:

> "Design foundation docs are missing or incomplete. Frontend work without them leads to inconsistent UI and rework. I recommend planning a **Design Foundation** phase first to produce:
> - Market & competitor research (`docs/ux/MARKET-RESEARCH.md`) — Marketing Director
> - Brand guidelines (`docs/ux/BRAND.md`) — Marketing Director
> - Design system (`docs/ux/DESIGN-SYSTEM.md`) — UX Designer
> - User journey maps (`docs/ux/journeys/`) — UX Designer
>
> Plan the Design Foundation phase, or proceed with the original phase anyway?"

- If **Design Foundation**: plan that phase instead (scope: research + brand + design system only, no implementation stories).
- If **proceed**: add a `> ⚠️ Design foundation incomplete — frontend work carries UX consistency risk.` callout to `PLAN.md`.

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
   - If **UX designer** is active and the phase has any UI work: invoke them to produce user journey maps for the phase scope (`docs/ux/journeys/`) and confirm that design system specs exist for every UI story. No UI story should enter implementation without a UX spec.
   - If **marketing director** is active and the phase has user-facing elements: invoke them to review copy and messaging alignment, and confirm brand guidelines are reflected in the stories.
7. Present the completed phase plan to the human for approval.

The argument `$ARGUMENTS` may contain guidance on what this phase should focus on.
