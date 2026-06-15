# Structural Patterns

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

These are the patterns that recur across well-written chemicals. Each is a shape a chemical author reaches for; each has a canonical example from the framework's own code.

## Constructor return

A constructor may return a different object than `this`. This is not a hack — it is a design pattern. In $Chemistry:

- `$Particle(particular)` — when passed a non-Particle object, sets the particle as the object's prototype and returns the original object. Any structural thing can become a particle without changing what it is.
- `[$resolveComponent$]` — the symbol-keyed internal method that resolves a chemical to its React FC. Called by the `$()` callable; never reached by author code.
- `$Catalogue.constructor` — sets `this.$subject = this`, making the catalogue its own subject. Not a different-object return, but the same principle: construction establishes identity relationships that are not obvious from the `new` call.

When reading $Chemistry code, never assume `new X()` returns an `X`.

## Object.create() over new

Inside the framework, objects are born by prototype delegation, not class instantiation:

- `$Particle.use()` — creates a derived view of a particle for rendering
- `$Component$.createChemical()` — creates the bound chemical that actually renders
- `$SubjectiveRep.$as()` / `$of()` — creates role views in the reflection system
- `$Referent.$as()` — creates role views in the semantics system
- `$BondOrchestrationContext.clone()` — creates child orchestration contexts

The only `new` calls are at top-level entry points: `new $Particle()`, `new $Chemical()`, `new $ObjectiveRep(...)`, `new $Catalogue(...)`. Everything downstream is `Object.create()`.

This is not an optimization. It is the statement that identity is perspectival — the same underlying object viewed from different angles, sharing state through the prototype chain, diverging only where they must.

## Template-instance pattern

The first instance of each `$Particle` subclass becomes its static template (`$$template$$`). All subsequent rendered instances are prototypal views of this template, created by `Object.create(template)` during binding.

- **Template**: holds class-defined default state. Shared prototype for all instances.
- **Bound instance**: inherits from template, adds render-time bindings from the binding constructor.
- **Shadowed instance**: inherits from bound instance, adds per-render prop overrides.

The `$isTemplate$` getter identifies templates. Templates receive special treatment: rendering a template's view auto-derives a fresh instance rather than mutating the template. This prevents accidental state pollution of the shared prototype.

## Dual constructor

Every `$Chemical` subclass has two constructors:

1. **Class constructor** (`constructor()`) — object creation time. What the component *always* has.
2. **Binding constructor** (`$ClassName(...)`) — render time. What *specific children* were given.

The binding constructor is a method named after the class. `$BondOrchestrator` discovers it at runtime via `(chemical as any)[className]`. This convention requires no registration, no decorators, and no configuration — but it does mean a typo in the method name silently omits the binding constructor.

`assertViewConstructors` validates the prototype chain to ensure that if a child class has a binding constructor, its parent classes do too. This catches hierarchy violations but not missing-method typos.

## Self-reference and circularity

$Chemistry embraces self-reference:

- `$Catalogue.$subject = this` — a catalogue is its own subject
- `$type(undefined).$type === $type(undefined)` — types that ground the system refer to themselves
- `$Identity` — a referent's relationship with itself fills all three positions in the triple

These are not accidents. They are axiomatic foundations. When you encounter a circular reference in $Chemistry, it is likely intentional and load-bearing.

## Method binding on chemicals

In React, `onClick={this.method}` loses `this` binding. In $Chemistry, it works:

```typescript
class $Counter extends $Chemical {
    count = 0;
    increment() { this.count++; }
    view() {
        return <button onClick={this.increment}>+</button>;
    }
}
```

The molecule's `$Reagent` installs a getter on the class template that returns a bound+scoped function per instance (cached via WeakMap). When a derivative reads `this.increment`, it gets a function already bound to itself. No `.bind()`, no arrow wrapper needed. This is one of the framework's strongest usability wins — component authors write natural OO code and it just works in React.

## Children as typed constructor arguments

