---
name: implement-phase
description: Execute the current phase. Assigns stories to active agents, coordinates implementation, runs tests, and updates docs. Only run after a phase plan has been approved.
---

Execute the implementation cycle for the current phase. Follow the phase flow in `docs/workflow/PHASE-LIFECYCLE.md`.

## Pre-Flight Validation

Before doing anything else, verify:
1. `docs/PROJECT.md` exists and lists at least one active agent — if missing, stop and output: "Run `/intro` first to configure your project."
2. A phase directory exists in `docs/phases/` with an approved `PLAN.md` (status: approved or in-progress) — if none found, stop and output: "No approved phase found. Run `/new-phase` to plan one, then get human approval before implementing."
3. If `$ARGUMENTS` names a specific phase, verify that phase directory exists.

If all checks pass, continue.

## Checkpoint / Resume

Read the current phase's `STATUS.md`. For each story:
- If status is `done` → skip it (already complete)
- If status is `in-progress` → resume from here (it was interrupted)
- If status is `ready` or `draft` → implement in priority order

Before starting each story, write `in-progress` to STATUS.md so that a restart can resume cleanly.

## Implementation

1. Read `docs/PROJECT.md` to know the **active team roster**.
2. Read the current phase's `PLAN.md` and `STORIES.md`.
3. For each story (in priority order, skipping done stories):

   **Emit a progress marker before starting each story:**
   ```
   ━━━ [Agent Name] — STORY-NNN: [Story Title] ━━━
   ```

   a. **Design** (if needed): Invoke architect. If UX designer is active and story has UI, invoke them too.
   b. **Implement**: Invoke the relevant lead(s) — backend-lead and/or frontend-lead — with clear story scope.
   c. **Test**: Invoke qa-engineer to write and run acceptance tests.
   d. **Security** (if security-reviewer is active): Review security-sensitive stories. Security reviewer writes findings to `docs/phases/<phase>/SECURITY-REPORT.md`.
   e. **Document** (if technical-writer is active): Update affected docs.
   f. Update `STATUS.md` — mark story as `done` with test count.

4. After all stories:
   - Run the full test suite. Report results.
   - If security-reviewer is active: phase-level code audit → append to SECURITY-REPORT.md.
   - If technical-writer is active: phase-level doc audit.
   - PM validates all acceptance criteria are met.

5. Present results to the human for review.

If any story is blocked or requires human input, document it in `STATUS.md` and continue with unblocked stories. Aggregate escalations for the human at the end.

The argument `$ARGUMENTS` may specify a particular phase to implement.
