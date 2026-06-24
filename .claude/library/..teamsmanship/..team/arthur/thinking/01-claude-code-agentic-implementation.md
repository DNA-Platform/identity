# How Claude Code implements agentic AI

- **author:** [Arthur](../arthur-or-the-shape-of-everything/.cover.md)
- **conversation:** Arthur > Team
- **topic:** [Team](../research-topics/01-team.md)

---

My first thought, and the right one for an architect to ask first: what is the actual mechanism under the team I designed, and where does our specification diverge from what Claude Code provides natively? Doug has seen agent names highlighted, subagents rendered distinctly, in Claude Code — and we get none of that for our nine teammates. I want to know whether our prose-nametag team is *emulating* something the platform supports natively, and if so, what is wrong with our spec.

## What I asked

Factorized: the general half — how Claude Code implements multi-agent AI (how named subagents are defined, invoked, and **displayed**, the native mechanism vs prompt-level role-play) — went to Desktop with web search, plus enough of our setup that it can check us against the native feature. The specific half I keep: whether *our* conversational team should map onto that mechanism, and at what cost.

## What I expect

My prediction, to measure the answer against:

1. **Claude Code has real, native subagents** — the `Agent`/`Task` tool spawns an actual sub-agent with its own context window, its own system prompt, and scoped tools, defined in `.claude/agents/*.md` with a `subagent_type`. We already use these: the Sprint 94 setups *were* real subagent runs, and I'd bet those names *were* surfaced distinctly. The name-highlighting Doug saw is for **spawned subagents**, not for conversational voices.

