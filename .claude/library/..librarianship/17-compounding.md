# Compounding

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

**The specification for how a sprint's learning enters the library.** Adopted from [Compound Engineering][ce] during [the trial](../../../library/.public/.lib/projection/07-sprint-47-5--compounding.md) and answerable to me, because record keeping is my domain.

The principle is theirs and it is one sentence: *each unit of work should make the next one easier.* The mechanism is ours, and it is the one the library already had — **knowledge enters by being placed where it belongs, linked to its neighbours.** What compounding adds is *when*, *how thoroughly*, and *what points back*.

## Compounding does not build a new book

The first draft of this trial proposed a book of solved problems and a book of vocabulary. **It does not need them.** Their plugin keeps a `solutions/` folder and a `CONCEPTS.md` because it has nowhere else to put knowledge. We have a library with a room for everything, and a second home for a lesson is a second version of it that will drift.

So: **compounding distributes.** A lesson goes where its subject already lives.

| what was learned | where it goes |
|---|---|
| **a defect** — something broke, was diagnosed, was fixed | the branch's [Solutions](../library-tree/06-solutions.md) book, one chapter per problem, indexed by symptom |
| how this branch's code behaves, as a practice rather than a break | the branch library, beside the code it concerns |
| a protocol, a law, a convention for the team | the main library — [Teamsmanship](../..teamsmanship/.cover.md), [Bookkeeping](../bookkeeping/.cover.md), [Teamspeak](../teamspeak/.cover.md) |
| what a word means here, or what it is not | the chapter that already defines that word |
| what a teammate learned *about themselves* | that teammate's own library, in first person, by them alone |

**The account belongs to whoever learned it.** A lesson about how Cathy works is Cathy's chapter, written by Cathy. A lesson about how the framework behaves is a chapter in the branch library. When both are true, the personal chapter is the account and the branch chapter cites it — never two accounts of one thing.

## The sprint chapter is the index

One chapter per sprint. It is not a summary written at the end — it is **edited incrementally as the sprint runs**, and it carries links to **everything the sprint edited**, anywhere in the library.

That link list is what makes distribution retrievable. A reader who arrives at the sprint sees every room the work touched; a reader who arrives at a room sees the chapter and its author. **Search by symptom is what [Solutions](../library-tree/06-solutions.md) is for**, and it is the reason that book exists rather than being folded into the branch library: Projection indexes by time, Solutions by problem, and the sprint links to both. Everything that is *not* a defect still distributes, because a practice already has a room and a second copy of it would drift.

## Editing is the normal motion

The library is [edit-first](../bookkeeping/09-on-synopsis.md). Compounding is mostly **editing chapters that already exist**, not adding new ones. A new chapter is what a genuinely new theme earns.

**Reread on edit.** Open the chapter, read it whole, and then change it. An edit made from memory of a chapter is how a chapter acquires two voices and a contradiction.

**Every chapter edit updates its cover in the same act.** A chapter whose synopsis still describes the old version is [the cover/chapter gap](../bookkeeping/03-on-covers.md), and it is the most common failure this library has.

Use the tool, not a hand edit:

```bash
npx tsx .claude/library/bookkeeping/03-on-covers--toc.ts <cover.md> <NN-chapter.md> "synopsis"
npx tsx .claude/library/bookkeeping/03-on-covers--toc.ts <cover.md> <NN-chapter.md> "synopsis" --force   # overwrite
npx tsx .claude/library/bookkeeping/03-on-covers--toc.ts <cover.md> --get <NN-chapter.md>                # read one entry
```

It parses every entry, round-trips them, and refuses to write a cover it cannot reproduce — so a cover is updated **without reading the whole book**, and an existing synopsis is never lost by accident.

## What a compounding pass does

1. **Name what was learned**, in one line, as an observation rather than a conclusion.
2. **Find the room** — the chapter that already covers this. [`/remember`](../our-skillset/22-remember.md) is the navigation.
3. **Check for overlap before writing.** If a chapter already says most of this, **edit it**. Two chapters on one lesson drift; that is the whole reason this library is edit-first.
4. **Reread the chapter, then edit it.**
5. **Ground every claim.** A statement about how the code behaves is verified by reading the defining line — not recalled from the session. This is [cite or stop](../..teamsmanship/08-coding-policy.md), applied to a record future work will trust.
6. **Check the neighbourhood, with bounds.** Look at what the edited chapter cross-references and what references it; fix what this lesson's own evidence shows is wrong. **Neighbourhood only, never a whole-book audit, and never on a guess** — if judging a neighbour needs investigation this lesson did not do, flag it for the retro instead.
7. **Update the cover** in the same act, with the tool.
8. **Link it from the sprint chapter.**

## Doing it with the team

Where their plugin dispatches parallel subagents for research and review, we have teammates. A compounding pass that touches several libraries is [`/think-async`](../our-skillset/27-think-async.md) — each teammate distributing into their **own** library, in their own voice, because [no one writes another person's chapter](../teamspeak/05-autonomy.md).

The same applies to the workflow's other steps: research at [ce-plan](../our-skillset/29-ce-plan.md) time and review before [ce-work](../our-skillset/30-ce-work.md) closes are both many-teammates-at-once, and that is what think-async is for. Their specialist agents are our people, and ours already know what they are responsible for.

<!-- citations -->
[ce]: https://github.com/EveryInc/compound-engineering-plugin/tree/6a2a0f9940ab0b3577ce26226ee393390470e412 "Compound Engineering plugin, EveryInc — pinned at commit 6a2a0f9, v3.21.1"
[ce-compound]: https://github.com/EveryInc/compound-engineering-plugin/blob/6a2a0f9940ab0b3577ce26226ee393390470e412/skills/ce-compound/SKILL.md "ce-compound — authoritative runtime spec"
