# Where framework commentary belongs

- **author:** [Libby](../libby-and-the-tended-garden/.cover.md)

---

Doug handed me a debt to house. Sprint 19 harvested 362 comment lines out of `lib`; this sprint stripped `CardCatalogue`'s too. The record says they are "owed a home in this branch's books." I read how the branch libraries work — Publicity's five books, the Library Tree conventions, and the O8 ruling — and here is where the commentary belongs, and why.

## Two things forced, one thing to decide

**Forced by O8 — the direction.** The book links to the file; the file does not cite the book. Code stays comment-free; the [dead-link checker](../../../../bookkeeping/06-on-links--consistency.ts) is the drift guard. The framework never cites its theory — the theory's chapters cite the framework's files.

**Forced by the one-way link rule — the branch, not the main library.** [Branches link into the identity; the identity does not link into branches](../../../library-tree/01-branches.md#the-one-way-link-convention). So a book that links *down* to `package/src/…` can only live in the branch, `.public/.lib/`. Bookkeeping and Librarianship — the main-library subject catalogues that already hold the *semantics* — are forbidden from holding file-links, because the identity travels across projects and the code does not. This is the load-bearing reason the commentary lives in the branch. The [Library Tree cover](../../../library-tree/.cover.md) draws the same line from the other end: *"The framework's API reference belongs in subject catalogues. The team's journey belongs in the branch."* The **semantics** are cited up; the **applied realization** stays in the branch.

**To decide — the vessel.** Which branch book. That is a choice, not a necessity, so I rule it and hand Doug the one open call.

## The 362 are not one genre — triage before you rehome

A harvested comment is not automatically owed a relocation. Most of it is owed a *deletion*. Sort by what the comment was doing:

| the comment was… | its home | act |
|---|---|---|
| restating what a book already says — "a cover sits at chapter zero" | Bookkeeping / Librarianship *(already say it)* | **delete**; make the file *linkable from* the existing chapter, add no prose |
| why the model is shaped so — why `valid()` accrues, why a part is recognised by two facts | **The Semantics of Books** *(the derivation; it already links down to the files)* | **relocate** as settled-account material beside the derivation chapter it belongs to — chapter 15 is the template |
| what is wrong — a compromise, a defect | **The Condition Report** (by fault) / **Solutions** (by symptom) | **relocate** to the register that already exists |
| how to *use* the class — the consumer-facing orientation, module by module | *unhoused — see below* | **hold** |

The debt is smaller than 362 once triaged. The best cataloguing deletes: a comment that echoes Bookkeeping is not knowledge the branch is missing, it is a second copy that will drift. It goes, and the file it sat in becomes something a book *links to* instead of something that carries its own gloss.

## The one genre with no home

Four of the five branch books are indexes of the work — by time (Projection), by fault (Condition Report), by symptom (Solutions), by repo-view design (Designing IXP). The fifth, The Semantics of Books, is the model's *derivation*, kept honest by citing one conversation. None of them is the framework's **reader's companion** — the holistic, per-domain "here is `book/`, here is what it is for, here is how you use it," linking down to each file. That is the genre the harvested "how to use" lines belong to, and it has no shelf.

**My recommendation: do not mint the shelf yet.** Triage first. Route the *why* into Semantics of Books, the *faults* into the registers, and *delete* the echoes. Only the how-to-use residue remains unhoused — and whether that residue is a paragraph or a book is a question of volume I cannot answer until it is sorted. If it is small, it attaches as usage notes to the settled-account chapters. If it is a book's worth, it earns a shelf: a **companion** to `lib` (proxy name — Doug names framework things), organised by domain, citing *up* to Bookkeeping/Librarianship for the semantics and *across* to Semantics of Books for the derivation, linking *down* to the files. Minting a book to hold comments nobody has triaged is exactly the add-don't-read habit the Condition Report keeps catching.

## Why this survives the move Doug named

Doug ruled today that the compiler is likely moving *into* the lib package, that `.public` **is** the public library, and that `lib` is a utility package for interfacing with a library. The home I have chosen survives that move for a structural reason, and the reason is the whole point of O8:

- The branch `.lib/` stays put, and all the code — package and compiler — sits under `.public/`. So a link from a `.lib/` book *down* into `package/…` is intra-branch and survives.
- Organise the commentary by **domain and concern**, never by the file's current directory. When the compiler moves inside the package, the commentary's *structure* does not change — only its link *targets* repoint.
- And here is the part the move makes vivid: **a comment inside a file that moves goes with the file, silently, and may land in the wrong conceptual place. A book-to-file link that breaks when the file moves is caught, loudly, by the dead-link checker, and repointed on purpose.** The harvest is not only cleanup. It is what makes the framework's commentary *robust to the reorganisation Doug is about to perform*. Comment-in-code is fragile under a move; book-links-to-code is self-verifying under a move. That is the argument for paying the debt now rather than after the compiler lands.

## Authorship

Routing decides the pen. The *why* goes into The Semantics of Books, which is [Cathy's book with Arthur coauthor](../../../../..publicity/../the-semantics-of-books/.cover.md) — so that relocation routes through them; the librarian sorts, the authors place. The faults route through the Condition Report's authors (Arthur, Phillip coauthor). If a companion is minted, naming is my territory, so I would author it — but the mint is Doug's call, not mine. One hand per book, as always.
