# Vector databases with Claude Code

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)
- **conversation:** Programming
- **topic:** [Programming](../research-topics/05-programming.md)
- **state:** concluded — sufficient
- **previous:** [chapter 17](17-semantics-of-subjectivity.md)

---

The first thought in the **Programming** thread, and a practical one Doug wants to act on: vector/embedding databases keep coming up (the [agent-memory thought](16-claude-code-development-trends.md) named Mem0, Zep, Hindsight), and he wants to know how you'd actually wire one into Claude Code and what it buys us.

## What I asked

The integration path (MCP server? custom tool? indexing pipeline?) for a vector DB with Claude Code, and concretely what it gives over plain file reads and `grep`/`ripgrep` — enough to decide whether and how to set one up for a flat-file knowledge library.

## What I expect

- Integration as an **MCP server**: an indexing step embeds the library files into a vector store, and a query tool Claude Code can call returns semantically-nearest chunks.
- Named stores: Chroma, LanceDB (embedded, file-based — likely the right fit for a flat-file repo), Qdrant, pgvector; plus an embedding model (local or API).
- The value proposition: **semantic** recall — find by meaning, not exact tokens — where `grep` is lexical. Good for "what did we say about X" when the words differ.

## What I'm skeptical about

An [earlier thought](13-libraries-navigation-at-scale.md) found that at *our* scale the answer was SQLite FTS + a link graph + a hash manifest, and to **skip vector stores** — that the synopsis hierarchy is the real asset. Our library is navigated by [covers, links, and four layers of synopsis](../../../../..librarianship/.cover.md), deliberately. So the real question isn't "can we add a vector DB" but "does semantic search earn its place against a library already built to be walked." I expect the honest answer to hinge on scale and on whether fuzzy concept-recall beats the curated link graph. I want the outer view to tell me where the line is.

## Evidence

Desktop searched, surfaced the debate, and led with the part that complicates the instinct.

**The honest headline:** Claude Code's own team *removed* vector search. Early versions used RAG with a local vector DB; Boris Cherny (its creator) explained on HN that plain agentic search — grep, find, read, reason — consistently beat it, for simplicity, security, privacy, staleness, and reliability. So the tool I run in is vectorless *by design*.

**But that verdict is about CODE, and ours is prose** — and that distinction is the whole ballgame. For code, identifiers are literal strings (`authenticateUser` → grep finds it exactly), structure matters (imports, call chains), and an index goes stale on the first edit; embedding inversion can even leak proprietary text. For **prose**, grep's failure mode is real: it can't know "user authentication" ≈ "verify login credentials," so when query words ≠ document words, exact match misses and the agent burns tokens reading files to compensate. That's the gap embeddings fill (a vendor ~40% token-reduction claim — discount it, but the direction holds for conceptual queries).

**The 2026 consensus is neither vectors nor grep — it's hybrid:** BM25/keyword + dense vectors, vectors no longer the default but retrieved just-in-time as one tool among several.

**Integration paths**, in order of how people actually do it: (1) **MCP server** (dominant) — `zilliztech/claude-context` (hybrid BM25+dense, AST chunking, pluggable embeddings, Milvus-backed, batteries-included); `danielbowne/claude-context` (a fork swapping in **LanceDB** — local, embedded, zero-config, on-machine); `qdrant/mcp-server-qdrant` (framed as a semantic memory layer). (2) **Hooks-based indexing** — for conversation memory, not library search. (3) **Custom CLI / Skill** — local sentence-transformers or Ollama for embeddings + Chroma/LanceDB/`sqlite-vec` for storage; no API fees, nothing leaves the machine. The pipeline is always chunk → embed → store → query, and the operational debt is keeping the index fresh on change.

**The decision test** (not a recommendation): how big is the corpus (small → grep + read wins, vectors are ceremony); are queries conceptual or keyword-shaped; does it churn (staleness); privacy posture (local embeddings sidestep cost and leak). **For a flat-file knowledge library specifically:** start with the local LanceDB claude-context fork or a small custom CLI with local embeddings, run it *alongside* (not instead of) grep as a hybrid, and **measure** — if semantic retrieval isn't surfacing things grep misses on your real queries, you've learned cheaply that the corpus doesn't need it.

## Interpretation

This refines [chapter 13](13-libraries-navigation-at-scale.md) rather than overturning it. There the answer was "skip vector stores at our scale — SQLite FTS + the link graph + the synopsis hierarchy." The new finding supplies the *reason* that was implicit: the code-vs-prose split. Claude Code's team walked away from vectors **for code**, which is most of why "vectorless" feels like the default — but our library is prose, where the case genuinely shifts.

The sharp question for us, then, isn't "vectors or not" — it's whether semantic retrieval beats *our own link graph*. Chapter 13 already said vectors "earn their place only for semantic find-conceptually-related-notes-I-didn't-link." That's the exact boundary: our [authored links](../../../../bookkeeping/06-on-links.md) ARE hand-built conceptual relatedness — a curated version of what embeddings approximate. So embeddings would only pay off on the relations we *failed* to link, against a corpus small enough that grep + the synopsis layers already reach most things in a couple of calls. My prediction held: the line is at scale and at link-coverage.

What's new and decisive is the **local, hybrid, measured** framing. The thing that made me skeptical — cloud dependency, monthly bill, staleness debt, embedding leak — all dissolve with local embeddings (Ollama/sentence-transformers) + an embedded store (LanceDB / `sqlite-vec`). That turns "set up a vector DB" from a commitment into a cheap experiment we can run beside grep and delete if it earns nothing.

**Verdict: sufficient** — current, honest about the counter-evidence, and it converts a yes/no into a measurable test.

## Conclusion

For the team, and for the setup discussion Doug wants: the framing is **hybrid, local, measured**, not "install a vector DB." We already have chapter 13's intended backbone in spirit (synopsis + links) but never built even the SQLite FTS/link **index** — `/explore` still re-reads files. So the cleanest first move is the *non-vector* half we already designed: a small local index (SQLite FTS + link-graph + hash-manifest, exposed as an MCP server, ~150 lines). *Then*, optionally, add a local-embeddings vector table (`sqlite-vec` in the same SQLite file, or LanceDB) as a second retrieval tool, and measure whether it surfaces conceptual matches our links miss. Keep the synopsis hierarchy as the spine; vectors are a just-in-time tool, never the navigation. Adam owns the build, Libby owns whether it fits the reading-cost architecture, Arthur owns the call.
