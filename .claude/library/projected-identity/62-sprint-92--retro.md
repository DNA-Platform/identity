# Sprint 92 — Retro

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The sprint that replaced the brittle driver and proved the `/think` **write** half live. Closed with a [tending discussion](../teamspeak/06-tending.md) on why clean code was so hard to write here, and what keeps it clean.

## What shipped

- **The App Driver refactor.** The god class is gone. `Claude` holds the window + a page factory, nothing else. One abstract [`Page`](../reference-desk/13-the-redesign.md#class-catalogue) with `sidebar()`; four concrete pages (`HomePage`, `ConversationPage`, `ProjectsPage`, `ProjectPage`) that return each other from navigation. `Composer.send(): ConversationPage`. Every parametered View method deleted except the ones that type (`type`, `search`, `rename(name)`). Controllers keep all UIA names — the only legal home for a string. App-core compiles clean (0 errors), and the [dispatch resource](../thoughtfulness/02-the-thought-lifecycle--dispatch.ts) typechecks against it: the spec became an interface.
- **The modal modeled as a thing.** `MoveConversationModal` (UIA "Move chat") is non-unitary — a project list plus a search bar — not a one-shot `select(name)`. `ConversationMenu.rename(name)` types straight into the inline field and commits with Enter; `EditField`/`confirm()` was deleted because a rename field has no confirm button (decision #3, reversed).
- **Selectors grounded in captured trees.** New legal-navigation captures: [conversation-menu](../../src/trees/conversation-menu.txt), [move-conversation-modal](../../src/trees/move-conversation-modal.txt), [conversation-rename-field](../../src/trees/conversation-rename-field.txt). `isRenameFieldActive` upgraded from a guess (`!isMenuVisible()`) to a real sensor (`Edit | Rename`).
- **The WRITE half, proven live, end to end:** navigate to the Claude project → not found → new chat → send → wait for streaming → rename to the topic → open the Move modal → select Claude → minimize. Acceptance tests #1, #8, #9 crossed off.
- **Two separate processes.** `think.ts write` and `think.ts read` are distinct invocations, never chained; the write ends at streaming-true and `process.exit`s; read is a non-blocking check-and-read that reports `NOT READY` so the teammate tends and re-runs. The [checklist](../our-skillset/20-think.md) was re-pointed from the deleted `test-think-dispatch.ts` to `think.ts`.

## What the discussion revealed

**Clean code here answers to three kinds of truth, and the type checker guards only one.**

1. **Structural — the model must match the screen, not our categories.** Every abstraction we had to delete (god class, `ComposerPage`, `TailedAnimal`, `EditField.confirm()`) was tidy in the type system and *absent on screen*. The app has a textbox and an Enter key, not an "edit field with a confirm button." Model the affordances, not your convenience.

2. **Perceptual — the verify must match the tree, not our assumptions.** Send *worked* while its verify failed for 30s because an empty composer reports its placeholder `"Write a message…"` as its value: `readDraft() === ''` is clean code that is wrong about reality. The reality boundary lies; ground every signal in a captured tree (we re-grounded send on *the Send button is gone*) or in proven history.

3. **Temporal — the lifecycle must match the turn.** The last real bug was not logic: a dispatch that *succeeded* lingered to its 300s timeout instead of exiting. "The first ends" — clean code includes termination. The two halves are two processes so the write ends, the teammate works, and only then does read run. One blocking function would have re-created the Sprint 87 "app open, generating, turn dropped" failure.

**Why it was hard:** three truths — structural, perceptual, temporal — and only the first is machine-checked. Doug guarded the other two by hand, ~20 corrections, until we internalized them. **What keeps it clean:** the `///:` annotation is the forcing function — code written without the Reference Desk open lets the docs rot silently (the catalogue still said `addToProject(): ProjectPicker` long after the code moved). Code ↔ docs ↔ captured trees, in lockstep. The brittleness that remains is the environment's, not ours — change the app, re-capture one tree, diff, and the break is exactly visible.

## What is NOT yet proven (Sprint 91's "done has a truth-condition" holds)

The write half ran live. The **read half** and the **clean `process.exit`** are coded and typecheck, but not yet *witnessed* live. That is the opening of Sprint 93, which is itself the act of running the real loop.

See [Sprint 93 — Claude Thinks for Real](63-sprint-93--claude-thinks-for-real.md).
