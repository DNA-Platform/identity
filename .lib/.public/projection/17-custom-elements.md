# Custom Elements

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force, and the register to check before a tidy crosses one.*

---

*Opened 2026-08-18 as a brainstorm, planned the same day. **Status: `implementation-ready`.** The plan enriched this same chapter in place rather than starting a second document.*

*The name is **Doug's phrase**: "in an OO framework **being able to create custom elements** is important." Standing for correction like every proxy on this branch.*

**Identifiers continue from [Validation](16-validation.md).** Requirements begin at **R47**, acceptance examples at **AE28**, units at **U43**.

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

## THE DESIGN PRINCIPLE, and it is why this is a defect rather than a preference

***Doug, 2026-08-18, and the frustration in it is earned because the team had been told before:***

> *"I'm frustrated that we are still banging our heads on this framework, that your team CANNOT get the design principle — **in an OO framework being able to create custom elements is important** and why the hell are we trying to close a react representation **if we can't use the custom elements that are inserted**. Why can't you understand the design? **We invented a way for `$` to be a container.** You better be using `$(Sentence)` and `$(Paragraph)` when working with all of these things because **one should be able to replace the defaults**."*

**The principle has two halves and the framework only honours one.**

**Replacing a default WORKS.** Every level composes the level below through the container, never by naming a class:

```tsx
compose(prose: string): $Sentence {
    const Sentence = $(sentences.Sentence);
    return $(<Sentence>{prose}</Sentence>);
}
```

**Inserting a custom element DOES NOT.** A `<SpecialWord>` an author writes inside a paragraph is thrown away before it can be one of the words. ***So the container lets you replace the default and the parse will not let you insert one***, and that is the same principle failing at the other end.

> *"**Otherwise there is no concept of making a special type of section and having that be one of the sections.**"*

## Doug's rulings — 2026-08-18, verbatim

- **THE DEFECT, STATED.** *"**A typed element shouldn't dissolve. The upper parse should depend on the lower one. It should be put at the right level.** We need a way for this to work…"*

- **AND STATED AGAIN, HAVING BEEN SAID BEFORE.** *"I already told you that **if a custom element is in there, it needs to be in the parse.** You are being lazy and bad if you believe that section and title are not in there. **Those should be typed correctly and they should survive in the parse.** … **If your parse is removing the typed elements it is wrong. You must parse AROUND elements of the right type.** We talked about this."*

- **THE FOUNDATION, AND HE CALLED IT SIMPLE.** *"First in $Chemistry, **don't have the block return `$String` and `$Number`, just have it return raw strings and numbers.** That's simple."*

- **THE SPECIFICATION, AS AN EXAMPLE.** *"Then if we have:*

  ```tsx
  <Paragraph>
  Blah blah blah blah <SpecialWord>BLAH</SpecialWord> blah blah
  </Paragraph>
  ```

  *We do want that to parse into **one paragraph, and one sentence, and the sentence should contain a special word.**"*

- **ON THE LEVEL STRINGS.** *"**Dangerous** … Right now, **can't we just use instanceof checks? We are strongly typed versions of those things.**"*

- **ON THE BAG.** *"Why does every thing need to be part of a collection? **No one asked for a general purpose elements collection. That is not true of writing so it must be removed.** The symptom is that **you guys didn't feel like coming up with consistent names for things so you wrote terrible code around it**."*

- **AND WHAT DOES NOT HAVE TO GO THROUGH IT.** *"**not everything needs to be checked through the parse structure!** I don't see why anything NEEDS to be. But Title should be in the parse anyways."* ***So this sprint does not owe every accessor a walk through the model*** — it owes that a written element is not destroyed.

