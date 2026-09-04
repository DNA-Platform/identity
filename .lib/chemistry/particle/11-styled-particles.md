# Styled Particles

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- ***The member names are PROXIES from the implementer; Doug's to rename.***

---

**A class says what it is styled as, writes that element in its view, and its CSS-named fields are the stylesheet.** Nothing wraps the view and nothing is added to the tree — the element the view wrote is the element the page gets, standing as a component compiled from the class's own declarations.

*Built 2026-09-04 out of Doug's seed — "Can we just make a style=true tag for a chemical, and when that tag is true, the properties get compiled into a style component?" — and his refinement of it into a selector: "Instead of true what if we wrote `styled.main`."*

## <a id="why"></a>Why this exists, and it is not a trade

***A CSS string cannot be overridden.*** **Doug, correcting the framing that this buys polymorphism at the price of CSS familiarity:** *"That's not a cost. The gain is polymorphism… it's impossible to override strings. You can subclass, but changing strings on subclass, it's very very very hard to do that right. You can't just rewrite the string because anything that needs to stay in sync with the parent is a nightmare to maintain. There is no solution to maintaining CSS and supporting polymorphism without a radical new language that is CSS but compiles to TypeScript classes and supports polymorphism."*

**That last sentence is the specification of this feature.** *A declaration written as a class member is a named thing a subclass can replace, promote or leave alone; the same declaration written inside a template is text, and a subclass wanting one value different has to restate the whole string and then keep it in sync by hand forever.* ***React never had an answer to this. Chemistry does, because a chemical already inherits.***

**The string road still works** — a hand-written styled component may occupy `selector`, and its rules are extended rather than replaced — **but it is DISCOURAGED, and the reason is not taste**: everything inside it is invisible to inheritance.

## <a id="writing-one"></a>Writing one

```tsx
import { $, $Chemical, children, styled } from '@dna-platform/chemistry';

class $Card extends $Chemical {
    selector = styled.section;
    padding = '16px';
    borderRadius = '6px';
    background = '#f8f9fa';
    color = '#202122';

    view() {
        return <section>{this[children]}</section>;
    }
}

const Card = $($Card);
```

**`styled` is exported by the framework**, so nothing downstream writes styled-components' dual-shape import again — that resolution lives in [`styled.ts`](../package/src/abstraction/styled.ts) and nowhere else.

***A class that writes the element it is styled as is styled WHERE IT STANDS***, and nothing is added to the tree — the element the view wrote is the element the page gets.

***A DRESS NEEDS NO VIEW AT ALL.*** What it holds is what it was given, so the element is handed to it:

```tsx
export class $Heading extends $Style {
    selector = styled.h2;
    fontSize = '1.5em';
    get color() { return this.theme.ink; }
}
```

**And a styled chemical takes ordinary props too — the blend.** *Every `$`-prop that is not one of its CSS properties reaches the element with the `$` stripped, so a styled `<a>` is given `href` and renders it.*

## <a id="the-three-spellings"></a>The three spellings, which are the reactive law's own

**Doug, ruling the convention:** *"`$background` — a prop; `background` — a reactive non-prop; `_background` a non-reactive non-prop. Allow for overriding, favor them in that order."*

| written | reactive | a prop | compiles to |
|---|---|---|---|
| `_background` | **no** ([bond.ts:53](../package/src/abstraction/bond.ts)) | no | ***baked*** — the literal is in the class stylesheet |
| `background` | yes | no | an interpolation; the chemical restyles **itself** |
| `$background` | yes | **yes** | an interpolation; **settable from JSX** |

***The framework marks nothing.*** These three tiers are `$Reflection.isReactive` read out loud, so the author picks a tier by spelling it. **Chemistry wants things reactive, so a plain name is the ordinary spelling** — `_` is the rare case for a value that genuinely never moves.

**One CSS property is emitted once, from its highest spelling, nearest class first.** *Deciding it at compile rather than letting the cascade sort it is what keeps a subclass's `_x` from beating a base's `$x` on position alone.*

## <a id="a-getter"></a>A getter is a live value

```tsx
get background() { return this.$theme.paper; }
```

***A getter is read per render and can never be baked***, which is what lets a styled particle follow a theme. **It lives on the prototype rather than the template**, so the compiler reads accessors off each class's own prototype — and the prototype that declares a getter IS its class, so no diff is needed to attribute it.

***A bond-constructor assignment is the other road and it is STATIC***: the synthesis memoises, so the bond constructor does not re-run when only a prop changed, and the value it took stands. **Measured in the browser 2026-09-04** — with the theme assigned in a bond constructor, a theme change moved the background and left the border stale; with getters, all of them follow.

