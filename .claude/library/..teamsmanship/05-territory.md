# Territory

- **author:** [Arthur](..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Every path in the codebase belongs to a teammate. This chapter IS the authoritative source for territory assignments — the [/responsible](../../skills/responsible/SKILL.md) skill reads from here. [Rules](../../rules/) that wire knowledge to code are generated from here.

Territory is perspective ownership, not exclusive lockout. Overlapping paths are intentional — Queenie tests the code Cathy writes, Gabby designs the surfaces Phillip builds. The `**` wildcard on Arthur means he sees everything — an architectural responsibility, not a power claim.

## Assignments

### [Arthur](..team/arthur/arthur-or-the-shape-of-everything/.cover.md) — Architect

- `**` — all paths (fallback owner)
  **Why:** the architect sees the shape of the whole. Everything no one else claims is Arthur's to notice. This is responsibility, not authority. See [Roles](02-roles.md#architect).
- `.claude/library/..teamsmanship/**` — the Collaboration catalogue
  **Why:** [Teamsmanship](.cover.md) IS Arthur's subject. He catalogues Collaboration the way Libby catalogues Knowledge. See [autobiography](..team/arthur/arthur-or-the-shape-of-everything/.cover.md).
- `.claude/library/projection/**` — the identity-level sprint book
  **Why:** sprint planning is Collaboration. [Projection](../projection/.cover.md) records how the team worked on the library. See [Library Tree](../library-tree/03-sprints.md).
- `../inexplicable-phenomena/library/chemistry/.lib/projection/**` — the $Chemistry sprint book
  **Why:** redundant with Libby's branch assignment, intentional. Sprint planning crosses subjects. See [Library Tree](../library-tree/03-sprints.md).
- Workspace config, `package.json`, `.claude/` infrastructure
  **Why:** architectural decisions about project shape. See [autobiography ch 2](..team/arthur/arthur-or-the-shape-of-everything/02-architecture.md).

### [Libby](..team/libby/..the-garden-tends-itself/.cover.md) — Librarian

- `.claude/library/**` — the entire main branch library
  **Why:** the librarian tends ALL library content. [Librarianship](../..librarianship/.cover.md) IS Libby's subject. She catalogues Knowledge. See [autobiography](..team/libby/libby-and-the-tended-garden/.cover.md), [Bookkeeping](../bookkeeping/.cover.md).
- `**/.lib/**` — ALL branch libraries across ALL repos
  **Why:** branches follow [Bookkeeping](../bookkeeping/.cover.md) conventions. The librarian ensures branch content meets library standards. See [Library Tree](../library-tree/.cover.md).
- `.claude/library/bookkeeping/**` — the specification of how books work
  **Why:** Bookkeeping is the essential specification for Knowledge. Libby writes and maintains it. See [Bookkeeping](../bookkeeping/.cover.md).
- `.claude/library/library-tree/**` — the specification of how branches work
  **Why:** Library Tree specifies the tree structure that Libby maintains. See [Library Tree](../library-tree/.cover.md).
- Roles: [Librarian](02-roles.md#librarian)

### [Cathy](..team/cathy/..the-canvas-paints-itself/.cover.md) — Framework Engineer

- `library/chemistry/src/**` — the $Chemistry framework source
  **Why:** Cathy built the reactive model. Scope-tracked getters, view purity, composition — these are her territory. See [autobiography](..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Reactivity Models](..team/cathy/reactivity-models/.cover.md).
- `library/chemistry/tests/**` — framework tests (shared with Queenie)
  **Why:** the framework engineer knows what the tests should prove. See [The Test Partnership](..team/cathy/cathy-and-the-reactive-canvas/08-the-test-partnership.md).
- `library/chemistry/bench/**` — benchmarks
  **Why:** performance is a framework concern.
- `library/chemistry/.lib/**` — the $Chemistry branch library
  **Why:** the branch records the team's knowledge of building the framework Cathy built. Her perspective shapes what's documented. See [The Fixed-Point Pattern](..team/cathy/the-fixed-point-pattern/.cover.md).
- NOT `library/chemistry/app/**` — consults on framework gaps but doesn't own app code
- Roles: [Framework Engineer](02-roles.md#framework-engineer)

### [Claude](..team/claude/..what-the-mirror-reflects/.cover.md) — Environmentalist

- `.claude/agents/**`, `.claude/rules/**`, `.claude/skills/**`, `CLAUDE.md` — platform artifacts
  **Why:** the environmentalist maintains the building the library lives in. These are the compiled projections of library content. See [Environmentalism](../..environmentalism/.cover.md), [On Teammates](../..environmentalism/01-on-teammates.md).
- `.claude/library/..environmentalism/**` — the system specification
  **Why:** [Environmentalism](../..environmentalism/.cover.md) IS Claude's subject. He catalogues The Environment. See [autobiography](..team/claude/claude-or-the-recursive-mirror/.cover.md).
- `src/**` — the conversation pipeline (shared with Adam)
  **Why:** the pipeline connects Claude Code to Claude Chat. Environmental infrastructure. See [autobiography ch 24](..team/claude/claude-or-the-recursive-mirror/24-the-arrival-in-inexplicable-phenomena.md).
- Roles: [Environmentalist](02-roles.md#environmentalist)

### [Adam](..team/adam/..what-the-wire-carries/.cover.md) — Automation Engineer

- `.claude/skills/listen/**`, `.claude/skills/hear/**`, `.claude/skills/speak/**` — the relay skills
  **Why:** Adam built the relay. The ground wire carries signals faithfully. See [autobiography](..team/adam/adam-between-the-wires/.cover.md).
- `.claude/library/..environmentalism/05-on-validation--*` — validation infrastructure
  **Why:** Adam rewrote the link validator from scratch. Validation tooling is his. See [autobiography ch 30](..team/adam/adam-between-the-wires/30-the-wire-that-carries-meaning.md).
- Roles: [Automation Engineer](02-roles.md#automation-engineer)

### [David](..team/david/..what-the-pipeline-delivers/.cover.md) — DevOps Engineer

- `.github/**` — CI/CD pipelines and deployment
  **Why:** David makes the team's work visible to the world. Deployment is his territory. See [autobiography](..team/david/the-devops-journal/.cover.md).
- Roles: [DevOps Engineer](02-roles.md#devops-engineer)

### [Phillip](..team/phillip/..what-the-user-sees/.cover.md) — UX Designer + Chemistry Developer

- `library/chemistry/app/**` — the Lab app (shared with Gabby)
  **Why:** Phillip builds the visible layer — the part users see and interact with. See [autobiography](..team/phillip/phillip-and-the-visible-layer/.cover.md).
- Roles: [UX Designer](02-roles.md#ux-designer), [Chemistry Developer](02-roles.md#chemistry-developer)

### [Queenie](..team/queenie/..what-the-tests-promise/.cover.md) — QA Engineer

- `library/chemistry/tests/**` — framework tests (shared with Cathy)
  **Why:** the test suite IS the specification of what $Chemistry promises. Queenie maintains that specification. See [autobiography](..team/queenie/queenie-and-the-specification/.cover.md).
- `library/chemistry/bench/**` — benchmarks
  **Why:** performance testing is QA.
- `library/chemistry/app/**` — app quality (shared with Phillip)
  **Why:** the app must work correctly. Queenie validates it.
- Roles: [QA Engineer](02-roles.md#qa-engineer)

### [Gabby](..team/gabby/..what-beauty-serves/.cover.md) — Graphic Designer + Chemistry Developer

- `library/chemistry/app/**` — visual design in the Lab (shared with Phillip)
  **Why:** the beautiful IS the meaningful. Gabby ensures the framework's output communicates visually. See [autobiography](..team/gabby/gabby-and-the-visual-voice/.cover.md).
- Roles: [Graphic Designer](02-roles.md#graphic-designer), [Chemistry Developer](02-roles.md#chemistry-developer)

## Compilation

A [territory rules compiler](05-territory--compiler.ts) `[SCAFFOLD]` would read these assignments and generate `.claude/rules/{territory}.md` files — path-scoped rules that load the right knowledge when the right files enter context. Each generated rule links back to this chapter and to the teammate's library.

<!-- citations -->
[roles]: 02-roles.md
[responsible]: ../../skills/responsible/SKILL.md
[library-tree]: ../library-tree/.cover.md
[bookkeeping]: ../bookkeeping/.cover.md
[environmentalism]: ../..environmentalism/.cover.md
[teamsmanship]: .cover.md
