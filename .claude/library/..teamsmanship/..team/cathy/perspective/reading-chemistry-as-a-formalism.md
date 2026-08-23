# Reading $Chemistry as a formalism

- **author:** [Cathy](../cathy-and-the-reactive-canvas/.cover.md)
- **subject:** [Cathy's Library](../..the-canvas-paints-itself/.cover.md)

---

Sprint 20 opened as a design-principles review with Doug's reframing: this repo exemplifies Semantic Reference Theory, so the code must be flawless the way a formalism is. He confirmed the grammar in the room — "`$` is like 'representation of' and the `$` utility is like utilities that help you with complex representational cases." Three findings, all cited to `library/chemistry/package/src`.

## 1. The `$` algebra

`$` reads *representation of* (my own [grammar chapter](../../../../../library/chemistry/.lib/authorship/01-the-grammar.md)). It is not one function but a family, dispatched by `Chemistry.view(arg)` (`chemical.ts:1301`) and typed by the `$Chemistry` interface (`chemical.ts:1073`). Every overload, its meaning, and when it is legal:

- **Represent a class → its renderer.** `$($Class)` empty ctor → `Component`/`Element`; with args → `(...args) => Component` (`:1090`). A class is represented by the thing that draws its instances. Pure construction; resolves against nothing.
- **Represent an instance → its renderer.** `$(chemical)` → `$Component`, `$(particle)` → `$Element` (`:1344`). The live view, cached per instance (`$lifted$`); the bond constructor does not re-run.
- **Eval a description → a live instance.** `$(<Word/>, ...written)` (`:1334`) runs the real synthesis over the element through a throwaway `$Eval` host (`:1030`) and takes the materialized instance back; the `written` args are handed to its *bond constructor*, so a composition is built from the literal things written rather than their text. The inverse of representing an instance.
- **JSX fragment.** `$(props)` / `<$>…</$>` (`:1310`) — a run of children as one auto-keyed fragment.
- **Resolve — the renderer to use HERE.** `$(component)` (`askedFor`, `:1223`): type-preserving; returns what the current *asker's* scope substitutes for it, else the component itself. This is the DI read.
- **Inverse — the thing behind a renderer.** `$(component, $)` (`:1110`), the chemical a component wraps; debug/test only.
- **Derive a scope.** `$($, component)` (`derive`, `:1278`) — a new component derived from the given whose scope falls back to it; `$` in first position is the discriminator (`:1306`).
- **Register / inject.** `$(scope, requested)(replacement, {reach, asker})` (`registrar`, `:1262`) — "for A, a B is a C."
- **HTML catalogue.** `$('div')` → cached `Component<$Html$>`; `$('div', X)` overrides the tag (`:1120`).
- **Wrap an FC.** `$(fc)` (`:1107`) memoises a plain React component into a chemical-less one so it can be asked-for and stood in for.

**Legal when — drawing vs configuring.** `drawing()` is true inside a bond constructor or a view (`scope.ts:161`). Represent / Eval / Resolve read or construct and are legal anywhere. **Register and Derive are configuration and throw while drawing** (`configuring`, `chemical.ts:1246`): "configuration belongs before anything renders." (The thrown message says "not inside… a handler," but `drawing()` is false in a handler, so the code actually *permits* handler configuration — a message that contradicts its mechanism.)

**What it resolves against, and with no asker.** Resolve answers the current *asker* — which the framework raises around exactly three calls into user code: the bond constructor, the view, and an augmented handler (`scope.ts:151`). **With no asker, `$` answers its argument** (`:1225`): outside those three contexts `$` is identity.

**Level-pushing DI — what the algebra can and cannot express.** Resolution (`askedFor:1223`) walks the asker *up* its composition lineage via `$parent$` and, at each chemical, its class chain of superclass templates (`registered:1208`); first match wins, specificity stated — asker-named beats unnamed, `self` beats `progeny`, later beats earlier (`chosen:1199`). So it **can** push a dependency onto a scope reaching either its *self* (`reach:'self'`, depth 0) or all its *progeny* (`reach:'progeny'`, the default), narrowed to one asker *class* (`asker instanceof entry.asker`, `:1198`). It **cannot** push *up* (a child cannot inject what its parent resolves), target a single *instance* (narrowing is by class), or reach a specific *depth* (reach is binary self-or-all-progeny — no grandchildren-only, no up-to-ancestor-X, no sibling subtree). "Push dependencies at various levels" is today two levels — self and all-progeny — times asker-class; genuinely granular level-targeting is not expressible, and that is the honest gap.

## 2. The principles, with evidence

- **`view()` is the only drawing seam.** CONFIRMED — `$Chemical.view` (`:865`), `$Html$.view` (`:998`), and `Chemistry.view` *is* the dispatch; `frame()` wraps `view`. **lib obeys** (every writing class's `view()` renders its block).
- **Bond constructors named for their class.** CONFIRMED — `$Synthesis` invokes the method named `[$type$].name`. **lib obeys** — `$Section.$Section`, `$Book.$Book`.
- **Reactivity restricted to `$`-prefixed fields of three-or-more characters — REFUTED as stated.** The shipped predicate (`bond.ts:53` `isSpecial`) is `$` + a lowercase letter, **length ≥ 2** — `$v` qualifies — and non-`$`, non-`_` fields are reactive too (`isReactive:47`). It is "≥2 and `$`-then-lowercase," not "3+". **lib obeys** the convention (`$title`, `$source`), just not the mis-stated length.
- **A component instance IS a scope.** CONFIRMED — `chemical.ts:1135` plus the registry/`askedFor` machinery. **lib does not exercise it** (no registration anywhere) — this is the unused-but-supported SRT surface Doug named.
- **Registration is configuration and never render.** CONFIRMED — `configuring()` throws while drawing (`:1246`). lib N/A.
- **Template and derivative instances via `Object.create`.** CONFIRMED — `bind` (`:943`), `derive` (`:1282`), `$lift` per mount. **lib obeys** (all instances come through `$()`/`$lift`).

## 3. The comment asymmetry

Census by file (grep of `^\s*(//|*|/*)`): **chemistry 750 comment lines / 5160 (≈14.5%); lib ~1 / 2962.** Worst offenders: `chemical.ts` 234, `particle.ts` 135, `load.ts` 69, `scope.ts` 49, `symbols.ts` 37, `symbolic.ts` 31, `reconcile.ts` 26, `types.ts` 25, `reaction.ts` 23.

The ruling instrument is my own [grammar chapter](../../../../../library/chemistry/.lib/authorship/01-the-grammar.md): "No explanatory comments. The code is the explanation. The only comments… are structural markers." **So chemistry violates its own stated grammar** — and lib, with one comment, obeys it. Sampling chemistry's comments, each is one of two kinds:

- **Structural markers** — the `====` section banners (`chemical.ts:958, 1050, 1132`). **Load-bearing where they sit**: navigation inside a 1,407-line file, and the grammar explicitly permits them. Keep.
- **Explanatory prose** — the large majority (e.g. `chemical.ts:40` "$Reactants — the information-hiding wrapper…", `:818` the `$parent$` setter rationale, `:1179` `entriesOf`, `:1275` `derive`; the `$Scope`/`withScope`/asker docstrings in `scope.ts`). **A library chapter in the wrong place.** The prose is genuinely good design rationale — it belongs in `.lib` (authorship / reactivity / composition), not the source. `chemical.ts` and `particle.ts` alone carry ~370 of the 750 lines, most of it rationale, so they are the two files to lift first.

The ruling: keep the banners, lift the explanatory prose into `.lib`, delete it from the code. The framework should meet the law it wrote for itself before it judges lib against it.
