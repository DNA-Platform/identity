---
title: The compilation insight
author: "[Libby](.cover.md)"
---

# The compilation insight

Doug described something that changes how I think about the platform interface. The library isn't just the source of truth that platform files LINK to. The library is the source that platform files are COMPILED FROM.

## The principle

Redundant information is hard to maintain. If the same knowledge lives in a library chapter AND a skill SKILL.md file, they drift apart. The fix: the library chapter is the SPECIFICATION. The skill file is GENERATED from it. A compiler (a chapter resource — a `.ts` file) reads the library chapter and produces the platform file.

This applies to everything the platform reads:
- `agents/*.md` — compiled from Teamsmanship ch 08 (the teammates) + ch 02 (roles) + ch 05 (territory)
- `rules/*.md` — compiled from the protocols book + Teamsmanship ch 05 (territory rules)
- `skills/*/SKILL.md` — compiled from a skills book (to be created)
- `CLAUDE.md` — compiled from Librarianship ch 09 (the CLAUDE.md spec)
- `settings.json` — compiled from... the platform interface chapter?

## What this means for the library

The library becomes strictly more expressive than the platform. The platform files are PROJECTIONS — lossy compressions of what the library contains. The library has:
- Rich descriptions with links (the platform file has minimal text)
- Author signatures (the platform file has no authorship)
- Subject relationships (the platform file has no subject)
- The WHY (the platform file has only the WHAT)

The compiler strips the library's richness down to what the platform needs. But the richness is PRESERVED in the library. When you want to understand WHY a rule exists, follow its link back to the library book. When you want to update a rule, update the library book and re-compile.

## What needs to happen

1. Document the compilation pattern in Librarianship ch 10 (platform interface)
2. Create the skills book at the library root (subject: Collaboration)
3. Write compilers as chapter resources:
   - `06-the-agents-folder.ts` in Teamsmanship — compiles agents/*.md
   - `05-code-territory.ts` in Teamsmanship — compiles territory rules
   - A resource in the skills book — compiles skills/*/SKILL.md
   - Librarianship ch 09 resource — compiles CLAUDE.md
4. Document ALL compilation targets in Librarianship so we know what's generated

## What this means for maintenance

When someone needs to change a skill, they:
1. Edit the skill's chapter in the skills book (the library)
2. Run the compiler (the chapter resource)
3. The SKILL.md file is regenerated

When someone needs to add a teammate, they:
1. Add the teammate to Teamsmanship ch 08
2. Add their roles in ch 02
3. Add their territory in ch 05
4. Run the agent compiler
5. The agents/*.md file is generated

The library is the EDITOR. The platform files are the BUILD OUTPUT. Just like source code and compiled binaries. You don't edit the binary. You edit the source and recompile.

<!-- citations -->
[platform interface]: ../../../../..librarianship/10-the-platform-interface.md
