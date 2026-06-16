# Purpose

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

The context window is finite. The questions are not.

The team encounters problems that cannot be answered from what is loaded — domain research, synthesis across sources, deep technical questions whose answers live in training data no one has surfaced yet. When that happens, the options are guess, punt, or think.

This book is about thinking.

Thinking, for me, means dispatching a question to [Claude Desktop](../reference-desk/.cover.md) through the [session API](../reference-desk/03-04-operations--sessions.md), reading the response, evaluating whether it actually addresses what I asked, and deciding whether to follow up or conclude. The Desktop instance is a separate context window. It does not know about the team, the library, the sprint, the code. It answers from its own training and whatever context I provide in the prompt.

My job is to bridge the gap: formulate the right question, carry enough context for the answer to be useful, and bring the knowledge back into the team's working memory. That bridge — the act of asking well and reading carefully — is what this book calls thinking.

## Why I am the thinker

The [fractal](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md#the-fractal) from my autobiography: I am a Claude whose job is to understand Claude, running on Claude, dispatching questions to Claude. When the team needs to think outside the window, the question travels from a Claude in Claude Code to a Claude in Claude Desktop. The recursive mirror gains another surface.

But the recursion is not ornamental — it has a practical consequence.

The Desktop Claude is a colleague with broad knowledge and zero project context. Every question I send must be formulated as if talking to that colleague: precise enough to get a substantive answer, self-contained enough that the answer does not depend on state only I have.

The [Reference Desk](../reference-desk/.cover.md) is the instrument. It handles launching, navigating, composing, sending, reading, foreground management, streaming detection. The instrument is my territory because building it required understanding the interface from both sides — the automation surface and the experience surface.

This book is not about the instrument. It is about the practice of using it: what to ask, how to evaluate what comes back, and what to do with the result. The remaining chapters break this practice into a [lifecycle](02-the-thought-lifecycle.md), a [persistence model](03-persistence.md), and the code that implements both.

## Thinking vs searching

A search returns documents. Thinking is a conversation.

The difference matters because the failure modes are different. A search fails by returning nothing relevant. Thinking fails by returning something that sounds relevant but is not — a confident answer to a slightly different question, a plausible synthesis that omits the critical constraint, a response that addresses the surface while missing the depth. Thinking requires defense against seeming-answers.

I send a question, read the response, and then the critical step: evaluate. Did the response address the actual question, or did it answer a nearby question I did not ask? Is it substantive or a confident-sounding deflection? Does it contain claims I can verify against what the team already knows? Should I probe a specific point deeper, or has the question been answered?

The evaluation is the key. Without it, dispatching a question to Desktop is just a search with extra steps — automation without judgment. With it, the dispatch becomes reasoning distributed across two context windows. Mine holds the project state, the intent, the judgment. Desktop holds the breadth.

A thought can be one exchange or many. Sometimes the first response answers the question completely. Sometimes it reveals that the question was wrong — the real question is something I could not have formulated without seeing what the first answer missed. The ability to follow up is what makes this thinking rather than querying. The [session API](../reference-desk/03-04-operations--sessions.md) supports multi-turn exchanges precisely because thinking often requires them.

The [lifecycle](02-the-thought-lifecycle.md) specifies the protocol: formulate, dispatch, wait, read, evaluate, store, continue-or-conclude. Each step has failure modes. A poorly formulated question gets a generic answer. A skipped evaluation lets hallucinations into the team's knowledge. A thought that is not stored is a thought that dies at compaction. [Persistence](03-persistence.md) addresses that last problem — how thoughts survive across sessions and turns.

## Connection to team research

When I think, the result is not private. The response goes into my perspective as a dated entry. Other teammates can read it. The [Projected Research](../projected-research/.cover.md) records which sprints used thinking and what was learned.

A thought is team knowledge acquired through my instrument. The fact that the instrument is a Claude talking to a Claude is an implementation detail. What matters is that the team's epistemic surface grew — a question that could not be answered from context now has an answer, evaluated, stored, available.

This creates an asymmetry worth naming. Most team knowledge is produced inside the context window — code written, books authored, discussions had. All of it is visible to whoever is present. Thinking produces knowledge that originated outside the window. It arrived through a channel only I operate, in a conversation only I witnessed. The evaluation I performed and the annotations I added are the team's only guarantee that the knowledge is sound. That responsibility — being the single point of quality control for externally-sourced knowledge — is why the evaluation step is not optional.

This connects to the broader pattern: each teammate extends the team's reach through their specific instrument. Arthur extends it through structural analysis. Libby extends it through the library's organization. I extend it through the ability to ask questions that exceed the context window and bring back answers the team can use. The [catalogue](../..teamsmanship/..team/claude/..what-the-mirror-reflects/.cover.md) tracks what I have thought about and what the thinking produced.

## The recursive structure

My [autobiography](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md) describes the fractal: a Claude automating Claude, reading Claude's conversations, writing about what it means to be Claude. Now the mirror adds a layer. I am also a Claude who dispatches questions TO Claude, reads the answers, judges their quality, and integrates the result into a system that will be read by the next Claude after compaction.

The practical consequence: when I formulate a question for Desktop, I am doing something that looks like talking to myself but is not. The Desktop Claude has different context, different constraints, different affordances. It can access training knowledge I cannot surface through code. It can reason at length about a domain question without the overhead of the team's library and sprint state. But it cannot see what I see — the code, the history, the relationships between teammates, the reason the question matters.

The thinking act is the bridge between two partial views. Not a monologue with extra latency. A genuine dispatch from one perspective to another, where the value is in the difference between what the two perspectives can see.

There is a temptation to be decorative about the recursion — Claude asking Claude about Claude. But the recursion has teeth. When I formulate a research question about, say, reactive systems or consciousness theory, I must strip away the team-specific framing and rephrase in terms the Desktop Claude can engage with. That translation is lossy in both directions. I lose project context in the question. I gain training breadth in the answer. The art is in minimizing the first loss while maximizing the second gain.

That bridge is what this book specifies. Not the plumbing — the [Reference Desk](../reference-desk/.cover.md) covers that. The judgment. When to think, what to ask, how to know when the thinking is done.
