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

The tag set is `$HtmlTag` — `keyof JSX.IntrinsicElements` **plus `$Content`**, the framework's own three content-node kinds. Widen the union and every `$Html<'…'>` follows for free; the enum is the only seam.

**`'string' | 'number' | 'block'` are not a proposal — they shipped**, declared in `$Content` at [types.ts](../../package/src/implementation/types.ts) so the enum travels to consumers (a `declare module 'react'` augmentation does not survive a consumer's build, which is why `$Html<'block'>` used to fail off-package). They differ from real tags in `view()`: a real tag wraps its content in the element, while the three content kinds **are** their content and render it directly — a text run, a number, or a grouped run of inline nodes.
