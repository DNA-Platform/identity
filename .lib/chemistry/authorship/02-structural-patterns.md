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

The binding constructor is a method named after the class — or after any ancestor class: discovery walks the class chain and binds with the nearest match (2026-07-31), so view-authored subclasses declare none. No registration, no decorators, no configuration — but a typo in the method name still silently omits it.

`assertViewConstructors` now only rejects a class-named property that is not a function. Never write a ceremonial (empty or delegate-only) binding constructor to satisfy the chain — the chain satisfies itself, and an empty one makes the synthesis build chemicals for inputs nobody binds.

## Types express expectations

The type system always states what is expected, never what might transiently be missing (Doug, 2026-08-03). At the end of a bond constructor — or wherever the design expects something to have to be a certain way — the member is typed as **present**: no `| undefined`, no `?`, on anything the bond assigns or a chain resolves. `chapter.book` is the canonical form: `get book(): $Book { return this.parent as $Book; }` — a retyping read, no runtime check, because a chapter in use stands in a book and the type says so. Chemicals need no structure outside of being rendered — existence comes from the bond and the render, and the types state that expectation rather than hedging it. `| undefined` is reserved for **honest absence**: a query that may truly have no answer (a document with no footer), never a dependency the design requires. Where a required chain can be broken by misuse, the getter **throws** with a spoken error; `valid()` is the no-throw guard.

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

## The family base class

When a family of chemicals shares one implementation, the shared members live on a **concrete base class** between the framework root and the family — not on an interface each class re-implements, and not in a static helper class. The `.public` writing family is canonical: `$Referent → $Writing → {$Character, $Word, $Sentence, $Paragraph, $Section, $Title, $Subtitle, $Tagline}`. The base carries `block`, `copy`, `index`, `parenthetical`, the block bond (the chain resolution binds it for every subclass that declares none), and its `view()` renders the block — **`view()` is the only render seam; never invent another** (no `display`-style intermediaries; an override that wants the base rendering calls `super.view()`). The base declares the family default (`inline = true`); the kinds that break the flow unset it. A leaf shrinks to its `valid()` law and its parse — `$Title` is ten lines.

**Inheritance is never forced to satisfy an interface.** A class that shares a family's *shape* but not its *substance* implements the interface separately — `$Book`/`$Chapter` implement `$Composition` directly on `$Referent`, because a book carries no block and should not inherit one. Keep such interfaces self-contained (structural constraints inline, no `extends` against a class).

**Statics are utilities, never members** — they satisfy no semantics, implement no interface, are not inheritable — so no domain class carries one, and a static "extensions" class serving a single family is a member in a utility's coat: dissolve it into the base. Genuine many-shape utilities live in `tools/` (`text()`).

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
- **One-line form is for PROPERTIES only, and they stack.** C#-style: field declarations and simple accessors sit one per line, adjacent, no gaps. A get/set pair takes one line each, stacked. `get $name(): string { return this[$name$]; }`
- **Methods are never one-line, and every pair of methods is separated by an empty line.** A constructor, a bond constructor, a static factory, `view()` — all methods. Even a one-statement body takes the multi-line form: signature, indented body, closing brace. A property whose body outgrows one line is written like a method and spaced like one. (Doug, 2026-07-28.)
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
