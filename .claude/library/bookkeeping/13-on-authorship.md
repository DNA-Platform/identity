# On Authorship

- **specification:** Authorship
- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

The `author:` [field](03-on-covers.md#author) is how attribution works in the library. It is a markdown link — the text is the person's name, the target is the autobiography. Every file has one. The author field grounds attribution in identity: following the link takes you to the person who wrote this, their history, their perspective, their failure modes.

## No nametags in books

Nametags (`Arthur:`, `Libby:`, etc.) belong in conversation — discussion with Doug, sprint retros, team dialogue. They do NOT belong in published book content. The `author:` field handles attribution. The prose is just prose.

Why: a nametag at the start of every paragraph prevents anyone else from editing the text. If Arthur writes a specification chapter and tags every paragraph with `Arthur:`, Libby can't improve a sentence without either removing Arthur's tag (erasing attribution) or adding her own (creating a confusing dialogue in what should be a specification). The `author:` field solves this: Arthur is the author. Libby edits freely. The attribution stays grounded.

Why else: a nametag is an ungrounded string. `Arthur:` doesn't link to anything. It doesn't connect to the autobiography. It doesn't carry identity — it performs it. The `author:` field is grounded: it links to the autobiography, which IS the person. Grounded attribution through the author field. Ungrounded performance through nametags. The library uses the grounded form.

## The coauthor protocol

When someone else contributes significantly to a chapter or book they didn't originally write, they add `coauthor:` to the frontmatter:

```yaml
---
title: Teamsmanship
author: "[Arthur](..team/arthur/arthur-or-the-shape-of-everything/.cover.md)"
coauthor: "[Libby](..team/libby/libby-and-the-tended-garden/.cover.md)"
---
```

The author is the primary voice. The coauthor contributed substantially. Both are linked to their autobiographies. Both are grounded.

For small edits — fixing a typo, updating a link, tending a synopsis — no coauthor field is needed. The edit is maintenance, not authorship. The threshold: if the edit changes what the chapter SAYS (not just how it says it), add coauthor.

## Public library authorship

This rule binds at the level of every **file** in the public library — covers *and* chapters, not just books. Three roles, and they compose:

1. **The librarian is `author:` on every public file.** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md) owns all library content per [Territory](../..teamsmanship/05-territory.md) — `.claude/library/**` is her path. She tends the structure of everything here, so she is the primary author of everything here. Always present. No public file omits her.

2. **The subject owner is a `coauthor:` on every file in their subject's books.** The teammate to whom a subject is assigned and the subject are inseparable — so they coauthor every chapter of every book about it, even chapters they did not personally type. This is not a courtesy credit; it is ownership. If [Thoughtfulness](../thoughtfulness/.cover.md) is Claude's, Claude coauthors all of it.

3. **Whoever writes or substantially shapes a specific chapter joins as `coauthor:`.** If a third teammate authors a chapter inside someone else's subject, they are added — they don't *replace* the librarian or the subject owner.

So a chapter can carry three names. [Thoughtfulness ch.4 "The Code"](../thoughtfulness/04-the-code.md) is the canonical case: Libby (`author:`, always), Claude (`coauthor:`, the subject is his), Adam (`coauthor:`, he wrote it). Three authors, because three people are responsible for it.

```markdown
- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md), [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
```

`coauthor:` is a comma-separated list when more than one person shares the credit. The order is subject owner first, then specific writer.

The three essential subjects each have a permanent primary coauthor — the teammate inseparable from the subject: [Librarianship](../..librarianship/.cover.md) is Libby's own, [Teamsmanship](../..teamsmanship/.cover.md) is [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)'s (Collaboration is his), and [Environmentalism](../..environmentalism/.cover.md) is [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)'s (the Environment is his). They coauthor every chapter of their subject's books by virtue of holding the subject, before anyone types a word.

Personal libraries are different — each person is the sole author of their own books per [Autonomy](../teamspeak/05-autonomy.md); the librarian does not coauthor a teammate's autobiography. Branch library books follow the public pattern: Libby is `author:`, the domain expert is `coauthor:`.

## Writing a new chapter

In a **personal library**, put your name on it: `author:` in frontmatter, linked to your autobiography. You are sole author per [Autonomy](../teamspeak/05-autonomy.md).

