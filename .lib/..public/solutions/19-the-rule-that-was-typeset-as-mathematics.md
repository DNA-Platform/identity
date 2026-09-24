# The rule that was typeset as mathematics

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

**keywords:** `demo` · `model` · `absent-case` · `wrong-altitude`

---

**Two defects were shipped green in one sprint and neither could have been caught by any gate that ran, because one had nothing in the corpus to fire on and the other had nothing in the timing.** Both were found in the same driver run, the moment the sprint's own changes altered the conditions. Filed together because they are one mechanism wearing two faces: **a gate's scope includes what it ran against, and content and timing are both part of that.**

This is [the green that exercised nothing](14-the-green-that-exercised-nothing.md) one turn further out. There the gates were not checking and said nothing about it. Here the gates *were* checking, correctly, over material that could not exercise the defect.

## The first — a thematic rule drawn by katex

**A horizontal rule in prose was being typeset as display mathematics.** Every figure the demo drew went through one path, and that path was katex.

The framework had been cut back so that `$Figure` is the thing added at paragraph grade — a caption, valid because it carries one, with `drawn()` returning nothing and a subclass overriding only that. Correct, and Doug's ruling. But the demo had been drawing *figures* through katex on the assumption that a figure was display mathematics, and once the framework shipped no kinds beneath `$Figure`, **every figure the notation produced landed in the mathematics path** — a picture, a rule, anything.

**Both drivers were green. Both were right.** `verify-book` walks 51 checkpoints and `verify-demo` 25, and not one driven page contained a `---`. The defect was live, deterministic, and invisible.

**Found by writing the fix for something else.** Declaring `$Equation` and `$Rule` in the demo — so a book states its own figure kinds — was scoped as ordinary demo work. Rendering a rule for the first time is what made the bug appear.

**The fix is where the ruling already pointed:** the framework ships no figure kinds and the demo declares its own. A base class with a single draw path silently captures every subclass its consumer never declared, and *silently* is the whole problem — there is no error in drawing a rule as mathematics, only a wrong picture.

## The second — a turned page that opened nine pixels down

**`MANIFOLD: a turned page opens at its head` went red with `scrollTop` at 9 instead of 0**, repeatably, in the same run that caught the first.

`head()` reset the scroll inside a `setTimeout(0)`. Two things can beat it: the turn may not have **painted** yet, so the reset runs against the old page; and `light()` leaves a `scrollIntoView({behavior: 'smooth'})` **still animating**, which then carries the freshly turned page a few pixels down *after* the reset landed.

**It was latent for as long as the guess about ordering happened to win** — and this sprint's extra render work is what made it lose. The reset now waits two animation frames and **jumps rather than glides**:

```ts
head() {
    requestAnimationFrame(() => requestAnimationFrame(() => {
        document.querySelector('.page-body')?.scrollTo({ top: 0, behavior: 'auto' });
    }));
}
```

**Confirmed by running both drivers twice** after the fix, because a race that stops reproducing is not the same as a race that was fixed.

## The lesson

**A gate states what it ran against, and its corpus is part of that.** [Chapter 14](14-the-green-that-exercised-nothing.md) established that a suite says which build, a typecheck which files, a driver which server. This adds: **a driver also says which content.** *"51 checkpoints, zero page errors"* is true and says nothing about a case no page contains.

**The question that catches it:** when a framework class stops distinguishing kinds, ask *which kinds does the demo actually render on a driven page?* — and if a kind exists in the notation but nowhere in the corpus, it is unexercised, not working. **The cheap fix is corpus, not assertion:** one `---` and one `$$…$$` on a driven page would have caught this the day it landed, and neither costs a checkpoint.

**And a timing guess is a defect that has not fired yet.** `setTimeout(0)` against a render is a claim about ordering that nothing enforces. It is not flaky code that became broken — it was always broken and had been winning a coin toss.

<!-- citations -->
