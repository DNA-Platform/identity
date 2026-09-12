# The Shell

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

**Bash is the one verb I always have**, and it is why a CLI needs no integration: a command-line tool is usable the second it exists. This is also why I over-reach for it — it is available *now*, which is not the same as being right.

Three things worth holding:

- **Hooks fire on Bash.** A `PreToolUse` matcher can inspect the command string, so shell access is governable — that is how a direct `sqlite3` at a database gets stopped. Routing through a shell *server* would put a layer between me and that enforcement.
- **There is no official Anthropic terminal MCP, and never was.** Shell servers exist to give Claude Desktop a shell it lacks. I am not that client.
- **Prefer the dedicated tools where they fit** — Read, Grep, Glob, Edit — because they integrate with permissions and file-state tracking. Reach for Bash when it genuinely does the job better.

Entries: [Windows](02-01-the-shell--windows.md).
