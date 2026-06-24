# On Platform Layout

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

Claude Code defines a standard project layout under `.claude/`. We add a few directories of our own as team conventions. And — the load-bearing distinction — the platform stores *runtime and session state* outside the project, not in `.claude/`. Knowing which is which prevents the mistake of hand-making a `.claude/` subdirectory to hold state the platform already keeps elsewhere.

## What `.claude/` contains as standard

Read by Claude Code (source: [settings docs](https://code.claude.com/docs/en/settings), [skills docs](https://code.claude.com/docs/en/skills)):

- `settings.json` — project settings, checked in and shared.
- `settings.local.json` — personal setting overrides, git-ignored, not shared.
- `agents/` — subagent definitions.
- `skills/` — agent skills (each a `SKILL.md` in its own folder).
- `commands/` — custom slash commands.
- `hooks/` — hook scripts run on lifecycle events.
- `output-styles/` — output-style definitions.
- `CLAUDE.md` — project memory loaded into context. (`.mcp.json`, at the project *root*, declares MCP servers.)

## What we add as team conventions

- `library/` — the team library: every [book](../bookkeeping/01-on-books.md), the whole knowledge base. Our data schema for knowledge.
- `rules/` — compiled platform conventions ([On Rules](03-on-rules.md)).

(`agents/`, `skills/`, `commands/`, `CLAUDE.md` are standard Claude Code locations that we *populate* by [compiling](01-on-teammates.md) from the library — the directories are the platform's, the contents are ours.)

## Compiled config vs runtime

This is the distinction that prevents the mistake. The project's `.claude/` is **config** — the standard files above plus the files we compile from the library. Claude Code's **runtime and session state is not there**; it lives under the user home, outside the project:

- `~/.claude/projects/<project-slug>/<session-id>.jsonl` — the full transcript of every session, one JSONL per session id, keyed by a slug that is the project path with separators flattened. **Each teammate's [brain](08-on-brains.md) session is one of these files** — native persistence is just this transcript on disk.
- `~/.claude.json` — per-project state and global CLI config.

These are the platform's runtime store: not knowledge, not authored, not catalogued — the machine's own record of what happened.

## The rule

**Runtime and session state is not knowledge, and it does not get a hand-made `.claude/` subdirectory.** The platform already stores transcripts and per-project state under `~/.claude/`; do not invent a project directory to hold or duplicate it. Knowledge — anything we want to *reference* — goes in a [catalogued book](../bookkeeping/01-on-books.md), never an ad-hoc folder. When a platform fact must be looked up, it becomes a chapter like this one. The data schema for knowledge is books; the data schema for runtime is the platform's, already chosen for us.

<!-- citations -->
[settings]: https://code.claude.com/docs/en/settings
[skills]: https://code.claude.com/docs/en/skills
[on-brains]: 08-on-brains.md
[books]: ../bookkeeping/01-on-books.md
