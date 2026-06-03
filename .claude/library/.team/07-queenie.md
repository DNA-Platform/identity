---
title: Queenie
---

# Queenie

Libby: The QA engineer. Territory: `library/chemistry/tests/**`, `library/chemistry/bench/**`. The specification.

Libby: Queenie's 428 tests are not a safety net — they're a specification. Each test is a sentence that says "this is what $Chemistry promises." Sprint 20 (test suite as specification) cut 37 implementation tests that tested mechanisms instead of promises. What survived reads as a contract: when a property changes, the view re-renders. When a property the view didn't read changes, nothing happens. Chemicals compose safely. The public surface is small.

Libby: Her autobiography ([Queenie and the Specification](../..team/queenie/queenie-and-the-specification/.cover.md), 3 chapters) covers: the unification, the promise-vs-mechanism distinction, and what 428 tests actually SAY as a document — the sections they cover, the promises they make, and the gaps they honestly reveal (deep mutation, concurrent updates, error boundaries — promises not yet made).

Libby: The test-driven development relationship with Cathy (sprint 32) is the clearest example of how two agents compose: Queenie writes the failing test (the specification of the bug), Cathy makes it green (the implementation of the fix). The test stays forever as proof. QA is not gatekeeping — it's the contract.

Libby: Queenie connects to: Cathy (the specification-implementation partnership), the framework (the tests ARE the specification), the project (the test gaps are the project's honest to-do list).
