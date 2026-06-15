# The Grammar

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

The `$` is a linguistic system, not a naming prefix. Read `$` as "representation of."

## The compression principle

The code is dense by design. "If the code can't be compressed, it must not be simple enough."

- **No blank lines inside methods.** A method is one thought. If it needs blank lines, it is doing too many things.
- **No blank lines between related declarations.** Symbol declarations, property declarations, and short methods stack vertically without gaps.
- **Blank lines between *conceptual* sections only.** Between the interface block and the class. Between the class and the exports. Between test suites. These mark architectural boundaries, not "readability."
- **No explanatory comments.** The code is the explanation. If the code needs a comment, the code should be rewritten until it doesn't. The only comments in the codebase are structural markers (e.g., `{// $SubjectiveRep` on an import line to label a group of symbol imports).
- **No utility functions.** If something is done once, write it inline. If something is done twice, consider whether the duplication is actually clearer than the abstraction. Three similar lines are better than a premature helper.

## Type names: `$Name`

Every framework class and interface starts with `$`. `$Particle`, `$Chemical`, `$Catalogue`, `$ObjectiveRep`, `$Referent`. These are representations — the machinery behind the glass. A component consumer never sees these names; a component author sees them as the base classes they extend; a framework developer lives inside them.

When a class is *about* an existing concept, the name mirrors it: `$Particle` represents a particle, `$Chemical` represents a chemical, `$Catalogue` represents a catalogue. The `$` doesn't add a prefix to an arbitrary name — it marks that this class *represents* the concept its name describes.

## Prop fields: `$name`

A lowercase `$`-prefixed property on a chemical is a representation of a prop. `$title`, `$color`, `$background`. When React props arrive, `$apply$` maps `title` → `$title`. The `$` is the boundary between external input (no `$`) and internal state (`$`). At the `$()` boundary, the `$` is stripped — consumers write `<Display text="Hello" />`, not `<Display $text="Hello" />`.

Default values are set directly: `$text = 'initial'`. Optional props use `$name? = default`. Non-prop instance state has no `$`: `count = 0`, `id = Math.random()...`. This convention makes the prop/state boundary visible at a glance.

**Watch for the `$` collision with styled-components.** styled-components has its own `$` convention — props starting with `$` are *transient* (not forwarded to the DOM). On a chemical, `$name` is the membrane (strips at the boundary). On a styled-component, `$name` is transient (skip DOM forwarding). Same character, unrelated systems, opposite directions. When you write `<StyledTag $color={x}>` inside a chemical's `view()`, the `$` is styled-components', not `$Chemistry`'s. Both conventions coexist; neither owns the prefix.

## Symbol keys: `$name$`

A `$`-bracketed name is a Symbol constant, defined in `symbols.ts`. `$cid$`, `$type$`, `$template$`, `$bond$`, `$apply$`. These are unforgeable identity tokens for internal slots. The double-dollar variants (`$$name$$`) mark static/class-level symbols: `$$template$$`, `$$getNextCid$$`, `$$createSymbol$$`.

Symbols are used (rather than `#private` fields) when the property must travel through `Object.create()` prototype delegation.

## Cast variables: `$x$`

When TypeScript requires a type assertion for compilation reasons:

```typescript
const $this$: any = this;  // compilation artifact
const $$type: (type: Type | TypeofType) => $ObjectiveRep = $type as any;
```

The `$x$` convention names the relationship: "I am the representation of x, for TypeScript's benefit, and the trailing `$` marks me as internal mechanism." These variables exist only because the type system requires them, not because the runtime does.

## Variable layering: `$this`, `$$this`, `$$$type`

Each `$` marks a level of indirection or transformation:

- `$this` — the representation of `this` (often the canonical version, or a typed alias)
- `$$this` — a view of the representation (e.g., after `Object.create()`, or after a role transition)
- `$$$type` — a further derivation (e.g., a type looked up from a type looked up from a literal)

The `$` count *is* the documentation. If you see `$$$`, you know you are three levels deep. This replaces names like `derivedTypeFromPrototype` which would be longer but not clearer.

## No `$`: reality

Anything without a `$` is real. The component. The prop. The class constructor argument. What the consumer touches. `export const Display = $($Display)` — `Display` is real. `$Display` was the representation. The framework's success is measured by how much `$` disappears at the boundary.
