# Serving the Library

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

**keywords:** port · 4343 · preview · base · root · strictPort · workbench · 5173

---

***This library is served on port 4343 and on no other.*** Chosen 2026-11-05 on Doug's word, *"choose a port to run this on, note that in the library branch"*: 4242 is his own library's, the tab he keeps open, which [the sweep](../../../../.claude/library/..environmentalism/11-on-strays.md) spares; 4343 is its sibling, already named in the manual's fifth chapter and in the workbench, and from today the rule rather than a habit.

## <a id="addresses"></a>The addresses

| what | address |
|---|---|
| the site | `http://localhost:4343/inexplicable-phenomena/` |
| the root book, Our Library | `http://localhost:4343/inexplicable-phenomena/our-library/` |
| any book | `http://localhost:4343/inexplicable-phenomena/<the name's slug>/` |
| a chapter of a book | `…/<book>/#<the chapter's slug>` |
| the workbench, live from the sources | `http://localhost:5173/inexplicable-phenomena/` |

The base is `/inexplicable-phenomena/`, the repository's name, so the bound site stands at the same path on GitHub Pages as it does here. The root `/` answers with a shell that forwards to the root book `.pubconfig` names, Our Library; every book stands at its own address, the slug of the name in its title's paren.

## <a id="commands"></a>The commands

```
cd library/.public/.binding
NODE_OPTIONS=--max-old-space-size=10240 npm run bind
npm run preview -- --port 4343 --strictPort
```

`--strictPort` is the rule's teeth: a taken port fails rather than sliding to 4344, where a page would be mistaken for this site. The preview serves what the last bind left under `library/.public`, committed as it was bound, and needs no restart after a bind: five binds of Sprint 121 were read through one preview. The workbench, `node library/.reference/5-developing-the-library~workbench.mjs`, serves the sources live on Vite's 5173 and photographs a look; it is closed before any folder under `library/` is renamed and reopened after `.pubconfig` changes, for the reasons [Sprint 121](../projection/126-sprint-121--every-book-a-stub.md) records.
