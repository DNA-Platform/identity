# The Bind

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force, and the register to check before a tidy crosses one.*

---

*Opened 2026-08-29 out of [The Block](28-the-block.md), whose ladder stands and whose levels say almost nothing about themselves. **Status: `implementation-ready` for Phase One; every unit is ruled and none is design owed.** Doug at the keyboard throughout, ruling as it was written.*

***The title is a proxy standing for Doug's pick.*** *It is taken from his own sentence — **"we are really just validating that the bind can work"** — because the bind turns out to be the one seam both halves of this sprint run through. [Nothing here is a name I invented](../../../../.claude/library/..teamsmanship/05-territory.md).*

**Identifiers.** Requirements **R274–R342**, actors **A16–A18**, acceptance examples **AE12–AE18**, risks **K36–K42**, decisions **D114–D124**, units **U211–U221**, scenarios **S1–S47**. *[None is ever renumbered](../../../../.claude/library/our-skillset/29-ce-plan.md#the-unit-identifier-specification); a deletion leaves a gap.*

**Where the code lands.** [`library/.public/package/src`](../../package/src/) — v2 — with v1 standing at [`.archive/`](../../package/.archive/) and still shipping.

***HOW v1 IS USED HERE, ruled 2026-08-29.*** **Doug: *"Don't worry too much about past definitions of things. We use v1 for inspiration mostly."*** *So [`.archive/`](../../package/.archive/) and [the settled account](../the-semantics-of-books/15-the-levels-of-writing.md) are read for **evidence** — what the code measurably does, and what it cost — and never as a **specification**.* ***Where this chapter cites v1 it is citing a measurement or an inspiration; Doug's sentences are the spec.***

---

# <a id="what-this-sprint-is"></a>What this sprint is

***A level is what it is. A type is what knows it.*** **[The Block](28-the-block.md) gave every level a type and left the type with nothing to say** — five of the seven ask only whether a type is present, which the bond has just guaranteed.

**This sprint gives the type its job, in two phases and in Doug's order.** *He: **"First is the types, then is the parser."***

- **Phase One — the type validates the conditions under which the level's computations succeed, and never performs them.** *That is the whole of a type's participation.* ***And the canonical turns out to be where new kinds come from.***
- **Phase Two — the parse places a written part at its own level.** *A word written among a paragraph's prose reaches the sentence that holds it, through a stand-in that survives division.*

---

# <a id="the-rulings"></a>The rulings, verbatim

*Every one of these turned the design.*

> ***"NEVER restore WRITEING&lt;T&gt; - put a HUGE ban. No no no no. It would allow a letter of section to be created. We curate those carefully. We do not give allowance to all of them. NO. The ladder is a convention. Okay?"***

> ***"We need to know that the information on letter is present, so maybe the type should be in control of telling you everything about the letter, and the letter assigns it."***

> ***"What if something like this goes on TypeOfLetter, but in a way that is assigned to a $LetterSpecification, and the data in the specification gets assigned. Then the letter can have an easy time specifying it. Maybe specifically can return a type of specification."***

> ***"Then the type validates everything, uses check and throws if its wrong, hands back the specification, and the letter uses the specification to set its properties. That sounds like a reasonable participation right?"***

> ***"I think I am being dumb. We already validate enough on letter to know that that data can be computed, so we are really just validating that the bind can work. So make sure we handle that."***

> ***"A section needs a title, can be a type of paragraph because it has its own double space section, and we can define that with a type. And then a book has a cover which is a wrapper around the name and other things."***

> *"We want to be able to write `<Section><Title><Paragraph>text text text <MyWord /> text text text` — and **the parser knows that that word is in a sentence.** We achieved that on v1, I hope, and we need to get back to that."*

> *"Maybe you can come up with some **special token that helps with the parse with a quoted version of a token at the right level so we know it parses right, and then you put it back later on**? That would need to be **very well tested**."*

> ***"Sorry ignore a lot of what I said. When computing information, as long as the facade (and the letter is like a facade for all letters in the parts after binding) can provably compute what it needs from the instance, the type has done its job."***

> ***"What is a canonical word? What properties do we want to have for words? We need punctuation words that wrap punctuation letters. Multiple punctuations in a row will likely be punctuation words so we can capture !!!, ???, :: as single entities. We need whitespace as a type of non-canonical word along with punctuation, etc..."***

> ***"What about non-canonical sentences? Maybe anything that doesn't start with a capital letter, doesn't end with a period. Things like that."***

> ***"A title would be a non-canonical paragraph, which is fine. A non-canonical normal thing is a good candidate for a canonical other thing."***

> ***"Let's carry as enum, and then we can have types to style that in particular if we need to. We can use our inheritance infrastructure to accomplish that."***

> ***"Canonical is now a property of writing that defaults to non-canonical I think. Each of the standard types: $Letter - $File, $Chapter, $Book - they can decide what canonical is. For instance a canonical book will be one that does not catalogue a subject."***

> ***"Whatever the view is, this.parts() should print nearly the same thing because it has the same special types in it right? And when implementing writing, overriding frame might be recommended to preserve the markdown and have all the views have a common wrapper."***

> ***"There is no facade change. I am using that loosely but since there is a bind method, there is something like a facade and the parser will perform this bind."***

> ***"The type should use check and validate the conditions for the computations to succeed, not perform them."***

> ***"It has all canonical sentences and at least three sentences perhaps?"***

> ***"I don't know. Similar to sentence? Title + at least one canonical paragraph?"***

> ***"Keep build() — the level holds, bind re-runs it."***

> ***"Do you agree that if we enumerated the paragraphs in a document (the canonical ones) it should leave out the titles? They aren't paragraphs. We can enumerate the titles separately."***

> ***"If we enumerated the letters, we should get the a-zA-Z (I think we should add the digits too because 123 is a word)."***

> ***"Make it one sentence, but maybe assume a period. And if we ever do poetry, we can play fun games to make a stanza for a paragraph for a poem as a little test case!"***

> ***"Don't we want to save these things? Maybe put config as a field on the class with these so that they can be overwritten... Do things like this for all metadata like that in all writing classes. We want polymorphism."***

> ***"Imagine a phrase. A phrase might, for instance, be a word that contains what would be several words. So when you replace the word with a token so that you can parse, it needs to not be the copy because the copy will be multiple words. And then you can insert back based on the id that is in the token."***

> ***"I would do a phrase as multiple words and a canonical phrase as the extra words being whitespace only."***

> ***"Don't worry too much about past definitions of things. We use v1 for inspiration mostly."***

> ***"No, it needs to bind to the different types in different scenarios. It's the facade that carries the data."***

> ***"I deleted type of writing. $Type is type of writing. It's specifically takes writing."***

> ***"Bind should be on writing and it should be overridden to find the right type and then call specifically... letter is the thing that knows it is the canonical implementation - I named it canonicalForm. The $Type has writing. But assign that property to be something else on each type."***

> ***"Do you have consts or static members? You shouldn't. None of those are necessary in any file. Do a deep search to see if you are really done with your work."***

> ***"Bubble up the members you invented to discuss."***

> ***"NO type doesn't hold or return the writing. Have it take method which take the instance. Binding is to the concrete writing not to the type. If we were binding in any direction it would be instance holds type and we DO do that."***

> ***"The type of whatever has the type in its specification, and that type should be polymorphically related to the type being bound! This should be obvious. TypeOfStanza will extend from TypeOfParagraph."***

> ***"You pass back that the type of paragraph is a stanza in its specification. And that is what makes the type the thing whose specifically is called on the instance of writing. That is the answer."***

> ***"It would bind Paragraph but it would bind a paragraph to a Title. This is why the parser needs to be able to preserve the type of special elements in the block."***

> ***"Look at binding! It happens in the parts parser. A piece of writing with the letter type would be bound to a letter. Is that not self-evident? That logic should be in the parser. It shouldn't be using instanceof. It needs to do dynamic typing and binding. For now, all you care about is how you select the right type for chimeric writing types (don't call them that in code) from the others in the parts compiler."***

> ***"If we make a canonical paragraph for a poem as a stanza, we will have to play games where we require newlines etc... we want to be able to have the thing parsed as a normal paragraph and then put back in. It doesn't need to bind to the token. It can have its own type. But what if the stanza overrides the assignments like canonical? We then need to override paragraph. Maybe the type itself does need to hand back certain things. Otherwise, we have to create both the class and the type whenever we want to change data."***

---

# <a id="the-state"></a>The state this sprint opens on — measured, not remembered

| | |
|---|---|
| **`tsc` on `src` (v2)** | ***0 errors*** |
| **`tsc` on `.archive` (v1)** | ***0 errors*** |
| **`npm run test`** | ***45 files, 461 tests, all passing*** |

***This is a boundary report on a healthy suite, not a repair list.*** **Everything below was found by reading a green codebase.**

## <a id="proven"></a>What the types enforce — proven against a throwaway copy of `src`, typechecked and then swept

| | claim | verdict |
|---|---|---|
| **1** | a subclass may re-aim a level at an unrelated rung | ***refused*** — `$Section implements $Composition$<$Word>` raises five `TS2416`s |
| **2** | `$Section` and `$Document` are interchangeable | ***refused*** — *"Property `$Document` is missing in type `$Section`"* |
| **3** | `$Book` may stand where a `$File` is asked for | **allowed, and sound** — `$Chapter` is a `$Document`, so the narrowing never lies |
| **4** | a **new** class off `$Writing` may claim to compose anything | ***allowed*** — `$WrongRung implements $Composition$<$Letter>` compiles clean |
| **5** | the nine `$TypeOfX` classes are distinguishable | ***no*** — `$TypeOfWord`→`$TypeOfSection`, `$TypeOfSentence`→`$TypeOfParagraph`, `$TypeOfDocument`→`$TypeOfFile`, `$TypeOfBook`→`$TypeOfChapter` all assign clean |
| **6** | `specification` can be asked what it specifies | ***no*** — `specifically` is unreachable, which is why [`Writing.tsx`](../../package/src/writing/Writing.tsx) casts structurally |
| **7** | the wrong level can be *written* inside a level | ***nothing objects*** — JSX children are `ReactNode` |

***Finding 2 is the one worth pausing on.*** **What keeps `$Section` from being a `$Document` is the bond constructor** — the member named after the class. *That brand is load-bearing and nobody chose it: delete a level's bond and its identity dissolves into its siblings.* **It is recorded here so it is a decision from now on rather than an accident.**

***Finding 4 is the intended state, not a fault.*** **[D114](#d114) is why.**

***Finding 5 is the real hole.*** **All nine `$TypeOfX` collapse to one type for the compiler**, so every place the design leans on *which* type this is, it is leaning on runtime alone. *That is [R284](#r284)'s question.*

## <a id="read"></a>What the code does — read from the source, not run

| | |
|---|---|
| ***the check is vacuous at five of seven levels*** | **Only `$TypeOfLetter` and `$TypeOfWord` override `specifically`.** *The other five inherit [`$Type.specifically`](../../package/src/writing/Writing.tsx), which asserts `specification.length > 0` — and the level's own bond has just pushed its own type, so the assertion cannot fail.* **Sentence, paragraph, section, document and file accept anything.** |
| ***`bind()` no longer validates*** | **`$Writing.bind(writing)` sets `inside` and calls `build()`. It does not call `specify()`.** *[Commit `69b79b8`](../../package/src/utilities/Lib.tsx) built exactly that — `bind` set the instance and specified — and the current shape lost it.* **This is [R277](#r277), and it is Doug's *"make sure we handle that"* named.** |
| ***a wrongly-levelled child is dropped from the structure and kept in the prose*** | **`parts()` filters; [`html.text`](../../package/src/utilities/Html.ts) does not.** *So a word written inside a section is absent from `parts()` and present in `copy`, and nothing says a word.* |
| ***only `$Word` divides prose*** | **Every other level ignores strings entirely.** *`$Section.parts()` on `<Section>Some prose here.</Section>` finds nothing, because no element of the block is a `$Writing`.* |
| ***`interpret()` was planned and never landed*** | **`grep` for it in `src` returns nothing.** *So [R264](28-the-block.md#r264)'s separation of the write from the read does not exist, and `parts()` still constructs during a render walk — [Solutions 16](../solutions/16-the-parse-that-woke-its-own-parents.md)'s shape.* |
| ***`$Book` carries two own types*** | **`$Book.$Book` calls `super.$File`, which pushes `$TypeOfFile`; then `$Book` pushes `$TypeOfBook`.** *[S27](28-the-block.md#u210) promised exactly one and has no test.* |

## <a id="v1"></a>What v1 actually achieves — because Doug said *"we achieved that on v1, I hope"*

***He is right, and the line is [`$Paragraph.parts()`](../../package/.archive/writing/Paragraph.tsx):***

```
for (const written of this.text.$elements) {
    if (typeof written === 'object') {
        if (written instanceof $Sentence) { close(); found.push(written); continue; }
        held.push(written);                          // ← a written word joins the OPEN sentence
        continue;
    }
    for (const piece of this.stops(String(written))) {
        held.push(piece);
        if (stopped.test(piece)) close();
    }
}
```

**Two cases for an object, and that is the whole mechanism:** ***at my level → close the run and keep it as a part; below my level → push it into the run I am building, and it descends.*** *[`$Sentence.parts()`](../../package/.archive/writing/Sentence.tsx) receives it and keeps it: `if (typeof written === 'object') { stand(written); continue; }`.* **So a written word lands among the sentence's words, in written order.**

***And the stand-in idea is already half-built there.*** **[`$Paragraph.stops()`](../../package/.archive/writing/Paragraph.tsx) pulls code spans and link targets out of the prose before splitting on sentence stops, then puts them back** — which is Doug's *"put it back later on"* at string grade.

***Two things ch. 15 reports that the archive does not contain, and both matter here:***

- **There is no `level` getter anywhere in `.archive`.** *[The settled account](../the-semantics-of-books/15-the-levels-of-writing.md) states* ***"LEVEL ALONE DECIDES… `level` is a getter, so it is inherited"*** *as fact. `grep` finds none.* **[R288](#r288) is owed because of this.**
- **There is no single shared walk.** *Ch. 15 says* ***"One walk, written once, and it is a tool."*** *Each level re-implements the same two-case loop.*

***Filed as a cover/chapter gap: the settled account describes a design that was intended and not built, without saying so.*** **It is Cathy's chapter and hers to correct;** *it is recorded here because this sprint planned against it and would have inherited the error.*

## <a id="the-latent-defect"></a>And a latent defect in v1's placeholder, which earns Doug's *"very well tested"*

```
const kept = prose.replace(code,   m => ` ${holds.push(m) - 1} `)
                  .replace(target, m => ` ${holds.push(m) - 1} `);
const restore = piece => piece.replace(/ (\d+) /g, (_, i) => holds[Number(i)]);
```

***The stand-in is a bare integer between two spaces, and prose can contain one.*** **`"I was 3 years old and `x` mattered."`** *puts `` `x` `` at index `0`, and restore then reads ` 3 ` as a stand-in too — `holds[3]` is `undefined`.* ***The sentence comes back as "I was undefined years old".***

**Latent rather than firing** — *it needs a bare space-delimited number in the same string as a code span or a link* — **and it is exactly [Solutions 2](../solutions/02-the-footnote-that-wore-zero.md)'s lesson a second time:** ***counting starts at one, and an index that can be confused with content is a miss waiting to happen.*** **[D117](#d117) is the answer.**

---

# <a id="actors"></a>Actors

<a id="a16"></a>**A16** the library author, who writes a section by hand and expects to be told, in the section's own words, when it is not one · <a id="a17"></a>**A17** the framework author, who wants a level to *be* its level and its type to *know* it, with the knowing written once · <a id="a18"></a>**A18** the author of ordinary prose with a live thing in the middle of it, who expects the live thing to end up in the sentence it was written in.

---

# <a id="requirements"></a>Requirements

## <a id="phase-one"></a>Phase One — the type states the precondition, the level computes

<a id="r274"></a>**R274** — ***WITHDRAWN by Doug in the same session it was written.*** *"**Sorry ignore a lot of what I said.**"* **It said `specifically` hands back a `$LetterSpecification` and the level assigns from it.** *Replaced by [R289](#r289), which claims less and is better.* ***The identifier is kept and the requirement struck rather than edited, so the turn stays legible.***

<a id="r275"></a>**R275** — ***WITHDRAWN with [R274](#r274), by the same sentence.*** *It said the level assigns its properties from what the type handed back.*

<a id="r276"></a>**R276** — ***validation and reading are ONE act, and the act is a PRECONDITION.*** *Doug: "**We already validate enough on letter to know that that data can be computed, so we are really just validating that the bind can work.**"*

***This survived the withdrawal and is the sentence the replacement is built on.*** **There is no validate-then-compute.** *A letter that is one grapheme always has a kind; asking the kind of something that is not one grapheme is exactly the case the raise removes.* ***So the check is not a gate standing in front of the reading — it is the reading's totality, stated.***

<a id="r277"></a>**R277** — ***the bind validates.*** *Doug: "we are really just validating that the bind can work. **So make sure we handle that.**"*

**Measured: [`$Writing.bind()`](../../package/src/writing/Writing.tsx) sets `inside` and calls `build()`, and never `specify()`.** *[Commit `69b79b8`](../../package/src/writing/Writing.tsx) — "bind now validates" — put `this.specify()` inside `$Type.bind`, and the current shape dropped it.* ***So `$$(writing, $Letter)` binds without asking whether that writing can be a letter.***

<a id="r278"></a>**R278** — ***a rebind re-reads.*** **[`bind`](../../package/src/writing/Writing.tsx) already calls `build()`**, and [R290](#r290) keeps it, *so a letter bound to different writing answers with that writing's kind and case.* **[`letter.test`](../../package/src/tests/letter.test.tsx) already promises the copy moves; this extends the promise to everything the level read.**

<a id="r289"></a>**R289** — ***the type validates the conditions under which the level's computations succeed, and never performs them.*** *Doug, correcting this chapter's first wording: "**the type should use check and validate the conditions for the computations to succeed, not perform them**." + "**as long as ... [the level] can provably compute what it needs from the instance, the type has done its job**."*

**So `$TypeOfLetter` keeps exactly what it has — one `$check`, one grapheme — and gains nothing.** *That check is what makes `kind` and `case` total, and stating it is the whole of the type's participation.* ***The type is a gatekeeper, not a reader.***

***THE WORD "FACADE" IS NOT A DESIGN TERM HERE.*** **Doug: *"There is no facade change. I am using that loosely."*** *An earlier draft of this chapter built a change on the word and there is none;* **what is real is that `bind` exists**, and [R305](#r305) is what actually follows from it.

<a id="r290"></a>**R290** — ***RULED: the level holds what it computed, and `bind` re-runs it.*** *Doug: "**Keep `build()` — the level holds, bind re-runs it.**"*

***So nothing changes.*** **[`$Letter.build()`](../../package/src/writing/Letter.tsx) stays exactly as it is**, called from the bond and from [`bind`](../../package/src/writing/Writing.tsx). *A draft of this chapter deleted it and turned `kind` and `case` into properties over `copy`; that argument was carried by a framing Doug withdrew and is struck.* **The ruling is recorded rather than the change reverted silently, because the question was real and the answer is now settled.**

<a id="r291"></a>**R291** — ***the type holds no data about any instance, and structurally cannot.*** **[`cache`](../../../chemistry/package/src/abstraction/chemical.ts) registers ONE `$TypeOfLetter` under the name `Letter`**, shared by every letter that ever carries it. *That is why [R274](#r274) was the wrong shape and why Doug's correction is the right one.*

<a id="r292"></a>**R292** — ***"provably" is a promise the suite carries, not a word in a plan.*** **For each level: given writing its type accepts, every member the level offers answers — no throw, nothing undefined.** *One scenario per level, and it is the real gate.*

## <a id="the-canonical"></a>The canonical, and where kinds come from

<a id="r293"></a>**R293** — ***a non-canonical instance of a level is the material a new kind is made from.*** *Doug: "**A non-canonical normal thing is a good candidate for a canonical other thing.**"*

***This is the principle the rest of the phase is read against.*** **A kind is minted by taking a region its parent level calls non-canonical and declaring it canonical for itself.** *A space is a non-canonical letter and the canonical whitespace; a run of punctuation is a non-canonical word and the canonical punctuation; a heading is a non-canonical paragraph and the canonical title.*

***And it gives `canonical()` a job it did not have.*** **It stops being a validity flag and becomes the seam where subclassing happens** — *which is [C33](27-composition.md#c33), "I want type-based subclassing for this framework", given a mechanism.*

<a id="r294"></a>**R294** — ***so a level's condition must be LOOSER than its canonical, and that is now a reason rather than a preference.*** **If a level admitted only its canonical there would be no residue to mint from.**

***This is [R246–R247](27-composition.md#r246) with its argument supplied.*** *[The Condition Report](../the-condition-report/04-semantics.md) records a word class declaring two invariants that both its subclasses repealed; it repealed them because the canonical condition had been written as the level condition.* **Under [R293](#r293) that is not a slip — it is the one mistake the design is shaped to prevent.**

<a id="r295"></a>**R295** — ***a kind may never claim ground its parent calls canonical.*** *A punctuation kind that accepted `"hello"` would be taking canonical ground rather than residue.* **Checkable, and [U213](#u213) checks it.**

<a id="r296"></a>**R296** — ***a word has a kind, as a letter does.*** *Doug: "**We need punctuation words that wrap punctuation letters. Multiple punctuations in a row will likely be punctuation words so we can capture !!!, ???, :: as single entities. We need whitespace as a type of non-canonical word along with punctuation, etc...**"*

**Two claims in that, and they are different:** ***a word carries a kind*** — punctuation, whitespace, and the canonical one — **and *the division makes runs*, so `!!!` is one word rather than three.**

<a id="r297"></a>**R297** — ***and the word's CURRENT precondition forbids the kind Doug just asked for.*** **[`$TypeOfWord`](../../package/src/writing/Word.tsx) says *"a word is one unbroken stretch, and this one carries whitespace"*, which refuses a whitespace word outright.**

***Restated so it admits its own residue:*** **a word is one run of letters of a single class.** *`hello` is a run of said letters, `!!!` a run of punctuation, `   ` a run of whitespace — one rule, three kinds, and the canonical is the first.* ***The class that groups alphabetical with numeric needs Doug's word; a proxy stands in the code — [OPEN](#open).***

<a id="r298"></a>**R298** — ***a canonical sentence starts with a capital and ends with a stop.*** *Doug: "**Maybe anything that doesn't start with a capital letter, doesn't end with a period. Things like that.**"* **Stated over the sentence's own parts** — *its first canonical word begins with an uppercase letter, its last word is a stop* — **never over a raw string**, because the parts are what a sentence has.

<a id="r299"></a>**R299** — ***a title is a non-canonical paragraph and the canonical title.*** *Doug: "**A title would be a non-canonical paragraph, which is fine.**"* ***[R293](#r293)'s first worked example***, and it is why [R281](#r281) needs no new level: **a title is minted from paragraph residue rather than carved out of the ladder.**

***It shows at two rungs at once*** — *a title is a non-canonical paragraph, and its line is a [non-canonical sentence](#r298) because it carries no terminal stop.* **The same fact seen one grade apart, which is what [ch. 15's figure](../the-semantics-of-books/15-the-levels-of-writing.md) predicts.**

<a id="r300"></a>**R300** — ***`canonical` defaults to NON-canonical, and each of the nine decides its own.*** *Doug: "**Canonical is now a property of writing that defaults to non-canonical I think. Each of the standard types: $Letter - $File, $Chapter, $Book - they can decide what canonical is.**"*

***This is a flip.*** **[`$Writing.canonical`](../../package/src/writing/Writing.tsx) returns `true` today**, and only `$Letter` and `$Word` override it — *so sentence, paragraph, section, document, file, chapter and book are all silently canonical right now.* **After the flip they are all silently NON-canonical until each says what its canonical is**, which is the pressure that makes the table below get filled.

| class | canonical when | |
|---|---|---|
| `$Letter` | its kind is alphabetical **or numeric** | **[R308](#r308)** — *flips a promise* |
| `$Word` | its run is letters or numbers | ***built*** |
| `$Sentence` | it opens with a capital and closes on a stop | **[R298](#r298)** |
| `$Paragraph` | it has at least one sentence and all of them are canonical | **[R306](#r306)** |
| `$Section` | its title, and at least one canonical paragraph under it | **[R307](#r307)** |
| `$Document` | — | ***owed*** |
| `$File` | — | ***owed*** |
| `$Chapter` | — | ***owed*** |
| `$Book` | ***it does not catalogue a subject*** | **Doug's** |

<a id="r301"></a>**R301** — ***a canonical book does not catalogue a subject.*** *Doug's own example, and it is [R293](#r293) at the top of the ladder:* **the non-canonical books are the ones that catalogue** — ***which is exactly the residue `$Subject` and `$Library` will be minted from.*** *[The derivation already names them](../the-semantics-of-books/09-composition-and-collection.md): a collection of books is a subject, a collection of subjects is a library.* **So the principle reaches from the letter to the library, and nobody arranged that.**

<a id="r302"></a>**R302** — ***a kind is an ENUM, and a type is for styling it.*** *Doug: "**Let's carry as enum, and then we can have types to style that in particular if we need to. We can use our inheritance infrastructure to accomplish that.**"*

**So `$Word.kind` joins `$Letter.kind` as a computed property, and no `$Punctuation` class is written this sprint.** ***A type arrives only when something needs to draw a kind differently, and inheritance carries it.***

***READ AS: this governs the KINDS OF A LEVEL — punctuation, whitespace, symbolic.*** **`$Title` and `$Cover` stay classes with types**, *because a section asks for a title by name and an enum cannot be asked for.* **Flagged, and reversible if the reading is wrong.**

<a id="r303"></a>**R303** — ***drawing the parts reproduces the writing.*** *Doug: "**Whatever the view is, this.parts() should print nearly the same thing because it has the same special types in it right?**"*

***This is the stand-in's real gate and it is worth more than any count.*** **The block and the parts hold the same objects** — *a written `<MyWord />` is in both* — **so a page drawn from `parts()` and a page drawn from the block should read the same.** ***A seal-divide-restore that drops, duplicates or reorders anything shows up as text that does not match, which is a promise a reader can check by looking.***

<a id="r304"></a>**R304** — ***the wrapper lives in `frame()`, so every view shares it.*** *Doug: "**overriding frame might be recommended to preserve the markdown and have all the views have a common wrapper**."*

**Measured: [`particle.ts:132`](../../../chemistry/package/src/abstraction/particle.ts) is the render template method** — *"Override `frame()` to WRAP what is drawn, and wrap `super.frame()` so the content still renders."* ***So the paragraph's `<p>`, the section's rule, the quotation's bar belong there and not in any one view***, which is what lets the default view and the parse view differ in content while agreeing in shape. **And it is what [R303](#r303) needs to be true at all.**

*`$Particle` uses the word **facade** for a member holding a component ([`particle.ts:476`](../../../chemistry/package/src/abstraction/particle.ts)). **That is the framework's own thing and not what is meant here** — recorded so the two do not get confused later.*

<a id="r305"></a>**R305** — ***the parse performs the bind.*** *Doug: "**since there is a bind method, there is something like a facade and the parser will perform this bind**."*

***This is what connects the two phases, and it is [R249](27-composition.md#r249) arriving.*** **A level's parts are not raw writings — each is an instance of the composed level, BOUND to the writing it stands for**, *which is what `$$(one, $Letter)` already does one at a time and what `$Word.parts()` already does for written letters.*

***And it walks straight into a hazard sprint 27 named and deliberately did not reach.*** **[R250](27-composition.md#r250): the danger fires "the moment `parts()` MAKES a type for a found part. This sprint makes none."** *Phase Two makes one per part per rung.* **[K42](#k42) is that risk, and [Solutions 28](../solutions/28-the-specimen-that-was-the-component.md) is the defect it becomes** — *`$lift` hands out one shared object rather than a derivative unless the instance is stamped as a template, so two parts could turn out to be one object.*

<a id="r306"></a>**R306** — ***a canonical paragraph has at least one sentence and all of them are canonical.*** *Doug: "**Make it one sentence, but maybe assume a period.**"* ***The three-sentence threshold is struck by its own author*** — *it was hedged as "perhaps" when written, and [the enumeration in R309](#r309) is the case that argued with it.*

***The period is what carries the rule.*** **One sentence is enough BECAUSE [R298](#r298) requires that sentence to close on a stop** — *so ordinary short prose stays canonical and a title, whose line carries no stop, does not.* **That is what "assume a period" is doing here**, and it is read that way rather than as *supply a missing one*. ***Flagged, one line apart in the code.***

***And the residue is immediately interesting.*** *Doug: "**if we ever do poetry, we can play fun games to make a stanza for a paragraph for a poem as a little test case!**"* **A stanza carries no stops, so it is a non-canonical paragraph** — ***which is [R293](#r293) predicting a kind before anyone writes it.*** *[The settled account already knows the word](../the-semantics-of-books/15-the-levels-of-writing.md): "Three lines under single newlines are one paragraph — a stanza."* **Not a requirement of this sprint; recorded as the residue's first volunteer and a demo waiting to be written.**

<a id="r307"></a>**R307** — ***a canonical section has its title and at least one canonical paragraph under it.*** *Doug: "**I don't know. Similar to sentence? Title + at least one canonical paragraph?**"* ***The uncertainty is his and is kept*** — **this is the cell he answered least confidently, and a demo is what will settle it.**

**Its residue is the bare heading** — *a section that is only a title* — **which is what a cover's opening section is**, so [R283](#r283)'s cover is minted from section residue exactly as [R299](#r299)'s title is minted from paragraph residue. ***The figure holds one more rung.***

<a id="r308"></a>**R308** — ***a canonical letter is alphabetical OR numeric, and this repairs a contradiction already in the code.*** *Doug: "**If we enumerated the letters, we should get the a-zA-Z (I think we should add the digits too because 123 is a word).**"*

***The two levels disagree today and one of them has to be wrong:***

| | | |
|---|---|---|
| [`$Letter.canonical`](../../package/src/writing/Letter.tsx) | `this.kind === 'alphabetical'` | **digits are NOT canonical** |
| [`$Word.canonical`](../../package/src/writing/Word.tsx) | `said.test(this.copy)`, where `said` is `/[\p{L}\p{N}]/u` | **digits ARE canonical** |

***So `123` is a canonical word made entirely of non-canonical letters.*** **Doug's change is what makes the two agree**, and it is the level below being brought up to what the level above already assumed.

***It flips one green promise*** — **[`letter.test`](../../package/src/tests/letter.test.tsx): `expect(one('7').canonical).toBe(false)`** — *and the reversal is stated here rather than discovered at the gate.*

***And it answers one of the two open names by finding an incumbent rather than coining one.*** **The class that groups alphabetical with numeric is already called `said` in [`Word.tsx`](../../package/src/writing/Word.tsx)** — *a local const, standing in the code, not mine.* **Still Doug's to confirm or replace.**

<a id="r309"></a>**R309** — ***an enumeration is a derived reading over `parts()`, never a second store.*** *Doug: "**if we enumerated the paragraphs in a document (the canonical ones) it should leave out the titles. They aren't paragraphs. We can enumerate the titles separately.**"*

***This is the shape [the settled account already draws one grade down](../the-semantics-of-books/15-the-levels-of-writing.md):*** *"A sentence's **parts** are everything in it, syntax included. Its **words** are the used ones."* **What is written is present; what is enumerated is a reading of it.**

| | holds | |
|---|---|---|
| `parts()` | **everything written, in written order** | *the title is part zero and stays there* |
| the canonical enumeration | *the canonical ones* | **titles fall out because a title is non-canonical** — [R299](#r299) |
| the title enumeration | *the ones carrying the title type* | **asked through `$$`, so written and typed titles answer alike** |

***Nothing is stored and nothing is removed from `parts()`.*** **The member names are Doug's to pick and no proxy is written until he does.**

***THE CONSEQUENCE THAT MOVED A REQUIREMENT.*** *Raised here as: a `canonical` filter under the old three-sentence threshold would drop ordinary two-sentence prose along with the titles.* **Doug struck the threshold rather than split the filter — [R306](#r306)** — *so one filter does the job and the period is what excludes a title.* ***This is the enumeration correcting the canonical, which is the plan working.***

<a id="r310"></a>**R310** — ***the module constants become fields on the class, so a subclass can replace them.*** *Doug: "**Don't we want to save these things? Maybe put config as a field on the class with these so that they can be overwritten.**"*

***`$Letter` already has this shape and `$Word` does not***, which is two files doing the same job two ways:

| | today | |
|---|---|---|
| [`$Letter.patterns`](../../package/src/writing/Letter.tsx) | **a protected field holding four regexes** | ***overridable*** |
| [`said`, `broken`, `graphemes`](../../package/src/writing/Word.tsx) | **module constants** | **not reachable from a subclass** |

**So this is `$Word` catching up**, and it is what [C33](27-composition.md#c33) — *"I want type-based subclassing for this framework"* — needs in order to mean anything: **a kind cannot redefine what its parent recognises if the parent's patterns are module-private.**

<a id="r311"></a>**R311** — ***a field initializer runs per instance, and one of the three costs 26 times what the others do.*** **Measured, 20 000 constructions each:**

| | per construction | |
|---|---|---|
| four regex literals *(what `$Letter.patterns` already pays)* | **0.8 µs** | *negligible* |
| ***`new Intl.Segmenter`*** | ***21.1 µs*** | ***26× the four regexes together*** |

***And the multiplier matters because of who would own it.*** **[`$Word.parts()`](../../package/src/writing/Word.tsx) builds one `$Letter` per grapheme on EVERY call**, *so a segmenter held per letter would be paid once per character per read.*

**Where each belongs follows from how many there are:**

| | used by | owner | instances |
|---|---|---|---|
| `said` | `$Word.canonical` | **`$Word`** | one per word — *0.2 µs, fine* |
| `broken` | `$TypeOfWord.specifically` | **`$TypeOfWord`** | ***exactly one, ever*** — `[cache]` files it by name |
| `graphemes` | `$Word.parts()` **and** `$TypeOfLetter.specifically` | ***a type*** | ***exactly one, ever*** |

***Putting the segmenter on a type rather than on a level is not only the cheap answer, it is the right one:*** **what a grapheme is, is letter knowledge, and `$TypeOfLetter` is the thing that knows letters.**

<a id="r312"></a>**R312** — ***a config member holds a pattern; how it holds one depends on whether the pattern carries a cursor.*** ***None of v2's four constants is global, so today's change is safe*** — **but [Solutions 17](../solutions/17-the-regex-that-remembered-where-it-stopped.md) is a `/g` regex hoisted to module level, and a FIELD is hoisted too:** *"a global regex carries `lastIndex` between calls, and a module-level one carries it between callers."*

***So the rule is three-way and it covers every case in both versions:***

| what it is | how it is held | why |
|---|---|---|
| a **non-global** pattern | ***a field*** — [`$Letter.patterns`](../../package/src/writing/Letter.tsx)'s shape | *cheap, overridable, stateless* |
| a **`/g`** pattern | ***a getter that builds a fresh one*** | **a `/g` regex is a cursor**; v1's own fix is exactly this — `const display = () => /…/g` |
| a **costly stateless object** *(`Intl.Segmenter`)* | ***a member on the type***, of which there is one | **[R311](#r311)** — 21 µs, and one per grapheme is one per character |

<a id="r313"></a>**R313** — ***this reaches EVERY writing class, and the notation is what it is for.*** *Doug: "**Do things like this for all metadata like that in all writing classes. We want polymorphism.**"*

***Counted, both versions:***

| | module constants | |
|---|---|---|
| **v2 `src`** | ***4*** | `graphemes` ×2, `said`, `broken` — *Letter and Word only; the other five levels have none yet* |
| **v1 `.archive`** | ***19*** | ***the whole notation*** — `heading`, `bullet`, `quote`, `picture`, `rule`, `opens`, `displayed`, `blankFirst`, `blankLast`, `marks`, `link`, `stress`, `code`, `math`, `escaped`, `sentence`, `stopped`, `code`, `target` |

***And FOUR of v1's nineteen are `/g`*** — `marks`, `sentence`, `code`, `target` — **which is [R312](#r312)'s middle row, and they are precisely the ones Phase Two needs.**

***This is Doug's own earlier sentence arriving.*** **[Ch. 15](../the-semantics-of-books/15-the-levels-of-writing.md): *"Markdown is not a kind of writing. It is how writing is written — just a part of `$Section`, not `$MarkdownSection`."*** *If the notation is **part of** a level rather than a subclass of it, then it has to be **overridable state on that level***, **or a book written in another notation has no way in at all.** ***v1 put it in module constants, which is the one place a subclass cannot reach*** — so the class hierarchy said *configurable* and the file said *fixed*.

<a id="r314"></a>**R314** — ***and the kind enum is a wall, which is [D121](#d121)'s honest cost.*** **`$Letter.kind` is a TypeScript union**, *so a subclass can add a pattern but cannot add a kind name for it to answer with.* ***Raised rather than discovered: "we want polymorphism" and a closed union are in tension, and Doug ruled the enum knowing only half of that.*** **No change proposed; the cost is stated.**

## <a id="the-title-and-the-cover"></a>The title and the cover

<a id="r279"></a>**R279** — ***the five silent levels say what they are.*** **Sentence, paragraph, section, document and file inherit a check that cannot fail.** *Their sentences are owed, and under [R294](#r294) each must be the LEVEL's condition rather than its canonical's* — **the two are now known to be different questions with different jobs.**

<a id="r280"></a>**R280** — ***a section's specification is its title.*** *Doug: "**A section needs a title.**"* **Stated as a claim about part zero**, which is the shape every level above word shares: ***a level's specification is a claim about its canonical.***

<a id="r281"></a>**R281** — ***a title is a kind of paragraph, and a type defines it.*** *Doug: "**can be a type of paragraph because it has its own double space section, and we can define that with a type**."*

**`$Title extends $Paragraph`; `$TypeOfTitle extends $TypeOfParagraph`.** ***His reason is a notation reason and it is the right one*** — *a heading stands alone between blank lines, which is the delimiter that divides paragraphs, so the notation already treats it at paragraph grade.* **And because it is defined with a type, a paragraph carrying `<Type>Title</Type>` reads as one without being written as one.**

***[R299](#r299) is what makes this cost nothing.*** *A title is minted from the paragraph's own non-canonical residue, so no rung moves and nothing is carved out of the ladder.*

***One earlier sentence points the other way and reconciles rather than conflicts.*** *[C18's surviving thread](27-composition.md#c18): "**titles are at the sentence level, so they have to bubble up through canonicals**."* **A title is a paragraph whose canonical is the sentence that is the name**, *and that sentence is itself non-canonical for want of a stop* — ***the same claim seen at two rungs, which is [R299](#r299) exactly.*** **Flagged rather than quietly overwritten.**

<a id="r282"></a>**R282** — ***a book's specification is its cover.*** *Doug: "**a book has a cover which is a wrapper around the name and other things**."*

<a id="r283"></a>**R283** — ***a cover is a kind of chapter, and that is why it can wrap more than a name.*** **`$Cover extends $Chapter`, standing at chapter zero.**

***The figure is one specification at two scales, and [ch. 15 already wrote half of it](../the-semantics-of-books/15-the-levels-of-writing.md):*** *"a book is a **cover at chapter zero** plus a parenthetical synopsis; a section is a **title at paragraph zero**."* **A title is a paragraph and holds only the name; a cover is a chapter and holds the name plus the author, the subject and the synopsis** — *"and other things" is Doug's phrase for exactly the room the extra grade buys.*

***And the team's own `.cover.md` is the worked example:*** a heading, a list of author and subject lines, a rule, and a synopsis paragraph.

<a id="r284"></a>**R284** — ***`specification` is overloaded and the pick is Doug's.*** **On `$Writing` it means *the parentheticals this writing carries*; in ordinary use here it means *what a level's type requires*.** ***Two senses, one word.*** **OPEN — [nothing here is a name I invented](../../../../.claude/library/..teamsmanship/05-territory.md).**

## <a id="phase-two"></a>Phase Two — the parse places a written part at its own level

<a id="r285"></a>**R285** — ***a part written below the level lands at its own level.*** *Doug's example, verbatim: `<Section><Title><Paragraph>text text text <MyWord /> text text text` — "**and the parser knows that that word is in a sentence**."*

**The rule is v1's and it is two cases:** ***at my level → close the run and keep it as a part; below my level → it is a hole in my prose and rides down inside the piece that contains it.***

<a id="r286"></a>**R286** — ***the stand-in.*** *Doug: "**some special token that helps with the parse with a quoted version of a token at the right level so we know it parses right, and then you put it back later on**."*

**Three steps, one pass:** ***seal*** — join the block into one string, each below-level object becoming a stand-in; ***divide*** — run the level's own division over that string; ***restore*** — expand each stand-in back into the piece that holds it.

***"At the right level" is the load-bearing half*** — **the stand-in must be treated by the divider as one unit of whatever is being divided.** *[D117](#d117) is how.*

<a id="r287"></a>**R287** — ***and it is tested to the standard Doug named.*** *"**That would need to be very well tested.**"* **[U218](#u218) is that standard written out as scenarios**, and the adversarial cases are in it rather than beside it.

<a id="r288"></a>**R288** — ***the too-high case.*** **A document written inside a paragraph is not at the level and is not below it.** ***DESIGN OWED — see [U219](#u219).***

<a id="r315"></a>**R315** — ***the stand-in is not the copy, and the phrase is why.*** *Doug: "**A phrase might, for instance, be a word that contains what would be several words. So when you replace the word with a token so that you can parse, it needs to not be the copy because the copy will be multiple words. And then you can insert back based on the id that is in the token.**"*

***This is the argument for the whole mechanism and it is better than the one this chapter had.*** **[`$Phrase`](../../package/.archive/writing/Phrase.tsx) is a real class in v1** — *`extends $Word`, and [ch. 15](../the-semantics-of-books/15-the-levels-of-writing.md) says why:* **"one word that admits what a name contains, spaces among them."**

**So a phrase is ONE word whose COPY is several.** *Seal with the copy and the divider splits it in two; seal with an opaque id and the division sees one word and the object comes back whole.* ***The token exists precisely because an object's copy has a different shape from the object.***

<a id="r316"></a>**R316** — ***and therefore EVERYTHING is sealed, not only what is below the level.*** **v1's loop kept an at-level object out of the string entirely; the sealed-string design puts everything in.** *So a stand-in must divide as **exactly one part** when its object is at the level, and must **create no boundary** when it is below.*

***One character satisfies both at once, which is [D117](#d117)'s payoff rather than its premise:*** **no stop, so it never splits a sentence; no whitespace, so it never splits a word; one grapheme, so it never splits a letter.**

***And the id has to fit IN the character.*** *A delimited token — `` `1` `2` `` — is four graphemes, so it would divide into four letters at word grade.* **`U+E000 + n` it is**, *6 399 stand-ins per call, overflow raising rather than wrapping.*

<a id="r317"></a>**R317** — ***RESOLVED, and the collision dissolves rather than being decided.*** *Doug: "**I would do a phrase as multiple words and a canonical phrase as the extra words being whitespace only.**"*

***A phrase stops being a word and becomes a composition of them.*** **`"Doug Rubino"` is three words — `Doug`, a whitespace word, `Rubino`** — *each of which is one run of a single class,* ***so [R297](#r297) stands untouched and `$Phrase` repeals nothing.*** **[R247](27-composition.md#r247)'s fault is not repeated; it is removed.**

***And this is Doug's ORIGINAL sentence arriving, three sprints late.*** *[Ch. 15](../the-semantics-of-books/15-the-levels-of-writing.md) records it and records the framework declining it:* **"Why not make a `$Phrase` a type of word — maybe it's a word that can contribute multiple words if that's possible (**if not we treat it as one**)"** — *"It is the second."* ***v1 took the fallback because it could not do the first. This does the first.***

<a id="r318"></a>**R318** — ***a canonical phrase is one whose extra words are whitespace only.*** *Doug's, verbatim.* **So `Doug Rubino` is canonical and `Doug, Rubino` is not** — *the separators are what the condition is about, exactly as a sentence's condition is about its ends.*

<a id="r319"></a>**R319** — ***a phrase's words reach the sentence that holds it, and that is the monad's JOIN.*** **A composition of words written inside a sentence must contribute its words to that sentence's words**, *or "multiple words" means nothing from outside.*

***[The derivation already names this operation](../the-semantics-of-books/09-composition-and-collection.md):*** **"Join — nesting collapses back into the level; a composition of compositions flattens into a composition, and iterating never takes you out."** *And `selectMany` is on [`$Composition$`](../../package/src/writing/Composition.tsx) already, which is where the flattening lives.*

***The stand-in is unaffected.*** **The seal replaces the phrase with one token, the division sees one thing, restore puts the phrase back, and the flattening happens after** — *so [R315](#r315) and [R316](#r316) hold as written.*

<a id="r320"></a>**R320** — ***where a phrase sits in the ladder is OWED.*** **It composes words, which is what a sentence composes** — *so it is at sentence grade structurally while sitting inside a sentence.*

***One reading is available and it is the one Doug's own principle predicts:*** **a name carries no capital and no terminal stop, so it is a NON-CANONICAL SENTENCE** — *[R298](#r298)'s residue* — **and [R293](#r293) says that is exactly what a kind is minted from.** *It rests on Doug's own two sentences and on nothing older: a phrase is multiple words, and a non-canonical thing at one level is the canonical thing of the next kind.*

***FLAGGED AS A READING AND NOT ACTED ON.*** **The ruling is Doug's.**

## <a id="what-a-kind-costs"></a>What a kind costs

<a id="r321"></a>**R321** — ***a kind must cost ONE declaration, not two.*** *Doug: "**Otherwise, we have to create both the class and the type whenever we want to change data.**"*

***The cost is real and this plan created it.*** **Under [D115](#d115) and [D121](#d121) as written, a stanza needs:**

| | | |
|---|---|---|
| `$Stanza extends $Paragraph` | *overriding `canonical`* | **a class** |
| `$TypeOfStanza extends $TypeOfParagraph` | *so the name resolves* | **a type** |

**Two files for one kind, every time** — *and [R293](#r293) says kinds are the thing this design is FOR.* ***A mechanism that makes its own central move expensive is the design arguing with itself.***

<a id="r322"></a>**R322** — ***so the type answers the canonical question, and this does NOT reverse [R289](#r289).*** *Doug: "**Maybe the type itself does need to hand back certain things.**"*

***[R246](27-composition.md#r246) already said a level asks TWO questions and they are different.*** **Each lands in a different place, and that is the whole resolution:**

| | question | who | shape |
|---|---|---|---|
| **being AT the level** | *is this writing one of these at all?* | ***the type*** | **`$check`** — validates, raises, returns nothing. **[R289](#r289), unchanged** |
| **being the CANONICAL kind** | *is this the good sort of one?* | ***the type*** | ***answers*** — a judgement, not a computation the level needs to be total |

**[R289](#r289) says the type does not perform the computations the level needs.** *`canonical` is not one of those* — **nothing on `$Paragraph` breaks if `canonical` is false**, and it is precisely the member a kind exists to redefine.

<a id="r323"></a>**R323** — ***and canonical becomes RELATIVE, which is what makes a stanza work at all.*** **A stanza is non-canonical *as a paragraph* and canonical *as a stanza*** — *two questions, two answers, and the type carrying the name is what says which is being asked.*

***This is [R293](#r293) stated exactly:*** *"a non-canonical normal thing is a good candidate for a canonical other thing"* — **the residue and the new kind are the same writing, judged by two different types.**

<a id="r324"></a>**R324** — ***a stanza parses as an ordinary paragraph and no newline games are played.*** *Doug: "**we want to be able to have the thing parsed as a normal paragraph and then put back in. It doesn't need to bind to the token. It can have its own type.**"*

***And it falls out with nothing added.*** **A stanza's lines carry no terminal stops, so its sentences are non-canonical, so the paragraph is non-canonical** — ***[R306](#r306) already puts a stanza in the residue without knowing stanzas exist.*** *`<Type>Stanza</Type>` then says which kind of residue it is.*

<a id="r325"></a>**R325** — ***DISSOLVED. `canonical` is never asked of writing carrying several types; it is asked of a BINDING.*** *Doug: "**No, it needs to bind to the different types in different scenarios. It's the facade that carries the data.**"*

***The question this requirement asked was malformed.*** **There is no conflict rule because there is no unqualified question** — *a chimerical writing has several possible bindings, and naming the type is how a scenario picks one.*

| | |
|---|---|
| `$$(writing, $Paragraph)` | ***ask that*** — is it canonical **as a paragraph**? |
| `$$(writing, $Stanza)` | ***ask that*** — is it canonical **as a stanza**? |

**Which is [R323](#r323) with its mechanism supplied**, *and the mechanism is one that already exists rather than a new member.* ***`bind` is the whole of it.***

<a id="r326"></a>**R326** — ***the bind lives in the parts compiler, and the LEVEL BEING COMPOSED is what selects the type.*** *Doug: "**Look at binding! It happens in the parts parser. A piece of writing with the letter type would be bound to a letter. Is that not self-evident? That logic should be in the parser.**"*

***So the question this requirement was asking is answered by where the code sits.*** **A parts compiler at one level is composing the level below it, and that is the whole selector:**

| the compiler | asks for | writing carrying `Letter` **and** `Word` |
|---|---|---|
| `$Word.parts()` | *letters* | ***binds the Letter*** |
| `$Sentence.parts()` | *words* | ***binds the Word*** |

**Nothing has to be resolved on the writing, because the reading always arrives with a level in hand.**

<a id="r327"></a>**R327** — ***and the selection is DYNAMIC, not `instanceof`.*** *Doug: "**It shouldn't be using instanceof. It needs to do dynamic typing and binding.**"*

**[`$$`](../../package/src/utilities/Lib.tsx) does both today** — *`of instanceof asked`, and `one.finds.prototype instanceof asked`* — **so it reads the JavaScript prototype chain to answer a question about the library's own hierarchy.** ***Those are two different hierarchies that happen to coincide, and coinciding is not the same as being the same thing.***

<a id="r328"></a>**R328** — ***the compiler is ONE thing, written once.*** *Doug: "**That logic should be in the parser.**"* **Today the selection is inline in each level's `parts()`** — *seven copies of `filter($$(one)(X)).map($$(one, X))`* — **which is one specification written seven times.**

<a id="r329"></a>**R329** — ***`chimerical` is a word for the register, never for the code.*** *Doug: "**don't call them that in code**."* **It stays in this chapter and in [C17](27-composition.md#c17); no member, class or file carries it.**

<a id="r330"></a>**R330** — ***RESOLVED, and there is no selection rule because there is no selection.*** *Doug: "**It would bind Paragraph but it would bind a paragraph to a Title. This is why the parser needs to be able to preserve the type of special elements in the block.**"*

***The compiler binds the level it composes. Always. Nothing is chosen.*** **A section composing paragraphs binds a `$Paragraph`** — *to writing that carries `Title`, or `Stanza`, or both, or neither.* **The types are not consumed by the bind; they stay on the writing and stay askable.**

| | |
|---|---|
| what the part **is** | ***a `$Paragraph`*** — the level being composed |
| what the part still **carries** | ***`Title`, `Stanza`, everything written*** |
| how a reader gets the kind | ***asks for it*** — `$$(part, $Title)` — **later, and only if it wants it** |

<a id="r331"></a>**R331** — ***so the parse must PRESERVE the types through the stand-in.*** *Doug: "**This is why the parser needs to be able to preserve the type of special elements in the block.**"*

***This is a constraint on [U216](#u216) that the earlier design did not carry.*** **A stand-in stands for an object, and restoring it must return the object with its specification intact** — *sealing to a copy loses the types along with the shape, which is [R315](#r315)'s argument reaching one step further than the phrase.*

## <a id="what-a-type-is"></a>What a type is, and what it is not

<a id="r332"></a>**R332** — ***a type does not hold a writing and does not return a writing class.*** *Doug: "**NO type doesn't hold or return the writing. Have it take method which take the instance. Binding is to the concrete writing not to the type.**"*

***So `$Type` has methods that TAKE the writing, and nothing else.*** **[`specifically(writing)`](../../package/src/writing/Writing.tsx) is already exactly that shape** — *it takes the instance, uses `$check`, and rejects what is not up to spec.* ***It is the model for every member a type will ever have.***

<a id="r333"></a>**R333** — ***the one binding direction that exists is INSTANCE HOLDS TYPE, and it already does.*** *Doug: "**If we were binding in any direction it would be instance holds type and we DO do that.**"* **[`$Writing.specification`](../../package/src/writing/Writing.tsx) is that member.** ***The reverse — a type holding or naming its writing — is the thing that keeps being written back in.***

<a id="r334"></a>**R334** — ***`finds` is owed for removal.*** **It returns `new () => $Writing` and is therefore [R332](#r332) broken twice over.** *It is not in `HEAD`; it entered the working copy in a session before this one, and Doug's sentence — "you KEEP putting back in things I delete" — is about exactly it.* ***No change made: the removal breaks seven imports and [`$$`](../../package/src/utilities/Lib.tsx) rests on it, so it waits for Doug.***

<a id="r335"></a>**R335** — ***how a type is reached, and it needs neither.*** *Doug: "**The type of whatever has the type in its specification, and that type should be polymorphically related to the type being bound... You pass back that the type of paragraph is a stanza in its specification. And that is what makes the type the thing whose specifically is called on the instance of writing.**"*

| | |
|---|---|
| **1** | *the compiler is composing a level, so it holds **that level's type*** — `$TypeOfParagraph` |
| **2** | *it looks in the writing's `specification` for a type that **is one*** — **and finds `$TypeOfStanza`, because `$TypeOfStanza extends $TypeOfParagraph`** |
| **3** | ***that*** *type's `specifically` runs on the writing* — **so the stanza's rules apply, not the paragraph's** |
| **4** | *the class bound is `$Paragraph`* — **which the compiler already had, because it is the level it composes** — [R330](#r330) |

***The type hierarchy does the work the class lookup was doing.*** **That is why [`finds`](#r334) reads as something already deleted: it solves a problem the polymorphism has already solved**, *and it is [R321](#r321) answered — a kind is one declaration, a type, and no class at all.*

<a id="r336"></a>**R336** — ***nothing in `src` was changed while this chapter was written.*** **Checked: every `specifically` in the working copy is an ADDITION against `HEAD`; none was deleted anywhere.** *Recorded because it was asked and because a plan that cannot say what it touched is not a plan.*

## <a id="the-sweep"></a>What the deep search found

<a id="r337"></a>**R337** — ***there are no statics anywhere in `src`.*** *Searched; zero.* **Recorded so nobody has to look again.**

<a id="r338"></a>**R338** — ***there are 25 module consts, and they are three different things.***

| | count | |
|---|---|---|
| **data** — `said`, `broken`, `graphemes` ×2 | ***4*** | **[R310](#r310)** already takes these |
| ***singleton instances*** — `html = new HtmlUtilities()`, `$$ = new $Lib().$$` | ***2*** | ***NOT in this plan until now*** — [R339](#r339) |
| **template exports** — `export const Letter = $($Letter)` | ***19*** | ***RAISED, not assumed*** — [R341](#r341) |

<a id="r339"></a>**R339** — ***the two singletons are [the member-in-exile fault](04-the-member-audit.md) recurring.*** *That audit, finding 5:* **"`display(x)` is only ever called as `display(this)` — a member pretending to be a helper; as a protected member it becomes overridable, which is Doug's stated preference."**

***`html.text` is that exactly.*** **[`$Writing.copy`](../../package/src/writing/Writing.tsx) calls `html.text(this.block)`**, *so how a level reads its own copy is decided in a file no level can override* — **which is the same complaint as [R310](#r310) one layer out.** *`$$` is the second: a method detached from its class and exported as a value.*

<a id="r340"></a>**R340** — ***four pieces of dead or unused code, found by search and not previously reported.***

| | |
|---|---|
| ***`HtmlUtilities.block()`*** | **nothing calls it** — *searched all of `src`* |
| ***`createElement`*** | **imported into [`Writing.tsx`](../../package/src/writing/Writing.tsx) line 1 and never used** |
| ***`$Referent$`*** | `interface $Referent$ extends $Chemical { }` — **empty; it constrains nothing and `$Writing` implements it for no effect** |
| ***nine `$(<Of />) as $TypeOfX` casts*** | **every level asserts what `$()` returned** — *[the cast that asserts what a check verifies](../designing-inexplicable-phenomena/08-the-order-of-a-class.md), nine times* |

<a id="r341"></a>**R341** — ***whether the 19 template consts go is DOUG'S, and it is raised rather than assumed.*** **[The member audit](04-the-member-audit.md) finding 11 calls the class-plus-template pair *the convention*** — *"Every file carries one class (or one interface) plus its template const — the pair being the convention. No violations."* ***His sentence "none of those are necessary in any file" may or may not reach them; guessing either way would be [the thing this sprint keeps being corrected for](#r334).***

<a id="r342"></a>**R342** — ***three names in this chapter are mine and are owed.*** *Doug: "**Bubble up the members you invented to discuss.**"*

| mine | standing for | |
|---|---|---|
| ***`seal`***, ***`restore`*** | *two of the three parse steps* | **`divide` is v1's; these two are not** |
| ***"stand-in"*** | *the thing put in the prose where an object was* | ***Doug's word is **token***, and this chapter should use it |
| ***`refines`*** | *a type declaring what it narrows* | **floated in a question, never written into the chapter or the code** |

***Everything else in this chapter is Doug's or an incumbent:*** `patterns`, `said`, `$Title`, `$Cover`, `$Phrase`, `$Stanza`, `interpret`, `specifically`, `canonical`, `finds`.

## <a id="u221"></a>U221 — the sweep

**Requirements:** [R337](#r337)–[R341](#r341).
**Mechanism:** *four deletions and two moves, none of them behavioural.* **Dead code out; the two singletons become protected members on the classes that call them.**
**Files:** `utilities/Html.ts`, `utilities/Lib.tsx`, `writing/Writing.tsx`, `reference/Referent.tsx`.
**Depends on:** nothing.
**Visible end:** *no visible end, and that is why it is last* — **a sweep is not a demo.**

| | scenario | outcome |
|---|---|---|
| **S45** | the suite before and after | ***identical numbers*** — a sweep that changes a promise is not a sweep |
| **S46** | ***a level overriding how its copy is read*** | **it can** — [R339](#r339), and it cannot today |
| **S47** | `grep` for `const` in `src` outside tests | ***only what [R341](#r341) rules may stay*** |

---

# <a id="decisions"></a>Decisions

<a id="d114"></a>**D114 — `$Writing` gets NO type parameter, ever.** ***Doug, verbatim: "NEVER restore WRITEING&lt;T&gt; - put a HUGE ban. No no no no. It would allow a letter of section to be created. We curate those carefully. We do not give allowance to all of them. NO. The ladder is a convention. Okay?"***

**Recorded as a decision rather than a note, because it is the thing a later session will re-propose.** *The audit finding it answers — that the rung is written seven times and typed zero times — **is the intended state**, not a gap.* ***And v1's `$Writing<P extends $Writing>` in [`.archive`](../../package/.archive/writing/Writing.tsx) is the banned shape: being in the archive is not an argument for it.***

<a id="d115"></a>**D115 — the level computes; the type only guarantees that it can.** *Chosen over [R274](#r274)'s shape — a type handing back a description — which Doug proposed and withdrew in the same session.*

**Two arguments, and the second is structural rather than aesthetic.** *A type that hands back data is a second author of the level's state, and [Solutions 16](../solutions/16-the-parse-that-woke-its-own-parents.md) is what a write from the wrong place costs.* ***And a type physically cannot hold per-instance data: [`cache`](../../../chemistry/package/src/abstraction/chemical.ts) registers one `$TypeOfLetter` for every letter there will ever be.***

***So the smaller design is also the only one that works.***

<a id="d116"></a>**D116 — validation is the bind's precondition, not a separate pass.** ***Doug's own correction, and it removes a design rather than adding one.*** *A `validate()` beside a `read()` would state the same condition twice and could disagree with itself.*

<a id="d117"></a>**D117 — the stand-in is ONE character from the Private Use Area, indexed from one.** *Chosen over v1's bare integer between spaces, over a bracketed sentinel, and over not stringifying at all.*

| requirement | why the single PUA character satisfies it |
|---|---|
| **cannot occur in prose** | *U+E000–U+F8FF have no meaning; a document containing one is quoting the mechanism, which is [K39](#k39)* |
| **one token at sentence grade** | *it is not `.`, `!` or `?`, so it never splits a sentence* |
| **one token at word grade** | *it is not whitespace, so it never breaks a word* |
| **one token at paragraph grade** | *it is not a blank line* |
| ***one token at letter grade*** | ***it is one grapheme*** — *this is the property a multi-character sentinel loses, and the reason the index is carried by **which** character rather than by digits inside it* |
| **exactly recoverable** | *`U+E000 + n`, `n ≥ 1`; 6 399 slots; overflow raises rather than wraps* |

***"Quoted at the right level" falls out of choosing one character*** — **it reads as a single unit at every grade at once**, *which is what Doug's phrase asks for and what the bare integer could not give.*

<a id="d118"></a>**D118 — an unrestored stand-in is loud, never invisible.** *Chosen over stripping it at render.* **A stand-in reaching a reader is a parse that failed to put something back**, *and [Solutions 2](../solutions/02-the-footnote-that-wore-zero.md) is what a silent miss costs.* ***So restore counts what it put back, and a shortfall raises naming both numbers.***

<a id="d119"></a>**D119 — two sessions, in Doug's order, and no further division.** *Doug: "**First is the types, then is the parser.**"*

***Measured rather than assumed, per [the size rule](../../../../.claude/library/our-skillset/29-ce-plan.md#a-dispatch-is-checked-against-the-size-of-the-work--added-out-of-the-build):*** **the whole surface is 16 files and 571 lines today.** *Phase One touches nine of them and adds two; Phase Two touches eight and adds one.* **Neither half is larger than the briefs a division would need**, and [The Build](15-the-build.md) is the sprint that paid for learning it.

<a id="d120"></a>**D120 — whether to brand `$TypeOfX` is ASKED, not assumed.** ***It is not covered by [D114](#d114)*** — *a parameter saying what a type **finds** is not a parameter saying what a level **composes**, and `$TypeOfSection` finding `$Section` cannot construct a letter of a section.* **But it is adjacent enough to a ban that assuming it would be exactly the move [D114](#d114) forbids.** *Carried in [OPEN](#open).*

<a id="d121"></a>**D121 — a kind is an enum; a type is how a kind gets drawn.** *Chosen over a class per kind and over a type per kind.* ***Doug's, and it keeps this sprint from writing seven classes nobody has asked to draw yet.***

<a id="d122"></a>**D122 — `canonical` defaults to false.** *Chosen over the current default of `true`.* **A default of true means seven levels claim canonicality they never stated**; *a default of false means the claim has to be made, and [R300](#r300)'s table is the pressure that makes it.*

<a id="d123"></a>**D123 — not-at-my-level is below.** *Chosen over an ordinal and over a one-hop upward reference.* **[U219](#u219) carries the ruling and its consequence.**

<a id="d124"></a>**D124 — the wrapper is in `frame()`, not in a view.** *Chosen over each view carrying its own markup.* **It is what makes [R303](#r303) checkable** — *two views can only be compared if they agree about everything except what they draw.*

---

# <a id="units"></a>Units

*Every unit names **the mechanism — what runs, and when** — its files, what it depends on, and **what will be visible when it is done**. [A unit that cannot answer those is design owed and is denied files, scenarios and dependencies](../../../../.claude/library/our-skillset/29-ce-plan.md#a-unit-with-no-mechanism-is-not-a-unit--added-out-of-sprint-48s-failure). **One here is, and it is marked.***

## <a id="u211"></a>U211 — the type states one condition, and states it where it is needed

**Requirements:** [R276](#r276), [R289](#r289), [R291](#r291), [R292](#r292).
**Mechanism:** *`$TypeOfLetter.specifically` is already exactly this and changes nothing* — **one `$check`, one grapheme, no reading and no return.** *What this unit does is make that the stated shape and prove the claim it rests on:* **that the check is what makes `kind` and `case` total.** *[R290](#r290) — whether the level holds or recomputes — is left open and this unit does not touch it.*
**Files:** `writing/Letter.tsx`, `writing/Writing.tsx`.
**Depends on:** nothing.
**Visible end:** ***a letter and a non-letter side by side*** — one answering with its kind and case, the other refused in one sentence.

| | scenario | outcome |
|---|---|---|
| **S1** | `<Letter>a</Letter>` | `kind` is `alphabetical`, `case` is `lowercase` |
| **S2** | `<Letter>7</Letter>`, `<Letter> </Letter>`, `<Letter>,</Letter>`, `<Letter>🙂</Letter>` | `numeric` · `whitespace` · `punctuation` · `symbolic`, and `case` unset for all four |
| **S3** | ***`$TypeOfLetter` reads nothing and returns nothing*** | **its only statement is a `$check`** — [R289](#r289) |
| **S4** | ***one letter bound, read, rebound, read again*** | ***both readings are that writing's*** — [R278](#r278) |
| **S38** | ***a subclass replacing a pattern*** | **it recognises what the parent did not, without touching the parent** — *and no `Intl.Segmenter` is constructed per letter* — [R310](#r310), [R311](#r311) |
| **S32** | ***the provability promise*** | **for writing `$TypeOfLetter` accepts, `copy`, `kind`, `case`, `canonical` and `parts()` all answer** — no throw, nothing `undefined` — [R292](#r292) |

## <a id="u212"></a>U212 — the bind validates

**Requirements:** [R277](#r277), [R278](#r278).
**Mechanism:** *`$Writing.bind(writing)` sets `inside`, calls `specify()`, then `build()` — in that order, so nothing is assigned from a reading that was refused.* **This reinstates what [`69b79b8`](../../package/src/writing/Writing.tsx) built and the current shape lost.**
**Files:** `writing/Writing.tsx`, `utilities/Lib.tsx`.
**Depends on:** U211.
**Visible end:** ***`$$(writing, $Letter)` on writing that is not a letter says so*** — where today it hands back a letter.

| | scenario | outcome |
|---|---|---|
| **S5** | `$$(drawn('U+0041', <Type>Letter</Type>).writing, $Letter)` | ***raises, naming the reason*** — [R277](#r277) |
| **S6** | `$$` on writing that IS one grapheme | binds, and `kind`/`case` are that writing's |
| **S7** | a bound letter rebound to different writing | ***copy, kind and case all move*** — [R278](#r278) |
| **S8** | ***the order inside `bind`*** | **a refused bind leaves no assigned state** — *`kind` is not written before `specify()` raises* |
| **S9** | ***what `$$` does today, pinned before it is changed*** | **the current behaviour is written down as a scenario first**, because [it was read rather than run](#read) and the plan may be wrong about it — [K36](#k36) |

## <a id="u213"></a>U213 — the five silent levels say what they are

**Requirements:** [R279](#r279).
**Mechanism:** *each of `$TypeOfSentence`, `$TypeOfParagraph`, `$TypeOfSection`, `$TypeOfDocument`, `$TypeOfFile` overrides `specifically`, exactly as `$TypeOfLetter` and `$TypeOfWord` already do.*
**Files:** the five level files under `writing/`.
**Depends on:** U211.
**Visible end:** *a piece of writing told it is a section, and refused in the section's own words.*

| | scenario | outcome |
|---|---|---|
| **S10** | each of the five, given writing that satisfies it | passes, and hands back its description |
| **S11** | each of the five, given writing that does not | ***raises with a sentence naming the level and the reason*** — never a bare `false` |
| **S12** | ***the sentences are not vacuous*** | **for each of the seven there exists writing the type refuses** — *the promise that would have caught today's state* |

## <a id="u214"></a>U214 — `$Title`, and a section's specification

**Requirements:** [R280](#r280), [R281](#r281).
**Mechanism:** *`$Title extends $Paragraph` with a `$TypeOfTitle extends $TypeOfParagraph` cached under its name.* **`$TypeOfSection.specifically` asks whether part zero reads as a title** — through `$$`, so a written `<Title>` and a paragraph carrying `<Type>Title</Type>` both answer.
**Files:** `writing/Title.tsx` *(new)*, `writing/Section.tsx`.
**Depends on:** U213.
**Visible end:** **[AE14](#ae14)** — *a section drawn with its title standing first, and a titleless one saying why it is not a section.*

| | scenario | outcome |
|---|---|---|
| **S13** | a section whose part zero is a written `<Title>` | valid · `parts()[0]` **is** the title, counted among the paragraphs — *not lifted out* |
| **S14** | a section whose part zero is a paragraph carrying `<Type>Title</Type>` | ***identical answer, by the same route*** — [R281](#r281) |
| **S15** | a section with paragraphs and no title | ***refused, in the section's words*** |
| **S16** | a title with no words | ***refused*** — *"a title has words, and this one is empty"* is v1's own sentence |
| **S17** | ***a `$Title` asked what it is*** | **a paragraph** — `$$(title)($Paragraph)` is true, and `$Section.parts()` finds it without being told titles exist |

## <a id="u215"></a>U215 — `$Cover`, and a book's specification

**Requirements:** [R282](#r282), [R283](#r283).
**Mechanism:** *`$Cover extends $Chapter` with a `$TypeOfCover extends $TypeOfChapter`.* **`$TypeOfBook.specifically` asks whether chapter zero reads as a cover.** *A cover's own part zero is a title, one grade down — the same claim, and it is what makes the figure recur.*
**Files:** `book/Cover.tsx` *(new)*, `book/Book.tsx`.
**Depends on:** U214.
**Visible end:** **[AE15](#ae15)** — *the same figure drawn at two scales, a title in a section beside a cover in a book.*

| | scenario | outcome |
|---|---|---|
| **S18** | a book whose chapter zero is a cover | valid · the cover is `parts()[0]` and is counted |
| **S19** | a book with chapters and no cover | ***refused, in the book's words*** |
| **S20** | ***a cover whose part zero is a title*** | **the figure one grade down**, and the cover carries the parentheticals beside it — *"and other things"* |

## <a id="u216"></a>U216 — the stand-in

**Requirements:** [R286](#r286), [R287](#r287), [D117](#d117), [D118](#d118).
**Mechanism:** ***three functions and no state: seal, divide, restore.*** *Seal walks `block.$elements` and returns one string plus the objects it stood in for; divide is the level's own; restore expands each stand-in inside the piece holding it and **counts what it put back**.* **Nothing is hoisted** — [Solutions 17](../solutions/17-the-regex-that-remembered-where-it-stopped.md).
**Files:** `utilities/` — *one file, named by whatever [R284](#r284)'s ruling settles.*
**Depends on:** U212.
**Visible end:** *the sealed string shown beside the prose it came from, so a reader can see the hole.*

| | scenario | outcome |
|---|---|---|
| **S21** | **prose with digits, spaces and stops around a hole** | ***divides exactly as the same prose without the hole*** — **the case that fails in v1** |
| **S22** | in equals out | **every stand-in sealed is restored; a shortfall raises naming both numbers** — [D118](#d118) |
| **S23** | ***prose containing the stand-in character itself*** | ***refused or escaped, never silently mistaken for a hole*** — [K39](#k39) |
| **S39** | ***a phrase written among prose*** | **one word, not several** — *its copy carries spaces and the division never sees them* — [R315](#r315) |
| **S40** | ***an AT-LEVEL object sealed*** | **it divides as exactly one part** — [R316](#r316) |
| **S24** | the same prose sealed and divided twice | ***identical both times*** — *no `/g` regex outlives a call* |
| **S34** | ***the same writing drawn from its block and drawn from its parts*** | ***the same text*** — **the round-trip promise, and the one a reader can check by looking** — [R303](#r303) |

## <a id="u217"></a>U217 — the seven `parts()` become seal, divide, restore

**Requirements:** [R285](#r285).
**Mechanism:** *each level's `parts()` stops filtering and starts walking* — **at my level → a part; below → a hole that descends.** *v1's two-case loop, run over one sealed string instead of element by element, which is what fixes the stop that falls immediately after an element.*
**Files:** all seven under `writing/`.
**Depends on:** U216.
**Visible end:** **[AE16](#ae16)** — ***Doug's own example on screen***: a paragraph of prose with a live word in the middle of it, and the word standing among the words of the sentence it was written in.

## <a id="u218"></a>U218 — the suite, to the standard Doug named

**Requirements:** [R287](#r287).
**Mechanism:** *the per-level files gain the type's promises; the stand-in gets its own file.* **[The unit-of-code rule](../designing-inexplicable-phenomena/07-the-unit-of-code.md) applied to the suite**, as [D112](28-the-block.md#d112) already set.
**Files:** `tests/`.
**Depends on:** U217.
**Visible end:** ***a number WITH its scope*** — v1's and v2's stated separately, [never a bare PASS](../solutions/14-the-green-that-exercised-nothing.md).

## <a id="u219"></a>U219 — the too-high case · ***RULED***

**Requirements:** [R288](#r288).
**Ruling:** *Doug, 2026-08-29: **treat everything not-at-my-level as below.*** **No ordinal, no upward reference, no member on `$Writing`** — *which keeps [C26](27-composition.md#c26) and [R262](28-the-block.md#r262) intact and leaves the walk with the two cases it already has.*
**Mechanism:** *none of its own — it is [U217](#u217)'s default, now chosen rather than defaulted into.*
**Files:** none.
**Depends on:** U217.
**Visible end:** *a document written inside a paragraph rides into a sentence and its copy stands as prose* — **stated, so it is a known consequence rather than a surprise.**

| | scenario | outcome |
|---|---|---|
| **S33** | a `$Document` written among a paragraph's prose | ***it descends; nothing raises*** — and the promise says so, so a later change to this rule fails visibly |

***v1 threw here and this does not.*** **The difference is recorded rather than smoothed over**, and [R288](#r288) is closed.

## <a id="u220"></a>U220 — the canonical, and the residue kinds are minted from

**Requirements:** [R293](#r293), [R294](#r294), [R295](#r295), [R296](#r296), [R297](#r297), [R298](#r298), [R299](#r299).
**Mechanism:** *`canonical` is already a property on every level; this gives it content where it has none and restates the one precondition that contradicts it.* **`$Word` gains a `kind` computed from its letters; `$TypeOfWord`'s check becomes *one run of a single class*; `$Sentence.canonical` reads its own first and last parts.** ***No new level and no new machinery*** — *a kind is a subclass whose `canonical` claims its parent's residue.*
**Files:** `writing/Word.tsx`, `writing/Sentence.tsx`, `writing/Paragraph.tsx`, `writing/Letter.tsx`.
**Depends on:** U211.
**Visible end:** **[AE18](#ae18)** — *a line of prose drawn with its words coloured by kind, the canonical ones plain and the residue marked, so a reader can see where the next kind would come from.*

| | scenario | outcome |
|---|---|---|
| **S25** | `!!!`, `???`, `::` | ***one word each, kind `punctuation`, non-canonical*** — [R296](#r296) |
| **S26** | a run of spaces | **one word, kind `whitespace`, non-canonical** — *and it PASSES its type*, where today it is refused — [R297](#r297) |
| **S27** | `hello`, `h3llo`, `7` | canonical, one run each |
| **S28** | ***every level*** | **there exists writing its type ACCEPTS and its canonical REFUSES** — *the residue is non-empty at every rung, which is what [R294](#r294) requires and what makes minting possible* |
| **S29** | `The cat sat.` versus `the cat sat` | ***canonical, then not*** — [R298](#r298), read from the parts and never from a raw string |
| **S30** | a heading-shaped paragraph | ***non-canonical as a paragraph, canonical as a title*** — [R299](#r299) |
| **S44** | writing carrying **Stanza** and **Title**, read by a section | ***the part is a `$Paragraph`*** · **it still carries both types** · `$$(part, $Title)` answers — [R330](#r330), [R331](#r331) |
| **S43** | writing carrying **Letter** and **Word**, read by a word and by a sentence | ***the word binds the Letter, the sentence binds the Word*** — same writing, two readings — [R326](#r326) |
| **S41** | ***a paragraph carrying `<Type>Stanza</Type>`*** | ***non-canonical as a paragraph, canonical as a stanza*** — **and no `$Stanza` class is written** — [R321](#r321), [R322](#r322), [R323](#r323) |
| **S42** | a stanza written as ordinary lines | **it parses as a paragraph** — *no newline rule anywhere in the walk* — [R324](#r324) |
| **S31** | ***a kind claiming canonical ground*** | **a punctuation kind offered `"hello"` is refused** — [R295](#r295) |
| **S35** | a section that is only a title, and one with a canonical paragraph under it | ***non-canonical, then canonical*** — [R307](#r307), and the first is what a cover is made from |
| **S36** | `<Letter>7</Letter>` | ***canonical*** — **this REPLACES a green promise that asserts the opposite** — [R308](#r308) |
| **S37** | a section with a title and three paragraphs, enumerated | ***the enumeration is three and `parts()` is four*** — the title present in one and absent from the other — [R309](#r309) |

## <a id="order"></a>The order

***U211 → U212 → U213 → U220 → U214 → U215*** *(Phase One)* ***→ U216 → U217 → U218*** *(Phase Two)*. **U220 runs before U214 because a title is minted from paragraph residue, so the residue has to exist first.** **U219 blocks nothing and gates nothing; it is a ruling owed.**

---

# <a id="tracing"></a>Origin tracing — both directions

| requirement | lands in | seen as |
|---|---|---|
| [R274](#r274) specifically returns | ***WITHDRAWN*** | — |
| [R275](#r275) the level assigns | ***WITHDRAWN*** | — |
| [R276](#r276) one act, not two | **U211** · S32 | AE12 |
| [R289](#r289) the type validates only | **U211** · S3, S32 | **AE12** |
| [R290](#r290) the level holds | ***RULED*** — no change to the code | — |
| [R307](#r307) a canonical section | **U220** · S35 | AE18 |
| [R308](#r308) digits are canonical letters | **U220** · S36 | AE18 |
| [R309](#r309) enumerations are readings | **U220** · S37 | **AE18** |
| [R310](#r310) constants become fields | **U211** · S38 | AE12 |
| [R311](#r311) the segmenter sits on a type | **U211** · S38 | AE12 |
| [R312](#r312) how a pattern is held | **U216** · S24 | AE17 |
| [R313](#r313) every writing class | **U211** · S38 · **U217** | AE12 |
| [R314](#r314) the enum wall | ***RAISED*** — no change proposed | — |
| [R305](#r305) the parse binds | **U217** | **AE16** |
| [R306](#r306) a canonical paragraph | **U220** · S30 | AE18 |
| [R291](#r291) the type holds nothing | **U211** · S4 | AE12 |
| [R292](#r292) provability is a promise | **U211** · S32 · **U213** | AE12 |
| [R293](#r293) residue mints kinds | **U220** · S28, S30 | **AE18** |
| [R294](#r294) the level is looser | **U220** · S28 | AE18 |
| [R295](#r295) no claiming canonical ground | **U220** · S31 | AE18 |
| [R296](#r296) a word has a kind | **U220** · S25, S26, S27 | **AE18** |
| [R297](#r297) the word precondition restated | **U220** · S26 | AE18 |
| [R298](#r298) a canonical sentence | **U220** · S29 | AE18 |
| [R299](#r299) a title is residue | **U220** · S30 · **U214** | AE14 |
| [R277](#r277) the bind validates | **U212** · S5, S9 | **AE13** |
| [R278](#r278) a rebind re-reads | **U212** · S7 | AE13 |
| [R279](#r279) the five say what they are | **U213** · S10, S11, S12 | AE14 |
| [R280](#r280) a section needs a title | **U214** · S13, S15 | **AE14** |
| [R281](#r281) a title is a paragraph | **U214** · S14, S17 | AE14 |
| [R282](#r282) a book needs a cover | **U215** · S18, S19 | **AE15** |
| [R283](#r283) a cover is a chapter | **U215** · S20 | AE15 |
| [R285](#r285) a part lands at its level | **U217** | **AE16** |
| [R286](#r286) the stand-in | **U216** · S21–S24 | AE16 |
| [R315](#r315) not the copy | **U216** · S39 | **AE16** |
| [R316](#r316) everything is sealed | **U216** · S39, S40 | AE16 |
| [R317](#r317) a phrase is multiple words | ***RESOLVED*** — the collision removed | — |
| [R318](#r318) a canonical phrase | **U220** | AE18 |
| [R319](#r319) the phrase joins | **U217** | AE16 |
| [R320](#r320) where a phrase sits | ***OPEN*** — a ruling owed | — |
| [R321](#r321) a kind costs one declaration | **U220** | **AE18** |
| [R322](#r322) the type answers the canonical | **U220** · S41 | **AE18** |
| [R323](#r323) canonical is relative | **U220** · S41 | AE18 |
| [R324](#r324) a stanza needs no parse rule | **U220** · S42 | AE18 |
| [R325](#r325) chimerical conflict | ***DISSOLVED*** — no unqualified question | — |
| [R326](#r326) the level selects the type | **U217** · S43 | AE16 |
| [R327](#r327) dynamic, not instanceof | **U217** | AE16 |
| [R328](#r328) one compiler, written once | **U217** | AE16 |
| [R329](#r329) chimerical is not a code word | *a naming rule* | — |
| [R330](#r330) the compiler binds the level | **U217** · S44 | AE16 |
| [R331](#r331) the stand-in preserves types | **U216** · S44 | AE16 |
| [R332](#r332) a type holds no writing | **U211** | AE12 |
| [R333](#r333) instance holds type | *already true* | — |
| [R334](#r334) `finds` is owed for removal | ***OWED*** — waits for Doug | — |
| [R335](#r335) how a type is reached | **U217** · S41 | **AE18** |
| [R336](#r336) nothing was changed | *a record* | — |
| [R337](#r337) no statics | *a record* | — |
| [R338](#r338) 25 consts, three kinds | **U221** · S47 | — |
| [R339](#r339) the two singletons | **U221** · S46 | — |
| [R340](#r340) dead code | **U221** · S45 | — |
| [R341](#r341) the template consts | ***OPEN*** — a ruling owed | — |
| [R342](#r342) three names are mine | ***OPEN*** — names owed | — |
| [R287](#r287) very well tested | **U216** · S21–S24 · **U218** | **AE17** |
| [R284](#r284) the overloaded name | ***OPEN*** — a ruling, not a unit | — |
| [R288](#r288) the too-high case | **U219** — ***ruled*** · S33 | — |
| [R300](#r300) canonical defaults false | **U220** · S28 | **AE18** |
| [R301](#r301) a canonical book | **U220** · S28 | AE18 |
| [R302](#r302) kinds are enums | **U220** · S25, S26 | AE18 |
| [R303](#r303) the parts redraw the writing | **U216** · S34 · **U217** | **AE16** |
| [R304](#r304) the wrapper is in frame | **U217** | AE16 |

| actor | served by |
|---|---|
| [A16](#a16) the library author | U213, U214, U215 — *refused in the level's own words* |
| [A17](#a17) the framework author | U211 — *the knowing written once, on the type* |
| [A18](#a18) the author of live prose | U217 — **AE16** |

***Nothing drops.*** **Two requirements have no unit and both are marked** — one a name owed, one a design owed.

---

# <a id="what-is-seen"></a>What is seen

<a id="ae12"></a>**AE12** — ***a letter and a non-letter side by side*** — one answering with its kind and case, the other refused in one sentence, and the type having read nothing to do it. *Covers [R276](#r276), [R289](#r289), [R290](#r290), [R291](#r291), [R292](#r292).*

<a id="ae13"></a>**AE13** — writing that cannot be a letter, **refused at the bind**, where today it is bound and drawn. *Covers [R277](#r277), [R278](#r278).*

<a id="ae14"></a>**AE14** — ***a section with its title standing first, and a titleless one saying why it is not a section*** — and the title reached both ways, written and typed. *Covers [R279](#r279), [R280](#r280), [R281](#r281).*

<a id="ae15"></a>**AE15** — **the same figure at two scales**: a title at paragraph zero in a section, a cover at chapter zero in a book, the cover's own part zero a title. *Covers [R282](#r282), [R283](#r283).*

<a id="ae16"></a>**AE16** — ***Doug's own example, on screen.*** A paragraph of ordinary prose with a live word in the middle of it, and **that word standing among the words of the sentence it was written in** — nothing in the page naming a sentence to get it. *Covers [R285](#r285), [R286](#r286).*

<a id="ae17"></a>**AE17** — ***the adversarial page***: prose carrying bare numbers, stops immediately after a live element, two live elements adjacent, and a stand-in character written by hand — **all dividing correctly**. *Covers [R287](#r287). This is the one [the latent v1 defect](#the-latent-defect) demands.*

<a id="ae18"></a>**AE18** — ***a line of prose with its words marked by kind*** — the canonical ones plain, the punctuation and whitespace runs shown as what they are, **and a heading beside it standing as a non-canonical paragraph.** *The residue made visible is the residue made mintable.* *Covers [R293](#r293)–[R299](#r299).*

---

# <a id="risks"></a>Risks

<a id="k36"></a>**K36 — [the state section was read, not run.](#read)** *The failure of `$$` on invalid content, and `$Book` carrying two own types, are both **readings of the source** rather than measurements.* **[S9](#u212) exists to pin the current behaviour before it is changed**, and if the reading is wrong the plan says so rather than the code quietly disagreeing.

<a id="k37"></a>**K37 — DISSOLVED, not mitigated.** *It read: moving `build()` to the type moves state across an ownership line, and a shared type would answer for the wrong letter.* ***[R290](#r290) and [R291](#r291) remove the state entirely*** — **nothing is assigned, so there is nothing to own and nothing to be stale.** *Kept rather than deleted because the risk is what argued Doug's correction into the design.*

<a id="k38"></a>**K38 — `specify()` runs in the bond, where there may be nothing to read.** *A level's bond calls `specify()` after pushing its own type; `$$` constructs a bare instance and then binds.* **So a type that raises on empty content raises during construction**, which is [what the current shape may already do](#read). ***[U212](#u212) has to settle when `specify()` is entitled to run — and that is the sprint's sharpest seam.***

<a id="k39"></a>**K39 — a document that writes the stand-in character.** *This library will eventually contain a chapter **about** the parse.* **[S23](#u216) is that case**, and [D118](#d118) says an unrestored stand-in must be loud.

<a id="k40"></a>**K40 — the settled account is wrong in two places and this plan reads against it.** *[No `level` getter, no single walk.](#v1)* **Anything in [U219](#u219) that cites ch. 15 is citing an intention.**

***HALF DISCHARGED, and the half that closed did so inside this sprint.*** **The single shared walk now exists** — *[`utilities/Parser.tsx`](../../package/src/utilities/Parser.tsx), and all seven levels call `parser.parse`; the seven copies of `filter($$(one)(X)).map($$(one, X))` are gone.* **So ch. 15's *"one walk, written once, and it is a tool"* is a report rather than an intention, for the first time.**

***The other half stands: there is still no `level` getter, and the walk does not decide by level.*** *It decides by `accept`, which each level supplies* — **so ch. 15's *"LEVEL ALONE DECIDES"* remains an intention**, and so does its *"too high — it throws, naming both levels"*, which [U219](#u219) ruled away and [R345](#r345) then found refused one grade earlier, at the section's own specification. ***[The correction is owed to ch. 15](../the-semantics-of-books/15-the-levels-of-writing.md) and is filed there.***

<a id="k41"></a>**K41 — two copies of the framework loaded at once.** *[K35](28-the-block.md#k35), unchanged and still true.* **No import may cross between `src` and `.archive`.**

<a id="k42"></a>**K42 — the parse makes instances, and `$lift` hands out shared ones.** *[R250](27-composition.md#r250) named this and sprint 27 avoided it by making none; [R305](#r305) makes one per part per rung.* **[`particle.ts`](../../../chemistry/package/src/abstraction/particle.ts) takes the `direct` path — ***the instance IS the component*** — for anything that is not its class's registered template**, *so two parts of two different writings could be one object with one state.* ***[Solutions 28](../solutions/28-the-specimen-that-was-the-component.md) is this defect already met once, and its fix is one line: stamp what is handed out as a template of its own.*** **Thirty-one green promises did not see it the first time**, so the scenario is *one site cannot disturb another*, never *two parts differ*.

---

# <a id="open"></a>OPEN — rulings owed

| | |
|---|---|
| ***what the two `specification`s are called*** | [R284](#r284). **The member on `$Writing` and the thing a type hands back are the same word for different things.** *A proxy will stand in the code and be marked.* |
| ***whether `$TypeOfX` is branded*** | [D120](#d120). **All nine are mutually assignable today.** *`$TypeOfWriting<T>` where `T` is what it **finds** would close it and would let `$$` narrow without a cast — **and it is not what [D114](#d114) bans**, but it is close enough to ask.* |
| ***the too-high case*** | [R288](#r288), [U219](#u219). ***Design owed.*** |
| ***the second question*** | [R246–R248](27-composition.md#r246), still not built. **`canonical` answers it at letter and word grade and nowhere else.** |
| ***`interpret()`*** | **[R264](28-the-block.md#r264) was planned and never landed.** *[U217](#u217) rewrites `parts()` and should settle whether the write and the read are separated or whether the separation is dropped from the record.* |

---

---

# <a id="where-things-stand"></a>Where things stand

***2026-08-29, end of the first working session. Gate run in the same message as this claim.***

| | |
|---|---|
| **`tsc` on `src`** | ***0 errors*** |
| **`npm run test` (vitest)** | ***45 files, 461 tests, 461 passing*** |
| **baseline this session opened on** | *45 files, 461 tests, 461 passing* — **no promise gained or lost** |

## <a id="done"></a>Done

***[U221](#u221) — the sweep, SCOPED CORRECTLY on the second attempt.***

***The first attempt read "no consts in any file" literally and deleted [`utilities/Html.ts`](../../package/src/utilities/Html.ts).*** **Doug: *"Oh god, I mean in the classes that represent writing. That's what a utility looks like. Put Html back!!!"*** *It was restored and the gate was green with it in.* ***Recorded rather than smoothed over*** — *a general sentence is scoped by the subject he was working on, and existing code has survived every prior session for reasons not visible in the file.*

**And the rule that scopes it, in his words:** ***"Pretend we are object oriented. Pretend we might need to override almost anything! We need polymorphism."***

| | |
|---|---|
| ***`said` and `broken`*** | **onto `patterns`**, the incumbent name `$Letter` already carries — ***no invented member***, and a subclass can now replace either |
| ***`graphemes`, twice*** | **now `protected graphemes` on `$TypeOfLetter` and on `$Word`** — *a subclass can segment differently, which it could not before.* **`$TypeOfLetter` is cached by name so there is one, ever; `$Word` pays one per word** |
| ***`createElement`*** | **removed from `Writing.tsx`** — an unused import |
| ***zero module consts remain in the writing classes*** | *only the `export const X = $($X)` template pairs, which are [the stated convention](04-the-member-audit.md) and [R341](#r341)'s open question* |
| ***`utilities/` untouched*** | **`Html.ts` and `Lib.tsx` are utilities and stay whole** |

***Doug's own edits, landed mid-session and followed through:*** **`$TypeOfWriting` deleted** — *`$Type` is the type of writing and its `specifically` takes the writing* — **and `canonicalForm` introduced on `$Type`.** *The nine types and one test moved from `finds` to `canonicalForm`; [R334](#r334) is closed by deletion.*

## <a id="the-bound-field"></a>The defect this session found — ***owed to [Solutions](../solutions/.cover.md)***

***`canonicalForm` arrived as a FIELD and did not work; as an ACCESSOR it does.*** **Measured, not guessed:**

```
ASKED $Letter | carried [ [ '$TypeOfLetter', 'bound', false, 'object' ] ]
```

***A chemical's field holding a CLASS comes back as a function named `bound`***, so `canonicalForm === $Letter` was false at every call site and **twenty-one tests failed with *"This writing is not a $Letter — it carries $TypeOfLetter"*** — *a message that names the right type and rejects it.*

**`patterns`, holding regexes, is a field and is fine. `finds`, a getter, was fine. The transformation is specific to a field whose value is a class**, *which is why the same member works in one form and not the other.* ***Run `/ce-compound` on this before it is met a second time.***

## <a id="next"></a>Next

**[U211](#u211)–[U215](#u215), [U220](#u220) are unstarted.** *[R341](#r341) — whether the 19 template consts go — and [R342](#r342) — Doug's words for `seal`, `restore` and the token — are the two rulings that stand between here and the rest of the sweep.*

---

# <a id="the-reading-before-work"></a>What twenty-five documents changed

*Doug, 2026-08-29: **"I also want you to read 20 relevant files to what you are doing including branch documents, compound documents, sprint documents and primary source before you get to /ce-work."** Twenty-five were read. **One of them changes the work.***

## <a id="fourth-appearance"></a>[Solutions 16](../solutions/16-the-parse-that-woke-its-own-parents.md) is about the code written this session

***It has been filed three times and its specification is exact:***

> **"A reading that is called during a render must be held. Not for speed — for termination."**
> **"Any getter whose body contains `$(<…/>)` is a reading, not an accessor. It may be called from a suite, a compiler or a validator freely; IT MAY NOT BE CALLED FROM A VIEW."**

***Grepped. Three constructions now sit inside `parts()`:***

| | |
|---|---|
| [`Document.tsx:31`](../../package/src/writing/Document.tsx) | `$(<Section>{loose}</Section>)` — **written this session**, for the auto-wrap |
| [`Section.tsx:25`](../../package/src/writing/Section.tsx) | `$(<Paragraph>{text}</Paragraph>)` — **written this session**, for text-as-one-paragraph |
| [`Word.tsx:29`](../../package/src/writing/Word.tsx) | `$(<Letter>{segment}</Letter>)` — ***predates this session*** |

***So the auto-wrap Doug ruled is correct and the way it is built is the fourth appearance waiting to happen.*** **v1's answer is the held reading** — [`$Writing.reading()`](../../package/.archive/writing/Writing.tsx), kept per instance against the writing it came from, in the draw path alone — *and [R264](28-the-block.md#r264)'s `interpret()` is the cleaner form of the same idea, planned and never landed.*

## <a id="scope-correction"></a>And [Solutions 14](../solutions/14-the-green-that-exercised-nothing.md) corrects this chapter's own reporting

***"461/461" has been stated all session without its scope, and the scope is the whole content of the claim:*** **no test renders a book.** *All three appearances of the loop had green suites and dead pages.* **Every green in this chapter proves compatibility, not survival under a paint.**

## <a id="what-else-carried"></a>What the other chapters carried

| | |
|---|---|
| [Solutions 13](../solutions/13-the-chapter-that-wrote-its-sections-twice.md) | ***building the model inside a view makes two populations of one object*** — *four sections built where two were written, green for two sprints.* **Doug on it: "There should not be any form of self-check. That is just a terrible code smell."** |
| [Solutions 31](../solutions/31-the-writing-that-drew-and-held-nothing.md) | **a bond constructor is found by CLASS NAME and is not inherited** — *an auto-wrapped `$Section` is safe only because `$Section` declares one.* ***And a base whose bond does more makes this worse, not better.*** |
| [Solutions 29](../solutions/29-the-bond-that-woke-the-tree-it-was-building.md) · [12](../solutions/12-the-writing-that-looped-its-page.md) | **two further render loops, both cured in the framework** — *a bond writing while something composes it, and props rebinding on an inline child.* **Three mechanisms, one symptom; check which shape before reaching for a cure.** |
| [Solutions 20](../solutions/20-the-narrowed-prop-that-disowned-its-base.md) | ***declare a `$` prop at the BASE's type, never at the value's*** — *narrowing one inverts the computed props type and thirty errors appear in files nobody touched.* |
| [Solutions 2](../solutions/02-the-footnote-that-wore-zero.md) · [17](../solutions/17-the-regex-that-remembered-where-it-stopped.md) | **ask the nearest thing that knows; counting starts at one; a `/g` regex is a cursor** — *all three already carried into [D117](#d117) and [R312](#r312).* |

## <a id="state"></a>The state, with its scope attached

| | |
|---|---|
| **`tsc` on `src`** | ***0 errors*** |
| **vitest** | ***45 files, 472 tests, 472 passing*** — up from 461; **11 new promises for the seven type checks** |
| ***what it exercises*** | ***unit construction and specification only.*** **No test renders a book, so nothing here speaks to [the loop](#fourth-appearance).** |

---

# <a id="the-parser"></a>The Parser — built 2026-08-29

*Doug: **"There is no interpret. The parts function is the interpret function. If you need anything, maybe you need a Parser.ts that exports a Parser class that can be used like Html, that provides the mechanical part of the functionality here. Remember not to have attributes in there. I would say annotations come out."*** *And: **"There is no held tree. Have it parsed every time parts is called. This isn't an object with a lifetime. You know that. This is react."***

***[R264](28-the-block.md#r264) — `interpret()` — is DEAD by ruling.*** **`parts()` is the interpret function.**

## <a id="the-invariant"></a>The invariant that makes a fresh parse per call safe

***[Solutions 16](../solutions/16-the-parse-that-woke-its-own-parents.md)'s held reading was needed because the parse ADOPTED its parts.*** **Its own discharge says so:** *"What is still true, and worth keeping: **a reading may not write to what it composes.** The limit was never about parents."*

***So a fresh parse every call is safe exactly as long as the parse writes nothing*** — **no parent, no index, no role.** *Grepped after the build: **zero writes** across `writing/`, `book/` and the parser.* **That is the line to hold, and the three prior appearances are what it costs to lose it.**

## <a id="what-the-parser-is"></a>What it is

*Doug, on the first draft: **"Not crazy about those names. First of all, why doesn't it take $Writing or strings? Weird that it takes a block. Let's assume $Writing. Don't like written as a name. Here parts would be parse right? This is a parser... Please make this a standard parser."***

**[`utilities/Parser.tsx`](../../package/src/utilities/Parser.tsx) — a class of methods with no fields**, beside `Html` and used the same way. ***It takes a `$Writing` and its names are shift-reduce's own.***

| member | what a parser calls it |
|---|---|
| `tokens(of)` | ***the lexer*** — the writing's elements as tokens, with **annotations, nulls and empties removed** |
| `parse(of, accept, reduce)` | ***the walk*** |
| `accept(token)` | *a token that already stands at the target level* — **it is a part, and it closes what is held** |
| `reduce(held)` | *what the held tokens become* — **the level decides** |
| `text(held)` · `elements(held)` | *a held run read two ways* |

***`token` is Doug's own word*** — *"replace the word with a token", "the id that is in the token".* **The rest is standard shift-reduce vocabulary rather than anything coined here**, which is the point: *a reader who has written a parser already knows what `accept` and `reduce` mean.*

**Every call site is now the same three lines:**

```
return parser.parse(from,
    token => $$(token)($Paragraph) ? $$(token, $Paragraph) : undefined,
    held => [$(<Paragraph>{parser.elements(held)}</Paragraph>) as $Paragraph]);
```

***Seven levels, one walk.*** **It was written seven times** — `filter($$(one)(X)).map($$(one, X))` — *which is [the unit-of-code rule](../designing-inexplicable-phenomena/07-the-unit-of-code.md) broken in the one place nobody had looked.*

## <a id="what-each-level-composes"></a>What each level does with a run

| level | accepts | a reduction becomes |
|---|---|---|
| `$Word` | a letter | ***its graphemes*** |
| `$Sentence` · `$Paragraph` · `$File` | a word · a sentence · a document | ***nothing yet*** — *the division below paragraph is not built* |
| `$Section` | a paragraph | ***ONE paragraph*** — **Doug: "the first to last character is the text of a paragraph and that is it"** |
| `$Document` | a section | ***ONE section*** — **Doug: "a document with a title and bunch of paragraphs can be auto-wrapped in one section, but that is it"** |
| `$Book` | a chapter | *nothing* — **not ruled** |

## <a id="parser-state"></a>The state, with its scope

| | |
|---|---|
| **`tsc` on `src`** | ***0 errors*** |
| **vitest** | ***45 files, 474 tests, 474 passing*** — *461 at session open; **13 new promises*** |
| ***what it exercises*** | **construction, specification, and both auto-wrap rulings.** ***No test renders a book***, so nothing here speaks to a paint |

## <a id="four-questions"></a>Four questions about the parser, answered by measurement

*Doug: **"Did you integrate it into the parts calculations that need it? Does it handle binding or do you do that elsewhere (I have no opinion so don't change anything)? Does it handle placing stray writing at the appropriate level and then binding? How do you choose the type if multiple? I would look for right level first and then look for types that match in descending order."***

<a id="r343"></a>**R343 — integrated at every level that composes.** ***Seven files call `parser.parse`***: `$Word`, `$Sentence`, `$Paragraph`, `$Section`, `$Document`, `$File`, `$Book`. **No level composes any other way.**

<a id="r344"></a>**R344 — the parser NEVER binds, and nothing was changed.** *Doug: "I have no opinion so don't change anything."* **Binding lives in each level's `accept`** — `$$(token, $Paragraph)` — *so the parser decides **where** a token goes and the level decides **what it becomes**.* **Recorded rather than altered.**

<a id="r345"></a>**R345 — stray writing is REFUSED, not placed. This is the honest no.** *A word written inside a section would be carried into `held` and become a child of the auto-wrapped paragraph* — **but [`$TypeOfSection.specifically`](../../package/src/writing/Section.tsx) requires every non-parenthetical writing in the block to be a paragraph, so it raises before `parts()` is ever asked.**

***Placing it is [R315](#r315)–[R316](#r316)'s token work and it is not built.*** **The two rulings are in tension and the tension is real:** *"we throw an error if anything in the block is not a paragraph" refuses a stray word; "the parser knows that that word is in a sentence" places one.* **Today the refusal wins at section grade and the placing has nowhere to happen.**

<a id="r346"></a>**R346 — the type is chosen by level first, then in descending order.** *Doug's rule, built.* **[`$$`](../../package/src/utilities/Lib.tsx) filtered to the first match in WRITTEN order until now;** *it now filters to every carried type standing at the asked level and takes the **most derived**.*

| | |
|---|---|
| **the promise** | writing carrying `<Type>Document</Type>` **and** `<Type>Chapter</Type>`, read as a `$Document`, ***binds the `$Chapter`*** |
| **and its pair** | ***written order does not decide it*** — the same two, written the other way round, answer the same |

**476 tests, `tsc` 0.**

## <a id="one-kind"></a>A piece of writing is ONE kind of writing

*Doug: **"You know what? I think we are doing this wrong. On writing, put type. It's allow to be annotation or an ancestor of one of the 7. You can only have one of the 7. validate it. So book, because it is a file, is a fine type. But it cant be a book and chapter."***

<a id="r347"></a>**R347 — `type` on `$Writing`, and it is the most derived level type carried.** *A getter, not a field* — **[a field holding a class comes back `bound`](#the-bound-field), and this session paid twenty-one tests to learn it.**

<a id="r348"></a>**R348 — one of the seven, counted by LINEAGE and not by instance.** ***Measured before building, because it decides whether every existing book is valid:*** **`$Book`'s bond calls `super.$File`, which pushes `$TypeOfFile`, and then pushes `$TypeOfBook`.** *So every written book carries **two** types.* ***Doug's own sentence settles it*** — **"book, because it is a file, is a fine type"** — *so the rule is one **lineage**, and a refinement of a level is that level.*

**The check names no class and holds no roster:** *a carried type is a level type when it answers `canonicalForm`; the deepest one is the type; and **every other must be an ancestor of it**.* ***One line, no seven-item list, and a kind the framework has never heard of is handled.***

| | |
|---|---|
| `<Type>Book</Type>` alone | ***valid*** · `type` is the Book type |
| a written `<Book>`, carrying **File and Book** | ***valid*** — one lineage |
| `<Type>Document</Type>` + `<Type>Chapter</Type>` | ***valid*** — Chapter refines Document · `type` is the Chapter type |
| ***`<Type>Book</Type>` + `<Type>Chapter</Type>`*** | ***REFUSED*** — **Doug's own example** |
| ***`<Type>Word</Type>` + `<Type>Letter</Type>`*** | ***REFUSED*** |

<a id="r349"></a>**R349 — and this OVERRIDES [R273](28-the-block.md#r273)'s chimerical level.** *A promise in [`annotation.test`](../../package/src/tests/annotation.test.tsx) asserted that writing told it is both a Word and a Letter **answers to both names**.* ***That promise is gone***, replaced by one that refuses it. **Annotations may still be many; LEVELS may not** — *which is [C17](27-composition.md#c17) narrowed by its own author.*

**479 tests, `tsc` 0.**

## <a id="the-member-audit-owed"></a>The audit of what THIS session put on `$Writing`

*Doug: **"Bubble up the members you invented to discuss."** **Grepped first**, which found the ruling that decided it.*

<a id="r350"></a>**R350 — `protected` does not excuse a member, and that is [ruled](25-the-specification.md).** *Doug, Sprint 25: **"I only asked for cache… I don't want a polluted interface even in first person perspective. protected does not do it."*** **Read against [C26](27-composition.md#c26) — *"you have this desire to handle everything at the writing level"* — it decides the audit before it is argued.**

***Five members went onto `$Writing` while building [R347](#r347). Three came back off.***

| | | |
|---|---|---|
| `type` | **Doug's word** — *"On writing, put type"* | ***stays*** |
| `specifying(kind)` | ***MINE*** — *puts a type in and drops its ancestors, so [R348](#r348) holds by construction rather than by nine copies* | **stays, name owed** |
| `refining(one)` | ***MINE*** — *reaches a type's own comparison without naming `$Type`* | **stays, name owed** |
| ~~`form`~~ · ~~`levels`~~ · ~~`stands`~~ · ~~`deepest`~~ | *mine, and they duplicated reasoning `$Lib` already had* | ***REMOVED*** |

<a id="r351"></a>**R351 — the comparison moved to `$Type`, where the knowing belongs.** **`refines(other)`** — ***mine, name owed*** — *answers whether one type stands below another.* **[`$Lib`](../../package/src/utilities/Lib.tsx) already sorted carried types by prototype depth**, *and `$Writing` cannot call it: `Writing → Lib → Type → Annotation → Writing` is [D108](27-composition.md#d108)'s cycle.* ***So the reasoning goes on the type and `$Writing` reaches it structurally, exactly as `parenthetical` does.***

<a id="r352"></a>**R352 — and one thing found by the grep is RAISED rather than acted on.** *[Sprint 25](25-the-specification.md) records Doug saying **"I NEVER wanted specification and have had you replace it before and it grows like a virus. CUT IT. Specification. Validation. Specify. Validate."*** — **while [R206](25-the-specification.md#r206) in the same chapter reads *"the domain word is `specification`"* and [R207](25-the-specification.md#r207) renames `valid()` TO `specify()`.**

***Those point opposite ways and the record is compressed.*** **Both are listed as still owed.** *Today's **"On writing, put type"** may be that sweep arriving — **or it may not**, and acting on a reading of a contradiction is how a word gets replaced a third time.* ***Doug's ruling is owed and nothing was renamed.***

**485 tests, `tsc` 0.**

---

# <a id="the-specification"></a>The Specification — built 2026-08-29

*Doug: **"It's a regular class, but it works like this: `Specification<T extends $Writing>` / `parent?: Specification` / `${x}(writing: T)` — all members with $ in front should be methods that can run. And then what we do is run the methods. And in general when you subclass type you either subclass specification and change the methods or decorate and adapt it providing a new interface."***

## <a id="variance"></a>The measurement the design rests on

***Doug flagged variance and he was right to.*** **Measured on TS 5.9.3:**

| declaration | `Spec<$Letter>` → `Spec<$Writing>` |
|---|---|
| ***`$one(w: T): void {}` — a METHOD*** | ***assignable*** |
| `$one: (w: T) => void` — a property | **refused** |
| `class Spec<in T>` — a variance annotation | **refused** |
| ***`override getSpecification(): Spec<$Letter>`*** | ***assignable*** |

***So the convention has TWO halves and only one of them is the `$`.*** **It is a `$`-prefixed METHOD.** *Write the same rule as a field holding an arrow and the hierarchy stops being assignable* — **which is [Solutions 20](../solutions/20-the-narrowed-prop-that-disowned-its-base.md) from the other side**, *where a narrowed `$` **property** produced thirty errors in five untouched classes.*

## <a id="what-it-does"></a>What it is

**[`notation/Specification.ts`](../../package/src/utilities/Specification.ts) — a plain class, never a chemical.** *`$Type.getSpecification()` returns one and `specifically` runs it.*

| | |
|---|---|
| **a rule** | *a `$`-prefixed method taking the writing.* **It uses `$check` and throws when it fails** — Doug: *"each method should use check and the thing should throw if failed"* |
| **`check(writing)`** | *runs every rule, **collects** every reason, raises **once*** — and ***returns the names of the rules that ran***. *Doug: "the purpose of returning the tests is to learn which ones have run."* |
| **disabling** | ***a rule returns `false`*** and is absent from what comes back |
| **`parent`** | *another specification, run first* |

## <a id="three-routes"></a>Three routes, all exercised

***Doug asked whether the design actually helped, and the honest first answer was no*** — **seven specifications existed, `parent` was set nowhere, and no type overrode another's.** *That was [Solutions 14](../solutions/14-the-green-that-exercised-nothing.md) a fourth time.* **So all three were tried:**

| | | |
|---|---|---|
| **subclass** | `$TitleSpecification extends $ParagraphSpecification` **+ `$words`** | *the parent's `$unbroken` runs without being named* |
| **decorate** | `$QuotedSpecification` **holds** a paragraph's as `parent` | *no inheritance between them* |
| **disable** | a rule **returns `false`** | *its neighbours are untouched* |

**Both kinds live in [`.spec/paragraph/DerivedSpec-Title.tsx`](../../package/src/tests/.spec/writing/Paragraph.tsx)**, *typechecked and drawn.*

## <a id="itemized"></a>The rules, itemized

*Doug: **"itemize the checks maximally... We should have a check for having a type, we should have checks for type specific things. Writing should be enforced in the type specification."***

| specification | rules |
|---|---|
| ***the base*** — every type inherits it | **`$type`** *the writing has one* · **`$kind`** *it is one kind of writing* |
| letter · word · sentence | `$grapheme` · `$unbroken` · `$stops` |
| paragraph · section · document · file | `$unbroken` · `$paragraphs` · `$sections` · `$documents` |

***`$Writing.specify()` is now three lines*** — *run the base specification, then every carried type's.* **The writing-level rules moved into the type specification, which is what Doug asked for and what a type-only import made possible.**

## <a id="tests-found"></a>What the tests found before they went green

<a id="r353"></a>**R353 — rules ran DERIVED-FIRST and had to be reversed.** *The prototype walk starts at the most derived, so a level's own rule ran before `$type` and `$kind`.* **The base's rules must come first** — *"is one grapheme" has to fail before "what kind is it" is meaningful.*

<a id="r354"></a>**R354 — a base rule declared with NO parameter cannot be overridden by one that takes the writing.** *`TS2416: Target signature provides too few arguments.`* ***So every rule declares `(writing: T)` even when it ignores it*** — **[Solutions 20](../solutions/20-the-narrowed-prop-that-disowned-its-base.md)'s lesson again: declare at the base's type, never at the value's.**

<a id="r355"></a>**R355 — decoration ran the base rules TWICE.** *`rules()` deduped within a prototype chain and not across the `parent` link.* **Now deduped across the whole chain, parent order kept and an own rule overriding in place.**

## <a id="bind-validates"></a>[R277](#r277) closed — the bind validates

*Doug: **"It would be enough just to check the type on bind right?"** + "if you can prove that the held one would have had to have run this, then it doesn't need to be rerun on bind."*

***Writing told what it is never checks itself at construction*** — **`$Writing`'s bond lifts the type and does not call `specify()`** — *so the check belongs where something binds to it.* **`bind` runs the bound instance's own type against the incoming writing, and nothing else.**

*Promised three ways: writing that cannot be a letter is refused, one that can is bound, and **a rebind is checked too** — a bound letter handed two graphemes raises and keeps its old copy.*

## <a id="specification-state"></a>The state, with its scope

| | |
|---|---|
| **`tsc` on `src`** | ***0 errors*** |
| **vitest** | ***47 files, 528 tests, 528 passing*** — *461 at session open* |
| **the spec folder** | ***9 folders, 29 examples, every one DRAWN*** |
| ***what it exercises*** | **construction, specification, all three specification routes, and a paint** — *the "no test renders a book" caveat is gone* |

---

# <a id="handoff"></a>WHERE THINGS STAND — handoff, 2026-08-29

***Read this before touching anything. The working copy is the truth; this says what it means.***

## <a id="handoff-state"></a>The state, honestly

| | |
|---|---|
| **`tsc` on `src`** | ***0 errors*** |
| **vitest** | ***50 files, 552 tests, all passing*** |
| **at session open** | *45 files, 461 tests* |

***The index landed.*** **`get index(): number` on `$Writing` satisfies [`$Composition$`](../../package/src/writing/Composition.tsx) for all nine**, and *[the parse numbers what it composes](../../package/src/utilities/Parser.tsx) as a final pass* — **which is where Doug said to put it.**

## <a id="handoff-index"></a>The index — ***and the obvious implementation is FORBIDDEN***

*Doug: **"I just put an index on composition. Tell the next group to implement that. It shouldn't be hard. It will be important for references."***

***DONE, and the write does NOT loop — measured.*** **The parse assigns `$index` to each part as a final pass and the suite stayed green, including the 29 specs that paint.** *[Solutions 16](../solutions/16-the-parse-that-woke-its-own-parents.md)'s wall does not fire here, and that is a measurement rather than an argument.*

***What remains OWED is the numbering rule.*** **The parse numbers from ZERO, in written order** — *promised in [`tests/index.test.tsx`](../../package/src/tests/index.test.tsx)* — **and [the member audit](04-the-member-audit.md) says the opposite**: *"counting starts at 1; a special first, one that stands for the whole, sits at 0."* ***Both are Doug's and nobody has picked.***

***And it is still not `parent.parts().indexOf(this)`.*** **There is no parent link anywhere in the model, on purpose:** *[Solutions 16](../solutions/16-the-parse-that-woke-its-own-parents.md), three appearances, ending in a heap death — **"a parse may not be given a parent while it mutates what it makes, AND GIVING THE PARENT IS ONE OF THE MUTATIONS."*** **Grepped this session: `.parent =`, `.index =`, `.role =` appear nowhere in `writing/`, `book/` or the parser.**

**Also easy to miss:** *`index()` is argumentless and returns data, so [it is a PROPERTY](../designing-inexplicable-phenomena/08-the-order-of-a-class.md) and belongs in the one-line stack, not among the methods.*

***Prior art to read before designing it:*** **[the member audit](04-the-member-audit.md) closed the numbering question once** — *"counting starts at 1; a special first, one that stands for the whole, sits at 0"* — **and [the settled account](../the-semantics-of-books/15-the-levels-of-writing.md) then removed numbers entirely**: *"There is no counting column, because nothing carries a number. A number is something a **reference** holds — that is what a `$Location` IS."* ***Those two disagree, both are Doug's, and the next team should not pick silently.***

## <a id="handoff-audit"></a>The audit Doug asked for

*Doug: **"I need you to prepare the next team to audit your work so that types are solid based on the design principles we are implementing."***

***The principles are written down now.*** **[The Type and the Instance](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md) is the chapter to audit against** — *written because the same understanding was rebuilt four times in one session.* **Its one question decides every member: *would this be the same for every piece of writing of this type?***

| | what to check |
|---|---|
| **1** | ***the carried list comes off `$Writing`*** — **Doug agreed**: *"We can remove writings carried list."* It is meaning on the instance, and [`specifying()`](../../package/src/writing/Writing.tsx) exists only to keep it tidy. **They go together.** |
| **2** | ***the seven levels set their type DIRECTLY*** — *"$Letter–$File, book chapter will set their type directly, but the one on writing has to search."* **Not done.** |
| **3** | ***`$Letter.build()` stops classifying and asks its type*** — *the value is the instance's, the procedure is the type's, and today the procedure sits on the letter.* |
| **4** | ***nothing may be cached*** — *"a piece of writing can change type if it's an input annotation."* **Every reading is fresh.** |
| **5** | ***`$Book` and `$Chapter` have no `getSpecification()` of their own*** — *correct today, wrong the moment a book has a rule a file does not.* |

## <a id="handoff-references"></a>References — ***the next subject***

*Doug: **"prepare for references. You can tell them to read about v1 references and see that they are a mess. We are going to brainstorm and build a more unified abstraction for it."***

***Measured, not asserted*** — **[`.archive/reference/`](../../package/.archive/reference/), 9 files, 323 lines:**

| | lines | imports |
|---|---|---|
| `Referent` · `Reference` · `Catalogue` | **7 · 8 · 10** | *1 · 1 · 3* — **three interfaces carrying almost nothing** |
| `Highlight` · `Path` · `Link` · `Location` | 34 · 34 · 37 · 38 | 5 · 5 · 5 · 6 |
| ***`CardCatalogue` · `IndexCard`*** | ***68 · 87*** | ***8 · 10*** |

***The shape of the mess is in that table:*** **the three things that ought to carry the abstraction are the three smallest files, and the two largest name ten things each.** *A `$Location` holds a number, a `$Path` chains, an `$IndexCard` stands for a book, a `$CardCatalogue` holds cards, a `$Link` knows a router — **and nothing says which of those is the primitive.***

***Read also:*** **[The Catalogue](05-sprint-47--the-catalogue.md)** *(the sprint that built them)*, **[On Subjects](../../../../.claude/library/bookkeeping/07-on-subjects.md)**, and **[Composition and Collection](../the-semantics-of-books/09-composition-and-collection.md)** — *which draws the line the new abstraction must respect:* **composition contains, collection references.**

***And the index is the first piece of it.*** **[R251](27-composition.md#r251) said so three sprints ago** — *"composition affords a catalogue; it does not declare one; the catalogue is a READING derived from `parts()`."*

## <a id="handoff-wrong-turns"></a>Wrong turns already taken — ***do not retry these***

| | |
|---|---|
| ***`$Writing<T>`*** | **BANNED.** *"NEVER restore WRITEING&lt;T&gt; — put a HUGE ban... It would allow a letter of section to be created."* [D114](#d114). **v1 has it; being in the archive is not an argument.** |
| ***a type holding or returning writing*** | *`finds` was reintroduced twice and deleted twice.* **"NO type doesn't hold or return the writing."** [R332](#r332) |
| ***a class-valued FIELD on a chemical*** | **comes back as a function named `bound`** — *twenty-one tests, [Solutions 32](../solutions/32-the-field-that-held-a-bound-class.md).* **Accessor, never field.** |
| ***a base specification run BESIDE the type's*** | *runs the base rules twice.* **One specification, and it is the type's.** |
| ***deleting `utilities/Html.ts`*** | *swept on a literal reading of "no consts in any file".* **"I mean in the classes that represent writing. That's what a utility looks like."** |
| ***constructing a chemical inside a reading*** | *[Solutions 16](../solutions/16-the-parse-that-woke-its-own-parents.md), three appearances.* **`parts()` may construct; it may not WRITE.** |

## <a id="handoff-names"></a>Names owed

**`specifying`** *(on [`$Writing`](../../package/src/writing/Writing.tsx) — how a class joins a type, and the mechanism the whole feature rests on)* · **and whether `specification` survives at all** — *[R352](#r352) records two rulings in [Sprint 25](25-the-specification.md) pointing opposite ways, and nothing was renamed on a reading of a contradiction.*

***`refines` was listed here and is struck: it no longer exists.*** **Grepped across `src`: zero occurrences.** *It went out when the specification landed — the comparison [R351](#r351) put on `$Type` was dissolved by `canonicalForm` plus the prototype walk in [`$Lib`](../../package/src/utilities/Lib.tsx), which needs no such member.* ***A name is only owed while the member is real***, and this list had outlived one of its entries.

## <a id="handoff-opening"></a>How to open

***Read this section, then [The Type and the Instance](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md), then run the gate.*** **Do not act on this chapter's memory of the code** — *the working copy is the truth.*

***AND THE SENTENCE THAT STOOD HERE WAS WRONG, WHICH IS WHY THE INSTRUCTION ABOVE EXISTS.*** *It read "the working copy is **currently red for one reason**" and never named the reason.* **Re-measured 2026-08-29 by the session that opened on it:**

| | |
|---|---|
| **`tsc` on `src`** | ***0 errors*** |
| **lib vitest** | ***50 files, 552 tests, all passing*** |
| **chemistry vitest** | ***65 files, 813 tests, all passing*** |

***Scope, attached, because [a number without it is not evidence](../solutions/14-the-green-that-exercised-nothing.md):*** **`@dna-platform/chemistry` resolves by symlink into the working copy**, *which stands 867 lines ahead of `HEAD`* — **so that green is against uncommitted framework code**, and a clone at `HEAD` would not reproduce it.

***THE WHOLE SPRINT IS UNCOMMITTED.*** **23 modified and 46 untracked files under [`package/`](../../package/)** — *[`utilities/Parser.tsx`](../../package/src/utilities/Parser.tsx), both specification classes, the entire 29-example [`.spec/`](../../package/src/tests/.spec/) folder and fourteen test files* — **plus 20 modified and 12 untracked in [chemistry](../../../chemistry/package/).** *Everything this handoff describes exists on disk and nowhere else.* ***That is the first thing to settle, and it is Doug's call.***
