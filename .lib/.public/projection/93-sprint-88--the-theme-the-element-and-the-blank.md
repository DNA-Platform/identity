# Sprint 88: The Theme, the Element and the Blank

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **status:** requirements-only — brainstormed 2026-09-27, five sections approved; `/ce-plan` next
- ***The sprint's name is a PROXY; Doug's to rename. The number is the team's next: chemistry's clean surface took 87.***

---

## Where this sprint comes from

**Doug, closing [Sprint 86](92-sprint-86--next-previous-and-the-display-of-chapters.md):** *"Okay, it should be becoming self-evident that we need a base theme… at the end of next sprint, after we brainstorm, we will have a theme. Likely, we will have a Theme base annotation that has a lot of properties and then a styled component that uses them (it is a format) and is also a theme provider, and then we would expect other themes to subclass it and at least overwrite the styled component. Other formats for components can get the books theme and use its exposed properties. Oh and I think paragraph - book should have their base element as a div right? Does that destroy anything? I think we also need a type of annotation called Blank, and then maybe we can make a configurable Space that can add whitespace, and a Break that can add a linebreak, and Line... this isn't quite right, but you can help me with a configurable whitespace system that has simple nomenclature, possibly driven by an annotation that allows something to maintain its spatial extent but as a blank element. That's a fine genetic trait, like being albino :)"*

**And opening the brainstorm:** *"Okay let's design this. We can talk about building a blank or nearly blank theme that perhaps just exists to start the pattern, and doesn't really restrict the person. Just basic config, with the idea that it goes in book. And then we develop one that is a sort of bare bones style. And then let's design a bit more semantic basic styling using divs, and that can be part of the differentiation of the different letter - word. And then think about what might be useful in terms of the basics - emphasis, underline, bold. If there is room for improvement over htmls breaking space and newline, or maybe just a Line could be a type of sentence in a div so that lines of a poem, or something like that, might look good. Maybe we want to make Inline and Block annotations and have the composition elements use them to control what their base element is. How is that?"*

## What the room already holds

