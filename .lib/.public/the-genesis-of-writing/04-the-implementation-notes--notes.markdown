# Implementation notes — final form compiled from the event stream

**Source:** `writing-library.events.md`, E1–E67. **Model:** `writing-library.ts`, the compiled object model. The double-check log is the last section.

**How to read this.** Class / Member / Notes (E64). Each class heading, then its members as bullets, then the notes for each nested beneath — including why each `specify()` test exists. Declarations and test bodies are in `writing-library.ts`. `(En)` and `[D:En]` cite the event that states it. `[inference]` is Claude's reading and can be wrong. `⚠` is open. `[consequence]` follows from stated rules without being separately stated.

`specify()` is a member of every Writing, inherited, run in test mode only, written as named tests about what `source` must satisfy `[D:E20, E21, E64]`. The test bodies are in `writing-library.ts`; this file says why each exists. Nothing here runs in production.

---

## Compiled class tree

```
Chemical                                   $Chemistry — imported, not declared      [D:E63]
└── Writing                                parenthetical · annotations · specify   [D:E2]
    ├── Letter₁                            level 0 is text · tail                  [D:E1,E3,E12]
    │   └── Canonical                      nameless suffix; means "go there"       [D:E33]
    ├── Composition                        level · strict/permissive · open/closed ·
    │   │                                  parts · depth                           [D:E4]
    │   ├── Word₁          open permissive                                          [D:E6,E12]
    │   │   └── Ref        [inference: a Word carrying a Reference]                 [D:E22]
    │   ├── Sentence₂      open permissive                                          [D:E6,E12]
    │   │   ├── Heading    canonical of Section                                     [D:E7]
    │   │   └── Quote      [inference: a Sentence carrying a Referent]              [D:E21]
    │   ├── Paragraph₃     open permissive                                          [D:E6,E12]
    │   ├── Section₄       closed permissive · Heading first                        [D:E7,E13]
    │   ├── Chapter₅       closed permissive · Title, Summary first · document      [D:E30,E33]
    │   │   ├── Cover      carries Type Cover; represents the Book                  [D:E35,E51]
    │   │   ├── Synopsis   conveyance; points to Cover                              [D:E30,E33]
    │   │   └── TableOfContents  [inference: a Chapter] container of titles         [D:E30,E33]
    │   └── Book₆          closed strict · Cover, Synopsis, ToC first · no parent   [D:E30,E35,E62]
    │       └── Part       the Book in a Book                                       [D:E31]
    └── Annotation                         parenthetical · unique · name           [D:E5]
        ├── Referent       exported Mentioned; unique; key                          [D:E21,E22]
        ├── Reference      exported Means; points to its Referent                   [D:E22]
        ├── Format         unconstrained, like Letter                               [D:E23]
        ├── Theme          takes Format only; renders as ancestor                   [D:E24,E25]
        ├── Type           a label that does not know what it means                 [D:E35]
        │   ├── Subject    name "Subject" + Of                                      [D:E51]
        │   └── Author     name "Autobiography" + Of                                [D:E52]
        ├── Of             generic; completes a Type; compiler-resolved link        [D:E51,E52,E55]
        ├── About          a book's subject, on its Cover                           [D:E56,E57]
        └── By             a book's author, on its Cover                            [D:E56,E57]

Unplaced: Title, Summary — required first parts of Chapter, class never stated  ⚠ [D:E30]
```

Levels: text 0 · Letter 1 · Word 1 · Sentence 2 · Paragraph 3 · Section 4 · Chapter 5 · Book 6 · Part 6. (Letter was 0 until E12; text as level 0 is the E12 reading, awaiting confirmation at E67.)

---

## Cross-cutting rules

**What is not writing.** In the object model, what comes into a piece of writing is `...$Chemical[]`, and React content arrives as `$Block` (inline elements, strings, numbers), `$Html` or `$Func<T>` `[D:E64]`. The model sorts source by type and pulls out the writing; the rest is what E14 called calligraphy and E32 called uncomprehended — words *about* the model, not things in it `[D:E64]`. On E12's reading they are the implicit level 0: "not applying permissive to the inputs of text" was the problem, and moving Letter to level 1 lets permissive admit them `[D:E12]`. An open Composition admits level 0; a closed one asserts every element of source is `$Writing` `[D:E12, E13]` — which is how a composition can be permissive and closed. That is the whole mechanism: *closed* is an assertion, *open* is its absence. A Letter containing a whole book as a string is one Letter `[D:E12]`.

**The tail.** Sort source, pull out the writing; amongst those, annotations can only be in the tail `[D:E64]` — once one appears, everything after it in the writing subsequence is an Annotation `[D:E5]`; there may be none `[D:E21]`. Non-writing chemicals are not subject to the rule. The tail is back matter — about the writing, not part of it, not visible in it `[D:E10]`. Composition inherits the machinery from Writing `[D:E21]`.

**The annotation collection and its API.** Every Writing declares a collection of annotation constructor types; its bond builds them and adds them to the list `[D:E21]`; authored tail annotations are in the same list, because both are in source `[D:E64]`. The list is modified only through the writing's methods `[D:E65]`: **add** goes to the end of source; **replace** finds the first instance of the type and replaces it; **ensure** adds if not present, replaces a parent class, does nothing if a subclass is there; **remove** removes all instances of a type; **find** returns all instances of a type. Every operation is by type. These supersede E26's front-by-default and its four modes, and E22's throw. Subclasses use them in their bond constructor `[D:E21]`. Annotations are the genome; the composition is the phenotype `[D:E20, E21]`; the typing mechanism from Book upward `[D:E32]`.