React components receive children as `ReactNode` — an opaque blob. $Chemistry chemicals receive children as **typed binding constructor arguments**:

```typescript
class $Book extends $Chemical {
    chapters: $Chapter[] = [];
    $Book(...chapters: $Chapter[]) {
        this.chapters = chapters;
    }
}
```

In JSX: `<Book><Chapter /><Chapter /></Book>`. The framework's `$BondOrchestrationContext` parses the JSX children tree and matches them against the binding constructor's parameter types. `$check()` validates types at bind time.

This means the component author *declares* what children it accepts, and the framework *enforces* it. No `React.Children.toArray()`, no type-guessing, no `as` casts.

## Reactive access via $use

The `$use()` free function extracts a renderable component from a bound chemical:

```typescript
const [Chapter, key] = $use(this.chapter, 'key');
return <Chapter key={key} />;
```

Without the `'key'` argument: `const Card = $use(this.card)` returns just the component. This bridges the gap between the chemical object model (where children are typed references) and React's rendering model (where components are functions).

## Formatting

- **No spaces inside parentheses.** `$check(label, $Label)` not `$check( label, $Label )`.
- **No spaces before colons in type annotations.** `name: string` not `name : string`.
- **Minimal semicolons.** Present on statements, absent on declarations where TypeScript doesn't require them. The code follows whatever the existing file does.
- **Single-line getters for simple properties.** `get $name(): string { return this[$name$]; }` — the entire accessor on one line.
- **Chained member access on one line.** Ternaries stay inline unless they genuinely need wrapping.
- **Import groups.** Symbol imports use structural comments: `import {// $SubjectiveRep ... } from './symbols'`. This labels the group without adding a separate comment line.
- **No inline styles for styling decisions.** Colors, spacing, typography, layout — all flow through styled-components co-located with the chemical. Theme values come from the `ThemeProvider` via `(p) => p.theme.color.X`. **Allowed exception:** truly dynamic per-element values that styled-components can't reasonably express — a CSS variable computed from runtime state, x/y from a drag, width tied to a resize observer.

## Anti-patterns

If you see one of these in the codebase, it is a bug:

| Bad | Why | Right |
|-----|-----|-------|
| `new $Book().Component` | `.Component` does not exist on chemicals (the internal accessor is symbol-keyed) | `$($Book)` |
| `<style={{ ... }}>` in app code | Theme values inaccessible, drift inevitable | styled-component reading from theme |
| `import { Chemical } from '@dna-platform/chemistry'` | `Chemical` is not exported (it's a base class, nothing to render) | Don't import; `$Chemical` is for extending only |
| `useState` in app code | Hooks are React's solution to a problem chemicals solve differently | Make it a chemical with a `$` reactive property |
| Custom hash router, custom event bus, custom focus trap | $Chemistry composes with React; reinventing undermines the thesis | Reach for the package: react-router-dom, etc. |

## Doc-first rule

Before writing any chemical, the authorship chapters and coding policy are the source of truth. If you discover a pattern not documented:

1. Stop coding.
2. Write the doc.
3. Get review on the doc.
4. *Then* write the code.

The team's last attempt to write $Chemistry from a partial reading produced extensive cleanup work. Doc-first prevents this.

## What not to do

- **Don't add blank lines for "readability."** The compression is intentional.
- **Don't add JSDoc or docstring comments.** The code documents itself.
- **Don't rename `$` variables to "clearer" names.** The `$` layering is the naming system.
- **Don't refactor `Object.create()` into class instantiation.** Delegation is the design.
- **Don't add type annotations where TypeScript can infer.** Explicit types on every variable adds noise.
- **Don't create helper functions for one-time operations.** Inline is fine. Inline is preferred.
- **Don't add error handling for impossible states.** Trust the framework's invariants internally. Validate at boundaries (`$check`, `assertViewConstructors`).
- **Don't expose `$`-prefixed names in consumer-facing APIs.** The membrane is sacred.
