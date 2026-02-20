# Phase 1 Stories

> Stories are ordered by priority. Each story must have clear acceptance criteria before moving to implementation.
>
> **Story quality checklist** (PM verifies before implementation begins):
> - [ ] At least 2 acceptance criteria in Given/When/Then format
> - [ ] Priority assigned (P0–P3) and agent assigned
> - [ ] Technical notes reviewed by Architect
> - [ ] No ambiguous requirements (escalate to human if unclear)
>
> **Pruning rule**: Once a story reaches `done`, replace its full content with:
> `## STORY-NNN: [Title] — COMPLETE. See STATUS.md.`

<!-- This is a completed example phase. Stories 001-002 are pruned (done). Story 003 shown in full as a reference. -->

---

## STORY-001: User Registration — COMPLETE. See STATUS.md.

## STORY-002: User Login and Session Management — COMPLETE. See STATUS.md.

---

## STORY-003: Password Reset via Email

**As a** registered user, **I want** to reset my password via email, **so that** I can regain access if I forget my credentials.

### Acceptance Criteria
- [ ] Given a valid email address, when I request a reset, then I receive a reset email within 60 seconds
- [ ] Given a valid reset token, when I submit a new password, then my password is updated and I am logged in
- [ ] Given an expired or already-used token, when I submit a new password, then I see a clear error and am prompted to request a new link
- [ ] Given an email not in the system, when I request a reset, then I see a generic "if this email exists" message (no enumeration)

### Technical Notes
- Reset tokens: 32-byte random hex, SHA-256 hashed in DB, expires in 1 hour
- One active token per user (requesting a new one invalidates the old one)
- Email sent via Resend. Template in `src/emails/password-reset.tsx`
- See ADR-003 for token storage decision

### UX Spec
- See: `docs/ux/specs/password-reset-flow.md`

### Status: done
### Assigned: backend-lead
### Priority: P1-high
