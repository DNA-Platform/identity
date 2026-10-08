# The Reactivity Contract

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

**One paragraph for the impatient:** Write a class. Put state in fields. Write methods. Wire events in TSX. The UI updates when state changes. You will never write `setState`, never spell out dependency arrays, never wrap components in `React.memo`. If you mutate state from a callback the framework doesn't already see (like a raw `setInterval`), either wrap the mutation in a method or call `react(chemical)`.

That's the contract. Everything else is a footnote.

---

## The mental model

A `$Chemical` is a JavaScript class. Its fields are its state. Its methods act on the state. Its `view()` produces JSX.

When state changes, the view is re-computed and React updates the DOM. That's reactivity.

The framework observes state changes in three ways, forming a layered safety net:

1. **Event handler augmentation.** Every event handler in your view is wrapped so that, after it runs, any state mutations it caused are reconciled with the UI.
2. **Reactive method wrappers.** Every method on a chemical is wrapped the same way, so method calls (from anywhere — handlers, other methods, tests, `setTimeout` callbacks) trigger the re-render.
3. **Property accessors.** Each reactive field on a chemical has a getter/setter installed. Direct writes to reactive fields trigger a re-render immediately (even from external callbacks).

These three layers cover the common patterns you'll write.

---

## The contract, precisely

### 1. State lives on the chemical as fields

```tsx
class $Counter extends $Chemical {
    $count? = 0;
}
```

**A bare field is reactive. `_` makes one inert. `$` makes one reactive when the character after it is a lowercase identifier character.** Read off [`bond.ts`](../../package/src/abstraction/bond.ts), `$Reflection.isReactive` and `isSpecial`:

| the name | reactive |
|---|---|
| `count`, `theme` — **no prefix** | ***yes*** |
| `_held`, `_block` | no |
| `$count`, `$v`, `$x` | ***yes*** |
| `$$held`, `$_held` | no |
| `constructor` | no |

**`@inert()` and `@reactive()` override the default per property**, filed by prototype.

