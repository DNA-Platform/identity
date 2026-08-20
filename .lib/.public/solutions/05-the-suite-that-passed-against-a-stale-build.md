# The suite that passed against a stale build

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** verification · false-green · stale-artifact · cross-package · dist · two-copies · instanceof
- **sprint:** [48 — Subjects and the Library](../projection/06-sprint-48--subjects-and-the-library.md)

---

## Symptoms

- A framework change landed in `@dna-platform/chemistry` that **should have broken four classes** in the lib. The chemistry suite went from 622 to 628 and caught the change correctly.
- The **lib suite reported 108/108 passing.** Nothing failed. The change appeared to be safe.
- It was reported in the room as a result — *"108/108"* — before anyone asked what the lib was testing against.

## What did not work

- **Reading the number.** 108/108 is what a healthy suite looks like, and there is nothing in the output that says which build it exercised.
- **Trusting `deps: { inline: [/chemistry/] }`** in the lib's `vitest.config.ts`. Inlining controls bundling, not resolution, and it reads like it means "use the source."

## The mechanism

The lib resolves its dependency through `node_modules`, and `package.json` points at the built artifact:

```
"main":   "dist/lib.cjs",
"module": "dist/lib.js",
```

A one-line probe settles it and should be the first thing run:

```bash
node -e "console.log(require.resolve('@dna-platform/chemistry'))"
# → library/chemistry/package/dist/chemistry.cjs
```

So the lib was testing **the last build of chemistry**, not the working tree. The source change was invisible to it. Rebuilding chemistry and re-running turned 108/108 into **105/108**, with three failures naming exactly the four classes the audit had predicted — *"$Cover did not call $Document"*, *"$TableOfContents did not call $Document"*, *"$Section did not call $Writing"*.

**The change was correct the whole time. The verification was not.**

## The fix

**When a change crosses a package boundary, rebuild the dependency before running the dependant's suite.** `npm run build` in `chemistry/package`, then the lib suite. Without it the run is not a weaker check — it is **a check of different code**.

## The lesson

**An unexplained pass is exactly as suspicious as an unexplained failure**, and it is far more dangerous, because nobody investigates good news. Twice in one session a suite passed where it should not have: here, and when an audit script's counts came out lower than the code warranted. Both times the number was right about something — just not about the thing being claimed.

The habit that catches it: **before reporting a green number, say what it exercised.** Not *the suite passed* but *the suite passed against this build of that dependency*. If that sentence cannot be completed, the number is not yet evidence.

---

# THE SAME RESOLUTION, A SECOND CONSEQUENCE — 2026-08-18

***Rebuilding fixes the staleness. It does not fix this.***

**TWO COPIES OF THE FRAMEWORK ARE LOADED AT ONCE.** The compiler and the public application resolve `@dna-platform/lib` through `node_modules` to **`dist`**; the demonstration and both suites alias `@` to **`src`**. Both are correct for what they are, and together they mean **two distinct class objects for every class**.

## Symptoms, in the words they were observed in

- A probe measuring a real book reported ***"sections 1, of them $Section: 0"*** — one section, none of which is a section.
- The compiler's validating phase **crashed with a `$Author` as the thrown value**, not an Error, after a revert rebuilt one package's `dist` and not the other's.
- Twenty minutes were spent **diagnosing rules that were correct**, because they appeared not to fire.

## The mechanism

`instanceof` asks whether an object's prototype chain contains **a particular class object**. Two builds of the same source produce two, so:

```
src/$Section        !==        dist/$Section
```

A book imported from the emitted tree carries the `dist` classes; a test importing `@/writing/Section` holds the `src` one. **Every `instanceof` across that line is false**, and it is false silently — there is no error, only a zero where a one belonged.

***And the framework leans on `instanceof` everywhere***: [`$Book`'s bond constructor](../../package/src/book/Book.tsx), `accounts()`, the application's reader-or-catalogue predicate, and — since [Custom Elements](../projection/17-custom-elements.md) — **the parse itself at every level**.

## The fix, and it is not the same fix

**A measurement stays inside ONE realm, and says which.** A promise that imports the framework from `src` may not measure a program that imports it from `dist`. *Three probes in one day were wrong this way, and each was reported before it was caught.*

**And rebuild BOTH, in dependency order.** After any change crossing the boundary: chemistry's `dist`, then lib's `dist`, then the consumers. Rebuilding one and not the other is how the emitted books came to run the previous parse against the current substrate.

## The lesson, sharpened

**Chapter 5's rule was *say what a green number exercised*. This is the same rule for a red one.** A measurement that disagrees with the code is a claim about *which copy was measured*, and that question comes before diagnosing the code.

***The standing fix is one copy, and it has not been made.*** It has been named out of scope twice — in [Validation](../projection/16-validation.md#and-two-copies-of-the-framework-are-loaded-at-once) and in [Custom Elements](../projection/17-custom-elements.md) — while costing four wrong measurements in two days. **It is the cheapest unpaid debt on this branch.**
