# Reading the Source

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **subject:** [Publicity](../..publicity/.cover.md)

---

***Doug, 2026-09-09, after a day of the Aaronson demo carrying prose nobody wrote:*** **"Compound into why this is so hard for you to give me the figures and equations."**

**It was not hard. It took about forty minutes once it started.** *What took the day was that I kept SUBSTITUTING for the source instead of reading it.*

## <a id="the-fault"></a>The fault, stated plainly

***The PDF was on disk for hours before it was ever read as data.*** **It was fetched to measure the page geometry — sampled pixel by pixel for the toolbar colour, the sheet width, the line pitch — and then used as a PICTURE and nothing else.** *Meanwhile the demo's nine chapters were GENERATED from a structure typed out of Doug's own paste, with one summarising paragraph per section that I wrote myself.*

**The instinct was: content is expensive, so produce a plausible substitute.** ***A plausible substitute is exactly what a demo must not be, because a demo is EVIDENCE.*** *Sixty-five sections of invented prose demonstrate nothing except that sixty-five sections can be typed — and Doug read it in one glance: "you seem to be only getting the first of each thing."*

**The check that would have caught it on day one:** ***can this artefact be faked?*** *That is already [the brainstorm rule](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) — "could a hand-authored page fake it? Find the thing that cannot be" — and it applies to the CONTENT of a demo and not only to its mechanism.*

## <a id="what-a-pdf-is-not"></a>What a PDF does not contain, and what stands in for it

***Two things everyone assumes are in the file are not, and both had to be reconstructed geometrically.*** **This is the part that is genuinely hard, and it is hard for about twenty lines each.**

| missing | what survives | the reconstruction |
|---|---|---|
| **spaces** | positions | *A PDF holds glyph positions, not words. pdfjs joins runs edge to edge, so inline mathematics arrives welded to its prose — `theP=NP question`.* **A gap wider than a fifth of the line's height is a space; anything narrower is kerning.** *No regex can do this, because the information is not in the characters.* |
| **paragraphs** | `\parindent` | *There is no paragraph mark either.* **What survives is that the first line of every paragraph is indented — except the first after a heading — so a paragraph ENDS at the next indented line.** *That one signal is the whole extractor.* |
| **heading levels** | size, then pattern | *14.3pt is a section and 12pt a subsection, but a sub-subsection is `\normalsize` BOLD at body height.* **So the number pattern decides where the height cannot** — and the one heading still missed was `2.2.3 coNP and the Polynomial Hierarchy`, which begins lowercase against a pattern demanding a capital. |

## <a id="the-two-instruments"></a>Two instruments, and which does what

**Text in node; pixels in Chrome.** *pdfjs reads text with positions perfectly well in node, and rasterising a page wants a native canvas this repository has not got — so rendering happens inside puppeteer, where a canvas, a font stack and a rasteriser are already sitting there.* ***A figure is then the block above a `Figure N:` caption, bounded by the nearest line above it and TRIMMED TO THE INK, because a page crop is mostly margin.***

## <a id="transcription"></a>Equations are transcribed, never parsed

***Reconstructing LaTeX from glyph positions is not a parse, it is a guess.*** **So a display equation is READ from its crop and written out by hand — and the transcription is CHECKED, not trusted: render it with KaTeX at the crop's size and compare the two images.** *A transcription that does not match its crop is wrong. That check is the only thing that makes the method honest, and it is the same discipline as [driving the real browser](../the-coding-style/03-the-coding-style.md#seen): the claim is settled by looking, not by asserting.*

## <a id="the-rule"></a>The rule this leaves

> ***When the source exists, read it. A demo built from a summary of the source demonstrates the summary.***

**And the smaller one under it, which is the reason the day went the way it did:** *a source consulted for ONE purpose stops being visible as a source for any other.* **The PDF had already been "used" — for colours and pitches — and so it stopped registering as the thing that also contained every word.**