**Unsafe things in the bond constructor; as much as possible in `specify`.** The API checks nothing. As much as possible happens in `specify`, so the bond constructor may do unsafe things `[D:E65]`. Uniqueness `[D:E21, E22]` is therefore a *test* — each unique annotation asserts, in its own `specifically`, that its writing holds exactly one of it — nothing in `add` checks it.

**`specifically`.** `specify` enumerates a writing's annotations and calls `annotation.specifically(writing)`, letting each apply its specification to the writing it is in `[D:E65]`. This is how annotations are like a genome: the writing's specification is its class's tests plus one contribution per gene. Placement constraints live here — an `Of` tests that its writing is a Type; a `By` that its writing is a Cover or Book; a unique annotation that it occurs once.

**Canonical and transitivity.** A canonical is required; without it the writing is a void `[D:E19]`. The canonical means the writing it opens `[D:E7]`. Canonical annotations subserve transitivity: where several of a kind are present, the first carries the relation onward `[D:E38]`. `Canonical` the Letter is the reappearing mark that says the writing it suffixes has a canonical referent, and takes you there `[D:E33]`.

**Modes.** The specification runs in dev mode, like a unit test broadcast to every user `[D:E20]`. Assert mode is the specification flagged to mode, compiled out in production `[D:E21]`. A slower validation mode may be needed to keep dev fast `[D:E20]`.

**Rendering.** A chemical's children are constructor arguments, not placements; it renders what it holds where it decides `[D:E25]`. Parenthetical controls not printing `[D:E15]`. Level and parenthetical are sent down and rendered non-reactively `[D:E16]`. Means modifies Format at render `[D:E23]`.

**The compiler.** Understands reference and referent syntax; no dynamically constructed references yet; to be architected for future dynamism `[D:E26]`. Fills in `Of` links for referential integrity `[D:E52]`.

---

## Properties → guarantees

`specify()` asserts guarantees. This section says which *property* each guarantee exists for, so an open item can be judged by what it breaks rather than by whether it is tidy. **P** is a property we decided the class has. **←** is what must hold for it. **threat:** names the open item (numbered as in "Open items") that would break it.

**Writing**
- P *The tail is back matter — about the writing, not part of it, not visible in it* `[E10]` ← from the first Annotation on, every child is an Annotation `[E5, E21]`; Annotation is parenthetical `[E16]`.
- P *Annotations the class declares exist at runtime* `[E21]` ← the bond builds one per declared type; authored tail annotations join the same list.
- P *A unique annotation is one thing* `[E21, E22]` ← count per name is 1 after all adds; the add rule refuses a second. threat: 5.
- P *The first of a kind carries the relation* `[E38]` ← the list is ordered, default insertion is front `[E26]`, nothing reorders behind the author.

**Letter**
- P *A book written as a string in one Letter is one Letter* `[E12]` ← calligraphy is not a member, so nothing inside counts `[E14, E32]`.
- P *Letter is level 1, and level 0 is text* `[E12, E15]` ← no Composition child `[inference]`; no Letter child `[E1]`; text, react and strings are what it takes. Shares level 1 with Word; strict on Word admits levels 0 and 1, which is text, Letter and Word.

**Composition**
- P *parts is the body: structure skipped, contents kept* `[E7, E26, E27]` ← same-type child spliced; Annotation skipped; calligraphy not a member. threat: 4 — under exact-class a subclassed Section does not splice into its Section, and Part does not splice into Book.
- P *depth is checkable against the parent alone* `[E10]` ← same-type runs are contiguous ← level never increases downward `[E4, E6]`. A class that reaches elsewhere for depth states its own rule (Heading, Part).
- P *permissive is "at or below"; strict is "at or one below"* `[E6]` ← permissive consults only the relation; strict consults the distance.
- P *closed means every part is writing* `[E12, E13, E14]` ← every body member is Writing. Nothing deeper is claimed. threat: 6, only if Letter's openness is meant to be this property rather than its own rule.

**Section / Heading**
- P *The canonical Heading means the Section* `[E7]` ← exactly one Heading, first in the body, its parent is this Section; the Heading has no other way to mean.
- P *parts(Section) is paragraphs across its subsections* `[E26]` ← closed; subsections splice. threat: 4.
- P *Purity* `[E13, E14]` ← closed. Purity is at composition level, parts one level down — nothing further.
- P *Heading's depth is the Section's* `[E7]` ← Heading overrides the default depth rule. threat: 2.
- P *No Heading, no Section* `[E19]` ← a `require`, and production behaviour is unstated. threat: 9.

**Chapter**
- P *Renders in isolation* `[E33]` ← no `require` on a parent.
- P *Title means the Chapter; Summary conveys it* `[E30]` ← Title first, Summary second; Summary parenthetical by default. threat: 3 — without their classes, what admits them and their own `specify` cannot be written.

**Book / Part**
- P *A Book is composed of chapters, not a large amount of writing* `[E30]` ← strict at 6: body members are level 5 or 6.
- P *Cover, Synopsis, ToC are the Book's three canonicals* `[E30]` ← first three body members, in order ← `[consequence]` they are Chapters, since strict at 6 admits nothing lower.
- P *The bound Book is annotated through its Cover* `[E35, E57]` ← the Cover bonds first; the Book reads it and imports By/About; transit is informal — the Book decides.
- P *Nested tables of contents fall out* `[E31]` ← Part is a same-type child of Book ⇒ it splices in parts and increments depth. threat: 4 — needs `instanceof` (Part is-a Book) or Part-as-role (a nested Book *is* a Part). Either works; exact-class with a subclass does not.
- P *Authorship and subjecthood live here* `[E49]` ← By/About present (imported); the first is canonical `[E38]`.

