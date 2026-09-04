# Sprint 40 — Styled Chemicals

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **status:** `implementation-ready` — planned 2026-09-04 out of [Sprint 39's rigorous notes](41-sprint-39--the-road.md#styled-chemicals-notes), which are the approved requirements. ***The title is a PROXY; sprint names are Doug's.***
- **workflow:** [feature](../../../../.claude/library/..teamsmanship/19-workflows.md) — brainstorm DONE (Sprint 39, with Doug), plan HERE, work next.
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md)

---

**The sprint builds ONE chemistry feature and spends it once.** A class says `styled = true`; the framework compiles its CSS-named fields into a styled component, seats it at an exported `[style]` symbol, and wears it at `frame()`. It lands on `$Particle`, so styled particles and styled chemicals are both real. Then the encyclopedia — eleven files of raw styled-components dresses — is rewritten as styled chemicals, which is what makes them fetchable through `$` and evolvable polymorphically, **and which dissolves the DI problem Doug raised rather than working around it.**

**Doug's standard for this sprint, verbatim:** *"I want this executed elegantly and effectively. This code needs to be written and it needs to not make a mess of chemistry either. These are sophisticated features."* Every decision below is answerable to that sentence, and the one that answers it most is [D57](#d57): **the feature adds no new concept to chemistry — it reuses six mechanisms that are already there.**

# <a id="literature"></a>The sprint opens with its literature

