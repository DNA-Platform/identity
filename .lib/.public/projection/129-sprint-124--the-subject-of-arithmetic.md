# Sprint 124 — The Subject of Arithmetic

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***Opened 2026-11-09 at Sprint 123's close, on his word that it is time for the next sprint and his instruction to scaffold Arithmetic under Mathematics: a folder for the subject that is his paper, once Goldbach versus Gödel, with its subject book, its project book and its textbook, and a library book in Mathematics for the papers referenced. His requirements are direct and in his words, so the sprint runs as `/ce-work` from them; what he left to think about, how the notes on Goldbach versus Gödel become summaries here, is his and waits.***

---

## <a id="where"></a>Where things stand — 2026-11-09

**Next action: his thinking on how the notes on Goldbach versus Gödel become summaries here, which he said he would do as we worked, and his word on the project book's type under [Open for his word](#open). The structure stands and can be walked; nothing is built until he says what goes into it.** U1 to U6 built, bound and proven 2026-11-09, the same day he asked; the library book's title ruled his the same day, [D2](#d2).

**Done, 2026-11-09.** Four stub books written by hand in Sprint 121's form, each a `.book.tsx` re-exporting the library's book class, a cover, a one-paragraph proxy synopsis that is Parenthetical, and a table of its three faces: The Subject of Arithmetic (Arithmetic) at `library/mathematics/arithmetic/.subject`, About Arithmetic, filed under Mathematics, its table listing its two books with an entry chapter each; The Project of Arithmetic (Arithmetic Project) at `arithmetic/.project` and The Textbook of Arithmetic (Arithmetic Textbook) at `arithmetic/.textbook`, each filed under Arithmetic; The Library of Mathematics (Mathematical Library) at `library/mathematics/.library`, filed under Mathematics, its title the proxy of [D2](#d2). Our Math's table gained two rows and two entries, `5-mathematical-library.tsx` and `6-arithmetic.tsx`, each importing the book's synopsis. The register in [The Books Laid Out](../inexplicable-phenomena/03-the-books-laid-out.md) gained rows 15 to 18 and the prover beside it the four books, Arithmetic's About, Arithmetic among the subjects a byline may file under, and Arithmetic's catalogue as a third walk.

**Verification.** Bound from `library/.public/.binding`: 18 books, 91 keys, every reference resolves, every book reaches the library and the author; Arithmetic → `/arithmetic` and 4 chapters, Arithmetic Project → `/arithmetic-project` and 2, Arithmetic Textbook → `/arithmetic-textbook` and 2, Mathematical Library → `/mathematical-library` and 2, Our Math → 8; 18 pages drawn and 19 read back, 6 stale files removed, 10.5 s. Proven by the prover against 4343: 18 of 18 landed, Arithmetic about itself and filed under Our Math, its project and its textbook filed under Arithmetic with no About; the top's table turned in 1,340 ms with 9 rows, Our Math's in 1,332 ms with 6, Arithmetic's in 1,343 ms with 2, every entry opened, every way in landed, every byline led back; 0 failures, exit 0.

**How to see it.** `npm run preview -- --port 4343 --strictPort` from `library/.public/.binding`; `http://localhost:4343/inexplicable-phenomena/our-math/` and its table's last two rows, or `/arithmetic/` directly, its byline Author Our Team, About Arithmetic, Filed under Subjective Mathematics, its table turning to the project and the textbook. The prover: `node library/.public/.lib/inexplicable-phenomena/03-the-books-laid-out--prove.mjs`, exit 0 when nothing failed.

**Blockers.** None. The questions below are his and block nothing already built.

**Wrong turns.** None this sprint; the form was Sprint 121's and held at the first bind.

## <a id="words"></a>His words, verbatim

*"Okay time for the next sprint. In math, I think we are going to want a folder for arithmetic, and this will represent the subject of arithmetic, a paper that I will be working on. It is the new name for Goldbach versus Godel. Let's scaffold the .subject book for The Subject of Arithmetic and name it arithmetic as a title, and then scaffold called The Project of Arithmetic, and title it arithmetic-project, and that will be a place where we keep track of sprints and plans and what not. We are going to need something to keep track of results and perhaps that should be the .textbook for arithmetic so scaffold The Textbook of Arithmetic called arithmetic textbook, we should have a .library book in Mathematics, so we can catalogue the papers that we reference in one place. Okay get that started, and we can see where we are. We will have to start turning notes about Goldbach versus Godel into summaries in this library. I will think about how to do that as you work"*

## <a id="objective"></a>The objective

Arithmetic stands under Mathematics as a subject of its own, the paper he is working on under its new name, with the three books he named and the library of papers beside it in Mathematics, every one a stub in the form every book of this library already takes, so that the structure can be seen and walked before anything is written into it.

## <a id="decisions"></a>Decisions

- <a id="d1"></a>**D1. The names are his, read by the convention of Sprint 121.** A title is a display in the bracket and a name in the paren, and a name is title case, never the slug, his ruling of 2026-11-04. So The Subject of Arithmetic (Arithmetic), his *"name it arithmetic as a title"* read as Sprint 121 read *"Our Math as the title"*; The Project of Arithmetic (Arithmetic Project), his *"arithmetic-project"* in title case; The Textbook of Arithmetic (Arithmetic Textbook). The subject's About is Arithmetic, which is also its name, so the About is the book's own fixed point, as Our Team's is.
- <a id="d2"></a>**D2. The library book is The Library of Mathematics (Mathematical Library), on his word.** He named the folder, `.library`, and what it is for, the papers referenced across mathematics, and no title; by the pattern of his three it was built as The Library of Mathematics (Mathematical Library) and put to him the same day with two alternatives, The Papers of Mathematics (Mathematical Papers) and The Mathematical Library (Our Papers). He chose the first, 2026-11-09, so the title is his and no longer a proxy.
- <a id="d3"></a>**D3. A stub is Sprint 121's stub, by hand.** A `.book.tsx` re-exporting the library's book class, a cover with title, author Our Team, subject and About where the book is a subject, a one-paragraph proxy synopsis that is Parenthetical, a table of the three faces; no chapters, no function, his rulings of 2026-11-03, *"the stub books shouldn't have chapters"* and *"Do by hand"*.
- <a id="d4"></a>**D4. Arithmetic is a folder under Mathematics with the subject's dot folders inside it.** `library/mathematics/arithmetic/.subject`, `.project` and `.textbook`, so a subject's books stand beside its catalogue as Mathematics' do, three folders up from the reference instead of two; the library of papers at `library/mathematics/.library`, a book of Mathematics. Our Math's table lists both as rows with entries, as Sprint 121's catalogues list their books.
- <a id="d5"></a>**D5. The register and the prover take the four.** The branch library's register of this library's books in [Inexplicable Phenomena](../inexplicable-phenomena/.cover.md) gains a row each, and the prover beside it lands on each, so a book he can prove is there is the demo, as it was in Sprint 121.

## <a id="units"></a>Units

- <a id="u1"></a>**U1. The Subject of Arithmetic.** *Mechanism:* the catalogue stub at `library/mathematics/arithmetic/.subject`, About Arithmetic, filed under Mathematics, its table listing its two books with an entry chapter each. *Demo:* `/arithmetic/` on 4343, the byline Author Our Team, About Arithmetic, Filed under Mathematics, its table turning to each entry and each way in landing.
- <a id="u2"></a>**U2. The Project of Arithmetic.** *Mechanism:* the stub at `library/mathematics/arithmetic/.project`, filed under Arithmetic; where the sprints and plans of the paper will be kept. *Demo:* `/arithmetic-project/` 200, its byline leading back to Arithmetic.
- <a id="u3"></a>**U3. The Textbook of Arithmetic.** *Mechanism:* the stub at `library/mathematics/arithmetic/.textbook`, filed under Arithmetic; where the results will be kept. *Demo:* `/arithmetic-textbook/` 200, its byline leading back.
- <a id="u4"></a>**U4. The library of papers.** *Mechanism:* the stub at `library/mathematics/.library`, filed under Mathematics, titled by D2's proxy. *Demo:* its page 200, its row in Our Math's table.
- <a id="u5"></a>**U5. Our Math takes the two.** *Mechanism:* two rows in Our Math's table and two entry chapters importing the books' synopses, in the form of its four. *Demo:* Our Math's table turning to each and leading in.
- <a id="u6"></a>**U6. Bound, registered and proven.** *Mechanism:* the register's four rows and the prover's list and About map; the library bound from `library/.public/.binding`; the prover run against 4343. *Demo:* every book landed, the two tables walked, 0 failures.

## <a id="open"></a>Open for his word

- Whether The Project of Arithmetic is a book of its own type: his reference manual holds the Project Manual, the project book the importer writes for a Claude project, which catalogues a project's files and conversations and is not a place for sprints and plans; a project that keeps sprints and plans is the shape of this branch's Projection book, and may be a type to design in Subjective Reference, roadmap step 4 of Sprint 121.
- How the notes on Goldbach versus Gödel become summaries here, which he said he would think about: the four organized conversations hold 30 Revisions, 15 Archives, 17 Ideas and 12 Questions on the fourth alone, each a search by the sort's name, and the Results by their state.
