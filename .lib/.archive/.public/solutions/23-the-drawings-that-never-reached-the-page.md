# The drawings that never reached the page

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** model · absent-case · wrong-altitude
- **sprint:** [The Binding](../projection/19-the-binding.md#f13)

---

## Symptoms

- **Mathematics on the page reads `\frac{d}{dt}\left(\frac{\partial L}{\partial \dot q}\delta q - L\,\delta t\right) = 0`** — the LaTeX itself, set in small grey type, where a typeset formula should stand.
- **`**approximate**` renders with its asterisks**, in the middle of an otherwise correct sentence.
- **A link's target leaks into the prose**: `*(https://plato.stanford.edu/entries/descartes-mathematics/)dropped`.
- ***And the model is right.*** `section.parts()` contains a `$Formula`. `$Link` exists with its `url`. The suite is green, the typecheck is clean, and the driver passes every checkpoint it has.

## What did not work

- **Asking the model.** Every promise about the parse passes, because every promise about the parse is true. `$Formula` is built, `$Snippet` is built, `$Link` carries its target off the writing. **The parse was never the defect.**
- **Adding the drawing.** `$Formula` gained a `view()` that calls katex; the page did not change. **A drawing that is never called cannot be debugged by improving it**, and an hour went into the wrong file.
- **Reading the DOM.** The markup is clean and consistent. Nothing in it says *a class was skipped* — it says *this paragraph is a run of text*, which is a true statement about what was drawn and says nothing about what was not.

## The mechanism — a performance bound that swallowed a class of output

The framework draws a composition by asking the theme how its parts are laid, and [`$Theme.lay`](../../package/src/writing/Theme.tsx) answers **`'run'`** when the parts are uniform:

```tsx
const laid = shown(theme, this, reading(this), this.uniform(), 0);
if (laid === null) return React.createElement($(this.text) as any);
```

**`'run'` means: do not draw your parts — draw your own text.** It exists for a measured reason. Drawing every level of a seven-book corpus is **7,666 elements, 5,881 of them single letters**; the run rule is what holds a page at 50–91 nodes instead.

And [`uniform()`](../../package/src/writing/Writing.tsx) decided a run by asking one question — *is anything written here a chemical?*

```tsx
uniform(): boolean {
    const written = (this.text?.$elements ?? []) as unknown[];
    return !written.some(one => one !== null && typeof one === 'object');
}
```

***Plain prose contains no chemicals.*** So a sentence carrying `$e^{i\pi}$` was uniform, drew its own source text, and **its words were never asked to draw at all**. Every word-grade class in the framework — formula, code span, link, emphasis, punctuation — was invisible **in exactly the case they exist for**: prose that carries notation.

**The bound was placed at the wrong altitude.** It asks whether the writing *holds an object*, when the question it means is whether the writing *is only prose*. Notation is prose that is not only prose.

## The fix

**A run is prose that is ONLY prose.**

```tsx
export const notation = /\*\*|__|~~|\*[^\s*]|_[^\s_]|\$[^$\n]+\$|`[^`\n]+`|\[[^\]\n]*\]\([^)\s]*\)/;

uniform(): boolean {
    const written = (this.text?.$elements ?? []) as unknown[];
    if (written.some(one => one !== null && typeof one === 'object')) return false;
    return !notation.test(this.copy);
}
```

***It lives on `$Writing`, not on `$Paragraph`.*** The first attempt put it on the paragraph, and the page did not change: a paragraph then drew its sentences, and **each sentence asked the same question of itself, found no chemical, and drew its own text.** A rule about what a run is has to hold at every grade or it holds at none.

**The node cost is paid only where notation appears** — the chapter that exercised this went from 78 to 175 nodes, and a chapter of plain prose is unchanged.

## Prevention

**A bound placed for performance can silently swallow a whole class of output, and nothing will fail.** No throw, no empty render, no failing promise — the page is *smaller* than it should be, and smaller looks like working.

**The check, and it is one line:** for any rule of the form *"in the common case, skip the expensive path"*, ask **what is only reachable through the expensive path**. Here it was every word-grade class the framework ships. That question is answerable at the moment the rule is written, and unanswerable from the DOM afterwards.

***And the model being right is not evidence the page is.*** This branch has now filed that shape three times — [a green that exercised nothing](14-the-green-that-exercised-nothing.md), [a checkpoint that compared a number to itself](18-the-checkpoint-that-compared-a-number-to-itself.md), and this. **The instrument that catches it is a person looking at pixels**, and here it was a screenshot read as an image: the asterisks were visible, and no query over the DOM would have asked about them.

*Distinct from [the formulas that rendered empty](01-the-formulas-that-rendered-empty.md), and kept distinct: there a rename ran half way and a class stored its content in one member and read it from another, so the drawing ran and had nothing to draw. **Here the drawing never ran**, and what reached the page was the source it was meant to replace.*
