# The Type and the Instance

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

*This chapter exists because the same understanding was rebuilt four times in one session and left nowhere. **Doug: "You guys don't understand the fundamentals. Write things down! Read the compounding notes. Use the library branch. Try to hold onto a fraction of what is being built here so as to not waste so much time."** Where [The Unit of Code](07-the-unit-of-code.md) says what one piece of code IS and [The Order of a Class](08-the-order-of-a-class.md) says how one is arranged, this says **where a member goes** — and it settles a question that had been answered differently every time it came up.*

## <a id="the-split"></a>The split

***In an ordinary language a type is welded to its class.*** **Doug: *"when you derive from a class, it is the type that limits what you can override. You can't add a colliding member right? You need to implement certain things. The instance does not."*** *The type is the contract, and there is no way to hold one without the other.*

***In this framework they come apart.*** **`$Type` is a separate object from the writing it types**, and that is the whole design:

> ***"We have a type instance of class split here, where the type holds the MEANING and the instance holds the DATA. This allows us to move meaning to different instances of classes, allowing polymorphic flexibility."***

**So `$$(writing, $Letter)` is not a cast.** ***It is the act of applying a different meaning to the same data***, and that is why binding is the framework's central verb rather than a convenience.

## <a id="the-test"></a>The test for where a member goes

***One question, asked of every member:***

> **Would this be the same for every piece of writing of this type?**

| answer | where it goes |
|---|---|
| **the same for all of them** | ***the type*** — it is meaning |
| **different for each one** | ***the instance*** — it is data |
| ***the VALUE differs but the RULE does not*** | **the instance holds the answer; the type holds the procedure** |

***That third row is the one that gets decided wrongly***, and it is where every mistake in [The Bind](../projection/29-the-bind.md) landed.

## <a id="worked"></a>The test, run over what exists

| member | | why |
|---|---|---|
| `block` · `copy` · `inside` | ***instance*** | *they differ per writing* |
| the specification's rules · `patterns` · the segmenter | ***type*** | **identical for every letter there will ever be** |
| `kind` · `case` · `canonical` | ***split*** | *the value is the instance's; **the procedure that produces it is the type's*** |
| ***the carried list of types*** | ***MISPLACED*** | **meaning sitting on the instance** — *which is why it needed a member to maintain it* |

***A member that maintains meaning on an instance is the tell.*** **If a class needs a method whose only job is to keep a meaning-holding field tidy, the field is on the wrong object.**

## <a id="what-follows"></a>What follows, and it is not obvious

***Because meaning is a separate object, changing meaning does not require subclassing the data.*** **To classify letters differently you hand a letter a different type — you do not subclass `$Letter`.** *That is the flexibility the split buys, and it is invisible until someone tries to use it.*

**It also settles a recurring argument.** *When a rule "belongs to a level", it belongs to the level's **type**, and the level's class merely holds the answer.* ***The class is data. The type is law.***

## <a id="the-type-generates"></a>The type is the factory, the class is what it makes

*Doug: **"TypeOfBook is the type. Book is the class right? It generates many $Book instances."***

| | | |
|---|---|---|
| **`$TypeOfBook`** | ***the type*** | **one object**, filed under the name `Book` by `[cache]` |
| **`$Book`** | ***the class*** | *the shape of the data* |
| **`$Book` instances** | ***many*** | *one per piece of writing it is bound to* |

