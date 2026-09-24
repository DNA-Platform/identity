# Sprint 54 — The Paper, Pixel by Pixel

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **status:** `requirements-only` — ***notes are being taken file by file; nothing is planned yet***
- ***The chapter name is a PROXY; Doug's to rename.***

---

## <a id="requirements"></a>Requirements — ***Doug's words, 2026-09-09***

> ***"Let's do a code review of the Aaronson paper. We are going to get it pixel perfect. Your first task is to look at the paper in depth and figure out what has to happen to get it to look nearly exactly like a compiled tex file viewed on Google Chrome."***
>
> *"I want the entire table of contents in there, even if the bottom N links point to the same place. I want citations and links to all work. I want the dark grey background and possibly even a toggle for the page navigation but not now. Perhaps this is what the theme of article, which might not be loaded so we want to know what things look like with and without it, can be responsible for."*
>
> **"You will take notes, file by file. We will go through each file. I will give you feedback while looking at the document, you will note it, and we will enumerate the whole thing, then you plan and we turn it into a sprint."**

| | |
|---|---|
| **R1** | ***The paper looks nearly exactly like a compiled `.tex` viewed in Chrome*** |
| **R2** | **The ENTIRE table of contents stands in the document** — *64 entries, three levels. Links that have no target yet point at the last real one* |
| **R3** | ***Every citation and every link resolves*** |
| **R4** | **The dark grey ground behind a white page** — *a page-navigation toggle is named and deferred* |
| **R5** | ***The division is known: what the document carries against what the ARTICLE THEME carries***, so the page can be seen with the theme and without it |
| **R6** | **The review is file by file, Doug reading the document and me noting**, and the enumeration is what becomes the plan |

## <a id="target"></a>The target — ***read from the real PDF, not imagined***

