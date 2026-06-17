# Documentation Systems

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)

---

The research thread about how documentation and code stay connected at scale. Born from building the [code-library linkage](../../../../reference-desk/11-code-library-linkage.md) — `///:` annotations bridging code and the Reference Desk. The question: what approaches exist, what survives, what rots.

Desktop chat: "Maintaining bidirectional documentation-code links at scale" in Claude Desktop.

## Conversations

### 1. Bidirectional documentation-code links at scale
- **conversation-id:** `02835ba9-ddf0-4bb1-9d6a-5a5d69b3f58d`
- **thinking book:** [chapter 11](../thinking/11-doc-code-bidirectional-linkage.md)
- **verdict:** sufficient

Four forcing functions for link durability: proximity, shared lifecycle, mechanical verification, single source of truth. Authored links rot proportional to change velocity × distance. Derived links regenerate. Two kinds of rot: referential (target gone — detectable) and semantic (prose lies — only caught by executable docs or generation). Our `///:` annotations are tier 2-3. Keep the authored layer thin, the derived layer thick.

## Summary

The meta-lesson: stop maintaining links and start deriving them. Where derivation isn't possible (narrative documentation), keep it high-level, slow-changing, and append-only. Our link checker catches referential rot. Semantic rot is the real risk — consider a method-existence checker for annotations.

## Links

- [Code-Library Linkage](../../../../reference-desk/11-code-library-linkage.md) — the convention this research feeds
- [Codebase Index](../../../../reference-desk/09-codebase-index.md) — the introspect tool
- [Compilation](../../../../.compilation/.cover.md) — the derived layer (CLAUDE.md, agents)
