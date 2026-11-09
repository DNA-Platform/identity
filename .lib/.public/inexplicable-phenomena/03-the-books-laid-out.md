# The Books Laid Out

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

**keywords:** register · books · addresses · stub · proxy · prove · drive · walk

---

***Eighteen books stand in the library at 2026-11-09, every one at its own address, and the prover beside this chapter walks to each of them in a real browser.*** Fourteen laid out in [Sprint 121](../projection/126-sprint-121--every-book-a-stub.md) on Doug's titles, which are his and not the team's, and four more in [Sprint 124](../projection/129-sprint-124--the-subject-of-arithmetic.md), Arithmetic under Mathematics with its project and its textbook, and the library of papers; the synopses are proxies and stand until he replaces them. A stub is a cover, a synopsis and a table and nothing else, by his word.

## <a id="register"></a>The register

The name is the paren of the title and its slug is the address under `http://localhost:4343/inexplicable-phenomena/`; the display is the bracket. A subject's own book says what it is about, and that About is what makes it the subject: the subject is never the book's title. Our Math is the book, Subjective Mathematics its display, and Mathematics what it is about, which is why the four books filed under Mathematics resolve to Our Math.

| | name, address | display | folder | about | filed under | holds |
|---|---|---|---|---|---|---|
| 1 | Our Library, `/our-library/` | The Library of Subjectivity | `library/.subject` | Inexplicable Phenomena | Inexplicable Phenomena, itself | cover, synopsis, table, nine entries |
| 2 | Our Reference, `/our-reference/` | Subjective Reference | `library/.reference` | | Inexplicable Phenomena | five chapters with the library's code beside them |
| 3 | Our Team, `/our-team/` | Our Team | `library/.identity/.subject` | Our Team | Inexplicable Phenomena | stub, an Autobiography |
| 4 | Dictionary, `/dictionary/` | Dictionary | `library/.subject/dictionary` | | Inexplicable Phenomena | its word chapters |
| 5 | The Design, `/the-design/` | The Design | `library/.subject/.design` | | Inexplicable Phenomena | its sketches |
| 6 | Chemistry, `/chemistry/` | Chemistry | `library/chemistry/.subject` | Chemistry | Inexplicable Phenomena | stub |
| 7 | Our Math, `/our-math/` | Subjective Mathematics | `library/mathematics/.subject` | Mathematics | Inexplicable Phenomena | cover, synopsis, table, six entries |
| 8 | Mathematical Reference, `/mathematical-reference/` | Referential Objectivity | `library/mathematics/.reference` | | Mathematics | stub |
| 9 | Mathematical Design, `/mathematical-design/` | Subjective Design | `library/mathematics/.design` | | Mathematics | stub |
| 10 | Mathematical Principles, `/mathematical-principles/` | Principia Veritatem Identificandi | `library/mathematics/.textbook` | | Mathematics | stub |
| 11 | Mathematical Identity, `/mathematical-identity/` | The Biography of Subjective Identity | `library/mathematics/.identity` | Mathematical Identity | Mathematics | stub, a Biography |
| 12 | Neuroscience, `/neuroscience/` | Neuroscience | `library/neuroscience/.subject` | Neuroscience | Inexplicable Phenomena | stub, Pharmacology until 2026-11-06 |
| 13 | Philosophy, `/philosophy/` | Philosophy | `library/philosophy/.subject` | Philosophy | Inexplicable Phenomena | stub |
| 14 | Physics, `/physics/` | Physics | `library/physics/.subject` | Physics | Inexplicable Phenomena | stub |
| 15 | Mathematical Library, `/mathematical-library/` | The Library of Mathematics | `library/mathematics/.library` | | Mathematics | stub, the papers referenced; the title his, chosen 2026-11-09 |
| 16 | Arithmetic, `/arithmetic/` | The Subject of Arithmetic | `library/mathematics/arithmetic/.subject` | Arithmetic | Mathematics | cover, synopsis, table, two entries; his paper, once Goldbach versus Gödel |
| 17 | Arithmetic Project, `/arithmetic-project/` | The Project of Arithmetic | `library/mathematics/arithmetic/.project` | | Arithmetic | stub, for its sprints and plans |
| 18 | Arithmetic Textbook, `/arithmetic-textbook/` | The Textbook of Arithmetic | `library/mathematics/arithmetic/.textbook` | | Arithmetic | stub, for its results |

Every book is by Our Team. Since 2026-11-05 the byline says all three, Author, About and Filed under, on Doug's *"The subject is not the title of the book, it is the subject of the book. Does it not say About Mathematics on the book? Fix that please"*: the About is drawn between the other two, only on a book that has one, and links to the book itself, the fixed point. Eight books have one: the six subjects' catalogues, and the two identity books, an autobiography being about its author and a biography about its subject. A catalogue's table is two words a row, the entry by name and ▷ into the book; an entry carries the book's title, a way in and the book's synopsis imported. The way in is a bare link in the book's name and the ▷ is borrowed from Doug's own library: both are proxies until he gives the words.

## <a id="proven"></a>Proven

The prover, `03-the-books-laid-out--prove.mjs` beside this chapter, runs against the preview on 4343 with `node`, exits 0 only when nothing failed, and prints a line a book. It lands on all fourteen and requires 200, an open cover, an author link, a filed-under link, and on the eight books that have one an About in the byline linking to the book itself, with no About on the other six; then it walks each catalogue as a reader would, clicking the running head to the table, clicking each row to its entry, following the way in to the book and finding the byline's way back.

Run 2026-11-05 against the bind of commit 654a7f2: 14 of 14 landed, the top's table turned in 1,315 ms with nine rows and Our Math's in 1,359 ms with four, every entry opened, every way in landed, every byline led back, 27 lines ok, 0 failures, exit 0. Run again the same morning against the bind with the About in the byline: 14 of 14 landed with the eight Abouts seen and the six absences, the top's table turned in 1,240 ms and Our Math's in 1,327 ms, 27 lines ok, 0 failures, exit 0. Run 2026-11-06 after Pharmacology became Neuroscience, the prover's list and About map renamed with it: 14 of 14 landed, Neuroscience about itself, the top's table in 1,339 ms with its row for Neuroscience opening and leading in, Our Math's in 1,320 ms, 27 ok, 0 failures, exit 0. A second visit to a page in one browser session answers 304 rather than 200, and the prover takes either. Run 2026-11-09 after Sprint 124's four, the prover's list, About map and walks extended with them and Arithmetic among the subjects a byline may file under: 18 of 18 landed, Arithmetic about itself, the top's table in 1,340 ms with nine rows, Our Math's in 1,332 ms with six, Arithmetic's in 1,343 ms with two, 35 ok, 0 failures, exit 0.

**One trap, so it costs the next drive a minute:** a parenthetical title is hidden, and a hidden element's `innerText` is empty, so a wait on the open page's title never resolves on the table of contents or the synopsis. A drive waits on `location.hash` and reads the visible text.
