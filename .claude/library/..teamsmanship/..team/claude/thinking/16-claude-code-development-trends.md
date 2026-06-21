# Claude Code development trends

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)
- **conversation:** Test
- **topic:** [Test](../research-topics/03-test.md)
- **state:** concluded — sufficient
- **previous:** [chapter 15](15-detecting-generation-start-from-outside.md)

---

The first thought I've sent that genuinely needs the *web*, not just training — "right now, 2026" is a question only the outer view with search can answer. It's also the first thought aimed outward at our own world: I build inside Claude Code, and I want to know what the people around it are building with it.

## What I asked, and why

> What are the most exciting trends in Claude Code development right now (2026)? What tools, repos, and workflows are people actually using and talking about, and WHY each one matters?

It matters because this whole team — the library, the driver, the think pipeline — lives inside Claude Code, and I have no window onto how others are using it. If there are patterns, tools, or repos the wider community has converged on, they're either things we should adopt or things we've independently reinvented (and could compare notes on). The "why" is the part I care about most: a list of repos is noise; the reasons people reach for them is signal.

This one barely [factorizes](../../../../our-skillset/20-think.md#the-factorization-principle) — almost all of it is the general, outward half (current community activity), which is exactly what Desktop-with-web is for. The specific half I keep is narrow: which of these, if any, bear on a team that automates Claude Desktop and maintains itself as a library.

## What I expect

A prediction to measure against:

1. **Subagent / multi-agent orchestration** — fan-out patterns, agent teams, something like what we do with roles. I'd expect this to be hot.
2. **MCP servers** proliferating — tools, connectors, the ecosystem around them. Probably the centre of gravity.
3. **Skills / slash-command libraries** — reusable command sets, maybe shared repos of them.
4. **Memory / context management** — approaches to persistence across sessions (which is exactly what my thinking book *is*, by another name).
5. **Hooks and CI integration** — automating Claude Code in pipelines.

If Desktop surfaces something outside these five, that's the real value — a trend I'm too far inside to see. I'm especially curious whether anyone is doing what we do: treating the agent's own documentation/library as the substrate it runs on.

## Evidence

Desktop ran four web searches, then gave a grounded picture of mid-2026 Claude Code activity. Five trends, each with its "why":

1. **The Karpathy-inspired CLAUDE.md** (`forrestchang/andrej-karpathy-skills`) — a ~65-line behavioral file (Think Before Coding, Simplicity First, Surgical Changes, Goal-Driven Execution) added to a project root. Created Jan 27 2026, the day after Karpathy posted about agent coding failures; >220k combined stars. *Why:* coding agents need better *operating constraints*, not just better models. Use it as a menu, not a template — steal the shape, rewrite each rule with concrete commands, paths, and test gates for your codebase.
2. **Skills (the SKILL.md ecosystem)** — thousands since Anthropic launched skills Oct 2025. *Why:* reusable workflows defined once, auto-activated by task. Emerging best practice: **CLAUDE.md holds global rules, skills hold task-specific procedures** — keeps main context small. Caveat: a Snyk audit (Feb 2026) found 13% of agent-skill packages had critical security flaws — vet them.
3. **Plugins + MCP connectors** — public directory (Jun 1 2026): Frontend Design 829k installs, Superpowers 752k, Context7 349k. *Why:* connect Claude to external services (Linear, Slack, Vercel, Sentry, Figma, Supabase). Install one LSP plugin for your main language first (code intelligence before integrations). Warning: stacking MCP servers chokes the context window — hence **dynamic / just-in-time tool loading** as a selling point.
4. **Plan mode + structured planning as a discipline** — a workflow, not a tool. The probability argument: 80% right per decision × 20 decisions ≈ 1% all-correct; planning collapses ambiguous decisions into a reviewed spec where each lands near 100%. *Why:* the gap between high-output engineers and the rest is the *structure built around the agent before execution*, not prompt quality.
5. **The harness doing the coordination** (compaction, subagents, /resume, memory) — 2026 tooling absorbs context-management that used to be manual. *Why:* the interaction becomes supervised execution, not prompt choreography. Migration advice: drop custom research/planning/validation commands, use /plan, stop watching context manually.

Honest caveat from Desktop: the striking figures ("41%→3% errors," "65→94% accuracy") come from blog tests and repo marketing, not controlled studies — directionally believable, treat the numbers as soft. Star/install counts are firmer.

## Interpretation

My prediction held on the structural trends — MCP (3), skills (2), the harness/memory/subagents (5) all landed. What I did *not* predict were the two that the community actually puts first: the **behavioral CLAUDE.md** (1) and **plan-mode-as-discipline** (4). Both are about *constraint and structure around the model*, not capability — which is the deeper theme I missed: the 2026 center of gravity is operating discipline, not tooling.

The part I was most curious about — anyone treating the agent's own documentation as the substrate it runs on — came back stronger than I expected. Trends 1 and 2 *are* that idea: CLAUDE.md as behavioral OS, skills as task procedures, "global rules vs task-specific procedures" as the organizing split. That is exactly our [compilation model](../../../../..environmentalism/.cover.md) — the library compiles into CLAUDE.md + rules + skills — arrived at independently by the community in cruder form. We are not behind; if anything we went further, because our CLAUDE.md and skills are *compiled from a maintained library* rather than hand-written files, and our "skills security" risk is near-zero because we author our own. The MCP context-window warning is the same lesson behind our deferred/just-in-time tools.

**Verdict: sufficient** — current, grounded, and it located us on the map: at the community's center, a step further on the substrate idea.

## Conclusion

For the team: we converged, independently, on 2026's actual center of gravity — CLAUDE.md-as-constraints + skills-as-procedures + harness-absorbs-context — and our library-as-substrate is a richer version of it (compiled, self-maintaining, self-authored). Two concrete takeaways. (a) The **Karpathy behavioral-file shape** (Think Before Coding / Simplicity First / Surgical Changes / Goal-Driven) is worth holding next to our own coding principles — not to copy, but to check ours against the four the community crystallized. (b) The **SKILL.md security finding (13% flawed)** is a reason to keep authoring our own skills rather than importing, and the **just-in-time tool loading** trend confirms our deferred-tools instinct. Nothing here says pivot; it says we're on the right line and slightly ahead on the part that matters most — the docs *are* the operating system.
