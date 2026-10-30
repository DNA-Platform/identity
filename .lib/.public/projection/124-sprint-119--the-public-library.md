# Sprint 119: The Public Library

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [David](../../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **state:** implementation-ready, 2026-10-30, planned the same night on his "Do the sprint as written then"; nothing made before the plan
- ***The sprint's name is a PROXY; Doug's to rename. So is every name below marked as one.***

---

## His words, verbatim

**2026-10-29, at Sprint 118's close:** "Okay beautiful, let's call this done. We are going to start the inexplicable phenomena library. We are going to set it up and we are going to sketch, not really committing to designs. And we are going to setup the mathematics subject!"

**On what the library is and where it stands:** "The library in the root .public of this repo, shared as the github pages! And please make sure you sync this repo with both branches of identity, one for you and one for me".

**On the autobiography:** "This is tricky. We imagine that autobiography describes the team of people that work on inexplicable phenomena". Then, asked how the teammates stand in it: "Wait we don't know who qualifies as a teammate. That might be the subject of the book. But yes, since subject books can be authors, the team members can be".

**On the manual:** "We are rebuilding from scratch though we may borrow code and we will sketch not polish".

**On mathematics:** "Well you don't know how I am splitting up projects, but it will be a subject that has many books. Books in IXP (inexplicable phenomena) are projects or catalogues of them".

**On a project as a book:** the project's own writing, code beside it, chosen from three.

**Mid-turn:** "Also, we are /ce-brainstorm so take notes, don't do anything". And, on its own with nothing before it, "65", parked below as an open question.

## What was read before the questions, each a claim with its source

- The repo's `library/` still holds the workspace folders of Sprint 41, `mathematics` empty, `physics`, `philosophy` and `pharmacology` a `package.json` each, `dictionary` a first-draft book; `library/.public` holds `package` and `.lib` and nothing else. *Read on disk, 2026-10-29.*
- The Pages workflow, `.github/workflows/deploy-pages.yml`, builds `library/.public/app`, a first-draft folder that no longer exists, and runs on dispatch alone since his "No deploy. Leave the teaser" of 2026-08-14; the base `/inexplicable-phenomena/` is set there and nowhere else. *Read whole.*
- His library at `.me` is a root of books with a copy of the binder at `.me/..public/.binding` whose `.pubconfig` names the master as its origin, a manual of forty chapters, a design book, the top catalogue `..reference` titled Dougs Library and filed under what it is about, and the one autobiography, Dougs Story, by Doug about The Librarian. *Read in the covers and the configuration.*
- [What a Library Is](../writing-a-book/01-what-a-library-is.md): a library is books and nothing else; one autobiography, about its author; a book may author when that autobiography is its subject; the library is filed under what it is about. *Read whole.*
- The binder's test library, seven books in `package/.binding/.test`, is the smallest library that binds, on the package's words alone with a manual of its own. *Read on disk.*
- Both identity branches, the team's `dna-platform` and his `dougs-library`, and this repo were level with their remotes on 2026-10-29 at the close. *Read by fetch and status.*

## Requirements

- <a id="r1"></a>**R1 · The library is the root `.public` of this repo, and everything a page of it needs is in the repo.** Seen: a copy of the binder beside the books, syncing from the master at `package/.binding`; a bind of the library green from the catalogue to the record; the bound site served on a port of its own, never his library's 4242; no file of `.me` imported.
- <a id="r2"></a>**R2 · The library is published as GitHub Pages at `/inexplicable-phenomena/`, by hand until he says otherwise.** Seen: the workflow builds chemistry and the package, binds the library with that base, uploads the bound site and deploys it on dispatch; the page answers at the Pages address with its links resolving under the base.
- <a id="r3"></a>**R3 · The library's one autobiography is the team's, about the people who work on inexplicable phenomena, and who qualifies is what the book takes up.** Seen: the top catalogue filed under what it is about; the autobiography bound under a proxy name; whoever qualifies stands as a book filed under it, written by that person, and may author subjects; the ten identity autobiographies are not copied in as they stand.
- <a id="r4"></a>**R4 · Mathematics is a subject of many books, each a project or a catalogue of projects.** Seen: the subject book with its About and its table, bound and drawn; nothing filed under it until he says how the projects split.
- <a id="r5"></a>**R5 · A project book is the project's own writing, its code beside the chapters that use it.** Seen: a project book's chapters are authored prose; a resource beside a chapter is the code the chapter runs or shows; no conversation is imported into the public library, and the talk stays in `.me`.
- <a id="r6"></a>**R6 · The manual is rebuilt from scratch, borrowing code where it helps, and the look is sketched and not polished.** Seen: a design book of the public library whose sketches stand on one page with a switch between forms, photographed, none committed as a design; a manual holding only the words the sketches needed; any chapter borrowed from his manual credited where it stands.
- <a id="r7"></a>**R7 · Both identity branches stay level with this repo, the team's and his.** Seen: the commit tool pushing both on every commit; a session opening and closing with both fetched and read as level, and a pull where one is ahead.

## Actors, flows, acceptance examples

- **A1 · Doug**, setting the library's subjects and splitting its projects. **A2 · The team**, whoever qualifies, writing the autobiography and its books. **A3 · A reader** arriving at the Pages address. **A4 · The binder**, binding the public library as it binds his.
- **F1 ·** A2 binds the public library from scratch: the catalogue, the specify, the render, the proof, the record, every line green on a handful of books. **F2 ·** A2 runs the Pages workflow by hand; A3 opens the address and reads the top page. **F3 ·** A sketch round: one HTML page with its forms on a switch, looked at by A1, kept as a sketch and committed as nothing.
- **AE1 ·** The bind's stage lines on the public library, `catalogue … every reference resolves` through `record manifest written`, and the preview answering on its own port. **AE2 ·** The Pages address answering with the top page, its links under `/inexplicable-phenomena/`. **AE3 ·** The top page listing the team's book and Mathematics; Mathematics' page with its About and an empty table. **AE4 ·** A sketch page beside the design chapter with a switch, and the photograph the chapter names.

## Out of scope

His private library and its import of conversations; any polish of the public library's look; the teammates' identity autobiographies as they stand; what is filed under Mathematics, until he splits the projects; the Pages deploy on push.

## Open, for him

- **Who qualifies as a teammate**, which may be what the team's book is about; whether he stands in it as one.
- **How the projects split**, and so what Mathematics' first books are.
- **The team's public name**; DNA Platform, the organisation's, is the proxy.
- **The library's folder names and port**, mine to choose and flagged: the top catalogue's folder, the autobiography's, the preview's port.
- **"65"**, sent on its own with nothing before it.

## Decisions

- <a id="d1"></a>**D1 · The library's root is `library/.public` itself**, its books dot folders beside `package` and `.lib`, the inventory told to pass those and the bound site over. Chosen over a sub-root, a level nothing reads, and over moving `package` out, which every import of `@dna-platform/public` stands on.
- <a id="d2"></a>**D2 · The binder is a copy at `library/.public/..public/.binding`, made as his was:** a `.pubconfig` naming `../../package/.binding` as its origin, its own `package.json` and install, and `npm run sync` bringing the rest; the bound site is `library/.public/..public/`, committed on purpose, as `.gitignore` already says of a library's site. Chosen over binding in CI, which would need chemistry's build and the binder's heap on every deploy, and over the master binding the library in place, a form the binder does not have.
- <a id="d3"></a>**D3 · The base `/inexplicable-phenomena/` lives in the copy's `.pubconfig`**, so the committed site and the Pages site are one and the same and the local preview serves under the base too, which `vite.config.ts` takes from the configuration. Chosen over the old workflow's environment variable, which made the local site differ from the published one.
- <a id="d4"></a>**D4 · Four books first, every name a proxy:** the top catalogue `..inexplicable-phenomena`, titled by the library's name and filed under what it is about; the autobiography `.team`, The Team by The Team about The Team, its first chapter the question of who qualifies, in the team's own discussion; the manual `.manual`, the least that binds; Mathematics `.mathematics`, by The Team, filed under the library, about Mathematics, its table empty. Chosen over Doug as the subjects' author, since the library is the team's, and over the identity's ten autobiographies, which the binder refuses as ten.
- <a id="d5"></a>**D5 · The manual begins by borrowing the binder's test manual**, a book class with a running head, a byline and a theme, and takes from his manual only what a sketch then asks for, each borrowing credited where it stands. Chosen over his forty chapters, which carry his conversations and projects, and over the package's bare words, which draw no cover.
- <a id="d6"></a>**D6 · The sketches stand in a design book `.design`**, one HTML page a round with its forms on a switch, snapshot off the public preview, photographed at a desk and a phone, none committed as a design: the top page and Mathematics' page first, a project page when a project exists, since a sketch holds nothing he has not named. Chosen over sketching from his library's prints, which carry his palette and his words.
- <a id="d7"></a>**D7 · The Pages workflow uploads the committed site and deploys it on dispatch, no build**; the push trigger stays off until he says. Chosen over the old build of a folder that no longer exists.
- <a id="d8"></a>**D8 · The loop for the public library is the workbench borrowed beside the public manual's developing chapter**, finding its library as the tool already does, the parent of its own folder's parent, its built port the public one. Chosen over looking by probe and over a bind for every look.
- <a id="d9"></a>**D9 · The sync is the commit tool as it stands**, which pushes both identity branches, and a fetch of both at a session's open and close, said in this chapter's state; no code. Chosen over a new tool for a thing that already holds.

## Units

- <a id="u1"></a>**U1 · The root and the copy.** R1, R7; D1, D2, D3. Arthur's with Adam. Files: `library/.public/..public/.binding/.pubconfig`, its `package.json`, the files the sync brings; `.gitignore` for the copy's debris; the preview's port, 4343, a proxy. Mechanism: the copy made as his was and synced from the master; the inventory walking the root and seeing none of `package`, `.lib` and the site. Demo: `npm run sync` naming the files brought; the inventory's line on the empty root, or the bind's refusal in words naming it.
- <a id="u2"></a>**U2 · The top catalogue, the autobiography and the manual.** R3; D4, D5. Libby's with Arthur, every teammate in the chapter. Files: `..inexplicable-phenomena/` cover, book, synopsis, table; `.team/` the same and chapter 1; `.manual/` the book class and the theme borrowed from the test manual, credited. Mechanism: the books bound by the copy, the proof green; the top filed under what it is about; the autobiography about its author. Demo: the bind's stage lines green and the preview answering on 4343 under the base with the top page listing The Team.
- <a id="u3"></a>**U3 · Mathematics.** R4; D4. Libby's. Files: `.mathematics/` cover, book, synopsis, table. Mechanism: a subject book about Mathematics with an empty table, bound, its page drawn. Demo: Mathematics on the top page; its page with its About and no books.
- <a id="u4"></a>**U4 · The site published.** R2; D3, D7. David's. Files: `.github/workflows/deploy-pages.yml`; the committed site. Mechanism: the workflow uploads `library/.public/..public` less `.binding` and deploys it on dispatch; one run by hand. Demo: the Pages address answering with the top page, a link followed under the base.
- <a id="u5"></a>**U5 · The sketches.** R6; D6. Gabby's with Claude. Files: `.design/` the book and its first chapters, `~001.html` and `~002.html` with their photographs. Mechanism: the snapshot off the preview, a sheet and a script a sketch, forms on a switch, the chapter saying what each form tries; nothing moved into the manual until he says. Demo: each sketch opened from its file and photographed, the chapter naming the photographs.
- <a id="u6"></a>**U6 · The loop.** R6; D8. Cathy's. Files: `.manual/` a developing chapter and `~workbench.mjs` borrowed from his, its built port 4343. Mechanism: the workbench serving the public library live and looking at the built site. Demo: `look` on the top page live and built, each with its photograph.
- <a id="u7"></a>**U7 · Records.** R7; D9. Libby's. This chapter's state at each unit's begin and end; [How a Library Is Developed](../writing-a-book/01-02-how-a-library-is-developed.md) gaining the public library's commands; the memory on ports. Demo: the state line reading as the handoff, both identity branches read as level at the close.
- **R5, a project book's shape, builds nothing this sprint**, since no project is filed until he splits them; it is the next plan's first unit and is said so in the state.

## Test scenarios

- **U1.** `npm run sync` in the copy brings the master's files and keeps the seven kept ones; the inventory lists no book under `package`, `.lib` or `..public`; a bind of the empty root refuses in words that name the root, or the catalogue counts zero.
- **U2.** The catalogue line counts the books; the proof reads every page back; the top page on 4343 under `/inexplicable-phenomena/` lists The Team and the manual; The Team's page opens; a second autobiography added in a galley of the public library is refused at the catalogue.
- **U3.** Mathematics on the top page; its page with its About and an empty table; no fault for the empty table.
- **U4.** The dispatch run green; the Pages address answering; one link followed and landing under the base.
- **U5.** Each sketch's switch toggles its forms; the photographs exist at the sizes the chapter names; no file under `.manual` changed by a sketch.
- **U6.** `look` live answers on a library of four books with its photograph; `look … built` photographs the site on 4343.
- **U7.** The state line rewritten at each unit's begin and end; the anchor check with no new miss.

## Risks

- **The inventory walks `..public` or `package`.** Excluded in `.pubconfig`; the first inventory line says what it saw.
- **The committed site swells the repo.** Four books and a few hundred files; measured at the first commit and said.
- **One autobiography.** The identity's teammates arrive later as books under The Team, never as autobiographies; a galley promises the refusal.
- **The borrowed manual carries his palette.** Credited, and the sketches decide the public one; nothing of his is imported, only copied and said so.
- **The workbench's port and base.** A copy with its lines changed; a look at 4343 proves it before any sketch.

## The plan checked against itself

Every requirement lands: R1 in U1 and U2; R2 in U4; R3 in U2; R4 in U3; R5 in no unit, by his split still to come, said in the units; R6 in U5 and U6; R7 in U1 and U7. Every unit names what runs and when, and what is seen. The thin place is U5, whose sketches wait on what the bound pages show; it begins after U3 and takes its forms from the page, not from a guess.


## Where things stand

- **Next:** `/ce-work` on this chapter at [U1](#u1), the root and the copy; each unit written here as it begins and as it ends, on his "write down in sprint notes".
- **State:** implementation-ready 2026-10-30; requirements approved the same night, all seven as written, on his "Do the sprint as written then, and we do IXP next but then write down in sprint notes"; nothing made yet.
- **To see it:** nothing yet; the public library has no folder.
- **Pointers:** [What a Library Is](../writing-a-book/01-what-a-library-is.md) for the rules the autobiography and the subjects obey; [How a Library Is Developed](../writing-a-book/01-02-how-a-library-is-developed.md) for the loop the sketches use; the Pages workflow at `.github/workflows/deploy-pages.yml` for what publishing must replace; the binder's test library at `package/.binding/.test` for the smallest library that binds.