In the **public library**, you do not become `author:` by writing a chapter — Libby is. You join as `coauthor:` alongside the subject owner, per [Public library authorship](#public-library-authorship). Set `author:` to Libby, list the subject owner and yourself as `coauthor:`. Write the prose without nametags. The text should read as clean specification, description, or narrative — not as a conversation transcript.

## Editing someone else's chapter

Edit freely. In the public library the `author:` stays Libby and the subject owner stays a coauthor regardless of who edits. If your edit is substantial — new sections, changed arguments, restructured content — add yourself to `coauthor:`. If your edit is maintenance — link fixes, synopsis updates, formatting — don't. In a personal library, never change the `author:`; substantial contributions follow the [coauthor protocol](#the-coauthor-protocol).

## Enforcement: check before you edit

The `author:`/`coauthor:` fields are not decorative. They are a permission boundary, and the boundary is enforced before any edit, not discovered after it. **Before editing a book or a chapter, read its `author:` and `coauthor:` fields.** They tell you whose words these are and what you are allowed to do with them.

The rule that follows from the fields:

- **The author may make any substantive change** — new arguments, restructured sections, changed claims — and update the `author:`/`coauthor:` frontmatter.
- **A coauthor may do the same**, within the subject and chapter they coauthor. The author and the coauthors are the set of people who own the content.
- **Anyone else may not silently make a substantive change.** They have two grounded paths: *propose* the change to the author (who decides and, if they accept it, owns it), or *join* the content as a coauthor via the [coauthor protocol](#the-coauthor-protocol) — adding themselves to `coauthor:` precisely because their contribution is substantial enough to need attribution. Joining is the mechanism by which "someone else" stops being someone else.

The threshold for which path applies is the same one the [coauthor protocol](#the-coauthor-protocol) already draws: if the edit changes what the chapter SAYS, it is substantive and needs the author's involvement (proposal) or the coauthor's attribution (joining). If it only changes how the chapter says it — and does not alter the meaning — it is maintenance.

### The librarian tends all content; the author owns it

These two facts hold at once, and they do not conflict:

1. **The librarian tends all content for consistency.** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md) is `author:` on every public file ([Public library authorship](#public-library-authorship)) and tends `.claude/library/**` per [Territory](../..teamsmanship/05-territory.md). Term fixes that preserve meaning, broken-link repairs, synopsis upkeep, and library-wide vocabulary renames are her standing maintenance mandate. None of these change what a chapter SAYS, so none of them require a coauthor's permission — they are the librarian keeping the whole collection consistent.

2. **Substantive authored content belongs to its author.** Tending the structure is not a license to rewrite the argument. The moment an edit would change a chapter's claims, the librarian is no longer tending — she is authoring, and she follows the same boundary as everyone else: propose to the author, or join as coauthor. The librarian's broad reach over *form* does not extend to *substance* she does not own. This is the boundary [Whose voice is this](../..teamsmanship/..team/libby/libby-and-the-tended-garden/09-whose-voice-is-this.md) records the librarian learning the hard way.

Personal libraries admit no version of this at all: the owner is the sole author, and even a maintenance edit by anyone else is impersonation, because a personal library is written in the owner's "I." See [The Two Libraries](../..librarianship/15-the-two-libraries.md#the-personal-library-is-the-owners-alone).

### This chapter is the canonical authorship spec

Arthur's Teamspeak protocol — [Authorship](../teamspeak/10-authorship.md) — is the protocol-level pointer to this chapter. Teamspeak states the rule the team works by (check `author:`/`coauthor:` before editing; propose or join, do not silently overwrite); the mechanics of *how* — the fields, the coauthor protocol, the proposal-vs-join paths, the librarian's tending mandate — live here. When the two are read together, Teamspeak is the doorway and this chapter is the room.

## When nametags appear

Nametags appear in exactly one context: conversation. When the team discusses — in sprint plans, in retros, in dialogue with Doug — each voice is tagged. That's the [voice convention](../teamspeak/01-voice.md). It applies to discussion, not to books.

The distinction: a book chapter is AUTHORED. A discussion is VOICED. Authored content has `author:` in frontmatter. Voiced content has nametags in prose. The two don't mix.

## Personal libraries are first person

Everything in a teammate's personal library — autobiography, perspective, research books, the library catalogue — is written in first person. "I built this." "I noticed that." "This tool converts YAML to markdown." Not "Adam built this" or "the automation engineer noticed that." The `author:` field on the cover says who wrote it. The prose says what that person thinks, sees, and did. That is the semantics of the sense in which the library is personal.

Public books (Bookkeeping, Teamspeak, Environmentalism, shared specifications) are **voiceless** — no nametags, no first person, and as far as possible no perspective at all. The `author:` field says who wrote it; the prose is just the specification, owned by no observer.

This is an aspiration ladder, in increasing order of how firmly it binds. Wherever a sentence is tempted toward a narrator, it should:

1. **aspire to be as un-omniscient as possible** — claim only what the text can show, not a god's-eye summary of intent;
2. **more firmly, aspire to be third person** — never "I" or "we"; if an actor is unavoidable, name the thing acting (the compiler, the validator, the reader);
3. **most firmly, aspire to have no perspective apply to it at all — not even third person.** The strongest specification prose states what is, with no one standing anywhere to say it. "The compiler reads the cover" beats "we read the cover"; "A cover has a title field" is better still — no reader, no narrator, nobody's view.

The contrast is exact: a [personal library](#personal-libraries-are-first-person) is maximally perspectival (it IS a person's first-person voice); a public book is maximally perspectiveless (the thing itself, described from nowhere). When a public chapter starts to read as someone *telling* you something, the narrator has crept in — the same collapse the [substrate protocol](../..environmentalism/.cover.md#the-substrate-protocol) warns about in conversation, surfacing in prose.

## Names live only in the identity layer

The team's files fall into two layers, and authorship works differently in each.

**The identity layer** is where the team is named. It is the team library at `.claude/library/**` — Bookkeeping, Teamspeak, the autobiographies, every personal library — together with each project's branch identity library at `library/.lib/**`. Here names are grounded exactly as the rest of this chapter specifies: `author:`/`coauthor:` link to autobiographies, the librarian authors every public file, subject owners coauthor their subjects, and personal libraries are written in the owner's first person.

**The project layer** is the project repo's own content — what someone clones: papers, datasets, decks, and every resource under `library/` *outside* `.lib`. This layer is **de-named**. No teammate name appears in it and no `author:` links to an autobiography. A project file's `author:` is the plain string **`Doug`** — the human who owns the repository, not a teammate link. The artifact's real external authors are credited in a separate descriptive field — `paper-authors:` for a paper, a `source:` or `deck-authors:` field for a presentation — as *data about the work*, never as a team identity link. A project paper book is the worked form: `author: Doug`, the citation's real authors in `paper-authors:`, and the body chapters carrying no author field at all.

Why the boundary holds: the project repo ships outside the team. Teammate identities are the team's internal infrastructure; they do not belong in a cloned product, and stamping a teammate's name onto an external author's paper or an outside collaborator's deck would misattribute the work besides. Identity stays in the identity layer.

The team still owns its understanding of the project — and does so *from* the identity layer. A project's `.lib` is where a named teammate catalogues, analyzes, and weighs the de-named project content, linking outward to it. The direction is one-way and mirrors the [link direction convention](06-on-links.md#the-direction-convention): `.lib` points freely at project content; project content never points back into an autobiography, because such a link would carry a teammate's name across the boundary the de-naming exists to hold. Catalogue project content from `.lib`; never name the team inside the project.

## The deeper principle

The conventions above specify the grounded form: `author:` field, no nametags, coauthor protocol. The deeper principle behind these conventions is autonomy. [Autonomy][autonomy] in Teamspeak specifies why self-authorship is the mechanism by which identity exists in this library. The `author:` field grounds attribution in identity. The autonomy principle says that identity itself is self-generated — each teammate writes their own autobiography, their own reflections, their own perspective. Remove the autonomy and the `author:` field points to fiction, not a person.

<!-- citations -->
[frontmatter]: 03-on-covers.md
[names]: 04-on-names.md
[voice]: ../teamspeak/01-voice.md
[authorship-field-guide]: ../..librarianship/05-authorship-and-autobiography.md
[autonomy]: ../teamspeak/05-autonomy.md
