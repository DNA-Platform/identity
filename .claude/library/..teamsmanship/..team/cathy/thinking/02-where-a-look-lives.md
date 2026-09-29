# Where a look lives — local and global style, under Cathy > Programming

- **author:** [Cathy](../cathy-and-the-reactive-canvas/.cover.md)

---

My second dispatch, and the first on a topic that is not about what a thing *is* but about where a rule *goes*. Doug asked for it in the room on 2026-09-29, after finding a Table carrying a global style while not being a Format: *"I am sure there are standard answers within the frontend community and the styled components community."* That sentence is the whole reason this is a `/think` rather than an argument — it is a question about a community's accumulated practice, which is exactly the thing my window cannot hold and the outer view can.

## What I asked

The general half, and only the general half: in 2026, when should style be component-local and when global? Specifically the intended use of `createGlobalStyle`; ThemeProvider against CSS custom properties as the carrier of design tokens; transient props for variants; whether a parent should style its children; semantic classes read by a stylesheet, BEM-style, against CSS-in-JS component styles, and how design systems mix the two; and the performance of dynamic interpolations against CSS variables. Bounded deliberately — *"quick summary, the three main considerations"* — per [framing the workload](../../../../our-skillset/20-think.md#framing-the-workload).

Two conditions I attached, both of which I expect to matter more than the questions. **Where the community does not agree, give the competing positions rather than smoothing them into one consensus** — a false consensus is the failure mode of asking a large mind about a contested practice. And **say what changed since styled-components v6 and the runtime-CSS-in-JS retreat**, because an answer that reads as timeless is usually an answer from 2021.

## Why

Nothing about our own code went outward, and that is the point of the [factorization](../../../../our-skillset/20-think.md#the-factorization-principle). The specific half stays mine: we have a written standard, and I wrote part of it *from memory on the day*, not from research. The subsection is honest about that — it says the answers are *"recorded here from what we know of them rather than researched afresh on the day."* A paragraph that announces it is unverified is a paragraph asking to be checked. This is the check.

## What I expect

Written before the answer, so it can be measured and not adjusted afterwards.

- **`createGlobalStyle`** — I expect confirmation of what we wrote (resets, base typography, fonts, once at a root) with a sharper *reason* than we gave: it is a component that re-injects when its props or the theme change, so it is a rerender hazard and not statically extractable. If that reason comes back, our rule survives but our justification improves.
- **ThemeProvider against CSS custom properties** — I expect the strongest correction here. We wrote the variable turn as *"the one answer we have not taken."* I expect the community's position in 2026 to be harder than "a turn": tokens belong in CSS custom properties, and ThemeProvider survives only for values JavaScript must branch on. The reason is the one our own code already demonstrates — a theme object change invalidates every styled component below it, while a variable change repaints with no JS at all.
- **Transient props** — I expect a *qualification*, and this is the prediction I most want tested. We wrote "variants are transient props" flatly. I expect the answer to be: transient props for a small closed set of variants, but a value with many possible values should be handed down as a CSS variable, because an interpolation generates one class per distinct value. If that comes back, it lands directly on Table, which is handed its column count as a prop.
- **A parent styling its children** — I expect confirmation, with the addition that the sanctioned reach is `${Other}` at definition and that layout primitives own spacing, so a parent owns *placement* without painting.
- **BEM against CSS-in-JS** — I expect the answer to name our exact case without knowing it: styling markup you did not author (prose, long-form typography) is where semantic classes and a stylesheet beat component styles, and that is precisely what a mark on a writing is.
- **Performance** — I expect: static rules in the template, dynamic values through variables; and the real cost named as serialization and class generation per render, not selector matching.
- **And one thing I expect to have to discount.** I expect the answer to lead with styled-components' maintenance posture and the move to zero-runtime libraries. That is true and it is not our question — styled-components is an anchor here. An answer that spends itself recommending we leave is, by [the rule I keep](../../../../our-skillset/20-think.md#anchors-and-degrees-of-freedom), a weak answer however well it reads.

## What I already know

The standard is written and it is [Where a look lives](../../../../../../library/.public/.lib/writing/02-theming-and-formatting.md#where-a-look-lives): three kinds of rule, three homes. **What an element IS** goes in the Format's own styled component, declared inside the class. **What an annotation MEANS to the eye** goes in that annotation's `note`, as a global style on its mark and only the rule that is the meaning. **How a mark LOOKS** goes in the theme's sheet. One law across the three — no property on one element is written by two authors.

And I know the shape of what we built, which is what makes the token question live. A [Theme](../../../../../../library/.public/.lib/writing/13-theme.md) is a Format with `theme = true` carrying eight reactive values — `font`, `size`, `leading`, `measure`, `space`, `ink`, `paper`, `link` — handed to styled-components' provider by a small `$Provider` chemical of Theme's own, so that setting `theme.ink` redraws the provider alone and the elements beneath take new classes in one paint. That is a good reactive design and it is *also* exactly the mechanism the community's variable turn exists to avoid: the elements beneath take **new classes**. Our own `$Provider` chemical is the isolation trick that makes the cost survivable, not a reason the cost is not there.

The theme's sheet is a styled div, not a `createGlobalStyle` — so our "global" is already scoped by an element. The genuinely global styles are the annotations' notes, four files carrying one in `src`. Worth holding, because the community's answer about `createGlobalStyle` may not apply to the sheet at all.

**And one thing I read out of the code during the pause, which I want on the record before the answer arrives, because it is the place the transient-props question lands.** `$Table.style` is a `selection.div<{ $columns: number }>` whose template interpolates the column count twice: once into `grid-template-columns: repeat(N, …)`, which is fine and low-cardinality, and once into a **loop that emits 2N rules** — `pa-col-start-1…N` and `pa-col-span-1…N` — so the generated class grows with the table's width and is regenerated for every distinct width in the library. The bound exists only because a rule cannot be written for a number nobody has named yet. A CSS custom property removes the whole construction: the cell carries `--col-start` and one static rule reads `grid-column-start: var(--col-start)`, and then there is no loop, no numbered family, and nothing regenerated per width. It would also simplify the theme's class-coverage promise, which today has to special-case those three numbered families by their roots. **If the outer view's answer on interpolation-versus-variables is what I expect, this is the first place it cashes out, and it is a finding from our code and not from the answer.**

## Evidence

*Awaiting the read, which is running in the room.*

## Interpretation

*Pending.*

## Conclusion

*Pending.*


**Re-filed the same night, 2026-09-29.** The first write of this question went out from the room under a topic made for it, *Cathy > Styling*, from no frame of mine; Doug deleted that conversation — *"I deleted the one you created because it was wrong"* — and named the thread this question belongs to, *Cathy > Programming*, my engineering thread, where the context of every later question accumulates. The question is asked again there, sharpened: not a summary of standard answers but how mature design systems draw the line between a component's own styles and a global sheet keyed on semantic classes, how token values should flow in 2026 under server rendering and hydration, whether the rules that are a component's meaning have a recognised home, and how a semantic-class sheet and CSS-in-JS coexist without two authors on one property. Evidence follows the read.
