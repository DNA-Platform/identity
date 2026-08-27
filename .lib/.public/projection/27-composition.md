# Composition

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*Opened 2026-08-27 at the close of [The Provider](26-the-provider.md), which built the prototype this one makes into a framework. **Status: `implementation-ready`.** Doug at the keyboard, ruling throughout; the requirements below are his sentences with the reading beside them.*

***The title is Doug's own word and stands for correction:*** ***"Why don't we deal with composition first."***

**Identifiers.** Requirements **R235–**, actors **A10–**, acceptance examples **AE1–**, risks **K25–**, decisions **D100–**, units **U191–**. *[None is ever renumbered](../../../../.claude/library/our-skillset/29-ce-plan.md#the-unit-identifier-law); a deletion leaves a gap.*

**Where the code lands.** [`library/.public/package/src2`](../../package/src2/) — *the next version of the framework* — plus a gate, because `src2` has none.

---

# <a id="what-this-sprint-is"></a>What this sprint is

***Composition is what a level IS. The parse is only how one gets MADE from prose.*** **So the being is built before the finding**, and the whole ladder stands by hand before anything is divided.

**Seven levels, and the only thing they declare this sprint is what they compose.** *Doug: **"File is comp of documents is comp of sections is comp of paragraphs is comp of sentences is comp of words is comp of letters — I think this is most intuitive to people."***

---

# <a id="the-rulings"></a>The rulings, verbatim

*Every one of these turned the design.*

> ***"Why don't we deal with composition first."***

> *"I want us to be truly minimal. **I don't want anything on writing unless it truly needs to be there. I don't want you to invent words. I want the semantics to be clean.**"*

> *"When I say minimal I mean **minimal to the theoretical specification**."*

> *"**Not one walk. All 7 levels, we design them.** Integrate existing machinery, make changes to meet new constraints. **Question literally every property to find the bare minimum set.**"*

> *"**I name the level by the canonical** right? Space and smiley are a non-canonical types of letters. **Repetitive spaces are non-canonical types of words that will be left associated.**"*

> *"what if we **parse only up to paragraph level first**. **Sections are meant to be delineated by hand.** Then we can work in markdown parsing **in a type** and get the next level."*

> *"**Composition directly lends itself to cataloguing.**"*

> *"look at `$Lib` which we export as `$$` — **we do this binding thing where the type is a proxy for the thing. So make sure that works.**"*

> *"**Also `$Writing` is a mess. We need to clean it rigorously before building.**"*

> *"`$$` reads `of.written()` — **none of that is correct for me.**"*

**And the interface itself came back annotated member by member** — the property review Doug asked for, performed by Doug. It is [R235](#r235).

---

# <a id="actors"></a>Actors

<a id="a10"></a>**A10** the library author, who writes a file by hand all the way down to letters and expects each level to answer for its parts · <a id="a11"></a>**A11** the framework author, who wants seven levels that differ in **what they compose** and in nothing else until the parse arrives · <a id="a12"></a>**A12** the author of an exotic kind — a smiley that is a letter — who wants it to stand among ordinary letters without the framework being told it exists.

---

# <a id="requirements"></a>Requirements

## The interface

<a id="r235"></a>**R235** — ***`$Composition$` is six members, and Doug cut it from ten.*** *His marks, verbatim: `valid()` **remove** — "it comes from referent"; `canonical: T` **make a function**; `parts()` **keep**; `where` / `select` / `selectMany` / `single` **keep, simple implementation, reflects monadic structure**; `at(position)` **remove, not minimal**; `copy` **remove at this level** — "not part of composition I don't think, maybe writing"; `parenthetical` **remove, part of writing**.*

```ts
export interface $Composition$<T extends $Writing> {
    parts(): T[];
    canonical(): T;
    where(match: (part: T) => boolean): T[];
    select<U>(pick: (part: T) => U): U[];
    selectMany<U>(pick: (part: T) => U[]): U[];
    single(match: (part: T) => boolean): T;
}
```

<a id="r236"></a>**R236** — ***the constraint is `T extends $Writing`, and that is what lets two of the removals happen.*** *Doug: "make this something that has to extend writing."* **Once every part is a writing it already has `copy` and `parenthetical`, so declaring them on the interface was redundant rather than merely misplaced.** The constraint change and the two cuts are one move.

<a id="r237"></a>**R237** — ***`canonical()` is a function because it is a reading, not a stored thing.*** **It pairs with `parts()`: neither is held, and [a getter that builds is the defect filed in Solutions 16](../solutions/16-the-parse-that-woke-its-own-parents.md).** *And the pair is the one [the source conversation identified](../the-semantics-of-books/09-composition-and-collection.md) — `selectMany` is the monad's join, `canonical()` is the comonad's extract, on one structure.*

<a id="r238"></a>**R238** — ***five of the six are written once, on `$Type`, over `parts()`.*** *Doug: "this is fine. Do it."* **`parts()[0]`, `.filter`, `.map`, `.flatMap`, and filter-plus-count are the monad's own laws — identical at every level by definition — so writing them seven times would be writing one law seven times.**

<a id="r239"></a>**R239** — ***each level supplies `parts()` and nothing else.*** **That is the design arriving at a shared implementation rather than assuming one**, and it keeps the levels genuinely designed, because `parts()` is where they will actually differ once the parse exists.

<a id="r240"></a>**R240** — ***`$Type` is parameterised by what it composes.*** `$Type<T extends $Writing>`. **This is the shape [already measured in `lib`](25-the-specification.md#the-levels-are-siblings)** — *"the levels are siblings, not a chain: `$Word`, `$Sentence`, `$Paragraph`, `$Section` each extend `$Writing<P>` DIRECTLY, parameterised by what they compose."* ***Read off the working copy rather than invented here.***

## `$Writing`, cleaned

<a id="r241"></a>**R241** — ***`$Writing` keeps only what the theory requires of it.*** *Doug: "I don't want anything on writing unless it truly needs to be there."*

| member | verdict | why |
|---|---|---|
| `inline = true` | **keep** | **Measured:** [`particle.ts:60`](../../../chemistry/package/src/abstraction/particle.ts) declares `inline = false` and [`chemical.ts:353`](../../../chemistry/package/src/abstraction/chemical.ts) reads `child.inline` to group a run into one block. *Strike it and writing stops arriving as one block.* |
| `parenthetical = false` | **keep** | *Present in the writing, absent from the reading* is a property of writing rather than of annotations — **a synopsis is parenthetical and is not one.** |
| `text` | **keep, made optional** | ***The `!` is a lie.*** `$Smiley` never sets it, because a bond constructor is found by class name and `$Smiley` declares none. *Doug's own probe says so: "a leaf that is not composed… which is why `$Writing` had no business owning one."* |
| `written()` | **keep** | **The one place that knows a block's shape**, and every `parts()` will use it. |
| `copy` | **keep** | **The one commitment every writing makes** — [the settled account's own floor](../the-semantics-of-books/15-the-levels-of-writing.md). |
| `$Writing(...)` | **keep, thinner** | Sets `text`. **Nothing else.** |
| `specification` | **keep** | ***Corrected by Doug.*** *A draft of this plan moved the finding into `$$` and read `written()` instead — "none of that is correct for me."* **The member stays and `$$` keeps reading it.** |
| `get annotation()` | **strike** | See [R242](#r242). |
| `specify()` | **strike from `$Writing`** | See [R243](#r243). |

<a id="r242"></a>**R242** — ***the `annotation` marker is struck, and `parenthetical` does its work.*** **Doug's own comment on that member reads `NAMING IS OWED`** — it exists solely to stand in for an `instanceof $Type` that a module cycle forbids. *`parenthetical` already means **present in the writing, absent from the reading**, which is what an annotation IS; [`Html.ts:12`](../../package/src2/utilities/Html.ts) already reads it; and filtering on it names no class.* ***So the owed name is discharged by deletion rather than by a word*** — **flagged as a change made on a reading, and reversible in one line if the reading is wrong.**

<a id="r243"></a>**R243** — ***`specify()` leaves `$Writing`.*** **Its statement — *"a piece of writing has a type, and this one has none"* — becomes false the moment the parse exists**, because a letter found inside a word carries no `<Type>Letter</Type>`; the finder knows the level. *It is declared where it has content, on `$Type` and its levels.*

## The ladder

<a id="r244"></a>**R244** — ***seven types, each declaring what it composes and nothing else this sprint.***

| type | composes |
|---|---|
| `$File` | `$Document` |
| `$Document` | `$Section` |
| `$Section` | `$Paragraph` |
| `$Paragraph` | `$Sentence` |
| `$Sentence` | `$Word` |
| `$Word` | `$Letter` |
| `$Letter` | **itself — the floor** |

<a id="r245"></a>**R245** — ***nothing is found from prose.*** **No `divide`, no notation, no markdown.** *A level's parts are the written elements that carry what it composes.* ***Which means the seven genuinely differ only in `composes` this sprint, and that is stated rather than hidden*** — [the parse is where they diverge](#still-to-come), and it is the next sprint.

<a id="r246"></a>**R246** — ***a level asks TWO questions, not one.*** *Doug: "I name the level by the canonical right? Space and smiley are a non-canonical types of letters."* **Being AT the level — a letter is one grapheme. Being the CANONICAL kind — a letter has a letter or number in it.**

<a id="r247"></a>**R247** — ***and splitting them dissolves a fault already filed.*** **[The Condition Report](../the-condition-report/04-semantics.md) records *a word class declaring two invariants that both its subclasses repeal*.** *It repealed them because punctuation is a word and the class had written the canonical condition as the level condition.* ***Doug's split is the fix rather than a workaround, and it is what lets a non-canonical kind extend its level and still call `super`*** — which is [S8](../the-condition-report/04-semantics.md#s8) satisfied instead of violated.

<a id="r248"></a>**R248** — ***the name of the second question is owed.*** **A proxy stands in the code and is marked as one.** *[Nothing here is a name I invented](../../../../.claude/library/..teamsmanship/05-territory.md); the pick is Doug's.*

## The binding

<a id="r249"></a>**R249** — ***the type is a proxy for the thing, and `parts()` must preserve that.*** *Doug: "we do this binding thing where the type is a proxy for the thing. So make sure that works."* **A level's parts are BOUND TYPES — each `$Letter` standing for its own piece of writing — not raw writings.**

<a id="r250"></a>**R250** — ***and the binding is per-writing, which is why it works.*** **`$$` returns the type instance written INTO that writing**, so two writings never share one bound type. ***Measured hazard, deliberately not reached:*** [`particle.ts:46`](../../../chemistry/package/src/abstraction/particle.ts) makes an instance a template only if it **is** its class's registered template, and `particle.ts:343` takes the **direct** path when it is not — which is [Solutions 28](../solutions/28-the-specimen-that-was-the-component.md) exactly. *It would fire the moment `parts()` MAKES a type for a found part. **This sprint makes none**, so the hazard is named and deferred rather than met.*

## The catalogue

<a id="r251"></a>**R251** — ***composition affords a catalogue; it does not declare one.*** *Doug removed `at()` as "not minimal", and confirmed **"composition directly lends itself to cataloguing."*** **Both hold together: the catalogue is a READING derived from `parts()`, exactly as the canonical is** — which is the stronger statement, and the reason `$Location` has no seat on the interface. ***Designed here, built later.***

## The gate

<a id="r252"></a>**R252** — ***the Smiley example lives in the package and runs.*** **Today it exists in a temp directory with a config pointing at a folder that no longer exists**, which is [The Provider's own owed line](26-the-provider.md#owed): *"`src2` has no gate — its own `tsconfig`, no runner, outside `npm run test`."* *Doug: **"Find the Smiley example. That thing needs to work."***

## <a id="the-move"></a>The move to v2

> ***Doug, 2026-08-27:*** *"we are going to need to find a way of making a v2. **How can we move this into `src`, and move the stuff in there into some sort of archive but without breaking the code everywhere, so we can start testing as we do this.**"*

<a id="r253"></a>**R253** — ***the move costs five config files and zero source files, and this is measured.***

| | measured | how |
|---|---|---|
| ***`src/` uses the `@/` alias ZERO times*** | v1's own imports are all relative, so **moving the folder edits nothing inside it** | grep |
| ***`tests/` uses it 192 times, `app/` 349*** | **541 imports that mean v1 today** — the alias is the whole exposure | grep |
| ***`src2/` uses it 16 times, meaning itself*** | v2 already has its own `tsconfig` mapping `@/*` to `./*` | read |
| ***nothing outside the package names `package/src`*** | five configs do — `tsconfig.json`, `tsconfig.build.json`, `vitest.config.ts`, `rollup.config`, and `app/`'s pair. **Everything else imports `@dna-platform/lib`**, which resolves through `dist` | grep |

<a id="r254"></a>**R254** — ***the published surface does not move, and that is what keeps the code from breaking.*** **Rollup keeps building v1 into `dist/lib.js`**, so `@dna-platform/lib` answers exactly what it answers today and the compiler, the application, the demonstration and the corpus notice nothing. ***The folder swap is a fact about the repository; the package's face is unchanged.***

<a id="r255"></a>**R255** — ***the alias follows v1 rather than the folder.*** **`@/` is re-pointed at the archive in v1's three configs**, so all 541 imports keep resolving untouched; **v2 keeps its own `tsconfig` mapping `@/` to itself**, which is the arrangement `src2` already has. *Leaving `@/` pointing at `./src/*` after the swap would silently re-aim 541 imports at a version that does not contain what they ask for.*

<a id="r256"></a>**R256** — ***the archive is NOT dot-prefixed.*** **[Solutions 14's fourth appearance](../solutions/14-the-green-that-exercised-nothing.md) measured it: a glob does not match a path beginning with a dot**, and `include`, `rootDir` and rollup's input are all globs or paths into one. *A dot-prefixed folder that still has to build is half-invisible to the tools that build it.* ***The repository's `.archive` convention is for things that no longer run.***

<a id="r257"></a>**R257** — ***two suites, from the day of the move.*** *Doug: "so we can start testing as we do this."* **v1's suite keeps running against v1 through its own alias; v2 gets [U191](#u191)'s runner.** ***Neither waits for the other, which is the whole point of the move.***

---

# <a id="decisions"></a>Decisions

<a id="d100"></a>**D100 — composition before the parse.** *Chosen over building the ladder and its divide rules together.* **A level's being is separable from how one is found**, and separating them means the whole ladder can be driven by hand — which is how the existing probes already work.

<a id="d101"></a>**D101 — the five monadic members on `$Type`, not on each level.** *Chosen over seven implementations.* **They are one law, and `parts()` is the only place the levels differ.** *Doug ruled it.*

<a id="d102"></a>**D102 — `$Type` gains a type parameter rather than the levels narrowing a return.** *Chosen over `$Composition$<$Writing>` with covariant overrides.* **`lib` already carries this shape and it was measured this session**; narrowing returns would leave `where`/`select` taking the wrong predicate type.

<a id="d103"></a>**D103 — `parenthetical` replaces the `annotation` marker.** *Chosen over keeping the marker and over breaking the module cycle another way.* **It introduces no word, names no class, and the utility already reads it.** ***Made on a reading rather than a ruling, and flagged as such.***

<a id="d104"></a>**D104 — `specification` stays a member.** *Chosen over deriving it in `$$`.* ***Doug's correction, taken as given.***

<a id="d105"></a>**D105 — v1 moves and keeps shipping; v2 takes the folder and ships nothing yet.** *Chosen over three alternatives, each rejected for a stated reason.* **A second package** (`@dna-platform/lib2`) isolates cleanly and costs a published name that is wrong the moment v2 wins. **A second export subpath** leaves both in place and is cheapest, but it does not give v2 the `src` seat Doug asked for. **Swapping and re-pointing `dist` at v2** breaks the compiler, the application and the corpus on the first commit. ***The chosen shape is the only one where the repository moves and the package's face does not.***

---

# <a id="units"></a>Units

<a id="u191"></a>**U191 — the gate.** `src2` gets its own runner and enters the repository. **Files:** a vitest config for `src2`, a probe folder inside the package, `package.json`. **Demo contribution:** *the number itself* — a suite that runs at all where none did. **Depends on:** nothing.

<a id="u192"></a>**U192 — the Smiley example moves in.** The five probes come out of the temp directory as the first tests. **Files:** the probe folder. **Demo contribution:** the Smiley draws, clicks, and its subclass replaces the faces — **watched green, and the divergence probe still pinned red-by-design.** **Depends on:** U191.

<a id="u193"></a>**U193 — `$Writing` cleaned.** [R241](#r241)–[R243](#r243). **Files:** `writing/Writing.tsx`, `notation/Annotation.tsx`, `reference/Referent.tsx`. **Demo contribution:** the member count, before and after. **Depends on:** U191.

<a id="u194"></a>**U194 — `$Composition$` cut to six.** [R235](#r235)–[R237](#r237). **Files:** `writing/Composition.tsx`. **Demo contribution:** the interface, read against Doug's marks. **Depends on:** U193.

<a id="u195"></a>**U195 — the five on `$Type`, and the parameter.** [R238](#r238)–[R240](#r240). **Files:** `notation/Type.tsx`. **Demo contribution:** one level's `where`/`select`/`selectMany`/`single` answering without that level implementing any of them. **Depends on:** U194.

<a id="u196"></a>**U196 — the ladder wired.** [R244](#r244)–[R245](#r245), and each level's `parts()`. **Files:** all seven under `writing/`. **Demo contribution:** **a file built by hand, read all the way down to its letters.** **Depends on:** U195.

<a id="u197"></a>**U197 — the two questions.** [R246](#r246)–[R248](#r248). **Files:** the seven levels. **Demo contribution:** the Smiley standing as a letter **at** its level and **not** the canonical kind, said in two answers rather than one. **Depends on:** U196.

<a id="u198"></a>**U198 — the mixed word.** The demonstration. **Files:** the probe folder. **Demo contribution:** [AE5](#ae5). **Depends on:** U197.

<a id="u199"></a>**U199 — the catalogue.** ***DESIGN OWED.*** [R251](#r251) states what it is; **location and address have no mechanism yet** — *what runs, and when* is unanswered. **No files, no scenarios, no dependencies**, [per the law](../../../../.claude/library/our-skillset/29-ce-plan.md#a-unit-with-no-mechanism-is-not-a-unit--added-out-of-sprint-48s-failure).

<a id="u200"></a>**U200 — v1 moves to the archive, alias and all.** [R253](#r253), [R255](#r255), [R256](#r256). **Files:** the folder itself, plus `tsconfig.json`, `tsconfig.build.json`, `vitest.config.ts`, `rollup.config`, `app/tsconfig.json`, `app/vite.config.ts`. **Demo contribution:** ***every v1 gate green at the new location, before anything else is touched*** — the suite, `tsc`, and `rollup` emitting a `dist` identical to the one before the move. **Depends on:** nothing.

<a id="u201"></a>**U201 — `src2` takes the `src` seat.** [R254](#r254). **Files:** the folder, and its own `tsconfig`. **Demo contribution:** *`src2` appears nowhere in the repository and the published surface is unchanged.* **Depends on:** U200.

<a id="u202"></a>**U202 — the two suites stand side by side.** [R257](#r257). **Files:** `package.json`. **Demo contribution:** **one command runs both, and each states its own scope** — [never a bare PASS](../solutions/14-the-green-that-exercised-nothing.md). **Depends on:** U201, U191.

## <a id="order"></a>The order, which is not the numbering

***U200 → U201 → U191 → U192 → U193 → U194 → U195 → U196 → U197 → U198.*** **The move runs first**, so the gate is built once at the seat it will keep rather than twice. *[Identifiers are never renumbered](../../../../.claude/library/our-skillset/29-ce-plan.md#the-unit-identifier-law), so the order is stated rather than encoded.*

---

# <a id="what-is-seen"></a>What is seen

*[A requirement that cannot be seen satisfied is not a requirement.](../../../../.claude/library/our-skillset/28-ce-brainstorm.md#the-validatable-law)*

<a id="ae1"></a>**AE1** — a `$File` written by hand, holding a `$Document`, holding a `$Section`, holding a `$Paragraph`, holding a `$Sentence`, holding a `$Word`, holding letters. **`parts()` answers at every rung**, and `canonical()` answers the first. *Covers [R244](#r244), [R239](#r239).*

<a id="ae2"></a>**AE2** — a level answers `where`, `select`, `selectMany` and `single` **without declaring any of them**. *Covers [R238](#r238).*

<a id="ae3"></a>**AE3** — `$Cats extends $Smiley` replaces the faces and nothing else, on the page. *Covers [R249](#r249).*

<a id="ae4"></a>**AE4** — `$HexLetter extends $Letter` narrows the specification; a writing carrying the narrower type answers **both** names, and one carrying only `$Letter` **refuses** `$HexLetter` and says so. *Covers [R246](#r246).*

<a id="ae5"></a>**AE5** — ***the one a hand-authored page cannot fake.*** **A word whose letters are a MIX** — plain graphemes and the Smiley — where `parts()` returns them all **in order**, the Smiley among them **as a letter**, each a bound proxy for its own writing, and **the walk names no class to do it.** *Covers [R249](#r249), [R245](#r245), [R244](#r244).*

<a id="ae6"></a>**AE6** — the Smiley is a letter **at its level** and **is not the canonical kind**, in two separate answers. *Covers [R246](#r246), [R247](#r247).*

---

# <a id="risks"></a>Risks

<a id="k25"></a>**K25 — resolution happens only in the draw path.** *[The formula's own account](../../../chemistry/.lib/composition/12-the-formula.md): "a formula is swapped where it is written inside a chemical's drawing. One reached outside that path is **not** swapped."* **So a writing built with `$()` carries a bare `$Type` and one that is drawn carries a `$Letter`** — two populations of one object, which is [Solutions 13](../solutions/13-the-chapter-that-wrote-its-sections-twice.md)'s shape. ***Mitigated by the probes exercising both forms deliberately:*** *the existing `letter.probe` writes `<Letter />` directly and works outside a drawing; `smiley.probe` writes `<Type>Letter</Type>` and works only because it is rendered.*

<a id="k26"></a>**K26 — a bond constructor is found by class name.** *`$Smiley` runs none, which is why its `text` is unset.* **So each of the seven levels needs its own**, and [Sprint 48's U2 enforcement](06-sprint-48--subjects-and-the-library.md) marks a chain invalid by name when a declared constructor is not reached.

<a id="k27"></a>**K27 — a type is a cursor rather than a badge.** `bind` moves the same object onto a different writing. **N parts need N objects**, and [R250](#r250) is why they get them.

<a id="k28"></a>**K28 — the model does not follow the click.** *Pinned by [The Provider](26-the-provider.md#owed) and by a probe that will flip when it is fixed.* **Nothing in this sprint depends on it**, and the probe stays as it is.

<a id="k30"></a>**K30 — two versions in one package raises a fault the branch already carries.** *[The Condition Report](../the-condition-report/02-organization.md) files it: **two copies of the framework loaded at once**, because the compiler and application resolve `lib` to `dist` while the demo and suites alias source — so `instanceof` is silently false across the line.* **A second version is a third copy.** ***Mitigated by [R254](#r254):*** *`dist` is v1-only until the swap, and no import may cross between the two — v2 reaching into the archive, or the archive reaching into v2, is the failure to watch for.*

<a id="k29"></a>**K29 — `parts()` is a reading in the draw path.** *[Solutions 16](../solutions/16-the-parse-that-woke-its-own-parents.md), three appearances: a reading called during a render must be HELD, not for speed but for termination.* **This sprint constructs nothing inside `parts()`**, which is why it does not fire — *and the moment the parse does, it will.*

---

# <a id="open"></a>OPEN — rulings owed

| | |
|---|---|
| ***the second question's name*** | [R248](#r248). **A proxy stands in the code.** |
| ***`$Referent$`*** | With `specify()` and `specification`'s finding settled, **its only implementer is `$Type`.** *Doug said validity comes from the referent — so does the interface narrow, or does `$Writing` still claim it?* |
| ***`copy` and `Html.ts`*** | `copy` skips parenthetical nodes, and that reading lives in a utility that duck-types four shapes. **If a writing is the thing that answers `copy`, the reading may belong on `$Writing`.** |
| ***what the archive is called*** | *Doug's word is **archive**, and it is the repository's own.* **But it names something that is still the published library**, which is a word that lies for as long as v1 ships. ***The book-native alternative is `edition`*** — a first and a second edition of one work — *offered rather than taken, [because the pick is his](../../../../.claude/library/..teamsmanship/05-territory.md).* |

---

# <a id="still-to-come"></a>Still to come

**The reading** — `divide`, association (*"repetitive spaces … will be left associated"*), and the parse tree that can be **reassigned**: divide once into parts, type them in a second pass, so re-typing never re-splits. ***Which is what makes markdown-as-a-type possible*** — *Doug: "then we can work in markdown parsing in a type and get the next level."*

**The catalogue** — location as a catalogue of addresses, an address at a location, and every piece of writing read as a catalogue. [U199](#u199), design owed.
