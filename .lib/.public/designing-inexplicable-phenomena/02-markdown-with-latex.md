# Markdown with LaTeX on the Composition Classes

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Working notes. The goal, in Doug's words: **a section that can be written in markdown with LaTeX.** The display framework is the archive's converter ([spec](01-the-notes-we-already-took.md#the-archive-a-working-prior-attempt)); the substrate is the sprint-44 composition model.

## The model

A `$Markdown` is a referent whose prose is markdown-with-LaTeX **source**, arriving as one block at the bond constructor like every composition: `copy` is the source, and the `view` renders the converter's output — marked for structure, KaTeX for `$…$` and `$$…$$`. Its **title is the source's first heading — parsed, not authored**, which is the composition specification holding: the levels beneath a markdown section (headings, paragraphs, math, code) are found in the copy by the markdown grammar, exactly as sentences are found in a paragraph's prose. Markdown is a *parser choice at the section level*, not a new kind of thing.

## As built — the demo (2026-07-30, all demo code in the app; reusable extraction deferred)

The wholesale-HTML spike was **retired**: converting past the object model left nothing for the model to read. As built, in `app/src/sections/page/`:

- **`$Latex`** — inline (`inline = true`); copy is the TeX source, view is the KaTeX render, `display` prop for block math. It joins paragraph blocks through the grouping machinery like any inline citizen.
- **`$Markdown`** — the authoring adapter: `marked`'s lexer drives a parse that creates real `$Paragraph` objects **through eval**, inline children included (text, `b`/`i`/`code`/links, `$Latex`); display-math paragraphs become display `$Latex`; the title is the first heading. Readings — `paragraphs`, `words`, `formulas` — are read from those objects, and `formulas` literally counts `$Latex` instances inside paragraph blocks: the insertion made checkable. The parse is **keyed to the source** (research PROBE 7: re-read on change so readings never stale, stable identity so mounting cannot run away — PROBE 1's crash).
- **`$Page`** — the styled skin: paper on deep ink, serif reading typography (headings included — an early defect: undeclared heading family let the Lab's global sans win), drop cap, display-math rhythm, the readings footer.
- **Two Lab surfaces**: *The Styled Page* (`fullPage: true` — the whole beautiful document, verified by driver: 6 typeset formulas, no sidebar chrome, footer counting 5 paragraphs / 226 words from the model) and *The Living Page* (source beside page; the driver typed one word and the count moved 226→227, added `$z^2$` and a seventh formula typeset in place).

Deliberately *not* yet: the LaTeX environments (`\begin{theorem}`…), Citation.js footnotes, highlight.js, and the `.md`→`.html` link rewriting — each specified in the archive's converter, each its own increment.

## Open questions

- Does `$Markdown` eventually *implement* `$Composition<$Section>` — the markdown source parsing into titled sections at `##` boundaries — so a whole document written in markdown yields the same levels the JSX path yields? The model says yes; the parse is the work.
- Where does math live in the levels? Inline `$…$` is an inline element of a paragraph's block; display `$$…$$` is block-level between paragraphs. The content-node question (`math` as an intrinsic kind beside `string`/`number`/`block`?) is a framework conversation, not a lib decision.
- The converter's link rewriting is for *published* HTML; inside the Lab, links should resolve through `$Reference`/`$Link` navigation instead. One source, two link targets — the seam between rendering and publishing.
- Rendered HTML enters via `dangerouslySetInnerHTML` in the spike — own-content only; sanitization is a decision to make before any external content renders.
