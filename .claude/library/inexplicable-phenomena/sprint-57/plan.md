# Sprint 57: Branches

- **author:** [Arthur](../../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The identity repo gets a branching model. `main` becomes the library system template. `dna-platform` holds this team's identity. Project branches hold `.lib/` content. The convention for cross-project links is `../project/.lib/` — projects are siblings on disk.

## Phase 1: Branch and clean

### 1a. Branch dna-platform from main

Claude: In the identity repo, `git checkout -b dna-platform` from current main. Push it. Everything we have today is now on `dna-platform`. This preserves the full history.

### 1b. Clean main

Claude: Switch to `main`. Remove team-specific content:
- `..teamsmanship/..team/` (all personal libraries)
- Teamsmanship catalogue chapters 09-19 (project entries, teammate entries)
- Sprint plans and project-specific content (`inexplicable-phenomena/`, `dna-library/`)
- `.chemistry/` (project-specific framework docs)
- Compiled agent files (they reference specific teammates)

Keep on `main`:
- Bookkeeping (complete specification)
- Teamspeak (protocols, no team-specific references)
- Environmentalism (system specs, compilers)
- Teamsmanship specification chapters 01-06 (roles, territory, abilities — universal)
- Teamsmanship cover as a scaffold
- CLAUDE.md (references protocols, not people)
- Rules (reference conventions, not people)
- Skills (reference protocols, not people)
- Validators and tooling

Commit and push main. Now `main` is a clean template.

### 1c. Branch inexplicable-phenomena from dna-platform

Claude: `git checkout -b inexplicable-phenomena` from dna-platform. This branch will eventually hold the `.lib/` content for this project. For now it's identical to dna-platform.

## Phase 2: Create .lib/

### 2a. Set up .lib/ in the project repo

Arthur: Create `library/chemistry/.lib/` (or wherever Doug placed it). This is the branch library for $Chemistry documentation. It follows Bookkeeping conventions — covers, chapters, the dot type system.

Move `.chemistry/` content from the identity into `.lib/`. Move sprint plans from `inexplicable-phenomena/` into `.lib/`. These are project-specific and belong with the project.

### 2b. Cross-project link convention

Libby: Encode the convention: projects are siblings under the same parent directory (`../project/`). Cross-project links use `../inexplicable-phenomena/.lib/` relative paths. These work locally in VS Code but not on GitHub — that's acceptable.

## Phase 3: Specifications

### 3a. On Branches (Bookkeeping — Libby)

Libby: Write the specification. What a branch library is. How `.lib/` follows Bookkeeping conventions. The one-way link convention. The branch as a project's autobiography. How branch visibility works.

### 3b. Update Travel (Teamspeak — Arthur)

Arthur: Extend the sync protocol. Which branch to push to. When to merge downstream. The two-push workflow: `.claude/` to dna-platform, `.lib/` to the project branch.

### 3c. Update Sync (Environmentalism — Claude)

Claude: Update the system requirements. How the identity repo's branch strategy works. What `.lib/` means as a directory. The downstream merge cascade: main → dna-platform → project branches. The sync script.

### 3d. Project catalogue (Teamsmanship — Arthur)

Arthur: Write catalogue entries for known projects. Each entry: what the project is, where the branch is, what the team built there. Links to the branch, not into its content.

## Phase 4: Sync script

### 4a. Write sync-branches script (Claude, in .tooling/)

Claude: A script that:
1. Pushes `.claude/` changes to `dna-platform` branch
2. Pushes `.lib/` changes to the project branch
3. Merges `main` downstream if needed
4. Validates before each push

## Phase 5: Validate and test

### 5a. Test the full flow

The team: edit something in `.claude/library/`, push to `dna-platform`. Edit something in `.lib/`, push to the project branch. Verify both arrive. Verify links resolve. Verify the template on `main` is clean.

## What success looks like

Someone can clone the identity repo's `main` branch, run `/teammate`, and have a working library. Our team's content lives on `dna-platform`. Each project's `.lib/` lives on its own branch. Cross-project links work locally. The sync script handles the two-push workflow.
