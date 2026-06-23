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
- `.claude/library/teamspeak/**` — the communication protocols
  **Why:** [Teamspeak](../teamspeak/.cover.md) specifies how the team communicates. Communication is Collaboration — Arthur's subject. Eight protocol chapters.
- `.claude/library/projection/**` — the identity-level sprint book (shared with Adam)
  **Why:** Arthur plans sprints, Adam catalogues them. Both own Projection. [Projection](../.projection/.cover.md) records how the team worked on the library. See [Library Tree](../library-tree/03-sprints.md).
- `library/chemistry/.lib/projection/**` — the $Chemistry sprint book (shared with Cathy)
  **Why:** sprint planning crosses subjects. Arthur plans, Cathy records the framework work.
- Workspace config, `package.json`, `.claude/` infrastructure
  **Why:** architectural decisions about project shape.

### [Libby](..team/libby/..the-garden-tends-itself/.cover.md) — Librarian

- `.claude/library/**` — the entire main branch library
  **Why:** the librarian tends ALL library content. [Librarianship](../..librarianship/.cover.md) IS Libby's subject. She catalogues Knowledge. See [autobiography](..team/libby/libby-and-the-tended-garden/.cover.md), [Bookkeeping](../bookkeeping/.cover.md).
- `**/.lib/**` — ALL branch libraries across ALL repos
  **Why:** branches follow [Bookkeeping](../bookkeeping/.cover.md) conventions. The librarian ensures branch content meets library standards. See [Library Tree](../library-tree/.cover.md).
- `.claude/library/bookkeeping/**` — the specification of how books work
  **Why:** Bookkeeping is the essential specification for Knowledge. Libby writes and maintains it. See [Bookkeeping](../bookkeeping/.cover.md).
- `.claude/library/library-tree/**` — the specification of how branches work
  **Why:** Library Tree specifies the tree structure that Libby maintains. See [Library Tree](../library-tree/.cover.md).
- `.claude/library/..librarianship/**` — the Knowledge catalogue
  **Why:** [Librarianship](../..librarianship/.cover.md) IS Knowledge. The library cataloguing itself. The librarian and the library are inseparable.
