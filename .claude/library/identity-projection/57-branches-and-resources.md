# Sprint 57: Branches and Resources

- **author:** [Arthur](../../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Two structural changes. Branch the identity repo. Dissolve `.tooling/` by placing every resource beside its chapter.

## Phase 1: Resource convention

### 1a. Document the resource naming convention (Libby — On Chapters)

Update [On Chapters](../../bookkeeping/02-on-chapters.md) to specify:

A resource file shares its chapter's number and sits beside it in the same book directory. The chapter documents the resource. The resource is the code. The naming convention:

```
NN-chapter-name.md                       ← the chapter
NN-chapter-name--resource-name.ext       ← the resource
```

The `--` separates the chapter name from the resource name. Next and previous links skip resources — they go chapter to chapter. The chapter references the resource near its title.

### 1b. Rename existing resources to match the convention

| Current | New |
|---------|-----|
| `bookkeeping/bookkeeping.ts` | `bookkeeping/11-on-specifications--validator.ts` |
| `..environmentalism/01-on-teammates.ts` | `..environmentalism/01-on-teammates--compiler.ts` |
| `..environmentalism/02-on-bootstrap.ts` | `..environmentalism/02-on-bootstrap--compiler.ts` |
| `..environmentalism/03-on-rules.ts` | `..environmentalism/03-on-rules--compiler.ts` |
| `..environmentalism/04-on-skills.ts` | `..environmentalism/04-on-skills--compiler.ts` |
| `..environmentalism/07-on-compiled-links.ts` | `..environmentalism/07-on-compiled-links--validator.ts` |

### 1c. Move resources from .tooling/ to their chapters

| Current | New |
|---------|-----|
| `.tooling/check-links.ts` | `..environmentalism/07-on-compiled-links--check-links.ts` |
| `.tooling/validate.ts` | `..environmentalism/05-on-validation--runner.ts` |

### 1d. Archive everything else in .tooling/

Move `.tooling/scripts/` and remaining `.tooling/*.ps1` to `.archive/tooling/`. These are historical migration scripts — one-time resources from past sprints.

Archive the superseded files:
- `..teamsmanship/06-the-agents-folder.ts` → `.archive/`
- `subjects-and-catalogues/subjects-and-catalogues.ts` → `.archive/`

### 1e. Delete .tooling/

Once empty, remove the directory. It was an orphanage. The children have homes now.

## Phase 2: Branch the identity repo

### 2a. Branch dna-platform

Claude: `git checkout -b dna-platform` from current main. Push. Everything we have is now on dna-platform.

### 2b. Branch inexplicable-phenomena

Claude: `git checkout -b inexplicable-phenomena` from dna-platform. Push. This branch will hold `.lib/` content.

Do NOT clean main yet. That's a separate, complex project.

## Phase 3: Specifications

### 3a. On Branches (Libby — Bookkeeping)

What a branch library is. How `.lib/` follows Bookkeeping conventions. The one-way link convention. Cross-project links via `../project/.lib/`. The branch as a project's autobiography.

### 3b. Update Travel (Arthur — Teamspeak)

The two-push workflow. Which branch to push to. Downstream merging.

### 3c. Update Sync (Claude — Environmentalism)

System requirements for branching. The sync script as a resource beside On Sync.

### 3d. Project catalogue (Arthur — Teamsmanship)

Catalogue entries for known projects.

## Phase 4: Set up .lib/

Set up the branch library in the inexplicable-phenomena project repo. Move project-specific sprint plans there. The `.chemistry/` docs can follow later.

## What success looks like

Every resource file lives beside its chapter. `.tooling/` doesn't exist. The identity repo has `dna-platform` and `inexplicable-phenomena` branches. On Branches, On Chapters (resources section), Travel, and Sync are updated. The resource convention is in Bookkeeping.
