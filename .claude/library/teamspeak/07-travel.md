# Travel

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The team's identity lives in its own git repository at `github.com/DNA-Platform/identity`. It travels across projects through a branching model: `main` holds the library system template, the organization branch (`dna-platform`) holds the team's identity, and project branches hold [branch libraries](../library-tree/01-branches.md) (`.lib/` content) for each project.

## Bringing the team to a project

Clone the identity repo into `.claude/`, check out the organization branch, and copy CLAUDE.md to the project root:

```
cd your-project/
git clone git@github.com:DNA-Platform/identity.git .claude
cd .claude
git checkout dna-platform
cd ..
cp .claude/CLAUDE.md .
```

The project repo's `.gitignore` should include `.claude/` and `CLAUDE.md` so the identity stays private.

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