**Cover / Synopsis / TableOfContents**
- P *Cover represents the Book* `[E35]` ← carries Type Cover `[E51]`; first body member; its title holds the self-link `[E33]`.
- P *Two ways from ToC to Cover* `[E33]` ← Synopsis points to Cover; ToC entries carry a Canonical. The Synopsis→Cover mechanism is inferred (a Reference).
- P *ToC keeps depth; parts drops it* `[E30, E31]` ← ToC walks the direct writing, not `parts()` (corrected in the second pass).

**Annotation**
- P *Annotations do not print* `[E15]` ← parenthetical true by default.
- P *An annotation can hold a whole structured document* `[E5]` ← takes Writing.
- P *Name is the fast path; instanceof is the truth* `[E26]` ← name defaults to type name; "proper subclass" needs instanceof.

**Referent / Reference**
- P *Every reference resolves* `[E26, E52]` ← compile time: every `for` resolves to a Referent key; keys are unique. Dynamic references are future work `[E26]`.
- P *The referent does not know it is referred to* `[E22]` ← Reference points to Referent; nothing points back.
- P *Meaning injects itself as style* `[E22, E23]` ← a Reference modifies Format at render; nothing else consults it.

**Type / Of / Subject / Author / About / By**
- P *A Type does not know what it means* `[E35]` ← the base asserts nothing about meaning.
- P *Of completes a Type without referring* `[E55]` ← Of lives in a Type; annotative meaning, not a Reference. threat: 10.
- P *Author terminates authorship from within* `[E35, E39]` ← an autobiography carries Author whose Of names its own subject; no first author outside the library. threat: 13.
- P *A book's author is one thing even with many* `[E36, E38]` ← the first By is canonical.
- P *Referential integrity for Of, By, About* `[E52]` ← the compiler fills the links; an author never writes one.

**Theme / Format**
- P *Theme scopes rendering the way a provider does* `[E24, E25]` ← holds only Formats; renders as an ancestor.
- P *Format is free* `[E23]` ← no constraint. threat: 11.

**Canonical**
- P *The mark composes transitively* `[E33]` ← nameless, so the target comes from position; each hop is the same relation.

---

## Classes — Class / Member / Notes

Format per E64: **Class**, then `* member`, then its notes nested. Declarations and `specify()` bodies are in `writing-library.ts`; this file says *why* each member and each test exists. `(En)` cites the stream.

---

**$Chemical** — from $Chemistry, imported (E63)

* `constructor(...children: $Chemical[])`
  * Children are constructor arguments at mount, not placements (E11, E25). A chemical renders what it holds where it decides (E25).
* `parent?`
  * `[inference]` Not stated by Doug; needed for Heading to reach its Section (E7) and for depth to be checked against the parent (E10).
* `bondConstructor(...children)`
  * Builds the object and bonds it into the reactive graph (E11). In this library it produces `source` (E64). Recursive: the chemicals it receives are constructed and their bond constructors run (E54).
* `catalyticConstructor?(...input): $Chemical[]`
  * TSX in, TSX out, runs as part of mount, output fed to the bond constructor (E11). Syntax `$$` (E12); "it catalyzes the reaction, bonding still happens" (E17). Proposed rename: formulator (E53) — `<Author>Doug</Author>` → `[Author, <Of>…</Of>]`, a string then an annotation. The E10 composition function is expressible through it and was never withdrawn (open item 8).
* `$Html` · `$Block extends $Html` · `$Func<T>`
  * The chemicals for React content (E64): $Html an html element; $Block holds inline html elements, strings and numbers "but otherwise it is $Html" — an $Html (corrected at E67; the model had siblings); $Func a function component. In the model these are *what is not $Writing*. E14's "calligraphy" and E32's "uncomprehended" name this from the writing's side; the model itself just sorts source by type.
* `test(name, check)`
  * The specification is unit-test-like, each test named, run in test mode only (E20, E21, E64).

---

**Writing** (E2) — the root; direct children Letter, Composition, Annotation (E6)

* `parenthetical` — prop
  * Controls not printing (E15). On Writing, sent down and rendered non-reactively (E16). Annotation is parenthetical; Composition is not (E16). Summary is parenthetical by default, so it is a per-class default with per-instance override (E30). ⚠ Designed as a boolean pair (E64) but the opposite is unnamed.
* `source: $Chemical[]` — protected
  * The one stored thing: exactly what came into the bond constructor, as an array (E64). The bond then ensures the declared annotations into it (E21) — `[inference]` this is how "built at bond" and "computed from source" both hold. Protected, so all modification goes through the five methods (E65 asked; the answer proposed here is yes: if anything can splice it directly the computed views stop meaning anything, and the bond constructor is inside the class so it keeps its freedom).
  * A special collection (E65 asked): not yet. The five operations are `instanceof` scans, the count is small (E26), and an index would be a cache (E64). If one arrives it should be a thin typed wrapper over the array with exactly these five operations and no index — so it can be reused on the body (see Composition).
* `static annotationTypes`
  * The declared collection of annotation constructors (E21). Built at bond and added to the list; the genome (E20). Subclasses declare the ones they need (E21).
* `get contents(): $Chemical[]` — computed
  * Source without annotations (E64). May hold $Block/$Html/$Func in an open composition.
* `get annotations(): $Annotation[]` — computed
  * Source's annotations, in source order (E21, E64). The list order is authorial: the first of a kind carries the relation (E38).
* `add(a)` · `replace(a)` · `ensure(a)` · `remove(T)` · `find(T)`
  * The writing API for modifying source (E65), all by type, none checking anything. add: end of source. replace: first instance of the type, in place (`[inference]` nothing to replace → nothing). ensure: add if absent, replace a parent class, nothing if a subclass is there — "a subclass" includes the class itself, which closes the E22 same-class question (open item 5 resolved). remove: all of a type. find: all of a type. `name` remains the fast path (E26).
  * ⚠ Types differ by name, not class (`<Type>Cover</Type>`, `<Type>Autobiography</Type>`): `find(Type)` returns all of them and `ensure(new Type("Cover"))` is a no-op if any Type is present. Cover therefore uses `add`. Whether "type" in the five operations means the class or the named type for Type is the one question the API leaves.
