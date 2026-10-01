# The Base Theme's Classes

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***Read from [`src`](../../package/src/) on 2026-10-01. "The base theme" is the one styled component a library writes in its subclass of Theme — the base sheet of that library, in Doug's words — and these are the classes it addresses. The marks and the moments are the code's; the last column of each table is guidance, not a rule.***

---

## How a mark gets onto an element, and when

Three moments put a class on an element, and knowing which tells you whether a rule can rely on it at the first paint.

| moment | who | what it says |
|---|---|---|
| **the bond** — `$Define`, once, when the writing is made | the kind itself | what the writing *is*: `pd-paragraph`, `pd-title`; and the annotations it stands for itself, whose marks follow |
| **each define** — before every draw, the stack of annotations run from the front | an annotation, in `defines`, taken back in `erase` | what was *said* of the writing: `pa-reference`, `pa-cover`; and a state that moves, `pa-open` |
| **the bind** — `$Bound`, once, when the book is whole | an annotation reaching *other* writings than its own | marks on the parts of a composition: a table's rows and cells, a list's items, a book's pages |

Every mark is on the page at the first paint, served; the one that moves after is a state, and it is a class toggled, never a rule rewritten.

**And where a mark sits.** A writing draws its *own element* innermost — its tag, its `id`, every class its kind and its annotations gave it — and each Format and each Reference stands a *layer* around it, outer to inner in the order they were added, every layer wearing `pd-container` and nothing of the writing's. So a rule reaches a mark **by descendant** — `.pa-cover .pd-title` — and never by child or sibling, since between any two writings stand as many layers as were said of them.

## The seven levels

| class | on | put there | the layers usually around it | a theme usually says |
|---|---|---|---|---|
| `pd-letter` | `span` | `$Letter.$Define` | none | nothing; a letter is the floor |
| `pd-word` | `span` | `$Word.$Define` | an anchor when it means (Means, Previous, Next) | nothing, or `overflow-wrap` |
| `pd-sentence` | `span` | `$Sentence.$Define` | none | nothing |
| `pd-paragraph` | `div` | `$Paragraph.$Define`, Block replacing the span | none | the vertical rhythm: `margin-block` |
| `pd-section` | `div` | `$Section.$Define` | a Table's or a List's layer when said of it | its spacing |
| `pd-chapter` | `div` | `$Chapter.$Define` | a Cover's `header`, a TableOfContents' `nav`, a library's Framed | its spacing, a top rule, a counter |
| `pd-canonical` | the chapter's `div` | `$Chapter.$Define`; **taken off** by Cover, Synopsis and TableOfContents in their `defines` | — | *counted*: `.pd-canonical.pd-chapter { counter-increment: chapter }` and a label by `::before` |
| `pd-book` | `div` | `$Book.$Define` | the theme's own element, outermost, carrying the custom properties | the measure, the page margins, `counter-reset` |

## The kinds of sentence and letter

| class | on | put there | the layers | a theme usually says |
|---|---|---|---|---|
| `pd-title` | `div`, also wearing `pd-sentence`, `pa-reference`, `pa-self-reference`, `pa-referent` and the book's or chapter's `id` | `$Title.$Define`; the three annotation marks by Self and Referent each define | its Self's anchor, `a.pd-container.pa-reference.pa-self-reference` | size, weight, `margin-block`; a label by `::before` under the chapter's mark |
| `pd-heading` | `div`, the same four marks and its `id` | `$Heading.$Define` | its anchor | weight, `margin-block` |
| `pd-line` | `div`, also `pd-sentence` | `$Line.$Define` | none | `white-space: pre-wrap` if leading spaces matter, a poem's indent |
| `pd-space` | `span`, also `pd-letter`, `pa-blank` | `$Space.$Define` | none | nothing; it draws its count of non-breaking spaces |
| `pd-break` | `div`, empty, also `pd-letter`, `pa-blank` | `$Break.$Define` | none | nothing; an empty block is a line |

## The words that read the compiler's forms

