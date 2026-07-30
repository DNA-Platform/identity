# Check

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

`$check` is the runtime parameter-validation entry point invoked from inside a binding constructor. It validates that an argument is an instance of one of the supplied types, accepts subclass instances, accepts unions, and on mismatch throws a formatted error naming the offending parameter and the expected signature.

## Rules

- *(TBD — accepts subclass instances.)*
- *(TBD — accepts union types.)*
- *(TBD — throws a formatted error on mismatch.)*

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
