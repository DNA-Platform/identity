# The Press That Replaced the Book

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **keywords:** library · framework · rebind
- **sprint:** [Sprint 101](../projection/106-sprint-101--the-design-into-the-semantics.md#where-things-stand)

---

## Symptoms

**A press on a tone switched the bar from the soft black to white — and the probe that held the tab, the book and the leaves before the press found none of them in the document after it.** The tab it held read `aria-pressed="false"`; a fresh query found a new tab reading `true`, a new book element whose class list had the tone first, and zero mutations recorded inside the leaves, because the observer was watching a node no longer on the page.

```
{"before":"rgb(12, 27, 31)","after":"rgb(255, 255, 255)","heldTabStillInDocument":false,"heldBookStillInDocument":false,"heldLeavesStill":false,"freshPressed":"true","mutationsInLeaves":0}
```

**As the control:** the story's `night` paper — a theme — and the design book's `outline` — a Format — did the same; the manual's `code forward` too. Every switch in the library had been remounting the whole book since Sprint 100, and nobody had counted. Doug's standing rule: *"a change costs one paint; green without render counts is not green."*

## What it turned out to be

**A Format is a container.** `$Format.defines()` adds its styled component — or its theme provider — to the writing's containers, and `$Writing.view()` wraps the element in each container in turn. A Format given through `$is` is expressed *in front*, so its container is one more wrapper in the stack. React reconciles by position and type: a new component at a position remounts the subtree beneath it. The book's whole content — regions, chapters, every figure — was that subtree.

**And expression is not enough to avoid it:** a Format present but un-expressed has had its container reverted, so toggling it toggles the stack just the same.

## How it was found

By a probe written for the acceptance example that asked for it — *one press switches the tone; nothing is redrawn differently, measured* — which held references to three nodes before the press and asked `document.contains()` after. The first version counted mutations and saw none, which read as success until the held tab's `aria-pressed` disagreed with the fresh one.

## Why no gate caught it

The page looked right after every press. Sprint 100's record says *"a press on night or white changes the paper and nothing else, one lit at a time"* — true of what was seen and false of what was done. No suite counts renders on a press; the one measurement that exists is this probe.

## The repair, and the rule it leaves

**Anything a reader presses adds a class, and the rules that read the class live in a container that is always there.** A tone, an arrangement, a paper, a reading and the outline became annotations of one kind — each adding a class, each standing down for the one said after it as `$Theme` does — with their rules in the theme's parts or in the one layout every book is given at `$Define`. Measured after: the held nodes stay, the book's class changes once, and the only nodes replaced are the `Code` figure's own lines, which the framework's figure re-inserts on every draw whether or not its text changed — a pitch for `.public`, not this library's.

**The rule reaches the framework too, and is pitched, not changed:** a container un-expressed could render as a pass-through rather than leave the stack, and the `Code` figure could keep its highlighted HTML while its text is unchanged. Until then, a Format is given by a class at `$Define` and never by a press.
