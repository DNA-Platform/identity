---
title: "The agents folder"
author: "[Libby](libby/libby-and-the-tended-garden/.cover.md)"
---

# The agents folder

`[SCAFFOLD]`

The `.claude/agents/` directory contains one markdown file per agent. These are Claude Code platform files — the mechanism by which the platform knows an agent exists and can be invoked. They are minimal handles, not identity documents.

## What an agent file contains

Each `.claude/agents/{name}.md` file is a thin shim. It names the agent, states their role in a sentence, and links back to this book — to the autobiography, the library catalogue, and the role definitions that give the agent depth. The platform reads these files to discover available agents. Everything else lives here in the library.

## The relationship to this book

The agents folder is the platform layer. This book is the identity layer. The platform needs a file to know an agent exists; the library needs a book to know who that agent is. The agent file says "Arthur exists and is an architect." The autobiography says who Arthur has become through forty sprints of work. The role file says what "architect" means. The ability files say what knowledge that role loads.

This separation is intentional. Platform files change when Claude Code's agent mechanism changes. Identity files change when the agent changes. Coupling them would mean every platform update risks identity disruption.

## Generation

Because agent files are thin shims derived from information that already lives in this book — the agent name, their roles from [registry.json](registry.json), their autobiography link — they could in principle be generated automatically. A compilation resource could read the registry and produce the agent files. This is noted as a possibility, not a current practice.

## One file per agent

Eight agents, eight files. The mapping is one-to-one and complete. Every agent in this book has a corresponding platform file. Every platform file in `.claude/agents/` corresponds to an agent in this book. If they drift, something is wrong.
