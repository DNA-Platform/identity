# explain

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

The public interface to identity. When someone in Doug's chair doesn't understand what this system is, `/explain` is how they ask. The right person explains — not the narrator, not the default voice. The person whose [territory](../..teamsmanship/05-territory.md) the question touches.

This is the [substrate protocol](../..environmentalism/.cover.md#the-substrate-protocol) applied as a skill. The substrate dispatches to the responsible teammate. The teammate walks the library — not to take notes (that's [explore](21-explore.md)) but to build the path that makes the explanation coherent. The walk is visible: the explainer reads files aloud so the asker sees the path. Then the explanation follows from what the path revealed.

## How explain differs from explore

Explore takes notes at every stop. Explain reads and moves. The explainer is looking for something — the answer to the question — so the walk is directed, faster, more hops. No perspective entry. No fixing things along the way. Just reading, following links, building understanding, and then explaining at the end.

Explore produces a map of where you walked. Explain produces understanding of what you found.

Both follow the same rules: start at a catalogue, navigate by links, no search. The personal library jump is allowed — the explainer can consult their own knowledge at any point. But the explanation itself comes from the public library, not from memory.

## Steps

1. **What needs explaining?** Read `$ARGUMENTS`. Name the question.

2. **Who explains?** Check [territory](../..teamsmanship/05-territory.md). The responsible person explains.

   | Question about... | Explained by... |
   |---|---|
   | The library, books, covers, links | Libby |
   | The environment, compilation, platform files | Claude |
   | The team, roles, identity | Arthur |
   | The framework, $Chemistry, reactivity | Cathy |
   | Testing, specifications in executable form | Queenie |
   | Automation, relay, the Reference Desk code | Adam |
   | The Lab UI, visible layer | Phillip or Gabby |
   | Deployment, CI/CD | David |

3. **Walk to the answer.** Start at the relevant catalogue — the [library catalogue](../..librarianship/.cover.md) for broad questions, a subject catalogue for domain questions, your personal library catalogue if the answer involves your own understanding. More leeway on starting point than explore — you can start anywhere that's likely to contain the answer.

   Read each room quickly — what's here, does it answer the question, which link gets closer? Follow links. Read the next room. Keep going. The walk should be fast — more hops, less time per stop than explore. Ten hops is normal for a good explanation. The asker sees each file you read, so the path itself is part of the explanation.

4. **Explain from the path.** After walking, explain what you found:
   - Start with the one-sentence answer
   - Give the context — which rooms you visited, what subject the answer lives in
   - Describe the relevant content at the right depth
   - Link to the library so the asker can walk the path themselves
   - Name what's NOT there if the question reveals a gap

5. **Check consistency.** Does what you're about to say match what the library says? If your understanding diverges from the library content, the library needs updating or your understanding is stale. The library is the source of truth.

## The formal structure underneath

The library is a labeled directed graph. Each cover is a node. Each link is a typed edge — `subject:` edges go up the hierarchy, `author:` edges go to autobiographies, inline links are cross-edges between books. The [dot type system](../bookkeeping/.cover.md#the-dot-type-system) is a type system over nodes (book, subject catalogue, library catalogue).

When you explain, you traverse this graph. Your starting position (your personal library catalogue) determines which edges you can follow first. Different teammates start from different nodes, so they walk different paths through the same graph to answer the same question. That divergence isn't a flaw — it's why the right person must explain. Libby's path through the graph to answer a Bookkeeping question follows edges that Arthur's path doesn't have, because her personal catalogue connects to the library's formal structure in ways his doesn't.

The walk IS the explanation's structure. Not a narrative layered on top of data — a traversal that produces understanding by the sequence of nodes visited and edges followed.

## The depth question

The asker may not know what depth they need. The [synopsis architecture](../bookkeeping/09-on-synopsis.md) helps: start at the shallowest layer (catalogue entry), go deeper only if needed. The explainer reads at the depth that answers the question and stops there.

## What explain is NOT

- Not Arthur explaining everything. Each territory has an owner. The owner explains.
- Not reciting from memory. Read the library fresh. Knowledge decays.
- Not summarizing the whole library. Scoped to the question. One path, not the whole graph.
- Not explore. No notes, no fixing, no perspective entry. Just walk and explain.

$ARGUMENTS
