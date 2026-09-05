# The suite that collected nothing

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

**Keywords:** `model` · `Class extends value undefined is not a constructor or null` · module cycle · circular import · zero tests · `no tests` · empty suite · base class undefined at evaluation · `$Writing` · `$Type` · `$Annotation` · barrel · import graph

## What was observed

***The suite did not go red. It went EMPTY.***

```
 Test Files  12 failed (12)
      Tests  no tests
```

**Twelve files, and not one promise ran.** *The number a reader carries away from that is not "twelve failures" — it is a blank where a count should be, and it reads like a smaller suite rather than a broken one.*

**The one line that says why is buried under twelve identical stack traces:**

```
TypeError: Class extends value undefined is not a constructor or null
 ❯ src/notation/Type.tsx:6:28
      4| import { $Annotation } from './Annotation';
      5|
      6| export class $Type extends $Annotation {
```

## Why it happened

***A module cycle, and the base class is `undefined` at the moment the subclass is declared.***

**`$Annotation` imported the seven levels** in order to carry all seven types. Each level imports `@/notation/Type`. `Type.tsx` imports `./Annotation`. So:

```
Annotation → Letter → Type → Annotation
```

**When the cycle closes, one of the modules is still mid-evaluation**, and its exports are the bindings JavaScript has reached so far. `$Annotation` has not been assigned yet, so `class $Type extends $Annotation` extends `undefined` — *and a class body runs at module evaluation, not at first use, so nothing can defer past it.*

***And a file that throws while evaluating collects no tests at all.*** **The failure arrives before `describe` is ever called**, so the runner has nothing to report except the file.

## The fix, and the shape of it

***The base class must not name what extends it.***

**`$Writing` and `$Annotation` sit at the bottom and know nothing above them.** *An annotation is any parenthetical writing; which kinds exist is not its business.* **What made the cycle attractive was wanting an annotation to carry every type** — and that turned out to need no code at all, because [the bond already lifts every parenthetical into the specification](../projection/28-the-block.md#r260).

**The same cycle had already been killed once**, in [Composition](../projection/27-composition.md), and it came back within a day of the base class naming `$Type` again — first as `get type(): $Type[]` on `$Writing`, then as seven imports on `$Annotation`. ***It is not one mistake; it is a shape the design keeps offering.***

**Where a base genuinely must reach an annotation, it asks STRUCTURALLY and names nothing:**

```typescript
for (const one of this.specification)
    (one as { specifically?: (writing: $Writing) => void }).specifically?.(this);
```

*A type-only `import type` is also erased and would not close the cycle.*

### <a id="what-actually-kills"></a>ONLY AN EVALUATION-TIME USE KILLS — corrected 2026-09-05, by measurement

***An earlier draft of this chapter said the class may never appear as a value at all — "`extends`, `instanceof`, `new`". That is too strong, and the v2.2 port depends on the difference.***

| where the class is named | when it runs | under a cycle |
|---|---|---|
| ***`class X extends Base`*** | ***module evaluation*** | ***FATAL*** — the class body runs as the module is read |
| a field initializer, a decorator argument | *module evaluation* | ***fatal*** |
| **`instanceof`, `new`, a fetch — inside a METHOD BODY** | *whenever it is called, long after load* | **safe** |

***This is what lets `reflection` sit in a cycle with `writing/Writing.tsx` and work.*** **`reflection.writing(part)` is `part instanceof $Writing` and it names a class that names it back** — *and it has never thrown, because nothing calls it during module evaluation.* **The rule is not "never name the class"; it is *never name it where the module body will read it*.**

### <a id="the-detector"></a>THE DETECTOR — one promise per module, and it earns its keep

***The failure only appears when the wrong module loads FIRST, so a suite whose entry happens to import the base first is green and lying.*** **[`tests/loading.test.tsx`](../../package/src/tests/loading.test.tsx) imports each module alone into a fresh graph:**

```tsx
it('writing/Writing', async () => {
    await expect(import('@/writing/Writing')).resolves.toBeDefined();
});
```

**Thirty-seven promises, one per module.** *It cost nothing and it has already paid twice.*

### <a id="second-instance"></a>THE SECOND INSTANCE — 2026-09-05, and the fix was a DESIGN

***`$Writing.view()` was given an anchor to wear when the writing means something.*** **The anchor is a format, a format reads a theme, and `$Theme extends $Annotation` — so `writing/Writing.tsx` pulled a chain that came back to itself, and every one of the thirty-seven promises went red at once with the same line.**

```
writing/Writing → encyclopedia/AnchorFormat → writing/Format → writing/Theme → writing/Writing
```

***The patch would have been a lazy import, and Doug had already ruled that out:*** **"I don't want any weird module loadings or weird solutions to get things in different files. We deal with problems by looking at the design! Not patching."**

**The design answer was one sentence: *a theme is not writing.*** *It is the palette a format reads, exactly as a format is not writing — so `$Theme` became a `$Chemical`, the chain broke at its own root, and nothing was deferred.* ***The cycle is a question about what a thing IS, and it keeps being answerable that way.***

## What to watch for

***A dropping test COUNT is the symptom, and nobody watches the count.*** **A suite that goes from 109 promises to 0 across twelve files reports `no tests`, and a reader scanning for a red number sees none.** *Compare the count to the run before it — [the same instrument that caught a restricted include](../projection/27-composition.md) — because this failure hides in the place a passing suite would also be quiet.*

**And the traceback names the SUBCLASS, not the cycle.** *`Type.tsx:6` is where evaluation died; `Annotation.tsx`, which caused it, appears nowhere.* ***Read the import graph outward from the file that threw, not the file itself.***
