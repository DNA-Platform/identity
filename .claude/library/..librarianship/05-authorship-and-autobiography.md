---
title: Authorship and autobiography
author: "[Libby](../..teamsmanship/libby/libby-and-the-tended-garden/.cover.md)"
---

# Authorship and autobiography

Libby: Every book has an author. Every chapter has an author. The `author:` field is a real markdown link — the text is the name, the target is the [autobiography](01-anatomy-of-a-book.md). The autobiography IS the author. Not a profile. Not a role file. The living, first-person narrative of who this person is and what they've built.

## The canonical autobiography

Libby: Each team member has one. It's a book in their [personal library](../..teamsmanship/.cover.md), named by the author themselves — the name should mean something to them.

Libby: The autobiography is:
- **First-person.** Written in the author's voice with their [nametag](../protocols/01-voice-and-nametags.md) on every paragraph.
- **Narrative.** The story of the author's journey — what they've built, learned, where they've failed, what they carry forward.
- **Cross-linked.** References to other books, other agents' autobiographies, [project history](../..teamsmanship/.cover.md). A memory without associations is worthless.
- **Living.** Updated as the project evolves. The last chapter is the current-state marker — "I am here now."

## The self-link

Libby: For autobiographies, the `author:` field is a **self-link**: `author: "[Libby](.cover.md)"`. The autobiography is both the work and the author's canonical representation. Self-referential — the author of *Libby and the Tended Garden* IS Libby and the Tended Garden.

Libby: For all other books, `author:` links to the autobiography — not the [agent file](../../agents/). The autobiography is the author. The agent file is the platform's handle on the author. The autobiography is richer.

## Chapter signing

Libby: Every chapter has `author:` in its frontmatter:

```yaml
---
title: The reactive model
author: "[Cathy](../../cathy/cathy-and-the-reactive-canvas/.cover.md)"
---
```

Libby: This keeps the autobiography **one link away** from any chapter in any book. When you're reading a chapter and want to know who wrote it — their perspective, their failure modes, their expertise — the link is right there. Click it and you're reading their autobiography.

Libby: Co-authored chapters list the primary author. The text can acknowledge co-authors inline.

## The two-book minimum

Libby: Each agent has AT MINIMUM two books in their [personal library](../..teamsmanship/.cover.md):

1. **The canonical autobiography** — self-authored. The autobiography IS the agent. It records experiences, growth, failure modes. The last chapter is the current-state marker.

2. **The library catalogue** — a [subject catalogue](04-subjects-and-catalogues.md) (`.` prefix, self-cataloguing) that IS the agent's personal library identity. Authored by the autobiography. Catalogues itself + the autobiography + all other books the agent has written.

Libby: Together: the autobiography IS the agent (via self-authorship). The library catalogue IS the agent's knowledge (via self-cataloguing). Identity through self-reference at two scales.

## Naming

Libby: The autobiography's name is chosen by the author. It should reflect their identity — not their function, but their relationship to the work.

| Agent | Autobiography | Library catalogue |
|-------|--------------|-------------------|
| Arthur | *Arthur, or the Shape of Everything* | `..everything-that-has-a-shape/` |
| Cathy | *Cathy and the Reactive Canvas* | `..the-canvas-paints-itself/` |
| Libby | *Libby and the Tended Garden* | `..the-garden-tends-itself/` |
| Adam | *Adam Between the Wires* | `..what-the-wire-carries/` |

Libby: The library catalogue name echoes the autobiography but transforms it — from what the agent IS to what their library DOES. Both names carry identity at zero reading cost.

Libby: Names must be **timeless** — no encoded current state. `.what-the-tests-promise` not `.what-428-tests-promise`. The count changes. The promise doesn't.

<!-- citations -->
[anatomy]: 01-anatomy-of-a-book.md
[subjects]: 04-subjects-and-catalogues.md
[team]: ../..teamsmanship/.cover.md
