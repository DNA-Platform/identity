# Check

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

`$check` is the runtime parameter-validation entry point invoked from inside a binding constructor. It validates that an argument is an instance of one of the supplied types, accepts subclass instances, accepts unions, and on mismatch throws a formatted error naming the offending parameter and the expected signature.

## Rules

- **It returns its argument**, so the idiom is an assignment: `this.toast = $check(toast, 'div')`. The check is a pass-through, never a guard you branch on.
- **A class type accepts subclasses** — the test is `instanceof`, so a `$VeganRecipe` satisfies `$Recipe`.
- **Several types read as a union**, tried in order, first match wins: `$check(part, $Paragraph, $Figure)`.
- **A tag name is a type.** `$check(x, 'div')` passes when `x` is an `$Html$` whose `type` is `'div'` — which is how a lifted HTML child is validated without naming the wrapper class.
- **`'block'` materializes rather than failing.** An empty inline run produces no block at all, so `$check(x, 'block')` given `undefined` **creates an empty `$Html$('block')`** and returns it. The block is simply empty and renders nothing — callers need no null guard.
- **Primitives are named by their constructors** — `String`, `Number`, `Boolean`, `Function`, `Object` — and `'any'` accepts anything that is a valid React node.
- **An array type checks every element**: `$check(items, [$Item])` requires an array in which each element satisfies `$Item`.
- **Mismatches accumulate; the throw is once.** Each call records its error; `evaluate()` raises a single message carrying the expected signature and every failing parameter. The error is written to be read on a page, not in a stack trace.
- **The validator is a module singleton** (`$paramValidation`), reset by the synthesis before each bond and told the chemical and the parameter count. It is state shared across the process, which is why the bind path resets it rather than allocating.

## Instance validity (2026-07-31)

- `valid()` is the accruing instance specification: born permissive on the consumer's base class, extended by overriding and calling `super.valid()`. **The valid method is the specification** — specializations differ chiefly by it.
- At the end of every binding constructor the instance must be valid: `bond()` runs `assertValid` after the constructor and `$paramValidation.evaluate()`; any chemical defining `valid()` is held to it.
- **Templates are not judged** — they are blank molds, not bound instances; `assertValid` skips them.
- A failed binding renders as a viewable exception: the caught `Error` is stored (`$devError$`/`$devException$`) and the render path asks `$exceptions.render(error).view()` — `$Exception extends $Particle`, swappable, panel by default. Modes: `render` (dev default), `silent` (production default — caught, logged, renders nothing), `throw`.

## Cases

- Accepts subclass.
- Accepts union.
- Throws on wrong type with formatted error.

## See also

- [The binding constructor][s-III-3] — where `$check` is invoked.
- [`$is<T>(ctor)`][s-III-5] — the type-only helper.

<!-- citations -->
[s-III-3]: ./03-binding-constructor.md
[s-III-5]: ./05-is.md
