# HTML Catalogue

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

The HTML catalogue is a lazy-memoized map from HTML tag name (`'div'`, `'span'`, `'button'`) to a `$Html$` wrapper chemical. The `$('tagname')` callable form looks up an entry; `$('tagname', X)` overrides the wrapper for one site.

## Rules

- *(TBD — entries are memoized on first lookup.)*
- *(TBD — the override form does not mutate the catalogue.)*

## Cases

- `$('div')` — basic lookup.
- `$('div', X)` — override.
