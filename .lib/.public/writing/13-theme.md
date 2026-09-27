# Theme

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Written 2026-09-27 with [Sprint 88](../projection/93-sprint-88--the-theme-the-element-and-the-blank.md#u2). The code is [`src/writing/Theme.tsx`](../../package/src/writing/Theme.tsx); the promises [`.tests/theme.test.tsx`](../../package/.tests/theme.test.tsx). The class name is Doug's; the eight property names were proposed and accepted.***

---

## What it is

**A Theme is a Format said of a book that provides eight live properties to everything the book draws, and whose default style is the minimal viewing of a library.** Doug, 2026-09-27: *"one puts their theme in the book. It just occupies the Theme class in the writing folder and should be designed to be extended and made to be dynamic"*; and of what it is for: *"The theme should EXACTLY make use of all the classes in .public. It exists to comprehend them."* It is [Format](11-format-and-theme.md) with `theme = true` and three things of its own: the properties, a provider that hands them bare, and a singular rule.

| member | what it is | cited |
|---|---|---|
| `theme` | true: a Theme provides | [Format and Theme](11-format-and-theme.md#theming) |
| `font`, `size`, `leading`, `measure`, `space`, `ink`, `paper`, `link` | the eight, reactive regular members and not props: a field in a subclass, settable on the instance, never an attribute; plain defaults, `serif`, `1rem`, `1.5`, `40rem`, `1rem`, `black`, `white`, `blue` | Doug: *"If you know that every theme needs those, then great… We want those to be live reactive properties that can be dynamically set"*; *"Not props. We don't need them. But they should be reactive regular properties that can be interacted with"* |
| `style` | the default sheet, a styled div declared inside the class as every Format's is, reading the eight through `props.theme` and carrying a rule for every class the library puts on an element — [below](#comprehends) | *"A default theme to minimally view a library"* |
| `values` | the eight as one object, which the provider hands as the theme, so a styled element reads `props.theme.ink` and never the chemical | *"Other formats for components can get the books theme and use its exposed properties"* |
| the bond | Writing's, then the provider made once: a `$Provider` of its own, handed the theme, whose lifted component is the layer | D4 of the sprint, as built |
| `defines(book)` | **singular:** takes every Theme after it out of expression, then stands the provider as the book's layer, cited to itself | Doug: *"Maybe theme can have singular semantics, so we can use the dynamic annotation system to change themes. That is cool"* |
| `erase(book)` | Format's: `revert(this)` | — |
| `specification` | `new ThemeSpecification()`: **a theme is said of a book** | the test library's rule of 2026-09-25, moved here |
| `$Provider` | a small chemical of Theme's own, not exported: its view reads the theme's `values` and draws styled-components' provider around the theme's sheet and the children the layer is handed | D4 |

### <a id="live"></a>Why the provider is a chemical

**A property set on a drawn theme must be seen by every styled element under it in one paint, and styled-components sees a theme only by identity.** Two mechanisms were designed in the plan and one was built. The first read the eight inside the theme's `defines`, so the book's own view would depend on them — its only form is a read for the side effect of registering, which is code that says nothing, and it was not written. The second is what stands: the layer is a chemical whose view reads `this.$theme.values` and hands them fresh, so a property changed on the theme is news to the provider alone; the provider redraws, styled-components sees a new theme object, the elements beneath take their new classes, and neither the book nor its chapters redraw. *The promise that decides it is the fourth in the file: `theme.ink = 'red'` on a drawn book, and the word's styled layer wears a new class.*

### <a id="comprehends"></a>It comprehends every class

**The default sheet carries a rule for every class `.public` puts on an element, and a promise holds it to that:** the promise reads every `pd-` and `pa-` literal out of the source on disk, renders a themed book through styled-components' `ServerStyleSheet`, and diffs the two sets; a class the theme does not know turns it red. The numbered families of the Table, `pa-cols-`, `pa-col-start-`, `pa-col-span-` and `pa-row-start-`, are the grid's mechanism and are read by their roots, `pa-table`, `pa-row` and `pa-col`. Where an annotation's note already carries a mechanism — Parenthetical's hiding, Self's underline, the Table's grid, Paginated's page, Blank's hiding — the theme's rule is the look and the mechanism stays the note's. **It carries what a reader needs to find their way, on Doug's word that the theme's CSS may target a lot:** a title in ink and without underline, though it links to itself, so it reads as a heading; the cover's title at twice the size; a table's entries close; a synopsis's italic on its paragraphs and not its catchword; and the Table's grid placed — each cell's anchor `display: contents`, since a cell's placement mark sits on the word's own element while the grid item is the layer around it, and the heading's layer spanning the row — which is the Table's mechanism standing in the theme until Doug moves it to the Table's note. **Every layer inherits the ink** — the rule for `pd-container` says `color: inherit` — because a self-reference's rule says inherit too, and it inherits from the anchor around it, whose browser default is blue: Libby's headings and its catchword's own name were near-invisible on dark paper in the first photograph, and readable in the second. **And it never sets a level's `display`:** the [pair](03-composition.md) decides the element, and the first sheet's `display: inline` on every sentence made the poem's Lines flow inline in Chrome, since a Line is a sentence by inheritance, until the rule went and Title and Heading stood Block themselves. The ordinary view's one rule, an annotation's own writing hidden, is the default's, and left the test library's theme.

### In use

```tsx
// the-library/.book.tsx
export class $LibraryTheme extends $Theme {
    paper = 'ivory';
    link = 'darkslateblue';
}

// libby/.book.tsx — in front of the library's, which the singular rule takes out of expression
export class $DarkTheme extends $LibraryTheme {
    ink = 'ivory';
    paper = '#1f1f24';
    link = 'lightsteelblue';
}
```

**The library's book class stands its theme in `$Define`, every book of the library inherits it, and Libby stands Dark after its base's, so Dark is in front and wins** — one book of the test library dark, on Doug's word that *"dark is something in the test library to test the ability of theme to be overwritten."* A page switches themes the same way: `book.$is = Dark`, one paint.

## How it is extended

- **A theme of your own** is a class under Theme setting the properties it changes and, when the look differs, its own `style`, declared inside; it is still a Theme wherever one is asked for, since the collection finds by `instanceof`.
- **A format that reads the theme** stands on a writing inside the book — a chapter, a word — and reads `props.theme.ink` in its rules; it never needs the theme's class. *A format on the book itself reads the theme only from in front of it:* the front-most annotation draws innermost, so a frame written in front of the theme is inside its provider and a frame behind it is outside. A theme given through `$is` stands innermost of all.
- **Themes nest** as providers nest through the document — [Format and Theme](11-format-and-theme.md#theming) — so a format on a chapter that is also a theme refines the book's.
- **A theme per kind**, Doug's earlier ruling that *"Themes should be single for a type, formats should be individual"* — [The Motif](../the-motif/04-themes-per-type-formats-per-instance.md) — is not built; this Theme is the base it would subclass.

## Promises

Seven in [`.tests/theme.test.tsx`](../../package/.tests/theme.test.tsx): a book without a theme draws no provider and a styled element beneath it reads nothing; stood in a book, it provides three levels down and its default sheet is in the page; it is singular, two themes on a book standing one provider and `$is` switching it; a property set on a drawn theme reaches the styled element beneath and nothing of the book redraws; it comprehends every class the source puts on an element; a subclass overriding its sheet and a property is still a theme and draws its own sheet; said of a section, it says so. In [the regression](../../package/.binding/.test/binding.regression.ts): every page carrying the default sheet; Libby dark by its own theme in front of the library's and no other book dark; in Chrome, Libby on dark paper in ivory ink and the paper on white.

## Gate

Measured 2026-09-27, U2 of the sprint: the package typecheck 0 errors and 288 of 288 across twenty-three files after U4 landed beside it; the compiler's typecheck 0, unit 98 of 98 and regression 37 of 37, Libby dark and the paper white in Chrome — [the sprint chapter](../projection/93-sprint-88--the-theme-the-element-and-the-blank.md#stand) carries the commits.

**Names.** Doug's: `Theme`. Proposed and accepted in the room: `font`, `size`, `leading`, `measure`, `space`, `ink`, `paper`, `link`. Ours, flagged: `values`, `Values`, `$Provider` and `_provider`, `ThemeSpecification` and `$saidOfABook`.
