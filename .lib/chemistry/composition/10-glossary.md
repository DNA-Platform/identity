# Glossary

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Terms defined in this book, alphabetical.

**$Atom** — Shipped, and smaller than the name suggests: a `$Chemical` whose constructor **returns the class template**, so `new $X()` hands back the one instance that already exists. One instance per class, by construction rather than by discipline — the framework's singleton.

**$Chemical** — A subclass of `$Particle` that adds **composition**: children, the synthesis that binds them, the catalyst graph, and the binding constructor. Identity, phases and the reactive carrier slots are *not* here — they belong to `$Particle`, which is a fully reactive entity in its own right.

**$component$** — A symbol-keyed slot holding the **React function component** that renders this particle, cached on first resolve so component identity is stable across calls.

**$formation$, $formed$, $remembered$** — Symbols declared for an atom layer that was never built. `atom.ts` imports all three and uses none. Recorded so a reader does not mistake a name for a mechanism.

**$Formula** — A `$Chemical` that **stands for something else**: it carries a catalogue of named specimens, and a name written inside its tag is replaced by the specimen that name stands for. See [The Formula](12-the-formula.md).

**$parent$** — A symbol-keyed **setter that rewires**, not a stored field and not write-once: assigning it enrols the chemical in the parent's reaction system (or, assigned itself, makes it its own root with a fresh reaction). The tree is rebuilt as composition changes, never immutable. See [the catalyst graph](08-catalyst-graph.md).

**binding constructor** — A method named after the class (e.g., `$Book()` on class `$Book`) that runs at render time when children arrive as JSX, discovered at runtime by the framework and receiving bound children as typed arguments.

**branch root** — The first class below `$Formula` in a formula's chain. A key climbs to it and stops there; a key that reached `$Formula` itself would be visible to every branch, and two unrelated families would become interchangeable.

**cache** — `cache(key?)` on a formula files **this instance** under a name, and climbs it to every formula ancestor up to the branch root. With no argument it declares the specimen that stands when nothing is named. The first write of a key wins.

**catalyst graph** — The parent-child relationship graph threaded through the component tree via `$catalyst$`, `$$parent$$`, and the `$parent$` setter, enabling composed chemicals to share a reaction system.

**the climb** — That a formula's key is filed upward through its ancestors rather than looked up downward. It is what makes an ancestor answer to a descendant's name while a descendant never answers to a sibling's — a taxonomy obtained rather than written.

**specimen** — A cached instance a formula stands for. It is a thing to **copy**: stamped its own template, so every site that names it derives its own and a prop written at one site reaches no other. A class may file several, each with its own state.
