# The heading that named itself after its own link

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **sprint:** [Sprint 73 — The Essential Books](../projection/79-sprint-73--the-essential-books.md)

---

**Keywords:** `model` · `tokens` · a name made of a url · `html.text` over a `$Ref` · markdown link source read instead of its words · two readings of one copy · slug · addresses

## The symptom

***A chapter whose heading holds a link is named after the link's URL rather than the words a reader sees.*** Found 2026-09-15 by the first run of the binder's chapter-naming rule against the wiki:

```
.article — its table of contents names "" where the book holds
  "wikipedia-manual-of-style-layout  contents
   manual-of-style-https-en-wikipedia-org-wiki-wikipedia-manual-of-style
   order-of-article-elements body-sections …"
```

**The chapter is headed *Manual of Style*, and it answers `manual-of-style-https-en-wikipedia-org-wiki-wikipedia-manual-of-style`.** Every other chapter in the book names cleanly, which is what makes the one wrong name easy to miss and easy to misread as a slug bug.

## What it is

**`html.text` flattens a `$Ref`'s copy as it was WRITTEN, and a `$Ref` is written in markdown.** [`html.text`](../../package/src/utilities/Html.ts) answers `''` for anything holding a `specifically` method — every `$Annotation` — and otherwise concatenates. **A `$Ref` is a `$Phrase`, not an annotation**, so its whole `[text](url)` copy is concatenated verbatim, brackets and URL included.

***The reading that answers correctly already exists and nothing asked it.*** [`$Ref.written()`](../../package/src/reference/Ref.tsx) is `this.link()?.text ?? html.text(this._block)` — the words half of the link — and `$Ref.view()` draws exactly that. **So the page is right and the name is wrong**, which is why no promise and no eye caught it: the reader sees *Manual of Style*, and only a token made from the same copy sees the URL.

**And `link()` is `protected` on `$Ref` and calls `marked`'s `lexer` directly**, rather than through [`parser`](../../package/src/utilities/Parser.tsx), which is the utility that owns marked. So the one correct reading of a markdown link in the package is both private and in the wrong room.

## Where it bites beyond a name

***Anything that makes a token out of copy.*** [Sprint 72 put those in one place](../projection/78-sprint-72--the-compilation-audit.md#d14) — `reflection.slug` for what a reader sees, `reflection.kebab` for a class name — and named the three callers: **a book's name, a heading's id, and a catalogue's anchor.** *A heading holding a link takes its id from the same flattened copy, so the anchor a table of contents computes for it and the id the heading draws are both the URL-shaped token, and they agree with each other while both being wrong.* **They agree, so the page's links still work** — which is the second reason this stayed invisible.

## The fix, not taken here

***Doug, 2026-09-15, asked where it belonged and ruled:*** **"File it, fix with the URL work."** *It is a defect about how copy becomes a token, so it wants fixing where the token scheme lives rather than inside a sprint about tables of contents.*

**The shape it wants**, recorded so the next session does not re-derive it: **the link reading moves to `parser`**, which already owns marked and is already read by every level; `$Ref.link()` becomes its caller rather than its owner; and **the token readings ask a writing what it is WRITTEN as, not what its block flattens to.** *One consequence is already known and wanted: a chapter mention could then be written `[Label](name)` — the label drawn, the name named — which is [Doug's own ask of the same day](../projection/79-sprint-73--the-essential-books.md#r-copy) and shares this exact reading.*

**Until then it is visible rather than hidden:** the binder's naming rule prints every chapter's name on failure, so a URL-shaped name in that line is this defect and not a new one.
