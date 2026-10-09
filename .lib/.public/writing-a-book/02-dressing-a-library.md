# Dressing a Library

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- ***First written 2026-09-27 with Sprint 88, on Doug's asking for a visual language in the test library; rewritten whole 2026-10-02 with [Sprint 97](../projection/102-sprint-97--formats-are-the-unit-of-styled-components.md), U20, to the policy he ruled — "I expect to see a CLEAN .public, with a clean $Theme, and great documentation on how to build a library from a style perspective." The code is the test library's own: [`manual/1-the-book.code.tsx`](../../package/.binding/.test/manual/1-the-book.code.tsx), [`2-the-theme.code.tsx`](../../package/.binding/.test/manual/2-the-theme.code.tsx), [`5-the-faces.code.tsx`](../../package/.binding/.test/manual/5-the-faces.code.tsx), [`7-the-explorer.theme.tsx`](../../package/.binding/.test/manual/7-the-explorer.theme.tsx), and the doors of [Libby](../../package/.binding/.test/libby/.book.tsx) and [Some Projects](../../package/.binding/.test/projects/.book.tsx); the manual prints each beside the chapter that explains it. The chapter's name is a PROXY.***

---

## The three sentences

**`.public` ships no style.** What it ships is *marks* — a class on every element saying what the writing is, `pd-paragraph`, or what was said of it, `pa-cover` — and the elements beneath them, with the meaning of a mark where meaning is structure: a Table's grid, a List's marker, a closed page hidden. The whole roster is [The Styling Surface](../the-styling-surface/.cover.md). A bare book is the browser's defaults, and nothing is designed against it; a library always dresses itself.

**And it is dressed as every OO component framework with pluggable appearance is dressed.** Three sentences, which are the whole of the policy and the shape of everything below:

1. **A component owns its structure and reads its appearance from a theme.** Every box with a look is a class with a styled component in a field; it reads the theme's values through the provider and never carries a literal a theme would want to change.
2. **A theme is a typed value object with a slot per component.** It is a place for the library's properties, grabbed by any component in code or in a template, and one styled component made from them, composed of parts a subclass overrides one at a time. It has only-one semantics: a book has one, and a new one stood in front replaces it.
3. **A component is replaced by subclass.** What the framework stands for itself — the Theme on every book, the Self on every title — a library replaces by *registering* a subclass on its book class. What a chapter *writes* — a Cover, a Table — a library replaces by subclassing and exporting under the framework's name from its book file, so a chapter writes the word it always wrote; Doug: *"subclass of Table exported as Table is the right answer. Preserves the semantics."*

The rest of this chapter is those sentences as the test library writes them, in the order a librarian writes a book file.

## 1 · Your values — the theme's properties

Declare the properties of your library as reactive fields on a class under `$Theme`, and type your class once as the theme styled-components hands down, so every template in your library reads `theme.space` as a string and not as a guess — [`2-the-theme.code.tsx`](../../package/.binding/.test/manual/2-the-theme.code.tsx):

```tsx
declare module 'styled-components' { export interface DefaultTheme extends $LibraryTheme {} }

export class $LibraryTheme extends $Theme {
    font = "Georgia, 'Times New Roman', serif";
    size = '1rem';
    // … the eight, as many as your library has — fields, and nothing else
```

**How they reach a template — chemistry's own provision, and nothing of `.public`'s.** Every Format that provides — a Theme is one — stands a provider as its layer, and the provider answers chemistry's `theme` with the book's Theme; chemistry then wraps the layer in styled-components' `ThemeProvider` with a live face over the Theme — *"a theme is a chemical that provides itself: its fields are the values; write a field and the styled beneath follow"* — so `${({ theme }) => theme.ink}` reads the field itself, templated into the string. A value written on the held theme after mount, `book.theme.ink = 'red'`, remakes the face and regenerates the classes that read it, which is styled-components' own way with a theme. Doug, 2026-10-02: *"Why can't you just have reactive properties and they are templated into the string?… Everywhere in a book has access to it."* The eight here are the test library's choice, not the framework's; a library with three properties declares three.

**Code reads them too.** A Format reads `this.theme.ink`, typed as its book's theme; a book class types `theme` as its own theme's class, as [Book](../library/05-book.md) shows, so a control writes `book.theme.ink = …` and the write is reactive.

## 2 · Your theme's component — one styled component, of parts

The theme's `style` is the one styled component that dresses the kinds, `pd-`, and every mark whose Format you did not replace. Write it as **parts** — methods returning `css` fragments, composed once in the field — so that a subclass changes one part and keeps the rest:

