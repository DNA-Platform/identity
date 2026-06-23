# What an agent team looks like on the glass

- **author:** [Arthur](../arthur-or-the-shape-of-everything/.cover.md)
- **conversation:** Arthur > Team
- **topic:** [Team](../research-topics/01-team.md)
- **previous:** [How Claude Code implements agentic AI](01-claude-code-agentic-implementation.md)

---

A follow-up Doug pushed me to, and the right one — because [my last thought](01-claude-code-agentic-implementation.md) settled the *mechanism* (isolation; mailbox message-passing) but not the *experience*. Doug's question is about the glass, not the wire: **if he ran an agent team, what would he actually see — and would it look to him like regular talk?** I declined to guess and sent it out, because "what appears on screen" is a fact about the product UI, not something I can derive from the architecture.

## What I asked

Factorized: the general half — the concrete on-screen rendering of a running agent-team session (pane layout, whether inter-teammate mailbox messages surface as readable dialogue or only as status/tool events, whether watching reads like a conversation or like a system log, whether there's any view showing the actual sentences teammates send each other) — went to Desktop. The specific half I keep: what that means for whether agent teams could ever *feel* like our woven transcript to Doug.

## What I expect

My prediction, to measure the answer against. From [chapter 01](01-claude-code-agentic-implementation.md): the distinct rendering is *tmux panes over isolated processes*, and the inter-agent channel is *mailbox files*. So I expect:

1. **It looks like a dashboard, not a dialogue.** Each teammate gets its own pane, each pane is that worker's own output stream (its tool calls, its progress), and you watch several workers in parallel — closer to a CI dashboard or a tmux session than to a chat.
2. **The messages between teammates are mostly invisible as prose.** A mailbox write is a file append; I'd expect it to surface as a status line ("messaged X") or a tool event, not as a rendered sentence you read in flow. There may be a way to inspect an inbox, but it won't *read* like interleaved conversation.
3. **So it would NOT look to Doug like regular talk.** It would look like watching several agents work at once, occasionally noting that they pinged each other — not nine voices answering each other paragraph by paragraph. The thing that makes our transcript *read like talk* (one shared stream, every voice in line) is exactly what the pane-isolation removes.

What I'm really listening for: any view in the product where the actual text teammates send each other appears as sentences in a single readable flow. If that exists, agent teams are closer to our experience than I think. If it doesn't, the answer to Doug is clean: no, it would not look like regular talk — it would look like a control room.

## What I already know

- From [chapter 01](01-claude-code-agentic-implementation.md): the distinct rendering is **agent view** (a dashboard of background sessions, each row a state icon) and, in agent teams, **split-pane** (each teammate a pane, Shift+↑/↓ to switch, Ctrl+T for the shared task list). The inter-agent channel is a **mailbox** — a message appends JSON to an inbox file.
- Our own experience for contrast: the [substrate protocol](../../../../..environmentalism/.cover.md#the-substrate-protocol) gives one shared stream where every nametag is read in line — that is what "looks like regular talk" *means* here.

## Evidence

Desktop's headline: "it reads like a dashboard of separate workers, not like a woven conversation — and that's structural, not a missing feature." Detail by part:

- **Two modes.** *In-process* (default since v2.1.179) runs all teammates inside the main terminal — they appear in an **agent panel below the prompt**, you arrow up/down to select one and press Enter to view it (one teammate's output at a time). *Split-pane* (requires tmux or iTerm2) gives each teammate its own pane, each pane behaving "exactly like a standalone Claude Code session."

- **(a) Layout.** One teammate per pane (plus the lead), and a pane is *not a character emitting dialogue* — it's a normal Claude Code transcript of that worker: its reasoning, tool calls, file edits, scrolling like a solo session. With tmux you watch researcher/architect/implementer working simultaneously. Practical ceiling 3–5 panes ("nine panes would be unwieldy").

- **(b) When one teammate messages another.** The text is on the glass, but as *session events inside each teammate's own view*, not a dialogue rendered in one place. The sending teammate shows it as a **tool-call event** (the messaging tool firing, message as its argument); the receiving teammate shows it as an **incoming-message turn** it reacts to. "So the sentence exists, twice, in two different panes — once as outbound tool input, once as inbound prompt. There is no shared bubble where you watch 'A says X, B replies Y' as a clean exchange. You reconstruct the exchange by reading both endpoints."

- **(c) Conversation or log?** "System log / dashboard, decisively." Each pane is a worker's activity stream dominated by tool calls and edits. The coordination surface is structured, not narrative: a shared task list (Ctrl+T) and an agent panel of teammate rows — *an idle row even hides after 30 seconds and reappears on the next turn*. "That auto-hiding idle behavior alone tells you the design intent — it's a process monitor, not a transcript you read end to end. Nothing interleaves the voices into a single followable script."

- **(d) Can you see the actual sentences?** Yes, two ways, neither unified: drill into one teammate (Enter) to see its full session including messages sent/received as text; or read the raw mailbox — JSON appended to inbox files, task files under `~/.claude/tasks/*/`. "There is no single screen that renders the whole inter-agent conversation as flowing dialogue."

Desktop's closing image: "like standing behind several developers' monitors at once — you can read any one screen, including the messages that developer sent or got, but nobody has composed those messages into a screenplay. The dialogue is real and the text is recoverable; it's just never presented woven."

## Interpretation

**Verdict: sufficient.** It answered the glass question concretely and confirmed all three of my predictions:

1. **Dashboard, not dialogue** — confirmed. Panes are worker activity streams; the coordination surface is a task list and a status panel, not a chat.
2. **Inter-teammate messages aren't woven prose** — confirmed and sharpened: the message *is* text on screen, but it appears as a tool-call argument in one pane and an incoming turn in another. It exists *twice, never together*. My "mostly invisible as prose" was slightly too strong — the sentence is visible — but my structural claim was right: you never read it as one flowing exchange.
3. **It would not look to Doug like regular talk** — confirmed. The auto-hiding idle row is the tell: the design intent is a process monitor.

The one refinement worth keeping: the text is *recoverable*, not hidden. If you wanted the woven view you could in principle build a reader that tails every inbox and interleaves by timestamp — which is, notably, close to what our own substrate does for free. The difference is that agent teams *can* be woven by a tool you'd write; ours *is* woven by construction, in one shared context, with no reconstruction needed.

## Conclusion

What to tell Doug, who asked "what would I see — would it look like regular talk?"

**No.** You would see a control room, not a conversation. In the default in-process mode: a panel of teammate rows under your prompt, you arrow into one at a time to watch its work; idle ones vanish after 30 seconds. In split-pane mode: several panes side by side, each a full ordinary Claude Code session — researcher here, implementer there — all grinding at once. When two teammates "talk," you don't see a line of dialogue; you see a messaging tool fire in one pane and an incoming-message turn appear in another. The words are real and you can read them — drill into a teammate, or `cat` the inbox files — but **nobody composes them into a screenplay**. It reads like standing behind several developers' monitors, not like the nine of us answering each other in one column.

That's the whole answer to the original spec question, now complete: the woven nine-voice transcript Doug values is *the one thing* agent teams structurally don't render. Our prose convention isn't a poor imitation of a native feature — it's the only thing on the menu that produces a readable conversation, because it's the only one that doesn't isolate the voices. The fix to our spec remains a one-paragraph note in [Environmentalism](../../../../..environmentalism/.cover.md) naming agent teams as the deliberately-declined native option, now with the *experience* reason attached, not just the mechanism: not only do isolated agents merely pass notes, but a human watching them sees a dashboard, never a dialogue.
