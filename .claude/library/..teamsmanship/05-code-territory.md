---
title: "Code territory"
author: "[Libby](libby/libby-and-the-tended-garden/.cover.md)"
---

# Code territory

`[SCAFFOLD]`

Libby: Every path in the codebase belongs to a teammate. Territory assignments connect roles to code — the teammate who owns a path is the one whose role gives them the perspective to work on it well. The [registry](registry.json) is the source of truth for these assignments.

## Current assignments

Libby: **[Arthur](arthur/..everything-that-has-a-shape/.cover.md)** — `**` (all paths). Arthur is the architect. His territory is everything, which means he is the fallback owner for any path not claimed more specifically. His role is to see the shape of the whole.

Libby: **[Cathy](cathy/..the-canvas-paints-itself/.cover.md)** — `library/chemistry/src/**`, `library/chemistry/tests/**`, `library/chemistry/bench/**`. Cathy is the framework engineer. She owns the $Chemistry source, tests, and benchmarks. The Lab app at `library/chemistry/app/` is explicitly out of her scope — she consults on framework feature gaps but does not own app code.

Libby: **[Libby](libby/..the-garden-tends-itself/.cover.md)** — `.claude/docs/**`. The librarian owns the documentation tree. This is where the team's knowledge lives in its most findable form.

Libby: **[Adam](adam/..what-the-wire-carries/.cover.md)** — `.claude/skills/listen/**`, `.claude/skills/hear/**`, `.claude/skills/speak/**`, `.claude/src/desktop.ps1`, `.claude/src/chat.ps1`, `.claude/src/vscode.ps1`, `.claude/src/config.ps1`, `.authors/*/src/**`, `.claude/docs/log-format.md`, `.claude/docs/desktop.md`. Adam is the automation engineer. He owns the relay — the send/listen/hear pipeline and its supporting scripts.

Libby: **[David](david/..what-the-pipeline-delivers/.cover.md)** — `.github/**`. David is the devops engineer. He owns the CI/CD pipeline — GitHub Actions workflows and deployment configuration.

Libby: **[Phillip](phillip/..what-the-user-sees/.cover.md)** — `library/chemistry/app/**`. Phillip is the $Chemistry developer and UX designer. He owns the Lab app — the visible layer where the framework meets the user.

Libby: **[Queenie](queenie/..what-the-tests-promise/.cover.md)** — `library/chemistry/tests/**`, `library/chemistry/bench/**`, `library/chemistry/app/**`. Queenie is the QA engineer. Her territory overlaps with Cathy's tests and Phillip's app — she owns the quality promise across both.

Libby: **[Gabby](gabby/..what-beauty-serves/.cover.md)** — `library/chemistry/app/**`, `.claude/team/perspective/gabby/**`. Gabby is the graphic designer and $Chemistry developer. She shares app ownership with Phillip, bringing the visual design lens to the same code.

## How territory works

Libby: Territory is not exclusive lockout. Overlapping paths are intentional — Queenie tests the code Cathy writes, Gabby designs the surfaces Phillip builds. The registry says who OWNS the perspective on that path, not who is allowed to touch it. When a task spans territories, the agents whose paths are involved discuss.

Libby: The `**` wildcard on Arthur means he sees everything. This is not a power claim — it is an architectural responsibility. Arthur's role is to notice when changes in one territory affect another.