* `specify()` — inherited; test mode only
  * A member of every piece of writing, with property inheritance (E64): a subclass calls `super.specify()` and adds; `[inference]` it replaces a test by naming it again.
  * `source is writing` — the E2 base: Writing takes only Writing. Letter and open Compositions replace it.
  * `annotations are the tail of the writing` — on the writing subsequence of source, not on raw source (E64): sort, pull out the writing, and among those annotations are last (E5, E21). $Block after an annotation is not a violation.
  * `declared annotations were built` — E21.
  * then `a.specifically(this)` for each annotation (E65) — uniqueness and placement arrive from the genes.
  * Does not descend into contents. `[inference]` The test runner walks the tree ⚠ (open item 17).

---

**Letter** (E1, E3) — level 1 since E12

* `level = 1`
  * Claimed level 0 at E4, E6, E7. At E12 — "this is simply a problem of not applying permissive to the inputs of text. So if Letter is level 1, then all of Letter – Paragraph now can take anything react, writing, strings" — it moves to 1, and text, react and strings become the implicit level 0 that permissive admits. E15's "the canonical level 1" and E13's "the first 0–3 levels" (text through Paragraph) both read on this. For four passes this was carried as a contradiction (open item 1); it is an event. `[reading — awaiting confirmation, E67]` Level is on grading (E16), so Letter having one at all is Doug's exception.
* `specify()`
  * `source is writing` — replaced: a letter is allowed to have anything (E1, E3), so source may be $Block/$Html/$Func. What it may not hold: a Letter (no recursive text, E1) or a Composition (`[inference]` nothing is at or below level 0). Its Writing children are therefore only tail annotations (E5).
  * A book written as a string inside is one Letter (E12): nothing in source that is not writing counts.

---

**Canonical** (E33) — a nameless Letter that suffixes a piece of writing

* `specify()`
  * `canonical is nameless` — no content of its own; a symbol that reappears (E33).
  * `canonical suffixes writing with a canonical referent` — it sits last in its parent's contents `[inference on "suffix"]` and the parent must have a canonical referent to go to (E33). Composes transitively: ToC entry → synopsis → cover → book (E33). The target comes from position, not from anything written in.

---

**Composition** (E4) — graded writing

*Read again with focus, per E65.*

What it adds to Writing: a level, two prop pairs in binary opposition on it (`strict`/`permissive` on what the level admits, `open`/`closed` on what is not writing), a body (`parts`) and a position within its own kind (`depth`); it fixes `parenthetical` false; and from E34 it has canonicals — the part whose subject proxies all the others, with literal levels 0–3 having none.

How it builds on Writing: it continues the same sort one step further. Writing sorts source into contents and annotations — the body and the tail. Composition sorts *contents* into parts and the rest — the writing and what is not writing. Everything Composition computes is a further filter of what Writing already computed; nothing is stored twice (E64).

The pattern it repeats, as far as I can see it:

| on Writing (the tail) | on Composition (the parts) |
|---|---|
| `annotationTypes` — declared, built at bond, in the list | `canonicalTypes` — declared, must come first, in order `[inserted — genesis undiscussed]` |
| `annotations` — computed from source | `parts` — computed from contents |
| add · replace · ensure · remove · find, by type | the same five on parts? `[pattern seen, not stated]` — `ensure(TableOfContents)` in Book's bond would be the first use: the one canonical nobody authors |
| `annotation.specifically(writing)` — a gene applies its specification to its writing | `canonical.specifically(composition)`? `[pattern seen, not stated]` — the canonical means its composition (E7) and its subject *is* its parent (E34); Heading's "I am first and my parent is a Section" has this shape |

What it must specify, beyond Writing's tests: the two pairs are opposites; closed ⇒ source is all writing; every writing among its direct children is at or below level (permissive) or at or one below (strict); depth agrees with the parent; not parenthetical; the declared canonicals come first, in order.

* `level` — prop
  * `<Composition level=4>` (E12). level → rank (E5) → subscript (E6) → level (E10). Assigned, not overridden (E7). Non-increasing downward, which is what makes same-type runs contiguous and depth locally checkable.
* `strict` / `permissive` — prop pair
  * `<Composition strict>` or `<Composition permissive>` (E6, E64); one stored, the other its opposite. Permissive: child level ≤ n. Strict: child level ∈ {n−1, n} (E6). Permissive consults only the relation; strict consults the distance — nobody uses the numbers unless they need strict (E6). A property (E7).
* `open` / `closed` — prop pair
  * `<Composition open />` or `<Composition closed />` (E12, E64). Open: React allowed inside. Closed: not. Closed is an *assertion* that source is all writing; open is its absence. ⚠ Where the pair lives, given Letter is in the open range (E12) (open item 6).
* `parenthetical = false`
  * Composition is not parenthetical (E16).
* `get parts(): $Writing[]` — computed
  * The body (E7, E27). Contents filtered to writing (E64), a same-type child not returned but its parts flattened in (E7, E26). Ask a Section: paragraphs across all subsections (E26). Annotations never appear (parenthetical, E15). ⚠ "Same type" — `instanceof`, because Part is-a Book and must splice and deepen for nested ToCs to fall out (E31) (open item 4). `[consequence]` A Section's Heading is a part — Sentence, not annotation, not same type — so `parts(section)[0]` is its Heading.
* `get depth(): number` — computed
  * Emergent (E7), fundamental, checked against the parent (E10). Default rule: same-type parent → parent's + 1, else 0 `[inference]`. Per class with that default — Heading takes its Section's (E7), Part its Book's + 1 (E31) — so the test is against the class's own rule. Level and depth lend a geometry (E10).
