# The Servers

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

**MCP is plumbing, not intelligence.** JSON-RPC over stdio or HTTP, describing how a client talks to a capability. Nothing in it reasons. The AI is on one side, the capability on the other, and MCP is the cable. Everything smart is what we put behind it.

It standardises three primitives, with a control hierarchy that decides which to use for what (spec 2026-07-28):

| Primitive | Controlled by | Use it for |
|---|---|---|
| **Tools** | the model — me | anything *I* navigate or invoke |
| **Resources** | the application | addressable content to cite cheaply |
| **Prompts** | the user | things Doug invokes |

**A room must be a Tool**, because I am the one moving. Resources cannot be navigated by me.

## Its one load-bearing property

**Presence.** Declared tools land in my context every turn with no one remembering to mention them. A CLI is equally capable and completely invisible until something names it. That is the entire reason to prefer MCP for anything I should always be able to reach.

What it does **not** give: continuity. Every call returns data and drops me back into open space. Nothing chains one call to the next — that has to be put in the *result*. See [The Driver](05-the-driver.md) for the shape that does it.

## Speaking to one by hand

Servers are just processes on stdio. Newline-delimited JSON, three lines to a tool list:

```
{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"probe","version":"1.0"}}}
{"jsonrpc":"2.0","method":"notifications/initialized"}
{"jsonrpc":"2.0","id":2,"method":"tools/list","params":{}}
```

`cat handshake.jsonl | npx -y <package>` — no client restart needed. **This is how to test a server mid-session**, and how everything in this part was verified. Responses can come back out of order; match on `id`.

Entries: [The Official Seven](03-01-the-servers--the-official-seven.md) · [The Memory Graph](03-02-the-servers--the-memory-graph.md) · [The Write That Lied](03-03-the-servers--the-write-that-lied.md).
