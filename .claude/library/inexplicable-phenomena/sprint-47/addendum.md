---
title: Sprint 47 addendum — what we got wrong
author: "[Arthur](../../../..everything-that-has-a-shape/arthur-or-the-shape-of-everything/.cover.md)"
---

# Sprint 47 addendum — what we got wrong

Arthur: Sprint 47 was titled "The Library Is More Than What You Think." It is. We didn't think enough before building.

## What happened

Arthur: We restructured `.claude/` — moved files from `agents/` into `library/`, renamed directories with literary names, wrote self-cataloguing covers, rewrote links, ran validators. We called phases "complete" as we went. Seven phases planned, several marked done.

Arthur: The problem: we built the wrong thing. Doug specified a flat structure where books sit BESIDE their subject catalogues as peers. We built a nested structure where books sit INSIDE subject directories. The entire file layout is wrong. Every cover we wrote references the wrong paths. Every link we fixed points to the wrong location.

## The specific errors

1. **Books inside subjects.** Protocol chapters are inside `.protocols/`. Agent books are inside agent library directories. Doug's spec: books and subjects are flat peers at the same directory level. The subject LINKS to the books. It doesn't contain them.

2. **Missing `subject:` fields.** Most book covers don't have `subject:` in their frontmatter. Doug's spec: every book declares its canonical subject. The order is `title > subject > author > summary`.

3. **Unsigned chapters.** No chapters have `author:` in their frontmatter. Doug's spec: every chapter is signed. The autobiography should be one link away from any chapter.

4. **Encoded state in names.** `.what-428-tests-promise` — the number will change.

5. **Agent files without real links.** The `.claude/agents/*.md` files have prose paths, not clickable markdown links. They should teach the platform how to enter the library through links.

6. **Validators don't check the spec.** The validator checks link resolution and summary length. It doesn't check `subject:` fields, chapter signing, self-cataloguing, or the flat structure. The validator should be the executable specification — if a convention exists, the validator checks it.

7. **No resource pattern.** Validators should be chapter resources in the field guide — sharing a name with the chapter they validate, linked from the chapter, living beside it.

8. **Process errors.** We skipped perspective → discussion → write. We wrote directly into the public library from individual understanding. Corrections should have gone through the proper cycle: see it in perspective, discuss it as a team, then write it objectively.

## What IS correct

Arthur: Two things survived:

1. **Field guide chapters 01 and 04.** These now describe the correct system — flat peers, `subject:` fields, chapter signing, multi-subject membership, timeless names. They need verification but the concepts are right.

2. **The understanding.** Through extensive discussion with Doug, the team now understands: the library is flat, the hierarchy is in links, subjects don't contain books, names are timeless, chapters are signed, the resource pattern pairs code with prose, perspective flows through discussion into the library. This understanding is captured in the field guide, in perspective notes, and in this addendum.

## What the next sprint must do

Arthur: Before moving ANY files:

1. **Finish the field guide.** Every chapter must correctly describe the target system. The field guide IS the specification. If it's wrong, the restructure will be wrong.

2. **Write validators as field guide resources.** Each convention chapter gets a `.ts` resource that checks it. Run the validators against the SPEC, not against the current structure. The validators will fail — that's expected. The failures ARE the restructure task list.

3. **THEN restructure.** Move books out of subject directories. Add `subject:` and chapter `author:` fields. Rename encoded names. Rewrite agent files with real links.

4. **Follow the cycle.** Perspective → discussion → public library → personal library. No skipping steps.

## Honest status

Arthur: Sprint 47 is incomplete. No phase is truly done. The field guide chapters 01 and 04 are the closest to correct. Everything else needs rework. The correct approach for the next session: finish the spec (field guide), write the validators (resource pattern), then restructure (guided by validator failures).

<!-- citations -->
[sprint-47-plan]: plan.md
[field-guide-audit]: ../../../.teamsmanship/..team/libby/perspective/field-guide-audit.md
[design-notes]: ../../../..everything-that-has-a-shape/perspective/sprint-47-design-notes.md
