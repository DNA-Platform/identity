# The writing that drew and held nothing

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

**Keywords:** `framework` · `model` · bond constructor not inherited · `$bond$` · found by class name · `did not call` · chain enforcement · empty specification · `block` undefined · subclass with no bond · `$Kept` · `$Smiley` · silent skip

## What was observed

***A piece of writing rendered its children correctly and held nothing.***

A test helper subclassed `$Writing` to catch the instance as it drew. The page was right; the model was empty:

```
block:         undefined
specification: []
```

**Thirteen promises failed on it and every one of them looked like a different bug** — *"it carries no type at all"*, *"expected 0 to be 1"*, *"expected false to be true"* — because each asked a different question of the same hollow object.

***And the class that worked differed by exactly one line:***

```typescript
class $None extends $Writing { }                                  // block undefined, specification []
class $Own  extends $Writing { $Own(b) { super.$Writing(b); } }   // block set, specification [one type]
```

## Why it happened

***A bond constructor is found by CLASS NAME, and it is not inherited.***

[`chemical.ts`](../../../chemistry/package/src/abstraction/chemical.ts) walks the prototype chain collecting the name of each class and looking for a method that matches. **A subclass that declares no method of its own name does not get its ancestor's run for it** — the framework has no member to call on that class's behalf.

**So `class $Kept extends $Writing { }` is a piece of writing whose bond never runs.** *It draws, because drawing is `view()` and `view()` is inherited normally. It holds nothing, because holding is what the bond does.*

***This corrects what [Composition](../projection/27-composition.md) recorded*** — *"a leaf declares no bond and therefore never gets one, so nothing lies about the smiley"* — **which is true of the leaf and false of the reason.** A leaf gets no bond because it declares none, not because the framework spares it.

## And declining is not available either

***The obvious escape is an empty bond, and [Sprint 48's chain enforcement](../projection/06-sprint-48--subjects-and-the-library.md) fails it:***

```
$Chemistry: Bond Constructor Failed
$Smiley did not call $Writing — every declared bond constructor on the chain must be called.
```

**So a subclass has exactly two options: declare a bond that calls `super`, or declare none and hold nothing.** *There is no third.*

## The fix

***Every subclass that wants what its ancestor's bond provides declares its own and calls up:***

```typescript
$Kept(block: $Html<'block'>) { super.$Writing(block); }
```

**One line, and it is the same line in every case** — which is why it reads as ceremony and gets left out.

## What to watch for

***The symptom is a working page over an empty model***, and that combination is what makes it expensive: **the drawing is right, so nothing looks broken until something asks the object a question.** *Thirteen promises failed thirteen different ways before the cause was one line.*

***And a base class getting bigger makes this WORSE, not better.*** **The more a bond does — hold the block, lift the annotations, classify, specify — the more a subclass silently loses by not declaring one.** *When `$Writing`'s bond did nothing, a subclass without one cost nothing; the day it started holding the block, the same subclass became a hollow object that still drew.*
