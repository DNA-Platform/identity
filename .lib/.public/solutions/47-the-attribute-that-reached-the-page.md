# The attribute that reached the page

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visible-idea/.cover.md)

---

**keywords:** framework · split-discriminator · dollar-props · dom-attribute · `look="0"` on a div · a framework prop rendered as an html attribute · the set that only half the code consulted

---

## The symptom, as it was met

A cover drew this into the page:

```html
<div class="pd-chapter pd-cover pd-a-book" look="0">
```

***`look` is not an html attribute.*** It is `$look` on `$Particle` — **the framework's own vocabulary for choosing which of a chemical's views draws it** — and it had reached the DOM, where nothing reads it and React passes it through untouched.

**It appeared only after a chapter kind composed a `<Chapter>` in its `frame()`.** A plain chapter had none, and a book composing `<Body>` had none, which made it look like the composition had caused it.

## What did not work

***Reading `augment` first.*** That walk touches exactly three things — the assignment symbol, event handlers, and `facade`. It never writes `look`, and half an hour went to proving a negative.

***Suspecting the styled path.*** `styling()` opens `const made = styledFor(particle); if (!made) return drawn;` and its own comment says *"Reached only when a selector was declared."* A cover declares none, and its div carried no `sc-` class, so it was never compiled. **The suspicion was reasonable and wrong**, and it survived longer than it should have because the composition made the timing look causal.

***And the fix appeared not to work for twenty minutes*** — which was [the stale build, for the third time](05-the-suite-that-passed-against-a-stale-build.md).

## The mechanism

***Two seats strip a `$` into a prop, and only one of them consulted the set that says which `$`-props are the framework's own.***

The set is stated once, with a comment that reads as a promise:

```ts
// The framework's own $-props. They configure a particle and are never the
// author's, so they are the one thing a dress does not hand on.
const framework = new Set(['$look', '$show', '$hide', '$on', '$pid', '$facade']);
```

**[`given()`](../../../chemistry/package/src/abstraction/styled.ts) keeps the promise** — `if (name.charCodeAt(0) !== 36 || framework.has(name)) continue;`.

**[`[$props$]()`](../../../chemistry/package/src/abstraction/chemical.ts) does not.** It walks the bonds and then the own keys, and both loops end the same way:

```ts
if (!$Reflection.isSpecial(key)) continue;
const value = $this[key];
if (value !== undefined) props[key.slice(1)] = value;
```

***And `[$props$]()` is the seat that draws a tag.*** `$Html$.view()` is `React.createElement(this._type, this[$props$]())` — so **every raw element a view writes was being handed the framework's props**, with `$show`, `$hide`, `$pid` and `$facade` riding the same road whenever they were set.

**The composition did not cause it; it revealed it.** A cover framing a `<Chapter>` put a written `div` where one had not stood before.

## The fix

**One home, two readers.** The set moved to [`symbols.ts`](../../../chemistry/package/src/implementation/symbols.ts), beside `looks` — where the framework's vocabulary already lives — and both seats now import it. `[$props$]()` skips a framework prop in each of its two loops.

***Nothing else changed***, and both suites stood: chemistry `tsc` 0 · 68 files · 848/848, lib `tsc` 0 · 25 files · 519/519.

## Prevention

***A closed set consulted by one of the seats that need it is a set stated in no place at all.*** The comment named the rule — *"the one thing a dress does not hand on"* — and the rule held in the file where it was written and nowhere else. **When a set is a rule, it belongs where both readers already import from**, which for this framework is `symbols.ts`.

***And the class of fault is older than this instance.*** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) already carries it as the reason that chapter exists: *a closed set stated in several places, checkable in none, is the fault this repository already paid for.* This is that fault with the set stated **once** and consulted **once of twice**, which is the same failure wearing a better disguise.

***The instrument that found it was a browser, not the suite.*** 519 tests were green over a page that carried an invalid attribute, because no test renders a cover. **A framework attribute reaching a page is invisible to any assertion that never draws.**

*Found 2026-09-04 in [Sprint 42](../projection/44-sprint-42--the-cover.md), by Doug reading the drawn html and asking why a selector was there at all.*
