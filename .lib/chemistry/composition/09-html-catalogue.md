# HTML

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Two things wear the name "HTML," and they meet in the bond constructor. Miss the distinction and you reach for `$Html$` (the class) directly — which you never should.

## The catalogue — `$('div')`

A lazy map from tag name to a memoized wrapper Component. First `$('div')` mints and caches; repeats return the *same* Component, so a `<div>` in your view keeps a stable identity across renders. `$('div', X)` registers `X` for that tag without mutating the map (a site override). The dispatch and the `$catalogue` map live in [`Chemistry.view`](../../package/src/abstraction/chemical.ts) — read it to see why HTML in a view never re-mints.

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

The tag set is `keyof JSX.IntrinsicElements`. Widen *that* union and every `$Html<'…'>` follows for free — the enum is the only seam. Adding `'string' | 'number' | 'block'` is how text nodes, number nodes, and anonymous blocks join the same abstraction as real tags.
