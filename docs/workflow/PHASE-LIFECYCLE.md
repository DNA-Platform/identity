# Phase Lifecycle

> The five-step flow every phase follows. Steps involving inactive agents are skipped.

## Phase Directory Structure

```
docs/phases/
  phase-1-foundation/
    PLAN.md              # Phase goals, scope, success criteria
    STORIES.md           # User stories with acceptance criteria
    STATUS.md            # Current progress tracker
  phase-2-core-features/
    ...
```

## Phase Flow

```
1. PLANNING
   ├── PM: Breaks requirements into user stories
   ├── Architect: Proposes tech approach, identifies risks
   ├── [If UX active] UX Designer: Maps user journeys for phase scope
   ├── [If Marketing active] Marketing: Reviews messaging alignment
   └── Human: Approves phase plan (DECISION POINT)

2. DESIGN
   ├── Architect: Detailed technical design, API specs, schemas
   ├── [If UX active] UX Designer: Wireframes and component specs
   ├── [If Security active] Security: Threat model review
   ├── [If Marketing active] Marketing: Brand/messaging review
   └── Human: Approves designs if major changes (DECISION POINT)

3. IMPLEMENTATION
   ├── [If Backend active] Backend Lead: APIs, database, business logic + unit tests
   ├── [If Frontend active] Frontend Lead: UI from UX specs + component tests
   ├── QA: Writes functional/integration tests from acceptance criteria
   ├── [If DevOps active] DevOps: Updates infrastructure and deployment configs
   └── Agents resolve blockers between themselves

4. VERIFICATION
   ├── QA: Runs full test suite, reports results
   ├── [If Security active] Security: Code review → writes docs/phases/<phase>/SECURITY-REPORT.md
   ├── [If TechWriter active] Technical Writer: Updates all documentation
   └── PM: Validates all acceptance criteria are met

5. REVIEW
   └── Human: Reviews completed, tested phase (DECISION POINT)
```

## Checkpoint / Resume Pattern

Before each story begins, the PM writes current story + `in-progress` status to `STATUS.md`. If `/implement-phase` is interrupted and re-run, it reads `STATUS.md`, skips `done` stories, and resumes from the first `in-progress` or `ready` story.

## Small Team Adaptation

If the team is small (e.g., just Architect + Backend + QA for a CLI tool), the PM may combine planning and design into a single step, and verification becomes "tests pass + PM validates."

## STATUS.md Lifecycle

- During a phase: `STATUS.md` reflects current state only (what's active, blocked, escalated)
- After phase completes: move completed stories to `STATUS-ARCHIVE.md` to keep `STATUS.md` small
- `STATUS-ARCHIVE.md` is append-only historical record

## Context Optimization Rules

1. **One concern per file.** Don't mix API specs with user stories.
2. **Reference, don't inline.** Write "See `docs/architecture/api-spec.md`" instead of copying content.
3. **Progressive disclosure.** Summaries at the top, details below. An agent should be able to decide relevance from the first 10 lines.
4. **Status files are current state.** `STATUS.md` reflects what's happening now, not history.
5. **Prune aggressively.** Remove outdated docs. Wrong docs are worse than no docs.
6. **Team-aware loading.** Only load agent definitions and docs relevant to the active team.
