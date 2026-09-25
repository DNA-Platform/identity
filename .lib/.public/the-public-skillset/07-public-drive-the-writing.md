# public-drive-the-writing

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***The chapter's name is a PROXY; Doug's to rename. Written 2026-09-23, first run by hand the same day on Format and Theme.***

---

**Draw a writing in real Chrome and report what a reader saw, as computed style rather than as text found in a stylesheet.** *First run by hand 2026-09-23, on Sprint 80's Format and Theme, because the promises for both ran in happy-dom and happy-dom had already been caught injecting nothing at all for `createGlobalStyle` — so a feature could be green in the suite and blank on a page.*

**Announce at start:** "Driving the writing, to see what a reader sees."

## Why it exists

***Because the suite reads a stylesheet's text and a reader reads a painted element, and those are not the same claim.*** **The rule this serves is Doug's and it is older than the branch: no chemistry feature ships unseen.** *A promise that finds `border-left:3px solid blue` in a `<style>` tag has proved that styled-components emitted a rule. It has not proved that the rule reached the element, that the element is the one the writing drew, or that a second theme nesting over the first left the value it never named alone.*

**Two things happen in happy-dom that make the distinction sharp.** *`createGlobalStyle` puts nothing in the sheet at all, so every design resting on a global rule — a class with its rules, a CSS variable, the rule that hides `pd-annotation` — is unmeasurable there. And nothing computes style, so a cascade is never resolved and a rule that is present but beaten looks exactly like a rule that won.*

## What it does

**Bundles a page against the built `dist` with esbuild, opens it in headless Chrome, and walks the steps the page declares** — acting, settling, measuring and photographing each one. The page is an ordinary `.jsx` module, and it says what a reader should see **as data**, which is what keeps the driver from knowing anything about writing:

```js
window.__page = [
    { step: 'the written theme',
      check: () => [['the theme\'s rule is painted', rule(), 'rgb(0, 0, 255) 8px']] },
    { step: 'a theme presented over it',
      act: () => { writing.$is = Inked; },
      check: () => [['the front theme wins the ink it names', ink(), 'rgb(0, 128, 0)']] },
];
```

***A check is a triple: a sentence, what was measured, and what it should be.*** **So a failure reads as a sentence about the page** — *`FAIL — a theme presented over it — the front theme wins the ink it names (got rgb(0, 0, 128) / want rgb(0, 128, 0))`* — *rather than as a diff of two objects, and the sentence is the one that goes in the sprint chapter.*

## Running it

```bash
cd library/.public/package && npm run build:quick
cd ../.lib/the-public-skillset
node 07-public-drive-the-writing--drive.mjs <page.jsx> [out-dir]
```

[`07-public-drive-the-writing--page.jsx`](07-public-drive-the-writing--page.jsx) is the worked page, kept so the numbers below are reproducible rather than remembered. The photographs land in the out directory, one per step, and **they are looked at** — a green run that nobody opened is not a thing seen.

## The traps, each of which cost a run

| trap | what it looks like | what to do |
|---|---|---|
| **the build is stale** | the page draws the last bundle's classes | `npm run build:quick` before every run; the driver reads `dist`, exactly as the suite does |
| **a subclass declares its field on the prototype** | the base's own initializer shadows it and the value never arrives, so a theme silently does nothing | declare it as a **class field**, `class $Ruled extends $Theme { values = {...} }`, which is what the promises do |
| **`$is = []` is read as "take everything away"** | an assertion expects the format's defaults and gets the theme | `$is` is the **changes**, not the set: taking the presented one away goes back to what was **written** |
| **an annotation is visible and nobody expected it** | a stray `4` in the text | annotations stand **visible** until a stylesheet hides `pd-annotation`; assert with `startsWith` or place the rule |

***The second and third of those were the first run's two failures, and both were the driver's expectations rather than the code's behaviour.*** **That is the normal shape of a first run and it is worth saying out loud**, because a session that assumes a red means a defect will go and change working code.

## The numbers it had when it was written

**10 of 10 seen**, 2026-09-23, on [Format and Theme](../writing/11-format-and-theme.md) at `b9a72a5`: the writing drawn as its format's blockquote; the written theme's rule painted `rgb(0, 0, 255)` at 8px and its ink `rgb(0, 0, 128)`; the format's own rules painted beside them at 20px; a theme presented through `$is` winning the ink it names and **inheriting the rule it does not**, which is the merge visible on a page rather than inferred from a class name; and the round trip back to the written theme when the presented one is taken away.
