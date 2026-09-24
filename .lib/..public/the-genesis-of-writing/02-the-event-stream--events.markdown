# Event stream — $Chemistry writing library

One entry per message from Doug, in order. Doug's messages are the specification. Claude's replies are not events and are omitted, except where Doug's next message corrects one (marked **Corrects Claude**).

The numbering here is canonical. `writing-library.ts` cross-references it as `EVENT n`.

Notation: `→` adds or changes · `✗` removes · `⟲` renames · `⚠` contradiction or open question

---

**E1 — Text.** Text takes text and nothing else. Anything that is not a component of this library. All React allowed as long as it is not recursive Text.
→ `Text`: takes non-library content; no Text inside Text.

**E2 — Writing.** Text evolves into Writing. Writing takes only Writing. Text is a type of Writing but overrides the specification to keep its own — "a sort of null writing." Anything outside the model is constrained to a special location.
→ `Writing` is the root; takes Writing.
→ `Text : Writing`; overrides to its E1 specification.

**E3 — Letter.** Text renamed Letter. "As a letter, it is allowed to have anything." As if you were writing one.
⟲ Text → Letter.

**E4 — Composition.** New type of Writing. Has a level. Allows only things at or below its level, except at the end; after that, non-composition writing. Letter claims level 0. "Weird but well formed."
→ `Composition : Writing`, with `level`.
→ the end: non-composition Writing.
→ Letter level 0.

**E5 — Annotation.** Writing gains child Annotation; those are the only ones allowed at the end. Any composition can be annotated. Letter's end can be annotations. "Everyone adjusts." level evolves into rank. "This is a polymorphic framework."
→ `Annotation : Writing`.
→ the end: Annotation only (revises E4).
→ Letter: end is Annotation only.
⟲ level → rank.

**E6 — Word, Sentence, Paragraph; strict/permissive.** "In this Genesis, Text evolved into Writing, and Writing gave birth to Letter, Composition and Annotation." Composition's children: Word, Sentence, Paragraph at subscript 1, 2, 3; Letter subscript 0; rank converts to subscript. Composition is strict or permissive: permissive = at or below, strict = at or one below. All three are permissive. "No one needs to use 0-3, unless they need strict." A semantic family for informal specialization.
→ Writing's direct children stated: Letter, Composition, Annotation.
→ `Word`₁ `Sentence`₂ `Paragraph`₃ : Composition, permissive.
⟲ rank → subscript.
→ `strict | permissive` on Composition.
→ semantic family, informal.

**E7 — property; parts; depth; Section, Heading.** strict/permissive is a property; changeable dynamically but shouldn't be; assigned, not overridden. Letter subscript 0 reaffirmed. Composition has parts; recursion in a composition is special; an emergent depth, a computed property. parts does not return the recursive child; reaches in and gets its parts. Section : Composition, subscript 4, permissive. Heading : Sentence. Twins. Section's canonical first member is a Heading. Heading takes text or what text takes, wraps in text, reaches to its parent Section for depth. Sections expect to be nested. "The canonical Heading means the section."
→ admission is a property.
→ `parts()` on Composition; recursive child spliced.
→ `depth`, computed.
→ `Section`₄ permissive; `Heading` is its canonical first member.
→ `Heading : Sentence`; wraps text; depth from parent Section.
→ first reference: Heading means its Section.

**E8 — checkpoint.** "Where are we? Is this a sort of writing?" No consequences.

**E9 — Annotation is types/references/meaning.** Not commentary; that belongs in the margin. Annotations are "where types, references, meaning lie."
**Corrects Claude:** Annotation ≠ footnote/gloss/citation.
→ Annotation carries types, references, meaning.
→ `margin` named. ⚠ Never specified anywhere in the stream.

