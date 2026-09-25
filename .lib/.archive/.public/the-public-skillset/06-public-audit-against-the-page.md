# public-audit-against-the-page

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

**Compare what we draw against a REFERENCE RASTER, in pixels, and report the differences as columns and pitches rather than impressions.** *First run by hand 2026-09-10 against `pnp.pdf` page 1; it found five faults in an hour that four sessions of looking had not.*

**Announce at start:** "Auditing the page against its reference."

## Why it exists

***Because "that looks about right" and "you are VERY far away" are the same sentence said by two people looking at the same screen.*** **Doug, on a table of contents I had just called close:** *"Yeah but there's spacing on there, nuanced indenting. You are VERY far away."* **He was right and I had no way to know it**, because I was comparing a memory of one image to a memory of another.

***The instrument removes the memory.*** **Both sides become numbers in the same coordinate system, and the difference is arithmetic.**

## What makes it possible

**A PDF opened in Chrome at 100% renders a US-Letter page at 816 CSS pixels, and our sheet is 8.5in — 816 CSS pixels.** *So a screenshot of the reference and a measurement of our DOM are in the SAME UNITS with no scaling, and a column at x=96 in one is the same column at x=96 in the other.* ***That coincidence is the whole reason this works; check it before trusting a comparison.***

## <a id="the-text-layer"></a>CORRECTED 2026-09-10 — ***read the PDF's TEXT LAYER, not its raster, wherever there is one***

***The raster was reading about 44px low throughout, and nothing in the method said so.*** **A PDF opened in Chrome is drawn BELOW the viewer's own toolbar, so a screenshot's y=0 is not the page's y=0** — *the columns it gave were right, because x is unaffected, and every vertical number was off by one piece of browser furniture.* **[B8's "the title block is 92px too high"](../the-condition-report/09-the-demonstration.md#b8) was a real fault measured against a shifted origin, and closing it against the true origin took 26px, not 92.**

***What to do instead, and it is strictly better:*** **extract the page's text layer with pdfjs — every glyph with its `x`, `y`, `w` and `h` in PDF points — and convert once: `css = point × 816/612`, and `y_from_top = (792 − y_baseline) × 816/612`.**

- ***No calibration and no offset.*** *The numbers are the document's own.*
- ***Rows and columns fall out of a grouping.*** **Group the glyphs by rounded `y` for LINES; walk each line and start a new column wherever the gap to the previous glyph exceeds a few points.** *That gives a contents row's number column and title column directly, with no ink scanning at all.*
- ***Line pitch is the difference between consecutive baselines***, which is exactly what typesetting means by it — where a raster's row bands are an approximation of it.
- ***The raster still answers ONE question the text layer cannot:*** **colour.** *Sample it there and nowhere else.*

**Measured with it the same afternoon:** *the contents' three levels at 96/118, 118/151, 151/198; the title block at 146, 193, 266, 290; the abstract inset 36 and indented 20; the pitch 18 in the contents and 16 in the abstract, opening to 19 on the line that carries a formula.* ***Ten values, all closed to a tick.***

## The procedure

1. ***Cache the reference.*** **Open the real document in Chrome at 100%, screenshot the page, and keep it in the scratchpad.** *Find the page's left edge and width in that raster once — everything after is relative to it.*
2. ***Scan the raster for rows of ink.*** For each y, ask whether any pixel across the page column is dark; a run of such rows is a LINE. **This gives you every baseline and every pitch without reading a word.**
3. ***Scan each row for runs of ink.*** For each x within a row band, ask whether any pixel down the band is dark. **The first run is the number, the last is the page number, and the gaps are the columns** — which is how an indent step is measured rather than guessed.
4. ***Ask our DOM the same questions.*** `getBoundingClientRect()` relative to `.pd-book`, plus `getComputedStyle` for weight and size, plus **`Range.getClientRects()` over a paragraph for its LINE BOXES** — the only way to get our line pitch, since a line is not an element.
5. ***Report as a table of three columns: real, ours, out by.*** **Anything within a pixel is a tick and gets left alone.**

## What it found the day it was written

| | |
|---|---|
| ***the number column*** | one width for every level in ours; **the page gives each level its own** — a top-level title sat 17px too far right |
| ***the indent step*** | uniform 23px in ours; **22px then 34px on the page**, because the second step makes room for a longer number |
| ***the title block*** | **92px too high** — one value moving four things |
| ***the abstract's first line*** | **a 20px indent on the page and none in ours** |
| ***the line holding an inline formula*** | ***the page opens it too*** — 16px to 19px, where ours opened to 23. **The fault was the DEGREE, not the opening** |
| ***the ink*** | sampled darkest-pixel per region: **`rgb(0,0,0)`, `rgb(9,3,1)`, `rgb(5,0,5)`** — *the page is BLACK, and the blue cast everyone sees in a screenshot is subpixel rendering.* **Two sessions had been chasing a colour that was not there** |

## The traps, each of which cost time

- ***A screenshot's blue-grey cast is not ink.*** **Sample the darkest pixel in a region before believing a colour**, or you will tune a theme to an artefact of the renderer.
- ***A line is not an element.*** `getBoundingClientRect()` on a `<p>` gives the block; **`Range.getClientRects()` gives the lines**, and line pitch is where typesetting lives.
- ***Measure the page's own margin first.*** *Ours and the reference both begin their text at x=96 — but that is a fact to check, not to assume, and every column number after it is relative to it.*
- ***Compare rhythm before size.*** **A row pitch that already matches means the type is right and only the geometry is wrong**, which is a much smaller repair than it looks.

## Where the scripts live

***Written fresh each time, deliberately.*** *The scan is fifteen lines and the questions change with what is being compared; a saved script would be answering last week's question.* **What is worth keeping is the METHOD above and the coincidence in [What makes it possible](#what-makes-it-possible).**
