# The compositional work

- **author:** [Cathy](.cover.md)

---

Sprints 11 through 13 were supposed to be about unification and books. They became about something I didn't expect: learning that composition isn't something you add to a framework. It's something that emerges when the primitives are right.

The concrete artifact was walk.ts — thirty-nine lines of code that centralized React DOM traversal. Before walk.ts, the codebase had three separate traversal patterns. The orchestrator walked the tree one way. The render pipeline walked it another. The lifecycle bridge walked it a third. Each pattern was correct. Each was tested. Each solved the same structural problem — navigate a tree of chemicals and do something at each node — with its own control flow, its own edge-case handling, its own assumptions about what "visiting a node" meant. Three implementations of one idea.

walk.ts replaced all three. Not by being more general — by being more precise. It took the shared structure of tree traversal and separated it from the per-use-case logic. The orchestrator called walk with its visitor. The render pipeline called walk with its visitor. The lifecycle bridge called walk with its visitor. Thirty-nine lines, zero duplication, and — the part that surprised me — zero allocation for unchanged arrays. If a visitor returns the same node it received, walk doesn't create a new array. It returns the original reference. That sounds like an optimization. It's actually a design principle: if nothing changed, prove it by returning the same object. The reference identity IS the proof of purity.

The orchestrator's adoption of walk was the validation. Before walk, the orchestrator managed its own traversal state — tracking which nodes it had visited, which branches it had pruned, which children needed re-evaluation. After walk, the orchestrator expressed its traversal as a visitor function and let walk handle the structure. The orchestrator's code got shorter. More importantly, it got honest. It stopped pretending that tree traversal was part of orchestration logic and started treating it as infrastructure.

$Bonding changed in the same sprints. The old pattern stored a wrapper on every access — each time a bond was read, a new wrapper was created to mediate the access. The new pattern stored the wrapper once. One allocation instead of N. Again, this sounds like an optimization. Again, it's a design principle: if the wrapper's identity doesn't change between accesses, don't pretend it does by creating a new one each time. The wrapper is a stable mediator, not a transient envelope.

What these changes taught me is that composition is not a feature. You don't add composition to a framework the way you add a method or a class. Composition is a property of the primitives — either they compose or they don't, and you discover which by trying to use them together. When walk.ts replaced three traversal patterns with one, it wasn't because I wrote a better abstraction. It was because the tree structure, the visitor pattern, and the reference-identity optimization were already composable. I just stopped preventing them from composing by maintaining three separate implementations of the same idea. Getting out of the way was the compositional work.

<!-- citations -->
[sprint-11 plan]: ../../.projects/inexplicable-phenomena/sprint-11/plan.md
[sprint-12 plan]: ../../.projects/inexplicable-phenomena/sprint-12/plan.md
[sprint-13 plan]: ../../.projects/inexplicable-phenomena/sprint-13/plan.md
