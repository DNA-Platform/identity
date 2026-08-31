# The Formula

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

*Shipped in [The Formula](../../../.public/.lib/projection/24-the-formula.md). Every specification below is a promise in [`formula.test.tsx`](../../package/tests/abstraction/formula.test.tsx), and every one of them was watched going red before it was believed.*

## What a formula is

**A formula stands for something else, and the framework replaces it with what it symbolizes.** *Doug's sentence, and it is the specification rather than a gloss on one.*

A class extends `$Formula` and files instances of itself under names. Something written in a drawing names one, and the tag it was written as is replaced by the specimen that name stands for:

```tsx
class $Element extends $Formula {
    constructor() { super(); this.cache('Element'); }
}
class $NobleGas extends $Element {
    constructor() { super(); this.cache('NobleGas'); }
}

new $NobleGas().file('Ne', 'Neon', 320);   // a specimen, filed under its name

<Element>Neon</Element>                     // stands as that specimen
```

**The catalogue holds INSTANCES, not classes.** *Neon and argon are not two kinds of thing; they are one kind, twice, with different state.* So a class may file several specimens under several names, and each carries its own.

## The climb, and the asymmetry it produces

**A key CLIMBS.** `cache(key)` files the instance in its own class's catalogue **and in every formula ancestor's**, up to and including the *branch root* — the first class below `$Formula`.

***It never reaches `$Formula` itself.*** A key that did would be visible to every branch, and two unrelated families would become interchangeable.

What falls out is a taxonomy nobody wrote down:

- **An ancestor answers to a descendant's name.** `<Element>Neon</Element>` resolves, and so does `<Type>Autobiography</Type>`.
- **A descendant does not answer to a sibling's.** `<NobleGas>Iron</NobleGas>` finds nothing, because `$Iron` climbed into `$Metal` and `$Element` and never into `$NobleGas`.
- **A tag at any depth resolves to anything beneath it**, however deep. `<Biography>Autobiography</Biography>` gives an `$Autobiography`.

## First one wins, and why an ancestor is made first

**The first write of a key wins; a later write never displaces it.**

That rule is load-bearing rather than a preference, because **a super-chain runs an ancestor's `cache` call with the DESCENDANT as the receiver** — `this[$type$]` is always the most-derived class — so `cache` cannot know which class declared it. Constructing `$Autobiography` re-runs `$Biography`'s claim on `'Biography'`, and first-one-wins is what makes that harmless.

**For it to be harmless deterministically, an ancestor must claim its own name first.** So `$Formula`'s constructor **seeds**: it makes each ancestor's specimen, root downward, before a descendant registers. Without it the table would depend on which class somebody touched first, which is knowable and not stated. *A promise builds one hierarchy deepest-class-first and pins the same table.*

**A class enters the catalogue when its specimen is made** — which the [export pattern](../authorship/03-the-export-pattern.md) already does at module load, since `export const X = $($X)` constructs the template.

## The reading belongs to the formula

**By default a formula's key is the text it was written with**, trimmed. `keyOf` is an ordinary overridable member, so a formula may read its content any way it likes — and answering `undefined` declines the swap altogether.

That is what lets a formula **parse**:

```tsx
class $ChemicalFormula extends $Formula {
    override keyOf() { return undefined; }

    view() { /* split the text, draw <Element>{part}</Element> for each */ }
}

<ChemicalFormula>Neon2-Iron-Copper3</ChemicalFormula>
```

**It resolves its parts through the very mechanism**, because the elements its view returns are walked like any others. **The catalogue stays a key in and an instance out**; the reading is where the variety lives.

## Where the swap happens, and why it is early enough

**In [`augment`](../implementation/11-augment.md), on what `frame()` returned, before anything else** — the walk that already ran on every render, so the cost is one property lookup per element rather than a second traversal.

***And it is early enough to change the MODEL, not only the drawing.*** `augmentNode` recurses into `props.children`, so a formula written inside another chemical's element is replaced **while it is still an element** — before that chemical's component runs, and therefore before its bond constructor sees its children. **A parent handed `<Type>Autobiography</Type>` binds an `$Autobiography`.**

**The substitution lifts and replaces the COMPONENT only.** The text and every prop cross unchanged, because `children` is a prop and nothing is copied by hand.

**The marker and the resolver are one member.** `[$formula$]` is read off the component's chemical: `undefined` for everything that is not a formula, and the substitution itself for everything that is. The walk imports nothing.

## The bound, the miss, and the boundary

**The written class is an upper bound.** A key resolves only within its own branch, so a resolved part is always `instanceof` what was written. *This is late binding on a string with a bound the language checks — a scoped `eval` for types that cannot escape its own subtree.*

**A miss falls to the default** — `cache()` with no argument declares the specimen that stands when nothing is named — **and otherwise raises, naming both sides**:

```
$NobleGas stands for nothing called "Iron" — it stands for Element, NobleGas, Neon, Argon.
```

**A class that has claimed nothing at all stands as written and raises nothing**, so adding the mechanism cannot break a drawing that already works.

**A formula is swapped where it is written inside a chemical's drawing.** One reached outside that path — `$(<X>…</X>)`, or mounted as a React root — is **not** swapped. *Named here rather than discovered.*

## Two things that are not obvious, and both cost a red suite to find