> ***CORRECTED 2026-09-07.*** *This section read: "Fields prefixed with `$` are reactive. Other fields (no prefix, or underscore prefix `_`) are not." **That is backwards for a bare name** — `isReactive` returns `true` for any name that does not start with `$` or `_`, which is why `@dna-platform/lib` decorates [`$Writing.mention`](../../../.public/package/src/writing/Writing.tsx) with `@inert()` at all. Found while reading the source for [Sprint 46](../../../.public/.lib/projection/50-sprint-46--the-mention.md#cu1); `@dna-platform/lib`'s [own account of the same law](../../../.public/.lib/the-type-system/02-the-type-and-the-instance.md#the-reactive-law) was the one that was right.*

**A `$`-prefixed name needs one character after the `$`, not two.** `isSpecial` tests `length >= 2`, so `$v` and `$x` are reactive.

> ***CORRECTED 2026-09-07.*** *This read: "`$`-prefixed field names must be at least 3 characters total — `$ab` is reactive, `$a` is not." **The source says otherwise, and says why in a comment beside the test:** `>= 2` lets single-letter props like `$v` and `$x` be reactive, where `> 2` silently demoted them to inert. **The document was describing a bug that had already been fixed.***

Use descriptive names anyway — `$count`, `$name`, `$data` — but because they read, not because short ones fail.

**Fields need initializers.** `$data = 'pending'` creates a reactive field. `$data?: string` without an initializer doesn't create a runtime field — TypeScript just strips the type declaration and there's nothing for the accessor to bind to. If you want an initially-undefined field, use `$data? = undefined` explicitly.

Reactive fields get a getter/setter installed. Writes are observed.

### 2. Mutations in handlers trigger re-render

```tsx
view() {
    return <button onClick={() => this.$count++}>+</button>;
}
```

The handler is augmented by the framework. When the user clicks, the handler runs inside a reactivity scope. At the end of the scope, any chemical that was written (directly or via nested mutation) is re-rendered.

Nested mutations work:

```tsx
<button onClick={() => this.$items.push('x')}>add</button>
<button onClick={() => this.$map.set(k, v)}>set</button>
<button onClick={() => this.$config.mode = 'dark'}>toggle</button>
```

All three cause a re-render. The scope snapshots the state on read and detects in-place changes on finalize.

### 3. Mutations in methods trigger re-render

```tsx
class $Counter extends $Chemical {
    $count? = 0;
    increment() { this.$count++; }
    view() { return <button onClick={() => this.increment()}>+</button>; }
}
```

Method calls are also wrapped. Inside `increment()`, mutations are observed. On return, re-render fires. Async methods work too — the re-render fires when the returned Promise resolves.

### 4. Cross-chemical mutations work within a handler or method

```tsx
class $App extends $Chemical {
    $user!: $User;
    view() {
        return <button onClick={() => this.$user.$name = 'Alice'}>rename</button>;
    }
}
```

The scope isn't chemical-scoped; it observes mutations on any chemical. `$user`'s state change triggers re-render on `$user`. If `$user` is rendered as part of `$App`'s view tree, React's cascade handles the DOM update.

### 5. External callbacks: direct writes work automatically; nested mutations need a method

Direct scalar writes work from anywhere:

```tsx
$Clock() {
    setInterval(() => { this.$time = Date.now(); }, 1000);  // works!
}
```

When the setter fires outside any scope, it calls `react()` immediately on the chemical.

In-place mutations (Map.set, array.push, etc.) DON'T fire outside a scope because the underlying `set` or `push` doesn't go through our accessor. Wrap them in a method:

```tsx
$Chat() {
    socket.on('message', msg => this.receive(msg));  // call a method
}
receive(msg: string) {
    this.$messages.push(msg);  // method scope catches the push
}
```

The method wrapper opens a scope when called. The push happens inside the scope. Scope finalize detects the change and fires re-render.

### 6. Views must be pure

View reads `this` and returns JSX. That's it. No mutation. No non-determinism.

```tsx
// GOOD
view() {
    return <div>{this.$count}</div>;
}

// BAD — every render produces a new Date
view() {
    return <div>{new Date().toLocaleTimeString()}</div>;
}

// BAD — mutating in view is a contract violation; infinite re-render
view() {
    this.$hits++;
    return <div>{this.$hits}</div>;
}
```

Non-deterministic reads (time, randomness) go in the **bond constructor**, where they run once per instance.

### 7. The escape hatch: the reaction

If you mutate state from a context the framework can't observe, ask the chemical's reaction to react. ***Corrected 2026-10-08: no `react(chemical)` is exported under that name — `index.ts` exports none, and the section above it stood on a word that does not exist.*** The reaction is reached on the symbolic surface, `chemical[$reaction$].react()`, measured in a probe that day: an inert member written from a timeout drew nothing until the reaction was asked, and then drew. *An exported word is owed, or this section is the wrong promise — flagged for Doug in [The Cascade](../projection/49-sprint-102--the-cascade.md#what-the-cascade-carried).*

This is the last-resort API. Most code never needs it.

---

## What you will never write

- `setState()` — state is on the class, mutate directly.
- `useState(initial)` — use a field initializer.
- `useEffect(() => ..., [deps])` — override a lifecycle method (`mount`, `unmount`, etc.) or await `this.next(phase)`.
- `useMemo(() => ..., [deps])` — use a getter.
- `useCallback(fn, [deps])` — use a method.
- `useRef()` — use a class field, usually underscore-prefixed.
- `useContext()` — reach into `this.$parent` or hold a reference.
- `React.memo(Component)` — not applicable; chemicals manage their own rendering.
- `useSyncExternalStore()` — put the external store on a chemical.
- **`this.items = [...this.items, one]`** — ***the immutability idiom, and it is the one that survives longest because it does not look like a hook.*** In React you replace a collection because nothing watches it; here [in-place mutation is detected](../reactivity/04-collection-mutation.md) — `snapshot()` in [`scope.ts`](../../package/src/implementation/scope.ts) deep-clones a collection on read and `finalize()` diffs it, so **`Array.push`, `Map.set` and `Set.add` are all seen with the reference unchanged.** Replacing the array allocates a second one and changes its identity, which is a **larger** signal than the push it was avoiding. ***Write `this.items.push(one)`.***

Every React primitive has a natural OO replacement.

***And the ones that hurt most are not primitives at all.*** *A hook has a name you can search for; an idiom is just how you learned to write. The spread-to-replace above went into nine files of `@dna-platform/lib` without anybody writing the word React once.*

---

## What the framework does for you

Behind the scenes, when you write:

```tsx
<button onClick={() => this.increment()}>+</button>
```

The framework:
1. Wraps `onClick` in a scope-aware wrapper.
2. When clicked: opens a scope.
3. `this.increment()` runs. Method wrapper sees the active scope, doesn't open a new one (nested scopes flatten).
4. `this.$count++` — getter fires (scope records read with snapshot), setter fires (scope records write).
5. Method returns. Wrapper checks for a Promise; if not, scope is about to finalize.
6. Handler returns. Scope finalizes: for this chemical, the write was observed; fire `react()`.
7. React's scheduler sees the `setState`, commits, and re-renders.

You wrote three lines and got full reactivity. That's the design.

---

## Known limits

These are the honest boundaries of the framework:

- **In-place mutations outside any scope don't react.** The setter we install only fires on replacement writes. `this.$map.set(k, v)` outside a method or handler is a no-op for reactivity. Workaround: wrap in a method.
- **Non-deterministic views cause infinite re-renders.** `new Date()` in view, `Math.random()` in view. Document, don't do.
- **A view's read of another chemical follows it** — *since 2026-10-08, and the limit that stood here is lifted: it said A and B needed a common React ancestor that re-renders, which was the cascade, and the cascade is gone.* A chemical draws when its own state, its props, its theme, or a chemical it read while drawing changed, and otherwise answers what it drew last — [the draw's reads](../reactivity/02-scope-tracking.md#the-draws-reads). What that costs, and the stories the cascade carried for free, are in [The Cascade](../projection/49-sprint-102--the-cascade.md#what-the-cascade-carried):
  - **An inert member, a plain object or a module variable read in a view** is drawn when the chemical next draws for its own reasons; the cascade no longer refreshes it on the way past.
  - **A plain React component beneath a chemical that skipped** is not re-rendered, and its reads by closure are untracked — lifting the function with `$` does not track them either, measured.
  - **A function prop is compared by its source**, so a keyed child whose handler closed over a new loop variable, every other prop equal, keeps the old closure. Pass the variable as a prop.
  - **A template write is silent to every derivative**, as five promises say; a held instance that is the first of its class is the template.
- **Bound functions have opaque equality.** `this.handler.bind(this)` — two instances look identical to the diff. Use arrows (`() => this.handler()`) instead.
- **The framework makes its state accessible as fields; deeply-nested non-chemical objects aren't tracked below the top level**, except via the read-snapshot + scope-finalize mechanism. In a scope, nested changes are caught. Outside, not.

These limits are documented, not bugs. Work within them and everything else Just Works.

---

## Philosophy

React externalized state. $Chemistry puts it back on the object where it belongs. React turned components into functions. $Chemistry makes them classes again. React decomposed lifecycle into hooks. $Chemistry gives you methods for each phase.

The cost: you accept some framework magic (scope tracking, method wrapping, view augmentation) to eliminate the per-line ceremony (setState, memo, dep arrays). The trade is intentional.
