# Escalation Rules

> Defines what requires human input vs. what agents resolve between themselves.

## Requires Human Input

- Approving a phase plan before implementation begins
- Major architectural decisions (new framework, database choice, cloud provider)
- UX design approval for user-facing flows (if UX agent active)
- Budget or timeline implications
- Ambiguous requirements that can't be resolved from existing docs

## Resolved Between Agents

- Technical implementation details
- Minor API design choices within established patterns
- Test strategy and coverage decisions
- Documentation structure and wording
- Bug fixes and refactoring within approved scope
- Dependency version choices (use Context7 for latest docs)

## Escalation Protocol

1. Agent identifies an issue requiring escalation
2. Agent documents the issue, options considered, and recommendation in the relevant `STATUS.md`
3. PM aggregates escalations and presents to human with context and a recommended path
