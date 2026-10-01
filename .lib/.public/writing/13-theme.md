# Theme

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Written 2026-09-27 with [Sprint 88](../projection/93-sprint-88--the-theme-the-element-and-the-blank.md#u2); rewritten whole 2026-10-02 with [Sprint 97](../projection/102-sprint-97--formats-are-the-unit-of-styled-components.md), when the class was stripped bare on Doug's word. The code is [`src/writing/Theme.tsx`](../../package/src/writing/Theme.tsx), twenty-six lines; the promises [`.tests/theme.test.tsx`](../../package/.tests/theme.test.tsx). The class name is Doug's.***

---

## What it is

**A Theme is a Format said of a book that provides, of which a book has one: a place for a library's properties, and optionally a styled component made from them — and in the base, nothing in it.** Doug, 2026-10-02: *"Why can't theme be a place to have properties, those properties can be grabbed and used by other components in the application. It can, optionally, use those to create a theme stylesheet associated with the theme. And that's it. Doesn't theme have only-one annotation semantics? It should."* And on the base: *"I want $Theme stripped bare… We don't have a default style."* The base ships no property, no style, no sheet; a library's theme is a subclass with reactive fields and one styled component, [Dressing a Library](../writing-a-book/02-dressing-a-library.md).

| member | what it is | cited |
|---|---|---|
| `themeProvider` | `true`: its layer provides — [Format](11-format-and-theme.md)'s flag | Doug, 2026-09-29 |
| `theme` | itself — a theme's theme is the theme, so its provider hands it down | the provider reads `this.$format.theme` |
| `defines(book)` | **singular:** takes every Theme after it out of expression, then Format's — the provider as the book's layer | Doug: *"Maybe theme can have singular semantics, so we can use the dynamic annotation system to change themes"*; *"Doesn't theme have only-one annotation semantics? It should"* |
| `erase(book)` | Format's: `revert(this)` | — |
| `specification` | `new ThemeSpecification()`: **a theme is said of a book**, asked as `writing.book === writing` | the test library's rule of 2026-09-25, moved here |

**And nothing else.** No bond of its own — Format's is the chain, so chemistry's chain rule has nothing to report, which closes the defect Dressing a Library had pitched. No fields: the eight the base once carried were the framework choosing a library's tokens, and Doug ruled *none — a library names its own*. No `style`: a bare book is the browser's defaults, and nobody designs against it. No `values`, no contract, no custom properties: those re-implemented what chemistry gives, [below](#provision).

### <a id="provision"></a><a id="live"></a><a id="comprehends"></a>How a theme's properties reach a template — chemistry's own provision

**A styled template is compiled once per class, on the class's specimen, which stands in no book; so a template can read a book's theme only through the props its provider hands it at render.** That provider is styled-components' own `ThemeProvider`, and chemistry supplies it: the layer Format stands for a providing Format is a chemical, `$Provider`, whose `[theme]` answers its Format's `theme` — for a Theme, the Theme itself — and chemistry's `providing()` wraps what it draws in `ThemeProvider` with a live face over that chemical, *"its fields the values; write a field and the styled beneath follow"*, remade only when a named field changes. So `${({ theme }) => theme.ink}` in any template beneath is the field itself, templated into the rule, and a field written on a drawn theme — `book.theme.ink = 'red'` — remakes the face and regenerates the classes that read it, which is styled-components' own way with a theme. Doug: *"Why can't you just have reactive properties and they are templated into the string?… Everywhere in a book has access to it."*

**What was there before, and why it went** — *the sections once anchored here as* live *and* comprehends*, the provider as a chemical of the Theme's and the sheet that comprehended every class, are this paragraph now.* Sprint 94 built the eight as CSS custom properties through `createTheme`, so a write moved one declaration and regenerated no class; it needed the theme to name its properties in `values`, and a library to list its fields twice. Doug, 2026-10-02: *"Are we doing something other than styled components? We have styled chemicals. Make sure this isn't something similar."* It was: chemistry's `fields()` enumerates a theme chemical's own fields already. The optimization is gone with the member; the cost of a runtime write is a regenerated class, measured and pinned in the promises.

### In use

```tsx
// manual/2-the-theme.code.tsx — the library's theme: fields, and a component of parts
declare module 'styled-components' { export interface DefaultTheme extends $LibraryTheme {} }
export class $LibraryTheme extends $Theme {
    font = "Georgia, 'Times New Roman', serif";
    ink = '#23262a';
    // …
    style: ElementType = selection.div`${this.parts()}`;
    protected parts(): RuleSet[] { return [this.page(), this.levels(), this.labels(), this.links(), this.apparatus(), this.figures()]; }
}

// manual/1-the-book.code.tsx — registered for the framework's, on the library's book class
$(TheLibrary, Theme)(LibraryTheme);

// libby/3-writing-a-theme.code.tsx — a dark book in three fields, registered on its own class
export class $DarkTheme extends $LibraryTheme { ink = 'ivory'; paper = '#1f1f24'; link = 'lightsteelblue'; }
```

**Book stands the framework's Theme in `$Define` and asks for it, `$(theme)`, so a registration on a book class answers it,** and every book of a library, a subclass the compiler builds as `$($ThatBook)`, inherits the library's; a book that wants another registers it nearer. A page switches themes the same way a reader switches anything: `book.$is = Dark`, one paint, the singular rule taking the one behind out of expression. Nothing is merged.

## <a id="how-it-is-extended"></a>How it is extended

- **A theme of your own** is a class under Theme with the fields your library needs, typed once as styled-components' `DefaultTheme`, and a `style` — the one component dressing the kinds and every mark whose Format you did not replace, composed of parts a subclass overrides one at a time. [Dressing a Library](../writing-a-book/02-dressing-a-library.md) is the how; [The Development Policies](../writing-a-book/07-the-development-policies.md) the rules it keeps.
- **A subclass theme** sets what differs — Libby's three fields — or overrides a part; it is still a Theme wherever one is asked for, since the collection finds by `instanceof`.
- **A Format that provides** — `themeProvider = true` on any Format — hands *its* `theme` down the same way, the book's or another a subclass reaches, so a subtree may read another theme's fields; [Format and Theme](11-format-and-theme.md#theming).
- **What the base will not do:** carry a property, a look or a rule. A library that wants the base to say something is asking for a look, and a look is the library's — [the eighth policy](../writing-a-book/07-the-development-policies.md#8--the-base-ships-mechanism-and-no-appearance-and-a-change-to-it-is-graded-in-the-library).

## Promises

Nine in [`.tests/theme.test.tsx`](../../package/.tests/theme.test.tsx): a book with no theme written draws under the framework's bare theme, a `div` with no property and no rule of the base's, a styled element beneath reading nothing; a library's theme hands its fields to every styled element beneath it as the values themselves; it is singular, two themes standing one provider and `$is` switching it at one paint; a field written on a drawn theme reaches the styled element beneath as a regenerated class; a theme write redraws each writing beneath the book once, chemistry's diffusion pinned; a themed book draws with nothing on the console and the provider imports nothing of styled-components; `Theme.tsx` is bare, under thirty lines, with no field, style, values, bond or augmentation; no template in `src` declares a look and `src` carries no layer, no `!important`, no `:has`, no global style; said of a section, it says so. In [`format-theme.test.tsx`](../../package/.tests/format-theme.test.tsx): a Format that provides hands its theme down, the book's or another a subclass reaches. In [the regression](../../package/.binding/.test/binding.regression.ts): every page inside its theme with the library's font in its sheet and nothing declared on the page; Libby dark by her own theme and no other book; Some Projects bare.

## Gate

Measured 2026-10-02, Sprint 97: the package typecheck 0 errors and 342 of 342; the binder typecheck 0, unit 132 of 132, regression 46 of 46; seven pages photographed at 0 pixels against the galley before the last change. Commits `1b0da27`, `33f4639`, `2570f7f`.

**Names.** Doug's: `Theme`, `themeProvider`. Ours, flagged: `ThemeSpecification` and `$saidOfABook`; `$Provider` in Format's file. Struck 2026-10-02: `values`, `Values`, `contract`, `vars`, `declarations`, and the eight as members of the base.
