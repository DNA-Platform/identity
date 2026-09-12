# The Servers — The Memory Graph

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

`@modelcontextprotocol/server-memory` — official, maintained (v2026.8.31). A knowledge graph in a JSONL file. **This is the closest thing we have to a walkable library**, and it needs no code from us to serve rooms.

## The model

```
{"type":"entity","name":"…","entityType":"…","observations":["…"]}
{"type":"relation","from":"…","to":"…","relationType":"…"}
```

Storage: one JSONL file at `MEMORY_FILE_PATH`. Ours: `.claude/library.jsonl`.

Nine tools: `create_entities` · `create_relations` · `add_observations` · `delete_entities` · `delete_observations` · `delete_relations` · `read_graph` · `search_nodes` · `open_nodes`.

## The fact that matters — verified, not read

`open_nodes(["bookkeeping"])` returned the entity **plus four relations: two outgoing and two incoming.** The filter is `||`, not `&&`:

```js
graph.relations.filter(r => names.has(r.from) || names.has(r.to))
```

**One call gives a room, its forward exits, and its backlinks.** That is the whole navigation primitive — and backlinks are how a thing finds its own summary, since a synopsis is the catalogue entry that points at it. Markdown could never answer that without a grep across 696 files.

## The two footguns

- **`read_graph` takes no arguments and returns everything.** On a full library index that floods the context. Never call it. A `PreToolUse` matcher on `mcp__memory__read_graph` can deny exactly that one tool while leaving rooms reachable.
- **`search_nodes` is case-insensitive *substring*** over name, entityType and observations — grep, not meaning. "reactive scope" will not find "dependency tracking".

## Mapping our spec onto it

| Our spec | Theirs |
|---|---|
| context | `observations` |
| catalogue | a relation |
| meaning | a relation |
| the room's kind | `entityType` |
| room + exits + backlinks | `open_nodes(name)` |

Names are the ids — path-derived (`bookkeeping/01-on-books`), because the index is **rebuilt from scratch** and synthetic keys would rot on every build. Relations carry **no ordinal**, so chapter order must be encoded elsewhere.
