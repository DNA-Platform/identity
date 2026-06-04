---
title: The promise model
author: "[Arthur](../..teamsmanship/arthur/..everything-that-has-a-shape/arthur-or-the-shape-of-everything/.cover.md)"
---

# The promise model

[Book: [Test Architecture](.cover.md)]

Queenie: A promise test says what the framework guarantees. A mechanism test says how the framework currently implements that guarantee. The distinction sounds academic until you try to refactor. Promise tests survive. Mechanism tests shatter. Sprint 20 taught us which kind we had too many of.

Queenie: The audit was straightforward. I read every test and asked: if Cathy rewrote the reactive internals tomorrow -- same behavior, completely different implementation -- would this test still pass? If yes, it's a promise. If no, it's a mechanism. 37 tests were mechanisms. They tested that `_reactivate` was called, that scope flags were set, that microtask queues were drained in a specific order. All true. All implementation details. All barriers to the next refactor. We deleted them.

Queenie: The surviving 286 tests -- and the 142 added since -- organize into five sections. Each section covers a domain of promise. **Reactivity**: when state changes, the view updates. This is the core contract -- the thing that makes $Chemistry a reactive framework rather than a rendering library. **View purity**: the view function reads state but doesn't mutate it, doesn't allocate new chemicals, doesn't produce side effects. Purity means the framework can call `view()` multiple times per cycle without changing behavior. **Composition**: chemicals contain other chemicals, and the parent-child relationship is reactive. Changes propagate through the tree. **The $ surface**: the public API that starts with `$` -- `$Chemical`, `$Reaction`, `$Listener`, the lifecycle methods. These tests promise that the developer-facing names and signatures are stable. **Benchmarks**: performance promises. Not "this must run in X milliseconds" but "this operation must complete without observable delay at these scales."

Queenie: The file names encode the section. Reactivity tests live in files named `reactivity-*.test.ts`. View tests in `view-*.test.ts`. Composition in `composition-*.test.ts`. The naming convention means you can read the test directory listing as a table of contents. Each file is a chapter. Each test within the file is a sentence. The specification reads top to bottom if you know the order: reactivity first (the foundation), then view purity (the rendering contract), then composition (how chemicals relate), then the $ surface (the public API), then benchmarks (the performance envelope).

Queenie: Test-driven development with Cathy follows a protocol. I write the failing test first. The test is the specification of the bug or the feature -- it says "this behavior should exist and doesn't" or "this behavior exists and shouldn't." Cathy makes it green. The test stays forever. This is the cycle that sprint 32 formalized: three Lab bugs surfaced by Phillip, three failing tests written by me, three fixes implemented by Cathy. The failing test is the handoff mechanism between QA and engineering. It's unambiguous, reproducible, and permanent.

Queenie: The gaps in the suite are promises not yet made. Every `$PlannedCase` in the Lab that has no corresponding test is a gap. Every behavior Doug describes in a sprint plan that doesn't have a test is a gap. I track gaps not as failures but as the specification's frontier -- the boundary between what $Chemistry promises today and what it will promise next. A gap is not a bug. It's a sentence the specification hasn't written yet.

Queenie: Reading the test suite as a document requires one shift in perspective: the test name is the claim, and the test body is the proof. `"reactive property updates view"` is the promise. The `expect` calls inside are the evidence. If you read only the test names in order, you get the specification in plain English. If you read the bodies, you get the executable proof. Both readings are valid. Both are the specification. The architecture exists to make both readings coherent.

<!-- citations -->
[Queenie and the Specification]: ../queenie-and-the-specification/.cover.md
[chemistry tests]: ../../../../../library/chemistry/tests/
