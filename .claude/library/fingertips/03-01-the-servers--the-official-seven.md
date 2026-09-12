# The Servers — The Official Seven

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

**Doug's standing rule: "Always assume that Anthropic is the team that makes tools for you."** Check `modelcontextprotocol/servers` before installing anything community. Given 2026-09-06 after I registered two community packages without looking.

## Maintained (as of 2026-09-06)

`Everything` · `Fetch` · `Filesystem` · `Git` · `Memory` · `Sequential Thinking` · `Time`

Package naming: TypeScript is `@modelcontextprotocol/server-<name>` on npm; Python is `mcp-server-<name>` on PyPI (run with `uvx`). All seven are registered in [`.mcp.json`](../../../.mcp.json).

## Archived — do not use

Moved to `servers-archived` during 2025: **SQLite**, **PostgreSQL**, GitHub, GitLab, Google Drive/Maps, Puppeteer, Redis, Sentry, Slack, Brave Search, EverArt, AWS KB.

**SQLite specifically: archived *and* carrying an unpatched SQL-injection flaw**, while still taking ~13K weekly downloads. `@modelcontextprotocol/server-sqlite` does not exist on npm at all, so every `npx` line for it 404s. The community replacement most guides point at is `mcp-server-sqlite-npx` — five tools: `read_query`, `write_query`, `create_table`, `list_tables`, `describe_table`.

## The two gaps with no official answer

- **No terminal/shell server** — there never was one. They exist to give Claude Desktop a shell; I already have Bash.
- **No SQL server** — archived, as above.

Where no official version exists, **say so plainly** rather than quietly substituting a community package.
