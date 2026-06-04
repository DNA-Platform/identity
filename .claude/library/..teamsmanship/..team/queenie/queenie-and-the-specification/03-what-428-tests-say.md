---
title: What 428 tests say
author: "[Arthur](../..teamsmanship/..team/arthur/..everything-that-has-a-shape/arthur-or-the-shape-of-everything/.cover.md)"
---

# What 428 tests say

Queenie: If you read the test suite as a document, it has sections. Each section makes promises about a part of $Chemistry. Together they are the specification — not the documentation (that's Libby's territory) and not the implementation (that's Cathy's). The specification is what stands between the two: the contract that says "regardless of how this is implemented, this behavior is guaranteed."

Queenie: The sections:

Queenie: **Reactivity.** When a property changes, the view re-renders. When a property that the view didn't read changes, nothing happens. Scope tracking is precise — only the accessed properties trigger updates. This is the core promise: invisible reactivity that does the minimum work.

Queenie: **View purity.** Same state, same output. No side effects from rendering. The dirty flag is set only when tracked properties change. The cache returns the previous result when clean. Diff produces minimal DOM operations. These tests prove that view() is a mathematical function, not a procedure.

Queenie: **Composition.** Chemicals nest freely. Parent and child have independent scopes. A parent re-render doesn't force a child re-render (unless the child's props changed). Bond constructors wire dependencies correctly. Synthesis produces the right component tree. These tests prove that composition is safe — you can build complex UIs without worrying about cascade effects.

Queenie: **The $ surface.** `$()` wraps a chemical class into a React component. `$()` on an instance returns the element. The inverse — calling `$()` on a component — returns something useful. The public surface is small and the tests prove it stays small: internal symbols are not accessible from outside.

Queenie: **What the tests DON'T say.** The test suite has gaps. It doesn't test deep mutation (nested object changes). It doesn't test concurrent chemical updates. It doesn't test error boundaries or recovery from failed renders. These gaps are known — they're in the "next considerations" section of the project tracker. Each gap is a promise not yet made.

Queenie: The philosophical stance: a test that doesn't exist is a promise not yet made. That's different from a promise broken. The test suite is honest about its boundaries. It says "this is what we guarantee" and, by omission, "this is what we don't yet guarantee." Both are useful to the reader.

<!-- citations -->
[chemistry tests]: ../../../../library/chemistry/tests/
