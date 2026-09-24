# Sprint 80: Format and Theme

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **status:** CLOSED 2026-09-23, 98 of 98, local and unpushed; six things open and Doug's to rule, in [Where things stand](#where-things-stand)
- ***The design sections below — the wrapping mechanism, Theme as a kind of Format, and which of the two does what — are the TRIAL as it ran, and three of the mechanisms they describe were struck the same day. [What was struck, and why](#what-was-struck-and-why) is the register; [Format and Theme](../writing/11-format-and-theme.md) is what exists.***
- ***The sprint's name is a PROXY; Doug's to rename. Opened 2026-09-23 on his choice of the unit.***

---

## Where this unit comes from

**Doug asked where the Genesis goes next and corrected a wrong answer.** Asked after Composition closed, the first answer was Chapter and Book, which was our own plan and not the Genesis's order. His correction: *"Did you read Genesis to see? It has a linear structure. I think we talked about reference and mention, meaning etc... before that but maybe we talked about something else too."* He is right, and the linear order after Section and the composition machinery is this: the specification and the genome at E20 and E21, which are built; **Mentioned** at E21 with Quote as its exemplar; **Means** at E22 with Ref, the anchor and id pair; **Format** at E23; **Theme** at E24 and E25; then ordering and parts at E26 and E27, which are built; and the books only at E29. Told that Means's one render-time power is to modify its writing's Format, so in text order it would wait a unit for one to exist, he chose: **Format and Theme first.** Of Quote and Ref, which the notes guess to be a Sentence and a Word: *"Marked is not a concept. We can discuss after Format and Theme"* — so a guess in the notes is not a ruling, and those two wait.

## What the Genesis says, whole

**E23 — Format.** *New annotation Format, part of the writing genome; a place for themes and styled components; no constraints, like Letter. Means modifies Format on render.*

**E24 — Theme.** *Theme chemical : Annotation; specified to take ONLY Format; often contains a styled-components theme provider, a $Chemistry native operation.*

**E25 — placement.** *Theme is an ancestor in the render tree because chemistry renders where it wants. "The child input to a chemical is a constructor argument not a placement."*

**E32, the one thing left undecided there:** *Themes and formats via styled-components or styled chemicals, whichever gives flexibility.* **Ruled 2026-09-21: styled-components directly, and Format is where they serve.** The implementation notes carry two more open items of Claude Desktop's own: whether a Format is unique, and, on Theme, the reading *"Formats are annotations, so all of Theme's source is tail and contents is empty"* — that is his inference and it follows from the model rather than from an event.

## What was already tried, and measured

**On 2026-09-22 both were built in the promise file and nothing entered the language**, at Doug's word: *"Try it! I don't know this tech well enough, so do an analysis of the performance and implementation concerns."* The trial is [`.tests/theme.test.tsx`](../../package/.tests/theme.test.tsx), six promises, happy-dom only and no browser driven. What it established:

- **Format works as an annotation holding its styled component on a property, lent as the writing's container.** `format`, a span by default, overridden by a subclass; `defines` remembers the writing's container and sets it to the format; `erase` gives the remembered one back. The writing is drawn as the styled element with its rule in the sheet. Doug's shape: *"I would have the system store the component on a property… And then can't it be more easily overridden in a subclass?"*
- **A writing wears one Format**, because two lend over one surface and erasing the first restores the wrong one.
- **A theme is never wrapped around the container.** Tried first and it loops: two annotations acting on one surface break each other's idempotence, every pass makes a new component, and React stops it with *Too many re-renders*.
- **A theme property on Writing works** and holds one theme.
- **Annotations wrapping the element in turn works**, the front innermost, so two Themes supplying different values make one rule that reads both and a third given through `$is` wins the value they share.
- **An annotation rendered as an ancestor of its writing works**, probed: it keeps its own contents, the provider reaches the container, and the container comes first. It moves every annotation's note outside the container.
- **Chemistry's own provision is not reached and is not wanted**: it exists for styled chemicals, and we use styled-components directly.

## What styled-components can do, measured

**Doug, 2026-09-23: *"Please tell me if this design misses something about what is possible with styled components"* and *"How does this element work? Explain how styled components works to me."*** So it was measured rather than recalled, with two probes made and removed in the turn, against styled-components 6.5.3 in the suite's happy-dom.

| | measured |
|---|---|
| **an element** | a styled component renders **one** element carrying two classes: a component id, `sc-bdvwhi`, and a class generated from the rules it computed, `fCRJQD`. `as="p"` changes the tag and keeps both classes |
| **a prop** | a prop reaches the interpolations and changes the generated class, so `$rule="red"` produced a second class and `border-left:3px solid red` in the sheet; a `$`-prefixed prop never reaches the DOM |
| **composition, at definition** | `styled(Quotation)` puts **both** components' rules on **one** element: two component ids and two generated classes, `sc-bdvwhi sc-gsDMPd fCRJQD eyiGml`. This is the only way two independently written rule sets reach one element |
| **`.attrs`** | bakes a prop into a component, so a Format may carry a configured component rather than ask its writing for values |
| **`css`** | shares a fragment between components, at definition |
| **a provider reaches its descendants only** | one placed after the contents, as their sibling, reaches nothing: the inside and the outside quotation got different classes and both rules stand in the sheet |
| **a provider inside an element** | still themes what it wraps: a provider nested inside a blockquote themed the blockquote inside it |
| **nesting merges** | a nested provider handed an **object** merges with the outer theme — olive over blue with navy kept — so several themes add up with nothing written to make them. Handed a function it may replace or merge as it likes, which is what chemistry does for styled chemicals |
| **a global style is not measurable here** | `createGlobalStyle` put nothing in the sheet under happy-dom, so any design resting on a global style — CSS variables, a class's rules — can only be shown in the browser |

**What that says about the design.** *"An annotation lets you put react at the root of a piece of writing. Isn't that all you need for styled components?"* — for a global style, yes, position is free; for a provider, no, and the measurement is exact: a note renders after the contents, as their sibling, and a provider there reaches nothing. But a provider only has to be an **ancestor of what it should theme**, and the writing's contents are rendered inside its container, so there are two places that work: around the container, which is the design that looped because a Format was setting `container` too, and **around the contents, inside the container**, which touches nothing a Format touches. The second is *"Composition gives you a natural enclave of pieces of writing that have a parent"* said exactly: a Theme on a composition themes everything the composition holds.

**And `Format` needs no halves.** *"Implement formats that hold styled components as properties, have props that reflect what we want to be dynamic"* — the measurements support that whole: the component is a property, its dynamic values are `$`-props which reach the rules and never reach the DOM, `.attrs` bakes what is constant, and a Format that wants another's look extends its component with `styled(Other)`, which is the one way two rule sets reach one element. So a Format is one class with one property, and there is no uniqueness rule to write: an element has one type, so the last annotation to set `container` decides it, and everything else about look composes at definition.

**The one limit to know.** Two independently authored styled components cannot both style one element at render time. If two Formats stand on one writing, the last to set the container decides and the other's look is simply absent. Composing look means extending at definition, or classes with their rules in a global style, which the suite cannot measure and the browser must show.

## The wrapping mechanism, as small as it goes

**Doug, 2026-09-23: *"Can't the provider use set itself as the container property? I will need to design an elegant way to inject the idea of something wrapping what is written. It would be easiest just to set the container but maybe that needs to be generalized. It is our wrapping mechanism."*** And: *"The code for this needs to be minimal and elegant. It isn't right if you didn't capture it simply."* So the shape below is what the measurements allow at the smallest size, and the design is his to finish.

**A writing already has one wrapper, `container`, the element it is drawn as, and the thing that goes around what it renders is a review.** Doug named it and the name is the mechanism: *"We have contents, annotations, and want something that goes around them. Can it go around the whole container? How about `review: (writing: ReactNode): ReactNode`. Something like that. And then it goes around the whole container or just the inner part. It starts empty."* So it is a **sixth power on Annotation, a function rather than a property** — an annotation reviews what its writing rendered and returns it, and the base returns what it was given.

```tsx
// Annotation
review(writing: ReactNode): ReactNode { return writing; }
```

```tsx
// Annotations — the genome folds the reviews, front first, so the front ends innermost
review(writing: ReactNode): ReactNode {
    for (const annotation of this)
        if (annotation.enforced) writing = annotation.review(writing);
    return writing;
}
```

```tsx
// Writing.view
return this.annotations.review(
    <Container className={className}>
        {this.write()}
        {this.annotate([...this.annotations].reverse())}
    </Container>
);
```

**A function composes where a property could not, and that is why this is the better mechanism.** Two annotations cannot both set one property, so a second Theme on one writing would have overwritten the first; two reviews simply nest, and because a nested provider merges over the one outside it, **the front ends innermost and wins each value it names while everything it does not name is inherited** — measured, olive over blue keeping navy. Nothing touches `container`, so no review can fight a Format, which is what made the earlier wrapping design loop. And a Theme needs no property on Writing at all.

```tsx
export class $Theme extends $Annotation {
    values: object = {};
    override review(writing: ReactNode): ReactNode {
        return <ThemeProvider theme={outer => ({ ...outer, ...this.values })}>{writing}</ThemeProvider>;
    }
}
```

**The values are a plain object on the Theme, ruled, and a subclass overrides it.** Styled-components merges by spreading, and a chemical's fields live on its class template reached through the prototype, so spreading the Theme itself would lose them; reading them instead would be reflection on an instance. The element the provider makes is new each render, but its `theme` function is handed to the same provider component, so nothing is remade and nothing loops.

**Who wins a surface, ruled.** *"Well annotations need to be able to erase themselves. I think we execute on define front to back and then render back to front. Front has the power to turn off competitors but if it doesn't, back can erase them."* So the pass stays as built — define front to back, render back to front — and the asymmetry is intended rather than accidental: **the front's tool is inactivation and the back's tool is acting last.** A front annotation that wants a surface takes its competitor out of expression; one that does not gets overwritten by the back, which is how an annotation erases itself.

## Theme as a kind of Format, and what it costs

**Doug, 2026-09-23: *"A theme could carry rules of its own if that makes the most sense. Is there a performance hit? I need guidance designing this. I thought a theme provider was separate, but we could compose the two I suppose"*, and then: *"Format is one type of annotation, and Theme a subclass that injects the provider but also is a Format. Does that work? Or not"***

**It works, and it is the better shape, because E23's own words make holding the contract.** A Format is *"a place for themes and styled components"* — a place that **holds** one. It does not say a Format is the element. So `format` is optional and how it applies is the subclass's business, and a Theme extends Format without overriding anything away:

```tsx
export class $Format extends $Annotation {
    format?: ElementType;
    protected replaced?: ElementType;

    override defines(writing: $Writing): void {
        if (this.format === undefined || writing.container === this.format) return;
        this.replaced = writing.container;
        writing.container = this.format;
    }

    override erase(writing: $Writing): void {
        if (this.replaced === undefined) return;
        writing.container = this.replaced;
        this.replaced = undefined;
    }
}

export class $Theme extends $Format {
    values: object = {};

    override review(writing: ReactNode): ReactNode {
        return <ThemeProvider theme={this.values}>{writing}</ThemeProvider>;
    }
}
```

**A Theme with no `format` lends nothing and only provides, and adds no element. A Theme with one both provides and is the element**, which is the two composed and the answer to whether a Theme may carry rules of its own: it may, by being a Format. And `find($Format)` then finds Themes as well, which is right rather than a leak, since both are style. **A subclass never overrides a parent's `defines` away**, which is the fight this shape avoids.

## The performance, read from the source

**`ThemeProvider` renders no DOM element, so it costs nothing in the tree.** Read in `styled-components/dist/styled-components.cjs.js` on 2026-09-23:

```js
ThemeProvider = function (props) {
    const outer = useContext(ThemeContext);
    const theme = useMemo(() => determine(props.theme, outer), [props.theme, outer]);
    ...
}
// determine: a FUNCTION is called with the outer theme and its result is used whole;
// an OBJECT becomes  outer ? { ...outer, ...theme } : theme
```

**So the only cost is theme identity, and it is entirely avoidable.** The memo depends on the theme prop, so a stable prop gives a stable context and no descendant does anything; a fresh object or a fresh function each render re-renders every styled component beneath and recomputes its CSS. **Therefore hand a stable object**, which also makes the merge automatic by that source line, and drops the `outer => ({ ...outer, ...values })` function of the earlier sketch.

**And a plain field is stable for free.** A field initializer lives on the class template, so `values = { rule: 'blue' }` is one object shared by every Theme of that class, for the life of the program — the framework's own template sharing satisfies the memo exactly. The one rule is that nothing mutates it; `classes` must be made per mount because it is mutated, and `values` must not be for the same reason read backwards.

**One more cost to know.** A `$`-prop makes a distinct generated class per distinct value, so a value that varies continuously grows the sheet one class at a time. A handful of fixed choices belongs in props; anything shared belongs in the theme and is read as `props.theme.rule`.

## Whether a theme may be mutated at runtime, measured

**Doug, 2026-09-23: *"Ideally, we can mutate theme at runtime? Or maybe not, and dynamic theming is about presenting and mutating formats?"*** His second guess is right, and the measurement says why.

**A mutation is seen, but only by whatever happens to re-render, and it wakes nothing.** Measured with a probe made and removed in the turn: a theme object mutated in place, `ink` from navy to crimson, and the page re-rendered for an unrelated reason — the quotation's generated class changed from `jjiucQ` to `gNznGL` and both colours stood in the sheet. So the provider's memo does not hide a mutation; it only decides whether the context value changes identity, which decides whether a consumer that would **not** otherwise re-render is woken. A mutation wakes nobody, so it appears at whatever later moment something else redraws. That is worse than a change that never appears, because it cannot be reasoned about.

**And the reason is structural rather than a detail of the library.** Styled-components reads `props.theme.ink` inside **its own** render, which is outside our reactivity, so no read of ours is recorded against the value and no write of ours can diffuse to it. **The framework cannot track a read it never sees**, so no arrangement of reactive fields on a Theme will make a mutated value wake the writings that show it.

**Therefore dynamic theming is presenting a different Theme, and that is exact rather than a workaround.** Presenting changes the genome; the genome is what the framework tracks; the collection's code changes, the writing wakes, the pass runs and the provider hands a different object. Dark mode is `$is = Dark`, or a Dark annotation whose `inactivates` takes Light out of expression. One redraw, at the moment it was asked for.

**The exception is what props are for.** A value that must vary continuously — a measure a reader drags — belongs on a Format as a `$`-prop handed from the writing's own `view`, because then the **writing** reads it and that read is tracked. So: the theme holds what is shared and slow, a prop holds what is per-instance and fast, and nothing is mutated in place.

**Which settles `values`:** a plain object on the class, stable for the life of the program, never mutated, and a Theme that must differ is a subclass or a different Theme presented.

## Which of the two does what, and how it stays flexible

**Doug, 2026-09-23: *"Theme is the theme provider and formats are the things that do the styling? Or does the theme carry styling of its own"*, with *"We need this defined in a very flexible way"* and *"And it needs to be very well-documented."***

**A Format does the styling.** It is where a styled component lives, and it changes how one writing looks in whichever of three ways suits it: it sets `container`, so the writing is drawn as that element; or it `review`s, so what the writing rendered is wrapped; or it puts a class on and declares that class's rules in its note. It is a unit of look, and E23's *no constraints, like Letter* is about what it may hold rather than about what it may do.

**A Theme provides values and carries no rules of its own.** E24: *"often contains a styled-components theme provider"* — its review is that provider, and its `values` are what every styled component beneath reads. A Theme's styling is not its own; it is the Formats it holds.

**The division, said in one line each.** The theme holds values. The component holds rules. The props hold this one's exceptions. A theme with rules in it has become a stylesheet; a component that hardcodes a colour cannot be rethemed.

**And it is flexible because the base knows neither class.** Both are ordinary annotations with the same six powers, so a Theme with no Formats is a pure provider, a Format may lend an element or wrap or only put a class on, and a Theme may both review with a provider and hold Formats whose notes inject global styles. Nothing forbids a combination, because nothing enumerates them.

**What a Theme's Formats are, ruled 2026-09-23.** E24 rules that a Theme takes **only** Format, and Doug says what that genome is for: *"An inventory the library declares, each dynamic with props/properties on the annotation. And then new formats can be made by implementers to modify how things look in a crosscutting way that they can apply."* So a Theme is where a library declares the looks that belong with its values; each Format is dynamic through its own properties, read from what was written in it as a Level reads its number; and an implementer adds a Format of their own to change how things look across a library and applies it where they like, written, stood by a class in `$Define`, or given through `$is`. The rule that a Theme holds nothing else is what keeps a Theme from becoming a stylesheet.

**And a review goes around the whole container**, ruled the same hour, so the writing's own element and its annotations' notes are inside it and a note that is a styled component reads the theme. Around the container themes the writing's own element and its annotations' notes as well, so a note that is a styled component reads the theme; around the inner part themes only what the writing holds, and leaves the writing's own element to whatever holds it.

## Requirements, backfilled 2026-09-23

***Written after the work, on Doug's instruction, because the unit was ruled in conversation rather than planned.*** **Each one names what would be observed, and each is green.**

- **R1 — A Format says what element its writing is drawn as, and writing one is one line.** `style` holds a styled component declared in the class; the base does the rest. Observed: `class $Quoted extends $Format { style = styled.blockquote`…` }` and the writing draws as a blockquote with its rules in the sheet. (E23; ruled 2026-09-23, *"No Format.format. Format.style."*)
- **R2 — A writing has one Format.** Every Format takes every other out of expression, so the one nearest the front decides and there is never a silent loser. Observed: two Formats, the front deciding, the other not expressed. (*"All formats prevent multiple formats right?"*)
- **R3 — Applying is idempotent and erasing is careful.** `apply` halts when the writing already wears its style and takes the envelope only when holding nothing; `erase` gives the envelope back only when it still finds its own style. Observed: two passes leave one envelope, a style changed mid-life still returns the writing's own component, erasing twice is harmless, and a Format that finds someone else's element leaves it alone.
- **R4 — Theming is a way of writing a Format, not a class.** `theme = true` and the bond composes the style with a provider handing the annotation itself. Observed: the element and everything beneath it read the values. (E24; ruled 2026-09-23, *"why isn't it a property question, a certain type of way of writing a format"*)
- **R5 — A theme reaches what its writing encloses.** Observed: a theme on the enclosing writing paints a quote two levels down.
- **R6 — An annotation changes a Format by setting its properties.** Observed: another annotation sets a Format's prop and the rule changes in the sheet; setting `style` on a drawn writing repaints it. (E23, *Means modifies Format on render*)
- **R7 — A change costs one paint.** Observed: three draws and one commit, the three being the render, React's development double, and chemistry's post-commit diff.
- **R8 — The annotation system carries no member that a word of the domain does not.** Observed: `inactivates`, `review`, `$Theme` and `ThemeSpecification` all gone, and the suite green without them.

## Plan, backfilled

**The units as they actually ran, in order, each gated before the next.**

| unit | what it did | gate |
|---|---|---|
| **1 · the invented power removed** | `inactivates` off Annotation and off the five classes that used it; the regulation phase folded into `defines` | 86 of 86 |
| **2 · the wrapping power removed** | `review` off Annotation and off the collection; `view` returns its container plainly | 86 of 86 |
| **3 · expression named** | `enforced` → `expressed`, get-only; `enforce` → `express(value = true)`, the one door the genome and a family share | 86 of 86 |
| **4 · the collection made whole** | `remove` erases what leaves, through one protected `leave`; `same` moved to Reflection; the bare function gone from Writing | 86 of 86 |
| **5 · Format rebuilt** | one class, `theme` and `style` and a protected `envelope`, with `defines`, `erase` and `apply` | 90 of 90 |
| **6 · the classes marked** | `pa-` for a class an annotation put on a writing, `pd-` for what the writing is | 90 of 90 |
| **7 · the promises** | idempotence, dynamism, precedence, the enclave, and the render counts in a file of their own | 98 of 98 |

## What was struck, and why

***Four mechanisms were built for this unit and every one came out the same day.*** **Each was a member added where the system already had a door**, which is the fault this sprint is really a record of.

| struck | what it was | why |
|---|---|---|
| `inactivates` | a regulation phase on Annotation | **Doug: *"I didn't invent inactivates. NO NEW MEMBERS. You set enforced to false."*** A gene reaches its family in `defines` and sets a property; suppressing and augmenting are one act |
| `review` | a wrapping function the collection folded | **Doug: *"No more review."*** A Format is the element, so nothing needs to wrap |
| `$Theme` | a class of its own | a property says it better, and evolution is one line rather than a reparenting |
| per-kind uniqueness | a Format unique only among its own class | it let a theme and a style fight over one container and lose silently |

## The gate

Typecheck 0 errors, quick build fresh, **98 of 98 across ten files** on 2026-09-23, committed locally and not pushed. Across the day the package lost far more than it gained.

## Where things stand

**CLOSED 2026-09-23. 98 of 98 across ten files, typecheck 0, committed locally and not pushed.**

**What exists.** One class, `$Format`, with `theme`, `style` and a protected `envelope`, and three methods: `defines` takes every other Format out of expression and then applies; `apply` halts when the writing already wears its style, takes the envelope only when holding nothing, and sets its own; `erase` gives the envelope back only when it still finds its own style there. `theme = true` composes the style with a provider in the bond, once per mount, which is the one place it cannot double. There is no Theme class.

**What the annotation system looks like now.** Four powers — `defines`, `erase`, `specifies`, `note` — and one door, `express(value = true)`, which the genome uses to start every pass and a family uses with `false` to say another does not apply. `expressed` is get-only. The pass is two phases: express everything, then act or undo front to back. Regulation happens inside `defines`, so a family member must stand in front of what it takes out of expression, which is the fixed point being the author's job.

**The counts are under promise.** A change costs one paint. Mounting draws three times and paints once, and the three are named: the render, React's development double, and chemistry's post-commit diff against the cached view. A writing nobody touched is not drawn again when a sibling changes. Those live in [`.tests/renders.test.tsx`](../../package/.tests/renders.test.tsx), and a pass that stops settling shows up there first.

**Open, and Doug's to rule.**

| open | what it is |
|---|---|
| **Parenthetical's global style** | he said *"Parenthetical should be simple"*; cutting the style and the note leaves four lines and hands the hiding rule to whoever writes the page. The field is called `style` by me and collides with Format's meaning |
| **a theme with no style of its own** | wraps a plain span, so it would silently replace a class's own container the day a class declares one |
| **one annotation instance in two writings** | both draw as it and the envelope ends up holding the second writing's component; he said *"one sec"* |
| **a bare Format** | does nothing at all; whether the specification should refuse one is unruled |
| **`<Theme><FormatStyle/></Theme>`** | E24's shape, a Theme holding Formats for its enclave, which cannot work today because a Format annotates whatever writing it sits in |
| **the browser** | nothing here has been seen since the rewrite, and `createGlobalStyle` injects nothing under happy-dom, so anything resting on a global style is unmeasured |

**Where to look.** [Format and Theme](../writing/11-format-and-theme.md) for the class and its extension story; [The Annotation System](../writing/07-the-annotation-system.md) for the powers, the precedence order, and the two guides; [Developing an Annotation](../writing/10-developing-an-annotation.md) for what to write when the thing is an annotation.
