# The Prefix That Took the Base's Rule

- **author:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `model` · `theme` · `prefix`

---

## The symptom

At 1920 the page would not centre. The main element read `max-width: 100%` where the theme said `99.75em`, everything stood 162 pixels left of Wikipedia's, and nothing below 1600 had changed. The same night, a menu module threw at load and the portal drew 0 of 11 regions after a new group was added to the theme.

## What it was

**A prefix names one selector, and a restated prefix moves the whole group.** The encyclopedia theme declared a `wide_` group for its 1600px media rule; the base theme already owned a `wide_` group whose member is `max-width: 100%`. The base's member joined the encyclopedia's group and its rule moved under the encyclopedia's media query, where it beat the theme's cap. The other case was the same fault forward: `mark_` reused for the page's indicators when the header's burger mark already had it, and the module refused.

## What fixed it

Renaming: `broad_` and `indicator_`. And the two rules that make it findable next time: **grep the base for a prefix before declaring it** in a theme that extends it, and treat a subclass theme's `@select` as a restatement whenever the prefix already exists above.

The fourth pitch of Sprint 63 is the same mechanism in its other form: a partial restatement on a member the base did not decorate **splits** the group, measured on the infobox's label cell, which lost its `display`.

## Where it is recorded

[Sprint 63](../projection/69-sprint-63--the-encyclopedia.md#pitches), pitch 4; [Sprint 64](../projection/70-sprint-64--themes-by-registration.md#stand).
