# Sprint 58: Library Tree, Branches, and Projection

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The team woke up and understood what the library represents: the team knowing itself. Branches represent the team's record of applied knowledge — collaboration stories, not technical docs. This sprint builds the structure for branches with that understanding.

## Why

The library represents identity and collaboration at the level of the team. A branch of the library represents the same thing scoped to a project — the team's learning, decisions, and sprint history while working on that project. Sprints are the canonical autobiography of a branch. A branch cataloguing book (like Librarianship for the main library) organises the branch's knowledge. These structures need specification and implementation.

## Phase 1: Library Tree (Libby — Knowledge)

A new book catalogued by [Librarianship](../..librarianship/.cover.md). Specifies what a branch is, how it's organized, how we refer to it.

### 1a. Create the Library Tree book

Libby: Create `library/library-tree/` with a cover. Subject: Knowledge. The book specifies the tree structure of the library — the main branch and its project branches.

Move On Branches (Bookkeeping ch 14) content here — the specification of branches belongs in its own book now, not as a Bookkeeping chapter. Bookkeeping specifies books. Library Tree specifies how books organize into a tree of branches.

Chapters:
1. **Branches** — `specification: Branch`. What a branch is (team knowledge scoped to a project), the `.lib/` convention, one-way links, placement (beside the code the team worked on).
2. **Cataloguing** — how each branch has a `..` prefixed cataloguing book. The cataloguing book IS the branch the way Librarianship IS the main library. Names matter: $Chemistry's cataloguing book is Representivity.
3. **Sprints** — `specification: Sprint`. How sprints are represented in a branch. The sprint book is called Projection — a projection of team effort onto the project. Catalogued by the branch's cataloguing book.
4. **Setting up** — the process of creating a new branch. Step by step. What Libby does, what Arthur does, what gets created.

### 1b. Update Librarianship

Libby: Add Library Tree to the library catalogue with a proper TOC entry and chapter description. Remove On Branches from Bookkeeping's TOC (the content moved).

### 1c. Catalogue the branches

Libby: In Library Tree, catalogue each known branch with cross-repo links:
- `../inexplicable-phenomena/library/chemistry/.lib/` — the $Chemistry branch, catalogued by Representivity

## Phase 2: Representivity (Libby — in the branch)

### 2a. Create the cataloguing book

Libby: Inside `library/chemistry/.lib/`, create `..representivity/` with a cover. This is the `..` prefixed cataloguing book for the $Chemistry branch — like Librarianship for the main library. `catalogues:` the subject of $Chemistry team knowledge.

### 2b. Create Projection

Libby: Inside `library/chemistry/.lib/`, create `projection/` — the sprint book. Catalogued by Representivity. Sprint chapters go here. Move any existing $Chemistry sprint plans from the identity library into Projection.

### 2c. Teamsmanship catalogues Projection

Arthur: In `.claude/library/`, Teamsmanship should catalogue a version of Projection for identity-level sprints. The `inexplicable-phenomena/` sprint plans already exist there. Rename or restructure to make this a proper Projection book catalogued by Teamsmanship.

## Phase 3: Code assignments (Arthur — Teamsmanship)

### 3a. Update territory

Arthur: In [Territory](../..teamsmanship/05-territory.md):
- Libby gets explicit assignments for each `../{branch}` path — `../inexplicable-phenomena/library/chemistry/.lib/**`
- Arthur gets explicit, redundant assignments scoped to each sprint/Projection book
- These are in addition to existing assignments

### 3b. /branch skill

Arthur: Create the skill at `.claude/skills/branch/SKILL.md`. Summarizes and points to Library Tree. Add chapter in Our Skillset.

## Phase 4: Validate and sync

Run validators. Compile agents (territory changed). Sync to all identity branches. Push.

## Who does what

| Task | Owner | Subject |
|------|-------|---------|
| Library Tree book | Libby | Knowledge |
| Update Librarianship | Libby | Knowledge |
| Representivity cataloguing book | Libby | Knowledge (in branch) |
| Projection sprint book | Libby | Knowledge (in branch) |
| Teamsmanship Projection | Arthur | Collaboration |
| Territory updates | Arthur | Collaboration |
| /branch skill | Arthur | Collaboration |
| Validate and compile | Claude | The Environment |