[Sprint 39 § the notes](41-sprint-39--the-road.md#styled-chemicals-notes) — the approved requirements, Doug's namings and rulings · [Sprint 39 § the styled finding](41-sprint-39--the-road.md#the-styled-finding) and [§ the DI answer](41-sprint-39--the-road.md#rulings-0904b) — why a raw dress refuses the fetch and why the registry does not · [ch10 § the fetch](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md#the-fetch) and [§ the reactive-property law](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md#the-reactive-law) — the two laws this rides · [ch13 The Default Dress](../designing-inexplicable-phenomena/13-the-default-dress.md) — the encyclopedia's own table, being rewritten · [ch11 § styling](../designing-inexplicable-phenomena/11-the-coding-style.md#styling) — never a style attribute, $Chemistry goes with styled components · [Solutions 45](../solutions/45-the-view-that-constructed-its-parts.md) — three appearances, the weight law this sprint can break · [Solutions 29](../solutions/29-the-bond-that-woke-the-tree-it-was-building.md) — construction-versus-mutation, the other law a `frame()` change can break · [chemistry authorship](../../../chemistry/.lib/authorship/.cover.md) — the framework's own guide, and the standard "not a mess of chemistry" is measured against.

**Read in the code, whole, before U20:** `particle.ts` (the seat), `bond.ts` 1–235 (the reactive law and the inert registry), `chemical.ts` 896–1145 (facade — the precedent this imitates) and 1460–1745 (the `$` walk and DI), `molecule.ts` (what makes a field reactive), `scope.ts` (what a write reaches).

# <a id="gates"></a>The standing gates — unchanged, and one is louder this sprint

**Chemistry is NEVER modified except by Doug's direct instruction.** *He gave it, for this feature specifically:* **"put styled components on particle not chemical so its accessible on both… I want styled chemicals and styled particles both to be real."** **That instruction covers the mechanism below and nothing wider** — any chemistry change this plan did not name goes back to him first.

**Members and classes in `src` (lib) enter only on his explicit yes, one at a time** · **no feature ships unseen** — a real browser before any done-claim on paint-visible work · **zero code comments in `src`** beyond what the house allows · **elegance and minimality** — *"the technical code is carefully chosen; it doesn't need to look gnarly."*

# <a id="grounding"></a>What the reading established — the mechanism, anchored

*Every line below was read this session in the working copy. **State is marked**: `read` = verified by reading the source; `probe` = verified by running it; `inference` = derived and NOT yet checked. Nothing here is a guess wearing a fact's clothes.*

## <a id="g-precedent"></a>The precedent this feature copies exactly

| | | state |
|---|---|---|
| **A class-level flag on `$Particle` already exists in this shape** — `inline = false` ([particle.ts:72](../../../chemistry/package/src/abstraction/particle.ts)), *"a class declares itself inline… Read from the template, frozen."* | **`styled = false` is the same member on the same class.** | read |
| **`facadesOf` is the whole pattern** ([chemical.ts:907-927](../../../chemistry/package/src/abstraction/chemical.ts)) — a per-class `WeakMap` cache (`worn`, :901), read off **the template not the derivative** (:915, *"the declaration lives on the template, which is the one instance of a class that has its fields"*), by `Object.getOwnPropertyNames`, discriminating on the `$` prefix (:920). | **The CSS compiler is `facadesOf` with the `$` test inverted** — facades skip `$` members because a `$` member is a prop; styled *wants* both, and the prefix is what sorts baked from live. | read |
| **The cache is deliberately kept OFF the class object** (:898-901) — *"A lazy stamp on the constructor would pile a symbol onto it at first render, which is exactly what the constructor-static invariant forbids."* | **The COMPILED component lives in a module-private `WeakMap` keyed by class. The `[style]` symbol is the AUTHORED seat** (a declared member, like `facade = Card`), not the lazy stamp. *This is the one place the notes were loose and the code is strict.* | read |
| **`frame()` is where a particle wraps what it draws** ([chemical.ts:1104-1139](../../../chemistry/package/src/abstraction/chemical.ts)), and `$Chemical` already overrides it to wear a facade by calling `super.frame()`. | **Styled wraps at `$Particle.frame()`; the facade wrap sits outside it for free**, because `$Chemical.frame()` calls up. No ordering has to be invented. | read |
| **`deepestLook`** ([particle.ts:277-289](../../../chemistry/package/src/abstraction/particle.ts)) walks the prototype chain by **descriptor**, and skips an accessor by testing `descriptor.value`. | **The field-versus-getter discrimination the compiler needs is already written**, in the same file, for the same reason. | read |

## <a id="g-reactive"></a>The reactive law — ***the three tiers already exist; the framework marks nothing***

**`$Reflection.isReactive`** ([bond.ts:51-56](../../../chemistry/package/src/abstraction/bond.ts)) decides liveness **by name, in three cases that are exactly Doug's three spellings**: `_`-prefixed returns **false** (:53); a bare name returns **true** (:54); a `$`-prefixed name is reactive only when *special* — `$` plus a lowercase character (:57-66). And `[$props$]()` gathers **only** the `$`-special members into props ([chemical.ts:1153-1158](../../../chemistry/package/src/abstraction/chemical.ts)). `read`

| the author writes | reactive | a prop | what it compiles to |
|---|---|---|---|
| `_background` | **no** (bond.ts:53) | no | ***baked*** — the literal goes into the class stylesheet |
| `background` | yes (bond.ts:54) | no | an interpolation; the chemical can restyle **itself** |
| `$background` | yes (bond.ts:57) | **yes** (chemical.ts:1154) | an interpolation; **settable from outside** as JSX |

***This is the whole of it, and it is why Doug's correction makes the feature smaller.*** **The plan's previous version had the framework marking bare CSS fields inert through `@inert()`'s registry; that unit is now DELETED** — nothing is retro-fitted, no `bond.ts` export is needed, and [K4](#k4) (a silent ordering failure) **cannot occur because there is no registration to be late**. `read`

**What the compiler actually does differently per tier is one thing:** *`_` bakes a literal, the other two emit an interpolation.* **The difference between `background` and `$background` is entirely chemistry's existing prop machinery, which this feature does not touch** — Doug: *"the props work the same."* `read`

**Precedence is a resolution over spellings, not a mechanism:** for each CSS property, take the highest tier declared anywhere on the chain, nearest class first. **Promotion is that rule exercised by a subclass.** `inference — S7/S8 prove it`

**`$Bond.form()` activates ONLY a plain field** ([bond.ts:162](../../../chemistry/package/src/abstraction/bond.ts)) — *"if (!this._getter && !this._setter && !isMethod)"*. **A getter is never intercepted**, so `get $background() { return this.theme.background }` keeps its own body and its reads are tracked wherever it is called. `read`

## <a id="g-theme"></a>THE CORRECTION THIS PLAN OWES — cross-chemical repaint is NOT a subscription

***The notes say a theme write "repaints every styled chemical reading it." Read against the source, that is not the mechanism, and the difference decides U27.***

**`$Reaction.react()` re-renders exactly one chemical — its own** ([reaction.ts:42-49](../../../chemistry/package/src/abstraction/reaction.ts)): `const update = chemical[$update$]; if (update) update()`. **There is no registry anywhere in chemistry mapping "who read my property" to "re-render them."** `read`

**What a write actually reaches** ([bond.ts:212-229](../../../chemistry/package/src/abstraction/bond.ts), [scope.ts:78-119](../../../chemistry/package/src/implementation/scope.ts)): the written chemical itself, plus **its ancestors through `$$parent$$`** — `diffuse` walks upward and `finalize` does the same after marking. `scope.finalize`'s read-snapshot pass only revisits reads recorded **in that same scope**, so it catches in-place mutation during one entry; it is not a standing subscription across renders. `read`

***And there is no read-tracking over a render at all.*** **`withScope` has four call sites in `src`** — the `$Reagent` method path and the augmented-handler path — **and `$lift`'s render body never opens one** ([particle.ts:451-467](../../../chemistry/package/src/abstraction/particle.ts)). So when a view reads a property, `activate`'s `if (scope) scope.recordRead(...)` ([bond.ts:207-209](../../../chemistry/package/src/abstraction/bond.ts)) **never fires**. `verified by probe, 2026-09-04`

## THE PROBE'S VERDICT — ***the getter theme road does not work, and the road that does was found***

***Run in the package's own vitest and deleted after:*** a `$Chemical` holding `theme = new $ThemeAtom()` and `get $background() { return this.theme.background }`, drawn, then written. **Result: the getter answered `red`, the theme held `red`, and the DOM still said `blue`.** *The paint never re-ran.* `verified by probe`

***So Doug's "I assume that will work" is false as written, and the reason is not the getter.*** **Respelling it as a field, a method or a getter changes nothing** — what decides whether a write reaches a reader is **the parent edge**, because the only cross-chemical path is `diffuse`'s upward walk.

**Two spellings DO work, both probed green:**

- **the parent link set by hand** — `theme[$parent$] = reader` before the write; and
- ***the one the plan takes*** — **build the theme with `$(<Theme/>)` INSIDE the bond constructor.** `evalElement` parents the built instance to the asker ([chemical.ts:1669-1673](../../../chemistry/package/src/abstraction/chemical.ts)) and the synthesis child path binds it ([chemical.ts:493, 1214](../../../chemistry/package/src/abstraction/chemical.ts)), **so the edge exists with no framework change whatsoever.** `verified by probe`

***And a shared theme cannot be one instance parented into many readers:*** the `[$parent$]` setter reassigns the catalyst and re-registers the reaction ([chemical.ts:1066-1067](../../../chemistry/package/src/abstraction/chemical.ts)), so **the last parent wins**. **The shape the mechanism supports is a per-reader child that forwards to a shared theme**, and [R152](#r152) is respelled accordingly: ***delivered as a CHILD, not merely resolved by DI.*** `verified by probe`

## <a id="g-di"></a>The DI half — and why the rewrite IS the fix

**`$(plainFunction)` already wraps a bare function component into a chemical component** ([chemical.ts:1690-1692](../../../chemistry/package/src/abstraction/chemical.ts) → `wrapped`, :1484-1494). ***Doug asked for this on 2026-09-03 — "can we do a `$` overload where if you specify a function component as a function, you get back a component that is the wrapped chemical component?" — and it is already built.*** `read`

**A styled component fails because it is an OBJECT, not a function** — a `forwardRef` exotic. It misses `typeof arg === 'function'` at :1690, :1698 and :1727 and falls to `return null` at :1743. **`wrapped` itself returns a non-function untouched** (:1485), so a raw dress can be *registered* but never *fetched*. `read`

***And that is why the encyclopedia rewrite is not a consumer of the fix — it IS the fix.*** **A styled chemical is a class**, so `$($Body)` takes the class form, and the dress becomes DI-able, subclassable and look-bearing like everything else. **Chapter zero's [item 29](00-planning.md#the-road) offered two roads — wrap in lib, or teach chemistry the exotic — and this sprint takes NEITHER**, because a dress that is a chemical never presents an exotic to `$`. *The three hand-written `[style]` seats stay literal inside their chemicals, where nothing fetches them.* `inference — U26 is where it is proven`

## <a id="g-props"></a>One alignment worth the whole design

**`[$props$]()` gathers every `$`-special bond into props and strips the `$`** ([chemical.ts:1147-1166](../../../chemistry/package/src/abstraction/chemical.ts), `props[bond.property.slice(1)] = value`). **styled-components v6 treats a `$`-prefixed prop as TRANSIENT — consumed by the stylesheet and never forwarded to the DOM.** `read (chemistry) · reference (styled-components v6 convention)`

***So chemistry's spelling for "deliberately live" and styled-components' spelling for "style-only, do not leak" are the same character.*** **The styled path therefore passes `$`-props WITH the `$` intact** — interpolations read `props.$background`, and nothing reaches the element as an invalid HTML attribute. *It also means the styled path must not simply reuse `[$props$]()`, which strips.* [D60](#d60).

## <a id="g-encyclopedia"></a>The encyclopedia, measured — and three corrections to the record

**Eleven files, thirteen exports, ~109 lines** ([src/encyclopedia/](../../package/src/encyclopedia/)), thirteen import sites across eleven consumers. `read`

| dress | tag | flat CSS fields | shape | consumers | grain |
|---|---|---|---|---|---|
| `Body` | `main` | 8 | flat | Book | one per book |
| `Article` | `article` | 1 | flat | Chapter | one per chapter |
| `Output` | `div` | 0 | ***nested*** `> *:first-child` | Chapter | one per chapter |
| `Heading` | `h2` | 7 | flat | Title, References, Index | one per title |
| `Prose` | `p` | 1 | ***nested*** `& &` | *(none — removed in Sprint 39)* | — |
| `Bullets` | `ul` | 2 | flat | List | one per list |
| `Cited` | `ol` | 3 | flat | References, Index | one per section |
| `Wikitable` + `Cell` | `table`, `td` | 5 + 2 | flat | Table | **one per CELL** |
| `Anchor` | `a` | 2 | ***nested*** `&:hover` | Writing, Ref, Reference | ***ANY grade, including word*** |
| `Columns` | `div` | 2 | flat | ***none*** | — |
| `Table` + `Cell` + `Header` | `table`,`td`,`th` | 5+2+5 | flat | ***none*** | — |

***Three corrections to what the record says:***

1. **The notes say two non-flat dresses; there are THREE** — `Anchor` (`&:hover`), `Prose` (`& &`) and `Output` (`> *:first-child`). *The third was missed because it has no declaration outside its nested block.* `read`
2. **`encyclopedia/Table.tsx` and `Columns.tsx` have ZERO consumers** — `writing/Table.tsx` imports from `Wikitable.tsx` instead, and `Table.tsx` is a near-duplicate of it. **~40 lines of dead dress in the folder being rewritten**, and [ch13](../designing-inexplicable-phenomena/13-the-default-dress.md) claims `Columns` dresses a plain file. *A thing said twice, and a thing said once and never used.* `read`
3. **`Anchor` is drawn by `$Writing.view()`** ([Writing.tsx:41](../../package/src/writing/Writing.tsx)) for any writing carrying a `means` — **and `$Writing` is the base of all seven levels**, so an Anchor can land at word grade. ***That is Solutions 45's weight class, and it is the sprint's largest risk*** ([K3](#k3)). `read`

# <a id="requirements"></a>The requirements — approved, from Sprint 39's brainstorm with Doug

*R137–R156 continue Sprint 38's series (last R136). **Each cites the sentence of Doug's it comes from**; nothing here is invented by the plan. Requirements state what would be OBSERVED.*

**The seat and the flag**

- <a id="r137"></a>**R137** — the whole mechanism lands on `$Particle`; a styled **particle** and a styled **chemical** are both real. *("put styled components on particle not chemical so its accessible on both… I want styled chemicals and styled particles both to be real.")*
- <a id="r138"></a>**R138 — RULED 2026-09-04, and it is Doug's own improvement on his seed.** A class declares **`selector = styled.whatever`** — one **class field** holding the styled factory, which carries *both* the opt-in and the element, so nothing tests a boolean and no tag string is parsed. *He arrived at it by noticing the design had no element: "we don't have the part that compiles to the selector… Instead of true what if we wrote `styled.main`."*
- <a id="r139"></a>**R139** — the declaration is read by an **overridable step, never an `if` on the base** — the override-don't-condition law applies to our own design. *(R136, and Doug's OO correction: "the right answer is to override something in writing".)*
- <a id="r140"></a>**R140 — `styled` SURVIVES as the explicit override**, verbatim: *"keep it — if `styled` is undefined we just read the selector; if it is false or true we read styled and selector… in case we ever have a default selector, which we can do in later sprints if we find it useful."* **So the resolution is three-valued:** `styled === false` refuses; `styled === true` opts in; **`undefined` means the presence of a `selector` decides.**

**The compile**

- <a id="r141"></a>**R141** — a field is CSS iff its name (after stripping a leading `$`) is a real CSS property and its value is a string or number. *("Can you find an elegant way to detect those?" — the browser's own property list.)*
- <a id="r142"></a>**R142** — the compiled component is built **once per class** and read from any instance.
- <a id="r143"></a>**R143** — the compiled component lands at `[style]`, **an exported symbol**, the `[cache]` idiom. *("maybe export a symbol called style, so that [style] is the compiled component if anyone needs it")*
- <a id="r144"></a>**R144** — an **occupied `[style]` seat is used as-is and nothing compiles** — the escape hatch for a dress needing nested selectors.
- <a id="r145"></a>**R145** — a subclass compiles **only its own field contributions** and extends the parent via `styled(Parent)`; **JS inheritance is the CSS cascade.**

**The three spellings — RULED 2026-09-04, superseding the notes' two-way split**

***Doug, correcting the design mid-plan:*** *"Actually no, just support `_` properties: `$background` — a prop; `background` — a reactive non-prop; `_background` a non-reactive non-prop. Allow for overriding, favor them in that order: honor `$background`, then `background`, then `_background`, which means props can be promoted up."* **And on what it costs to build:** *"it's really no different. The props work the same. It has to do with how you compile. You ignore `_background` if `background` is there and ignore `background` if `$background` is there."*

- <a id="r146"></a>**R146** — **three spellings of one CSS property, and they are chemistry's existing law rather than a new one**: `$background` is special-reactive **and a prop** ([bond.ts:57-66](../../../chemistry/package/src/abstraction/bond.ts), gathered by [`[$props$]`](../../../chemistry/package/src/abstraction/chemical.ts)); `background` is bare-reactive and **not** a prop; `_background` is **inert** ([bond.ts:53](../../../chemistry/package/src/abstraction/bond.ts), `if (property.startsWith('_')) return false`). ***The author chooses the tier by spelling it; the framework marks nothing.***
- <a id="r147"></a>**R147** — **the precedence is `$` over bare over `_`**, resolved per CSS property across the whole chain: a spelling present higher in the order **silences the ones below it**.
- <a id="r148"></a>**R148** — **promotion is that precedence used by a subclass** — respelling `_x` as `x` or `x` as `$x` moves the property up a tier, and down again. **One CSS property, nearest class wins.** *("I love the $x and x thing. Yes allow promotion. That is powerful.")*
- <a id="r149"></a>**R149** — the tiers are observably different: writing `_background` repaints **nothing**; writing `background` repaints the chemical and **restyles it**; `$background` does the same **and can be set from outside as a prop**.

**Wearing it**

- <a id="r150"></a>**R150** — the wrap point is `frame()`; style and the `pd-` classNames become **one system**, not two wrappers.
- <a id="r151"></a>**R151** — **no rendered element carries a `style` attribute**, framework surfaces included. *("Oh don't ever put style on HTML!!")*

**The theme**

- <a id="r152"></a>**R152 — RESPELLED BY THE PROBE.** A theme is **delivered as a CHILD of each reader**, not merely resolved by DI — the parent edge is the only thing `diffuse` can walk. No `ThemeProvider`. *(Sprint 19's ruling still holds: a second injection system can disagree with the first.)*
- <a id="r153"></a>**R153 — CORRECTED 2026-09-04 BY PROBE.** *Doug wrote "I assume that will work" of `get $background() { return this.theme.background }`; **it does not work on its own** — the DOM held the old value while the getter answered the new one.* **The requirement stands, and its mechanism is now the bond-constructor build** ([§ the probe's verdict](#g-theme)): a theme built with `$(<Theme/>)` in the reader's bond constructor **does** repaint it on a later write, with no framework change.
- <a id="r154"></a>**R154** — the **bond road is static**: values copied at construction do not flow after.

**The lib half**

- <a id="r155"></a>**R155** — the encyclopedia is rewritten as styled chemicals and **each dress is fetchable through `$`, subclassable, and swappable per scope** — which is the sprint's actual point. *("rewrite the encyclopedia folder to have chemicals that can be DI'd with $ and, in general, be evolved polymorphically in chemistry.")*
- <a id="r156"></a>**R156** — `Styled.ts`'s interop shim is **deleted or reduced to one place**. *("what is this and why is this needed? Not a fan… The code is awful.")*

# <a id="decisions"></a>The decisions — D54 onward, each with what it was chosen OVER

- <a id="d54"></a>**D54 — the compiler lives in CHEMISTRY, in its own module, `styled.ts` beside `formula.ts`.** ***This is the ruling the handoff said opens the sprint, and the reading answers it:*** the mechanism reads `$Reflection`, the inert registry, the template, and `frame()` — **four things that are chemistry's own and are not exported** — so a lib-side implementation would either re-implement them or reach through the membrane. **Chosen over:** a lib base class that migrates later *(rejected: it cannot mark a field inert, so R146 is unbuildable outside chemistry)*, and putting it inside `particle.ts` *(rejected: particle.ts is 470 lines and this is a separable concern — `formula.ts` is the precedent for a small file holding one idea).* ***Doug rules this; the plan states the reading, not the verdict.***
- <a id="d55"></a>**D55 — `selector` and `styled` are plain fields on `$Particle`, exactly like `inline`.** **Chosen over:** a getter *(Doug: "This is the way we set this on a class. Not the getter of a property")*; a decorator *(rejected: `@inert`/`@look` decorate a MEMBER; this decorates a class, and a field already says it)*; and the plan's own earlier `styled = true` + `tag = 'main'` *(**superseded by Doug**: a boolean sentinel plus a stringly-typed tag, where one value carries both)*.
- <a id="d69"></a>**D69 — the escape hatch collapses into the same member.** `selector` holds **either** a factory (`styled.main` — *compile my fields into this*) **or** a finished component (``styled.a`&:hover {…}` `` — *use this, compile nothing*), and the framework tells them apart because a factory is a **function** and a styled component is a **forwardRef object**. **So `Anchor`, `Prose` and `Output` need no second seat**, and `[style]` stays purely what you **read** to get the compiled result. **Chosen over:** a separate authored `[style]` seat *(rejected: two ways to say one thing).*
- <a id="d70"></a>**D70 — the wrap is at `frame()` so it covers EVERY look.** *Doug: "We want chemistry to always add the styled component to the view… It probably wants to do this in frame so that it works for all views."* **A `view()` never wraps itself**, so `view`, `$view` and `$$view` are all dressed by one seat and a subclass adding a look gets the dress free.
- <a id="d56"></a>**D56 — the flag is consumed by an OVERRIDABLE STEP on `$Particle`, not a condition.** `frame()` asks one protected method for what to wrap in; **the base answers nothing and the styled path answers the compiled component** — so a subclass can replace the whole policy without the base ever testing a flag. **Chosen over:** `if (this.styled)` in `frame()` *(rejected by R139 and by Doug's standing correction).*
- <a id="d57"></a>**D57 — THE FEATURE ADDS NO NEW CONCEPT TO CHEMISTRY. It composes five that exist:** the template-read (`facadesOf`), the per-class `WeakMap` (`worn`), the descriptor walk (`deepestLook`), **the three-tier naming law (`$Reflection.isReactive`, which is Doug's three spellings already written)**, and the wrap seat (`frame`). ***This is the answer to "don't make a mess of chemistry", and it is checkable as a diff: ONE new file, ONE field on `$Particle`, ONE exported symbol, ONE protected method — and nothing else touched. `bond.ts`, `molecule.ts`, `scope.ts` and `reaction.ts` are not opened.*** [K1](#k1) is what happens if that stops being true.
- <a id="d66"></a>**D66 — the three spellings are RESOLVED, never merged** ([R147](#r147)): one CSS property is emitted once, from its highest declared tier. **Chosen over:** emitting each spelling and letting the cascade sort it *(rejected: last-wins in CSS is position-dependent, so a subclass's `_x` could beat a base's `$x` by accident — the precedence must be decided before the stylesheet exists, not inside it)*.
- <a id="d58"></a>**D58 — the compiled component is cached in a module-private `WeakMap` keyed by CLASS; `[style]` is the authored seat and a getter that answers either.** **Chosen over:** stamping the compiled component onto the constructor *(refused by chemical.ts:898-901's own comment — the constructor-static invariant)* and caching per instance *(rejected: R142, and it would multiply stylesheets).*
- <a id="d59"></a>**D59 — CSS detection is `name in element.style`, computed once per name into a module-level `Set`.** **Chosen over:** a hand-kept property roster *(rejected: [The Order of a Class](../designing-inexplicable-phenomena/08-the-order-of-a-class.md)'s "an exception may never enumerate a roster", and the browser already holds the list)* and a naming convention like a `css` prefix *(rejected: Doug asked for plain camelCase fields).*
- <a id="d60"></a>**D60 — live props reach the stylesheet WITH their `$` intact**, not through `[$props$]()`, which strips it. **Chosen over:** reusing `[$props$]()` *(rejected: a stripped `background` prop is forwarded to the DOM by styled-components and becomes an invalid attribute — [§ the alignment](#g-props)).*
- <a id="d61"></a>**D61 — the template guard is NOT copied from the facade.** `$Chemical.frame()` opens `if (this[$isTemplate$]) return super.frame()`; **an `$Atom` IS its own template** ([atom.ts:23-39](../../../chemistry/package/src/abstraction/atom.ts)), so copying that guard would make a styled atom — the natural theme container — the one thing that can never wear its own style. **Chosen over:** symmetry with the facade *(rejected on the read).*
- <a id="d62"></a>**D62 — the three nested dresses (`Anchor`, `Prose`, `Output`) occupy `[style]` by hand and compile nothing.** ***They are the feature's escape hatch being exercised by its first consumer, which is the honest way to prove R144.*** **Chosen over:** teaching the compiler nested selectors *(rejected this sprint: it is a second feature wearing the first one's name).*
- <a id="d63"></a>**D63 — the dead dresses are DELETED, not ported.** `encyclopedia/Table.tsx` and `Columns.tsx` have no consumers. ***Deletion is Doug's call under the standing gate*** — the plan flags rather than acts, and [U29](#u29) is written as an ask.
- <a id="d64"></a>**D64 — `Anchor` is the one dress that does NOT become a chemical this sprint.** It rides a word-grade seat ([§ the encyclopedia](#g-encyclopedia)); making it a chemical puts a construction on the parse's hottest path, which is the exact shape of [Solutions 45](../solutions/45-the-view-that-constructed-its-parts.md) three times over. **Chosen over:** rewriting all thirteen uniformly *(rejected on the grain measurement)*. ***U28 measures it and Doug rules; the plan does not decide his aesthetics by arithmetic alone.***
- <a id="d65"></a>**D65 — RULED BY DOUG 2026-09-04: styled-components becomes a REGULAR dependency of chemistry.** *His words: "A regular dependency. It is the way chemicals are styled. If chemicals are too big we will have to do some performance optimization."* It is a devDependency today (^6.1.0, already imported by `dev.ts`), which would make the compiler a runtime import from a package that does not declare it.
- <a id="d67"></a>**D67 — THE COMPILER EMITS NO GETTERS. A CSS property is a FIELD at every tier.** ***Forced by a probe, not chosen:*** `tsconfig.json` sets **`useDefineForClassFields: false`**, so a class field is a plain **assignment** in the constructor — it runs *through* any accessor already on the chain. Consequences, all four probed: **an accessor always wins over a field in both directions**; a base field's initializer is **delivered to a subclass's setter and then overwritten**; and ***a getter-only accessor anywhere on the chain makes any class that spells the same name as a field UNCONSTRUCTIBLE*** — `TypeError: Cannot set property $x … which has only a getter`. **So promotion must stay field-to-field**; the moment the compiler emits an accessor for a CSS name, every other class in that chain declaring it plainly either crashes or is silently swallowed. **Chosen over:** the notes' "the compiler prefers accessors per property" *(refused by the probe).*
- <a id="d68"></a>**D68 — the compiler reads the template like `facadesOf` but does NOT copy its loop.** That loop **skips `$`-prefixed names** ([chemical.ts:920](../../../chemistry/package/src/abstraction/chemical.ts), *"A `$`-PREFIXED MEMBER IS A PROP"*) — which is precisely the live tier — **and it enumerates the template's own properties, so it is blind to getters on the prototype.** Both are correct for facades and wrong for styled. *A copied loop would silently drop every live CSS field, which is the kind of failure that ships green.*

# <a id="units"></a>The units — U20 onward, each with its mechanism, files, and visible end

*Continuing Sprint 39's series (last U19). **A unit that cannot name what runs and when is marked DESIGN OWED and denied files and scenarios.** Each names its demo contribution: what a person will SEE.*

## <a id="u20"></a>U20 — the seat and the flag

**Mechanism:** `selector` and `styled` declared on `$Particle` beside `inline`; the exported `style` symbol added to `implementation/symbols.ts` beside `cache`; `$Particle` gains one protected member answering the component to wrap in, whose base answer is nothing. **The three-valued resolution** ([R140](#r140)) lives in that one member, so nothing else ever consults either field. Chemistry also **exports its own resolved `styled`** as the importable default ([ask 7](#asks)).
**Files:** `chemistry/src/abstraction/particle.ts`, `chemistry/src/implementation/symbols.ts`, `chemistry/src/index.ts` (exports), `chemistry/package.json` ([D65](#d65)).
**Depends on:** nothing. **Realizes:** [R137](#r137), [R138](#r138), [R140](#r140), [R143](#r143).
**Demo contribution:** nothing visible yet — **this is the only unit in the sprint with no visible end**, and it is two fields, one symbol and one method.

## <a id="u21"></a>U21 — the compiler

**Mechanism:** a new `chemistry/src/abstraction/styled.ts`. Given a class: read its template's **own** property names (the `facadesOf` read, [chemical.ts:915-924](../../../chemistry/package/src/abstraction/chemical.ts)); keep those that are CSS by [D59](#d59); resolve the tiers by [U23](#u23); emit kebab declarations; build `styled(tag)` at the root of the chain and `styled(ParentCompiled)` above it; cache in the module `WeakMap` by class ([D58](#d58)).

***The one subtlety, and it is why R145 is a unit rather than a line:*** **every class field on the whole chain lands as an own property of the SAME template instance** — initializers all run on one object — **so the template alone cannot say which class contributed what.** But **each class has its own template** (`$$template$$` is per class, [particle.ts:104-105](../../../chemistry/package/src/abstraction/particle.ts)), so **per-class attribution is a diff of a class's template against its PARENT class's template**. `verified by a subagent probe, 2026-09-04` *That diff is what makes JS inheritance the CSS cascade instead of every subclass re-emitting its parent's declarations.*
**Files:** `chemistry/src/abstraction/styled.ts` (new).
**Depends on:** [U20](#u20). **Realizes:** [R141](#r141), [R142](#r142), [R145](#r145).
**Demo contribution:** a two-class fixture in the Lab whose subclass changes one colour and inherits the rest — **visible as a cascade a hand-authored stylesheet cannot fake, because deleting the parent's field changes the child.**

## <a id="u22"></a>U22 — wearing it at `frame()`

**Mechanism:** `$Particle.frame()` asks [U20](#u20)'s step; when it answers a component, the drawn output is wrapped in it, carrying the live props ([D60](#d60)) and the existing className. No template guard ([D61](#d61)). `$Chemical.frame()`'s facade wrap is unchanged and lands outside by calling `super.frame()`.
**Files:** `chemistry/src/abstraction/particle.ts`.
**Depends on:** [U21](#u21). **Realizes:** [R150](#r150), [R151](#r151), [R144](#r144).
**Demo contribution:** the Lab fixture renders as a real styled element — **a class with no `style` attribute and a generated className, asserted by `getComputedStyle`** the way [`dev-panels.test`](../../../chemistry/package/tests/implementation/dev-panels.test.tsx) already does.

## <a id="u23"></a>U23 — the three tiers and their precedence

**Mechanism:** the compiler groups every CSS-named field on the chain **by its bare CSS property**, stripping a leading `$` or `_`, and keeps **one spelling per property** — `$` over bare over `_`, nearest class first ([R147](#r147)). A `_` winner is **baked** as a literal declaration; the other two emit an **interpolation**. ***Nothing is registered anywhere and `bond.ts` is not touched*** — the tiers are already the reactive law ([§ the reactive law](#g-reactive)).
**Files:** `chemistry/src/abstraction/styled.ts`.
**Depends on:** [U21](#u21). **Realizes:** [R146](#r146), [R147](#r147), [R149](#r149).
**Demo contribution:** three swatches side by side and a render counter — **writing the `_` one moves nothing, the bare one restyles itself, the `$` one is driven from outside.**

## <a id="u24"></a>U24 — promotion

**Mechanism:** none beyond [U23](#u23)'s resolution — **promotion IS the precedence rule used by a subclass.** The compiler reads the value of the winning spelling at frame time and passes it to the interpolation with its `$` intact ([D60](#d60)); a `_` winner never becomes a prop at all.
**Files:** `chemistry/src/abstraction/styled.ts`.
**Depends on:** [U22](#u22), [U23](#u23). **Realizes:** [R148](#r148).
**Demo contribution:** ***the sprint's showpiece*** — a base class baking `_background`, a subclass promoting it to `$background`, and a control moving it live in the browser while the base's sibling stays put.

## <a id="u25"></a>U25 — the escape hatch

**Mechanism:** an occupied `[style]` seat is answered as-is and the compiler is never called.
**Files:** `chemistry/src/abstraction/styled.ts`.
**Depends on:** [U21](#u21). **Realizes:** [R144](#r144).
**Demo contribution:** `Anchor`'s hover works in the browser — a nested selector no compiler emitted.

## <a id="u26"></a>U26 — the encyclopedia as styled chemicals

**Mechanism:** each dress becomes a class with `styled = true`, its tag, and its CSS as fields; the three nested ones hand-write `[style]` ([D62](#d62)); consumers import the chemical component instead of the raw dress. **The DI claim is proven here, not asserted:** one scope registers a replacement `$Heading` and a second book on the same page keeps the original.
**Files:** all of `library/.public/package/src/encyclopedia/`, plus the eleven consumer files.
**Depends on:** [U24](#u24), [U25](#u25). **Realizes:** [R155](#r155).
**Demo contribution:** ***two books on one page in different dresses, from one codebase*** — and a `pd-` className rail unchanged beside it.

## <a id="u27"></a>U27 — the theme — ***the probe RAN, and the mechanism is now known***

**Mechanism, verified rather than assumed:** the theme is built with **`$(<Theme/>)` inside the reader's bond constructor**, which parents it to the reader, which is the only edge `diffuse` can walk. A **shared** theme is a per-reader child that forwards to it, never one instance parented into many ([§ the probe's verdict](#g-theme)). The reader then spells its CSS live — `$background` — and a write to the theme repaints it.
**Files:** `chemistry` only if the forwarding shape needs a seat; otherwise **lib and the demo alone.** **Depends on:** [U24](#u24). **Realizes:** [R152](#r152), [R153](#r153), [R154](#r154).
**Demo contribution:** a dark theme switching a page live.
***Two traps this unit must not step in, both probed:*** an `$Atom` **silently swallows the first write after any re-construction** ([atom.ts:25-26](../../../chemistry/package/src/abstraction/atom.ts) with [bond.ts:213](../../../chemistry/package/src/abstraction/bond.ts)), so `new Theme().x = y` in a second class loses a value with no error; and **a never-rendered chemical has no reactivity at all** — bonds form only when the molecule reactivates on the render path, so a theme built in a configuration module and never mounted is a plain data object.

## <a id="u28"></a>U28 — the grain measurement

**Mechanism:** measure the cost of a chemical instance at the `Anchor` seat against today's raw dress — a book page's construction count and heap, the [Solutions 45](../solutions/45-the-view-that-constructed-its-parts.md) differential, run twice.
**Files:** measurement only. **Depends on:** [U26](#u26). **Realizes:** the mitigation for [K3](#k3).
**Demo contribution:** a number, with the suite green or red beside it.

## <a id="u29"></a>U29 — the shim and the dead dresses

**Mechanism:** `Styled.ts`'s interop shim survives only where a hand-written `[style]` still imports styled-components directly; the dead `Table.tsx` and `Columns.tsx` are put to Doug for deletion ([D63](#d63)).
**Files:** `library/.public/package/src/utilities/Styled.ts` and the two dead files.
**Depends on:** [U26](#u26). **Realizes:** [R156](#r156).
**Demo contribution:** nothing visible; a line count and a question.

## <a id="u30"></a>U30 — the browser gate

**Mechanism:** a `verify-styled.mjs` in the `verify-*.mjs` family drives a real browser and asserts **visible text and computed style**, including a reload where persistence is claimed.
**Files:** `chemistry/package/app/verify-styled.mjs`. **Depends on:** [U26](#u26), [U27](#u27).
**Demo contribution:** ***the sprint's stop condition*** — [no feature ships unseen](../designing-inexplicable-phenomena/11-the-coding-style.md#seen).

# <a id="scenarios"></a>Test scenarios — Queenie's, per unit

*Each names input, action, expected outcome, and the unit it covers. **Every one is watched going RED before it is trusted.** They live in `chemistry/package/tests/abstraction/styled.test.tsx`, the per-feature file that `facade.test.tsx` and `formula.test.tsx` already model.*

| | scenario | covers |
|---|---|---|
| **S1** | a class with `styled = true`, `tag = 'main'` and `maxWidth = '60em'` renders a `<main>` carrying a generated className, **no `style` attribute**, and `getComputedStyle().maxWidth === '60em'` | [U21](#u21) [U22](#u22) |
| **S2** | a class WITHOUT the flag renders exactly as it does today — byte-identical output | [U20](#u20) [U22](#u22) |
| **S3** | a subclass adding one field keeps the parent's declarations and adds its own; the parent's own rendering is unchanged | [U21](#u21) |
| **S4** | two instances of one class share **one** compiled component; a subclass's differs | [U21](#u21) |
| **S5** | writing `_background` re-renders **nothing** and restyles nothing (render counter unmoved) | [U23](#u23) |
| **S6** | writing `background` re-renders the chemical and the computed style changes; it is **not** settable as a JSX prop | [U23](#u23) |
| **S6b** | `$background` does both **and** arrives from outside as `<X background="red">` | [U23](#u23) |
| **S7** | **precedence** — a class declaring `_background`, `background` and `$background` emits the property **once**, from `$background`; delete it and `background` wins; delete that and `_background` bakes | [U23](#u23) |
| **S8** | **promotion and demotion** — a subclass respelling `_x` as `$x` goes live while the base still bakes it; respelling back stops the repaint | [U24](#u24) |
| **S9** | an occupied `[style]` seat is used and the compiler never runs (spy or identity check) | [U25](#u25) |
| **S10** | a non-CSS field (`name = 'Body'`) is not emitted and stays reactive | [U21](#u21) [U23](#u23) |
| **S11** | a `$`-CSS prop does **not** reach the DOM as an attribute | [U24](#u24) [D60](#d60) |
| **S12** | `$($Body)` resolves, and a scope registration swaps a styled chemical for another — **two sibling scopes answer differently** | [U26](#u26) |
| **S13** | a styled **particle** (not chemical) draws styled — R137's other half | [U20](#u20) [U22](#u22) |
| **S14** | a styled `$Atom` wears its style — the [D61](#d61) guard | [U22](#u22) |
| **S15** | theme: a write repaints a reader **(composed)**; and **(DI-registered)** — *the probe, expected to disagree with each other* | [U27](#u27) |
| **S16** | a facade over a styled chemical: both wrappers appear, styled inside | [U22](#u22) |
| **S17** | lib regression — every existing suite unchanged; `pd-` classNames identical before and after | [U26](#u26) |

# <a id="risks"></a>The risks — stated with numbers where we have them

- <a id="k1"></a>**K1 — the mess.** *The named risk of the sprint.* **Mitigation is a MEASUREMENT, not a promise:** [D57](#d57) says the diff introduces one file, one field, one symbol, one protected method. **If the chemistry diff grows a fifth kind of thing, the sprint stops and asks.**
- <a id="k2"></a>**K2 — the theme is not the mechanism the notes describe** ([§ the correction](#g-theme)). **Mitigation:** [U27](#u27) probes before it builds and is allowed to return a finding instead of a feature.
- <a id="k3"></a>**K3 — weight at the wrong grain, and it is now MEASURED rather than feared.** *Doug asked "why are chemicals so much bigger than particles?" — **they are not.*** **10,000 instances each, gc on, in the chemistry package, 2026-09-04:** `verified by probe`

  | | bytes/instance | bonds |
  |---|---|---|
  | particle, bare | **1,441** | 0 |
  | chemical, bare | **1,804** | 0 |
  | particle + bonds | 3,676 | 4 |
  | chemical + bonds | **7,073** | 10 |
  | chemical + 8 **reactive** CSS | **10,308** | 18 |
  | chemical + 8 **`_`** CSS | **7,222** | 10 |

  ***A bare chemical is 363 bytes more than a bare particle.*** **What costs is BONDS, at a steady ~530–560 bytes each**, and a chemical simply declares six more reactive members than a particle. **And the `_` tier is worth 21×:** eight reactive CSS fields cost **3,235 bytes**; the same eight spelled `_` cost **149 bytes total**, landing byte-for-byte on a bare bonded chemical. ***Doug's spelling rule IS the performance optimization he said we might need.***
  **What survives as risk:** a styled chemical dress is ~7.2 KB and a styled particle dress ~3.7 KB — **roughly 2×** — and `Anchor` rides a word-grade seat. **Mitigation:** [D64](#d64) holds `Anchor` back pending Doug's ruling; [U28](#u28) measures a real book page. *The Sprint-39 figure of ~20 KB per chemical was the whole parse allocation per writing, not the chemical shell — the shell is ~7 KB.*
- <a id="k4"></a>**K4 — DISSOLVED 2026-09-04 by Doug's three-spelling rule, and kept here because the dissolution is the lesson.** *The risk was: the framework marks bare CSS fields inert, the registration lands after the molecule forms bonds, and a baked field stays quietly reactive — **an invisible failure**, a page that works while repainting too much.* **It cannot happen now, because nothing is registered:** `_background` is inert by its own name, at the same moment every other name is read. ***A tier the author spells cannot be applied late.***
- <a id="k5"></a>**K5 — class churn under live props.** styled-components generates a class per distinct `$`-value combination; a slider on a `$` property can churn. **Mitigation:** named in the Lab demo and measured in [U28](#u28), not designed around.
- <a id="k6"></a>**K6 — two copies of styled-components**, which is the framework's own recorded defect in a new hat. **Mitigation:** [D65](#d65)'s peer dependency, and a check that the built artifact carries one.
- <a id="k7"></a>**K7 — the redo.** *Doug: **"Note that we are going to redo a lot of this."*** **Mitigation:** hold the encyclopedia's arrangement loosely; do not defend it.

# <a id="asks"></a>Batched for Doug — nothing below is decided by the plan

1. ~~The compiler's home~~ — **DEFERRED by Doug 2026-09-04**: *"This is for later. We are doing styled chemicals."* The plan proceeds in chemistry, since the seat he ruled ($Particle) is there.
2. **THE ONE OPEN NAME — the declaring member.** *Doug's own better idea, 2026-09-04:* **`styled = styled.main` instead of `styled = true` + `tag = 'main'`** — one value carrying both the opt-in and the element, so nothing tests a flag and no tag string is parsed. **He floated `selector = styled.main` as the spelling.** ***His to name; everything else in [U20](#u20) is ready.***
3. **`Anchor` stays a raw dress this sprint** ([D64](#d64)) — ***the numbers are now in [K3](#k3)***: a chemical dress ~7.2 KB against a particle dress ~3.7 KB, at a word-grade seat. **The aesthetics are his.**
4. ~~Deleting the dead dress files~~ — **DONE by Doug**: he deleted `Wikitable.tsx` and ruled *"deal with two table files in different folders."* `writing/Table.tsx` now imports the dress from `encyclopedia/Table`, **aliased at the import because both folders export a `Table`** — the alias is a stopgap and the styled rewrite is where the collision resolves properly. `src` tsc 0.
5. ~~styled-components as a peer dependency~~ — **RULED: a regular dependency** ([D65](#d65)).
6. ~~One `bond.ts` export so the compiler can mark a field inert~~ — **WITHDRAWN**: the three-spelling rule removed the need. *This also retires an unexercised mechanism — `@inert()` has **zero call sites in the whole repo**, so the plan's earlier version rested the baking half on untested code.* `verified by probe`
7. **NEW, out of his own question:** **chemistry exports a sensible default `styled` that can be imported** — the interop resolution written once inside the framework, which **deletes lib's `Styled.ts`** ([R156](#r156)) rather than relocating it. *Configuring it is then just assigning a different factory to the member; there is no registry to invent.*

# <a id="self-check"></a>The plan checked against itself

**Every requirement has a home:** R137→U20/U22 · R138→U20 · R139→D56/U20 · R140→U20 · R141→U21 · R142→U21 · R143→U20 · R144→U25 · R145→U21 · R146→U23 · R147→U23 · R148→U24 · R149→U23 · R150→U22 · R151→U22 · R152–R154→U27 · R155→U26 · R156→U29. **Nothing drops.**

**Every unit has a mechanism and a visible end** except [U20](#u20), which is named as the exception and is four lines.

**Where the plan is thin, said rather than smoothed:** [U27](#u27) is a probe wearing a unit's number, and it is marked so — it is the ONLY unit whose mechanism the plan declines to assert. Everything else is anchored to a line that was read this session.

**The size check** ([the dispatch rule](../../../../.claude/library/our-skillset/29-ce-plan.md)): the chemistry half is **one new file of roughly forty lines plus three small edits**, and the lib half is **eleven small files and eleven consumers** — ***one session's work, and it is not divided.*** *Doug's correction made it smaller mid-plan, which is the plan working rather than the plan being wrong.*

# <a id="built"></a>BUILT, SEEN AND DOCUMENTED — 2026-09-04

***The feature shipped and the encyclopedia rides it.*** **Gates: $Chemistry 844/844 (from 831) tsc 0 · lib 543/543 · 14/14 in a real browser with zero console errors.**

**The chemistry diff is what the plan promised** — `styled.ts` new, two fields and one method on `$Particle`, one symbol, one name added to `molecule.ts`'s framework set. ***`augment.ts` is byte-identical to HEAD: the render walk was never touched.***

**WHAT DOUG CHANGED WHILE IT WAS BEING BUILT, and every change made it smaller or truer:**

- **The three spellings** replaced the two-way baked/live split, deleting a whole unit and taking `bond.ts` off the touch-list. *`@inert()` turned out to have **zero call sites in the repo**, so the earlier plan rested the baking half on untested code.*
- **`selector = styled.main`** replaced `styled = true` + `tag`, one value carrying the opt-in and the element. `styled` survives as the explicit override for a default selector later.
- **`frame()` owns it and the walk was reverted** — *"if frame works under the assumption that if the user uses the frame they get the style then just do it there and skip the walk."*
- **No vacuous styled chemicals** — *"It's silly."* A styled chemical writes the element it is styled as, and `frame()` stands that element as the compiled component. A view writing something else throws by name.
- **Bare is the default, not `_`** — *"You are showing off a framework with underscores everywhere. Chemistry wants things reactive."* **The plan had turned a micro-optimization into a house style.**
- **The getter road**, which needed a real compiler change: a getter lives on the **prototype**, not the template, so the field walk was structurally blind to it.

**THREE THINGS MEASURED RATHER THAN ASSUMED:**

- **A chemical is not much bigger than a particle** — 1,804 bytes against 1,441 bare. **Bonds are the cost**, ~540 bytes each; eight reactive CSS fields cost 3,235 bytes and the same eight spelled `_` cost 149. *Doug's question, answered with numbers.*
- **A bond-constructor assignment is STATIC.** Driven in the browser: with the theme assigned in a bond constructor the border stayed stale while the background moved; with getters everything follows. **The synthesis memoises, so the bond constructor does not re-run when only a prop changed.**
- **The theme works by the PARENT EDGE.** There is no read-tracking over a render anywhere in this framework; `withScope` never opens on the render path. A theme built with `$(<Asked />)` in a bond constructor is parented to its reader, which is the only path `diffuse` walks.

**THE ENCYCLOPEDIA IS REWRITTEN**: ten dresses as styled chemicals, all thirteen consumer seats fetching through `$`, the palette as [`$Theme`](../../package/src/book/Theme.tsx) in the book folder, **`utilities/Styled.ts` DELETED**, and **zero `style` attributes in lib `src`**.

**DOCUMENTED IN BOTH BRANCHES**, per Doug — *"we need to not lose the idea that this is how we do it"*: [particle/11 Styled Particles](../../../chemistry/.lib/particle/11-styled-particles.md) for the mechanism, [ch13 The Default Dress](../designing-inexplicable-phenomena/13-the-default-dress.md) for how this library uses it.

## <a id="found"></a>What the framework already knew — and I did not

***Neither of the two things that cost time was a defect, and Doug said so:*** *"There was a defect? I thought things went well… I don't think you appreciate how sophisticated $Chemistry is."* **He is right, and the correction is the compounding.** *Both cases are chemistry treating a function-valued member as behaviour, which is what one almost always is, and in both the framework already held the answer.*

- ***`selector` had to join `molecule.ts`'s `framework` set*** — whose own comment states the mechanism in advance: *"Members the framework owns, which are never state… a function-valued member would otherwise be bonded as a REAGENT."* **The set had four names and needed a fifth.**
- ***A function-valued PROP is declared initialized*** — `$onClick: (() => void) | undefined = undefined` — **which is the branch's own standing convention from [The Reference](30-the-reference.md)**, arriving at a use nobody predicted for it.

**Compounded into [chemistry's reactivity book](../../../chemistry/.lib/reactivity/01-reactive-properties.md)**, not Solutions: *a function held as a VALUE is the exception, the framework cannot know which you meant, and it gives you three ways to say so.*
- ***`$(plainFunction)` already wraps*** what Doug asked for in September — [chemical.ts:1690](../../../chemistry/package/src/abstraction/chemical.ts). *Another thing the framework already had.*
- ***A type error blamed on the framework was a MISUSE of `$`, and the wrong diagnosis stood for a day.*** Two sites read `$((code ? prints.get(code) : undefined) ?? reference)` and were reported as a gap in `$`'s overload set, surfaced by a stale build. **Both claims were wrong.** *Doug: "are those even components? Is this doing what you think? NO variables."* `prints.get(code)` is a **registry lookup** — already somebody's resolution — so `$` was re-asking an answered question, and the union that broke the compiler was the shape of that mistake. **Moving `$` onto the literal — `const Reference = $(reference)`, with the lookup falling back to it — dissolved the union and cleared the last `tsc` error in the package.** Compounded into [ch16 § never a variable](../designing-inexplicable-phenomena/16-the-shape-of-tsx.md#never-a-variable).
- ***Rewriting a demo file wholesale breaks Vite's HMR*** until the server restarts, reporting *"does not provide an export named 'default'"* — a working feature that looks broken.

## <a id="closed"></a>What closed the sprint, 2026-09-04 evening

**The encyclopedia became styled chemicals on a shared `$Style`; `$Theme` became an ANNOTATION** — which had looked blocked by a `Writing → Anchor → Style → Writing` cycle until Doug's one line dissolved it: ***"styled chemicals need to live in the file that uses them."*** `$Theme`, `$Style` and `$Anchor` moved into `Writing.tsx`, the eight remaining dresses take `$Style` from there, and the cycle is gone. *One thing tried and rejected on evidence: making `$Style` an annotation too, which turns every dress into a piece of WRITING — `$Anchor` then inherits `$Writing.view()` and draws nothing.*

**The package is `@dna-platform/public`** — `.public` is illegal, since an npm name may not begin with a dot — with `/encyclopedia` and `/utilities` as their own surfaces.

**Every component local now carries its component's name**, `Wikitable` and `Styled.ts` are gone, no file in `src` sets a `style` attribute, and **`tsc` is 0**.

**THE CONVENTIONS THIS PRODUCED**, which is the durable half: [The Shape of TSX](../designing-inexplicable-phenomena/16-the-shape-of-tsx.md) — layout, variable naming, `$` usage and collisions — and [ch11's no-invented-language row](../designing-inexplicable-phenomena/11-the-coding-style.md#no-jargon), restated after a second offence.

**Not done, and named rather than omitted:** the `one` rename inside **test** files — 135 cosmetic sites — attempted twice and reverted both times, the second time after block-scoping bled across `it(…)` blocks and reddened 36 promises. It wants doing by hand.

## <a id="owed"></a>Owed

**Nested selectors are not compiled** (only the hand-written escape) · **the tag is stated twice**, in `selector` and in the view — *Doug: "a selector isn't unique"* · **CSS detection needs a `document`**, so nothing compiles under bare Node · **`encyclopedia/Table` and `writing/Table` still collide**, so the dress is not exported from the index · **the package rename** to `public` — `.public` is not a legal npm name unscoped · **a book of chemical powers** — *Doug: "formula and persist and styled and facade can all be in some book of chemical kinds or traits"*; the chapter sits in `particle/` meanwhile · **every member name here is a PROXY.**

# <a id="where-things-stand"></a>WHERE THINGS STAND

## The next action

***Run `/ce-brainstorm` on WAVE 4, THE BOOK APPARATUS.*** **It is not a fresh brainstorm — it is a RULING PASS**, because the requirements already exist: [Sprint 39 § the apparatus](41-sprint-39--the-road.md#apparatus) holds a 42-item draft (R-A1–R-A42) and **fourteen questions, Q1–Q14, that only Doug can answer.** *Put them to him in batches, sharpest first.*

**Doug's own words for what the sprint is about** — recorded as HIS statement, not as a brief the next session inherits: *"the next big thing is chapter types and subject and author. We need covers, synopses, work on the index, and most important, the table of contents. We will want figures and illustrations — at least for the cover."*

**The sharpest question is Q3, the reading flow** — which furnishings are parenthetical — because covers, synopses and the table of contents all hang on it, and it decides numbering and contents parity. **Then Q2** (subjecthood declared or counted), **Q7** (traits only, or kinds-of-book types), **Q8** (the route seat), and **Q14** (fourteen names). ***His sentence already answers Q13 in part: figures and illustrations are wanted, so the draft's deferral of `$Figure` is lifted.***

## What to read first — three things, each for what it carries

1. **[Sprint 39 § the apparatus](41-sprint-39--the-road.md#apparatus)** — the R-A draft and Q1–Q14 **verbatim**. This is the agenda; nothing needs re-deriving.
2. **[Chapter zero, THE ROAD](00-planning.md#the-road)** — where Wave 4 sits, and what Waves 0–3 already closed.
3. **[The Semantics of Books](../the-semantics-of-books/.cover.md)** — the primary source the design answers to; the cover names which chapters bear on covers, synopses and catalogues.

*Three, not four: a handoff into a **brainstorm** names the sources the designing reads, not the code it will touch. **This is a starting point, not a boundary** — read past it freely.*

## The state, once

**COMPLETE — the styled-chemicals feature, and the encyclopedia riding it.** A class names what it is styled as; its CSS-named fields are the stylesheet; three spellings map onto chemistry's own reactive law; getters are live; nested rules are members through `@select` or a written name; a prefix frees a name only where one class says a property twice; and a styled chemical takes ordinary props too. **The encyclopedia is eleven dresses on a `$Style` base that fetches the theme once**, with no views, no comments, `Styled.ts` deleted and **no `style` attribute anywhere in lib `src`**. `@dna-platform/lib/encyclopedia` and `/utilities` are their own surfaces.

**COMPLETE — the record.** [chemistry particle/11](../../../chemistry/.lib/particle/11-styled-particles.md) for the mechanism, [ch13 The Default Dress](../designing-inexplicable-phenomena/13-the-default-dress.md) for how this library uses it, [reactivity/01](../../../chemistry/.lib/reactivity/01-reactive-properties.md) for the compounded lesson, and [ch11 § no invented language](../designing-inexplicable-phenomena/11-the-coding-style.md#no-jargon) for the standing law restated.

**NOT STARTED — Wave 4**, and nothing of it is begun.

## Blocked on Doug, and only on Doug

- **Q1–Q14** — the ruling pass above. **Nothing in Wave 4 can start before Q3.**
- **The two `$`-overload sites** — `reference/Catalogue.tsx:19` and `References.tsx:53`, both `$((prints.get(code) ?? Reference))`, where a union of two component types matches no overload and falls to the string one. **Byte-identical to HEAD**; a stale `dist` had hidden them. *This is lib's only red gate.*
- **`$Theme` as an annotation** — his ruling, and it needs one: making it an `$Annotation` closes a cycle `Writing → Anchor → Theme → Writing` and empties 24 test files. **Either it lives in `Writing.tsx` beside `$Type` — where the branch moved those for this same reason — or the dresses take it as a prop.**
- **`@dna-platform/public`** — `.public` is not a legal npm name; a name may not begin with a dot, scoped or not.
- **Every member name here is a PROXY**: `selector`, `styled`, `style`, `@select`, `$Style`, `$Theme` and its eleven members.

## Verified, with the numbers and the scope

**$Chemistry 848/848 across 68 files, `tsc` 0** · **lib 543/543 across 25 files**, `tsc` clean but for the two sites above and five pre-existing `librarycard` errors in `tests/` · **the Lab driven in a real browser, 14/14, zero console errors** · **`.wiki` source typechecks**, its two remaining errors being vite/vitest config typing that predate this work.

## How to see it

```
cd library/chemistry/package && npx vite app --port 5199
```

***Open `http://localhost:5199/styled`.*** **Four cases:** the selector as the element with a subclass inheriting what it never declares; the three spellings, where the `_` button visibly moves nothing; promotion driving a live width; and **a themed article in two rooms — one light, one dark from a scope registration — each switching independently.**

## Wrong turns, so they are not retried

- ***Any chemistry source change needs `npx rollup -c` before lib's suite means anything.*** **This cost three separate diagnoses today** — lib resolves chemistry through its build, so a stale `dist` reports the code you deleted.
- ***Rewriting a demo file wholesale breaks Vite's HMR*** until the dev server restarts, reporting *"does not provide an export named 'default'"* — a working feature that looks broken.
- ***`Object.keys` on a chemical sees a derivative's own slots only***; a reactive prop lives on the template and needs `for...in`.
- ***A render counter displayed in a view never settles*** — the post-render diff sees a different output every time.
- ***A demo's control must not be the class's first instance***: the first `new $X()` becomes the template, so a write lands on the template and the mount never repaints.
- ***Making `$Theme` an `$Annotation` empties 24 test files*** — the cycle above, and it fails silently rather than reddening.
