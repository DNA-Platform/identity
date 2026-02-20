# Phase 1: Foundation

> **Goal**: Stand up the core infrastructure — auth, database, CI/CD — so implementation phases have a stable base to build on.
> **Status**: complete

<!-- This is a completed example phase. Use it as a reference when planning real phases. -->

## Scope

### In Scope
- User authentication (signup, login, logout, password reset)
- PostgreSQL database with migrations framework
- CI/CD pipeline (GitHub Actions: test → lint → deploy to staging)
- Basic API health check endpoint

### Out of Scope
- User profile management (Phase 2)
- OAuth / social login (Phase 3)
- Production deployment (Phase 2)

## Success Criteria

- [x] Users can register, log in, and log out
- [x] Password reset flow working end-to-end via email
- [x] All acceptance tests passing in CI
- [x] Security review completed (no critical/high findings)
- [x] Documentation updated (README, API-SPEC, DECISIONS)

## Dependencies

- Hosting environment selected and provisioned (human decision — complete)
- Email provider configured (Resend) — API key in secrets

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Email delivery issues in staging | M | M | Use Resend with verified domain early; add delivery logs |
| JWT token invalidation complexity | L | H | Use short-lived access tokens + refresh tokens from day one |
| Migration framework lock-in | L | M | Use standard SQL migrations (not ORM-specific) |

## Stories

See `STORIES.md` in this directory for the full story breakdown.
