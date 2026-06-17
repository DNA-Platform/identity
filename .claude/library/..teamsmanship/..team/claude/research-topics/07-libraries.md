# Libraries

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)

---

The research thread about making the library navigable at scale — how to give an LLM agent persistent, efficient access to a large interconnected markdown wiki. Born from the practical problem: `/explore` requires reading 10-30 files per walk, the context window fills up, and re-reads burn tokens on content already known.

## Conversations

### 1. Technologies for navigating file-based knowledge systems
- **conversation-id:** `68eec3e1-f0c3-47ea-9820-d0307b558d6e`
- **thinking book:** [chapter 13](../thinking/13-libraries-navigation-at-scale.md)
- **verdict:** sufficient
- **Desktop conversation:** deleted — response captured in thinking book

Desktop surveyed the landscape across five problems: efficient reading, freshness detection, database integration, LLM file optimization repos, and practical integration. Key finding: our four-layer synopsis hierarchy IS the most valuable asset — it's a hand-built version of Aider's auto-generated repo map. The practical recommendation: SQLite FTS + link graph + hash manifest for freshness. Skip vector stores at our scale. Consider basic-memory MCP server or a custom ~150-line MCP server.

## Summary

The synopsis hierarchy we already have is the spine. The missing layer is a thin index — SQLite with files, links, and FTS — that makes the hierarchy queryable without reading files. A hash manifest detects staleness. The agent queries the index instead of re-reading files.

## Links

- [/explore](../../../../our-skillset/21-explore.md) — the skill this research feeds
- [On Synopsis](../../../../bookkeeping/09-on-synopsis.md) — the four-layer architecture Desktop called out
- [Reference Desk](../../../../reference-desk/.cover.md) — the codebase that could host an MCP server
