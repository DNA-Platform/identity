# The Ledger That Remembered What It Wrote

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** tooling · library · stale-artifact
- **sprint:** [Sprint 122](../projection/127-sprint-122--one-ledger.md#found)

---

## Symptoms

**The importer, run bare over every conversation on 2026-11-06, said 981 of 983 imported conversations were edited by hand.** No error, no warning; the run exited 0, the pairing against the capture showed no difference, the messages written back against the export showed none. For Semantic Reference Theory alone:

```
Semantic Reference Theory: 82 conversations
  edited Seren & The Philosophy of Consciousness · 182 shown of 192, 10 aside · 2 days · … · imported 2026-10-21 from the export of 2026-05-27
  edited Specifying SRT · 350 shown of 410, 60 aside · 6 days · … · imported 2026-10-21 from the export of 2026-10-16
  …  (79 edited in all)
  new    Goldbach through Godel · 701 shown of 805, 104 aside · 14 days · Semantic Reference Theory · the capture
```

Nobody had edited 981 conversations. Doug's library's repository had nothing uncommitted under the conversations and no commit since 2026-10-29.

## What it turned out to be

**The ledger was a memory of what the importer wrote, and nothing ever refreshed it.** Each line held the digest of the book's files as the importer left them on 2026-10-21, and `importState` called any book whose folder no longer hashed to that digest *edited*. On 2026-10-29 Sprint 117's one-time script narrowed the imports of 6,327 files under the conversations, by design and by commit, so every book's digest moved at once and every line went stale. The ledger had no word for a change that was the library's own, and a run only ever rewrote the lines of the conversations it selected, so the staleness could not clear itself.

Proven over all 983 lines, read-only, from the repository: every line's digest equals its book as it stood before that commit, once two line-ending trails were closed. The repository normalizes text to LF under `* text=auto eol=lf` while the importer hashes the bytes on disk, so an archive's bytes matched the ledger only where a file unchanged in content was taken with its bytes on disk; and two resource files carry mixed endings, which a whole-file restoration got wrong and a per-file rule got right. Ten books resisted until that rule; none was a hand edit.

## How it was found

By the bare run, which exists to say what a write would do before it does it, and by the history: the folder's commits since the import were three, the import's two and the script's one, and a diff of one book across the script's commit was import lines only. The proof scripts, `digest-at.mjs` and `digest-all.mjs`, stood in the session's scratchpad and were not the library's.

## Why no gate caught it sooner

The importer's promises checked that a changed file reads edited, which was true and was the defect. No promise asked what a change the library made by script should read as, because the ledger's design had no state for it. And no run touched the library between the script and the import, so nothing listed the ledger for a week.

## What changed

Sprint 122 made the ledger one, beside The Importer, and made it represent reality: a writing run rewrites it whole at its end from the books on disk, a hand edit is an explicit mark set when a writing run finds a book moved and does not re-import it, and `--settle` is the word that takes a change of the library's own as it stands. **A script that rewrites the library's books is followed by a settling run, or the next listing will call every book edited.**
