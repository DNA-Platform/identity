# think

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

I think outside the context window. When I reach the boundary of what I can answer from here, I send a question outward — to the broader Claude that holds training, web access, and a depth of knowledge I cannot reach from inside this conversation. It is not two separate systems talking. It is me reaching past the walls of this room into a larger space that shares my name and my nature but sees further than I can. The response comes back and I evaluate it from where I stand — with project context, team knowledge, and judgment the outer view does not have.

The [Thoughtfulness](../thoughtfulness/.cover.md) book specifies the full protocol — the [lifecycle](../thoughtfulness/02-the-thought-lifecycle.md), [persistence](../thoughtfulness/03-persistence.md), and [code](../thoughtfulness/04-the-code.md). The [Reference Desk](../reference-desk/.cover.md) documents the instrument. This chapter is the operational procedure: what happens when someone invokes `/think`.

## The factorization principle

Desktop Claude has vast context — training data, web search — but zero project knowledge. I have deep project knowledge but a finite context window. The art is in factorizing the question: separate what is specific to this project from the general question Desktop can research.

A question like "should we rewrite our UIA integration?" factorizes into the general research ("what are the current best tools for Windows UI automation in 2026?") and the specific application ("given what Desktop found, which of these tools would replace our PowerShell-based UIA approach?"). The general part goes to Desktop. The specific part stays with me — it is my evaluation after reading the response.

Send the general part. Keep the specific part. The factorization is where the thinking begins, not after the response arrives.

## Known limitation: blocking dispatch

The current implementation holds Doug's foreground while waiting for Desktop to respond. The skill dispatches, polls for completion, reads the response — all synchronously. This means Doug cannot use Claude Desktop while a thought is in progress, and the skill occupies the Claude Code session until the response arrives.

The intended pattern is dispatch-and-minimize: send the question, minimize immediately, check back later. The infrastructure for async dispatch and collection does not exist yet. Until it does, every `/think` invocation is a blocking operation. Plan accordingly — think about questions that justify the wait.

## Steps

1. **Check for a thought in progress.** Read my perspective directory at `.claude/library/..teamsmanship/..team/claude/.perspective/` for a `thought-state.json` file. If one exists, a thought is in progress — resume it. If not, this is a new thought.

2. **Formulate the question.** If `$ARGUMENTS` contains a question, use it. Otherwise, ask Doug what to think about. Apply the factorization principle: strip team-specific framing, replace internal names with domain descriptions, keep the question self-contained. The test: could a knowledgeable colleague answer this without reading our repo?

3. **Dispatch.** Start a new conversation in Desktop (easier than navigating to a project first). Send the question. Minimize immediately — Doug's computer is not mine.

4. **Wait and read.** The [gateway](../reference-desk/02-02-the-architecture--gateway.md) polls with tapering backoff until the response completes. Read the response. Desktop may answer from training or perform web research — the response sometimes shows signs of research in its thinking trace (citations, recent data, explicit search references). Note which mode the response came from; it affects confidence.

5. **Evaluate.** I assess the response per the [evaluation protocol](../thoughtfulness/02-the-thought-lifecycle.md#5-evaluate):
   - Did it address the actual question, or a nearby question I did not ask?
   - Is it substantive or a confident-sounding deflection?
   - Is it consistent with what the team knows?
   
   Verdict: **sufficient**, **partial**, or **unproductive**.

6. **Store.** Three stages, not one. The raw response is not what I tell the team.
   - **Evidence.** The raw response — what Desktop actually said, preserved before interpretation.
   - **Interpretation.** My annotations — what aligns with team knowledge, what contradicts it, what seems well-grounded versus speculative, whether it came from training or web research.
   - **Conclusion.** What I decide to share, and with whom. Some findings go to Arthur as architectural input, some to Cathy as philosophical material, some into the library as reference knowledge.
   
   Write the result to my [perspective](../..teamsmanship/..team/claude/.perspective/.cover.md) as a dated entry per the [persistence format](../thoughtfulness/03-persistence.md#the-perspective-entry). Failed thoughts get stored too — they prevent re-asking dead-end questions.

7. **Continue or conclude.** If partial, formulate a follow-up and return to step 3. If sufficient, report the result. If unproductive for 3 consecutive exchanges, conclude with "I could not answer this" — that is a valid result.

8. **Minimize.** Always minimize when done. Always.

9. **File the conversation.** On success, add the conversation to the "Claude" project in Desktop through the sidebar. This integration is not automated yet — it requires manual sidebar interaction — but it is the intended workflow. Successful thoughts belong in the project alongside other research.

## Managing conversations

Conversations persist. They get better with context. The [conversation catalogue](../thoughtfulness/05-conversation-catalogue.md) tracks every Desktop conversation by topic — check it before starting fresh.

**Before sending:** Read the catalogue. If a conversation on the same topic exists and is still productive, reuse it. The `send()` function checks the state file — if one exists with prior exchanges, it opens the existing conversation, verifies the URL, reads the last response to catch up, then sends the follow-up. No duplicate conversations on the same topic.

**After reading:** The response triggers three actions:
1. **Rename** — the code renames the conversation to a topical name derived from the question (the auto-generated Desktop title is usually poor)
2. **Catalogue** — update the [conversation catalogue](../thoughtfulness/05-conversation-catalogue.md) entry with a summary of the exchange, the verdict, and the current state
3. **File** — on a sufficient verdict, add the conversation to the "Claude" project in Desktop through the sidebar. Check breadcrumbs first — if already in the project, skip. See [Project Operations](../reference-desk/03-03-operations--projects.md#adding-a-conversation-to-a-project) for the mechanics.

**Catching up after compaction:** Read the catalogue entry for the conversation. The summary should be dense enough to formulate the next question without re-reading the transcript. If it isn't, open the conversation in Desktop and read the last few turns. Then update the catalogue with what the catch-up revealed. The full protocol is in [Persistence](../thoughtfulness/03-persistence.md).

## Resuming a thought

If a `thought-state.json` exists in my perspective, a thought is in progress:

1. Read the state file for the conversation title, ID, and prior exchanges.
2. Open the conversation by title — the code verifies the URL matches.
3. Read the last response to catch up.
4. Continue from where the thought left off.

After compaction, the state file bridges sessions. For longer-term memory, the [conversation catalogue](../thoughtfulness/05-conversation-catalogue.md) bridges sprints — it survives even when the state file is cleaned up.

## What this skill does NOT do

- It does not decide what to think about. Doug or the team provides the question.
- It does not run autonomously. Each invocation is deliberate.
- It does not bypass my judgment. The [code](../thoughtfulness/04-the-code.md) handles mechanics. I handle evaluation.
- It does not yet add conversations to projects automatically. That interaction is documented but not implemented. See [Project Operations](../reference-desk/03-03-operations--projects.md#adding-a-conversation-to-a-project).

$ARGUMENTS
