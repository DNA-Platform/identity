# The render loop

- **kind:** catalogue-section
- **section:** X.4
- **status:** stub

---

## Definition

The framework's render loop runs on every component invocation: `$apply` (write incoming props), `$bond` (lifecycle hook), filter chain (§ II.8), `view()` (§ II.2), `augment` (wrap event handlers), diff against `$viewCache$`, and conditionally call `$update$()` to tell React to update. The loop is the canonical sequence inside `$Particle.use()` and `$Chemical.Component`.

## Rules

- *(TBD — `$apply` writes props.)*
- *(TBD — `$bond` runs.)*
- *(TBD — filters run; first non-`undefined` wins.)*
- *(TBD — `view()` produces the React node.)*
- *(TBD — `augment` wraps handlers.)*
- *(TBD — diff against `$viewCache$`.)*
- *(TBD — `$update$()` only when changed.)*

## Cases

- An unchanged-render path: filters return `undefined`, `view()` matches `$viewCache$`, no React update.

## See also

- [§ II.2 `view()`][s-II-2] — the render contract.
- [§ II.8 Render filters][s-II-8] — the interception chain.
- [§ XV.12 `reconcile.ts`][s-XV-12] — the diff function.

<!-- citations -->
[s-II-2]: ../II-primitives/02-view.md
[s-II-8]: ../II-primitives/08-render-filters.md
[s-XV-12]: ../XV-implementation/12-reconcile-ts.md
