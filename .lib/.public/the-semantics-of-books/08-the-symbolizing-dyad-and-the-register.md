# The Symbolizing Dyad, and the Register of Classes

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

This chapter records a structural insight Doug surfaced, and keeps the running list of classes it names — because the derivation is now producing enough of them that they need one place to live.

## The dyad, at every scale

The [symbol and the literal](05-the-evolutionary-root-symbol-and-literal.md) — the representative and the content it stands for — are not just the atomic root. That same relationship recurs, growing a body at each scale. Doug (this session):

> "Symbol > Literal seems like it will be the atomic form of Subject > Literature. The Subject is to its Literature as a Symbol is to its Literal. On a not quite so obvious level, a Catalogue will be to its Library in a similar fashion."

One relationship — *the representative stands for the body it is about* — at three scales:

| scale | representative | : | the body it stands for |
|---|---|---|---|
| **atomic** | `$Symbol` | : | `$Literal` |
| **subject** | `$Subject` | : | `$Literature` |
| **library** | `$Catalogue` | : | `$Library` |

Read across each row: a symbol points at its literal; a subject stands for its literature (the body of writing on that subject); a catalogue stands for its whole library. Read down each column: the left is the pointing, representing thing; the right is the content it is about. The `>` is **symbolization** — the same act the [foundation](05-the-evolutionary-root-symbol-and-literal.md) writes `()`, recurring up the scales. This is the "[three of the nine semantic referents growing bodies](05-the-evolutionary-root-symbol-and-literal.md)" made concrete: the symbol/literal dyad *is* the subject/literature dyad *is* the catalogue/library dyad, one structure seen at three sizes.

Two classes fall out of it that the earlier chapters had not named on their own:

- **`$Literature`** — the body of writing a `$Subject` stands for; the subject-scale literal. (Where a subject *catalogues* its books, the literature is the books catalogued — the content, not the index.)
- **`$Catalogue`** — the representative of a whole `$Library`; the library-scale symbol. The catalogue points at the library the way a symbol points at its literal.

Recorded as a **conjecture to track**, in Doug's own hedge — *"seems like it will be," "in a similar fashion."* It is a candidate unification, not yet a settled inheritance. What it predicts and must be checked against: that `$Subject : $Literature` and `$Catalogue : $Library` each carry the *same shape* as `$Symbol : $Literal`, so that if the shape is real, the three are one generic relation instantiated three times rather than three separate facts.

## The register of classes

Every class the derivation has named, kept here so none is lost and so the map stays honest as decisions change. Each is (or will be) a real class — or, for the composition role, an **interface** — in [`@dna-platform/lib`](../../package/). `→` is *specializes*; the source chapter is where it is derived; **Built** marks the ones that exist in code today. This table is edited, not appended — when a decision changes the model, the row changes. The composition rows reflect the [Sprint 44](../projection/01-sprint-44--composition.md) as-built model: content enters once, as one live block through the bond constructor, and the levels beneath are *parsed, never authored* — the creator of a paragraph does not specify its sentences.

