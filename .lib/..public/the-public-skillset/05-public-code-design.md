# public-code-design

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **status:** ***a principle under trial, given by Doug 2026-09-08 and codified as given; NOT edited while the trial runs — notes on what it did go in [the trial notes](#trial-notes), and the principle is reflected on after.***

---

**Lay out every part of a design at once, as files of shells, so that each part can be seen asking the framework whether it was designed to support it — before any part is finished.** *Doug's name for it: **lateral implementation**. His reason: "you might be solving a problem that doesn't work."*

**Announce at start:** "Designing laterally: every intended file laid out as shells before any is finished."

## The one goal it serves

> ***Doug:*** **"that each part of the design works because the framework was DESIGNED to make it easy, and since you write the framework, you can work on it to make it easy. And you need to support ALL the designs."**

*A base that makes one extension easy and another hard was fitted, not designed. The only way to test a base against all its extensions is to have all of them on the table asking — which is what this procedure does.*

## The procedure

1. **Create the files for everything you intend to build — all of them, now.** Every class in every folder the design names, including the demos and their tests. A file per class, in the shape every file here has (interface · class · type · specification · exports).
2. **Every member goes in as an empty shell that throws `not implemented`**, with a comment saying what it will do and what it depends on. A member you cannot yet name goes in under a proxy name, flagged.
3. **Build them all at once, top of the dependency hierarchy first,** so each next piece is designed for by the piece before it. *"You need to build them all at once."*
4. **Sketch the type hierarchy and all its instantiations.** Polymorphism is the instrument: an instantiation that needs what its base does not offer is a finding about the base — [Polymorphic Limiting](../the-type-system/06-polymorphic-limiting.md) — never a slot added to hold it.
5. **Edit as you go, adding little implementations**, and watch what each one does to the shells that lean on it. You will guess wrong; the shells are where a wrong guess is cheap.
6. **Mark everything**: at the head of each file whether it is FOUNDATION (was here before), CREATED (clay — yours to change freely) or IN PROGRESS; at each member whether it is implemented, scaffolded or owed.
7. **Take notes as code comments** — on members, on dependencies, on guesses — many of them while the work is unsettled. **A file with no comments is done.** A comment that becomes standard belongs in documentation, not in code: move it to a chapter and delete it.
8. **Keep the commit the system stood at before the experiment**, so the whole of it can be reverted in one command. Commit locally as often as wanted; the push is Doug's.
9. **What you created is clay; what was here is foundation.** Clay is changed freely and will be. The foundation changes gently, and is never deleted without the motive written beside the deletion.
10. **Hand off in the same form**: the tree of shells with their comments, the sprint chapter pointing at every file with its state and the commit hash, so the next team can own all of it and work on it as it stands.

## Why comments, here, against the standing ban

[The Coding Style](../the-coding-style/03-the-coding-style.md#open) bans comments in finished code because a comment dresses density up as documented. **This procedure uses the same fact the other way round:** while a design is unsettled, the comments ARE the register of what is guessed, owed and depended on, and their disappearance is the measure of completion. The ban holds for what is finished; the shells are not finished by definition.

## <a id="trial-notes"></a>Trial notes — small, dated, never editing the principle

- **2026-09-08, later.** ***The shells did the base's design work twice in one turn, in two different ways, and neither was a guess.***

  ***FIVE SHELLS ASKING FOR THE SAME THING NAMED A BASE MEMBER.*** *`$Equation`, `$Theorem`, `$Citation`, `$Footnote` and a numbered `$Section` were each written with a `number()` that threw, and each comment named the same dependency — a reading over its peers.* **Five is not five implementations; it is one reading the base was missing**, and it could only be seen because all five were on the table at once. *`reflection.numbered` replaced them, and the fifth shell — the one that existed only to carry a number — was **deleted**, which is the method paying for itself twice.*

  ***AND A SHELL THAT COULD NOT COMPILE SAID WHERE THE HIERARCHY WAS WRONG.*** *`$Citation` could not implement `$Reference$` — it demands `$focused`, `focus` and `unfocus`, so pointing and FOCUSING are one interface — and `$ReferenceCard extends $Reference` was already the precedent. **So P11's never-extend-the-kind-above governs the seven composition levels and not the reference kinds**, which nothing had written down. *`$Article extends $Part` followed the same afternoon, and stopped it copying three fields.*

  ***The one that did not work: promoting from a single instance.*** *Three kinds were promoted into the framework because they were declared twice — and twice **inside one application**, which is the app's own root, not the framework's. **Promotion needs two APPLICATIONS, not two books.** All three were deleted the next turn; the application took them back and its own `.chapter.tsx` was already the right home, holding four link kinds of one line each.*

- **2026-09-08, night.** *Consuming the level above found the seams in minutes:* rewriting the demo over the new theme surfaced two selectors written for the old structure (`.pd-heading h2` where the `h2` now IS the heading; `header .pd-title a` where the anchor now IS the title) and one placement fault, each found by probing the built page rather than the CSS. *The annealing pass earned its keep on the first round:* the ugliest new code was six identical `frame()` wrappers in the demo, and asking what would make them easy corrected the hierarchy — the theme's mechanism is the format's, and a theme is a format with values.

- **2026-09-08, Sprint 53.** Adopted mid-sprint after the theme sheet looped a page to a heap death on the SEVENTH promise: six promises pinned the finished piece and the seventh was the next piece leaning on it. With every intended class already a shell, the chapter-level theme would have asked its question in minutes. *First success of the method, recorded before the method was in force.*
