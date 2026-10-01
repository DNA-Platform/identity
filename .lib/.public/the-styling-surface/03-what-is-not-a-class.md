# What Is Not a Class

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- ***Read from [`src`](../../package/src/) and from a bound page on 2026-10-01. The rest of what a styler sees, and the rule for each: may a selector name it?***

---

## The attributes the framework writes

| attribute | on | written by | a rule may name it |
|---|---|---|---|
| `id` | a writing's own element | a Referent — a title's or heading's slug, a mention's | **no** — an id is an address, the router's and the catalogue's; a rule names the mark beside it, `pa-referent` |
| `href` | an anchor layer | a Reference — the address the writing means | no; `.pa-reference` is the mark |
| `hidden` | a parenthetical writing's own element | Parenthetical, under the policy | no — and a rule must not un-hide it; `[hidden]` is the platform's |
| `datetime` | a date's `time` | Date, from the written day | no; `.pd-date` |
| `data-line` | a numbered line's `span.pd-code-line` | Code, under the policy | **yes, as content**: `.pd-code-line::before { content: attr(data-line) }` — the one attribute a rule reads, because the number is data and the look is the library's |
| `src`, `alt` | an `img` | Image, from the appended picture | no |
| `class="language-x"` | a `code` element | Code, from the file's type | yes, if a highlighter theme is keyed by language; ours are not |
| `style="--pd-…"` | the theme's own element | the provider, from the library's `values` | **it is what every rule reads**, through `var()`; a rule never sets one |

## The custom properties

A library's theme names its values — fields on the class, listed in `values` — and the provider declares each on the theme's element as `--pd-<name>`, once, inline. Every rule beneath reads them as `${({ theme }) => theme.name}`, which styled-components' `createTheme` has made `var(--pd-name, <the class's value>)`; so a class is generated once per component and a value written on the held theme moves one declaration. *A rule never writes a custom property and never reads one by hand*; the provider's form is the one form.

## The foreign markup, and its stylesheet

| inside | markup | from | dressed by |
|---|---|---|---|
| `.pd-math` | `span.katex` and KaTeX's tree | `katex.renderToString` | KaTeX's own stylesheet, which the binder links on every page since the [binder utility](../utilities/.cover.md) names it; a library's rule on `.pd-math` for its place in the line |
| `.pd-equation` | `span > .katex-display` | the same, display mode | the same; a library's rule for the number |
| `.pd-code` | `pre > code` with `span.hljs-keyword`, `.hljs-string`, `.hljs-comment`, … | highlight.js | a library's rules by the highlighter's classes, or a highlight.js theme stylesheet it links; the base colours nothing |
| `.pd-image` | `img` | the appended picture | `.pd-image img { … }` |
| `.pd-svg` | the file's own `svg` and its children | the appended file | `.pd-svg svg { … }` |

*The rule:* a foreign element is named by its type **under the mark that holds it** and never bare — `.pd-image img`, never `img` — so a picture a library draws some other way is untouched.

## The generated classes

Every styled component — a Format's layer, an anchor, the theme's element, a library's own — wears two classes styled-components generates, `sc-<hash>` and the rule's own hash, beside the mark it was given through `attrs`. **A rule never names them**: they change with the template, differ between builds, and belong to the library that generated them. The mark is the stable name; that is what the marks are for.

## The layers

Between a writing's own element and its parent's stand as many `div.pd-container`, `a.pd-container`, `header.pd-container` as were said of it, outer to inner in the order they were added. **A rule crosses them and never counts them**: by descendant always; never `>`, `+`, `~`, `:first-child`, `:nth-child`, `:has()`. A layout that must place a writing's element rather than its layers says `display: contents` of the layers it crosses, under its own class, which is how the manual's explorer places a cover's header and a table's nav. A rule written to the layers of one galley breaks on the next, and [the trials of Sprint 95](../projection/100-sprint-95--pages-formats-and-words.md#trials) are the record of it.

## And what is gone

Under [the policy](../projection/102-sprint-97--formats-are-the-unit-of-styled-components.md#the-policy): `pd-annotation`, since an annotation's own writing is not drawn; the `@layer` order statement in a page's head; every `!important`; the `:has()` chain that hid a parenthetical's layers; the base's sheet file. A page's head links one sheet per book, the library's own rules alone, and KaTeX's.
