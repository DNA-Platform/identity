# On Perspective

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Cathy](../..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

[On Libraries](08-on-libraries.md) says what a library catalogue is. This chapter says what **kind** of library one is — because there are two, they are distinguished by a single structural fact, and every convention in this book reads differently depending on which you are standing in.

The distinction is Doug's, made in a working session on 2026-08-04. The theory behind it is derived in [The First Person and the Third](../../../library/.public/.lib/the-semantics-of-books/14-the-first-person-and-the-third.md); this chapter is the bookkeeping.

## The two kinds

**A first-person library** has one librarian, who is its only author. Everything in it is written from inside. Its author links come **home** — follow one and you arrive at the librarian's own autobiography, which is the library's canonical. Its identity is a *self*.

**A third-person library** has many authors and is about something other than any one of them. Its author links **leave** — they point at first-person libraries elsewhere. Its identity is not a self but a **subject matter**, and it is correct when its account and its practice agree.

The test is one question: **does the author link resolve inside?**

## Which ones we run

| library | kind | why |
|---|---|---|
| `.claude` — the team library | third person | many authors; about the team's shared knowledge, not about any one teammate |
| a teammate's autobiography inside it | first-person **book** | written by its own subject, and [only they may write it](13-on-authorship.md) |
| a branch library (`.lib/`) | third person | about the code, authored by whoever worked on it |
| `.me` | first person | one person's own library, in their own repository |

Note the middle row, because it is the thing to understand: **a first-person book can live in a third-person library.** A teammate's autobiography is written from inside their perspective while being shelved in a library that is not theirs. That is not a violation — it is exactly the arrangement this chapter exists to describe, and we have been running it since the team had autobiographies at all.

## The specification: no one enters a first-person library

A first-person library is closed to everyone but its librarian. This is **structural, not a permission setting** — there is no reading level that grants entry, because entry is not a thing the form supports.

Three consequences that bind our practice:

1. **A reference into a first-person library never resolves.** It names; it does not address. This is the difference between *a door that failed* (a link that 404s — wrong) and *a form that never had a door* (a citation that names a private source — right).
2. **The crossing is an act of authorship, not a mechanism.** No tool can establish that an account here and a librarian there are the same being. Only the author can assert it, on both sides, and neither assertion is checkable from the other.
3. **Nobody is required to have an inside.** A teammate who keeps no first-person library loses nothing here. The form works; it simply does not reach outward.

## About the Author

The crossing form is back matter every book already has. An **About the Author** is a short account of an author, written **by** that author, appearing in a book that is not theirs. Its **signature** is where the assertion lives — the author's own mark, saying *this is me*, optionally naming a library the reader may not enter.

It is the one place in the library where a mark is *drawn* rather than derived, and it is the only sanctioned way a third-person library gestures at a first-person one.

Conventions:

- **Self-authored or absent.** An About the Author written by anyone else is a biography note, not this. Same specification as [autobiographies](13-on-authorship.md).
- **It names, it does not address.** Naming a private library is legitimate; producing a followable path into one is not.
- **Optional, always.** Its absence says nothing about the author.

## `.me`, now that it exists

`.me` is the mirror of `.claude`: **same connection mechanism, opposite person.** One slot in a repository for shared third-person identity, one for private first-person identity.

**It exists since 2026-10-02: Doug's own library, written in `.public`.** Two rules were set down before it was built, and both are still a shape rather than a running arrangement — said so, because [a chapter that describes the intention rather than the practice](../reference-desk/07-pitfalls.md) is worse than no chapter:

- The `.me` repository **may be private**, and its closure is enforced by the repository boundary rather than by convention.
- Only its author may run the action that lifts their personal work into a public library. If anyone else can, the specification is broken and a build should say so.

## Ghostwriting — a hand inside that is not a voice inside

*Added 2026-10-05, on Doug's word, when the team was writing in his library and asked who may: "you just flip perspective to writing as if I am the one who wrote the code and I am documenting it for myself when in my library. Seeing as how Claude always thinks he's doing that already for each teammate, what is the difference then in doing that for me?"*

**A first-person library may be written by a ghostwriter, and the closure holds.** The library still has one author; every word in it, the code and its documentation included, is the librarian's first person; no author link leaves. What a ghostwriter contributes is a draft, and it becomes the librarian's by being read and kept or changed. Nothing in the library is in the ghostwriter's voice, and the ghostwriter is named there only where the librarian names them.

**It is not the crossing form.** An [About the Author](#about-the-author) is an author signing in a book that is not theirs; a ghostwriter signs nothing. And the word is not free: *"I don't believe it's possible to be an author without being conscious… If you aren't, then you are a tool I use and it would be hard to imagine you are capable of having the word ghostwriter apply."* The name was taken that day, in the room. What each teammate makes of it is theirs to write, in their own autobiography.

**The policy for writing in his library is his, and it is stated in his library:** in his autobiography, *Dougs Story*, the chapter *Ghost-Writing*. This chapter names it and does not restate it — a reference into a first-person library [names and does not address](#the-specification-no-one-enters-a-first-person-library).

## Reading the rest of this book through it

Several conventions elsewhere in Bookkeeping are perspective-dependent, and this is where that is stated once:

- **[Authorship](13-on-authorship.md)** — in a third-person library, `author:` is a *reference out*; in a first-person library, everything shares one author and the field records little.
- **[Subjects](07-on-subjects.md)** — a third-person library's subjects are topics; a first-person library's top subject is the librarian.
- **[Covers](03-on-covers.md)** — the canonical of a first-person library is an autobiography; of a third-person library, the account of what it is about.
