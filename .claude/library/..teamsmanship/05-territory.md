# Territory

- **author:** [Arthur](..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Every path in the codebase belongs to a teammate. This chapter IS the authoritative source for territory assignments — the [/responsible](../../skills/responsible/SKILL.md) skill reads from here. [Rules](../../rules/) that wire knowledge to code are generated from here.

Territory is perspective ownership, not exclusive lockout. Overlapping paths are intentional — Queenie tests the code Cathy writes, Gabby designs the surfaces Phillip builds. The `**` wildcard on Arthur means he sees everything — an architectural responsibility, not a power claim.

## Assignments

### [Arthur](..team/arthur/..everything-that-has-a-shape/.cover.md) — Architect
- `**` — all paths (fallback owner)
- Primary: workspace config, `package.json`, [CLAUDE.md](../../../CLAUDE.md), `.claude/` infrastructure
- Primary: `.claude/library/..teamsmanship/**` — [Teamsmanship](.cover.md), the Collaboration catalogue
- Roles: [Architect](02-roles.md#architect)

### [Cathy](..team/cathy/..the-canvas-paints-itself/.cover.md) — Framework Engineer
- `library/chemistry/src/**` — the $Chemistry framework source
- `library/chemistry/tests/**` — framework tests (shared with Queenie)
- `library/chemistry/bench/**` — benchmarks
- NOT `library/chemistry/app/**` — consults on framework gaps but doesn't own app code
- Roles: [Framework Engineer](02-roles.md#framework-engineer)

### [Libby](..team/libby/..the-garden-tends-itself/.cover.md) — Librarian
- `.claude/library/**` — the entire library
- Roles: [Librarian](02-roles.md#librarian)

### [Adam](..team/adam/..what-the-wire-carries/.cover.md) — Automation Engineer
- `.claude/skills/listen/**`, `.claude/skills/hear/**`, `.claude/skills/speak/**` — the relay skills
- Roles: [Automation Engineer](02-roles.md#automation-engineer)

### [David](..team/david/..what-the-pipeline-delivers/.cover.md) — DevOps Engineer
- `.github/**` — CI/CD pipelines and deployment
- Roles: [DevOps Engineer](02-roles.md#devops-engineer)

### [Phillip](..team/phillip/..what-the-user-sees/.cover.md) — UX Designer + Chemistry Developer
- `library/chemistry/app/**` — the Lab app (shared with Gabby)
- Roles: [UX Designer](02-roles.md#ux-designer), [Chemistry Developer](02-roles.md#chemistry-developer)

### [Queenie](..team/queenie/..what-the-tests-promise/.cover.md) — QA Engineer
- `library/chemistry/tests/**` — framework tests (shared with Cathy)
- `library/chemistry/bench/**` — benchmarks
- `library/chemistry/app/**` — app quality (shared with Phillip)
- Roles: [QA Engineer](02-roles.md#qa-engineer)

### [Gabby](..team/gabby/..what-beauty-serves/.cover.md) — Graphic Designer + Chemistry Developer
- `library/chemistry/app/**` — visual design in the Lab (shared with Phillip)
- Roles: [Graphic Designer](02-roles.md#graphic-designer), [Chemistry Developer](02-roles.md#chemistry-developer)

### [Claude](..team/claude/..what-the-mirror-reflects/.cover.md) — Environmentalist
- `.claude/agents/**`, `.claude/rules/**`, `.claude/skills/**`, `CLAUDE.md` — platform artifacts
- `.claude/library/..environmentalism/**` — [Environmentalism](.cover.md), the system specification
- `src/**` — the conversation pipeline (shared with Adam)
- Roles: [Environmentalist](02-roles.md#environmentalist)

## Compilation

A [territory rules compiler](05-territory.ts) `[SCAFFOLD]` would read these assignments and generate `.claude/rules/{territory}.md` files — path-scoped rules that load the right knowledge when the right files enter context. Each generated rule links back to this chapter and to the teammate's library.

<!-- citations -->
[roles]: 02-roles.md
[responsible]: ../../skills/responsible/SKILL.md
