# The supply a base made for everyone

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `framework` · `inherited-supply` *(proxy name, flagged for Doug)* · a heading nobody wrote · one fix applied five times, four of them late

---

## Symptoms

- ***An aside, a theorem, a table and a summary each drew their own first sentence as a HEADING above themselves, elided with an ellipsis, and then said the whole thing again.*** **"An aside, which a paper sets in the margin and a README sets…"** set as a section heading, with the same sentence beneath it as prose.
- **Every one of them was invisible in the document being worked on** — the paper writes no asides, no theorems and no tables — *and all four appeared the moment a page was written that drew one of everything.*

## The mechanism — ***a base does not only DECLARE, it SUPPLIES***

`$TypeOfSection.supplies()` reads a heading out of a section's first sentence when none is written. **That is a good design and Doug's own** — *a section states that it opens with a heading, and rather than refuse prose written without one, it reads one out of what it already holds and consumes nothing.*

***It is right for a SECTION and wrong for everything that merely extends one.*** **An aside is a box, a theorem is a statement, a table is a grid, a summary stands for the whole — none of them opens with a title**, and all four extend `$Section` because that is the composition level they sit at.

**The waiver was not enough, and that is the part worth keeping.** *`$Quote` had already met this and its record says so: it waived the RULE — `$opensWithHeading` returns false — and still drew the heading, because* ***the rule and the supply are two statements of one demand and both have to be answered.***

## The fix — ***the idiom already existed***

```ts
override supplies(writing: $Writing, parts: $Writing[]): $Writing[] {
    return parts;
}
```

*Four lines, four times. Headings on the probe page fell from 20 to 14.*

## What this costs to know

**A base class that supplies something on its subclasses' behalf is a different inheritance than one that declares a member**, *and it is invisible at the extension point: nothing in `$Aside` mentions headings, so nothing in `$Aside` looks wrong.* ***The question to ask of any base seam is not only "what does this declare?" but "what does this ADD, and to whom?"***

**And the reason four instances waited for a probe page:** *a supply only misfires where the kind is USED, and a document that never writes an aside never sees it.* ***A demo is evidence of what it draws and silent about what it does not*** — which is the whole argument for [a page that draws one of every kind](../projection/60-sprint-54--the-paper-pixel-by-pixel.md#probe).

## Related

- [The demand that was made twice](60-the-demand-that-was-made-twice.md) — a rule stated in two places and answered in one; this is a rule and a SUPPLY stating the same demand, answered in one.
- [Reading the Source](../writing-a-book/02-reading-the-source.md) — the other half of the same day: what a demo demonstrates is exactly what it contains.
