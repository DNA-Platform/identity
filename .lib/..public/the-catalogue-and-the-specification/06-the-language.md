# The Language and What It Compiles Into

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

***This chapter replaces an earlier one that documented a notation Doug had already retired.*** **It is written for whoever implements or writes against this language next, including a session that has never seen it** — *and it is written at enumeration depth on purpose, because the previous notation was read three times in one afternoon by something that did not already understand it, and each reading produced a plausible language that was not the one.* **Doug:** *"You are not smart enough apparently to extrapolate so enumerate."*

---

## <a id="essence"></a>The essence, which is the thing to hold

***Authorship begins in a single act of self-representation and is extended only by delegation.***

**One book comes into being that authors itself.** *That is a being positing itself, and it is the only claim in the library that needs no authority behind it, because there is nothing above it to grant one.* Everything in the library is then attributed to that being. **And the being may represent itself more than once** — *a persona is a second representation of the same being* — **but a further representation cannot be claimed.** It has to be **catalogued by an author and authored by that author.** Vouched for, from above. ***Since 2026-09-25 in `..public`'s compiler, being catalogued by an author is the whole of the vouching*** — Doug: *"a book that is by it's subject, or catalogued by one is a potential author"*.

> ***Doug, 2026-09-18:*** **"Starting with a self-delegation that only happens once."** *And on the shape it makes:* **"It referentially colors the tree in an interesting way, including the tree that contains the authors."*

***That is the part worth keeping when everything else is forgotten.*** **There is no external registry of who may write.** *The permission is a region of the same structure it governs, grown from a single node that had to claim itself because nothing above it existed to do it for them.*

**And the catalogue is a tree while the topics are a free overlay.** *Two books may catalogue each other topically and neither is wrong — Peano arithmetic representing set theory in one frame and set theory representing Peano in another.* ***What keeps a library sound is not acyclicity. It is that every author descends from the one book that authors itself.***

---

## <a id="forms"></a>The forms

**`$[ ]` only ever REFERS. `[[ ]]` only ever ANNOTATES. And the side the stars stand on is the DIRECTION of the edge relative to the writing they are written in.**

```
[[ X ]]        this is titled X                      about this writing
[[[ X ]]]      this is named X                       about this spot
[[ X ]]**      this is subject X                     about this writing
[[ X ]]***     this is a catalogue of X              about this writing

  *[[ X ]]     this is authored by X                 about X
 **[[ X ]]     this is catalogued by X canonically   about X
***[[ X ]]     this is catalogued by X               about X

  $[ X ]       the address of X                      about X
```

***`[[ X ]]*` left the language on 2026-09-25, in `..public`'s compiler.*** *Doug: "if we decide that Subject collapses the Author syntax… We should be able to get rid of syntax."* **An author is a subject, and `*[[ X ]]` is the whole of the edge**, answered by nothing, so the postfix count of one stays empty and each answer carries the count of the link it answers: *"These don't line up… For things to line up."* **The star says which subject a link specifies** — one the subject who wrote it, two the subject it is filed under, three a topic — *"The star says it."* *The syntax as settled is in [Sprint 82](../projection/88-sprint-82--chapter-and-book.md#syntax); v1's compiler keeps the form.*

### <a id="words"></a>And every one of them may carry its words — `[ words ]( X )`

***The bracket is DISPLAY and the paren is the IDENTIFIER, on every form.*** **This chapter's first writing left that out, and it was never optional.** *Doug, 2026-09-18:* **"`**$[Author: Doug](Doug)*` says the text 'Author: Doug' is what I'll display for the url associated with Doug, the author identifier."** *And 2026-09-19, on finding the paren gone from the table above:* **"No language version ever gave anything one slot. It was always assumed."**

```
*[[ Author: Doug ]]( My Library Log )    authored by My Library Log; the page reads "Author: Doug"
**[[ Doug ]]( Dougs Library )            catalogued by Dougs Library; the page reads "Doug"
$[ the log ]( My Library Log )           the address of My Library Log; the anchor reads "the log"
[[ X ]]                                   without a paren, the words ARE the name
```

**The paren stands tight against the closing bracket and BEFORE any postfix stars** — *`[[ Doug ]]( Dougs Library )**`* — *and the tightness is the whole of what keeps `[[ X ]] (a remark in prose)` as prose.* ***Nothing in the brackets ever becomes a key.*** *The catalogue is asked for what is in the paren; what is in the brackets is what a reader sees, and a catalogue that keyed on it would be keying on presentation.*

***The stars count outward through widening relations*** — **one is the author, two is the canonical catalogue, three is a catalogue.** *That ordering is why the assignment changed: an earlier one had the author and the subject sharing a prefix and differing only in what they returned, so the syntax carried no distinction where the design had one.*

**On the left the edge points out** — *this writing is the source, X is the target.* **On the right it points in** — *X is the source and this writing is the target.* That is a rule that holds; *"prefix allocates, postfix returns"* never quite did.

**A worked pair:**

```tsx
<Subject>**[[ Math ]]</Subject>          this book stands under Math
<Topic>***[[ Algebra ]]</Topic>          and also under Algebra, topically
<Catalogues>[[ Algebra ]]***</Catalogues> this book is a topical catalogue of Algebra
```

### <a id="third-postfix"></a>`[[ X ]]***` is a proposal, and the fixture forced it

