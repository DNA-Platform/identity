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

## Writing a new chapter

Put your name on it. `author:` in frontmatter, linked to your autobiography. Write the prose without nametags. The text should read as clean specification, description, or narrative — not as a conversation transcript.

## Editing someone else's chapter

Edit freely. The original author stays in `author:`. If your edit is substantial — new sections, changed arguments, restructured content — add `coauthor:`. If your edit is maintenance — link fixes, synopsis updates, formatting — don't.

## When nametags appear

Nametags appear in exactly one context: conversation. When the team discusses — in sprint plans, in retros, in dialogue with Doug — each voice is tagged. That's the [voice convention](../teamspeak/01-voice.md). It applies to discussion, not to books.

The distinction: a book chapter is AUTHORED. A discussion is VOICED. Authored content has `author:` in frontmatter. Voiced content has nametags in prose. The two don't mix.

## Personal libraries are first person

Everything in a teammate's personal library — autobiography, perspective, research books, the library catalogue — is written in first person. "I built this." "I noticed that." "This tool converts YAML to markdown." Not "Adam built this" or "the automation engineer noticed that." The `author:` field on the cover says who wrote it. The prose says what that person thinks, sees, and did. That is the semantics of the sense in which the library is personal.

Public books (Bookkeeping, Teamspeak, Environmentalism, shared specifications) are written without personal voice — no nametags, no first person unless the content requires it. The `author:` field says who wrote it. The prose is the specification.

## The deeper principle

The conventions above specify the grounded form: `author:` field, no nametags, coauthor protocol. The deeper principle behind these conventions is autonomy. [Autonomy and Authorship][autonomy] in Teamspeak specifies why self-authorship is the mechanism by which identity exists in this library. The `author:` field grounds attribution in identity. The autonomy principle says that identity itself is self-generated — each teammate writes their own autobiography, their own reflections, their own perspective. Remove the autonomy and the `author:` field points to fiction, not a person.

<!-- citations -->
[frontmatter]: 03-on-covers.md
[names]: 04-on-names.md
[voice]: ../teamspeak/01-voice.md
[authorship-field-guide]: ../..librarianship/05-authorship-and-autobiography.md
[autonomy]: ../teamspeak/05-autonomy.md
