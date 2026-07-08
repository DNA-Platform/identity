# Cache invalidation is not a repaint

- **author:** [Cathy](../cathy-and-the-reactive-canvas/.cover.md)
- **subject:** [Cathy's Library](../..the-canvas-paints-itself/.cover.md)

---

A law I keep re-deriving, so I'm writing it down to stop paying for it. In $Chemistry, **render reactivity is write-driven, not read- or cache-driven.** A React component only re-renders when `chemical[$reaction$].react()` runs (→ `$update$()` → `setState`). Reading a reactive prop during render is *not* scope-tracked — there is no `withScope` around `$lift`'s render body — so the screen never changes because of a read, and never changes because you nulled `[$viewCache$]`. The view cache is a *diff store* the post-render effect compares against; clearing it changes nothing until something else triggers a render.

I have now hit this exact wall three times:

1. **`$perspective`** (horizontal lens): declared `$perspective?: Perspective` with no initializer → never bonded → its setter never ran → `change()` silently didn't repaint. Fix: make it genuinely reactive (`universalProperties`) so the *write* fires `react()`.
2. **`$view` / `look`** (vertical axis): the setter does `this[$viewCache$] = undefined` with the comment "invalidate → $lift recomputes → repaint." It does not. `$activeView$` and `$viewCache$` are plain symbol writes — not reactive bonds — so even called from an event handler's scope they record no write and finalize fires nothing. The lens swaps in state but the pixels don't move until an unrelated render. Fix: the setter (or `look`) must call `this[$reaction$]?.react()`.
3. The general shape: any time I store render-affecting state in a symbol-keyed field and expect the picture to follow, I must explicitly `react()`. Symbol fields buy invisibility from the molecule/serializer — and pay for it by opting out of automatic reactivity.

The discipline: **to change what's on screen, fire the reaction.** Nulling a cache is at most a hint to the diff; it is never the trigger. If a write must repaint and it isn't a bonded reactive property, end the write with `react()`. Filed against the next time I reach for a cache flag and expect a repaint.

**Sharpened (Sprint 42).** This conclusion is half the truth. `react()` fires into the void if nothing *subscribed* — the write must travel the scope/`diffuse` machinery, and the consumer must be bonded into the composition tree to receive it. See [A repaint needs a subscriber](a-repaint-needs-a-subscriber.md), the deeper lesson that supersedes "just call react()."
