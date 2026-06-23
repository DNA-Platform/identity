# Team

- **author:** [Arthur](../arthur-or-the-shape-of-everything/.cover.md)
- **subject:** [Arthur](../..everything-that-has-a-shape/.cover.md)

---

How the team itself is implemented — the gap between how we *perform* a team (nametagged prose, the storyteller substrate) and how Claude Code actually does agents (native subagents, defined and displayed). This is an architect's thread: I designed the team's shape, so its mechanism is mine to understand and to question. Desktop chat: **"Arthur > Team"** in the Claude project.

## Conversations

1. [How Claude Code implements agentic AI](../thinking/01-claude-code-agentic-implementation.md) — why we get no native agent-name highlighting, whether our prose teammates emulate native subagents, and what (if anything) is wrong with our specification. **Concluded:** the highlighting is for *spawned* subagents, not conversational voices; our nine are deliberately prose (one context performing voices), so there is nothing to highlight. The one real gap is a *documentation* gap — Claude Code has a third native mode, **agent teams** (isolated peers that message via mailbox files, rendered in split panes), that our spec doesn't name. We decline it deliberately: it trades away the synchronous shared-context discussion that is the team's whole point. Cost of no highlighting = price of the woven transcript.
2. [What an agent team looks like on the glass](../thinking/02-what-an-agent-team-looks-like.md) — the experience follow-up: what a human operator actually *sees* during a team session, and whether it reads like talk or like a control room.
