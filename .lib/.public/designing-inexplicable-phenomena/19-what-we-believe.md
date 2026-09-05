# What We Believe

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***The chapter name is a PROXY; Doug's to rename.***

---

***Written 2026-09-05 at the end of the port, when v2.1 was deleted and the `2` came off every folder.*** **Every principle below is one Doug ruled in this session or an earlier one, followed by what it cost in code.** *Where a principle is ours rather than his, it says so. Where a measurement forced it, the measurement is given.*

**The state it describes: `tsc` 0 · 78 promises · 47 files · zero stray declarations · zero casts on a strongly-typed read.**

---

## <a id="the-purpose"></a>I · WHY ANY OF IT

> ***Doug:*** **"The interfaces are so that the whole system can be replaced at any part. The shallow inheritance with type system makes `$Writing` relatively easy to subclass and apply in many places because you have types to fold in to achieve your specifically. Specifications and specifically are so types can be causal. Since libraries are relatively static, we will mostly check the thing statically on build giving this system actually build time power. We're making a little compiled language."**

| | the purpose | what it demands |
|---|---|---|
| **P1** | ***any part can be replaced*** | every ask goes through an interface |
| **P2** | ***`$Writing` is easy to subclass*** | inheritance stays shallow; a kind FOLDS a type in |
| **P3** | ***types are causal*** | `specifically` may act, not only judge |
| **P4** | ***checked at build*** | the check is a build cost and may be paid |

***And the two anchors under all of it:*** **this is the PUBLIC LIBRARY, and it is CLOSED UNDER BOOKS.** *Reach for anything and what you get is a book — which is why `book()` and `type()` both terminate at the thing with nowhere left to belong but itself.*

---

## <a id="the-shape"></a>II · THE SHAPE OF A FILE

**P5 · THE FILE IS THE WORD, AND A WORD IS FOUR DECLARATIONS.** *`$X$` the interface · `$X` the class · `$TypeOfX` the type · `XSpecification` the rules.* ***Eight where a canonical reference stands*** — `$$X$` · `$$X` · `$TypeOf$X` · `$XSpecification`.

**P6 · NOTHING ELSE IS DECLARED.** *Doug on the one that was:* **"WARTS!!! Who asked for this? What is this? NO"** — *and `Routed` is now gone, with `react-router` behind it.* **Measured: zero stray declarations across all 42 files.**

**P7 · THE COMPONENT EXPORTS ARE THREE LINES AND ALWAYS THE SAME.** `export const X = $($X)` · `export const TypeOfX = $($TypeOfX)` · `const typeOfX = TypeOfX`.

**P8 · A REFERENCE KIND GETS NO COMPONENT EXPORT.** *Its name would be `$Letter`, which is the class beside it.* **Doug:** *"we don't export. They aren't unreachable. Just assign that as needed… you can call it `$Letter` in a file that doesn't need `$Letter` as a class."* ***And `$($X)` always answers the same component*** — one static template per class, the lifted component cached on it — **so a local like that is stable and the DI registry, which keys on the component object, stays sound.**

**P9 · A FILE THAT BREAKS THE FOUR OWES A SENTENCE.** *Four do, and each has one:*

| | | |
|---|---|---|
| `Writing.tsx` | *3 interfaces, 3 classes, 1 specification, **no type*** | **the base vocabulary.** A base carries no type; a type is what a KIND carries |
| `Composition.tsx` | *interface + class* | ***Doug:*** *"composition can be different. It is a semantic structure to help implement the seven and it's there if something needs to be composition too, but I think it does need an interface"* |
| `Format.tsx` · `Theme.tsx` | *interface + class* | ***a format is not writing***, and a specification is a specification of writing |
| the ten dresses | *class, and `AnchorFormat` an interface* | *same* |

---

## <a id="the-class"></a>III · THE CLASS IS A SHELL

**P10 · THE TYPE CARRIES THE COMPLEXITY; THE CLASS IS A SHELL.** ***Doug:*** *"the type should carry most of the complexity and the classes are shells for another user to subclass because they will feel more normal."*

