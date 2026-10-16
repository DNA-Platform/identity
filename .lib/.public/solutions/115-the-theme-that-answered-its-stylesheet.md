# The Theme That Answered Its Stylesheet

- **author:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

**keywords:** `library` · `shadowed-member` · `render-make`

---

## Symptoms

***the theme's rules printed as text down the left of the page, their values empty — `.pd-book .pd-library { padding: 0 18px; border: 0; } .pd-book .pd-me { … color: ; }`*** — the workbench, on the first page of a new kind of book in Doug's library, a conversation, in the hour its theme was written; the page drew behind the text, so it read as a layout's fault, and the printed rules were taken for a hot reload's residue, since they stood after a fresh load and after a cold restart alike.

***"Functions are not valid as a React child"***, ***"Maximum update depth exceeded"***, ***"Cannot update a component (`Component`) while rendering a different component (`Component`)"*** — the console on every fresh load of that page, while every other page of the library loaded clean; the count of the three varied between loads and their presence did not.

## What it turned out to be

The theme declared a part named `frame()`, returning its rules as a `RuleSet`, beside parts named for what they style. Chemistry's chemical has a `frame(drawn: ReactNode): ReactNode` of its own, [chemical.ts](../../../chemistry/package/src/abstraction/chemical.ts) at its line 1163, under the comment *"WRAPPING HAPPENS BY INSTANCE, AND frame() IS WHERE A PARTICLE WRAPS WHAT IT DRAWS"*: the framework hands a chemical its own drawing and draws what `frame()` answers. A theme is a chemical, so it was handed its drawing and answered a fresh array of strings and interpolation functions. React rendered the strings as text nodes, eighteen of them as direct children of the book's element beside its five blocks, refused the functions, and since an array made per draw is never identical to its last, chemistry's post-commit self-check, which redraws when the drawing differs, never settled. The rename to `surround()` took all three warnings and the printed rules with it. TypeScript said nothing: the method carries no `override` keyword, a method with no parameter overrides one with a parameter, and the return type was never compared.

## How it was found

A probe walking the page's text nodes for the first rule's text named its parent, the book's own element, with twenty-three children where five stood: the five blocks and the pieces of the stylesheet between the refused functions. Before that, every cut of the page's own parts had left the warnings standing, a dozen of them, and a grep of each part's name against chemistry had looked in `library/chemistry/src`, a folder that does not exist, and read its silence as a clear name. The grep that found it looked in `library/chemistry/package/src`. In the same hours Cathy signed every drawing by identity and found the logo's and the switches' handlers made per draw; those churn on every page and settle, and were not this, which is written in [her perspective](../../../../.claude/library/..teamsmanship/..team/cathy/perspective/a-function-prop-made-per-draw-defeats-the-diff.md).

## Why no gate caught it sooner

The bind draws on the server, where React prints no such warning, so the page bound and proved and was committed. The workbench prints a `wrong:` line per warning, and the session counted the lines instead of reading them, [How a Library Is Developed](../writing-a-book/01-02-how-a-library-is-developed.md#warnings). The typecheck accepts the override. And a grep is a claim about the grep until it has matched once.

## The lesson

A method on anything that extends a chemical is named for what it does in the library's words, [How a Thing Is Named](../the-coding-style/09-how-a-thing-is-named.md), and checked against the framework's members before it is named: `frame`, `view`, `write`, `container`, `note` and `draw` are chemistry's, and an override of one is silent. A theme's part is named for what it styles, never for a verb the framework owns.

**A second instance, 2026-10-16, one layer up.** A theme for the Claude conversation named a part `side()` where the base theme declares a field `side`, which the typecheck refused (`TS2425: Class '$Typeset' defines instance member property 'side', but extended class defines it as instance member function`), and parts `figures()`, `head()` and `holds()` where the base theme declares parts of those names, which nothing refused and which would have replaced the base's rules for figures, the head and the side in every book wearing the theme, since `parts()` spreads the base's parts through virtual dispatch. A theme's part is checked against the base theme's fields and its parts before it is named, as a chemical's method is checked against the framework's: `grep -n "protected [a-zA-Z]*(): RuleSet\|^    [a-z]* = " 3-the-theme~code.tsx` before the first part is written.