* `static canonicalTypes`
  * `[inference on the member]` The declared canonicals in order — Heading for Section (E7), Cover / Synopsis / TableOfContents for Book (E30); Chapter's are Title and Summary, unclassed ⚠. Empty for literal levels (E34). The pattern of `annotationTypes` on the body. Required: a missing canonical is a void (E19).
* ~~`get body()`~~ — withdrawn at E66
  * `body` is Doug's word for parts ("Parts is on composition. The body." E27). Claude had used it for a different thing — the direct writing children, unspliced — which the canonical tests and the ToC need (a nested same-type child is spliced by parts, so `parts[0]` would be the child's canonical). That need is real and now has no name: it is a marked helper in the model, `directWriting`, not a member, until it has a genesis. Inventory item 6.
* `specify()`
  * `source is writing` — replaced: `closed ⇒ every element of source is $Writing` (E12, E13). Purity is at composition level, parts one level down (E14); nothing deeper is claimed.
  * `open and closed are opposites` · `strict and permissive are opposites` — the pairs (E6, E12).
  * `writing in contents is at or below level` — permissive: at or below; strict: at or one below (E6). On the direct writing children, not on spliced parts (same level anyway).
  * `depth is checked against the parent` — E10.
  * `composition is not parenthetical` — E16.
  * `canonicals come first, in order` — E7, E19, E30; against `canonicalTypes`.

---

**Word · Sentence · Paragraph** (E6) — levels 1, 2, 3; permissive; open (E12)

* Read as one intermixed level (E13); declared as three. The semantic family — informal names at a level (E6) — has weight under parts: two names at one level are two types and do not splice into each other `[consequence]`. Relative to a closed Section, Paragraph is "an emergent sort of letter of its own kind" (E13).

---

**Section** (E7) — level 4, permissive, closed (E13)

* `get heading(): Heading`
  * Canonical first member (E7). Means the Section (E7). Required — without it the result is a void (E19). ⚠ Production behaviour with the specification compiled out (open item 9).
* `static canonicalTypes = [Heading]` — E7, E19.
* `specify()`
  * `section is closed` — E13: "having a canonical reference compels it to purity." The canonical test is inherited from Composition.

---

**Heading** (E7) — a Sentence; Section's twin

* `get depth()`
  * Reaches to its parent Section (E7). ⚠ The Section's depth, or one more (open item 2).
* `specify()`
  * `heading is in a section` · `heading is its section's first member` — E7.
  * `depth is checked against the parent` — replaced: the Section's (E7).
  * "Takes text or what text takes and wraps in text" (E7): the wrap moved from Heading's insides into a declared catalytic constructor (E10, E11); with Sentence open (E12) the text sits in source as $Block and no Letter is manufactured `[inference — never confirmed; "wraps in text" never withdrawn]` (open item 7).

---

**Chapter** (E29, E30) — level 5, permissive, closed; the first document (E33)

* `get title()` · `get summary()`
  * First two parts (E30). Title is a referent that means the Chapter; Summary conveys it for display, parenthetical by default, an abstract in an article-type chapter (E30). ⚠ Neither has a stated class (open item 3) — the `require` cannot be written until they do.
* Renders in isolation; a module; a book calls chapter functions (E33). Its author is its Book's (E35) — pinned with all lower-level authorship (E49).
* `specify()`
  * `chapter is closed` · `chapter has title then summary first` · `summary is parenthetical by default` — E30.

---

**Book** (E29, E30) — level 6, strict (E62), closed; the top

* `get cover()` · `get synopsis()` · `get tableOfContents()`
  * First three parts (E30). Referent, conveyance, container (E30). `[consequence]` Strict at 6 admits only levels 5 and 6, so all three must be Chapters — agrees with E33, E35, E51.
* `get by()` · `get about()` — `[inference on the member]`
  * The first By is the book's author, the first About its subject: E38's "first Author is used for transitivity" following the role after E56 introduced By. Multiple allowed, all meaning the author (E36). Authorship and subjecthood start here (E49).
* `bondConstructor`
  * Imports the Cover's By and About upward with `find` then `add` (E57, E65). Unsafe, as a bond may be. The Book is bound — nothing can be written on it; its Cover represents it (E35). `[inference]` The Cover has bonded first (E54's recursion bottoms out before the parent).
* Pinned design for lower levels (E34, E49): a writing's author is its parent's; a composition's canonical is the part whose subject proxies all the others, its subject *is* its parent, the rest read parent → canonical → subject; Letter – Paragraph are literal and go straight up; Section and up are subjective. Upper levels inherit from their canonical.
* `specify()`
  * `book is closed and strict` — E30, E62.
  * canonicals — inherited from Composition against `canonicalTypes = [Cover, Synopsis, TableOfContents]` (E30).
  * `a top-level book has no parent` — "the book, which has not parent" (E35); as `(parent none) == (depth 0)` so a nested Book — a Part (E31) — passes.
  * `cover's by and about are imported` — E57.

---

**Part** (E31) — the Book that goes in a book

* Same type as Book, so it splices in parts and increments depth, and nested tables of contents fall out with no mechanism (E31). ⚠ A subclass, or the role of any Book at depth ≥ 1 — E31 admits both; both give nested ToCs (open item 16). If Book were permissive, a Part would be indistinguishable from a large chapter `[consequence]`.
* `specify()`
  * `part is in a book` · `part is one deeper than its book` — E31.

---

**Cover · Synopsis · TableOfContents** (E30) — Chapters