**P11 · A CLASS NEVER EXTENDS THE KIND ABOVE IT.** ***Doug:*** *"You are supposed to work on the basic types. They should extend composition"* **and, earlier,** *"`$Cover` extends `$Writing`"* **and** *"assume regular `$` class extends writing, and carry the hierarchy in the others."* ***Together: the chain is `$Chemical → $Writing → $Composition → everything`, and `$TypeOfCover extends $TypeOfChapter` carries what `$Cover extends $Chapter` would have said.***

**P12 · THE BOND CREATES AND ASSIGNS.** ***Doug:*** *"I would move the creation to the bond constructor and leave validation to specifically… otherwise you lock in specific types and that is bad."* **So `$Book` makes its own index and `$Reference` mints its own path, in their bonds** — *and a consumer's own book class makes its own.*

**P13 · `specifically` VALIDATES, AND MAY ASSIGN.** ***Doug:*** *"Specifically should be assigning interface properties if it can and might need to cast. You want as much to happen there as possible."* **`$TypeOfLetter.specifically` writes `kind` and `case`; `$TypeOfBookmark` writes `persist`. Neither creates anything.**

**P14 · THE BOND IS THREE LINES AND ALWAYS THE SAME THREE.**

```tsx
$Section(block: $Block) {
    super.$Composition(block);
    if (reflection.is(this, $TypeOfSection)) return;
    this._block.$elements = [...(this._block.$elements ?? []), $check(typeOfSection, '!')];
}
```

***A canonical reference folds through the block it was handed, BEFORE `super`***, so the specific kind wins and `$Reference` does not also fold a plain one.

**P15 · MEMBER ORDER IS THE SCALE BAR.** *Fields (private · public · protected) · properties · bond · constructor · methods · protected · private.* **A property is argumentless AND returns data.**

---

## <a id="the-seven"></a>IV · THE SEVEN, AND WHAT IS NOT ONE

**P16 · SEVEN LEVELS, AND THE LIST DOES NOT GROW.** *Book · Chapter · Section · Paragraph · Sentence · Word · Letter.* **A type is a composition type when its names meet that list — held once, in reflection, and nowhere else.**

**P17 · A TYPE SAYS WHAT IS BENEATH IT AND MAKES WHAT IS BENEATH IT.** ***Doug on the registry that used to:*** *"Why does it need maker registrations? Sounds like a wart."* **`below()` names the type beneath; that type's `makes(tokens)` builds them.** *No string keys, no module-bottom registrations.*

**P18 · A PIECE OF WRITING COMPOSES THE KIND BENEATH IT, OR ITS OWN.** ***Doug, verbatim:*** *"A paragraph is composed of sentences. It can have recursive paragraphs that contribute THEIR parts. That's it. There is no other option."*

**P19 · `specify()` CHECKS ONE PIECE OF WRITING AND NEVER DESCENDS.** ***Doug:*** *"we don't want to recursively specify (we will check parts in the compiler)."*

**P20 · TWO AXES, AND THEY DO NOT INTERACT.** *The **type** says which of the seven this writing is — **closed**. The **annotation** says everything else — **open**.* ***Doug's test:*** *"if you are part of the composition, you are. If you are not, you are annotative."*

**P21 · A TYPE OF A TYPE IS REACHED BY ASKING TWICE.** *`$TypeOfType` and `$TypeOfAnnotation` are deleted.* ***Doug:*** *"if you need a type of type just do type type."*

**P22 · NO MEMBER RESURRECTS A DELETED CONCEPT.** *`prints`, `resolve`, `formula`, `canonicalForm`, `$Trait`, `parenthetical`, `canonical`, `index`, `indent`.* ***Doug, when one came back as `reference()` on `$Type`:*** *"Why does `$Type` need reference. What semantics are you following?"* **Struck, and the catalogue prints a plain `$Reference`.**

---

## <a id="the-drawing"></a>V · THE DRAWING

