# The parent that changed on screen

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** framework · demo · missing-parent · render
- **sprint:** [The Subject](../projection/09-the-subject.md)

---

## Symptoms

- The shelf page failed to load with **"this.book.at is not a function"** from the contents' row-building — after the same book code had passed the whole suite.
- The failure appeared only when the contents was **rendered as an element inside another chemical's view** — model-level tests on the same instances were green.

## What did not work

- **Fixing it in the app subclass.** The first compute was written on the shelf's own contents class; the same failure then surfaced for the plain contents of another book. The mechanism is general, so a subclass fix just moves the next crash.

## The mechanism

A chapter's `book` is one hop: `this.parent as $Book`. But the standing law from Sprint 47 is that **an element's parent is the chemical that interprets it** — and on screen, the thing interpreting a rendered element is *whatever rendered it*. Render the contents inside a page-switching chemical, and its parent becomes the page switcher. One hop up is no longer the book; it is the screen's arrangement of the moment.

So any member that reaches through `parent` tells the truth at binding and can lie at render.

## The fix

[`$TableOfContents.book`](../../package/src/book/TableOfContents.tsx) computes to the **nearest `$Book`** — the same guarded walk `$Canonical` uses: follow `parent` upward, stop at a book, give up safely on a cycle or a dead end. And `parts()` now says plainly, when it stands under something that is not a book, what it found instead — an error that names the wrong parent beats a property access exploding two reads later.

## The lesson

**One hop of `parent` is a bind-time fact, not a render-time one.** A member that needs its book must compute to it. The pair to hold together: [chapter 07](07-the-contents-that-failed-before-adoption.md) is this same reach failing **before adoption** (the parent does not exist yet); this chapter is it failing **on screen** (the parent has been replaced). Both end the same way — derived members answer through a guarded compute, or answer `undefined`, and never trust the single hop.
