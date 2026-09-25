# The Rules That Won by Counting Classes

- **author:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `model` · `demo` · `theme` · `wrong-altitude`

---

## The symptoms

Four, over one day, all on the wiki gate, none throwing:

- **"portal 1280: wordmark stands at y 40 where Wikipedia sets 55"** — and the same at HEAD, measured by stashing the working tree: the portal theme's `header p:has(img) { margin: .857em 0 0 }` had never applied on any commit.
- **"turing style · infobox image · height: theirs 333px, ours 250px"** and **"wordmark stands at y −109 where Wikipedia sets 14"**, the moment U1 lifted the image's format: under the gate's pixel stub every image became square, and a 140-wide wordmark 140 tall pushed its header section off the top.
- **the project card drawn as one column**, its title 246 wide where Wikipedia sets 122 — computed `display: block` on the card while `.bjxDmc { display: grid }` stood in the sheet.
- **"indicator is 263 wide where Wikipedia sets 19"** — a 20px icon stretched across the synopsis row.

## What it was

One element with two authors and no rule for which wins but the count of classes in their selectors. The base theme's `.theme .pd-paragraph:not(.pd-heading) { margin-bottom: 1rem }` counts three and beat the portal's one-class rule for a year. The theme's `.pd-illustration img { height: auto }` and the header format's `wordmark_height = 'auto'` had been dead in effect because every image's format restated its width and height in CSS purely to win; when U1 stopped restating them, the theme's rules came alive and handed the height to the bytes — which the gate answers with a 1×1 pixel. A base rule added that day, `.pd-section.pd-meaning { display: block }`, counted three with the theme's class and beat the card format's grid. And a synopsis rule on `.pd-paragraph` flexed the indicator images, because an image is a paragraph in the type chain and the rule said the base kind when it meant the text line.

Every one of these was met where it stood and fought there — a longer path, a `:not()`, a counter-rule, a subtracted number — and every fix bred the next, because they were one problem wearing different selectors: the theme carried CSS addressed by kind from above, formats carried CSS on their own element, and the cascade counted classes where the design meant *type's default under instance's own*.

## What fixed it — a ruling, and a design, not a selector

Doug: *"it is a fact of CSS; write rules that do not collide"* — and then the design that makes collision impossible by construction: *"Themes shouldn't really even have CSS, and maybe a format would be better for anything CSS related… an abstraction for styling things that is at a higher level."* A theme holds values; a format styles its own element reading them; a parent places its children and never paints them. With no theme rules there is nothing for a format to collide with, and the precedence the cascade could not express is never needed. That is U5, planned and not yet built; what was done the same day: the two `height: auto` rules deleted, since the page sizes its images and the theme was contradicting Sprint 63's ruling; the counter-rule deleted and the cover title's block display moved onto the title element in the one theme that had measured it; the wrapper-era selectors in the theme and the gate corrected to the merged element; and the theme provider reached into chemistry — [79](79-the-single-that-re-bonded-with-the-book-s-children.md) — which is where the hand-rolled theme, the root of the collisions, is removed.

## What it cost to learn beside it

A day of the cat driving with the husky howling — Doug's image — and two chapters in the coding style that did not exist that morning: [The Reach](../the-coding-style/07-what-natural-means.md#the-reach), and [the CSS shapes](../the-coding-style/07-what-natural-means.md#the-css-shapes).

## Where it is recorded

[Sprint 69](../projection/75-sprint-69--the-wart-hunt.md) · [What Natural Means](../the-coding-style/07-what-natural-means.md) · [Themes per type, formats per instance](../the-motif/04-themes-per-type-formats-per-instance.md).