***A table has to NAME a book without CLAIMING its name.*** **`[[ X ]]` claims** — *so a catalogue listing a book that way collides with that book's own title, and the duplicate-title check fires, correctly.* The canonical relations answer with `[[ X ]]*` and `[[ X ]]**`; **a topic had no form to answer with at all**, so a topical catalogue could not corroborate anything. *Three prefixes and two postfixes was the asymmetry; this is the symmetry finishing itself rather than a new idea.* **Flagged for Doug rather than assumed.**

---

## <a id="structure"></a>What it compiles into

***The whole design turns on one move: every annotation is half of an edge, and both spellings normalise to the same edge.***

```
 **[[ X ]]   written in A    →   edge( subject, X → A )   asserted from A
  [[ A ]]**  written in X    →   edge( subject, X → A )   asserted from X
```

**Same key.** *So the structure is a map keyed by the edge, holding every assertion that produced it, with where each was written:*

```ts
Edge  = { relation, from: SpotId, to: SpotId, ends: Half[] }
Edges = Map<`${relation}:${from}:${to}`, Edge>
```

***That single map answers three questions at once:*** **two ends** — the edge is whole and both sides agree; **one end** — a claim nothing corroborates, reportable at the end that made it *and* the end that should have answered; **two outgoing edges of a tree relation from one book** — a contradiction.

### The five layers, each because a check needs it

**1 · ASSERTIONS — flat, with provenance.** *A fault with two ends must be reported at BOTH, or an author is sent to the file that is correct. That happened, and it cost an hour.*

**2 · SPOTS — keyed by where they stand, never by name.** *Doug:* **"the name is not an identifier for the book."** *A book renames without a single edge moving.* **The apparatus speaks for the book; a numbered chapter speaks for itself** — *found by building the fixture, where a catalogue's corroborating half written in its table was attributed to the table-as-a-writing and every edge in the library came out a half-claim.*

**3 · NAMES — a multimap, deliberately.** ***It must not be the deduplicating structure.*** *An earlier writing keyed cards by title in a plain `Map` and six books silently became five: the collision was ABSORBED by the data structure and surfaced three files away as a table complaining about a book that was standing right there.* **A structure that cannot represent the fault cannot report it.**

**4 · RELATIONS — derived views, one shape per check.**
```ts
authorOf   Map<SpotId, SpotId>          a function
subjectOf  Map<SpotId, SpotId>          a function; the library has none
topicsOf   Map<SpotId, Set<SpotId>>     a relation; cycles are fine
lists      Map<SpotId, Map<SpotId, Listing>>
```
*Different relations get different TYPES so a cycle check cannot be run on the one where cycles are allowed.*

**5 · THE COLOURING — one flood, and it is the interesting pass.** *Seed with the origin. Walk DOWN the canonical catalogue, admitting a child* **whose catalogue is an author** — *the delegation rule as an admission test; its second half, "and its author is that same catalogue", left `..public`'s compiler on 2026-09-25 with Doug's* *"a book that is by it's subject, or catalogued by one is a potential author"*. **One breadth-first walk, linear.** *Every book's author must land in the resulting set.*

***And everything above the boundary is strings; everything below is ids.*** **Resolve once, at the edge of the parse, and no check ever compares text again** — *which retires the whole apostrophe, entity and casing family of fault in one decision.*

---

## <a id="faults"></a>The faults, named in the library's own words

> ***Doug:*** **"I like your data structure but you have to map them to errors in the semantics of the actual framework. Duplicate title, missing this, no catalogue for this."**

***The data structure is the compiler's business.*** **Nobody debugging a cover should have to hear the word "edge."** *Each fault names something a person could say about their own library without knowing this code exists, and it stands where a compiler puts its error code so an editor's problem matcher reads it.*

| fault | what a reader is holding |
|---|---|
| `MALFORMED-ANNOTATION` | brackets that do not balance, stars on both sides, or an author answered — `[[ X ]]*` is not the language |
| `NO-TITLE` · `DUPLICATE-TITLE` | a book with no name, or one name on two books |
| `UNKNOWN-REFERENCE` | `$[ X ]` naming nothing the library holds |
| `NOT-LISTED` | a catalogue that does not answer for what stands under it |
| `NO-LIBRARY` · `TWO-LIBRARIES` | no root, or more than one |
| `CIRCULAR-CATALOGUE` | a ring of books that reaches the library from nowhere |
| `TOPIC-IS-CATALOGUE` · `NO-SYNOPSIS` | a topic that is the canonical catalogue; a listing that says nothing |
| `NO-AUTHOR` · `NO-SELF-AUTHOR` · `TWO-SELF-AUTHORS` | nothing grounded, or two beings in one library |
| `MAY-NOT-AUTHOR` | an author that was never vouched for |

***Two ways to fail, one per side.*** **A reference fails by ABSENCE** — *a name the library does not hold.* **An annotation cannot fail that way**, *because making a name is how a library comes to hold anything;* **it fails by COLLISION.** *Only the first half existed until now.*

---

## <a id="proof"></a>What has been run

***Seven cases against a built fixture, 2026-09-18.*** **A well-formed library where a persona writes a paper; a persona no longer catalogued by its author; a second book authoring itself; a library that stops answering for a book it holds; two books answering to one name; a form the notation does not have; and two books cataloguing each other topically.** *Six refuse with the fault they should. The seventh is well-formed, which is the Peano case, and it is the one that proves the overlay is genuinely free.*

***And one of the seven failed for the wrong reason first***, *which is the only thing that found a bug of mine: a patch with an unescaped `\n` had left the postfix capped at two stars, so `[[ X ]]***` was being read as a subject with a stray star trailing it.* **A fixture that only ever passes teaches nothing; the value was entirely in the case that broke unexpectedly.**