**P23 · THE FRAME IS A SPAN, AND A KIND THAT NEEDS A BLOCK OVERRIDES IT.** ***Doug:*** *"wrap in a span? And then things need to override frame if they do something different. That's not hard."* ***Measured before and after:*** **a `<div>` frame inside a `<p>` dress made React refuse — *"In HTML, `<div>` cannot be a descendant of `<p>`"* — and a `<span>` clears it.**

**P24 · THE SAME CONTAINER EVERYWHERE.** *The base declares the depth and a kind OVERRIDES it; a drawing never varies its own depth by asking a question.*

**P25 · A TYPE DRAWS NOTHING AND FRAMES NOTHING.** *Before this, every type left an empty `<div class="">` in the DOM — found by probing, not by reading.*

**P26 · A PATH SHOWS ITS URL AND WEARS NO ANCHOR; A REFERENCE SHOWS ITS URL IN ONE.** ***Doug:*** *"the reference itself should show as a phrase with the url of the path and the path should show as a phrase with the url but no anchor."* ***I had this wrong and made all annotations silent; that was an over-correction and it is undone.***

**P27 · WRITING THAT MEANS SOMETHING SHOWS WITH AN ANCHOR.** ***Doug:*** *"means has to answer reference… if a class has meaning, it should show with an anchor."*

**P28 · A FORMAT IS STRUCTURE; FORMATTING IS THE ACT.** ***Doug:*** *"Formatting can be the act if what the component does is apply formatting. If it is structural then it's a format. I'll take format and format is the base."* **`$Format`, and every dress an `$XFormat`.** *And `format` is a real library word — a book's format is folio, quarto, octavo — where "style" is generic.*

**P29 · A FORMAT AND A THEME BELONG TO WRITING WITHOUT BEING WRITING.** ***Doug:*** *"They belong to writing, they just aren't writing. They participate in what writing looks like. Formatting and theme is abstract."* **So they stand in `writing/` and carry no type and no specification.**

---

## <a id="the-book"></a>VI · THE BOOK AND ITS FURNITURE

**P30 · A BOOK ANSWERS ITS OWN FURNITURE, AND EACH STANDS IN ITS PLACE.** ***Doug:*** *"The cover should always be the first non annotative piece of writing, so that can be validated and it can be returned on book. The synopsis second, table third and index last."* **`cover()` · `synopsis()` · `tableOfContents()` · `index()`, each found by searching, and four rules hold the order.**

**P31 · A BOOK MAKES ITS OWN INDEX, AT ITS BINDING.**

**P32 · A TITLE IS A SECTION THAT MEANS THE BOOK.** ***Doug:*** *"What is a title? Well I think we want it to be a section that means the book."* **So `$TypeOfTitle extends $TypeOfSection`, a title is its own heading, and `TitleSpecification` finally has a rule of its own.** *Author and subject went the same way, on his earlier "types of sections".* ***This also settled the finding that a title is not a card: it is not one, it is IN one.***

**P33 · A CARD HAS A NAME AND LINES.** ***Doug:*** *"An IndexCard can have a name and lines which are pieces of writing. A catalogueCard can have a title because it is the title of a book and the name can be the copy of that."* **Which is the infobox's own shape** — *`.infobox-above` is the name, `.infobox-label` + `.infobox-data` is a line, and every field is optional; see [The Wikipedia Fit](18-the-wikipedia-fit.md).*

---

## <a id="the-machinery"></a>VII · THE MACHINERY

**P34 · `instanceof` LIVES IN REFLECTION.** ***Doug:*** *"instanceof should only appear checking a type as a type of type. That is the floor."* **One site now serves the library: `reflection.is`, which `instanceOf` calls.** *The one exception is narrowing to a kind's own fields inside its own specification or type — Doug's own idiom, used four times in v2.1.*

**P35 · NOTHING IS STORED THAT CAN BE ASKED.** ***Doug:*** *"There should not be a level. Use reflection. Nothing should be stored if it doesn't have to."*

**P36 · A UTILITY HOLDS NO KIND.** *Reflection, the parser, the specification and the html reader know `$Writing`, `$Annotation` and `$Type`, and nothing about covers or cards.* ***Doug:*** *"Why does reflection know anything about covers?"*

