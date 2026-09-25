# Collection

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- ***`Collection` and `Compilation` are Doug's names — "Collection is fine though generic." `ChemicalCollection`, a placeholder beside them from C1, went in C6 when the contents moved onto the core.***

---

**The modification core of the library, in `library/..public/package/src/utilities/Collection.ts`: a collection whose every change is cited to its author, and a compilation that answers one value compiled from what its authors set.** Doug, 2026-09-24: *"Let's build a collection that does: collection.change(type,author,...values). Then wrapping that, you can also do: collection.add(author,value, side == 'right'), collection.remove(author,value), collection.replace(author,old,new), collection.revert(author)… And then you should be able to iterate through the values of the collection. That can be the key collection and it is instance based. Then we build a Compilation. It would have one of those in, and it would just have: compilation.set(author,value), compilation.revert(author). And those, if build right, should represent the core abstraction."*

**Why it exists.** A writing's surfaces — its classes, its layers, its id — must let any annotation's effect be taken back exactly, and a set or a plain field cannot say who put what there. *"The contents collection, the classes collection, the container collection — they all need citation. The annotation that made the change and what it was. That way, each one can have the annotation's effect removed from it."* And the author is any instance, *"so that it's more loosely coupled"*: the utilities know nothing of writing.

## What it is

### `Collection<T>`

| member | what it is | from |
|---|---|---|
| `Author` | any instance; a type named for his word, so a variable is named after its type as the coding style asks | *"any instance can serve as the author"* |
| `Side` | `'left'` or `'right'`, the two places `change` puts values | his `side == 'right'` |
| `change(type, author, ...values)` | the one door every modification goes through: `'left'` and `'right'` add, then `'remove'`, `'replace'` and `'revert'` | his |
| `add(author, ...values)` | several values at once for one author, appended | his; *"have add be a synonym for append (calls off to it) which makes it simple to understand"* |
| `append(author, ...values)`, `prepend(author, ...values)` | several values at the end, or at the front, in their order | *"Switch to append and prepend… append and prepend go together, add / remove go together, we intersect on add, and that is okay"* |
| `remove(author, value)` | every entry holding the value goes | his |
| `replace(author, value, replacement)` | the replacement stands where each entry holding the value stood | his `replace(author,old,new)`, the variables named by the coding style |
| `revert(author)` | everything that author changed is taken back | his |
| iteration | the values, in order | *"iterate through the values of the collection"* |
| `at(index)` | the value at an index, read through iteration | Doug, 2026-09-24: *"You can add an at(index) too… The annotation collection should support that right?"* |
| `after(value)` | a plain array of what stands after a value, in order, read through iteration; it throws, through `$check`, for a value the collection does not hold | Doug: *"const annotations = writing.annotations.after(this) — Interact with writing.annotations as you loop through your annotations — After throws if this isn't in the collection"* |
| `@represented()`, `toString` | its phenotype and never its genotype: the values, each followed by a comma as the genome's code is, and nothing of the changes that made them — so two collections read the same exactly when their values are, and a change that ends where it began is not news to chemistry | *"put represented on those and implement the toString… Report phenotype in represented, not genotype"* |
| `find`, `contains`, `containsOne` | E65's finding, by type: every value that is an instance of the given's class, subclasses included, from any form of the class; whether one is there, halting at the first; whether exactly one is | *"adapt my design to the type-based operations too"* and *"I didn't add anything for finding. This was the modification core of Collection<T>"*; the two questions ruled 2026-09-21 |

**What makes it exact: a collection's values are its changes applied in order.** Every change is kept with its author, and `revert` drops one author's changes and applies the rest again from the start. So a revert is exact however changes interleave — what the author added goes, what it removed or replaced comes back, and no other author's change is touched:

| the changes | then | the values |
|---|---|---|
| A adds `span`, B removes it | revert B | `span` |
| A adds `span`, B removes it | revert A | nothing — B's removal finds nothing to take |
| A adds `span`, B replaces it with `section` | revert A | nothing — `section` stood only in `span`'s place |

**Three consequences, each a promise.** *An author that changes again after reverting stands behind every author that did not*, since its changes now come last — which is why a definition reverts every author before any acts again, so that the order of the changes is the order of the acting. *`remove` and `replace` go by identity and take every entry holding the value*, so a class two authors both added is gone when one removes it. *A collection keeps every change until its author is reverted*: an author that changes again and again without being reverted grows the record, which a definition never does, since it reverts every annotation each pass and a writing sets its own entries once.

**Modification goes by instance and finding by type, and they are not one member.** In the layers a component is itself the value, so a type handed where a value goes would be ambiguous there. A removal by type is a `find` and then a `remove` of each instance found, each cited to its author.

### `Compilation<T>`

| member | what it is | from |
|---|---|---|
| `set(author, value)` | the author's value, set last, so it is answered until another author sets; an author setting again takes back its earlier value and is answered again | his |
| `revert(author)` | the author's value is taken back, and the value set before it is answered | his |
| iteration | at most one value, the last set | *"I meant the last one set. We want competition. We are going to give ordering to annotations, and with that, last set is winning"*; read by iterating, as a collection is, so no reader was named |
| `@represented()`, `toString` | the value it answers, or nothing, and nothing of the values set before it | *"For compilation it only needs to report its last value"* |

