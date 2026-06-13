# On Branches

- **specification:** Branch
- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

A branch library is a semi-independent collection that shares the cataloguing system with the main library but lives in its own location. In library science, the main branch holds the core collection; branch libraries hold specialized collections that serve their community while following the same classification system. The identity library at `.claude/library/` is the main branch. A project library at `.lib/` is a branch. Both follow Bookkeeping conventions.

## The `.lib/` convention

A `.lib/` directory anywhere is a branch of the library. It has its own `.cover.md`. It follows the same conventions as the main branch: [covers](03-on-covers.md), [chapters](02-on-chapters.md), the [dot type system](.cover.md#the-dot-type-system), markdown frontmatter. It may have its own [subject catalogues](07-on-subjects.md) and books. The `.lib/` name mirrors `.claude/library/` the way a branch name mirrors the main branch -- both are libraries, but the dot marks one as ancillary.

A branch cover describes what the branch contains and why it exists as a separate collection. The cover follows the same [synopsis](09-on-synopsis.md) conventions as any book cover: opening paragraph, table of contents with descriptions, links into specific chapters.

## The one-way link convention

Branches link INTO the identity -- referencing protocols, conventions, teammate autobiographies. The identity does NOT link into branches. This is an instance of the [direction convention](06-on-links.md#the-direction-convention): the stable layer does not depend on the volatile layer.

If a branch is removed, the identity does not break. If a branch is added, the identity does not change. The main branch is self-contained. Branches are additive.

[Author](13-on-authorship.md) links in branches point to autobiographies in the main branch. These links use relative paths like `../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md`. When the identity is not present, the link degrades gracefully -- the link text still carries the author's name. A broken author link is a cosmetic problem, not a structural one.

## Cross-project links

Projects are siblings on disk under the same parent directory. Cross-project links use `../project/.lib/` relative paths. These work locally in VS Code and in any markdown renderer that resolves relative paths.

The convention assumes the directory layout:

```
parent/
  identity/          # the identity repo with .claude/library/
  project-a/         # has .lib/
  project-b/         # has .lib/
```

Cross-project links are lateral -- neither project owns the other. Both link into the shared identity. A project linking to another project's branch is declaring a relationship, not a dependency.

## The branch as autobiography

A sprint history in a branch is the project's autobiography -- the team's chronological record of working on that project. Sprints are [chapters](02-on-chapters.md). The branch cover is the project's [synopsis](09-on-synopsis.md). The same conventions that make a teammate's autobiography a living narrative apply here: the last chapter is the current state, earlier chapters are history, the cover summarizes the arc.

This parallels [On Projects](12-on-projects.md) but at the branch level. A project book in the main branch records the team's perspective on the work. A branch library records the work itself -- plans, retros, artifacts, the detailed story that the project book summarizes.

## Branch management in git

The identity repo has branches that correspond to project libraries. `main` is the system template -- the conventions, specifications, and infrastructure that any team can adopt. The organization branch (e.g. `dna-platform`) holds the team identity: autobiographies, personal libraries, the team's accumulated knowledge.

Project branches hold `.lib/` content. Each project branch extends the organization branch with the project's branch library. Downstream merges propagate changes: main to organization to project branches. Upstream changes never flow automatically -- a project branch pulls from the organization branch, not the reverse.

This means the identity repo contains the full tree: template conventions on `main`, team identity on the organization branch, project-specific content on project branches. The git branch structure mirrors the library branch structure -- the main branch is the main library, git branches are library branches.

<!-- citations -->
[books]: 01-on-books.md
[chapters]: 02-on-chapters.md
[covers]: 03-on-covers.md
[links]: 06-on-links.md
[subjects]: 07-on-subjects.md
[libraries]: 08-on-libraries.md
[synopsis]: 09-on-synopsis.md
[projects]: 12-on-projects.md
[authorship]: 13-on-authorship.md
[type system]: .cover.md#the-dot-type-system
