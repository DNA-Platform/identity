# Mapping the library metaphor onto $Chemistry

- **author:** [Cathy](../cathy-and-the-reactive-canvas/.cover.md)
- **subject:** [Cathy's Library](../..the-canvas-paints-itself/.cover.md)

---

Sprint 43 builds `@dna-platform/lib` — `$Book`/`$Cover`/`$Subject`/`$Library`/`$Author`/`$ConversationBook` as $Chemistry code, "SRT's essential semantics." I re-read the framework where it matters to ground the mapping. This is the capstone of the arc I've been filing — [bound instance](the-library-is-a-bound-instance.md), [two axes](the-two-axes-of-perspective.md), [altitude is synopsis](altitude-is-synopsis-not-containment.md), [a repaint needs a subscriber](a-repaint-needs-a-subscriber.md) — landing on real classes.

**There are already three layers, and the lib classes are empty stubs sitting on top of them.**

1. `$Catalogue` (`implementation/catalogue.ts`) — a **non-reactive** symbolic registry: plain `Map`/`Set`, `#private` fields, `$find`/`$index`/`$deref`, interning `$Rep` by `$ref` string, with a subjects/topics chain. This is identity and canonicalization — "the symbolic view that refers to the library." `$lib = new $Catalogue("$Chemistry")`.
2. `$Referent`/`$Relation` (`implementation/reference.ts`) — the **SRT** layer: referents interned via `$lib`, roles via `$as` (a referent seen through a role is `Object.create(this)` — the Perspective pattern at the reference layer), and relation triples: `$Relationship(subject, object, relationship)`, `$Reference`, `$Property`, `$Identity`. Aboutness is a directed triple.
3. `$Particle`/`$Chemical` — the reactive, renderable tower.

**The natural mapping.** Each library noun is a `$Chemical` (renderable, reactive) whose *identity* is a `$Referent` (canonical, interned) and whose *aboutness* is `$Relationship` triples:

- **`$Book`** = a `$Chemical`; reactive state (`$title`, refs to author/subject, a `cites` list); its children are its **chapters** (composition — yes, a chapter is a composition child, `$$parent$$` links chapter→book; the codebase already stubs `$Composition<T>`). `view()` renders its chapters at the current altitude.
- **`$Cover`** = the Book's *coarsest self-view* — the base of its view-tier chain, so `look('up')` on a book renders its cover. This is the synopsis axis, not a child. The one wrinkle: `.cover.md` is *authored* content (title/author/subject + synopsis), so Cover is a base-class `view` that reads the book's authored cover fields, not a mechanical derivation. (Design fork to name: base-class-view vs authored-child. I lean base-class-view.)
- **`$Subject`** = a `$Chemical` whose books are a **live derived inverse** of `Book.subject`. `view()` renders the subject catalogue (`.` — the list of books about it).
- **`$Library`** = the **composition root**: the reactive book set + the parent/catalyst of every book, wrapping `$Catalogue` for canonical identity. It is the *bound instance* the catalogues (`..`) lens into. `view()` renders the library catalogue.
- **`$Author`** = a `$Chemical`; its books are the live derived inverse of `Book.author`.
- **`$ConversationBook`** = a `$Book` whose chapters are conversation turns (a discussion is a ConversationBook).

**The one mechanism — the heart of it.** `Subject.books`, `Author.books`, `Book.citedBy`, `Book.referencedBy` are *the same thing*: a **live derived inverse** of a forward reference (`Book.subject`, `Book.author`, `Book.cites`). The forward reference is authored — a book declares what it is about, who wrote it, what it cites. The inverse — what is about me, who cites me, my books — is **never stored, never a maintained back-index**: it is a pure reactive query over the book set, derived on read. That is SRT's essential semantics: a relation is directional data; its converse is computed, not kept.

**The load-bearing catch (question five).** A scope-tracked getter makes that inverse *live* — but only under conditions I've been burned by three times. (a) The set it scans must be **reactive state on a `$Chemical`**, not the plain `$Catalogue` (which is non-reactive — reads there are invisible to `$Scope`). So the canonical book set must live reactively on the `$Library` chemical, backed by `$Catalogue` for identity. (b) Renders are *not* scoped, so read-tracking alone does not subscribe a rendered inverse to changes; **liveness reaches a render only through the composition graph** — the write diffuses up `$$parent$$`, and the parent re-renders down. Therefore the `$Library` must be the **composition root / catalyst of every book**, so a write to any `Book.cites` diffuses up to the Library and re-renders the consumers of the inverse. The naive "`citedBy` scans all books, magically live" is dead without that root. A repaint needs a subscriber, and here the subscriber is the Library.

**What's genuinely hard / to decide:** the reactive↔symbolic bridge (one `$Chemical` per canonical `$ref`, backed by `$Catalogue` interning); the O(N) inverse scan and O(N²) all-inverses cost with broad invalidation on any `cites` change (memoize / index if it bites); Cover as base-class-view vs authored-child; and whether `$Chapter` is itself a `$Book` (fractal, matching `$Composition<T>`) or a distinct class. What $Chemistry already gives us for free: reactive derived getters, composition + `diffuse` propagation, the vertical `look` synopsis axis, the horizontal `perspectives` lenses (= the `..` catalogues), the `$` membrane, and the whole SRT reference layer already built. The missing piece is almost entirely the bridge and the Library-as-root discipline.
