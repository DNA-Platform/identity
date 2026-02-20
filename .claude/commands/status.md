---
name: status
description: Get a concise status overview of the project — decisions needed, current phase, story progress, blockers, and next steps.
---

Provide a concise project status report. Structure it in this order:

1. **Read** `docs/PROJECT.md` (active team, project name) and all `STATUS.md` files from `docs/phases/`.

2. **Decision Queue** — Lead with this. List everything awaiting human input:
   - Unapproved phase plans (link to PLAN.md)
   - Open escalations from any STATUS.md
   - Any pending ADRs or design approvals
   If nothing is waiting: "No decisions needed — work can proceed."

3. **Current Phase** — Name and goal, overall status.

4. **Progress** — Stories completed / total, with a simple breakdown by status (done / in-progress / blocked / pending).

5. **In Progress** — What's actively being worked on right now.

6. **Blocked** — Any items awaiting resolution (non-human blockers).

7. **Next Steps** — What happens after current work completes.

Keep the full report under 35 lines. The Decision Queue is the most important section — if the human has actions to take, make them impossible to miss.

$ARGUMENTS
