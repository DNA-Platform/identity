# The Button That Read Outside the Draw

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **keywords:** library · framework · untracked-read
- **sprint:** [Sprint 103](../projection/108-sprint-103--the-manuals-page.md#where-things-stand)

---

## Symptoms

**After the manual was rebound on the chemistry that fixed the cascade, every switch, tab, chevron and file press showed the state it had at load, and kept it.** A press on *light* added `pa-light-code` to the book and the code panels changed; the option's button still said `aria-pressed="false"`. A fold wrote the section's `$is`; the chevron stayed unturned. No error anywhere, and the fold itself had just fallen from 3,278 ms busy on the dev serve to about 200. Doug: *"Sounds like maybe the $Chemistry team didn't fix anything"* and *"If it broke you, maybe it was the wrong fix."*

## What it turned out to be

**A container drawn by React, not by the chemical.** `$Writing.view()` chooses its Container inside the draw and hands it an id, a className and children ([Writing.tsx](../../package/src/writing/Writing.tsx)); React calls a function Container after the draw has returned, with no drawer set, so `noteRead` subscribes nobody ([scope.ts](../../../chemistry/package/src/implementation/scope.ts)). The switch's `_button`, a closure made in its bond constructor, read `book.$is` through `aria-pressed={this.on}` inside that element. Before chemistry's cascade sprint every write redrew every chemical and every plain component beneath it, so the untracked read was refreshed by the cascade; the memo of [The Cascade](../../../chemistry/.lib/projection/49-sprint-102--the-cascade.md) answered the switch's cached view, React bailed out of the subtree, and the closure never ran again. **What the manual had silently relied on was the cascade.** `.public`'s own `$Parenthetical`, `$Date` and `$Reference` made components in their bonds the same way and read only text, which never changes after bind, so they never showed it.

## How it was found

First by brute force, and withdrawn: `[memoize] = false` on `$Switch` made every control correct, and Doug refused it — *"don't brute force it. Why did we lose reactivity from first principles."* Then from the two defining lines: a `$()` lift of the closure also fixed it, because `$Function$` calls the function inside its own draw with itself as the drawer ([chemical.ts](../../../chemistry/package/src/abstraction/chemical.ts), the class's comment says so), which proved the mechanism and was the wrong seam, since it kept the closure and brought the off-switch back on the wrapper.

## Why no gate caught it sooner

The suites run the test library's promises, none of which reads a pressed state across a write; the manual's switches had been correct under the cascade since Sprint 97; and the chemistry that changed reached the manual by a rebuild of the dist, not by any change in the manual.

## The repair, and the rule it leaves

**`container(props)` on `$Writing`:** one method `view()` calls in the draw with the id, the classes and the children, overridden by a kind to say its own attributes as typed JSX and hand the rest to `super`. Doug, 2026-10-08: *"Make it a method, at least, on a class, and treat the method like a function component. That would be the $Chemistry way - template methods that can be overridden"*; *"I want strong typing on the attributes."* The switch, the twist, the listing and the file are overrides; Date's `time` tag carries `dateTime` the same way; every lift and bond-made button is gone. **The rule, in [the coding style](../the-coding-style/03-the-coding-style.md) and [How Writing Is Extended](../writing/06-how-writing-is-extended.md#the-seams): a container or a layer reads nothing at draw time. What varies is said as a class by an annotation's `defines`, which runs in the draw, or as an attribute by the kind's `container`; a layer that must read is a chemical, as `$Provider` is.** A bond-made layer that reads bind-time facts, as Reference's anchor does, is sound; one that reads reader state meets this chapter.