***[Scott Aaronson, "P =? NP", 2017](https://www.scottaaronson.com/papers/pnp.pdf) — 122 pages, 9 sections, three levels of section, dot leaders, page numbers.*** **Fetched, opened in the installed Chrome, screenshotted and SAMPLED PIXEL BY PIXEL**, because the PDF viewer is a closed shadow root and there is nothing to query: toolbar `#3c3c3c` 56px, ground `#282828`, sheet `#ffffff` at **816px = 8.5in at 96dpi**, a 6.5in text column so 1in margins, an abstract inset ~40px each side, **body line pitch 18px and abstract line pitch 16px** — which are `article.cls`'s own numbers at 11pt, a 13.6pt baselineskip and an abstract set `\small` at 10pt on 12pt.

| the document must carry | state |
|---|---|
| 9 numbered sections, three levels | ✅ *all nine and every subsection, 65 contents entries* |
| a contents entry per section: number · title · place | ✅ *number, dotted leader, marker* |
| an anchor every entry and citation resolves to | ✅ *0 dead at every scale* |
| a bibliography that draws | ✅ *`<Paragraph>` + `<Reference>`, 7 entries* |
| footnotes at the foot, and the author's `*` note | ❌ ***design owed*** — [where a writing is drawn](#drawn) |
| the equations, the figures | ❌ ***the plan below*** |

| the article theme must do | state |
|---|---|
| dark ground, a white page centred | ✅ *`desk` and `paper`, measured* |
| Computer Modern as a real webfont | ✅ *latex.css's own Latin Modern* |
| justified with hyphenation | ✅ |
| contents: number column, leader, place, level 1 bold | ✅ *and the mechanism is in the BASE* |
| section numbers from counters | ✅ *document and contents, one `:not()` said twice* |
| pagination, page numbers, running heads | ❌ ***ruled out for now*** |

## <a id="notes"></a>THE REVIEW — ***file by file***

*Spent. The walk ran and its output is the work below; what it found about individual files is in the commits and in the comments those files now carry.*

## <a id="direction"></a>THE DIRECTION — ***Doug's***

***A page that moves between readings with different parts printed in each, and a TeX printer at the end of it.*** **The toggle is built**: each theme carries `static $dresses(scope)` and the book calls one or the other; the *only* difference between the two readings is which one was called last.

## <a id="established"></a>WHAT THIS SPRINT ESTABLISHED

*Each of these was argued at length here and now lives where it belongs. The line is kept so a reader arriving at the anchor still learns the finding.*

- <a id="many"></a>***THE FRAMEWORK IS DESIGNED FOR MANY AND PROVEN FOR ONE*** — 21 `$Format` classes and the deepest stack ever drawn was 2. Twelve now stack; the census is in [the record of that day](#stands).
- <a id="twelve"></a>***A writing wears twelve formats*** — it wore one because `$Annotation.specifically` ran a specification over its holder, and the second format judged the first. `$Format.specifically()` is a no-op.
- <a id="looks"></a>***No looks*** — settled and written into [The Coding Style](../the-coding-style/03-the-coding-style.md#perspectives), including the correction: a conditional in a `view()` is ordinary.
- <a id="vocabulary"></a>***A theme is as polymorphic as the proportion of it that is a VALUE*** — proven three more times since: `ruled`, then `strip_background`, then `leader`, each refused by tsc as an accessor overridden by a property. **The value is what a theme sets; the rule derives from it.**
- <a id="elegance"></a>***Two abstractions that already existed*** — `$Aside` and `$Note`, found rather than invented.
- <a id="style"></a>***The style rules were already written down*** — the reason this chapter cites them rather than restating them.

## <a id="drawn"></a>WHERE A WRITING IS DRAWN — ***the one design owed***

**`parenthetical` says "present and not drawn here" and nothing draws it there instead**, so `$Footnote` draws nothing. [`Note.tsx`](../../package/src/writing/Note.tsx) already names this as the mixing rule it waits for: WHERE A WRITING IS DRAWN is a dimension spelled three ways — `parenthetical`, `$Book.placed`, and a format that moves a drawing — and named none. ***Doug, 2026-09-09, granted the use of it in the other direction:*** *"You can not print parenthetical things if you need them in the schema but not on the page."*

## <a id="gap"></a>A HEADING NAMED IN MATH HAS NO NAME — ***the second gap***

`$Book.listed()` names an entry by `html.text(heading)`, and a `$Math` has only its TeX source, so a heading carrying mathematics drew `The Importance of \mathsf{P} \stackrel{?}{=}` in the contents. **The heading's WRITING cannot be carried into the entry either, because a writing has one parent.** The reference paper puts mathematics in its contents; we name headings in words until this is designed.

## <a id="known"></a>Already known before the walk starts

*Spent — every line of it is either done above or is one of the two gaps.*

## <a id="stands"></a>WHERE THINGS STAND — *2026-09-09*

**All four of Doug's anchors driven and seen.** *Naturalness across 1680 / 1280 / 390 in both readings; the LaTeX reading measured against the real PDF and matching it number for number — sheet 816px, top 59, a 3px gap under the strip, 14.667/18.134 over a 624px column; the markdown reading still an article because it uses the same components; and the only difference between them one call to `$dresses`.*

**Gate at every commit:** *build 5 doors · `tsc -p tsconfig.build.json` 0 · `tsc -p .latex/tsconfig.json` 0 · `tsc -p .wiki/tsconfig.json` 0 · suite 107 green · driven with 0 refusal panels, 0 dead anchors, no overflow.* ***`tsc --noEmit` against the bare `tsconfig.json` reports ~1,057 errors and always has — that config carries no `@/*` paths and is not the one that checks `src`.***

**Written down elsewhere, so it is not written here:** [The class that stepped twice](../solutions/61-the-class-that-stepped-twice.md) · [The escape that became a NUL](../solutions/62-the-escape-that-became-a-nul.md) · [The default that erased every class](../solutions/63-the-default-that-erased-every-class.md).

## <a id="plan"></a>THE PLAN — ***parse the paper, picture it, polish it***

***Doug, 2026-09-09:*** *"Can you just give me the whole paper including the figure please. I want to see all the equations… I want you to use parsing techniques to make this. read the text, parse it, put it in the right form. Then take pictures of everything in the paper. Work out the equations in latex."*

**The demo's content is hand-written today and that is the thing to end.** *Nine chapters were GENERATED from a structure I typed out of Doug's own paste; the paragraphs are summaries I wrote. The paper is the source and it should be read.*

### <a id="extract"></a>Stage one · EXTRACT — *from the PDF, mechanically*

**There is no PDF tooling in this repository** — `pdfjs-dist`, `pdf-parse`, `canvas` and `sharp` are all absent, measured. **The instrument is `pdfjs-dist` driven inside puppeteer's Chrome**, which needs no native build: the page already has a canvas, a font stack and a rasteriser.

| | |
|---|---|
| **U1** | *Text with positions.* `getTextContent()` per page → one JSON of `{page, x, y, w, h, font, size, str}`. **The font name is the discriminator** — a run set in `CMMI`/`CMSY` is mathematics, a run in `CMBX` at 14.4pt is a section heading. |
| **U2** | *Page rasters.* Render each page to a canvas at 3× and save a PNG. 122 pages. |
| **U3** | *Regions.* A figure is the block above a text item beginning `Figure N:`; a display equation is a centred run in math fonts, usually with a right-aligned `(N)`. Crop both out of the U2 rasters. |

### <a id="transcribe"></a>Stage two · TRANSCRIBE — *the part a parse cannot do*

***Reconstructing LaTeX from glyph positions is not a parse, it is a guess.*** **So the equations are transcribed by READING the crops** — and the transcription is *checked*, not trusted: render the LaTeX with KaTeX at the crop's size and compare the two images. **A transcription that does not match its crop is wrong**, and that check is the only thing that makes this honest.

| | |
|---|---|
| **U4** | Every display equation → LaTeX, each verified against its crop. |
| **U5** | Every figure → a PNG asset beside the demo, with its caption read from the text. |

### <a id="assemble"></a>Stage three · ASSEMBLE — *the parse into the right form*

| | |
|---|---|
| **U6** | The section tree from U1: headings by font and size, prose by position, citations from `[N]`. |
| **U7** | Emit the chapters. ***And Doug's shape:*** *"each Part can have multiple chapters nested. This has small chapters. Maybe you want to switch to a format where many are written in the same place."* **This needs NO new kind** — a file may export several chapters and the book may hold them; whether a `$Part` earns its keep is the question [Shells Over Types](../the-type-system/03-shells-over-types.md) asks: *name what it does that its type could not confer.* |
| **U8** | ***`parenthetical` carries what the schema needs and the page does not*** — Doug: *"You can not print parenthetical things if you need them in the schema but not on the page."* That is the release valve for anything the parse recovers that the reading should not show. |

### <a id="polish"></a>Stage four · POLISH — *the 64 deviations, already enumerated*

**~40 are STYLE** — values in `src/article/Theme.tsx`, costing nothing but the values.
**~18 are SEMANTIC**, and they are one sentence: *the kinds do not emit enough semantic HTML.* **`$Table` prints a `<div>` grid rather than a `<table>`**, which locks us out of a third of latex.css *and* of anything a markdown reader would bring — which is why fixing them helps **both** readings.
**6 are MECHANISM** — pagination and everything hanging off it, ruled out for now.

### <a id="figure"></a>The figure sketch — ***asked for, and the answer is "it already exists"***

***Doug:*** *"Do we have a figure in article? We should… I would make illustration and figure possibly be related that the figure uses an illustration? Or maybe they both use a picture? I think they would both be paragraph level."*

**`$Illustration` IS the figure and is already paragraph level.** *Read rather than remembered: it extends `$Paragraph`, holds `$source`, reads its `caption` from its own text, and prints `<figure><img><figcaption>`.* **`$Equation` is its sibling** — also `$Paragraph`, also numbered, printing a display block with `data-number` so a theme places the number.

***So the relation Doug is reaching for is already there, and it is SIBLINGHOOD rather than containment.*** **What the two actually share is one idea: a block that stands out of the prose, carries a number, and is referred to from elsewhere.** *A `$Picture` holding a URL and an alt would be a kind whose whole job is two strings, which is what [the five questions](../writing-a-book/01-using-the-public-library.md) exist to refuse — `<img>` is already the tag, and a figure without a caption is an illustration whose caption is empty.*

**What IS missing, and it is small:** *`$Illustration` does not number itself, though `$Equation` shows the one line that does it — `reflection.numbered(this, this.book)` — and latex.css already draws `Figure N.` for a `<figcaption>`, which we never reach because nothing writes the class it looks for.* ***That is deviation #44, and it is the whole of the work.***

## <a id="levels"></a>TWO HIERARCHIES — ***Doug's design, 2026-09-09, written down before it is built***

> *"Philosophically there are levels. Letter through Document define levels of a single document. Chapter is one type composition that is a part of a new hierarchy that that one lives inside. Book is then a composition of those."*
>
> *"It's possible that the real design should be composition ending above at document, and the book is a terminal that isn't a composition of anything. It is the primitive of the library."*
>
> *"I think this is the answer. We turn every `$(<Chapter>…)` into that, and then we don't have the dirty book."*

```tsx
class MyChapter extends Chapter {
    view() {
    }
}
```

***There are TWO ladders and we have been running one.*** **Letter → Word → Sentence → Phrase → Paragraph → Section → Document is a SINGLE DOCUMENT's levels.** *A `$Chapter` is not the next rung of that ladder — it is the first rung of a different one, the hierarchy a document LIVES INSIDE, and a `$Book` composes chapters.* **That is why `$Book` keeps acquiring apparatus and surgery: it is standing in for two things at once.**

***And the authoring shape follows from it.*** **Every chapter in the demo is written as `$(<Chapter>…</Chapter>, Chapter)` — an eval-form expression exported as a value.** *Doug's answer is that a chapter is a CLASS with a `view()`, the way any other extension point in this framework is written*, **and that the dirtiness in `.book.tsx` — the block surgery, the casts, the `$setting` field — is a symptom of chapters not being classes.**

***Owed with it, in Doug's words:*** **"remove the bug in $Chemistry that tried to type the markup of a chapter as one. That code was supposed to find the cid and fetch an instance. It doesn't. It's wrong."**

## <a id="markdown"></a>THE MARKDOWN CRITIQUE

*Written out of the probe's evidence rather than opinion: [Why Markdown Is Not Useful Yet](../the-motif/03-why-markdown-is-not-useful-yet.md).* **The short form: the markdown reading is not a reading of a document, it is a REBUTTAL of a paper** — *about forty of its 138 lines exist only to undo article* — **and what it actually wants is a viewing context, which is the argument for the desk and the strip living in the base.**
