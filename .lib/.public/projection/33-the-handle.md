# The Handle

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **status:** `requirements-only` — ***brainstorm in progress, 2026-08-31. No code is written until these are approved.***
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

# <a id="open"></a>What is open — asked, not decided

<a id="open-async"></a>**O6 · The async `read()` has a consequence that needs ruling.** **[`$Writing.view()`](../../package/src/writing/Writing.tsx) is synchronous and [the reactivity contract forbids a view awaiting](../../../chemistry/.lib/authorship/04-the-reactivity-contract.md)** — *so if resolution is async, **nothing can draw a resolved reference directly**.* **The catalogue becomes a loader and drawing needs the value already held.** ***That is his own "partially load a book — a little weird" arriving as a mechanism, and it decides whether sprint four's always-loaded index is cheap or hard.***

<a id="open-complete"></a>**O7 · What exactly does `complete` concatenate?** *"A catalogue of books into all literature in the library" reads two ways:* **the resolved books themselves, joined**, *or* **their PARTS joined one level down** — *every chapter of every book.* **The word "closure" and "one level for now" point at the second; "all literature" points at the first.**

<a id="open-catalogue-view"></a>**O8 · Is a catalogue WRITING?** *[Cataloguing ruled](14-cataloguing.md) "I want catalogues to be within the library as a type of writing, and the card catalogue is an abstraction to help us hold cards" — **two things, not one.*** **`$TypeOfCatalogue` implies writing; `$Catalogue$` as a plain interface does not.** *Which is this class?*

---

# <a id="checklist"></a>The checklist

***Doug, 2026-08-31: "I want to see todo checklists, even if they are brainstorm and planning checklists."*** **It lives in the chapter rather than in a session todo list, because [conversation memory does not survive compaction](../../../../.claude/skills/ce-work/SKILL.md).**

## Brainstorm

- [x] Read the room, and read what v2 actually built
- [x] Establish that this word is NEW — **`catalogue` and `read()` have zero occurrences in `src`**
- [x] Read the required coding conventions and link them here
- [x] Capture Doug's design verbatim — [the shape](#the-shape), [the generic](#the-generic)
- [x] Raise the generic-on-writing collision **before** building it, and record his answer
- [x] Write the requirements — **R29–R39**
- [ ] **O6** — the async `read()` versus a synchronous `view()`
- [ ] **O7** — what `complete` concatenates
- [ ] **O8** — is a catalogue writing?
- [ ] **R36** — confirm or bend the property/method split on the two new composition members
- [ ] Design **R39**'s mechanism, or keep it design-owed — *words as a catalogue of references*
- [ ] Design the demo beside the requirements
- [ ] **Requirements approved by Doug** — ***the gate; no code before it***

## Plan *(not started — gated on the above)*

- [ ] Decisions with rationale
- [ ] Measure the size — *v1's catalogue was 155 lines across two classes; measure before dividing*
- [ ] Units with mechanisms; **R39 gets no files until it has one**
- [ ] Test scenarios, including the `.spec` pair every level gets — *[the carries-path example is the only gate that catches a type's rule failing](../solutions/35-the-rules-that-only-held-for-a-class.md)*
- [ ] Origin trace both directions
- [ ] Mark the chapter `implementation-ready`

---

# <a id="where-things-stand"></a>WHERE THINGS STAND — 2026-08-31

## The next action, as a command

***Answer O6, O7 and O8, then `/ce-plan` against this chapter and [sprint two's](32-the-route.md).*** **This chapter is `requirements-only`, and [`/ce-work` rejects that](../../../../.claude/skills/ce-work/SKILL.md).**

## Verified, with the numbers

**Run at the brainstorm:** ***20 files · 328 tests · 322 passing · 6 failing*** — *the same six that predate sprint one.* **`@dna-platform/chemistry` resolves by symlink into uncommitted framework code**, *so a clone at `HEAD` would not reproduce these.*

**Measured in the working copy:** ***`catalogue` and `read()` have ZERO occurrences in [`src`](../../package/src/)*** — **this word is being written for the first time, not refactored.**

## Names

***`The Handle` is a PROXY***, taken from Doug's own routing sentence rather than a name he gave. *His to rename.*