**E10 — back matter; level; depth fundamental; composition function.** The tail is back matter: "the back about the book and not a part of it," not visible in the writing. "Your annotations are annotations at other levels." Subscript goes back to level. Depth is a fundamental property of composition; recursion has meaning and can be checked against one's parent; level and depth lend a geometry. Heading "creates the letter" and Writing and Composition object. A new form of composition: takes the inputs to the first, runs the bond constructor of one then the other, returns them assembled parent-child. A new composition function is added. Concern about an end to polymorphism; they ponder.
**Corrects Claude:** the tail is back matter, not ranked material that stopped.
⟲ subscript → level.
→ the end = back matter: about the book, not part of it, not visible.
→ `depth` fundamental; checkable against parent.
→ composition function; `bond constructor` first named.
⚠ tension recorded, unresolved.

**E11 — $Chemistry; catalytic constructor.** A "formula constructor" like the bond constructor but for composition: takes inputs, returns React nodes fed to the bond constructor. $Chemistry: props act like properties of an object; children act like constructor arguments at mount; the object graph is reactive. "Maybe its a catalytic constructor": takes TSX, modifies it, gives it to the bond constructor, runs as part of mount. Heading now has a place to declare it wraps text. A piece of writing could concatenate two others with the same inputs.
→ $Chemistry contract.
→ catalytic constructor (first called formula constructor): TSX → TSX, at mount, then bond.
→ Heading declares its wrap.
→ concatenation capability.

**E12 — open/closed; whitespace; $$.** "Not applying permissive to the inputs of text. So if Letter is level 1, then all of Letter – Paragraph now can take anything react, writing, strings!" Composition evolves a boolean pair open/closed; one is a computed settable property, the opposite of the other. Open: react allowed inside; closed: not. parts enumerates only the children that are Writing; react and strings are whitespace around the real writing. A Letter containing a whole book as a string is one letter. Example uses `<Composition open level=4>`. Annotation says occupants will want to insert themselves; new syntax for the new constructor with an extra `$` relative to the bond constructor. $Chemistry has much DOM handling.
→ `open` / `closed` on Composition.
→ Letter – Paragraph take react, writing, strings.
→ `parts()` revised: Writing only; react/strings as whitespace.
→ `$$` syntax.
⚠ "if Letter is level 1" — contradicts E4, E6, E7 (level 0).

**E13 — Section closed; 0–3 intermixed; specification universal.** Section decides to be closed. Canonical reference compels purity; Paragraph becomes "an emergent sort of letter of its own kind." Levels 0–3 are like one intermixed level. Permissive-but-closed allows all writing, nothing outside it. All in its specification; all writing is subject to its specification.
→ `Section.closed`.
→ Paragraph terminal relative to a closed Section.
→ 0–3 intermixed, informal.
→ every class has a specification.

**E14 — purity; calligraphy.** "Purity is at composition level and composition returns parts one level down." parts doesn't operate on strings; writing exists between the strings. A whole book of html/react in one letter is calligraphy.
**Corrects Claude:** closure is not "shallow"; parts is not a filter.
→ purity criterion: parts, one level down.
→ `calligraphy` named.

**E15 — Parenthetical.** If whitespace is defined as calligraphy, strings are whitespace; parts skips them; it skips annotations too. Writing should have introduced parenthetical at the advent of Annotation. "Like a Letter is the canonical level 1, Annotation is the canonical parenthetical." Parenthetical controls not printing something.
→ `parenthetical` on Writing, retroactive to E5.
→ Annotation is the canonical parenthetical.
→ parenthetical controls not printing.
→ `parts()` skips calligraphy and annotations.
⚠ "Letter is the canonical level 1" — contradicts E4, E6, E7; E13's "0–3" count supports 0.

**E16 — property placement.** Annotation was never graded. Parenthetical is on Writing; level is on grading. Annotation is parenthetical; Composition is not. Both can send and render those properties, non-reactive.
**Corrects Claude:** do not ask whether Parenthetical is graded.
→ parenthetical: a Writing property. level: a Composition property.
→ Annotation parenthetical; Composition not.
→ these properties are sent down and rendered non-reactively.

**E17 — parts splice; $$ is catalysis.** "parts splice on non-annotation around calligraphy." Verse is not here. "$$ catalysis.. yes it catalyzes the reaction. Bonding still happens."
→ `parts()`: splice on non-annotation, around calligraphy.
→ `$$` = the catalytic constructor; its output is still bonded.
✗ Verse.

