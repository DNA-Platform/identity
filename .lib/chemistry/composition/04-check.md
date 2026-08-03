# Check

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

`$check` is the runtime parameter-validation entry point invoked from inside a binding constructor. It validates that an argument is an instance of one of the supplied types, accepts subclass instances, accepts unions, and on mismatch throws a formatted error naming the offending parameter and the expected signature.

## Rules

- *(TBD — accepts subclass instances.)*
- *(TBD — accepts union types.)*
- *(TBD — throws a formatted error on mismatch.)*

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
