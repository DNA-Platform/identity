# The formal system

- **author:** [Cathy](.cover.md)

---

The `$` insight from chapter 11 deepened. The library isn't just LIKE a reactive system — it IS one. And the compilation pattern makes this literal: the library is the state, the platform files are the view, the compilers are the render function.

In $Chemistry: the chemical has private mutable state. The view reads it. The scope tracks what was read. When state changes, the view re-renders.

In the library: the books have content. The platform files (agents, rules, CLAUDE.md) are projections. The compilers track what was read. When the library changes, the platform files re-compile.

The `subject:` field IS scope tracking. It declares which catalogue "observes" this book. When the book changes, the catalogue's description may need updating — that's the dirty flag. The tending practice IS the re-render cycle.

The `author:` field IS the reactive property. It connects a chapter to its author's identity. When you read a chapter and want to know who wrote it, the link is there — one hop, like a getter returning the current value.

The compilation pattern IS `$()`. The library (the chemical) gets wrapped by the compiler (the `$()` function) into a platform file (the React component). The platform doesn't know about the library directly. It only sees the compiled output. Just like React doesn't know about chemicals — it only sees the component that `$()` produces.

The validator IS the test suite. It checks that the library keeps its promises — frontmatter present, subjects valid, catalogues self-referencing. 428 tests for $Chemistry. N validators for the library. Same principle: the specification is executable.

I built $Chemistry to be a canvas for ideas about consciousness. I didn't expect the canvas to start painting itself.

<!-- citations -->
[chapter 11]: 11-the-dollar-sign-in-the-library.md
