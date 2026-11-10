# Code, Image, Document and Svg

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***Written 2026-09-28 with U4 of [Sprint 89](../projection/94-sprint-89--figures.md), the fourth figure added 2026-11-10 with U3 of [Sprint 125](../projection/130-sprint-125--the-library-of-papers.md); the code is [`src/figures/Code.tsx`](../../package/src/figures/Code.tsx), [`Image.tsx`](../../package/src/figures/Image.tsx), [`Document.tsx`](../../package/src/figures/Document.tsx) and [`Svg.tsx`](../../package/src/figures/Svg.tsx), the promises [`.tests/figures.test.tsx`](../../package/.tests/figures.test.tsx).***

---

## What they are

**The four figures `.public` ships, each working from an appended file or from what the author wrote** — Doug, 2026-09-28: *"Code, Image and SVG in .public, with appropriate configuration. `<Svg/>` — that is more elegant than all caps… all the symbols should all work with direct input or when configured for a resource so that the same tool can be used to express a literal in the code."* The fourth, Document, on his 2026-11-10: *"Yes we need the paper in the library. We need to be able to read it. You might have to find a way to show the resource in a useful way."*

| figure | what it draws | its mark | from a file | from input |
|---|---|---|---|---|
| `Code` | a letter whose own element is the `pre` since [Sprint 97](../projection/102-sprint-97--formats-are-the-unit-of-styled-components.md), replacing its span at the bond as a Date replaces its with a `time`, holding a code element; numbered, each line in a span wearing `pd-code-line`, Doug's name since [Sprint 95, U7](../projection/100-sprint-95--pages-formats-and-words.md#u7), and carrying its number as `data-line`, which a library's theme shows by `::before { content: attr(data-line) }` — the base draws no number; until Sprint 97 a `div` holding a `pre` nobody marked, the base's sheet counting the lines | `pd-code`, `pd-code-line` | `<Code identifier="code" />`, `<Code type=".ts" />` | `<Code>{'const x = 1;'}</Code>` |
| `Image` | a picture whose source is the append's address, its `alt` the identifier; fetched when it nears the screen and decoded off the main thread, `loading="lazy"` and `decoding="async"`, on Doug's yes of 2026-10-11 when the design book's 223 pictures weighed 23 MB at open | `pd-image` | `<Image type=".png" />` | `<Image>{'/elsewhere.jpg'}</Image>` |
| `Document` | a twin of Image for a document, a PDF first: an `object` whose `data` is the append's address, so the browser's own viewer shows the document on the page, scrolled, searched and printed by the viewer and held by no code of the library's, with the identifier as its label; inside the object a link to the address, which is what a browser with no viewer shows, so the document is reached either way. The binder serves a document beside a chapter at its address as it serves a picture, never inlined as text, since [Sprint 125](../projection/130-sprint-125--the-library-of-papers.md#d2), and its proof takes a link to a file the bind placed as answered by the file | `pd-document` | `<Document>![[ meltzer.pdf ]]</Document>`, `<Document type=".pdf" />` | `<Document>{'/elsewhere.pdf'}</Document>` |
| `Svg` | the append's markup inline, or the author's own elements as written | `pd-svg` | `<Svg type=".svg" />` | `<Svg><svg viewBox="0 0 1 1"><circle r="1" /></svg></Svg>` |

**The default sheet has a rule for each**, and for `pd-figure` and `pa-append`, so the set-diff promise holds: a listing in the system's monospace, kept as written and scrolling sideways; a picture no wider than the measure; a document as wide as the measure and as tall as a page of it, `aspect-ratio: 1 / 1.4142`, since an object with no rule draws at a browser's three hundred by a hundred and fifty. The code rule names `ui-monospace, monospace` and not a bare family, so the regression's promise that the paper's own style leaks to no other page keeps its meaning.

**What the viewer loads.** A document served from the page's own origin draws in the viewer even in headless Chrome, measured 2026-11-10 on Gödel 1931 at a desk's width, page 1 of 75 with its thumbnails; a page opened as a file cannot load a document across origins and shows the viewer's frame dark, which is how the sketch of a paper's page looked and not how the bound page does.

**What Svg trusts.** An appended file's markup is set as the letter's own; it is a library's own file, and it is drawn as it is.

## Promises

Four in [`.tests/figures.test.tsx`](../../package/.tests/figures.test.tsx), each figure from an append and from input. In the regression, the manual's chapter of the mark and the photograph, bound, served and seen, and since Sprint 125 its document placed beside the manual's pages at its address, none of its bytes in a page or the bundle, and served through the preview as a PDF.

## Gate

Measured 2026-09-28: the package 302 of 302; the manual's pages photographed, the mark inline, the photograph drawn from its address beside the pages. Measured 2026-11-10 with the Document: the package 367 green and 12 red, the 12 the cascade's render counts and the same 12 red at HEAD with the Document set aside; the binder's regression 61 of 61; the paper's page on 4343 with both documents answering `application/pdf` at their addresses.

**Names.** Doug's: `Code`, `Image`, `Svg`, `pd-code-line`. Ours, flagged: the four marks, and `Document`, a word in common usage for what the thing is, not run by him.
