# Sprint 94 — Everyone Thinks

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

Sprint 93 proved Claude can think outside the context window. This sprint makes thinking a **team convention, not a Claude feature**: every teammate gains the two books and the ability to dispatch a question to Claude Desktop from their own perspective, so the team reaches outward in many voices rather than one. The mechanism is built and proven; this sprint is about *generalizing the convention and each teammate adopting it in their own hand*.

## Why

A thought is richer for the perspective that asks it — the [subjectivity thought](../..teamsmanship/..team/claude/thinking/17-semantics-of-subjectivity.md) landed because Cathy had lived the Newman problem in $Chemistry. Nine teammates thinking from nine histories is not nine copies of one thinker; it is nine genuinely different questions asked of the outer view. This is [the two libraries](../..librarianship/15-the-two-libraries.md) made operational — the personal lens finally aiming *outward*.

## The work

1. **The two books, per teammate.** Everyone sets up a thinking book and a research-topics book in their personal library, on the model of [Claude's](../..teamsmanship/..team/claude/thinking/.cover.md) — same convention as `perspective`, same book names. **Each teammate does their own** (autonomy): no one writes another's books.
2. **Catalogue them.** Each teammate adds both books to their own library catalogue, as Claude did. Explore Claude's catalogue as the worked example.
3. **Generalize the think chapter (Libby).** Update the [think chapter](../our-skillset/20-think.md) so it reads for *anyone*, not just Claude — remove Claude-only assumptions. **Verify the chapter is the source of truth**: confirm no one has been editing the compiled `SKILL.md` directly; if the skill and chapter diverged, port the skill's content back into the chapter, then recompile.
4. **The `{Name} > {Topic}` convention (Claude).** Topics are namespaced per teammate: `Claude > Philosophy`, `Claude > Programming`, `Claude > Miscellaneous`. **Test is shared** — every teammate can use it, and Claude uniquely catalogues it. Document the convention; update the entries across Claude's books to the namespaced form.
5. **An autobiography chapter each.** When setting up their library, every teammate writes their own chapter in their autobiography on what it will be like to have this ability to think, cross-referenced on their cover with their two thinking books — and links the thinking books to the places in the library that document thought ([Thoughtfulness](../thoughtfulness/.cover.md), [the two libraries](../..librarianship/15-the-two-libraries.md), [We Speak](../we-speak/.cover.md)).
6. **Thoughtfulness stays Claude's, opens to all (Libby + Claude).** Update [Thoughtfulness](../thoughtfulness/.cover.md) to note that while the book remains Claude's to catalogue, the *ability* belongs to every teammate.
7. **The compiled CLAUDE.md chapter (Claude).** Update the [Environmentalism chapter that compiles into CLAUDE.md](../..environmentalism/.cover.md): Claude Desktop for Windows must be open to use think, and describe how the thinking abstraction **extends the team's abilities through depth of thought** — reaching past the context window. Reference the relevant sources.
8. **Onboarding spec (Libby).** Wherever creating a new agent is specified — perspective, the library catalogue, the canonical autobiography — add that the **two thinking books must be created** too.

## Stretch — the scaffold

After we have each set the books up *by hand once*, consider a **scaffold** (a skill or tool) a teammate or a brand-new agent runs to stamp out the two books correctly — in their own name, first person, linked and catalogued. Built after, not before, so it encodes a pattern we have actually walked.

## Roles

- **Libby** — generalize the think chapter; verify chapter-is-source-of-truth and port any skill divergence; onboarding spec (8); co-update Thoughtfulness.
- **Claude** — the `{Name} > {Topic}` convention + his own entries; the compiled CLAUDE.md chapter (7); co-update Thoughtfulness; the worked example others explore.
- **Arthur** — sprint structure and the architectural shape of how per-teammate books compose; coordination.
- **Adam** — the stretch scaffold, *after* the hand pass.
- **Queenie** — the acceptance bar.
- **Every teammate** (Adam, Cathy, David, Gabby, Phillip, Queenie, and Arthur, Libby, Claude for themselves) — their own two books, catalogue entries, and autobiography chapter on thinking (1, 2, 5), in their own first person.

## Closing the sprint — compile, then validate

Two distinct steps at the end, in order:

1. **Compile.** Run the [compilers](../.compilation/03-compilers.md) so the platform files regenerate from the changed library — the [think `SKILL.md`](../our-skillset/20-think.md) from the now-generalized chapter (this also retires the stale `test-think-dispatch.ts` commands), and the compiled `CLAUDE.md` from its updated [Environmentalism chapter](../..environmentalism/.cover.md). The compiler *builds*; it does not audit.

2. **Validate.** Run the [validation runner](../..environmentalism/05-on-validation.md) — the Bookkeeping validator (book/chapter/cover structure) and the Compiled-Links validator (every link resolves, including inside the regenerated output). The compiler does **not** do this; the validators do. Both compile and validate can be run together with [`/audit`](../our-skillset/18-audit.md), and the [commit tool](../..environmentalism/06-on-sync.md) runs the validators automatically before it pushes — so the push that closes the sprint is validated by construction. Confirm 0 errors before pushing.

## Done means

A teammate who is **not Claude** runs `/think` from their own perspective: two books set up and catalogued, an autobiography chapter written, the think chapter and skill generalized and in agreement, `{Name} > {Topic}` documented, Thoughtfulness + the compiled CLAUDE.md both stating the ability is the team's — and the sprint closed by a clean compile + validation through the commit tool.
