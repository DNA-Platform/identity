# Sprint 120 — The Essential Books

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **workflow:** the feature workflow, opened with `/ce-brainstorm` on 2026-11-02 and built mid-brainstorm on Doug's "Scaffold that and then we design"
- **state:** U1 built and seen 2026-11-02; U2, U3 and U4 are design owed, not buildable until he rules
- **Next:** `/ce-brainstorm` continues in the room, the design he named: the dictionary's library form first, then The Team's members, then the look of the pages

---

## <a id="where"></a>Where things stand — 2026-11-02

**Next action: `/ce-brainstorm` continues, on the design.** Doug's words at the close of the scaffold: "Scaffold that and then we design." The scaffold stands and binds; nothing else is buildable until he rules on the three things below.

**The library's root moved.** The public library is `library/` itself, not `library/.public`. Every folder there is a book catalogued by Reference; each subject folder holds a `.reference` that is the book representing it; the binder copy stands at `library/..public/.binding`; `library/.public` holds only the package and its `.lib`. Nine books bind in 5.3 s. [U1](#u1) has the numbers; [To see it](#see) has the commands.

**Owed to him, the design:** the dictionary's library form ([U2](#u2)), since his thirteen unnumbered headword files are not chapters to the binder and the folder is excluded by name until they are; The Team's members ([U3](#u3)), one autobiography for now; and the look of the pages ([U4](#u4)), Sprint 119's sketch standing as the only one.

**Wrong turns already taken, so they are not retaken:** mapping the first library's shelf and Doug's own library onto this one ("Stop trying to map the libraries. They are not the same library."); offering project books sourced from the archived articles (the books are the folders, nothing else); and reading "the .public folder" as the library's root, when the folders he named stand a level up.

## <a id="rulings"></a>Rulings, verbatim

- The top book: "Whatever it is, it goes in reference. Let's be on the nose and call it reference. And you can then imagine other books for each subject - disctionary needs to be internalized into library form minimally".
- The books: "Stop trying to map the libraries. They are not the same library. Each of those folders is a book, and each one is catalogued by reference. We need to figure out team - we might put that in team".
- The scaffold: "Right now, can you scafold books for each folder with the essential pages. That will give us reference, to team, one book for each. We start with one autobiography and go from there. Well actually, we need to think about how to organize. This are the subjects. Each needs a subject catalogue so each needs a .reference folder of its own, and that can be the book representation the subject for each. Scaffold that and then we design".
- Carried from Sprint 119: "Books in IXP (inexplicable phenomena) are projects or catalogues of them"; "we don't know who qualifies as a teammate. That might be the subject of the book. But yes, since subject books can be authors, the team members can be"; "That won't be the top book. Still brainstreaming".

## <a id="requirements"></a>Requirements

- <a id="r1"></a>**R1** The top book is named Reference, About Inexplicable Phenomena, filed under itself, and `/` lands on it. *Seen:* the root address answers with Reference's page and no segment is doubled.
- <a id="r2"></a>**R2** Each folder of `library/` that is a subject holds a `.reference` book: Chemistry, Mathematics, Pharmacology, Philosophy, Physics, each with the three dot chapters and a `.book.tsx`, each About its own name and filed under Inexplicable Phenomena. *Seen:* Reference's catalogue lists the five and each answers at its own address.
- <a id="r3"></a>**R3** The Team is the one autobiography, in the `team` folder Doug made, as `team/.reference`, by its own subject. *Seen:* the catalogue claim "every book reaches the library and the author" passes with The Team as the author of every book.
- <a id="r4"></a>**R4** The dictionary Doug sketched at `library/.reference/dictionary` is kept untouched and left out of the bind by name until its library form is designed. *Seen:* the inventory line names nine books and no dictionary, and the folder's thirteen files are as he left them.
- <a id="r5"></a>**R5** The library binds, previews under its base and the Pages workflow gathers the moved face. *Seen:* every page fetched from 4343 answers 200 with its title.

## <a id="units"></a>Units

### <a id="u1"></a>U1 — the scaffold and the move — **built and seen, 2026-11-02**

**What runs:** `git mv` of the face and the five Sprint 119 books up to the library's root, four new subject catalogues written from the Mathematics template, Reference's faces rewritten, the configuration's root, exclude and origin changed, the import paths deepened one level for the books that now stand in a folder, the workflow's rsync path moved.

**Measured:** configure, inventory and catalogue in 0.1 s: 9 books, 36 keys, every reference resolves, every book reaches the library and the author. The full bind 5.3 s: 248 writings specified, 9 pages drawn in 1 child at a peak of 254 MB, 10 pages read back, 4 pictures, 11 stale files removed by the record. The preview on 4343 answered every page; the look's numbers are in [Verification](#verification).

**Found on the way:** a chapter file opens with a number or a big dot, so unnumbered headword files are unaccounted, and `inventory.exclude` takes a folder NAME wherever it stands or a PATH to one file inside a book, never a folder path; the first `git mv` of the face was refused with permission denied because the stopped preview's npm and vite processes outlived the stop and held the folder; and Doug had already removed the root `dictionary` duplicate and made `library/team` before this session touched the tree.

### <a id="u2"></a>U2 — the dictionary's library form — **design owed**

His word: "disctionary needs to be internalized into library form minimally". His sketch: a book with the four faces and thirteen headword files, `definition` to `subject`, unnumbered. What must be ruled before it is buildable: how a headword is a chapter when chapters are numbered and a dictionary orders by headword; what a definition's senses, examples and related words are in the library's forms; and whether the thirteen or the first dictionary's fifty stand. No files, scenarios or dependencies until then.

### <a id="u3"></a>U3 — The Team's members — **design owed**

His word: "We start with one autobiography and go from there." What must be ruled: whether a member is a book filed under The Team, so that they may author; what qualifies one; and the team's public name.

### <a id="u4"></a>U4 — the look — **design owed**

Sprint 119's sketch 001 stands in The Design, three forms of the top page, committed to nothing. The pages now draw the Manual's borrowed theme; a design is his to rule after he sees the scaffold.

## <a id="verification"></a>Verification

**Fetched from the preview on 4343, 2026-11-02:** the root and the nine book addresses all answered 200, each with its title; the root `index.html` is the binder's redirect door to `/reference/`, titled with the root book's name, while every drawn page carries the configuration's title, which is why the root says Reference and the pages say Inexplicable Phenomena. Both read the same before the move, so this was invisible until the root book had a name of its own.

**Looked at through the workbench, built:** the nine books at a desk and Reference at a phone, 0 past the right edge on every one, 470 ms to 701 ms each, no wrong line. Three photographs read: Reference with its cover, synopsis, contents and the catalogue's rows; The Team labelled Autobiography under its breadcrumb with Who Qualifies beneath; Chemistry with its cover, its synopsis in the package's own words, and an empty contents.

**The gates:** configure, inventory and catalogue 0.1 s, 9 books, 36 keys, every reference resolves, every book reaches the library and the author; the full bind 5.3 s. No package source was touched, so no suite was run.

## <a id="see"></a>To see it

```
cd library/..public/.binding
npm run bind
npm run preview -- --port 4343 --strictPort
```

Open `http://localhost:4343/inexplicable-phenomena/`, which is Reference. The workbench: `node library/.manual/5-developing-the-library~workbench.mjs`, then `… look reference built`, `… look chemistry built phone`, `… close`.