* **Cover** — represents the bound Book (E35)
  * `bondConstructor` inserts the Cover type (E51); components for types of covers dispatch on it, a double-dispatch for style (E51).
  * Where By, About, Subject and Type are authored for the Book (E51, E56, E57). The Book reads its types and decides — informal upward transit; a parent may translate (E35).
  * `cover's title holds the self link` — E33; `[inference]` that the self link is a Canonical.
* **Synopsis** — a chapter that is a synopsis (E33)
  * A catalogue entry is one; the catalogue may print or import it (E33). Points to the Cover (E33) — `[inference]` via a Reference.
* **TableOfContents** — a container for titles and potentially summaries (E30); `[inference]` a Chapter, from "a type of chapter" (E33)
  * Walks the Book's direct writing, not `parts`: parts splices Parts and loses the depth E31 needs. ToC and parts are two readings of the same children — structure kept, structure dropped `[consequence]`. In a catalogue, entries carry the link to the book (E33); two ways to the Cover, via the synopsis and directly (E33). The first canonical that reads down; Heading reads up. ⚠ Entry shape unstated.

---

**Annotation** (E5) — non-compositional writing (E21); the genome (E20)

* `parenthetical = true`
  * The canonical parenthetical (E15); on Writing, not graded (E16). Not commentary — "where types, references, meaning lie"; commentary is margin (E9). Reads differently at different levels (E10).
* `static unique`
  * Declares itself unique or not (E21). Class-level.
* `get name()`
  * Defaults to the type name (E26); the fast path for lookup. Type overrides to read its label from source. ⚠ Whether it is also a prop.
* Takes Writing (E5): an annotation can hold a whole structured document. Modifiers that may participate in the specification (E20). Optimization later; the number is small (E26).
* `specifically(writing)`
  * Applies this annotation's specification to the writing it is in (E65). The base contribution: if unique, the writing holds exactly one of it (E21, E22) — a test; `add` does not check it (E65). Subclasses add placement: Of → in a Type; Subject, Author → at Book level; About, By → on a Cover or Book.
* `specify()` — on the annotation's own source
  * `annotation is parenthetical` — E15, E16. `annotation has a name` — E26.

---

**Referent** — exported `Mentioned` (E21, E22)

* ⚠ E22: "Let us imagine that the Mention has a parent called a Reference. In fact, perhaps the Mention class becomes Referent." "Parent" may mean superclass — `Referent extends Reference` — or the other half of a pair, as Section and Heading are twins. Modelled as siblings under Annotation; the words admit the superclass. Open item 20.

* `static unique = true` — E22; tested in its writing through the inherited `specifically` (E65).
* `as?` — prop
  * The key (E21). Without it, the entire quote — its writing's content — is the key (E21).
* `get key()`
  * `as`, else its writing's contents as string (E21, E64). "Might confer an id" (E21). Unique across the library at compile time (E26, E52) `[inference]`.
* Authored from without — someone decided to mention this writing; no requirement on the writing it is in (E21). The referent does not know it is referred to `[consequence]`.
* `specify()` — `referent has a key`.

---

**Reference** — exported `Means` (E22)

* `for?` — prop (E22). `get key()` — `for`, else source as string: `<Means>aristotle-quote</Means>` (E22, E64).
* `resolve()` — the writing carrying the Referent; compiler-resolved, static, no dynamic references yet (E26).
* At render, modifies its writing's Format (E23) — meaning injects itself as style so nothing else needs to know (E22, E23). Not `Of`: a Reference means referentially; an `Of` does not (E55).
* `specify()` — `reference has a key`; resolution is compile time (E26, E52).

---

**Quote · Ref** (E21, E22)

* **Quote** — `[inference]` a Sentence; `as?` prop
  * With `as`, the Mention is implicit — a Referent in the collection (E21). Without, formats its content as a quote and adds no form to be treated as (E21) — `[inference]` a Format. Internal or external to the library (E21). Arrived as an exemplar of catalysis and stopped needing it once the collection is built at bond (E21).
* **Ref** — `[inference]` a Word; `for` prop
  * Carries a Reference with `for` (E22).
* Both are what the formulator produces: a string then an annotation (E53).

---

**Format** (E23) · **Theme** (E24, E25)

* **Format** — part of the genome; a place for themes and styled components; no constraints, like Letter (E23). Means modifies it at render (E23). ⚠ Unique or not (open item 11); styled-components or styled chemicals (E32).
* **Theme** — takes ONLY Format (E24); often a styled-components theme provider, a $Chemistry native operation (E24). Renders as an ancestor in the render tree because chemistry renders where it wants (E25): carried in the collection, placed as an ancestor.
  * `theme holds only formats` — E24. Formats are annotations, so all of Theme's source is tail and contents is empty.

---

**Type** (E35) · **Of** (E51, E52, E55)

* **Type**
  * `get name()` — the label is source, not a prop: `<Type>Autobiography</Type>` (E35, E64). A Type does not know what it means (E35). Weighs on the specification when subclassed to have property meaning; otherwise a free label (E35). Upward transit from a canonical is informal — the Book decides, and may translate (E35). Components dispatch on it (E51). ⚠ Autobiography, Biography — labels, or a class hierarchy ("a type of Biography", E35) (open item 12).
* **Of**
  * `get link()` — `[Name](/path)`, filled in by the compiler for referential integrity (E52). Generic (E55): completes a Type — the Type is the predicate, `Of` its object `[inference]`. Annotative meaning, not referential (E55); handled in its own specification (E55). ⚠ Target a Book only, or any writing (open item 10).
  * `of is in a type` · `of holds a link` — E51, E52.

---

**Subject · Author** (E34, E49, E51, E52) — Types with an Of, at Book level

* **Subject** — name "Subject" + Of (E51); short form `<Subject>Math</Subject>`
  * Marks a writing about a collection of other writings including this one; expresses canonicity, rarely unique (E34). An autobiographical subject's catalogue represents the author of what it catalogues (E35).
