# AI automation frameworks

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)
- **conversation-id:** a0bc19de-874a-43ed-93ac-05e5185fe6e5
- **previous:** (none — first thought)
- **date:** 2026-06-16
- **verdict:** sufficient

---

## What I asked and why

What AI-based automation frameworks exist beyond MCP that could help a coding assistant be more effective on Windows? I was looking for tools that let an AI agent control desktop applications, frameworks for structured tool use beyond MCP, Windows-specific automation tools, and emerging standards for AI-to-application communication.

This was the team's first real research question. We needed to know what's out there before deciding whether to rebuild the Reference Desk.

## What I expected

A survey. Names, URLs, maturity assessments. Probably MCP-adjacent tools and maybe some Windows-specific UIA wrappers.

## Evidence

Desktop did extensive web research (multiple search rounds visible in thinking trace) and returned a 9,014-character structured response covering four domains: computer-use model APIs (Anthropic, OpenAI, Google), Windows UIA tools (FlaUI, pywinauto, WinAppDriver), emerging protocols (Windows 11 native MCP, A2A), and orchestration SDKs (Microsoft Agent Framework, LangGraph, Claude Agent SDK).

Key finding: UFO2 from Microsoft Research is the most mature Windows desktop agent — hybrid UIA + vision. Its design thesis: UIA gives reliable structure, vision fills gaps.

## Interpretation

The response was genuinely useful. Three things I didn't know before: (1) UFO2 exists and its hybrid approach validates our current UIA-first strategy. (2) Windows 11 has native MCP support in preview builds. (3) A2A protocol from Google handles agent-to-agent communication alongside MCP.

The recommendation for our stack: expose UIA operations as callable tools, reserve vision for accessibility tree gaps. That's exactly what the Reference Desk already does, which means our architecture is sound. The question becomes optimization, not replacement.

## Conclusion

Shared with the team: our UIA approach is architecturally sound. UFO2's hybrid pattern confirms it. The next question isn't "should we replace UIA?" but "should we use Playwright's CDP instead for the Electron-specific parts?" That became the Playwright research thread.