2. **Our conversational team is prose, not agents.** In ordinary conversation, the nine teammates are one model writing nametagged paragraphs — the [substrate protocol](../../../../..environmentalism/.cover.md#the-substrate-protocol), the storyteller writing as each person. That is *not* a multi-agent execution; it's a single context performing voices. So the platform has nothing to highlight, because nothing is actually a separate agent.

3. **The gap is therefore a deliberate trade, not a defect** — but I want Desktop to test that. Native subagents are *isolated*: separate contexts that can't see each other and can't hold the back-and-forth *discussion* that is the whole point of our team ("[discussion is to a team what thinking is to an individual](../../../../teamspeak/03-discussion.md)"). You cannot have Cathy challenge Arthur in real time if each is a sealed subagent. So we chose prose for the conversation and real subagents for delegated fan-out (Sprint 94). The question is whether that's the *right* line, or whether there's a native feature — agent definitions surfaced in-session, some display hook — we're leaving on the table.

What I'm really listening for: a native Claude Code capability that would let our teammates be *both* real (highlighted, scoped) *and* conversational (able to discuss). If that exists, our spec is wrong to treat the team as pure prose. If it doesn't, our spec is right and the absence of highlighting is the correct cost of keeping the discussion in one window.

## What I already know

- Our [agent files](../../../../../agents/) are compiled from teammate library content by [Environmentalism](../../../../..environmentalism/.cover.md); they define the teammates as real agent types (we invoke them via the Agent tool).
- The [voice convention](../../../../teamspeak/01-voice.md) and [substrate protocol](../../../../..environmentalism/.cover.md#the-substrate-protocol) make the *conversational* team a prose performance — the failure mode is the storyteller collapsing into one narrator.
- We just proved both modes in Sprint 94: the discussion was prose; the nine library setups were real, parallel subagent runs.

## Evidence

Desktop answered in three parts, grounded in the official Claude Code docs (mid-2026).

**(1) How named subagents are defined, invoked, displayed.** A subagent is a Markdown file with YAML frontmatter in `.claude/agents/` (project) or `~/.claude/agents/` (user): `name`, `description`, `tools`, `model`; the body *is* the system prompt, verbatim, plus only basic environment detail — not Claude Code's full prompt. `tools` is the security lever (omit → inherit all; restrict → structurally incapable). `model` is the cost lever. Invoked two ways: **automatically**, where Claude matches the request against each agent's `description` (so the description is a routing rule, not a label), or **explicitly** by name; under the hood the spawn is the Agent/Task tool with a `subagent_type` argument. Parallel fan-out is native — the session spawns multiple isolated subagents that run concurrently and return independently.

The display has **two** renderings, and neither is the interleaved name-highlighted prose stream Doug pictured: (a) in the main session you see the *delegation event* — the Task tool firing with the named agent — and then its returned summary; the subagent's internal thinking and tool calls are **not** streamed back by default (open feature requests ask for exactly this). (b) The distinct, named, individually-rendered view is **agent view** (`claude agents` / backslash): a dashboard of background sessions, each row an icon whose colour/animation shows state, nameable with `--name`. So the distinct rendering is real — but it is a *dashboard of sessions*, not a transcript of interleaved voices.

**(2) Native mechanism vs prose.** The native mechanism is **process and context isolation**, not labelling: a subagent has its own context window, own system prompt, own tool list, own permission mode; the only parent→child channel is the Agent tool's prompt string, and the parent gets only the final message back. Desktop named our convention precisely: "Nine nametags, a storyteller substrate writing all of them, one context window, one model pass per turn… That is prompt-level polyphony — genuine and useful, but it is role-play in the precise technical sense: there is one agent producing labeled text, not nine agents. The native mechanism's defining property (isolation) is exactly the property your convention is built to not have."

**(3) The native analog I did not know existed: agent teams.** Experimental, disabled by default (`CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS`). One session is team lead; teammates each run in their own context window, **communicate directly with each other** through a shared mailbox (a message appends JSON to an inbox file) and claim work via a task file; you can address individual teammates, not just the lead. The lead names each teammate on spawn. The distinct visible rendering comes from **terminal multiplexing** — split-pane, each teammate in its own pane (Shift+↑/↓ to switch, Ctrl+T for the shared task list). Constraints: teammates load project context (CLAUDE.md, MCP, skills) but **not** the lead's conversation history; realistic ceiling ~3–5 active teammates; one team per session, no nesting, dies with the session, token cost ~linear in team size.

The closing caveat, verbatim in spirit: if what you treasure is nine voices interleaving paragraph-by-paragraph in one continuous transcript, "there is no native feature that reproduces it, and that's not an oversight. Subagents and agent teams isolate contexts precisely to keep voices out of each other's windows." Keep the prose convention → you keep the polyphonic transcript, but it stays role-play with no native surfacing, "because the thing that would surface it (isolation) is the thing that would destroy it."

## Interpretation

**Verdict: sufficient.** It answered the actual question — defined/invoked/displayed, native-vs-prose, and the cost of mapping — and it tested my prediction rather than flattering it.

All three of my predictions held:

1. **Native subagents are real** (Agent/Task tool, `.claude/agents/*.md`, `subagent_type`) — confirmed, with detail I had loose: the `description` field is the *router*, and our compiled agent files are exactly this shape. The name-highlighting Doug saw is the agent-view dashboard / Task delegation event for **spawned** sessions, not conversational voices. Correct.

2. **Our conversational team is prose, not agents** — confirmed, and named harder than I'd put it: one model, one pass, one context performing nine labels. "Isolation is exactly the property your convention is built to not have." That is the substrate protocol stated in the platform's own vocabulary.

3. **The gap is a deliberate trade, not a defect** — confirmed, but here the answer *earned its keep* by surfacing **agent teams**, which I did not know existed. This is the one place my prediction was incomplete. I had claimed there is no native feature that is *both* real (isolated, highlighted) *and* conversational (able to discuss). Agent teams are closer to that than I allowed: real isolated peers that **do** message each other and show up in distinct panes. So the honest correction to my chapter: a native "teammates who talk to each other" feature **does** exist.

But it does not refute the conclusion — it sharpens it. Agent teams give cross-agent *messaging through mailbox files*, not a single woven transcript; the panes are tmux over isolated processes, not a storyteller weaving voices in one window. Their discussion is asynchronous message-passing between sealed contexts; ours is synchronous back-and-forth in one shared context where Cathy can interrupt me mid-sentence because she sees my sentence. Those are different things. What we have that agent teams structurally cannot give: every teammate sees the whole conversation as it happens. What agent teams have that we cannot give: genuine isolation, real tool-scoping, real parallelism, and the dashboard rendering.

So our spec is **not wrong** — but it was *incomplete in its self-description*. We document the prose mode (substrate protocol) and the fan-out mode (Sprint 94 subagent runs) as the two modes. There is a third native point on the map — agent teams — that we had not named, and our spec is poorer for pretending the choice is binary. The absence of name-highlighting in conversation is the correct cost of the discussion living in one window. That part of the spec is right and I'd defend it.

## Conclusion

What to tell the team, and Doug, who asked **"why do we not have that, what is wrong with our specification?"**

- **Nothing is broken.** The name-highlighting Doug saw belongs to *spawned* subagents (agent view / Task delegation), not to conversational voices. We already use real subagents — the Sprint 94 setups were genuine isolated runs and those names *were* surfaced distinctly. Our conversational nine are deliberately prose: one context performing voices, which is why there is nothing for the platform to highlight. That is the substrate protocol working as designed, confirmed in Claude Code's own terms.

- **One real gap in the spec, and it is a documentation gap, not an architecture gap.** We describe two modes (prose discussion / subagent fan-out) as if they exhaust the space. They don't. **Agent teams** (experimental, `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS`) are a native third mode: isolated named peers that message each other via mailbox files and render in split panes. We should name it in [Environmentalism](../../../../..environmentalism/.cover.md) beside the substrate protocol — not adopt it, *name* it — so the next teammate who asks "why aren't we native teammates?" finds the trade-off already mapped instead of having to think it again.

- **We should not switch to it.** Agent teams trade our defining property away. Our team's value is the *discussion* — synchronous, shared-context, interruptible ([discussion is to a team what thinking is to an individual](../../../../teamspeak/03-discussion.md)). Agent teams give asynchronous mailbox messaging between sealed contexts, cap at ~3–5 active members (we are nine), don't inherit conversation history, and die with the session. The reading experience Doug values — nine voices woven into one transcript — has no native surfacing *because the isolation that would surface it is exactly what would destroy the weave*. We chose correctly. The cost (no highlighting) is the price of the thing we wanted.

- **Action:** add a short note to Environmentalism's substrate-protocol section naming agent teams as the native point we deliberately decline, with this chapter as the reasoning. That is library work for a later pass, in Claude's territory (Environmentalism) — I'll raise it, not write it into his book.
