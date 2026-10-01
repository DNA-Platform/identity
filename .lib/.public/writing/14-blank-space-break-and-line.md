# Blank, Space, Break and Line

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Written 2026-09-27 with [Sprint 88](../projection/93-sprint-88--the-theme-the-element-and-the-blank.md#u3). The code is Blank in [`src/writing/Writing.tsx`](../../package/src/writing/Writing.tsx) beside Parenthetical, and [`Space.tsx`](../../package/src/writing/Space.tsx), [`Break.tsx`](../../package/src/writing/Break.tsx), [`Line.tsx`](../../package/src/writing/Line.tsx); the promises [`.tests/blank.test.tsx`](../../package/.tests/blank.test.tsx). Four classes in one chapter because they are one small algebra.***

---

## What they are

**Blank is the trait, and the other three are classes that stand it and a pair.** Doug, 2026-09-27: *"a type of annotation called Blank, and then maybe we can make a configurable Space that can add whitespace, and a Break that can add a linebreak, and Line… possibly driven by an annotation that allows something to maintain its spatial extent but as a blank element. That's a fine genetic trait, like being albino :)"*

| class | what it is | cited |
|---|---|---|
| `Blank` | an annotation in Writing's file: marks `pa-blank`, and the Theme's sheet keeps the writing's box and hides its ink, `visibility: hidden`, an invariant since [Sprint 95, U5](../projection/100-sprint-95--pages-formats-and-words.md#u5) — where [Parenthetical](05-the-writing-class.md) is clipped away and leaves the flow | *"maintain its spatial extent but as a blank element"* |
| `Space` | a Letter standing Blank and its mark `pd-space`, whose count is a `$length` prop, one by default, `<Space length={3} />`, and which draws that many non-breaking spaces | *"Maybe use a $length prop for that one. But yes, do the count"* — a CSS length would need a style attribute on the element, never written, or a class per value, which cannot be named |
| `Break` | a Letter standing Blank and Block, marking `pd-break`, drawing nothing: an empty div, so what follows starts a new line | *"a Break that can add a linebreak"* |
| `Line` | a Sentence standing Block, marking `pd-line`: a sentence that stands on a line of its own, so the lines of a poem stack with nothing written between them | *"a Line could be a type of sentence in a div so that lines of a poem, or something like that, might look good"* |

**None of them adds a mechanism.** Blank is one more annotation with a note, as Parenthetical is; Space and Break are Letters whose `$Define` calls the base's and stands one or two annotations more; Line is a Sentence doing the same. The theme comprehends the four marks: `.pd-line` keeps white space and nothing more since [Sprint 95, U7](../projection/100-sprint-95--pages-formats-and-words.md#u7), the code figure's lines wearing `pd-code-line` and the counter with them, `.pd-space` too, `.pd-break` clears, `.pa-blank` keeps the box by the invariant.

### In use

```tsx
// persona/1-who-writes-here.tsx
<Paragraph>
    <Line>A voice Libby lent out,</Line>
    <Line>and filed beneath itself,</Line>
    <Line>writes papers of its own.</Line>
</Paragraph>

// paper/1-the-argument.tsx
And the evidence is in <Means>{evidence}</Means>.<Break />
Set apart by a break,<Space length={3} />and spaced by three.
```

## How they are extended

- **A kind of blank** is a class standing `<Blank />` in its `$Define` after its base's, as Space and Break do — a redacted word, a placeholder that keeps its width.
- **A line of your own** is a class under Line, a verse with a number in front of it, say; it is a sentence still, a part of its paragraph, and wears `pd-sentence` and `pd-line` beneath its own mark.
- **What a space looks like** is the theme's, `.pd-space`; what it measures is its count.

## Promises

Four in [`.tests/blank.test.tsx`](../../package/.tests/blank.test.tsx): a blank word wears `pa-blank` and the Theme's sheet hides the ink and keeps the box, the annotation carrying no note; a space is a blank inline letter whose length is a count, one by default, drawn as non-breaking spaces; a break is a blank block letter that draws nothing; a line is a block sentence, a part of its paragraph, drawn as a div wearing the sentence's mark and its own. In [the regression](../../package/.binding/.test/binding.regression.ts): the persona's poem as three lines and the argument's space, break and basics in the markup; in Chrome, the lines one under another, the space three wide, the break a block.

## Gate

Measured 2026-09-27, U3 of the sprint: the package typecheck 0 errors and 285 of 285 across twenty-two files, 288 of 288 after U4; the compiler's typecheck 0, unit 98 of 98 and regression 37 of 37, the poem's lines one under another in Chrome — once the theme's sheet stopped setting `display: inline` on every sentence, which had flowed the Lines inline; [the sprint chapter](../projection/93-sprint-88--the-theme-the-element-and-the-blank.md#stand) carries the commits.

**Names.** Doug's: `Blank`, `Space`, `Break`, `Line`, `$length`. Ours, flagged: `pa-blank`, `pd-space`, `pd-break`, `pd-line`.
