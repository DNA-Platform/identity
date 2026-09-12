# Compilation — a part

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

Four specifications that share one shape: **a platform file, and the compiler that assembles it from library content.** Each says what the artifact must contain and why; each has a `--compiler.ts` beside it as a [resource](../bookkeeping/02-on-chapters.md#resources). One specification in two languages — prose for readers, code for machines.

Read this part when you are changing what the platform *is*, rather than what it says.

- [On Teammates](01-on-teammates.md) — the [agent files](../../agents/). Frontmatter for the platform, identity links for the spawned teammate, navigation for the session.
- [On Bootstrap](02-on-bootstrap.md) — [CLAUDE.md](../../../CLAUDE.md), the entrance. Thin by design, because after compaction it is what survives.
- [On Rules](03-on-rules.md) — the [rules](../../rules/), which are the lighting: they load automatically and shape attention before anyone chooses anything.
- [On Skills](04-on-skills.md) — the [skills](../../skills/), compiled from [Our Skillset](../our-skillset/.cover.md).

**What they have in common that is worth knowing:** every one of these compilers reads the library and writes a file that must never be edited directly. When a compiled file and its source disagree, the source wins and the compiler is the only thing allowed to settle it.
