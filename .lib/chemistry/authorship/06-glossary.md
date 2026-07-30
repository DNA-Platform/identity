# Glossary

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Terms defined in this book, alphabetical.

**$ prefix (the membrane)** — The `$` means "representation of," marking the boundary between the framework's model and the consumer's reality; density varies from invisible (consumers) to pervasive (framework developers).

**Symbol** — A JavaScript `Symbol` used as a property key for internal state so framework properties never collide with user-defined ones, chosen over `#private` because symbol-keyed properties travel with the prototype chain through `Object.create()`.

**Symbols vs #private** — Symbols are used where prototype delegation matters (objects participating in `Object.create()`); `#private` fields are used where encapsulation matters and delegation does not (standalone containers like `$Catalogue`).
