# The specimen that was the component

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

**Keywords:** `$lift` · `direct` · `$isTemplate$` · `$$template$$` · specimen · prop leaked · shared instance · state persists across sites · two sites one instance · `$Formula` · `cache` · per-mount derivative

## What was observed

***A prop written on one element changed a different element.***

Two tiles drew the same cached specimen. One of them was written with an extra attribute — `<Element hue={140}>Copper</Element>` — and **both tiles changed colour**, including the one three rows above it that carried no such attribute. Nothing else on the page was wrong; the resolution was correct, the class was correct, the text was correct.

***And thirty-one green promises did not see it.*** The suite asserted that two specimens of one class differ from each other. It never asserted that **one site cannot disturb another**, which is a different claim entirely.

## Why it happened

**[`$lift`](../../../chemistry/package/src/abstraction/particle.ts) has two paths and the predicate that chooses between them is `$isTemplate$`.**

```typescript
const direct = !(parent as any)[$isTemplate$];
```

- **A template** takes the *derivative* path: every mount gets `Object.create(template)`, with its own cid, its own reaction, its own molecule. State written at one site stays there.
- **Anything else** takes the **`direct`** path: ***the instance IS the component.*** No copy is made, state persists across unmount and remount, and every site that renders it renders **the same object**.

And `$isTemplate$` is `this == this[$type$][$$template$$]` — *am I the one instance my class registered?*

***A second specimen of a class is not that class's registered template.*** The first `$Metal` constructed claimed `$Metal[$$template$$]`; every later one — exactly the ones an implementer files under their own names — answered `false` and went down `direct`. **So the catalogue was handing out one shared object per name, and a prop written at any site reached all of them.**

## The fix, and it is one line

***A specimen is a thing to COPY.*** [`cache`](../../../chemistry/package/src/abstraction/formula.ts) stamps what it files as a template of its own:

```typescript
Object.defineProperty(this, $isTemplate$, { value: true, configurable: true });
```

**Every site that names it then derives its own**, inheriting the specimen's configured state through the prototype and writing to nobody else's. *Doug's own sentence is the specification — "we can use the component to make instances as needed" — and the defect was that we were not making any.*

## What it costs to know

**The general shape is worth more than the fix.** `direct` is a *documented, deliberate* mode — it is how a held instance keeps its state across remounts — and it is selected by a predicate that says *template*, not *shared*. **Anything that hands out instances rather than classes will meet it**, because "the instance somebody kept" and "the instance a class registered" are not the same set.

***The greppable tell:*** any code that renders an instance it did not construct at that site — a registry, a catalogue, a pool, a cache — should ask whether that instance is its class's template, and if it is not, decide **on purpose** whether it wants one object or many.

## And the lesson about the suite is the larger one

***The demonstration found this and the suite did not.*** The suite could only see it by asserting a *negative interaction between two sites*, which is not a thing a unit test naturally reaches for — and the screen showed it in one glance, because two tiles that should have differed were the same colour.

**[The validatable law](../../../../.claude/library/our-skillset/28-ce-brainstorm.md#the-validatable-law) is usually argued as a reviewability rule.** *It is also a detection mechanism*, and this is the case that proves it: **a demonstration is a test with a very wide assertion**, and the assertion it makes — *everything on this page is what it should be* — is one no suite writes down.

*The promise exists now — `A PROP AT ONE SITE NEVER REACHES ANOTHER` in [`formula.test.tsx`](../../../chemistry/package/tests/abstraction/formula.test.tsx) — and it goes red without the stamp. It was written **after** the screen found it, which is the honest order and worth recording as such.*
