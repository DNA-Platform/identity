# Glossary

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Terms defined in this book, alphabetical.

**$Atom** — Shipped, and smaller than the name suggests: a `$Chemical` whose constructor **returns the class template**, so `new $X()` hands back the one instance that already exists. One instance per class, by construction rather than by discipline — the framework's singleton.

**$Chemical** — A subclass of `$Particle` that adds **composition**: children, the synthesis that binds them, the catalyst graph, and the binding constructor. Identity, phases and the reactive carrier slots are *not* here — they belong to `$Particle`, which is a fully reactive entity in its own right.

**$component$** — A symbol-keyed slot holding the **React function component** that renders this particle, cached on first resolve so component identity is stable across calls.

**$formation$, $formed$, $remembered$** — Symbols declared for an atom layer that was never built. `atom.ts` imports all three and uses none. Recorded so a reader does not mistake a name for a mechanism.

**$parent$** — A symbol-keyed **setter that rewires**, not a stored field and not write-once: assigning it enrols the chemical in the parent's reaction system (or, assigned itself, makes it its own root with a fresh reaction). The tree is rebuilt as composition changes, never immutable. See [the catalyst graph](08-catalyst-graph.md).

**binding constructor** — A method named after the class (e.g., `$Book()` on class `$Book`) that runs at render time when children arrive as JSX, discovered at runtime by the framework and receiving bound children as typed arguments.

**catalyst graph** — The parent-child relationship graph threaded through the component tree via `$catalyst$`, `$$parent$$`, and the `$parent$` setter, enabling composed chemicals to share a reaction system.