- **Format is the theme mechanism.** `theme = true` on a Format draws its style inside a provider handing the annotation itself, once per mount; a styled element anywhere beneath reads `props.theme`; scopes nest through the document and cost no DOM — [Format and Theme](../writing/11-format-and-theme.md#theming). *There is no Theme class; theming is a way of writing a Format.*
- **The advanced case is a Format's own choice.** A format meant to replace every other takes the Formats after it out of expression in its own `defines` — [the shape](../writing/11-format-and-theme.md#a-whole-new-look), which is what a singular Theme does to other Themes.
- **The test library's Theme is the blank theme in all but name** — a Format said of a book, `theme = true`, a styled div with one rule hiding every annotation's own writing, stood in the library's book class — [`the-library/.book.tsx`](../../package/.binding/.test/the-library/.book.tsx).
- **Doug's earlier ruling stands and fits:** *"Themes should be single for a type, formats should be individual, and the two should have access to each other so one can use the same values as the other"*; and *"The theme is for the whole book"* — [Themes per Type, Formats per Instance](../the-motif/04-themes-per-type-formats-per-instance.md).
- **Composition's pairs are annotations** — Open and Closed, Strict and Permissive, each taking its opposite out of expression, each level standing its default in `$Define` — [Composition](../writing/03-composition.md). Inline and Block are one more of exactly that shape.
- **A sheet selects classes, never element types**, and a class the library puts on an element is prefixed `pd-` — [the drawing conventions](../the-coding-style/03-the-coding-style.md#the-drawing-conventions), the first library's rule. The redraft puts twenty-two classes on elements today, `pd-container` and `pd-annotation` the framework's and twenty `pa-` marks the annotations', and none on a writing's own element for its level.
- **Parenthetical is the sibling of Blank:** an annotation whose note hides the writing from the flow, `display: none`, through the chain of layers — [The Writing Class](../writing/05-the-writing-class.md). Blank keeps the flow and hides the ink.
- **Every composition is a span.** A writing's own element is the first container, `span`, added in its bond; a class replaces its own element in its bond and an annotation acts on the containers cited to itself — [How Writing Is Extended](../writing/06-how-writing-is-extended.md#the-seams).

## Rulings of the brainstorm, verbatim

| on | Doug's words |
|---|---|
| **Inline and Block as the third pair** | offered as Composition's third pair, defaults by level, Block replacing the span with a div: *"Yes, the third pair"* |
| **the level marks** | asked how a theme tells a paragraph from a section: *"Don't we have the composition types put pd-letter, pd-word, etc... The theme should EXACTLY make use of all the classes in .public. It exists to comprehend them"* |
| **the theme's config** | offered eight properties every typography needs: *"If you know that every theme needs those, then great. We can start with that and customize. It's a small enough set that a more sophisticated theme could ignore those or start from scratch. We want those to be live reactive properties that can be dynamically set, I think. And then can't the theme make use of those while it also presents a way of viewing all the classes? A default theme to minimally view a library. And if you ever have trouble selecting anything, well this is exactly why we expressed everything as annotations. They are like reactive classes right? Genes with a phenotype, but one of their phenotypes is controlling the classes on writing, which is the CSS genotype of html"* |
| **where the theme lives** | offered Book standing the blank theme: *"No, one puts their theme in the book. It just occupies the Theme class in the writing folder and should be designed to be extended and made to be dynamic"* |
| **singular semantics** | *"Maybe theme can have singular semantics, so we can use the dynamic annotation system to change themes. That is cool"* |
| **the sections** | A, C, D and E: *"Approve"*. B: *"Approve and you can extend components and annotations with more classes using our naming convention if more are needed"* |

## Requirements

*Approved by section on 2026-09-27. Each names what would be observed if it held.*

### A. Inline, Block and the level marks

| | requirement | observed |
|---|---|---|
| **R1** | `Inline` and `Block` are annotations in Composition's file, the third pair: each `defines` takes its opposite after it out of expression; Block's `defines` replaces the writing's own element, the span, with a div, cited to itself, and its `erase` gives the span back; Inline leaves the span. Each is said of a composition | a Sentence written `<Sentence><Block />…</Sentence>` draws a div; `$is = Inline` on a drawn paragraph draws it as a span at the next paint, one paint; the pair's promises beside Open and Closed's |
| **R2** | the defaults stand in `$Define`: Letter, Word and Sentence `<Inline />`; Paragraph, Section, Chapter and Book `<Block />` | in the served markup a paragraph's own element is a div and a word's a span; a promise per level |
| **R3** | every level puts its own mark, `pd-letter`, `pd-word`, `pd-sentence`, `pd-paragraph`, `pd-section`, `pd-chapter`, `pd-book`, inherited by every subclass, so a library's running head wears `pd-paragraph`; a kind of writing may put its own beside it under the same convention, `pd-` and its name, as an annotation puts `pa-` and its — Doug: *"you can extend components and annotations with more classes using our naming convention if more are needed"* | every element in the regression's pages wears its level's mark; a Line wears `pd-sentence` and `pd-line` |
| **R4** | nothing is destroyed: the regression's promises that matched a span after a header or a nav are re-read for the div, and every other promise stands; an anchor around a block is valid and the proof still reads every link | the regression green with the re-read promises named in the record |

### B. The Theme

| | requirement | observed |
|---|---|---|
| **R5** | `Theme` is a class in the writing folder, a Format with `theme = true`, said of a book, exported, and stood by nobody in `src`: a library puts it in its book's `$Define`, as the test library does | a book without one draws bare, no provider; the test library's book class stands its own |
| **R6** | **singular:** its `defines` takes every Theme after it out of expression, so a book has one theme, the front's, and `$is = Other` on the book switches it — the dynamic annotation system changing themes | two themes on a book: one provider, the front's; `$is` switched, one paint, and a styled element beneath reads the new values |
| **R7** | **eight live properties** — `font`, `size`, `leading`, `measure`, `space`, `ink`, `paper`, `link` — reactive, given by a subclass as fields, written as attributes, and settable at runtime on the instance; a property set on a drawn book is seen by every styled element under it in one paint. *Risk, carried to the plan: styled-components sees a theme by identity, so the provider must hand a value that changes when a property does* | in Chrome, `ink` set on the served book changes the computed colour of a paragraph; a promise counts the paint |
| **R8** | **the default style is the minimal viewing of a library and comprehends every class `.public` puts on an element** — today `pd-container`, `pd-annotation`, `pa-parenthetical`, `pa-reference`, `pa-self-reference`, `pa-referent`, `pa-content`, `pa-table`, `pa-row`, `pa-col` and their numbered forms, `pa-cover`, `pa-synopsis`, `pa-table-of-contents`, `pa-biography`, `pa-autobiography`, `pa-paginated`, `pa-page`, `pa-open`; with this sprint the seven level marks, `pa-blank`, `pa-emphasis`, `pa-bold`, `pa-underline` — a rule for each, reading the eight properties, the ordinary view among them: an annotation's own writing hidden, which leaves the test library's Theme | **a promise diffs the set of classes the source puts on elements against the set the theme's sheet addresses and is red when they differ**; the served pages carry the default sheet |
| **R9** | **designed to be extended:** a subclass overrides `style`, declared inside as every Format's is, and any property; the test library's Theme becomes a subclass setting a property or two and nothing else | `the-library/.book.tsx` shorter than today; the served pages dressed by the default sheet under the subclass's values |

### C. Whitespace

| | requirement | observed |
|---|---|---|
| **R10** | `Blank` is an annotation beside Parenthetical in Writing's file: it marks `pa-blank`, and its note's style keeps the writing's extent and shows nothing — `visibility: hidden` where Parenthetical is `display: none`; *"a fine genetic trait, like being albino"* | a blank word takes its width in Chrome and shows nothing; the proof still reads a link through it |
| **R11** | `Space` is a Letter that is Blank and Inline whose argument is its width, `<Space>2em</Space>`; `Break` is a Letter that is Blank and Block with nothing in it; `Line` is a Sentence that is Block | a poem in Lines in the persona's book, each line its own line in Chrome; a Space and a Break in the paper, the Space's box as wide as its argument and what follows the Break on the next line |

### D. The basics

| | requirement | observed |
|---|---|---|
| **R12** | `Emphasis`, `Bold` and `Underline` are Formats whose style is the semantic element, `em`, `b` and `u`, a layer around the writing, each marking `pa-emphasis`, `pa-bold`, `pa-underline`; said of a writing; written `<Word><Emphasis />really</Word>` or on a sentence | drawn, `<em class="pd-container"><span class="pd-word pa-emphasis">really</span></em>`; in Chrome the computed font-style italic, weight bold, decoration underline; the theme comprehends the three |

### E. The visible end

| | requirement | observed |
|---|---|---|
| **R13** | the test library re-dressed: the library's book class stands its Theme subclass; a poem chapter in Lines in the persona's book; Emphasis, Bold and Underline in the paper; a Space and a Break; every block level a div; Some Projects still paginated; bound, served on 4242 and photographed | Doug sent the links, and the photographs show a dressed library where before every span ran into the next |

**Out of scope:** the app-like book; the Wikipedia dress and every reading of the first library; markdown; Part; a theme per kind, [the earlier ruling's first thread](../the-motif/04-themes-per-type-formats-per-instance.md), which this sprint's Theme is the base of and does not build.

**Actors and flows.** *A1 the author*, putting a theme in a book and subclassing it; *A2 the reader*, seeing a dressed book; *A3 a styled element* anywhere under the theme, reading its values. *F1* an author stands `<Theme />` in a book and every page is dressed. *F2* an author switches the theme through `$is` and the book repaints once. *F3* an author writes a poem in Lines and it stacks. *F4* `ink` is set on a drawn book and the page's colour changes.

**Acceptance examples.** *AE1* the served markup: `<div class="pd-paragraph">` and `<span class="pd-word">`. *AE2* the set-diff promise: classes in the source minus classes in the theme's sheet equals the empty set. *AE3* `book.$is = Dark` — one provider, the new values, one paint. *AE4* `<Paragraph><Line>…</Line><Line>…</Line></Paragraph>` — two divs wearing `pd-sentence pd-line`, one under the other in Chrome.

**Names.** Doug's: `Inline`, `Block`, `Theme`, `Blank`, `Space`, `Break`, `Line`, `Emphasis`, `Bold`, `Underline`. Proposed by us and accepted in the room, *"If you know that every theme needs those, then great"*: `font`, `size`, `leading`, `measure`, `space`, `ink`, `paper`, `link`. Ours, flagged: the spellings `pd-letter` through `pd-book`, `pa-blank`, `pa-emphasis`, `pa-bold`, `pa-underline`, and the sprint's name.

## Where things stand

**Next: `/ce-plan` on this chapter.** The requirements are approved by section; nothing is built. **Read first, for the plan:** [Format](../../package/src/writing/Format.tsx), the provider the Theme extends; [Writing](../../package/src/writing/Writing.tsx), the containers a Block replaces and the classes a level marks; [Composition](../../package/src/writing/Composition.tsx), the pairs the third one joins; [the test library's book](../../package/.binding/.test/the-library/.book.tsx), the theme that becomes a subclass; [Format and Theme](../writing/11-format-and-theme.md), what a provider costs and how scopes nest; [the regression](../../package/.binding/.test/binding.regression.ts), whose span-matching promises the div turns red. **The one mechanism the plan owes before it is implementation-ready:** how a live property reaches the styled elements under the provider in one paint, since styled-components sees a theme by identity — R7.
