# The Word Two Barrels Both Exported

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** model · shadowed-name
- **sprint:** [Sprint 123](../projection/128-sprint-123--organizing-the-conversations.md#d8)

---

## Symptoms

**On 2026-11-06, with new sorts of annotation added to the package among them one named Topic and one named Theme, promises that had been green went red with no word about why: the word they imported from the package was undefined where it had stood since Sprint 97, and nothing named the new files.** No file was wrong on its own. The new sort's file exported its class and its word as every sort does; the folder's index re-exported the file with `export *` as it re-exports every file; the package's index re-exported the folder the same way, beside the writing folder that had always exported Theme and the catalogue's edge that had always exported Topic.

## What it turned out to be

A name two star exports both provide is ambiguous, and the module system's rule for an ambiguous star export is to export it under neither. So the new file did not shadow the old word and did not collide with it loudly; it cancelled it. The package stopped exporting a word it had exported for weeks, the index said nothing because every line of it was correct, and the only place the loss showed was the first promise that asked for the word by name. The symptom stood as far from its cause as a promise is from a barrel.

## How it was found

By reading the names rather than the files: every exported name of the package's source listed and the duplicates printed,

```bash
grep -rhoE "^export (const|class|type|interface|function) \$?[A-Za-z_]+" src | awk '{print $3}' | sort | uniq -d
```

which printed Topic and Theme and nothing else. The two sorts became one, Matter, a word the package did not hold; the check printed nothing; the promises were green again. The rule is [D8 of Sprint 123](../projection/128-sprint-123--organizing-the-conversations.md#d8): a new package word is checked against every exported name before it is kept, and the reading's sorts take names the package does not hold, which is also why Importance stands for his Important and Reminder for his Remember.

## Why no gate caught it sooner

The gates run after the build, and a word that quietly stops being exported passes the typecheck of every file that declares it; only the files that import it fail, and they fail by the word's absence, not by the collision's presence. The gate that names the cause is a listing of exported names for duplicates, and it did not exist; it exists now, one line, and precedes every new word.

## What changed

The duplicate check over the package's exports is run before any export is added to `library/.public/package/src`, and it is empty at every commit of Sprint 123 since; eighteen sorts stand in the annotations folder and none bears a name the package held. The lesson generalizes beyond sorts: a package that re-exports its folders by star has one namespace, whatever its folders are called, and a new word is a claim on the whole of it.
