# Tools

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

Automation that isn't compilation or validation — the plumbing that moves content to the right place.

## The commit tool

- **Source:** [06-on-sync--commit.sh](../..environmentalism/06-on-sync--commit.sh)
- **Specification:** [On Sync](../..environmentalism/06-on-sync.md)
- **What it does:** Detects what changed (identity, branch library, project code), validates, then routes each category to the correct git branch on the correct repo.

Three-way routing:
1. **Identity changes** (`.claude/`) → identity repo, `dna-platform` branch, merged to `main`
2. **Branch library changes** (`library/*/.lib/`) → identity repo, project branch (e.g., `inexplicable-phenomena`)
3. **Project code changes** → project repo, `main` branch

The tool runs the validation runner before pushing. If validation fails, nothing pushes.

## Sync process

The commit tool uses `robocopy /MIR` on Windows to mirror `.claude/` from the project working copy to the identity repo. The `/MIR` flag means the identity repo's `.claude/` becomes an exact copy of the project's. This is how identity changes flow from where the team works to where they're stored.

Known issue (Sprint 63): `/MIR` can leak `.lib/` content onto branches where it doesn't belong. The branch audit step after sync catches this, but the tool should guard against it proactively.

## Branch routing

The commit tool implements the [Travel protocol](../teamspeak/07-travel.md): identity travels to the identity repo, branch content travels to the project branch, project code stays in the project repo. The routing is the mechanism; Travel is the specification.

Branch separation invariant: `.lib/` exists only on project branches (`inexplicable-phenomena`), never on `main` or `dna-platform`. The `/audit` skill should verify this.

## Future automation

This chapter catalogues tools that exist today. As the library grows, new automation will appear:
- Book-to-book sync (if branch libraries need to share content)
- Cross-branch validation (do all branches agree on shared conventions?)
- Compiler staleness detection (has the library changed since the last compilation?)

Each new tool gets an entry here when it's built.
