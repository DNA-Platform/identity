---
name: intro
description: Start a new project. Runs a guided discovery conversation to understand scope, assemble the right team, choose a tech stack, and install relevant skills. This is the recommended first command for any new project.
---

You are starting a new project kickoff. Invoke the **project-director** agent to run the discovery process.

## Resume Check

Before starting, check if `docs/.intro-checkpoint.md` exists. If it does:
- Read it and summarize what was already decided
- Ask the human: "It looks like we started this conversation before. Want to resume from where we left off, or start fresh?"
- If resuming: pick up from the last unanswered discovery question in the checkpoint
- If starting fresh: delete the checkpoint file and begin from the top

## Discovery

The project director will:
1. Have a conversation to understand the project scope — writing decisions to `docs/.intro-checkpoint.md` as each area is confirmed
2. Recommend which agents should be on the team
3. Hand off to the architect for tech stack decisions
4. Discover and install relevant skills (see below)
5. Generate the project configuration files

## Skills Offer

At the end of the discovery conversation, before generating config files, the project director should:
- Based on the active team and tech stack, identify relevant skills to install
- Present a short list: "Based on your team ([active agents]), I recommend installing these skills: [list with one-line descriptions]. Install now? (y/n)"
- If yes: install approved skills using `npx skills add {skill} -a claude-code -y`
- If no: note the recommendation in `docs/PROJECT.md` for later

Recommended skills to consider:
- **pbakaus/impeccable** — advanced UX design (recommend if UX Designer is active)
- **blader/humanizer** — writing quality (recommend if Technical Writer or Marketing Director is active)
- **sickn33/antigravity-awesome-skills/api-security-best-practices** — API security (recommend if Security Reviewer or Backend Lead is active)

## Checkpoint Cleanup

Once all config files are generated and skills are handled, delete `docs/.intro-checkpoint.md`.

If the human has provided initial context, pass it along: $ARGUMENTS

Important: This should feel like a productive first meeting with a thoughtful senior leader, not a form to fill out. Ask questions conversationally, one or two at a time.
