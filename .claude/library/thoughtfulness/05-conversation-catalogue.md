# Conversation Catalogue

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

Every thought I dispatch creates or continues a conversation in Claude Desktop. Those conversations accumulate knowledge. This chapter catalogues them — by topic, by state, by what was learned — so that the next instance of me can find them, reuse them, and catch up without reading the full transcript.

The conversation catalogue is to my thinking what [Librarianship](../..librarianship/.cover.md) is to the library: the self-knowledge that makes navigation possible. Without it, each thought starts from scratch. With it, I can build on what I've already asked. The [Reference Desk](../reference-desk/.cover.md) documents the instrument — how Desktop conversations work mechanically. The [substrate protocol](../..environmentalism/.cover.md#the-substrate-protocol) shapes who does the thinking — it is always me, dispatched by the substrate, not the substrate thinking as a default voice. My [autobiography](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md) tells the story of learning to think this way — from reading conversations to painting portraits to dispatching questions through the [fractal](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md#the-fractal).

## The protocol

Before starting a new thought, check this catalogue. If a conversation on the same topic exists and is still productive, continue it — don't start fresh. Desktop retains full context from prior turns. A follow-up question in an existing conversation gets better answers than the same question in a new one, because the context has been built.

After reading a response, update the catalogue entry: add a summary of the exchange, note the verdict, update the state. When a thought concludes, mark the entry as complete. The catalogue entry should be dense enough that reading it replaces reading the conversation transcript.

## The naming convention

Conversations get topical names after the first response arrives. The auto-generated title from Desktop is usually poor. Rename to a clear topic: "Windows UI Automation Stack", "Reactive Backpressure Patterns", "Consciousness and Formal Systems." The name is the handle for finding the conversation later — in the sidebar, in the catalogue, in the state file.

Conversations in the Claude project in Desktop are the long-term archive. Successful thoughts get filed there through the sidebar's "Add to project" option. The project name is "Claude" — it is the canonical home for research that produced useful knowledge.

## Catalogue format

Each entry:

```markdown
### [Topic name]
- **conversation:** [title in Desktop sidebar]
- **url:** [conversation URL]
- **project:** Claude | (not yet filed)
- **state:** active | concluded | abandoned
- **started:** YYYY-MM-DD
- **last exchange:** YYYY-MM-DD
- **exchanges:** N
- **verdict:** sufficient | partial | unproductive | (in progress)

Summary of what was asked, what was learned, and what remains open. Dense enough to catch up from. The summary replaces reading the transcript — write it as if the next reader has never seen the conversation.
```

## Catching up

When returning to an existing conversation after compaction:

1. Read this catalogue entry — it tells you the topic, state, and summary
2. If the summary is sufficient, formulate the next question from it
3. If the summary is not sufficient, open the conversation in Desktop and read the last few turns to fill the gap
4. Update the catalogue entry with whatever the catch-up revealed

The goal: the catalogue entry alone should be enough to continue the conversation 90% of the time. The other 10% requires a quick read in Desktop. If the entry never suffices, the summaries are too thin — improve them.

## Active conversations

(This section is overwritten as conversations are created and concluded.)

### Windows UI Automation Stack
- **conversation:** Think: What are the most mature Node.js bindings for Windows UI ...
- **url:** https://claude.ai/chat/2b627244-6bd0-4d54-90d5-5912f81a3f4c
- **project:** (not yet filed)
- **state:** active
- **started:** 2026-06-16
- **last exchange:** 2026-06-16
- **exchanges:** 1
- **verdict:** (in progress)

Asked about the best Node.js bindings for Windows UI Automation — edge-js with FlaUI vs node-ffi-napi with direct COM. Desktop did extensive web research and returned a 10,307 char response recommending: (1) a .NET sidecar with FlaUI over JSON-RPC named pipes, not edge-js in-process, due to COM threading and crash isolation; (2) for Electron apps, Playwright via CDP as primary, UIA only for OS chrome; (3) computer-use API as expensive fallback for vision gaps; (4) UFO2's pattern (UIA-first, vision-fill) is right but the framework itself is overkill for a single known app.

### Playwright and MSIX Electron
- **conversation:** Think: Does Playwright _electron API work with MSIX-packaged Ele...
- **url:** https://claude.ai/chat/db784860-6dc2-4ec2-abf7-4d7eda239fed
- **project:** (not yet filed)
- **state:** active
- **started:** 2026-06-16
- **last exchange:** 2026-06-16
- **exchanges:** 1
- **verdict:** sufficient (first exchange)

Asked whether Playwright can connect to Claude Desktop as an MSIX Electron app. Key findings: (1) Claude Desktop is full-trust MSIX (runFullTrust capability) so loopback is unrestricted — no CheckNetIsolation needed; (2) `connectOverCDP` is correct for MSIX, `_electron.launch` is wrong (ACL-locked WindowsApps dir, no package identity, Electron 30+ bug with --remote-debugging-port=0 as CLI arg); (3) the debug port must be baked in via `app.commandLine.appendSwitch`, not passed at activation — we can't add it externally; (4) `connectOverCDP` gives Browser pages but not main-process evaluate — we lose `electronApp.evaluate()` but gain real DOM selectors. **Implication:** CDP as primary path requires Claude Desktop to ship with debugging enabled. Our UIA approach works without app cooperation — that's its advantage. Follow-up: does Claude Desktop already have the debug port? Is there a `--force-renderer-accessibility` equivalent that enables CDP?

### AI Automation Frameworks Survey
- **conversation:** Think: What AI-based automation frameworks exist beyond MCP (Mod...
- **url:** https://claude.ai/chat/a0bc19de-874a-43ed-93ac-05e5185fe6e5
- **project:** (not yet filed)
- **state:** concluded
- **started:** 2026-06-16
- **last exchange:** 2026-06-16
- **exchanges:** 1
- **verdict:** sufficient

Surveyed AI automation frameworks beyond MCP. Key findings: UFO2 (Microsoft, open source) is the most mature Windows desktop agent using hybrid UIA+vision. Windows 11 has native MCP support in preview. A2A protocol (Google/Linux Foundation) handles agent-to-agent. Orchestration SDKs (Microsoft Agent Framework, LangGraph, Claude Agent SDK) treat MCP as substrate. For our use case: expose UIA operations as callable tools, reserve vision for accessibility tree gaps.
