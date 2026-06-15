# Binding Constructor

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

The **binding constructor** is a method on a `$Chemical` subclass named after the class itself. Class `$Book` declares a method `$Book(...)`; class `$CardContainer` declares `$CardContainer(title, card)`. It runs at **render time**, after the class constructor has already produced an object, and receives the chemical's children — already bound and typed — as positional arguments.

The framework discovers it by looking up `(chemical as any)[chemical[$type$].name]`. The lookup is performed by `$Synthesis` when a chemical's component is invoked with JSX children. The binding constructor's parameter list is parsed at runtime to determine arity, types, and spread positions; arguments are validated with `$check` and stored on the chemical.

This is the single most surprising feature in `$Chemistry`. React conflates object creation and child-binding into one function call; `$Chemistry` separates them because they answer different questions. The class constructor answers *"what does this component own?"*; the binding constructor answers *"what children did this instance receive?"*.

## Rules

- The binding constructor's name **must** equal the class name. The framework does no fall-back lookup; mis-naming the method silently disables it.
- The binding constructor is invoked **once per render** of the chemical's component, *after* `$apply` writes incoming React props to `$`-prefixed fields, *before* `view()` runs.
- Parameters are extracted from the method's source via regex. Arrow-form constructors, default parameter values, and destructured parameters are not currently supported.
- A spread parameter (`...items`) accumulates remaining children of the matching type into an array.
- Each non-spread parameter accepts exactly one child; arity mismatches raise validation errors.
- Every parameter type is checked at runtime with `$check`. The first parameter with a wrong type produces a formatted error and aborts the binding.
- The binding constructor's `this` is the chemical instance being bound for this mount. Writes to `this.$x` are writes to the bound instance, not to the template.
- The class hierarchy must be respected: if a parent class declares a binding constructor, every concrete subclass must also declare one with its own name. `assertViewConstructors` validates this at component-creation time.
- An `async` binding constructor is permitted; the framework awaits `$construction` before completing the bind.

## Cases

- A simple `$List(...items: $Item[])` accumulating spread children.
- `$CardContainer($Title, $Card)` with two positional parameters of different types.
- Mixing types via union: `$Toolbar(...controls: ($Button | $Spacer)[])`.
- The class-hierarchy violation: a `$VeganRecipe` subclass of `$Recipe` without its own `$VeganRecipe(...)` method — the error.
- The wrong-type case: `<Container><Recipe /></Container>` where `$Container` declares `$Container($Item)` — the formatted error message gallery.
- An `async $AsyncList(...items: $Item[])` that awaits a fetch before binding.

## See also

- [Dual constructor][s-III-2] — the two-moments framing.
- [`$check`][s-III-4] — runtime parameter validation invoked from inside this method.
- [`$is<T>(ctor)`][s-III-5] — the type-only helper for `$check` signatures.

<!-- citations -->
[s-III-2]: ./02-dual-constructor.md
[s-III-4]: ./04-check.md
[s-III-5]: ./05-is.md
