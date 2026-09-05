# The suite that passed against a stale build

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** verification · false-green · stale-artifact · cross-package · dist · two-copies · instanceof · driver · probe
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


---

# A THIRD FORM — THE PROBE THAT PROVED NOTHING — 2026-08-25

***The first two sections are about a measurement reading the wrong copy. This one is about a CHANGE reaching the wrong copy, and it cost more — because the instrument that should have found it was itself pointed at nothing.***

## Symptoms, in the words they were observed in

- The public library's driver **stalled at 8 checkpoints of 39**: *"nothing to click for the physics entry (`[data-entry="/physics"] a`) — the walk stopped here."*
- The shelf **drew its entries as raw `<section>` elements** — two per entry, a heading and a paragraph — where each should have been a card carrying `data-entry` and a link.
- **Zero console errors.** Nothing threw. The page rendered; it rendered the wrong thing.
- The suite was **352/352** and the typecheck **0**, both at that moment.

## What did not work, and this is the expensive part

***A PROBE AGAINST THE SOURCE.*** **A framework member had just been rewritten, so it was the obvious suspect. The probe removed the suspect line, the driver was re-run, and NOTHING CHANGED — so the probe was read as exonerating the change.**

***It exonerated nothing.*** **The application never saw either version of that file.** *It resolves `@dna-platform/lib` through `node_modules`, and `package.json` names the built artifact:*

```
"main":   "dist/lib.cjs",
"module": "dist/lib.js",
```

**`dist` was dated two weeks earlier.** *Every probe of the source was a probe of a file the running program does not read.*

## The mechanism, and the thing that makes it hard to see

**TWO APPLICATIONS IN THIS REPOSITORY RESOLVE THE FRAMEWORK DIFFERENTLY, and both are correct.**

| | resolves `lib` through | so a source edit is |
|---|---|---|
| the **demonstration** — [`package/app`](../../package/app/vite.config.ts) | `resolve.alias` → `../src` | **visible immediately** |
| the **public library** — [`app`](../../app/vite.config.ts) | no alias; `node_modules` → `dist` | **invisible until rebuilt** |

*So the same edit, in the same session, appeared to work in one application and to do nothing in the other* — **and the one where it did nothing was the one being debugged.**

**And chemistry's `dist` HAD been rebuilt, which made it worse.** *The library application was running **old `lib` against new `$Chemistry`** — [exactly the condition C7 states](../the-condition-report/07-the-three-codebases.md#c7): "things need to be rebuilt so the different libraries can update their dependency."*

## The fix

**Rebuild in dependency order before believing any instrument**: `$Chemistry`'s `dist`, then `lib`'s, then restart the servers. ***8/39 became 39/39 with 0 console errors, and 39/39 again on the built artifact.***

## The lesson, and it is a new one

**Chapter 5's rule was *say what a green number exercised*. The second section's was *say which copy a red one measured*. This one is about the instrument itself:**

> ***A PROBE IS ONLY A PROBE IF THE PROGRAM CAN SEE IT.*** **Before removing a suspect line to test a hypothesis, establish that the running program reads that file at all.** *One command settles it, and it is the one this chapter already recommends:*

```bash
node -e "console.log(require.resolve('@dna-platform/lib'))"
```

**A probe that changes nothing is evidence of exactly two things, and from the outside they look identical**: the suspect was innocent, **or the probe never landed.** *Twenty minutes went to the first reading when it was the second.*

***The standing fix is still one copy, and it is still unmade.*** *Named out of scope three times now — [Validation](../projection/16-validation.md#and-two-copies-of-the-framework-are-loaded-at-once), [Custom Elements](../projection/17-custom-elements.md), and here.* **It has now cost four wrong measurements and one wrong exoneration.**

# A THIRD APPEARANCE — 2026-09-04, and the lesson above named it exactly

***The lesson at the end of the second appearance was read, understood, and paid for again the same way.***

## The symptom, in the words it was observed in

A framework prop was reaching the DOM as `look="0"`. **The fix was written into `chemical.ts`, both suites were run, and the attribute was still there.** So the fix was assumed wrong, and twenty minutes went to reading `augment`, `styling` and `styledFor` looking for a second seat that did not exist.

## The mechanism, which is the same one

**`@dna-platform/lib` resolves chemistry through the package symlink, and the package's `main` is `dist/chemistry.cjs`.**

```
node -e "console.log(require.resolve('@dna-platform/chemistry'))"
→ library/chemistry/package/dist/chemistry.cjs
```

***So lib's 519 tests exercise a BUILT ARTIFACT.*** A change to chemistry's source is invisible to them until `npm run build` runs in chemistry — and chemistry's own 848 tests, which do read source, had already gone green on the very same change.

**Two suites agreed with each other and disagreed about the same line, and neither said so.**

## The fix, and the standing one it points at again

`npm run build` in `library/chemistry/package`, then re-probe: the attribute was gone. *The fix had been correct from the first minute.*

***The standing fix is still one copy, and it is still unmade*** — now named out of scope four times. **What is newly owed is smaller and would have caught this one: a lib run that touches chemistry must rebuild chemistry first, or say out loud which chemistry it ran against.** A suite that does not state which source it ran against is [a number without its scope](../../package/vitest.config.ts), and the package's own config already says so about v1 and v2.

***The lesson from the second appearance, quoted because it was the diagnosis and it was on the page the whole time:*** **a probe that changes nothing is evidence of exactly two things, and from the outside they look identical** — the suspect was innocent, or the probe never landed.
