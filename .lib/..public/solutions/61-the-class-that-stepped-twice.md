# The class that stepped twice

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `framework` · `descended-class` *(proxy name, flagged for Doug)* · a relative rule applied at two levels · a measurement blind to its own property

---

## Symptoms

- ***A table of contents stepped by 48px per level where the rule said 1.5em, and by 96px at the second level where it said 3em*** — **exactly double, at every level, with the computed `margin-left` on the paragraph reading the correct 24px.**
- ***Before that, the same rule looked as though it had not taken effect at all*** — every entry measured at the identical `x355`, **and it had taken effect**; `getBoundingClientRect().left` is the box edge and `padding-left` does not move it.
- ***And a third, in the same contents:*** the levels read **355 / 379 / 427** — a ladder with one rung the wrong width, because every entry *but the first* also carried the paper's 23.4px first-line indent.

## The mechanism — ***a class handed to a holder is worn by everything the parse makes under it***

`$Book.contents()` writes each entry as `<Paragraph indent={entry.indent}>`, and the `$indent` prop becomes the class `pd-indent-1`. The rule was declared on the class alone:

```ts
@select('.pd-table-of-contents .pd-indent-1') stepped_marginLeft = '1.5em';
```

The DOM says why that doubles:

```html
<p class="pd-paragraph pd-indent-1">
  <a href="#..." class="pd-sentence pd-phrase pd-ref pd-indent-1">The Importance of P versus NP</a>
</p>
```

**The paragraph's own prop-class is on the anchor too.** A paragraph parses into sentences, phrases and a ref, and each part is made carrying the holder's props — so a class derived from a prop is worn at *every level beneath the writing that was handed it*. A descendant selector naming only that class matches the paragraph **and** its anchor, and a *relative* property — margin, padding, indent — **compounds down the chain**. An *absolute* one (a colour, a weight) would have been invisible: the inner value simply restates the outer.

## The fix — ***name the element the prop was given to***

```ts
@select('.pd-table-of-contents p.pd-indent-1') stepped_marginLeft = '1.5em';
```

The indent belongs to the paragraph, so the selector says paragraph. Driven: **355 / 379 / 403** in the LaTeX reading and **360 / 384 / 408** in markdown — one 24px ladder, three levels, fourteen entries, matching the document's own nesting in both.

## What this costs to know

**A `pd-` class is not a handle on one element.** Where it comes from a kind it is; where it comes from a **prop** it names the writing *and everything the parse makes inside it*, and the two cases look identical in a stylesheet. The tell is that the property is relative: **if a rule would compound when applied twice, the selector must name the element, not the class alone.**

*The third symptom is the same sentence from the other side.* `p.pd-paragraph { text-indent: 1.463rem }` is right for prose and wrong for a contents entry, which is a name and not a paragraph of prose — and the article theme was carrying it, along with the whole cover hierarchy, as though a first-line indent and a title bigger than its author were things **LaTeX** does rather than things a **document** does. Both moved to the base sheet. The article theme is 11 `@select` groups where it was 19.

## And the measurement was wrong before the code was

The first reading — *every entry at `x355`, the rule dead* — was **an instrument fault reported as a finding.** The property under test was `padding-left`, and `left` is the border-box edge, which padding never moves. Nothing was broken; the probe could not see the thing it was pointed at.

**Measure the property you changed, not a proxy for it.** `getComputedStyle(el)[property]` would have answered in one call; three rounds of rebuilding went past looking for a stale server that was not there. *This is the second time this session that a real effect was read as a dead rule — the first was a rule that had genuinely never emitted, which is exactly why the false one was believed.*

## Related

- [The rule that stopped running and the suite improved](54-the-rule-that-stopped-running-and-the-suite-improved.md) — a green number meaning the opposite; here, a stationary pixel meaning the opposite.
- [The demand that was made twice](60-the-demand-that-was-made-twice.md) — the same shape in the type chain: a child carries its parent's types, so a rule stated once ran twice.
