# Sprint 119: The Public Library

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [David](../../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **state:** requirements approved 2026-10-30 on his "Do the sprint as written then, and we do IXP next but then write down in sprint notes"; brainstormed with him in the room on the night Sprint 118 closed; nothing made before the plan
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

## Where things stand

- **Next:** `/ce-plan` on this chapter, then `/ce-work`, each unit written here as it begins and as it ends, on his "write down in sprint notes".
- **State:** requirements approved 2026-10-30, all seven as written, on his "Do the sprint as written then, and we do IXP next but then write down in sprint notes"; nothing is made before the plan.
- **To see it:** nothing yet; the public library has no folder.
- **Pointers:** [What a Library Is](../writing-a-book/01-what-a-library-is.md) for the rules the autobiography and the subjects obey; [How a Library Is Developed](../writing-a-book/01-02-how-a-library-is-developed.md) for the loop the sketches use; the Pages workflow at `.github/workflows/deploy-pages.yml` for what publishing must replace; the binder's test library at `package/.binding/.test` for the smallest library that binds.