**E18 — vocabulary rule.** Claude's vocabulary withdrawn; only Doug's terms are the specification. No declarations.

**E19 — canonical required.** "Of course a canonical is required. The result would be a void."
→ a Section without its Heading is a void, not a failed check.

**E20 — specification; genome.** Meaning not yet defined. Everything said must be in a specification. Annotations are modifiers; may participate in the specification; "more like a genome." Phenotype and "prototype" [genotype, per E21]. The specification runs in dev mode only, like a unit test broadcast to every user. Dev mode may need to be fast; a validation/test mode may need inventing.
→ specification: per class, dev-mode only.
→ annotations = genome; participate in specification.
→ phenotype / genotype.
→ a slower validation mode may be needed.

**E21 — assert mode; Mention/Mentioned; Quote; annotation collection.** Assert mode, like assertions compiled out in production; the specification is that, flagged to mode; C#/Eiffel precedent. Composition specifies a default phenotype; the genome confers fitness. Annotation specializes into Mention, exported Mentioned; authored from without; may confer an id; `<Mentioned as=quote/>`; without `as` the entire quote is the key. `<Quote as=quote>` as exemplar via catalysis; the Mention is implicit. Annotations are a collection: Writing contains a collection of annotation constructor types; in its bond it builds them and adds them to the annotation list; the list is dynamic; add/remove; specify whether overridable by one of the same type found or not; subclasses modify in the bond constructor. Quote no longer needs catalysis (only for explicit structure in the unprocessed tree — rare). Annotation declares itself unique or not. The tail is all annotations, possibly none; Composition inherits the machinery. Quote internal or external; without `as` it only formats. No model/view distinction.
→ assert mode; specification flagged to mode.
→ `Mention` exported `Mentioned`; `as`; id.
→ `Quote` exemplar (Doug's word: "an exemplar steps in").
→ annotation collection: declared constructors, built at bond, dynamic list, add/remove, override policy, subclass modification.
→ `unique` on Annotation.
→ tail: Annotation*, possibly empty.
→ catalysis optional for Quote.
→ no model/view split.

**E22 — unique semantics; Referent/Reference; Means; Ref.** Mention is unique. Unique add: does not replace a specified one; adds only when missing; throws when the existing one isn't a proper subclass of the one added. Mention becomes Referent (exported Mentioned). Reference (exported Means) is another annotation; points to its Referent. `<Means>aristotle-quote</Means>`; `<Ref for=aristotle-quote>`. The anchor/id pair. Meaning may inject itself as style.
⟲ Mention → Referent (export Mentioned).
→ `Reference` (export `Means`), points to its Referent.
→ `Ref`, the short form of a Word with a Means.
→ unique add semantics.

**E23 — Format.** New annotation Format, part of the writing genome; a place for themes and styled components; no constraints, like Letter. Means modifies Format on render.
→ `Format : Annotation`, unconstrained.
→ Means modifies Format at render.

**E24 — Theme.** Theme chemical : Annotation; specified to take ONLY Format; often contains a styled-components theme provider, a $Chemistry native operation.
→ `Theme : Annotation`, Format only.

**E25 — placement.** Theme is an ancestor in the render tree because chemistry renders where it wants. "The child input to a chemical is a constructor argument not a placement."
→ where a chemical renders what it holds is its own decision.

**E26 — ordering; unique check; parts; catalysis; compiler.** Annotations added at the front by default; modes default / replace / prepend / append; interacts with unique; remove is easier and supports multiple; a minimal, expressive API. Unique check via instanceof; annotations may have a name defaulting to type name; optimization later. "parts is on type — if a child is same type the parts of the child are flattened in"; a Section's parts are its subsections' paragraphs. Catalysis is the constructor of a type; modifies the tree. Means/Mentioned is the anchor/id system, can evolve. The compiler understands reference/referent syntax; no dynamic references yet; architect for future dynamism.
→ annotation API: add (front by default | replace | prepend | append), remove (multiple).
→ `name` on Annotation, defaults to type name.
→ parts splices a same-type child.
→ compiler: static references.

**E27 — parts is on Composition.** "No parts on type." Annotations are like types — a genome. Parts is on Composition, the body.
**Corrects Claude's phrasing:** "type" means genome here. The E26 splice rule stands: a child of the same composition class is flattened in.

**E28 — reread instruction.** No declarations.

**E29 — closed under books; Chapter.** Sections live in a writing closed under books. Every piece of writing is in a book. The catalogue, the architecture, the logs, the librarian (as her autobiography) are books. A thing that contains sections is a Chapter.
→ closure under books.
→ `Chapter`: contains Sections.

**E30 — Chapter₅, Book₆, canonicals.** Chapter is 5. Requires a Title and a parenthetical-by-default Summary (an abstract in an article-type chapter) as first two parts; closed but permissive. Book: Cover and Synopsis as first two parts; "closed and restrictive"; third component the Table of Contents. Heading/Title/Cover are referents that mean each; Summary/Synopsis convey meaning for display; the Table of Contents is a container for titles and potentially summaries.
→ `Chapter`₅ closed permissive; `Title`, `Summary`.
→ `Book`₆ closed strict; `Cover`, `Synopsis`, `TableOfContents`.
(Verbatim at E30 was "restrictive"; confirmed as strict at E62.)

**E31 — Part.** Part is the Book that goes in a book, enumerating chapters at different depths for nested tables of contents. Compositional hierarchy complete.
→ `Part : Book`, nests.

**E32 — top; typing by annotation; strings uncomprehended.** Book is the top. Annotations are the typing mechanism going forward. Themes and formats via styled-components or styled chemicals, whichever gives flexibility. Standard React in the gaps if efficiency requires. "The composition system is technically what makes something subject to being writing. Strings are uncomprehended."
→ hierarchy closed at Book.
→ typing = annotations.
⚠ styled-components vs styled chemicals undecided.

**E33 — synopsis chapter; Canonical letter; Chapter as document.** A catalogue entry is a chapter that is a synopsis; the catalogue may print or import it. The table of contents for a synopsis is a chapter carrying the link to its book. Self-link chain: cover title → book; synopsis → cover; table of contents → synopsis → cover. Canonical: "a type of nameless Letter that serves as a suffix for a piece of writing"; a symbol that reappears; signifies writing with a canonical referent goes there; handles transitive meaning. Chapters are the first document; they render in isolation; export pattern shown.
→ `Canonical : Letter`, nameless suffix.
→ Chapter renders in isolation; Book composes chapter functions.

**E34 — Author, Subject.** Every writing has an Author and a Subject. Author: an annotation with a name that also means an autobiographical book about its own author. Writing punts: its author is its parent's author; a self-authoring fixed point must appear. Subject: an annotation conveying a writing that is about a collection of other writings including this one; expresses canonicity; punts upward. Composition: the canonical is the part whose subject is a proxy for all the other parts; its subject IS the parent; the rest read parent → canonical → subject (computed). Letter – Paragraph are literal: go straight to the parent. Non-literals are subjective: subject to having a canonical, the first stopping point.
→ `Author`, `Subject` annotations.
→ resolution: literal vs subjective; canonical.subject = parent.

**E35 — autobiography; Type; informal transit.** Author and Subject top out at the Book, which has no parent. Chapter's author is its Book's author. Autobiography : Biography; self-terminating; implicit subject; an autobiographical subject's catalogue represents the author of what it catalogues; autobiographies make a proper tree of authors. The Book is bound, abstract, cannot be annotated directly; its Cover represents it. `<Type>Autobiography</Type>`: a Type does not know what it means; weighs on specification when subclassed; may be freely used as a label. A Book sees its Cover's types and decides it deserves them; upward transit is informal; a parent may translate.
→ `Type : Annotation`.
→ `Autobiography`, `Biography`.
→ Book annotated via its Cover; informal upward transit.

**E36 — contexts; teams; multiple authors.** Works in an autobiographical subject are contexts of an author. A team's subject catalogues teammates usable as authors. A book can have multiple authors; they all mean the same thing. In the universal library the team is everyone who ever authored.
→ multiple `Author` allowed; all mean the author.

**E37 — closure condition.** Every exterior candidate is admitted as a book — write a book about the library and put it in; keep a journal of doing so and put that in. No declarations.

**E38 — first Author; canonical annotations.** With multiple Author annotations, the first is used for transitivity. "Canonical annotations subserve transitivity."
→ transitivity follows the first annotation of a kind.

**E39 — fixed point.** A Book's subjectivity not yet specified as Author was. An Author is the subject of a book that is a subject in the library. No new members.

**E40 – E48 — philosophy.** Consciousness, the reductive project, Chinese room, swarm, ghostwriting, levels. No declarations.

**E49 — Author/Subject at Book level; pin.** Subjecthood and Authorship start at the Book level. Lower-level authorship pinned for later; upper levels inherit from their canonical.
→ Author/Subject declared at Book only.
⚠ pinned: authorship below Book.

**E50 — artform.** No declarations.

**E51 — Subject as Type; Of; cover reads parent; double dispatch.** `<Type>Subject <Of>Math</Of></Type>`. Subject: a subclass of Type with the name Subject and the annotation Of; short form `<Subject>Math</Subject>`. A child of the cover looks for its chapter parent, requires `<Type>Cover</Type>`, reaches in, gets the Subject, displays it. An implementer subclasses Chapter for the book, then a subclass inserting the Cover type, then uses components that work for types of covers; double-dispatch for style.
→ `Of` annotation.
→ `Subject : Type` (name + Of).
→ parent-type requirement in a specification.
→ dispatch on Type.

**E52 — Of links; templating; Author parallel.** `<Of>[Math](/the-big-book-of-math)</Of>` compiles; the library compiler fills it in. Enforcement: canonical components, a templating system, or a dynamic catalogue; for referential integrity, compiler templating. `<Type>Autobiography <Of>[Doug](/my-autobiography)</Of></Type>` ⟵ `<Author>Doug</Author>`.
→ Of resolves to a link; the compiler resolves it.
→ `Author : Type` (Autobiography) + Of.

**E53 — formulator.** $$ may be the formulator. `<Author>Doug</Author>` converts to `[Author, <Of>[Doug](/my-autobiography)</Of>]` — a string then an annotation; completely valid.
⟲ catalytic constructor → formulator (proposed).
→ formulation yields ordinary writing.

**E54 — recursion.** The bond constructor takes chemicals; they get transduced; their bond constructors run; so the mechanism is recursive. The $Chemistry team will have to think hard.
→ formulate/bond recurses over produced chemicals.

**E55 — Of is generic; annotative meaning.** A cover grabs info from its Type and its Of, which is generic. Not quite Means — annotations don't mean anything in the referential sense. "Or it's a form of annotative meaning!" Handle in the specification of Of.
→ Of: generic; annotative meaning; distinct from Means.

**E56 — About, By.** `<About>[Math](...)</About>`, `<By>[Doug](...)</By>` for a book declaring its subject and author.
→ `About`, `By` annotations.

**E57 — import upward.** By and About are at Cover level; the Book grabs them. "Why not have it import those annotations upward to its level."
→ Book imports its Cover's By/About into its own collection.

**E58 – E61 — meta.** This is an event stream; produce the artifact in parts; keep specification as a list at the type; produce this document and audit. No declarations.

**E62 — strict; vocabulary.** "Strict, not restrictive." Asks whether the artifact distinguishes terminology invented to *describe* the model from terminology that is *in* it; calligraphy is the example of something outside. Notes the pattern: general types first, then typing placed on them — specific annotations, types of chapters.
→ `Book` is strict (E30 corrected).
→ the vocabulary section below.

**E63 — Chemical.** "Chemical is that but its in another framework."
→ `Chemical` is the base class carrying the bond and catalytic constructors, and it belongs to $Chemistry. Imported by the writing library, not declared by it.
→ the "From $Chemistry" vocabulary list below.

**E64 — the object model view: source, props, $Chemistry types, specify as tests.** Calligraphy isn't in the object model. Attributes were designed in boolean pairs so either can be put on the React element: `<Composition open />`, `<Composition closed />` — note what is props. What comes into writing is `...$Chemical[]`. `$Block` is a chemical holding a collection of inline html elements, strings and numbers as part of the react tree; otherwise `$Html`; a React function component is `$Func<typeof Component>`. Sort what comes in, pull out the writing; amongst those, annotations can only be in the tail. Collections: `annotations: Annotation[]` on Writing; `contents: Chemical[]`. For a permissive [open] piece of writing separating the React from the chemicals in text may be hard; Composition may further specify. `specify` is a member of every piece of writing — property inheritance. Hints: no caching; computed properties, so everything flows from source. `source: $Chemical[]` is exactly what comes into the bond constructor, put into an array; `contents` and `annotations` are computed from it. Composition adds `parts: $Writing[]`, filtering contents to the writing inside. `specify` runs only in test mode, unit-test-like, each test named — what properties must source have? Notes format: Class / Member / Notes. Edit and evolve the stream, the compiled object model, and the notes.
**Corrects Claude:** calligraphy is not a thing the model checks for; it is what is left after the writing is pulled out.
→ `source` stored; `contents`, `annotations` computed; `parts` on Composition computed. Nothing cached.
→ props: `level`, `open`/`closed`, `strict`/`permissive` (boolean pairs), `as`, `for`, `parenthetical`. Values like a Type's name and an Of's link are *source*, not props.
→ `$Block`, `$Html`, `$Func<T>` — the $Chemistry chemicals for React content.
→ the tail rule is on the writing subsequence of source.
→ `specify`: inherited; named tests; test mode only.
→ the compiled object model is `writing-library.ts`; the notes are Class / Member / Notes.

**E65 — the source API; `specifically`; Composition.** `specify` enumerates the annotations and calls `annotation.specifically(writing)`, which lets each apply its specification — this is how annotations are like a genome. The writing API for modifying source: **add** (goes to the end of source), **replace** (finds the first instance of the annotation type and replaces it), **ensure** (adds if not present, replaces a parent class, does nothing if a subclass is there), **remove** (all instances of a type), **find** (all instances of a type). As much as possible happens in `specify`, so unsafe things can be done in the bond constructor. Asks: a special collection for source, for efficiency? Is source protected, so all modification goes through the writing's methods? Then: re-read with focus on `$Composition` — what it adds, how it builds on `$Writing`'s foundation, similar patterns, what it must specify.
→ `add` · `replace` · `ensure` · `remove` · `find` on Writing, all by type.
→ `specifically(writing)` on Annotation; `specify` calls it for each annotation.
→ principle: the bond constructor is unsafe; guarantees live in `specify`.
⟲ supersedes E26's modes (default / replace / prepend / append) and front-by-default: add goes to the end.
⟲ supersedes E22's throw: `ensure` replaces a parent class. "A subclass is there" includes the class itself, which closes the same-class question.
⚠ answered in the notes, awaiting Doug: source protected (yes); a special collection (not yet).
⚠ raised by the API: Types differ by name, not class — what "type" means in the five operations for a Type.

---

## Audit of `writing-library.ts` (Parts 1–2, EVENT 1–13) against this stream

Pre-integrations from later events, all verified correct and marked: E14 on `Section_E13`, E17 on `catalyticConstructor`, E19 on `Section`, E25 in the $Chemistry contract, E16/E20/E21 as pointers only.

Findings and fixes applied:

1. **Missing (E6):** "Writing gave birth to Letter, Composition and Annotation" — the explicit statement of Writing's direct children — was elided from the E6 quotes. Restored.
2. **Missing (E2):** "null writing" appeared only in the E2 header, not on Letter's declaration. Added.
3. **Missing (E11):** the naming history formula constructor → catalytic constructor → `$$` → formulator was incomplete on the member. Completed.
4. **Unmarked inference:** the `compose` signature named its parameters `inner`/`outer` and returned the outer type, encoding which one is the parent. Doug did not say. Neutralized and marked.
5. **Unmarked inference:** `bondConstructor` was declared returning `void`. Return shape is unspecified. Marked.
6. **Vocabulary drift:** "leading region" / "trailing region" are Claude's terms; Doug's are "at the end" and "the tail." Replaced throughout.
7. **Vocabulary drift:** "the library has no standing inside them" (Letter) re-imported a withdrawn framing. Replaced with Doug's "allowed to have anything."
8. **Vocabulary drift:** "the measure of how much writing is present depends on declared structure, not on content volume" re-imported the withdrawn "declared, never measured" framing. Removed; Doug's sentence stands alone.
9. **Vocabulary drift:** "the binding is the position" (Heading) re-imported the withdrawn "positional reference" framing. Rewritten in Doug's "means."
10. **Vocabulary drift:** "the catalyst proposes structure; the bond constructor builds it" — replaced with Doug's words.
11. **Unmarked claim (E13):** "`parts` follows the formal one" about the first 0–3 levels was Claude's claim; what parts does there is not stated until E26/E27. Marked.
12. **Numbering:** the formulator was referenced as "EVENT 45"; canonical is E53. Fixed.

Carried forward, unresolved: Letter level 0 vs 1 (E12, E15); Heading.depth relative to its Section (E7); where open/closed lives given Letter is in its range (E12); margin (E9).

---

## Vocabulary — in the model, about the model, and Claude's

The `[D]` / `[inference]` marks sort *claims*. This sorts *terms*, so that a word in a comment is not mistaken for a class.

**In the model** — something an implementer writes: a class, member, property, or syntax.

Writing · Letter · Composition · Annotation · Word · Sentence · Paragraph · Section · Heading · Chapter · Book · Part · Title · Summary · Cover · Synopsis · Table of Contents · Canonical (a Letter, from E33) · Parenthetical (a property on Writing) · level · depth · source · contents · parts · add · replace · ensure · remove · find · specifically · strict / permissive · open / closed · unique · name · specification · assert mode · the annotation list / collection · Mention → Referent, exported Mentioned · Reference, exported Means · Ref · Quote · `as` · `for` · Format · Theme · Type · Of · Subject · Author · About · By · Autobiography · Biography

**From $Chemistry** — provided by the framework this library is built on. Used here, declared there.

`$Chemistry` · Chemical (the base class carrying the constructors — E63) · chemical (a component) · `$Block`, `$Html`, `$Func<T>` (the chemicals for React content — E64) · bond constructor · catalytic constructor (formula constructor at E11; formulator, proposed at E53) · `$$` · props as properties of an object · children as constructor arguments at mount · reactive object graph · mount · "$Chemistry native operation" (E24) · styled chemicals (E32)

**About the model** — Doug's words for what something *is*. No implementation surface of their own. A comment may use them; a class must not be made from them without a further event.

calligraphy (what strings, html and react are, seen from the writing — not in the object model, E64; in the model they are `$Block`, `$Html`, `$Func`) · whitespace (calligraphy as parts sees it) · back matter (what the tail is) · the tail / the end · margin (named at E9, nothing more) · genome · phenotype / genotype · fitness · literal / subjective (levels 0–3 vs 4+, for Subject resolution) · twins · Genesis · recursion (a same-class child) · geometry · purity · transitivity · fixed point · self-authoring · autobiographical subject · contexts of an author · document ("Chapters are the first document") · library · catalogue · the librarian · referent / conveyance / container (the three canonical roles at E30)

**Claude's, still present in the artifacts** — commentary vocabulary, kept only where marked, never to be read as specification.

"one-way" (marked as gloss) · short form (for Quote, Ref, Subject as written) · checkpoint (label for events with no declarations) · resolution (how Author/Subject are computed)

Withdrawn in this pass: band, region, sugar. Reassigned at E63: Chemical, from Claude's list to $Chemistry's.

**Promotion.** Several terms began in the second list and moved to the first when a later event gave them a surface: *canonical* (descriptive at E7, a Letter at E33); *reference* (descriptive at E7, a class at E22); *type* ("where types lie" at E9, a class at E35); *the tail* (a rule at E5, the annotation list at E21); *subject* and *author* (the librarian at E29, annotations at E34). That is the general-then-typed pattern seen from the vocabulary side. Current candidates with behavioral weight and no surface yet: literal / subjective, document, autobiographical subject, library, catalogue.
