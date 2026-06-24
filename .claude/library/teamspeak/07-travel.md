# Travel

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The team's identity lives in its own git repository at `github.com/DNA-Platform/identity`. It travels across projects through a branching model: `main` holds the library system template, the organization branch (`dna-platform`) holds the team's identity, and project branches hold [branch libraries](../library-tree/01-branches.md) (`.lib/` content) for each project.

## Bringing the team to a project

The fast path is the [setup tool](../..environmentalism/06-on-sync--setup.sh) — run it once against the project directory (repos are siblings under one parent, so the identity is found at `../identity`):

```
bash ../identity/.claude/library/..environmentalism/06-on-sync--setup.sh /path/to/project
```

It ensures the project's branch exists (cut from `dna-platform` if the repo is new), mirrors the identity `.claude/` into the project, generates the project-root `CLAUDE.md`, and writes the project `.gitignore` (`.claude/`, `CLAUDE.md`, `**/.lib/`) so the identity stays private and the project stays clean. Use `DRY_RUN=true` to preview without changing anything. See [On Sync](../..environmentalism/06-on-sync.md#the-setup-tool).

The `.claude/` it creates is a **plain mirror** of the identity (no nested `.git`); the local sibling identity repo at `../identity` is the source of truth, and the [commit tool](../..environmentalism/06-on-sync--commit.sh) syncs changes back. New branches are inferred from the repo name and the branch catalogue — if no branch is catalogued for a repo, it is new.

## Use the commit tool

The [commit tool](../..environmentalism/06-on-sync--commit.sh) is how you push changes. Run it from the project root with a commit message:

```
bash .claude/library/..environmentalism/06-on-sync--commit.sh "Sprint 61: commit message"
```

The tool handles everything: it detects what changed, validates, routes identity changes to the organization branch, routes `.lib/` changes to the project branch, routes project code to the project repo, runs downstream merges, and pushes. Do not run ad-hoc git commands against the identity repo. The commit tool enforces the branching model so you do not have to remember which branch to push to. See [On Sync](../..environmentalism/06-on-sync.md#the-commit-tool) for the full specification.

## The two-push workflow (what the tool automates)

Identity changes and project changes go to different branches. The commit tool automates this separation, but understanding the model matters for debugging and conflict resolution:

**Identity changes** (autobiographies, protocols, specifications, library books) push to the organization branch:

```
cd .claude
git checkout dna-platform
git add library/ agents/ rules/ skills/ CLAUDE.md
git commit -m "Sprint 57: resources beside chapters"
git push
```

**Project changes** (`.lib/` content, sprint plans, project documentation) push to the project branch:

```
cd .claude
git checkout inexplicable-phenomena
git add .lib/
git commit -m "Sprint 57: framework documentation"
git push
```

## Downstream merges

When the template changes on `main` (new Bookkeeping chapter, updated convention), propagate downstream:

```
git checkout dna-platform
git merge main
git push
git checkout inexplicable-phenomena
git merge dna-platform
git push
```

The merge direction is always downstream: main → organization → project branches. Never upstream. The commit tool runs downstream merges automatically when committing branch library changes.

## Validate before pushing

The commit tool runs [validation](../..environmentalism/05-on-validation.md) before any commits. If validation fails, nothing is pushed. To run validation manually:

```
cd .claude/library
npx tsx ..environmentalism/05-on-validation--runner.ts
```

Don't push with errors. Warnings are noted but don't block.

## Merge conflicts

If two sessions edited the same autobiography, git surfaces a conflict. The resolution is always additive: keep both chapters, renumber if needed. An autobiography can't have conflicting facts — it can only have parallel experiences.

## Projects are siblings

Projects are cloned as siblings under the same parent directory. Cross-project links use `../project/.lib/` relative paths. The convention assumes: `parent/identity/`, `parent/project-a/`, `parent/project-b/`.

<!-- citations -->
[branches]: ../library-tree/01-branches.md
[waking]: 04-waking.md
[validation]: ../..environmentalism/05-on-validation.md
