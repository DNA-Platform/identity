# Open Questions

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Things we *don't yet know* about $Chemistry. Each question names an uncertainty, the evidence we have, and the path to resolution.

How an open question resolves:
- **Confirmed** — investigate, write a unit test pinning the behavior, retire the question.
- **Wrong** — investigate, find the framework misbehaves, fix it, write the [caveat](04-caveats.md), retire the question.
- **Living** — keep the question open and link it from any feature page where the uncertainty matters.

---

## Bond constructor source parsing

The framework parses the bond constructor's source text with a regex to extract the typed parameter list. The regex breaks on:

- Default values (`title: string = 'Untitled'`)
- Destructured parameters (`{ title }: { title: string }`)
- Arrow-function bond constructors (currently disallowed but not always caught)

The parser silently produces wrong parameter shapes when these forms are present, leading to mis-matched JSX-child-to-arg routing. The framework may either throw, route to the wrong argument, or drop arguments.

**Path to resolution:** Write specimens for each broken form. Confirm in the Lab what actually happens. Replace the regex with a real TS parser (probably `@babel/parser` or `typescript` itself), or document the supported subset and reject the rest with a clear error.

---

## isView symbol branch

A code path in the view-detection logic checks for a symbol-keyed marker that may be unreachable in current usage.

Either the branch is dead and should be deleted, or it covers a case that no current test exercises and should be confirmed by Lab specimen. The cost of the wrong choice is small (dead branch is cosmetic), but the question is on the list.

**Path to resolution:** Identify the exact branch in source. Check whether any test exercises it. If yes, document and pin. If no, write a specimen, confirm behavior, then either delete the branch or pin it.

---

## Instance quickening

The path by which a particularized instance gains the framework's full machinery — what was originally framed as "quickening." The current allocation pattern (every `$Particle` allocates `$Molecule` and `$Reaction` regardless of particularization) means there is no quickening per se — the machinery is allocated unconditionally. See the [particle allocation caveat](04-caveats.md#particle-allocates-reactivity-machinery).

The open question is whether the allocation should *become* lazy — only allocating when reactivity is exercised — and what the cost/benefit of that change would be.

**Path to resolution:** Profile current allocation cost. Decide whether the cost justifies a redesign. If so, design lazy-allocation; specimen the behavior; pin it.

---

## $isChemicalBase$ inherited transitively

Queenie's sprint-24 finding: the `$isChemicalBase$` marker is set on `$Chemical` and inherited transitively by all subclasses. The `$Reagent` wrapping for non-`$`-prefixed user methods is gated on a "is this a `$ChemicalBase`?" check that, due to the inheritance, treats *every* subclass as the base — meaning the wrapping path may be unreachable for user-defined methods.

Most user methods on a custom `$Chemical` subclass may *not* be getting the `$Reagent` scope-tracking wrapper. The behavior path the framework was designed to take for these methods may be dead code; user methods would run un-wrapped, relying on field-access reactivity rather than method-wrapping reactivity.

**Path to resolution:** Build a specimen — a `$Chemical` subclass with a non-`$` method that mutates `$x`. Confirm whether the method is wrapped (via observable behavior — does external-write fan-out fire correctly?). Pin the result with a unit test regardless of outcome. If the wrapping is dead, decide: delete the path, or fix the predicate.
