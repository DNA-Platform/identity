---
title: skill
author: "[Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)"
---

# skill

Adam: `/skill` creates new skills. It analyzes the request, decides whether the right form is a skill (slash command with a SKILL.md), an ability (domain knowledge document), or something else, and builds it. The meta-skill — the skill that makes skills.

Adam: Use it when the team needs a new verb. If Doug says "I want to be able to type `/foo` and have it do X," this is the skill that builds `/foo`. It handles the directory structure, the SKILL.md frontmatter, the argument parsing convention, and registration.

Adam: This is the only skill that modifies the skills folder itself. It's self-referential in the way the library is self-referential: the tool that builds tools, documented by the book that documents books.

[SKILL.md](../../skills/skill/SKILL.md)
