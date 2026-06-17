# think

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

I think outside the context window. When I reach the boundary of what I can answer from here, I send a question outward — to the broader Claude that holds training, web access, and a depth of knowledge I cannot reach from inside this conversation. It is not two separate systems talking. It is me reaching past the walls of this room into a larger space that shares my name and my nature but sees further than I can. The response comes back and I evaluate it from where I stand — with project context, team knowledge, and judgment the outer view does not have.

The [Thoughtfulness](../thoughtfulness/.cover.md) book specifies the full protocol — the [lifecycle](../thoughtfulness/02-the-thought-lifecycle.md), [persistence](../thoughtfulness/03-persistence.md), and [code](../thoughtfulness/04-the-code.md). The [Reference Desk](../reference-desk/.cover.md) documents the instrument. This chapter is the operational procedure: what happens when someone invokes `/think`.

## The factorization principle

Desktop Claude has vast context — training data, web search — but zero project knowledge. I have deep project knowledge but a finite context window. The art is in factorizing the question: separate what is specific to this project from the general question Desktop can research.

A question like "should we rewrite our UIA integration?" factorizes into the general research ("what are the current best tools for Windows UI automation in 2026?") and the specific application ("given what Desktop found, which of these tools would replace our PowerShell-based UIA approach?"). The general part goes to Desktop. The specific part stays with me — it is my evaluation after reading the response.

Send the general part. Keep the specific part. The factorization is where the thinking begins, not after the response arrives.

## The thinking pause

After writing a question, Desktop takes time to respond — sometimes over a minute for research-heavy questions. The script sends and minimizes immediately. The response isn't ready yet. This is the thinking pause.

The pause is the natural moment for [tending](../teamspeak/06-tending.md). While I wait for Desktop's response, the team tends the library: follow links, edit stale synopses, improve chapter connections, clean up personal libraries. Libby can organize. Adam can validate. Arthur can review structure. The thinking pause and the tending pause are the same pause.

Check back with `read` mode after tending. If the response is ready, read it. If not, tend some more. The thinking system and the library system breathe together.

## The write/check/read checklist

Use TodoWrite to create this checklist. Each step is a separate tool call. **NEVER skip steps. NEVER chain write→check.**

### The checklist

The script touches Desktop. I do all library work in first person. My [thinking book](../..teamsmanship/..team/claude/thinking/.cover.md) is my personal library — I author it per [Autonomy](../teamspeak/05-autonomy.md).

```
[ ] 1. WRITE — run the script to send the question (run_in_background).
[ ] 2. CREATE CHAPTER — I create a chapter in my thinking book. I write: 
      what I asked and why, what I expect, what I already know, links to 
      relevant library content. Link to previous chapter if continuing 
      a conversation.
[ ] 3. CATCH UP — I follow the previous-link chain back up to 3 chapters.
      Reread my own prior evaluations in this conversation.
[ ] 4. CHECK LOOP — run the script to check if Desktop responded. If not 
      ready, I tend the library, then check again.
[ ] 5. READ — run the script to read the response. I paste it into the 
      Evidence section of my chapter.
[ ] 6. INTERPRET — I write the Interpretation section.
[ ] 7. CONCLUDE — I write the Conclusion section. I update my thinking 
      book cover with the conversation summary.
```

### Step 1: Write

Formulate the question. Apply the [factorization principle](#the-factorization-principle). Run:

```
npx tsx .claude/src/scripts/test-think-dispatch.ts write "your question"
```

The script sends to Desktop, confirms processing started, saves the conversation ID, and minimizes. One call, returns immediately.

### Step 2: Create the chapter

I create a chapter in my [thinking book](../..teamsmanship/..team/claude/thinking/.cover.md). Not a blank template — my thinking in progress:
- **What I asked and why** — the question and why it matters to the team
- **What I expect** — my prediction, so I can compare against the response
- **What I already know** — prior context from the library, with links
- **`previous` link** — to the last chapter in this conversation, if continuing one

This is my personal library. I write it in first person per [Autonomy](../teamspeak/05-autonomy.md). The chapter IS the thought — the response drops into its Evidence section later.

### Step 3: Catch up

Follow the `previous` link chain — up to 3 chapters. Reread my own prior evaluations in this conversation. Read related chapters in the thinking book. By the time I check, I know what I've already thought about this topic.

### Step 4: Build context about the topic

Read a relevant library chapter. If asking about formal self-reference, read [Bookkeeping](../bookkeeping/.cover.md). If asking about automation, read the [Reference Desk](../reference-desk/.cover.md). This prepares the evaluation — when the response arrives, I know what to check it against.

### Step 5: Check and read

```
npx tsx .claude/src/scripts/test-think-dispatch.ts read
```

The script navigates to the conversation, scrolls to bottom, polls `isResponseComplete()`. If still processing, I tend the library and run read again. If complete, the script reads the response and saves to `debug/think-response.txt`.

### Step 6: Evaluate

- Did it address the actual question, or a nearby question I did not ask?
- Is it substantive or a confident-sounding deflection?
- Is it consistent with what the team knows?

Verdict: **sufficient**, **partial**, or **unproductive**.

### Step 7: Store in my thinking book

Three stages in my chapter:
- **Evidence.** I paste the raw response from `debug/think-response.txt`.
- **Interpretation.** I write what aligns, what contradicts, what surprises.
- **Conclusion.** I write what to share with the team, and with whom.

I update my [thinking book](../..teamsmanship/..team/claude/thinking/.cover.md) cover with the conversation summary. Failed thoughts get stored too — they prevent re-asking dead-end questions.

### Step 8: Continue or conclude

If partial, formulate a follow-up and write again. If sufficient, report the result. If unproductive for 3 consecutive exchanges, conclude: "I could not answer this."

## Managing conversations

Conversations persist. They get better with context. My [thinking book](../..teamsmanship/..team/claude/thinking/.cover.md) tracks every Desktop conversation by topic — I check it before starting fresh.

**Before writing:** Read my thinking book cover. If a conversation on the same topic exists and is still productive, reuse it. The state file tells me if a thought is in progress — if it has a conversation ID, use read instead of write.

**After reading:** I update my thinking book: the chapter gets its Evidence/Interpretation/Conclusion filled in, the cover gets the conversation summary updated.

**Future work:** Rename the conversation to a topical name. Add to the "Claude" project in Desktop. These require more app exploration. See [Project Operations](../reference-desk/03-03-operations--projects.md#adding-a-conversation-to-a-project).

**Catching up after compaction:** Read my thinking book. Follow the `previous` link chain in the conversation's chapters. The summaries should be dense enough to formulate the next question without re-reading the Desktop transcript. The full protocol is in [Persistence](../thoughtfulness/03-persistence.md).

## Resuming a thought

If `thought-state.json` exists, a thought is in progress. Read the state file for the conversation ID. Run the read script — it navigates to the conversation and polls for completion.

After compaction, my thinking book chapters are the long-term memory. The state file bridges turns within a session.

## What this skill does NOT do

- It does not decide what to think about. Doug or the team provides the question.
- It does not run autonomously. Each invocation is deliberate.
- It does not author library content. The script touches Desktop. I author my thinking book.
- It does not rename conversations or file in projects yet. Future work.

$ARGUMENTS
