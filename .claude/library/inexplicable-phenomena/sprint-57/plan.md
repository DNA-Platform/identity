# Sprint 57: Branches

- **author:** [Arthur](../../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The library system becomes shareable. Project knowledge lives on branches. The identity repo's `main` becomes a clean template that any team can use.

## The branching model

The identity repo gets three levels of branches:

- **`main`** — the library system. Bookkeeping, Teamspeak, Environmentalism, compilers, validators, skills, CLAUDE.md. Universal infrastructure. No team-specific content. No autobiographies. No project history. A fresh team forks this and starts their own branch.

- **`dna-platform`** — Doug's organization. Our nine teammates, their autobiographies and personal libraries, Teamsmanship with all its chapters. The team's identity. Branched from `main`, merges system improvements back.

- **Project branches** (`inexplicable-phenomena`, `chemistry`, `dna-library`) — each project's `.lib/` content. Sprint history, project documentation, framework reference. Branched from `dna-platform`, merges identity changes down.

## Tasks

### Libby: On Branches (Bookkeeping)

Write the specification. What a branch library is. How `.lib/` follows Bookkeeping conventions. The one-way link convention (branches link into identity, identity doesn't link out). How the sprint history in a branch is the project's autobiography. How branch visibility works.

### Arthur: Project catalogue (Teamsmanship)

Write the catalogue chapter. One entry per project the team has worked on. Synopsis, link to the branch, what the team built there. No content from the branch — just the catalogue entry.

### Claude: Branch sync (Environmentalism)

Update the sync protocol. How changes propagate from `main` to `dna-platform` to project branches. How `.lib/` syncs with the identity repo branch. How global changes (conventions, protocols) reach all branches with temporal precision.

### Implementation

1. Branch `main` to `dna-platform` in the identity repo
2. Clean `main` — remove all team-specific content, keep the system
3. Move `inexplicable-phenomena/` sprint plans from library to a project branch
4. Move `.chemistry/` to a project branch
5. Create `.lib/` in the inexplicable-phenomena repo pointing to the branch content
6. Update validators and compilers for branch awareness
7. Test the full flow: edit `.lib/`, push to branch, merge identity changes down

## What success looks like

Someone can clone the identity repo's `main`, run `/teammate` to create themselves, and have a working library system. Our team's content lives on `dna-platform`. Each project's documentation lives on its own branch. The system is shareable. The identity is private. The projects are organized.