- **THE SCOPE.** All four steps, taken together. *The framework-copies problem and the card-catalogues-cards ruling were offered beside them and not taken; both are [named out of scope](#out-of-scope-named-so-it-is-not-drifted-into).*

## What was read — verified 2026-08-18

*Every claim measured in this session, and three earlier probes were wrong before these were right.*

- **The rule the parse actually follows.** [`parse()`](../../package/src/writing/Writing.tsx) keeps an element standing **at** the level being composed and pushes everything else into a run that is flattened with `run.map(part => text(part)).join('')`. **One line destroys the object.**
- **Measured in one realm**, on a real cover: `<Section>` survives **1 of 1**; `<Title>` survives — **1 of 2 paragraphs is a `$Title`**; `<Author>` survives **0 of 13 words**. *`$Title extends $Paragraph` is paragraph-grade inside a section and lands. `$Author extends $Phrase extends $Word` is word-grade inside a section, two levels down, and becomes the string "The Team".*
- **THE ROOT, measured at runtime.** A `<Section>`'s block holds `$Title`, **`$Html$`**, `$Author`, **`$Html$`** — the two `$Html$` being *raw prose wrapped in chemicals* by [`asElement`](../../../chemistry/package/src/abstraction/chemical.ts). ***So prose and typed elements look alike***, and the parse cannot tell them apart by kind.
- **Which is why it guesses with a string.** [`$Writing.level`](../../package/src/writing/Writing.tsx) returns `undefined`, `levels.indexOf(undefined)` is `-1`, and **a class that declares no level is silently treated as prose and dissolved** — no error, no count.
- **Composing already goes through the container** in `$Section`, `$Paragraph`, `$Sentence` and `$Word`. *That half of the principle is not at issue and must not be broken.*
- **The class hierarchy already IS the level.** `$Title extends $Paragraph`, `$Author extends $Phrase extends $Word`, `$Cover extends $Chapter`. **The string is a second encoding of the same fact.**
- **A THIRD PROBE WAS WRONG BY REALM.** A test importing the framework from `src` measured *0 of 1 sections* against a book importing it from `dist`, because `instanceof` is false across two copies. *Recorded because [R49](#r49--the-base-stops-deciding-for-its-subclasses) leans on `instanceof`, and this is the ground it leans on.*

**Baseline, so every later number is a delta:** chemistry **674/674** · lib **257/257** · `tsc` 0 in both · compiler **43 unit + 29 walk + 37 build + CHECK 7/7** · `.public/app` typecheck **38 files, 26 dotted** · `verify-library` **29/29** · `verify-book` **61** · `verify-demo` **25**.

---

# What this needs to be

## The boundary

**One defect, four steps, from the bottom.** The substrate stops disguising prose as a chemical; the parse places a written element at its own level; `instanceof` replaces the level strings; the bag is deleted. **Stopping halfway leaves the bag in place with nothing gained.**

## The actors

- **A16 — An author writing a custom element.** Writes `<SpecialWord>` in a paragraph and expects it to *be* one of the words — not a picture of one, and not a string.
- **A17 — Someone extending the framework.** Declares a special kind of section, paragraph or word and expects it to stand as one of them, because that is what an OO framework is for.
- **A18 — Every accessor that digs today.** `$Cover.author`, `$Cover.subject`, `$Footer.footnotes`, and the book's canonical count. Each wants to ask the model instead.

## The key flows

- **F12 — Insertion.** A custom element written among prose lands in the model **at its own level**, whatever level it was written into.
- **F13 — Replacement.** A registered override still replaces a default on the way down. *Unchanged, and it must stay unchanged.*
- **F14 — Reaching it.** A named accessor finds what it wants without a general-purpose collection.

## The requirements

### R47 — Two content kinds are deleted; only the block remains

***Doug: "we added `$String` and `$Number` — get rid of the ones we added. We just need `$Block`."***

*"Don't have the block return `$String` and `$Number`, just have it return raw strings and numbers."* [`asElement`](../../../chemistry/package/src/abstraction/chemical.ts) stops wrapping; `block.$elements` becomes **`(string | number | $Chemical)[]`**.

**Seen:** the runtime contents of a `<Section>` read `$Title`, prose, `$Author`, prose — **two chemicals and two strings**, where today they are four chemicals. **`typeof e === 'string'` IS prose**, and the guessing has nothing left to do.

*Touched: the block's own `view()`, the framework's `text()`, and the block's type.*

### R48 — The parse places a written element at its own level

*"A typed element shouldn't dissolve. The upper parse should depend on the lower one. It should be put at the right level."*

**A chemical in a run is ATOMIC.** Divide the run at this level's boundaries; a chemical never splits a piece and belongs to the piece its position falls in; compose each piece **from its own sub-run** rather than from a flattened string. **A piece that is exactly one chemical already at this level IS the part** — which is what works today, arriving as a case of the general rule instead of a branch.

**AND COMPOSING STILL GOES THROUGH THE CONTAINER.** `$(Sentence)`, `$(Paragraph)`, `$(Word)` — *"one should be able to replace the defaults."* **A rewrite that hardcodes a class has broken the principle it was written to serve.**

**Seen — Doug's own example, as the acceptance:**

```tsx
<Paragraph>
Blah blah blah blah <SpecialWord>BLAH</SpecialWord> blah blah
</Paragraph>
```

→ **one paragraph · one sentence · and the sentence's words include the `$SpecialWord` itself**, `instanceof` and all.

### R49 — THE BASE STOPS DECIDING FOR ITS SUBCLASSES

***Doug: "If you are validating from writing you are just doing it wrong." And, on the first two drafts of this requirement: "Why would writing need to import word" and "What are you validating that doesn't have a strong typed sense of what it is?"***

***This requirement was drafted wrong twice before it was right, and the shape of the error is worth keeping.*** First it was written as *`instanceof` replacing the level strings* — swapping one global ordering for another. Then as *each level naming what it accepts* — better, and still a list the base consults. **Both kept the decision in the base.**

**[`parse()`](../../package/src/writing/Writing.tsx) is a generic function in `$Writing` taking `accepts`, `divide` and `compose` as callbacks**, deciding on every subclass's behalf what it may hold. ***That is the base validating for its subclasses***, and it is the reason there had to be a `level` string at all: a generic function reasoning about classes it is not allowed to import needs some stand-in for them, and the string was it.

**Each level composes its own parts, and then there is nothing generic left to validate.** `$Section` makes paragraphs and already imports `$Paragraph`; it does not need to be told what it may hold, and `$Writing` does not need to arbitrate. ***`level`, `levels`, `accepts` and the ordinal comparison were all scaffolding for a decision that should not have been in the base.***

**Seen:** `$Writing` imports no level class and decides nothing about them; `level`, `levels` and the ordinal comparison appear **zero** times; and a written element lands where its own class says it belongs.

### R49-a — the shape, once the base is out of the way

*Doug: "Can't we just use instanceof checks? **We are strongly typed versions of those things.**" And, when this was first drafted as a global ordering: **"Why would writing need to import word"** and **"What are you validating that doesn't have a strong typed sense of what it is?"*** ***Both corrections landed and the requirement below is the second draft.***

**There is no ordering, no `levels` array, and no `level` getter.** `$Section extends $Writing<$Paragraph>` — **a class already declares what it composes and already imports it.** So the parse asks one question per level:

```
a string    →  prose. divide at my boundaries, compose the pieces.
a chemical  →  is it one of MY parts?   ($Section asks: instanceof $Paragraph)
               yes  →  it IS a part, standing where it was written
               no   →  it rides down inside the piece it sits in
```

***Nothing imports upward.*** `$Writing` never names `$Word`; each level names only the one beneath it, which is [the chain that already exists](#what-was-read--verified-2026-08-18).

**And Doug's example resolves with no ranking anywhere.** The section asks `$Author` — not a `$Paragraph` — so it rides down. The paragraph asks — not a `$Sentence` — rides down. The sentence asks — **`$Author extends $Phrase extends $Word`, yes** — and it lands as a word. `$Title` is asked by the section, `instanceof $Paragraph` is **true**, and it stands where it was written.

**Seen:** `level`, `levels` and the ordinal comparison are **gone**, stated as a count of zero; `$Writing` imports no level class; and a chemical nothing accepts is **named at the floor** rather than dissolved on the way.

### R50 — `elements` is deleted

*"No one asked for a general purpose elements collection. That is not true of writing so it must be removed."* Once a written element lands in the model there is nothing left for the bag to hold.

**Seen:** `$Cover.author` is a lookup among the cover's own words; `$Footer.footnotes` likewise; the count of hand-written `flatMap`s in `src/` falls; and **`elements` appears nowhere on the writing surface**, stated as a count.

*Per Doug: not every accessor must reach through the parse — what is required is that nothing has to dig for what an author wrote.*

### R51 — The demonstration is a custom element somebody wrote

**A custom word, section or paragraph declared in the demo and written into a real book**, standing in the model and drawn on the page. *This is the requirement that makes the sprint reviewable rather than a diff: the principle is "you can create custom elements", so the proof is one that somebody created.*

### R52 — The words are the domain's

*Doug: **"run is not something I have signed off on… Whatever run is, get rid of it. Keep looking for words that don't go. Running is not part of the semantics of writing."*** ***The same objection as [the bag](#r50--elements-is-deleted), one layer down: a foreign word standing where a domain one should, and nobody noticing because nobody had to name the thing.***

**Audited across the whole framework source:**

| word | count | whose word it is | where it stands |
|---|---|---|---|
| **`run`** | 10 | a lexer's | the parse's accumulator, and prose describing a word |
| **`lexer`** | 5 | `marked`'s | `$Section`, and the prose around it |
| **`token`** | 3 | a lexer's | `$Sentence`'s regex, cutting prose into words |
| **`ceiling`** | 2 | a building's | the parse's upper bound |
| **`tree`** | 1 | a diagram's | one comment |

*`node` reads as 33 and is **41 of them `ReactNode`**, React's own type; the rest sit in `utilities/html.ts`, which IS the seam to React. **That one is defensible and stays.***

***And the audit pays for itself: `run`, `ceiling` and `token` all live in exactly the lines [R48](#r48--the-parse-places-a-written-element-at-its-own-level) and [R49](#r49--the-base-stops-deciding-for-its-subclasses) rewrite.*** A parse that stops deciding for its subclasses stops needing a ceiling; an accumulator that carries what was written is not a run of prose. **The vocabulary is not a separate pass — it is the same lines, done in the domain's words.**

**Seen:** each of the five stated as a count of zero, or kept with its reason written down. **The names are Doug's**, and the sprint proposes rather than takes them.

## Acceptance examples

- **AE28.** A `<Section>`'s runtime contents are **two chemicals and two raw strings**, not four chemicals.
- **AE29.** Doug's paragraph → **1 paragraph, 1 sentence, and `$SpecialWord` among that sentence's words.**
- **AE30.** `<Author>` written on a cover appears among the cover's **words**, and `$Cover.author` finds it without digging.
- **AE31.** `<Title>` and `<Section>` still survive exactly as they do today — **1 of 1, and 1 of 2 paragraphs** — so the fix adds and takes nothing away.
- **AE32.** A chemical no level accepts is **named at the floor** rather than dissolved on the way down.
- **AE33.** A registered override still replaces a default: composing goes through `$(…)` and a replaced `Sentence` is what a paragraph composes.
- **AE34.** `elements` appears **zero** times on the writing surface.
- **AE35.** chemistry **674+**, lib **257+**, both demo drivers and the app driver green, with the compiler's own suite and gates unmoved.

## What a hand-authored page could fake, and what it could not

**A page showing a special word can be faked** by styling a word. **What cannot be faked is the model containing it** — `sentence.words` holding an object that is `instanceof $SpecialWord`, put there by nothing but having been written.

**And the negative is the strong one.** Today that same page is a string. **Write the element, and the model gains a word; that is the whole demonstration**, and it fails before this sprint and passes after.

## Out of scope, named so it is not drifted into

- **One copy of the framework.** The compiler and app resolve `@dna-platform/lib` to `dist` while the demo and both suites alias `src`, so `instanceof` is false across them. **Offered beside this sprint and not taken.** *It is the ground [R49](#r49--the-base-stops-deciding-for-its-subclasses) stands on and it has already cost three wrong probes.*
- **The card catalogues cards** — [the canonical ruling](16-validation.md#the-canonical-ruled--a-card-catalogues-cards). Offered and not taken.
- **The demo's chapter on the validating** — owed from [Validation](16-validation.md), and still owed.
- **Making every accessor reach through the parse.** *"Not everything needs to be checked through the parse structure."*

## Names owed — none taken

- **Custom Elements**, as the sprint's name — Doug's own phrase.
- **Whatever `accepts` becomes** when it answers a class rather than a string.
- **`$SpecialWord`** is an example in Doug's sentence, not a name for anything shipped.

---

# The plan — guardrails, not choreography

*Written 2026-08-18. **Status: `implementation-ready`.** [WHAT, not HOW](../../../../.claude/library/our-skillset/29-ce-plan.md). **Units continue from [Validation](16-validation.md), which reached U42; decisions from D25.***

## THE HARD PART, named by Doug and put first because everything else is easy once it works

> *"You need to solve the problem of breaking the thing up where, **when you make the new one, you find a way to give it the actual literal contents of the block** right? **That is the hard part**."*

**A level finds its own boundaries in prose and then makes the parts.** Today it makes each part from *a piece of flattened text*, which is exactly where a written chemical is lost. **What it must do instead is hand the new part the literal contents of the block across that span** — the strings and the chemicals, in written order.

***That is the sprint.*** The deletions after it are consequences.

## AND `divide`/`compose` GOES WITH IT

> *Doug: "**Why do we need divide at all? This isn't mathematics. No one said we needed to generalize this to writing. Each parse is different**."*

**[`parse()`](../../package/src/writing/Writing.tsx) is a generic function in the base taking `accepts`, `divide` and `compose` as callbacks** — one shape imposed on every level. But **a section splits by markdown blocks, a sentence by a token pattern, a word by graphemes.** Those are three different parses wearing one interface, and **the interface is what forced the base to reason about levels it is not allowed to import** — which is where `level`, `levels` and the ordinal comparison came from.

***So each level writes its own `parts()`.*** *If a common operation falls out of writing all four, it is extracted **then**, from three real cases — not designed up front, which is the mistake being undone.*

## The size, measured before anything was divided

| | |
|---|---|
| **$Chemistry** | **two methods** — `asElement` and `groupInline` — plus the block's `view()` and the block's type |
| **the framework** | **ten files**; the generic parse is ~60 lines inside a 195-line one |
| **the scaffolding to delete** | **7 `level` getters**, one `levels` array, `accepts`, `divide`, `compose`, the ordinal comparison |
| **the bag** | **7 use sites in `src`, 5 outside it** |

***One session. Not divided.*** *[A division whose parts are smaller than their briefs is one session](../../../../.claude/library/our-skillset/29-ce-plan.md).*

## The decisions

**D26 — Each level writes its own `parts()`.** No generic parse, no `divide`, no `compose`, no `accepts`. ***Chosen over three earlier drafts of this same requirement***, each of which kept the decision in the base: `instanceof` replacing the level strings, then `accepts` answering classes, then one question asked per level. **All three generalized what Doug says is not general.**

**D27 — A part is made from the LITERAL CONTENTS of its span.** Strings and chemicals, in written order. *This is [the hard part](#the-hard-part-named-by-doug-and-put-first-because-everything-else-is-easy-once-it-works) and it is the one thing every level must get right.*

**D28 — A chemical is ATOMIC and rides down.** It sits inside whichever part its position falls in, and is met again by that part's own parse. *Chosen over lifting it to the level being composed, which would split the prose around it — **Doug's example keeps one sentence**.*

**D29 — Composing still goes through the container.** `$(Sentence)`, `$(Paragraph)`, `$(Word)`. ***Non-negotiable***: it is the half of the principle that already works, and a rewrite that hardcodes a class breaks the thing it was written to serve.

**D30 — Bottom-up, each step green before the next.** *[U45](#u45) is unbuildable while prose is still disguised as a chemical — the parse cannot tell them apart, which is the whole defect.*

**D31 — The vocabulary is fixed in the lines being rewritten.** `run`, `ceiling` and `token` live inside the code this sprint replaces. *Chosen over a separate sweep, because [the last one inverted meaning in 36 places](16-validation.md#the-sweep-2026-08-17).*

**D33 — `level` is a SMELL, not a mechanism.** *Doug: "**Why do we need level? Right now things are strongly typed.** We can have it, but it can be done with `instanceof` for now. **But it is a code smell that we even need it.**"*

**So it goes** — and if anything still has to ask what grade a thing is, it asks with `instanceof` and **that question is recorded as debt rather than mistaken for the design.** *A type that already says what it is should not be answering a second time in a string; every place that still needs to ask is a place the types are not carrying their weight yet.*

**D32 — A chemical nothing accepts is NAMED at the floor.** *Today an unrecognised level is silently turned into prose. **Silence is the defect's whole character**, so the replacement says so.*

## The units — a register, compacted at compounding

*The sprint ran them. What survives is the identifier and the anchor, because the record above cites both.*

| unit | what it was | state |
|---|---|---|
| <a id="u43"></a>**U43** | $Chemistry stops wrapping prose; $Block takes raw strings, numbers and inline chemicals | **done** |
| <a id="u44"></a>**U44** | *the hard part* — a part is given the literal contents of its span; reached into `$` as the plan allowed | **done**, via [the args form](#the-args-form) |
| <a id="u45"></a>**U45** | every level reads its own contents; the generic parse and its scaffolding deleted | **done** |
| <a id="u47"></a>**U47** | the `elements` bag deleted; every caller asks the model | **done** |
| <a id="u48"></a>**U48** | the words — `run`, `ceiling`, `token`, `tree` at zero | **done** |
| <a id="u49"></a>**U49** | the demonstration | **DESIGN OWED** — which element, in which book, is Doug’s |

*U46 was folded into U45 when the generic parse and the level scaffolding turned out to be one deletion. **The identifier is retired rather than reused.***

## Risks · Self-check · The order — *spent, stubbed at compounding*

**Risks stood here.** One fired and is in the record with what it cost — [two copies of the framework](../solutions/05-the-suite-that-passed-against-a-stale-build.md), which produced four wrong measurements. The rest did not.

**A self-check stood here**, and it passed before work started; every requirement has a home in [the register](#the-units--a-register-compacted-at-compounding).

**An order stood here.** The sprint ran it: U43 → U44 → U45 → U47 → U48, with U49 owed.

*A scenario that survived is a promise, and a promise is read where it runs.*

# BUILT — a custom element survives the parse, 2026-08-18

*U43, U44 and U45 built, reverted whole on Doug's instruction, and rebuilt on a foundation that supports them. **Every number below is from a fresh run.***

## THE REVERT, and what I misread

***Doug: "WTF!!! Revert… You deleted $Block?!… Fuck Cathy. I want you to fix this by reverting. Do not try to reimplement."***

**I had not deleted `$Block`** — I removed the `string` and `number` kinds from `$Content` and left `block`. **What I actually got wrong is worse and it is the thing to keep:** told *"get rid of `$String` and `$Number` — we just need `$Block`"*, I read it as **licence to leave prose raw everywhere**, including in what a bond constructor receives. It is not. ***One wrapper, not none.***

> *"Get rid of $string and $number is not 'Get rid of $Block and $string and $number' which is very very very very bad intelligence."*

**And the revert cost a second lesson.** I rebuilt **chemistry's** `dist` afterwards and **not lib's**, so the emitted books ran the pre-revert parse against restored chemistry and the validator crashed with a `$Author` as the thrown value. ***[The two-copies hazard](16-validation.md#and-two-copies-of-the-framework-are-loaded-at-once) caught me twice in one day***, and it is still out of scope.

## What stands now

### R47 — `$Block` takes raw strings, numbers and inline chemicals

*Doug: "In $Chemistry, have `$Block` work with raw string, numbers and inline chemicals. In the framework, consume that, it will be easier to build custom blocks."*

**The two content kinds are gone and `asElement` with them.** `$Block` holds `(string | number | $Chemical)[]` in written order. ***The wrapping was what made prose and a written element indistinguishable***, and everything downstream had to guess which was which.

**Four promises asserted the old wrapping** — `new $Html$('string')`, `<string value="hi"/>`, a block exposing its members as `$Html` nodes — and each was rewritten with its reason in the file.

### <a id="the-args-form"></a>R53 — `$(<X prop="y"/>, ...written)` hands a bond constructor what it composes

*Doug: "We need to have the `$` second argument if possible. Maybe passing arguments will help us with the hard part of this sprint… `$(<X prop='whatever'/>, ...args)` better work too."*

***This is the hard part dissolved rather than worked around.*** A composition must be given the literal contents of its span, and React fails a chemical as a child — `Children.toArray` throws on any object that is not an element. Lifting one back through an element **re-runs its bond constructor with nothing and empties it**: the class survives and the writing does not.

**So the arguments never become children.** They travel as a symbol mark on the element's props, and the bond takes them in place of children.

**Ten promises, and the design is in them:**

| | |
|---|---|
| `$(<Held />, 'just prose')` | the block holds `['just prose']` |
| `$(<Held tag="cover" />, 'prose')` | **the prop is kept AND the prose composed** |
| `$(<Held />, 'Blah blah ', word, ' blah')` | 3 elements, **the word itself** at index 1, still carrying what was written in it |
| `$(<Held />, block)` | **a `$Block` goes through WHOLE**, same object |
| both forms | ***equivalent — the raw form is sugar for the block form*** |
| `$(<Held tag="plain">children</Held>)` | unchanged; **the JSX path is untouched** |

**THE SECOND POSITION USED TO MEAN PARENT**, and it had **three** callers rather than the two I measured: `groupInline`, `$Document.declaration()`, and the document's own promises. *All three **adopt after building** now, which is what every composed part already did.*

***A symbol prop does not survive `React.cloneElement`*** — it copies props with `for...in`, which does not enumerate symbols, so the mark was silently dropped and the args reached nothing. It rides on a spread of the element instead.

### R48/R49 — every level reads its own contents

*Doug: "You may have to rewrite the parsing logic rather than edit or patch it… Why do we need divide at all? This isn't mathematics. Each parse is different."*

**All four levels now do their own, and the rule is two lines with no ordering anywhere:**

```
a string    →  apply MY boundary rule TO THAT RUN ALONE; accumulate;
               a piece that ENDS at a boundary closes the part
an element  →  is it one of my parts?
                 yes  →  close, it stands where it was written
                 no   →  it rides down inside the piece it sits in
```

***The element's own text is never read for boundaries***, so [atomicity falls out](#r48--the-parse-places-a-written-element-at-its-own-level) rather than being enforced. And the part is built with [the args form](#the-args-form) — `$(<Sentence />, ...held)` — so it is handed the literal run.

**And Doug's alternative framing was right and is subsumed.** *"Is it a sentence parser that knows that if it ends at a new word, it is right incomplete, and if on the right of the word it is left incomplete, the two can go together?"* That is the streaming-lexer idea, and it needs each divider to answer a second question and then a merge. **Accumulating until a boundary has no state to carry and no merge**, and gives the same answer.

### R54 — NOTHING IS THROWN OUT, and the separator goes to the left sentence

*Doug: "Nothing should be thrown out. It is a parse. Let it go to the left sentence and let it be picked up in the use of the period at the letter level."*

***Measured before the ruling, and it is why the ruling matters:***

```
"One. Two."   →  "One." + "Two."   reassembled: "One.Two."
"One.  Two."  →  "One." + "Two."   reassembled: "One.Two."
```

**Two different pieces of writing, one model.** The space between sentences was captured leading and then **trimmed away**. *That is the same failure as a dissolved custom element, in a smaller costume.*

**Now a sentence runs to its stop AND the whitespace that follows it**, and the writing is recoverable: `p.parts().map(s => s.copy).join('')` gives back exactly what was written, for every case tested.

**And it comes up at the letter level, as Doug said.** The stop and the space that follows are **one mentioned mark** whose letters are `.` and ` ` — *the same shape as the space between two words, which is also its own word-grade part.* **Promised: `role` is `mention`, so `words` gives two where `parts` gives three.**

### R55 — a written element may hold another written element

*Doug: "This needs to be done well and it needs to handle nested elements."*

**Seven promises: a custom word holding a custom word, a custom paragraph holding a custom word, a section holding a paragraph holding a word, one written among prose inside another written among prose, and the writing recoverable through all of it.**

***And the nesting rule needed no ranking of grades.*** A word's parts are letters; **a letter holds nothing**, so an element written into a word has nowhere lower to ride and **stands there**. That is the floor of the descent, and it is why a word written into a *section* rides down to the sentence that accepts it while a word written into a *word* stands.

## Four findings the change surfaced, none of them caused by it

**1 — A TAGLINE WAS COUNTING WHAT DOES NOT READ.** A cover's author and subject are parenthetical; once they survived, the summary had a second "sentence" made only of them, and the tagline dutifully added an ellipsis to a summary with nothing more to say. **A tagline counts what reads.**

**2 — VALIDITY ASKED WHAT A PARAGRAPH READS, NOT WHAT IS WRITTEN IN IT.** `copy` skips parenthetical parts, so a paragraph holding only an author read as nothing and was called empty — **0/7 books stood.** The rule now asks what it holds. *`a paragraph has something written in it, and nothing is written in this one`.*

**3 — A PROMISE WAS GREEN BY COINCIDENCE.** The parallel text's two sides have **titles differing by one word**, and the written side's `<Link>` was **dissolving into two plain words**, cancelling it exactly. The link survives now, so the accident showed. *It compares the bodies, because the titles deliberately label the sides.*

**4 — THE PARSE RUNS IN THE DRAW PATH, WITH NO CACHE.** *Doug: "I hope the only reason parse is happening is in a validation layer and not natively in the app."* **It is not.** [`$Book.view()`](../../package/src/book/Book.tsx) calls `parts()`, and the application's reader-or-catalogue test calls `book.chapters`, which is `parts()`. **Nothing memoises**, so drawing a page re-derives every paragraph, sentence, word and letter, repeatedly. ***A separate problem from this one, recorded rather than touched.***

## Verified — every gate, with its scope, run fresh

| gate | result |
|---|---|
| chemistry suite | **684/684**, 62 files — up from 674, **ten new for the args form** |
| chemistry `tsc` | **0** |
| framework suite | **280/280**, 26 files — up from 257, **23 new across parsing and nesting** |
| framework `tsc` | **0** |
| demo typecheck | **78 files**, 1/1 baselined, 0 unexpected |
| demo `verify-book` · `verify-demo` | **61** · **25** |
| compiler `tsc` · suite | **0** · **43** |
| `verify-walk` · `verify-build` | **29** · **37** |
| **`CHECK`** | **7/7 books stand · 158 paragraphs · 233 sentences · 1,293 words · 5,881 letters** |
| `.public/app` typecheck | **38 files, 26 dot-prefixed**, 0 unexpected |
| `verify-library` | **29/29, 0 console errors** |
| **the built Pages artifact** | **4 deep links drawn**, seen on screen |

***And the numbers that say it best:*** validity reached **143 paragraphs, 1,278 words, 5,727 letters** before this and reaches **158, 1,293, 5,881** now. **That difference is the writing the model had been throwing away.**

## Not done, and named rather than omitted

- **The generic `parse()`, `divide`, `compose`, `accepts` and the `level` getters still stand.** All four levels read their own contents, so the scaffolding is dead weight — but it is still there and [R49](#r49--the-base-stops-deciding-for-its-subclasses) is not finished until it is gone.
- **`elements` is still on the writing surface** — [R50](#r50--elements-is-deleted), untouched.
- **The words** — `run`, `lexer`, `token`, `ceiling`, `tree` — [R52](#r52--the-words-are-the-domains), untouched.
- **Section-level whitespace.** [R54](#r54--nothing-is-thrown-out-and-the-separator-goes-to-the-left-sentence) is honoured between sentences; **the blank line between paragraphs is still trimmed** by the markdown divider. *The ruling is general and this is the half not yet done.*
- **[U49](#u49) the demonstration** — design owed; which element in which book is Doug's.
- **The demo's chapter on the validating**, owed from [Validation](16-validation.md).

---

# THE CLEANUP — the scaffolding is gone, 2026-08-18

*R49's second half, R50, R52, and the end result promised rather than described.*

## What was deleted

| | |
|---|---|
| the generic `parse()` | one walk taking `accepts`, `divide`, `compose` as callbacks — **gone**; every level was already overriding `parts()` |
| `divide` · `compose` | **gone** where dead; `$Section` keeps its own two, which are its markdown rule and its figure fork rather than a contract |
| `accepts` · `level` · `levels` · the `Level` type | **gone**, all of it — *the type had escaped into no consumer, measured at zero* |
| `elements` | **gone from the writing surface**; `$Cover.author` and `.subject` ask the cover's own **words**, `$Footer.footnotes` its own **sentences**, `$Book`'s canonical count the cover's words |
| `run` · `ceiling` · `token` · `tree` | **zero**, counted — *`lexer` survives twice, and both are `marked`'s own export* |

***`$Writing` now decides nothing for a subclass.*** What is left on it is the answer for a **leaf** — a letter, a subtitle, a tagline — which composes nothing and always did.

## THE END RESULT, promised

*Doug: **"The end result from this sprint should be a highly pluggable system that can integrate completely new subclasses of content into the system. It also needs to reject when things don't parse correctly, but it should also parse in a fairly permissive way given the right things."*** **Thirteen promises, green on the first run.**

- **PLUGGABLE.** A completely new subclass at **every grade** — word, sentence, paragraph, section — is a part of the model when it is written. **A new kind may hold another new kind, to any depth.** And it is *the object that was written*, not one built from its text.
- ***The framework names none of them.*** Nothing is registered, declared or told to it. Each stands because it **is** a word, a sentence, a paragraph, a section — which is the whole of why this is extensible rather than configurable.
- **REJECTING.** A word carrying whitespace does not stand and says so; a letter is one grapheme. ***And nothing is silently dropped*** — an invalid part is still a part, so the writing stays recoverable and the failure is **visible rather than absent**.
- **PERMISSIVE.** Prose alone parses exactly as it always did. **A chemical the framework has never heard of, and which is not writing at all, is carried rather than turned away** — a parse that fails what it does not recognise cannot be extended.

## Two things measured and left undone

**Section-level whitespace.** [R54](#r54--nothing-is-thrown-out-and-the-separator-goes-to-the-left-sentence) is honoured between sentences and **not between paragraphs**. Attaching the blank line to the paragraph it ends was **tried and cascades**: `marked` already folds a trailing newline into a heading's and a fence's own `raw`, so appending its space token double-counts and **three promises go red** — a heading stops being a title, a fence stops choosing its figure, the flat reading loses a level. *It wants the divider rewritten off `marked`'s positions rather than its trimmed text. The reason is in the file where the decision is.*

**A driver stalled on a stale server**, not on the code. Two dev servers had outlived the modules they were serving, and the demo's drivers reported **49 and 23 checkpoints** against them. *Restarted at the same commit: 61 and 25.* **[Already filed on this branch](../solutions/14-the-green-that-exercised-nothing.md) as a false red, and it caught this session anyway.**

---

# Where things stand

*One state, rewritten 2026-08-18 at the session boundary — the earlier one is deleted rather than layered under this. Everything above is the record; this is the present.*

## → NEXT: **[`/ce-brainstorm`](../../../../.claude/library/our-skillset/28-ce-brainstorm.md), opening a new chapter in this book**

**Custom Elements is closed, compounded and handed off.** Nothing about it is outstanding except the items named under [Owed](#owed-and-named-rather-than-omitted). **The next session opens a new sprint chapter and collects requirements into it.**

***What this session expected the subject to be, marked as an expectation rather than a brief.*** Doug's words at this session's open were ***"get ready to continue building a solid v1 of the compiler."*** **What "solid v1" contains is his to set**, and [the candidates are gathered below](#the-candidates-for-a-solid-v1--and-none-of-them-is-chosen) with what each is worth, so the brainstorm has something to put in front of him. *It is a list for him to cut, never a plan to execute.*

## THE STATE — verified against the working copy this session, not recalled

**Every number below was re-run in this session.** *The record is the claim; this is the check, and the two agree.*

| gate | run fresh | agrees with the record |
|---|---|---|
| the compiler, one command | READ **9 folders · 21 files · 13 references · 0 complaints** · RESOLVE **7 books · 0 invalid** · EMIT **21 carried · 9 generated · 7 cards** · CHECK **7/7** | yes |
| `CHECK`, by level | **34 chapters · 67 sections · 158 paragraphs · 233 sentences · 1,293 words · 5,881 letters** | yes |
| compiler `tsc` · suite | **0** · **43** in 4 files | yes |
| `verify-walk` · `verify-build` | **29** · **37**, 0 failed each | yes |
| framework suite · `tsc` | **293/293**, 27 files · **0** | yes |
| demo typecheck | **78 files**, 1/1 baselined [`$LibraryCard·$IndexCard<$Referent>`], 0 unexpected | yes |
| chemistry suite · `tsc` | **684/684**, 62 files · **0** | yes |
| `.public/app` typecheck | **38 files, 26 dot-prefixed**, 0/0 baselined, 0 unexpected | yes |

***NOT re-run this session, and named rather than implied:*** `verify-library`, the demo's `verify-book` and `verify-demo`, and the built Pages artifact. **All four need a server**, and [a driver run against a server you did not just start is a false red](../solutions/14-the-green-that-exercised-nothing.md) — *which cost the last session, after being filed.* **Their last honest numbers are 29/29, 61 and 25**, from the sprint's close.

**The link gate over this branch library: 1,633 internal links in 64 files, with anchors indexed across BOTH libraries — 0 broken paths and 0 dead anchors introduced by this session's writing.** *Pre-existing and NOT this session's: **14 dead anchors and 4 path-shaped strings sitting in prose**, every one of them in `projection/`. About half are false positives the checker cannot model — `#3.2` inside a prose example, `#acceptance-examples-1` for a duplicated heading — and **the rest point at headings that were retitled when the older chapters were compacted.** **A real finding, unrepaired, and the first thing a tending pass should take.*** ***And the scope matters:*** *indexing only the branch reported 27, because a cross-library anchor it could not see counts as dead. **The number changed with the scope, which is this branch's own lesson arriving inside its own gate.**

## THE MACHINE, as it actually stands

**The compiler is four phases in one command** — reading, resolving, emitting, validating — and it turns 21 authored files into 30. **[`index.ts`](../../build/index.ts) wires them; [`library.ts`](../../build/library.ts) is the seam, and it is a TYPE rather than a file on disk.**

**Emitting runs twice on purpose**: cards are read off *living books*, so the books must be built before the catalogue can be written, and the covers cannot carry their cards until the catalogue exists to import them from. **Validating runs in its own process**, because the process that wrote the files holds the pass-one modules in its cache and would judge writing that is no longer on disk.

**The application draws every one of them** — locally at `5299`, and as a built Pages artifact whose deep links were proven against a Pages-style server. ***The deploy stays off by ruling; the teaser stands on the open web.***

## The candidates for a "solid v1" — and none of them is chosen

*Gathered from the record, each with why it is here. **Doug cuts this list; the brainstorm does not.***

1. **ONE COPY OF THE FRAMEWORK.** The compiler and the application resolve `@dna-platform/lib` to `dist`; the demonstration and both suites alias `src`. **Two class objects for every class, so `instanceof` is false across the line, silently.** *[Named out of scope twice while costing four wrong measurements in two days](../solutions/05-the-suite-that-passed-against-a-stale-build.md) — and since Custom Elements **the parse itself leans on `instanceof` at every level**.* ***The cheapest unpaid debt on this branch, and the only candidate that makes every other measurement trustworthy.***
2. **THE PARSE RUNS IN THE DRAW PATH WITH NO CACHE.** `$Book.view()` calls `parts()`, and the reader-or-catalogue test calls `book.chapters`, which is `parts()`. **Nothing memoises**, so drawing a page re-derives every paragraph, sentence, word and letter. *Doug asked about exactly this — "I hope the only reason parse is happening is in a validation layer and not natively in the app" — and it is not.* **Recorded twice, touched neither time.**
3. **[R34](15-the-build.md#r34--an-entry-is-placed-by-a-declaration-not-only-by-position) — an entry placed by a declaration, not only by position.** The one owed row in the demo's own phase figure. *Offered at Validation and declined; still the next obvious unit.*
4. **The other half of [R25](15-the-build.md#r25--the-rules-are-enforced-in-the-code-not-remembered-by-the-compiler)** — the ordering and canonical-default rules moving into the framework. *Offered and declined once.*
5. **Section-level whitespace** — [R54](#r54--nothing-is-thrown-out-and-the-separator-goes-to-the-left-sentence) is honoured between sentences and not between paragraphs. **Measured to cascade**: `marked` folds a trailing newline into a heading's and a fence's own `raw`, so appending its space token double-counts and three promises go red. *It wants the divider rewritten off `marked`'s positions rather than its trimmed text.*
6. **The demo's chapter on the validating** — [U42](16-validation.md#u42), owed since Validation. *A figure that computes validity from live books, so a rule that changed and a figure that did not is a visible contradiction.*
7. **[U49](#u49) the demonstration for Custom Elements** — design owed; **which element in which book is Doug's.**
8. **[G — the joining](15-the-build.md#g--the-joining--not-yet), and publication.** The deploy is off by ruling.
9. **The real library instead of the fixture.** *Doug: "I want test content until the compiler is working and tested."* **That condition is closer to met than it has ever been**, which is why this is on the list rather than assumed.

## Blockers

- **Nothing blocks a brainstorm.** Every gate is green, the working copy is the truth, and the record agrees with it.
- **The identity sync is pending and wants Doug's word.** [See below](#the-branch-library-lives-on-the-identity-branch-of-the-same-name).

## Rulings carried forward — Doug's words, verbatim

- ***"In an OO framework being able to create custom elements is important… We invented a way for `$` to be a container. You better be using `$(Sentence)` and `$(Paragraph)` when working with all of these things because one should be able to replace the defaults."*** **Discharged by this sprint**, and kept here because it governs anything built on the parse.
- ***"The end result from this sprint should be a highly pluggable system that can integrate completely new subclasses of content into the system. It also needs to reject when things don't parse correctly, but it should also parse in a fairly permissive way given the right things."*** **Thirteen promises, green.**
- ***"Everything is going to be moved around, audited, redesigned. This is a big project. We need to get something stood up. But it is so so so far away from what I need it to be."*** ***This is the standing constraint on the whole branch.*** **Nothing here is settled and none of it should be defended** — what survives a redesign is the measurements and the defects, never an arrangement of files or a name.
- ***"I reject failure. Validation. Invalid. That's the semantics."*** A vocabulary ruling, and vocabulary rulings on this team are load-bearing.
- ***"We should be unit testing the compiler. Queenie should be involved in that."*** **Done — 43 promises in 4 files**, with the two check scripts standing beside them as drivers.
- ***"One session at a time."*** *Two ran in parallel once, and it cost a silently overwritten cover entry.*

## Wrong turns already taken — do not repeat

- **Trusting a driver against a server you did not just start.** Two dev servers outlived their modules and reported 49 and 23 checkpoints; restarted at the same commit, 61 and 25. ***Filed, and it happened anyway.***
- **Measuring across two realms.** A promise importing the framework from `src` may not measure a program importing it from `dist`. *Three probes were wrong this way in one day.*
- **Rebuilding one package's `dist` and not the other's.** **Both, in dependency order: chemistry, then lib, then the consumers.**
- **A mechanical vocabulary sweep.** It [inverted meaning in 36 places](../solutions/22-the-sentences-that-said-the-opposite.md). *A word is replaced with its sense checked, never with a pattern.*
- **Keeping the decision in the base.** [R49](#r49--the-base-stops-deciding-for-its-subclasses) was drafted three times and every draft did it. *Each level writes its own `parts()`; nothing generic decides for it.*
- **Reading "get rid of `$String` and `$Number`" as licence to leave prose raw everywhere.** ***One wrapper, not none.*** *This cost a whole revert.*
- **Adding files by pattern.** A glob matches no dot-prefixed name, and every cover and synopsis here begins with a dot. *This bit four times.*

## Compounded — five lessons, one run each

**Three distributed at this session boundary**, after the two the sprint closed with:

1. ***[The sentences that said the opposite](../solutions/22-the-sentences-that-said-the-opposite.md)*** — **a new chapter.** The vocabulary sweep read as complete and inverted 36 sentences, because `X fails Y` and `X fails Y` put the subject on opposite sides. **Its specification also went into [On Authorship](../../../../.claude/library/bookkeeping/13-on-authorship.md), at the librarian's rename mandate** — which had claimed a vocabulary rename never changes what a chapter says, and this one did. *The keyword vocabulary gained `mechanical-edit`.*
2. ***[The checkpoint that compared a number to itself](../solutions/18-the-checkpoint-that-compared-a-number-to-itself.md)*** — **edited, a second appearance.** That chapter's own rule was *name two walks*; this promise named two and was still green by coincidence, because a deliberate one-word difference and an accidental one cancelled. ***The tell added: a promise that goes RED when you FIX something was measuring the defect.***
3. ***[The green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md)*** — **edited, a fifth appearance.** The stale-server rule recurred *after being filed*, and the interesting part is that **its own fix did not hold** — a rule a person must remember is not a fix. **The structural options are named there, and neither is built.**

*The two the sprint closed with: [Waking](../../../../.claude/library/teamspeak/04-waking.md) gained a layer for where the library lives, and [the stale-build chapter](../solutions/05-the-suite-that-passed-against-a-stale-build.md) gained its second consequence — two copies live at once.*

**Cover updated in the same act for every one, with [the tool](../../../../.claude/library/bookkeeping/03-on-covers--toc.ts). No link broke.**

## What to read next session — three things, shaped for a brainstorm

*[Named, not claimed sufficient](../../../../.claude/library/our-skillset/32-ce-handoff.md#9-sufficient-is-a-claim-and-it-was-wrong) — a short list is a starting point rather than a boundary.*

1. **This section, and then [the candidates](#the-candidates-for-a-solid-v1--and-none-of-them-is-chosen).** Load-bearing because the brainstorm's whole first move is putting that list in front of Doug and taking his cut.
2. **[`build/library.ts`](../../build/library.ts) and [`build/index.ts`](../../build/index.ts).** Load-bearing because between them they say what the compiler *is*: the seam every phase reads, and the four phases in the order that is forced. **About 210 lines, and they are the whole shape.**
3. **[The suite that passed against a stale build](../solutions/05-the-suite-that-passed-against-a-stale-build.md).** Load-bearing because candidate 1 is its unpaid half, and because any measurement taken next session is wrong unless it stays inside one realm.

*If the cut lands on the parse or the model rather than the machine, add [this sprint's own account of what a level is](#the-design-principle-and-it-is-why-this-is-a-defect-rather-than-a-preference) — but read it after his answer, not before.*

## How to see it

```bash
cd library/.public/build && npm run compile     # the compiler: four phases, no screen
cd library/.public/app  && npx vite --port 5299 # the public library
cd library/.public/package && npx vite app      # the demonstration
```

***Start the server yourself before driving it.*** A driver run against one you did not start is a false red, and it produced one last session.

## THE BRANCH LIBRARY LIVES ON THE IDENTITY BRANCH OF THE SAME NAME

**The identity is its own repository**, `github.com/DNA-Platform/identity`, travelling by branch: `main` holds the template, `dna-platform` the team's identity, and **each project has a branch named for it**. This branch library belongs on **`inexplicable-phenomena`**.

***The project's `.gitignore` ignores `.claude/`, `CLAUDE.md` and `**/.lib/` ON PURPOSE***, so the identity stays private and the project stays clean. **The `.gitignore` of one repository is never the whole story about a library that spans two.**

***And here is the pending sync, measured this session rather than recalled.*** `origin/inexplicable-phenomena` carries Projection only **through [The Build](15-the-build.md)** — its head is that sprint's handoff commit, `64fe001`. **[Validation](16-validation.md), this chapter, and everything compounded at this boundary are not on it.** *The code sits committed locally in the project repo at `2871f09` and `0a26c14`, unpushed on Doug's instruction.*

***Both pushes want Doug's word, and neither has been made.*** [The commit tool](../../../../.claude/library/..environmentalism/06-on-sync--commit.sh) is what closes it, and it routes each kind of change to its branch — never raw git.

## Owed, and named rather than omitted

- **The demo's chapter on the validating** — [U42](16-validation.md#u42), from Validation.
- **[U49](#u49) the demonstration** — design owed; which element in which book is Doug's.
- **Section-level whitespace** — measured to cascade, with the reason in the file.
- **The parse runs in the draw path with no cache.** *A separate problem, recorded twice now and touched neither time.*
- **27 dead anchors in `projection/`**, found by this session's link gate and not repaired here.