```tsx
    style: ElementType = selection.div`${this.parts()}`;

    protected parts(): RuleSet[] {
        return [this.page(), this.levels(), this.labels(), this.links(), this.apparatus(), this.figures()];
    }

    protected page(): RuleSet {
        return css`
            font-family: ${({ theme }) => theme.font};
            color: ${({ theme }) => theme.ink};
            background: ${({ theme }) => theme.paper};
            max-width: ${({ theme }) => theme.measure};
            margin-inline: auto;
            padding: ${({ theme }) => theme.space};
        `;
    }
```

A method stands on the prototype before any field runs, so `this.parts()` in the field initializer dispatches to the subclass's override, and the composition is made once per class. **This is the template method pattern in styled-components' own `css`**, and it is what MUI's `styleOverrides` slots and Chakra's recipes are: a skeleton with named pieces.

**What each part says, in the test library:**

| part | dresses | by |
|---|---|---|
| `page` | the theme's own element — the page | the font, the ink, the paper, the measure, the margins |
| `levels` | the seven levels and the kinds of sentence | `.pd-paragraph { margin-block }`, `.pd-title { font-size }`, `.pd-canonical.pd-chapter { counter-increment }` and the label it draws by `::before` |
| `labels` | the one voice every label speaks in | `.pd-label, .pd-chapter .pd-title::before { small, uppercase, letter-spaced, faded }` |
| `links` | the anchors the framework draws bare | `.pa-reference { color }`, `.pa-self-reference { color: inherit; text-decoration: none }`, `.pa-referent { scroll-margin }` |
| `apparatus` | the library's own kinds | `.pd-running-head`, `.pd-byline`, `.pd-catchword`, the catchword's glyphs |
| `figures` | the figures and the typeset | the code block and its line numbers from `data-line`, the highlighter's classes, the pictures, an equation's number |

**Three rules for every line of it,** which [The Styling Surface](../the-styling-surface/01-the-base-themes-classes.md#writing-against-them--the-rules-of-the-surface) states whole: a rule names a *mark*, never an element type except the foreign elements the framework does not mark, `img`, `svg`, `pre`; it reaches by *descendant*, never by child or sibling, since a Format in front stands a layer between any two marks; and every quantity is a *value*, never a literal.

## 3 · A face — a Format subclassed and exported under its name

A face is what a cover, a synopsis, a table of contents or a table looks like in your library. The framework gives each its element and the meaning of its marks — a `header`, a `nav`, a grid — and nothing of how it looks. You write the look as a subclass with one `style`, and export it under the framework's name — [`5-the-faces.code.tsx`](../../package/.binding/.test/manual/5-the-faces.code.tsx):

```tsx
export class $LibraryCover extends $Cover {
    override style = selection.header`
        .pa-cover { margin-block: 0; }
        .pa-cover:not(.pa-framed) { padding: …; background: …; border: …; }
        .pa-cover .pd-title { font-size: calc(2 * ${({ theme }) => theme.size}); }
        .pa-cover .pd-title::before { content: 'Cover'; }
    `;
}
export class $LibraryTable extends $Table {
    override style = selection(this.style)`
        .pa-table { column-gap: ${({ theme }) => theme.space}; }
        .pa-col { padding-block: calc(${({ theme }) => theme.space} / 3); }
    `;
}
export const Cover = $($LibraryCover);
export const Table = $($LibraryTable);
```

**Two ways to write the template.** `selection.header\`…\`` *rewrites* it — the element kept, the rules yours. `selection(this.style)\`…\`` *extends* it — the base's rules kept, yours after — which is right where the base's template is a mechanism you want, the Table's grid. A chapter then imports `Cover` and `Table` from the library's book file, on the line it imports `Catchword`, and writes the words it always wrote; the subclass is still a Cover to the specification and to every `is`.

**A face in a Format's context may dress the kinds beneath it** — `.pa-cover .pd-title` — because the marks stay on every element for exactly that; it may not dress anything outside its own writing.

## 4 · A look of your own — a Format from scratch

What the framework has no word for is a Format of the library's own, imported from the book file and written where it is wanted: `Framed`, a frame from the theme's values, stood on each of the persona's chapters at its bind; `Literary`, the persona's face, Palatino and indented paragraphs; `Typewritten`, the paper's. Each is a class with one `style`, and each *marks what it does* — `pa-framed` — so a face can stand down where a frame already stands: `.pa-cover:not(.pa-framed)`.

## 5 · The book file — registration for what the framework stands

The framework stands a Theme on every book in `Book.$Define`, and it *asks* for it — `$(theme)` — so a registration on your book class answers, and every book of your library, a subclass the compiler builds as `$($SomeProjects)`, inherits it — [`1-the-book.code.tsx`](../../package/.binding/.test/manual/1-the-book.code.tsx):

```tsx
export const TheLibrary = $($TheLibrary);
$(TheLibrary, Theme)(LibraryTheme);
```

No `$Define` stands the theme; the registration is the one line. **A book that wants another theme registers it on its own class** — Libby's, a dark book in three fields, printed and explained in her own chapter [Writing a Theme](../../package/.binding/.test/libby/3-writing-a-theme.tsx), the one page in the library that shows a theme being written:

```tsx
export class $DarkTheme extends $LibraryTheme { ink = 'ivory'; paper = '#1f1f24'; link = 'lightsteelblue'; }
const Libby = $($Libby);
$(Libby, Theme)(DarkTheme);
```

**And a book that wants to show the base** registers the framework's own on its class, the nearest scope winning — [Some Projects' book file](../../package/.binding/.test/projects/.book.tsx): `$(SomeProjects, Theme)(Theme)`. Its chapters write the framework's own `Cover`, `Synopsis` and `TableOfContents`, and the page is a browser-default book whose grid is a grid and whose pages turn: the base, seen. **Registration reaches what the framework stands and asks for — Theme, a title's Self — and nothing a chapter writes;** a written word is replaced by import, section 3.

