# sprint

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

Begin a new sprint. Name it, define its purpose, assemble the team, and write it as a chapter.

A sprint **is a chapter** in a [Projection](../.projection/.cover.md) book — not a directory, not a kanban board. Sprints about the library itself (specifications, protocols, compilers, identity infrastructure) are chapters in [Projected Identity](../projected-identity/.cover.md); a project's own sprints are chapters in that branch's Projection. The chapter is the plan going in and the record coming out — one file, written once and completed at the close. See [On Projects](../bookkeeping/12-on-projects.md#sprints-as-chapters).

## Naming

`{NN}-sprint-{n}--{slug}.md`, where `{n}` is the next **sprint** number and `{NN}` is the next **chapter** number in the book. **They are not the same number** — retros and superseded plans take chapter numbers too. The title inside is `# Sprint {n} — {Name}`.

## Steps

1. **Read current state.** Read the [Projected Identity cover](../projected-identity/.cover.md). Its last entry gives you both numbers at once: the next sprint is `{n}+1` and the next chapter is `{NN}+1`.

2. **Read the team.** Read [Teamsmanship](../..teamsmanship/.cover.md) and the [agent files](../../agents/); check [territory](../..teamsmanship/05-territory.md) for who owns the paths this sprint touches. Summarize the current team for Doug.

3. **Get the purpose.** If `$ARGUMENTS` describes the sprint's purpose, use it. Otherwise ask Doug: "What's this sprint for?" Wait for his answer before proceeding.

4. **Ask questions and make recommendations.** This is a planning conversation, not a checklist. Before writing anything, discuss it with Doug.

   **Questions to ask** (pick the ones that matter, 2-5 typical):
   - Scope ("Does this include X, or is that out of scope?")
   - Constraints ("Anything we shouldn't touch?")
   - Priority ("What's the most important outcome?")
   - Risk ("What's the scariest part?")
   - Dependencies ("Does this block or get blocked by anything?")

   **Recommendations to make** (mention the ones that apply):
   - **New roles:** "This involves {domain} work and we have no role for it. `/role` would give us {capability}."
   - **New teammates:** "No one owns {path}. We should onboard someone with `/teammate`."
   - **Spikes:** "I'm not sure about {uncertainty} — we should spike it before committing to an approach."

   Wait for Doug's responses. This is a dialogue, not a monologue.

5. **Assemble the team.** Identify the roles and teammates the purpose needs, check them against [territory](../..teamsmanship/05-territory.md), and present the proposal:

   ```
   ## Proposed team for sprint {n}

   | Teammate | Roles | Scope in this sprint |
   |----------|-------|----------------------|
   ```

   Ask Doug to add, remove, or change assignments before you write.

6. **Write the chapter** at `.claude/library/projected-identity/{NN}-sprint-{n}--{slug}.md`, in the format below. It is authored by a teammate — whoever holds the sprint's centre of gravity — and signed with their `author:` field. No nametags in books.

7. **Catalogue it by hand.** Add the entry to the [Projected Identity cover](../projected-identity/.cover.md)'s Sprints list — the [TOC injector](../bookkeeping/03-on-covers--toc.ts) **cannot** do sprints, so write the line yourself. Then point the [Projection cover](../.projection/.cover.md)'s "current sprint" link at the new chapter. A cover that lags its chapters is the library's most common lie.

8. **Validate.** Run the [type-check](../..environmentalism/05-on-validation--runner.ts) so the new chapter's links and metadata are clean before you call it started.

9. **Confirm.** Tell Doug where the chapter is and what the first move should be.

## Sprint chapter format

```markdown
# Sprint {n} — {Name}

- **author:** [{teammate}](../..teamsmanship/..team/{name}/{autobiography}/.cover.md)

---

{One paragraph: what this sprint sets out to do, and why it matters now.}

## The work

{What we're building and who owns what. Prose, not a ticket queue — this is a design
document. Name the files and sections that will change; link them.}

## Done when

{The truth-condition. "Done" is a claim with a truth-condition — say what would prove it,
concretely enough that we can't argue about it later.}
```

At the close, the same chapter gains its record — this is what makes it a chapter and not a ticket:

```markdown
## What happened

{Narrative prose. What we actually did, including what surprised us.}

## What it taught

- **{The lesson, stated as a claim}** — {why it holds}

## Deliverables

- [{thing}]({link}) — {what it is}
```

A **retro** is its own chapter (`{NN}-sprint-{n}--retro.md`) when the sprint earns one — the lessons are worth more than the log.

## Resuming a sprint

If Doug says "where are we," "resume," or "continue":

1. Read the current sprint's chapter — it is the source of truth.
2. Summarize what's done, what's open, and what's blocked.
3. Recommend the next move. If something looks done, verify it before believing it.

$ARGUMENTS
