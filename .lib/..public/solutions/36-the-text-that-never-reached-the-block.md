# The text that never reached the block

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** framework · model · renamed-binding · silent-default
- **sprint:** [The Route](../projection/32-the-route.md)

---

## Symptoms

- ***`<Writing>hi</Writing>` answers `copy === ''` and `block === undefined`.*** **The identical prose one class down works:** `<Word>hi</Word>` answers `copy === 'hi'` and holds a `$Block`.
- **Fifteen `.spec` examples "passed" while drawing NOTHING** — *every `WritingSpec`, plus `Attribute.DeclaredSpecFriend`, `Letter.DerivedSpecSmiley` and `Paragraph.DerivedSpecTitle`.* ***Their assertion was `not.toThrow()`, and drawing nothing does not throw.***
- **`$Annotation`, `$Type` and `$Attribute` have had an empty `copy` for as long as they have existed.** *Nothing noticed, because a type resolves through `[cache]('Word')` and never through its copy.*
- ***It only became visible when [`$Writing.view()`](../../package/src/writing/Writing.tsx) stopped drawing through `this.block?.view() ?? null`.*** **The `?.` was the lid.** *Doug's edit did not break the fifteen; it uncovered them.*

## What did not work

***Three probes that each narrowed and none of which reached it.***

| tried | what it showed |
|---|---|
| **suspecting the `$` prefix on a state field** | *renaming `$at` to `at` changed nothing — the prop membrane was innocent* |
| **suspecting binding, and the type annotation** | ***a smiley failed identically with and without `<Type>Letter</Type>`***, so neither binding nor the type was the cause |
| **suspecting the parse rebuilding its children** | *the host's bond ran ONCE and its block held one stable chemical — the block was not being rebuilt* |

***And one that wasted the most time and is worth naming: instrumenting the SOURCE.*** **`lib` resolves `@dna-platform/chemistry` to `dist/`, not to `src/`** — *and vitest takes the `import` condition, so it loads `dist/chemistry.js` while stack traces point at `src/` through a sourcemap.* ***Two rounds of logging printed nothing because the file being edited was not the file being run.*** **[That is [Solutions 5](05-the-suite-that-passed-against-a-stale-build.md) again in its third costume](05-the-suite-that-passed-against-a-stale-build.md): a probe that changes nothing means the suspect was innocent OR the probe never landed, and those look identical from outside.**

## The mechanism — A CLASS NAMES ITS BOND CONSTRUCTOR AFTER ITSELF, AND THE RUNTIME NAME LIES

***[`$Synthesis`](../../../chemistry/package/src/abstraction/chemical.ts) found the bond constructor by matching the RUNTIME class name to a method name:***

```ts
if (!this._bondConstructor) this._bondConstructor = (chemical as any)[cls.name];
```

**`$Writing` carries a decorator — [`@look('back')` on `$view`](../../package/src/writing/Writing.tsx).** *A decorator makes the emit wrap the class and rename its binding, so at runtime:*

```
[NAMES]   _$Writing  |  $Word  |  $Own
[METHODS] …, $Writing, view, $view, specify, bind
```

***The class is `_$Writing`. The method is still `$Writing`.*** **So the lookup asked for `chemical['_$Writing']`, got `undefined`, and carried on with no bond constructor at all** — *silently, because nothing requires a chemical to have one.*

**And that one miss turns off an invariant three steps away:**

```
_$Writing  hasCtor=false → grouping=false → groupInline never runs → NO BLOCK
$Word      hasCtor=true  → grouping=true  → raw=STR => out=block   ✓
```

***`grouping` is gated on having found a bond constructor*** — `grouping = this._bondConstructor && !(this._chemical instanceof $Eval)` — **so a NAME LOOKUP decided whether prose got gathered into a block.** *Then `process` reached its last line of defence and swallowed the evidence:*

```ts
if (typeof child === 'string') { ctx = ctx.parent; continue; }   // the text, discarded
```

