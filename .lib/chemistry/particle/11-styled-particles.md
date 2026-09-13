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

**`styled` is exported by the framework**, so nothing downstream writes styled-components' dual-shape import again — that resolution lives in [`styled.ts`](../../package/src/abstraction/styled.ts) and nowhere else.

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

## <a id="select"></a>`@select` — where a declaration stands

***A styled chemical's fields are its stylesheet, and `@select` says WHERE each one stands.*** **Built 2026-09-07 out of Doug's seed** — *"A prefix can be used to mean a level… the prefixes nest"* — **after the gap was named: `@select` emitted one nesting level, so a media query with a descendant selector was unsayable.**

```tsx
class $Card extends $Format {
    selector = styled.section;
    padding = '1em';

    @select('> h2') heading_fontSize = '1.5em';
    heading_margin = '0';
}
```

*`padding` stands at the top of the class. `heading_fontSize` and `heading_margin` stand under `> h2` — and **the selector is written once**.*

### <a id="the-levels"></a>A SELECTOR OPENS THE LEVELS IT NEEDS, AND CLOSES NONE OF THEM

**Write the braces you want opened and leave them open. The emit owns the closing**, because the emit is what knows where the declarations end.

```tsx
@select(`@media (max-width: 40em) {
         .inner {`) narrow_display = 'none';
narrow_color = 'red';
```

```css
@media (max-width: 40em){ .pd-card .inner{ display:none; color:red; } }
```

***A selector with no braces is the ordinary one level and behaves as it always did***, which is why the feature landed without touching a single existing use. **Three levels nest the same way** — `@supports` over `@media` over a descendant — *and every one of them is closed.*

### <a id="the-prefix"></a>A PREFIX NAMES ONE SELECTOR, AND SAYS IT ONCE

***The prefix is everything before the property, and it is opaque*** — `one_two_property` is the prefix `one_two`, however many parts the author writes it in. **One prefix names one selector; every member carrying that prefix is under it.**

| | |
|---|---|
| **said once** | *put `@select` on one member of the prefix; the rest carry the prefix alone* |
| ***said twice*** | ***refused*** — *"a prefix says its selector once"* |
| ***two selectors, one prefix*** | ***refused***, naming both — *the ambiguity was silently last-one-wins before* |
| **an empty selector** | ***refused*** — *a selector says where a declaration stands, and an empty one says nothing* |
| **a closing brace** | ***refused*** — *the author opens; the emit closes* |

> ***Doug on why these throw:*** **"It's fine to throw exceptions when things are wrong. This is a place where a user needs feedback on being wrong. A single point of change makes it possible to maintain this and changing the selector on one property can change groups."**

***The rule found six ambiguous namings across the package on its first run*** — *`cover` naming a base and its `:hover`, `logo` naming both `p:first-child` and `img`.*

> ***AND THE HONEST CLAIM IS SMALLER THAN IT FIRST LOOKS.*** **Those six were NOT silent bugs.** *Under the old semantics every member carried its own `@select`, so each pair was emitting correctly and independently.* ***The rule CREATES the ambiguity — it makes six previously-harmless namings illegal — and the renames are what keep them correct.*** **The argument for the rule is still good and it is this one: an ambiguous name is a latent bug the moment anybody adds a member to the group.** *Corrected 2026-09-07 by session inexplicable-phenomena-a7, who checked the emitted CSS rather than the account.*

### <a id="the-override"></a>AND A SUBCLASS MAY SAY IT AGAIN — the whole group moves

***This is the part that makes it worth having.*** **A class says a prefix's selector once. A SUBCLASS may say it again, and every member of that prefix moves with it** — including the ones it inherited and never restated.

```tsx
class $Wide extends $Card {
    @select('> h1') heading_fontSize = '2em';
}
```

*`heading_margin` was declared on `$Card` under `> h2`. On `$Wide` it stands under `> h1`, without `$Wide` mentioning it.* ***That is a selector behaving like a member rather than like a string***, which is [the whole argument this feature exists for](#why): **a CSS string cannot be overridden, and this can.**

> ***AND THIS IS WHY SAYING IT ONCE IS NOT A TIDY.*** **[`reading`](../../package/src/abstraction/styled.ts) answers a member's OWN decorator before it consults the prefix group** — *so a member carrying its own `@select` never asks the group, and a subclass moving that group cannot move it.* ***Every repeated selector was PINNING its member against override.*** **The 258 deleted from this package were not noise; they were the reason those groups could not be moved.** *Observed by session inexplicable-phenomena-0a and confirmed at the line.*

**A subclass that changes ONLY the selector still contributes.** *Comparing the value alone would have dropped it — a real gap, found while promising the behaviour rather than after.*

### <a id="no-prefix"></a>No prefix is the top of the class

**A member with no prefix and no selector stands at the top.** *An unprefixed member that DOES carry a selector governs every unprefixed member of its class* — **so a class may give itself a default, and the prefixed groups stand beside it.**

### <a id="animation"></a>AN ANIMATION IS A LEVEL, and it stands whole

***Built 2026-09-11 out of the public branch's pitch*** — the landing highlight on a cited entry, *"we don't want it permanently blue."* **Doug: "Do the most natural thing. It should be a natural extension."**

```tsx
@select('@keyframes landed { from {') from_background = pale;
@select('@keyframes landed { to {') to_background = 'transparent';
@select('.pd-entry:target') landed_animation = 'landed 2s ease-out';
```

*A stop is a level the selector opens; a declaration is a member; the name is the author's.* **Nothing new to learn, and that is the point.** *The pitch proposed that under an at-rule a prefix should name the stop — which gives a prefix a second meaning under one kind of selector, and collides in `standing()`, where `from_background` and `to_background` would be one property under one selector.* **The levels feature already said it.**

***Measured before designing, and both measurements decided the shape.*** **The stylesheet engine hoists an inline `@keyframes` to the top level by itself**, whether it is written in the component's own rule or under a descendant, *so the compiler needs no hoisting of its own.* **And the two stops, written as levels, were already legal — and compiled to TWO `@keyframes landed` blocks**, because the emit keyed each block by its whole selector string. *CSS keeps only the last same-named `@keyframes`, so one stop was lost and nothing faded.* **The same double opening happens for `@media` — the encyclopedia theme opened one query twice — and it was harmless there because conditional blocks merge by cascade, which is exactly why it had stayed invisible.**

#### A level opened by two selectors is opened once

**The emit keeps a selector's levels as a tree** — the text between its braces — **and writes each opening once.** *Two groups under one media query, or two stops of one animation, meet in it.* The author still opens and the emit still closes; it now closes each opening once.

#### And a named at-rule is whole wherever it stands

***A subclass restating one stop would otherwise lose the other***: a subclass compiles only its own contribution, and a block CSS replaces cannot be contributed to by halves. **So a named at-rule — `@keyframes`, `@font-face`, `@page`, `@property` — is emitted whole by any class that touches it, every inherited stop coming along**, *the way a subclass restating a prefix's selector [moves the whole group](#the-override).* **A conditional one — `@media`, `@supports`, `@container`, `@layer`, `@scope` — cascades as it always did.** *That is the grammar's own distinction, not the framework's.*

***The name is literal and the author's, as every other selector in a theme is*** — **Doug's ruling, with its consequence measured rather than assumed: a `@keyframes` name is document-global and the last same-named block wins, so a subclass keeping the name and mounted BESIDE its base replaces the base's animation too.** *The consumer is a theme, a singleton with one on the page, where a subclass restating a stop replaces the page's fade — which is what it is for.*

**Promised, as needs:** *two stops of one animation stand in one block and the name is said once; a subclass may restate one stop and the other survives; two groups under one media query open it once.* **Seen:** *the Lab's fifth case — the fade moving from yellow to transparent and, with the subclass stood in, from red to the same transparent, 17 of 17 driven.*

*`landed` is the pitch's name and a proxy; `from` and `to` are CSS's own.*

### <a id="order"></a>AND THE EMIT OWNS THE ORDER OF A RANGED LEVEL, as it owns the closing

***Built 2026-09-12 on Doug's observation — "Media queries need to be compiled in a certain order… what if there was a media decorator, and in that case you know how to find the priority of them" — and measured before it was designed.*** **The sheet kept the order things were WRITTEN:**

```
@media (max-width: 640px)  >  .inner{  >  @media (max-width: 1119px)  >  @media (max-width: 768px)  >  @media (min-width: 900px)
```

*A base's narrow query first; a plain level written after a media block, after it, overriding it at every width; a subclass's wider queries after the base's narrow one whatever their width — so on a phone the wider query won.* **An author can order within a class by hand, and had been. No hand can order across the chain, because a subclass's block always follows its base's in the sheet.**

***The answer needed no new word.*** **A media query's place in the cascade is a fact about its bounds, and the compiler reads them the way the browser does** — *`em` and `rem` are 16px in a media query by the specification.* **Plain levels first, then the ranged ones from the widest to the narrowest — `max-width` descending, then `min-width` ascending — so a narrower query has the last word.** *A level with no width — `@supports`, `@media print`, `@container` — keeps its written place among its peers.*

**And across the chain, [the mechanism a named at-rule already had](#animation): a class that touches a ranged level emits the chain's ranged levels whole, in order**, *so the last word on them is spoken once by the class that knows them all.* **A `@media` decorator would be a second word for a level `@select` already names; the one thing it would buy — the priority — the query already says.** *If it is wanted as a spelling, it is one line of sugar over this.*

**Promised four ways:** *a narrower query has the last word however it was written; a plain level precedes every ranged one; `min-width` follows `max-width`, ascending; a query a subclass adds is placed by its width and not by its class.* *`ordered`, `ranged`, `width` and `bounded` are proxy names.*

### <a id="the-cost"></a>What it costs

***The chain walk is answered once per class and member and then cached***, because a selector is a fact about a class rather than about a render. **Declaring a selector clears the cache**, which is the only moment the answer can change.

### <a id="what-it-bought"></a>What it bought, measured

| | |
|---|---|
| ***a media query holding a descendant rule*** | **sayable** — *it was not, and two visible demo defects had been reported as the framework's fault because of it* |
| **`@select` occurrences across the package** | ***383 → 125*** — *258 repeated selectors deleted, because a prefix says it once* |
| **ambiguous prefixes found** | ***6***, every one a real one |
| **promises** | ***15*** in [`styled.test.tsx`](../../package/tests/abstraction/styled.test.tsx) |

*The names `narrow`, `heading`, `inner` and every prefix this feature introduced are **proxies**; they are the author's and Doug's to rename.*

## <a id="the-three-spellings"></a>The three spellings, which are the reactive law's own

**Doug, ruling the convention:** *"`$background` — a prop; `background` — a reactive non-prop; `_background` a non-reactive non-prop. Allow for overriding, favor them in that order."*

| written | reactive | a prop | compiles to |
|---|---|---|---|
| `_background` | **no** ([bond.ts:53](../../package/src/abstraction/bond.ts)) | no | ***baked*** — the literal is in the class stylesheet |
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
| [`abstraction/styled.ts`](../../package/src/abstraction/styled.ts) | the resolved `styled`, the four phases: read a class's declarations, decide which spelling stands, compile one component per class, seat it |
| [`abstraction/particle.ts`](../../package/src/abstraction/particle.ts) | `selector` and `styled` beside `inline`; `frame()` stands the written element as the compiled component; the `[style]` getter |
| [`implementation/symbols.ts`](../../package/src/implementation/symbols.ts) | `style`, exported beside `cache` — read it to reach the compiled component |
| [`abstraction/molecule.ts`](../../package/src/abstraction/molecule.ts) | `selector` joins the framework members that are never state — **a function-valued member would otherwise be bonded as a reagent and answer a bound wrapper per instance** |

**Compiled once per class**, cached in a module `WeakMap` keyed by the class and built in [`$lift`](../../package/src/abstraction/particle.ts) — the one factory both particles and chemicals pass through — so the compile happens before anything of that class renders and no template is seeded mid-render.

**A class wanting the component itself** — a `frame()` that does not call super — reads it at `[style]`.

## <a id="seen"></a>Seen

**Five cases in the Lab, [`app/src/sections/styled/`](../../package/app/src/sections/styled/), driven by [`verify-styled.mjs`](../../package/app/verify-styled.mjs):** the selector as the element and the cascade; the three spellings; promotion driving a live width; a theme fetched through `$` in a bond constructor, switchable live and swappable per scope; and [an animation](#animation) whose fade is watched moving, with a subclass restating one stop stood in.

***The fifth case is the first Lab case to put `@select` on a class field, and it took a config change to show it:*** **the Lab's babel path could not decorate a field** — *the decorators plugin in its legacy form refuses one without the class-properties transform beside it, and with that transform it refuses TypeScript's own field syntax next* — **so no Lab case had ever shown the spelling every consumer writes.** *esbuild and rollup handle it, which is why the promises and `dist` never noticed.* **The answer needed no dependency and was already in the repository: [the wiki's config](../../../.public/package/.wiki/.public/vite.config.ts) has babel only PARSE the decorator syntax and lets esbuild transform it** — `parserOpts` on the react plugin, `experimentalDecorators` and `useDefineForClassFields: false` handed to esbuild — *and the Lab's [`vite.config.ts`](../../package/app/vite.config.ts) now takes the same shape.* **A plugin was installed for an hour first and taken back out, because the neighbour had already solved it and was not read.**

**Promises:** [`tests/abstraction/styled.test.tsx`](../../package/tests/abstraction/styled.test.tsx) — thirty-four, including the getter road, a bond constructor assigning a styled property, the levels and the prefix, and the three on [an animation](#animation).

## <a id="owed"></a>What is not built

- **The tag is stated twice**, once in `selector` and once in the view. *Doug's own instinct, unresolved: "a selector isn't unique."*
- **CSS detection needs a document** — `name in element.style` — so a class compiles nothing under a bare Node process.
- **A `$`-prefixed FUNCTION prop cannot be given twice.** `$Reagent.form()` installs a getter with no setter, so the second render's prop assignment throws *"Cannot set property $onClick … which has only a getter."* **The standing workaround is the branch's own convention** — declare it initialized (`$onClick: (() => void) | undefined = undefined`) so it bonds as a plain field rather than a reagent.
