# User Story Format

> All stories live in `docs/phases/<phase>/STORIES.md`. Use this format consistently.

## Story Template

```markdown
## STORY-001: [Title]

**As a** [user type], **I want** [goal], **so that** [benefit].

### Acceptance Criteria
- [ ] Given [context], when [action], then [result]
- [ ] Given [context], when [action], then [result]

### Technical Notes
- [Implementation approach from Architect]
- [Dependencies on other stories]

### UX Spec
- See: `docs/ux/specs/[spec-name].md`

### Status: [draft | ready | in-progress | testing | done]
### Assigned: [agent shorthand]
### Priority: [P0-critical | P1-high | P2-medium | P3-low]
```

## Quality Checklist

Every story must have before moving to implementation:

- [ ] At least 2 acceptance criteria in Given/When/Then format
- [ ] Priority assigned (P0–P3)
- [ ] Agent assigned
- [ ] Technical notes reviewed by Architect
- [ ] No ambiguous requirements (if unclear, escalate to human)

## Pruning Rule

Once a story reaches `done` status, its full content in `STORIES.md` is replaced with a one-liner:

```markdown
## STORY-003: [Title] — COMPLETE. See STATUS.md.
```

The PM or Technical Writer prunes stories at each checkpoint to keep context lean.
