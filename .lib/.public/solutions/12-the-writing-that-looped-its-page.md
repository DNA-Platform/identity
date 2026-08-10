# The writing that looped its page

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** framework · render-loop · rebind · props · scope
- **sprint:** [Writing](../projection/10-writing.md)

---

## Symptoms

- **A page written with a specialized inline element threw *"Too many re-renders. React limits the number of renders to prevent an infinite loop."*** — during render, not in an effect.
- **The specialized element never appeared.** Counted: the host rendered 41 times and **the child rendered zero.**
- It happened **only** when the element stood inside another chemical's writing. The same class rendered on its own was fine.
- It had been carried for two sprints as *"a subclass that declares its own props and overrides a method its `view()` calls will not render"* — **and that law is false.** That exact shape renders perfectly on its own.

## What did not work

Four routes had been tried and filed, each failing differently, and none of them was the cause: hoisting the array prop out of render, removing the derived getter, suppressing the sentence parse, replacing the array with a scalar. Reading the reconciler suggested a fifth theory — that `equivalent()` refuses class instances — which is true and was **not** the mechanism.

## The instrument that settled it

Four cases, one variable each, run against a rebuilt `dist`:

| case | result |
|---|---|
| inline child **passed a prop**, inside a block | **loops** — host 41, child 0 |
| inline child, **no prop**, inside a block | fine |
| the same child **standing alone**, passed a prop | fine |
| prop **declared but not passed**, inside a block | fine |
| **block-level** child passed a prop, inside a block | fine |

Then a probe printed identities across renders:

```
loops:   this=#1  text=#2  component=fn#1  elements=#3,#4,#5
         this=#1  text=#2  component=fn#1  elements=#6,#7,#8
         this=#1  text=#2  component=fn#1  elements=#9,#10,#11   never settles

fine:    this=#15 text=#16 component=fn#2  elements=#17,#18,#19
         this=#15 text=#16 component=fn#2  elements=#20,#21,#22
         this=#15 text=#16 component=fn#2  elements=#20,#21,#22  settles
```

**The instance, the block and the component are all stable.** What churns is the children: the bond rebuilds them each render. Without a prop they settle on the second pass; with one they never do.

## The mechanism

**Props are construction, and they were being recorded as mutation.**

A chemical written inside another chemical's writing is **built during that chemical's render** and handed its props there, in [`$Bond.bond`](../../../chemistry/package/src/abstraction/chemical.ts). For a freshly built child the `lastProps` guard is empty, so every prop is a change; the reactive setter records the write into the **running scope**; the scope finalizes dirty; the host renders again; the child is built again. Round and round.

The framework already had the idea — the setter returns early when `this[$rendering$]` is set, which is how it says *this write is not news*. The flag was simply never raised for the one write that is never news: **the assignment of props at construction.**

## The fix

Raise the rendering flag for exactly the length of the prop assignment, in the bond. Five lines, one guard, and no new concept — the framework's own way of marking a write as construction.

**It is not in the setter.** Guarding there on *"the chemical has not mounted"* looks equivalent and is not: it silently drops real mutations of an instance rendered through a lens, and chemistry's own perspectives suite catches it. The narrow site is the only correct one.

## The lesson

**A filed law is a claim, and claims decay.** The recorded rule named the wrong cause — props and overriding — and named it confidently enough that nobody re-tested it for two sprints, which is exactly how a wrong law survives: it is *close enough* to the symptom to keep predicting it.

The habit that caught it: **isolate one variable at a time and write the table down.** Five cases, five minutes, and the true rule fell out — *inline, passed a prop, inside a block* — which no amount of reasoning about the reconciler had produced. And when the theory that reading suggested turned out to be true-but-irrelevant, that was a signal to keep instrumenting rather than to start fixing.
