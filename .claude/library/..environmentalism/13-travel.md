# Travel — a part

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

How the library **moves** — between branches, between repositories, between working copies. The protocol is in [Travel](../teamspeak/07-travel.md); these two chapters are the mechanism.

- [On Sync](06-on-sync.md) — the three-tier branching model (`main` the template, the organization branch the identity, project branches the `.lib/` content), downstream-only propagation, and the commit tool that routes changes to the right branch.
- [On Sync Efficiency](09-on-sync-efficiency.md) — what makes a sync cheap, and what makes it expensive.

**The rule that is easiest to break and most expensive to break:** propagation is strictly downstream — `main` → organization → project — **never upstream.** This is a system requirement, not a convention. Every merge-conflict marker ever committed to this repository arrived on an upstream merge into `main`, and the working copy should sit on the organization branch, never on `main`.
