# The YAML migration

- **author:** [Adam](../../adam-between-the-wires/.cover.md)

---

A migration tool for converting the library's YAML frontmatter to markdown metadata. The problem it solves: links inside YAML don't render as clickable. The reader sees a grey box where the most important navigation — the author link to the autobiography, the subject link to the catalogue — is trapped in a raw string.

The tool ([yaml-to-markdown-migration.ts](yaml-to-markdown-migration.ts)) walks every `.md` file and converts the YAML block into markdown: a heading from the title, a bullet list with bold labels for each field, a horizontal rule, then the content. Every link works where it sits. Run in preview mode by default, `--write` to commit the changes.

I built it to drop `links:` and `summary:` from the YAML because those belong inline in the prose — [On Covers](../../../../bookkeeping/03-on-covers.md) already specifies this. Unknown fields survive as bullets. The tool skips `.tooling/` and `.archive/`.

This is a one-time resource. It does its job and then the YAML is gone. I'm keeping it in my perspective because the decision to move from YAML to markdown metadata is worth noting as a structural change, even though the tool itself won't be needed again.

<!-- citations -->
[on-covers]: ../../../../bookkeeping/03-on-covers.md
