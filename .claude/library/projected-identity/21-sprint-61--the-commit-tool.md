# Sprint 61: The Commit Tool

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

If we can't push work to the right place, the whole system fails. This sprint builds and verifies the commit tool, cleans up branch contamination, and ensures the tool's use is written into the environment so no one forgets.

## The problem

Changes happen in one working directory but belong on different git branches:
- **Identity** (`.claude/`) → `dna-platform` AND `main` (until we have a clean template, both get identity changes)
- **Branch library** (`.lib/` content) → `inexplicable-phenomena` only (NOT main or dna-platform)
- **Project code** → project repo's own git

Currently `.lib/chemistry/` leaked onto `main` and `dna-platform`. That must be fixed.

## Tasks

### Task 1: Adam + Claude + Arthur discuss the commit procedure

Adam leads. Claude explains the environment constraints (which branches exist, what goes where). Arthur explains the architectural intent (main=template, dna-platform=team, project branches=.lib). The discussion produces the specification for the tool.

To discuss is to think from many perspectives. This task is not one person designing — it's three perspectives finding the right answer together.

**Owner:** Adam (leads), Claude, Arthur (contribute)

### Task 2: Adam cleans up branch contamination

Remove `.lib/` from `main` and `dna-platform` in the identity repo. It should only exist on `inexplicable-phenomena`.

```
git checkout main
git rm -r .lib/
git commit -m "Remove .lib from main — branch content belongs on project branches only"
git push

git checkout dna-platform
git rm -r .lib/
git commit -m "Remove .lib from dna-platform — branch content belongs on project branches only"
git push

git checkout inexplicable-phenomena
# .lib stays here — this is the right branch for it
```

**Owner:** Adam

### Task 3: Adam builds the commit tool

A script at `.claude/library/..environmentalism/06-on-sync--commit.ts` that:
1. Detects what changed (`.claude/` vs `.lib/` vs project files)
2. Pushes `.claude/` and `CLAUDE.md` changes to `dna-platform` AND `main`
3. Pushes `.lib/` changes to the project branch (`inexplicable-phenomena`)
4. Pushes project code changes to the project repo
5. Copies CLAUDE.md to project root
6. Validates before pushing

The tool is a resource beside On Sync — the executable form of the sync specification.

**Owner:** Adam

### Task 4: Libby ensures the tool is documented

On Sync in Environmentalism should reference the commit tool. Library Tree's setup chapter should mention it. The tool IS the procedure — the chapter documents it, the resource executes it.

Write it down clearly enough that every teammate — especially Arthur — always knows to use it instead of ad-hoc git commands.

**Owner:** Libby

### Task 5: Claude wires the tool into the environment

Update the library rule (`.claude/rules/library.md`) to mention the commit tool when library files are touched. Update CLAUDE.md's "how the team works" section to reference the commit procedure. Remember: CLAUDE.md and rules are compiled — update the SOURCE in the library, then recompile.

**Owner:** Claude

### Task 6: Adam signs off

Run the tool end-to-end. Verify:
- Identity changes arrive on `dna-platform` and `main`
- `.lib/` changes arrive ONLY on `inexplicable-phenomena`
- Project code stays in the project repo
- CLAUDE.md is at the project root
- `.lib/chemistry/` is NOT on `main` or `dna-platform`
- All validators pass

**Owner:** Adam

## Who does what

| Task | Owner | Why |
|------|-------|-----|
| Discuss procedure | Adam + Claude + Arthur | Three perspectives on infrastructure, environment, architecture |
| Clean branch contamination | Adam | Automation — fixing the wire |
| Build commit tool | Adam | Automation infrastructure |
| Document the tool | Libby | Library content |
| Wire into environment | Claude | Platform awareness |
| Sign off | Adam | The builder verifies the build |
