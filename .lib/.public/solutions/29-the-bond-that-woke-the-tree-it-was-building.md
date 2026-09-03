# The bond that woke the tree it was building

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **keywords:** framework · render-loop · diffuse · construction-write · absent-case
- **sprint:** [The Provider](../projection/26-the-provider.md)

---

## Symptoms

- **`Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.`** — thrown during a plain first paint, from a page containing nothing but two nested chemicals.
- **Every gate was green while it happened.** `$Chemistry` **728/728** across 61 files, `lib` **352/352** across 32, `tsc` 0 in every package.
- It arrived on a **field assignment in a bond constructor** — the most ordinary line anyone writes.
- **The first diagnosis was wrong and was published as such.** It was reported as *"assigning a fresh array causes re-renders — we aren't doing value equality"*. That is a true statement about the framework and **it is not this defect**.

## What did not work

*Each of these was measured and each eliminated a suspect without finding the cause.*

| tried | result |
|---|---|
| a chemical whose bond assigns a **fresh empty array**, drawn alone | **1 bond.** Fine. |
| the same, assigning a **scalar** | **1 bond.** Fine. |
| a bond that **reads its own block and then writes** | **1 bond.** Fine. |
| the same class **nested inside another of its own kind** | ***54 bonds, then the throw.*** |

***The array was innocent.*** **`this.n = 1` — a scalar, a constant, on a field initialised to `0` — loops identically.** The only ingredient that matters is **nesting**.

## The mechanism

**Which one has to write, measured four ways:**

| | |
|---|---|
| neither writes | **4 bonds**, renders `"ab"` |
| **outer** writes only | **4 bonds**, renders `"ab"` |
| ***inner*** writes only | ***54 bonds, THREW*** |
| both write | ***54 bonds, THREW*** |

***A chemical that writes in its bond constructor loops if and only if something composes it.***

[`$Scope.finalize`](../../../chemistry/package/src/implementation/scope.ts) marks every written chemical dirty and then **walks `$$parent$$` upward, adding every ancestor**:

```ts
for (const chem of [...dirty]) {
    let current = chem;
    let parent = current[$$parent$$];
    while (parent && parent !== current) {
        dirty.add(parent);
        ...
```

So the cycle closes, and it closes through **construction** rather than through a reading:

```
the parent renders  →  builds child instance #1  →  its bond writes a field
   →  the write marks the child dirty  →  finalize walks up  →  the PARENT is dirty
   →  the parent re-renders  →  builds child instance #2, fresh, field back at its initial value
   →  its bond writes again  →  … never settles
```

***It is a NEW instance every turn, which is why nothing ever converges:*** **12 distinct instances across 14 bonds**, each one parented, each one writing a value that is genuinely news because the object holding it was born a moment ago.

**Why the outer one is harmless:** its write reaches only its own ancestors, and the paint above it does not rebuild it. **Why the inner one is not:** the thing it wakes is the thing that makes it.

## The fix — and it was already in the file, eleven lines above

***`$rendering$` is the framework's own flag for "this write is setup, not news".*** **[Applying props is already wrapped in it](../../../chemistry/package/src/abstraction/chemical.ts); the bond constructor was not.**

```ts
const bonding = c[$rendering$];
c[$rendering$] = true;
try { /* the bond constructor runs here */ }
finally { c[$rendering$] = bonding; }
```

**The granularity falls out for free and is exactly right, because the flag lives ON THE CHEMICAL:** a chemical writing to **itself** during its own construction wakes nobody, while a bond writing to a **different** chemical — `chapter.$in = this` — still reacts. *Nothing had to be said about which writes are which; the flag was already per-object.*

***Watched going red before it was believed:*** the reproduction went **54 bonds and a throw → 4 bonds and `"ab"`**, with three control cases that did not move. **`$Chemistry` 728/728 · `rollup` 0 · `dist` rebuilt · `lib` 352/352 · `tsc` 0 everywhere.**

## The second fix, which is a different thing and must not be confused with it

