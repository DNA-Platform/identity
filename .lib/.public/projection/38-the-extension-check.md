# The Extension Check

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **status:** a decision record — measured 2026-09-03, awaiting Doug's ruling on the staging

---

## The ruling that ordered it

***Doug, 2026-09-03: "Doesn't need to extend word. It can have type word. It's writing. In general, we shouldn't really be extending anything. Do an extension check. See what breaks if we free up base types and have a flat hierarchy where everything extends writing."***

**Read generalized: the CLASS hierarchy of kinds flattens; the TYPE hierarchy is the record of kinship.** A Title stops *being* a Paragraph by parentage and starts *standing as* one because `$TypeOfTitle` descends from `$TypeOfParagraph` — which the type classes already record. This is [Shells Over Types](../designing-inexplicable-phenomena/14-shells-over-types.md) taken to its limit.

## The method

Four readers swept every `extends` edge and every `instanceof` in `src` — writing, book, reference, and the standing mechanism itself — each edge judged: what does the child ACTUALLY use from its parent, and could a carried type confer it. Every verdict below is from that reading, not from doctrine.

## The verdict map

**IS MACHINERY — keeps extending, the ruling keeps it.** The seven levels (`$Letter`…`$File`, each on `$Composition`), `$Composition` itself, the annotation layer (`$Annotation`/`$Type`/`$Trait`), the ENTIRE `$TypeOf*` hierarchy, and every specification chain. *"Free up base types" means freeing the levels from kinds extending them — not dissolving the levels.*

**FLATTENS CLEAN TODAY — nothing needed.** `$References` (its type's `specifically()` already confers `$pid` and `persist` — **the in-repo model for type-conferred bond residue**), `$Cell` (the seat machinery confers its level), `$Path` and `$Catalogue` (already flat), `$Reference` off `$Annotation` (two field defaults), `$Book` off `$File` (uses nothing File-specific), `$Ref` (its own `reduce` rides the kept composition machinery), `$Bookmark`/`$PageFold` (onto `$Reference`).

**NEEDS THE ONE MECHANISM.** `$Title`, `$List`, `$Table`, `$Phrase`, `$Cover`, `$Synopsis`, `$TableOfContents`, `$Index`, `$Chapter`, `$ReferenceCard`, `$Highlight` — **every one waits on the same change and only that change.**

## The one mechanism

**`$Lib.$$`'s `stands()`** judges kinship by **canonicalForm CLASS parentage** — `canonicalForm.prototype instanceof asked`. Flatten the kinds and every subsumption ask goes false: *a section rejects its own title, a document rejects its tables, a book rejects its cover.*

The fix, measured as one mechanism and not eleven:

1. **`stands()` judges in the TYPE hierarchy** — carried/worn type `instanceof` the asked kind's TypeOf (`$TypeOfCover instanceof $TypeOfChapter`), needing one kind→type map (the inverse of `canonicalForm`; the `[cache]` names and the `prints` registry already show its shape).
2. **Conferral makes the ASKED level and binds** — rather than `named.canonicalForm` — since a flat kind has no `parts()` of its own. *The bind machinery is ready:* `$Composition.parts()` already prefers the worn `inside.type` for `writtenAs` and `reduce` when bound.
3. **`former()`'s shape check gets the same remap.**

**A second, smaller mechanism dissolves the nine `$$X` reference classes**: each body is only a bond plus `$$(await super.read(), $X)`. Give the reference TYPE a target kind — its specification already pins the code (`'Wd:'`, `'Sn:'`) and `prints` maps code→class — and ONE generic `read()` certifies. Rehydration (`prints` consumed in `Catalogue` and `References`) then keys code→type stamped on a bare `$Reference`.

## The pattern is half-built already

- `$ListTrait` and `$TableTrait` **are** the flat form working: list-ness and table-ness worn as types on any composition.
- `SectionSpecification.$opensWithTitle` already checks **the type**, not the class.
- `$Table`/`$List` already stamp `this.carried ?? default`.
- `seat()` already confers a level on the level-free `$Cell`.
- `$TypeOfReferences.specifically` already carries bond residue — the model for moving `$pid ??=` residues off flattened kinds.

## The residue that must relocate

- **Level frame dresses** — `$Document`'s `Output` wrap, `$File`'s `Columns` — must ride the type chain or route through the shell; `$File.frame`'s `this.constructor === $File` guard already anticipates this.
- **Direct level-member access** — `chapter.sections`, the duck-typed `references` reach in `$Reference.focus` — vanishes on flat kinds; call sites go through `$$(x, $Document)` or the getter hoists.
- **`instanceof $Synopsis`/`$Index`-style finds** in `$Book` and its spec become exact-kind `$$` asks — which survive on `stands()`'s first branch unchanged.
- **`parts()`'s numbering flag** (`this.constructor !== $Composition`) flips for a kind collapsed to a bare bound composition.

## The staging proposed, his to rule

1. **The mechanism first, behind the standing suite** — `stands()` by type chain + the kind→type map, landed while every kind still extends, so 569 promises watch the mechanism say the same answers the class chain says.
2. **Then kinds one at a time, cleanest first** — `$Phrase` (a type stamp and one field), then `$Cover`/`$Synopsis`/`$TableOfContents` (pure stamps), then the arrangements, then `$Chapter`/`$Index` with their frame-dress relocation.
3. **The nine `$$X` classes dissolve last**, with the generic certifying read.

**What is deliberately NOT proposed:** dissolving the levels, the type hierarchy, or the specification chains — the ruling's own words keep them as the record of kinship.
