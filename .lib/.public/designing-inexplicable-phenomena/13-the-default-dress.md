# The Default Dress

- **author:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-in-living-color/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- ***The chapter name is a PROXY from the coordinator; Doug's to rename.***

---

*Built 2026-09-02 in [The Margin](../projection/35-the-margin.md), out of Doug's step: "Make the basic version look like wikipedia. A chapter is like an article." — and his constraint: "It is still the default style of an app. It needs to be overridable. It can't be committed to."*

## <a id="frame-and-view"></a>STRUCTURE IN VIEW, DRESS IN FRAME

***The seat was already in chemistry:*** **`frame()`, the render template method — "override frame() to WRAP what is drawn, and wrap `super.frame()` so the content inside the wrapper still evolves with the view."** So a level's `view()` says what the writing IS and its `frame()` says how it is worn: [`$Chapter`](../../package/src/book/Chapter.tsx) frames an `Article` around `super.frame()`, [`$Book`](../../package/src/book/Book.tsx) the reading column, [`$Document`](../../package/src/writing/Document.tsx) the text region, [`$Paragraph`](../../package/src/writing/Paragraph.tsx) the prose block.

***That is what makes the default worn and never committed to.*** **A subclass inherits the garment through the chain** (a `$Cover` is an article for free), **replaces it by overriding `frame()`, or sheds it by not calling super** — which [`$Title` and `$List`](../../package/src/writing/Title.tsx) do to escape the paragraph's prose wrap, because an `h2` inside a `p` is the frame chain telling the truth about a garment clash.

## <a id="the-encyclopedia"></a>The encyclopedia — Wikipedia, ripped off intentionally

*Doug: "Default this can rip off wikipedia. No need for you to not do it intentionally. … You can make an encyclopedia folder … Just organize it like me."* **[`src/encyclopedia/`](../../package/src/encyclopedia/) — one word per file, Wikipedia's own vocabulary and numbers:**

| word | dresses | the Wikipedia thing |
|---|---|---|
| `Body` | the book | the mw-body reading column — sans 14px `#202122`, 60em |
| `Article` + `Output` | the chapter | *"a chapter is like an article"*; Output is mw-parser-output, the text region — worn together since the chapter absorbed the document (Sprint 38 R100) |
| `Heading` | the title | the serif in-content heading, ruled `#a2a9b1` |
| `Prose` | the paragraph | body copy margins |
| `Bullets` | the list | the article's `ul` |
| `Wikitable` + `Cell` | the table | literally their class name |
| `Anchor` | references, and the means-wrap | the `#3366cc` link |
| `Columns` | a plain file | the category index — *"maybe that can look like an index page"* |
| `Cited` | the references section, printed | the numbered `.references` list at the end |

**A plain file alone wears the index columns — a book is a file that outgrew the index look, decided by constructor identity.** The two laws every atom obeys are filed in [The Coding Style](11-the-coding-style.md#styling): *never a style attribute on HTML*, and *$Chemistry goes with styled components* — the v6 dual-shape import resolved once in [`Styled.ts`](../../package/src/utilities/Styled.ts).

## <a id="not-dressed"></a>What is deliberately not dressed

**Bookmarks, highlights, folds, and cards draw as their reference selves** — no Wikipedia analog was invented for them, and inventing one is design work, not defaulting. *The section element carries no garment of its own; its title and paragraphs dress themselves.*
