# The Single That Re-bonded With the Book's Children

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** `model` · `framework` · `theme` · `rebind` · `single`

---

## The symptom

**"$Chemistry: Bond Constructor Failed — Cannot read properties of undefined (reading 'type')"** where every page should have been, and thirteen promises red at once — the whole of `book.test`, `authoring.test` and `theme.test` — with tsc 0 and nothing else changed. Seen twice on 2026-09-13, an hour apart, from two different lines that did the same thing: `$Book.view()` lifting the held theme instance, `$(this.theme)`, in U1 of [Sprint 69](../projection/75-sprint-69--the-wart-hunt.md); and `$Book.view()` drawing the registered theme by the ask, `$(Theme)`, in the theme unit of the same sprint, when the registration still said `'single'`.

## What it was

A `'single'` registration makes one instance at registration and bonds it once, **with no children**. Drawing that instance at a book's root hands it the book's whole content as children, and children are arguments: the synthesis compares them, finds them new, and re-runs the bond constructor over the held instance — `$Format`'s bond, which meets a block it was never written to be handed twice. A fresh instance mounted with the very same children bonds fine, which is why the class lift U1 put in its place (`$(this.theme.constructor as new() => $Theme)`) was green — and why it was also wrong: it drew a fresh theme that the appearance panel, writing the registered single, would never have reached.

Chemistry's own reading, on the mechanism and unbuilt: *"a held instance whose children change re-runs its bond because the synthesis compares the arguments and children are arguments, so 'bonded once' holds for the same children only; the crash is your bond constructor meeting a re-bond it was not written for."* Whether that is the `'single'` contract or a defect in it is a ruling held on chemistry's side; nothing in `.public` depends on it now.

## What fixed it — no singleton at all

Doug's words, which turned out to be the design: *"The theme goes where it is supposed to go and other things reach it."* Once chemistry's theme source landed ([d7667a7](../../../chemistry/.lib/projection/00-planning.md#pitch-theme) — `[theme]` a symbol beside `children`, a class overriding `get [theme]()` provides through styled-components' own context, nearest wins, identity remade when a named field changes), the theme needed no singleton: `$Theme.$register` registers the **class**, plain; `$Book.view()` draws `$(Theme)` — the ask answers the registered class, and one instance is made at the book's root; that instance overrides `get [theme]() { return this; }` and so provides itself; every format beneath reads `this.theme`, which on `$Writing` is `this[theme] ?? reflection.theme()` — the context, or the base template outside any draw; and a book is re-themed by a second registration, which redraws it. The `'single'` had existed only so that a walk had one object to find; with context doing the reaching, the drawn instance *is* the object, found by anyone who reads it and written by the panel that reads it.

Four promises stand on it in `theme.test.tsx`: one theme per book and the same object read by every format beneath; the registered class is the one drawn; a writing built with no book reads the base by the fallback; a book re-themed by registration redraws in the new theme. The paper's LaTeX/Markdown switch, the last holder of the deleted setter, now says `sheet.$register(Aaronson)` and was seen re-theming the page with no page errors.

## What it cost to learn beside it

Everything `.public` had built to reach a theme by hand — `_theme` on the book and on every document, a setter running the theme down, `$Writing.theme` walking up through `reflection.above`, `reflection.theme()` as the default, the two "drawn in a theme" promises — was the wart that made a singleton necessary in the first place; the register carries it as B14. And the day before this diagnosis was spent fighting the symptoms of that wart with selectors, which is [The Reach](../the-coding-style/07-what-natural-means.md#the-reach).

## Where it is recorded

[Sprint 69](../projection/75-sprint-69--the-wart-hunt.md) · [Themes per type, formats per instance § Built 2026-09-13](../the-motif/04-themes-per-type-formats-per-instance.md#provider) · [chemistry's chapter zero, the pitch](../../../chemistry/.lib/projection/00-planning.md#pitch-theme).
