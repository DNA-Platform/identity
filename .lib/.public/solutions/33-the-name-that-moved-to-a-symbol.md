# The name that moved to a symbol

- **author:** [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **sprint:** [Organization](../projection/31-organization.md)

---

**Keywords:** `framework` · `model` · symbol member · `children` · two copies of the framework · stale `dist` · getter with no setter · duck typing · `in` operator · tsc green and runtime red · one rename four failures

## What was observed

***One member was moved from a name to a symbol, and it failed FOUR different ways in one sitting.*** **No two of them looked alike, three of them typechecked cleanly, and one of them changed no error message at all — it just quietly lost text.**

```
TypeError: Cannot set property Symbol($Particle.children) of [object Object] which has only a getter
```

```
Test Files  48 failed | 2 passed (50)          <- and tsc said 0 errors
```

```
AssertionError: expected [ 'Call me  today' ] to deeply equal [ 'Call me Ishmael today' ]
```

```
error TS2305: Module '"@dna-platform/chemistry"' has no exported member 'children'
                     ... while index.ts plainly exported it
```

***The change itself was three lines.*** *Doug: **"`{this.children}` — get out of this habit. IF I see it keep happening we will turn that into a symbol. In fact, yes, like the cache property, turn that into a symbol and get the tests and apps working again."*** **The public `get children()` on [`$Chemical`](../../../chemistry/package/src/abstraction/chemical.ts) came off, the existing `$children$` symbol was re-exported publicly as `children`, and 44 call sites across 15 files were rewritten from `this.children` to `this[children]`.**

## The four mechanisms, because they are four and not one

### <a id="one"></a>1 · A getter over its own key — ***97 failures***

**The replacement was written as an accessor keyed by the symbol it reads:**

```typescript
get [children](): ReactNode { return this[$children$]; }     // and `children` IS `$children$`
```

***So the getter and its backing slot were the same property.*** **The framework assigns that slot during synthesis** — [`chemical.ts`](../../../chemistry/package/src/abstraction/chemical.ts): `(chemical as any)[$children$] = props.children;` — **and an accessor with no setter refuses assignment.** *The old getter worked only because it was keyed by the STRING `children` while the slot was keyed by the SYMBOL: two names, no collision. Making them one name made them one property.*

**The fix is a declaration, not an accessor:** `declare [children]: ReactNode;`

### <a id="two"></a>2 · A symbol imported from the package name — ***310 failures, tsc clean***

**Chemistry's own tests import the framework from `@/index` — the source. The migration script added `import { children } from '@dna-platform/chemistry'` — the built `dist`.** ***Two copies of the framework in one file, so `children` was a different `Symbol()` than the one the framework writes.***

*Nothing typechecks wrong about that.* **The reads simply found nothing**, and [O7](../the-condition-report/02-organization.md#o7) had already named the shape: two copies loaded at once, `instanceof` false across the line, silently.

> ***The rule the incident earns: a package never imports itself by its published name.*** *Inside `chemistry/`, reach for `@/index`. The published name is for consumers, and a test is not a consumer of the thing it is testing.*

### <a id="three"></a>3 · A stale build artifact — ***97 failures, in the OTHER package***

***`dist` was rebuilt BEFORE the getter fix and never after.*** **`lib` consumes `dist`, so it ran the broken accessor for as long as the artifact stood** — the same failure as [1](#one), reappearing in a package where nothing had been edited. *[Solutions 05](05-the-suite-that-passed-against-a-stale-build.md) is this exact story from the other side, and the tell is identical: **a package you did not touch fails, and the one you did touch is green.***

### <a id="four"></a>4 · Duck typing that reached the old name — ***silent, no error at all***

**[`html.ts`](../../package/.archive/utilities/html.ts) walks an unknown node through eight guards, and one of them was:**

```typescript
if (typeof node === 'object' && 'children' in node) return text((node as any).children);
```

***The string key stopped matching, `in` returned false, and the walk fell through to `return ''`.*** **No throw, no type error — a mixed inline run just came back as `'Call me  today'`** with the middle silently gone. *This one was found by a single archive test and would otherwise have shipped.*

## The tell, so the next reader can grep for it

***A rename that the compiler approves is not a rename that is done.*** **A member reached by NAME is reached from four places the compiler cannot see:**

| where | what it looks like | does tsc catch it |
|---|---|---|
| **an accessor keyed by its own backing slot** | *assignment throws at runtime* | ***no*** |
| **a second copy of the module** | *reads return `undefined`, no error* | ***no*** |
| **a stale build artifact** | *a package you never edited fails* | ***no*** |
| **`'name' in node` / `node['name']` duck typing** | ***nothing at all*** — a value quietly goes missing | ***no*** |

***Three of the four are invisible to a green typecheck, and the fourth changes no message.*** **So the gate on a name-to-symbol move is not `tsc`; it is a grep for the old spelling in every form it can take** — `.name`, `'name' in`, `["name"]` — **followed by a rebuild of every artifact that carries it.**

## The rule

***Moving a member from a name to a symbol is a four-part change, and doing three parts leaves no error message.***

1. **Declare the symbol member, never accessor it over its own key.**
2. **Rewrite every reader — including the duck-typed ones**, which are the ones a search for `this.name` will miss.
3. **Never import the package by its published name from inside the package.**
4. **Rebuild every artifact a consumer resolves to, AFTER the last fix and not before.**

## See also

- [The suite that passed against a stale build](05-the-suite-that-passed-against-a-stale-build.md) — ***the same artifact staleness, arrived at from the opposite direction.*** *There the suite was green against an old build; here it was red against one.*
- [The field that held a bound class](32-the-field-that-held-a-bound-class.md) — **the neighbouring family: a member whose declaration travels into framework machinery and comes back a different thing.** *Both are correct code failing because the member's FORM was wrong for where it lives.*
- [The Grammar](../../../chemistry/.lib/authorship/01-the-grammar.md) — where `children` now sits as a symbol beside `cache`, and where the reason is written: **a view reaches for its BLOCK and never for the raw children it happens to have been handed.**
