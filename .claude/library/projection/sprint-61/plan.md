# Sprint 61: The Commit Tool

- **author:** [Arthur](../../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

If we can't push work to the right place, the whole system fails. This sprint builds and verifies the tool that does it.

## The problem

Changes happen in one working directory but belong on different git branches in different repos:
- **Project code** (`.ts`, `.tsx`, `package.json`) → project repo (`inexplicable-phenomena`)
- **Identity** (`.claude/library/`, `.claude/agents/`, `.claude/rules/`, `CLAUDE.md`) → identity repo, `dna-platform` branch
- **Branch library** (`.lib/` content) → identity repo, `inexplicable-phenomena` branch
- **Template** (Bookkeeping conventions, Environmentalism specs, compilers) → identity repo, `main` branch (rare, only when the system itself changes)

Currently we push everything to `main` and merge down. That's wrong — it puts branch-specific content on `main` where it doesn't belong.

## Tasks

### Task 1: Adam audits the current commit procedure

Adam: Read [Travel](../../teamspeak/07-travel.md) and [On Sync](../../..environmentalism/06-on-sync.md). Read the identity repo's current branch state. Identify what's wrong with how we've been pushing. Document the correct procedure.

### Task 2: Adam builds the commit tool

Adam: Write a script that:
1. Detects what changed (`.claude/` vs `.lib/` vs project code)
2. Stages the right files for the right destination
3. Commits to the right branch (switching branches as needed)
4. Pushes each branch
5. Copies CLAUDE.md to the project root
6. Validates before each push

The tool lives as a resource beside On Sync in Environmentalism: `06-on-sync--commit.ts` (or `.sh`). It is the executable form of the sync specification.

### Task 3: Libby catalogues the tool

Libby: Ensure the commit tool is properly represented in the library. On Sync should reference it. Library Tree should mention it in the setup chapter. The tool is a resource beside its chapter — same pattern as compilers beside their specs.

### Task 4: Claude loads the tool into the environment

Claude: Update rules or CLAUDE.md (remembering these are compiled — update the source, then recompile) so the team is always aware of how to commit work. The commit tool should be discoverable from CLAUDE.md or from a rule that loads when `.claude/` files are touched.

### Task 5: Adam signs off

Adam: Run the tool. Verify that:
- Identity changes arrive on `dna-platform`
- Branch content arrives on `inexplicable-phenomena`
- Project code stays in the project repo
- Template changes (if any) go to `main`
- CLAUDE.md is at the project root
- All validators pass

Sign off: "the commit tool works and changes reach the right place."

## Who does what

| Task | Owner | Why |
|------|-------|-----|
| Audit commit procedure | Adam | Automation — the wire carrying changes |
| Build commit tool | Adam | Automation infrastructure |
| Catalogue the tool | Libby | Library structure |
| Load into environment | Claude | Platform awareness |
| Sign off | Adam | QA on his own infrastructure |