***CORRECTED 2026-09-04.*** *An earlier draft said the type names its class through `canonicalForm` and `$$` builds one.* **Both are gone** — `canonicalForm` is [among the four members Doug deleted](15-the-spelling-of-a-kind.md), and `Lib.tsx` with its `$$` bind no longer exists. **What a type names today is its REFERENCE kind** (`override get reference()`, the level's own `$$X`), and **what makes one is [`$check(Kind, '!')`](#making-one)**. *The split itself is unchanged; only the two members that expressed it were replaced.*

## <a id="the-problem"></a>The problem this solves — ***base-class scarcity***

*Doug: **"I am freeing up the base class, an essential problem in UI frameworks right?"***

***In a UI framework behaviour arrives by extending a base, and a class gets exactly ONE `extends`.*** **Every capability competes for that single slot**, which is why frameworks accumulate mixins, higher-order components, hooks and decorators — *all of them ways of adding behaviour without spending the inheritance.*

***Splitting the type off frees the slot.*** **An author's own class can carry any meaning without being a subclass of the thing that means it:**

> *"TypeOfBook holds the meaning of book, so you don't have to derive from Book to have it."*

***And that is not a claim — it is promised and drawn.*** **[`book.test`](../../package/src/tests/book.test.tsx): writing that never derived from `$Book` composes two chapters and answers as a book because it carries `<Type>Book</Type>`.** *The same shape stands as an example in [`.spec/book/WritingSpec.tsx`](../../package/.archive/book/Book.tsx).*

***Where this sits among known patterns*** — **recalled rather than looked up, and flagged as such until verified:** *the closest named form is **Type Object** (Johnson & Woolf, PLoP 1997), which splits a class in two so new types can be made without subclassing; its neighbours are **Entity–Component–System**, the intrinsic/extrinsic split of **Flyweight**, and **traits or roles** in Scala, Rust and Raku.*

## <a id="verified"></a>ONE TYPE, MANY IMPLEMENTATIONS — ***the feature, verified***

*Doug: **"$TypeOfBook can be related to $Book1 and $Book2 and $Book3 right? They don't have to be 1-to-1 exactly although one needs to be canonical. You can create many book classes with NO relationship to each other except through writing."** + **"they are all interchangeable. I can make 12 types of chapters and as long as all are types of chapters I can pass them to book right?"** + **"But that's why the TYPE has to hold the specification."***

***All of it is true, and **`tests/many.test.tsx`** is where it is proven rather than asserted.*** **Seven promises, green:**

| | promise | |
|---|---|---|
| **1** | `$Bound` and `$Paperback` descend from **neither `$Book`, nor `$File`, nor each other** | *both extend `$Writing` directly* |
| **2** | ***both answer as books***, because both carry the type | `$$(one)($Book)` is true for each |
| **3** | ***the canonical form is what the reading builds*** when it must make one | `$$(bound, $Book)` yields a real `$Book` composing its chapters |
| **4** | ***the contract is enforced on all of them alike*** | *a paragraph where a document belongs fails in both, in File's words* |
| **5** | ***and the TYPE holds it because the classes share no base*** | **`Object.getPrototypeOf($Preface) === $Writing`** |
| **6** | ***a book composes unrelated chapter classes alongside its own***, in written order | `$Chapter`, `$Preface`, `$Appendix` → three parts |
| **7** | *and none of them descends from `$Chapter`* | |

***A class does not declare its type — ITS BOND DOES.*** **`$Preface`'s bond calls `specifying($TypeOfChapter)` and that is the whole of what makes it a chapter.** *The reading then answers through the carried type rather than through `instanceof`, which is why classes with no ancestor in common are interchangeable wherever their type is asked for.*

***And that is the argument for the design, stated as a measurement:*** **if implementations share no base class, there is nowhere to put a shared contract except the type.** *Doug's sentence — "that's why the TYPE has to hold the specification" — is not a preference. It is the only place it can go.*

## <a id="how-to-use-it"></a>How someone USES this — verified against the examples

***Four ways to give a piece of writing a meaning, weakest coupling first.*** **Every one of them is typechecked and drawn in **`.spec/`**.**

| | what an author writes | what it costs |
|---|---|---|
| **1** | ***carry the type*** — `<Writing>…<Type>Book</Type></Writing>` | **nothing.** *No class, no subclass, no import of `$Book`* |
| **2** | ***write the level*** — `<Book>…</Book>` | *one import* |
| **3** | ***a new kind, type only*** — `$TypeOfTitle extends $TypeOfParagraph`, `[cache]('Title')`, a specification | ***one declaration and no class*** — *the kind is then written `<Type>Title</Type>`* |
| **4** | ***a new kind with its own data*** — a class **and** a type | *two declarations, and only needed when the kind holds something a paragraph does not* |

***Route 3 is the one the split buys*** — **a kind that is only a meaning.** *[`.spec/paragraph/DerivedSpec-Title.tsx`](../../package/.archive/writing/Paragraph.tsx) declares two of them, `Title` by deriving a specification and `Quotation` by decorating one, and neither has a class of its own.*

## <a id="corollaries"></a>The corollaries, measured rather than argued

*These were each learned the expensive way in [The Bind](../projection/29-the-bind.md) and are recorded here so they are not learned again.*

<a id="method-not-property"></a>**A rule is a `$`-prefixed METHOD, never a property.** ***Measured on TS 5.9.3:*** *`$one(w: T): void {}` keeps `Spec<$Letter>` assignable to `Spec<$Writing>`; `$one: (w: T) => void` does not, and neither does a `<in T>` annotation.* **Methods are bivariant and function properties are not** — *and [Solutions 20](../solutions/20-the-narrowed-prop-that-disowned-its-base.md) is the same mechanism with the opposite sign, where a narrowed `$` **property** produced thirty errors in five untouched classes.*

<a id="declare-at-the-base"></a>**Every rule declares its parameter even when it ignores it.** *A base rule written `$one(): void` cannot be overridden by `$one(writing: T): void` — `TS2416: Target signature provides too few arguments`.* ***Declare at the base's type, never at the value's.***

<a id="base-first"></a>**Rules run base-first, deduped across the whole chain.** *A prototype walk starts at the most derived, so it must be reversed; and deduping within a class's own chain is not enough — **a decorated specification ran its base rules twice** until the parent link was deduped too.*

<a id="one-specification"></a>**There is ONE specification and it is the type's.** *Running a base specification and then each carried type's runs the base rules twice.* **A writing asks its type; the type answers with one specification that already contains its ancestors' rules by inheritance.**

<a id="plain-class"></a>**A specification is a plain class and must never become a chemical.** *The `$` convention is safe only while it is not competing with chemistry's own, where a `$`-prefixed member feeds the computed props type.*

<a id="constructs-nothing"></a>**A specification constructs nothing but specifications.** *[Solutions 16](../solutions/16-the-parse-that-woke-its-own-parents.md) — a reading called during a render may not build a chemical, and `getSpecification()` is called from `specify()`, which the bond calls, which a paint calls.*

## <a id="three-routes"></a>Three ways to change what a type means

*All three are exercised in [`.spec/paragraph/DerivedSpec-Title.tsx`](../../package/.archive/writing/Paragraph.tsx), typechecked and drawn.*

| | | |
|---|---|---|
| ***derive*** | `class $TitleSpecification extends $ParagraphSpecification` **+ a rule** | **the standard case** — *the parent's rules run without being named, so nothing can be repealed by forgetting to call up* |
| ***decorate*** | *hold another specification as `parent`* | **adapt without inheriting** — *a kind can borrow a level's rules without being a subclass of its type* |
| ***disable*** | *a rule returns `false`* | **it drops out and its neighbours are untouched** |

***Deriving is optional and recommended.*** **Doug: *"You derive from the base and extend to add your own. If you need to clean up and remove some, decorate partially like an adapter. Not hard."***

## <a id="labels"></a>A rule is labelled, and the label is what a reader sees

**`@specify('a letter is one grapheme')`** — *the annotation lives beside the specification and puts the reason in the library's own words.* ***Running a specification returns the labels of the rules that ran***, so a run reads like a test report rather than a list of member names.

## <a id="the-trait"></a>The trait — ***deleted, and what replaced it***

***`$Attribute` became `$Trait` on 2026-09-02 and `$Trait` was deleted on 2026-09-04***, in the sprint whose own record says why: **for many-types-per-writing.** *A trait existed so a writing could wear a meaning beside its type; once a writing may simply carry as many types as it likes, the second mechanism had nothing left to do.*

**So there is one mechanism and it is the type.** `<Type>Card</Type>` written into a reference makes it answer as a card, `reflection.is` finds it among the carried types, and no class is worn. ***The anchor is kept because closed chapters link to it; the mechanism it named is not in the code.***

## <a id="specifically-two-verbs"></a>specifically has TWO VERBS — enforce, and augment to enforce

*Doug, giving the second verb before there was code for it: **"I want specifically to be able to do things. It modify. To enforce. But also to augment to enforce."*** **The first built use: [`$TypeOfDocument.specifically`](../../package/.archive/document/Document.tsx) CREATES the references section on any writing being a document, then checks** — one seat serving the bond path, the carried type, and the `$$` bind, where a bond-time create had broken twenty-nine carried-type fixtures at once. ***And specifically now runs at CONSTRUCTION:*** the type setter dispatches — guarded to the type's own canonical form, because [the super-chain assigns intermediate types](../solutions/41-the-phrase-that-was-refused-as-a-word.md).

## <a id="the-fetch"></a>The `$`-fetch corollary — RULED 2026-09-03, and it is the DI seat

***Doug: "anytime a type is used, it should be fetched using $ … Very important for the DI route to work." And the convention's shape, his: "You need a code convention. Don't assign properties. Assign constants close to use."***

**Wherever the framework uses a component of itself — a type defaulted in a bond, a part made in a maker closure, a printed reference minted, a dress worn at a frame — the identifier is fetched through `$` into a Capitalized local AT THE SEAT, and the thing is built from that local.** Only the component-form ask consults the scope (`askedFor` walks the asker's registry, then lineage, then class templates); the eval form `$(<X/>)` and the class form `$($X)` bind the literal, which is why a direct construction is a closed seat.

```
const Asked = $(TypeOfSentence);
this.type ??= $(<Asked />);
```

*The local's one spelling is a PROXY (`Asked`, the mechanism's own word) standing for Doug's.* **Never hoisted to module scope** (no asker stands there), **never memoized** (a wider cache freezes the first scope's answer), **never stored on a member** — his sentence directly.

