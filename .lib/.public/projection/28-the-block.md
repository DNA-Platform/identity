# The Block

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force, and the register to check before a tidy crosses one.*

---

*Opened 2026-08-28 out of [Composition](27-composition.md), whose ladder stands and whose seam does not. **Status: `implementation-ready`.** Doug at the keyboard throughout; every requirement below carries the sentence it came from.*

***The title is Doug's own word:*** ***"We will have all writing go through blocks."***

**Identifiers.** Requirements **R258–R273**, actors **A13–A15**, acceptance examples **AE7–AE11**, risks **K31–K35**, decisions **D106–D113**, units **U203–U210**, scenarios **S1–S27**. *[None is ever renumbered](../../../../.claude/library/our-skillset/29-ce-plan.md#the-unit-identifier-specification); a deletion leaves a gap.*

**Where the code lands.** [`library/.public/package/src`](../../package/src/) — v2 — with v1 standing at [`.archive/`](../../package/.archive/) and still shipping.

---

# <a id="what-this-sprint-is"></a>What this sprint is

***One bond shape, one block, and seven levels that mirror the floor.*** **[Composition](27-composition.md) built the ladder out of two bond shapes and it broke at the seam between them.** *This sprint collapses them to one and takes each level no further than `$Letter` already goes.*

**The interpreter is named and stubbed, not written.** *Doug: **"Interpreters can be next sprint."*** ***What lands here is the seam it will grow into***, so the sprint after this one adds string division and changes no signature.

---

# <a id="the-rulings"></a>The rulings, verbatim

> ***"In bond constructor, take the block and assign it to a block property. We will have all writing go through blocks."***

> ***"Set inline."***

> ***"Go through the block and look for annotations (make sure annotation is parenthetical) and lift them into the specification (leave them in block too)."***

> ***"Make Word implement composition of Letter, and do the same all the way up to file as composition of document. Don't implement more than is implemented in letter now."***

> ***"In writing make a view that calls specify, interpret and prints the parts. That's good enough for now."***

> *"You know what? **Maybe we don't do anything special in writing.**"*

> *"**$$ functionality is getting deprecated I think, right? We're not doing that right now.**"*

> *"All writing should be inline, all of it comes in as a block. The block contains **strings (which need to be parsed) or Writing**."*

---

# <a id="the-state"></a>The state this sprint opens on — measured, not remembered

***The working copy was mid-refactor and the gate had never run.*** **Doug: *"Well let's fix type errors. Most of the code should be running off archive. Why isn't it?"*** *It was — the archive is green and always was.*

| | before | after the cleanup |
|---|---|---|
| **`tsc` on the archive (v1)** | **0 errors** | **0 errors** — *untouched* |
| **`tsc` on `src` (v2)** | ***197 errors***, vitest never reached | **0 errors** |
| **`npm run test`** | ***exit 2 at the typecheck*** | **393 tests — 377 pass, 16 fail** |

***All 197 were in v2's 18 files, and 194 were cascade from two missing declarations*** — `$Writing` had lost its type parameter and `$TypeOfWriting` was imported by seven files and written nowhere. **Proven rather than claimed: a throwaway copy of `src` with those two restored typechecked at zero.** *Three were real, and they are the fingerprints of an abandoned rename — `smiley.test` expecting a member called `example`, and `Letter.tsx` reaching for a `_specification` field that no longer exists.*

***The cleanup was made before these requirements were approved, on Doug's instruction, and that is recorded rather than smoothed over.***

## The sixteen reds, which are four things

| | |
|---|---|
| **13 promises** — `letter.test`, `smiley.test` | **`$TypeOfLetter` extends `$Type` rather than the shape the other six use**, so nothing recognises it. The message says it exactly: ***`This writing is not a $Letter — it carries $Letter.`*** |
| ***`'🙂Letter'` on the page*** | **`$Type` lost its `view()`.** *[Composition's own version](27-composition.md) returned `null` when unbound; `$Chemical.view()` returns `this.children`, so **the annotation prints its own name**.* |
| ***the ladder stops at paragraph*** | **the seam.** *See [R258](#r258).* |
| ***`<Type>Book</Type>`*** | `$Book` caches into the level catalogue rather than `$Type`'s. **There is no `$TypeOfBook`.** |

## And the premise that was wrong

***`<Writing>…<Type>Word</Type></Writing>` ALREADY WORKS.*** **All six promises in [`behaves.test`](../../package/src/tests/behaves.test.tsx) are green** — it carries the type resolved from the name, it *is* a file in the sense of the reading, it composes the documents written inside it, a written `<File>` and a writing that behaves as one answer alike, the same shape holds at word grade, and it reaches down a real ladder.

***The annotation is a formula.*** **It resolves in the render walk, by name, and the bond constructor runs after that resolution and before the view** — measured at [`particle.ts:439`](../../../chemistry/package/src/abstraction/particle.ts), which calls the bond, and line 443, which renders. *So the carried type is already sitting in the specification when the writing is bonded.* **Doug's reading that this had failed was made against the opposite ordering**, and it is what the face route was proposed to rescue; ***nothing needed rescuing.***

---

# <a id="the-measurement"></a>The measurement — taken at planning, before a unit was written

*[A dispatch is checked against the SIZE of the work](../../../../.claude/library/our-skillset/29-ce-plan.md#a-dispatch-is-checked-against-the-size-of-the-work--added-out-of-the-build), and [a plan may not assert a mechanism it has not looked at](../../../../.claude/library/our-skillset/29-ce-plan.md#a-unit-with-no-mechanism-is-not-a-unit--added-out-of-sprint-48s-failure). **Both were done in a throwaway copy of `src`, which was then swept.***

## The size — ***one session, and no division***

| | files | lines |
|---|---|---|
| **the seven levels** | 7 | **322** |
| **`$Writing`, `$Type`, `$Annotation`, `$Composition$`** | 4 | **81** |
| **`$Book`, `$Chapter`, `$Lib`** | 3 | **63** |
| ***the whole surface this sprint touches*** | **14** | ***466*** |
| the suite beside it | 5 | 498 |

***A division whose parts are smaller than their briefs is one session.*** **Fourteen files averaging 33 lines is not seven tracks with contracts at the seams**, and [The Build](15-the-build.md) is the sprint that paid for learning it.

## The mechanism — ***proven, not assumed***

***A throwaway copy of `src` was built with [R258](#r258)–[R260](#r260) applied — all writing inline, one block per bond — and instrumented to record what every bond actually received.*** **The trace, verbatim:**

```
$Letter     1 argument, block
$Word       1 argument, block
$Sentence   1 argument, block
$Paragraph  1 argument, block
$Section    1 argument, block
```

**And on that shape, four questions were asked and four passed:**

| | question | answer |
|---|---|---|
| **Q1** | does every bond receive **exactly one argument**, and is it a block? | ***yes, at every level*** |
| **Q2** | does the ladder read file → letters **through paragraph**? | ***yes*** — `['h','i']` at the floor, where it returns `undefined` today |
| **Q3** | does an annotation land in the block and answer `parenthetical`? | ***yes*** |
| **Q4** | does `copy` read the prose and **skip** the annotation? | ***yes*** — `'abc'` |

***So the spine of this sprint is not a proposal.*** **The one thing the plan rests on — that making every level inline delivers one block everywhere and repairs the ladder — was run before the plan was written.** *What remains is the work, not the question.*

---

# <a id="actors"></a>Actors

<a id="a13"></a>**A13** the library author, who writes one block and expects every level to read it the same way · <a id="a14"></a>**A14** the framework author, who wants seven levels differing in **what they compose** and in nothing else · <a id="a15"></a>**A15** the reader of a demonstration, who wants to see the same piece of writing **as prose** and **as its parts**, and be shown that the second was found rather than typed.

---

# <a id="requirements"></a>Requirements

## `$Writing` — three things, and nothing else

<a id="r258"></a>**R258** — ***the bond constructor takes ONE block and holds it.*** *Doug: "In bond constructor, take the block and assign it to a block property. **We will have all writing go through blocks.**"*

**This is what fixes the ladder.** *`$Sentence` is inline, so chemistry groups it into a block; `$Paragraph`'s bond is a rest array and does `filter(one => one instanceof $Writing)`; **the block is not a `$Writing`, so `written` comes out empty**. Section, Document and File work only because their children are not inline and arrive unwrapped.* ***Two bond shapes, and the break falls exactly at the seam between them.***

**The parameter is declared `(block: $Html<'block'>)` and checked as itself** — no cast, no index. *That is [S1](27-composition.md#s1) obeyed rather than repeated:* ***"Check is wrong!! You have to cast to do a type check?!"***

<a id="r259"></a>**R259** — ***`inline` is set on `$Writing`, and the four overrides come out.*** *Doug: "Set inline." + "All writing should be inline."*

***This reverses [C6](27-composition.md#c6)*** — *"Have letter - sentence be inline. Have paragraph - file not be inline"* — **and flips two promises that are green today** (`inline is assumed and overwritten`, both halves). ***Stated rather than discovered at the gate.*** *`inline` carries only what chemistry means by it — **this arrives inside the block** — and [the settled account says so](../the-semantics-of-books/15-the-levels-of-writing.md), which is why making it uniform costs no judgement anywhere else.*

<a id="r260"></a>**R260** — ***the bond lifts what is parenthetical into the specification, and leaves it in the block.*** *Doug: "Go through the block and look for annotations… and lift them into the specification (leave them in block too)."*

**Detection is on the `parenthetical` property and never on a class name.** ***This is not a preference; it is measured.*** *Putting `get type(): $Type[]` on `$Writing` during this session closed the cycle `Writing → Type → Annotation → Writing` and took **four test files to zero collected tests** with `Class extends value undefined is not a constructor`.* **[Composition](27-composition.md) records that this cycle was killed once already**, and it came back the moment the base class named the annotation.

<a id="r261"></a>**R261** — ***`$Annotation.parenthetical` is `true`, and a promise says so.*** *Doug: "make sure annotation is parenthetical."* **[R260](#r260) rests entirely on this**, so it stops being an incidental field and becomes a stated promise.

<a id="r262"></a>**R262** — ***nothing else goes on `$Writing`.*** *Doug: "**Maybe we don't do anything special in writing.**"* **No finding, no division, no type handshake.** *This is [C26](27-composition.md#c26) applied before the fact rather than after —* ***"You have this desire to handle everything at the writing level and I don't like it."***

## The view, and the interpreter's seam

<a id="r263"></a>**R263** — ***a view that calls `specify()`, calls `interpret()`, and prints the parts.*** *Doug's sentence exactly, and "that's good enough for now."*

<a id="r264"></a>**R264** — ***`interpret()` is the write and `parts()` is the read.*** **`interpret()` is called from the bond constructor and again by the view before it prints; `parts()` returns what is held and computes nothing.**

***This is not a mitigation, it is a dissolution.*** *[Solutions 16](../solutions/16-the-parse-that-woke-its-own-parents.md) — three appearances — says a reading called during a render must be **HELD, not for speed but for termination**; [K29](27-composition.md#k29) says this sprint's `parts()` will fire it the moment anything draws parts.* **Splitting the write from the read means the reading a render calls constructs nothing at all.** *v1 reached the same answer by a cache — [`$Writing.reading()`](../../package/.archive/writing/Writing.tsx) holds the parse against the text it was read from, under a `_` name so it is inert to reactivity — and **the separation is the cleaner form of it.***

<a id="r265"></a>**R265** — ***`interpret()` divides no strings this sprint.*** *Doug: "Interpreters can be next sprint."* **It finds, among what is written in the block, the things at the level below** — already one, or carrying that type. ***The signature is the whole point: the sprint after this one adds string division and changes nothing else.***

## The ladder

<a id="r266"></a>**R266** — ***each level mirrors `$Letter` and adds nothing.*** *Doug: "Make Word implement composition of Letter, and do the same all the way up to file as composition of document. **Don't implement more than is implemented in letter now.**"*

| type | composes |
|---|---|
| `$File` | `$Document` |
| `$Document` | `$Section` |
| `$Section` | `$Paragraph` |
| `$Paragraph` | `$Sentence` |
| `$Sentence` | `$Word` |
| `$Word` | `$Letter` |
| `$Letter` | **itself — the floor** |

**Each declares `parts()`, `interpret()`, `bind()`, its bond constructor, and its `$TypeOfX`.** *Nothing else.*

<a id="r267"></a>**R267** — ***the five monadic members stay on `$Writing`, written once, and `$Letter`'s duplicates come out.*** **This turns a red promise green** — *`and NO level declares any of them` fails today on `$Letter`* — **and it is [R238](27-composition.md#r238) already ruled**: *`parts()[0]`, filter, map, flatMap and filter-plus-count are the monad's own specifications, identical at every level by definition.*

***Flagged: this is a reading of "don't implement more than letter now", not Doug's sentence.*** *It reads the instruction as being about **scope** — add no capability beyond the floor's — rather than about copying the floor's redundancy.* **Reversible in one line if the reading is wrong.**

<a id="r268"></a>**R268** — ***`$TypeOfLetter` joins the shape the other six use.*** **Thirteen of the sixteen reds are this one file.**

<a id="r269"></a>**R269** — ***`$Type` gets its `view()` back.*** *Losing it is why the page reads `🙂Letter` instead of `🙂`.* **An annotation is present in the writing and absent from the reading**, and that has to be true of the drawing too.

<a id="r270"></a>**R270** — ***`$Book` gets a `$TypeOfBook`.*** **It caches into the level catalogue today, so `<Type>Book</Type>` raises *`$Type stands for nothing called "Book"`*.** *The last red.*

## The type a level carries

<a id="r272"></a>**R272** — ***each level, after calling the writing bond, adds its OWN type.*** *Doug: "in bond constructors of `$Letter`-`$File`, we will after calling the writing bond constructor have to **add the type associated with each one**."*

***`$Letter` already does exactly this***, which is why the instruction reads as confirmation rather than as new work: `$Letter`'s bond constructs a `$TypeOfLetter` and puts it in its own specification. **The other six follow.**

***And this is the requirement that makes the two populations one.*** *A written `<Word>` and a piece of writing told `<Type>Word</Type>` have been two different things all along — one IS a word, the other CARRIES the name of one.* **After this they are indistinguishable to the reading, because both carry a `$TypeOfWord`**, and [the reading no longer needs two paths](#d113).

<a id="r273"></a>**R273** — ***an annotation adds ALL its types, so an annotation can be chimerical.*** *Doug: "For annotation, in the bond constructor, **add all types, so annotations can be chimerical**."* **Chimerical is his word and it is the right one** — *made of parts of different creatures, and of several kinds at once.*

***Read as: a level is mono-typed by construction and an annotation is not.*** **Each of the seven adds exactly one type — its own; `$Annotation` adds none of its own and keeps every type written in it**, so one annotation may answer to several names. *This is [C17](27-composition.md#c17) built —* ***"annotations can be any type of writing"*** *— which Doug has now said three times and which has never been built.*

***FLAGGED AS A READING.*** *The sentence admits a second one — that **all** writing keeps all its types, with the levels merely adding theirs on top — and under that reading `$Annotation` needs no bond at all, because [R260](#r260) already lifts every parenthetical.* **One line apart in the code; stated here so the wrong one is corrected rather than discovered.**

## Names

<a id="r271"></a>**R271** — ***two names are proxies and the pick is Doug's.*** **`block`** *for the property Doug called "a block property" — the working copy calls it `text`* — and **`read`** on `$TypeOfX`, *which is already in the working copy and was never ruled*. ***[Nothing here is a name I invented](../../../../.claude/library/..teamsmanship/05-territory.md).***

---

# <a id="decisions"></a>Decisions

<a id="d106"></a>**D106 — one bond shape, taking the block.** *Chosen over teaching `$Paragraph` to unwrap a block while `$Section` keeps a rest array.* **Two shapes is what broke the ladder**, and a level should not have to know which side of the inline split it sits on.

<a id="d107"></a>**D107 — `interpret()` separate from `parts()`.** *Chosen over v1's held-reading cache and over letting `parts()` compute.* **A cache is a mitigation for a reading that constructs; separating the write from the read means it does not.** *v1's `_read` stays available if the separation proves insufficient.*

<a id="d108"></a>**D108 — the parenthetical property, never the class.** *Chosen over `instanceof $Annotation` and over a marker member.* **Measured this session: the class route closes a module cycle and empties four test files.** *It is also [D103](27-composition.md#d103) a second time, which is the design saying the same thing twice.*

<a id="d109"></a>**D109 — the face feature is not used here.** *Chosen after reading it end to end.* **Doug: *"Not to say it isn't a cool feature, but it's not helping us here."*** ***The reading is kept because it cost something and may pay later:*** *an interface assignment is a member holding a chemical component; it is worn by the instance in `frame()`, so it holds at a React root where a formula does not; two nest, first declared outermost; and **`facesOf` reads the class template and caches per class**, which is the only reason a per-instance assignment is impossible — **an implementation choice, not an ordering specification**, since the bond constructor demonstrably runs before `frame()`.*

<a id="d110"></a>**D110 — `$$` is neither extended nor deprecated this sprint.** *Doug: "$$ functionality is getting deprecated I think, right? We're not doing that right now."* **It keeps working; nothing new is built on it.**

<a id="d111"></a>**D111 — one session, no division.** *Chosen over dividing the seven levels across sessions with a contract at each seam.* ***Measured rather than assumed: 466 lines across 14 files averaging 33 lines each.*** **[The Build](15-the-build.md) cut a compiler into seven lettered tracks and two of them ran, because nobody had asked what the output was in lines.** *The question was asked here and the answer forbids the division — a brief per level would be longer than the level.*

<a id="d113"></a>**D113 — a level carries its own type, so the reading has ONE route.** *Chosen over letting a written level and a typed writing stay two populations the reading tells apart.* ***This is [K25](27-composition.md#k25) closed rather than mitigated:*** *Composition filed it as **two populations of one object** — a writing built with `$()` carrying a bare type and one that is drawn carrying a level — and mitigated it by exercising both forms in probes.* **If every level carries its own type from its own bond, there is one population and nothing to tell apart.**

<a id="d112"></a>**D112 — the suite gains one file per level, and the existing five stay.** *Chosen over rewriting the five into seven.* **The existing files promise things ACROSS levels** — a writing behaving as a type, a chapter being a document, the ladder end to end — *and those are not a `$Sentence`'s promises*. **The per-level files are [the unit-of-code rule](../designing-inexplicable-phenomena/07-the-unit-of-code.md) reaching the suite:** *`lib`'s unit is a class because an invariant is stated over a word, and a test file should fall where the promise falls.*

---

# <a id="units"></a>Units

*Every unit names **the mechanism — what runs, and when** — its files, what it depends on, and **what will be visible when it is done**. [A unit that cannot answer those is design owed and is denied files, scenarios and dependencies](../../../../.claude/library/our-skillset/29-ce-plan.md#a-unit-with-no-mechanism-is-not-a-unit--added-out-of-sprint-48s-failure). **None here is.***

## <a id="u203"></a>U203 — `$Writing`'s bond

**Requirements:** [R258](#r258), [R260](#r260), [R261](#r261), [R262](#r262).
**Mechanism:** *the bond constructor, at [`particle.ts:439`](../../../chemistry/package/src/abstraction/particle.ts) — **before the view, in the same render pass**.* It takes the block, holds it, walks `block.$elements`, and lifts what answers `parenthetical` into `specification` **without removing it from the block**.
**Files:** `writing/Writing.tsx`, `notation/Annotation.tsx`.
**Depends on:** nothing.
**Visible end:** ***a writing showing its prose while carrying its annotation*** — the two separable on screen, not merely in a count.

| | scenario | outcome |
|---|---|---|
| **S1** | writing written with prose **and** one annotation | `block` holds the block · `specification` holds the annotation · **the annotation is still in `block.$elements`** — [AE9](#ae9) |
| **S2** | writing with **no** annotation | `specification` is empty, and `specify()` refuses with *"a piece of writing has a type, and this one has none"* |
| **S3** | writing that is **only** an annotation | `copy` is `''`, `specification` has one — *the parenthetical case that satisfies `specify()` by being one* |
| **S4** | **two arguments reach the bond** | ***refused, naming the count*** — never silently keeping the first. [K33](#k33) |
| **S5** | `$Annotation` constructed | `parenthetical` is `true` — [R261](#r261), because [R260](#r260) rests on it |
| **S6** | ***the suite is collected at all*** | **`$Writing` names nothing from `notation/`.** *The cycle's signature is **zero collected tests** with `Class extends value undefined`, so this scenario is a count of collected files, not a passing assertion* — [D108](#d108) |

## <a id="u204"></a>U204 — inline made uniform

**Requirements:** [R259](#r259).
**Mechanism:** *[`chemical.ts:351`](../../../chemistry/package/src/abstraction/chemical.ts)'s `isInline` groups a run of inline children into one block.* Setting `inline` on `$Writing` and deleting the four overrides makes that grouping happen at **every** level, which is what delivers one block per bond. ***Measured — see [the trace](#the-measurement).***
**Files:** `writing/Paragraph.tsx`, `Section.tsx`, `Document.tsx`, `File.tsx`.
**Depends on:** U203.
**Visible end:** ***the ladder reaching paragraph on screen***, which it cannot do today.

| | scenario | outcome |
|---|---|---|
| **S7** | each of the seven, constructed | `inline` is `true` — ***this REPLACES the two promises that assert paragraph–file are `false`***, and the replacement is the reversal of [C6](27-composition.md#c6) made visible in the suite rather than hidden. [K31](#k31) |
| **S8** | a section written with **two** paragraphs | its bond receives **one** argument, and it is a block holding both |

## <a id="u205"></a>U205 — `interpret()` and `parts()`

**Requirements:** [R264](#r264), [R265](#r265).
**Mechanism:** ***`interpret()` writes, `parts()` reads.*** *Interpret is called from the bond constructor and again by the view before it prints; `parts()` returns what is held and computes nothing.* **That is what makes a reading a render calls construct nothing** — [Solutions 16](../solutions/16-the-parse-that-woke-its-own-parents.md) dissolved rather than mitigated.
**Files:** `writing/Writing.tsx` and the seven levels.
**Depends on:** U204.
**Visible end:** *a level's parts drawn, found from its block and named by nothing.*

| | scenario | outcome |
|---|---|---|
| **S9** | a level constructed, `parts()` asked immediately | **it answers** — interpret already ran in the bond |
| **S10** | `parts()` asked **twice** | ***the identical array both times.*** *A reading that constructs would not give one, so this is the promise that pins [R264](#r264)* |
| **S11** | a word written with the prose `'hi'` and **no letters** | ***zero parts, not two.*** **This pins the interpreter as ABSENT**, so the sprint that adds string division has a promise that visibly changes — [R265](#r265) |

## <a id="u206"></a>U206 — the ladder mirrored

**Requirements:** [R266](#r266), [R267](#r267).
**Mechanism:** *each level declares `parts()`, `interpret()`, `bind()`, its bond, and its `$TypeOfX` — and nothing else.* **The five monadic members resolve on `$Writing` by ordinary prototype lookup**, which is why deleting `$Letter`'s copies changes no behaviour and turns a red promise green.
**Files:** all seven under `writing/`.
**Depends on:** U205.
**Visible end:** **[AE7](#ae7)** — a file written by hand, read to its letters, through paragraph.

| | scenario | outcome |
|---|---|---|
| **S12** | a `$File` written by hand, seven deep | every rung answers · the floor reads `['h','i']` — **[AE7](#ae7)** |
| **S13** | a word written with three letters out of alphabetical order | `parts()` answers **in the order written**, never sorted |
| **S14** | `parts()` on a `$Letter` | `[this]` — *the floor composes itself and a descent terminates* |
| **S15** | every level's own prototype | ***declares none of `canonical`, `where`, `select`, `selectMany`, `single`*** — and **every level answers all five** — [AE10](#ae10) |

## <a id="u207"></a>U207 — the three remaining reds

**Requirements:** [R268](#r268), [R269](#r269), [R270](#r270).
**Mechanism:** *three edits in three files.* `$TypeOfLetter` joins the shape the other six use; `$Type` regains the `view()` that returns nothing when it stands for nothing; `$Book` gains a `$TypeOfBook` so the name reaches `$Type`'s catalogue.
**Files:** `writing/Letter.tsx`, `notation/Type.tsx`, `book/Book.tsx`.
**Depends on:** U203.
**Visible end:** ***the page reading `🙂` instead of `🙂Letter`*** — which is an annotation being absent from the reading, seen rather than counted.

| | scenario | outcome |
|---|---|---|
| **S16** | `<Writing>a<Letter /></Writing>` read as a `$Letter` | **it is one** — no longer *`This writing is not a $Letter — it carries $Letter`* |
| **S17** | a smiley drawn under `<Type>Letter</Type>` | the page reads `🙂`. ***The annotation draws nothing*** — [R269](#r269), [AE9](#ae9) |
| **S18** | `<Chapter /><Chapter /><Type>Book</Type>` | **behaves as a book and composes two chapters** — [R270](#r270) |

## <a id="u208"></a>U208 — the view

**Requirements:** [R263](#r263).
**Mechanism:** *a second look on `$Writing`, so every level inherits it.* It calls `specify()`, calls `interpret()`, and draws `parts()`. **The default look is unchanged** — [C32](27-composition.md#c32): *"Writing doesn't even have a view. It just renders its children."*
**Files:** `writing/Writing.tsx`.
**Depends on:** U206.
**Visible end:** **[AE8](#ae8) — the sprint's reviewable end**, and the one a hand-authored page cannot fake.

| | scenario | outcome |
|---|---|---|
| **S19** | one piece of writing, **drawn twice** — default and the second look | prose in the first, **its parts in the second**, and *nothing in the page names a level to get them* — [AE8](#ae8) |
| **S20** | the second look on writing carrying **no type** | ***it refuses***, because the view calls `specify()` first |
| **S21** | the second look on a level whose parts are levels | ***it terminates*** — no loop, no re-render storm. *[K34](#k34) is what this scenario exists to catch* |

## <a id="u209"></a>U209 — the suite, one file per level

**Requirements:** the coverage for all of the above.
**Mechanism:** *seven test files under `tests/`, one per level, each stating what its level promises.* **The existing five stay** — they promise things across levels and are not replaced by per-level files.
**Files:** `tests/`.
**Depends on:** U206.
**Visible end:** *seven files whose names are the seven words, so a reader looking for what a sentence promises opens `sentence.test.tsx`* — **[the unit-of-code rule](../designing-inexplicable-phenomena/07-the-unit-of-code.md) applied to the suite**, which is the one place in this branch it had not been.

| | scenario | outcome |
|---|---|---|
| **S22** | each of the seven files | *composes the level below · in written order · answers the five without declaring them · is inline · refuses what it must* |
| **S23** | the whole gate | ***a number WITH its scope*** — v1's and v2's stated separately, [never a bare PASS](../solutions/14-the-green-that-exercised-nothing.md) |

## <a id="u210"></a>U210 — each level carries its own type, and an annotation carries all of them

**Requirements:** [R272](#r272), [R273](#r273).
**Mechanism:** *the bond constructor again, after `super.$Writing(block)` has run.* **Each of the seven constructs its own `$TypeOfX` and puts it in its specification** — `$Letter` already does — **and `$Annotation` adds none of its own, keeping every type [R260](#r260) lifted.**
**Files:** all seven under `writing/`, `notation/Annotation.tsx`.
**Depends on:** U203, U206.
**Visible end:** ***a written `<Word>` and a piece of writing carrying `<Type>Word</Type>` answering identically*** — the same reading reaching both, where today only the second is reachable that way.

| | scenario | outcome |
|---|---|---|
| **S24** | a written `<Word>` | **its specification carries a `$TypeOfWord`** — [R272](#r272) |
| **S25** | a written `<Word>` and `<Writing>…<Type>Word</Type></Writing>` | ***the same reading answers both, by the same route*** — no second path |
| **S26** | an annotation written with **two** types | ***it answers to both names*** — chimerical, [R273](#r273), [C17](27-composition.md#c17) |
| **S27** | each of the seven | ***exactly one own type***, never two — *a level is mono-typed by construction* |

## <a id="order"></a>The order

***U203 → U207 → U204 → U205 → U206 → U210 → U208 → U209.***

**U207 runs second because it is three small edits that clear thirteen of the sixteen reds**, and a suite that becomes honest early is worth more than one that goes green all at once at the end. *U208 runs after the ladder because it draws it, and U210 before it because it is what makes the two populations one.*

---

# <a id="tracing"></a>Origin tracing — both directions

*[Every requirement lands somewhere, and every unit cites a mechanism and a visible end.](../../../../.claude/library/our-skillset/29-ce-plan.md#origin-tracing-runs-both-directions) **Checked before this plan was handed off.***

| requirement | lands in | seen as |
|---|---|---|
| [R258](#r258) one block | **U203** · S1, S4 | AE9 |
| [R259](#r259) inline uniform | **U204** · S7, S8 | AE7 |
| [R260](#r260) lift the parenthetical | **U203** · S1, S6 | AE9 |
| [R261](#r261) annotation is parenthetical | **U203** · S5 | AE9 |
| [R262](#r262) nothing else on `$Writing` | **U203** · S6 | *the member list* |
| [R263](#r263) the view | **U208** · S19, S20 | **AE8** |
| [R264](#r264) interpret writes, parts reads | **U205** · S9, S10 · **U208** · S21 | AE8 |
| [R265](#r265) no strings divided | **U205** · S11 | *the promise that will change next sprint* |
| [R266](#r266) each level mirrors the floor | **U206** · S12, S13, S14 | **AE7** |
| [R267](#r267) five on `$Writing` | **U206** · S15 | **AE10** |
| [R268](#r268) `$TypeOfLetter` | **U207** · S16 | AE9 |
| [R269](#r269) `$Type.view()` | **U207** · S17 | **AE9** |
| [R270](#r270) `$TypeOfBook` | **U207** · S18 | AE9 |
| [R272](#r272) a level carries its own type | **U210** · S24, S25, S27 | **AE11** |
| [R273](#r273) an annotation is chimerical | **U210** · S26 | AE11 |
| [R271](#r271) the two names | ***OPEN*** — a ruling, not a unit | — |

| actor | served by |
|---|---|
| [A13](#a13) the library author | U203, U204 — *one block, read the same way at every level* |
| [A14](#a14) the framework author | U206 — *seven levels differing only in what they compose* |
| [A15](#a15) the reader of a demonstration | U208 — **AE8** |

***Nothing drops.*** **[R271](#r271) is the one requirement with no unit, and that is correct** — it is a ruling owed, and [the specification says a thing with no mechanism is not a unit](../../../../.claude/library/our-skillset/29-ce-plan.md#a-unit-with-no-mechanism-is-not-a-unit--added-out-of-sprint-48s-failure).

---

# <a id="what-is-seen"></a>What is seen

*[A requirement that cannot be seen satisfied is not a requirement.](../../../../.claude/library/our-skillset/28-ce-brainstorm.md#the-validatable-specification)*

<a id="ae7"></a>**AE7** — a `$File` written by hand reads all the way down to its letters, **through paragraph**, which it cannot do today. *Covers [R258](#r258), [R259](#r259), [R266](#r266).*

<a id="ae8"></a>**AE8** — ***the one a hand-authored page cannot fake.*** **The same piece of writing drawn twice — as prose, and as its parts** — where the second is what `interpret()` found in the block and **nothing in the page names a level to get it.** *Covers [R263](#r263), [R264](#r264), [R265](#r265).*

<a id="ae9"></a>**AE9** — an annotation is lifted into the specification **and stays in the block**, and the page shows the writing without showing the annotation's own name. *Covers [R260](#r260), [R261](#r261), [R269](#r269).*

<a id="ae10"></a>**AE10** — no level declares `canonical`, `where`, `select`, `selectMany` or `single`, **and every level answers all five**. *Covers [R267](#r267).*

<a id="ae11"></a>**AE11** — ***a written `<Word>` and a piece of writing carrying `<Type>Word</Type>` drawn side by side, answering identically*** — the same reading reaching both, by one route. **And an annotation written with two types answering to both names.** *Covers [R272](#r272), [R273](#r273).*

---

# <a id="risks"></a>Risks

<a id="k31"></a>**K31 — [R259](#r259) reverses a constraint rather than satisfying one.** *[C6](27-composition.md#c6) is Doug's sentence and it says the opposite.* **Two green promises assert it.** ***The reversal is his own later sentence and the earlier one leaves the register by being withdrawn, not by being forgotten.***

<a id="k32"></a>**K32 — a bond constructor is found by class name.** *[K26](27-composition.md#k26) unchanged: `$Smiley` runs none, which is why its text is unset.* **Every one of the seven needs its own**, and [Sprint 48's enforcement](06-sprint-48--subjects-and-the-library.md) marks a chain invalid by name when a declared constructor is not reached.

<a id="k33"></a>**K33 — one block, or something inside is not inline.** *v1 threw a good message for this and v2 has none:* **"Writing arrives as one block. N arguments reached this bond, which means something written inside it is not inline and stood apart from the prose."** ***With [R259](#r259) making all writing inline, a second argument means something that is not writing***, and the bond should say so rather than silently keep the first.

<a id="k34"></a>**K34 — the parse writes, and v1's does.** *[`.archive/writing/Word.tsx`](../../package/.archive/writing/Word.tsx) sets `part.parent = this` inside `parts()`, and [the settled account blames that line](../the-semantics-of-books/15-the-levels-of-writing.md): **"While the parse wrote, threading a parent looped the page."*** **The reference implementation is worth reading and that line is not worth copying.**

<a id="k35"></a>**K35 — two copies of the framework are loaded at once.** *[K30](27-composition.md#k30), unchanged and still true.* **No import may cross between `src` and `.archive`.**

---

# <a id="open"></a>OPEN — rulings owed

| | |
|---|---|
| ***`block` and `read`*** | [R271](#r271). **Proxies stand in the code.** |
| ***a writing carrying two types*** | `<Writing>:)<Type>Character</Type><Type>Word</Type></Writing>`. **Mechanically fine — the reading already searches the whole specification** — but read as a `$Word`, `parts()` scans what is *written inside*, and the Character is not written inside: ***it IS this writing.*** *A writing that is both a level and the level above it has to count its own lower reading as its part, and nothing does that.* **Raised by Doug and not designed.** |
| ***the second question*** | [R246–R248](27-composition.md#r246) are still not built. **Today the Smiley passes as a letter and nothing asks whether it is the canonical kind.** |

---

# <a id="still-to-come"></a>Still to come

**The interpreter** — string division at every level, which v1 already implements once per level and which [K34](#k34) says how not to copy.

**The derivations as types** — `$Punctuation`, `$Phrase`, `$Emphasis`, `$Formula`, `$Snippet`, `$Caption`, `$Title`, `$Summary`. ***All eight exist in v1 and all eight do exactly three things:*** **validation, view, and injected components.** *Which is Doug's own division —* ***"TypeOfX carries much of the validation… $X decide how to view and if needed, what data to expose"*** *— found in code written before he said it.*

**Chapter, Cover and Contents, restyled without being changed.** ***And v1's own comment names the fault to avoid:*** *a table of contents that overrides `parts()` to mean its **entries** rather than its sections, so every member it inherits reads the wrong composition —* **"the duplication stands until the contents stops being a chapter whose parts are of another kind."** *The three candidate mechanisms are measured and none is chosen:* **`$`-props** (v1 uses twenty-one of them, per use site), **looks** (shipping, but only what the class anticipated), and **scope substitution** (`$(Host, Cover$)(Fancy)` — three tests, skipped, blocked on the composition graph not being threaded through a holder).

**Structured comprehension mode** — *Doug: a query surface for the code, for metadata-oriented views.* **Not implemented now**, and the reason it matters here is that it puts `where`/`select`/`selectMany`/`single` **outside the draw path**, which is what makes [K29](27-composition.md#k29) survivable at all.

---

# <a id="where-things-stand"></a>WHERE THINGS STAND

*[The session boundary](../../../../.claude/library/our-skillset/32-ce-handoff.md). **The next session opens by reading this and acts on nothing until it has** — and the working copy is the truth, not this page.*

## The state, in numbers from the run that claims them

> **lib `npm run test` — 45 files, 461 tests, exit 0.** *v1's **352** untouched and v2's **109** beside them, from 41 of which 25 were green.*
> **`tsc` 0 on v1 · `tsc` 0 on v2 · app typecheck 80 files, 0 unexpected.**

**NOTHING IS COMMITTED.** *29 modified files and 9 new ones under `src`, and the parallel $Chemistry session's uncommitted work sits in the same working copy — `$Block`, `molecule.ts`, `particle.ts`.*

## <a id="the-rulings-of-the-day"></a>Doug's rulings, and each one closed something

| | ruling | what it settled |
|---|---|---|
| ***"NEVER put a generic type on writing. That ALWAYS means I recommended something wrong."*** | **the generic is a SIGNAL** | composition came off `$Writing` entirely |
| ***"Writing doesn't implement composition. EVER."*** | **the seven implement it themselves** | `canonical()` left the interface |
| ***"For writing, I want to have canonical."*** | ***closes [R248](27-composition.md#r248)*** | the second question had a proxy standing since Composition; **it is `canonical`** |
| ***"specify carries all of it… we want the type to carry almost everything specific"*** | **validity lives in `specifically`** | v1's 37 `valid()` files collapse into the types |
| ***"Author, Subject and Type will all be types of annotations"*** | **annotation is the parent kind** | v1 had it inverted — `$Annotation extends $Phrase` |
| ***"canonical (on writing) · case · kind"*** | **three names given** | and `data-part`, `Kind`, `Case`, `letterFor` struck as mine |
| ***"Generalize into a protected method… call it build"*** | ***the bond and the binding run the same code*** | a letter reclassifies when it comes to stand for other writing |

## What is DONE

| | |
|---|---|
| **[U203](#u203)** | ***`$Writing` is Doug's own***, and it grew `build()` and a `back` look during the session. |
| **[U204](#u204)** | **Every level is inline**, one block per bond, and the ladder reaches paragraph. |
| **[U206](#u206)**, **[U210](#u210)** | ***Seven levels, each implementing `$Composition$` itself*** — `$Letter` a composition **of itself** — carrying nothing but the interface, a bond, and a `$TypeOfX`. |
| **[U207](#u207)** | All three reds cleared. |
| ***`canonical` on `$Writing`*** | **`get canonical(): boolean`, default true**, overridden by `$Letter` — alphabetical — and `$Word` — has a letter or number. *A space and a smiley are non-canonical letters by a member rather than a class.* |
| ***`$Letter` reads what comes in*** | **`kind` five ways and `case` where there is one**, computed in `build()` — alphabetical · numeric · punctuation · whitespace · **symbolic**, which is the FALLBACK and therefore needs no roster. |
| ***`$Word` divides prose*** | **a letter per grapheme, in written order**, with written letters standing among the divided ones. |
| ***grapheme, not code point*** | `Intl.Segmenter` — **zero dependencies, already in the platform, multilingual by construction.** *A joined family emoji is ONE letter; spreading the string gave five.* |
| ***the types SPECIFY*** | **every bond ends `this.specify()`**, and a violation draws its reason where the writing would have drawn: *"a letter is one grapheme, and this one is not"* · *"a word is one unbroken stretch, and this one carries whitespace"*. |
| ***a composition narrows*** | **`$Book` composes `$Chapter` while `$File` composes `$Document`** — and `$MyBook` composes `$MyChapter` two levels on. |
| **[U209](#u209)** | ***13 files, 109 promises.*** |

## What was FOUND, and none of it was looked for

| | |
|---|---|
| ***A BOND CONSTRUCTOR IS NOT INHERITED*** | **[Solutions 31](../solutions/31-the-writing-that-drew-and-held-nothing.md).** *Measured both ways in one file, and it corrects [Composition](27-composition.md)'s own sentence.* |
| ***the cycle that empties a suite rather than reddening it*** | **[Solutions 30](../solutions/30-the-suite-that-collected-nothing.md).** *Twelve files, no tests, and the same cycle had been killed once already.* |
| ***A COMPOSITION NARROWS FOR FREE*** | ***[Composition](27-composition.md) filed the typed narrowing as owed.*** **It needs no type parameter at all** — TypeScript's method parameters are **bivariant**, so a narrowing class re-declares the six with its own type and the compiler accepts both readings. *`tsc` 0, three promises, no generic and no cast.* **The known price: the compiler will not catch a predicate that is wrong only for the wider reading.** |
| ***React's idiom in a framework that tracks mutation*** | **Nine sites replaced the array to signal a change.** *[`scope.ts`](../../../chemistry/package/src/implementation/scope.ts) deep-clones a collection on read and diffs it on finalize, so `push` is seen with the reference unchanged.* **Compounded into [the reactivity contract](../../../chemistry/.lib/authorship/04-the-reactivity-contract.md), beside the hooks** — *because an idiom has no name to search for, which is why it outlives every hook.* |
| ***`$check` throws only OUTSIDE a bond*** | `raise()` records the reason and throws when it is not bonding. **That is what makes enforcement draw rather than crash.** |
| ***what renders the same must classify the same*** | *Doug: "if it renders like that, we should support it."* **A decomposed accent was symbolic and non-canonical while the precomposed one was alphabetical** — the patterns now carry combining marks. |
| ***turning enforcement on names the missing kinds*** | **A word of three spaces now records *"carries whitespace"*, and repetitive spaces are supposed to BE words.** *The resolution is v1's: a kind that relaxes the rule, exactly as `$Phrase` relaxes it for a name with spaces in it.* |

## <a id="owed"></a>What is NOT done

| | |
|---|---|
| ***the parsers above word*** | **`$Sentence` and `$Paragraph` divide nothing**, pinned by a promise. ***The prepared answer is `Intl.Segmenter` word and sentence granularity***, with **two named divergences**: a hyphenated word splits at the hyphen where Doug said dashes are allowed, and an abbreviation ends a sentence. |
| ***the kinds enforcement made visible*** | **something for spaces, something for phrases** — each a `$TypeOfX` that relaxes the word rule, one class and one sentence apiece. |
| ***`$$` constructs empty, then binds*** | **`build()` repairs the classification; it does not repair the record.** *A correctly bound letter carries the refusal it earned in the instant before it was bound.* **Nothing reads it today; it would show if a bound part were ever drawn.** |
| ***`$$` never asks `specify()`*** | *A writing carrying a Letter type over three graphemes is bound and becomes a part, unchecked.* **The parser walks that path.** |
| ***writing at the wrong level is dropped in silence*** | *The reading asks, gets false, pushes nothing and says nothing.* **v1's parse THREW, naming both levels.** |
| ***the twelve derivations, the reference arm, the book layer*** | **[What Carries Over](../designing-inexplicable-phenomena/09-what-carries-over.md)** carries the whole map and the order the dependencies force. |

## The wrong turns already taken — do not repeat these

| | what happened |
|---|---|
| ***letting the base class name what extends it*** | **Twice in one day** — a type getter on `$Writing`, then seven imports on `$Annotation`. *[Solutions 30](../solutions/30-the-suite-that-collected-nothing.md).* |
| ***inventing a member where an incumbent stood*** | Two members were written where **`$parts`** and **`holds()`** already existed. ***Doug: "You were only supposed to work on members that already exist or already existed on a similar type."*** |
| ***reading a pasted fix as the problem*** | *A two-line brace-less loop was pasted as the CORRECTION; it was read as the fault and braces were added across the package, then reverted.* **A newline does not survive being quoted back.** |
| ***citing test scaffolding to the person reviewing the model*** | **Doug: "you can't quote that to me. I don't know that code."** ***Show framework vocabulary or show the rendered page.*** |
| ***reporting a conditional finding as absolute*** | *The `back` look was reported as breaking the draw path.* **It breaks against a `$Writing` carrying composition, and is green against the one that does not.** |

## For the next session

***Open here, then read the working copy.*** **The gate is green and nothing is half-built.** *The next unit is the sentence and paragraph parsers; the ruling owed before they start is whether writing at the wrong level is **refused** or **dropped**.*
