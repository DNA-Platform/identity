# Cross-Chemical Writes

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

A write to another chemical's reactive property from inside a handler triggers fan-out to that chemical's derivatives. The in-scope and no-scope paths are symmetric — both call [diffuse](./05-diffuse.md), which gates fan-out on `hasOwnProperty($derivatives$)`. Sibling derivatives that prototype-inherit the registry do not leak writes.

## Rules

- *(TBD — in-scope writes call `diffuse` on finalize.)*
- *(TBD — no-scope writes call `diffuse` immediately.)*
- *(TBD — the ownership gate prevents sibling leaks.)*

## Cases

- Outer-button-writes-inner-`$value` causes inner DOM to repaint.
- Sibling derivatives unaffected.

## See also

- [diffuse](./05-diffuse.md) — the fan-out function.
- The ownership gate — the `hasOwnProperty` check that prevents sibling derivative leaks.
- [Caveats](../epistemology/04-caveats.md#cross-chemical-handler-fan-out) — the historical caveat (fixed sprint 24).
