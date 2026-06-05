# On Rules

- **specification:** Rule
- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

A rule is a platform-enforced convention. It lives at `.claude/rules/*.md`. Claude Code loads it automatically — globally or when a file matching its path scope enters context. Rules are the wiring between the codebase and the library: they ensure the right knowledge is present when the right code is touched.

## The embedding-and-linking pattern

Every rule follows the same pattern described in [The Platform Interface](../the-platform-interface/01-the-platform-interface.md#the-embedding-and-linking-pattern): embed the minimum for the platform to act, then link to the library for depth. A rule says WHAT the convention is in a few sentences — enough to enforce it. The library book it links to says WHY the convention exists, WHEN it applies, and WHAT the full specification is.

This means rules are intentionally thin. Every word in a rule costs context budget — the platform loads them, so their content occupies the window. The library is read on demand. The rule is the enforcement. The library is the understanding.

## Path-scoped rules

Rules with `paths:` frontmatter load only when Claude opens a file matching the pattern. This is how [code territory](../..teamsmanship/05-code-territory.md) wires knowledge to code. When Claude opens a file in `library/chemistry/src/`, a path-scoped rule can load that says: this is Cathy's territory, here's the [coding policy](../coding-policy/.cover.md), here's the reactive model. The agent is immediately connected to the right knowledge for the code they're touching.

Path-scoped rules should exist for every significant territory in the [code territory registry](../..teamsmanship/05-code-territory.md). The territory defines WHO owns a path. The rule enacts that ownership by loading the right context when files in that path enter the window.

## Global rules

Rules without `paths:` frontmatter load every session. They apply universally. The current global rules demonstrate the pattern:

**`team.md`** — links to the [library](../..librarianship/.cover.md) and [team](../..teamsmanship/.cover.md) catalogues. Ensures every session has a path into the library. Tells agents to read their autobiography after compaction.

**`voice.md`** — embeds the nametag convention from [Voice and Nametags](../teamspeak/01-voice-and-nametags.md). Arthur is the default voice. Every paragraph gets a tag. This rule must carry enough for the convention to work WITHOUT following the link — because the convention applies from the first paragraph of every session.

## Thickness calibration

Thick enough to work without following links. Thin enough to preserve context budget. The rule carries the enforcement — the minimum an agent needs to comply. The library carries the rationale — the full explanation an agent reads when they need to understand WHY.

When a rule's content drifts from the library book it links to, a reader following the link discovers the drift. The link IS the consistency check. The library is always the source of truth. When the library changes, the rule is recompiled to match.

## The compilation pattern

A compiler could read the [code territory](../..teamsmanship/05-code-territory.md) assignments and the relevant library books, then generate `.claude/rules/*.md` files. Path-scoped rules are generated from territory assignments. Global rules are generated from team-wide conventions. The specification defines what each rule must look like. The compiler assembles the content.

<!-- citations -->
[platform-interface]: ../the-platform-interface/01-the-platform-interface.md
[code-territory]: ../..teamsmanship/05-code-territory.md
[voice-convention]: ../teamspeak/01-voice-and-nametags.md
[librarianship]: ../..librarianship/.cover.md
[teamsmanship]: ../..teamsmanship/.cover.md
[coding-policy]: ../coding-policy/.cover.md
