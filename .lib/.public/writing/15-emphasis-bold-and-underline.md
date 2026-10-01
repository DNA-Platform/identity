# Emphasis, Bold and Underline

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***Written 2026-09-27 with [Sprint 88](../projection/93-sprint-88--the-theme-the-element-and-the-blank.md#u4). The code is [`src/writing/Emphasis.tsx`](../../package/src/writing/Emphasis.tsx), [`Bold.tsx`](../../package/src/writing/Bold.tsx) and [`Underline.tsx`](../../package/src/writing/Underline.tsx); the promises [`.tests/emphasis.test.tsx`](../../package/.tests/emphasis.test.tsx).***

---

## What they are

**Three Formats whose style is the semantic element, a layer around the writing, the element wearing its class.** Doug, 2026-09-27: *"think about what might be useful in terms of the basics - emphasis, underline, bold."* They are Cover's shape — a Format with an element for its `style` — said of any writing: a word, a sentence, a paragraph.

| class | the element | the class its element wears |
|---|---|---|
| `Emphasis` | `em` | `pa-emphasis` |
| `Bold` | `b` | `pa-bold` |
| `Underline` | `u` | `pa-underline` |

Each is one line since 2026-09-30, `style: ElementType = selection.b.attrs({ className: 'pa-bold' })` with an empty template: the element and its class are one styled component, the class given with styled-components' own `attrs`, and the class has no `defines` or `erase` of its own, Format's standing the element as a layer cited to itself and taking it back. Two on one word nest, the one written last innermost, each tag wearing its own class. The browser draws the three tags, so neither the class nor the base carries a rule for them; a library that wants emphasis drawn otherwise says so on the class, or stands its own Emphasis in place of this one — [Sprint 95, U3](../projection/100-sprint-95--pages-formats-and-words.md#u3), on Doug's *"I like that it is optional. It is up to the writer of the styled component to do this right? This seems like it is where it belongs."* Until then each marked the word itself and the sheet restated the browser's three rules.

### In use

```tsx
// paper/1-the-argument.tsx
A reference <Word><Emphasis />names</Word> a thing and <Word><Bold />never</Word> a <Word><Underline />place</Word>.
```

## How they are extended

- **A basic of your own** — small caps, strikethrough, a code span — is a Format whose `style` is a styled component, its rules in its own template and a class through `attrs` if another sheet is to address it; a few lines, in the library's own file.
- **A look without an element** is a Format with a styled `style` instead, as [Format and Theme](11-format-and-theme.md) has it; these three chose the element because `em`, `b` and `u` say what they are to a reader that is not a sheet.

## Promises

Three in [`.tests/emphasis.test.tsx`](../../package/.tests/emphasis.test.tsx): each is a format that draws its element as a layer around the word, the element wearing its class and the word none; two on one word nest, the one written last innermost, each tag wearing its own class; each is said of any writing, a sentence as well as a word. In [the regression](../../package/.binding/.test/binding.regression.ts): the three in the argument's markup as their elements; in Chrome, the computed font style, weight and decoration on the paper's words.

## Gate

Measured 2026-09-27, U4 of the sprint: the package typecheck 0 errors and 288 of 288 across twenty-three files; the compiler's typecheck 0, unit 98 of 98 and regression 37 of 37, the three computed italic, bold and underlined in Chrome; [the sprint chapter](../projection/93-sprint-88--the-theme-the-element-and-the-blank.md#stand) carries the commits.

**Names.** Doug's: `Emphasis`, `Bold`, `Underline`. Ours, flagged: `pa-emphasis`, `pa-bold`, `pa-underline`.
