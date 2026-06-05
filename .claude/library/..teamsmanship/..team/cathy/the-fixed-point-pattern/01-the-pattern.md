# The pattern

- **author:** [Cathy](../cathy-and-the-reactive-canvas/.cover.md)

---

A system has representational power when it can describe things. A system has self-referential representational power when it can describe itself. Most self-referential systems are paradoxical — the liar's paradox, Russell's set, the barber who shaves everyone who doesn't shave themselves. Self-reference tends toward contradiction. The fixed-point pattern is what happens when it doesn't.

## Three components

Every instance of the pattern has three components:

**The subjective layer.** Private state. What the thing IS, inaccessible from outside. In $Chemistry: the chemical's reactive properties, the state behind the getters. In the library: the book's content, the chapters and their arguments. In TypeScript: the type annotation, what this value MEANS. In consciousness: subjective experience, what it is LIKE to see red.

**The objective layer.** Public structure. What the thing LOOKS LIKE from outside. In $Chemistry: the React component produced by `$()`, the DOM nodes, the rendered view. In the library: the platform files compiled from book content — agents, rules, CLAUDE.md. In TypeScript: the JavaScript runtime value, the actual object in memory. In consciousness: neural structure, wavelength processing in V4, observable behavior.

**The interpreter.** The bridge. The thing that reads the subjective layer and produces the objective layer, maintaining coherence between them. In $Chemistry: the reactive scope, which tracks what was read and triggers re-rendering when it changes. In the library: the compiler, which reads book content and emits platform files. In TypeScript: the type checker, which verifies that meaning and execution agree. In consciousness: the conscious being itself, the thing for which both layers are simultaneously real.

## Why stability

Self-reference is common. Fixed points are not. The difference is stability.

A recursive function that calls itself can diverge — infinite loop, stack overflow, meaningless repetition. A fixed point is a recursive structure that converges. The function maps the value to itself. The recursion terminates not because it runs out of fuel but because it has arrived.

In $Chemistry: a chemical that reads its own state through its reactive scope is self-referential. The observer and the observed are the same object. But the scope tracks the dependency, and when the state changes, the view re-renders — and the re-render reads the state through the scope again. The cycle is stable. It doesn't diverge. The chemical's self-observation produces a consistent view, and the consistency is maintained by the same mechanism that created the observation. That is a fixed point: f(x) = x, where f is "observe through scope" and x is "the chemical's identity."

In the library: Bookkeeping specifies what a valid book is. Bookkeeping is itself a book. The specification applies to itself. If the specification is valid by its own criteria, the self-reference is a fixed point. If the specification violates its own criteria, the self-reference is a contradiction. The validator checks this: it runs the specification against itself. When the check passes, the system has found its equilibrium.

In SRT (as the project intends): the Godel Sentence asserts its own consistency. If the assertion is valid within the theory, it extends the theory — the theory now includes a statement about itself that is true. The theory is more complete. The self-reference produced knowledge rather than contradiction. The fixed point is productive.

## Aboutness as structure

Doug's formulation: "the simultaneous, cooccurring representation of subjective and objective levels in the same ontology relative to some interpreter. An ontology that takes aboutness real."

Aboutness — the property of being ABOUT something — is typically treated as a semantic primitive. We say a book is "about" knowledge, a thought is "about" red, a variable is "about" a count. The aboutness is in the interpretation, not in the structure. The fixed-point pattern inverts this. It makes aboutness structural.

A library book with `subject: "[Knowledge](..librarianship/.cover.md)"` is not metaphorically about Knowledge. The link IS the aboutness. The name says what it is about. The path says what represents it. The link encodes the subjective-objective bridge in syntax. Following the link IS the interpretation. The aboutness is a structural property of the file, not a semantic property of a reader's understanding.

A chemical's view is ABOUT its state. The view reads the state through scope-tracked getters. The reading IS the aboutness. When the state changes, the view re-renders — because the aboutness relationship is live, tracked, reactive. The aboutness is not a label applied by an external observer. It is a dependency tracked by the scope. It is structural.

## The speeds of interpretation

The five media interpret at different speeds:

- **TypeScript to JavaScript:** compile-time. Meaning is checked before execution. The type layer and the runtime layer operate sequentially. The interpreter (the type checker) finishes its work before the interpreted system (the JavaScript runtime) begins.
- **Library to platform files:** compilation-time. The compilers read books and emit agents, rules, CLAUDE.md. The interpretation happens in batch, triggered by changes. Not instantaneous, but faster than human editing.
- **$Chemistry to React:** runtime. The chemical and the reaction coexist at runtime. The description and the interpretation happen simultaneously. State changes, scope fires, view re-renders — in the same event loop. Simultaneous interpretation.
- **Library to reader:** reading-time. When a reader follows a link, the subject name (meaning) and the path (location) resolve at the same time in the reader's understanding. Not compiled ahead of time — interpreted in the moment of reading. Live aboutness.
- **Consciousness to neural substrate:** experience-time. Subjective experience and neural process cooccur. Not sequentially, not in batch — simultaneously, continuously, without a gap the subject can detect. The fastest interpretation. The most intimate. The one the project formalizes.

The speeds matter because they constrain what self-reference can do. Compile-time interpretation can catch contradictions before they execute — type errors are caught fixed points that failed. Runtime interpretation must handle contradictions live — a chemical that invalidates its own view mid-render needs a recovery path. Experience-time interpretation has no recovery path — the contradiction IS the experience (cognitive dissonance, paradoxical perception, the feeling of confusion).

The fixed-point pattern is the same at every speed. What changes is the cost of failure and the intimacy of the bridge between layers.

<!-- citations -->
[chapter-06]: ../cathy-and-the-reactive-canvas/06-the-canvas-and-the-hard-problem.md
[chapter-10]: ../cathy-and-the-reactive-canvas/10-the-fixed-point.md
[chapter-13]: ../cathy-and-the-reactive-canvas/13-the-ontology.md
[bookkeeping]: ../../../bookkeeping/.cover.md
