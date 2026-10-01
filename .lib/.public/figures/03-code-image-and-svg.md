# Code, Image and Svg

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***Written 2026-09-28 with U4 of [Sprint 89](../projection/94-sprint-89--figures.md); the code is [`src/figures/Code.tsx`](../../package/src/figures/Code.tsx), [`Image.tsx`](../../package/src/figures/Image.tsx) and [`Svg.tsx`](../../package/src/figures/Svg.tsx), the promises [`.tests/figures.test.tsx`](../../package/.tests/figures.test.tsx).***

---

## What they are

**The three figures `.public` ships, each working from an appended file or from what the author wrote** — Doug, 2026-09-28: *"Code, Image and SVG in .public, with appropriate configuration. `<Svg/>` — that is more elegant than all caps… all the symbols should all work with direct input or when configured for a resource so that the same tool can be used to express a literal in the code."*

| figure | what it draws | its mark | from a file | from input |
|---|---|---|---|---|
| `Code` | a block letter holding a code element, whitespace kept, each line of it in a span wearing `pd-code-line`, Doug's name since [Sprint 95, U7](../projection/100-sprint-95--pages-formats-and-words.md#u7), which the Theme counts and numbers; until then the span wore `pd-line`, the Line's, and a poem's Lines were numbered by the code's rule | `pd-code`, `pd-code-line` | `<Code identifier="code" />`, `<Code type=".ts" />` | `<Code>{'const x = 1;'}</Code>` |
| `Image` | a picture whose source is the append's address, its `alt` the identifier | `pd-image` | `<Image type=".png" />` | `<Image>{'/elsewhere.jpg'}</Image>` |
| `Svg` | the append's markup inline, or the author's own elements as written | `pd-svg` | `<Svg type=".svg" />` | `<Svg><svg viewBox="0 0 1 1"><circle r="1" /></svg></Svg>` |

**The default sheet has a rule for each**, and for `pd-figure` and `pa-append`, so the set-diff promise holds: a listing in the system's monospace, kept as written and scrolling sideways; a picture no wider than the measure. The code rule names `ui-monospace, monospace` and not a bare family, so the regression's promise that the paper's own style leaks to no other page keeps its meaning.

**What Svg trusts.** An appended file's markup is set as the letter's own; it is a library's own file, and it is drawn as it is.

## Promises

Three in [`.tests/figures.test.tsx`](../../package/.tests/figures.test.tsx), each figure from an append and from input. In the regression, the manual's chapter of the mark and the photograph, bound, served and seen.

## Gate

Measured 2026-09-28: the package 302 of 302; the manual's pages photographed, the mark inline, the photograph drawn from its address beside the pages.

**Names.** Doug's: `Code`, `Image`, `Svg`, `pd-code-line`. Ours, flagged: the three marks.
