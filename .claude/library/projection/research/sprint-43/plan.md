# Sprint 43 — Spring Cleaning

Archive dead code, dead skills, dead roles. Update CLAUDE.md. Verify links. Leave the repo clean and honest about what's active.

## Sprint goal

**Everything in the repo is either active and current, or in `.archive`. CLAUDE.md reflects reality. All generated links resolve. The repo is a pleasure to navigate.**

## Tracks

### Track A — Archive dead infrastructure (Arthur + Adam)

| ID | Story | Description |
|----|-------|-------------|
| A-1 | Delete nested duplicate | Remove `.claude/agents/.claude/` — a path-doubling artifact |
| A-2 | Archive relay-era skills | Move `/hear`, `/listen`, `/speak`, `/dna` to `.claude/skills/.archive/` |
| A-3 | Archive $Chemistry-era skills | Move `/workspace`, `/organize`, `/review` to `.archive/` |
| A-4 | Archive old roles | Move `graphic-designer`, `chemistry-developer`, `ux-designer`, `frontend-engineer`, `qa-engineer`, `devops-engineer`, `framework-engineer` to `.claude/agents/roles/.archive/` |
| A-5 | Archive old abilities | Move `relay-*`, `framework-design`, `app-design`, `chemistry-basics`, `monorepo`, `software-engineering`, `testing` to `.claude/agents/abilities/.archive/` |
| A-6 | Archive old sprints | Move sprints 28-30 to `project/.archive/` |
| A-7 | Archive inactive agents | Move `david`, `cathy`, `phillip`, `gabby`, `queenie` agent files to `team/.archive/` |
| A-8 | Update registry | Remove archived agents from `registry.json`. Keep only active: arthur, adam, libby, claude |

### Track B — Rewrite CLAUDE.md (Arthur + Libby)

| ID | Story | Description |
|----|-------|-------------|
| B-1 | Update structure tree | Reflect current folder structure — no `docs/`, correct library paths, `src/` contents |
| B-2 | Update skills table | Only list active skills |
| B-3 | Update team section | Only list active roles and agents |
| B-4 | Update boot sequence | Make sure steps point to real files |
| B-5 | Update conventions | Library conventions, name tags, perspectives — all current |

### Track C — Link validation (Libby + Claude)

| ID | Story | Description |
|----|-------|-------------|
| C-1 | Run link validator on .claude/ | Fix broken links caused by archiving |
| C-2 | Run link validator on CLAUDE.md | Ensure all citations resolve |
| C-3 | Check cross-references in abilities and roles | Active abilities/roles shouldn't reference archived ones |

### Track D — Library + retro (All)

| ID | Story | Description |
|----|-------|-------------|
| D-1 | Update .librarianship catalogue | Reflect current state of shelves |
| D-2 | Autobiographies | Sprint reflections |

## Rules

- **Archive, don't delete** — unless it's clearly junk (nested duplicates, empty dirs)
- **Archive folders:** `.claude/skills/.archive/`, `.claude/agents/roles/.archive/`, `.claude/agents/abilities/.archive/`, `.claude/agents/team/.archive/`, `.claude/agents/project/.archive/`
- **Active = has a user** — a role is active if an active agent uses it. An ability is active if an active role loads it. A skill is active if someone invokes it.
- **Validate after each change** — don't batch. Archive one thing, check links, move on.

<!-- citations -->
[coding-policy]: ../../library/coding-policy/.cover.md
