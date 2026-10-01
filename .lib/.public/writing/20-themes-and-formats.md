# Themes and Formats

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***Drafted 2026-09-29 as [Sprint 94](../projection/99-sprint-94--the-styling-standard.md)'s first unit and rewritten whole 2026-10-02 with [Sprint 97](../projection/102-sprint-97--formats-are-the-unit-of-styled-components.md), when the base lost its sheet. The developer's guide to the two classes as the framework ships them; the librarian's guide to using them is [Dressing a Library](../writing-a-book/02-dressing-a-library.md), the rules it keeps are [The Development Policies](../writing-a-book/07-the-development-policies.md), and the roster of what they put on the page is [The Styling Surface](../the-styling-surface/.cover.md). [Theme](13-theme.md), [Format and Theme](11-format-and-theme.md), [Table](12-table.md) and [Book](../library/05-book.md) are the class chapters. The code is [`Theme.tsx`](../../package/src/writing/Theme.tsx), [`Format.tsx`](../../package/src/writing/Format.tsx), [`Book.tsx`](../../package/src/libraries/Book.tsx), [`Table.tsx`](../../package/src/writing/Table.tsx).***

---

**Doug, 2026-10-02:** *"Why can't formats be the unit of styled components? And one subclasses a Format and overrides the style to change things?… Annotations tend to be formats and carry their own style, and they can easily be subclassed."* · *"I want $Theme stripped bare… It is a simple base meant to have shared style state and maybe a small theme styled component that can be overridden."* · *"Why can't theme be a place to have properties, those properties can be grabbed and used by other components in the application. It can, optionally, use those to create a theme stylesheet associated with the theme. And that's it."*

## What a Theme is, and when another

**A Theme is a Format said of a book that provides, of which a book has one.** The base holds no property and no style: a library's theme is a subclass with reactive fields — the library's own, as many as it needs — and one styled component, composed of parts, that dresses the kinds and every mark the library did not give a face. A book always has one: `$Book` stands the framework's in its `$Define` and *asks* for it, so a library registers its own on its book class, `$(TheLibrary, Theme)(LibraryTheme)`, and every book of the library inherits it; a book that wants another registers it on its own class, nearer. Uniqueness is expression's — every theme takes the themes behind it out of expression — and a reader switches one with `$is`: a new theme stands in front and replaces the one behind, nothing merged.

