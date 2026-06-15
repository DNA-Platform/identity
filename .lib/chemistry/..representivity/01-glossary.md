# Glossary

- **author:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

Alphabetical index of $Chemistry vocabulary. Each term links to the book where it's defined in context.

**$ prefix (the membrane)** — the `$` means "representation of," marking the framework/consumer boundary. See [Authorship glossary](../authorship/06-glossary.md).

**$() boundary** — the point where `$` disappears; `$($Display)` produces a React component whose props mirror `$`-prefixed properties with the prefix stripped. See [Authorship glossary](../authorship/06-glossary.md).

**$apply$** — prop-mapping mechanism that receives React props and sets them as `$`-prefixed properties on the particle. See [Particle glossary](../particle/08-glossary.md).

**$Atom** — planned extension adding formation lifecycle and remembered state on top of chemical bonding. See [Composition glossary](../composition/10-glossary.md).

**$bond$** — lifecycle hook called after props are applied but before the view renders; base is no-op, overridden by `$Chemical`. See [Particle glossary](../particle/08-glossary.md).

**$Catalogue** — key-value store keyed by `$Rep` references with topic-chain inheritance, using `#private` fields for encapsulation. See [Composition glossary](../composition/10-glossary.md).

**$Chemical** — `$Particle` subclass adding parent-child relationships, component binding, and the dual constructor pattern. See [Composition glossary](../composition/10-glossary.md).

**$cid$** — unique auto-incrementing integer identity on each particle instance. See [Particle glossary](../particle/08-glossary.md).

**$component$** — symbol-keyed property bridging a chemical to its React `$Component` instance. See [Composition glossary](../composition/10-glossary.md).

**$formed$** — atom-layer flag indicating completed formation. See [Composition glossary](../composition/10-glossary.md).

**$formation$** — atom-layer initialization process for acquiring state and dependencies. See [Composition glossary](../composition/10-glossary.md).

**$Identity** — semantic relation wrapping a single referent in a self-referential triple.

**$isBound$** — getter returning `true` when the chemical is the active backing instance of its component. See [Reactivity glossary](../reactivity/07-glossary.md).

**$isTemplate$** — getter returning `true` when the particle is the static template singleton for its class. See [Particle glossary](../particle/08-glossary.md).

**$lib** — the root `$Catalogue` instance serving as the global framework registry.

**$Particle** — base class for all framework objects, providing identity, lifecycle, view, and `use()`. See [Particle glossary](../particle/08-glossary.md).

**$parent$** — write-once parent link forming the immutable composition tree. See [Composition glossary](../composition/10-glossary.md).

**$Property** — semantic relation connecting a property to the object it belongs to.

**$Reference** — semantic relation connecting a symbol to its literal referent.

**$Referent** — base class of the semantics module representing anything that can be referred to, interned in `$lib`.

**$Relationship** — semantic relation connecting three distinct referents: subject, object, and relationship type.

**$remembered$** — atom-layer persistent state surviving lifecycle transitions. See [Composition glossary](../composition/10-glossary.md).

**$Rep** — foundational representation interface carrying a `$ref: string` identifier, the universal reference ticket for catalogues.

**$Representative** — semantic relation connecting a representative to its representation.

**$symbol$** — human-readable string identifier formatted as `$Chemistry.{ClassName}[{cid}]`. See [Particle glossary](../particle/08-glossary.md).

**$template$** — symbol-keyed property pointing to the prototype template instance. See [Particle glossary](../particle/08-glossary.md).

**$type$** — symbol-keyed reference to the particle's constructor function for runtime type identity. See [Particle glossary](../particle/08-glossary.md).

**binding constructor** — method named after the class, discovered at runtime, receiving JSX children as typed arguments. See [Composition glossary](../composition/10-glossary.md).

**Bond** — reactive connection tracking an individual property on a chemical. See [Reactivity glossary](../reactivity/07-glossary.md).

**catalyst graph** — parent-child relationship graph threading chemicals through the component tree. See [Composition glossary](../composition/10-glossary.md).

**derivatives** — downstream chemicals receiving fan-out notifications on state change. See [Reactivity glossary](../reactivity/07-glossary.md).

**diffuse** — fan-out function propagating state changes through `$derivatives$`. See [Reactivity glossary](../reactivity/07-glossary.md).

**isParticle** — marker identifying an object as participating in the particle system. See [Particle glossary](../particle/08-glossary.md).

**literature** — the internal `Map<$Rep, any>` within a `$Catalogue` storing indexed values.

**Molecule** — reactive state container owning a chemical's bonds and handling reactivation. See [Reactivity glossary](../reactivity/07-glossary.md).

**particular** — constructor pattern where `$Particle` lifts behavior onto an existing object via prototype delegation. See [Particle glossary](../particle/08-glossary.md).

**prototypal shadowing** — mechanism where a bound instance appears in multiple places with different prop overrides via `Object.create()` layers.

**prototypal view** — lightweight prototype-linked copy sharing state without duplication. See [Particle glossary](../particle/08-glossary.md).

**Reaction** — lifecycle coordinator driving a chemical through async phases. See [Reactivity glossary](../reactivity/07-glossary.md).

**role** — a perspective a referent can be projected into via `$as(role)`, stored in the referent's `$roles$` map.

**scope** — tracking context recording reads and writes during event handler execution. See [Reactivity glossary](../reactivity/07-glossary.md).

**Symbol** — JavaScript `Symbol` used as property keys for internal state, chosen for prototype-chain travel. See [Authorship glossary](../authorship/06-glossary.md).

**Symbols vs #private** — symbols for prototype delegation, `#private` for standalone encapsulation. See [Authorship glossary](../authorship/06-glossary.md).

**topic** — a catalogue in another catalogue's inheritance chain, walked during `$find()` lookup.

**use()** — method wrapping a view function into a callable React component with instance decoupling. See [Particle glossary](../particle/08-glossary.md).

**view()** — primary render method on `$Particle`, overridden by subclasses for custom rendering. See [Particle glossary](../particle/08-glossary.md).
