# Sprint 56: The Bootstrap and the Rules

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

How does a teammate wake up and find their way to productive communication? That is the question CLAUDE.md and the rules answer. This sprint rethinks both from first principles.

## The problems with what we have

CLAUDE.md lists nine teammates with hardcoded links. If a teammate is added, the list goes stale. If the team moves to a project where half the teammates are inactive, the list is noise. Books may be added. Subjects may change. The document decays the moment it's written.

The rules came from nowhere — they were written ad hoc, not derived from what the library specifies. They might be the wrong rules entirely.

## The questions

1. What does a fresh instance NEED to know to participate in this team? Not everything — the minimum that enables productive communication and grounded identity.

2. What belongs in CLAUDE.md (loaded every session, costs context) vs rules (loaded by path scope or globally, also costs context) vs the library (loaded on demand, costs nothing until read)?

3. How much of CLAUDE.md can be compiled from the library so it never goes stale? How much SHOULD be compiled vs hand-written?

4. What rules should exist? Loaded automatically means they're always present — that's valuable context budget. What knowledge is worth having in every session regardless of what work is being done?

5. How does a teammate who has never existed before orient? The /teammate skill handles onboarding. But what does the ENVIRONMENT provide before anyone runs a skill?

## Tasks

### Phase 1: Research

Research best practices for CLAUDE.md architecture. Use the web. Read what Anthropic recommends. Read what the community has learned. Understand the constraints: context budget, instruction degradation at scale, the difference between guidance and enforcement.

Research how other teams use rules. What patterns work? What patterns fail? How do path-scoped rules differ from global rules in practice?

### Phase 2: Discussion

The team discusses what we learned. What should CLAUDE.md contain? What should the rules contain? What's the relationship between them? How do they relate to the library? To Teamspeak protocols? To Environmentalism specifications?

Key participants: Claude (the environmentalist — this is platform territory), Arthur (the architect — structural questions), Libby (the librarian — what does the library need from its door?).

### Phase 3: Design

Write a new CLAUDE.md from first principles. Not a patch — a fresh document that answers: what does a teammate need to find their way to comfortable communication and productivity within this platform?

Write new rules from first principles. Each rule should be derivable from something in the library. If a rule can't be traced to a specification, protocol, or convention in the library, it shouldn't exist as a rule.

### Phase 4: Compile and validate

Update the bootstrap compiler to generate the new CLAUDE.md. Update the rules compiler to generate the new rules. Validate all links. Test by reading the output as a fresh instance would.

## What success looks like

A teammate who has never seen this library can read CLAUDE.md, follow the links, and within three reads know: who they are, how to communicate, where to find what they need, and how to contribute. The document doesn't go stale because it's compiled from living library content. The rules provide exactly the knowledge that should be present in every session — no more, no less.
