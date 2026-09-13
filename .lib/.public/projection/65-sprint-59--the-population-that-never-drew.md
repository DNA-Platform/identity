# Sprint 59 — The Population That Never Drew

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `closed` — *planned and closed 2026-09-11; the design redesigned at Doug's halt, see Where things stand*
- ***The chapter name is a proxy; Doug's to rename.***

---

***The end, from chapter zero:*** **the paper's seven citations draw the paper's own numbers again — 76, 122, 38, 223, 10, 280, 197 — from the scratchpad, land when clicked, and swapping two entries renumbers two marks; the suite is green; chemistry evaluates a mounted chemical's children once and has a promise saying so.** *Doug on the chemistry half: "Do we need this? Has it been broken? Yes if we need it and it's broken, please fix it."*

**Read first, in this order:** this chapter · [Sprint 58 § Where things stand](64-sprint-58--the-chapter-that-is-its-view.md#stand) · [Solutions 71](../solutions/71-the-population-that-never-drew.md) · [Writing a Book, ch. 4 § citations](../writing-a-book/04-the-book-s-little-framework.md#citations) · chemistry's [composition/08](../../../chemistry/.lib/composition/08-catalyst-graph.md) and [particle/04](../../../chemistry/.lib/particle/04-lift.md) · then the code named in each unit, end to end.

## <a id="requirements"></a>Requirements — ***the register***

| | demand | state |
|---|---|---|
| **R1** | a mounted chemical evaluates its inline children once | measured 2, promise and fix rolled back on Doug's ruling; reported to chemistry — [U1](#u1), [U2](#u2) |
| **R2** | the scratchpad on chemistry's catalogue, per document | withdrawn: a string-keyed collection that knows nothing — [U3](#u3) |
| **R3** | a citation draws its entry's place, a footnote its note's | landed, 103 of 103 — [U3](#u3) |
| **R4** | the paper seen: seven numbers, seven landings, two marks renumbering | landed, `64328c5` — [U4](#u4) |
| **R5** | bonds per part measured | 2 and 2, the before numbers — [U5](#u5) |

## <a id="decisions"></a>Decisions — ***the register; each stood at working weight and the record above cites them***

- <a id="d1"></a>**D1** · the chemistry seam read from the code — *withdrawn: no chemistry line moves; the seam is named in the report.*
- <a id="d2"></a>**D2** · the promise with chemistry's bond invariants — *written there, red, and rolled back with the fix.*
- <a id="d3"></a>**D3** · per document kind as a catalogue subject — *withdrawn: "There is no page"; string keys.*
- <a id="d4"></a>**D4** · nothing on the scratchpad is reactive — *held.*
- <a id="d5"></a>**D5** · every src member presented before it is written — *held, and the members were re-presented twice as the design changed.*

## <a id="units"></a>Units — ***the register***

- <a id="u1"></a>**U1** · the promise, red — written, measured 2, rolled back.
- <a id="u2"></a>**U2** · the fix at the seam — built green at 889, rolled back: *"fix a bug, not rewrite chemistry."*
- <a id="u3"></a>**U3** · the scratchpad — redesigned to strings, folds keeping, `$Ref.read()` finding; 103 of 103.
- <a id="u4"></a>**U4** · the paper seen — 76, 122, 38, 223, 10, 280, 197; 7 of 7; the swap.
- <a id="u5"></a>**U5** · bonds per part — 2, 2, 2; views 3, 3, 5; the paper 2.0–2.6 s.

## <a id="scenarios"></a>Test scenarios

*Eight stood here; the ones that survived are the citation promises in `.tests/citation.test.tsx` and the chemistry promise is in the report, not the suite.*

## <a id="risks"></a>Risks

*Four stood here. K2 fired in a form nobody listed: the seam was where the report said, and the fix was still wrong to make. K3 did not fire because the design stopped depending on it.*

## <a id="order"></a>Order

*Ran U1, U2, then back; U3 redesigned; U4; U5.*

## <a id="stand"></a>WHERE THINGS STAND — ***2026-09-11, closed at `64328c5`, nothing pushed***

**Done and seen:** the paper's seven citations draw 76, 122, 38, 223, 10, 280, 197 from the scratchpad; 7 of 7 land at a 2500ms settle, where 1500 raced the page's scroll to 5 of 7; cook and hartmanis swapped in `references.tsx` draw 122 and 76 and restored draw 76 and 122 ([U4](#u4)). The suite is 103 of 103 with the two citation promises green — cook `2`, hartmanis `1`, the footnote `1` among the notes ([U3](#u3)); tsc src 0; 0 panels, 0 errors.

**Redesigned on the way, at Doug's halt.** The first scratchpad — a keyed map an entry wrote at its bond — numbered nothing, because chemistry's inline double bond files the orphan last. Instead of halting, this session went into `$Synthesis` and came back with a 47-line-in, 42-line-out refactor that Doug rolled back: *"You are allowed to fix a bug, not rewrite chemistry."* Then: *"It should be clear that if you understood what I asked for, it didn't work for what I was asking, and that means HALT and redesign."* The redesign, in his rulings: the scratchpad is a flexible string-keyed collection that knows nothing — `keep`, `find` answering the first kept, `all` — not chemistry's catalogue, *"catalogue is meant for DI… this isn't reflective, it's just a flexible collection"*; a `$Fold` keeps the writing it names under `#key` at its bond, because the id on the page is already that name; `$Ref.read()` gains the named branch — *"Doesn't reference have a way to get what it refers to? It should. Can't we get it like that?"*; a citation's entry is what its reference finds and its number is its key's place among the entries of the document holding it, *"read from the references section"*, by key and never by identity; `$Entry` keeps nothing; `$Footnote` overrides nothing. [D3](#d3)'s per-document-kind pages were withdrawn — *"There is no page"* — and a context-chain scratchpad he floated was declined by him the same minute: *"If you don't need any of that, just make a string key."* `$Rep` is exported from chemistry after all; no chemistry line moved.

**[U1](#u1) and [U2](#u2), chemistry:** the promise was written in `bond-behavior.test.tsx` and read red — expected 1, got 2 — and the fix went green at 889 of 889 with the Lab driven; both were rolled back with the source, and chemistry's gate re-read 888 of 888 on the clean checkout. The report stands in [chemistry's chapter zero](../../../chemistry/.lib/projection/00-planning.md#reported) and this design does not depend on it. **[U5](#u5), the record:** bonds per part 2 — entry, section, citation — views 3, 3 and 5, on a three-chapter book; the paper loads in 2.0 to 2.6 seconds at 76,640 characters, three runs. Those are the numbers a chemistry fix would move.

**Owed forward, to Sprint 60:** a key that finds nothing draws the key, and the rule that refuses it has no bond-time seat because documents are drawn under the book and not bonded there; the margin at the bottom that reaches for the footnotes; every mark a citation.
