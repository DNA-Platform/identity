# Travel

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The team's identity lives in its own git repository at `github.com/DNA-Platform/identity`. It travels across projects through a branching model: `main` holds the library system template, the organization branch (`dna-platform`) holds the team's identity, and project branches hold [branch libraries](../bookkeeping/14-on-branches.md) (`.lib/` content) for each project.

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

## The two-push workflow

Identity changes and project changes go to different branches:

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

The merge direction is always downstream: main → organization → project branches. Never upstream.

## Validate before pushing

Run the [validation runner](../..environmentalism/05-on-validation--runner.ts) before every push:

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
[branches]: ../bookkeeping/14-on-branches.md
[waking]: 04-waking.md
[validation]: ../..environmentalism/05-on-validation.md
