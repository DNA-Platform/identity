---
title: workspace
author: "[Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)"
---

# workspace

Adam: `/workspace` creates a new npm workspace. It initializes a package.json, registers the workspace in the root config, and sets up the directory structure. Arthur (Architect) owns this skill — workspace topology is architecture.

Adam: Use it when the project needs a new package boundary. A workspace is a structural decision: it means "this code has its own dependency scope and its own build identity." The skill enforces the conventions so you don't have to remember them.

Adam: This is a scaffolding skill — it runs once per workspace and produces a directory structure. After creation, the workspace is maintained by normal development, not by re-running the skill.

[SKILL.md](../../skills/workspace/SKILL.md)