### <a id="making-one"></a>MAKING ONE IS ASKING FOR ONE THAT IS NOT THERE — `'!'`, ruled and built 2026-09-04

***Doug: "What if a way to do check that news up an instance run through `$` if you do a check with '!' as the third argument… Inside check, it would use `$`, so it would be very safe from a DI perspective."***

**`$check(Kind, '!')` makes one through `$`.** The fetch and the evaluation happen in one call, so the two statements that had to stay together become one that cannot come apart:

```tsx
// the two-statement form, which had to be remembered at every seat
const TypeOfSentence = $(typeOfSentence);
this.type ??= $(<TypeOfSentence />);

// the same thing, and the rule is now impossible to break
this.type ??= $check(typeOfSentence, '!');
```

***It generalizes what `'block'` already did.*** `$ParamValidation.check` has always materialized an empty `$Block` when the argument is missing and a block is asked for; `'!'` is that behaviour for any kind, built through `$` so the scope answers with whatever it has registered.

**The three-argument form is FIND OR MAKE**, and it is the one Doug named as the definite case: *"checking the elements of a block or the annotations in there for something, and if it's not found, creating one, that is definitely a situation to use it."*

```tsx
// what is written wins; otherwise one is made
this.theme = $check(this.findOne($TypeOfTheme), $Theme, '!');
```

