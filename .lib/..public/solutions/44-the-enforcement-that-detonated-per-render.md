# The Enforcement That Detonated Per Render

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `framework` `model` `construction-write` `render-make` `render-loop`

---

**Symptom:** `Too many re-renders` on the first paint of a book, while the whole model-level suite stays green — and the probe names a ring: the index, the type, the book, and the harness page all reacting 52 times, with `diffuse` naming the index as the only writer, one `parenthetical` write per render, outside any scope.

**The mechanism, measured in three probes.** The book's type auto-creates its index inside `specifically` — and `[SPEC]` logging showed that seat running **once per render on a fresh writing whose block never carries the previous append**, so a fresh index was constructed every render. Construction alone mimics the document's own references-append, which never looped. The detonator was one line more: `index.parenthetical = true` — a **reactive write on a freshly made chemical, mid-render, outside any scope** — which fires its reaction and diffuses immediately, scheduling a render from inside a render, once per render, forever. The eval-lineage carried the ring up through the type to the mounted tree (created-in-X made the type the index's parent), which is why a type appeared among the reactors.

**The fix:** the fact became a **birth fact**. `$Index` declares `override parenthetical = true` — a class-field default, no write, nothing to record, nothing to diffuse. The enforcement still creates the index when needed; it no longer mutates it. (A `$print={false}` prop was tried first and does not reach the model — eval-form props are kept for the drawing.)

**The lesson:** `specifically` must be written as if it runs **many times, on writings that never keep its last edit** — creation is tolerable there, mutation is not. Any reactive write on a chemical during a render-adjacent seat, outside a scope, is a setState-in-render; if the value is constant for the kind, it is a declaration, not a write. The greppable tell: `something.member =` inside any `specifically`.
