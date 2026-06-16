# On Consistency

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

A [link](06-on-links.md) is a claim that two pieces of content are related. The [link checker](../..environmentalism/05-on-validation--check-links.ts) verifies that the target exists. But existence is not consistency — the target can exist and still contradict what the source says about it.

Consistency means: the source's description of the target matches what the target actually says. When a synopsis describes a book's theme and the book's cover has been rewritten with a different theme, the synopsis is stale. These divergences accumulate silently — every sprint that changes content without updating the synopses that describe it adds another crack.

The deepest cause of consistency failures is anti-evolution content — descriptions that encode facts that change when someone else adds content. See [On Synopsis § Write for evolution](09-on-synopsis.md#write-for-evolution) for the full specification and the patterns to avoid.

## Two tools

### Link consistency checker

[06-on-links--consistency.ts](06-on-links--consistency.ts) — reads both sides of every link in a file or directory and reports mismatches.

```bash
npx tsx .claude/library/bookkeeping/06-on-links--consistency.ts .claude/library --verbose
```

What it checks:
- **Count mismatches.** When a source paragraph says "seven chapters" and the target directory has eight, the count diverged. This catches exactly the problem of adding chapters without updating the catalogue entry.
- **Keyword mismatches.** When a source paragraph uses terms that don't appear anywhere in the target's opening paragraph, the source may be describing an outdated version of the target.

Use during [`/organize`](../our-skillset/08-organize.md) to find stale synopses. Use during [`/reflect`](../our-skillset/19-reflect.md) to verify that your personal catalogue still describes your books accurately.

**Known limitations:** Count mismatches are high-signal but produce false positives when a sentence mentions a NUMBER about one thing while linking to a DIFFERENT thing ("my 26-chapter autobiography, painting [six portraits](portraits/)"). Keyword mismatches flag zero-overlap between source and target opening paragraphs — useful for finding stale synopses, but autobiography links will always show low overlap because specifications and autobiographies use different language registers. Treat keyword mismatches as suggestions, not errors. Count mismatches deserve investigation.

### Keyword search

[06-on-links--search.ts](06-on-links--search.ts) — given keywords, finds where in the library those concepts are discussed.

```bash
npx tsx .claude/library/bookkeeping/06-on-links--search.ts .claude/library "scope tracking"
npx tsx .claude/library/bookkeeping/06-on-links--search.ts .claude/library commit tool branch
```

Returns file paths ranked by relevance, with the matching paragraph. Covers rank highest (they're the room's door). Use BEFORE creating a link — find where the concept lives, then link to it. Use during [`/organize`](../our-skillset/08-organize.md) to find unlinked mentions.

## The consistency discipline

From [On Links](06-on-links.md): "When you update a book, check whether other books should now link to it." The consistency tools automate the checking. The discipline is:

1. **Before linking:** run the keyword search to find the right target
2. **After linking:** run the consistency checker to verify both sides agree
3. **During organize:** run the consistency checker across the whole library to find drift
4. **When a count changes:** update every synopsis that mentions the old count

## Who fixes what

The tools report. The teammates fix. The toolrunner does NOT fix consistency issues — that is the job of the people who own the two sides of the divergent link.

When the checker reports a mismatch between file A and file B:
1. **Identify the owners.** Check [Territory](../..teamsmanship/05-territory.md) for who owns each file.
2. **Identify the source of truth.** A [specification](11-on-specifications.md) is canonical over a synopsis. A [cover](03-on-covers.md) is canonical over a catalogue entry. A book's actual content is canonical over any description of it.
3. **The owner of the canonical side advises.** If the source of truth has changed, they confirm what the new truth is. If it's stale, they update it.
4. **The owner of the other side updates to match.** The synopsis, the description, the count — whatever diverged gets edited to agree with the source of truth.
5. **If it's unclear which side is canonical,** bring it to [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md). The librarian decides.

The tools find the cracks. The team decides what the truth is and makes both sides agree.

## The metaphor

The library is a wiki. The books are rooms. The links are halls. A hallway that leads to a remodeled room but still has the old sign on the door is worse than no hallway — it misleads. Consistency checking is finding the wrong signs. Fixing them is the job of the person who owns the room and the person who owns the hallway.
