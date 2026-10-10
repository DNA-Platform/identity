# The Component the Layer Drew Without a Parent

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **keywords:** library · missing-parent
- **sprint:** [Sprint 106](../projection/111-sprint-106--the-manual-spread-out.md#u4)

---

## Symptoms

**`Cannot read properties of undefined (reading '$is')` on the manual's first draw, from a tab inside the file panel's bar.** The manual's regions had just become nouns of their own, a panel, a bar, a rail and a grip, each a paragraph with a `write()`, drawn by the manual's layer around the chapter's words. The bar drew its tabs, a tab read `this.book!.$is` to say whether it was pressed, and `this.book` was undefined: the tab had a chapter in the document and none in the model.

## What it turned out to be

**A chemical gets its parent from the chemical that lifts it, and a Format's layer is not a chemical.** The lift gives a made component its parent from the context parent it was lifted in ([particle.ts](../../../chemistry/package/src/abstraction/particle.ts), line 432, `$lift(parent, contextParent, bond)`, and lines 485 to 486, where `made[$parent$]` is set from the context parent); `this.book` walks that parent chain. A writing's `view()` wraps its drawing in its layers as plain React elements, `layers.reduce((drawing, Layer) => <Layer className="pd-container">{drawing}</Layer>, …)` ([Writing.tsx](../../package/src/writing/Writing.tsx), line 65), so a component the layer draws beside the drawing is React's child and no chemical's: there is no context parent to set, `$parent$` stays unset, and the chain ends at the component itself.

**The fix is to hand the model object the component needs, which is the chapter:** the manual's layer draws `<FilePanel chapter={chapter} />`, `<FileRail chapter={chapter} />` and the grip the same ([10-the-manual~code.tsx](../../../../.me/.manual/10-the-manual~code.tsx), lines 127 to 130); the panel hands its bar the chapter, and the bar hands it to each tab and switch. Every region reads the chapter it stands in through `this.chapter` and the manual through the chapter's annotations, and nothing else is handed down. The plan had named this risk, *a component drawn by a layer not finding its chapter through the tree, met by handing the chapter as the model object it is*, and that is what was done.

## How it was found

On the workbench, on the first look after the regions were written: the error named the tab's line, and `this.book` traced to `this.parent`, which was undefined on a component the layer had drawn and set on every component a chemical had.

## Why no gate caught it sooner

**Every component the library had drawn until then was drawn by a chemical's `write()`, where the lift sets the parent, and the first one drawn by a layer was this one.** A layer is a Format's styled element, the one place in the library where React draws a chemical without a chemical above it. The rule, written into [How a Book Is Laid Out](../writing-a-book/01-04-how-a-book-is-laid-out.md): **a writing a Format's layer draws is handed its chapter**, and reads everything else through it.
