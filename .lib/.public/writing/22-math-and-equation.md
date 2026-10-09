# Math and Equation

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***Written 2026-10-01 with U12 of [Sprint 95](../projection/100-sprint-95--pages-formats-and-words.md#u12), to [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md); the code is [`Math.tsx`](../../package/src/writing/Math.tsx) and [`Equation.tsx`](../../package/src/writing/Equation.tsx), the promises [`.tests/math.test.tsx`](../../package/.tests/math.test.tsx). The class names are Doug's; the marks and the prop follow the pattern he chose.***

---

## What they are

***"List and Math are fundamental… along with the Math components that we had in the last version, adapted."*** — Doug, 2026-09-30. **A Math is a Word whose text is TeX, typeset inline; an Equation is a Paragraph whose text is TeX, typeset in display mode on a line of its own and numbered by a library's theme, which counts `pd-equation`.** Both print through a typesetter, a prop defaulting to KaTeX, as [Code](../figures/03-code-image-and-svg.md) prints through its highlighter, so a library that wants another typesetter hands one in and the class knows nothing of it. Two classes in one chapter because they are one idea at two levels, as Section and Heading are.

| member | what it is | cited |
|---|---|---|
| `Typesetter` · `typesetting` | the type of a typesetter, TeX and whether to display in, markup out; and the default, KaTeX's `renderToString`, never throwing, so a bad formula draws as its error and not as a crash | Code's `Highlighter` and `highlighting`, the same shape |
| `Math.$typesetter` · `Equation.$typesetter` | the prop, written `typesetter`, the default `typesetting` | the pattern, 2026-09-30 |
| `tex` | what was written in it, the copy of its text, trimmed; written as a string child, `{'\\frac{a}{b}'}`, since braces are JSX's | the copy utility, one level deep |
| `Math.write()` | the typesetter's inline markup inside its own element | `pd-math` on the word |
| `Equation.write()` | the typesetter's display markup inside its own element | `pd-equation` on the paragraph |
| *the number* | not a member: a library's theme counts `pd-equation` and writes the count after it, in parentheses at the line's end, the counter reset on the book; the base numbers nothing since Sprint 97 | the base ships no look |
| *the stylesheet* | KaTeX's own, named on the [binder](../utilities/05-binder.md) utility, `binder.stylesheets`, which the compiler's assembly links before the sheets a library's own configuration names, so a library that writes a formula does nothing to see it | D6 of the sprint: *"the package names it and the binder links it"* |

### In use

```tsx
<Paragraph>
    an address is a function of the thing it names, so that <Math>{'a = f(t)'}</Math> holds
</Paragraph>
<Equation>{'a = f(t), \\qquad t \\neq f^{-1}(a)'}</Equation>
```

*The persona's paper, [The Evidence](../../package/.binding/.test/paper/2-the-evidence.tsx): the formula in its sentence in KaTeX's face, the equation centred on a line of its own with its number at the right.*

**A name to know.** The component is `Math`, Doug's word, and it shadows the language's `Math` in any module that imports it; a module that needs both imports the component under another name, `import { Math as math }`, as the test library's own files import a component whose name they use.

## How they are extended

- **Another typesetter** is a function of the same shape handed as the prop, or a class under Math or Equation setting `$typesetter` to it.
- **A type of equation** is a class under Equation, a numbered lemma, a theorem, saying what its text must be in a specification of its own and adding its mark beside `pd-equation`.
- **A look of your own** is a library's theme's rules for the two marks, and its own rules for KaTeX's classes if it wants them, since the sheet is linked on every page.

## Promises

Seven in [`.tests/math.test.tsx`](../../package/.tests/math.test.tsx): a Math is a word at 2 whose TeX is what was written, drawn as KaTeX's inline markup inside its own element; it stands in a sentence as a word does; a stub typesetter draws the stub's markup, told it is inline; an Equation is a paragraph at 4 drawn as KaTeX's display markup; its typesetter is told to display; drawn in its book, marked `pd-equation` and `pd-math` and numbered by nothing of the base's; and KaTeX's stylesheet is named on the binder and nowhere in the class. In the compiler's [regression](../../package/.binding/.test/binding.regression.ts): the evidence's formula in KaTeX's face, its equation displayed and numbered, KaTeX's rules among the page's stylesheets and a stylesheet linked in its head.

## Gate

Measured 2026-10-01: the package's typecheck 0 errors and 336 of 336; the compiler's typecheck 0, unit suite 132 of 132 and regression 44 of 44; the evidence photographed with its formula and its numbered equation, every other page at 0 pixels but the paper's cover, whose scrollbar moved.

**Names.** Doug's: `Math`, `Equation`. The pattern's, on his word, flagged: `pd-math`, `pd-equation`, `$typesetter`; ours, flagged: `Typesetter`, `typesetting`, `tex`, and `stylesheets` on the binder.