**P37 · A SPECIFICATION IS A PLAIN CLASS AND JUDGES ONLY.** *Never a chemical, built with `new`.* **A procedure the type needs belongs on the type** — *`LetterSpecification` was holding statics that `$TypeOfLetter` reached into, and that was mine and is fixed.*

**P38 · A WAIVER IS `return false`, AND IT IS STILL A RULE.** *So it still carries `@specify`, in the library's own words.*

**P39 · EVERY MODULE MUST LOAD FIRST, STANDALONE.** ***Doug:*** *"I don't want any weird module loadings or weird solutions to get things in different files. We deal with problems by looking at the design! Not patching."* **[`loading.test.tsx`](../../package/src/tests/loading.test.tsx) imports each module into a fresh graph** — *and it caught the fatal one the moment `Writing.tsx` reached for an anchor, which is what sent `$Theme` out of writing.*

---

## <a id="measured"></a>VIII · WHAT THE TYPE SYSTEM WILL NOT LET US HAVE — measured, not argued

**P40 · `$Writing` IS NOT ASSIGNABLE TO `$Writing$`, AND THAT IS A RULING.** *Because `$Writing$` does not promise `_block`, the bond or `$view`* — **Doug: *"make block public… not on the interface but on Writing2."*** ***So an interface may name `$Writing$` in a PARAMETER and must name `$Writing` in any RETURN or ARRAY position.*** *Measured: naming `$Writing$` in `$Composition$.parts()` alone produced 51 errors across 30 files.* **This is why six interfaces name classes, and it is not a wart — it is the ruling's shadow.**

**P41 · `book()` MAY PROMISE ONLY `$Writing$`.** *It answers `this`, so whatever its return type promises, every piece of writing must have.* **Measured twice, at 47 and 50 errors, each time a cascade from one line.**

**P42 · ONE CAST IS STRUCTURAL AND THE REST ARE GONE.** *`reflection.means()` answers `$Annotation` and the interface says `$Reference$`; reflection may not name the reference's interface without a fatal cycle.* ***Fifty-two casts became seven, then four*** — *and the one my own memory names as the canonical fault, **a cast asserting what a check verified**, died when `reflection.writing()` became a type predicate.*

---

## <a id="how-we-work"></a>IX · HOW WE WORK

**P43 · WE DO NOT INNOVATE.** ***Doug:*** *"you need serious supervision and to stop thinking you can innovate even member names in the five essential folders without asking. You can't innovate base classes. You have to follow templates for the classes… You very simply exist to speed up the process of me writing code manually."*

**P44 · FOLLOW THE PATTERN RATHER THAN ASKING ABOUT IT.** ***Doug:*** *"You don't need to ask about basic pattern. Assume you were wrong possibly about everything. Follow the patterns."*

**P45 · CHECK THE SEMANTICS, NOT ONLY THE SHAPE.** ***Doug:*** *"Do the subclasses make sense? Do the members? Does this thing mean what it is called?"* **Three of this port's real faults were found that way and none by the compiler:** *an interface extending a class, a cover found by position rather than by being one, and a `frame()` that changed the writing's depth.*

**P46 · EVERY WORD IS A LIBRARY WORD.** *Struck: mint, ladder, rung, rail, seat, prose-as-a-negation, and `Ref` as an abbreviation of `Reference` — **the last is still standing and still wrong**.*

**P47 · NO COMMENTS IN THE SOURCE.** *The commentary lives here, and the book links to the file, never the reverse.*

**P48 · A CLAIM IS MEASURED OR IT IS NOT MADE.** ***Two claims of mine in this session were wrong and both were caught by measuring:*** *"zero casts" when a grep had swallowed fifty, and "an annotation draws nothing" when Doug's design says a path shows.* **The habit is the fix: run the sweep, read the output, then say the number.**

---

*Written at the close of the v2.2 port. The state it describes: `writing` 13 · `book` 13 · `reference` 6 · `encyclopedia` 10 · `utilities` 5 — 47 files, `tsc` 0, 78 promises, zero strays.*
