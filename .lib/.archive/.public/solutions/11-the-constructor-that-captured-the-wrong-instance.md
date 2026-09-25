# The constructor that captured the wrong instance

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** demo · render · double-construction
- **sprint:** [The Subject](../projection/09-the-subject.md)

---

## Symptoms

- Clicking a book's entry did nothing — no error, no page change. The click handler ran; the screen stayed.
- The handler reached the page switcher through a module variable: `route = this`, assigned **in the constructor**, with the handler calling `route.pull(card)`.
- Model-level behaviour was fine; only the live page ignored the clicks.

## What did not work

- **Making the mutated field a `$`-backing.** The field was fine; the *instance* was wrong.
- **Restarting the dev server.** Fresh graph, same silence.

## The mechanism

React's development mode **constructs a component twice** and keeps one. A constructor that registers `this` somewhere — a module variable, a wiring slot — runs twice too, and the variable ends up holding whichever construction ran last, **which is not necessarily the one React kept**. Every click then faithfully mutated an instance that no view would ever re-render.

## The fix

Register in `view()` instead: its first line is `route = this`. Only an instance that is actually rendered runs its view, so the variable always names the one on screen. (Assigning a plain module variable during render is safe — it is not reactive state.)

## The lesson

**A constructor knows it ran; it cannot know it was kept.** Anything that hands `this` outward — registries, wiring slots, callbacks — belongs in a path only the surviving instance runs, and `view()` is the one place a chemical is guaranteed to be the one being looked at.

***And it has a sibling one fact along.*** **[A key that filed itself under its descendant](27-the-key-that-filed-itself-under-its-descendant.md)** is the same shape with a different unknown: *an inherited method knows it ran; it cannot know **who declared it**.* **Both are a constructor answering a question about itself that `this` cannot answer.**