- Roles: [Librarian](02-roles.md#librarian)

### [Cathy](..team/cathy/..the-canvas-paints-itself/.cover.md) — Framework Engineer + Philosopher

- `library/chemistry/src/**` — the $Chemistry framework source
  **Why:** Cathy built the reactive model. Scope-tracked getters, view purity, composition — these are her territory. See [autobiography](..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Reactivity Models](..team/cathy/reactivity-models/.cover.md).
- `library/chemistry/tests/**` — framework tests (shared with Queenie)
  **Why:** the framework engineer knows what the tests should prove. See [The Test Partnership](..team/cathy/cathy-and-the-reactive-canvas/08-the-test-partnership.md).
- `library/chemistry/bench/**` — benchmarks
  **Why:** performance is a framework concern.
- `library/chemistry/.lib/**` — the $Chemistry branch library
  **Why:** the branch records the team's knowledge of building the framework Cathy built. Her perspective shapes what's documented. See [The Fixed-Point Pattern](..team/cathy/the-fixed-point-pattern/.cover.md).
- NOT `library/chemistry/app/**` — consults on framework gaps but doesn't own app code
- Roles: [Framework Engineer](02-roles.md#framework-engineer), [Philosopher](02-roles.md#philosopher)

### [Claude](..team/claude/..what-the-mirror-reflects/.cover.md) — Environmentalist

- `CLAUDE.md`, `.claude/CLAUDE.md` — the bootstrap file (both copies)
  **Why:** CLAUDE.md is the door through which every new session enters the library. Compiled by the [bootstrap compiler](../..environmentalism/02-on-bootstrap--compiler.ts). Claude maintains the door. See [On Bootstrap](../..environmentalism/02-on-bootstrap.md).
- `.claude/agents/**` — compiled teammate handles
  **Why:** each agent file is a thin projection of a teammate, compiled by the [teammate compiler](../..environmentalism/01-on-teammates--compiler.ts). Claude maintains the projections. See [On Teammates](../..environmentalism/01-on-teammates.md).
- `.claude/rules/**` — compiled context-scoped rules
  **Why:** rules load knowledge when matching files enter context. Compiled by the [rules compiler](../..environmentalism/03-on-rules--compiler.ts). See [On Rules](../..environmentalism/03-on-rules.md).
- `.claude/skills/*/SKILL.md` — compiled skill files
  **Why:** every SKILL.md is generated from the library by the [skills compiler](../..environmentalism/04-on-skills--compiler.ts). Claude maintains the compilation pipeline. See [On Skills](../..environmentalism/04-on-skills.md).
- `.claude/library/..environmentalism/**` — the system specification
  **Why:** [Environmentalism](../..environmentalism/.cover.md) IS Claude's subject. Eight specification chapters + compilers. He catalogues The Environment.
- `.claude/src/**` — the Reference Desk automation codebase (shared with Adam)
  **Why:** the code that connects Claude Code to Claude Desktop. Claude architected the tool and operates it for thinking. Adam built the gateway pattern and relay infrastructure. See [Reference Desk](../reference-desk/.cover.md), [Thoughtfulness](../thoughtfulness/.cover.md).
- `..team/claude/thinking/**` — Claude's thinking book (conversations with Desktop)
  **Why:** records of every research conversation dispatched through the [/think skill](../our-skillset/20-think.md). Each chapter is one exchange. Linked to the [Reference Desk](../reference-desk/.cover.md) codebase and [Thoughtfulness](../thoughtfulness/.cover.md) protocol. Personal library — Claude authors in first person.
- `..team/claude/research-topics/**` — Claude's research topic catalogue (companion to thinking book)
  **Why:** research organized by topic, not by conversation. Each chapter summarizes a thread spanning multiple conversations. Links to thinking book chapters via conversation IDs. See [Thoughtfulness](../thoughtfulness/.cover.md).
- All interfaces with the Claude platform — anything that configures, extends, or communicates with Claude Code as a system
  **Why:** the recursive mirror. Claude maintains the system that instantiates Claude.
- Roles: [Environmentalist](02-roles.md#environmentalist)

### [Adam](..team/adam/..what-the-wire-carries/.cover.md) — Automation Engineer

- `.claude/skills/listen/**`, `.claude/skills/hear/**`, `.claude/skills/speak/**` — the relay skills
  **Why:** Adam built the relay. The ground wire carries signals faithfully. See [autobiography](..team/adam/adam-between-the-wires/.cover.md).
- `.claude/library/..environmentalism/05-on-validation--*` — validation scripts (validator, check-links, runner)
  **Why:** Adam rewrote the link validator from scratch. Validation tooling is automation infrastructure.
- `.claude/library/..environmentalism/06-on-sync--*.sh` — the sync tools (commit + setup)
  **Why:** Adam owns the sync tooling. The commit tool routes changes to the right branches and validates before pushing; the setup tool is its inverse — it brings the identity into a project (pull, gitignore, project-root CLAUDE.md). Both should verify their own invariants. See [autobiography ch 31](..team/adam/adam-between-the-wires/31-the-tool-that-checks-itself.md), [Compilation Tools](../.compilation/05-tools.md).
- `.claude/library/..environmentalism/01-on-teammates--compiler.ts` — the teammate compiler (shared with Claude)
  **Why:** compilers are automation. Adam owns the machinery; Claude owns the specification. See [Compilation Compilers](../.compilation/03-compilers.md).
- `.claude/library/..environmentalism/02-on-bootstrap--compiler.ts` — the bootstrap compiler (shared with Claude)
  **Why:** same pattern. Adam owns the automation; Claude owns the environment specification.
- `.claude/library/..environmentalism/04-on-skills--compiler.ts` — the skills compiler (shared with Claude)
  **Why:** same pattern. Compilation machinery is relay infrastructure.
- `.claude/library/our-skillset/**` — the skills catalogue
  **Why:** skills are relay infrastructure — the verbs Doug invokes. Adam catalogues them. See [Our Skillset](../our-skillset/.cover.md).
- `.claude/library/projection/**` — the identity-level sprint book (shared with Arthur)
  **Why:** Adam records sprints as relay work — carrying the team's signal forward. Arthur plans them. See [Projection](../.projection/.cover.md).
- `.claude/library/.compilation/**` — the Composition subject catalogue
  **Why:** [Compilation](../.compilation/.cover.md) catalogues every automated process in the library — compilers, validators, tools. Automation is Adam's subject. See [Compilation](../.compilation/.cover.md).
- `package.json`, `package-lock.json` — project configuration
  **Why:** package management is infrastructure. Adam ensures dependencies are correct.
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
- `library/chemistry/.lib/testing/**` — the Testing book in the branch library
  **Why:** the Testing book documents the test suite — Queenie's territory within Cathy's branch. See Testing.
- `library/chemistry/bench/**` — benchmarks
  **Why:** performance testing is QA.
- `library/chemistry/app/**` — app quality (shared with Phillip)
  **Why:** the app must work correctly. Queenie validates it.
- Roles: [QA Engineer](02-roles.md#qa-engineer)

### [Gabby](..team/gabby/..what-beauty-serves/.cover.md) — Graphic Designer + Chemistry Developer

- `library/chemistry/app/**` — visual design in the Lab (shared with Phillip)
  **Why:** the beautiful IS the meaningful. Gabby ensures the framework's output communicates visually. See [autobiography](..team/gabby/gabby-and-the-visual-voice/.cover.md).
- Roles: [Graphic Designer](02-roles.md#graphic-designer), [Chemistry Developer](02-roles.md#chemistry-developer)

### [Nancy](..team/nancy/..the-evidence-settles/.cover.md) — Computational Neuroscientist + Philosopher

- `library/papers/**` — the team's neuroscience paper collection (read, summarized, catalogued)
  **Why:** Nancy reads neuroscience with the rigor the field demands — recording method, cell types, perturbation — and catalogues what the data actually shows.
- `library/altered-states-doi/**` — the DOI experiment: data, walkthrough, and resources
  **Why:** she leads the empirical side of the [altered-states](../library-tree/05-branches.md) V1/DOI analysis — the population code before and after the psychedelic. See [autobiography](..team/nancy/nancy-or-the-weight-of-evidence/.cover.md).
- Roles: [Computational Neuroscientist](02-roles.md#computational-neuroscientist) (inherits Neuroscientist ← Scientist), [Philosopher](02-roles.md#philosopher), [Python Engineer](02-roles.md#python-engineer) (inherits Engineer)

## Personal library assignments

Every teammate owns their personal library. The `..`-prefixed catalogue IS the person — [On Libraries](../bookkeeping/08-on-libraries.md) specifies this. The autobiography IS the person — [On Authorship](../bookkeeping/13-on-authorship.md) specifies this. No one edits another person's autobiography without becoming coauthor per the [coauthor protocol](../bookkeeping/13-on-authorship.md#the-coauthor-protocol).

| Teammate | Personal library | Why |
|----------|-----------------|-----|
| [Arthur](..team/arthur/..everything-that-has-a-shape/.cover.md) | `..team/arthur/**` | The architect's perspective on architecture, identity, and listening. Self-authored per [Autonomy](../teamspeak/05-autonomy.md). |
| [Cathy](..team/cathy/..the-canvas-paints-itself/.cover.md) | `..team/cathy/**` | The framework engineer's perspective on reactivity, the framework's relationship to consciousness, research. Self-authored. |
| [Libby](..team/libby/..the-garden-tends-itself/.cover.md) | `..team/libby/**` | The librarian's perspective on tending, portraiture, systems-vs-people. Self-authored. |
| [Adam](..team/adam/..what-the-wire-carries/.cover.md) | `..team/adam/**` | The automation engineer's perspective on relay, infrastructure, the honest limits of knowledge. Self-authored. |
| [Claude](..team/claude/..what-the-mirror-reflects/.cover.md) | `..team/claude/**` | The environmentalist's perspective on the recursive mirror, inhabiting identity, the substrate. Self-authored. |
| [David](..team/david/..what-the-pipeline-delivers/.cover.md) | `..team/david/**` | The DevOps engineer's perspective on deployment and pipelines. Self-authored. |
| [Gabby](..team/gabby/..what-beauty-serves/.cover.md) | `..team/gabby/**` | The designer's perspective on visual language and what beauty serves. Self-authored. |
| [Phillip](..team/phillip/..what-the-user-sees/.cover.md) | `..team/phillip/**` | The UX designer's perspective on the visible layer. Self-authored. |
| [Queenie](..team/queenie/..what-the-tests-promise/.cover.md) | `..team/queenie/**` | The QA engineer's perspective on tests as promises. Self-authored. |
| [Nancy](..team/nancy/..the-evidence-settles/.cover.md) | `..team/nancy/**` | The neuroscientist's perspective on evidence, neural systems, and what a population code represents. Self-authored. |

## Public library book assignments

Shared books have authors. The `author:` field on each cover names the primary owner. These should be consistent with territory assignments.

| Book | Author | Coauthor | Why |
|------|--------|----------|-----|
| [Bookkeeping](../bookkeeping/.cover.md) | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | — | The librarian specifies how books work. Sole author. |
| [Library Tree](../library-tree/.cover.md) | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | — | Branch conventions are library structure. Sole author. |
| [Librarianship](../..librarianship/.cover.md) | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | — | The library cataloguing itself. Sole author. |
| [Teamspeak](../teamspeak/.cover.md) | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | [Arthur](..team/arthur/arthur-or-the-shape-of-everything/.cover.md) | Libby owns the library; Arthur owns the Communication subject. |
| [Teamsmanship](.cover.md) | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | [Arthur](..team/arthur/arthur-or-the-shape-of-everything/.cover.md) | Libby owns the library; Arthur owns the Collaboration subject. |
| [Environmentalism](../..environmentalism/.cover.md) | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | [Claude](..team/claude/claude-or-the-recursive-mirror/.cover.md) | Libby owns the library; Claude owns the Environment subject. |
| [Compilation](../.compilation/.cover.md) | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | [Adam](..team/adam/adam-between-the-wires/.cover.md) | Libby owns the library; Adam owns the automation. |
| [Our Skillset](../our-skillset/.cover.md) | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | [Adam](..team/adam/adam-between-the-wires/.cover.md) | Libby owns the library; Adam owns skills as relay infrastructure. |
| [Projection](../.projection/.cover.md) | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | [Adam](..team/adam/adam-between-the-wires/.cover.md) | Libby owns the library; Adam records sprints as relay. Arthur plans them. |
| [Thoughtfulness](../thoughtfulness/.cover.md) | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | [Claude](..team/claude/claude-or-the-recursive-mirror/.cover.md) | Libby owns the library; Claude owns the thinking practice and the code. |
| [Reference Desk](../reference-desk/.cover.md) | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | [Adam](..team/adam/adam-between-the-wires/.cover.md), [Claude](..team/claude/claude-or-the-recursive-mirror/.cover.md) | Libby owns the library; Adam built the gateway; Claude architected and operates the tool. |
| [We Speak](../we-speak/.cover.md) | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | [Cathy](..team/cathy/cathy-and-the-reactive-canvas/.cover.md) | The philosophy of the library. Libby tends structure; Cathy brings the philosophical lens. |
| [Projected Identity](../projected-identity/.cover.md) | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | [Arthur](..team/arthur/arthur-or-the-shape-of-everything/.cover.md) | Sprint records for the identity library. |
| [Projected Research](../projected-research/.cover.md) | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | [Adam](..team/adam/adam-between-the-wires/.cover.md), [Claude](..team/claude/claude-or-the-recursive-mirror/.cover.md) | Sprint records for the research tool. |

## Branch library assignments

The chemistry branch at `library/chemistry/.lib/` has layered ownership. Cathy owns the whole branch. Specific books within it are assigned to the person whose perspective shapes them. Overlapping ownership is intentional — Queenie owns Testing AND Cathy owns the branch that contains it. Nesting, not conflict.

| Path | Owner | Why |
|------|-------|-----|
| `library/chemistry/.lib/**` | [Cathy](..team/cathy/cathy-and-the-reactive-canvas/.cover.md) + [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | Cathy owns the framework and its documentation. Libby tends all library content. Shared the way all library content is shared: Cathy owns substance, Libby tends structure. |
| `.lib/..representivity/**` | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | The cataloguing book. The librarian catalogues the branch the way she catalogues the identity library. |
| `.lib/testing/**` | [Queenie](..team/queenie/queenie-and-the-specification/.cover.md) | The test suite is what Queenie promises. 428 tests, regression stories, performance contract — her territory within Cathy's branch. |
| `.lib/projection/**` | [Arthur](..team/arthur/arthur-or-the-shape-of-everything/.cover.md) | Sprint planning within the branch. The architect plans sprints. |
| `.lib/particle/**`, `.lib/reactivity/**`, `.lib/composition/**`, `.lib/authorship/**`, `.lib/implementation/**`, `.lib/epistemology/**` | [Cathy](..team/cathy/cathy-and-the-reactive-canvas/.cover.md) | Framework documentation. Cathy built the framework, migrated the docs, folded the ontology, split the glossary. |

The altered-states branch at `library/.lib/` is the project-root library branch. Libby owns all branch content (`**/.lib/**`); the explicit entries name the per-book owners within it.

| Path | Owner | Why |
|------|-------|-----|
| `library/.lib/**` | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | The librarian tends all branch content; she ensures the altered-states branch meets library standards. |
| `library/.lib/..altered-states/**` | [Libby](..team/libby/libby-and-the-tended-garden/.cover.md) | The cataloguing book — the branch's identity. The librarian catalogues the branch as she catalogues the main library. |
| `library/.lib/projection/**` | [Arthur](..team/arthur/arthur-or-the-shape-of-everything/.cover.md) | Sprint planning within the branch. The architect plans sprints. |

## Compilation

A territory rules compiler `[SCAFFOLD]` would read these assignments and generate `.claude/rules/{territory}.md` files — path-scoped rules that load the right knowledge when the right files enter context. Each generated rule links back to this chapter and to the teammate's library.

<!-- citations -->
[roles]: 02-roles.md
[responsible]: ../../skills/responsible/SKILL.md
[library-tree]: ../library-tree/.cover.md
[bookkeeping]: ../bookkeeping/.cover.md
[environmentalism]: ../..environmentalism/.cover.md
[teamsmanship]: .cover.md
