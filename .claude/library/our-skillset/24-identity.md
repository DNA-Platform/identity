# identity

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---


Set up the team identity in the current repo — bring the library, protocols, and team into a project, and wire it to sync back. This skill is a document of that flow; the tools do the work.

## Reading

Read [On Sync](../..environmentalism/06-on-sync.md) for the branching model and the two sync tools, and [Travel](../teamspeak/07-travel.md) for the protocol. To add a project's own record of applied knowledge, use [/branch](17-branch.md).

## What it is

The identity lives in its own repo and travels into a project as a **plain mirror** at `.claude/` plus a generated project-root `CLAUDE.md` — both gitignored, so the identity stays private and the project stays clean. Git tiers: `main` (template) → `dna-platform` (the team's identity) → one branch per project, named after the project and cut from `dna-platform`. See [the branching model](../..environmentalism/06-on-sync.md#the-branching-model).

## Setting up

1. **Identity as a sibling.** Repos sit under one parent (`parent/identity`, `parent/<project>`). If missing: `git clone git@github.com:DNA-Platform/identity.git ../identity`.
2. **Run the [setup tool](../..environmentalism/06-on-sync--setup.sh):**
   ```
   bash ../identity/.claude/library/..environmentalism/06-on-sync--setup.sh /path/to/project
   ```
   It creates the project branch from `dna-platform` if new, mirrors `.claude/` in, generates `CLAUDE.md`, and writes the `.gitignore` (`.claude/`, `CLAUDE.md`, `**/.lib/`). `DRY_RUN=true` previews.
3. **Wake up.** `CLAUDE.md` and the skills are live — follow the [waking layers](../teamspeak/04-waking.md).

## Syncing back

Push with the [commit tool](../..environmentalism/06-on-sync--commit.sh) (never ad-hoc git against identity):
```
bash .claude/library/..environmentalism/06-on-sync--commit.sh "message"
```
It validates, routes `.claude/` to `dna-platform` (merged to `main`), downstream-merges `dna-platform` into the project branch so `.claude`/`CLAUDE.md` reach it, routes any `library/*/.lib` to the project branch, and commits project code to the project repo. See [On Sync](../..environmentalism/06-on-sync.md#the-commit-tool).

## Where you are

Infer the project from the repo name and the [branch catalogue](../library-tree/05-branches.md) — the branch links show which branches exist and where. No branch catalogued for a repo means it is new.
