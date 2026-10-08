# The Instance Owns Its Fields

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **style:** [The Coding Style](../../../.public/.lib/the-coding-style/03-the-coding-style.md)
- **status:** `built, local` — *ruled and built 2026-10-08, the same day as [The Cascade](49-sprint-102--the-cascade.md) and on top of it; committed in chemistry, nothing pushed.*
- ***The chapter name and the sprint number are PROXIES.*** *The number is the team's next; the name is the rule's.*

---

## <a id="the-requirement"></a>The requirement, in Doug's words

*It began as the Lab's theme case, red under the cascade because its palette, the first instance of its class, was the class's template and a template write is silent. Asked how the theme should be done instead, and how to articulate that a template write is not reactive:*

> **"No first instance for the template! That means using the template isn't idempotent. First off, chemicals are not supposed to be created, new, anyways, but this is what the bond constructor is for. The real rule is - property initializers are sadly the class constructor. If you are initializing reactive properties that aren't value types, they need to be assigned in the bond constructor. That's what it is for. But we need basic field initialization to work for value types like numbers and strings."**

> **"Wait, why aren't reactive properties made for fields on the template. Is this just a failure to enumerate the properties right?"** · **"No, I want them to be reactive. I want a property assigned on the template to be considered a reactive property on the instance, and assigned to the instance."** · **"I want the mistake to be that every instance has a singleton, not that every property assigned like that is silently nonreactive."** · **"`property = new Class()` — this should create a reactive property that has the same Class instance. The mistake is initializing a reference type in a field initializer."**

> **"`new $X()` — this hasn't been an idiom for ages. It is `$(Constructor)`."**

*And the implementation question, his:* **"Maybe in our object.create, we can lift data off the template onto the class. But it's dangerous for objects. Then every object gets the same instance. Still it might be the right move? Not sure how to implement that safely."**

## <a id="the-rule"></a>The rule

**A field initializer is the class constructor.** It runs once, on the class's template, **which the framework makes** — under a flag set for exactly that class, so an instance an author constructs is never one, whichever came first. **Every instance derived from the template is assigned its fields** — an own store from derive, holding what the template held — and each is a reactive property of the instance. A value type is each instance's own. **A reference is the one instance every mount holds, reactive**, which is the visible shape of the mistake; an instance that must own its reference assigns it in the bond constructor, which runs per mount. **A template write is silent** because a template is never read. **An atom mounts itself**, since a singleton has no per-mount state.

*The answer to "is this just a failure to enumerate the properties right?" is yes, at derive: the accessors were always on the template and inherited, but a derivative's store was created lazily on its first write, chained to the template's, so every read before that answered from the template. "Lift the data onto the class" is done safely by assignment, not by copying by content: a value copies, a reference shares, which is the status quo named and made honest.*

## <a id="measured-first"></a>What was measured before building

| | result |
|---|---|
| **reference-typed reactive initializers**, by the TypeScript parser | chemistry's promises **129** (79 empty arrays, 28 `new`), the Lab **53**, the public branch **50** — every one of the public branch's a class-level declaration meant to be shared: `specification = new BookSpecification()`, `style = selection.div`…``, `facade = Card$` |
| **`new $X(` written by an author** | the promises **444 in 44 files**, the Lab **22 in 13**, the public branch **0** |
| **assignment at derive**, probe against 953 promises | **1 red and 1 runaway**, both the atom's: its recall written to the singleton a microtask after its fields re-initialize, seen by its mounted derivatives only through the read-through; and a drawn atom's click, where the derivative and the singleton each owned a store and hydration's propagation between them never converged — a microtask loop to the heap's end |
| **the framework-made template**, probe against 953 | **7 reds**: five the atom's, whose constructor relied on arriving first; two pinning the first-instance rule itself |

*Both probes applied and reverted by git in one chain, the dist untouched.*

## <a id="built"></a>What was built

- **[`template.ts`](../../package/src/implementation/template.ts)** — *the flag: `templating(cls, make)` constructs under it, `templatingFor()` answers which class; the `$Particle` constructor marks `$$template$$` only when the flag names its class. `$(Constructor)`, `templateOf` and the styled compiler's seeding construct under it. (`templating` is a proxy name.)*
- **[`bond.ts`](../../package/src/abstraction/bond.ts), `assign`** — *a derivative's own store, assigned from its template's at derive, after the template is activated: for a chemical that was its component's resolution, for a particle it is the lift's derive. `bind()` assigns its bound child the same way. (`assign` is a proxy name.)*
- **[`atom.ts`](../../package/src/abstraction/atom.ts)** — *an author's construction asks for the class's template and makes it under the flag when none stands; a construction that made it is the first, not a re-construction, so the re-init guard is not set on it; the template carries `$direct$` and the lift mounts it itself.*
- **[`reconcile.ts`](../../package/src/implementation/reconcile.ts), `byIdentity`** — *a function compared by identity inside the lift's memo and inside `$apply`, React's own rule, so an inline handler is never a reason to skip and a keyed child's closure is always fresh; the setter and the settle diff keep comparing by source. (`byIdentity` is a proxy name.)*
- **[`particle.ts`](../../package/src/abstraction/particle.ts)** — *`direct` honours `$direct$`; a persistent chemical remembers at derive whether derived or direct; `$apply` assigns under identity.*
- **Two promises re-pinned** — *identity's template promise and the bond-behaviour promise on constructor statics make the template through `$(Constructor)` before they count.* **The cascade file's warm-up constructions removed** — *`new $X()` before the instance under test was the stale idiom, written that morning.*

