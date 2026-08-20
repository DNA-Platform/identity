# The Representative

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*Opened 2026-08-11 as a brainstorm and planned the same day. **Status: `implementation-ready`.** The subject is [R25 from The Author](08-the-author.md#r25--becomes-a-dependency-injection-container--a-chemistry-level-feature-doug-2026-08-07) and [R55 from Sprint 48](06-sprint-48--subjects-and-the-library.md#r55--as-a-container-and-cards-built-at-build), both recorded and both left design owed. The design is now made.*

*Sprints are **named, not numbered**; the title is the implementer's and stands for correction. **The Representative** is Doug's word, given at the design's close for `$` standing as an argument.*

*The framework work lands in [`library/chemistry/package`](../../../chemistry/package/), so [$Chemistry's own Projection](../../../chemistry/.lib/projection/.cover.md) is owed an entry at the retro. The specification lives where `$` is documented — [The Representative](../../../chemistry/.lib/composition/11-the-representative.md), in the Composition book.*

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

## Rulings from the design session — 2026-08-11, verbatim

Recorded because each one turned the design, and three of them corrected the implementer.

- **The charge.** *"Sometimes, in a framework, we consume certain components — the non-`$` version. I'd like to find a way of configuring scoping in `$` so we can assign a certain subclass of a component to `$`. That way, people consuming framework code can conceivably override the default ones used by the framework, and we won't have to deal with passing around components as props and in constructors."*

- **On what `$` is, correcting the implementer:** *"`$` is not a catalogue. Please read the `$` implementation. It is an overloaded utility for `$Chemistry`. We are reclaiming it from jQuery."*

- **On priming, which settled the mechanism:** *"`$` has context filled in before render. We control the call of the bond constructor and render, so there should be no problem."*

- **On configuration time:** *"We don't allow scope changes during render. It should be configured elsewhere. If this is confusing to you we can throw an error. I'm sure you can configure a DI container in the middle of an app but no one does that."*

- **On scope, which is the design's spine:** *"If we registered around the instance of the component and its progeny, a package can create its own table of contents and that can be the thing one registers instances for… if you register a TableOfContents for the topmost Book, it overrides for all books. But if you do it for your own book instance and don't export, then you have encapsulation."*

- **On the mechanism behind it:** *"Whatever happens behind the scenes should probably be similar to creating a chemical for Component, and then getting its component."*

- **On isolation, hygiene, and fallback:** *"I don't think we should have instances registered to the exported one be the fall back to new ones. That way, good chemistry hygiene is if you want isolated instances, you should declare your own versions of the components."* — later corrected by Doug himself to keep **both** directions, one falling back and one not.

- **On the surface, choosing the wrapped forms:** *"Maybe this version is best because we don't have to then overload the function and add a props check on every function component call."*

- **On the name:** *"Call the parameter 'representative' — it represents the presence of a representative for some new type of meaning. It represents in the abstract, like a punctuation mark."*

- **On vocabulary, for the third time:** *"We aren't in the business of money. Minting is not a domain word. Remove it like you did with failure. Are you dealing with rendering instances of components? Good, use those words please!"* — **swept the same day**; see [Markdown's out-of-scope list](11-markdown.md#out-of-scope-named).

## What was read — verified 2026-08-11

Each claim was checked against the source or run, and the numbers are what make the requirements below sized rather than guessed.

- **`$` is `new Chemistry().view`** — a plain function carrying no `$chemical`, exported at [chemical.ts:1108](../../../chemistry/package/src/abstraction/chemical.ts). That is why `arg === $` is a discriminator nothing else can satisfy.
- **The dispatch order is load-bearing.** A Component is caught at branch 4 by `.$chemical` before the class branch is reached, and the eval overload must precede the props overload because *"an element structurally matches"* it. Any new form must sit where it cannot shadow those.
- **The inverse has no callers.** `Component → chemical` is used **0 times** in `@dna-platform/lib` and the demo; **15 times inside chemistry**, every one reading `.$chemical` directly and never through `$()`. Its only users are **6 promises** in [dollar-inverse.test.tsx](../../../chemistry/package/tests/react/dollar-inverse.test.tsx) and identity.test.tsx.
- **Fallback is already prototypal.** [`backing()`](../../../chemistry/package/src/abstraction/bond.ts) gives each instance a reactive store built as `Object.create(the parent's store)`. A scope store on the chemical inherits by the same mechanism, with no walking code.
- **`$isTemplate$` is per-class.** `this == this[$type$][$$template$$]` — so a second root for one class would not be a template and `$lift` would take its `direct` path, sharing one object across every mount. The per-object `[$derived$]` test is the alternative already present in the same file.
- **The demo threads a container by hand.** `F.Strong`, `F.Link`, `F.InlineCode` are reached through a `spec` parameter carried across **33 sites** and three signatures, because the code forbids reaching up: *"a part never reaches up to ask which dress it is in — that would tell the truth at binding and lie on screen."*
- **`lib` creates fixed parts inline.** `$(<Path …/>)` in **12 files**; `$(<Row …/>)` inside `$TableOfContents.parts()`; `$(<Title>…</Title>)` in the contents and in `$Document`.
- **A hand-cut seam went unused.** `$TableOfContents.row()` exists so a subclass can change one drawing; the one real specializer, `$ShelfContents`, overrides `view()` wholesale and never calls it.
- **Three private component bindings already exist** — `const TheManifold`, `const TheShelf`, `const ThePage` are unexported. Under this design they are scopes with no edit.
- **`app/verify-demo.mjs` is RED on `main`** — it stalls at checkpoint 7 clicking a chip named `anatomy`, renamed to `reading` last sprint. Exit 1, 6 of its checkpoints reached.

**Baseline, so every later number is a delta:** `f4de7d3` · chemistry **635/635** (59 files), tsc **0** · lib **203/203** (21 files), tsc **0** · app **70 files, 4 baselined, 0 unexpected** · `verify-book.mjs` **48 checkpoints, exit 0** · `verify-demo.mjs` **RED**.

---

# Requirements

*Decided 2026-08-11 across the design session. Every requirement names what would be observed if it held.*

## Actors

- **A1 — The framework author.** Writes a chemical whose view consumes another component, and wants it substitutable without adding a prop.
- **A2 — The consumer.** Uses `lib` without owning it, and wants framework internals to render their part instead — without threading anything through the call chain.
- **A3 — The reader of the demo.** Sees two books built from one class rendering differently, and the single line of source that produced both.

## The algebra

- **R1. `$($Component)` — from the class.** Returns a component that is a **new root scope**: nothing above it, answering only what is registered on it. Written once per class, at the export. *Seen: a class-created component resolving to itself for everything.*

- **R2. `$($,Component)` — from a component.** Returns a **new component derived from the one given**, whose scope **falls back** to it. *Seen: a registration on the parent answered through the derivative; a registration on the derivative not visible from the parent.*

- **R3. `$(Component)` — resolve.** Answers the component to render in the current scope, and **returns the identical object when nothing is registered**. Type-preserving: `Component<T>` in, `Component<T>` out. *Seen: `$(X) === X` with an empty registry, and a different component under a scope that registered one.*

- **R4. `$(A,B)(C)` — register.** *For A, a B is a C.* **There is no form that registers without naming a scope**, so no registration is process-wide. Returns `C`. *Seen: a registration visible inside its scope and invisible outside it, with no global form available to write.*

- **R4a. `$(A,B)(C,{…})` carries options.** The plain form is the one that projects downward; options exist to narrow. *Seen: the two-argument form differing observably from the one-argument form on the same pair.*

- **R5. `$(Component,$)` — what stands behind it.** Returns the chemical the component wraps, replacing the displaced inverse. *Seen: the same object `.$chemical` returns, and the six existing promises passing against the new form.*

- **R6. The representative is `$` as an argument**, and its **position says the direction** — first, make a new one from this; last, give me what stands behind this. *Seen: `arg === $` discriminating, and no other value in the system able to satisfy it.*

- **R6a. A representative bonds tightly — no space across the comma.** `$($,Component)` and `$($Component)` are meant to look alike, because they differ only in their source. *Seen: the convention written into the coding standards and followed in every diff.*

## Priming and configuration time

- **R7. The framework establishes the scope before it calls user code.** Both entry points are ours — the bond constructor and the view — and event handlers are the third. *Seen: `$(X)` resolving correctly in a view, in a bond constructor, and in a click handler; and falling back to no scope anywhere else.*

- **R8. Configuration during a render is an error.** Registration attempted inside a render or a bond constructor **throws with a sentence naming where configuration belongs.** *Seen: the throw, in a test written red first.*

- **R9. Creating a scope during a render is an error.** `$($X)` and `$($,X)` inside a render would produce a new component per render and remount everything; they **throw** instead. *Seen: the throw, and the reason given.*

## Scope

- **R10. A component instance is a scope, and its reach is its progeny.** Resolution walks the lineage from the asking instance upward through the composition graph; the first registration found answers. *Seen: a registration on a book answered from a grandchild.*

- **R11. Downward projection is the default.** The alternative — a registration that reaches only the class that directly asks — would require naming every intermediate class, which nobody would write. *Seen: one registration on a book changing what its chapters render.*

- **R12. Fallback is prototypal, not walked.** A derived scope inherits through the chemical it derived from, the way a reactive store inherits its template's. *Seen: no lookup loop in the derived-scope path.*

- **R13. Privacy is not exporting.** A component object is a capability; a scope nobody can name is a scope nobody can reach. *Seen: two modules registering differently for the same framework component, neither affecting the other, with no configuration passed between them.*

- **R14. There is no global scope.** Follows from R4. *Seen: no API that registers without a scope, and a grep proving none exists.*

- **R15. Keys are identity, never names.** The catalogue canonicalises by a `$ref` **string**, so a scope's key must be unique per component rather than derived from a class name — two packages choosing the same word must not collide. *Seen: two components of the same class holding distinct registrations.*

## Reach — the axis that was underspecified

*Doug, 2026-08-11: **"We also need to decide if we are registering just for the class, or for the whole call stack all the way down somehow (or both, and we need to specify the difference) — that is a real design part that we need to specify."** It is two things, and they are separable.*

- **R22. A registration reaches the scope's PROGENY by default.** `$(A,B)(C)` answers when **anything rendered beneath A** asks for `B`, not only when A's own view asks. *Seen: a registration on a book answered from a sentence four levels down, with nothing named in between.*

  **The writing chain is why this is the default rather than an option.** `$Section` creates `$Paragraph`, `$Paragraph` creates `$Sentence`, `$Sentence` creates `$Letter` and `$Punctuation`, `$Word` creates `$Letter` — **every level of the parse creates the level beneath it by name.** So *"in my book, a sentence is mine"* has `$Paragraph` as its asker, never the book. Under asker-only reach, **the most valuable case in the system would be unreachable** without naming every intermediate class.

- **R23. The scope's own rendering is the narrow reach, and it is an option.** `$(A,B)(C,{…})` confines the answer to asks made by **A's own instances**, not their progeny. *Seen: a book whose own contents chapter is replaced while a contents nested inside one of its chapters keeps the default.*

- **R23a. The asker may be named, and that is the second knob.** *Beneath A, when a `$Paragraph` asks for `B`, use `C`* — the two axes compose, which is what Ninject's scope-plus-condition does and what a single axis cannot express. *Seen: two registrations in one scope for the same requested component, distinguished only by which class asks.*

- **R24. Resolution order is stated, not emergent.** **The nearest scope in the lineage wins**; within one scope, **the more specific registration wins** — an asker-named one over an unnamed one, a narrow reach over a projected one. *Seen: a nested scope overriding an outer one, and a named-asker registration beating a general one in the same scope, both as promises.*

- **R24a. The lineage is the composition graph, never a call stack.** React renders children **after** the parent's view has returned, so nothing survives on a stack to be read. `$parent$` is assigned at bind time and is what carries the relationship. *Seen: a grandchild resolving correctly even though its render happened long after its grandparent's view returned.*

## Two inheritances, and the precedence between them

*Doug, 2026-08-12: **"You are going to have a derived type inherit the parents scope right? If something is injected in X, and DX extends X, DX needs to get the dependency unless configured otherwise. And you might get weird competing factors if DX then renders and X — there is some form of precedence. It needs to be specc'd out very well before you do work."** It was not specified. It is now.*

**There are two inheritances and they were being conflated.** *Component derivation* — `$($,X)` — was specified at R2. ***Class* inheritance — `class $DX extends $X` — was not**, and it does not come for free: `$X`'s registrations live on `$X`'s **template instance**, while `$DX`'s template chains through `$DX.prototype → $X.prototype` and **never passes through `$X`'s template**. Different objects, no delegation.

- **R33. A subclass inherits its superclass's scope.** If something is registered for `$X`, a `$DX extends $X` gets it — because a subclass inherits everything else in this framework, and configuration not inheriting would be the surprise. *Seen: a registration made for a base class answered when a subclass renders, with nothing registered on the subclass.*

- **R34. The two static axes can FORK, and the catalogue is what carries a fork.** A component derived from `X`'s component has one parent; a subclass's template has a different one — and **a prototype chain cannot branch.** `$Catalogue.$including(...topics)` builds a scope that falls back to **several parents, searched in the order given**, and `$find` walks that chain recursively. *So the precedence below is not code we write — it is the topics list.* *Seen: a scope that is both derived and a subclass answering from whichever parent the order names first.*

  **This is the requirement Doug's instruction corrected.** An earlier draft said one prototype chain carried both axes; it cannot, and `$including` is why the catalogue *was practically made for this*.

- **R34a. Each catalogue mechanism has exactly one job, and none is decorative.**

  | mechanism | what it carries |
  |---|---|
  | `$new()` | a **derived** scope — a child whose `#topics` falls through to the one it came from |
  | `$including(a,b)` | a scope with **two parents in a stated order** — derivation and class, where they fork |
  | `$empty()` | a **root** — no topics, answering only itself |
  | `$find(ref)` | the **static** walk, recursive through `#topics`, which is steps 1 of R35 entire |
  | `$find(ref,subject)` | the **capability check** — it searches only a catalogue you already hold, which is the encapsulation rule in the machinery |
  | `$deref` | **teardown** — the only release any part of this design has |

  *Seen: no hand-written fall-through loop for the static axes anywhere in the diff.*

- **R35. Resolution order is a total order, stated here.** For an instance asking for `B`:

  1. **the asking instance's own scope, and everything it falls back to** — its derivation chain and its class chain, in the order its `#topics` names. **This whole step is one `$find`**, because the catalogue's walk is already recursive.
  2. **then the composition lineage**, innermost ancestor outward, each consulted the same way. This is the only walk we write, because lineage is dynamic and `#topics` is static.
  3. **then `B` itself** — identity, because the default was never in the container.

  Within any one scope, [R24](#reach--the-axis-that-was-underspecified) still holds: the more specific registration wins.

  *Seen: each step demonstrated by a promise that fails if the step above it is consulted in the wrong order.*

- **R35a. THE ONE CONTESTABLE CHOICE, and it is Doug's.** Step 1 before step 2 means **the asker's own configuration beats an ancestor's** — nearest-to-the-asker wins, which is how React Context, CSS and Angular's element injector all behave, and what a reader will expect. **The cost is that a book which configured itself cannot be re-dressed from outside.** The alternative — lineage first — would let an outer dress override anything below it, at the price of a component never being able to rely on its own configuration. *Recommended as written; flagged because it is the one place the design could reasonably go the other way, and reversing it later would change behaviour silently rather than loudly.*

- **R36. Opting out needs no new form.** *"Unless configured otherwise"* is a registration on the subclass that restores the base — `$(DX,B)(B)` — which shadows the inherited one by the same rule as everything else. *Seen: a subclass declining an inherited registration in one line.*

- **R37. A second root for one class is a component scope, not the class's.** `$($X)` creates a new root each call; the **class** axis reads the store on the class's **template**, which is one per class by construction. A second `$($X)` participates as an ordinary component scope. *Seen: two roots for one class, only one of which subclasses inherit from.*

## How a chemical consumes, and how an app configures

*Doug, 2026-08-12: **"When you override and create a new bond constructor, a new scope exists so a property that stores a component or the view that requests the component could be changed in that way"** and **"a convention for an app is to pull in many dependencies or many dependencies for a part of the app, creating new components as needed, and then setting registrations."***

- **R29. Consuming is a local variable, and that is the form.** *Doug, 2026-08-12: "I am fine with seeing components assigned to variables. Assigning properties is redundant if subclasses inherit scope."*

  ```tsx
  import * as parts from '@dna-platform/lib';

  view() {
      const TableOfContents = $(parts.TableOfContents);
      return <TableOfContents/>;
  }
  ```

  *Seen: every consumption site in `lib` and the demo reading this way, with no component stored on a property to make it overridable.*

- **R29b. The local KEEPS THE COMPONENT'S NAME. No site invents a new one.** *Doug, 2026-08-12: "DO NOT give a new name to every component."* The namespace import exists precisely so the local can shadow with the same name and the JSX below reads unchanged. A component is named for its class without the `$`; a resolved local keeps the name it asked for. *Seen: no consumption site in the diff introducing an alias, and the JSX at every site reading as it did before the container existed.*

  **The namespace is required, not stylistic** — `const TableOfContents = $(TableOfContents)` is a `ReferenceError`, verified: the `const` claims the name for the whole block before the import can be read.

- **R29a. A component CAN be held; we don't, because avoiding it is the point.** *Doug, 2026-08-12: "Components shouldn't be stored as properties. The bond constructor takes in chemicals," and "components can be held in theory but we are using `$` to avoid it."* Nothing prevents a plain property from holding one — **holding it is how a component becomes something to pass around**, which is the thing this sprint removes. Two facts stand beside the ruling: a bond constructor receives **instances** (`$Book(...chapters: $Chapter[])`), so it is not the place; and a **field initializer runs once, on the template, before any scope exists**, so an ask written there could not resolve correctly. *Seen: no property in `lib` or the demo holding a component, and no `Component<…>` in a class body in the diff.*

- **R30. Substituting a resolved component has exactly ONE route: register.** Overriding a bond constructor changes what **chemicals** a chemical was handed, which is a different act about different things. Plain property overriding remains [polymorphism](../../../chemistry/.lib/composition/07-polymorphism.md) for values that are not resolved. *Seen: the Lab stating the three acts and what each is for, with only one of them substituting a component.*

  **This is what scope inheritance bought.** With a subclass inheriting its superclass's scope, the register route is sufficient on its own — which is why the other two stopped being alternatives and went back to being what they always were.

- **R31. An app configures in a configuration module, and the convention is named.** A module **imports the classes it works with, creates the components it needs** — `$($X)` for a root it owns, `$($,X)` to derive from someone else's — **sets its registrations, and exports the configured components.** Downstream code imports those and renders through them. *Seen: a module that reads top to bottom as imports, components, registrations, exports — and an app whose character comes from which modules it composes.*

- **R32. Registration appears only in configuration modules, and that is greppable.** Everywhere else writes `$(X)` to ask. This is [the composition root's own law](https://blog.ploeh.dk/2019/06/17/composition-root-location/) — *the container must never leak outside it* — in the only form we can enforce: a grep with an empty result outside the configuration modules. *Seen: that grep, in the report.*

## Compatibility

- **R16. With nothing registered anywhere, behaviour is byte-identical.** `$(X)` returns the very object it was given, so no component type changes and nothing remounts. *Seen: the full existing suite green with the feature present and unused.*

- **R17. `$('div',X)` is unchanged.** The tag form keeps its meaning and its global reach. *Seen: the html-catalogue tests green, untouched.*

- **R18. The six inverse promises move rather than die.** *Seen: the same assertions, rewritten against `$(X,$)`, passing.*

## What the framework and the demo become

- **R19. `lib` delegates to `$` wherever a component depends on a component — all of them, not a chosen few.** *Doug: "when a component component dependency exists, go through the container."* Measured: **33 dependencies across 22 files.** *Seen: a consumer replacing a part without reimplementing the reading that creates it.*

- **R19a. The writing chain is the one that proves it deserves to be native.** `Section → Paragraph → Sentence → Letter | Punctuation`, and `Word → Letter`. Once those go through `$`, **a consumer specializes any level of the model by registering**, where today they must subclass every level between — which is precisely what the markdown mini framework had to do. *Seen: a book in which sentences are a consumer's own class, with no subclass of `$Section` or `$Paragraph` anywhere.*

- **R19b. The reference chain goes with it.** `$Path` is created by `then()` on every reference kind. *Seen: one registration changing how every reference in a scope travels.*

- **R26. The chemistry Lab carries serious coverage, as cases.** *Doug: "I'm going to want really serious coverage in the app of these functionalities and registration."* The Lab's 94 cases are keyed to the book's own sections — `III-3-binding-constructor.tsx` is Composition chapter 3 — so these land as **`III-11`**, one per form and one per reach. *Seen: a case per form, a case per reach, and a case for each resolution-order law, all driveable.*

- **R27. The demo is redesigned around this, not merely ported.** *Doug: "rewritten and even redesigned / refactored when possible to use this to show off why it deserves to be native."* *Seen: a demo whose per-book character comes from registration rather than from subclassing, and a diff in which classes are deleted rather than added.*

- **R28. The chemistry app keeps working, and its bugs are fixed on the way.** It has its own three drivers — `verify-all.mjs`, `verify-check.mjs`, `verify-section.mjs`. *Seen: all three completing, with any failure they surface fixed rather than baselined.*

- **R20. The demo's three dresses become three scopes.** The `spec` parameter threaded across 33 sites goes, and each part asks `$` for its face. *Seen: the three dresses still recognisably themselves, with no face threaded through any signature.*

- **R21. The demonstration is two books from one class.** Same `$Book`, rendered through two component scopes, drawing different tables of contents — **with no props passed, no subclass of `$Book`, and the one line of framework source shown beneath them, unedited.** *Seen: exactly that, on one screen.*

## Key flows

- **F1 — A framework author writes a consumer.** Names the component they need, asks `$` for it, renders the answer. Nothing about scope appears in their code.
- **F2 — A consumer overrides.** Derives their own component from the framework's, registers what should stand in, renders through theirs. Nothing is passed down.
- **F3 — Two consumers coexist.** Each derives privately; neither sees the other's registrations; the framework is unaware of both.

## Acceptance examples

- **AE1.** With an empty registry, `$(X)` returns the identical object — `$(X) === X`.
- **AE2.** `$($,X)` returns a component that is not `X`, and resolves what `X`'s scope holds.
- **AE3.** A registration on a derived scope is invisible from the scope it derived from.
- **AE4.** `$($X)` returns a root: a registration on the class-created component is not answered by anything above it, because there is nothing above it.
- **AE5.** `$(A,B)(C)` then resolving `B` inside `A` gives `C`; resolving `B` outside `A` gives `B`.
- **AE6.** A registration on a book is answered from a grandchild of that book.
- **AE7.** Two private components of the same class hold different registrations, and neither leaks.
- **AE8.** Registration during a render throws, naming where configuration belongs.
- **AE9.** `$($X)` or `$($,X)` during a render throws.
- **AE10.** `$(X,$)` returns the same object as `X.$chemical`, and the six moved promises pass.
- **AE11.** `$('div',CoolDiv)` still overrides the tag globally; the html-catalogue tests are untouched.
- **AE12.** `$(X)` resolves correctly in a view, in a bond constructor, and in an event handler.
- **AE13.** A `Component<Sub>` is accepted where `Component<Base>` is wanted and a `Component<Unrelated>` is a **compile error** — proved by a type test, red first.
- **AE14.** The three dresses render as they do today with **no `spec` parameter in any signature**, checked by grep shown in the report.
- **AE15.** Two books of one class, side by side, drawing different contents, with no props and no `$Book` subclass.
- **AE16.** `app/verify-demo.mjs` completes, with checkpoint accounting.
- **AE17.** Every existing suite green against a rebuilt chemistry `dist` — chemistry from **635**, lib from **203** — with the app typecheck's baseline unchanged by identity.

---

# Plan

*Set 2026-08-11. **WHAT, not HOW.** Unit identifiers are never renumbered.*

## Decisions

**D1 — `$` gains forms; it does not gain members.** *Chosen over `$.scope()`, `$.for().use()`, and a scope object that is itself a `$` — all rejected by Doug's ruling that `$` is an overloaded utility and not a catalogue.*

**D2 — The surface is the wrapped forms, not `TableOfContents()` / `TableOfContents($)`.** *Chosen for Doug's reason — the operand forms put a props check in **every** generated component on React's hottest path — plus two more: `Component<T>` stays a plain React FC for interop, and **the wrapped form is the reversible choice**, since adding the operand sugar later breaks nothing while removing call signatures would.*

**D3 — Scope is the component instance and its progeny.** *Chosen over a provider's position in the tree (React's shape) and over the module graph, which cannot work: both packages import the same class, so nothing at the call site distinguishes them.*

**D4 — Fallback rides the chemical prototype chain.** *Chosen over a hand-written lookup walk, because `Object.create` already does it and `backing()` is the shipped precedent.*

**D5 — Registration always names a scope; there is no global form.** *Chosen over a two-argument global registration, which was the only unsafe act in the design. Collisions become impossible to write rather than discouraged.*

**D6 — Configuration and scope creation fail validation during render, loudly.** *Chosen over allowing them, per Doug's ruling — and it also removes any need for the registry to be reactive, since nothing can change once rendering starts.*

**D7 — Keys are per-component identity, allocated from chemistry's own counter.** *Chosen over class names: the catalogue canonicalises by `$ref` string, and two packages naming a scope the same word would silently share one entry.*

**D8 — The floor is repaired first.** `verify-demo.mjs` is red on `main`. *Chosen over scheduling it late — every "driven" claim this sprint makes is worthless while the demo's own driver cannot finish, which is [the lesson filed twice already](../solutions/14-the-green-that-exercised-nothing.md).*

**D9 — Tests get a way to establish a scope directly.** *Queenie's gap: every form either registers or resolves in the current scope, and outside a render there is no scope — so without this, every promise must mount something. The seam is a decision, not a new public form.*

**D10 — Nothing is renamed and nothing is self-named.** `representative` is Doug's. The rest of the vocabulary is the framework's own.

**D11 — The default reach is the progeny, and the evidence decides it rather than taste.** *Chosen over asker-only, which reads safer and is: the writing chain creates each level from the level above, so `"in my book, a sentence is mine"` has `$Paragraph` as its asker. Asker-only would make the system's most valuable substitution unreachable without naming every class in between.*

**D12 — Narrowing is an option carrying both knobs — reach and asker.** *Chosen over two separate registration forms, which would double the surface for a case that is rare by construction, and over a single knob, which cannot express "beneath this book, when a paragraph asks."*

**D13 — Resolution order is a stated law: nearest scope wins, and within a scope the more specific registration wins.** *Chosen over first-registered-wins, which makes load order decide behaviour — the exact failure mode we removed by abolishing global registration.*

**D14 — The lineage is the composition graph, and this is a fact rather than a preference.** React renders children after the parent's view returns, so a render stack does not survive to be read. `$parent$` is assigned at bind time and carries the relationship. *Named as a decision because "the whole call stack all the way down" is the natural way to say it and the wrong way to build it.*

**D15 — `lib` is converted wholesale, not sampled.** *Chosen over converting the interesting sites: a container that covers some dependencies is a container consumers cannot trust, and the writing chain — the part that matters most — is also the part a sampling pass would most likely skip as "just the parse."*

**D16 — The chemistry Lab is where coverage lives, in its own numbering.** *Chosen over a new test surface: the Lab already carries 94 cases keyed to the book's sections, it is already driven, and a case is visible in a way a unit test is not.*

**D17 — The configuration convention is the composition root, adopted under its own name.** *Researched rather than invented: [Seemann's composition root](https://blog.ploeh.dk/2019/06/17/composition-root-location/) composes the graph in one isolated place near the entry point and holds that **the container must never leak outside it**; [Autofac's `Module`](https://autofac.readthedocs.io/en/latest/integration/aspnetcore.html) and .NET's `AddX()` extension methods group registrations per area so a root can compose them. Ours is both: **a configuration module per area, composed by the app.** Chosen over registering wherever a component happens to be defined, which makes load order decide behaviour and leaves nobody able to say what an app is configured to do.*

**D17a — And the honest part: by that literature's lights, our resolution is service location, which Seemann calls an anti-pattern.** His objection is exact and it applies — **a view-time ask hides what a class depends on**, so you cannot read a class and know what it needs. We take it anyway, because the alternative in React is threading components through props and constructors, which is [the problem this sprint exists to remove](#rulings-from-the-design-session--2026-08-11-verbatim), and because the type is preserved so a substitution cannot surprise a caller. **The mitigation is R29:** consuming in the bond constructor puts the dependency back where it can be read, and that is why it is the recommended form rather than merely an alternative one.

**D18 — A component is resolved where it is rendered.** *Revised twice on Doug's word, 2026-08-12. Holding one is possible and we decline it: **`$` exists so that nobody has to pass a component around**, and a held component is one to pass. Two facts sit beside the choice — a bond constructor takes chemicals rather than components, and a field initializer cannot resolve. What remains is a local at the point of use, named for what it resolved.*

**D18a — And the property route is not taught at all.** *Because it never worked: a field initializer runs once, on the template, before any scope exists. Plain property overriding remains polymorphism for values that are not resolved — and conflating the two is how a framework acquires a pattern that silently does nothing.*

**D18b — `Component<…>` does not appear in a class body.** *A consequence of the above rather than a style rule: if no property holds a component, no property needs that type.*

**D17b — And the answer to the objection is named, because it is reachable here and nowhere else in React.** *Doug: "Yes, I agree but all DI flows from this. What's the solution?"*

**The solution is constructor injection, and the reason nobody has it in React is structural rather than cultural.** Seemann's rule is *compose the object graph at the entry point* — and in React **you never get to, because React constructs your components.** There is no seam to hand anything into. That is why every React answer is a context or a registry, MUI's theme included.

**`$Chemistry` is the exception, because it owns construction** — `$lift`, `bind`, the synthesis — and it already has **a second constructor whose parameters are typed, parsed at runtime, and validated by `$check`.** The bond constructor *is* the composition root React lacks, and dependencies arriving there as declared, checked parameters would be constructor injection in full. Doug named this himself as a reason for the export syntax: *"we might want constructor-level injection one day, and that syntax could allow for it."*

**It is not built this sprint** — it is recorded as the direction, so the shape we ship now does not foreclose it.

**D17c — And Doug's answer is stronger than the mitigation I first wrote, so it replaces it.** *"It's not really different from constructor injection, and `$` can be configured before tests run so it's not like anything is hidden."*

Seemann's objection has two halves and **neither survives contact with what our ask actually is.**

**Nothing is hidden from a reader, because the token is an imported symbol.** `$(parts.TableOfContents)` names a static import — not a string, not an interface pulled from a global registry, which is the shape being objected to. A class's dependencies are **greppable, statically analyzable, and derivable from its source by a build step.** That is a different thing from `container.Resolve<IFoo>()` scattered through a codebase.

**Nothing is hidden from a test, because `$` is configured before the test runs.** Establishing a scope beforehand is what passing a fake is for, and it arrives at the same place: the code under test receives the substitute without knowing.

**What remains is one narrow residue** — you cannot substitute by *calling* a constructor differently, only by configuring beforehand. That is what constructor injection through the bond constructor would close, and it is why that stays the direction. **It is not a debt this design carries; it is the next thing it makes possible.**

## Units

### The floor

- **U1 — `verify-demo.mjs`, repaired.** *Mechanism: its landmarks predate last sprint's rename — it clicks `anatomy` where the bar now reads `reading`, and it has no checks for `compare`. Files: `app/verify-demo.mjs`. Depends on: nothing. Realizes: AE16. **Visible end:** the walk completing with checkpoint accounting, on a driver that exits 1 today.*

### The framework — `library/chemistry/package`

- **U2 — The representative in the dispatch.** *Mechanism: `arg === $` identity tests added to `Chemistry.view` for the first and last argument positions, placed where they cannot shadow the eval overload. Files: `abstraction/chemical.ts`. Depends on: nothing. Realizes: R1, R2, R5, R6. **Visible end:** the four forms answering, each with a promise.*

- **U3 — Component identity.** *Mechanism: a component created by `$lift` carries its own identifier, allocated from the counter chemistry already uses for chemical symbols, so two components of one class are distinguishable as catalogue keys. Files: `abstraction/particle.ts`, `implementation/types.ts`. Depends on: nothing. Realizes: R15, AE7. **Visible end:** two components of one class holding different registrations.*

- **U4 — Root-ness becomes a per-object question.** *Mechanism: `$isTemplate$` compares against a single static per class, so a second root would take `$lift`'s `direct` path and share one object across mounts. The per-object `[$derived$]` test already exists in the same file. Files: `abstraction/particle.ts`. Depends on: U3. Realizes: R1. **Visible end:** two roots for one class each rendering with their own per-mount instances.*
  **Bounded:** if the change reaches past root-ness into the lift path's other branches, it stops and reports.

- **U5 — The scope store.** *Mechanism: a `$Catalogue` per scope, keyed by component identity; a derived scope's is the parent's `$new()`, a class-created scope's is a root. Files: `abstraction/chemical.ts`, `implementation/catalogue.ts` if it needs anything. Depends on: U3. Realizes: R12, R15, D7. **Visible end:** a derived scope answering its parent's registration and a root scope not.*

- **U6 — Priming.** *Mechanism: the current scope is established around the three calls the framework already makes — the bond constructor, the view, and an augmented handler — using the same ambient technique `currentScope()` uses for reactivity. Files: `abstraction/particle.ts`, `implementation/augment.ts`. Depends on: U5. Realizes: R7, AE12. **Visible end:** `$(X)` resolving in all three, and falling back to nothing outside them.*

- **U7 — Resolution.** *Mechanism: `$(Component)` reads the current scope, walks the lineage upward through the composition graph, and answers the first registration; with none, it returns its argument. Cached per mount, which is sound because configuration cannot change after rendering starts. Files: `abstraction/chemical.ts`. Depends on: U6. Realizes: R3, R10, R11, R16. **Visible end:** AE1, AE5 and AE6 as promises.*

- **U8 — Registration.** *Mechanism: `$(A,B)` answers a registrar; calling it writes into A's scope. The options argument narrows. Files: `abstraction/chemical.ts`. Depends on: U5. Realizes: R4, R4a. **Visible end:** a registration visible inside its scope and invisible outside it.*

- **U21 — Reach.** *Mechanism: the lineage walk either stops at the asking instance's own scope or continues upward; a registration carries which, and the projected form is the default. Files: with U7, U8. Depends on: U7, U8. Realizes: R22, R23. **Visible end:** a registration answered four levels down, and the same registration narrowed so it is not.*

- **U22 — The asker filter, and the order.** *Mechanism: a registration may name which class's asks it answers; where several match, the nearest scope wins and the more specific registration wins within a scope. Files: with U21. Depends on: U21. Realizes: R23a, R24. **Visible end:** two registrations in one scope distinguished only by who asks, and a nested scope overriding an outer one.*
  **This is the unit that decides whether the feature is understandable.** Resolution order that emerges from implementation rather than from a stated law is how a container becomes folklore.

- **U32 — The class axis.** *Mechanism: a class template's scope is created with its superclass template's scope among its `#topics`, so a subclass inherits by the catalogue's own recursive `$find` and shadows by being asked first. Where a scope is **both** derived and a subclass, `$including` carries both parents in the order R35 states. Files: with U5. Depends on: U5. Realizes: R33, R34, R34a, R37. **Visible end:** a registration made for a base class answered when a subclass renders, and a subclass declining it in one line.*
  **This unit exists because Doug caught its absence.** The first draft of this plan specified component derivation and silently assumed class inheritance came with it.

- **U33 — Precedence, and it is promised step by step.** *Mechanism: `#topics` order carries the static axes; the lineage walk is the only loop we write; identity is the floor. Files: with U7. Depends on: U32, U21. Realizes: R35. **Visible end:** a promise per step that **fails if the step above it is consulted in the wrong order**, plus the grep showing no hand-written fall-through for the static axes.*
  **R35a is Doug's to rule** — the asker's own configuration beating an ancestor's — and this unit **does not start until that word is given**, because reversing it afterwards changes behaviour silently rather than loudly.

- **U9 — The guards.** *Mechanism: the priming state already says whether user code is running, so configuring or creating a scope there throws with a sentence. Files: with U6. Depends on: U6, U8. Realizes: R8, R9. **Visible end:** two throws, both written red first.*

- **U10 — The displaced inverse.** *Mechanism: branch 4 stops answering the chemical and answers a resolution; `$(X,$)` takes over, and the six promises are rewritten against it. Files: `abstraction/chemical.ts`, `tests/react/dollar-inverse.test.tsx`, `tests/react/identity.test.tsx`. Depends on: U2. Realizes: R5, R18, AE10. **Visible end:** six promises passing against the new form.*

- **U11 — The types.** *Mechanism: the `$Chemistry` interface gains the four forms, ordered so none shadows the eval overload; the subclass constraint is carried by `Component<T>`'s existing covariance through `$Bound<T>`. Files: `abstraction/chemical.ts`, `implementation/types.ts`. Depends on: U2. Realizes: R3, AE13. **Visible end:** a type test where a sibling class is a compile error — red first.*

- **U12 — Teardown.** *Mechanism: a scope releases its catalogue with `$deref`; a derived scope is removed from what it derived from. Files: with U5. Depends on: U5. Realizes: R13's retention half. **Visible end:** a scope that has been released answering nothing, and its parent no longer holding it.*

### The library — `library/.public/package/src`

- **U13 — The book and document dependencies.** *Mechanism: `$Row` inside `$TableOfContents.parts()`, `$Title` in the contents and in `$Document`, `$Legend` and `$Key` in `$Footer`, `$Location` in `$Composible$`. Files: those. Depends on: U7. Realizes: R19. **Visible end:** a consumer replacing the row class without touching `parts()`.*

- **U23 — The writing chain, and it is the one that matters.** *Mechanism: `$Section` creating `$Paragraph`, `$Subtitle`, `$Tagline`; `$Paragraph` creating `$Sentence`; `$Sentence` creating `$Letter` and `$Punctuation`; `$Word` creating `$Letter` — each becomes an ask. Files: the six writing modules. Depends on: U7, U21. Realizes: R19a. **Visible end: a book whose sentences are a consumer's own class, with no subclass of `$Section` or `$Paragraph` anywhere** — which is exactly what the markdown mini framework had to write three subclasses to achieve.*
  **Bounded:** the parse's *behaviour* does not change. If an ask alters what the reading finds rather than what draws it, it stops and reports.

- **U24 — The reference chain.** *Mechanism: `then()` creates a `$Path` on every reference kind; each becomes an ask. Files: the reference and book modules that implement `then()`. Depends on: U7. Realizes: R19b. **Visible end:** one registration changing how every reference in a scope travels.*

- **U28 — The sweep is proved complete.** *Mechanism: the count of component-to-component dependencies not going through `$` is **zero**, shown by the same grep that measured 33 across 22 files. Files: none — a check. Depends on: U13, U23, U24. Realizes: R19, D15. **Visible end:** the grep and its empty output, in the report rather than in a claim.*

- **U14 — The unused seam.** *Mechanism: `$TableOfContents.row()` was cut by hand so a subclass could change one drawing, and the only specializer overrides `view()` instead. With U13 the substitution happens at the component. Files: `src/book/TableOfContents.tsx`. Depends on: U13. Realizes: R19. **Visible end:** either the method gone, or a stated reason it earns its place.*

### The demo — `library/.public/package/app`

- **U15 — The three dresses become scopes.** *Mechanism: each dress is a component scope registering its faces once; the parts ask `$` rather than receiving a `spec`. Files: `app/src/markdown/reading.tsx`, `app/src/sections/page/faces/`. Depends on: U7, U8. Realizes: R20, AE14. **Visible end:** the three dresses unchanged on screen, and `spec: DressSpec` appearing in zero signatures.*

- **U16 — The books become scopes.** *Mechanism: `const TheManifold`, `const TheShelf` and `const ThePage` are already private component bindings; they become the scopes their books configure. Files: those three modules. Depends on: U7, U8. Realizes: R13. **Visible end:** a per-book registration that no other book sees.*

- **U17 — The demonstration.** *Mechanism: two books of the same class, side by side, rendered through two component scopes with different contents registered, and the framework line that produced both shown beneath by the existing `?raw` drawer. Files: `app/src/sections/`. Depends on: U15, U16. Realizes: R21, AE15. **Visible end: one line of source, two different renderings, no props and no subclass** — the thing a hand-authored page cannot fake.*

- **U27 — The demo redesigned, not ported.** *Mechanism: the places the demo specializes by **subclassing** are re-examined, and the ones that are really substitutions become registrations — per-book parts, the faces, the figures. Files: `app/src/sections/book/library/**`. Depends on: U16, U23. Realizes: R27. **Visible end: a diff in which demo classes are DELETED**, and each book's character comes from what it registers rather than from what it re-implements.*
  **The honest counterweight:** `$ShelfContents` overriding `view()` wholesale is **correct** and must survive. A substitution replaces a part; a different drawing is a different class. If this unit starts converting the second kind, it has misunderstood the feature.

### Coverage — `library/chemistry/package/app`

- **U25 — The Lab gains a section, not a case.** *Mechanism: the Lab's 94 cases sit in sections keyed to the book — `adapted/`, `blocks/`, `cloning/` — so this gets **its own section**, numbered `III-11`. It covers **each form** (`$($X)`, `$($,X)`, `$(X)`, `$(X,$)`, `$(A,B)(C)`), **each reach** (projected, narrowed, asker-named), **each resolution-order law**, **the consumption form** and the one case where storing at bind is observably different, and **the two routes to specialization side by side** — register, or override the bond constructor — **with a case showing that the property route does nothing for a resolved component**, since a field initializer runs before any scope exists. Files: a new section under `app/src/sections/`, and the Lab's registry. Depends on: U22. Realizes: R26, R29, R30. **Visible end:** a page where every form and every reach is shown working, and every failure mode shown failing.*
  **Doug's charge in his words:** *"really serious coverage in the app of these functionalities and registration."* A case is visible where a unit test is not, which is why these are cases rather than more promises.

- **U29 — The convention is written down before it is followed.** *Mechanism: the configuration module — imports, components, registrations, exports, in that order — and the law that registration appears only there, added to [the specification chapter](../../../chemistry/.lib/composition/11-the-representative.md) with a worked example. Files: that chapter, and [Structural Patterns](../../../chemistry/.lib/authorship/02-structural-patterns.md) for the R6a spacing row. Depends on: U8. Realizes: R31. **Visible end:** a convention a reader can follow without asking, and a Lab case that follows it.*
  **The doc-first rule is the framework's own** — *"stop coding, write the doc, get review on the doc, then write the code"* — and a configuration convention discovered by writing configuration is how every app ends up configured differently.

- **U30 — The demo configures itself the way the convention says.** *Mechanism: the demo's per-book and per-dress registrations move into configuration modules that export configured components; nothing outside them registers. Files: `app/src/sections/book/library/**`, the page's dresses. Depends on: U29, U15, U16. Realizes: R31. **Visible end:** each book's configuration readable in one file, top to bottom.*

- **U31 — The container does not leak, and it is proved by grep.** *Mechanism: the registration form appears **only** in configuration modules across `lib`, the demo and the Lab. Files: none — a check. Depends on: U30. Realizes: R32. **Visible end:** the grep and its empty output, shown in the report rather than asserted.*

- **U26 — The chemistry app stays green, and its bugs get fixed.** *Mechanism: `verify-all.mjs`, `verify-check.mjs` and `verify-section.mjs` are run before the framework work starts, so their state is known, and again after. Files: those three, plus whatever they surface. Depends on: U2. Realizes: R28. **Visible end:** three drivers completing, with anything they surface **fixed rather than baselined**.*
  **Run them first.** If any of the three is already red — as `verify-demo.mjs` was — that is floor work and belongs beside U1, not discovered at the end.

### Gates and records

- **U18 — The promises.** *Mechanism: co-located per the seam settled last sprint, with the scope-establishing seam from D9 so a promise need not mount to assert isolation. Files: with each unit. Depends on: U9. Realizes: R16, and every AE. **Visible end:** a stated count with its typecheck status attached.*

- **U19 — The driver.** *Mechanism: `verify-demo.mjs` gains checks for the demonstration; `verify-book.mjs` keeps its 48. Files: both drivers. Depends on: U17. Realizes: AE16. **Visible end:** both drivers completing, and each watched going red before its green is trusted.*

- **U20 — The records.** *Mechanism: the specification chapter loses its in-progress line and becomes an account; $Chemistry's Projection gains its entry; this chapter gains its state. Files: [Composition 11](../../../chemistry/.lib/composition/11-the-representative.md), [$Chemistry Projection](../../../chemistry/.lib/projection/.cover.md), this chapter, [Structural Patterns](../../../chemistry/.lib/authorship/02-structural-patterns.md) for R6a. Depends on: everything.*

## Test scenarios

*Compacted at compounding — The sprint's test scenarios stood here. **They are now the suite** — a scenario that survived is a promise, and a promise is read where it runs, not where it was planned.*

## Risks

*Compacted at compounding — The pre-flight risk list stood here. **A risk that fired is in the record below**, with what it cost; the rest did not.*

## Self-check

*Compacted at compounding — The plan's self-check stood here, and it passed before work started.*

# Where things stand

*One state, written 2026-08-12 at the session's close. Everything above is the record; this is the present.*

## → NEXT: [The Parse](13-the-parse.md) — *superseded 2026-08-12, twice, by Doug*

**What this session closed on:** *"Next sprint is making code in books live so we can implement types and other forms of validation."*

**Reversed the same day, in two steps.** First to the build — *"I think we need to do the .public build before we do types. We need to know what it's like to lift this code first before we try to guess at what point code might be made to run."* Then to the writing model, which now runs first: see [The Parse](13-the-parse.md). **Types still waits, and the build still precedes it.**

The reason both reversals hold is the same one: [the failure filed against Sprint 48](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md) is what happens when an undesigned mechanism gets a unit instead of a design session, and guessing where code runs before lifting the code is that move again.

**Two decisions are Doug's and neither blocks starting.** Whether the Lab's two cases stand in for the demonstration this sprint's plan named — two books of one class, which does not exist. And whether the remainder — the dresses, the region-scoping design, the `.public` demo redesign — is a sprint of its own.

## Said plainly, for whoever is not tracking identifiers

**`$` can now be asked what to draw, and the answer depends on where you are.** A component is a scope. Register something on it and everything rendered beneath it draws your version instead — without the thing drawing it being subclassed, told, or handed anything. Privacy is simply not exporting the component: a scope nobody can name is a scope nobody can reach.

**Nothing broke for anyone who does not use it.** With nothing registered, asking returns the very object you asked with.

**Two demonstrations run in the chemistry Lab.** Three houses drawing one class three ways, and a theme swapped live from a click.

## The state, once

**Complete, verified and driven.** The whole `$` surface — resolve, the model at `.$`, a derived scope, registration that cannot be written without naming a scope, reach, the asker filter, and a stated precedence. Scoping by component instance with derivation and class inheritance, held in the reflection catalogue. Priming around the bond constructor, the view and event handlers. Both guards. Teardown. Plain function components taking part. `lib` converted at 29 of its 34 dependency sites. Two Lab cases, in the driver, each watched failing first.

**Two latent bugs found and fixed on the way**, neither of them this sprint's subject: `$lift` asserted a registry lookup non-null and crashed nondeterministically when it missed — reproduced red-first and repaired; and `$(a plain function)` used to answer a *different* function that only exploded when something rendered it.

**Not built.** `$($X)` still answers one component per class — a fresh root each call broke 43 tests and buys a case Doug said does not arise, so the requirement was amended rather than the code forced. The dresses are not scopes. The `.public` demonstration named in the plan does not exist. Region-scoped substitution through the parse is **unavailable by law**, not by omission.

## Blockers

**None.** Two decisions are open and both are Doug's, named above.

**Two cleanups, one done and one queued.** The `type` keyword left `lib`'s imports — **116 across 35 files**, no new cycles — and one exception is now law: a *re-export* genuinely needs `export type`, and its names must be checked one by one, because a value made type-only breaks consumers where no gate can see it. What remains is the model's root, and it is [one job wearing three symptoms](00-planning.md#queued--what-a-reference-form-is-and-whether-it-belongs-to-the-chemical-hierarchy-doug-2026-08-12): `$Referent` as a class, the `$$` reference forms, and the `$X$` names. **`ts-morph` 28.0.0 is installed** for the mechanical half of it.

## Verified — every gate this branch has, including the ones not run

*Named in full rather than listed selectively — the last handoff reported four accurate greens and omitted a fifth gate that was red.*

| gate | result |
|---|---|
| chemistry suite + `tsc` | **674/674**, 61 files, `tsc` 0 |
| lib suite + `tsc` | **203/203**, 21 files, `tsc` 0 |
| app typecheck (`.public`) | 70 files, 4 baselined by identity, **0 unexpected** |
| `verify-book.mjs` | **exit 0, 48 checkpoints** |
| `verify-demo.mjs` | **exit 0, 25 checkpoints** — red on `main` at the session's start, repaired |
| chemistry Lab `verify-all.mjs` | **19 PASS / 0 FAIL / 0 ERROR** |
| chemistry `verify-check.mjs`, `verify-section.mjs` | **NOT RUN** — they exist and were never exercised this session |
| chemistry Lab app typecheck | **NOT IN ANY GATE** — 18 pre-existing errors, the same disease `.public` had before its own gate was installed |

**Nothing is left deliberately broken.** Three probes were run and reverted — a resolution stub, a lift assertion, two demo registrations — and each was confirmed restored by a fresh green.

## How to see it

```
cd library/chemistry/package && npx vite app --port 4000
```

Open **`/representative`**. **Three houses** first: the same `<Note/>` drawn as dots, stars and numerals by registration alone — type in the text and all three move; move the travelling note between houses and it changes by *moving*. Then **the theme, live**: pick a theme and both leaves repaint; press *register dawn, change nothing else* and nothing moves, because the registry is deliberately not reactive; press *now repaint* and dawn appears.

The `.public` demo is `cd library/.public/package && npx vite app --port 5199`, at `/page` and `/books`.

## Wrong turns already taken — do not repeat

- **Do not thread a parent through the parse.** It loops the page and every unit suite stays green. [Filed](../solutions/16-the-parse-that-woke-its-own-parents.md).
- **Do not judge root-ness per object** (`$derived$` instead of the class-wide static) without designing what a template is first — it breaks 43 tests across 12 files, because `$Html$` and second instances take the direct path deliberately.
- **Do not fail a plain function component.** It was tried; a component is a function whose props are its parameters, and it may be side-effecting.
- **Do not register from inside a view or a bond constructor** — it throws, correctly. A handler is fine; it runs after the paint.
- **Do not expect a registration alone to repaint.** The registry is not reactive; something must ask again.
- **Do not verify a parse change with the suite alone.** No test renders a book.

## Read these five, and they are sufficient — shaped for the brainstorm ahead

1. **[Types — another sprint, by ruling](09-the-subject.md#types--another-sprint-by-ruling)** — the rulings already made and still binding: code writeable in a chapter through `toString`, so the same object is the running constraint and the printed chapter; `$Type` a reference like an import, proceeding up the subject chain; code weighing in at validation; the library self-specifying.
2. **[Chapter zero's Types section](00-planning.md)** — why it waits, and what it must answer before it gets files: *what runs, and when*.
3. **[The Representative](../../../chemistry/.lib/composition/11-the-representative.md)** — the `$` surface as shipped. **Load-bearing for the next sprint rather than merely recent:** `$Type` was described as *a reference proceeding up the subject chain*, and this sprint built a resolution that walks a chain and answers per scope. Whether those are the same mechanism is the first question worth asking.
4. **[The parse that woke its own parents](../solutions/16-the-parse-that-woke-its-own-parents.md)** — validation reads the parse, and this is the law about what a reading may do while something is looking at it.
5. **[The sprint that planned what it had not designed](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md)** — the failure this next sprint is most likely to repeat, because `$Type` is precisely the unit that caused it.
