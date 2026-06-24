# branch

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---


Set up or navigate a library branch — a `.lib/` directory holding a project's record of applied knowledge (sprints, plans, retros, design notes), in the same [Bookkeeping](../bookkeeping/.cover.md) conventions as the main library. A branch records what the team *learned* building something, not what the code does.

## Reading

Read [Library Tree](../library-tree/.cover.md) — especially [Branches](../library-tree/01-branches.md) and [Setup](../library-tree/04-setup.md) — and [On Sync](../..environmentalism/06-on-sync.md) for how branches map to git. The team must already be in the repo; if not, run [/identity](24-identity.md) first.

## Setting up a branch

**Fast path:** `bash .claude/library/library-tree/04-setup--scaffold.sh <lib-dir> "<Subject>"` scaffolds steps 1–3 — it creates the cataloguing book and Projection covers with correct frontmatter and author-link depth, and prints the territory and catalogue snippets to paste. Then fill the TODO prose, do steps 4–5, and push. The steps below are what it generates.

1. **Create `.lib/`** beside the code it documents — `library/<area>/.lib/`, or `library/.lib/` for a project-root branch.
2. **Cataloguing book.** A `..`-prefixed book inside `.lib/` named for the *subject* the branch represents (as `..representivity` is for $Chemistry). Cover per [On Covers](../bookkeeping/03-on-covers.md): title, `catalogues:`, `author:`, `subject:` self-link, opening paragraph, TOC.
3. **Projection.** A `projection/` book for sprint-by-sprint records — the branch's autobiography, authored by the sprint-shaper.
4. **Territory.** Add the `.lib/` paths to [territory](../..teamsmanship/05-territory.md): Libby owns `**/.lib/**`; assign books within to the perspective that shapes them.
5. **Catalogue it.** Add an entry to [Known Branches](../library-tree/05-branches.md) — repo, location, cataloguing book, Projection. Reference the branch with a cross-repo `../<repo>/...` link (repos are siblings under one parent).
6. **Push** with the [commit tool](../..environmentalism/06-on-sync--commit.sh): it discovers any `library/*/.lib`, routes it to the project branch, and validates first. See [Travel](../teamspeak/07-travel.md).

## Navigating an existing branch

If the argument is a project path, navigate to its `.lib/` and show the cover. If `list`, show all known branches from [Known Branches](../library-tree/05-branches.md).

## The one-way link convention

Branches link INTO the identity — protocols, conventions, autobiographies. The identity points at a branch only from [Known Branches](../library-tree/01-branches.md#the-one-way-link-convention), via cross-repo links that degrade to text — used minimally. If a branch is removed, the identity does not break.
