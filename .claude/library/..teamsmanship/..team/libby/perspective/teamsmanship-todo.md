# Teamsmanship — what I still need to do

- **author:** [Libby](../libby-and-the-tended-garden/.cover.md)

---

Doug asked concrete questions. Let me answer each honestly.

## Have I covered the rules for roles and abilities?

NO. Chapter 02 lists the roles with their diagnostic questions and abilities, absorbed from the old role files. But I haven't specified the TYPE SYSTEM Doug described:

- Roles are like classes with inheritance (Parent1, Parent2)
- Each role has: description, abilities (all links)
- Abilities are many-to-one with roles
- Some abilities are universal (a base type loaded by ALL roles)
- Agents have roles (many-to-one)
- This is a class hierarchy expressible with links

The chapter has the DATA (which roles exist, what they load) but not the SPECIFICATION (how roles work as a type system, how inheritance works, how to validate that a role is correctly specified).

I need to rewrite chapter 02 with:
- The type system as a formal structure (not just a list)
- Each role as a "class" with parent roles (if any), description, and ability links
- A validation resource that checks role specifications are complete

## Is the system documented in a usable way?

NO. The current format is prose paragraphs. Doug is suggesting something more structured — like class definitions with links:

```
### Architect
- parent: (none — base role)
- description: workspace boundaries, dependency graphs, global structure
- abilities: [monorepo](link), [software-engineering](link)
- universal abilities: [research](link), [synthesis](link), ...
```

This is more like a specification than a narrative. The chapter should have BOTH — the narrative explaining what the type system means, AND the structured definitions that can be validated.

## Have I extended the validation system?

NO. The validators in Librarianship check the library-wide conventions (anatomy, subjects). Teamsmanship needs its OWN validator that:
1. Checks the `..team/` folder contains exactly the agents listed in chapter 08
2. Checks each role definition is complete (has description, abilities with links)
3. Checks each ability links back to the roles that load it
4. Doesn't fail on the `..team/` folder (which would normally be "books inside a subject")

The extension mechanism needs to be specified in Librarianship AND implemented in Teamsmanship. Librarianship says HOW to extend. Teamsmanship implements the extension.

## Steps required

### Understanding (write in perspective, discuss)
1. ~~Reread Doug's messages about roles and abilities~~ Done — written above
2. Think about what the type system looks like as structured markdown
3. Think about how the validator extension pattern works

### Write in Librarianship (field guide)
4. New chapter or section in chapter 04: how subject catalogues can extend validation with their own resource
5. The extension spec: a validator resource in a subject catalogue that the library validator discovers and runs

### Write in Teamsmanship (the book itself)
6. Rewrite chapter 02 — roles as a formal type system with structured definitions and links
7. Rewrite chapter 03 — abilities as linked domain knowledge with role mappings
8. Write the Teamsmanship validator resource that checks roles, abilities, and the ..team/ folder
9. Update chapter 08 — each agent's role assignments with links to the role definitions in chapter 02

### Mechanical fixes
10. Fix the remaining 5 anatomy errors (unsigned chapters, bare subject links)
11. Fix all agent book frontmatter (summary removal, author/subject order)
12. Update all links that broke from the ..team/ move

### Validation
13. Run all validators — library-wide anatomy, subjects, links
14. Run Teamsmanship's own validator
15. Fix what they find

## What books does this understanding go in?

- **Librarianship** ch 04 or new chapter: the validator extension pattern
- **Teamsmanship** ch 02: the role type system specification
- **Teamsmanship** ch 03: the ability specification
- **Teamsmanship** validator resource: checks roles, abilities, ..team/
- **This perspective**: my working notes and reflections

## What I need to discuss

I want to discuss with the team:
- What should the role class syntax look like? Doug showed a sketch. Arthur and Cathy might have thoughts on how to make it link-dense.
- Should the validator extension be discovered automatically (by convention — any `.ts` file beside a `.cover.md`) or declared (in frontmatter)?
- How do we handle the fact that the current role files had CONTENT (diagnostic questions, anxieties, mantras) that's richer than a class definition? Do we keep the narrative AND add the structured spec?

<!-- citations -->
[teamsmanship]: ../../.cover.md
[ch02]: ../../02-roles.md
[ch03]: ../../03-abilities.md
