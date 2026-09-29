# Sprint 94: The Styling Standard

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **state:** `requirements-only` — opened 2026-09-29 at the close of [Sprint 92](97-sprint-92--the-literal-form.md), from Doug's questions and Cathy's thought outward; his four answers made the four decisions below; three measurements owed before `/ce-plan`.

---

## Where this sprint comes from

**Doug, 2026-09-29, finding Table with a global style while not a Format:** *"I would think we want format annotations to be standardized. They can do other things."* Then the questions the standard must answer, verbatim in [Where a look lives](../writing/02-theming-and-formatting.md#where-a-look-lives): global styles a mistake? formats local styled components? all globals to the theme? when other themes? what does one get and give up, for dynamism, flexibility and performance? And: *"A theme should have properties that it exposes which should be reactive. Does Table assume the Book has a theme? Why does it need theme values if it is relying on the global theme? Is Theme in Book a convention or a rule? It looks like we haven't figured this out yet, but presumably we want to draw correctness from how styled components work."* Then, with Cathy's research in hand: *"guys get to work… How are we going to develop themes and use formats etc...? Did we learn what we need to learn? Does it factor in having dynamic properties on the theme that can be consumed in the app?"*

## What the room already holds

- [Where a look lives](../writing/02-theming-and-formatting.md#where-a-look-lives): three kinds of rule, three homes, one law — no property on one element written by two authors — and the community's answers as researched.
- [Cathy's thought](../../../../.claude/library/..teamsmanship/..team/cathy/thinking/02-where-a-look-lives.md), *Cathy > Programming*, 2026-09-29, sufficient: tokens as CSS custom properties written once (Radix, Panda, Chakra, shadcn, MUI, styled-components 6.4's `createTheme`); component rules own structure and every layout property of the element they are; the semantic-class sheet a named cascade layer beneath unlayered component output; meaning rules as `!important` invariants in the earliest layer, four kinds of unseen; one author per (element, property); the `@layer` order statement emitted ahead of every styled tag.
- Built already: [Table](../writing/12-table.md) is a Format replacing the section's element with its grid (`e87da10`, local); the theme gave up its two doubled rules (`d5652f0`, local); the comprehends promise excepts a mark whose rule is its annotation's own note.
- The code today: `styled-components` 6.4.0 installed, `createTheme` exported; stylis 4.3.6; [Theme](../../package/src/writing/Theme.tsx) with eight reactive fields, a `values` getter and its own provider chemical; the render phase writing the head's style tags in one function, [`rendering/draw.ts`](../../package/.binding/rendering/draw.ts).

## Requirements

Each names what would be observed. Identifiers are stable.

- **R1 — The theme's eight values are CSS custom properties written once.** *Observed:* the sheet's element carries `--font` … `--link` as declarations; every rule in the sheet reads `var(--…)`; no theme literal appears in any rule. The provider remains, carrying `createTheme()`'s `var()` references, so a Format's interpolation of `theme.space` resolves to the variable, not the value.
- **R2 — A theme value changed on the held instance after mount costs one paint of the sheet and none of the consumers.** *Observed:* `theme.ink = '…'` recolours the page; the render count shows the provider and sheet drawn once, and no Format or writing redrawn. Doug: *"Does it factor in having dynamic properties on the theme that can be consumed in the app?"* — it must, and cheaper than today.
- **R3 — The theme's sheet is a declared cascade layer beneath unlayered Format output.** *Observed:* the sheet's rules sit in `@layer pd.theme`; a Table's grid beats the sheet's `pa-table` rules with no specificity trick; the `&&&` idiom appears nowhere.
- **R4 — Layout belongs to the Format that is the element; the sheet supplies skin by mark, through tokens.** *Observed:* Table owns gaps and padding, reading `var(--space)`; the sheet keeps the header row's weight and rule, the cells' colour. Each (element, property) has one author, checked by a promise that reads both.
- **R5 — Meaning rules are invariants in the earliest layer, `!important`, outside the theme.** *Observed:* Parenthetical, Blank and Paginated state their meaning as marks and an invariant rule enforces each; a library theme that forgets the marks changes nothing about them. Each states its kind of unseen by the pattern the guide gives — D1.
- **R6 — The `@layer` order statement precedes every styled tag in the prerendered head.** *Observed:* the first style in a bound page's head is the order statement; injection order no longer decides precedence. Its home is the sheet's first rule, the binder writing nothing — D3.
- **R7 — A nested theme is a Format with `theme = true` on a writing, and its subtree inherits its values by the cascade.** *Observed:* a dark chapter in a light book sets its eight on its own element and every Format beneath reads them; no second provider is needed for CSS, and the provider still serves JavaScript readers.
- **R8 — A book always has a theme: Book stands the framework's Theme in its `$Define`, a written one in front taking it out of expression.** *Observed:* a book with no theme written draws under the default sheet; one with a theme written draws under that alone — D2.
- **R9 — The Writing book says all of it in one place, and the code carries no comment.** [Where a look lives](../writing/02-theming-and-formatting.md#where-a-look-lives) is the standard; [Theme](../writing/13-theme.md), [Format and Theme](../writing/11-format-and-theme.md), [Developing an Annotation](../writing/10-developing-an-annotation.md) and [Table](../writing/12-table.md) point there and are true to the code at the close.

## Measurements owed before the plan

- **M1** — whether a nested `@layer` inside a styled template wraps the generated class under stylis 4.3.6, or only a global sheet may be layered (the research left it unverified).
- **M2** — the render count of one theme write today, against the same write under R1: the number R2 is measured by.
- **M3** — how `createTheme()`'s `var()` references behave through the provider chemical's `values` and inside `calc()` in the sheet.

## Doug's four answers, 2026-09-29, and the decisions they make

Asked the four as rulings, he answered each as a correction of the asking, verbatim:

- **On the kinds of unseen:** *"I want to know the pattern. We need a development guide that helps you find the right answer easily."* → **D1** — the guide gives the pattern, not Doug per annotation: [the development story](../writing/02-theming-and-formatting.md#where-a-look-lives) now carries the four kinds of unseen as rows, what the meaning requires deciding the CSS; each annotation's chapter states which its meaning is, in the plan.
- **On Theme in Book:** *"If the framework can't assume a theme, it has no place to draw values from, right?"* → **D2** — a book always has a theme, by construction: Book stands the framework's Theme in its `$Define` as a level stands its pair, and a written theme in front takes it out of expression, which Theme's `defines` already does. R8 is settled as a rule the code makes true; the specification may say it.
- **On the order statement:** *"I don't know, but make this decision carefully. Code manipulation is always dangerous in the binder. And if you hardcode to the library you don't admit extension. Be careful. Prerendering is its job though. So think clearly."* → **D3** — the binder writes nothing: styled-components collects rules in render order and the theme's sheet is the outermost styled element of a book, drawn before every Format and note beneath it, so the order statement as the sheet's first rule is the first rule in the head; a library's theme rewrites the sheet and may declare its own layers. A promise reads a bound page's head and holds it to that; if the order is ever not first, the measurement says so before code moves.
- **On the Theme method:** *"I don't know what the implementation story for provided is, but seeing as how it's past tense, it would be something that had already been provided, and not a method, which performs an action. Your names are nonsensical. What does it help with? What is lost to just use the 8? If someone makes their own theme or extends it, what does that look like?"* → **D4** — the method helps with one thing, styled-components typing a theme as an empty interface, and nothing is lost by using the eight once they are custom properties and the sheet reads `theme.space` in styled-components' own form; it ends with R1. A library's own theme is a subclass setting its eight, `ink = 'white'`; a ninth value is a field, a declaration in its sheet, and `var(--accent)` in its rules; how `createTheme()` writes the declarations is M3, read from the API. Until R1 lands the method stands as a proxy the record calls wrong in kind.

## Out of scope

The viewer and Code's props (Sprint 93). Any change to chemistry. Leaving styled-components: an anchor, not a question.

## The demo — what cannot be faked

A bound page of the test library, served on 4242, on which a theme value is changed on the held instance from the console and the page recolours, with the render count printed beside it showing one paint; a table whose grid stands with no `&&&` anywhere in the styles; a parenthetical unseen under Libby's dark theme, whose sheet never mentions it; and the head of the page opening with the order statement. None of these is a hand-authored page.

## Where things stand

**Next: `/ce-plan` on this chapter, after Sprint 92's `/ce-compound`, on Doug's word; the four decisions are made, the three measurements are the plan's first units.** Nothing is built. Requirements only.

**Read first, for the plan:** [Where a look lives](../writing/02-theming-and-formatting.md#where-a-look-lives); [Cathy's evidence](../../../../.claude/library/..teamsmanship/..team/cathy/thinking/02-where-a-look-lives.md); [`Theme.tsx`](../../package/src/writing/Theme.tsx) and [`Format.tsx`](../../package/src/writing/Format.tsx); [`rendering/draw.ts`](../../package/.binding/rendering/draw.ts) for the head; [Sprint 92's record](97-sprint-92--the-literal-form.md#the-table) for how Table became a Format.
