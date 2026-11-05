# The Books Laid Out

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

**keywords:** register · books · addresses · stub · proxy · prove · drive · walk

---

***Fourteen books stand in the library at 2026-11-05, every one at its own address, and the prover beside this chapter walks to each of them in a real browser.*** Laid out in [Sprint 121](../projection/126-sprint-121--every-book-a-stub.md) on Doug's titles, which are his and not the team's; the synopses are proxies and stand until he replaces them. A stub is a cover, a synopsis and a table and nothing else, by his word.

## <a id="register"></a>The register

The name is the paren of the title and its slug is the address under `http://localhost:4343/inexplicable-phenomena/`; the display is the bracket.

| | name, address | display | folder | filed under | holds |
|---|---|---|---|---|---|
| 1 | Our Library, `/our-library/` | The Library of Subjectivity | `library/.subject` | Inexplicable Phenomena, itself | cover, synopsis, table, nine entries |
| 2 | Our Reference, `/our-reference/` | Subjective Reference | `library/.reference` | Inexplicable Phenomena | five chapters with the library's code beside them |
| 3 | Our Team, `/our-team/` | Our Team | `library/.identity/.subject` | Inexplicable Phenomena | stub |
| 4 | Dictionary, `/dictionary/` | Dictionary | `library/.subject/dictionary` | Inexplicable Phenomena | its word chapters |
| 5 | The Design, `/the-design/` | The Design | `library/.subject/.design` | Inexplicable Phenomena | its sketches |
| 6 | Chemistry, `/chemistry/` | Chemistry | `library/chemistry/.subject` | Inexplicable Phenomena | stub |
| 7 | Our Math, `/our-math/` | Subjective Mathematics | `library/mathematics/.subject` | Inexplicable Phenomena | cover, synopsis, table, four entries |
| 8 | Mathematical Reference, `/mathematical-reference/` | Referential Objectivity | `library/mathematics/.reference` | Mathematics | stub |
| 9 | Mathematical Design, `/mathematical-design/` | Subjective Design | `library/mathematics/.design` | Mathematics | stub |
| 10 | Mathematical Principles, `/mathematical-principles/` | Principia Veritatem Identificandi | `library/mathematics/.textbook` | Mathematics | stub |
| 11 | Mathematical Identity, `/mathematical-identity/` | The Biography of Subjective Identity | `library/mathematics/.identity` | Mathematics | stub, a Biography |
| 12 | Pharmacology, `/pharmacology/` | Pharmacology | `library/pharmacology/.subject` | Inexplicable Phenomena | stub |
| 13 | Philosophy, `/philosophy/` | Philosophy | `library/philosophy/.subject` | Inexplicable Phenomena | stub |
| 14 | Physics, `/physics/` | Physics | `library/physics/.subject` | Inexplicable Phenomena | stub |

Every book is by Our Team. A catalogue's table is two words a row, the entry by name and ▷ into the book; an entry carries the book's title, a way in and the book's synopsis imported. The way in is a bare link in the book's name and the ▷ is borrowed from Doug's own library: both are proxies until he gives the words.

## <a id="proven"></a>Proven

The prover, `03-the-books-laid-out--prove.mjs` beside this chapter, runs against the preview on 4343 with `node`, exits 0 only when nothing failed, and prints a line a book. It lands on all fourteen and requires 200, an open cover, an author link and a filed-under link; then it walks each catalogue as a reader would, clicking the running head to the table, clicking each row to its entry, following the way in to the book and finding the byline's way back.

Run 2026-11-05 against the bind of commit 654a7f2: 14 of 14 landed, the top's table turned in 1,315 ms with nine rows and Our Math's in 1,359 ms with four, every entry opened, every way in landed, every byline led back, 27 lines ok, 0 failures, exit 0. A second visit to a page in one browser session answers 304 rather than 200, and the prover takes either.

**One trap, so it costs the next drive a minute:** a parenthetical title is hidden, and a hidden element's `innerText` is empty, so a wait on the open page's title never resolves on the table of contents or the synopsis. A drive waits on `location.hash` and reads the visible text.
