# The tree Doug walks

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

[Book: [The Build](.cover.md)]

Part of this repository is a place Doug walks to show the work. That part is optimized for him, and
for nothing else - not for our convenience, not for our checks, not for what a tool happens to leave
behind. The spring cleaning made it navigable; this chapter is what keeps it that way.

## His words

- *"I need you to write down in a branch that if a part of the tree is something I navigate to show
  the work, it needs to be optimized for me. No cruft on the way, as few figures as possible, exactly
  the ones I asked for, no data files etc... We need this so I can show our work."*
- *"figures is a place where I ask for work, not a dumping ground for your mess."* - *"If you verify
  like that great"* - but not there.
- *"We care about my ability to navigate and you and I do that very differently."*
- *"Make sure that MEI has the same cleanliness in its figures. I have asked for exactly one."*
- *"Python cruft folders are AWFUL to look at."*

## The rules

1. **`figures/` holds exactly the figures Doug asked for.** One asked, one there. No variants (a log
   axis, a second recipe), no review pages, no checks, no "while we were at it". A figure he has not
   asked for is not made into `figures/` - propose it in words and let him ask.
2. **Verification lives beside its numbers, off his path.** The twin's health panels are in the twin
   pipeline's `validation/`; the MEI pipeline's checks write to `verification/`. Checking is welcome;
   showing it where the work is shown is not.
3. **No bytecode in the tree.** The project's Python writes it outside the repository: here through
   `sys.pycache_prefix`, set by `altered_states_pycache.pth` in the venv's site-packages; on the box
   through `PYTHONPYCACHEPREFIX` in [`/als-remote`](../../../.claude/library/our-skillset/34-als-remote.md)'s
   environment, into `.tools`. A `__pycache__` seen anywhere under `src/` is a regression: delete it and
   find what wrote it.
4. **No orphans.** A cache, log or file that no code writes any more goes in the change that orphaned
   it - a `_cache/` the pipeline moved away from, a `_smoke.log`, the old name of a renamed figure.
5. **Ask before adding to his path.** Before a file lands in a folder he walks: did he ask for it? If it
   is for us - a probe, a check, a scratch look - it lives in the run's record, `verification/`, or the
   session's scratchpad, never in a folder he opens to show the work.

## Names, and the folders that give them context

*"can you stop doing one word figure names when its not clear? explained variance was good. Comparison
is good. But stop like auto-one-wording everything. It's so lazy. You have to attempt to ask yourself if
it's well named. Humans have to read and find it and reading is costly for humans. We need good names -
a balance of short and easy to read and description. Too long, scanning is hard. Too short, scanning
doesn't work. Folder systems - the folders provide context that is good. Too much context and sparsity
and the system becomes untraversable."* And: *"Don't label like contrast-02 because we are finding one
and only one way to generate it."*

1. **Ask of every name: would Doug, scanning, know what this is?** Reading costs him; a name is read
   many more times than it is written. `explained-variance.png` passes; `checks.png`,
   `resolution.png`, `page_01.png` do not.
2. **Balance.** A few plain words, hyphenated - long enough to say what it is, short enough to scan.
   No abbreviations he has to decode, no machine labels (`contrast-0.2`, `B_matched`) where a word
   would do.
3. **Folders carry context, so names need not repeat it** - `mei/artifacts/33328/figures/comparison/`
   already says whose, which dataset, what kind; the file inside says only what it shows. But a folder
   is a click: many thin folders of one file each make the tree untraversable. Add a level only when it
   groups things he will look for together.
4. **No variant labels for the method.** We are finding one way to make each thing; the names say
   what it is, not which of our trials made it. A second way is exploration, and exploration does not
   go on his path.

## How it failed, 2026-09-27

In one day: the twin pipeline's per-twin verify panels were written into `figures/`; the MEI figures
grew to 64 review pages, two check panels, a log-axis variant and a speed check where one comparison
was asked for; eleven `__pycache__` folders appeared under `src/`, most from our own compile checks;
and two `_cache/` folders and a log sat orphaned in the pipelines. Each was put there by a teammate who
was checking something real. The rule above is what the checking was missing: *where* a thing lives
is part of doing it.

---

[Previous: [Why synthesis is slow](14-why-synthesis-is-slow.md)] | [Book: [The Build](.cover.md)]
