# HTML

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Two things wear the name "HTML," and they meet in the bond constructor. Miss the distinction and you reach for `$Html$` (the class) directly — which you never should.

## The catalogue — `$('div')`

A lazy map from tag name to a memoized wrapper Component. First `$('div')` mints and caches; repeats return the *same* Component, so a `<div>` in your view keeps a stable identity across renders. **`$('div', X)` writes `X` into the map and returns it — the override is global and permanent for the process**, and every later `$('div')` hands back `X`. It is the one registration surface `$` already has: a token in, an implementation stored. The dispatch and the `$catalogue` map live in [`Chemistry.view`](../../package/src/abstraction/chemical.ts) — read it to see why HTML in a view never re-mints.

**There are two caches, not one, and they are keyed the same but hold different things.** `$catalogue` holds *Components*, consulted by `$('div')`. `$htmlInstances` holds *`$Html$` instances*, consulted by the synthesis when it meets a `<div>` written as a child. A tag met through JSX therefore does not travel through `$catalogue`, and an override registered there does not reach it.

## The type — `$Html<T>`

`$Html<'a'>` is the wrapper chemical **intersected with the tag's attributes as reactive `$`-props** (`$href`, `$target`, …). One computed type, defined at [`$Html`](../../package/src/implementation/types.ts). This — not the class — is what you name when you want a lifted HTML child.

## Where they meet — the bond constructor

A tag name is a `$ParameterType`, and `$Parameter<'div'>` *computes* to `$Html<'div'>` (same file, read `$Parameter` to see the mapping from constructor/tag/`String`/`Number` to value type):

```tsx
class $Notification extends $Chemical {
    toast!: $Html<'div'>;
    $Notification(toast: $Html<'div'>) { this.toast = $check(toast, 'div'); }
}
```

`<Notification><div/></Notification>` hands the constructor the `<div>` **lifted** into a reactive `$Html<'div'>`, validated by `$check(_, 'div')`. Running proof: [app case-1](../../package/app/src/sections/adapted/case-1.tsx).

## Extending

The tag set is `$HtmlTag` — `keyof JSX.IntrinsicElements` **plus `$Content`**, the framework's own content-node kinds. Widen the union and every `$Html<'…'>` follows for free; the enum is the only seam — and an entry may point at a **class**, which is what retires a computed type without moving a call site.

***There is now ONE content kind, and it is a class.*** `'string'` and `'number'` were deleted when a block began carrying raw text as itself — wrapping it is what made prose and a written element indistinguishable downstream. What remains is `'block'`, declared in `$Content` at [types.ts](../../package/src/implementation/types.ts) so the enum travels to consumers (a `declare module 'react'` augmentation does not survive a consumer's build, which is why `$Html<'block'>` used to fail off-package).

## `$Block` — the tag that points at a class

***`$Html<'block'>` COMPUTES to [`$Block`](../../package/src/abstraction/chemical.ts).*** The enum entry resolves to the class rather than to a computed shape, which retired the computed form **without a single call site moving** — every existing `$Html<'block'>` downstream became a `$Block` and gained its whole surface for free, proven by both consumer typechecks staying at zero.

**A block is what a bond constructor is handed for prose, and the only thing it is handed:** a maximal run of inline writing gathered into one argument, holding what was written *as it was written* — a raw string, a raw number, a chemical whole.

**It is a subclass, and the check knows it both ways.** `$check` passes it as `$Block`, as the base `$Html$`, and as the tag `'block'` — and still **refuses** an html that is not a block, naming `$Block`. `$check(undefined, …)` materialises an empty one either way, so a bond needs no null guard.

***And every reading of a block is a block.*** `where`, `select` and `selectMany` each answer a new one, so a caller composes readings instead of falling out into an array on the first one and hand-building a block to get back in; `single` answers the piece, because a block of one and the one are different things. It iterates `(string | number | $Chemical)` directly, which is why nothing needs a `select` to get at what was written.

**A real tag wraps its content in the element; a block IS its content and draws it.** That is a `view()` override on the class now rather than a branch inside `$Html$`.