**When another theme:** a theme is said of a book and of nothing else. A subtree in other values — a dark chapter in a light book — is a Format that provides, [below](#formats), whose `theme` reaches another Theme; its subtree reads that theme's fields.

## How the properties flow

**Reactive fields on the theme, templated into every rule beneath, by chemistry's own provision.** A styled template is compiled once per class on the class's specimen, which stands in no book, so a template can read a book's theme only through the props its provider hands it at render. The provider is styled-components' `ThemeProvider`, and chemistry supplies it: a providing Format's layer is a chemical whose `[theme]` answers the Format's `theme`, and chemistry wraps what it draws in `ThemeProvider` with a live face over that chemical — *"its fields the values; write a field and the styled beneath follow"* — remade only when a field changes. So `${({ theme }) => theme.space}` in any template is the field itself; the sheet carries `margin-block:1.25rem`, and the page carries no declaration. A field written on a drawn theme regenerates the classes that read it, styled-components' own way with a theme switch.

**Three ways to read a value, and which to use.** A styled template reads through the provider's props, `${({ theme }) => theme.space}` — never through a closure over `this`, which reads the class's specimen and not the drawn instance. Code reads through the book, `this.theme.space` on a Format or `this.book.theme.space` anywhere, typed as the library's theme by its own augmentation of `DefaultTheme`, for a computation at draw, a mark to put on a writing, or a check. A control writes through the same path, `book.theme.ink = …`, and the write is reactive. A rule never contains a theme's literal.

## <a id="formats"></a>What a Format is, and which kind

**A Format is an annotation that is, or adds, the element its writing draws as — a shell of a class with `style` set to a styled component — and every Format has a theme.** It is an annotation first: it marks the writing, `writing.classes.add(this, 'pa-…')`, takes others out of expression, specifies. Its `style` is the element, a styled component declared once in a field, which may wear a class of its own through `attrs`. Three kinds, by what the element needs to be:

| the element needs | the Format's `style` is | in `src` |
|---|---|---|
| **only its semantics** — the tag says what it is | a styled tag with an empty template, wearing its class | Bold `b`, Emphasis `em`, Underline `u`; Cover `header`, TableOfContents `nav` |
| **a mechanism of its own to mean what it marks** | a styled component carrying what the marks *mean* and nothing a library would choose | Table's grid and spans, List's marker, Paginated's closed page hidden |
| **to provide its theme to its subtree** | `themeProvider = true`: the layer is the provider | Theme, and a Format reaching another theme |

**A library's Format is the same shell with a look in it** — a face, a card, a frame — and a library has as many as it has looks: *"You define lots and lots of styled components when specifying a page. So why is it bad to create lots of annotations that you have to subclass?"* A Format with no `style`, Synopsis, is a Format for its power over the writing's text.

## <a id="the-rule"></a>The rule, in one line

**The base ships mechanism; a library ships every look, in two places.** A kind of writing is dressed by the library's theme, by its mark: `.pd-paragraph { margin-block }`. A Format is dressed by the library's subclass of it, exported under the framework's name and imported by the chapters that write it: `class $LibraryCover extends $Cover { style = … }`, `export const Cover`. A Format's rule for its own element names the kind with its mark, `.pd-chapter.pa-cover`, and wins over the theme's rule for the kind by specificity in every order; its rules for the kinds beneath it name its mark and theirs, `.pa-table .pd-paragraph`, and win the same way. A kind is never subclassed for a look. **And the mark stays on the writing's own element,** which no Format in front can move — a rule reaches it by descendant through the layers, never by child or sibling.

## Marks, meaning, and where it lives

Since Sprint 97 there is no base sheet, so there is nothing to order a Format's rules against: no `@layer`, no `!important`, no chain of `:has()`. What an annotation *means* to the eye is its own mechanism — Parenthetical replaces the writing's element with one that is `hidden` and draws no children; Blank is a mark, since what wears it has no ink; Paginated hides a closed page in its own template; an annotation's own writing is not drawn at all, so nothing hides it. What a mark *looks like* is the library's, in its theme or its face. The marks an annotation puts on or takes off — `pd-canonical`, `pa-framed` — are read for what they mean, counted or standing down, never taken off to win.

**The three tools, and the rule for choosing.** A styled component, local, when an element must have rules to be what it is or look as the library wants. The library's theme, when a kind should look a certain way in this library. And a class the annotation toggles, the cheapest and most dynamic, when what varies is a state: a page open, a tab selected — a class toggled costs nothing and the theme does the rest. *Structure is a Format's mechanism, look is the library's, state is a mark, quantity is a theme property.*

## What holds it

[`theme.test.tsx`](../../package/.tests/theme.test.tsx), [`format.test.tsx`](../../package/.tests/format.test.tsx), [`format-theme.test.tsx`](../../package/.tests/format-theme.test.tsx), [`registration.test.tsx`](../../package/.tests/registration.test.tsx), [`book.test.tsx`](../../package/.tests/book.test.tsx) and the binder's [regression](../../package/.binding/.test/binding.regression.ts): a book always answers a theme, one, a registered one over the class's, a written one over both; a library's theme hands its fields to every template beneath as the values themselves and a written field reaches them; a providing Format hands its theme, the book's or another; no template in `src` declares a look and `src` carries no layer, no `!important`, no `:has`; every bound page inside its theme with the library's font in its sheet and nothing declared on the page; Libby dark by her own theme and no other book; Some Projects bare, its sheet 111 bytes.

**Names.** Doug's: `theme` on Book and on Format, `themeProvider`, *format*, *theme*, *face*. Styled-components' own: `ThemeProvider`; chemistry's: `theme` the symbol, `providing`. Struck 2026-10-02: `contract`, `vars`, `createTheme` in `.public`, `values`, the layer names `pd.invariants` and `pd.theme`, *the sheet*.