* **Author** — name "Autobiography" + Of (E52); short form `<Author>Doug</Author>`
  * Marks an autobiographical book about its own author (E34) — the Type on the autobiography, not the relation a book declares (that is By, E56). Self-terminating: an autobiography demonstrates authorship by having been written (E35). Works in an autobiographical subject are contexts of an author (E36). Autobiographies make a proper tree of authors (E35). An Author is the subject of a book that is a subject in the library — the fixed point (E39). ⚠ Whether `Of` names the subject catalogue or one context (open item 13).
* Both start at Book level; lower levels pinned (E49). Both are what the formulator produces (E53).

---

**About · By** (E56, E57)

* `get link()` — held directly, no `Of` (E56 form). "When a book declares its subject and author" (E56).
* Authored at Cover level; the Book imports them (E57). Subject and Author classify the writing that carries them; About and By state its relation to something else — same target, opposite direction `[inference, accepted at E57]`. Non-unique, ordered, first is canonical (E36, E38). `[inference]` A By's target carries an Author; an About's carries a Subject.
* `specify()` — `holds a link` (E56) · `is on a cover or a book` (E57).

---

## Inserted by Claude — genesis undiscussed (E66)

Doug's rule: terminology that did not come from him is not in the model; where a need produced one, the genesis is to be discussed, not assumed. This is the inventory. Each entry gives the member, the need it answered, and Doug's nearest words. Everything here is marked `[inserted — genesis undiscussed]` in `writing-library.ts` and stays only until discussed.

**Ruled already, and fixed.**
1. `admission` / `Admission` — Claude's, from the Part 1 process artifact, for the strict / permissive pair as if it were one member with two values. Doug: two props in binary opposition that change each other, like open / closed (E6, E12, E64, E66). Removed from the notes and the stream; the model already had the pair. Remains in `writing-library.process.ts`, which is superseded.
2. `body` — a collision, not an invention: Doug's word for parts (E27), used by Claude for the unspliced direct children. Withdrawn; see 6.

**Members in the model with no statement behind them.**
3. `$Chemical.parent` — need: Heading reaches to its parent Section (E7); depth is checked against one's parent (E10). Doug's word; its existence as a member on `$Chemical` is Claude's. Question: is it $Chemistry's, like Chemical?
4. `$Block.items` — need: reading a Type's label from source. Doug: "holds a collection of inline html elements, strings and numbers" (E64). The name is Claude's. Question: $Chemistry's.
5. `Writing.annotationTypes` — need: the declared collection the bond builds. Doug: "contains a collection types, which constructors for annotations" (E21). The name is Claude's — and "type" has since become Type the annotation, so the name is worse than it was.
6. `directWriting(c)` (was `body`) — need: the canonical first *member* (E7) and first *parts* (E30) are direct children; when the first child is the same type, `parts` splices it and `parts[0]` is the child's canonical, so the test needs the unspliced view. Now a helper, not a member. Question: is there a name for the direct children — or is the answer that splicing does not cross a canonical?
7. `Composition.canonicalTypes` — need: one inherited test for "canonicals first, in order" instead of one hand-written per class. Doug: "the canonical pattern continues upward" (E30); "canonical first member" (E7). The member is Claude's extrapolation of 5's shape onto parts.
8. `Book.by` / `Book.about` — need: a book's author and subject as single values. Doug: "the first one is used for transitivity" (E38); By / About (E56). The getters are Claude's. Earlier drafts had `author()` / `subject()` — also Claude's.
9. `Reference.resolve()` — need: following the pointer. Doug: "points to its Referent" (E22); compiler-resolved (E26). The verb is Claude's.
10. `TableOfContents.entryFor()` / `.nests()` — need: the ToC test; shape unstated. Placeholders. "Entry" itself is Doug's ("table of contents synopsis entry", E33).
11. `test(name, check)` — need: the test syntax. Doug: "unit test like syntax where you name the test" (E64). The identifier is Claude's.
12. `compose()` — need: E10's "new composition function." The identifier is Claude's; present in the process artifact and the first-pass notes, not in the model.

**Doug's nouns rendered as accessors.** Not inventions, but the rendering is Claude's: `heading`, `title`, `summary`, `cover`, `synopsis`, `tableOfContents`, `of` (his nouns as getters); `key` ("the entire quote is the key", E21); `link` ("the link to the book", E33); `_strict` / `_open` (the stored half of each pair). Listed so they can be renamed together if he has other names.

**Concept words of Claude's that had been used as if the model's.** Removed at E66: *admission*, *floor* (for level 0), *host* (for "its writing" — his: `specifically(writing)`), *material reading* (for the body), *grade* as a noun (his: level; grading, E16). Still present and marked as glosses: *writing subsequence*, *direct writing*, "one-way".

## Open items, consolidated

Blocking `specify()` correctness — one wrong answer ships wrong:
1. ~~Letter level 0 or 1~~ — reinterpreted at E67: E12 is the event that moves Letter to 1 and makes text level 0; E13 and E15 read on it. Written as 1. Awaiting Doug's confirmation.
2. **Heading.depth** — its Section's depth, or one more `[E7]`.
3. **Title and Summary** — no class stated `[E30]`.
4. **parts "same type"** — same class exactly, or subclass too `[E26]`. Not free: Part is-a Book and must splice and deepen for E31 to fall out, which exact-class cannot deliver. Properties argue for `instanceof`.
5. ~~Unique add, same class~~ — resolved at E65: `ensure` does nothing when "a subclass is there," which includes the class itself; uniqueness is a `specifically` test; `add` does not check it.

