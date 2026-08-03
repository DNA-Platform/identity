# Bind

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

`bind(chemical, parent?)` performs static binding without JSX. It is the programmatic-composition entry point — a chemical can be bound to a parent (or to none) without the JSX path's `$Synthesis` orchestration.

## Rules

- `bind(chemical, parent?)` derives a bound child of the chemical's template and, when `parent` is given, assigns it into the parent's catalyst graph before any binding runs.
- **`$(element, parent)`** (2026-07-31) — the eval form's optional second argument evaluates the element *as if authored inside the parent*: the child binds to it **before** its binding constructor runs, the same order DI children get. This is how a book's binding constructor renders its contents chapter into itself.
- Evaluating a new instance *inside* `view()` — fresh identity per render, reactive parent assignment mid-track — loops the reaction system until the worker dies. Instances are rendered at binding constructors and readings, never in views.

## Cases

- A programmatically composed chemical without JSX.
- `$(<TableOfContents />, book)` — the rendered contents chapter, parent assigned at evaluation.

## See also

- [The binding constructor][s-III-3] — the JSX-path equivalent.
- [The catalyst graph][s-III-8] — what `bind` wires.

<!-- citations -->
[s-III-3]: ./03-binding-constructor.md
[s-III-8]: ./08-catalyst-graph.md