## <a id="the-promises"></a>The promises — [`the-instance.test.tsx`](../../package/tests/abstraction/the-instance.test.tsx), and one in [`the-cascade.test.tsx`](../../package/tests/react/the-cascade.test.tsx)

*The template is the framework's:* an instance an author constructs is never the template, and `$(Constructor)` makes one · a held instance lifted is the component, whichever instance of its class was constructed first. *The instance owns its fields:* a field initialized on the template is a reactive property of every instance, assigned to it, and a template written afterwards is never consulted · a field initialized with a reference is the one instance every mount holds, reactive, and a write from one mount is drawn by all — *the one shared instance activated by being lifted once* · an atom mounts itself, the drawn atom is the singleton. *And:* a function prop is compared by identity, a keyed child whose handler closed over a new item draws, every other prop equal.

## <a id="measured"></a>What was measured after

| | result |
|---|---|
| chemistry's promises | **959 of 959**, tsc **0**, no mid-render warning |
| the Lab in Chrome | styled **20 of 20**, the theme case as written; persistence **7 of 7** |
| the binder, against the rebuilt dist | typecheck **0**, unit **149 of 149**, regression **48 of 48** |
| the public branch | build fresh; suite **12 reds, every one a literal draw count** — "mounting draws three times", "a bookmark moved redraws the cascade" — theirs to re-pin on the cascade's rule, a mount two draws and no book-level cascade |

## <a id="the-switch"></a>The switch, ruled after — `[memoize]`

> **"This is a tough invisible bug. I am concerned with it, but I see the importance of memo here. Is it possible to flip an off-switch for the memoization on certain chemicals, so there is some control over this behavior?"** — *the bug being a plain React component beneath a chemical that skipped, reading chemistry by closure, stale. Named by him: "`[memoize]` — a mixture of both", of `memo` and `cascade`.*

**Built:** the exported symbol `memoize` beside `persist` and `inline`; `[memoize] = true` on the particle beside `[inline]`, read from the template so a base class says it for an app; one more term in the lift's memo, `p[memoize] !== false`. **Three promises in [`the-cascade.test.tsx`](../../package/tests/react/the-cascade.test.tsx):** `[memoize] = false` is the off-switch, the chemical draws whenever its parent does and a plain component beneath it reading by closure is fresh · beneath a chemical switched off, a chemical child still memoizes · said on a base class, it reaches every subclass. **And the other half, measured and then built on his "Build it and document it well":** `$Function$` calls its function inside its own draw rather than rendering it as an element, so the function's reads are the draw's and it follows what it reads; its hooks belong to the wrapper's component, so the wrapper says `[memoize] = false` — a memo that answered the cache would skip its hooks, and React counts them — and carries `$hooks$`, so the settle pass, an effect, leaves it to React alone. *Measured first with the source restored after: reads followed 0:0 to 1:0 beneath a wrapper that skipped, a hook written 1:1 with no React error, not called when the parent drew and the wrapper skipped, the suite 962 of 962; the first attempt without the switch threw, since the memo skipped the function and React saw fewer hooks.* One promise in the cascade file carries all three. **The limit named with it:** a lifted function at several mount sites holds one update handle, the older defect, now visible for it. Taught in [Composing with React](../authorship/05-composing-with-react.md#a-plain-component-beneath-a-chemical). **New names, proxies:** `$hooks$`.

## <a id="stand"></a>Where things stand

**Built and green in chemistry; committed locally on top of the cascade's commit; the dist rebuilt from it; nothing pushed.** *Pushing chemistry is Doug's.*

**Owed:**
- **The public branch's twelve literals** — *the manual session's and the public session's.*
- ~~A held chemical activated with its holder~~ — ***DECLINED the same evening:*** *"I don't want to handle it special. I want the framework to just treat a property on the template as it would any other property — properties can be anywhere on the prototype chain and they still need to be reactive on the instance. As long as we are consistent, the current behavior is fine. The class writer should have assigned it in the bond constructor."* [The record](00-planning.md#pitch-held-activation).
- **Chemistry 0.2.0 and the symbols docs** — *from the clean-surface sprint, still Doug's and still owed.*

**For Doug:**
- **The public branch's fifty declaration fields** are reactive and shared under the rule, as you want; they cost a reactive accessor each and were never per-mount state. *Said, not changed.*
- **The migration of the stale idiom** in forty-four promise files and thirteen Lab files is unnecessary: an author's `new` is simply an instance now, and all 959 pass as written.

**New names, proxies:** `template.ts`, `templating`, `templatingFor`, `assign`, `byIdentity`, `$direct$`. **His:** the rule, every word of it.
