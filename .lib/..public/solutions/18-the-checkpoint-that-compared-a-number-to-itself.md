# The checkpoint that compared a number to itself

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** verification · driver · false-green · demo · silent-default
- **sprint:** [The Parse](../projection/13-the-parse.md) · [Custom Elements](../projection/17-custom-elements.md)

---

## Symptoms

- A driver checkpoint passed and was **reported to Doug as evidence**: *"MANIFOLD: the model reads at every altitude and the count cannot move — 260 words as paragraphs, 260 as words."*
- It was green on its first run and every run after.
- **Doug read the sentence and asked what it meant.** *"What is 260 words as paragraphs? Like this? Word / One / Two / Three. If so, yes I agree. If it's a block of 260 words, that would be one paragraph right?"*
- Nothing failed. There was nothing that could have.

## What did not work

**Running it.** The checkpoint ran, passed, and printed a number that looked like a measurement.

**Watching a gate go red**, which is this branch's own habit for exactly this — [and it would not have helped](14-the-green-that-exercised-nothing.md). Breaking the *parse* would have changed both numbers together, and the check would still have passed. There was no breakage reachable from the code that could have turned it red.

## The mechanism

The view rendered **one getter** beside four different lists:

```tsx
<span>{`${r.chapter.words.length} words · read as ${altitude}`}</span>
```

Switching altitude changed the **rows** and never re-derived the **count**. So the driver's

```js
atWords === atParagraphs
```

compared the result of one expression to the result of the same expression. It was true by construction, and it would have stayed true against a parse that was wrong at every level.

**The claim it appeared to make was real and worth making** — one writing, four altitudes, the readings agree. **The claim it actually made was that a getter is stable.** The sentence in the report was accurate about the numbers and false about what they showed.

## The fix

**Each altitude walks its own count**, four genuinely different ways down through the model:

```tsx
if (altitude === 'sections')   return c.parts().flatMap(s => s.words).length;
if (altitude === 'paragraphs') return c.paragraphs.flatMap(p => p.words).length;
if (altitude === 'sentences')  return c.paragraphs.flatMap(p => p.sentences).flatMap(n => n.words).length;
return rowsAt(c, 'words').length;
```

And two further checkpoints that **can** fail, both of which would have caught the original defect immediately:

- **the rows must differ at every altitude** — fewer sections than paragraphs, fewer paragraphs than sentences, fewer sentences than words;
- **the word altitude prints one row per word.**

Driven: *260 words through **4 sections, 11 paragraphs, 17 sentences, 260 words**.*

## The lesson

**A checkpoint that cannot fail is not a checkpoint.** Before trusting a green one, ask the question the runner cannot: **what would have to break for this to go red?** If the answer is *nothing reachable from the code*, it is decoration, and it is worse than nothing because it is reported as evidence.

**The shape to look for is an identity dressed as an agreement.** Two things are only corroborating when they are computed by **different paths**. `a === a` passes; `a === b` where `b` is `a` under another name passes just as confidently. The stronger the sentence in the report, the more worth checking that the two sides were ever apart.

**And the smallest useful version of the rule:** a corroboration test must name **two walks**. If you cannot say what the second walk was, there was one.

*Doug caught this by reading the screen and asking what the number meant. That is the review's job, and it is why the [demo is a stop condition rather than a closing flourish](../../../../.claude/library/our-skillset/33-ce-review.md) — a number nobody has interrogated is a number nobody has checked.*

---

# TWO WALKS WERE NOT ENOUGH — a second appearance, from [Custom Elements](../projection/17-custom-elements.md), 2026-08-18

***This chapter's own rule was satisfied and the green was still not evidence.***

## Symptoms

- A promise in the demo compared a **hand-written** parallel text against the **same text found in the notation** — two sides built by genuinely different paths, each the oracle for the other, exactly the shape [the lesson above](#the-lesson) asks for.
- **Green on every run**, for as long as it had existed.
- **It went RED when a defect was fixed.** Nothing about the promise changed; a custom element stopped dissolving, and the assertion broke.

## The mechanism — two one-word errors with opposite signs

**The two sides are deliberately unequal in one place.** Their titles *label* them — *Written by hand* against *Found in the notation* — so the found side carries **one word more** by design.

**And the written side was one word short**, for an unrelated reason: its `<Link>` was being dissolved into two plain words instead of standing as one part.

```
found      title +1 word   (by design)
written    link  +1 word   (by defect)
                  ─────
whole-text comparison       equal
```

**So the assertion was comparing two quantities that could never honestly be equal, and a defect was supplying the compensating error.** Fixing the dissolution removed the compensation, and the promise reported a difference that had been there since the day it was written.

## The fix

**Compare the bodies, not the whole.** `parts().slice(1)` drops the titles, because the titles are the one region the two sides are *supposed* to differ in — and the oracle stays each side for the other, so nothing is hand-written and neither side can go stale.

*The reason is written into [the promise itself](../../.archive/app/src/markdown/parallel.test.tsx), so nobody widens the comparison back.*

## The lesson, and it sharpens the one above rather than repeating it

**Two walks is necessary and it is not sufficient.** *A corroboration test must name two walks* was the rule, and this promise named two. What it did not do is check that the two walks were comparing a region where **equality was actually claimed**.

**A comparison that spans a region the two sides are designed to differ in carries a built-in error term** — a permanent, known offset the assertion never subtracts. Such a promise cannot be green honestly. It is green only while something *else* is wrong by the same amount, which means **its green is a report about a second defect** and nobody can tell by looking.

***And the tell is worth more than the rule: a promise that goes RED when you FIX something was measuring the defect.*** That is not a regression to investigate in the code — it is the promise identifying itself. **The first question is not what broke; it is what the assertion had been true about.**

## See also

- [The green that exercised nothing](14-the-green-that-exercised-nothing.md) — the same family. There the number was true and its **scope** was silent; here the number was true and its **derivation** was circular.
- [The requirement I invented, and then failed](15-the-requirement-i-invented-and-then-failed.md) — the other defect in this book where the measurement, not the code, was the thing that was wrong.
