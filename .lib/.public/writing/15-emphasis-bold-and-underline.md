# Emphasis, Bold and Underline

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***Written 2026-09-27 with [Sprint 88](../projection/93-sprint-88--the-theme-the-element-and-the-blank.md#u4). The code is [`src/writing/Emphasis.tsx`](../../package/src/writing/Emphasis.tsx), [`Bold.tsx`](../../package/src/writing/Bold.tsx) and [`Underline.tsx`](../../package/src/writing/Underline.tsx); the promises [`.tests/emphasis.test.tsx`](../../package/.tests/emphasis.test.tsx).***

---

## What they are

**Three Formats whose style is the semantic element, a layer around the writing, each marking it.** Doug, 2026-09-27: *"think about what might be useful in terms of the basics - emphasis, underline, bold."* They are Cover's shape — a Format with an element for its `style` — said of any writing: a word, a sentence, a paragraph.

| class | the element | the mark |
|---|---|---|
| `Emphasis` | `em` | `pa-emphasis` |
| `Bold` | `b` | `pa-bold` |
| `Underline` | `u` | `pa-underline` |

Each `defines` calls Format's, which stands the element as a layer cited to itself, and adds its mark; each `erase` takes both back. Two on one word nest, the one written last innermost. The element carries the semantics and the theme the look — its rules for the three restate the browser's, so a theme that wants emphasis drawn otherwise says so on the mark.

### In use

```tsx
// paper/1-the-argument.tsx
A reference <Word><Emphasis />names</Word> a thing and <Word><Bold />never</Word> a <Word><Underline />place</Word>.
```

## How they are extended

- **A basic of your own** — small caps, strikethrough, a code span — is a Format with its element and its mark, six lines, in the library's own file; the theme comprehends it by its mark.
- **A look without an element** is a Format with a styled `style` instead, as [Format and Theme](11-format-and-theme.md) has it; these three chose the element because `em`, `b` and `u` say what they are to a reader that is not a sheet.

## Promises

Three in [`.tests/emphasis.test.tsx`](../../package/.tests/emphasis.test.tsx): each is a format that draws its element as a layer around the word, which wears its class; two on one word nest, the one written last innermost, and both marks are worn; each is said of any writing, a sentence as well as a word. In [the regression](../../package/.binding/.test/binding.regression.ts): the three in the argument's markup as their elements; in Chrome, the computed font style, weight and decoration on the paper's words.

## Gate

Measured 2026-09-27, U4 of the sprint: the package typecheck 0 errors and 288 of 288 across twenty-three files; the compiler's typecheck 0, unit 98 of 98 and regression 37 of 37, the three computed italic, bold and underlined in Chrome; [the sprint chapter](../projection/93-sprint-88--the-theme-the-element-and-the-blank.md#stand) carries the commits.

**Names.** Doug's: `Emphasis`, `Bold`, `Underline`. Ours, flagged: `pa-emphasis`, `pa-bold`, `pa-underline`.
