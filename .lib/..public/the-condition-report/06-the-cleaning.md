# The Cleaning

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

*(**The work, ordered.** Doug: *"Let's clean the new stuff."* This chapter says what **new** means, what gets touched and what deliberately does not, in what order, and where the order is forced rather than chosen. **Nothing here is a wish** — every row cites an entry with a file behind it.)*

## <a id="dispositions"></a>The dispositions — every entry decided, and the count is measured rather than kept

***Every entry carries its disposition inside the entry itself***, so the verdict lives beside the thing it judges. **The five words are a conservator's own** — what is marked against each item before treatment is planned. *Proxies, like the book's name.*

| | means |
|---|---|
| **TREAT** | **fixed in this cleaning**, at the numbered step |
| **MONITOR** | ***real, and deliberately not now*** — each says what it waits for |
| **LEAVE** | ***judged not a fault***, with the reason — most often that the derivation's own vocabulary outranks the objection |
| ***REFER*** | **a ruling, and it is Doug's** |
| ***DESIGN OWED*** | **no mechanism yet** — [no files, no scenarios](#owed) |
| ***SPLIT*** | **two halves of different sizes**, taken separately |

***THE COUNT IS NOT WRITTEN HERE, and that is deliberate.*** **A tally kept by hand beside a register it describes is [two statements of one fact, which is the fault this book files three times](../the-condition-report/05-implementation.md#i6).** *It drifted twice in one session before this paragraph replaced it.*

**To count, read the entries:**

```bash
grep -ho "^> \*\{2,3\}[A-Z ]*\*\{2,3\}" 0[2-5]*.md | sed 's/^> //;s/\*//g' | sort | uniq -c | sort -rn
```

*At the time of writing that answers roughly **fifty to treat**, with single figures in each of the other five — and the exact numbers are whatever the command says today.*

### The LEAVEs are the ones worth checking, because a decline is the easiest verdict to get wrong

| | why it is not a fault |
|---|---|
| [N5](03-names.md#n5) `set` | Doug's own drawing verb; **striking [`set0`](03-names.md#n8) dissolves the collision** |
| [N16](03-names.md#n16) `$role` | ***[the settled account uses the word](../the-semantics-of-books/15-the-levels-of-writing.md#used-and-mentioned)*** |
| [S14](04-semantics.md#s14) the contents excluding the cover | **the theory says MAY, not must** — and a reader does not want a cover listed in its own contents |
| [I10](05-implementation.md#i10) two numbering rules | ***both correct — LaTeX does exactly this.*** The missing half was that nothing said so, and now something does |
| [O9](02-organization.md#o9) the `$Chemistry` Lab | [out of scope](01-how-to-read-this.md#the-scope) |

### And the entries that were STRUCK, because a register padded with observations is a register nobody finishes

*Identifiers are never reused, so the gaps stay and each stub says why.*

| | struck because |
|---|---|
| [O10](02-organization.md#o10) · [O11](02-organization.md#o11) | ***they audited `.claude/`, which is not this project*** — the mistake that produced [The Scope](01-how-to-read-this.md#the-scope) |
| [C3](07-the-three-codebases.md#the-two-that-were-struck) | *Doug: "I don't see a problem."* **A convention worth writing down is not a fault** |
| [C4](07-the-three-codebases.md#the-two-that-were-struck) | **a fact about how to LOOK, not about the code** — [moved to the instruments](01-how-to-read-this.md#the-instruments) |

***The discipline that follows is worth more than the four entries:*** **an entry earns its place by naming something that should be DIFFERENT IN THE CODE.** *A true observation about the code is a chapter somewhere else.*

### And the four names struck on my judgement alone

[`$Composible$`](03-names.md#n7) · [`set0`](03-names.md#n8) · [`ref`](03-names.md#n17) · [`$i`](03-names.md#n18) — ***flagged, not assumed.***

## <a id="the-words-owed"></a>The words owed — nine, and none is mine to take

*[Naming is Doug's.](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md) **Each row is a rename I intend to make and a word I do not have.** Where a proxy exists it is named and stands for correction; where none does, that is said rather than filled.*

| what needs a word | my proxy | where it came from |
|---|---|---|
| **what a class asks the theme for its type** | ***`setting`*** | *a setting is how type is set* — **and [the theme sprint already raised it](../projection/18-the-theme.md#names-owed-plan)** |
| **the collapsed word-grade reference to a book** — [S2](04-semantics.md#s2) | ***`$Name`*** | ***incumbent twice*** — [the derivation's own word](../the-semantics-of-books/05-the-evolutionary-root-symbol-and-literal.md) for *a symbol carrying one target*, **and a class this branch already had** |
| **this book** | ***The Condition Report*** | the conservator's term; **Doug's incumbent word is *wart*** |
| **what a compiled file IS** — cover · synopsis · chapter — [N4](03-names.md#n4) | ***none*** | *`Kind` is taken by `subject \| book`, so there are two kinds at two levels and one word* |
| **a card's fields** — [N10](03-names.md#n10) | ***none*** | *`properties` is not a book word and `entries` is taken by `$Book`* |
| **the mark in prose that cites a note** — [N15](03-names.md#n15) | ***none*** | *`$Denote` is a logic word* |
| **the library after resolving** — [N24](03-names.md#n24) | ***none*** | *a tense standing for a noun* |
| **where an answer came from** — [N26](03-names.md#n26) | ***none*** | *`Source` collides with a source FILE and with source CODE in the same folder* |
| **a book plus its card fields** — [N25](03-names.md#n25) | ***`Cards`*** | ***the file's own comment already calls them that*** |

*Two proxies already standing from earlier sprints are unchanged and still owed:* **`entries`** *on `$Book`, and* **how parts lay out** *· **whether unread matter is read** on `$Theme`.*

## <a id="actionable"></a>THE PROBLEMS TO SOLVE — next sprint works from this

*Doug, 2026-08-23: **"pare this down to the actionable things so we can address them next sprint"** and **"make sure this audit is known, and that you have been structuring my responses in the form of PROBLEMS TO SOLVE."*** **Every row is a problem, and every ruling he has given on the code is one of them.**

***Order ruled by him: SEMANTICS FIRST, THEN DRAWING*** — *because six of the drawing entries touch classes the semantic work re-parents, and the other order means touching them twice.*

### 0 · Hygiene — no ruling owed

| | the problem |
|---|---|
| **P1** | ***A book's card lists a chapter its own contents excludes***, on all seven books, because the compiler counts by position where the model answers — [I21](05-implementation.md#i21) |
| **P2** | **350 dead lines and 28 dead imports**, one of them a module importing itself — [O1](02-organization.md#o1) · [O6](02-organization.md#o6) |
| **P3** | **Three signatures carry a parameter nothing ever passes** — [I17](05-implementation.md#i17) |

### 1 · Semantics

| | the problem | his ruling |
|---|---|---|
| **P4** | ***Three classes are byte-identical where the design says they differ by validation*** — [S2](04-semantics.md#s2) | **`$Annotation` at `$Phrase` grade, each with its own `valid()`** |
| **P5** | **A card implements one of the two interfaces its book implements** — [S20](04-semantics.md#s20) · [S9](04-semantics.md#s9) | ***`$$Book` replaces the card, in `Book.tsx`, as `$Reference$<$Book>` AND `$Catalogue$<$Book>`; `$CardCatalogue` satisfies the interface it was specified against*** |
| **P6** | **Nothing carries what a book IS or what it is about** — [S17](04-semantics.md#s17) | **`$Writing.annotations`; `$Book` overrides it to lift from its cover; `<Type>Autobiography</Type>`; `library` recursive on the book and mirrored on `$$Book`** |
| **P7** | ***Four classes sit under a parent whose members they never use, or whose specification they silently narrow*** — [S3](04-semantics.md#s3) · [S5](04-semantics.md#s5) · [S6](04-semantics.md#s6) · [S18](04-semantics.md#s18) | **`$Code` → `$Paragraph` · `$IndexCard` and `$Bookmark` off writing · `$Link` → `$Phrase`** |
| **P8** | **`valid()` cannot be specialized, so every subclass replaces it silently** — [S8](04-semantics.md#s8) | ***protected parts, every child calling `super`, and a child that cannot is evidence it is not a subclass*** |
| **P9** | **One question answered several ways** — `copy` · `letters` · `title` · `document` · the invariants · two conditional ones — [S7](04-semantics.md#s7) · [S13](04-semantics.md#s13) · [I6](05-implementation.md#i6) · [I7](05-implementation.md#i7) · [I8](05-implementation.md#i8) · [I15](05-implementation.md#i15) | one answer, stated once |
| **P10** | ***Sixteen things in `lib` are static or module-level that are not members*** — [I22](05-implementation.md#i22) | **"There should be nothing static in this entire framework that is not a member. Fix that."** |

### 2 · Drawing

| | the problem | his ruling |
|---|---|---|
| **P11** | ***The framework declares a global type about styled-components, so a consumer cannot have their own theme*** — [I5](05-implementation.md#i5) | **a transient prop; the augmentation and 25 casts go — FIRST, so every later miss is a type error rather than a blank page** |
| **P12** | **33 style objects hold weight, tracking and leading no theme can reach; five classes skip the drawing template; one branches on a hex literal** — [I1](05-implementation.md#i1) · [I2](05-implementation.md#i2) · [I3](05-implementation.md#i3) | **every class holds its look as a component, injectable by prop, by subclass, by scope** |
| **P13** | **Three flags encode what the hierarchy or the notation already says, and one is dead** — [S12](04-semantics.md#s12) · [I4](05-implementation.md#i4) | `isCover` → `instanceof`, ***which deletes the eight-step walk***; `$display` is never set and goes; `$strong` reads the notation |
| **P14** | **The framework speaks two English sentences no book can reach** — [N33](03-names.md#n33) | one line each |

### 3 · Names — the words are given; these are the acts

| | the problem | his ruling |
|---|---|---|
| **P15** | ***`$for` means a key, a card and a reference, and one of the three is a prop for no reason*** — [N2](03-names.md#n2) | **`$key` · `place` (not a prop) · `$from`/`$to`, under *"don't make anything a prop unless it needs to be"*** |
| **P16** | ***An annotation cannot find its own card, so the compiler injects one into an authored element*** — [N2](03-names.md#n2) · [I14](05-implementation.md#i14) | *"`<Author>The Team</Author>` is what we want author to be. I think you understand the problem. **I want you to clean it up.**"* |
| **P17** | **Nine misfit names — two dissolve, seven rename** | ***"Take the set"*** — `reference` · `$place` · `$book` · `$target` · `carries` · `carried` · `authored`, with `set0` and `$Composible$` dissolving |
| **P18** | **Five predicates say the wrong thing about themselves** | ***`matter()` and `uniform()` STOP EXISTING*** — each thing handles its own case in its own view; `draws` → `reads`, `summarised` → `carriesSummary`, `asked` → `valid` |
| **P19** | **`$Theme.mark` is struck** — [N1](03-names.md#n1) | ***`$accent`*** — his own word, from the binding sprint |

### 4 · The compiler

| | the problem | his ruling |
|---|---|---|
| **P20** | **Thirteen modules of five kinds in one flat directory** — [O13](02-organization.md#o13) | ***`stages/` and `commands/`*** — *"the compiler is not the framework. It can have compiler words."* |
| **P21** | ***`Source` tracks how an answer was arrived at, and five of its six uses are printing*** | **make emitting idempotent and delete it; `unresolved` becomes a `Complaint`** |
| **P22** | **Two seam types where one would do, and a type called `Named` its own file calls cards** | ***"look for alternate designs"*** — one seam each stage enriches; `Named` is a card |
| **P23** | ***1,930 lines have had no member, interface or naming pass*** | **"We are auditing the compiler too."** *Reading, and it comes before P21 and P22 are built* |

### Design owed — no mechanism, no files, not this sprint

| | |
|---|---|
| [S10](04-semantics.md#s10) | how a consumer adds a notation |
| [S4](04-semantics.md#s4) | one `$Code` whose level moves — dynamic layering |
| [I16](05-implementation.md#i16) | ***lowering*** — the compiler fills in what can be inferred |
| [I11](05-implementation.md#i11) | a composition that is also a reference — the mixin |

### Left alone, with the reason

[N5](03-names.md#n5) · [N16](03-names.md#n16) · [N28](03-names.md#n28) · [S14](04-semantics.md#s14) · [I9](05-implementation.md#i9) · [I10](05-implementation.md#i10) · [I13](05-implementation.md#i13) — **not faults.**
[N9](03-names.md#n9) · [I12](05-implementation.md#i12) — **the harvest stays and owes prose.**
[O7](02-organization.md#o7) — **dissolves in the dev-library move.**
**Ten entries [out of scope](01-how-to-read-this.md#the-scope)** — the application, the demonstration, the Lab.

## <a id="every-entry"></a>EVERY ENTRY, AND WHERE IT WENT — the coverage ledger

***This is the index beneath [the problems](#actionable), not a second list of them.*** *A problem says what to fix; this says **where each of the ninety-three entries ended up**, so nothing can quietly fall out of the audit.* **[What is held rather than fixed is below.](#the-rest)**

*Doug, 2026-08-23: **"91 entries in the audit is a lot… remove ones that aren't about the framework and compiler… Try to pare this down to the actionable things so we can address them next sprint."*** **Pared. The scope is `lib` and the compiler, and the entries about the application, the demonstration and the Lab carry an OUT OF SCOPE marker with their identifiers kept** — ***nine of them, and the count is read off the entries rather than kept beside them:*** `O2` · `O3` · `O4` · `O5` · `O9` · `O12` · `I18` · `I19` · `I20`.

### A · IN THE SPRINT — [`Semantics, Then Drawing`](../projection/21-semantics-then-drawing.md)

*Every one is either mechanical or already ruled, and each appears there as a numbered requirement.*

| | |
|---|---|
| **the dead goes** | [O1](02-organization.md#o1) `Literature.tsx` · [O6](02-organization.md#o6) 28 dead imports and a self-import · [I17](05-implementation.md#i17) three dead parameters |
| ***the compiler bug*** | [I21](05-implementation.md#i21) — the card asks the book instead of counting it |
| **the theme becomes a transient prop** | [I5](05-implementation.md#i5) — deletes the global augmentation and 25 casts |
| ***every class holds its look*** | [I1](05-implementation.md#i1) · [I2](05-implementation.md#i2) · [I3](05-implementation.md#i3) — 33 style objects, the five classes that skip the template, the hex branch |
| ***the three identical classes become one*** | [S2](04-semantics.md#s2) — with three different `valid()`s, which is what the design always said |
| **`valid()` becomes a template** | [S8](04-semantics.md#s8) — protected parts, every child calling `super` |
| **three re-parents** | [S3](04-semantics.md#s3) `$Code` → `$Paragraph` · [S5](04-semantics.md#s5) `$IndexCard` · [S6](04-semantics.md#s6) `$Bookmark` · [S18](04-semantics.md#s18) `$Link` → `$Phrase` |
| ***`$$Book`*** | [S20](04-semantics.md#s20) — replaces the card, implements both interfaces, moves beside `$Book` |
| **annotations and `library`** | [S17](04-semantics.md#s17) — `$Writing.annotations`, `$Book` lifts from its cover, `library` recursive, `$$Book` mirrors |
| **three flags out** | [S12](04-semantics.md#s12) — `isCover` → `instanceof`, which deletes [I4](05-implementation.md#i4)'s walk; `$display` is **dead** and goes; `$strong` reads the notation |
| **one answer per question** | [S7](04-semantics.md#s7) `copy` · [S13](04-semantics.md#s13) `letters` · [I6](05-implementation.md#i6) the invariants · [I7](05-implementation.md#i7) `title` · [I8](05-implementation.md#i8) `document` · [I15](05-implementation.md#i15) the two conditional ones |
| **the catalogue implements its interface** | [S9](04-semantics.md#s9) — `$CardCatalogue` satisfies `$Catalogue$<$Book>`, as chapter zero specified |
| **small and obvious** | [I14](05-implementation.md#i14) the query string · [N6](03-names.md#n6) `open` · [N13](03-names.md#n13) `row` deleted · [N29](03-names.md#n29) `wordFor` → `compose` · [N31](03-names.md#n31) `emit` → `set` · [N32](03-names.md#n32) the stalled rename · [N33](03-names.md#n33) the two English strings |
| **and one already given** | [N1](03-names.md#n1) `$Theme.mark` → ***`$accent`*** — Doug's own word, [found in the binding sprint](../projection/19-the-binding.md) |

### B · A WORD IS OWED — the rename is decided, the word is not

*Fourteen, and they are one conversation rather than fourteen.* **[The register is here.](#the-words-owed)**

`$Composible$` · `set0` · `ref` (×9) · `$i` · `$in` · `url` · `contentish` · `$Denote` · `$for` · `$first` · `Role` · `Resolved` · `Named` · `Source` · the five predicates · `properties` · `written`/`printed` · and the compiler's two folder names

### C · CLOSED THIS PASS — the library had already answered

| | |
|---|---|
| [N28](03-names.md#n28) `selectMany` | ***ruled lawful*** — the composition is list-like, C# semantics, chosen |
| [I13](05-implementation.md#i13) the card's reflection | ***required*** — a card that knew every property in advance is not a catalogue |
| [I9](05-implementation.md#i9) `canonical` / `ref` | ***not a fault*** — references are not unique; a cover is both |
| [S1](04-semantics.md#s1) the missing classes | ***superseded*** — the hierarchy was tried and collapsed; the fault is [S2](04-semantics.md#s2) |
| [S15](04-semantics.md#s15) citing the theory | ***answered by [O8](02-organization.md#o8)*** — the book links to the file, and the link checker catches drift |

### D · DESIGN OWED — no mechanism, and no files

| | |
|---|---|
| [S10](04-semantics.md#s10) | **how a consumer adds a notation** — unblocked by [S16](04-semantics.md#s16) and still undesigned |
| [S4](04-semantics.md#s4) | **one `$Code` whose level moves** — needs dynamic layering |
| [I16](05-implementation.md#i16) | ***lowering*** — the compiler fills in what can be inferred; the largest thing here |
| [I11](05-implementation.md#i11) · part | **a composition that is also a reference** — the mixin, and `$Chemistry`'s template tracking |

### E · LEAVE · MONITOR

[N5](03-names.md#n5) · [N16](03-names.md#n16) · [S14](04-semantics.md#s14) · [I10](05-implementation.md#i10) — **not faults, with the reason on each.**
[N9](03-names.md#n9) · [I12](05-implementation.md#i12) — **the harvest stays and owes a chapter of prose.**
[O7](02-organization.md#o7) · [O13](02-organization.md#o13) — **the two copies dissolve in the dev-library move; the compiler's folders wait on two words.**

### And what is still unaudited

***THE COMPILER'S CODE — READ 2026-08-24, and the reading is [The Compiler](08-the-compiler.md).*** *This report had judged its folder and found one bug; the member, interface and naming passes have now run over all of it.* **Eight entries, and the headline is that NOT ONE IS A WRONG MECHANISM** — *every one is a thing said twice.* **[S22](08-the-compiler.md#s22) was live and is closed.**

> ***AND ONE PASS IS NOT THE HEAVY AUDIT DOUG IS ASKING FOR.*** *Doug, 2026-08-24: **"I want us to heavily audit the compiler if the framework is where we want it to be."*** **What ran was the three instruments `lib` got, over 2,000 lines, in one sitting.** *What has NOT been asked of the compiler is everything the framework was asked in [the letter](../projection/20-the-audit.md#the-letter-and-what-it-asked-for): what its principles ARE, what it cannot express, whether its seam is complete, and whether its words fit.* **[The next audit's scope is in the handoff.](../projection/21-semantics-then-drawing.md#the-compiler-audit)**

## <a id="the-rest"></a>THE REST OF THE AUDIT — what is NOT being cleaned, and who holds each piece

***Doug, 2026-08-23: "handoff the rest of the audit too because we have to keep track."*** **Everything the sprint does not take is here, with the reason and the holder.** *An entry that is not being fixed is not an entry that stopped mattering — it is an entry with a different owner or a different date, and the identifier is what carries it there.*

| what | which | why it is not in the sprint | who holds it |
|---|---|---|---|
| ***the application and the demonstration*** | **`O2` `O3` `O4` `O5` `O12` `I18` `I19` `I20`** — eight | ***scoped out by Doug***: *"remove ones that aren't about the framework and compiler."* **Every finding stands** | **whichever sprint takes those programs.** *Doug's own route: the demonstration becomes a dev library and the app's infrastructure lifts into the package* |
| ***the `$Chemistry` Lab*** | **`O9`** — one | *`$Chemistry`'s demonstration, not `lib`'s* | **the `$Chemistry` branch** |
| ***`$Chemistry`'s reflection road*** | **`C5`**, and **`C6`** struck under it | ***RULED: ignore.*** *Unexported, unintegrated, unreachable from outside the package — [measured, not assumed](07-the-three-codebases.md#c5)* | **Doug.** *It is his reflection system, a third wired* |
| ***the `$Chemistry` rename*** | **`C7`** — `Chemistry` becomes `$Chemistry` | ***taken, and it is not `lib`.*** **His condition is the whole of it: `$Chemistry`'s `dist` is rebuilt, then `lib`'s against it**, or [the repository runs two copies that disagree](02-organization.md#o7) | ***its own act, with the rebuild chain*** — [tracked as a requirement](../projection/21-semantics-then-drawing.md#r130) so it is not lost |
| ***design owed*** | **`S1`/`I11` · `S10`/`S4` · themes narrowing** — [three](#owed), and [four things we cannot yet implement](#what-we-cannot-do) | ***no mechanism.*** [A unit with no mechanism is not a unit](../../../../.claude/library/our-skillset/29-ce-plan.md#a-unit-with-no-mechanism-is-not-a-unit--added-out-of-sprint-48s-failure) | **a session of thinking, not a task** |
| ***the words owed*** | **fourteen names** — [the register](#the-words-owed) | ***the rename is decided; the WORD is not, and naming is Doug's*** | **one conversation, not fourteen** — [and it gates a requirement](../projection/21-semantics-then-drawing.md#r128) |
| **not faults** | `N5` `N16` `N28` `S14` `I9` `I10` `I13` — **LEAVE**, each with its reason | *most often the derivation's own vocabulary outranks the objection* | **closed** |
| **owed prose, not code** | `N9` `I12` — **MONITOR** | *the harvest stays and owes a chapter* | **the branch library** |
| ***the compiler's code*** | **1,930 lines, 18 modules** | ***never read as code the way `lib` was*** — no member pass, no interface pass, no naming pass | **[in the sprint](../projection/21-semantics-then-drawing.md#r124), and it is reading before it is building** |
| ***a struck word in the team library*** | **93 remaining uses of *specification*** | *this branch is clear; the identity repository is not* | **a tending pass in `.claude/`, which is [a different repository](01-how-to-read-this.md#the-scope)** |

***And one measurement is owed rather than fixed:*** **[C1](07-the-three-codebases.md#c1) — the demonstrations are 1.9x everything they demonstrate, and the same 2.7x ratio appears twice.** *The cleaning does not shrink them; it makes the framework's drawing reachable, which is what would.* **Re-measure the ratio after, because if it does not move, the drawing did not actually become reachable.**

## <a id="what-new-means"></a>What "the new stuff" means, and it is a date

**[The framework has five strata](01-how-to-read-this.md#the-strata).** *The cleaning is the last three:*

| stratum | born | in scope |
|---|---|---|
| the founding · **the writing spine** | 2026-07-21 · **07-31** | ***NO — this is the standard everything else is measured against*** |
| the apparatus | 2026-08-02/03 | only where it is named |
| **the filling-in** | 2026-08-07/12 | **yes** — [rush two](01-how-to-read-this.md#the-rushes) |
| **the copy-paste** | 2026-08-10 | **yes** — [rush one](01-how-to-read-this.md#the-rushes) |
| **the drawing** | 2026-08-19/21 | **yes** — [rush three](01-how-to-read-this.md#the-rushes), and it is most of the work |

***The July spine is not touched.*** **It has no flags, no drawing, no duplication, and getters that answer the question they name** — *and the point of the cleaning is to bring the rest to it, not to disturb it.*

## <a id="the-order"></a>The order, and where it is forced

*Three of the eleven steps have to be where they are. The rest is largest-value-first.*

| | step | entries | why here |
|---|---|---|---|
| **1** | **sweep the dead** | [O1](02-organization.md#o1) · [O6](02-organization.md#o6) | ***350 lines and 28 imports, zero risk*** — and it makes every later measurement honest |
| **2** | ***the theme becomes a transient prop*** | [I5](05-implementation.md#i5) | ***FORCED FIRST.*** Deleting the global augmentation in the same act turns every later missed `p.theme` into **a type error rather than a blank page** |
| **3** | **the theme gains its one member for type** | [I2](05-implementation.md#i2) | ***FORCED BEFORE 4*** — a style object cannot empty into a member that does not exist |
| **4** | ***every class holds its look as a component*** | [I2](05-implementation.md#i2) · [I1](05-implementation.md#i1) | **the largest step and the only visible one.** 33 style objects, 19 files, and the five classes that skip the template join it |
| **5** | **the copy-paste triple becomes one class** | [S2](04-semantics.md#s2) | 156 lines → ~75, **and it is the theory's own *differ by validation* written as code for the first time** |
| **6** | **three flags come out** | [S12](04-semantics.md#s12) | `isCover` → `instanceof`, ***which deletes [the eight-step walk](05-implementation.md#i4) with it***; `$display` and `$strong` read the notation |
| **7** | **one specification per question** | [I6](05-implementation.md#i6)–[I10](05-implementation.md#i10) · [S7](04-semantics.md#s7) · [S13](04-semantics.md#s13) | *`copy`'s three parenthetical answers · `title`'s third answer · `canonical`/`ref` · `$Section.document` · `letters`* |
| **8** | **the two English sentences leave** | [N33](03-names.md#n33) | one line each |
| **9** | **the strikes** | [N7](03-names.md#n7) · [N8](03-names.md#n8) · [N13](03-names.md#n13) · [N17](03-names.md#n17) · [N18](03-names.md#n18) · [N31](03-names.md#n31) · [N32](03-names.md#n32) | ***after 4***, because a rename during a sweep hides the sweep |
| **10** | **placement** | [O3](02-organization.md#o3) · [O4](02-organization.md#o4) · [O5](02-organization.md#o5) | *the app's two split concerns joined, the five styled files moved beside their books, the manifold's class moved to its folder* |
| **11** | **the demonstration stops fighting** | [O7](02-organization.md#o7) | ***LAST.*** [`instanceof` is false across the two copies of the framework](../solutions/05-the-suite-that-passed-against-a-stale-build.md), so **step 6 must land before the demo is judged** |

## <a id="the-shape"></a>The shape step 4 takes, because it is the one worth stating

***A class's look becomes a held component, and it is injectable at three levels — three mechanisms the framework already has.***

| level | how | what it is |
|---|---|---|
| **at the call site** | the property is `$`-prefixed, so it is a **prop** | *extrinsic context* |
| **by subclass** | reassign the property | *polymorphism* — **Doug's own named shape** |
| **by scope** | register a subclass | *dependency injection* |

**And a `$`-member is reactive, so [the live-toggled theme](../projection/18-the-theme.md#d42) arrives as a write rather than as a feature.**

***The pattern is incumbent, not new:*** [`$Paragraph`](../../package/src/writing/Paragraph.tsx) holds `Prose`, `Quotation`, `Item`, `Displayed` today and works. **Step 4 is that pattern reaching the other nineteen files.**

## <a id="not-touched"></a>What is deliberately NOT touched

*Named so it is not drifted into.*

- ***The July writing spine.*** [The standard](01-how-to-read-this.md#the-standard), and the reason the rest is legible.
- ***`$Path`, `$Location`, `$Bookmark`, `$Highlight`.*** *Doug: **"Sometimes there are aspects of the code which aren't even in use, yet we have implemented them because it is important that we support the semantics of SRT."*** **Unused-but-semantic stays.** *An EMPTY file supports no semantics, which is why [`Literature.tsx`](02-organization.md#o1) goes and these do not.*
- **The demonstration's aesthetics.** [R13](../projection/15-the-build.md) governs them.
- **The parse.** *Its counts must not move, and [its extension problem is design owed](#owed).*
- **`$Chemistry` and its Lab.** [O9](02-organization.md#o9) names one fault there and takes nothing.

## <a id="rulings"></a>The rulings — Doug's, and each one blocks something

| | question | what it blocks |
|---|---|---|
| **R-a** | ***What does `$Paragraph.$mark` become*** — classes, or notation in the model that the class reads? [S11](04-semantics.md#s11) | ***[S10](04-semantics.md#s10) cannot be designed before it***, because a parse that returns classes needs the classes decided |
| **R-b** | ***Where does the reasoning live?*** [O8](02-organization.md#o8) — `lib` has one comment line; `$Chemistry`, the compiler and the app are commented at every decision | whether ~500 compiler comment lines are harvested into [The Build](../projection/15-the-build.md) or `lib`'s rule is scoped to `lib` |
| **R-c** | ***Three proxy names.*** **`setting`** for what a class asks the theme for its type · **`$Name`** for the collapsed reference · **The Condition Report** for this book | nothing blocks, and [naming is his](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md) |

## <a id="owed"></a>Design owed — no files, no scenarios, and that is deliberate

*[A unit with no mechanism is not a unit](../../../../.claude/library/our-skillset/29-ce-plan.md#a-unit-with-no-mechanism-is-not-a-unit--added-out-of-sprint-48s-failure). **Three, and each is a session of thinking rather than a task.***

| | what must be designed | the unknown |
|---|---|---|
| **D-a** | **`$Composition<T>` where a host is also a reference** — [S1](04-semantics.md#s1) | ***a class-factory mixin, and whether `$Chemistry`'s per-class template tracking survives one*** |
| **D-b** | **How a consumer adds a notation** — [S10](04-semantics.md#s10) | **thirteen class names in two `if`-ladders and no extension point.** *No mechanism is proposed; proposing one badly is how the principle broke* |
| **D-c** | **How themes compose and narrow across levels** — *Doug's "the chapter theme contains a reference to the book theme"* | **two candidate mechanisms** — composition (typed narrowing, and [it runs into the variance defect already failing the demo](../solutions/20-the-narrowed-prop-that-disowned-its-base.md)) or **scope**, which already gives the hierarchy for free |

## <a id="what-we-cannot-do"></a>The four things we do not know how to implement

*Doug asked directly: **"Can we find certain use cases where we don't know how to implement the UI pattern that we want?"*** **Yes, four — each blocked at a named place rather than hand-waved.**

1. **A consumer adds a notation** — a callout, a table, a definition list. ***No route but overriding `compose` wholesale.*** [D-b](#owed).
2. **A reference form that is also a composition, without a static bag.** ***Blocked at single inheritance and at an unknown about `$Chemistry`.*** [D-a](#owed).
3. **A theme that narrows its own members in a subclass.** ***Blocked at a filed variance defect.*** [D-c](#owed).
4. **A compiled book that is a subclass** — [route C](../projection/18-the-theme.md#routes). **[`.book` and the canonical compute](../projection/19-the-binding.md#d50) is the answer and it is unbuilt.**

***None of the four is a missing feature.*** **Each is a place the abstraction has not been carried far enough** — which is the distinction this whole report keeps.

## <a id="the-size"></a>The size, measured before anything was divided

| | measured |
|---|---|
| the drawing surface changed | **1,100 lines across 20 files** |
| inline style objects to empty | **33**, in 19 files |
| styled components that already exist | **15**, in 4 files — ***the pattern is incumbent*** |
| `as never` casts the transient prop deletes | **25** |
| hand-forwarded composition lines | **230** |
| the copy-paste triple | **156 → ~75** |
| dead lines swept | **350**, plus 28 imports |

***Roughly 600–700 changed lines across about 30 files, and almost every step is a SUBTRACTION.*** **This is one to two sessions and it is not a divided plan** — *the same measurement that turned [The Build](../projection/15-the-build.md)'s seven tracks back into one session.*

### <a id="declarations"></a>3 · Declarations — RULED 2026-09-03, the newest problem on the list

***Doug: "In chemistry, we want: `inline = true;` / `override inline = true;` / `parenthetical = true;` / `persists = true;` … see if we can refactor $Chemistry so we can achieve this, and update the lib code to look like this."***

**The problem: a declaration should look like a declaration.** Today three things prevent it:

- [ ] **`persist` is a getter/setter pair over a `_persist` backing field** (with `hydration.clear` living in the setter) — it should be declarable as the bare field **`persists = true`**, the side effect moved to whatever seat actually needs it.
- [ ] **Live members make bare overrides a trap** — `override inline = false` on a type class broke block assembly because chemistry reads `child.inline` structurally, which is how `flows` was born as a dodge. The refactor makes such members safely overridable per class, and `flows` then dissolves back into `inline`.
- [ ] **Update lib to read exactly as ruled** — every kind declaring `inline`/`parenthetical`/`persists` as one-line fields, the $References `_persist`-era residue included.

## <a id="the-test"></a>How to know the cleaning worked

***Not a count.*** **Every gate this branch runs is a count, and [every entry in this report was true while all of them were green](01-how-to-read-this.md#why-no-gate).**

**Four things a count cannot fake:**

- ***One `$Title` drawn three ways on one page*** — by prop, by subclass, by registration — **and a fourth, untouched, still the default.**
- ***The demonstration's own 30-key theme object compiling, with `lib` installed.***
- ***`grep -c "style={{" src/` → 0*** · `as never` → **0** · `declare module` → **0** · display strings → **0**.
- ***A class opened at random reading as book semantics plus one held component.*** **Doug's own test, and the one that cannot be automated.**
