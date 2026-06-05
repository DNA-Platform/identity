# Teamsmanship rewrite plan

- **author:** [Libby](../libby-and-the-tended-garden/.cover.md)

---

Everything Doug specified for the Teamsmanship book, captured before executing.

## The book

Teamsmanship is the book that represents the subject "Collaboration." It specifies how agents work together, what roles and abilities mean, how identity is structured, and how the team interfaces with the Claude Code platform. It contains the `..team/` folder for personal libraries.

## What the book needs to contain (as chapters)

### Identity and structure
- What an agent IS — the two-book minimum (autobiography + library catalogue), the self-referential identity pattern
- The perspective practice — represent → look → reflect → change
- How agents gain experience — the library as a leveling system

### Roles and abilities (the type system)
- Roles are PERSPECTIVES on code — many-to-one with agents (an agent can have multiple roles)
- Abilities are domain knowledge — many-to-one with roles (a role loads multiple abilities)
- Some abilities are UNIVERSAL — assigned to all roles. This is a base type.
- A basic type system: base abilities → role-specific abilities → role → agent
- Each role needs: a diagnostic first question, anxieties, a mantra, the abilities it loads
- Each ability needs: the domain knowledge it provides, which roles load it
- Links connect everything: role links to its abilities, agent links to their roles, abilities link back

### Protocols (internalized)
- The cover should reference the [protocols book](../../../../teamspeak/.cover.md) and summarise the six conventions
- The relationship between protocols and the team — protocols are HOW the team operates

### The platform interface
- How agents/ files interoperate with this book
- A compilation step: could code generate the minimal agent .md files FROM the Teamsmanship book?
- The agents/ files should link BACK to Teamsmanship with real links so you can understand what being an agent truly means
- The registry's code assignments internalized as part of the role/territory description

### The ..team/ folder
- Contains personal libraries — one folder per teammate
- Teamsmanship catalogues each library catalogue (the .. prefixed book in each agent folder)
- Needs a validator extension that checks: the folder contains only and all of the agent libraries catalogued in the book
- The extension pattern itself needs to be specified in Librarianship

## What to remove
- `registry.json` — absorb code assignments into roles/territory chapters
- `roles/` directory — absorb into chapters about the type system
- `abilities/` directory — absorb into chapters about domain knowledge
- `adam.md` through `gabby.md` — old agent registry files, replaced by Teamsmanship chapters
- `01-arthur.md` through `08-gabby.md` — old catalogue chapters, replaced by proper cover TOC

## Execution order

1. Write the Teamsmanship `.cover.md` — the full book with chapters on identity, roles, abilities, protocols, platform, and the ..team/ catalogue
2. Write the chapters — absorbing roles and abilities content into proper chapters with the type system
3. Remove the detritus (old files, folders)
4. Fix all agent book frontmatter in ..team/ — subject: as links, remove summary:, fix order
5. Write the validator extension for ..team/
6. Write the agent file compilation script (or at minimum, verify agents/ links back correctly)
7. Update Librarianship's description of Teamsmanship (chapter 15)
8. Run all validators — should pass clean

## The agent compilation question

Doug asks: could code compile agent files FROM Teamsmanship? The book defines roles, abilities, territories. The agents/ files need: name, description, tools, and links back. A script could read Teamsmanship and generate the agent .md files, ensuring they always link back correctly. This would be a chapter resource — a script that compiles the book into platform artifacts.

<!-- citations -->
[protocols]: ../../../../../teamspeak/.cover.md
[librarianship]: ../../../../..librarianship/.cover.md