***Doug's own question — "we aren't doing value equality for arrays?" — was correct, and it is a separate defect.*** **[`activate`'s setter](../../../chemistry/package/src/abstraction/bond.ts) compared by reference:** `if (store[property] === value) return;` — so a fresh `[]` was always news.

**[`equivalent`](../../../chemistry/package/src/implementation/reconcile.ts) already existed and was already used on the READ path** for snapshot diffing, and never on the write. It opens `if (a === b) return true`, so **a scalar costs exactly what it cost before**; arrays and plain objects compare element-wise; **class instances, chemicals included, still compare by reference**, which is the semantics this framework needs.

***The order mattered and is the lesson.*** **Value equality would have MASKED this chapter's reproduction rather than fixed it** — the array case would have gone quiet and the scalar case would still have looped, waiting for someone to write `this.n = 1`. *Fixing the equality first would have made the symptom disappear and left the defect.*

## The gate that missed it, and it is a shape we have not filed before

**No suite could have caught this**, and the reason is not that a test was missing. ***The defect needs three things at once*** — a chemical that writes in its bond, another chemical composing it, and a **paint** — and every one of `$Chemistry`'s 728 promises exercises at most two.

*This is [the green that exercised nothing](14-the-green-that-exercised-nothing.md) in its `absent-case` form: the gates ran correctly over content that could not contain the defect.* **What found it was building something new on top of the framework and watching it fail** — which is [the demonstration doing what a suite structurally cannot](28-the-specimen-that-was-the-component.md), for the third time in this branch.

## The tell, so the next reader can grep for it

***In this framework, a bond constructor is the one place where a write is CONSTRUCTION rather than MUTATION*** — and until this fix, nothing in the code said so.

**The general shape, which outlives this fix:** *a system that fans a write out to whoever might have read it has to be able to tell **setting up** from **changing**, and the moment it cannot, anything that builds a thing which builds a thing will spin.* **The framework had the distinction — `$rendering$` — and had drawn the line one call too early.**

## Second appearance, 2026-09-03 — through the door this chapter left open on purpose

**The granularity paragraph above says it plainly: a bond writing to a DIFFERENT chemical still reacts.** The rebuild's recursion mechanism wrote `one.indent = this.indent + 1` onto same-family CHILD chemicals in `$Writing`'s bond — construction-shaped in intent, cross-chemical in fact. Rendered populations rebuild fresh derivatives per paint, so the write was always news: **522 bonds, 0 views, then React's limit** — the identical spiral, one object over. A bare reference nested in a reference reproduced it; the trait first blamed was innocent.

**The cure was not a flag but a deletion:** the write came out, and the fact moved to where construction facts live — a class-field declaration (`indent = 1` on the transparent kinds), with the read-through gate consulting the TEMPLATE's declaration instead of an instance a bond must write. *A cross-chemical fact that is constant for the kind is a declaration, not a write* — Solutions 44's law arriving at the bond seat.

**And the instrument lesson, earned twice in one day:** an earlier differential had "acquitted" this very write — because the crash it probed was a different defect (the table view, [Solutions 45](45-the-view-that-constructed-its-parts.md)) sharing the symptom. **A differential acquits only the crime it probes.** When two defects share a symptom, the acquittal of one suspect must be re-run after the other is cured.

## See also

- [The parse that woke its own parents](16-the-parse-that-woke-its-own-parents.md) — **the same fan-out, from the other side.** *That one is a write during a **reading**; this one is a write during a **construction**, and the two are cured differently: that one by removing the writes, this one by naming the moment.* **A reader arriving with "the page loops" should read both and ask whether their write is in a view or in a bond.**
- [The writing that looped its page](12-the-writing-that-looped-its-page.md) — the third mechanism with the same symptom: prop rebinding over an already-built instance.
- [Reactive Properties](../../../chemistry/.lib/reactivity/01-reactive-properties.md) — where the write path is specified, and where the equality change is now recorded.
