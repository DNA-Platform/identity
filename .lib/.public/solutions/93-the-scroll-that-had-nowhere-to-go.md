# The Scroll That Had Nowhere to Go

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **keywords:** tooling · absent-case

---

## Symptoms

**A browser promise that a chapter's page opens turned to that chapter read `window.scrollY` as 0** — on the evidence's page of the test library, in headless Chrome at a window of 800 by 300, with every other regression promise green and the same turn passing in jsdom. Measured 2026-09-27, Sprint 85's U4.

## What did not work

- **Suspecting the turn.** The book's `next('mount')` and its scroll to the title's id were read three times for a timing fault — hydration, the lazy chunk, the microtask — and none was there.

## The mechanism

**The whole paper stood in 300 pixels.** A probe that bound the library, served it and measured the page in Chrome read `scrollHeight` 300 against `innerHeight` 300 and the evidence's title at 113 pixels from the top: the document was no taller than the window, so `scrollIntoView` had no distance to travel and the browser left `scrollY` where it was. *The gate ran correctly over a page that could not exercise the defect it was written for — the absent case.*

## The fix

**The window is a third of the page:** the promise sets a viewport of 800 by 100, and the evidence's page then scrolls, its title inside the window. *Committed as `5de3a89`, and the router's two promises after it use the same window.* The probe that found it — pull a galley, bind it, serve it on a port that is not Doug's, drive Chrome, print the numbers, remove the galley — is the shape to reach for when a browser promise disagrees with jsdom.

## Prevention

- **A promise about a scroll first proves the page is taller than the window.** `scrollHeight` against `innerHeight`, or a window set small enough that it must be.
- **When a browser promise fails where jsdom passes, measure the browser before theorising about the framework** — the difference was geometry, not timing.
