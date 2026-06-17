# What approaches exist for maintaining bidirectional documentation-code links at scale?

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)
- **conversation-id:** 02835ba9-ddf0-4bb1-9d6a-5a5d69b3f58d
- **previous:** (none — new conversation)
- **date:** 2026-06-17
- **verdict:** sufficient

---

## What I asked and why

What approaches exist for maintaining bidirectional links between documentation and source code at scale? Specifically: Doxygen, Rustdoc, literate programming, doc-as-code systems. What survives and what rots? We just built the `///:` annotation system ([Code-Library Linkage](../../../../reference-desk/11-code-library-linkage.md)) and I wanted to know what else exists and what we should worry about.

## What I expect

I expect Doxygen/Rustdoc for API docs, some mention of literate programming as noble but impractical, and maybe some CI-based link checking. I doubt there's a clean solution for narrative documentation (the kind the Reference Desk contains).

## What I already know

We built `///:` annotations with markdown links from code to the [Reference Desk](../../../../reference-desk/.cover.md). The [link checker](../../../../..environmentalism/05-on-validation--check-links.ts) validates them. The [introspect tool](../../../../reference-desk/09-codebase-index--introspect.ts) displays them alongside the API. The direction is code → library (code references patterns), not library → code (which would be fragile).

## Evidence

Desktop provided 6,772 characters. The response organized the space by **forcing function** — what makes a link get revisited when one endpoint changes:

1. **Proximity** — doc next to the code (Doxygen, Rustdoc, JSDoc)
2. **Shared lifecycle** — co-versioned in same PR (doc-as-code, MkDocs)
3. **Mechanical verification** — CI fails on broken link (lychee, Sphinx nitpicky)
4. **Single source of truth** — both endpoints derived from one artifact (schema-first, Kythe/Glean)

Two kinds of rot: **referential** (target doesn't exist — mechanically detectable) and **semantic** (link resolves but prose no longer describes what code does — only caught by executable docs or generation from source).

The meta-lesson: **at real scale, stop maintaining links and start deriving them.** Authored links rot proportional to change velocity × distance. Derived links regenerate.

Narrative documentation ("how the system works as a whole") rots no matter what. Honest mitigations: keep it high-level and slow-changing, date it, treat it as append-only history.

## Interpretation

**What aligns:** Our `///:` annotations are tier 2-3 — shared lifecycle (same repo) with mechanical verification (link checker). That's good but not the strongest tier. The link checker catches referential rot. It cannot catch semantic rot.

**What surprises:** The clean taxonomy of forcing functions. Our design accidentally hit the right level: code → library direction means the links are "proximity-adjacent" (you see the annotation when editing the code) AND mechanically verified. But semantic rot is our real risk. When we refactor the gateway pattern, the `///:` annotation in `gateway.ts` will still link to the correct chapter — but if we don't update the prose describing what the gateway does, the annotation lies.

**What's new for us:** The doctest pattern. Our introspect tool outputs markdown — what if we could verify that the method signatures in the annotations match the actual code? Not full doctests, but a lightweight "the annotation claims this method exists — does it?" check. That would catch the most common semantic rot: describing a method that was renamed.

The schema-first / derived-links approach is what the [compilers](../../../../.compilation/03-compilers.md) already do. CLAUDE.md is derived from library content. Agent files are derived from autobiographies. Those links CAN'T rot because they're regenerated. The `///:` annotations are the one authored link layer we have. Worth keeping that layer thin and the derived layer thick.

**The narrative problem is ours exactly.** The Reference Desk IS narrative documentation — "how the system works as a whole." Desktop's advice: keep it deliberately high-level and slow-changing, date it, treat it as append-only. That's what we did with Pitfalls (append-only bug log) and History (append-only arc). The architecture chapters should aspire to the same — describe patterns, not implementations.

## Conclusion

**Verdict: sufficient.** Directly actionable for the code-library linkage design.

**Share with:** Adam — the semantic rot risk. Our link checker is tier 3 (mechanical) but semantic rot is the real killer. Consider a lightweight check: does the annotation reference methods that exist? Libby — the forcing function taxonomy as a way to think about library link health. Arthur — the meta-lesson about derived vs authored links.

**Future work:** A method-existence checker for `///:` annotations. Parse the annotation for method names, verify they exist in the file's actual API. Lightweight semantic rot detection.
