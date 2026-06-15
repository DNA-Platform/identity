# Branches

- **specification:** Branch
- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

A branch library is the team's record of applied knowledge about a project. It shares the cataloguing system with the main library but lives beside the code, in its own `.lib/` directory. Where the main branch holds the team's identity — who the teammates are, what conventions they follow, how the library works — a branch holds what the team learned building something specific. Not what the code does. What the team experienced, decided, and discovered while making the code do what it does.

In library science, the main branch holds the core collection; branch libraries hold specialized collections that serve their community while following the same classification system. The identity library at `.claude/library/` is the main branch. A project library at `.lib/` is a branch. Both follow [Bookkeeping](../bookkeeping/.cover.md) conventions — [covers](../bookkeeping/03-on-covers.md), [chapters](../bookkeeping/02-on-chapters.md), the [dot type system](../bookkeeping/.cover.md#the-dot-type-system), markdown frontmatter.

## The `.lib/` convention

A `.lib/` directory anywhere is a branch of the library. It has its own [cataloguing book](02-cataloguing.md). It follows the same conventions as the main branch. It may have its own [subject catalogues](../bookkeeping/07-on-subjects.md) and books. The `.lib/` name mirrors `.claude/library/` the way a branch name mirrors the main branch — both are libraries, but the dot marks one as ancillary.

A branch cover describes what the branch contains and why it exists as a separate collection. The cover follows the same [synopsis](../bookkeeping/09-on-synopsis.md) conventions as any book cover: opening paragraph, table of contents with descriptions, links into specific chapters.

## The one-way link convention

Branches link INTO the identity — referencing protocols, conventions, teammate autobiographies. The identity does NOT link into branches. This is an instance of the [direction convention](../bookkeeping/06-on-links.md#the-direction-convention): the stable layer does not depend on the volatile layer.

If a branch is removed, the identity does not break. If a branch is added, the identity does not change. The main branch is self-contained. Branches are additive.

The one exception is this book — Library Tree — which catalogues the known branches. This is a catalogue of the tree's shape, not a dependency on branch content. The links point to branch covers, not branch chapters. If a branch disappears, the link degrades to text.

[Author](../bookkeeping/13-on-authorship.md) links in branches point to autobiographies in the main branch. These links use relative paths like `../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md`. When the identity is not present, the link degrades gracefully — the link text still carries the author's name. A broken author link is a cosmetic problem, not a structural one.

## Placement

A `.lib/` goes where the knowledge is. A framework has its branch beside its source: `library/chemistry/.lib/`. A physics module has its branch beside its code: `library/physics/.lib/`. A project can have many branch libraries — one per area that needs its own record of applied knowledge. There is no convention that a project has one `.lib/` at the root.

Cross-project links between repos use `../project/` relative paths — projects are siblings on disk under the same parent directory. Links within a project between `.lib/` directories use normal relative paths. These work locally in VS Code and in any markdown renderer that resolves relative paths.

## Known branches

### [$Chemistry](../../../.lib/chemistry/..representivity/.cover.md) — Representation

The branch for the $Chemistry reactive framework, at `.lib/chemistry/` in the identity repo. Catalogued by [Representivity](../../../.lib/chemistry/..representivity/.cover.md). Sprint history in [Projection](../../../.lib/chemistry/projection/.cover.md). $Chemistry is about representation — how reactive state represents something beyond itself — and the branch records the team's knowledge of building that representational framework.

<!-- citations -->
[bookkeeping]: ../bookkeeping/.cover.md
[covers]: ../bookkeeping/03-on-covers.md
[chapters]: ../bookkeeping/02-on-chapters.md
[links]: ../bookkeeping/06-on-links.md
[subjects]: ../bookkeeping/07-on-subjects.md
[synopsis]: ../bookkeeping/09-on-synopsis.md
[authorship]: ../bookkeeping/13-on-authorship.md
[type-system]: ../bookkeeping/.cover.md#the-dot-type-system