| class | on | put there | the layers | a theme usually says |
|---|---|---|---|---|
| `pd-word` with `pa-referent` and an `id` | `span` | Mention, from `[[ name ]]` | none | nothing; the id is the surface |
| `pd-word` with `pa-reference` | `span` | Means, from `$[[ name ]]` | an anchor | the link's colour, by `.pa-reference` |
| `pd-previous`, `pd-next` | `span`, also `pd-word`, `pa-reference` | `$Previous.$Define`, `$Next.$Define` | an anchor | a glyph by `::before` or `::after`; the catchword's place is the library's own kind |
| `pd-math` | `span`, also `pd-word`, holding KaTeX's `span.katex` | `$Math.$Define` | none | `white-space: nowrap` if a formula must not break |
| `pd-date` | `time[datetime]`, also `pd-word`, replacing the span at the bond | `$Date.$Define` | none | nothing, or `white-space: nowrap` |
| `pd-equation` | `div`, also `pd-paragraph`, holding `span > .katex-display` | `$Equation.$Define` | none | a number: `counter-increment: equation` and `::after { content: '(' counter(equation) ')' }`, the reset on `pd-book` |

## The figures and the typeset

| class | on | put there | inside it | a theme usually says |
|---|---|---|---|---|
| `pd-figure` | `span`, also `pd-letter` | `$Figure.$Define` | the figure's element | `max-width` |
| `pd-code` | `div`, also `pd-figure`, `pd-letter` | `$Code.$Define`, Block | `pre > code.language-x`, the highlighter's `span.hljs-*`; numbered, a `span.pd-code-line` per line carrying `data-line` under the policy | the block's ground and rule, `font-family`, `font-size`, `overflow-x`; the line's number by `::before { content: attr(data-line) }`; the highlighter's colours by its classes |
| `pd-image` | `span`, also `pd-figure` | `$Image.$Define` | `img[src][alt]` | `img { max-width: 100%; height: auto; display: block }` — by element type, since the base marks no `img` |
| `pd-svg` | `span`, also `pd-figure` | `$Svg.$Define` | the file's own `svg` | the same, `svg { max-width: 100% }` |

## The fundamental annotations' marks

*These are what a writing is said to be or mean; the class that puts each on the page carries a mechanism and no box, and is never subclassed for a look.*

| class | on | put there | with | a theme usually says |
|---|---|---|---|---|
| `pa-reference` | the writing's own element, **and** the anchor around it through `attrs` | `$Reference.defines` | an `a[href]` layer, `a.pd-container.pa-reference` | `.pa-reference { color: …; text-decoration-color: …; text-underline-offset: … }` — the anchor wears the mark, so the rule lands on the link |
| `pa-self-reference` | the same two | `$SelfReference.defines`, after Reference's | the same anchor, also wearing `pa-self-reference` | `.pa-self-reference { color: inherit; text-decoration: none }` — a title is its own place, not a journey |
| `pa-referent` | the writing's own element, with its `id` | `$Referent.defines` | — | `scroll-margin-block-start`, so a route lands below a running head |
| `pa-parenthetical` | the writing's own element — under the policy an element with its id and marks, `hidden`, and no children | `$Parenthetical.defines` | — | nothing; it is not drawn |
| `pa-blank` | the writing's own element | `$Blank.defines` — stood by Space and Break | — | nothing; what wears it has no ink |
| `pa-content` | the `span` a Content draws as its note, inside the entry | `$Content.note`, through `attrs` | the entry's anchor around the entry | the entry's name: colour, weight |
| `pa-append` | the Append's own element — **moot** once an annotation's writing is not drawn | `$Append.$Define` | — | nothing |
| `pd-container` | **every layer** a Format or a Reference stands around a writing, and the theme's own element | `$Writing.view`, on every layer but the writing's own | — | nothing — a rule crosses it and never names it, but a library's layout may say `display: contents` of the ones that wrap what it places |

## Writing against them — the rules of the surface

- **By descendant, never by child or sibling.** `.pa-cover .pd-title`, never `.pa-cover > .pd-title` and never `.pd-heading + .pd-paragraph` — a Format in front stands a layer between any two marks, and a rule written to the layers of one galley breaks on the next.
- **By mark, never by element type — except the foreign elements.** The base marks every element it draws itself; `img`, `svg`, `pre`, `code`, `time` and KaTeX's output are the only things on the page without a mark of ours, and a rule names them under the mark that holds them: `.pd-image img`.
- **A state is a mark the class toggles** — `pa-open` — and a rule reads it; a rule never computes a state by position, `:first-child`, `:nth-of-type`, or by `:has()`.
- **A quantity is a value** — read through the provider as `${({ theme }) => theme.space}` — and a rule never carries a literal that a theme would want to change.
- **A kind's look is one rule by its mark in the theme; a Format's look is the Format's own component** — [the clusters](02-the-clusters.md). The theme reaches a Format's mark only when it chooses to dress what it did not replace.