***Under [the design's own anchors](#the-anchors) that branch is unreachable***, **so it was not handling a case — it was hiding a broken one.**

## <a id="the-anchors"></a>The anchors this violated — Doug's, stated during the diagnosis

> ***"No raw strings or numbers to bond constructor was one. No inline elements at all to bond constructor raw. Always wrapped in block — the essential html ones, string and number, and our inline ones."***
>
> ***"We should label those html elements as inline, the essential ones, and then we create our own. They all end up in the block."***

**A bond constructor receives blocks and block-level chemicals. Never a raw string, a number, or a bare inline element.** *Which means grouping is not a nicety that a failed lookup may skip: **it is the guarantee the bond constructor's whole signature rests on.***

## The fix

***Match the names as they were WRITTEN, on both sides.*** **A build renames a binding; it does not rename the method.**

```ts
private static bondName(cls: any): string | undefined {
    const proto = cls.prototype;
    if (!proto) return undefined;
    if (Object.prototype.hasOwnProperty.call(proto, cls.name)) return cls.name;

    const authored = $Synthesis.authored(cls.name);
    for (const name of Object.getOwnPropertyNames(proto)) {
        if (name === 'constructor' || $Synthesis.authored(name) !== authored) continue;
        if (typeof Object.getOwnPropertyDescriptor(proto, name)?.value === 'function') return name;
    }
    return undefined;
}

private static authored(name: string): string {
    return name.replace(/^_+/, '').replace(/\d+$/, '');
}
```

***An exact match is still tried first***, so nothing that worked changes; the scan is a fallback.

***AND THE FIX UNCOVERED A SECOND FAULT THAT HAD NEVER FIRED.*** **`$Synthesis.watch()` replaces a bond constructor on the prototype with a wrapper whose own signature is `(...args)`** — *and `parseBondConstructor` reads a signature to learn how many arguments a bond takes.* **Before the fix `$Writing` was never watched, so the wrapper never stood where the parser would read it; afterwards it would.** *The wrapper now **holds** what it wraps instead of a flag, and the parser reads through it:*

```ts
(wrapper as any)[$watched$] = inner;
const written: Function = (this._bondConstructor as any)[$watched$] || this._bondConstructor;
```

***Measured after: chemistry **816 tests across 66 files**, `lib` **328 across 20**, `tsc` 0 on every config.*** *`lib` went from 15 failing to zero, and none of the fifteen was touched.*

## Prevention

***A GUARD THAT REPRODUCES THE FAULT WITHOUT DEPENDING ON A BUILD.*** **The rename is the bundler's business and chemistry's own build does not do it**, *so a test that waited for a decorator to trigger it would pass for the wrong reason.* **[The regression](../../../chemistry/package/tests/regression/bond-constructor-by-name.test.tsx) renames the binding by hand** — `Object.defineProperty($Renamed, 'name', { value: '_$Renamed' })` — **and asserts the missing key directly**, *so the old lookup's failure is shown rather than described:*

```ts
expect(($Renamed.prototype as Record<string, unknown>)['_$Renamed']).toBeUndefined();
```

***THE RULE TO CARRY, and it is not about decorators:*** **a runtime name is a fact about a BUILD, never about a program.** *`cls.name`, `fn.name` and `constructor.name` are all free to change under minification, decoration and bundling.* **Anything load-bearing that resolves through one is a mechanism waiting to be switched off by a tool that has no idea it matters.**

***And the second rule, which is why it cost a day rather than an hour:*** **an invariant may not be conditional on a lookup succeeding.** *Where a guarantee exists — [every inline thing ends up in a block](#the-anchors) — a failure to find the machinery must be **loud**, not a silent change of behaviour. **`if (typeof child === 'string') continue;` is where a day went.***

## See also

- [The suite that passed against a stale build](05-the-suite-that-passed-against-a-stale-build.md) — ***the same trap, third appearance***: two rounds of instrumentation printed nothing because `lib` runs chemistry's `dist` and the edits were in `src`.
- [The green that exercised nothing](14-the-green-that-exercised-nothing.md) — **fifteen specs asserting `not.toThrow()` over content that was never drawn.** *Drawing nothing does not throw.*
- [The writing that drew and held nothing](31-the-writing-that-drew-and-held-nothing.md) — **a bond constructor is not inherited**, *the neighbouring rule about which class owns one.*
