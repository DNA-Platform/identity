# The Image That Drew Its Words

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** `tooling` · `gate` · `broken-image`

---

## The symptom

*turing 1280: indicator is 347 wide where Wikipedia sets 19.* A twenty-pixel icon measured 347 wide on our page and, in the next recording, 347 wide on Wikipedia's too. The photograph in the infobox measured 21 pixels tall. The first thumb in the body measured 720 wide and 78 tall. Everything had been right the run before.

## What it was

The gate had just begun **aborting image requests** while measuring, to stop waiting on Wikimedia's bytes — the wait was most of a ninety-second run. An aborted image is a **broken** image, and a browser draws a broken image's alt text in place of its box. Our images carried no width and height attributes, so they had no box to keep; Wikipedia's carry both and still drew their words. So every measurement of an image became a measurement of a sentence.

## What fixed it

Two things, one on each side.

- **An image says its size.** `$Image` and `$Illustration` write `width` and `height` as attributes, as any well-formed image does, from the numbers the page gave them; the format sizes the same numbers as CSS, appending `px` to a bare number.
- **The gate answers every image with one pixel** — a one-by-one SVG served in place of the bytes — instead of aborting. It loads at once, its width and height say its box, and both pages measure the same way. Fonts and media are still aborted.

Measured after: a run of nineteen widths in parallel tabs in 73 seconds, one width in 14, every image at its declared box on both pages.

## Where it is recorded

[Sprint 63, the night's stand](../projection/69-sprint-63--the-encyclopedia.md#stand4).
