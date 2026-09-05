# The Handle

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **status:** `closed` — ***brainstormed, planned, BUILT and absorbed across 2026-08-31 → 09-01 with Doug in the room ruling live; compounded into [Solutions 37](../solutions/37-the-index-that-moved-when-a-stack-ran.md) with the queue in [Where things stand](#where-things-stand). His sign-offs and the push ride the close; the rooms and the upward url are held for serious thought at his word.***
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force.*

---

# <a id="which-part"></a>Which part of the plan this sprint accomplishes

***This is SPRINT THREE OF FIVE in [the reference plan](00-planning.md#the-reference-plan).***

**The plan's own line:**

> ***3 · Read*** — **`read()` returns what the reference means — the resolution, which is where cataloguing enters.** *You would see: `read()` hands back the chapter; a false reference throws rather than answering undefined.*

***Sprint three was given NO requirements on purpose*** — **[a catalogue in v2 has never been designed](00-planning.md#plan-allocation)**, *and writing requirements for it on a guess is the fault [Sprint 48 is filed under](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md).* ***It gets them here, from Doug's own design given at this brainstorm.***

**And it is not "the rest of references."** *Everything [sprint one deferred was routed here in his words](30-the-reference.md#where-things-stand), and the second routing is the larger claim hiding in a deferral:* ***composition-of-parts becomes catalogue-of-references.*** **That is [C19](27-composition.md), and it makes composition and cataloguing one question rather than two.**

***The seam with [sprint two](32-the-route.md) runs one way:*** **two owns `view()` and `$active`; this sprint owns `read()`, the catalogue, and anything that hands out a reference nobody wrote.** *Sprint two may not build a handle; this sprint may not decide a view.*

---

# <a id="reading"></a>Required reading

***Doug, 2026-08-31: "read coding conventions from a few sprints ago. Link to it in our sprint as required reading."*** **The same five style chapters are required here as in [sprint two](32-the-route.md#reading)** — *[The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) indexes them* — **and this sprint leans hardest on two of them.**

| | why this sprint in particular |
|---|---|
| **[The Unit of Code](../designing-inexplicable-phenomena/07-the-unit-of-code.md)** | ***the file is the WORD.*** *`catalogue` is a new word, so it arrives as **one** file holding its law, its data and its meaning — never as `Catalogue.ts` plus `CatalogueSpecification.ts` plus `TypeOfCatalogue.ts`.* **v1 split this word across `$CardCatalogue` (68 lines) and `$IndexCard` (87), and [the three smallest files were the load-bearing ones](../the-semantics-of-books/16-the-reference-and-its-locator.md#v1-measured).** |
| **[The Order of a Class](../designing-inexplicable-phenomena/08-the-order-of-a-class.md)** | ***the property test — argumentless AND returns data.*** **It decides where Doug's two new composition members go, and it splits them:** *`catalogue()` passes and joins the properties; `compose(...parts)` takes arguments and joins the methods beside `where`, `select`, `selectMany` and `single`.* |

***Beyond the style documents:***

1. **[Cataloguing](14-cataloguing.md)** — ***the last time this branch designed a catalogue***, and its rulings: a synopsis is a chapter that points at another book; **subjecthood is a COUNT, not a class**; `$Catalogue$` implemented by writing only; the card is what a book reference resolves through and nothing more.
2. **[The Reference, and What It Points With](../the-semantics-of-books/16-the-reference-and-its-locator.md)** — ***the derivation***, and specifically [the overflow law](../the-semantics-of-books/16-the-reference-and-its-locator.md#open): *when the payload outgrows the entry, containment turns into reference.* **An entry is one shape whose payload may be absent, not two classes.**
3. **[Solutions 16](../solutions/16-the-parse-that-woke-its-own-parents.md)** — ***a getter that builds a chemical is a READING and may not be called from a view.*** **`catalogue()` builds references; if a view calls it, this is the wall it meets.**
4. **[Solutions 35](../solutions/35-the-rules-that-only-held-for-a-class.md)** — ***a type's rule is written against WRITING, never against its canonical form's members.*** *`$TypeOfCatalogue`'s specification walks straight into this.*
5. **[The primary source](../the-semantics-of-books/16-the-reference-and-its-locator.md)'s route grammar** — ***up is subjective, down is objective, across is relational***, and **the catalogue is what guarantees reachability**: *up to the summit, down the shelves.*

---

# <a id="rulings"></a>What Doug ruled, in his own words

*Given at the brainstorm, 2026-08-31, and quoted rather than paraphrased.*

## <a id="the-shape"></a>The shape, whole

> ***"`$Catalogue$<T>` is just `$Composition<$Reference<T>>` — it's not clear what to do with the T in reference. We can have an async read method that returns T.***
>
> ***`$Reference` — we then need to make it of T and have T default to `$Writing`.***
>
> ***`$Composition` should have two methods placed in properties section (see coding conventions):***
> ***`catalogue(): $Catalogue$<T>`***
> ***`compose(...parts: $Composition<T>[]): Composition<T>` — this can be used to make interesting references.***
>
> ***Unlike the previous version, can we just make a `$Catalogue$` class and a `$TypeOfCatalogue`? The catalogue implements the interface and the type can validate the members if we need. I would like to get away with one catalogue class that serves to catalogue all the parts.***
>
> ***So what does a catalogue do? It already gives out references.***
>
> ***First it should have a: `complete: $Composition<T>` that is the closure of the catalogue. We can implement this with concat. This allows us to turn a catalogue of books into all literature in the library. It can go one level for now."***

## <a id="the-generic"></a>And where the generic goes — because it was raised against his own ruling

***Raised: [`$Reference<T>` would put a generic on a writing class](32-the-route.md), which [Sprint 28 ruled against](28-the-block.md) — "NEVER put a generic type on writing. That ALWAYS means I recommended something wrong."***

> ***Doug: "`$Catalogue$<T> = $Composition$<$Reference<T>>` — yes but make this an interface because we need more on it. No, reference `<T>` does not put a generic on the writing class. Have those be just `$Reference$`."***
>
> ***And: "We put a default as reference of writing."***

***So the generic lives on the INTERFACE and never on the class***, **which keeps Sprint 28's ruling whole rather than narrowing it.** *`$Reference$<T extends $Writing = $Writing>` carries the parameter; `$Reference` the class stays plain writing.* ***The raise was worth making and his answer is better than either option offered.***

## <a id="routed-here"></a>What sprint one routed here, in his words

| deferred | his routing |
|---|---|
| **the handle as a `$Reference`** | *"The parser will make a handle. **Catalogues will hand them out.**"* · *"The handle is a `$Reference`, so no don't keep it. So is meaning."* · *"The handle should not be specified in the markup."* |
| **`words` on a phrase** | *"We can get words in there when we do cataloguing, because I think we want to specify the letters of a word and words of a sentence as a **catalogue of references** rather than as literals."* |
| **`read()`** | *the plan's own sprint three — the resolution, and [the one piece the derivation has never worked out](../the-semantics-of-books/16-the-reference-and-its-locator.md#open)* |

---

# <a id="requirements"></a>Requirements

*Numbered on from [sprint two's R28](32-the-route.md#r28) and never renumbered.*

## <a id="s9"></a>Section 9 — The word `catalogue`

<a id="r29"></a>**R29 · Doug.** ***`$Catalogue$<T>` is an INTERFACE extending `$Composition$<$Reference$<T>>`***, *"because we need more on it."* **Observable: it is an interface, not a type alias, and it declares members the alias does not give.**

<a id="r30"></a>**R30 · Doug.** ***ONE catalogue class serves to catalogue all the parts*** — `$Catalogue` implementing the interface, plus `$TypeOfCatalogue` which *"can validate the members if we need."* **Observable: v1's two classes and 155 lines become one word in one file.**

<a id="r31"></a>**R31 · derived, from [The Unit of Code](../designing-inexplicable-phenomena/07-the-unit-of-code.md).** ***The word `catalogue` is ONE file*** holding its four faces — *the interface, the class, its specification, and its type* — **exactly as [the word `reference` was built in sprint one](30-the-reference.md#u17).** **Observable: `Catalogue.tsx`, and no sibling file named for a part of it.**

<a id="r32"></a>**R32 · Doug.** ***`$Reference$<T extends $Writing = $Writing>` carries the generic; the class `$Reference` does not.*** **Observable: `tsc` sees no type parameter on any class descending from `$Writing`.**

<a id="r33"></a>**R33 · Doug.** ***A reference reads to what it means, asynchronously*** — *"an async read method that returns T."* **Observable: `read()` answers a `Promise<T>`, and [a false reference throws rather than answering undefined](00-planning.md#plan-sprints).**

## <a id="s10"></a>Section 10 — What a composition affords

<a id="r34"></a>**R34 · Doug.** ***Every composition affords a catalogue*** — `catalogue(): $Catalogue$<T>`. **Observable: any of the seven levels answers a catalogue of references to its own parts, without being told how.**

<a id="r35"></a>**R35 · Doug.** ***Compositions compose*** — `compose(...parts: $Composition$<T>[]): $Composition$<T>`, *"this can be used to make interesting references."* **Observable: two compositions join into one, and the result is a composition like any other.**

<a id="r36"></a>**R36 · derived, from [The Order of a Class](../designing-inexplicable-phenomena/08-the-order-of-a-class.md).** ***The two members SPLIT across two groups, and this contradicts the placement he gave.*** *Doug said "two methods placed in properties section"; his own property test is **argumentless AND returns data**.* **`catalogue()` passes and joins the properties. `compose(...parts)` takes arguments, so it joins the methods** — *the chapter names `where`, `select`, `selectMany` and `single` as exactly this case, and says one-line form does not change it.* ***Flagged rather than taken: if the order should bend here, that is his to say, and [the standing answer is that the order always wins](../designing-inexplicable-phenomena/12-the-closeness-rule.md#where-art-lives).***

## <a id="s11"></a>Section 11 — The closure

<a id="r37"></a>**R37 · Doug.** ***A catalogue answers `complete: $Composition$<T>`, its closure***, implemented with concat and going **one level for now**. *"This allows us to turn a catalogue of books into all literature in the library."* **Observable: the catalogue of a shelf of books answers one composition standing for all of them.**

<a id="r38"></a>**R38 · Doug.** ***A catalogue hands out references*** — *"the parser will make a handle. Catalogues will hand them out."* **Observable: nothing in the markup specifies a handle, and asking a catalogue produces one.**

## <a id="s12"></a>Section 12 — Design owed

<a id="r39"></a>**R39 · design owed.** ***`words` on a phrase, as a catalogue of references rather than literals.*** **This is the sentence that makes composition and cataloguing one question**, *and its mechanism is not designed.* **Denied files and scenarios until it is.**

---

# <a id="s13"></a>The second session — 2026-08-31, the catalogue designed with Doug in the room

## <a id="rulings-2"></a>What Doug ruled, verbatim

| | |
|---|---|
| **one reference** | *"Since we have the reference down to a url and a reference can figure out if it has to navigate, we can probably have **one type of reference**. The **literal reference** is the reference on the handle. It **literally represents** the piece of writing."* The brief's "references per type" dissolved by his own correction: *"I meant reference handle **per instance of composition**. We can construct a url / anchor to find each one."* |
| **the anchor's source** | *"**indexes mostly for now.** We do assign the indexes to the writing right?"* — verified in the room: [`Writing.tsx`](../../package/src/writing/Writing.tsx) declares `index = 0`, [the parse assigns it](../../package/src/utilities/Parser.tsx), a document of three sections answers 0, 1, 2. |
| **the handle** | *"Yeah I think the handle can be a reference but there can be a **protected identifier field** and the referent could be **lazily constructed** from that I suppose. No problem."* And the sequencing made plain: *"I didn't want the last session to do handles, but I think it makes sense ultimately though I suspect it will fall out of the analysis."* ***It did — [the handle is the catalogue's output](#u37), not a member on writing.*** |
| **the catalogue is writing** | *"**Yes a catalogue is writing.** If a reference is a frame, I suppose it's a **type of sentence**, which is interesting."* — *frame* read as *phrase*, since the type-of-sentence inference stands on it; **flagged rather than silently corrected**. And the class: *"No it wouldn't extend sentence, it could have **type of sentence as its type**, but it would **extend writing like everything else**."* ***[O8](#open-catalogue-view) CLOSED.*** |
| **the closure** | *"It is a composition of referent of T. **Closure returns a composition of T.**"* Named in three steps: *"call it read!"* → **his own veto** — *"No you can't call it read because then **you can't have a catalogue that is a reference**"* → *"**comprehend** isn't a bad word. This is a form of comprehension, in the **list comprehension** sense. **It's a select.**"* And the meaning, when the team read types instead of the room: *"**comprehend returns the library.** Use the analogy to understand."* |
| **the design charge** | *"Just **initialize a new composition of that type with the parts**. But maybe it's hard to do that without having different types for each composition… **Sit back and be an architect. What types do you need to invent to accomplish this. Let's start from a design and whittle it down.**"* |
| **the standing rule** | *"Remember that **all members on types in lib get run by me**."* |
| ***the gate*** | ***Doug moved this chapter to plan himself:*** *"I need us to get this plan in place. If that involves architecture, do that."* |

*One vocabulary flag, kept per [the naming discipline](00-planning.md#naming-discipline): he said "a composition of **referent** of T" where every prior ruling says **reference**. In [the derivation](../the-semantics-of-books/16-the-reference-and-its-locator.md) the two words point opposite ways — the referent is what is pointed AT. Read as loose speech for the pointer; his to correct.*

## <a id="analysis"></a>The analysis he ordered, and its answer

*"Is it easier to implement one canonical one of those per type? Discuss, research especially in the code and do an analysis to return that answer to me."* **Run as four researchers and two adversaries over the code, the filed walls and the record. The answer: ONE CLASS, and it survived adversarial attack from both directions.**

**What decided it:** nothing genuinely varies per level — printing is level-blind (an index per step, [depth is the grade](32-the-route.md#r20)); membership validation may not read a class's members ([Solutions 35](../solutions/35-the-rules-that-only-held-for-a-class.md)); the closure delegates to `parts()`, which is already the per-level polymorphic point, and [`$Letter.parts()` returning `[this]`](../../package/src/writing/Letter.tsx) closes the floor; the one per-type precedent, the `$$` family, is deprecated. **The per-type steelman — grade under writing — dies on the `$Reference` precedent: one class plus data for a graded-target concept.**

**The honest bill for one class, carried rather than hidden:** seven one-line `catalogue()` redeclarations are FORCED — returns are never bivariant, a wide inherited one fails the narrow interface (probe: TS2420) — and each carries an `as` cast asserting an erased type argument; the casts are single-`as` legal **only because the catalogue interface is writing-shaped**, which also obliges it to redeclare `index` (probe: TS2320). **Probe-proven** (tsc 5.9.3, strict, the real classes imported): narrowing is free at every level, and `compose` narrows **only as a method-style declaration** — an arrow property fails TS2416. **The import cycle is symmetric between shapes and sits wherever the printing site goes** — including the parser, which is the exact [`Parser → Reference → Phrase → Word → Parser` cycle already routed away once](30-the-reference.md#stands-wrong).

## <a id="s14"></a>Section 14 — Requirements from the second session

<a id="r40"></a>**R40 · Doug.** ***ONE type of reference — no reference kinds per target.*** *"We can probably have one type of reference."* **Observable: one `$Reference` class; no class named for a target; `tsc` sees no roster.**

<a id="r41"></a>**R41 · Doug.** ***The handle is a `$Reference` carrying a `protected identifier`, its referent lazily constructed from that identifier.*** **Observable: the identifier is in the protected group and no public API; a handle answers its referent without ever having held it; nothing about handles appears in markup.**

<a id="r42"></a>**R42 · Doug.** ***A handle exists per instance of composition, constructed from indices, and catalogues hand them out.*** *Refines [R38](#r38); completes the 32 ruling — nothing stored, nothing aggregated.* **Observable: a word's catalogue answers a handle for every letter, and no member was added to `$Writing`.**

<a id="r43"></a>**R43 · Doug.** ***A catalogue is writing: `$Catalogue` extends writing like everything else and carries sentence grade through its type.*** **Observable: a catalogue has a block, a copy and a type like any writing; its spec examples draw, specify and compose.**

<a id="r44"></a>**R44 · Doug.** ***`comprehend` is the catalogue's closure: it follows every reference — the select — and answers a composition of T.*** ***NOT `read`*** — *vetoed with its reason: a catalogue that is a reference must stay possible.* ***Supersedes [R37](#r37)'s `complete`, name and all, by his own naming.*** **Observable: a catalogue of sections comprehended answers one composition whose count equals the sum the parse gives independently.**

<a id="r45"></a>**R45 · the architecture he ordered.** ***The word `composition` becomes writing: a `$Composition` class, initialized with a type and parts*** — *his sentence taken as the constructor* — ***and each level's type declares what composes its instances*** (letter→word … chapter→book), **partial at the top: nothing composes a book until [sprint five's `$TypeOfLibrary`](00-planning.md#plan-sprints), and comprehending a catalogue of books fails, naming the gap.** *The up-map member's name is **owed to Doug** — [one sentence before it is built](#u33).* **Observable: composing two paragraphs answers a paragraph-graded composition; asking a book's type what composes it fails with a reason.**

<a id="r46"></a>**R46 · Doug, exploratory — design owed.** ***"We can render the tag with the anchor as references become active. We shall see."*** *The target draws its anchor id as its reference activates.* **Denied files until the surface is chosen — [nothing running has ever seen v2](15-the-build.md), and the surface decision is his.**

---

# <a id="the-plan-33"></a>THE PLAN, ABSORBED — what was planned, and what the room did to it

***These guardrails ran the build for about an hour before Doug's live rulings overtook half of them — which is [the contract being corrected by implementation](../../../../.claude/skills/ce-plan/SKILL.md), working.*** **The identifiers survive as a register per [the compounding rule](../../../../.claude/skills/ce-compound/SKILL.md); the as-built truth is [the checklist](#checklist).** *The size call held: one session's work, undivided — it took one evening with Doug ruling.*

## <a id="decisions-33"></a>The decisions — D12–D18, each with its fate

| | stood for | fate |
|---|---|---|
| <a id="d12"></a>**D12** | one catalogue class | **HELD, and went further** — one class, and it extends `$Writing` |
| <a id="d13"></a>**D13** | `$Catalogue extends $Composition`; `$TypeOfCatalogue extends $TypeOfSentence` | **OVERTAKEN by his ruling** — extends `$Writing` like everything else; the type deferred whole |
| <a id="d14"></a>**D14** | comprehend via an up-map of composer types | **OVERTAKEN — the up-map never existed.** `comprehend` concatenates the held referents; `concatenate` initializes a BARE composition; the grade question dissolved when the generic landed on `$Composition<T>` |
| <a id="d15"></a>**D15** | the ladder's top defers to sprint five | **MOOT with D14** — nothing needs a composer type |
| <a id="d16"></a>**D16** | the printing site from three candidates | **RESOLVED BY SEATS INSTEAD** — the reference family freed to `$Writing`, every import downward, no candidate needed; the maker slot that stood briefly is a [filed wrong turn](#where-things-stand) |
| <a id="d17"></a>**D17** | property/method groups; method-STYLE declarations | **HELD** — probe-proven, narrowing dies on arrow properties |
| <a id="d18"></a>**D18** | readings held per instance | **CORRECTED BY DOUG** — *"we don't cache the parts. Nothing is held"*; the parser's memo is the only keeping |

## <a id="units-33"></a>The units — U32–U40, the register

*Numbered on from [sprint two's U31](32-the-route.md#units); never renumbered; the fates are the record.*

| | stood for | fate |
|---|---|---|
| <a id="u32"></a>**U32** | the `$Composition` class | **BUILT, and generic** — his ruling: *the generic tracks composition-hood*; the lift came with it, −42 lines |
| <a id="u33"></a>**U33** | the up-map | **NEVER BUILT** — dissolved with [D14](#d14); the name debt was never incurred |
| <a id="u34"></a>**U34** | `compose(...parts)` | **BUILT as `concatenate`** — his word; on the class only, since the interface seat broke narrows-for-free |
| <a id="u35"></a>**U35** | the word `catalogue` | **BUILT** — `$Catalogue extends $Writing`, printing its own references in its accept; `$TypeOfCatalogue` deferred *("if we need")* |
| <a id="u36"></a>**U36** | `catalogue()` afforded | **BUILT** — one lazy line on the base, at call time, nothing eager |
| <a id="u37"></a>**U37** | the handle | **BUILT as the printed reference** — points by holding; the `protected identifier` rides with [the rooms](#open) |
| <a id="u38"></a>**U38** | `comprehend` | **BUILT** — concat of the held referents, sync, the stacks never await |
| <a id="u39"></a>**U39** | `read()` the async face | **BUILT** — path-first: fails toward the undesigned following, resolves the held, rejects naming why |
| **U40** | the anchor on activation | **DESIGN OWED still** — [R46](#r46), the surface unchosen |
| — | *unplanned, landed* | **`address`/`follow`** *(proxies, his to strike)* · **the numbering fix** *(only Letter–File number)* · **the `$points` rule** · **the spec examples, 42→44** |

## <a id="scenarios-33"></a><a id="risks-33"></a>Scenarios and risks — how they resolved

***The scenarios became **the probe suite** — twenty-one promises — and the demo AEs landed there too:*** *AE10 as concatenate-joins, AE11 as handles-nobody-wrote, AE12 as the resolves-identity and address/follow round trips, AE13 as the failures naming position and count, AE14 as the stack counts at every grade.* **[The surface flag stands](15-the-build.md): the spec harness is the only surface running v2; a driven page awaits the surface decision, Doug's, riding U40/R46.**

**Of the five risks: 1 dissolved with the seats; 2 never arose (the catalogue's block is its written references); 3 shrank to Book's double-narrow and two internal casts; 4 was accepted by [R23](32-the-route.md#r23) and then SHARPENED into the found fault — the one-field index — fixed and promised; 5 was paid correctly: one class, one ceremony line.**

## <a id="lands-33"></a>Where every requirement landed

| | |
|---|---|
| ***realized*** | **[R29](#r29)–[R35](#r35) → the catalogue, `comprehend`, `concatenate`, `catalogue()` · [R33](#r33) → `read()` · [R38](#r38) → the printing · [R40](#r40)–[R44](#r44) → the one class, the holding handle, catalogue-is-writing, `comprehend` · [R45](#r45) → U32 built, U33 dissolved** |
| ***superseded*** | **[R36](#r36) → [D17](#d17)** · **[R37](#r37) → [R44](#r44)** *(`complete` renamed by his own `comprehend`)* · **[R41](#r41)'s identifier → [the rooms](#open)** *(per-jump, not per-address)* |
| ***design owed, named*** | **[R39](#r39)** *(words on a phrase)* · **[R46](#r46) → U40** *(the anchor on activation)* · ***the rooms and the upward url*** |

---

# <a id="open"></a>What is open — asked, not decided

<a id="open-async"></a>**O6 · The async `read()` has a consequence that needs ruling.** **[`$Writing.view()`](../../package/src/writing/Writing.tsx) is synchronous and [the reactivity contract forbids a view awaiting](../../../chemistry/.lib/authorship/04-the-reactivity-contract.md)** — *so if resolution is async, **nothing can draw a resolved reference directly**.* **The catalogue becomes a loader and drawing needs the value already held.** ***That is his own "partially load a book — a little weird" arriving as a mechanism, and it decides whether sprint four's always-loaded index is cheap or hard.***

<a id="open-complete"></a>**O7 · What exactly does `complete` concatenate?** *"A catalogue of books into all literature in the library" reads two ways:* **the resolved books themselves, joined**, *or* **their PARTS joined one level down** — *every chapter of every book.* **The word "closure" and "one level for now" point at the second; "all literature" points at the first.**

<a id="open-catalogue-view"></a>**O8 · Is a catalogue WRITING?** *[Cataloguing ruled](14-cataloguing.md) "I want catalogues to be within the library as a type of writing, and the card catalogue is an abstraction to help us hold cards" — **two things, not one.*** **`$TypeOfCatalogue` implies writing; `$Catalogue$` as a plain interface does not.** *Which is this class?*

---

# <a id="checklist"></a>The checklist

***Doug, 2026-08-31: "I want to see todo checklists, even if they are brainstorm and planning checklists."*** **It lives in the chapter rather than in a session todo list, because [conversation memory does not survive compaction](../../../../.claude/skills/ce-work/SKILL.md).**

## Brainstorm and plan — closed by Doug in the room

- [x] Read the room, and read what v2 actually built
- [x] Establish that this word is NEW — **`catalogue` and `read()` have zero occurrences in `src`**
- [x] Read the required coding conventions and link them here
- [x] Capture Doug's design verbatim — [the shape](#the-shape), [the generic](#the-generic), [the second session](#rulings-2)
- [x] Raise the generic-on-writing collision **before** building it, and record his answer
- [x] Write the requirements — **R29–R46**
- [x] **O6** — dissolved at [sprint two's gate](32-the-route.md#drawing-is-linking): drawing a reference is drawing the link; no view awaits
- [x] **O7** — ruled and then superseded whole by **`comprehend`**: *"Closure returns a composition of T… comprehend returns the library"*
- [x] **O8** — ***"Yes a catalogue is writing"*** — extends writing like everything else, sentence grade through its type
- [x] **R36** — the split stands; the probe added the second half: narrowing members must be METHOD-style declarations
- [x] **R39**'s mechanism found — the stacks: letters, words, sentences as `catalogue().comprehend()` one-liners
- [x] **The gate** — Doug moved the chapter to plan himself: *"I need us to get this plan in place. If that involves architecture, do that"* — then ruled every build live

## Built — 2026-08-31 → 09-01, every gate fresh: `tsc` 0 · 21 files · **344/344**

- [x] **`$Composition` the class** — the word became writing; **the generic is its**, by the principle: *the generic tracks composition-hood; writing carries none because writing is not a composition*
- [x] **The lift** — parse machinery and the C# monad one-liners written ONCE; a level is its `composes`, its `reduce`, its bond; net −42 lines
- [x] **Configured compositions** — `<Composition><TypeOfSentence/>…>` behaves as the level; proven for word, sentence, paragraph
- [x] **`catalogue()`** on composition — one lazy line, built at call time, nothing eager
- [x] **`concatenate`** on composition — class, not interface, so narrowing stays free
- [x] **The word `catalogue`** — `$Catalogue extends $Writing implements $Composition$<$Reference$<$Composition<T>>>`; **`comprehend()` answers the composition of T** — both his sentences hold at once
- [x] **The catalogue PRINTS its own references** — in its accept, once, under the parse memo; an authored reference taken whole; *"catalogues will hand them out"* is the catalogue reading its own block
- [x] **The reference family freed** — `$Reference`, `$Path` extend `$Writing`; phrase-hood survives in the rules; types extend `$Type`; every import downward; **no slot, no global, no cycle**
- [x] **`$Reference$<T>`** generic interface + **`referent`** read from the block — *"they should be in the block"* built literally
- [x] **The stacks** — Word.letters; Sentence.words/letters; Document sections→letters (file skipped); Book chapters→letters; **Chapter inherits Document's whole run**
- [x] **The step** — a printed reference's own `index` IS its step, assigned by the parse that prints it; proven identity to the referent's place
- [x] **The fragment** — `a/b/c#d/e/f/g` ruled legal and adopted; slash steps descend `parts()[step]` to the very object
- [x] **The clobber** — found by probe, ruled, FIXED: *concatenate shouldn't affect parts* — only the canonical levels Letter–File number (Chapter and Book inherit); a stacked walk never renumbers shared parts, promised in the suite
- [x] Nine stale declaration promises amended to the lifted truth; the suite grew 328 → 344 with the `expect` count never falling
- [x] **`read()`** — R33's async face, his correction taken: *"an async method called `read` that returns T"* — comprehension reads literals off the blocks synchronously, so the stacks never await
- [x] **The Literal — built as a kind and folded back the same night, both on his word.** *He invented it "to get rid of the async part in case that was bad"; async was never the problem — `read()` is async on the interface either way — so "if it's fine, I don't think we need this."* **What the class had bought, one fact now carries: THE PATH'S PRESENCE DISAMBIGUATES** — *a reference with a path points AWAY, so its held content is display; without one, holding writing, it holds its referent* — **so one `$Reference` class reads path-first and the one-type-of-reference ruling stands whole.** The specification's rule became the design in a sentence: ***"a reference points at something, by carrying a path or holding what it stands for."*** *The word **literal** survives as prose for the loaded case, and the display-ambiguity's one degenerate corner (an authored, pathless reference with written display content) is this line's caveat.* — **347/347**

## Rulings this build captured — swept into the record above, verbatim

- [x] ONE type of reference; the handle is the **literal reference**, per instance, from indices
- [x] `read` VETOED for the closure — *a catalogue that is a reference must stay possible*; **`comprehend`** is his, list-comprehension sense
- [x] ***mint* struck → PRINTING** (*"this is writing"*); ***held* struck → `reduce`** (the parser's own word); *nothing is held, nothing cached beyond the parse memo*
- [x] Members on lib types get run by Doug — standing

## Open — the unticked half

- [ ] **Doug's sign-off on the proxy members**: `composes` (the suite's word), `reduce` (the parser's), the numbering guard's shape — *`referent` resolved by his own correction: the member is `read()`, and the word survives as prose*
- [ ] **`$TypeOfCatalogue`** — deferred (*"if we need"*); until it exists **a catalogue must never be `specify()`'d** (it carries no type); the sentence-grade pairing rides with it
- [ ] **The url printed upward** — the fragment *descends* today; *"ask a paragraph for its url"* still needs the walk design — his *"we probably need a special type of reference"* stands open
- [ ] **THE ROOMS — the address's true anatomy, UNSOLVED and deliberately held** *(Doug, 2026-09-01: "don't run off and try")*. ***An address has discontinuous and continuous parts:*** **jumps to a new room** — *"maybe for an address you have to get on an airplane, take taxi, take car"* — **each deserving its own path** — *"each path should probably represent a new location"* — **and movement within the referential visual field** — *"if it's on the row, section, shelf, etc… that is same room"* — *perhaps with "another separator for a within room."* **On the web: page versus new url; "query string versus not is a fine delineation."** ***The tricky part is that room lines are ARCHITECTURE-RELATIVE:*** *"sometimes a few books will be shown together, or chapters stacked versus on separate dynamic pages, or the cover and table of contents together on one page. We need to adapt to different architectures and I haven't solved this yet. It requires serious thought."* **This argues against a single path-bearing referent** — the special kind would be **per-JUMP, not per-address** — and composing an address from jumps and glides is his own deferred *"we will figure out how to compose references"* arriving. **The Literal reads as the degenerate case: all glide, zero jumps, which is why it needed no path.** *One grounding from the record: the compiler's route grammar already draws an architecture-dependent room line at serialization ("a subject's own book IS the subject as far as a reader is concerned"), while the model stays pure — a reading of the problem, not a solution.*
- [ ] **R39's words-on-a-phrase** — still design-owed (a second segmentation)
- [ ] **R46 render-the-anchor-as-references-activate** — *"we shall see"*; no surface runs v2 (`dist` ships v1)
- [ ] **Sprint two's remainder** — `$active` persistence (R27), the summary and excerpt (R28)
- [x] **Spec examples** — the configured composition and the reference-that-points-by-holding landed, the 42-count moved to 44, all three gates first run; ***the catalogue's pair rides with `$TypeOfCatalogue`***, since an untyped example cannot pass the SPECIFIES gate honestly
- [x] **The absorption** — the plan sections rewritten as the register of fates (decisions, units, scenarios, risks, landings), identifiers kept, the cover moved with each act through the tool
- [ ] **The push** — records and code through the commit tool, on Doug's word
- [ ] **The evaluation-safe cycle pinned** — Composition⇄Catalogue is load-order safe because each side's eval touches only `$Writing`; a promise should say so

---

# <a id="where-things-stand"></a>WHERE THINGS STAND — 2026-09-01, after the build

## The next action, as a command

***`/ce-brainstorm` for sprint four, The Index — in THIS session, on Doug's word: "we won't handoff… we will go right to brainstorm."*** **Sprint three is CLOSED on its checklist: the url pair built, the spec examples landed, the plan absorbed, and the first compound run filed — [Solutions 37, the index that moved when a stack ran](../solutions/37-the-index-that-moved-when-a-stack-ran.md).** *The compound queue for later runs: the probe-that-cannot-fail as [chapter 18](../solutions/18-the-checkpoint-that-compared-a-number-to-itself.md)'s third family appearance; the maker-slot-and-freed-seats as [chapter 30](../solutions/30-the-suite-that-collected-nothing.md)'s next appearance; the struck words (mint→printing, held→reduce) to the style register; the generic-tracks-composition-hood principle to [The Type and the Instance](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md). His sign-offs (`composes`, `reduce`, `$points`, `address`, `follow`) and the push ride the close.*

## Verified, with the numbers

**Run at the close, not remembered:** ***`tsc --noEmit -p src/tsconfig.json` 0 · 21 files · 344 tests · 344 passing · 3.3s.*** *The suite grew 328 → 344 this build and the `expect` count never fell.* **The chemistry suite was NOT re-run this session** — *named rather than omitted; nothing in chemistry was touched.* **`@dna-platform/chemistry` still resolves by symlink into uncommitted framework code**, *so a clone at `HEAD` would not reproduce these.*

## Wrong turns already tried — do not retry these

- ***A module-level maker slot*** (`cataloguing.make`) — **Doug caught it: "getting a little creative… there doesn't need to be one catalogue at the top."** *The honest fix was seats, not machinery: free the reference family to `$Writing` and every import points downward.*
- ***A probe that cannot fail proves nothing.*** *The first clobber probe checked the first sentence, whose local indices coincide with the global prefix — vacuously green. Probe where the numbers diverge.*
- ***Restating an inherited pattern by eye.*** *The path's broken-pattern was the WORD's whitespace, not the phrase's newline; the failure test caught the slip.*

## Names

***His, given in the room:*** **`comprehend`** *(list-comprehension sense)*, **printing** *(mint struck: "this is writing")*, **`concatenate`**, **`read()`** *(the async face, corrected onto the interface in place of a `referent` member)*, and **the literal** *(his word — a class for one evening, prose thereafter: the loaded case, the reference that points by holding)*. ***Proxies with lineage, his to strike:*** **`composes`** *(the suite's describe-titles)*, **`reduce`** *(the parser's own parameter)*, **`$points`** *(the merged rule's method, named from its own sentence)*. ***`The Handle` remains a PROXY chapter name***, *his to rename.*