| class | relation | status | chapter |
|---|---|---|---|
| `$Chemical` | framework root — renders in React (from [$Chemistry](../../../chemistry/.lib/..representivity/.cover.md), not ours). Its `$Particle` base now carries **`frame()`** — the render template method the framework calls; `view()` is the content, `frame()` wraps it. | built (framework) | [06](06-the-canonical-echo-and-views.md) |
| `$Reference<T>` | → `$Chemical`; the act of pointing — a hyperlink. Holds `$for` (an *indirect* string target, never the object), `lookup(): T` (the dereference — a *navigation*), and overrides `frame()` to wrap its surface in a clickable link. `T` is what the lookup yields. | **built** | [03](03-inheritance-and-composition.md) |
| `$Title` | → `$Reference`; a *canonical* reference — it points at its work and is the first/representative. Where "points at" and "is the first text" meet. | to build | [02](02-composition.md), [03](03-inheritance-and-composition.md) |
| `$Author` | `$Reference<$Autobiography>` — a reference typed to point at an autobiography; the target constraint is the generic, checked by the compiler. | to build | [03](03-inheritance-and-composition.md), [04](04-the-book-and-subjectivity.md) |
| `$Literal` | → `$Chemical`; object-only content — the thing pointed *at*. With `$Reference`, the pointing/pointed-at pair that is the essence of a catalogue (the Dewey decimal and the book it names). | to build | [05](05-the-evolutionary-root-symbol-and-literal.md) |
| `$Text` | → `$Literal`; the leaf | to build | [02](02-composition.md) |
| `$Writing` | the **interface floor** — `{ copy }`, the one commitment every writing makes; the base the composition role extends. | **built** | [02](02-composition.md) |
| `$Composition<T>` | an **interface, not a class**: `$Composition<T extends $Writing>` = `parts` + `canonical`, extending `$Writing`. Being-a-composition is a *role*; lineage belongs to the classes that implement it. Built by **multiplication** (many of a level become the level above), flowing down to the floor. | **built (interface)** | [01](01-levels-of-closure.md), [02](02-composition.md), [09](09-composition-and-collection.md) |
| `$Character` | → `$Referent`, implements `$Writing`; the floor of the levels — one glyph of `copy`. | **built** | [02](02-composition.md) |
| `$Word` · `$Sentence` · `$Paragraph` | → `$Referent`, each implementing `$Composition` of the level below (`$Word` of `$Character`, and so on) — the inline levels: each **inline** by a zero-arg constructor, each parsing its own level out of `copy`, validation filtering at the parse. | **built** | [02](02-composition.md) |
| `$Section` | → `$Referent`, implements `$Composition<$Paragraph>`; **block-level**; its required title is the first element of its block, its canonical the paragraph that holds only the title. | **built** | [02](02-composition.md), [06](06-the-canonical-echo-and-views.md) |
| `$Chapter` | implements `$Composition`; a block-level composition of sections | stub | [04](04-the-book-and-subjectivity.md) |
| `$Book` | implements `$Composition`; + title, subject, author; the subjectivity level | **stub built** | [04](04-the-book-and-subjectivity.md) |
| `$Subject` | → `$Book`; catalogues its books; stands for its `$Literature` | to build | [04](04-the-book-and-subjectivity.md), [07](07-the-subjective-subject-and-the-library.md) |
| `$Literature` | the body of books a `$Subject` stands for | to build | this chapter |
| `$Biography` | → `$Book`; subject is a subjective subject | to build | [07](07-the-subjective-subject-and-the-library.md) |
| `$Autobiography` | → `$Biography`; author-ref equals subject-ref; auto-categorical | to build | [07](07-the-subjective-subject-and-the-library.md) |
| `$SubjectiveSubject` | → `$Subject`; canonical is a `$Biography` | to build | [07](07-the-subjective-subject-and-the-library.md) |
| `$Catalogue` | the referencing operation — where references are organized. The native word for the "collect by reference" side, as against `$Composition`'s "contain." | **built (interface)** | this chapter, [09](09-composition-and-collection.md) |
| `$Document` | concrete; the general unit above sections — sections, summary, title, the apparatus; `$Chapter` → `$Document` (the book's kind) | **built** | this chapter |
| `$Footer` | → `$Section`; the filing section — keyed entries, numbered at the bond, its `$Legend` implicit | **built** | this chapter |
| `$Footnote` | → `$Sentence`; a keyed note — the key stands before the colon | **built** | this chapter |
| `$Denote` | → `$Writing`; the inline command (*Denote seam*) — its key is its copy; reads its note through document → footer → legend | **built** | this chapter |
| `$Bibliography` | → `$Footer`; the filing section whose entries are citations | **built** | this chapter |
| `$Citation` | → `$Footnote`; a keyed note that stands for a spot — carries the path reference for it, resolved at its own document; another document's address declines locally | **built** | this chapter |
| `$Cite` | → `$Denote`; the inline command that reaches the bibliography instead — the triad retypes, get-only | **built** | this chapter |
| `$Legend` | → `$Paragraph`, parenthetical; the filing section's own table of keys — implicit, kept once asked | **built** | this chapter |
| `$Key` | one hop of lookup as a name — a key stands for its entry | **built** | this chapter |
| `$Library` | → `$SubjectiveSubject`; canonical is an `$Autobiography`; self-cataloguing summit (likely a singleton [`$Atom`](../../../chemistry/.lib/particle/.cover.md)) | to build | [07](07-the-subjective-subject-and-the-library.md) |

## Notation — a third axis, and it is one row rather than a family

Doug asked, working on markdown: *"Are you sure that markdown is the only level you want to use markdown?"* The answer turned out to be that **markdown is not a level at all.**

A **notation** is the system of marks writing is authored in. It is not a [level](../projection/10-writing.md) — levels compose downward and a notation appears at *every* level. It is not a `role` — `role` is a property of writing that a notation *deploys* (its syntax is mentioned) rather than something it is. **It supplies exactly three things and nothing else: how prose divides, what each piece composes into, and which marks are mentioned.**

**Plain prose is the identity notation.** Markdown is one instance; LaTeX is another. A markdown section differs from a plain section **only** in its two overrides — same level, same composition, different marks — and that *only* is what makes notation forced rather than chosen.

| the axis | what it supplies | its instances |
|---|---|---|
| **notation** | `divide`, `compose`, and which marks are mentioned | plain prose (the identity), markdown, LaTeX |

**One row, not a class per notation per level.** Notation is to the levels what a lens is to a chemical: one concept spent across all of them. *Built and proven in [Markdown](../projection/11-markdown.md) — three classes, each declaring only its two differences, and everything ordinary a person writes falling out as a fork rather than a kind.*

**Dropped, by decision:**

- **`$Symbol`** — Symbol and Literal are the *essence* of a catalogue (the pointing thing and the thing pointed at), but the pointing class we build is `$Reference`; there is no separate `$Symbol`. (Doug: "I don't think we need symbol.")
- **`$Name`** — a book's name is its *title*; "name" is not a word of the writing domain, so the class is `$Title`, and `$Reference` composes no `$Name`.
- **`$Container`** — fails the vocabulary test outright (it functions unchanged in any domain), and its supposed role over composition/collection was never stated. `$Composition` (contain) and `$Catalogue` (reference) stand on their own.
- **`$Document`** — removed as unneeded in Sprint 44 (the levels topped out at `$Section`), and **reinstated by Doug at Sprint 47's close (2026-08-03)** with better cause: this document *earns* existence — a concrete class above the section carrying the reference apparatus (sections, summary, title, and the footer/bibliography with their legends), of which a chapter is the book's kind. The Sprint-44 version was a bare level; this one is the general unit an article will also be. Rows below.

The two generative operations behind the whole table are **validation** (specialize a type with a constraint — `extends` + `$check`) and **multiplication** (compose many into the level above — `$Composition<T>`, flowing down). See [Inheritance and Composition](03-inheritance-and-composition.md).

<!-- citations -->
[conv]: ../../../../../dna-library/library/claude-dna/conversations/2026-07-18-the-semantics-of-books.md
