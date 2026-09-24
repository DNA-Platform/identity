# Composition

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Written 2026-09-22 with the unit, to [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md); the code is [`src/writing/Composition.tsx`](../../package/src/writing/Composition.tsx), the promises [`.tests/composition.test.tsx`](../../package/.tests/composition.test.tsx).***

---

## What it is

**A Composition is a Writing that structures the contents of a book: it has a level, it reads its parts out of its contents, and it knows its depth and its canonical.** Doug, 2026-09-22: *"$Composition will be a type of writing that will structure the contents of a book in a .public library, whereas Annotations will be used to customize them."* The Genesis gives it at E4 and E7, and the record of how it evolved, event by event, is in [Sprint 79](../projection/85-sprint-79--composition.md#the-genesis-read-on-composition). Every member cites its event or ruling.

| member | what it is | cited |
|---|---|---|
| `level` | the grade, a reading of the first expressed Level annotation, 1 until one says otherwise — *"shouldn't level technically be a getter to its Level annotation?"* — Letter 1, Word 2, Sentence 3, Paragraph 4, Section 5, Chapter 6, Book 7, level zero being React, implicit. **The names are metaphors for the KIND of unit at each position and measure no text** — [the hierarchy is literal and abstract at once](09-word-sentence-and-paragraph.md#abstract) | E4, E10; ruling 3: *"Letter is 1. Number up from there letter – book. level zero is implicitly non-compositional React"*; ruling 2026-09-24: *"we are using these concepts at a metaphorical level"* |
| `parts` | computed: the compositions among the contents, in order, a child of the same class not returned but its parts flattened in; other writing and what is not writing are not parts | E7, E26, E27; ruling 1: *"the thing typed to $Composition that can be extracted from the contents… Compositions contain compositions"* |
| `composition` | the parent when it is a composition, else none: the property that types the parent, as Heading's `section` does; `depth` reads through it and no cast remains; the name is a PROXY, his to change | ruling 13: *"If we know what the parent is, create a property that types the parent. Like we did with heading"* |
| `depth` | computed: one more than a parent of the same class, else 0; a consequence of compositions holding their own kind | E7, E10; ruling 4: *"Depth is a consequence of the recursive nature of compositions, and how parts read through them"* |
| `canonical` | computed: the first part, none when there is none; a class with a typed canonical overrides it to find its own | E7, E34; ruling 1: *"just a computed property that defaults to the first part, which is the first Composition in contents"* |
| `specification` | `new CompositionSpecification()`, a simple property, Writing's reassigned — *"We don't override those"* | rulings 4 and 6 |

**The five annotations in its file**, since *"the essential annotations for a component like Composition live in the file itself"* (ruling 3):

| annotation | what it regulates | `specifies` | cited |
|---|---|---|---|
| `Level` | nothing; it carries the number written inside it, `<Level>5</Level>`, which its composition reads | — | ruling 3: *"`<Level>5</Level>` is the recommended way. This is something that is painful to change"* |
| `Strict` | takes every Permissive beside it out of expression, in its `defines` | said of a composition and of nothing else, throwing on any other writing; every part at the level or one below | E6; ruling 13: *"Throw I think. I prefer exceptions"* |
| `Permissive` | takes every Strict beside it out of expression, in its `defines` | said of a composition and of nothing else, throwing on any other writing; every part at or below the level | E6; ruling 13 |
| `Open` | takes every Closed beside it out of expression, in its `defines` | — | E12 |
| `Closed` | takes every Open beside it out of expression, in its `defines` | every content is writing | E12, E13 |

**None of the four has a `defines`.** A pair says which of two the composition is, and that is a question of expression, not a trait written onto the writing; so each takes its opposite out of expression in the regulation phase and says its constraint in `specifies`, and the composition reads the answer with `is`. Because expression is computed at every pass, a pair given through `$is` and then taken away leaves the class's own default expressed again.

**`CompositionSpecification`** extends Writing's and adds nothing yet: Writing has no rule that it holds only writing, Closed carries that for a closed composition, and a level is always at least 1. **What is asked of a composition is asked of its annotations:** `writing.is(Strict)`, by class or by component, answers whether one is expressed, so no property on Composition says what its annotations say (ruling 4).

## How it is extended

**A level is a class that stands its Level and its pair in `$Define`, and nothing else unless it has a typed canonical.**

```tsx
class $Fifth extends $Composition {
    protected override $Define(): void {
        this.annotations.add(<Level>5</Level>, <Permissive />, <Closed />);
    }
}
```

`$Define` runs first in the bond, before the written are added, so what a class stands is behind what the caller writes and the caller overrides it — *"the one passed in always beats any default in define"*: `<Fifth><Strict /></Fifth>` is strict, the written Strict inactivating the class's Permissive, and `<Fifth is={Open} />` is open, `$is` standing in front of all. A level that has its own rules reassigns `specification` to one extending Composition's; Letter's refuses a composition inside. A level with a typed canonical overrides `canonical` to find it by class, as Section will find its Heading, rather than by position. A class that needs the contents when it stands its defaults does that in its bond after `$Writing`, since `$Define` sees none.

## Promises

Twelve in [`.tests/composition.test.tsx`](../../package/.tests/composition.test.tsx), on test classes at levels 4, 5 and 6 standing their pairs in `$Define`: the level a reading of its Level, 1 until one says otherwise and a written one over the class's, a Level not expressed not read; parts the compositions only, in order, a same-class child spliced; depth counting same-class nesting and 0 under another parent; the canonical the first part and none when none; `is` answering the class and the component alike and false once not expressed; a written pair negating the class's and `$is` too; each class checking with its own specification; and the rules, strict at the level or one below, permissive at or below, closed holding only writing, open leaving it.

## Gate

Typecheck 0 errors, quick build fresh, 73 of 73 across eight files on 2026-09-22, committed locally and not pushed. Nothing rendered here; a composition renders as a writing does.

**Names.** Doug's: `level`, `parts`, `depth`, `canonical`, `Level`, `Strict`, `Permissive`, `Open`, `Closed`, `is`, `specification`, `Representation`. Ours, flagged: `composition`, the parent typed; `CompositionSpecification` and `AnnotationSpecification` after Writing's.
