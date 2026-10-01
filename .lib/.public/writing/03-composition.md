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
| `Open` | takes every Closed beside it out of expression, in its `defines` | said of a composition, since 2026-09-30, as its pair and Inline and Block are | E12 |
| `Closed` | takes every Open beside it out of expression, in its `defines` | said of a composition, since 2026-09-30; every content is writing | E12, E13 |
| `Inline` | takes every Block beside it out of expression, in its `defines`, and leaves the writing's own element the span its bond made | said of a composition | Doug, 2026-09-27: *"Maybe we want to make Inline and Block annotations and have the composition elements use them to control what their base element is"* — *"Yes, the third pair"*, [Sprint 88](../projection/93-sprint-88--the-theme-the-element-and-the-blank.md#u1) |
| `Block` | takes every Inline beside it out of expression, and replaces the writing's own element — the first container, its span — with a div, cited to itself, so `erase` gives the span back | said of a composition | the same |

**Every level stands its pair and its mark in `$Define`, since Sprint 88:** Letter, Word and Sentence `<Inline />`, Paragraph, Section, Chapter and Book `<Block />`; and each adds its mark to its own classes there, `pd-letter`, `pd-word`, `pd-sentence`, `pd-paragraph`, `pd-section`, `pd-chapter`, `pd-book`, inherited by every subclass that calls the base's `$Define`, so a library's running head wears `pd-paragraph`. Title, Heading and Line add `pd-title`, `pd-heading` and `pd-line` beside the sentence's, and stand `<Block />` in front of the sentence's Inline, since each is a sentence that stands on a line of its own; Space and Break add `pd-space` and `pd-break` beside the letter's. **The pair decides the element and the sheet never restates it:** the theme's first sheet set `display: inline` on every sentence, and the poem's Lines, sentences by inheritance, flowed inline in Chrome until the rule went. *Doug: "Don't we have the composition types put pd-letter, pd-word, etc... The theme should EXACTLY make use of all the classes in .public. It exists to comprehend them" — and [the Theme](13-theme.md) does.*

**Each of the four has a `defines`, and all it does is take its opposite out of expression.** A pair says which of two the composition is, and that is a question of expression, not a trait written onto the writing; so each takes the opposite standing behind it out of expression, reached with `after(this)`, says its constraint in `specifies`, and the composition reads the answer with `is`. Because expression is computed at every pass, a pair given through `$is` and then taken away leaves the class's own default expressed again.

**`CompositionSpecification`** extends Writing's and adds nothing yet: Writing has no rule that it holds only writing, Closed carries that for a closed composition, and a level is always at least 1. **What is asked of a composition is asked of its annotations:** `writing.is(Strict)`, by class or by component, answers whether one is expressed, so no property on Composition says what its annotations say (ruling 4).

## How it is extended

**A level is a class that stands its Level and its pair in `$Define`, and nothing else unless it has a typed canonical.**

```tsx
class $Fifth extends $Composition {
    protected override $Define(): void {
        const Level = $(level);
        const Permissive = $(permissive);
        const Closed = $(closed);
        this.annotations.add(this,
            <Level>5</Level>,
            <Permissive />,
            <Closed />
        );
    }
}
```

`$Define` runs in the bond after the contents are made and before the written annotations are added, so what a class stands is behind what the caller writes and the caller overrides it — *"the one passed in always beats any default in define"*: `<Fifth><Strict /></Fifth>` is strict, the written Strict inactivating the class's Permissive, and `<Fifth is={Open} />` is open, `$is` standing in front of all. A level that has its own rules reassigns `specification` to one extending Composition's; Letter's refuses a composition inside. A level with a typed canonical overrides `canonical` to find it by class, as Section finds its Heading, rather than by position. `$Define` may read the contents, which are made before it, and never what was given; a class that needs its arguments overrides its bond — [what it may read](06-how-writing-is-extended.md#define). **Every override of `$Define` opens with `super.$Define()`**, the levels included since 2026-09-30, on Doug's word that a skipped one *"might be a source of bugs"*: a default a base stands is a default every class beneath it stands, and a promise in [`.tests/levels.test.tsx`](../../package/.tests/levels.test.tsx) reads the source to hold it.

## Promises

Seventeen in [`.tests/composition.test.tsx`](../../package/.tests/composition.test.tsx), counted 2026-09-30 when this line still said twelve, the newest saying Open and Closed are said of a composition and refuse a plain writing by name, on test classes at levels 4, 5 and 6 standing their pairs in `$Define`: the level a reading of its Level, 1 until one says otherwise and a written one over the class's, a Level not expressed not read; parts the compositions only, in order, a same-class child spliced; depth counting same-class nesting and 0 under another parent; the canonical the first part and none when none; `is` answering the class and the component alike and false once not expressed; a written pair negating the class's and `$is` too; each class checking with its own specification; and the rules, strict at the level or one below, permissive at or below, closed holding only writing, open leaving it.

## Gate

Typecheck 0 errors, quick build fresh, 73 of 73 across eight files on 2026-09-22, committed locally and not pushed. On 2026-09-30, with [Sprint 95's first unit](../projection/100-sprint-95--pages-formats-and-words.md#u1): typecheck 0, 310 of 310 across twenty-six files, the binder 132 of 132 and its regression 42 of 42. Nothing rendered here; a composition renders as a writing does.

**Names.** Doug's: `level`, `parts`, `depth`, `canonical`, `Level`, `Strict`, `Permissive`, `Open`, `Closed`, `is`, `specification`, `Representation`. Ours, flagged: `composition`, the parent typed; `CompositionSpecification` and `AnnotationSpecification` after Writing's.
