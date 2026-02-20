# Architecture Decision Records

> Decisions are documented here by the Architect. Each ADR captures the context, options, and reasoning behind a technical choice. ADRs are append-only — superseded decisions are marked, not deleted.

---

<!-- EXAMPLE ADR — replace with your own decisions, keep this as reference -->

## ADR-000: Example — Database Selection

**Date**: 2025-01-15
**Status**: accepted

**Context**: We need a database for storing user sessions and project data. The app is a single-tenant SaaS with moderate write volume and complex relational queries.

**Options Considered**:
1. **PostgreSQL** — Mature relational DB, excellent for complex queries, strong ACID guarantees. Requires separate hosting.
2. **SQLite** — Zero-infrastructure, embedded. Good for single-server deployments, but no horizontal scaling.
3. **MongoDB** — Flexible schema, good for document-style data. Overhead of learning a new query model for a relational dataset.

**Decision**: PostgreSQL. The relational data model maps naturally to our entities, and managed hosting (e.g., Neon, Supabase) eliminates operational overhead.

**Consequences**:
- Pro: Full SQL, joins, transactions, excellent ecosystem
- Pro: Managed hosting available from day one
- Con: More setup than SQLite for local dev (mitigated by Docker Compose)
- Note: If we ever need to go multi-region, evaluate CockroachDB as a drop-in replacement

<!-- END EXAMPLE -->

---

<!-- Add new ADRs below in the same format. -->
