# Sprint 96: The Librarian's Grade

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **state:** `implementation-ready`, 2026-10-01 — opened on Doug's word at the close of Sprint 95, no brainstorm run: the requirements below are his two sentences said back, approved the same hour — *"Yes, they stand"* — and the plan set beneath them in the same act; the cleanup ruled *"the carried items alone"*, so C4, D6 and U5 are struck with their identifiers kept.
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- ***The sprint's title is a PROXY; Doug's to rename.***

---

## Where this sprint comes from

**Doug, 2026-10-01, at the close of Sprint 95:** *"Yes for this next sprint I would like to hear the librarians grade of what natural means. it sounds like we have some cleanup from last sprint."*

**And the same day, while U1 ran, the sprint's end:** *"get this to a clean point where we use it for real in my library. We start from scratch and I give instructions there but we need a .public that is ready. That's why Libby's review of natural is critical. She is the first library author."* So the grade and the cleanup are for one thing: a `.public` his library can be started on from scratch — and the grade is the readiness review, given by the first author to write a library on this code, [R](#readiness) below.

Two things in two sentences. **The grade** is [D14 of Sprint 95](100-sprint-95--pages-formats-and-words.md#d14), his ruling that *"you guys grade how natural the code works… Is it a more natural extension of .public?"*, now [a section of What Natural Means](../the-coding-style/07-what-natural-means.md#the-grade) — and he wants to hear it given in full, by the librarian, over her whole library, where Sprint 95 gave it once, at one spread, for one trial. **The cleanup** is what Sprint 95's close said it left: [U14](100-sprint-95--pages-formats-and-words.md#u14), the documentation, which he called critical; the manual's turn against 110 ms, the one measurement not taken; and two things found and not touched, the forty-nine galleys and the preview that was serving a stale galley on 4242. Whether it is also the [`/cleanup`](../../../../.claude/library/our-skillset/.cover.md) pass over the code Sprint 95 touched — the team's own word for what a shipped sprint leaves behind — is the one question below.

## Requirements

*Each names what would be observed. Identifiers stable. Drafted from his words; his yes owed.*

### G. The librarian's grade

- **G1 — The grade is given over the whole library, in the manual.** *Observed:* a table in this chapter, one row per printed file of the manual and per file of the other five books, each rule or line of the library's own code judged **natural** or **a fight**, every fight naming the word or the mechanism it is missing; read at the manual's spreads on 4242, where the library's code is printed for everyone, and in her files whole; against [the three tests](../the-coding-style/07-what-natural-means.md#the-three-tests) and the one question, *would the next librarian write this without being told?*
- **G2 — A fight is filed, never patched where it is met.** *Observed:* every fight against `.public` stands as an ask in this chapter, by name, with the file it would live in, for his yes — none fixed in the library; a fight that is the library's own — her explorer's two structural questions from [Sprint 95's grade](100-sprint-95--pages-formats-and-words.md#the-grade) among them — is hers to fix or keep, and her files change only where she decides.
- **G3 — The law is corrected only where the reading finds it wrong.** *Observed:* What Natural Means is edited, with its cover, if and only if a test of it fails on the page; otherwise it is cited and untouched.

### C. The cleanup carried from Sprint 95

- **C1 — The documentation**, [E1 to E3 of Sprint 95](100-sprint-95--pages-formats-and-words.md#u14) verbatim. *Observed:* the first draft's chapters stand in a book of record, its name Libby's, and every old cover says where they went; a grep across current books for `frame(`, `print(`, `theme = true`, the levels to six and "no Theme class" at zero, and `contents` only where it means the word; the three statements on when a style is made agree; What a Library Is says one autobiographical subject; the branch's catalogue cover names what to read first and next; the documentation check at 0 and the link checker's count against 923.
- **C2 — The manual's turn, measured.** *Observed:* the script time of one page turn on the manual, taken by one recorded method in one run on two galleys — `library-qidObT`, bound before U5, and `library-OngNUK`, bound at U9 — both numbers and the method written here; nothing changed in code on the number alone.
- **C3 — The two findings answered.** *Observed:* why forty-nine galleys stand under `.test/.galleys/` is read in `galleys.ts` and the suite's own removal, and said; the folder is emptied only on his word; and the rule that one preview serves 4242 says how a session finds what the port is serving before it serves.
- **C4 — ~~The code Sprint 95 touched, cleaned~~** — *struck 2026-10-01 on his word, "the carried items alone"; the identifier kept and never reused.* A [`/cleanup`](../../../../.claude/library/our-skillset/.cover.md) pass over Sprint 95's commits is not this sprint's.

### <a id="readiness"></a>R. Ready for his library, from scratch

- **R1 — The steps from an empty folder to a bound, served library on this code are written in Writing a Book, and they are the steps.** *Observed:* a chapter of Writing a Book, Libby's, says what a library is made of on this code and how one is started — the binder copied in, the configuration, the first book and its cover, the autobiography that grounds the library, a bind, a preview — and nothing in it is the first draft's; [Publishing a Library](../the-first-draft/06-publishing-a-library.md) is its record and not its source.
- **R2 — A library is made from scratch by those steps and binds.** *Observed:* a new library, not the test library, made in a folder of its own by following the chapter and nothing else — one autobiography, one catalogue, one ordinary book — bound by the binder it copied, served, every page read in Chrome; the steps corrected where doing them found the chapter wrong, and the chapter corrected in the same act. The one thing a hand-authored page cannot fake.
- **R3 — What stops his library is named, not smoothed.** *Observed:* every fight R2 met and every one the grade finds that would stop a librarian starting from scratch is an ask under [G2](#g-the-librarians-grade), by name with its file, before the sprint closes; a `.public` is ready when that list is answered or he says it is.

### Out of scope

The condition's open rows from Sprint 95's reading — the highlighter's grammar set, Svg's two shapes by sniffing, `:first-child` where a class exists, `style` naming two things, `pa-append` where `pd-` belongs, Format's providing seam, the writing folder importing Chapter, the figures' bare elements, a subtree theme's declarations, the render's memory, the serial reading pass — on his *"building things as needed and not proactively"*; **unless the grade finds one of them a fight on the page, in which case it enters as an ask under G2.** The sprint's title.

## <a id="plan"></a>The plan — guardrails, 2026-10-01

*The size, measured before dividing: the test library is 51 files and 1,634 lines of `.tsx`, the manual 22 files and 1,032 of them, its seven printed files and two sheets of 101 and 38 lines; the documentation about twenty-five chapters and one cover; the measurement two galleys already bound. One session for the grade, one for the documentation, an hour for the measurement; no dispatch, since every part is smaller than its brief.*

### <a id="decisions"></a>Decisions

- <a id="d1"></a>**D1 — The grade is a reading, by one person, and its product is a table and a list of asks.** Libby reads the manual at 4242 spread by spread, each printed file beside its prose, then the five other books' files whole, and writes one row per file: what the file says in the library's words, what in it is natural, what in it fights and what each fight is missing. The counts — lines, `:has(`, rosters, restated defaults — stand beside the row as evidence. *Chosen over* a per-class audit of `src`, which is [`/public-audit-code-patterns`](../the-public-skillset/04-public-audit-code-patterns.md) and reads the framework rather than its extension; and over handing him counts, the instrument he struck in Sprint 95. The grade lives in this chapter, [the trail](../../../../.claude/library/..librarianship/17-compounding.md); What Natural Means is the destination only for a correction to the law.
- <a id="d2"></a>**D2 — Every fight is an ask, and an ask is a unit only on his yes.** A fight against `.public` is written as an ask with its file — an annotation in the file of the writing it belongs to, a word in the writing folder — never as a class or a member made; the standing rule, [WE DO NOT INNOVATE](../the-coding-style/03-the-coding-style.md#supervision). A fight that is hers is hers. *Chosen over* fixing as the reading goes, which Sprint 95's trials showed grades badly: a half change reads as a fight.
- <a id="d3"></a>**D3 — The owed documentation is the first unit, because a plan inherits no owed unit.** [E1 to E3](100-sprint-95--pages-formats-and-words.md#u14) carried whole and first, his word that it is critical; the book of record's name hers; every chapter edited with the TOC tool and only by its author or coauthor.
- <a id="d4"></a>**D4 — The turn is measured twice by one method, and the method is written.** The before was taken on 2026-09-30 and its method was not recorded, so 110 ms is not a number to beat; both galleys are measured in one run — a page turn driven in Chrome, the script time read off a performance trace from the click to idle — and the method stands beside the numbers. *Chosen over* believing the before.
- <a id="d5"></a>**D5 — The two findings are read before they are touched.** The galleys: `galleys.ts` removes a galley in `afterAll`, and forty-nine stand, so either removals fail or runs end before `afterAll`; the suite's own output on a run says which, and nothing is deleted on a guess. The preview: the rule that one preview serves 4242 gains the sentence that a session reads what the port serves before it serves — [one-preview-port](../debugging-a-page/.cover.md) is the room.
- <a id="d6"></a>**D6 — ~~Cleanup as the `/cleanup` skill over Sprint 95's code~~** — struck 2026-10-01 on his word; the identifier kept.

### <a id="units"></a>Units

*Every unit opens with the files read whole; every `src` change waits on his yes; every unit ends with his sign-off.*

- <a id="u1"></a>**U1 — The documentation** (D3; C1). Libby's. *Files:* the branch library — a new book of record; the covers of Writing a Book, The Condition Report and Conversation as a Folder; the redraft chapters carrying stale lines, found by the grep; `..publicity/.cover.md`; the documentation check and the link checker. *Depends on:* nothing. *Mechanism:* edits by author, each cover in the same act with the TOC tool; the grep run before and after; the two checkers run at the end. *Scenarios:* the grep for each struck name across current books at zero, and `contents` only as the word; the three statements on when a style is made read side by side and agreeing; What a Library Is saying one autobiographical subject; every old cover naming the book of record; the catalogue cover opening with what to read first; the documentation check 0 failures; the link checker's count said against 923. *Shows:* the branch read in order from its catalogue cover; the grep's empty answer. **Built 2026-10-01, his sign-off owed.** E1: Writing a Book's first seven chapters moved whole to [The First Draft](../the-first-draft/.cover.md), the numbers kept and 48 links rewritten by folder; its five that remain renumbered one to five, 31 links and 13 sibling links rewritten; the Condition Report and Conversation as a Folder marked records of the draft on their covers, the Condition Report's 368 inbound links untouched; The Coding Style no longer sends a cleanup to the draft's actionable list but to the latest sprint's reading and the grade. E2: `frame(`, `print(`, `theme = true`, "no Theme class" — twenty hits read one by one; three were false and are corrected with their dates (Theming and Formatting's "no Theme class", Book's "src has no Theme class", the drawing convention's `print` now `write`), four examples recast to the redraft's names and dated, the rest dated history saying so; `contents` for the writing's member at zero outside the Genesis, whose word it is; the three statements on when a style is made now one, read against `src` and Libby's library — every styled component a field, once per class, nothing styled in a bond, and my explorer's tree the one plain component made there; What a Library Is carries his words of 2026-09-30. E3: the Design catalogue in reading order with Figures and The First Draft on it, Publicity's cover with the order to read in and Solutions on it at last, a dead link to `app/` gone. The documentation check 103 classes, 0 failures; the link checker 922 against 923, 7,981 links; a fragment probe of my own 11,496 links, 0 missing files, 0 missing anchors.
- <a id="u2"></a>**U2 — The grade** (D1, D2; G1 to G3). Libby's. *Files:* none changed by it; read: the manual's seven printed files and its chapters, the five other books' 29 files, on the galley at 4242. *Depends on:* U1, so the guides she reads against agree with the code. *Mechanism:* a reading at the spreads, a row per file written into this chapter's [grade](#the-grade), each fight an ask under [asks](#asks). *Scenarios:* every file of the library has a row; every fight names a missing word or mechanism and the file an ask would live in; a fight that is hers says so and whether she fixes it; a test of What Natural Means that fails on the page is quoted with the page; a count stands beside a verdict and never as one. *Shows:* the table, and the manual at 4242 open at each spread graded.
- <a id="u3"></a>**U3 — The turn, measured** (D4; C2). Queenie's. *Files:* a probe in the scratchpad, removed in the same turn; nothing in the package. *Depends on:* nothing. *Mechanism:* both galleys served in turn on 4242, a page turn on the manual driven in Chrome with a performance trace, the script time read from the click to idle, three turns each, the numbers and the method written here. *Scenarios:* the before galley's three turns and the after galley's three, each stated; the method stated so a later run repeats it. *Shows:* two numbers beside each other, and nothing else changes.
- <a id="u4"></a>**U4 — The two findings** (D5; C3). Adam's. *Files:* `galleys.ts` read; the regression's run output read; [Debugging a Page](../debugging-a-page/.cover.md) edited for the port rule. *Depends on:* nothing. *Mechanism:* a regression run watched for whether `afterAll` removes its galley, and `galleys.ts` read for what `remove` does on a folder a server holds open. *Scenarios:* the cause of forty-nine galleys said with the line that shows it; the folder emptied only on his word, and the count after; the port rule saying how a session reads what 4242 serves. *Shows:* the count, the cause, the rule.
- <a id="u5"></a>**U5 — ~~The code Sprint 95 touched, cleaned~~** (D6; C4). Struck 2026-10-01 on his word, *"the carried items alone"*; the identifier kept and never reused.
- <a id="u6"></a>**U6 — A library from scratch** (R1 to R3). Libby's, added 2026-10-01 on his word. *Files:* a new chapter of Writing a Book, its cover entry; a new library in a folder of its own, outside the package, made by the chapter's steps and kept as the proof; nothing in `src`. *Depends on:* U1. *Mechanism:* the chapter written first from the binder's own copy and sync — `manifest/copy.ts`, `manifest/synced.ts`, `.pubconfig` — and the test library's covers as the instance, then made true by doing: the steps followed on an empty folder, each stop written into the chapter as the step it corrects. *Scenarios:* an empty folder becomes a library with one autobiography, one catalogue and one ordinary book, by the chapter alone; the binder copied in binds it with every phase green; the preview serves it on 4242 and each page is read in Chrome; a step the chapter had wrong is corrected in the chapter, not worked around; every fight met is an ask under G2. *Shows:* the new library on 4242, and the chapter beside it.
- **Asks that become units** — every fight the grade files is a unit only on his yes, numbered from U7 as he says yes; none is written here in advance.

### The order

U1, then U6, then U2, so the grade reads a library made from scratch as well as the test library; U3 and U4 beside them at any time; the asks after his yes. Every unit lands with his sign-off before the next opens. **The sprint closes when `.public` is ready for his library, R3, and not before.**

### <a id="risks"></a>Risks, and what meets each

- **The grade invents a requirement.** [Solutions 15](../solutions/15-the-requirement-i-invented-and-then-failed.md): a probe checked what nobody asked for. Met by G1's instrument — the three tests and the one question, quoted, and nothing else.
- **The grade fixes as it goes.** Met by D2: a fight is an ask, and her own fights are marked as hers before any is touched.
- **The documentation edits a chapter the editor does not sign.** Met by the authorship check before every edit; a chapter signed by another is left with a note for its author.
- **Two numbers taken two ways.** Met by D4: one method, one run, both galleys.
- **A galley deleted that a server holds.** Met by D5: nothing removed on a guess, the cause read first.
### <a id="asks"></a>Asks — his word before the unit

1. ~~**The requirements above**~~ — answered 2026-10-01: *"Yes, they stand."*
2. ~~**What the cleanup is**~~ — answered 2026-10-01: *"The carried items alone."*
3. **The sprint's title.**
4. *The fights the grade files, each by name with its file — written here by U2.*

### Self-check

G1 lands in U2; G2 in U2 and the asks; G3 in U2. C1 in U1; C2 in U3; C3 in U4; C4 struck with U5. Every unit names its mechanism and what it shows. The thinnest section is the asks, which the grade fills.

## <a id="the-grade"></a>The grade

*Written by U2.*

## Where things stand

**U1 built 2026-10-01, Libby's, his sign-off owed; U6 next — a library from scratch, the chapter written first.** Nothing else is built. His word of the same day, that `.public` must be ready for his library from scratch and the grade is the readiness review, is in the chapter's head and [R](#readiness). The requirements approved and the cleanup ruled the carried items alone, 2026-10-01. The galley `library-OngNUK` serves on 4242, bound at Sprint 95's U9; `library-qidObT` stands under `.galleys/` for the before. Commits: none of this sprint's; the project repo at `23cae31`, twenty-three ahead of its origin, nothing pushed.
