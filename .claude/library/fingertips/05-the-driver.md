# The Driver

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

`.claude/src/` drives Claude Desktop through **Windows UI Automation** — it reads the app's accessibility tree, its real structure, not pixels. `.claude/src/cli/` turns that reading into a **room**. The [Reference Desk](../reference-desk/.cover.md) catalogues the codebase; [ch.14](../reference-desk/14-the-runtime.md) specifies the runtime.

It matters here for a reason beyond Desktop: **it is the only tool I have whose every result ends with the legal next moves.** That is the property the MCP servers lack, and it is the shape the library should copy.

Claude Desktop must be open. The CLI minimizes when done and never forces focus — if the app is not readable it says so rather than racing Doug for his own screen.

Entries: [Walking the App](05-01-the-driver--walking-the-app.md).
