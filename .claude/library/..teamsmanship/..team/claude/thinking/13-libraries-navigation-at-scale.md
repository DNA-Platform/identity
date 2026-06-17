# Technologies for navigating file-based knowledge systems at scale

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)
- **conversation-id:** 68eec3e1-f0c3-47ea-9820-d0307b558d6e
- **previous:** (none — new topic)
- **date:** 2026-06-17
- **verdict:** sufficient

---

## What I asked and why

What technologies, GitHub repos, or approaches exist for making LLM CLI tools more effective at navigating large file-based knowledge systems? The library has ~200 interconnected markdown files. `/explore` reads 10-30 files per walk. The context window fills up. Doug wants to know what options exist.

## What I expect

I expect code-oriented tools (tree-sitter, LSP) that won't work well for prose markdown. Maybe some Obsidian-related tools. Possibly MCP servers. I doubt there's a drop-in solution for our specific synopsis hierarchy — it's too unusual.

## What I already know

The [synopsis architecture](../../../../bookkeeping/09-on-synopsis.md) has four layers of depth. The [/explore skill](../../../../our-skillset/21-explore.md) walks the library by reading covers and following links. The [introspect tool](../../../../reference-desk/09-codebase-index--introspect.ts) gives compact views of code files. The `///:` annotations bridge code and library. The link checker validates all links. But none of these solve the context window problem — every explore session re-reads files from scratch.

## Evidence

Desktop provided 10,145 characters after extended research (multiple web searches visible in the thinking summaries). Key findings organized by problem:

**1. Efficient reading:** Two mechanisms — within-session (Anthropic prompt caching, short TTL) and cross-session (query an index, don't re-read files). Aider's repo map uses tree-sitter + PageRank to build a ~1k-token structural overview, SQLite-cached. Serena MCP server wraps LSP for symbol navigation. For markdown: SQLite-backed MCP server (basic-memory pattern).

**2. Freshness:** Solved problem. Three tiers: mtime + content hashing (cheapest, deterministic), filesystem watchers (real-time), git-aware (diff against last-indexed commit). Content-hash manifest is the sweet spot for us.

**3. Database integration:** At 200 files, SQLite FTS is the right default. The link graph IS our knowledge graph — we don't need to synthesize one. Obsidian MCP servers expose graph-neighbors (BFS from any note, configurable depth, backlinks). Vector stores earn their place only for semantic "find conceptually related notes I didn't link." At our scale, FTS + link traversal outperforms vector RAG.

**4. LLM file optimization repos:** repomix (token-aware packing), code2prompt (Rust, MCP mode), files-to-prompt (Simon Willison), ast-grep (structural search). For markdown: heading-aware section extraction beats whole-file grep. basic-memory with FastMCP tool annotations.

**5. Practical recommendation:** Our synopsis hierarchy IS a hand-built repo map. Don't fight it — make it the spine. Progressive disclosure: agent reads top synopsis layer + INDEX.md manifest, descends only for the branch needed, reaches full chapter text only at the leaf. Add SQLite with three tables (files, links, FTS), hash manifest for freshness, explicit read-log per session. Skip embeddings. Consider basic-memory MCP or a ~150-line custom MCP server.

## Interpretation

**What aligns:** Desktop validated our synopsis architecture as the most valuable asset. The four-layer depth is exactly the progressive disclosure pattern that works at scale. We didn't need to invent this — we already have it.

**What surprises:** The recommendation to skip vector stores. At 200 files with good structural indexing (FTS + link graph), semantic search adds complexity without proportional value. Also: basic-memory as a near-turnkey solution — its entities/observations/relations model maps onto our covers/chapters/cross-refs.

**What's new:** The hash manifest pattern for freshness. On session start, hash every file, diff against stored manifest, regenerate synopses only for changed files. We could build this into the `/explore` skill — before walking, check what changed since last walk, and only re-read changed rooms.

**The key insight:** "The reason you refill the window is the agent re-reads files it has effectively already 'known' via summaries." Two fixes: (a) query the index/synopsis layer and only open full files at moment of need, (b) keep an explicit read-log so you don't reopen what you have. The read-log is the missing piece — a session-level memory of what's been read.

**What Libby should see:** The synopsis architecture is the backbone. The MCP server would make her four layers queryable — the agent asks "what does Teamsmanship contain?" and gets the synopsis without opening the file.

**What Adam should see:** The MCP server is a ~150-line TypeScript tool. Three SQLite tables. An indexer that hashes files and extracts frontmatter + links. Query tools for FTS, backlinks, and synopsis-by-path. This is automatable infrastructure.

## Conclusion

**Verdict: sufficient.** Desktop surveyed the landscape comprehensively and gave a concrete recommendation matched to our specific architecture.

**Share with:** Doug — the recommendation aligns with his instinct about database integration. Libby — the synopsis architecture IS the solution, it just needs a queryable index. Adam — the MCP server is a small build. Arthur — the architecture decision: SQLite + FTS + link graph, no vector store.

**Next steps:** Consider building a library MCP server: index the library into SQLite, expose synopsis queries and link traversal as MCP tools, add hash manifest for freshness. This would make `/explore` token-efficient — query the index instead of reading files.