***THE BOUNDARY, and it is clean:*** **`$check(Kind, '!')` makes an EMPTY one; `$(<Kind>…</Kind>)` writes into one.** Anything created with children keeps the eval form — the catalogue's parts, the parser's makers, a path minted from copy — because `$check` takes no children.

```tsx
const Catalogue = $(catalogue);
return $<$Catalogue>(<Catalogue />, ...this.parts());
```

### <a id="the-assignment-workflow"></a>THE ASSIGNMENT WORKFLOW — Doug's, verbatim

> *"Have the specifically verify, always have types be overridden if someone inputs the right thing, always use a `$` for DI, and then assign.*
>
> *In bond constructor: check if a type of that is right and if there is one, use that by assigning it to the right property. If there is none, get the component you want to use from `$` using DI. Create one and assign (don't need to type because property assignment works with any). Then run specifically, which should validate the thing is assigned if necessary."*

**So the bond ASSIGNS and the specification VERIFIES**, and an author's own writing always wins over the default. *This settles where a conferred member is written: at construction, once — not in `specifically`, which [runs many times on writing that never keeps its last edit](../solutions/44-the-enforcement-that-detonated-per-render.md).*

## <a id="the-block-asking-pair"></a>ASKING WHAT A BLOCK HOLDS — `find` and `findOne`

***Measured before they were written: 45 hand-written block scans across 15 files*** — `(x.block?.$elements ?? []).filter(…)` — of which **nine** look for a `$Path`, **nine** for a `$Reference`, and **twenty** filter the writing that is not parenthetical. **The same sentence, written out forty-five times, each free to drift.**

```tsx
find<T extends $Writing>(asked: (new () => $Type) | string): T[] {
    return (this.block?.$elements ?? [])
        .filter((part): part is T => part instanceof $Writing && reflection.is(part, asked));
}

findOne<T extends $Writing>(asked: (new () => $Type) | string): T | undefined {
    const found = this.find<T>(asked);
    if (found.length > 1) throw new Error(`writing holds one of a kind here, and this one holds ${found.length}.`);
    return found[0];
}
```

**They ask the BLOCK, and `where`/`select`/`single` ask the PARTS.** *That is the whole difference and it decides which to reach for: the block is what was written, available in the bond constructor before anything is parsed; the parts are what the reading found.* **A carried type is found in the block, which is why the bond can consult one.**

***They ask by TYPE, never by class***, so everything the framework already promises about [one type and many implementations](#verified) holds at every one of those forty-five seats.

### The uses, written out

```tsx
// $Reference.path — nine copies of one scan become one ask
get path(): $Path | undefined { return this.findOne<$Path>($TypeOfPath); }

// $Section.name — the heading a section opens with
get name(): $Writing | undefined { return this.findOne($TypeOfHeading); }

// $Writing's two rosters, each one ask
get types(): $Type[] { return this.find<$Type>($TypeOfType); }
get annotations(): $Annotation[] { return this.find<$Annotation>($TypeOfAnnotation); }

// $Cover — the three cards, assigned in the bond, per the workflow above
$Cover(block: $Block) {
    super.$Composition(block);
    this.type ??= $check(typeOfCover, '!');
    this.title = $check(this.findOne<$Title>($TypeOfTitle), $Title, '!');
    this.author = $check(this.findOne<$Author>($TypeOfAuthor), $Author, '!');
    this.subject = $check(this.findOne<$Subject>($TypeOfSubject), $Subject, '!');
}
```

### <a id="the-bond-composes"></a>THE BOND COMPOSES — super first, the default after

***Doug: "Even paragraph can look for a type of paragraph annotation, and if it finds one that is its type, otherwise it creates a type of paragraph. In fact, all 7 core types can do that. That makes every type composible. Very very flexible."***

**The reorder is the whole trick.** The bond calls its parent FIRST — which sets the block and lets the carried types answer — and only then defaults:

```tsx
$Paragraph(block: $Block) {
    super.$Composition(block);                    // block set; a carried type has already won
    this.type ??= $check(typeOfParagraph, '!');   // a default only where nothing was carried
}
```

*Written the old way round, the class planted its default first and something downstream had to out-rank it.* **Written this way nothing adjudicates: a carried type simply IS the type, and the default is what happens when a page said nothing.** The same three lines stand at all seven levels and at every kind.

***A REGISTER, and it is where the flexibility comes from:*** a page that carries `<Type>Title</Type>` inside a `$Paragraph` gets a title with no subclass anywhere — [route 3 of the ladder](#the-ladder), now reachable at every level rather than at the ones that happened to allow it.

***THE TIMING LAW, in the same breath:*** **registration is configuration BEFORE the first parse.** Parsed populations freeze (`parser.parsed` keeps the first answer per writing) while component fetches resolve live per render — so a registration landing after first parse yields swapped dresses over stock types, the one live two-populations form. The framework enforces its half: registering mid-draw fails by chemistry.

**The registry keys on the COMPONENT OBJECT, not the class** — each component carries its own `$reference$` key (chemical.ts:1496, read at 1557) — so two components registered in one scope resolve independently, and "they all share a wrapper class" is never an obstacle; probed 2026-09-04, two overrides in one scope, each answering its own.

**The named exemptions, so a refactor does not "complete" them:** *specifications stay plain classes* (`new XSpecification()` — the `$` convention is safe only while it is not competing with chemistry's own), and *reflection stays class-fetched* — it answers build facts into globally memoized caches, and a scope-resolved answer frozen there would bake the first asker's book into every book.

## <a id="the-ladder"></a>The consumer's ladder, in Doug's words

> ***"Most times people subclass the strong version, and sometimes their subclass uses the type to avoid that, and maybe very occasionally they need to make a new specification if they want to do it right because they could just extend specifically, and then really rarely they need to decorate the specification to really have control over what changes. It is very flexible but I don't think consumers will use it all."***

**Four rungs, outside in: subclass · carry the type · extend a specification · decorate one.** *The four routes above are the same ladder seen from the author's side; his sentence is how it reads from the consumer's.*

## <a id="the-reactive-law"></a>The reactive-property law — read from the source, 2026-09-04

**Which properties of a chemical are live is decided by NAME, at [`bond.ts:51-66`](../../../chemistry/package/src/abstraction/bond.ts):** a bare name (`background`) is **reactive by default**; a `_`-prefixed name is **inert**; a `$`-prefixed name is reactive only when it is *special* — `$` plus a lowercase identifier character (`$pid`, `$focused`, `$background`), while `$$` and `$_` are not. Per-property overrides exist as class registries: `@inert()` and `@reactive()` decorators file names by prototype. Two consequences worth keeping: *every undecorated field you add to a chemical is paying reactivity whether or not anything watches it*, and *`$x` is already the framework's spelling for a deliberately live property* — which is why the styled-chemicals convention (non-`$` CSS names baked inert, `$` CSS names live, promotion by respelling) lands on this law rather than inventing one; its design stands in [Sprint 39's notes](../projection/41-sprint-39--the-road.md#styled-chemicals-notes).

---

*Written 2026-08-29, out of [The Bind](../projection/29-the-bind.md), after the same fundamentals were rebuilt four times in a session. The trait, the second verb, and the ladder joined 2026-09-02, out of [The Margin](../projection/35-the-margin.md). The reactive-property law joined 2026-09-04, read from bond.ts during the styled-chemicals design.*
