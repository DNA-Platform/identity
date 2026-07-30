# Glossary

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Terms defined in this book, alphabetical.

**$Atom** — A planned extension of the chemical hierarchy for chemicals that undergo formation, adding one-time initialization and remembered state on top of reactive bonding.

**$Chemical** — A subclass of `$Particle` that adds parent-child relationships, component binding, lifecycle management, and the dual constructor pattern for composition.

**$component$** — A symbol-keyed property on `$Chemical` holding the `$Component` instance that bridges the chemical's object model to React's component model.

**$formation$** — A symbol for the atom layer representing the initialization process an atom undergoes to acquire its initial state and wire up dependencies.

**$formed$** — A symbol for the atom layer representing whether an atom has completed formation, a write-once flag analogous to `$isBound$` on chemicals.

**$parent$** — A symbol-keyed write-once property on `$Chemical` providing the parent chemical in the composition hierarchy, forming an immutable tree structure.

**$remembered$** — A symbol for the atom layer representing persistent state that survives across lifecycle transitions, distinguishing it from transient reactive state.

**binding constructor** — A method named after the class (e.g., `$Book()` on class `$Book`) that runs at render time when children arrive as JSX, discovered at runtime by the framework and receiving bound children as typed arguments.

**catalyst graph** — The parent-child relationship graph threaded through the component tree via `$catalyst$`, `$$parent$$`, and the `$parent$` setter, enabling composed chemicals to share a reaction system.