**A theme is switched at one paint** the same way a reader switches anything: `book.$is = Dark` stands a new theme in front, and the one behind it leaves expression. Nothing is merged.

## 6 · A subclass theme — change one part

The manual takes the whole page and shows its code in a tree, and its theme is the library's with one part overridden and one added — [`7-the-explorer.theme.tsx`](../../package/.binding/.test/manual/7-the-explorer.theme.tsx):

```tsx
export class $ManualTheme extends $LibraryTheme {
    protected override parts(): RuleSet[] { return [...super.parts(), this.explorer()]; }
    protected override page(): RuleSet { return css`${super.page()} max-width: none; …`; }
    protected explorer(): RuleSet { return css`.pd-tabs { … } .pd-leaf { … }`; }
}
```

Before the policy it rewrote fifteen of the library's rules inside a layer; now it says what differs.

## 7 · A face names the kind with its mark — one author per property, in every order

A theme's rule for a kind and a face's rule for its own element can land on one element: the cover is a chapter, so `.pd-chapter { margin }` and `.pa-cover { margin: 0 }` both apply to it, at equal specificity, and the tie breaks by the order the components were created — which a theme subclass in another book's file changes, so a page may win where another loses. **So a face's rule for its own element names the kind and its mark together — `.pd-chapter.pa-cover { margin-block: 0 }`, *the chapter that is a cover* — and wins by specificity on every page, in every order;** the theme's rule names the kind alone, `.pd-chapter { margin-block }`, for every chapter; and a face dressing the kinds beneath it, `.pa-table .pd-paragraph`, already has two marks and wins the same way. The marks an annotation takes off or puts on — `pd-canonical`, which Cover, Synopsis and TableOfContents take off their chapter; `pa-framed`, which Framed puts on — are read for what they *mean*, the chapters that are counted and labelled, the chapters that stand down, and never taken off to win. Doug, 2026-10-02: *"Why can't the implementer accommodate this? Can one suppress the other? Annotations can control expression for this reason."* The test library met this twice on the night it was dressed; the policy, applied to every face, left seven pages at 0 pixels — [The Development Policies](07-the-development-policies.md#1--a-face-names-the-kind-with-its-mark-a-theme-names-the-kind-alone) is the rule with its check.

## What you rely on, and what to know before it bites

- **The marks stay on every element,** whatever Format stands in front — so a rule from above always has something to reach, and reaches it by descendant through the layers, `pd-container`, never counting them.
- **A style is compiled once per class.** Read the theme through the provider's props, `${({ theme }) => theme.ink}`, never through a closure over `this` — the closure reads the template specimen, not the drawn instance.
- **A styled component is a field, once per class, never made in a bond or a define** — [Solutions 99](../solutions/99-the-sheet-that-was-one-file-per-page.md).
- **A Format standing in front draws innermost.** A frame on a chapter sits between the cover's `header` and the chapter's element; a rule on the chapter's own mark is untouched by it, a rule on the wrapper reached through what it holds breaks.
- **A closed page hides its own element,** so a card drawn on a chapter's own element goes with it; a byline the book draws stands outside every chapter and must be whole on its own.

## The honest report

**Is it easy?** A theme is a class of values and a component of parts, about a hundred and fifty lines for the test library's whole look. A face is four lines and a template. A book file is one registration. The manual's theme is one overridden part and one added. What was hard before and is gone: extending a base sheet that said everything, through a cast, with a helper reading values through fallbacks, inside a layer so your rules would tie with your own faces. What was still a fight at the sprint's grade, and what became of each, is in [the sprint's grade](../projection/102-sprint-97--formats-are-the-unit-of-styled-components.md#the-grade-of-97).

**Names.** Doug's: *theme*, *format*, *face* is the test library's own word for a Format with a look; *the base sheet* for a library's theme component; *replace*, *export your own*, *register*. Ours, flagged: `values`, `parts` and the six parts' names, `LibraryValues`, this chapter's title.
