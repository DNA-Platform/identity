# On Compiled Links

- **specification:** Compiled Link
- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

Every compiled file contains links back into the library. These links are the pathway from the platform into the knowledge. If they break, the compiled file is an island — it tells the platform what to do but not where to learn more. The links must survive compilation and resolve from wherever the compiled file lives.

## The resolution problem

Compiled files live in different directories within `.claude/`:

| File | Lives at | Links must resolve from |
|------|----------|------------------------|
| Agent files | `.claude/agents/{name}.md` | `.claude/agents/` |
| Rule files | `.claude/rules/{name}.md` | `.claude/rules/` |
| CLAUDE.md | project root (copied from `.claude/`) | project root |

Agent files and rule files stay inside `.claude/`. Their links use `../library/` to reach the library — one level up from their directory to `.claude/`, then into `library/`. This works because these files are never moved.

CLAUDE.md lives at the project root. The platform reads it from there. The human reads it from there. Links use `.claude/library/` — the path from the project root into the library. The identity repo carries a copy inside `.claude/` for transport; it gets copied to the project root on arrival.

## The rule for compilers

Each compiler knows where its output lives. The link prefix follows from that:

- **From `.claude/agents/`**: prefix is `../library/`
- **From `.claude/rules/`**: prefix is `../library/`
- **From project root** (CLAUDE.md): prefix is `.claude/library/`
- **From `.claude/agents/` to `.claude/rules/`**: prefix is `../rules/`

The compiler constructs every link by combining the prefix with the path within the library. The path within the library is always relative to `library/` — the same path you'd use in any library book's citation. The prefix adapts it to the compiled file's location.

## Section anchors

Links in compiled files should target specific sections when the section answers a likely question. Not just `03-on-covers.md` but `03-on-covers.md#author` — directly to the field being referenced. Section anchors are generated from markdown headings. They survive compilation because they're part of the target file, not the compiled file.

## What compilers must do

1. Every compiled file must contain at least one link to the [library catalogue](../..librarianship/.cover.md). This is the universal entry point — if all other links fail, this one reaches everything.

2. Links to teammate-specific content (autobiographies, personal libraries) must use the full path through `..teamsmanship/..team/{name}/`. No shortcuts through intermediate directories.

3. Links to shared books (Bookkeeping, Teamspeak, Environmentalism) use the book's directory name directly: `bookkeeping/.cover.md`, `teamspeak/01-voice.md`.

4. The link text must carry meaning without following the link. `[voice convention](...)` not `[01-voice.md](...)`. The text is [tier-zero synopsis](../bookkeeping/04-on-names.md) for the target.

## Ground truth for link validation

The ground truth for whether a markdown link works is: does the rendering environment resolve it to the intended target? For this library, the rendering environment is VS Code. VS Code resolves relative link destinations per RFC 3986 relative URL resolution — relative to the containing document's URI.

The validator must use the same resolution logic, not a substitute. Using Node's `path.resolve` or `existsSync` as the sole authority validates against the filesystem API, not against how the renderer resolves links. If they agree, the check passes for the wrong reason. The spec is the authority.

The link validation chain:
1. **Extract** the link destination using the [CommonMark parser](https://www.npmjs.com/package/commonmark) — the spec, not a regex
2. **Resolve** the destination per RFC 3986 relative URL resolution against the containing file's location
3. **Check** that the resolved path points to an existing file

The validator ([check-links.ts](../.tooling/check-links.ts)) uses the CommonMark parser for extraction. Resolution and existence checking should follow the same standard the renderer follows.

## Testing compiled links

After any compiler run, verify that every link in the compiled output resolves. The [validation runner](../.tooling/validate.ts) checks both library links and compiled file links. The project root `CLAUDE.md` must be checked from the project root — it has `.claude/` prefixed paths that resolve differently from the internal copy.

<!-- citations -->
[on-teammates]: 01-on-teammates.md
[on-bootstrap]: 02-on-bootstrap.md
[on-rules]: 03-on-rules.md
[on-skills]: 04-on-skills.md
[on-sync]: 06-on-sync.md
[names]: ../bookkeeping/04-on-names.md
[links]: ../bookkeeping/06-on-links.md
[librarianship]: ../..librarianship/.cover.md
