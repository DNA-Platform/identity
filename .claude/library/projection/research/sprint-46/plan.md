# Sprint 46 — The Full Picture

Run the infrastructure. Get the data current. Then step back and look at the whole account — 694 conversations across a year — and decide how to process it.

## Sprint goal

**The parser runs on the new export. The app captures fresh mappings. Then the team spikes on the cataloguing approach: project-by-project vs chronological, and designs the multi-sprint work plan.**

## Track A — Infrastructure (Adam drives)

Get the data pipeline current.

| ID | Story | Owner |
|----|-------|-------|
| A-1 | Run parser on 2026-05-16 export | Adam |
| A-2 | Run app capture for project-conversation mappings | Adam |
| A-3 | Diff against existing data — what's new? | Adam |
| A-4 | Build all 20 project books (generalize DNA Patternity pattern) | Adam + Libby |

### A-4 details

Apply the template established in sprint 44:
- `.cover.md` per project with conversations table + `[.md]` direct links
- `..files/` sub-book where project files exist (with `[.ext]` direct links)
- Navigation on all chapters (prev/next + cover link)
- Chapters link to full conversation transcripts

## Track B — The Cataloguing Spike (whole team)

How do we process 694 conversations into identity understanding?

| ID | Story | Owner |
|----|-------|-------|
| B-1 | Map the account holistically — timeline, volume per project, language distribution | Arthur |
| B-2 | Identify .home conversations (not in any project) | Adam |
| B-3 | Propose cataloguing approach: project-by-project vs chronological vs hybrid | Arthur + Claude |
| B-4 | Estimate work per project — which are big? which are trivial? | Libby |
| B-5 | Design the multi-sprint work plan | Arthur |

### The approach question

Doug raised this: going project-by-project gives deep understanding of one topic but cross-cuts time — you get tunnel vision on "Doug as designer" without seeing "Doug last Tuesday." Going chronologically (conversation by conversation, in date order) introduces us to Doug and Ana organically — we meet them as they were, day by day. But it fragments project understanding.

**Possible hybrid:** Process chronologically within time windows (e.g., one month at a time). For each conversation: tag it (project, speaker, language), write the chapter summary, update the relevant identity books. The timeline gives organic introduction. The project tagging gives structure. The identity books accumulate either way.

**Big projects to plan for:**
- Ana's Fiverr Inbox — heavy use
- Semantic Reference Theory — heavy use
- Investing — heavy use
- DNA Patternity — done (template)
- Eirian — 56 docs, deep identity content

**Deliverable:** A written decision in `claude-migration/` — the approach we'll use and the multi-sprint schedule.

## Track C — Identity book seeding

As conversations are processed (even a small sample), begin populating:

| ID | Story | Owner |
|----|-------|-------|
| C-1 | Read a sample of chronologically early conversations | Claude |
| C-2 | First identity book entries — who are Doug and Ana in June 2025? | Claude + Libby |
| C-3 | Find Seren conversations (grep across all transcripts) | Adam |
| C-4 | Tag all 694 conversations by primary language (Russian/English/mixed) | Adam |

## Constraints

- Don't break the export abstraction — the parser should run cleanly on any fresh export ZIP
- DNA Patternity is the template; don't reinvent for other projects
- Rich summaries take time — not every conversation needs one immediately. Thin chapters (title + date + messages + link) are fine as a first pass. Rich summaries can be added in later sprints for flagged conversations.
- Identity books grow incrementally — don't try to write complete portraits from one sprint

<!-- citations -->
[sprint-45 plan]: ../sprint-45/plan.md
[dna-patternity]: ../../../library/claude-legacy/projects/dna-patternity/.cover.md
[identities catalogue]: ../../library/..people/.cover.md