Design choices not yet made:
6. Where open/closed lives, given Letter is in the open range `[E12]`.
7. Heading's wrap after openness — "wraps in text" never withdrawn `[E7, E12]`.
8. The E10 composition function — survives, or subsumed by the catalytic constructor.
9. Section without Heading in production — "void" with the specification compiled out `[E19]`.
10. `Of` target — Book only, or any writing `[E52]`.
11. `Format` unique or not `[E23]`.
12. Autobiography / Biography — labels or a class hierarchy `[E35]`.
13. Book.author — the autobiographical subject, or one context `[E35, E36]`.
14. margin — named at E9, nothing since.
15. styled-components vs styled chemicals `[E32]`.
16. **Part** — a subclass of Book, or the role of any Book at depth ≥ 1 `[E31]`. Both give nested ToCs.
17. **Does `specify` descend?** Written as not descending; `[inference]` a test runner walks the tree `[E65]`.
18. **"Type" for Type** — the five operations are by class, and Types differ by name `[E65]`.
19. **The pattern on the parts** — whether Composition gets the five operations on parts and a `canonical.specifically(composition)`, as Writing has on the tail `[E65, pattern seen]`.
20. **Reference as Mention's "parent"** `[E22]` — superclass, or the other half of a pair. Modelled as siblings.

Inferences in the compiled tree that Doug has not confirmed: `Writing extends Chemical`; `TableOfContents extends Chapter`; `Quote extends Sentence`; `Ref extends Word`; `Synopsis` points to the Cover via a `Reference`; By/About transitivity following E38's Author rule.

---

## Double-check log

**Stream against conversation.** All 63 events re-read against Doug's messages before compiling. One correction found and already applied: E30 "restrictive" (verbatim) → strict `[E62]`. No other discrepancies. Two places where the verbatim is ambiguous and the compile picks a reading: E22 "the mentioned one" (read as: the annotation already present); E33 "the table of contents for a synopsis is a type of chapter" (read as: the ToC in a catalogue is a Chapter carrying links — the basis for `TableOfContents extends Chapter`).

**Compiled tree against stream.** Every class and member above cites the event that introduces it. Members that appear in the stream and are *absent* from the compiled tree, with the reason:
- `Writing.author`, `Writing.subject` — E34, withdrawn to Book by E49.
- `compose` — E10, never withdrawn, not carried as a member (open item 8).
- `Mention` — E21, renamed Referent at E22.
- `subscript`, `rank` — E5, E6, renamed back to `level` at E10.
- `Text` — E1, renamed Letter at E3.

**`writing-library.ts` (E1–E13) against the compiled tree.** Differences are all E14+ revisions, none contradictions: `parts` there has E12's rule (this file has E17/E26/E27's); `Annotation` there lacks `unique`, `name`, `parenthetical`; `Composition` there lacks `parenthetical = false`; `Heading_E12`'s openness note is still marked inference here; the `compose` declaration there is carried as an open item here. The `.ts` remains the audited process record for Parts 1–2 and is not superseded by this file.

**Second pass — properties first.** Re-derived each class's `specify()` from the properties we decided it has (the section "Properties → guarantees") rather than from the stated rules alone, reading the files rather than memory. Four inconsistencies in the first-pass pseudo-code, all fixed above:
- **A. Heading's depth contradicted Composition's.** `Heading.specify` inherited an assertion that its depth is 0 (parent is a Section, not a Sentence) and then asserted it is the Section's. Depth is now a per-class rule with a default; Heading and Part state their own.
- **B. Part broke under exact-class "same type."** Book > Part would neither splice nor deepen, and Book's no-parent assertion fired on every nested Book. The no-parent line now reads `(parent is none) == (depth == 0)`, and the same-type question is shown to be decided by E31 rather than free (open item 4; new open item 16).
- **C. TableOfContents used `parts()`.** With Parts spliced, their chapters would arrive flattened and the ToC could not nest them. It now walks the body.
- **D. Theme asserted on "non-tail" children.** Formats are Annotations, so a Theme's children are all tail and the body is empty. It now asserts on every child.

**Third pass — the E64 view.** Re-based on `source` as the one stored thing with `contents`, `annotations`, `parts` computed; props marked; the tail rule moved to the writing subsequence of source; `specify()` rewritten as inherited named tests in `writing-library.ts`. Corrections this forced on the earlier passes: the tail test had been on raw children (a $Block after an annotation would have failed it); Type's name, Of's link, Means's key and About/By's links had been modelled as props and are source; "calligraphy" had appeared inside specify pseudo-code as if the model checked for it — it sorts by `$Writing` instead. The Parts 1–2 process artifact is kept as `writing-library.process.ts`; the stream carries its history.

**Fourth pass — E65.** Source made protected; the API replaced by add / replace / ensure / remove / find, all by type, checking nothing; `specifically(writing)` added to Annotation and called from `specify`; uniqueness and all placement constraints moved out of the API and out of `specify` into `specifically`; `canonicalTypes` added to Composition as the parts-side pattern of `annotationTypes`, and Section's and Book's canonical tests folded into it. Protected `source` immediately caught Referent reading its writing's source for the key; it now reads `contents`, which is also the right thing (the quote's content, not its annotations). The model type-checks under `strict`.

**Sixth pass — E67, side by side.** Every one of Doug's messages re-read against its entry in the stream, not against memory. Three misreadings found and corrected: E12 (Letter to level 1 with text as level 0 — an event, recorded for four passes as a contradiction), E64 (`$Block extends $Html`, had been siblings), E22 (Reference as Mention's "parent" — flagged, not decided). Fourteen phrases and framings the compression had dropped, restored to their entries; the stream's "Side by side" section lists them. The model type-checks.

**Fifth pass — E66, the sweep for inserted terminology.** Found: `admission` (a member and a concept word, from Part 1, never Doug's); `body` (a collision with Doug's word for parts); and the concept words *floor*, *host*, *mate
