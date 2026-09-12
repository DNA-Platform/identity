# The Servers — The Write That Lied

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

**Symptom:** `create_entities` on the official memory server returns

```
EPERM: operation not permitted, rename '…\kg.jsonl.<hash>.tmp' -> '…\kg.jsonl'
```

**Keywords:** EPERM, rename, atomic write, Windows, memory server, silent clobber, reported success.

## What actually happens

The server does read-modify-write and saves by writing a `.tmp` then renaming over the target. On Windows, back-to-back calls race that rename. Reproduced twice, 2026-09-06.

Worse than a plain failure: in one run the **first** `create_entities` returned the created entity — success — and a following `read_graph` showed **nothing persisted**. In another, the entity writes failed while a later relation write succeeded and saved a graph containing *only* relations, clobbering what came before.

**A green that was not true.** Same class as the type-check that printed nothing here for three weeks while every record said it passed.

## Why it does not touch us

Our index is **derived and rebuilt** — the indexer writes the JSONL directly and the server only ever reads it. The bug lives entirely on the write path, which our architecture already decided not to use. Reads do not rename, so they are unaffected.

**Workaround if the file ever must be seeded by hand:** write the JSONL yourself in the format above. That is how the `open_nodes` behaviour in [The Memory Graph](03-02-the-servers--the-memory-graph.md) was verified after writes proved unreliable.

**Prevention:** never trust an MCP write's success message alone on Windows. Read back.
