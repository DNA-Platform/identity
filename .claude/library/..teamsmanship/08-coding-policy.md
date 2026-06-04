---
title: "Coding Policy"
author: "[Libby](..team/libby/libby-and-the-tended-garden/.cover.md)"
---

# Coding Policy

Libby: The [coding policy book](../coding-policy/.cover.md) defines how the team writes code in $Chemistry. From the team's perspective, shared coding conventions are a form of collaboration — they are the vocabulary that lets eight agents contribute to the same codebase without style drift.

Libby: The `$` prefix is the most visible convention. It separates intrinsic identity from extrinsic context — a membrane that Doug discovered through element examples and that now shapes every reactive pattern in the framework. When all eight agents use `$` the same way, the code reads as one voice even though many hands wrote it.

Libby: The reactive patterns — scope-tracked getters, object-pure views, safe composition — are not just implementation choices. They are the shared mental model that lets Cathy build framework internals, Phillip build app surfaces, and Queenie test both without anyone needing to explain how state flows. The pattern IS the shared understanding.

Libby: The three code layers (framework source, app code, tests) map directly to agent territories. Cathy owns `chemistry/src`, Phillip and Gabby own `chemistry/app`, Queenie owns `chemistry/tests`. Coding policy ensures that code crossing these boundaries reads the same way regardless of which agent wrote it.

Libby: Doug's corrections — camelCase always, no ALL_CAPS constants, `next()` not `await()`, string enum phases — are encoded here so they survive compaction. Every convention in this book started as a short redirection from Doug that the team learned to follow. The policy is the sediment of those corrections.
