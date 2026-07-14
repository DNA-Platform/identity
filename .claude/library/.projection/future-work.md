# Future Work

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

Seeds for future sprints. Check at planning. Delete entries when done.

## Implementation chapter expansion

15 Implementation chapters are stubs (~15-25 lines each). Cathy reads each source file and writes the chapter. Pure mechanical work — the code is the source of truth.

## Reference Desk test scripts

The dna-library has 24 test scripts at `../dna-library/.claude/agents/src/scripts/test-*`. These verify driver behaviors: file upload, conversation read, project creation, session management. Lift with the code in Sprint 72. Use in Sprint 73 when Adam and Claude verify the book against the code.

## Tending as you read

[Librarianship](../..librarianship/.cover.md) has no chapter on the practice of improving the library *while* you are reading it — fix the broken link you pass, compress the paragraph that sagged, connect the two rooms that should have been linked. [Tending](../teamspeak/06-tending.md) describes it as a retro activity; [`/remember`](../our-skillset/22-remember.md) doesn't mention it at all. The idea that belongs in Librarianship: a person tends their garden when they enjoy it even as they improve it, so reading and mending are one motion, not two chores. Libby's to write.

## Stale personal-library links to altered-states

48 links in the identity library do not resolve from inside this repo: 44 in [Nancy's](../..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md) books, 4 in [Gabby's](../..teamsmanship/..team/gabby/..what-beauty-serves/.cover.md). They reach for `library/.lib/…`, `library/reports/…`, `library/papers/…` and `src/…` — content that lives in the **altered-states** repo, where both of them work. Most are the intentional cross-repo reach [Branches](../library-tree/01-branches.md#the-one-way-link-convention) says degrades to text, and are cosmetic. A few are not: Nancy's `thinking/09` and `thinking/10` point at `../../../../the-build/…`, which resolves *inside* `.claude/library/` — wrong depth, not cross-repo, simply broken.

These are personal libraries, so they are **Nancy's and Gabby's to fix, no one else's** ([Authorship](../teamspeak/10-authorship.md)). The seed is to raise it with them, not to sweep it. Worth deciding at the same time: whether a link that only resolves in a sibling repo should be written as a link at all, or as plain text with the path named — because as long as they're links, this library reports 48 broken forever and the real breaks hide in the noise.

## Identity needs a new way of being tracked

Doug deleted `library/identity/` on 2026-07-14 — the author-cover experiment, where each person kept a folder and an autobiography under `library/identity/<name>/` and issues linked to it as a byline. He may put it back. What replaced it is undecided: *"I need a new way of tracking identity."* Note that the team's own identity — autobiographies under `.claude/library/..teamsmanship/..team/` — was never what this touched; this was identity for **the public library's** authors, in the project repo. Revisit before anything depends on `library/identity/<name>/` paths again.

## Issue tracking is unsettled

Two attempts, both retired. First a folder of `issues/NNNN-slug.md` files with a pinned `0000-start-here.md`; then the GitHub Issues API behind an `/issue` skill. Doug removed both — *"I removed issues. It was bad."* — and the skill is parked in `.claude/.archive/skills/issue/` with its chapter deleted from [Our Skillset](../our-skillset/.cover.md#archived).

What went wrong is worth naming before attempt three: the file tracker duplicated state the repo already held and had to be hand-synced; the GitHub migration then moved exactly one issue (`#1`, catalogue) and deleted the folder out from under the other five, losing two live tasks — books for **chemistry** and books for **philosophy** — which now exist only in commit `08d4d75`. `#1` is still open on GitHub. Doug will return to this; the seed is to not re-file work into a tracker until the tracker is chosen.
