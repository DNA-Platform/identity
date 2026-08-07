# The class that was not the class

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

**Keywords:** `framework` · `model` · `lifted-class` · `wrong-altitude`

## The symptom

**A chemical asked to enumerate its own properties answered with the framework's instead.**

The class declared `name` and `synopsis`. Walking its prototype chain returned `inline`, `viewLevel`, `perspectives`, `children`, `parent` — chemistry's members — and the ones the class actually declared were mixed in among them with nothing to tell them apart.

**And the same shape a second time, wearing different clothes:** a `static` assigned inside a bond constructor was set, and reading it back through the imported class found `undefined`. Nothing threw. The value was simply not there.

## Four instruments, each wrong for a different reason

Every one of these looked correct when written, and the first three were corrected by Doug rather than by a failing test.

1. **Walking the prototype chain and stopping at the base class by identity.** `while (proto !== $IndexCard.prototype)` never terminates, because the instance's chain does not contain `$IndexCard.prototype` — it contains something else that behaves like it.
2. **`Object.keys(this)`.** Misses everything, because *"many chemicals are made by `Object.create`"* — the fields live on the object the instance was made **from**, not on the instance.
3. **Excluding framework names by comparing against a list built from the base class.** Incomplete by construction: the framework's *runtime* surface has members the plain classes never declared, so any list assembled from the source is missing exactly the ones that leak.
4. **Feature-detecting the base level** — stop at the prototype that owns `entries`. Stops **immediately**, because the very first prototype owns everything.

## What the chain actually is

Read rather than guessed, by printing it:

```
[0] $Probe       getters = inline, $index, $parenthetical, $name, $of, $synopsis,
                           valid, entries, written, read, then, …
[1] $Probe       getters = synopsis
[2] _$IndexCard  getters = name, copy
[3] $Writing     getters = copy, elements, index, parenthetical
[4] $Chemical    getters = children, parent
[5] $Particle    getters = $view, $viewLevels, $viewCursor, viewLevel, perspectives
```

**`$Chemistry` inserts exactly one lifted composite prototype at the top**, carrying every backing and every method as a getter — and the authored classes sit below it **intact**. Level 1 is the real class, level 2 its real ancestor.

So all four instruments failed for one reason: **they reasoned about the class as written, and the object was built from a class that was made.**

## What works

**Skip the lifted level and walk the rest.** The lifted composite is identifiable and nothing else looks like it — **it is the only prototype carrying `$`-prefixed getters**, because it exposes the backings the membrane keeps private everywhere else.

**And a `static` is not a place to keep anything.** A static assigned during a bond constructor is assigned on the lifted class; the imported class never sees it. Module state is not lifted, so it survives — *but wanting module state is usually the real error*, and it was here: the holder it was invented for [should not have existed at all](../projection/08-the-author.md#r25--becomes-a-dependency-injection-container--a-chemistry-level-feature-doug-2026-08-07), which is why `$` becoming a container is the proper answer rather than a nicer holder.

## The lesson

**Reflection over a chemical must never assume the class it reads is the class that was written.** The framework builds a class to construct from, and reflection meets *that* one.

**And the cheap move was available the whole time.** A twelve-line probe that printed the chain answered in one run what four corrections could not. The rule that follows is not about prototypes: **when three attempts at the same problem fail differently, stop attempting and instrument.** Each failure was informative and none of them was evidence, because none of them made the actual shape visible.

*Filed the same day as [the link built three times](03-the-link-i-built-three-times.md), and it is the same failure at a different altitude — iterating on guesses where one act of looking would have settled it.*
