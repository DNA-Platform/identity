# On Links

- **specification:** Link
- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

Links are the library's hierarchy. The filesystem is [flat](01-on-books.md) — every book and catalogue within a scope lives at the same directory level. The tree of subjects, books, and chapters exists only in the links between covers. Walk links, not folders. The directory listing is for machines. The cover, with its linked table of contents, is for readers.

## Discoverability

No one cares about a book if you can't find it in lots and lots of ways. A book that exists in one catalogue entry and nowhere else is effectively invisible to anyone who doesn't happen to walk that exact path. A well-linked book appears in its subject catalogue, in the library catalogue's description, in related chapters of other books, in [citations](#citations) blocks, in [synopsis](09-on-synopsis.md) shortcuts from higher layers. Every link is a door. More doors mean more readers find the room.

When you write a chapter, link to everything it references. When you write a catalogue entry, link into the specific chapters that answer common questions. When you update a book, check whether other books should now link to it. Cross-linking is not decoration — it is the mechanism by which the library stays navigable as it [grows](10-on-evolution.md).

## Inline links

Standard markdown links woven into prose: `[text](path)`. These are the paths the reader walks. Use them when the reader's natural next question is "tell me more about X."

Every reference in the library is a real link. Not "see the file at `path/to/thing`" — that's a string. A real link: "the [voice convention](../teamspeak/01-voice.md) describes nametag rules." Clickable where you're reading it.

**Link on first mention in a section.** Don't re-link the same target in the same paragraph. Don't over-link — if every word is blue, nothing stands out. The link should feel like a natural path, not a highlighted textbook.

## Section targets

Links can point to specific sections within a file using heading anchors: `[chapter signing](03-on-covers.md#signing)`. This enables the [synopsis shortcut system](09-on-synopsis.md) — a catalogue can link directly to the section that answers the most common question, skipping the cover entirely.

Choose section headings that work as link text. A heading is a [name](04-on-names.md) at the section level — it's read every time someone links to it.

## Citations

Reference-style links in a `<!-- citations -->` block at the bottom of each file:

```markdown
<!-- citations -->
[books]: 01-on-books.md
[subjects]: 07-on-subjects.md
[team]: ../..teamsmanship/.cover.md
```

Citations are the file's local glossary — reusable link targets for concepts mentioned multiple times. Define the URL once at the bottom, use `[books]` anywhere in the text. Keeps prose clean, links maintainable. If you mention something, cite it. If you cite it, make sure the target exists. Broken citations are weeds.

## The direction convention

**Public to public**: freely in all directions. Books at the library root link to each other without restriction.

**Personal to public**: freely. Personal books in a teammate's library reference shared knowledge.

**Public to personal**: only through the [Teamsmanship](../..teamsmanship/.cover.md) catalogue. The public library doesn't link directly into individual agents' spaces. Teamsmanship bridges the perspectives — it catalogues all personal libraries with descriptions from the Collaboration subject's point of view.

**Personal to personal**: through the public library or through the Teamsmanship catalogue. One teammate's autobiography links to another's through the shared catalogue, not directly.

## Links are not paths

A link carries two things: the text (what the reader sees) and the target (where the reader goes). The text matters as much as the target. `[01-on-books.md](01-on-books.md)` is a link but a poor one — it shows a filename where it should show a name. `[On Books](01-on-books.md)` shows the reader what they'll find. Link text is [tier-zero synopsis](04-on-names.md) for the target.

This distinction runs deeper than formatting. A [subject link](07-on-subjects.md) like `subject: "[Knowledge](.cover.md)"` carries two different meanings in two different parts of the same syntax: the text names the subject, the path locates the book that represents it. "Knowledge" is what the catalogue IS ABOUT. ".cover.md" is where the catalogue LIVES. See [chapter 38 of the autobiography](../..teamsmanship/..team/libby/libby-and-the-tended-garden/38-the-library-i-didnt-understand.md) for the longer story of learning to see this distinction.

## Think in links

A link is the unit of navigation, and in the team's reasoning it is also the unit of thought. When the team thinks — the [coordinator's discussion](../teamspeak/03-discussion.md), which is the [substrate's](../teamspeak/09-the-substrate.md) thinking when Doug is not in the room — a point already settled in the library is made by *linking* to it, not by restating it. A thought is navigation, not exposition: it names where the answer lives and points there, rather than re-deriving what a chapter already holds.

This is [Discoverability](#discoverability) turned inward. Every link is a door, so reasoning built from links is reasoning the reader can walk. Re-explaining what a book already says does three harms: it duplicates the canonical statement, so the two drift apart; it buries the argument in prose the reader must wade through; and it hides the fact that the team already knows the thing. Pointing into the library instead keeps one source of truth, keeps the thought short, and shows the reader the path. And where a point has no link to reach for, that absence is itself the signal — the thought has found a gap for a new chapter, not a paragraph to improvise.

<!-- citations -->
[books]: 01-on-books.md
[chapters]: 02-on-chapters.md
[covers]: 03-on-covers.md
[names]: 04-on-names.md
[frontmatter]: 03-on-covers.md
[subjects]: 07-on-subjects.md
[synopsis]: 09-on-synopsis.md
[growth]: 10-on-evolution.md
[team]: ../..teamsmanship/.cover.md
[discussion]: ../teamspeak/03-discussion.md
[substrate]: ../teamspeak/09-the-substrate.md