**A specimen is stamped its own template.** A cached instance that is not its class's registered template goes down [`$lift`](../particle/04-lift.md)'s *direct* path — the instance IS the component, and its state persists across every mention of its name. **So a prop written at one site reached every other.** A specimen is a thing to **copy**, so `cache` stamps `$isTemplate$` and each site derives its own, inheriting the specimen's state through the prototype.

**`$(instance)` and `$(Class)` are not the same component.** One caches under `$lifted$`, the other under `$component$`; both are idempotent and they are two objects. **The instance form also skips the bond constructor**, and a replacement is written *fresh* with props and children — so the swap hands back the bonding form, which is also the component the export pattern gives a consumer.

## `$` still applies

**What a name resolved to is ASKED FOR rather than used.** The walk passes its asker into the substitution and the component goes through [the representative](11-the-representative.md) like any other, so a scope may stand something else behind a resolution **without touching the catalogue**:

```tsx
$(Room, Fancy)(Dressed);     // <Plain>Fancy</Plain> now draws a $Dressed
```

*Nothing else in the framework gets to skip the representative, and neither does this.*

## What pattern this is

**An embedded prototype registry, selected by what is written inside the tag, bounded by is-a.** *Doug named it an embedded factory pattern, and the precise half matters: a factory registry hands you a constructor to call; this hands you a **specimen to copy**, which is what `$lift` already does.* **The React flavour is that the key is the content rather than a parameter** — the tag is the abstract type and the children are the discriminator — and the inheritance chain is what scopes the registry, which the pattern in the book has no notion of.

**It is [looks](../particle/08-perspectives.md) one level down.** There a class stopped having one canonical *drawing*; here it stops having one canonical *instance*. Both times what is deleted is privilege, and what replaces it is a name given from outside.

## Why it extends `$Chemical`

**A formula's subclasses are ordinary user classes** — they draw, they may compose, they may declare a binding constructor. `$Chemical` is what user code extends, so `$Formula` sits on it rather than on `$Particle` and its subclasses lose nothing.

*One consequence is worth naming: a class that must be a formula **and** something else already in a hierarchy cannot be both, because single inheritance gives one supertype. That is the same wall [the `$$` reference forms](../../../.public/.lib/the-condition-report/04-semantics.md#s1-constraint) meet, and it is not solved here.*

## <a id="findable-and-asking"></a>Two questions, not one — `cache` and `resolve`

***Being findable and being an asker are separate, and conflating them was the defect.***

- **`cache` — am I findable by a name.** A class that files a specimen can be reached by whoever asks.
- **`resolve` — does MY tag read its own content as a name.** A class-level flag, [read off the template](../implementation/16-formula.md), tested before any lookup.

***That is what makes both spellings safe at once:***

```tsx
<Type>Letter</Type>              // $Type asks, finds the Letter specimen, swaps
<Letter>Special Letter</Letter>  // $Letter does not ask, so its content stays content
```

**Without the separation, anything findable also read every tag of its own as a key** — so an annotation whose content is an ordinary name, `<Author>The Team</Author>`, would look that name up and raise.

*Two further protections stand behind it and are worth knowing, because they are why the family is safe rather than lucky:* **branch isolation** means an author can never reach a type's name at all, since a type is not in an author's branch; and **a declared default** means a miss falls to the class you wrote rather than raising.

## <a id="base-classes-back"></a>Base classes back — a formula is a flag, not a supertype

***The catalogue, the climb, the reading and the substitution live on [`$Chemical`](../implementation/02-chemical.md).*** **`$Formula` is a convenience class that declares the flag**, and any chemical may declare it instead — **anywhere in a hierarchy, with any ancestors it likes.**

*It sits on `$Chemical` rather than `$Particle` for a reason that is measured rather than chosen: the substitution calls `$`, which is defined in `chemical.ts`, and `chemical.ts` imports `particle.ts`. `$Referent`, `$Writing` and every user class already extend `$Chemical`, so the capability is the same.*

***This is what dissolves the single-inheritance wall.*** *A class that had to be both a formula and something already in a hierarchy could not be — [the same wall the `$$` reference forms meet](../../../.public/.lib/the-condition-report/04-semantics.md#s1-constraint). Now it declares a flag instead of changing its parent.*

**The branch is the run of ancestors answering `formula` true**, stopping at `$Formula`'s base marker or where the flag turns false — *so a non-formula ancestor holds nothing, and two families still never see each other.*

## <a id="the-echo"></a>A key does not echo down

**A super-chain runs an ancestor's `cache` with the DESCENDANT as receiver.** *So `$Biography` declaring `'Biography'` used to plant it in `$Autobiography`'s catalogue as well, and `<Autobiography>Biography</Autobiography>` answered with an autobiography.*

***A key an ancestor already holds is an echo of that ancestor's claim rather than a declaration, and files nowhere.*** **The default still descends**, deliberately — *the one you fall to is the class you wrote.*

## See also

- [The facade](13-the-facade.md) — the other substitution: not an element's type by a name in the walk, but an instance wrapped by a declaration as it draws.
- [The representative](11-the-representative.md) — what a resolution is asked for through.
- [Looks](../particle/08-perspectives.md) — the same move, one level up.
- [`$lift`](../particle/04-lift.md) — the derivation a specimen is copied by.
- [`formula.ts`](../implementation/16-formula.md) — the module.
- The glossary indexes every term here by name.