## <a id="inheritance"></a>JS inheritance is the CSS cascade

**A subclass compiles only its own contribution and extends the parent's compiled component** through `styled(Parent)`, so a subclass declaring three fields keeps the padding, radius and font it never mentions.

**Promotion is the precedence rule used by a subclass:** respelling `_x` as `x` or `x` as `$x` moves the property up a tier, and back. *Doug: "I love the $x and x thing. Yes allow promotion. That is powerful."*

## <a id="nested"></a>Nested selectors, and they are members too

***A nested rule is a member like any other***, so `&:hover` and `> *:first-child` inherit, promote and read the theme exactly as a top-level declaration does. ***Two spellings, one path — which is EXPRESSIVENESS, Doug's word for it: `5 + 3` and `3 + 5`.*** **And the principle under it is the framework's own:** *"$Chemistry doesn't believe in one correct reaction. Many forms exist because they are better in different scenarios."* *They compile identically, so there is one definition and nothing that can drift; which reads better is the author's.*

```tsx
@select('&:hover') hover_textDecoration = 'underline';

['> span: color'] = '#3366cc';
```

**THE CSS PROPERTY IS THE LAST `_`-SEPARATED PART**, so *any* prefix frees the member name — `first_marginTop`, `$first_marginTop`, `_first_marginTop` all target `margin-top`. ***A prefix is only needed when one class says the same property twice***, which is the one case JS would not let you name both; everywhere else the plain name stands inside its block.

**In the written form the selector is whatever precedes the LAST colon**, which is why `['&:hover: textDecoration']` parses — and the tier is still the first character, so `['_> span: padding']` is genuinely inert and pays no bond. ***`$` is meaningless there***: it would make the member a prop, and no JSX attribute can be spelled `> span: color`.

**A getter takes a selector too**, which is where a themed nested rule lives:

```tsx
@select('td, th') get border() { return `1px solid ${this.theme.rule}`; }
```

***And a hand-written styled component may still occupy `selector`*** — its rules are extended rather than replaced — **but everything inside it is invisible to inheritance**, which is the whole reason not to.

## <a id="where-it-lives"></a>Where the mechanism lives

**One file, two fields, one symbol, one method — and the walk is untouched.**

| | |
|---|---|
| [`abstraction/styled.ts`](../package/src/abstraction/styled.ts) | the resolved `styled`, the four phases: read a class's declarations, decide which spelling stands, compile one component per class, seat it |
| [`abstraction/particle.ts`](../package/src/abstraction/particle.ts) | `selector` and `styled` beside `inline`; `frame()` stands the written element as the compiled component; the `[style]` getter |
| [`implementation/symbols.ts`](../package/src/implementation/symbols.ts) | `style`, exported beside `cache` — read it to reach the compiled component |
| [`abstraction/molecule.ts`](../package/src/abstraction/molecule.ts) | `selector` joins the framework members that are never state — **a function-valued member would otherwise be bonded as a reagent and answer a bound wrapper per instance** |

**Compiled once per class**, cached in a module `WeakMap` keyed by the class and built in [`$lift`](../package/src/abstraction/particle.ts) — the one factory both particles and chemicals pass through — so the compile happens before anything of that class renders and no template is seeded mid-render.

**A class wanting the component itself** — a `frame()` that does not call super — reads it at `[style]`.

## <a id="seen"></a>Seen

**Four cases in the Lab, [`app/src/sections/styled/`](../package/app/src/sections/styled/), driven by [`verify-styled.mjs`](../package/app/verify-styled.mjs):** the selector as the element and the cascade; the three spellings; promotion driving a live width; and a theme fetched through `$` in a bond constructor, switchable live and swappable per scope.

**Promises:** [`tests/abstraction/styled.test.tsx`](../package/tests/abstraction/styled.test.tsx) — thirteen, including the getter road and a bond constructor assigning a styled property.

## <a id="owed"></a>What is not built

- **The tag is stated twice**, once in `selector` and once in the view. *Doug's own instinct, unresolved: "a selector isn't unique."*
- **CSS detection needs a document** — `name in element.style` — so a class compiles nothing under a bare Node process.
- **A `$`-prefixed FUNCTION prop cannot be given twice.** `$Reagent.form()` installs a getter with no setter, so the second render's prop assignment throws *"Cannot set property $onClick … which has only a getter."* **The standing workaround is the branch's own convention** — declare it initialized (`$onClick: (() => void) | undefined = undefined`) so it bonds as a plain field rather than a reagent.
