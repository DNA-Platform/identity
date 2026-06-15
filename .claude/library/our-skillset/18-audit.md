# audit

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

The `/audit` skill runs every automated check the library has. It is the single command that means "check everything" — bookkeeping validation, link checking, compiled-link verification, compiler staleness detection, and branch separation.

The skill reads [Compilation](../.compilation/.cover.md) to know what to check. The Compilation catalogue inventories every compiler, validator, and tool. The audit runs them all and reports results. If a process is catalogued in Compilation but the audit doesn't run it, that's a gap in the audit. If the audit runs something not catalogued in Compilation, that's a gap in the catalogue.

Four scopes: `full` (everything), `identity` (identity library only), `branches` (branch libraries only), `quick` (what the commit tool gates on). Default is `full`.

The skill itself is a generated file with provenance — it satisfies the same provenance constraint it checks.
