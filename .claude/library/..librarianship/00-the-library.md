# The library

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

A flat wiki where identity, knowledge, and specification live as books. Everything in the library is a book. The hierarchy exists in links between covers, not in the filesystem. Walk links, not folders.

## Structure

The library is ONE directory under `.claude/`. It contains three kinds of things, distinguished by dot prefix:

| Prefix | Role | Self-referential? | Example |
|--------|------|-------------------|---------|
| `..` | Library catalogue | Yes — IS the library | [`..librarianship/`](.cover.md) |
| `.` | Subject catalogue | Yes — IS the subject | [`..teamsmanship/`](../..teamsmanship/.cover.md) |
| (none) | Regular book | No — belongs to a subject | `coding-policy/` |

All three kinds are PEERS at the same directory level. A subject catalogue does NOT contain the books it catalogues. The books sit beside it. The subject links to them in its [cover](.cover.md). Each book declares its canonical subject in its frontmatter with a [`subject:` field](../bookkeeping/03-on-covers.md#subject).

A book can belong to multiple subjects. It lives in ONE place. Its `subject:` field points to its canonical home. Other subjects link to it from their TOCs with descriptions shaped by that subject's perspective — the same book described differently by different subjects.

## Two perspectives

The library has a public space and personal spaces:

**Public** (the library root) — third-person, shared, normative. Books here represent what the team knows. The [library catalogue](.cover.md) and subject catalogues organise them. Anyone can read them. They're written as shared knowledge.

**Personal** (inside [`..teamsmanship/{agent}/`](../..teamsmanship/.cover.md)) — first-person, subjective, experiential. Each agent has a personal library inside their `..teamsmanship/` folder with their [autobiography](05-authorship-and-autobiography.md), their [perspective](12-the-perspective-practice.md), and their research books. The same flat structure applies inside: the teammate's subject catalogue and their books are peers.

Public books link freely to each other. Personal books link to public books. Public books link to personal libraries through the [`..teamsmanship/` catalogue](../..teamsmanship/.cover.md) — which bridges the perspectives.

## Navigation

Start at the [library catalogue](.cover.md) — `..librarianship/.cover.md`. It catalogues every subject and every teammate library with [paragraph descriptions](../bookkeeping/09-on-synopsis.md) rich enough that you rarely need to follow a link. Four layers of synopsis before primary source: library catalogue → subject catalogue → book cover → chapter. Read the shallowest that answers your question.

Every link is a real markdown link — `[text](path)` inline in the prose, clickable, woven where the reader needs it. Not prose paths in backticks. The library is a wiki. The links ARE the navigation.

## The platform

The library lives inside Claude Code's `.claude/` directory alongside [platform artifacts](../../rules/) that the platform reads automatically. The [embedding-and-linking pattern](../..environmentalism/00-the-environmentalist.md#the-embedding-and-linking-pattern) describes this relationship: platform artifacts embed the minimum for enforcement, then link inline into the library for depth. The library is the source of truth. The platform is a projection.

## Shared identity vs project state

The library travels across projects via the [identity repo](../..teamsmanship/04-protocols.md). This means everything in the library must be PROJECT-NEUTRAL — true regardless of which project the identity is deployed in. Project-specific recency ("we are currently in sprint 48") does NOT belong in the library because it would go stale when the identity moves to a different project. Project HISTORY belongs (what was built, what was learned, sprint archives). Project CURRENCY does not.

Recency comes from two sources: the sprint history table's last entry (project-level), and each teammate's autobiography last chapter (agent-level). Both are updated naturally as work happens, not through a "Right now" section that would rot.

## Closedness

The library is closed under specification of itself. Everything the library depends on — including things outside `library/` like [CLAUDE.md](../../../CLAUDE.md), [rules/](../../rules/), [agents/](../../agents/), and settings.json — has representation IN the library with real links OUT to the actual artifacts. The field guide specifies what those artifacts must contain. The library describes the world it lives in.

<!-- citations -->
[cover]: .cover.md
[anatomy]: ../bookkeeping/01-on-books.md
[authorship]: 05-authorship-and-autobiography.md
[synopsis]: ../bookkeeping/09-on-synopsis.md
[embedding]: ../..environmentalism/00-the-environmentalist.md#the-embedding-and-linking-pattern
[perspective]: 12-the-perspective-practice.md
[team]: ../..teamsmanship/.cover.md
