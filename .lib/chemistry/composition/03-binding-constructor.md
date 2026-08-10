# Binding Constructor

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Why this is the canonical surprise

Most languages do not dispatch by class name. JavaScript's `constructor` keyword is fixed. React uses props (a single object) for child shape. Web Components use a `connectedCallback` lifecycle hook with no children-as-args concept. The binding constructor borrows its idea from XML schema — parameter shapes describing child element types — and mounts it on a familiar class-syntax surface. But the *binding* between the method's name and the class's name is the framework's choice, not a language feature.

A reader who didn't know to look for it would see a `$Cookbook` method on a `$Cookbook` class and read it as a coincidence or a self-call. It is neither. It is load-bearing. The framework finds the method by name; renaming the class without renaming the method silently breaks construction. A reader who internalizes one feature from `$Chemistry` should make it this one — the rest of the framework's character follows from it.

## Definition

The **binding constructor** is a method on a `$Chemical` subclass named after the class itself. Class `$Book` declares a method `$Book(...)`; class `$CardContainer` declares `$CardContainer(title, card)`. It runs at **render time**, after the class constructor has already produced an object, and receives the chemical's children — already bound and typed — as positional arguments.

The framework discovers it by walking the class chain: `$Synthesis` tries `(chemical as any)[cls.name]` for the chemical's own class first, then each ancestor class in turn, and binds with the nearest method it finds (2026-07-31 — before this, only the leaf class's name was tried). A subclass whose writing lives in its `view()` therefore needs **no constructor at all** — the ancestor's binding constructor binds for it. The binding constructor's parameter list is parsed at runtime to determine arity, types, and spread positions; arguments are validated with `$check` and stored on the chemical.

This is the single most surprising feature in `$Chemistry`. React conflates object creation and child-binding into one function call; `$Chemistry` separates them because they answer different questions. The class constructor answers *"what does this component own?"*; the binding constructor answers *"what children did this instance receive?"*.

## What it actually receives — the grouping

**Children are not handed over one for one.** Before a bond constructor sees anything, [`groupInline`](../../package/src/abstraction/chemical.ts) rewrites the child list: *"each maximal run of consecutive inline children becomes one `<block>`; block children pass through."*

So a bond constructor is handed **an ordered sequence**, and the two grades arrive by two different routes:

| what was written | how it arrives |
|---|---|
| raw text, numbers, inline tags, **and chemicals whose template declares `inline`** | gathered into one `$Html<'block'>` argument per maximal run, reachable as that block's **`$elements`**, in order |
| anything else — a chemical that declares itself **not inline** | **its own argument**, in place between the blocks either side of it |

Written out, prose interrupted by a block-level child is **three arguments**, not one:

```
<Section>Before.  <Plate/>  After.</Section>

  bond receives:  $Html$<'block'>   $Plate   $Html$<'block'>
```

**The signal is `inline`, and it is read off the type** — an inline tag, or a chemical whose template sets `inline` ([`isInline`](../../package/src/abstraction/chemical.ts)). *"This is the only signal grouping has at runtime."* A chemical that means to stand as a part of its parent must declare `inline = false`, or it is absorbed into the surrounding text instead of arriving beside it.

**Two consequences worth stating, because both were paid for.**

A bond constructor that declares **one** parameter keeps the first argument and **drops the rest** — so a block-level child written into prose, and every argument after it, vanishes silently. It renders nothing, throws nothing, and the parent's own text stops at the insertion point. `@dna-platform/lib`'s `$Writing` was written this way and discarded the mechanism it needed for two sprints ([Writing](../../../.public/.lib/projection/10-writing.md)).

And **grouping runs only inside a bond constructor's own interpretation** — never over a block's own run, never over a tag's text. A class with no bond constructor sees no grouping at all.

## Rules

- The binding constructor's name must equal **a class name on the chain** — the chemical's own, or an ancestor's. Mis-spelling a name still silently disables it (the chain walk only tries real class names).
- The binding constructor is invoked **once per render** of the chemical's component, *after* `$apply` writes incoming React props to `$`-prefixed fields, *before* `view()` runs.
- Parameters are extracted from the method's source via regex. Arrow-form constructors, default parameter values, and destructured parameters are not currently supported.
- A spread parameter (`...items`) accumulates remaining children of the matching type into an array. **Where children may be a mix of prose and block-level parts, a spread is the only signature that keeps them all** — see the grouping above.
- Each non-spread parameter accepts exactly one child; arity mismatches raise validation errors.
- Every parameter type is checked at runtime with `$check`. The first parameter with a wrong type produces a formatted error and aborts the binding.
- The binding constructor's `this` is the chemical instance being bound for this mount. Writes to `this.$x` are writes to the bound instance, not to the template.
- **Never write a ceremonial binding constructor.** An empty `$X() {}` — or a body that only delegates upward — makes the synthesis parse parameters and build chemicals for inputs nobody binds: a performance hazard, and unnecessary since the chain resolves (Doug, 2026-07-31). `assertViewConstructors` no longer demands that ancestors declare constructors; it only rejects a class-named property that is not a function.
- An `async` binding constructor is permitted; the framework awaits `$construction` before completing the bind.

## Cases

- A simple `$List(...items: $Item[])` accumulating spread children.
- `$CardContainer($Title, $Card)` with two positional parameters of different types.
- Mixing types via union: `$Toolbar(...controls: ($Button | $Spacer)[])`.
- A `$VeganRecipe` subclass of `$Recipe` without its own `$VeganRecipe(...)` method — binds through `$Recipe(...)`, by design.
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
