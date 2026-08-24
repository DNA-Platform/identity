# Semantics, Then Drawing

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

*Opened 2026-08-23 at the close of [The Audit](20-the-audit.md), which found the faults and collected the rulings. **Planned and part-built the same day, with Doug in the room. Status: `in flight` — [seventeen units landed](#the-ledger--the-work-as-it-runs), seventeen open.** Twenty-nine requirements, [thirty-four units](#the-units), and nothing built yet — **[three requirements and four units are his, ruled during the planning itself](#6--three-doug-ruled-at-the-plan--his-words-not-the-reports)**.*

*The title is **Doug's own sentence**, said when he was asked which half to do first: **"Semantics first, then drawing."** Standing for correction like every proxy on this branch.*

**Identifiers continue from [The Audit](20-the-audit.md).** Requirements run **R105–R133**, units **U109–U142**, decisions **D62–D75**, risks **K1–K8**. *[None is ever renumbered](../../../../.claude/library/our-skillset/29-ce-plan.md#the-unit-identifier-law); a deletion leaves a gap.*

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) — *done, and it was the audit* → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) — ***done, and it is [the decisions](#the-decisions), [the units](#the-units), [the scenarios](#the-test-scenarios) and [the risks](#the-risks)*** → **[ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) — next** → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

---

# The objective

***Fix the faults the audit found in `lib` and the compiler, in the order Doug ruled, without designing anything new.***

**His intent, in his own words across the audit:**

> *"Let's clean the new stuff."*
>
> *"Try to pare this down to the actionable things so we can address them next sprint."*
>
> *"Semantics first, then drawing."*
>
> *"There should be nothing static in this entire framework — not chemistry, just the `lib` framework — that is not a member. Fix that."*
>
> *"Don't force it if it is creating semantic situations where [things] seem forced."*

**And the frame the audit ran under, which still governs:** *`lib` realizes a first-order theory of semantics whose canonical semantics are library semantics*, **so a name that does not fit the semantics of books is a defect in the theory's realization and not a style preference.**

## Where the requirements come from, and why they are not restated here

***Every requirement below is [one of the Condition Report's 23 problems](../the-condition-report/06-the-cleaning.md#actionable)***, and each of those carries **the ruling Doug gave, verbatim, next to the entry that measured the fault.** *The report is the account; this chapter is the work.* **Read the problem before planning the requirement** — several of the rulings carry a warning that changes what the fix may do.

***These requirements are APPROVED.*** *Doug ruled each one in the room, which is what [ce-plan's first step](../../../../.claude/library/our-skillset/29-ce-plan.md) asks for before it will run.*

# Requirements

## 0 · Hygiene — nothing here is owed a decision

| | in plain words | the problem |
|---|---|---|
| <a id="r105"></a>**R105** | **A book's card and a book's contents agree about its chapters** — today the card lists a chapter the contents excludes, on all seven books, because the compiler counts by position where the model answers | [P1](../the-condition-report/06-the-cleaning.md#actionable) · [I21](../the-condition-report/05-implementation.md#i21) |
| <a id="r106"></a>**R106** | **The dead code is gone** — 350 lines nothing imports and 28 unused imports, one of them a module importing itself | [P2](../the-condition-report/06-the-cleaning.md#actionable) |
| <a id="r107"></a>**R107** | **No signature carries a parameter nothing passes** — there are three | [P3](../the-condition-report/06-the-cleaning.md#actionable) · [I17](../the-condition-report/05-implementation.md#i17) |

## 1 · Semantics — first, by Doug's order

| | in plain words | the problem |
|---|---|---|
| <a id="r108"></a>**R108** | **The author, the subject and the canonical differ by their validation and not by being copied** — today they are byte-identical under a name substitution, where the theory says validation is the whole of the difference. They gain a shared parent at phrase grade, each with its own `valid()` | [P4](../the-condition-report/06-the-cleaning.md#actionable) · [S2](../the-condition-report/04-semantics.md#s2) |
| <a id="r109"></a>**R109** | **A card implements everything a book implements** — a surrogate that satisfies one of two interfaces is not standing in for the book. Doug's ruling replaces the card outright | [P5](../the-condition-report/06-the-cleaning.md#actionable) · [S20](../the-condition-report/04-semantics.md#s20) |
| <a id="r110"></a>**R110** | **A book carries what it IS and what it is ABOUT, and its card mirrors them** — nothing carries either today; the annotations lift from the cover to the book, and a book's library is recursive | [P6](../the-condition-report/06-the-cleaning.md#actionable) · [S17](../the-condition-report/04-semantics.md#s17) |
| <a id="r111"></a>**R111** | **Nothing extends a parent whose members it does not use, and no child silently narrows what its parent specifies** — four classes do | [P7](../the-condition-report/06-the-cleaning.md#actionable) |
| <a id="r112"></a>**R112** | **Validation can be specialized rather than replaced** — today every subclass overrides `valid()` whole, so a parent's requirement disappears without anyone saying so | [P8](../the-condition-report/06-the-cleaning.md#actionable) · [S8](../the-condition-report/04-semantics.md#s8) |
| <a id="r113"></a>**R113** | **One question is answered once** — six questions currently have several answers apiece, among them what a thing's copy is, what its title is, and which document it sits in | [P9](../the-condition-report/06-the-cleaning.md#actionable) |
| <a id="r114"></a>**R114** | **Nothing in the framework is static or module-level unless it is a member** — sixteen things are, and two of them are the same function written twice in two files | [P10](../the-condition-report/06-the-cleaning.md#actionable) · [I22](../the-condition-report/05-implementation.md#i22) |

## 2 · Drawing — second, and only after the semantics move

| | in plain words | the problem |
|---|---|---|
| <a id="r115"></a>**R115** | **A consumer of the package can have their own theme** — today the framework declares a global type about styled-components, so they cannot. ***This one goes first within its group***, because once it is done every later miss is a type error rather than a blank page | [P11](../the-condition-report/06-the-cleaning.md#actionable) · [I5](../the-condition-report/05-implementation.md#i5) |
| <a id="r116"></a>**R116** | **Every class holds its look as a component, changeable by prop, by subclass and by scope** — 33 style objects currently hold weight, tracking and leading that no theme can reach, five classes skip the drawing template, and one branches on a hex literal | [P12](../the-condition-report/06-the-cleaning.md#actionable) · [I2](../the-condition-report/05-implementation.md#i2) |
| <a id="r117"></a>**R117** | **No flag encodes what the hierarchy or the notation already says** — three do, one of them is never set, and removing one deletes an eight-step walk | [P13](../the-condition-report/06-the-cleaning.md#actionable) |
| <a id="r118"></a>**R118** | **No English sentence is hardcoded where a book cannot reach it** — the framework speaks two | [P14](../the-condition-report/06-the-cleaning.md#actionable) · [N33](../the-condition-report/03-names.md#n33) |

## 3 · Names — the words are given; these are the acts

| | in plain words | the problem |
|---|---|---|
| <a id="r119"></a>**R119** | **No word carries two meanings** — `$for` currently means a key, a card and a reference, and one of the three is a prop for no reason. ***"Don't make anything a prop unless it needs to be"*** | [P15](../the-condition-report/06-the-cleaning.md#actionable) · [N2](../the-condition-report/03-names.md#n2) |
| <a id="r120"></a>**R120** | **An annotation finds its own card** — today it cannot, so the compiler injects one into an element a person authored. *"I think you understand the problem. I want you to clean it up."* | [P16](../the-condition-report/06-the-cleaning.md#actionable) · [I14](../the-condition-report/05-implementation.md#i14) |
| <a id="r121"></a>**R121** | **The nine misfit names are taken** — two dissolve and seven are renamed to the words Doug gave: *"Take the set"* | [P17](../the-condition-report/06-the-cleaning.md#actionable) · [Names](../the-condition-report/03-names.md) |
| <a id="r122"></a>**R122** | **A predicate says what it tests** — five do not, and two of the five stop existing entirely, because a thing handles its own case inside its own view | [P18](../the-condition-report/06-the-cleaning.md#actionable) |
| <a id="r123"></a>**R123** | **The theme's struck word is replaced** — `mark` becomes `$accent`, which is Doug's own word from the binding sprint | [P19](../the-condition-report/06-the-cleaning.md#actionable) · [N1](../the-condition-report/03-names.md#n1) |

## 4 · The compiler — which is audited too, and may use compiler words

| | in plain words | the problem |
|---|---|---|
| <a id="r124"></a>**R124** | ***The compiler's 1,930 lines get the member, interface and naming pass the framework got*** — they have never had one. **This is reading, and it comes before R125 and R126 are built** | [P23](../the-condition-report/06-the-cleaning.md#actionable) |
| <a id="r125"></a>**R125** | **The compiler's thirteen modules are organized by what they do** — five kinds currently sit in one flat directory | [P20](../the-condition-report/06-the-cleaning.md#actionable) · [O13](../the-condition-report/02-organization.md#o13) |
| <a id="r126"></a>**R126** | **Nothing tracks how an answer was arrived at merely in order to print it** — five of `Source`'s six uses are printing; making emitting idempotent deletes it | [P21](../the-condition-report/06-the-cleaning.md#actionable) |
| <a id="r127"></a>**R127** | **There is one seam type per stage, and a type called `Named` is called what its own file calls it** — a card. Doug asked for alternate designs here rather than a rename | [P22](../the-condition-report/06-the-cleaning.md#actionable) |

## 5 · Three the problems list did not carry, found by reading every entry against it

***The [coverage ledger](../the-condition-report/06-the-cleaning.md#every-entry) was built by walking all ninety-three entries against the twenty-three problems.*** **Three actionable things had no problem to sit in**, which is the reason a ledger exists at all.

| | in plain words | the problem |
|---|---|---|
| <a id="r128"></a>**R128** | ***The struck and stalled names are taken*** — seventeen entries are marked for this step and only nine appear among the problems. **`$first`, `$in`, `url`, `contentish`, `properties`, `written`/`printed`, the theme's three structural stand-ins and the two dead ones are the rest.** ***GATED: fourteen of them are [waiting on a word that is Doug's to give](../the-condition-report/06-the-cleaning.md#the-words-owed), and that is one conversation rather than fourteen*** | [the ledger, B](../the-condition-report/06-the-cleaning.md#every-entry) |
| <a id="r129"></a>**R129** | **Each of the three programs states what its own unit of code is, and why** — a class in `lib`, a concern in `$Chemistry`, a phase in the compiler. *All three are defensible; **what is not defensible is that nothing says so.*** **One page, not a refactor** | [C2](../the-condition-report/07-the-three-codebases.md#c2) |
| <a id="r130"></a>**R130** | ***`Chemistry` becomes `$Chemistry`*** — the one class in that package wearing no `$`, and `$` itself is an instance of it. **NOT a one-character act:** `$Chemistry`'s `dist` is rebuilt, then `lib`'s against it, or the repository runs two copies that disagree. ***This is outside `lib` and is its own act*** | [C7](../the-condition-report/07-the-three-codebases.md#c7) |


## 6 · Three Doug ruled AT THE PLAN — his words, not the report's

***Added 2026-08-23 while the guardrails were being written, because he was in the room.*** *They are requirements like any other and they carry their own identifiers.*

| | in plain words | where it came from |
|---|---|---|
| <a id="r131"></a>**R131** | ***No abstraction wears a trailing `$`*** — the leading one stays. **`$Reference$`, `$Composition$` and `$Catalogue$` lose it**; [`$Composible$`](#u128) was dissolving anyway. ***Verified before it was taken: no bare name collides anywhere*** | ***Doug, at the plan:*** *"Is there any need for `$Catalogue$` — the two `$` convention? I don't think there are any naming collisions that arise from removing it. If I am right, remove the trailing `$` on all abstractions, while leaving the leading one"* · [D73](#d73) |
| <a id="r132"></a>**R132** | ***Nothing shows or hides an instance except `$show`/`$hide`, and showing or hiding parentheticals is not a theme's job*** — **`$Theme.$reads` and `$Theme.draws()` stop existing**, and parentheticals hide | ***Doug, at the plan:*** *"Don't we have show and hide on all chemicals already?"* … *"I'm just talking about props that show or hide an instance. Don't overthink. But showing / hiding parentheticals isn't part of a theme. Remove it. Hide parentheticals"* · [D74](#d74) |
| <a id="r134"></a>**R134** | ***No newline formats anything, and it matters most IN THE VIEW*** — **the framework stops joining readings with `

`, and the demonstration and the test library stop separating paragraphs with it.** *Where a view wants a paragraph it asks `$` for one* | ***Doug, at the plan:*** *"Remove `

` from the entire framework everywhere. This is still a web app. We do not format with newlines. Use a paragraph tag or something!! … That is the equivalent of `<br>` in html."* and *"If basic JSX doesn't give you newlines in your text, it just shows you should be asking `$` for Paragraph, and using that in the view"* · [D76](#d76) |
| <a id="r133"></a>**R133** | ***One question is asked by one name: `follow()` drops and `read()` takes it*** — **[`$Catalogue$` declares both with the identical signature](../../package/src/reference/Catalogue.tsx), and [`$Book.read()` is literally `return this.follow()`](../../package/src/book/Book.tsx)** | ***Doug, at the plan:*** *"The follow was probably supposed to be read… I think it's a relic of an older abstraction"*, then *"Unless follow is tied to an abstraction — and I don't think that it is or should be — drop follow and let it be read"* · [D72](#d72) |

## Who takes what — proposed, because territory does not reach these paths

***[Territory](../../../../.claude/library/..teamsmanship/05-territory.md) assigns the application and the demonstration and stops there.*** **Neither `package/src` — the framework — nor `build/` — the compiler — has a named owner**, so Arthur holds them as the `**` fallback. *That is a gap in the territory record and not a gap in the work; it is flagged here rather than fixed, because the record lives in another repository.*

| group | proposed | why |
|---|---|---|
| **hygiene** · R105–R107 | **Arthur** | *structure and dead weight; nothing here is anyone's perspective* |
| ***semantics*** · R108–R114 | ***Cathy***, with **Libby** on the book words | *the framework's own semantics, and the words are library words* |
| **drawing** · R115–R118 | **Phillip**, with **Gabby** | *the visible layer, and the look-as-component shape is a design decision as much as a code one* |
| **names** · R119–R123, R128 | **Libby**, ruled by **Doug** | ***the words are his***, and a librarian holds the register until he gives them |
| **the compiler** · R124–R127 | **Arthur**, with **Adam** | *`build/` is infrastructure, and the reading comes first* |
| **the rebuild chain** · R130 | ***Adam*** | *a dependency rebuild across two packages is exactly his question* |
| ***every requirement's promise*** | ***Queenie*** | **[a test is a promise](../../../../.claude/library/..teamsmanship/..team/queenie/test-architecture/.cover.md)**, and this sprint is mostly subtraction, which is where a promise is worth most |

# The order, and it is ruled rather than chosen

***Hygiene → semantics → drawing → names → the compiler.***

**Doug's reason for the middle pair:** *semantics first, then drawing* — and the audit's reason is that **six of the drawing requirements touch classes the semantic work re-parents**, so the other order means touching them twice.

**Two orderings inside the groups are load-bearing and neither is a preference:**

- ***[R115](#r115) precedes every other drawing requirement***, because deleting the global augmentation turns every remaining miss into a compile error instead of a page that renders wrong.
- ***[R124](#r124) precedes [R125](#r125) and [R126](#r126)***, because a reorganization planned before the reading is a guess about what the modules are.
- ***The names come AFTER the drawing***, which is [the audit's own reason](../the-condition-report/06-the-cleaning.md#the-order): **a rename during a sweep hides the sweep.**
- ***The theme gains its member for type before any style object empties into it*** — a style object cannot move into a member that does not exist.

**The audit wrote an eleven-step order before Doug ruled the groups.** *[It stands as the within-group detail](../the-condition-report/06-the-cleaning.md#the-order) — the forced positions above are read off it — and **the group order here supersedes it**, because it was written first.*

# The decisions

***Every one names what it was chosen over.*** **Identifiers continue from [The Audit](20-the-audit.md) at D62.** *Nothing here re-decides anything Doug ruled — [his rulings are the requirements](../the-condition-report/06-the-cleaning.md#actionable) and they sit upstream of this section.*

| | the decision | chosen over |
|---|---|---|
| <a id="d62"></a>**D62** | ***The group order stands and it costs one safety net.*** [R115](#r115) was FORCED FIRST of everything in [the audit's eleven steps](../the-condition-report/06-the-cleaning.md#the-order); under Doug's groups it is first *within drawing*, which is third. **So the semantic group edits nineteen files still carrying `theme={theme as never}`, with no type error to catch a miss** | *reordering.* **The group order is Doug's and the eleven-step order was written before it.** *Mitigated by [K1](#k1), which measures the cast count before the semantics group and again after — and the mitigation is a measurement rather than a promise* |
| <a id="d63"></a>**D63** | ***The `valid()` template lands FIRST inside the semantics group*** — [U113](#u113) before the re-parents, the card and the annotation | *its position in the requirement list.* **Four later units each write a `valid()`**, and a template arriving after its clients means writing all four twice |
| <a id="d64"></a>**D64** | ***The card gains its second interface BEFORE the annotation rules are written against it*** — [U115](#u115) and [U116](#u116) precede [U117](#u117) | *writing the three rules against today's card.* **[S20](../the-condition-report/04-semantics.md#s20) says the members those rules need — `canonical`, `entries`, `parts()` — are `$Catalogue$`, unimplemented**, so the alternative is inventing members and then deleting them |
| <a id="d65"></a>**D65** | ***The static ruling is satisfied by inheritance and by ordinary members, and it has NO residue.*** **Measured this session: 48 `$Composible$` call sites in 8 files.** Six receivers already extend `$Writing`, which declares every one of those members — so the static dissolves by ***deleting a redundant override***. `$Book` extends `$Referent` and implements the same six itself | *a mixin.* **[That is the half single inheritance cannot reach and it is design owed](../the-condition-report/04-semantics.md#s1-constraint).** ***This decision originally carried [`follow()`](#u120) as a referral; [Doug ruled it at the plan](#d72) and there is no residue left*** |
| <a id="d66"></a>**D66** | ***The compiler reading produces a CHAPTER, not a diff*** — [U132](#u132) is the one unit whose output is prose | *folding it into the reorganization.* **The requirement forbids it in its own words**: a reorganization planned before the reading is a guess about what the modules are |
| <a id="d67"></a>**D67** | ***The fourteen owed words gate a unit and not the plan.*** [U131](#u131) is the only unit that cannot start without them, and the names group is fourth of five | *asking now.* [It is one conversation rather than fourteen questions](../the-condition-report/06-the-cleaning.md#the-words-owed), and it can happen at any point before the group opens |
| <a id="d68"></a>**D68** | ***`$Chemistry`'s rename runs LAST and alone*** — [U137](#u137), after `lib`'s suite is green | *doing it first, or anywhere in the middle.* **The rebuild chain invalidates every measurement taken before it** — [`instanceof` is already false across the two copies of the framework](../solutions/05-the-suite-that-passed-against-a-stale-build.md), *and that line already cost four wrong measurements in two days* |
| <a id="d69"></a>**D69** | ***The demo is a unit with its own identifier*** — [U138](#u138) — **and the drawing group does not close without it** | *a closing flourish.* [ce-review fails a demo described rather than shown](../../../../.claude/library/our-skillset/33-ce-review.md), and [one `$Title` drawn three ways](../the-condition-report/06-the-cleaning.md#the-test) is the first of the four things a count cannot fake |
| <a id="d70"></a>**D70** | ***[R118](#r118) takes SIX English strings, not two.*** **Re-measured this session** — [N33](../the-condition-report/03-names.md#n33) counted `'Table of Contents'` and `'Open '`; four more stand: **`'by '` and `'in '` in [`Cover.byline`](../../package/src/book/Cover.tsx), `'previous'` and `'next'` in [`Book.turning`](../../package/src/book/Book.tsx)** | *taking the entry's count.* **Same fault, same fix, and the entry undercounted by four** — *recorded as a correction with the number on both sides, because [a tally kept beside the register it describes drifts](../the-condition-report/05-implementation.md#i6)* |
| <a id="d71"></a>**D71** | ***[R117](#r117) delivers two flags of three, and the third is recorded as NOT A DUPLICATE.*** *`isCover` has exactly two sites — **Doug at the plan: "No isCover. You can answer that with an instanceof"** — and `$display` is provably dead* — **but `$strong` is composed as a boolean at [`Sentence.tsx:69`](../../package/src/writing/Sentence.tsx), `strong={open.length > 1}`, and the `**` that decided it is consumed by `stressed()` and discarded** | *forcing it, and also renaming it.* ***The entry's premise fails rather than the fix being hard*** — **nothing else in the system knows strong-ness, so the flag duplicates nothing** — and [S16's mentioned part](../the-condition-report/04-semantics.md#s16) is the answer Doug already ruled, so *anything built now is built to be deleted.* **Recorded as a correction to [S12](../the-condition-report/04-semantics.md#s12), standing for his objection** |
| <a id="d72"></a>**D72** | ***`follow()` drops and `read()` takes it — Doug's ruling at the plan, and the evidence was already in the interface.*** **[`$Catalogue$` declares `read(): $Composition$<T>` and `follow(): $Composition$<T>`](../../package/src/reference/Catalogue.tsx) — the same signature, twice** — and [`$Book.read()`](../../package/src/book/Book.tsx) is `return this.follow()`. *A promise already asserts they agree:* **[`cataloguing.test.tsx:151`](../../package/tests/book/cataloguing.test.tsx)** | *finding `follow()` a home.* **The question was never where a static should live — it was that one question wore two names**, and [the report files that exact fault three times one altitude down](../the-condition-report/05-implementation.md#i9) |
| <a id="d73"></a>**D73** | ***The trailing `$` goes from every abstraction — and the collision sweep is what licensed it.*** **The only bare `$Reference` and `$Catalogue` anywhere are in [`chemistry/package/src/implementation/`](../../../chemistry/package/src/implementation/), NEITHER IS EXPORTED, and `$Reference` appears ZERO times in every `.d.ts` in chemistry's `dist`** — *[which is C5's ruling confirmed from the other side](../the-condition-report/07-the-three-codebases.md#c5)* | *keeping it.* ***And there is a second argument the instruction did not have:*** **in `$Chemistry` the trailing `$` already means SYMBOL KEY** — `$template$`, `$parent$`, `$type$`, `$activeView$`, **38 uses of `$type$` alone** — *so `lib` spelling* interface *with the mark its own substrate spells* symbol key *is [one word carrying two meanings](../the-condition-report/03-names.md), across two packages that ship together* |
| <a id="d74"></a>**D74** | ***The theme stops deciding what is drawn.*** **[`$Particle` carries `$show`/`$hide` universally](../../../chemistry/package/src/abstraction/particle.ts) with a registered render filter, shipped in [`chemistry.d.ts:346`](../../../chemistry/package/dist/) — so `lib` never needed a visibility member.** *Doug: **"showing / hiding parentheticals isn't part of a theme. Remove it. Hide parentheticals."*** | *renaming `draws()` to `reads()`, which is what [U129](#u129) planned.* ***The member does not get a better name — it stops existing***, and one owed word dissolves with it: *"whether unread matter is read"* |
| <a id="d75"></a>**D75** | ***A property does not need a `$` to be reactive, and this was CHECKED rather than assumed.*** **[`bond.ts`](../../../chemistry/package/src/abstraction/bond.ts): `if (!property.startsWith("$")) return true;` — a plain property is reactive BY DEFAULT**, `$x` is reactive by `isSpecial`, and [`@inert()`/`@reactive()`](../../../chemistry/.lib/reactivity/06-decorators.md) ship as the overrides | *my own assumption, which was backwards.* ***So in `lib` the `$` marks EXTRINSIC CONTEXT and not reactivity*** — **which makes [Doug's "don't make anything a prop unless it needs to be"](../the-condition-report/03-names.md#n2) free to obey: [`$Bookmark.$for` → `place`](#u126) loses the prop and keeps the reactivity.** *Doug, at the plan: "Parenthetical isn't a constant. And it doesn't need a `$` to be reactive. Check. It was fine as is"* || <a id="d76"></a>**D76** | ***A newline is a division said twice.*** **The division is `parts()`** — joining a reading with `

` re-encodes the structure as a character, *and the browser collapses it anyway.* ***One grade down the framework already knows this***: the space between two words is [a mentioned `$Punctuation`](../the-condition-report/04-semantics.md#s16), **a real object in the model rather than a delimiter in a join** | *keeping it.* **Measured: exactly FOUR newline uses in `package/src`** — three produce formatting (`$Book.copy`, `$Document.copy`, `$IndexCard.copy`) and one reads notation (`$Section.compose`'s quote strip, which stays). ***And the framework's own incumbent separator for a reading is a SPACE***, already used by `$Legend.copy`, `$Section.tagline` and the reading a book's `read()` builds — `

` was the outlier in two members |


# The units

***Identifiers begin at U109 and are never renumbered.*** **Each names the mechanism it builds — *what runs, and when* — the files it touches, what it depends on, and what is visible when it is done.** *A unit that could not answer the first is marked and denied files, per [the planning rule](../../../../.claude/library/our-skillset/29-ce-plan.md#a-unit-with-no-mechanism-is-not-a-unit--added-out-of-sprint-48s-failure).*

**The units run in the order written.** *Where an order is forced rather than chosen, the unit says so.*

## 0 · Hygiene — four units, no design, no ruling owed

### <a id="u109"></a>U109 — The three orphan files go · [R106](#r106)

**Mechanism.** *Deletion.* **Three files match no quoted specifier in any of the four programs** — re-verified this session, and **the sweep runs FROM THE FILE rather than from a guessed specifier**, [which is the practice the orphan defect installed](../solutions/24-the-orphan-that-was-not-an-orphan.md).

| file | lines | importers |
|---|---|---|
| [`package/src/library/Literature.tsx`](../../package/src/library/Literature.tsx) | **0** | none |
| [`app/src/teaser.tsx`](../../app/src/teaser.tsx) | **198** | none |
| [`package/app/src/apparatus/case-shell.tsx`](../../package/app/src/apparatus/case-shell.tsx) | **152** | none |

***And one thing is stated rather than left implied: only the zero-byte file is in `lib`.*** **The 350 lines land in the application and the demonstration, so this requirement shrinks `package/src` by nothing at all** — *it removes three files whose location is a false claim about who needs them.* **`$Literature` stays [a name the derivation uses](../the-semantics-of-books/08-the-symbolizing-dyad-and-the-register.md) and [owed a real class](../the-condition-report/04-semantics.md#s9)**, because an empty file keeps no promise.

**Depends on** nothing. **Numeric end:** three files, `0` importers before and after.

**Demo contribution.** *None, and it is the one unit where that is correct* — **it makes every later measurement honest**, which is why it is first.

### <a id="u110"></a>U110 — The dead imports and the self-import go · [R106](#r106)

**Mechanism.** `tsc --noEmit --noUnusedLocals` names every one; `React` is excluded because the JSX transform makes it formally unused everywhere. ***Re-measured this session: 28 in `package/src` — exactly the audit's figure*** — **and 42 across the whole typecheck, so the extra 14 are in `tests/` and are the same act.**

| worst | |
|---|---|
| [`Section.tsx`](../../package/src/writing/Section.tsx) | **5**, ***one of which is the file importing itself*** — `import * as sections from './Section'`, never used |
| [`Word.tsx`](../../package/src/writing/Word.tsx) | 4 |
| [`Letter.tsx`](../../package/src/writing/Letter.tsx) · [`Footer.tsx`](../../package/src/document/Footer.tsx) | 3 each |

*A dead import is small on its own and is evidence in bulk:* **it says the file was edited by adding rather than by reading.**

**Files.** *16 files in `package/src`, **named by the compiler rather than by a search***. **Depends on** [U109](#u109) — *a deleted file cannot report an unused import.*

**Numeric end:** non-React `TS6133` in `src/` → ***28 → 0***, ***with the whole-project figure stated beside it***, because [a green number without the red one beside it is what ce-review rejects](../../../../.claude/library/our-skillset/33-ce-review.md).

### <a id="u111"></a>U111 — Three dead parameters go · [R107](#r107)

**Mechanism.** *Three signatures, each carrying a parameter no call site supplies or no body reads.*

| | why it is dead |
|---|---|
| [`shown(theme, of, parts, uniform, page)`](../../package/src/writing/Writing.tsx) | **both call sites pass `0`** — [the sprint that struck `page` from the model left it in the one function that would have used it](../the-condition-report/05-implementation.md#i17) |
| [`$Book.stands(theme)`](../../package/src/book/Book.tsx) | takes a theme and **never reads it** |
| [`$Theme.lay(of, uniform)`](../../package/src/writing/Theme.tsx) | answers from `uniform` alone; *the base signature promises a distinction it never makes* |

> ***The third is a judgement and is flagged rather than assumed.*** **`lay(of, uniform)`'s `of` is an extension point** — a subclass may lay out differently *for a particular composition* — **so removing it narrows what a consumer can override.** *The unit removes the two that are dead and states the third as a question, because **a parameter a subclass could use is not the same as a parameter nothing passes**.*

**Files.** `Writing.tsx` · `Book.tsx` · `Theme.tsx`, and `shown`'s call sites in `Writing.tsx` and [`Document.tsx`](../../package/src/document/Document.tsx). **Depends on** nothing.

### <a id="u112"></a>U112 — The card asks the book for its chapters · [R105](#r105)

**Mechanism.** [`catalogue.ts:39`](../../build/catalogue.ts) slices a live book's chapters by position — `live.chapters.slice(2, 3 + book.chapters.length)` — **where the book answers the question directly.**

***The compiler's own comment states the assumption out loud*** — *"the compiler wrote this composition, so it knows its shape"* — **and [its own best principle says not to rely on that](../../build/resolve.ts):** *what a subject holds falls out of where its books sit,* ***which is why nothing has to be maintained in two places.***

***A book can be asked what its chapters are. It was counted instead, and the two answers drifted immediately.*** **The model already excludes the cover, the contents and the catalogued synopses**, so the reading the card wants is the book's own — *and where they disagree today, [the model is right and the count is wrong](../solutions/25-the-card-that-listed-a-chapter-the-contents-did-not.md).*

**Files.** [`build/catalogue.ts`](../../build/catalogue.ts). **Depends on** nothing. ***It sits in hygiene rather than in the compiler group because it is a one-line correction of a shipping fault***, not part of the compiler's unread pass.

**Numeric end:** ***cards whose chapter list disagrees with their own book's contents → 7 → 0.***

**Demo contribution.** ***The catalogue page stops listing a chapter the book does not show.*** *A hand-authored page could fake the list; it could not fake the two agreeing after a regeneration.*

## 1 · Semantics — seven units, and the order inside is forced twice

### <a id="u113"></a>U113 — `valid()` becomes a template · [R112](#r112)

**Mechanism.** ***Doug's, ruled in full at [S8](../the-condition-report/04-semantics.md#s8):*** *"the parent version should be implemented with PROTECTED METHODS that can be more specifically overridden… You should find a way to elegantly ALWAYS extend `valid`, architecting the implementation as needed."*

```
$Word.valid()     = super.valid() && this.whole() && this.said()
      protected whole()   one unbroken stretch
      protected said()    at least one letter or number

$Phrase       overrides whole()      a name contains spaces
$Punctuation  overrides said()       a mark says nothing
$Link         inherits $Phrase's     once U114 re-parents it
```

**Every child calls `super.valid()`. Every narrowing is one named method. Nothing is silently repealed.** *The fault was never the hierarchy and never the silence — it is that `valid()` is a monolith, so a subclass with one part to narrow replaces the whole method.*

***And the ruling carries its own diagnostic, which this unit runs:*** *"if a child doesn't call the parent `valid`, it suggests that perhaps IT IS NOT A SUBCLASS."* **Run against the package today it names [`$IndexCard`](../../package/src/library/IndexCard.tsx) and [`$Bookmark`](../../package/src/book/Bookmark.tsx)** — ***which is [U114](#u114) reached by a second instrument, and the strongest evidence in the report that those two re-parents are real.***

**Files.** [`Word.tsx`](../../package/src/writing/Word.tsx) · [`Phrase.tsx`](../../package/src/writing/Phrase.tsx) · [`Punctuation.tsx`](../../package/src/writing/Punctuation.tsx) · [`Writing.tsx`](../../package/src/writing/Writing.tsx) · [`Legend.tsx`](../../package/src/document/Legend.tsx), **and every `valid()` the diagnostic names.** *36 implementations exist in `src`; the unit reads all of them and changes the ones that repeal.*

**Depends on** nothing. ***FORCED FIRST in its group by [D63](#d63).***

**Numeric end:** ***reported as a LIST, not a count*** — **every `valid()` that still does not call `super` is named, with the reason.** *[`$Referent.valid()` is the floor](../../package/src/reference/Referent.tsx), so zero is not the right answer and pretending it is would hide the two classes the diagnostic exists to find.*

### <a id="u114"></a>U114 — Four re-parents · [R111](#r111)

**Mechanism.** *Four classes sit under a parent whose members they never use, or whose specification they silently narrow. Each moves to the parent the derivation already names.*

| | today | becomes | why |
|---|---|---|---|
| [`$Code`](../../package/src/writing/Code.tsx) | `extends $Figure` | ***`extends $Paragraph`*** | ***Doug: "Code is not a Figure… CODE IS WRITING."*** [S3](../the-condition-report/04-semantics.md#s3). **`$caption` leaves with the inheritance**, taking `caption={asFence[1].trim() \|\| 'code'}` — *a fence captioned with the literal word `code`* — out of [`Section.compose()`](../../package/src/writing/Section.tsx) |
| [`$Link`](../../package/src/reference/Link.tsx) | `extends $Word` | ***`extends $Phrase`*** | ***Doug: "Links too should be phrasal."*** [S18](../the-condition-report/04-semantics.md#s18) — **every multi-word link is currently a `$Word` carrying whitespace, passing only because the subclass repeals its parent.** *A `$Phrase` is still a `$Word`, so links stay enumerable among a sentence's words* |
| [`$IndexCard`](../../package/src/library/IndexCard.tsx) | `extends $Writing` | ***off writing*** | **sixteen inherited members, zero used** — [S5](../the-condition-report/04-semantics.md#s5). *It extends `$Writing` for one constructor line: `this.inline = false`* |
| [`$Bookmark`](../../package/src/book/Bookmark.tsx) | `extends $Sentence` | ***off writing*** | **it inherits the sentence parse and uses none of it** — [S6](../the-condition-report/04-semantics.md#s6). *Right folder by [the stated rule](04-the-member-audit.md), wrong parent* |

***The two that leave writing need a destination, and it is [`$Referent`](../../package/src/reference/Referent.tsx)*** — **the base of the hierarchy, declaring `valid()`, which both already override outright.** *That is a move rather than a design: `$Referent` is a class, both already implement `$Reference$<T>` on their own, and neither reads a writing member.*

**Files.** `Code.tsx` · `Figure.tsx` · `Link.tsx` · `IndexCard.tsx` · `Bookmark.tsx` · `Section.tsx` *(the fence caption)* · `index.ts`. **Depends on** [U113](#u113) — *`$Link` inherits `$Phrase`'s narrowing, which does not exist until the template does.*

**Numeric end:** **`$Code` no longer answers `caption`** · **a two-word link is valid without repealing `$Word`** · **`$IndexCard` and `$Bookmark` inherit zero writing members.**

**Demo contribution.** ***A code block in the demonstration stops carrying a caption reading `code`.*** *Visible on any page with an unlabelled fence.*

### <a id="u115"></a>U115 — `$$Book` replaces the card · [R109](#r109)

**Mechanism.** ***Doug's sentence exactly:*** *"It has to implement catalogue of book. It needs to be a reference for a book."* **[S20](../the-condition-report/04-semantics.md#s20) shows the pattern is uniform at every level with no exceptions:**

```
$$Chapter    ::  $Reference$<$Chapter>    ,  $Catalogue$<$Section>
$$Section    ::  $Reference$<$Section>    ,  $Catalogue$<$Paragraph>
$$Word       ::  $Reference$<$Word>                                    ← the floor catalogues nothing

$$Book       ::  $Reference$<$Book>       ,  $Catalogue$<$Book>        ← what this unit builds
```

**`$Book` is `$Composition$<$Chapter>` and `$Catalogue$<$Book>`, and its reference form mirrors that.** ***The members the annotation rules need — `canonical`, `entries`, `parts()` — are not omissions to argue with: they are `$Catalogue$`, unimplemented***, and implementing the second interface closes [S17](../the-condition-report/04-semantics.md#s17)'s two gaps by construction with no member invented.

***And the discipline that governs how it pays is [S20](../the-condition-report/04-semantics.md#s20)'s:*** **`$of` is not in any interface.** *[`$Reference$`](../../package/src/reference/Reference.tsx) requires `copy`, `parenthetical`, `read()` and `then()`; the field that answers `read()` is the class's own business.* ***Ask what a class OWES, then ask how it pays.***

**Files.** [`Book.tsx`](../../package/src/book/Book.tsx) — ***`$$Book` lives beside `$Book`, [as ruled](../the-condition-report/04-semantics.md#s19)*** — · [`IndexCard.tsx`](../../package/src/library/IndexCard.tsx) · [`CardCatalogue.tsx`](../../package/src/library/CardCatalogue.tsx), which **satisfies `$Catalogue$<$Book>` in the same act** *([S9](../the-condition-report/04-semantics.md#s9), and [chapter zero specified it that way eleven weeks ago](00-planning.md))* · `index.ts` · the generated `$Card` in [`build/catalogue.ts`](../../build/catalogue.ts).

**Depends on** [U113](#u113). ***FORCED BEFORE [U117](#u117) by [D64](#d64).***

> ***This is one of the sprint's two seams.*** **The framework side and the compiler side are written against one shape**, and [a contract is corrected by implementation and never by rereading](../../../../.claude/library/our-skillset/29-ce-plan.md#a-contract-is-corrected-by-implementation-never-by-rereading). ***If the generated class cannot be written as specified, believe the builder and change the shape*** — [the last contract on this branch carried two faults and neither was found by anyone looking at it again](15-the-build.md).

**Numeric end:** ***`$$Book` implements both interfaces and `tsc` proves it*** — **an interface a class claims and does not satisfy is a compile error**, which is why this is checkable without a test.

**Demo contribution.** ***A card answers `entries` and `canonical` on the catalogue page*** — *the two questions [a shelf of title pages cannot answer](../the-condition-report/04-semantics.md#s17).*

### <a id="u116"></a>U116 — Annotations become a member of writing, and `library` goes recursive · [R110](#r110)

**Mechanism.** ***Four steps, [each a member rather than a mechanism](../the-condition-report/04-semantics.md#s17-lifting), and all four are Doug's own.***

1. ***`$Writing.annotations: $Annotation[]`*** — **the base member.** *Today [`$Cover.author`](../../package/src/book/Cover.tsx) finds one with `this.words.find(w => w instanceof $Author)`; that becomes the general form at every level.*
2. ***`$Book.annotations` overrides it to lift from its cover*** — *"LIFT the subject and author annotations — if not all annotations — from the cover to the book."* **The overriding IS how lifting evolves**, rather than a rule the framework fixes.
3. ***`$Type` is an annotation whose content is its name*** — `<Type>Autobiography</Type>` — **one shape for every annotation**, and what `Autobiography` MEANS is written in the books rather than encoded in a class. *[Ruled 2026-08-23](../the-condition-report/04-semantics.md#s17-type), replacing the inheritance answer of the day before, and **the inheritance question is explicitly deferred***.
4. ***`library` is a property of `$Book`, computed recursively*** — *itself where it catalogues itself, otherwise its subject's* — **and `$$Book` gets it because its interface mirrors the book's.** *"Yes it should be recursive."*

***A letter has no annotations, and the reason is structural rather than a rule:*** **an annotation is phrasal, and a letter cannot contain a phrase.**

***And the recursion opens nothing***, which is the point: **a card's subject is another card**, and [the generated catalogue already writes the fixed point](../../build/catalogue.ts) — `library.$subject = library`. *That is [the auto-categorical summit](../the-semantics-of-books/07-the-subjective-subject-and-the-library.md) already true in the emitted file, so the computation terminates by construction rather than by a guard.*

***One thing this unit REMOVES, and it is worth naming.*** **[`$Book.library`](../../package/src/book/Book.tsx)'s current climb calls `pointed()`, which calls `card.read()` — and `read()` LOADS THE BOOK.** *Validating through books opens every book on the path; [a card compute opens none](../the-condition-report/04-semantics.md#s17), which is what makes the rule affordable at 95 books and at 95,000.*

**Files.** `Writing.tsx` · `Book.tsx` · `Cover.tsx` · **a new `$Type`** beside the other annotations · `index.ts` · `build/catalogue.ts`. **Depends on** [U115](#u115).

**Numeric end:** ***`$Book.library` resolves with ZERO `read()` calls on the path.*** *Doug's own check from [Sprint Four](00-planning.md): **"is there a traversal anywhere in the code?"***

**Demo contribution.** ***A book on the shelf shows what it IS and what it is ABOUT, lifted from its cover*** — and **a `<Type>` on one book the others do not carry.**

### <a id="u117"></a>U117 — `$Annotation` at phrase grade, with three `valid()`s · [R108](#r108)

**Mechanism.** ***Doug's, ruled 2026-08-22:*** *"You can make a base class called an **`$Annotation`** and have all three come from that. An annotation would probably be at the `$Phrase` level… **Figure out how to implement that based on the library card they have access to.**"*

**Measured: [`$Author`](../../package/src/book/Author.tsx), [`$Subject`](../../package/src/book/Subject.tsx) and [`$Canonical`](../../package/src/book/Canonical.tsx) are byte-identical under name substitution** — *every member, and the only differences are the class name and one word inside an error string.* **[Datable to one commit](../the-condition-report/01-how-to-read-this.md#the-rushes): `b91944e`, 2026-08-10.** ***Not three classes designed alike — one class copied twice in a sitting.***

**The three rules, and each is one compute and one comparison that opens no book:**

| | the rule Doug gave | what it asks the card |
|---|---|---|
| ***`$Subject`*** | ***"the book should be in its own subject"*** | **my book's card computes one step and arrives at yours** |
| ***`$Author`*** | ***"the canonical autobiography of the library"*** | **your card is the canonical of your library's card, AND your card's author is you** |
| ***`$Canonical`*** | *the target is held by the subject naming it* | **you are among what I hold** |

***`$Author`'s two halves together are the structure***, [ruled 2026-08-23](../the-condition-report/04-semantics.md#s17-type): *"It IS a structural fact. The author of a book should be a book that is of type autobiography AND its author link should point to itself."* **A book carrying the type without closing the loop is invalid; a book closing the loop without the type is not an autobiography by name.**

**Files.** ***a new `Annotation.tsx`*** · `Author.tsx` · `Subject.tsx` · `Canonical.tsx` · `index.ts`. **Depends on** [U113](#u113), [U115](#u115), [U116](#u116).

***Where the rules RUN, and it must remain a caller rather than a home.*** **[`validate.ts`](../../build/validate.ts) is already the phase that holds every book at once and already says *"it invents no rules."*** *But [a rule that lives in the compiler is a rule the browser cannot ask](../designing-inexplicable-phenomena/05-the-live-library.md), and a library people write into needs the same rule at the moment writing arrives.*

**Numeric end:** ***156 lines → about 75***, and **three `valid()` bodies that differ.** *The three files stop matching under name substitution, which is the fault stated as a measurement.*

**Demo contribution.** ***Repoint an author at a book that does not author itself and watch the failure name it*** — [the negative proof chapter zero asked for](00-planning.md). *A catalogue can be faked with prose and a validation failure can be faked with a hardcoded string; **a loop that is either closed in the model or is not cannot be.***

### <a id="u118"></a>U118 — One question, one answer · [R113](#r113)

**Mechanism.** *Six questions have several answers apiece, and one pair has already drifted. Each becomes one statement.*

| | the question | the fix |
|---|---|---|
| [I6](../the-condition-report/05-implementation.md#i6) | ***the book's invariants*** — six errors thrown from the bond constructor at `Book.tsx:203-213`, the same six stated as `$valid` calls at `304-320` | **one statement, two readers.** ***The drift is already visible*** — the constructor says *"one whose reference comes home"*, `valid()` says *"and this one accounts only for other books"* |
| [I7](../the-condition-report/05-implementation.md#i7) | ***`title`*** — three answers, one reimplementing half of `canonical` inline | **[`$TableOfContents`](../../package/src/book/TableOfContents.tsx) delegates to `canonical`** instead of copying one of its three clauses and dropping the other two |
| [I8](../the-condition-report/05-implementation.md#i8) | ***"what document am I in"*** — a bounded careful walk that throws with a reason, and a bare cast | **[`$Section`](../../package/src/writing/Section.tsx) adopts [`$Denote`](../../package/src/document/Denote.tsx)'s walk**, which was written for exactly this and has been sitting two files away |
| [I9](../the-condition-report/05-implementation.md#i9) · [N32](../the-condition-report/03-names.md#n32) | ***`canonical`/`ref`, and `contents`/`tableOfContents`*** — one member under two names, twice | **one member each** — ***and it says that a book's reference IS its canonical***, a theorem rather than a coincidence it satisfies twice |
| [S7](../the-condition-report/04-semantics.md#s7) | ***`copy` and parenthetical matter*** — the two ends skip it, the middle includes it, and nothing says why | **[`$Document`](../../package/src/document/Document.tsx) joins the specification [the settled account states once](../the-semantics-of-books/15-the-levels-of-writing.md)** |
| [S13](../the-condition-report/04-semantics.md#s13) | ***`letters`*** — a sentence splits `copy` into graphemes; every other level flatMaps its words | **`$Sentence.letters` joins the chain the other four use** |
| [I15](../the-condition-report/05-implementation.md#i15) · part | ***two `try`/`catch` blocks make an invariant conditional*** | **`$Cover` and `$TableOfContents` state their own specification** instead of catching their parent's and rethrowing sometimes. ***An invariant with a `catch` around it is not an invariant.*** **The other seven catches are MONITORED and not touched** |

> ***One gate number moves here and it is named in advance.*** **`CHECK` counts letters**, and `$Sentence.letters` joining the chain changes that count. *The new number is recorded as the baseline in the same act, with the difference explained* — **a gate number that moves quietly is how a drift becomes a fact.**

**Files.** `Book.tsx` · `Cover.tsx` · `TableOfContents.tsx` · `Document.tsx` · `Section.tsx` · `Sentence.tsx`. **Depends on** [U113](#u113) — *the two conditional catches are `valid()` work.*

**Numeric end:** ***the six invariants stated once*** · ***`CHECK`'s letter count before and after, with the difference explained rather than absorbed.***

### <a id="u119"></a>U119 — The module-level functions become members · [R114](#r114)

**Mechanism.** ***Doug: "There should be nothing static in this entire framework — not chemistry, just the `lib` framework — that is not a member. Fix that."***

| | where | becomes |
|---|---|---|
| `canonicals(cover)` | [`Book.tsx`](../../package/src/book/Book.tsx) | a member of the thing it takes as its first argument |
| `pointed(reference)` | `Book.tsx` | ***dissolves with [U116](#u116)*** — the library computation that needed it stops opening books |
| `blocks(prose)` | [`Section.tsx`](../../package/src/writing/Section.tsx) | a member of `$Section` |
| `reading(of)` + the module-level `WeakMap` | [`Writing.tsx`](../../package/src/writing/Writing.tsx) | ***a hand-rolled memo standing outside the framework's own reactivity, in the framework.*** **[I16](../the-condition-report/05-implementation.md#i16) is the design that dissolves it and is NOT this sprint**, so the unit moves it onto the class and leaves the mechanism alone |
| ***`shown(…)`, which is EXPORTED*** | `Writing.tsx` | a member — *and it loses a parameter in [U111](#u111)* |
| ***`written(part)`, byte-identical in two files*** | [`Paragraph.tsx:24`](../../package/src/writing/Paragraph.tsx) and [`Sentence.tsx:29`](../../package/src/writing/Sentence.tsx) | ***the warning applies here and nowhere else*** |

> ***The warning is the part to keep, and it is Doug's:*** *"You were the one that wanted `$Writing` to be its own class because so much is shared. **DON'T FORCE IT** if it is creating semantic situations where things seem forced."*
>
> **`written()` is a validity test a paragraph and a sentence happen to share, not something every writing does** — *sharing it upward would put a member on `$Letter` that means nothing there.* ***Where a thing is shared by two siblings and not by the family, it belongs to neither the module nor the base.*** **So it becomes a member on each of the two, and the duplication is the honest answer.**

***The ~20 regexes are constants and outside the ruling*** — **except [`Section.tsx:32`](../../package/src/writing/Section.tsx), where `display` is a FUNCTION returning a fresh regex because a `g` regex carries state.** *That one is a mechanism rather than a constant.*

**Files.** `Writing.tsx` · `Book.tsx` · `Section.tsx` · `Sentence.tsx` · `Paragraph.tsx`. **Depends on** [U111](#u111), [U116](#u116).

**Numeric end:** ***module-level functions doing a member's work in `lib` → 8 → 0.***

### <a id="u120"></a>U120 — The class statics dissolve · [R114](#r114)

**Mechanism.** ***Measured this session: 48 `$Composible$` call sites across 8 files.*** **A static taking `of` as its first argument is a member with the receiver written out** — *and for six of the eight receivers, that member already exists.*

| receiver | why the static goes | how |
|---|---|---|
| `$Writing` and everything under it — `$Sentence` · `$Paragraph` · `$Section` · `$Chapter` · `$TableOfContents` and the `$$` forms | ***they already inherit `canonical`, `where`, `select`, `selectMany`, `single`, `at` from [`$Writing`](../../package/src/writing/Writing.tsx)*** — **the static is a redundant override, not a mechanism** | **delete the override; the member answers** |
| [`$Book`](../../package/src/book/Book.tsx) | **extends `$Referent`, not `$Writing`** | **implements the same six itself** — *three lines each, no static, no mixin* |
| ***`follow()`*** | ***it stops existing*** — **[U141](#u141)** | *`read()` answers it* |

***This unit originally carried `follow()` as a referral to Doug. He ruled it at the plan and [it became its own unit](#u141)***, so **R114 now has no residue at all**: every one of the seven statics has a home or a deletion.

***`$Composible$` still does not become a class in this sprint.*** **[The composition half of S1 is DESIGN OWED](../the-condition-report/04-semantics.md#s1-constraint)** — *a `$$` form must be both a composition and a reference, TypeScript gives one supertype, and whether [`$Chemistry`'s per-class template tracking](../../../chemistry/.lib/particle/01-identity.md) survives a mixin is not known.* **What this unit does is empty it**, so the class that remains is a name waiting on a design rather than a bag of live statics.

**Files.** `Composition.tsx` · `Writing.tsx` · `Book.tsx` · `Chapter.tsx` · `TableOfContents.tsx` · `Paragraph.tsx` · `Section.tsx` · `Sentence.tsx`. **Depends on** [U119](#u119), [U141](#u141).

**Numeric end:** ***`$Composible$` call sites → 48 → 0.*** **The share of the 230 hand-forwarded lines that goes is reported rather than predicted.**

### <a id="u141"></a>U141 — `follow()` drops and `read()` takes it · [R133](#r133)

**Mechanism.** ***Doug's ruling at the plan, and the evidence was already sitting in the interface.*** **[`$Catalogue$`](../../package/src/reference/Catalogue.tsx) declares two members with the identical signature:**

```ts
read(): $Composition$<T>;
follow(): $Composition$<T>;
```

**And [`$Book`](../../package/src/book/Book.tsx) settles which is real:** `read()` is `return this.follow();`. ***One question under two names — [the fault this report files three times one altitude down](../the-condition-report/05-implementation.md#i9), sitting in an interface where it propagates to every implementor.***

***Traced through all six declarations before it was taken:***

| | `read()` returns | `follow()` returns | |
|---|---|---|---|
| [`$Book`](../../package/src/book/Book.tsx) | *delegates to `follow()`* | the books it catalogues | ***pure duplication*** |
| `$$Paragraph` · `$$Section` · `$$Chapter` · `$$Sentence` | the thing — ***and the thing IS the composition*** | the dereferenced parts | ***`read().parts()` === `follow().parts()`*** |
| [`$TableOfContents`](../../package/src/book/TableOfContents.tsx) | the whole book | its LISTED chapters | ***the only real difference*** |

***The `$$` case is the one worth stating:*** **`$$Paragraph.read()` returns a `$Paragraph`, and a `$Paragraph` already IS a `$Composition$<$Sentence>`.** *So the real object answers what the synthetic reading was built to answer, and `follow()` constructs a fake composition standing next to a real one.*

***And a promise already asserts the duplication.*** **[`cataloguing.test.tsx:151`](../../package/tests/book/cataloguing.test.tsx) checks `shelf.read().parts()` on the line after checking `shelf.follow().parts()`, and expects the same answer.**

> ***The contents is the one that changes, and the library already ruled it.*** **[S19](../the-condition-report/04-semantics.md#s19): *"`$TableOfContents` — NOT a reference form of a book — a catalogue of CHAPTERS, because it holds chapter references."*** *So its `read()` answers its listed chapters and stops returning the book.*
>
> ***That will collide with [`$Chapter.read(): $Book`](../../package/src/book/Chapter.tsx), which the contents inherits — and the collision is written here rather than restructured around.*** **It is the design saying that a contents inherits a reference obligation S19 says it does not have**, and the implementer meets it with that sentence in hand.

**Files.** [`Catalogue.tsx`](../../package/src/reference/Catalogue.tsx) — *the interface stops declaring one question twice* — · `Book.tsx` · `Chapter.tsx` · `TableOfContents.tsx` · `Paragraph.tsx` · `Section.tsx` · `Sentence.tsx` · `Composition.tsx`, **and 15 call sites across three test files.**

**Depends on** [U113](#u113), [U115](#u115).

**Numeric end:** ***`follow` → 0 declarations, 0 call sites*** · **`$Catalogue$` declares one act where it declared two** · ***the 15 promises that called `.follow()` call `.read()` and still stand.***

**Demo contribution.** ***Following a card from the catalogue opens its book by the same name a chapter uses to open its own.*** *One verb, every level.*

## 2 · Drawing — five units, and the first is forced

### <a id="u121"></a>U121 — The theme becomes a transient prop · [R115](#r115)

**Mechanism.** ***FORCED FIRST IN ITS GROUP.*** **[`dressing.ts`](../../package/src/writing/dressing.ts) declares a global module augmentation about somebody else's types:**

```ts
declare module 'styled-components' {
    export interface DefaultTheme extends $Theme {}
}
```

***Shipped inside the package, so every consumer of `lib` who uses styled-components with their own theme has a type error.*** **The demonstration IS that consumer** — *its 30-key design-token object is rejected by its own `ThemeProvider`, and that is two of the six errors currently failing its typecheck.*

***And the framework still writes `theme={theme as never}` at 25 call sites, so the augmentation does not even satisfy its own uses.*** **Measured: there is no `ThemeProvider` anywhere in `package/src`, and transient `$`-props are already incumbent** — `$side` on [`Step`](../../package/src/book/Book.tsx), `$open` on [`Row`](../../package/src/book/TableOfContents.tsx). *So the augmentation does one job a transient prop does without reaching into anyone else's module.*

***Deleting the augmentation and the casts in the SAME act is the whole point:*** **every later missed theme becomes a type error rather than a page that renders wrong.**

**Files.** `dressing.ts` *(deleted)* and the files carrying `as never` — `Book.tsx` · `Cover.tsx` · `TableOfContents.tsx` · `Paragraph.tsx` · `Synopsis.tsx` and their siblings. **Depends on** the semantics group being finished, [per D62](#d62).

**Numeric end:** ***`declare module` → 1 → 0*** · ***`as never` → 25 → 0*** · **the demonstration's unexpected typecheck errors → 6 → 4 or fewer**, *with the remaining ones named individually rather than absorbed.*

**Demo contribution.** ***The demonstration's own 30-key theme object compiling, with `lib` installed*** — [the second of the four things a count cannot fake](../the-condition-report/06-the-cleaning.md#the-test).

### <a id="u122"></a>U122 — The theme gains its member for type · [R116](#r116)

**Mechanism.** ***FORCED BEFORE [U123](#u123): a style object cannot empty into a member that does not exist.***

**[`$Theme`](../../package/src/writing/Theme.tsx) today answers `ink`, `ground`, `rule`, `faint`, `mark`, `face`, `mono`, `measure`, `leading`, `rhythm`, `step(at)` and `reads` — and no member reaches weight, tracking, or leading per level.** *So [R63's promise that the default carries no aesthetic opinion](18-the-theme.md#r63) is false in nineteen files, and **a consumer restyling a title cannot change its weight, its tracking or its leading without reimplementing `set()`.***

**What the 33 objects hold that no theme can reach**, measured: `fontWeight: 600` · `letterSpacing: '-0.02em'` · `lineHeight: 1.15 / 1.25 / 1.5 / 1.55 / 1.65` · `borderRadius: '4px' / '3px'` · `fontSize: '0.88em'` · `padding: '0.1em 0.35em'` · `textUnderlineOffset: '0.15em'`.

***The member is one thing — what a class asks the theme for its TYPE — and [the word is owed](../the-condition-report/06-the-cleaning.md#the-words-owed).*** **The proxy is `setting`, because a setting is how type is set**, and [the theme sprint already raised it](18-the-theme.md#names-owed-plan). *The unit builds the member under the proxy and the proxy stands for correction, [as every proxy on this branch does](../the-condition-report/01-how-to-read-this.md#the-scope).*

***And [N27](../the-condition-report/03-names.md#n27) is taken here rather than at the rename step***, because this unit opens `Theme.tsx` anyway: **`Laid`, `Composed` and `Lay` are structural stand-ins invented to dodge a circular import, and they are the theme's whole public type surface.**

**Files.** `Theme.tsx` · `index.ts`. **Depends on** [U121](#u121).

**Numeric end:** ***every value the 33 objects hold has a theme member that answers it*** — **the list above is the checklist, and a value with no member is a gap named rather than inlined.**

### <a id="u123"></a>U123 — Every class holds its look as a component · [R116](#r116)

**Mechanism.** ***The largest unit in the sprint and the only visible one. The pattern is incumbent, not new.***

**[`$Paragraph`](../../package/src/writing/Paragraph.tsx) holds `Prose`, `Quotation`, `Item` and `Displayed` as properties today and it works.** *Fifteen styled components already exist across four files — `$Paragraph`, `$Book`, `$Cover`, `$TableOfContents`.* ***This unit is that pattern reaching the other nineteen files.***

**A held component is injectable at three levels — [three mechanisms the framework already has](../the-condition-report/06-the-cleaning.md#the-shape):**

| level | how | what it is |
|---|---|---|
| **at the call site** | the property is `$`-prefixed, so it is a **prop** | *extrinsic context* |
| **by subclass** | reassign the property | *polymorphism* — **Doug's own named shape** |
| **by scope** | register a subclass | *dependency injection* |

***And a `$`-member is reactive, so [the live-toggled theme](18-the-theme.md#d42) arrives as a write rather than as a feature.***

**Four things ride with it and none is separable:**

- ***The five classes that skip the drawing template join it*** — `$Figure` · `$Legend` · `$Denote` · `$Document` · `$TableOfContents` override `view()` outright and never reach `gathered()`/`set()`. *`$Document` re-implements `gathered` inline, twelve lines below the one it inherits.* **[`$Book`'s override is D49 and correct](19-the-binding.md#d49)** — *a book is in charge of its own reading environment* — **and stays.**
- ***`named()` dissolves into `set()`*** — [a second, undeclared drawing entry point](../the-condition-report/05-implementation.md#i1) on the three annotations, called only from `$Cover.byline` while their own `set()` returns `null`. ***So a subclass overriding `set()` on an author changes nothing on screen today.***
- ***The hex branch goes*** — `background: theme.ground === '#ffffff' ? '#f6f7f9' : theme.rule` at [`Code.tsx:25`](../../package/src/writing/Code.tsx). **This breaks [D40](18-the-theme.md#d40) exactly**: *a theme's values are OPAQUE to the framework*, and **a theme answering `var(--ink)` takes the wrong side of that ternary silently.**
- ***[`Row`](../../package/src/book/TableOfContents.tsx) is a DELETION, not a rename*** — [N13](../the-condition-report/03-names.md#n13): **[B1 already ruled it](19-the-binding.md#the-board), a reference draws its own row.**

**Files.** ***19 files carrying 33 style objects, counted this session:*** `Author` **2** · `Canonical` **2** · `Subject` **2** · `Synopsis` **5** · `Document` **1** · `Footer` **2** · `Footnote` **1** · `Legend` **3** · `Highlight` **1** · `Link` **1** · `Code` **1** · `Emphasis` **2** · `Figure` **2** · `Formula` **1** · `Section` **1** · `Snippet` **1** · `Subtitle` **1** · `Tagline` **1** · `Title` **3**.

**Depends on** [U122](#u122) ***and on [U117](#u117)***, because the three annotations are re-parented and rewritten there — *[which is the audit's own reason for semantics before drawing](../the-condition-report/06-the-cleaning.md#actionable): six drawing entries touch classes the semantic work re-parents, and the other order means touching them twice.*

**Numeric end:** ***`grep -c "style={{" src/` → 33 → 0.***

**Demo contribution.** ***This unit IS [U138](#u138)'s precondition.*** **Nothing about it is reviewable until a `$Title` can be drawn three ways.**

### <a id="u124"></a>U124 — Two flags out, and the third is not a flag · [R117](#r117)

**Mechanism.** *Three flags encode what the hierarchy or the notation already says. Two are clean and the third is not, [per D71](#d71).*

| | today | verified this session | becomes |
|---|---|---|---|
| ***`$Cover.isCover`*** | a `readonly` boolean | ***exactly two sites*** — the declaration, and [`Title.opening`'s eight-step walk](../../package/src/writing/Title.tsx) | **`instanceof $Cover`**, ***which deletes the walk with it*** |
| ***`$Formula.$display`*** | a prop | ***DEAD*** — **nothing in `lib`, the demonstration, the application or the corpus sets it.** *The only other `$display` is [the demonstration's own `latex.tsx`](../../package/app/src/sections/page/latex.tsx), a different class* | **deleted**, *and both display branches of `set()` go with it because they are unreachable* |
| ***`$Emphasis.$strong`*** | a boolean prop | ***composed at [`Sentence.tsx:69`](../../package/src/writing/Sentence.tsx) — `strong={open.length > 1}` — and the `**` that decided it is consumed by `stressed()` and discarded*** | ***STAYS*** — *[D71](#d71)* |

> ***The eight-step walk is worth its own sentence, because [F11 records what its unbounded version cost](19-the-binding.md#f11):*** **twenty promises reported as *zero run* rather than as failures, and `Worker exited unexpectedly`.** *Two assumed hops, a magic bound of eight, and a duck-typed flag — for a question `instanceof $Cover` answers.*

> ***And `$strong` is not the fault the entry describes.*** **[S12](../the-condition-report/04-semantics.md#s12) says it encodes what the notation already says — but the notation is consumed by the parse and discarded, so nothing else in the system knows strong-ness and the flag duplicates NOTHING.** *The premise fails rather than the fix being hard.*
>
> ***[S16](../the-condition-report/04-semantics.md#s16) is the answer Doug already ruled*** — the notation becomes a mentioned part and `$strong` dissolves with `$mark` — **so anything built now is built to be deleted.** *The entry is corrected in place and the flag stands.*

**Files.** `Cover.tsx` · `Title.tsx` · `Formula.tsx`. **Depends on** [U123](#u123) — *`$Title`'s `set()` is rewritten there and the walk sits inside it.*

**Numeric end:** ***`isCover` → 2 sites → 0*** · **`$display` deleted, and `typeset()` stops taking a `displayMode` that is always `false`.**

### <a id="u125"></a>U125 — The framework stops speaking English · [R118](#r118)

**Mechanism.** ***Six strings, not two — [D70](#d70).*** *The framework speaks where a book should.*

| | where |
|---|---|
| `'Table of Contents'` | [`TableOfContents.tsx:61`](../../package/src/book/TableOfContents.tsx) — *a fallback when no section names it* |
| `'Open ' + named` | [`Synopsis.tsx:38`](../../package/src/book/Synopsis.tsx) |
| ***`'by '` · `'in '`*** | [`Cover.tsx:76,78`](../../package/src/book/Cover.tsx) — **the byline** |
| ***`'previous'` · `'next'`*** | [`Book.tsx:284-285`](../../package/src/book/Book.tsx) — **the turning nav**, *and [`$Book.turning`'s `mark` parameter goes with them](../the-condition-report/04-semantics.md#s16): it is a word and it should say so* |

***Each becomes a member a book can answer***, by the same mechanism [U123](#u123) installs for components — *a property a subclass, a prop, or a scope can replace.* **One line each.**

**Files.** `TableOfContents.tsx` · `Synopsis.tsx` · `Cover.tsx` · `Book.tsx`. **Depends on** [U123](#u123).

**Numeric end:** ***display strings in `package/src` → 6 → 0.***

**Demo contribution.** ***A book in the demonstration overrides one of the six and the page says its word instead of the framework's.***

## 3 · Names — the words are given; these are the acts

***After the drawing, and [the reason is the audit's](../the-condition-report/06-the-cleaning.md#the-order): a rename during a sweep hides the sweep.***

### <a id="u126"></a>U126 — `$for` splits three ways · [R119](#r119)

**Mechanism.** ***Ruled 2026-08-23 with a standing rule attached:*** *"DON'T MAKE ANYTHING A PROP UNLESS IT NEEDS TO BE."*

| | becomes | prop? | why |
|---|---|---|---|
| `$Denote` · `$Footnote` · `$Citation` · `$Cite` | ***`$key`*** | **yes** | *a person writes `<Footnote for="arrow">` today, and it is a **key**, a string* |
| [`$Bookmark`](../../package/src/book/Bookmark.tsx) | ***`place`*** | ***NO*** | ***nothing authors a bookmark*** — `left.$for = where`, in code, never JSX |
| [`$Highlight`](../../package/src/reference/Highlight.tsx) | ***`$from` / `$to`*** | yes | *and it takes [`$first`](../the-condition-report/03-names.md#n3) with it — **a path's `$first` is a step**, which is what the word means. Both are typed `number \| string` because props arrive from JSX as strings, **the only place in the package that admits that in a type*** |
| ***the annotations*** | ***the card*** | ***— and that is [U127](#u127)*** | |

***And the discipline underneath is [S20](../the-condition-report/04-semantics.md#s20)'s: the collision is not in the interface.*** **[`$Reference$`](../../package/src/reference/Reference.tsx) asks for `read()` and `then()` and for NO FIELD AT ALL — every one of these already satisfies it.** *The fault is that three classes named their backing field the same, and the payments differ.*

> ***And dropping a `$` costs no reactivity, which is what makes "not a prop" obeyable.*** **[`bond.ts`](../../../chemistry/package/src/abstraction/bond.ts): a plain property is reactive BY DEFAULT** — `if (!property.startsWith("$")) return true` — *so [`place`](#u126) is reactive the moment the `$` comes off.* **In `lib` the `$` marks extrinsic context, not reactivity** — [D75](#d75), *checked rather than assumed.*

**Files.** `Denote.tsx` · `Footnote.tsx` · `Citation.tsx` · `Cite.tsx` · `Bookmark.tsx` · `Highlight.tsx` · `Path.tsx` · `Footer.tsx` *(which reads `e.$for`)*. **Depends on** [U114](#u114).

**Numeric end:** ***`$for` → four meanings → zero***; *each name says which kind it holds.*

### <a id="u127"></a>U127 — An annotation finds its own card · [R120](#r120)

**Mechanism.** ***Doug: "`<Author>The Team</Author>` is what we want author to be. I think you understand the problem. **I want you to clean it up.**"***

**Today [`emit.ts`](../../build/emit.ts) inserts `for={theTeam}` into an element a person authored** — `edits.push({ at: open.getEnd() - 1, …, text: ' for={' + card + '}' })` — ***precisely because the annotation cannot find its own card.***

***The route that removes the prop needs no new mechanism:*** **an annotation resolves its card from the catalogue, and the catalogue is what `$` answers** — *which is [the representative's own shape](../../../chemistry/.lib/composition/11-the-representative.md).* **[`$CardCatalogue.file(key, keyword, card)` and `find(query)`](../../package/src/library/CardCatalogue.tsx) already exist for exactly a lookup by name.**

***And they are the same two members [I14](../the-condition-report/05-implementation.md#i14) calls a string micro-language, so the two entries are ONE piece of work.*** **`find(query)` splits a colon-separated string at call time and throws when it misses, while `file(key, keyword, card)` directly above it takes the two halves as parameters.** *The class knows the shape and asks a caller to spell it.*

**Files.** `CardCatalogue.tsx` · `Annotation.tsx` and the three annotations · [`build/emit.ts`](../../build/emit.ts), ***where the injection stops.*** **Depends on** [U115](#u115), [U116](#u116), [U117](#u117), [U126](#u126).

> ***This is the sprint's second seam***, and the same rule applies: **if the emitter cannot stop injecting as specified, believe the emitter.**

**Numeric end:** ***`for={…}` insertions into authored elements → measured before → 0***, **and an emitted cover diffs clean against its source except where a name is spaced.**

**Demo contribution.** ***An authored `<Author>The Team</Author>` in the corpus resolves and follows with nothing inserted into it*** — *and the diff shows the insertion gone.*

### <a id="u128"></a>U128 — The nine misfit names taken · [R121](#r121)

**Mechanism.** ***"Take the set."*** *Seven renames and two dissolutions, all local, all mechanical* — **and [`ts-morph` 28.0.0 is installed at the workspace root for exactly this](00-planning.md): a rename through the language service updates every reference without touching a file by hand.**

| | |
|---|---|
| ***dissolve*** | [`$Composible$`](../the-condition-report/03-names.md#n7) — *not a book word, **and not a spelling**; the word is* composable — **and [`set0`](../the-condition-report/03-names.md#n8), which is not a word at all** and whose striking [dissolves the `set` collision](../the-condition-report/03-names.md#n5) |
| ***rename*** | `reference` · `$place` · `$book` · `$target` · `carries` · `carried` · `authored` |
| ***and free with them*** | [`open()`](../the-condition-report/03-names.md#n6) in `refer.ts` *(one line, and a different program from `$TableOfContents.open`)* · [`wordFor`/`letterFor`](../the-condition-report/03-names.md#n29) → **`compose`**, *which [`$Section`](../../package/src/writing/Section.tsx) already does one grade up under a book word* |

**Files.** `Composition.tsx` · `Paragraph.tsx` · `Sentence.tsx` · `Word.tsx` · `build/refer.ts`, **and every reference the language service finds.** **Depends on** [U120](#u120), [U123](#u123).

**Numeric end:** ***grep the struck names → 0***, *which is the check a language-service rename earns.*

### <a id="u129"></a>U129 — Five predicates, and two stop existing · [R122](#r122)

**Mechanism.** ***Ruled 2026-08-23, and it is not a rename:*** *"I don't like `uniform` or `matter`… **are you sure those ideas shouldn't be INLINE IN SOME OTHER THING?** It feels like 'everything inside parenthetical' is something that can be COMPUTED LOCALLY IN THE VIEW… We don't want to pollute the interface."*

| | today | becomes |
|---|---|---|
| ***[`$Paragraph.matter()`](../../package/src/writing/Paragraph.tsx)*** | **public, one caller — the first line of its own `set()`** — and ***`true` means draw nothing***, so name and polarity both mislead | ***STOPS EXISTING*** — one line inside `set()` |
| ***[`$Writing.uniform()`](../../package/src/writing/Writing.tsx)*** | **public, one caller — its own `gathered()`** | ***STOPS EXISTING*** — the same act one class up |
| ~~`$Theme.draws(part)`~~ | ***CANCELLED*** — [U140](#u140) deletes the member rather than renaming it | ***it stops existing*** |
| `$Document.summarised(s)` | reads *is this a summary*, asks *does it CONTAIN one* | **`carriesSummary`** |
| `validate.ts`'s `asked(part)` | reads *was it asked* | **`valid`** |

***The rule that follows generalises past these two:*** **a predicate with one caller belongs inside that caller**, and **where it must be a member because a subclass narrows it, it is `protected`.**

> ***One thing to watch, named so it is not discovered mid-edit:*** **[`$Section` overrides `uniform()` to return `false`](../../package/src/writing/Section.tsx).** *So the removal is not a pure inline — the class that narrows it has to keep narrowing something.* **That is what `protected` is for.**

**Files.** `Paragraph.tsx` · `Writing.tsx` · `Section.tsx` · `Theme.tsx` · `Document.tsx` · `build/validate.ts`. **Depends on** [U123](#u123).

### <a id="u130"></a>U130 — `$Theme.mark` becomes `$accent` · [R123](#r123)

**Mechanism.** ***Doug's own word, [found in the binding sprint](19-the-binding.md).*** **The collision is that [`$Paragraph.mark`](../../package/src/writing/Paragraph.tsx) means the notation that produced it and [`$Theme.mark`](../../package/src/writing/Theme.tsx) means the accent colour of what can be followed — and they appear within four lines of each other in `$Paragraph.set()`**, one reached as `this.mark` and one as `theme.mark`. *Both are good book words alone. Together they are a trap.*

***The theme's is the one that moves***, because [a theme's `mark` is an incumbent from three hand-made themes](18-the-theme.md). **Ten read sites, measured this session** — `Author` · `Book` ×2 · `Canonical` · `Subject` · `Synopsis` · `TableOfContents` · `Denote` · `Legend` · `Link`.

***`$Paragraph.$mark` stays***, because [its dissolution is S11 answered by S16](../the-condition-report/04-semantics.md#s11) and that design is not this sprint's.

**Files.** `Theme.tsx` and the ten readers. **Depends on** [U123](#u123).

### <a id="u131"></a>U131 — The struck and stalled names · [R128](#r128) · ***GATED***

**Mechanism.** *The renames are decided.* ***The WORDS are not, and [naming is Doug's](../the-condition-report/06-the-cleaning.md#the-words-owed).***

`ref` *(8 getters, measured)* · `$i` · `$in` · `url` · `contentish` · `properties` · `written`/`printed` · `$Denote` · `Role` · `Resolved` · `Named` · `Source` · **the theme's three structural stand-ins** *(taken early in [U122](#u122))* · **and the compiler's two folder names** *(given: `stages/` and `commands/`)*.

> ***GATE: fourteen words, one conversation.*** **The unit cannot start without them and nothing else in the sprint waits on it**, so it can happen at any point before this group opens.

**Files.** *Named once the words are given.* **Depends on** [U128](#u128) *and on the conversation.*

## 4 · The compiler — audited too, and it may use compiler words

***Standing ruling, [Doug 2026-08-23](../the-condition-report/02-organization.md#o13):*** **"Stages and commands is good. THE COMPILER IS NOT THE FRAMEWORK. It can have compiler words."** *`build/` is held to being clear and consistent, not to the semantics of books.*

### <a id="u132"></a>U132 — Read the compiler · [R124](#r124) · ***the output is prose***

**Mechanism.** ***1,930 lines and 18 modules have never had a member pass, an interface pass or a naming pass — [the three instruments that produced this whole report for `lib`](../the-condition-report/01-how-to-read-this.md#the-instruments).*** **This unit runs them and writes what they find.**

| pass | what only it finds |
|---|---|
| **reading every file** | *structure — a mechanism that is wrong when you look at it* |
| ***extracting every member name and judging each*** | *vocabulary — a word that is wrong only next to the other words* |
| ***`git` dates · every member body diffed against every other · the folders judged*** | **time and death** — *a copied function, a duplicated getter, a file nothing imports* |

***And the fifth instrument applies here more than anywhere: COMPARE A DIRECTORY AGAINST ITS SIBLINGS.*** *That is [what found O13](../the-condition-report/01-how-to-read-this.md#the-instruments), and it was visible in one `ls`.* **A count of a directory is not a look at one.**

***FORCED BEFORE [U133](#u133) and [U134](#u134):*** **a reorganization planned before the reading is a guess about what the modules are.**

**Files.** ***None in `build/`.*** **The output is a chapter in [The Condition Report](../the-condition-report/.cover.md)**, *because that book indexes by kind of fault and this is more entries of the same four kinds.*

**Depends on** nothing. **Numeric end:** ***stated as a list of entries, not a count*** — **and [an entry earns its place by naming something that should be DIFFERENT IN THE CODE](../the-condition-report/06-the-cleaning.md#dispositions).** *A true observation about the code is a chapter somewhere else.*

***DONE — [The Compiler](../the-condition-report/08-the-compiler.md), eight entries.*** **2,000 lines in 17 modules, and the reading's headline is that NOT ONE ENTRY IS A WRONG MECHANISM.** *Every one is a thing said twice:* **[N34](../the-condition-report/08-the-compiler.md#n34)** *one closed set of three words stated three times and checkable nowhere* · **[I23](../the-condition-report/08-the-compiler.md#i23)** *`forward` copied byte-identical into three modules* · **[I24](../the-condition-report/08-the-compiler.md#i24)** *a path becomes a URL twice, in two spellings, and `node:url` has the function* · **[S21](../the-condition-report/08-the-compiler.md#s21)** *the compiler's one contact with the framework it compiles for is `any`, though `$Book` is a dependency* · **[I25](../the-condition-report/08-the-compiler.md#i25)** *two recursive directory walks in one file, for opposite purposes* · **[I26](../the-condition-report/08-the-compiler.md#i26)** *a card's three links written as three near-identical blocks, two of them the same* · **[I27](../the-condition-report/08-the-compiler.md#i27)** *the six levels declared twice in one file* · **[O14](../the-condition-report/08-the-compiler.md#o14)** *`CHECK` is a phase of the compile filed as a command.*

***And one of the eight was LIVE and is closed in this sprint*** — [S22](../the-condition-report/08-the-compiler.md#s22). **The emitter was writing an escaped newline into every cover whose author or subject it supplied**, *the exact construct [Doug's ruling](#d76) had just taken out of the framework* — **and the authored corpus separated the same elements with an empty expression, which the section parse discards outright.** *So the same cover parsed two ways depending on who filled it in.* ***Both sides ask for a `<Paragraph>` now***, which was Doug's own answer, **and `CHECK` moved 165 → 172 paragraphs and 305 → 312 sentences: the seven authored annotations that had been silently merging.**

***[U132](#u132) was FORCED BEFORE [U133](#u133)–[U135](#u135) and did not run before them.*** **Recorded rather than absorbed.** *The reorganization was built first and the reading came after,* **so [O14](../the-condition-report/08-the-compiler.md#o14) — a phase filed as a command — is a fault the reading found IN the reorganization**, *which is precisely the guess the ordering existed to prevent.*

### <a id="u133"></a>U133 — `stages/` and `commands/` · [R125](#r125)

**Mechanism.** ***Thirteen modules of five kinds in one directory, where both siblings put one entry file at the root and everything else in folders.*** **And [`check.ts`](../../build/check.ts) already states the taxonomy in prose, in its own header:** *"the folder's own convention — `see.ts` reports, the `verify-*` scripts gate, `index.ts` compiles, and none of them is also a module."* ***The compiler wrote down the distinction between a command and a module and then filed them together.***

```
build/
  index.ts        the one command
  library.ts      the seam
  stages/         walk · refer · resolve · emit · validate · catalogue
  commands/       check · see · verify-build · verify-walk
  utilities/      where
  tests/
```

***And it fixes something beyond tidiness:*** **[the orphan sweep produced four false positives here](../solutions/24-the-orphan-that-was-not-an-orphan.md) because a command has no importer by definition, and nothing in the folder's shape said which files were commands.**

**Files.** *Thirteen moves and every relative specifier that follows them* — `index.ts`'s six imports, `check.ts`'s five, the `verify-*` scripts, and `vitest.config.ts`. **Depends on** [U132](#u132).

**Numeric end:** ***the compiler runs unchanged*** — **`READ`, `RESOLVE`, `EMIT` and `CHECK` print the same numbers before and after.** *That is the only thing a move may not change.*

### <a id="u134"></a>U134 — `Source` is deleted and emitting becomes idempotent · [R126](#r126)

**Mechanism.** ***Traced to every use, and there is one.*** **`declared | supplied | unresolved` is read in six places and FIVE OF THEM ARE PRINTING or counting** — [`index.ts:30-32`](../../build/index.ts)'s `from(kind)` tally. ***The single functional use is [`emit.ts:104`](../../build/emit.ts):*** *if a link was **supplied**, write it into the emitted cover, because the author did not.*

> ***So make emitting IDEMPOTENT — write the annotation where it is absent, leave it where it is present — and nothing needs to know how the answer was arrived at.*** **`Source` is deleted**, and `unresolved` — *a reference that points at nothing* — **becomes a [`Complaint`](../../build/library.ts), which the compiler already has and which already travels.**

***And a complaint is the right home for it***, because [complaints TRAVEL rather than stop the walk](../../build/library.ts): *one pass tells an author everything that is wrong, because a build that reports one fault at a time is a build somebody runs many times.*

**Files.** `library.ts` · `emit.ts` · `resolve.ts` · `index.ts`. **Depends on** [U132](#u132), [U133](#u133).

**Numeric end:** ***`Source` → 0 references*** · **emitting twice produces byte-identical output** · *the `RESOLVE` line stops printing a breakdown it no longer computes, and what it prints instead is stated rather than dropped.*

### <a id="u135"></a>U135 — One seam per stage, and `Named` is a card · [R127](#r127)

**Mechanism.** ***Doug asked for alternate designs rather than a rename:*** *"I don't understand `Named` or `Resolved`. If it's something on reference, just make it IDEMPOTENT… Please just LOOK FOR ALTERNATE DESIGNS."*

| | the alternate |
|---|---|
| ***`Resolved`*** | ***ONE seam that each stage enriches.*** [`Library`](../../build/library.ts) is the seam every stage reads; `Resolved` is a second, narrower one that drops `entries` and adds `books`. **So `walk` fills the entries, `refer` fills the references, `resolve` fills the books — a stage takes a `Library` and returns a `Library`, and the tense disappears because there is no second state to name** |
| ***`Named`*** | ***it is a card, and [the file says so](../../build/catalogue.ts)*** — its own header calls them cards throughout, and the type is a book plus the fields a card carries. **With [`$$Book` replacing `$IndexCard`](#u115), the compiler's type is the data for a `$$Book`** — *so it is named for what it makes* |

**Files.** `library.ts` · `walk.ts` · `refer.ts` · `resolve.ts` · `emit.ts` · `catalogue.ts` · `validate.ts` · `index.ts` · `check.ts`. **Depends on** [U115](#u115), [U132](#u132), [U134](#u134).

**Numeric end:** ***seam types → 2 → 1***, **and the compiler prints the same four lines with the same numbers.**

## 5 · The three the problems list did not carry

### <a id="u136"></a>U136 — Each program states its unit of code · [R129](#r129)

**Mechanism.** ***One page, not a refactor.*** **[Three codebases, three answers](../the-condition-report/07-the-three-codebases.md#c2), all three defensible on their own terms:**

| | the unit | average file | one class per file? |
|---|---|---|---|
| **`lib`** | ***a class*** | **58 lines** | ***yes*** — 51 files, 51 classes |
| **`$Chemistry`** | ***a concern*** | **215 lines** | **no** — `chemical.ts` holds 10 classes in 1,407 lines |
| **the compiler** | ***a phase*** | **107 lines** | **no classes at all** — 18 files, 1 class |

*A framework of book semantics wants one class per book word. A reactive substrate wants its machinery together where the invariants are. A four-phase compiler wants functions over a seam.* ***What is not defensible is that nothing says so***, and it is [the same fault as the comment policy](../the-condition-report/02-organization.md#o8), in the same three programs.

**Files.** ***A chapter in the branch library.*** **Depends on** [U132](#u132) — *the compiler's unit is one of the three and its code has not been read yet.*

***DONE — [The Unit of Code](../designing-inexplicable-phenomena/07-the-unit-of-code.md).*** **Filed in [Designing Inexplicable Phenomena](../designing-inexplicable-phenomena/.cover.md) rather than in the report, because a convention is a design decision and not a fault.**

***And the reading produced one rule rather than three defences:*** **THE UNIT OF CODE IS WHATEVER THAT PROGRAM STATES ITS INVARIANTS OVER.** *`lib` states them over a WORD — "a title has words", "a letter is one grapheme" — so the file is the word.* **`$Chemistry` states them BETWEEN classes** — *that a read inside a view registers against the scope that is asking* — **so the mechanism is the file.** *The compiler states them over a SEAM, so the phase is the file.*

***It is a rule rather than a description because it forbids things***, **and this sprint's own friction corroborates it**: *three import cycles in `lib` — `Title`→`Cover`, `Section`→`Document`, `Annotation`→`Book` — were each a class reaching for another class to ask a question about ITSELF,* **and `$Chemistry` has none at all, because the classes that would form one share a file.** ***The same fact seen from both sides.***

### <a id="u137"></a>U137 — ***STRUCK. OUT OF SCOPE.***

***This unit asked for a rename inside `$Chemistry` the package, and that package is not this sprint's to touch.*** **Doug: *"I am talking about only the lib package"*, and then *"Stop recommending changes from chemistry the actual package."*** *The unit was mis-scoped when it was written and is struck rather than left blocked.*

***What it was right about, and what is kept, is the REBUILD CHAIN*** — **`$Chemistry`'s `dist` rebuilt, then `lib`'s against it, then every suite re-run**, *which is a build and not a change:* **chemistry 684/684 · lib 346/346 · compiler 43/43 · app 39/39 · `tsc` 0 in all four.** ***`instanceof` is true across the package boundary and is [shown rather than asserted](#the-shelf).*** *That was [K5](#k5)'s whole warning and it is closed.*

## The demonstration

### <a id="u138"></a>U138 — One `$Title`, drawn three ways, on one page · ***the stop condition***

**Mechanism.** ***[The first of the four things a count cannot fake](../the-condition-report/06-the-cleaning.md#the-test), and it exercises all three injection levels [U123](#u123) installs:***

| | how the title is changed |
|---|---|
| **one** | ***by prop*** — a `$`-prefixed component passed at the call site |
| **two** | ***by subclass*** — a `$Title` subclass reassigning the property |
| **three** | ***by registration*** — a subclass registered in a scope, substituted where the parse builds one |
| **four** | ***untouched*** — **and still the default** |

***The fourth is the load-bearing one.*** **It proves nobody edited the default to make the demo work**, and *the other three prove the same class answered differently for three different reasons.* **A hand-authored page cannot fake that.**

**Files.** **a new section in [the demonstration](../../package/app/src/sections/)**, registered the way [`the-page.tsx`](../../package/app/src/sections/the-page.tsx) and its siblings are. **Depends on** [U123](#u123).

***The demonstration's aesthetics are governed by [R13](15-the-build.md) and are not this unit's to invent.***

**Numeric end.** ***None, deliberately.*** **This is the unit that exists because every gate this branch runs is a count, and [every entry in the report was true while all of them were green](../the-condition-report/01-how-to-read-this.md#why-no-gate).**

***DONE — [`the-title.tsx`](../../package/app/src/sections/the-title.tsx), with [eight promises](../../package/app/src/sections/the-title.test.tsx) beside it.*** **Four `h2`s, four distinct generated classes, three reasons, and the fourth still the default.**

#### <a id="what-the-demo-found"></a>What building it found — ***five things every count was green through***

***This is the unit's return.*** **Each of these was true while `tsc` was clean and 342 promises passed**, and *not one of them could have been found by describing the page.*

| | what the page found | *how it announced itself* |
|---|---|---|
| ***one*** | ***A held look is handed in WITHOUT the `$`.*** `heading={Stamped}` takes; ***`$heading={Stamped}` does nothing at all*** | **Silently.** The page drew four identical headings and no gate objected — *[R116](#r116)'s first level was unreachable by the spelling the property itself suggests* |
| ***two*** | ***A `view()` that CONSTRUCTS a chemical never returns.*** Each pass builds new chemicals, each is state the drawing depends on, and the drawing asks to be drawn again | **Not at all.** *The framework refuses configuration during a render BY NAME and refuses an invalid bond constructor BY NAME — this one hangs*, and the worker died at 163 seconds with no message |
| ***three*** | ***A scope answers ASKS, and only `compose()` asks for a `$Title`.*** A `<Title>` element is already built and asks nobody | **Silently** — the third level fell through to the default. ***The caption already said it***: *found by the parse, drawn by the scope* |
| ***four*** | ***`$Title` reaches for `$opening` only inside a cover.*** Standing alone it draws `$heading` | **Silently.** *The first draft varied a look the class never reaches for and drew four identical titles* |
| ***five*** | ***A demonstration page is not a piece of writing.*** It began as a `$Section` and a section is writing, and writing has copy | ***BY NAME*** — *"$TheTitle is not valid after its bond constructor"* |

***Three of the five are silent and one hangs.*** **That is [the two arms](#the-two-arms) measured from the outside**: *the framework complains precisely where it has been taught to and says nothing everywhere else,* **and a page is the only instrument that finds the difference.**

***One name yielded.*** [`$TheManifold.head()`](../../package/app/src/sections/the-manifold.tsx) — *the demo's scroll-to-top — collided with `$Book.head(theme)`, which draws a book's head.* **The framework member wins and the demonstration yields**, renamed `turned()` from *the file's own comment*: **"a turned page opens at its head."** ***Proxy, flagged for Doug.***

***And the app's type debt went to zero.*** `0/0 baselined type-debt errors [$LibraryCard·$IndexCard<$Referent>]` — **the baseline this sprint inherited is empty**, closed by [U129](#u129)'s merge of the card into the book.

## 6 · The three Doug ruled at the plan

### <a id="u139"></a>U139 — The trailing `$` comes off every abstraction · [R131](#r131)

**Mechanism.** ***A mechanical rename through the language service, licensed by a collision sweep run before it was taken.***

| | uses | bare name collides? |
|---|---|---|
| `$Reference$` | **91** | ***no*** — the only bare `$Reference` is [`chemistry/…/implementation/reference.ts:81`](../../../chemistry/package/src/implementation/reference.ts), **unexported**, and **zero occurrences across every `.d.ts` in chemistry's `dist`** |
| `$Composition$` | **33** | ***no bare name exists anywhere*** |
| `$Catalogue$` | **16** | ***no*** — the only bare `$Catalogue` is [`chemistry/…/implementation/catalogue.ts:7`](../../../chemistry/package/src/implementation/catalogue.ts), **`class $Catalogue` with no `export`** |
| `$Composible$` | **70** | ***moot*** — [it dissolves at U128](#u128) |

***That is [C5](../the-condition-report/07-the-three-codebases.md#c5) confirmed from the other side.*** *The audit ruled `$Chemistry`'s reference road unreachable by checking its exports; this checks the same boundary from `lib` and finds the same answer.*

> ***And there is a second argument the instruction did not have.*** **In `$Chemistry` the trailing `$` already means SYMBOL KEY** — `$template$` · `$parent$` · `$type$` · `$activeView$` · `$canonical$` · `$literal$`, **38 uses of `$type$` alone.** *So `lib` spelling* **interface** *with the mark its own substrate spells* **symbol key** *is one notation carrying two meanings, across two packages that ship together.* ***A collision entry, not a preference.***

**Files.** `Reference.tsx` · `Composition.tsx` · `Catalogue.tsx` · `index.ts`, **and every referencing site** — *140 across the framework, the demonstration, the application, the compiler and the suite.* **Depends on** [U120](#u120), [U128](#u128) — *renaming during a sweep hides the sweep, so it lands with the other names.*

**Numeric end:** ***trailing-`$` names in `lib` → 4 → 0*** · **`tsc` 0** · *the suite unchanged, because nothing but a name moved.*

### <a id="u140"></a>U140 — The theme stops deciding what is drawn · [R132](#r132)

**Mechanism.** ***[`$Particle` carries `$show` and `$hide` universally](../../../chemistry/package/src/abstraction/particle.ts), with a registered render filter*** — `(p) => (p.$show === false || p.$hide === true) ? null : undefined` — **shipped in [`chemistry.d.ts:346`](../../../chemistry/package/dist/).** *So `lib` never needed a visibility member of its own.*

***Doug: "showing / hiding parentheticals isn't part of a theme. Remove it. Hide parentheticals."***

| goes | and its readers stop asking |
|---|---|
| **`$Theme.$reads`** and `get reads()` | — |
| **`$Theme.draws(part)`** | [`$Book.reading`](../../package/src/book/Book.tsx) · [`$Section.view()`](../../package/src/writing/Section.tsx) · [`$Document.view()`](../../package/src/document/Document.tsx) |

***A parenthetical thing hides itself.*** **`$parenthetical === false` means visible** — *Doug's own correction at the plan* — **so the polarity is already right and nothing is inverted.**

> ***And one owed word dissolves rather than being given:*** *"whether unread matter is read"* — **[one of the two proxies standing from the theme sprint](../the-condition-report/06-the-cleaning.md#the-words-owed)**. *A member that stops existing needs no name.*

***This CANCELS a rename.*** **[U129](#u129) was going to turn `draws` into `reads`; the member does not get a better name, it goes.**

**Files.** `Theme.tsx` · `Book.tsx` · `Section.tsx` · `Document.tsx` · [`theme.test.tsx`](../../package/tests/writing/theme.test.tsx). **Depends on** [U122](#u122), [U123](#u123).

**Numeric end:** ***visibility members in `lib` → 2 → 0*** · **the framework draws the same page**, *and where it does not, the difference is a parenthetical that used to be revealed by a theme flag and is now revealed by `$show` on the instance.*

**Demo contribution.** ***Reveal one parenthetical section by writing `$show` on it, with no theme involved*** — *per-instance, which is what the theme flag could never do.*

### <a id="u142"></a>U142 — `parenthetical` stops being a prop · [R132](#r132)

**Mechanism.** ***Doug, at the plan: "parenthetical can be parenthetical and not `$parenthetical`. We set not as part of the view but part of the component. It's more likely to change on subclass."***

**Measured, and he is right about where it is set:** ***nine subclass declarations*** — `$Author` · `$Subject` · `$Canonical` · `$Synopsis` · `$Denote` · `$Legend` · `$Code` set `true`; `$Writing` and `$Book` set `false` — **against two JSX uses in the framework**, one of which ([`<Code … parenthetical />`](../../package/src/writing/Section.tsx)) is **redundant with `$Code`'s own declaration.**

***And dropping the `$` costs no reactivity.*** **[`bond.ts`](../../../chemistry/package/src/abstraction/bond.ts): `if (!property.startsWith("$")) return true` — a plain property is reactive by default**, so `parenthetical` stays live and the `$x` + getter + setter triple collapses to one field. *[D75](#d75), checked rather than assumed.*

> ***THE COST, named here rather than met mid-edit.*** **[`particle.ts:326`](../../../chemistry/package/src/abstraction/particle.ts) applies every JSX prop as `$this['$' + prop] = props[prop]`** — *so a plain `parenthetical` can no longer be set from JSX,* **which is exactly what makes it stop being a prop.**
>
> ***The demonstration writes `<Section parenthetical>` in about twenty corpus files*** — every chapter's summary section. **Those stop working**, and the summary becomes something a `$Section` subclass declares rather than something an author flags. *[The demonstration is out of scope for its own faults](#what-is-not-in-this-sprint) but not exempt from a framework change, and this is the one place this sprint reaches it.*
>
> ***The remaining framework prop use is one:*** [`<Figure caption={…} parenthetical />`](../../package/src/writing/Section.tsx) **for a thematic rule** — *a per-instance fact that no subclass can declare, since the same `$Figure` class serves a rule and a picture.* **That is the case to solve, and it is what makes this a unit rather than a rename.**

**Files.** `Writing.tsx` · `Book.tsx` · `Synopsis.tsx` and the seven declaring subclasses · `Section.tsx` *(the two JSX uses)* · **the demonstration's summary sections.** **Depends on** [U140](#u140).

**Numeric end:** ***`$parenthetical` → `parenthetical`, one field replacing a field-plus-getter-plus-setter on `$Writing` and `$Book`*** · **the `CHECK` counts do not move**, *because `copy` still passes over parenthetical matter exactly as it did.*

### <a id="u143"></a>U143 — No newline formats anything · [R134](#r134)

**Mechanism.** ***Three parts, and the framework's is done.***

| | |
|---|---|
| ***the framework*** | **`$Book.copy` · `$Document.copy` · `$IndexCard.copy` join with a SPACE.** *`$IndexCard` was the sharpest case: it joined fields with `

` and returned that string straight into the DOM, **where HTML collapses it** — a formatting instruction that did nothing.* ***DONE*** |
| ***the test library*** | **14 corpus files write each paragraph as `{'

Prose.'}`.** *The leading blank line exists only to make [`$Section.parts()`](../../package/src/writing/Section.tsx) close the previous paragraph — **which being a separate JSX child already does***, since a `$Paragraph` element child closes and stands alone |
| ***the demonstration*** | **22 files, the same shape** |

***And the notations are the constraint, stated so nobody sweeps them by accident.*** **A block beginning `#`, `>`, `-`, `$$` or a fence is not prose** — wrapping it in `<Paragraph>` would leave the notation on the page as literal text. *Each maps to the element the parse would have built:* `<Title>` · `<Paragraph mark=">">` · `<Paragraph mark="-">` · `<Paragraph mark="$$">` · `<Code language source />`. **All of them are already authorable, which is what [the parallel text](../../package/app/src/markdown/parallel.tsx) demonstrates.**

**Files.** `Book.tsx` · `Document.tsx` · `IndexCard.tsx` *(done)* · **14 files in [`library/.test-library`](../../../.test-library/)** · **22 in [the demonstration](../../package/app/src/sections/)**.

**Numeric end:** ***`

` in `package/src` → 2 → 0*** *(done)* · **in the corpus → 36 files → 0** · ***`CHECK`'s counts must not move***, because removing a separator that only ever divided must not change what anything says.

**Demo contribution.** ***The rendered book is unchanged and the source stops carrying a formatting character*** — *which is the point: a division that was said twice is now said once.*

# The test scenarios

***STUB.*** **The scenarios stood here at full weight while the sprint ran, one per unit, and they became the suite.** *A scenario that survived is a promise, and [a promise is read where it runs](../../../../.claude/library/..teamsmanship/..team/queenie/test-architecture/.cover.md)* — **the package's 346, the compiler's 43, and the 92 browser checkpoints of `npm run verify`.** *Nothing was dropped; it moved to where it executes.*

# The risks

***STUB.*** **Eight risks, K1 through K8, stood here with a mitigation each.** *[K5](#k5) fired — a measurement taken against the wrong copy of the framework — and what it cost is in the record with the rebuild chain that closed it.* **[K3](#k3) fired too**: *the sprint was almost entirely subtraction and every gate was a count, which is the reason [U138](#u138) existed and the reason it found [five faults every count was green through](#what-the-demo-found).* ***The other six did not fire.*** *Kept as anchors because the record cites them by identifier.*

<a id="k1"></a><a id="k2"></a><a id="k3"></a><a id="k4"></a><a id="k5"></a><a id="k6"></a><a id="k7"></a><a id="k8"></a>

# Origin tracing — nothing silently drops

***Both directions, [as the step requires](../../../../.claude/library/our-skillset/29-ce-plan.md#origin-tracing-runs-both-directions).***

## Every requirement lands somewhere

| | lands in | | | lands in |
|---|---|---|---|---|
| [R105](#r105) | [U112](#u112) | | [R118](#r118) | [U125](#u125) |
| [R106](#r106) | [U109](#u109) · [U110](#u110) | | [R119](#r119) | [U126](#u126) |
| [R107](#r107) | [U111](#u111) | | [R120](#r120) | [U127](#u127) |
| [R108](#r108) | [U117](#u117) | | [R121](#r121) | [U128](#u128) |
| [R109](#r109) | [U115](#u115) | | [R122](#r122) | [U129](#u129) |
| [R110](#r110) | [U116](#u116) | | [R123](#r123) | [U130](#u130) |
| [R111](#r111) | [U114](#u114) | | [R124](#r124) | [U132](#u132) |
| [R112](#r112) | [U113](#u113) | | [R125](#r125) | [U133](#u133) |
| [R113](#r113) | [U118](#u118) | | [R126](#r126) | [U134](#u134) |
| [R114](#r114) | [U119](#u119) · [U120](#u120) | | [R127](#r127) | [U135](#u135) |
| [R115](#r115) | [U121](#u121) | | [R128](#r128) | [U131](#u131) ***· gated*** |
| [R116](#r116) | [U122](#u122) · [U123](#u123) | | [R129](#r129) | [U136](#u136) |
| [R117](#r117) | [U124](#u124) | | [R130](#r130) | [U137](#u137) |
| [R131](#r131) | [U139](#u139) | | [R132](#r132) | [U140](#u140) · [U142](#u142) |
| [R133](#r133) | [U141](#u141) | | | |

***Twenty-nine requirements, thirty-four units, and no requirement without a home.*** **[R131](#r131)–[R133](#r133) and [U139](#u139)–[U142](#u142) were added at the plan, from Doug's own rulings in the room** — *[and none of them is ever renumbered](../../../../.claude/library/our-skillset/29-ce-plan.md#the-unit-identifier-law).*

## Every unit cites back

***Each unit names its requirement in its own heading and its entry in the report inside its mechanism.*** **[U138](#u138) is the one exception, and it cites [the test](../the-condition-report/06-the-cleaning.md#the-test) rather than a requirement** — *because a sprint's visible end is not one of its requirements; it is what makes them reviewable.*

## And what has no unit, deliberately

| | why |
|---|---|
| ***four designs owed*** | **how a consumer adds a notation · one `$Code` whose level moves · lowering · a composition that is also a reference.** *No mechanism, so [no files and no scenarios](../the-condition-report/06-the-cleaning.md#owed)* |
| ***`$Emphasis.$strong`*** | **STAYS, and the entry is corrected instead** — *[the notation it was said to duplicate is consumed by the parse and discarded](#d71), so it duplicates nothing.* **[S16](../the-condition-report/04-semantics.md#s16) is the ruled answer and it is not this sprint's** |
| ***`$Theme.lay`'s third parameter*** | **stated as a question inside [U111](#u111)** — *a parameter a subclass could use is not the same as a parameter nothing passes* |
| ***nine entries out of scope*** | `O2` `O3` `O4` `O5` `O9` `O12` `I18` `I19` `I20` — **the application, the demonstration and the Lab** |
| ***seven monitored `try`/`catch` blocks*** | [I15](../the-condition-report/05-implementation.md#i15) — **two are treated in [U118](#u118); the rest stand with [F6](19-the-binding.md#f6) as the warning** |
| ***`$Paragraph.$mark`*** | **[S11](../the-condition-report/04-semantics.md#s11), whose answer is [S16](../the-condition-report/04-semantics.md#s16)** — *a design Doug ruled and this sprint does not carry* |
| ***the `WeakMap`'s mechanism*** | **[I16](../the-condition-report/05-implementation.md#i16), the largest thing the report turned up.** *[U119](#u119) moves it onto a class and changes nothing about how it works* |

# The plan checked against itself

***STUB.*** **The self-check ran before any work started and it passed** — every requirement landing in a unit, every unit citing a requirement, and the deliberate gaps named. *[Origin tracing](#origin-tracing--nothing-silently-drops) above is the surviving half, because it is the half a reader still needs.* **A check that passed before the work is spent once the work is done.**

# <a id="the-ledger"></a>THE LEDGER — the work as it runs

***Opened 2026-08-23 at the start of [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md). [Conversation memory does not survive compaction](../../../../.claude/library/our-skillset/30-ce-work.md), and this is a thirty-four unit sprint.*** *Every unit gets a row when it lands, with the evidence.*

## THE BASELINE, recorded before anything moved

***This is [K1](#k1)'s "before". It cannot be re-derived once a file is deleted.***

| | at the start |
|---|---|
| framework suite | **336/336** in 30 files |
| `tsc --noEmit` | **0** |
| dead imports in `src/`, non-React | **28** *(42 whole-project)* |
| demonstration `typecheck` | **1 baselined · 6 unexpected** |
| `style={{` | **33**, in 19 files |
| `as never` | **25** |
| `declare module` | **1** |
| `$Composible$.` call sites | **48**, in 8 files |
| `follow()` declarations · call sites | **7** · **15 in the suite** |
| display strings | **6** |
| trailing-`$` abstractions | **4** *(`$Reference$` 91 · `$Composible$` 70 · `$Composition$` 33 · `$Catalogue$` 16)* |
| `$Theme` visibility members | **2** — `$reads` · `draws()` |
| `$parenthetical` declarations | **11** — *9 subclass, 2 JSX* |

## What has landed

*Each row states the evidence, not the intention.*

***Seventeen units landed. Every row states the evidence, not the intention.***

| unit | what changed | evidence |
|---|---|---|
| **[U109](#u109)** | the three orphan files deleted | *`Literature.tsx` · `teaser.tsx` · `case-shell.tsx` — **0 importers each**, swept from the file* |
| **[U110](#u110)** | 28 dead imports and the self-import gone, in 16 files | ***`tsc --noUnusedLocals` non-React in `src/` → 28 → 0*** |
| **[U111](#u111)** | `shown()` lost `page`, `$Book.stands()` lost its unread theme | *both call sites passed `0`; the theme was never read.* ***`$Theme.lay`'s third parameter is [BATCHED](#what-is-batched-for-doug)*** |
| **[U112](#u112)** | the card asks the book for its chapters | *`live.chapters.slice(2, 3 + n)` → `live.contents.chapters` — **the model already excludes cover, contents and parentheticals*** |
| **[U113](#u113)** | `valid()` became a template | ***`$Word` gained protected `whole()` and `said()`; `$Phrase` narrows one, `$Punctuation` narrows both, and neither repeals.*** *No short-circuit in front of a `$valid` call* |
| **[U114](#u114)** | four re-parents | ***`$Code` → `$Paragraph`*** *(and the fence stopped being captioned `code`)* · ***`$Link` → `$Phrase`*** *(the repeal deleted)* · **`$IndexCard` → `$Referent`** · **`$Bookmark` → `$Writing`** |
| **[U119](#u119)** | 8 module functions became members | ***module-level functions in `lib` → 8 → 0.*** *The `WeakMap` collapsed into a per-instance `_read`, inert to the substrate* |
| **[U120](#u120)** | every class static became a member; **`$Composible$` DELETED** | ***call sites 48 → 0.*** *Six receivers already inherited the member; `$Book` implements the six itself* |
| **[U121](#u121)** | the theme became a transient prop; `dressing.ts` deleted | ***`declare module` 1 → 0*** · ***`theme as never` 25 → 0*** · **demonstration typecheck 6 unexpected → 5** *(`main.tsx` TS2322 gone — the 30-key theme object compiles)* |
| **[U122](#u122)** | `$Theme.setting(at)` — size, weight, tracking and leading together | *they move with the step rather than being four independent choices.* ***`setting` is a proxy and stands for correction*** |
| **[U123](#u123)** | ***every class holds its look as a component*** | ***`grep -c "style={{" src/` → 33 → 0***, across 19 files · **the five template-skippers joined it** — `$Figure`, `$Legend`, `$Document` now override `gathered()`/`set()` · **the hex-literal ternary gone** · **`Row` deleted** |
| **[U124](#u124)** | two flags out | **`isCover` → 0 sites, and the eight-step walk with it** · **`$display` deleted, both unreachable branches gone**. ***`$strong` stays — [see the friction](#what-came-to-light)*** |
| **[U125](#u125)** | the framework stopped speaking English | ***6 → 0.*** *`names` · `by` · `within` · `backward` · `forward` · `opens` — every one overridable* |
| **[U129](#u129)** | five predicates | ***`matter()` STOPS EXISTING*** *(inline in its own `set()`)* · **`uniform()` is `protected`, because `$Section` narrows it** · `summarised` → **`carriesSummary`** · `asked` → **`valid`** |
| **[U130](#u130)** | `$Theme.mark` → ***`$accent`*** | *10 read sites. `$Paragraph.mark` stays — [its dissolution is S16](../the-condition-report/04-semantics.md#s16) and not this sprint* |
| **[U139](#u139)** | the trailing `$` came off every abstraction | ***4 → 0***, 140 sites in 26 files. *`$Reference` · `$Composition` · `$Catalogue`* |
| **[U140](#u140)** | the theme stopped deciding what is drawn | ***`$Theme.$reads` and `draws()` deleted.*** *Three call sites filter on `parenthetical` directly, and revealing one is a write* |
| **[U141](#u141)** | ***`follow()` dropped; `read()` took it*** | ***7 declarations → 0, 15 promises migrated.*** *`$Catalogue` stopped declaring one question twice* |
| **[U142](#u142)** | ***`parenthetical` stopped being a prop*** | *plain field, reactive by default.* **`$Summary` is the kind the corpus writes where it used to flag a section** — 14 test-library files, 29 demonstration files, every test fixture. ***`$Synopsis`'s ignored setter is gone: the BOOK settles which of its synopses account for it, once, when it binds them*** |
| **[U143](#u143)** | ***no newline formats anything*** | ***`

` in `package/src` → 2 → 0*** · **corpus → 36 files → 0**, *except the two `markdown/` files whose newlines ARE the notation under test.* **And the conversion found a defect: `CHECK` went 172 → 165 paragraphs and 312 → 305 sentences with words and letters UNCHANGED at 2359 and 10692** — ***the separators were manufacturing seven empty paragraphs and every gate counted them as real*** |

| **[U133](#u133)** | ***`stages/` and `commands/`*** | *13 modules of 5 kinds in one directory became `index.ts` + `library.ts` + `stages/` + `commands/` + `utilities/`.* **The compiler prints the same four lines** |
| **[U134](#u134)** | ***`Source` is DELETED and emitting is IDEMPOTENT*** | **Two runs produce byte-identical output — verified by snapshot and `diff -rq`.** *The emitter already walked the annotations a cover carries, so it writes what is absent and leaves what is present, and nothing needs to know how an answer was arrived at* |
| **[U135](#u135)** | ***one seam, and `Named` is a `Card`*** | *`Resolved` deleted; a stage takes a `Library` and returns a `Library`, and the tense disappears because there is no second state to name* |
| **[U115](#u115)** | ***`$$Book` replaces the card, beside `$Book`*** | *89 sites, 17 files. `$IndexCard` is gone and `library/` no longer holds a book class.* **It implements `$Reference<$Book>` AND `$Catalogue<$Book>` with one `read()` meaning one thing**, which only became possible once [`$Catalogue` stopped declaring `read()`](#the-catalogue-stopped-being-a-reference). ***And it MIRRORS the book: `title`, `subtitle`, `author`, `subject`, `chapters`, `entries` — so the demonstration's own card went from 32 lines to 15, declaring only what that library ADDS*** |
| **[S9](../the-condition-report/04-semantics.md#s9)** | ***`$CardCatalogue` satisfies `$Catalogue<$Book>`*** | **It is a composition of cards and a card is a reference to a book, so it already was one — the declaration cost NO member change.** *[Chapter zero specified exactly this](00-planning.md) and the class had implemented nothing* |
| **[U116](#u116)** | ***annotations are a member of writing*** | **`$Annotation` at phrase grade with `$Author`, `$Subject`, `$Canonical` as 8-line specializations — 156 lines of copied class became one base and three differences.** · **`$Type` exists: `<Type>Autobiography</Type>`, the name is the content** · **`$Book` lifts its annotations from its canonical, and `$Cover` finds author and subject among annotations rather than among words** · ***`library` climbs CARD TO CARD and opens exactly one book — the answer — where it used to open every book on the path*** |

## The gates, run fresh

| | at the start | now |
|---|---|---|
| framework suite | **336/336** | ***337/337*** — *one promise added: a book passes over its parenthetical chapters* |
| compiler `CHECK` | **7/7 books · 172 paragraphs · 312 sentences** | ***7/7 books · 165 · 305*** — **words and letters unchanged**, *so the seven that went were empty* |
| the public app `typecheck` | *not run* | ***PASS — 0 unexpected*** |
| `

` in `package/src` | **2** | ***0*** |
| `

` in the corpus | **36 files** | ***0***, *bar the two demonstrating the notation* |
| `tsc --noEmit` | **0** | ***0*** |
| dead imports in `src/` | **28** | ***0*** |
| `style={{` | **33** | ***0*** |
| `theme as never` | **25** | ***0*** |
| `declare module` | **1** | ***0*** |
| `$Composible$` call sites | **48** | ***0 — the class is deleted*** |
| `follow()` declarations | **7** | ***0*** |
| module-level functions / class statics | **16** | ***0*** |
| trailing-`$` abstractions | **4** | ***0*** |
| display strings | **6** | ***0*** |
| `$Theme` visibility members | **2** | ***0*** |
| demonstration `typecheck` unexpected | **6** | ***5*** |

## <a id="what-came-to-light"></a>What came to light while building — friction reported, not routed around

| | |
|---|---|
| ***`instanceof $Cover` cannot be written in `Title.tsx`*** | **It closes an import cycle** — Title → Cover → Chapter → Document → Section → Title — *and the class is `undefined` at evaluation.* **`$Title.opening` asks the structural question instead**: *is the chapter I stand in my book's own cover?* Identity against the book's own answer, two hops, no flag and no bounded walk. ***Doug asked for `instanceof`; this is why it is not one*** |
| ***`$Synopsis` has a setter that does not affect its getter*** | `override get parenthetical() { return !this.standsFor; }` **with a setter that writes `$parenthetical` and is then ignored.** *A write that changes nothing* — found by a promise that set `parenthetical = false` and watched it stay hidden. **Not fixed; recorded** |
| ***`$Code` was the demonstration's twin for a fence*** | **The parallel text paired a hand-written `$Figure` subclass with a parsed fence** — a parallel that held only because `$Code` was a `$Figure`. *Doug ruled that code is writing, so the written side now hand-writes a `$Code`* — **the two sides stand the same kind for the same reason rather than by an inheritance accident** |
| ***`$Formula`'s display branches were unreachable*** | `$display` was never set anywhere, so `typeset()` always passed `displayMode: false` and both display branches of `set()` were dead. **Both gone with the flag** |


| **[U118](#u118)** | ***one question, one answer*** | **[I6](../the-condition-report/05-implementation.md#i6) the book's invariants stated ONCE and read twice** — *the bond raises on the first that fails, `valid()` states them all* · **[I8](../the-condition-report/05-implementation.md#i8) one bounded walk, `$Writing.standing(kind)`** · **[I9](../the-condition-report/05-implementation.md#i9) `tableOfContents` gone, `contents` is the name** · **[S7](../the-condition-report/04-semantics.md#s7) a document's copy passes over its parenthetical sections** · **[I15](../the-condition-report/05-implementation.md#i15) the two conditional catches replaced by an overridable `requires()`** · ***[S13](../the-condition-report/04-semantics.md#s13) WITHDRAWN — see below*** |
| ***`$Theme.setting` was a MONOLITH and is gone*** | **It returned all four values at once, so a theme wanting different tracking replaced weight, size and leading with it.** ***That is the fault [U113](#u113) removed from `valid()` three units earlier, rebuilt in the same sprint.*** *Doug: "There's no ability to evolve."* **Now `weight(at)` · `tracking(at)` · `leading(at)` over `$weight` · `$tracking` · `$leading`, each overridable alone — the shape `step(at)` already had over `$size` and `$ratio`.** *And every call site had been asking for ONE field of the four, so the object bought nothing* |
| ***[S13](../the-condition-report/04-semantics.md#s13) IS WITHDRAWN — the entry was wrong and the promises said so*** | **It called `letters` "one name, two quantities" and named the SENTENCE as the deviation.** *The sentence was the correct reading:* **it split `copy` into graphemes, which tiles LOSSLESSLY — and the other five levels flatMapped over `words`, which filters `role === 'use'` and so DROPPED EVERY SPACE.** ***Doug, at the plan: "isn't a space parsed as a mention 'space'? Wouldn't that be at the word level?" — it is, a `$Punctuation` at word grade, present in `parts()` and absent from `words`.*** **So every level now tiles through `parts()`, and the promise that already said this — *"letters tile losslessly, words are a lossy parse, the space is a letter no word claims"* — is what caught the mistake.** ***`CHECK` letters 10,692 → 17,240, words unchanged at 2,359*** |
| ***a `try`/`catch` [I15](../the-condition-report/05-implementation.md#i15) called load-bearing WAS, for a reason the entry did not give*** | **The contents' catch was swallowing `$Document.declaration()` calling `view()` at bond time** — *a contents' view asks its book for chapters, and it has no book yet.* **The summary the entry named was never the reason.** ***The fix is not a catch: a contents DECLARES NO SECTIONS of its own, so it is not harvested for any*** |
| ***A GATE WAS PINNING THE DEFECT*** | **[`verify-build.ts`](../../build/commands/verify-build.ts) asserted a card carried `["Synopsis", "What Physics Is"]`** — *"Synopsis" being exactly the chapter a book's own contents excludes, which is [the filed bug](../solutions/25-the-card-that-listed-a-chapter-the-contents-did-not.md).* **The promise's TITLE was right and its expectation was the bug written down**, so [U112](#u112) turned the gate red rather than green |
| ***`unresolved` is NOT a fault, and turning it into a Complaint broke four books*** | *Doug's ruling was "`unresolved` becomes a `Complaint`" — and applied literally it failed the build.* **A cover may name its author as a NAME rather than as an import — `<Author>The Team</Author>` — and the corpus does exactly that.** ***So a link with no book is an empty book with a display, and nothing complains.*** *The ruling was right that `Source` goes; it was the reading of `unresolved` that was wrong, and the corpus said so in one run* |
| ***the notation is not formatting, and the two are one character apart*** | **`$Section.compose()` splits on `
` to strip a `> ` marker, and [`parallel.tsx`](../../package/app/src/markdown/parallel.tsx)'s found side writes markdown on purpose.** *Those newlines are read, not written* — **the rule is that the framework never PRODUCES one**, and the converter that could not tell the difference broke the parallel text until it was repaired by hand |


## <a id="the-floor-closes"></a>THE FLOOR CLOSES ON ITSELF — Doug's, at the plan, and it is the sprint's deepest change

***He corrected the framing first, and the correction reordered everything:*** *"Library semantics are a metaphor for **cognition**, and it is within a theory of cognition that one must find a theory of meaning itself… perhaps there is a **SCALE INVARIANCE** to meaning, and we can understand the parts."*

**So the composition/reference dyad repeating at every grade is not an implementation convenience — it IS the claim**, and *level alone decides* and *a `$$X` is writing one grade below what it stands for* are what scale invariance looks like written down.

***Which turns "a composition composed of nothing shouldn't be legal" into a question with a measurable answer:*** **the exceptions are exactly where scale invariance stops, and they should be few and principled.** *Measured by adding the specification and walking one book:*

| composed of nothing | at the start | after |
|---|---|---|
| `$Letter` | **100** | ***0*** — **the floor is a FIXED POINT.** *Doug: "Letter needs to implement composition. I think it should be a composition of letter and return itself." `$Letter.ref` already returned `this`; **the composition arm now closes the same way**, so the structure stops by pointing at itself rather than by running out* |
| `$$Word` | **28** | ***0*** — *it inherits the fixed point, and [S20's "the floor catalogues nothing"](../the-condition-report/04-semantics.md#s20) is superseded: the floor catalogues itself* |
| `$Figure` | **1** | ***0*** — **a figure is composed of its caption.** *Doug: "A figure literally has a caption. Validate that it has to have one and you have a canonical part." `valid()` already required one, and `$Caption` was already at sentence grade — **the grade a paragraph composes*** |
| `$Code` | **1** | ***0*** — **a listing is composed of its lines.** *Doug's own [S3](../the-condition-report/04-semantics.md#s3) ruling built at last: "lines by default, and a language-specific subclass divides by its own grammar"* |
| `$$Paragraph` | **4** | ***0*** |

***And then the specification itself was tried, and it FAILED for a reason worth more than the specification.***

> **`valid()` calling `parts()` makes validity cost a PARSE** — on every writing, on every call, during every render. **Two promises stopped asserting and started timing out.**
>
> ***That is [I16](../the-condition-report/05-implementation.md#i16) exactly*** — *"readings evaluate, and the cache that makes it survivable lives outside the framework"* — **so the invariant is right and it is blocked behind LOWERING, which is [design owed](#what-has-no-unit-deliberately).** *Reverted rather than shipped, because a specification that costs a parse per check is a specification nobody can afford to enforce.*

***What stands: every class in the framework now composes something.*** **The probe reports an empty list**, and the specification that would say so is written down here waiting for the design that makes it affordable.


## <a id="the-two-arms"></a>The floor's TWO arms do not close at the same grade — recorded, not fixed

***Doug, at the plan:*** *"Doesn't `ref` have to be a reference to this type? If so, how can letter be a reference to itself?"* **He is right, and it is measured:**

| | `ref` returns | which implements |
|---|---|---|
| `$Word` · `$Sentence` · `$Paragraph` · `$Section` · `$Chapter` | **`$$X`** | ***`$Reference<X>`*** |
| `$Book` | **`$Cover`** | ***`$Reference<$Book>`*** |
| ***`$Letter`*** | ***itself*** | ***NOTHING*** — *it declares no `read()` and no `then()`* |

***And nothing catches it, because `ref` is a getter rather than an interface member.*** **The type system has a blind spot at exactly the floor.**

> ***Making it honest collides with the hierarchy, and this is the problem from before.*** **`$Letter implements $Reference<$Letter>` gives it `read(): $Letter` — but [`$$Word extends $Letter`](../../package/src/writing/Word.tsx) and must return `read(): $Word`, and a `$Word` is not a `$Letter`.** *The override is illegal.*
>
> ***So the structural fact is that the two arms bottom out at DIFFERENT GRADES.*** **Composition bottoms out at `$Letter` and [closes on itself](#the-floor-closes). Reference bottoms out one grade higher, at `$$Word`** — *because a reference form is writing one grade BELOW what it stands for, and there is no grade below a letter.* **`$Letter.ref` returning `this` papers over that rather than closing it.**
>
> ***Doug named the fix and it was MEASURED rather than argued:*** *"`$Letter` should implement `$Reference<$Letter>` and therefore can return itself"* and *"Maybe `$$Word` shouldn't extend `$Letter`? Don't we have references extend phrase generally?"* **Both were applied together. The cost is FORTY type errors, and every one of them is the same cascade.**
>
> ***The knot, stated once:*** **`$Catalogue<T> extends $Composition<$Reference<T>>`, so a catalogue's `parts()` IS its composition's parts.** *A `$$X` therefore has to be two things at once — writing at grade(X)−1, which fixes what it composes, and a catalogue of `$$Y`, which fixes what it returns.* **Those are reconciled today by ONE trick: every `$$X` extends X's own part type**, so `$$Y[]` is assignable to what the parent declares.
>
> **`$Letter` gaining `read()` and `then()` breaks the bottom link** — `$Word` is then no longer structurally a `$Letter` — **and the whole chain unthreads upward: `$$Sentence` stops being a `$Word`, `$$Paragraph` stops being a `$Sentence`, and so on to `$$Chapter`.**
>
> ***So `$$X extends $Phrase` is right about the SPECIFICATION and cannot be taken alone.*** **A reference form's copy is a NAME for what it points at, spaces and all — which is [exactly the argument that moved `$Link`](../the-condition-report/04-semantics.md#s18), and today every `$$` form above word grade silently repeals `$Word`'s no-whitespace rule to survive.** *Taking it needs the part TYPE to move with it, which is `$Word` generic in what it composes — **[S1's design-owed generics problem](../the-condition-report/04-semantics.md#s1-constraint), reached from a second direction**.*

## <a id="what-a-canonical-is"></a>What a canonical IS — Doug's, at the plan, and it settles an audit entry

> ***"We decided that the canonical canonical is the canonical of the composition. The canonical reference is the `ref` because it is not unique but we return one anyways. WHENEVER THERE ARE MANY OPTIONS BUT WE ASSOCIATE ONE, THAT IS A CANONICAL."***

**So `canonical` and `ref` are two canonicals OF DIFFERENT THINGS** — the canonical part of a composition, and the canonical reference to it. *They are not one member under two names.*

***This withdraws [I9](../the-condition-report/05-implementation.md#i9).*** **That entry read `$Book.canonical` and `$Book.ref` both returning the cover and concluded they were one fact stated twice.** *They are two facts that happen to share an answer today, and the fault was the answer rather than the duplication.*

***And Doug ruled what the answer should be:*** **`$Book.canonical` stays the cover — the canonical CHAPTER — and `$Book.ref` becomes `$$Book`, the canonical REFERENCE, which is the card in the catalogue.** *That is blocked on [U115](#u115), which builds `$$Book`.*


## <a id="cataloguing-is-derived"></a>A BOOK CANNOT AVOID BEING A CATALOGUE — and the type system was protecting it all along

***Doug, at the plan: "How is it possible that the type system doesn't protect this? … If you weakened the type system to make something work, that's like not requiring the abs of a complex number to be real."***

***IT WAS NOT WEAKENED, AND THIS WAS TESTED RATHER THAN ARGUED.*** **A probe under `--strict` assigned a composition of chapters to a composition of book-references and back:** *the forward assignment compiles, the reverse fails on a missing member.* **Covariance in the producing position is enforced.**

### The derivation, with nothing widened

```
$Referent                          valid()
$Reference<T> <: $Referent         read(): T,  then()
$Composition<T>                    parts(): T[],  canonical: T,  at, where, select…
$Catalogue<T>  =  $Composition<$Reference<T>>

given    $Chapter  <:  $Reference<$Book>        a chapter reads to a book
and      $Book      :  $Composition<$Chapter>   a book is made of chapters
─────────────────────────────────────────────
then     $Book      :  $Catalogue<$Book>        by covariance
```

***A book does not IMPLEMENT cataloguing. It cannot avoid it.*** **The moment a chapter is a reference to a book, being a catalogue of books follows, and the compiler derives it rather than being told.**

### And `entries` is a filter, not a second composition

**Dereference maps a catalogue to a composition** — `read : $Composition<$Reference<T>> → $Composition<T>` — *and applied to a book's own chapters it yields a MULTISET OF BOOKS:*

```
read(parts)  =  { c.read() | c in chapters }
             =  { this, this, this, … }  +  entries
```

***Which is Doug's own sentence and it is the theorem rather than an accommodation:*** *"let's imagine that the chapters that don't refer to other books refer to the one they are in."* **A cover, a contents and an own chapter read HOME; a catalogued synopsis reads AWAY.**

***So `entries` was never a second composition.*** **It is `read(parts)` with the identity removed** — *a filter over one composition, and filters are not types, which is exactly why nothing was there for the type system to protect.*

### What this corrects, and it is mine rather than the code's

> ***WITHDRAWN: "the interface says one thing and the class means another."*** **That was true while [`$Catalogue` still declared `read()`](#u115); once that came off, the interface says precisely what the class means.** *The audit's unease at [S20](../the-condition-report/04-semantics.md#s20) was a diagnosis of a fault that the framework does not have.*

### And the summit is the ordinary case

**The chapters that come home are `book =book> book`** — [the identity relation, and by the individuality axiom the individual](../the-semantics-of-books/.cover.md). **The ones that go elsewhere are genuine subject-object relations.** ***So subjecthood is the count of a book's relations that are NOT the identity*** — which is [chapter zero's "subjecthood is a count"](00-planning.md) with the count named.

***And `library.$subject = library` stops being a special case at the top of the library.*** **Every book does it, with most of its chapters.** *The library is distinguished only by doing it at the SUBJECT relation rather than at the CONTAINMENT one.* ***The fixed point is not rare; it is the ordinary case, seen at the one grade where it becomes visible.***

## <a id="the-naming-sweep"></a>The naming sweep — ***what Doug asked for in the room, measured***

> ***Doug, 2026-08-24:*** *"Every file in the main folders of lib — the framework — we shouldn't have classes with the double `$` unless necessary for name collisions and if there are any problems surface them to me"* — **corrected a moment later:** *"No, `$$` is fine. Sorry, I meant `$X$` needs to go. `$$X` is a convention we introduced for this referential catalogue that made to accompany a composition, that is itself compositional I believe. That is a good invention."*

### <a id="the-double-dollar"></a>`$$X` — ***kept, and it is one operator rather than seven escapes***

**All seven collide with the thing itself, so all seven pass the collision test** — *but the reason they collide is better than a collision.* ***Laid out together, the pattern is the theory:***

| | extends | implements |
|---|---|---|
| `$$Book` | `$Referent` | `$Reference<$Book>` · `$Catalogue<$Book>` |
| `$$Chapter` | `$Section` | `$Reference<$Chapter>` · `$Catalogue<$Section>` |
| `$$Section` | `$Paragraph` | `$Reference<$Section>` · `$Catalogue<$Paragraph>` |
| `$$Paragraph` | `$Sentence` | `$Reference<$Paragraph>` · `$Catalogue<$Sentence>` |
| `$$Sentence` | `$Word` | `$Reference<$Sentence>` · `$Catalogue<$Word>` |
| `$$Word` | `$Letter` | `$Reference<$Word>` |

***`$$X` IS THE REFERENCE TO AN X, STANDING ONE GRADE BENEATH IT*** — **a reference to a section is a paragraph, to a sentence a word, to a word a letter** — *and it is [a catalogue of that lower grade at the same time](#cataloguing-is-derived).* **That is scale invariance written as a type**, *and `$$` is notation for a relation rather than an escape from a name clash.* ***Doug's ruling: "That is a good invention."***

### <a id="the-trailing-dollar"></a>`$X$` — ***gone from `lib` entirely***

**`lib` is at ZERO.** *The whole framework contains one trailing-`$` identifier — `$apply$` — and it is [inside a comment](../../package/src/document/Denote.tsx) citing `$Chemistry`, not code.* **[U139](#u139) finished the job it was given.**

> ***`$CHEMISTRY` THE PACKAGE IS OUT OF SCOPE AND IS NOT TO BE CHANGED OR PROPOSED AGAINST.*** **Doug, twice and then a third time: *"DONT CHANGE CHEMISTRY FRAMEWORK!!! Stop recommending changes from chemistry the actual package."*** *Anything this sprint noticed there is struck rather than filed, because [a filed entry is a proposal that comes back](../the-condition-report/06-the-cleaning.md#dispositions).* **The package is read to understand what `lib` is built on and for no other reason.**

## <a id="what-is-batched-for-doug"></a>WHAT IS BATCHED FOR DOUG — four things, all of them in `lib`

***Doug at the start of the work: "get EVERYTHING implemented that you are sure of first and then batch the uncertainty."*** *These are the uncertainty. Each says what it is blocked on rather than proposing a fix.*

| | | why it is not decided |
|---|---|---|
| **B1** | ***`$Theme.lay(of, uniform)`'s third parameter*** | *It answers from `uniform` alone — but `of` is an **extension point**: a subclass may lay out differently for a particular composition.* **[I17](../the-condition-report/05-implementation.md#i17) rules it TREAT; removing it narrows what a consumer can override.** *A parameter a subclass could use is not the same as a parameter nothing passes* |
| **B2** | ***`$Legend.valid()` returns `true`*** | *It **erases** a specification rather than stating a different one, which is [what `$valid(condition, reason)` exists to prevent](../the-condition-report/04-semantics.md#s8).* **What a legend requires is a semantic call — is an empty legend legal? — and it is not mine** |
| **B3** | ***`parenthetical` dropping its `$`*** — [U142](#u142) | **The mechanism is verified**: [`particle.ts:326`](../../../chemistry/package/src/abstraction/particle.ts) writes every JSX prop to `$` + name, so a plain `parenthetical` stops being settable from JSX — *which is the point.* ***The cost is that the demonstration writes `<Section parenthetical>` in about twenty corpus files and those stop working***, and what replaces them is a `$Section` subclass **that needs a word** |
| **B4** | ***`$Synopsis`'s ignored setter*** | *Its `parenthetical` getter answers `!this.standsFor` and its setter writes a field nothing reads.* **Either the setter goes or the getter honours it**, and which one is a semantic call about what a catalogued synopsis IS |
| **B5** | ***The five demonstration typecheck errors — CLOSED*** | **All five are gone; the demonstration typechecks at `0/0` with nothing baselined.** *Three were `the-team/card.tsx` failing because `$TheManifold` was not assignable to `$Book`, and the cause was the other two:* **`$TheManifold.head()` — the demo's scroll-to-top — collided with `$Book.head(theme)`, which draws a book's head.** ***The framework member wins and the demonstration yields***, renamed from the file's own comment — *"a turned page opens at its head"* — **and [flagged as a proxy](#the-names-owed)** |

## <a id="what-is-not-started"></a>The units NOT started, and why

| | | |
|---|---|---|
| ***[U115](#u115) · [U116](#u116) · [U117](#u117)*** | `$$Book` · annotations and `library` · `$Annotation` | ***the three largest semantic units, and they are one arc*** — the card gains its second interface, then annotations become a member of writing, then the three rules are written off the card. **They cross the framework/compiler seam and reach the demonstration's `$LibraryCard`** |
| ***[U118](#u118)*** | one question, one answer | *six questions with several answers apiece — mechanical but it moves `CHECK`'s letter count, which wants recording in the same act* |
| ***[U126](#u126) · [U127](#u127)*** | `$for` splits · an annotation finds its own card | **[U127](#u127) depends on the whole of [U115](#u115)–[U117](#u117)** |
| ***[U128](#u128) · [U131](#u131)*** | the misfit names · the struck names | ***partly done*** — `$Composible$` dissolved with [U120](#u120). **[U131](#u131) is gated on thirteen words** |
| ***[U132](#u132)–[U137](#u137)*** | the compiler group | **[U132](#u132) is a READING and gates the other three.** *It has no dependencies and could have run alongside the hygiene group* |
| ***[U138](#u138)*** | ***one `$Title` drawn three ways*** | **[U123](#u123) is done, so its precondition is met.** *This is the sprint's stop condition and it is the next thing worth building* |
| ***[U142](#u142)*** | `parenthetical` stops being a prop | ***blocked on [B3](#what-is-batched-for-doug)*** |

# <a id="what-is-not-in-this-sprint"></a>What is NOT in this sprint

| | |
|---|---|
| ***design owed*** | **how a consumer adds a notation** · **one `$Code` whose level moves** · **lowering** · **a composition that is also a reference**. *Four things with no mechanism yet, [named in the report](../the-condition-report/06-the-cleaning.md#actionable) and [denied units by the planning rule](../../../../.claude/library/our-skillset/29-ce-plan.md).* |
| ***out of scope*** | **the application, the demonstration and the Lab** — ***nine entries, counted off the markers rather than kept beside them***: `O2` `O3` `O4` `O5` `O9` `O12` `I18` `I19` `I20`. [Scoped out by Doug](../the-condition-report/01-how-to-read-this.md#the-scope), identifiers kept, [and held here](../the-condition-report/06-the-cleaning.md#the-rest) |
| ***`$Chemistry`*** | **not audited and not touched.** *A change there requires rebuilding its dist and every dependent library against it — Doug's own condition.* |
| ***the team library's 93 remaining uses of a struck word*** | **owed, and not this sprint's work** — *a tending pass in another repository* |

***And the whole of it is held in one place: [THE REST OF THE AUDIT](../the-condition-report/06-the-cleaning.md#the-rest)***, which names every piece the sprint does not take, why, and who holds it. **That section exists because Doug asked for it by name:** *"handoff the rest of the audit too because we have to keep track."*

# What to read first

***Five things, each with what is load-bearing in it. This is a starting point and not a boundary.***

| | what is load-bearing there |
|---|---|
| [The Condition Report · the problems](../the-condition-report/06-the-cleaning.md#actionable) | ***the requirements above ARE these 23 entries***, each carrying Doug's ruling verbatim and, in several cases, a warning that limits what the fix may do |
| [The Condition Report · how to read this](../the-condition-report/01-how-to-read-this.md) | **what is being audited and what is not**, the struck vocabulary, and the five strata — *which say when each part of the framework was written, and therefore which standard it was held to* |
| [`Writing.tsx`](../../package/src/writing/Writing.tsx) and [`Paragraph.tsx`](../../package/src/writing/Paragraph.tsx) | ***the 2026-07-31 spine — the best code in the package***, and the standard everything else in this sprint is being brought up to |
| [I22](../the-condition-report/05-implementation.md#i22) | the statics ruling, ***and the warning attached to it***: a thing shared by two siblings and not by the family belongs to neither the module nor the base |
| [chapter zero](00-planning.md) | the standing plan, and the four-way split saying which book answers which question |

# How to see it

***The sprint's visible end is [U138](#u138): one `$Title` drawn three ways on one page, with a fourth left untouched and still the default.*** **It is a unit rather than a closing flourish, and [the drawing group does not close without it](#d69).**

`npm run dev` in [`library/.public/package`](../../package/) serves the framework's own app — **where [U138](#u138) lands** — and `npm run dev` in [`library/.public/app`](../../app/) serves the public library. **The gates are `npm test` in the package** — `tsc --noEmit`, the app typecheck, and `vitest run` — **and `npm test` in the app**, which is the typecheck and the library driver.

***And the gates are not the test.*** **[Four things a count cannot fake](../the-condition-report/06-the-cleaning.md#the-test)**, and the fourth cannot be automated at all: *a class opened at random reads as book semantics plus one held component.*

---

# <a id="the-drivers"></a>The demonstration, driven — ***and why it looked broken when it was not***

***Doug asked for the demonstration driven in a browser, every part of it touched.*** **It was, and the app was never broken.** *What was broken is the two drivers that were supposed to say so.*

| | |
|---|---|
| ***the symptom*** | **[`verify-demo.mjs`](../../package/app/verify-demo.mjs) stalled at checkpoint 1** and **[`verify-book.mjs`](../../package/app/verify-book.mjs) stalled at 5, then at 50** — *different places on different runs, always at a step that LEAVES A BOOK AND COMES BACK TO THE SHELF* |
| ***the first cause*** | ***`networkidle0` / `networkidle2`.*** **A cold vite compiles 170 modules on the first hit and network idle is never reached inside the timeout** — *so a driver's first checkpoint fails on a working app* |
| ***the second cause*** | ***`waitForSelector` is bound to an execution context that a full page load DESTROYS.*** **Opening the algebra book sets `window.location.href = '/page'`, and following a subject link is an `<a href>`** — *both are full navigations, and the wait dies on precisely the steps it exists for, reporting a missing selector rather than a swapped context* |
| ***the evidence it was ours already*** | **[the chemistry harness](../../../chemistry/package/app/verify-all.mjs) has never had this problem**, *because it navigates on `domcontentloaded` and then settles.* ***The team's own working pattern, in the repository, unread*** |
| ***why nobody caught it*** | ***NEITHER DRIVER WAS IN ANY `npm test`.*** **A driver nobody runs is not a gate** — *and these two had been silently unwatched* |

***Filed as [The red that exercised nothing](../solutions/26-the-red-that-exercised-nothing.md)***, **and as [the SIXTH appearance](../solutions/14-the-green-that-exercised-nothing.md) of the false red** — *the same 49/61 signature as August's stale-server run, from a cause with nothing in common, six days later.* ***A procedural fix does not kill a class.***

***The fix is the pattern we already had.*** **Both drivers navigate on `domcontentloaded` now, and `waitForSelector` is replaced by a `landmark()` poll that survives a page load and says which landmark never arrived.** *They are wired as `npm run verify` in [the package](../../package/package.json), so they run.*

***And the title section joined the walk***, **which it had not been in**: *[U138](#u138) was green in jsdom and unwatched in a browser.* **Six checkpoints, measured on the COMPUTED STYLE rather than the class name** — *four distinct generated classes would pass while all four drew identically.*

| | |
|---|---|
| **`npm run verify`** | ***31 + 61 = 92 checkpoints, 0 failed, 0 console errors*** |
| *the page* | lenses · katex · **a keystroke moving the count off the live model** · an edit surviving a lens change · browser history |
| *the title* | four drawings · four components · ***different on the screen*** · the scope substituting where the PARSE builds a title |
| *the books* | the shelf · the manifold's ribbons, references, dog-ear, atlas and notes · The Team · The Build's computed figures · **every return to the shelf** |

# <a id="the-shelf"></a>The shelf — the sprint's own derivation, arriving as a defect

***The library driver was the thing that found it, and it found it by stalling.***

**Against the committed output it scored 2 of 9 checkpoints with two console errors** — *`$IndexCard` no longer exported, which is [U129](#u129)'s merge of the card into the book.* **Against the recompiled output it scored 6 of 9 with none**, *and then stalled: nothing to click for the physics entry.* ***A subject was drawing none of the books it catalogues.***

**The cause is this sprint's own derivation, and it is worth stating as theory rather than as a fix.** *[A book is a composition of chapters and a chapter is a reference to a book, therefore a book is a catalogue of books](#cataloguing-is-derived)* — **so a subject's entries ARE chapters.** *And [a book is read a chapter at a time](../../package/app/verify-library.mjs), which is the promise the whole reading surface turns on.* ***Put those two together and a subject can show at most ONE of the books it catalogues.***

> ***A CATALOGUE IS CONSULTED, NOT READ.*** **That is the distinction the two promises were missing between them.** *A book is read a chapter at a time because reading is sequential and a reader holds a place. A catalogue has all of its cards out at once, because the whole point of consulting one is that you do not handle the items* — **which is the same reason [the generated catalogue imports no book at all](../../build/stages/catalogue.ts).**

**So `$Book` draws a shelf** — *every entry, always, outside the reading* — **and a book that catalogues nothing draws none, which is how a reader says it is a reader.** ***The styled component was still in the file.*** *Only its method had been deleted, one commit earlier, as [a drawing that never reached the page](../solutions/.cover.md)* — **and the reason it never reached the page is the paragraph above.**

***And an entry says what its CARD says, not what its chapter draws.*** **The synopsis chapter's summary is `parenthetical` by design** — *it is an account of the book, and an account is not a shelf label* — **so drawing the chapter's contents showed a heading with nothing under it.** *The card already carried the line;* ***that is what a card is for: what a reader is shown before deciding to open anything.***

**39 of 39 checkpoints, 0 console errors.** *From a stall at 9.*

# Where things stand

*One state, written 2026-08-24 at the session's close. **The previous state is deleted rather than layered under this one.***

## → THE NEXT ACTION

> ### `/ce-brainstorm` — ***the heavy audit of the compiler***

***Doug set it in the room, 2026-08-24: "I think we'll plan based on the rest of the audit and beyond. I want us to heavily audit the compiler if the framework is where we want it to be."***

**Brainstorm rather than plan, and the reason is [the audit's own worst finding](20-the-audit.md#part-iv): four things in this branch were planned before they were designed.** *The compiler has had ONE reading pass. What a heavy audit of it should ASK has not been decided, and deciding that is the brainstorm.*

***The subject above is what this session expected, not the next session's brief.*** **Doug sets the subject in the room.**

---

## The sprint is closed

**Semantics, Then Drawing ran to its stop condition.** *Twenty-nine requirements, thirty-four units, and the four things Doug asked to be finished are finished.*

| | |
|---|---|
| **`$Chemistry`** | ***684/684*** · `tsc` 0 |
| **`lib`** | ***346/346*** · `tsc` 0 · demonstration typecheck ***0/0 baselined, 0 unexpected*** |
| **the compiler** | ***43/43*** · walk 29/29 · resolve + emit 37/37 · ***CHECK 7/7 books stand*** — 34 chapters, 60 sections, 172 paragraphs, 312 sentences, 2,359 words, 17,240 letters |
| **the public library** | `tsc` 0 · ***verify-library 39/39, 0 console errors*** |
| **the demonstration, driven** | ***`npm run verify` — 92 checkpoints, 0 failed, 0 console errors*** |

***All five green in one pass, against rebuilt `dist`s in the ruled order*** — **which was [K5](#k5)'s whole warning and is now closed.**

## <a id="the-compiler-audit"></a>THE COMPILER AUDIT — ***what to brainstorm, and why one pass was not it***

***Doug's instruction, verbatim, 2026-08-24:*** **"I want us to heavily audit the compiler if the framework is where we want it to be."** *And at the plan, on the same subject:* **"We are auditing the compiler too."** *And the licence that goes with it:* **"the compiler is not the framework. It can have compiler words."**

**What ran this sprint was [U132](#u132): the three instruments `lib` got — a member pass, an interface pass, a naming pass — over 2,000 lines in 17 modules, in one sitting.** *It produced [The Compiler](../the-condition-report/08-the-compiler.md), eight entries, and its headline is that **not one is a wrong mechanism**: every entry is a thing said twice.*

***THAT IS A CODE READING AND IT IS NOT AN AUDIT.*** **[The letter Doug wrote for the framework](20-the-audit.md#the-letter-and-what-it-asked-for) asked six things, and the compiler has been asked ONE of them.**

| Doug's ask, from the letter | asked of `lib` | asked of the compiler |
|---|---|---|
| **1 · say what the design principles ARE** | ***yes*** — [the principles read off the code](20-the-audit.md#part-i--the-principles-read-off-the-code) | ***NO.*** *One line exists — [the unit of code is a phase](../designing-inexplicable-phenomena/07-the-unit-of-code.md) — and nothing else* |
| **2 · note what is DIFFERENT** | ***yes*** | ***partly*** — [the three codebases](../the-condition-report/07-the-three-codebases.md) measured it and registered differences, not faults |
| **3 · find the warts** | ***yes*** — 52 of them | ***the one pass*** — [eight entries](../the-condition-report/08-the-compiler.md) |
| **4 · how a `$Theme` could unify it** | ***yes***, and superseded by the rulings | **N/A** — *the compiler draws nothing* |
| **5 · does the demo fight the framework** | ***yes*** | ***THE REAL QUESTION HERE, UNASKED:*** **does the compiler fight the model?** |
| **6 · naming that does not fit the semantics of books** | ***yes*** — 31 misfits, 6 collisions | ***NO*** — *and it is the one place the answer might legitimately be "compiler words," which is a ruling rather than a finding* |

### What a heavy audit should ask, and none of it is decided

***These are candidates for the brainstorm, not a plan. Each is written as a question because nobody has ruled whether it is worth asking.***

| | the question | why it might matter |
|---|---|---|
| ***A*** | **Does the compiler FIGHT THE MODEL?** *It reads a library off the filesystem and emits a program — and the model has its own account of what a library is* | **[S21](../the-condition-report/08-the-compiler.md#s21) is the tell**: *the compiler's one contact with the framework it compiles for is `any`*, so **nothing has ever checked that the compiler's `Book` and `lib`'s `$Book` agree about anything** |
| ***B*** | **What can the compiler NOT express?** *[Lowering](../the-condition-report/05-implementation.md#i16) is already named as design owed — the compiler filling in what can be inferred* | *`lib`'s audit found four things [we do not know how to implement](20-the-audit.md#what-we-cannot-yet-do). **The compiler's list of those has never been written*** |
| ***C*** | **Is the seam COMPLETE?** *One `Library` type, enriched by each stage* | **A stage cannot see what the seam does not carry**, *so a gap in it is invisible from inside any stage — which is exactly the class of fault a member pass cannot find* |
| ***D*** | **What happens when the corpus is WRONG?** *Complaints travel rather than stop the walk, which is a real design* | ***Nobody has audited the error paths.*** *[CHECK's 7/7](#the-gates-run-fresh) is a corpus that passes; a corpus that fails has one test* |
| ***E*** | **Do the compiler's words fit?** *`walk` · `refer` · `resolve` · `emit` · `validate` · `catalogue` · `Card` · `Complaint` · `Link` · `Entry`* | ***Doug licensed compiler words and did not licence WRONG ones.*** *[N34](../the-condition-report/08-the-compiler.md#n34) found one closed set stated three times; the naming pass judged members, never the STAGE names* |
| ***F*** | **Is the emitted program a thing a PERSON would write?** *It is read by `lib` and by the app, and a reader opens it* | **[The emitter was writing an escaped newline into every cover it completed](../the-condition-report/08-the-compiler.md#s22)** — *found only because Doug purged newlines from the framework and someone checked the other side* |

### And the eight entries the one pass DID find, with their dispositions

***[S22](../the-condition-report/08-the-compiler.md#s22) is DONE.*** **[S21](../the-condition-report/08-the-compiler.md#s21) and [N34](../the-condition-report/08-the-compiler.md#n34) are the two worth doing next** — *both are the type system being asked to check something it can already check.* **[I23](../the-condition-report/08-the-compiler.md#i23) · [I24](../the-condition-report/08-the-compiler.md#i24) · [I27](../the-condition-report/08-the-compiler.md#i27) are mechanical, one commit each.** *[I25](../the-condition-report/08-the-compiler.md#i25) and [I26](../the-condition-report/08-the-compiler.md#i26) are filed.* ***[O14](../the-condition-report/08-the-compiler.md#o14) is Doug's*** — **`CHECK` is a phase of the compile filed as a command**, and moving it changes what the folder names mean.

## THE REST OF THE AUDIT — ***what needs a brainstorm before anyone can say whether it is relevant***

***Doug, 2026-08-23: "handoff the rest of the audit too because we have to keep track."*** **Kept. Nothing below is scheduled, and each row says what is unknown about it rather than what to do.**

### The four DESIGN OWED — ***no mechanism, no files, and that is why they are not units***

***This is [the audit's own worst finding](20-the-audit.md#part-iv) turned into a rule: a unit with no mechanism is not a unit.*** **Each of these is blocked at a named place, and none is a missing feature — each is a place the abstraction has not been carried far enough.**

| | | the brainstorm question |
|---|---|---|
| [S10](../the-condition-report/04-semantics.md#s10) | **how a consumer adds a notation** | *Is this wanted, or is the notation set closed on purpose?* |
| [S4](../the-condition-report/04-semantics.md#s4) | **one `$Code` whose level moves** — dynamic layering | *Does this collapse into [the vertical perspective work](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), or is it separate?* |
| [I16](../the-condition-report/05-implementation.md#i16) | ***lowering*** — the compiler fills in what can be inferred | ***THIS ONE IS THE COMPILER'S***, and it belongs in the compiler audit rather than beside the other three |
| [I11](../the-condition-report/05-implementation.md#i11) | **a composition that is also a reference** — the mixin | ***THE SPRINT HIT THIS FROM A SECOND DIRECTION.*** *[The floor's two arms](#the-two-arms): `$Letter` closes on itself in composition and cannot in reference, at a cost of 40 type errors.* **Two independent findings of one gap is the strongest signal in the report** |

### Four batched for Doug in `lib`, all small, none guessed at

**[B1](#what-is-batched-for-doug)** *`$Theme.lay`'s third parameter — an extension point or dead weight* · **[B2](#what-is-batched-for-doug)** *`$Legend.valid()` erases a specification rather than stating one* · **[B3](#what-is-batched-for-doug)** *`parenthetical` dropping its `$`, at the cost of twenty corpus files and a word* · **[B4](#what-is-batched-for-doug)** *`$Synopsis`'s setter that its getter ignores.*

### The words owed

***[Thirteen renames are decided and the words are not](#the-names-owed), and [none is mine to take](#d67).*** **This is the one category that cannot be brainstormed by the team** — *it is a sitting with Doug, and it blocks nothing else.*

### What is out of scope and stays out

**The application, the demonstration and the Lab** — *nine entries, [scoped out by Doug](../the-condition-report/06-the-cleaning.md#the-rest) in his own words: **"remove ones that aren't about the framework and compiler."*** **Every finding stands and the identifiers are kept.**

> ### ***AND `$CHEMISTRY` THE PACKAGE IS NOT TO BE CHANGED OR PROPOSED AGAINST.***
>
> ***Doug, three times in one session:*** **"I am talking about only the lib package"** · **"DONT CHANGE CHEMISTRY FRAMEWORK!!!"** · **"Stop recommending changes from chemistry the actual package."**
>
> **The one exception he granted and confirmed is `Chemistry` → `$Chemistry$`, and it is DONE.** *The package is read to understand what `lib` is built on, and for no other reason. Anything noticed there is struck, not filed — [a filed entry is a proposal that comes back](../the-condition-report/06-the-cleaning.md#dispositions).*

## ***THE INSTRUCTION TO THE TEAM: FINISH THE AUDIT PROCESS***

***Doug's requirements for the audit, in his own words, gathered so no one has to hunt them:***

> **"lib is an application development framework built on a to-be-fully-formalized first order theory of semantics, identity, cognition and consciousness."**
>
> **"Try to pare this down to the actionable things so we can address them next sprint."**
>
> **"make sure this audit is known, and that you have been structuring my responses in the form of PROBLEMS TO SOLVE."**
>
> **"91 entries in the audit is a lot… remove ones that aren't about the framework and compiler."**
>
> **"handoff the rest of the audit too because we have to keep track."**
>
> **"We are auditing the compiler too."** · **"the compiler is not the framework. It can have compiler words."**
>
> **"I want us to heavily audit the compiler if the framework is where we want it to be."**

***What finishing means, and it is four things:***

1. ***Every entry reaches a terminal state.*** **Ninety-three plus eight is a hundred and one, and [the coverage ledger](../the-condition-report/06-the-cleaning.md#every-entry) already routes each one** — *but a routed entry is not a closed one.* **An entry is finished when it is fixed, ruled, struck, or held by a named owner with a date.**
2. ***The compiler is asked the other five questions.*** *It has been asked one. **The letter governs the compiler too, and Doug said so.***
3. ***Every resolved entry gains its resolution IN PLACE.*** **[The report is written to be edited, never appended to](../the-condition-report/.cover.md)** — *a reader must meet the current state rather than an archaeology of one, and this sprint closed entries without always going back.*
4. ***The words are settled with Doug in one sitting.*** **Thirteen renames wait on words**, *and every session that passes without them is a session where the code says something the theory does not.*

***The standard every entry is judged against is his, and it is the only one:*** **"code that exemplifies a formalism has to be flawless in a way that most code does not — every place the code says something the theory does not is a place a reader learns the theory wrong."**

## What to read — ***four, shaped for a brainstorm rather than for work***

*[Not a boundary](../../../../.claude/library/our-skillset/32-ce-handoff.md#9-sufficient-is-a-claim-and-it-was-wrong) — a starting point. **A brainstorm reads sources, not code.***

| | what is load-bearing in it |
|---|---|
| **[The Compiler](../the-condition-report/08-the-compiler.md)** | ***the only reading the compiler has ever had.*** **Eight entries, and the shape of them — every one a thing said twice — is what the next audit has to get past** |
| **[The letter](20-the-audit.md#the-letter-and-what-it-asked-for)** | ***Doug's six asks and the frame that governs them.*** **The compiler has been asked one of the six** |
| **[The cleaning](../the-condition-report/06-the-cleaning.md#actionable)** | ***the problems list, and the coverage ledger beneath it.*** **Where each of the hundred-and-one entries went, and what is held rather than fixed** |
| **[`build/library.ts`](../../build/library.ts)** | ***the compiler's entire shared vocabulary, with prose on every field.*** **A stage cannot see what the seam does not carry, so [question C](#the-compiler-audit) is answered here or nowhere** |

## Wrong turns already taken — ***do not retry these***

| | |
|---|---|
| ***Writing a new browser driver*** | **Three exist and two are green.** *[The red that exercised nothing](../solutions/26-the-red-that-exercised-nothing.md) — the drivers stall on `networkidle` and on a wait bound to a context a page load destroys, and [the working pattern was already in the chemistry harness](../../../chemistry/package/app/verify-all.mjs)* |
| ***Reading a stall as a claim about the app*** | ***A red is a claim about the instrument until it is a claim about the code.*** **Two tells: the failure MOVES between identical runs, and a manual pass contradicts the automated one** |
| ***Constructing a chemical inside `view()`*** | **It never returns, with no refusal at all** — *where two neighbouring mistakes are refused by name.* [Five faults the demo found](#what-the-demo-found) |
| ***Renaming `Chemistry` to `$Chemistry`*** | **The name is held by the interface it is cast into.** *It is `$Chemistry$`, done, and [the trailing `$` is the collision mark](#the-trailing-dollar)* |
| ***Proposing anything in `$Chemistry` the package*** | ***Ruled out three times in one session.*** *See the box above* |

## How to see it

| | |
|---|---|
| **the demonstration** | `npm run dev` in [`library/.public/package`](../../package/) → ***http://localhost:5199/*** — **the shelf and four books.** *`/page` the lenses and the live model · `/books` the shelf · `/title` [one `$Title` drawn four ways](#u138), which is the sprint's stop condition and the thing to look at first* |
| **the public library** | `npm run dev` in [`library/.public/app`](../../app/) → ***http://localhost:5299/*** — **the compiled test library**, *the front door catalogues three books and [the shelf is back](#the-shelf)* |
| **driving them** | `npm run verify` in the package — ***92 checkpoints*** · `npm test` in the app — ***39 checkpoints.*** **[Start the server yourself first](../solutions/14-the-green-that-exercised-nothing.md)**, and *a short count is a stall rather than a number* |