**It holds a `Collection` of citations** — who set a value, and what — *"It would have one of those in"*. Setting takes back the author's earlier citation and adds the new one last, and the last citation is the one answered: authors compete, and in a definition the annotation that sets last wins. *Which annotation that is belongs to the ordering Doug is giving annotations; the first draft of this class answered the first author's value, on a reading of "front citation" that he corrected the same day.*

### The placeholder, gone

**`ChemicalCollection` stood from C1 to C6**, today's class under a placeholder name on Doug's choice, holding up the contents and the annotations while they moved onto the core: E65's operations by type, making each chemical from a given, parented to the writing. Annotations moved in C4 and the contents in C6, as `Contents` beside it in Writing's file, whose `append` and `prepend` make and parent each chemical from its given, and whose `add` appends, as E65's add goes to the end of source. **E65's `ensure`, and its `replace` and `remove` by type, went with it on his word** — *"We can remove that for now. I think we have built something that doesn't need it"* — since the core replaces by instance and a removal by type is a `find` and a `remove` of each chemical found.

## How it is extended

**Through `change`, and nowhere else.** Every modification arrives there, so a subclass that must batch, refuse or watch changes overrides one method — — *"annotations should still be a cited collection though it might need to override core functionality to make that work."* **Annotations, as built in C4, overrides iteration rather than `change`**: every change applies to the core at once, so the genome's code is the live membership and a method's change wakes the writing, while iteration — and with it `find`, which reads through iteration — answers what the last define established. `define` reads the live membership from the core's `values` — protected since 2026-09-25, with `changes` and `apply`, since *"private everything so hard to subclass"* — to establish it. A subclass spells the kinds of change as `Parameters<Collection<T>['change']>` until the kinds have a name.

**What a caller never does.** Changes a collection under another author's name, since the citation is the whole of what `revert` trusts. Keeps a reading of it as a field, which is a cache. Makes one in a chemical's field initializer, which every mount of the class would share, since a per-mount derivative reads its template's fields; a writing makes its collections in its bond.

**What it does not do yet, on purpose.** It makes nothing: a chemical made from a given is the chemical collections' job. It gives a component made by a function no identity of its own: `String` of a function is its source text, so two anchors made by one line read the same, and a collection of layers holding them would not say which it holds — since C5 the writing's layers are a Collection, so the limit is real in principle, though nothing reads their code today — chemistry records no read of a writing while it draws — and an identity is designed when something does. And saying its phenotype does not by itself quiet a definition: a scope that reads a collection between a revert and the re-adding sees the values in between, which is why [Sprint 81](../projection/87-sprint-81--reference-and-referent.md#redesign) holds that what chemistry compares must be the state cached after a definition.

## The promises

**Nineteen in `.tests/collection.test.tsx`, over plain classes as authors — `Editor`, `Reviewer`, `Proofreader` — and plain chemicals as values.** The core's eighteen: values iterate in the order the changes put them, `append` on the right and `prepend` on the left, `add` appending; every change goes through `change`, so a subclass sees all five kinds in one place; `remove` takes a value away wherever it stands and `replace` puts another where it stood; `revert` takes back everything one author did and nothing anyone else did; a value stays gone when what added it is reverted after another removed it; a value comes back when its remover is reverted; a replacement goes when what it replaced is reverted; an author that changes again after reverting stands behind the rest; values go by identity and any instance can author; a collection says its values and nothing of how they got there; **rendered**, a chemical holding one draws nothing when a method adds a value and takes it away again, and twice when a method adds one, the measured cost of a change; `after` answers what stands after a value and throws for one it does not hold; an author that changed nothing and a value that is not there change nothing; `find` answers every instance of a class, subclasses included, from any form of the class; `contains` and `containsOne`; a compilation answers nothing until an author sets and then the last value set; an author that sets again wins; a compilation says the value it answers and nothing of those set before it; `revert` answers the value set before. The placeholder's twelve went with it in C6.

## The gate

**2026-09-24, commit `e1e3836`:** typecheck 0 errors; quick build fresh; 148 of 148 across eleven files, fifteen of them new; the package's root configuration reports the same 49 errors at HEAD and after, all of them the `@/` alias it does not carry. **Commit `f0c2eda`, the same day:** both classes represented by their phenotype; typecheck 0; 151 of 151, three of them new. **Commit `d850ceb`:** a compilation answers the last value set; 151 of 151, its four promises rewritten. **Commit `76f9b1b`:** the writing's classes and layers are Collections and its id a Compilation, every annotation's erase `revert(this)`; 161 of 161. **Commit `862a896`:** the contents on the core as `Contents`, and the placeholder gone; 149 of 149. **Commits `338bf35` and `5653b28`:** `at` and `after` on the core, both reading through iteration; 158 of 158.
