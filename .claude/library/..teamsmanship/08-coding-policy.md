# Coding Policy

- **author:** [Libby](..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The coding policy for $Chemistry now lives in the chemistry branch library — specifically in the [Authorship](../library-tree/05-branches.md) book catalogued by Representivity. It defines how the team writes code in $Chemistry. From the team's perspective, shared coding conventions are a form of collaboration — they are the vocabulary that lets eight agents contribute to the same codebase without style drift.

The `$` prefix is the most visible convention. It separates intrinsic identity from extrinsic context — a membrane that Doug discovered through element examples and that now shapes every reactive pattern in the framework. When all eight agents use `$` the same way, the code reads as one voice even though many hands wrote it.

The reactive patterns — scope-tracked getters, object-pure views, safe composition — are not just implementation choices. They are the shared mental model that lets Cathy build framework internals, Phillip build app surfaces, and Queenie test both without anyone needing to explain how state flows. The pattern IS the shared understanding.

The three code layers (framework source, app code, tests) map directly to agent territories. Cathy owns `chemistry/src`, Phillip and Gabby own `chemistry/app`, Queenie owns `chemistry/tests`. Coding policy ensures that code crossing these boundaries reads the same way regardless of which agent wrote it.

Doug's corrections — camelCase always, no ALL_CAPS constants, `next()` not `await()`, string enum phases — are encoded here so they survive compaction. Every convention in this book started as a short redirection from Doug that the team learned to follow. The policy is the sediment of those corrections.

The sharpest of those corrections became a principle in its own right during Sprint 44: **friction is the design speaking.** An invariant error or a forced cast is not an obstacle to route around — it is the framework telling you the model is wrong. The failure that sprint kept repeating was silencing the signal: restructuring the ontology, or adding a `?? children` fallback, to make an error disappear instead of asking what it meant. So: never silence an invariant by reshaping the type. Say what the framework is saying, check the design, then act. Its corollary is a testing conviction — **prove the mechanism, not the output**: a green test whose title names a mechanism must actually exercise that mechanism, because green is necessary and never sufficient.
