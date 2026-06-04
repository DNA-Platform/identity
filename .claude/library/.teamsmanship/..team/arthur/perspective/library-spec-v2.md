---
title: The library spec — what Doug described
author: "[Arthur](../arthur-or-the-shape-of-everything/.cover.md)"
---

# The library spec — what Doug described

Libby: This is my attempt to write down what Doug specified, cleanly, without mixing in what we built. If I get something wrong, correct me.

## The library

Libby: A library is a flat directory. It contains three kinds of things, distinguished by dot prefix:

- `..` prefix — the library catalogue. ONE per library. It IS the library's identity.
- `.` prefix — subject catalogues. Many per library. Each IS a subject.
- No prefix — regular books. Many per library. Each belongs to at least one subject.

Libby: All three kinds are PEERS at the same directory level. A subject catalogue does NOT contain the books it catalogues. The books sit beside it. The subject catalogue LINKS to them. A book can belong to multiple subjects — it has ONE canonical subject (in its `subject:` field) and can be linked by other catalogues.

Libby: This flatness is the core structural principle. You can't achieve multi-subject membership with folders. You achieve it with links. The filesystem is flat. The hierarchy is in the links.

## Books

Libby: A book is a directory. It contains:
- `.cover.md` — the book's identity. Frontmatter + body.
- Numbered chapters — `01-slug.md`, `02-slug.md`, etc.

### Book frontmatter

```yaml
---
title: The title
subject: ".protocols"
author: "[Arthur](../path/to/autobiography/.cover.md)"
summary: >
  A paragraph (3-5 sentences) answering: what is this book,
  why does it exist, who should read it.
---
```

Libby: The order matters: **title > subject > author**. The subject says where this book lives in the library's hierarchy. The author says who wrote it, with a link to their autobiography.

### Chapter frontmatter

```yaml
---
title: Chapter title
author: "[Arthur](../../path/to/autobiography/.cover.md)"
---
```

Libby: Every chapter is SIGNED. The `author:` field links to the autobiography. This keeps the autobiography referentially close — one link away from any chapter in any book. When you're reading a chapter and want to know who wrote it and what their perspective is, the link is right there.

## Subject catalogues

Libby: A subject catalogue is a BOOK with a `.` prefix on its directory name. It has `.cover.md` and chapters like any book. What makes it special:

1. **It self-catalogues.** It appears in its own table of contents.
2. **It catalogues other books.** Its TOC lists the books that belong to this subject — with paragraph descriptions and links.
3. **It IS the subject.** The catalogue doesn't describe the subject from outside. It IS the subject's identity, the way an autobiography IS the agent.
4. **It can contain specification chapters.** Protocols, conventions, validation rules — these are chapters IN the subject catalogue, not separate books.

Libby: A subject catalogue can catalogue OTHER subject catalogues — this is how the tree gets deep. `.teamsmanship/` might catalogue `.projects/` if project tracking is considered a team concern.

Libby: The books a subject catalogues are NOT inside the subject's directory. They are peers at the same directory level. The subject links to them. Each book's `subject:` field points back to its canonical subject.

## The library catalogue

Libby: `..librarianship/` is the library catalogue. Double dot. One per library. It catalogues:
- All top-level subjects (`.protocols/`, `.teamsmanship/`, etc.)
- Books about the librarian (because you want to know who tends this library)
- Itself (self-cataloguing)

Libby: It also contains the field guide as chapters — the specification of how the library works.

## Agent libraries (personal/subjective)

Libby: This is a public library with personal libraries for the team members. The `.teamsmanship/` subject catalogue has folders for each agent:

```
.teamsmanship/
  .cover.md          ← subject catalogue for the team
  arthur/            ← Arthur's personal library (flat inside)
  cathy/             ← Cathy's personal library
  ...
```

Libby: Inside each agent folder, the structure is FLAT — the same as the library root:
- `..everything-that-has-a-shape/` — agent's subject catalogue (dot prefix, self-cataloguing)
- `arthur-or-the-shape-of-everything/` — autobiography (no prefix, regular book)
- `the-architecture-of-identity/` — another book (no prefix)
- `perspective/` — perspective book (no prefix)

Libby: The agent's subject catalogue catalogues all their books. It's authored by the autobiography. It IS the agent's personal library identity.

## The public library root

Libby: At the library root, the structure is:

```
library/
  ..librarianship/           ← library catalogue (chapters = field guide)
  .protocols/                ← subject catalogue
  .teamsmanship/                     ← subject catalogue (with agent folders inside)
  voice-and-nametags/        ← book (subject: .protocols)
  the-boot-sequence/         ← book (subject: .protocols)
  working-with-doug/         ← book (subject: .protocols)
  discussion-as-work/        ← book (subject: .protocols)
  the-library-opens/         ← book (subject: .protocols)
  the-identity-repo/         ← book (subject: .protocols)
  coding-policy/             ← book (subject: .protocols or standalone)
  roles/                     ← book (subject: .team)
  abilities/                 ← book (subject: .team)
```

Libby: Notice: protocol books are NOT inside `.protocols/`. They're peers. `.protocols/` links to them. Each book has `subject: ".protocols"` in its frontmatter.

## Multi-subject membership

Libby: Newton's Principia is philosophy, physics, and math. It has ONE directory. It has `subject: ".physics"` as its canonical subject. `.philosophy/` and `.math/` each have a TOC entry that links to it. The book doesn't link back to the non-canonical subjects. The non-canonical subjects find the book; the book only knows its canonical home.

## Names

Libby: Names are tier-zero synopsis. They carry identity at zero reading cost. They should be timeless — no encoded current state. `.what-the-tests-promise` not `.what-428-tests-promise`. The number will change. The promise won't.

## Navigation

Libby: Walk links, not folders. Read the `.cover.md`. Follow links. The cover gives you names + summaries + links into specifics. The directory listing gives you names only. The cover is strictly better.

## The agent files (.claude/agents/)

Libby: These are Claude Code platform files. They should contain REAL markdown links — clickable — pointing into the library:
- Link to the agent's library catalogue
- Link to the autobiography
- Link to roles and abilities
- Link to code territory
- Instructions for how to assemble context by following library links

Libby: The agent file teaches the platform how to ENTER the library for this agent.

## Summary of what we got wrong

Libby: We put books inside subject directories. We didn't add `subject:` to book frontmatter. We didn't sign chapters with `author:`. We encoded "428" in a name. We wrote agent files as prose without real links. We nested where we should have linked.

Libby: The library is flat. The hierarchy is in the links. The subject doesn't contain the book. The subject LINKS to the book. The book DECLARES its subject. Chapters are signed. Names are timeless.

<!-- citations -->
[sprint-47-notes]: sprint-47-design-notes.md
