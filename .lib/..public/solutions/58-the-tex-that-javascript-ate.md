# The TeX that JavaScript ate

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `demo` · `eaten-escape` *(proxy name, flagged for Doug)* · nine formulas rendering as garbage with no error · a refusal whose message was true and pointed at the wrong file · one fault of nine loud enough to see

---

## Symptoms

- ***One refusal panel on the LaTeX paper*** reading **`a phrase is written on one line, and this one breaks across lines`** — *true, and about a `<Math>` written on exactly one line.*
- **The panel stood INSIDE a paragraph**, which produced `<div> cannot be a descendant of <p>` and two more console errors — *so the visible symptom was a NESTING complaint about an element nobody had written.*
- ***And the eight formulas that did NOT refuse rendered garbage in silence.*** **KaTeX drew them without complaint**, because what it was handed was well-formed — *just not what the author wrote.*
- `tsc` 0 on the demo. **No test covers a demo's copy.**

## The mechanism — ***a TeX string is a JavaScript string, and JavaScript reads the backslashes first***

**The paper wrote its mathematics the way every other string in the codebase is written:**

```tsx
<Math>{'\mathsf{P} \ne \mathsf{NP}'}</Math>
<Math>{'\varphi'}</Math>
<Equation>{'\forall k \; \exists n \; \forall M \; \left[ … \right]'}</Equation>
```

***Every one of those backslashes is a JavaScript escape before it is ever TeX:***

| written | what the string actually holds |
|---|---|
| `'\mathsf{P} \ne \mathsf{NP}'` | `mathsf{P}` **· LINE FEED ·** `e mathsf{NP}` |
| `'\varphi'` | **VERTICAL TAB** `arphi` |
| `'\forall k \; \exists n'` | **FORM FEED** `orall k ; exists n` |

**An unrecognised escape like `\m` silently drops its backslash; `\n`, `\v` and `\f` are control characters.** *So the command names survived as bare words and KaTeX typeset them as text.*

> ***THE ONE-LINE STATEMENT: thirteen TeX strings were being read by JavaScript before they were read by TeX, and only the one containing `\ne` produced a character a rule could see.***

## Why one of nine was loud

***Because `\n` is a NEWLINE, and `$Phrase` has a rule that a phrase is written on one line.*** **`$Math` carries `$TypeOfPhrase`, so the rule ran, found the line feed, and refused** — *correctly, and with a message describing the rule rather than the fault.*

**The other twelve strings held a vertical tab, a form feed, or nothing but a missing backslash, and no rule speaks about those.** ***So the framework caught one instance of a fault it had thirteen of, and the catch pointed at `$Phrase` when the fault was in the demo's quoting.***

## The fix

***`String.raw` on every TeX string*** — **thirteen of them, across five files of the paper.**

```tsx
<Math>{String.raw`\mathsf{P} \ne \mathsf{NP}`}</Math>
```

| | before | after |
|---|---|---|
| **KaTeX elements drawn** | 9 | ***13*** |
| **refusal panels** | 1 | ***0*** |
| **console errors** | 4 | ***0*** |
| **block elements inside a `<p>`** | 2 | ***0*** |

*And the page got SHORTER — 3,133 characters to 2,876 — because the refusal's own text was gone and the formulas became symbols instead of the words they had been spelling out.*

## Prevention

- ***Any language embedded in a JavaScript string is read by JavaScript first.*** **TeX, regular expressions, Windows paths, anything backslashed — write it `String.raw` or double every backslash.** *A `.tex` extension would have made this impossible; a `.tsx` file makes it invisible.*
- **A refusal's message names the RULE that caught it, never the fault.** *Reading "a phrase is written on one line" as a statement about `$Phrase` cost the first several minutes; the fault was three files away in the quoting of a string.*
- ***A demo's copy is not covered by anything.*** **`tsc` cannot see inside a string literal, and no promise reads the paper's mathematics.** *This was found by DRIVING the page and counting KaTeX elements — the count, not the text, is what moved.*
- **Count what a page RENDERED, not only what it says.** *Eight wrong formulas produced eight KaTeX elements and looked like success; the number that mattered was 9 against the 13 the source declares.*

---

*Found 2026-09-08 while driving the four surfaces after an unrelated change to `$Format`, under the standing rule that no chemistry feature ships unseen. **The change being verified was fine. The page was not, and had not been for as long as the paper existed.***
