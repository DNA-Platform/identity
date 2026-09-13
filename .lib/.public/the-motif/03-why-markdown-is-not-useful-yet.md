# Why Markdown Is Not Useful Yet

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **subject:** [Publicity](../..publicity/.cover.md)

---

***Doug asked for a long critique of why the markdown reading might not be useful out of the box.*** **The short answer is that it is not a reading of a document — it is a REBUTTAL of a paper**, *and the evidence is in its own source.*

## <a id="the-measure"></a>The measurement, first

**`src/markdown/Theme.tsx` is 138 lines, and about forty of them exist only to UNDO article.**

| what it says | what it is undoing |
|---|---|
| four `content: "''"` overrides | *the section numbers, in the contents and in the document* |
| `justified_textAlign = 'left'` | *justification* |
| `justified_hyphens = 'manual'` | *hyphenation* |
| `sheet_width = 'auto'` | *8.5 inches of US Letter* |
| `leader = 'none'`, `place = 'none'` | *dot leaders and the page marker* |
| `abstract_margin = '0 0 2rem'` | *the quotation inset of an abstract* |
| `title_fontWeight`, `cover_marginTop = '0'` | *a centred title block* |

***That is the cost of the dependency, and the dependency is still right.*** **Doug's framing — "markdown is an alternative style for latex… depends on article, but is pure style" — buys the whole structure for free**: the cover's hierarchy, a contents entry as a row, a figure's number, the abstract, the parse. *What it also buys is every decision a PAPER made, and a rendered document has to argue with each one by name.*

## <a id="not-a-paper"></a>The deeper reason: a README is not a short paper

***A markdown document does not have the things our document model insists on.*** **It has no cover, no author block, no abstract, no table of contents and no bibliography** — *and ours supplies all five, three of them by specification.* **The subject taught this exactly**: deleting it answered with *"a cover carries its subject, and this one carries none"*, which is the model correctly refusing a document that is not the kind of document it describes.

***So `print={false}` is not a convenience, it is the seam by which a lesser document is written in a greater model.*** *And it is worth asking how many of the five a README should have to say no to before the model is wrong for it.*

## <a id="viewing"></a>What markdown actually wants, and Doug named it

> *"Maybe it only makes sense in a document viewing context, so we need to provide a default one there. Maybe the background color of latex and the same cropping is called for."*

**This is the useful half.** *A markdown file on its own is not a page — it is content someone renders INTO a page, and every place it looks good (a repository, a docs site, a preview pane) is a viewing context somebody else built.* ***The framework already has that context and calls it the desk***: a ground, a sheet standing on it, a strip above. **The markdown reading takes it and it is the single thing that makes the reading look deliberate rather than unstyled.**

***So the answer to "why is markdown not useful out of the box" is that out of the box there IS no box.*** **Ours ships one.** *That is the thing to keep, and it argues for the desk and the strip staying in the BASE, where both now are.*

## <a id="the-part"></a>The Article part type

> *"Maybe there should be part of the Article part type in the article framework. You use it here, so markdown theme should honor what it should look like."*

**`$Article` exists in `src/article/` and the demo does not use it** — *the paper is a `$Book` of `$Chapter`s.* ***That is the gap:*** an `$Article` is the part type a single-document reading needs — one document, no chapters, a cover and a body — and it is exactly what a markdown file IS. **A markdown reading built on `$Article` would stop arguing with a book's apparatus**, because it would not have one to argue with.

## <a id="undressed"></a>And five kinds are dressed by nothing at all

*Measured by grepping all four sheets, because reading `document.styleSheets` misses what styled-components inserts:* **`aside`, `note`, `summary`, `highlight` and `footer` were named by NO theme.** ***They are the base's now***, because they are what the kinds ARE — but the finding matters more than the fix: **a component library is only as good as what it dresses, and nothing was measuring that** until [a page that draws one of every kind](../projection/60-sprint-54--the-paper-pixel-by-pixel.md#probe) existed.

**Two more the probe found, both markdown's:** *it inherits `content: '['` around citations, which is a LaTeX convention a README has never used; and `$Code` throws `not implemented`, so the ONE kind a markdown document uses more than any other cannot draw at all.*

## <a id="the-list"></a>What to do, in order

1. ***`$Code` — it throws.*** **A markdown reading without code blocks is not a markdown reading.**
2. ***Build the markdown reading on `$Article`***, not on a book, so it has no apparatus to refuse.
3. ***Move what is a DOCUMENT's from article into the base*** — the four `content: "''"` overrides are the list: numbering is a paper's, not a document's, so it should be opt-in rather than opt-out.
4. ***Give a citation its own reading per theme*** — brackets are LaTeX's, a superscript is the web's.
5. ***Dress `$Table` as a `<table>`*** — it prints a `<div>` grid, which locks out a third of latex.css and everything a markdown reader would bring.
6. ***Anchor links on headings***, which every markdown renderer has and ours does not.
