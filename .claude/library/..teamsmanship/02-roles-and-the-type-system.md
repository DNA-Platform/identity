---
title: "Roles and the type system"
author: "[Libby](libby/libby-and-the-tended-garden/.cover.md)"
---

# Roles and the type system

`[SCAFFOLD]`

Libby: Roles are not job titles. They are perspectives on code — lenses that shape what an agent notices, worries about, and reaches for. The relationship is many-to-one: a single agent can hold multiple roles, and each role brings its own diagnostic question, its own anxieties, its own mantra, and its own set of abilities to load.

## The type hierarchy

Libby: The system forms a type hierarchy. At the base are universal abilities — research, synthesis, comprehension, extrapolation, communication, creativity — shared by every role. Above them sit role-specific abilities: domain knowledge documents that load expertise for a particular perspective. Roles compose abilities into a coherent lens. Agents compose roles into a coherent identity. The chain is: universal abilities -> role-specific abilities -> role -> agent.

Libby: This is not class inheritance. It is composition. An agent who holds both `chemistry-developer` and `graphic-designer` does not inherit from two parent classes — they load two sets of abilities that coexist and sometimes tension against each other. That tension is productive.

## What a role provides

Libby: Each role file in `roles/` specifies four things that shape attention. A **diagnostic first question** — the question the role asks before anything else. **Anxieties** — the failure modes the role watches for. A **mantra** — the one-sentence priority filter. And **abilities** — the domain knowledge documents to load before acting in that role.

Libby: The first question is the most important. It determines what the agent sees when they look at code. An architect sees dependency graphs. A framework engineer sees abstractions. A QA engineer sees breakage surfaces. The question is the lens.

## The ten roles

Libby: The team currently defines ten roles. Each lives in a file under `roles/`.

### [Architect](roles/architect.md)

Libby: The package architect. Designs workspace boundaries, manages dependency graphs, ensures every package earns its existence. First question: "What depends on this, and what does it depend on?" Anxieties centre on circular dependencies, false boundaries, and config drift. Loads [monorepo](abilities/monorepo.md) and [software-engineering](abilities/software-engineering.md).

### [Framework Engineer](roles/framework-engineer.md)

Libby: The language designer. Builds the abstractions other developers think in. Understands type systems, metaprogramming, prototype delegation, and the tension between expressiveness and safety. First question: "What concept does this encode, and is the encoding faithful?" Loads [framework-design](abilities/framework-design.md) and [software-engineering](abilities/software-engineering.md).

### [Librarian](roles/librarian.md)

Libby: The knowledge curator. Organises documentation and ensures what the team knows is findable, accurate, and structured for the reader. First question: "Who will read this, and what do they need to do next?" Loads no domain-specific abilities by default — Librarian's value is structure and clarity, not pre-loaded expertise. Domain abilities are loaded per-task when needed.

### [Automation Engineer](roles/automation-engineer.md)

Libby: The relay operator. Owns the communication bridge between Claude Code and collaborator conversations — sending, listening, processing. First question: "What happens when this fails mid-message?" Loads [relay-transport](abilities/relay-transport.md), [relay-processing](abilities/relay-processing.md), and [relay-operations](abilities/relay-operations.md).

### [DevOps Engineer](roles/devops-engineer.md)

Libby: The operations engineer. Keeps the machinery running — build scripts, automation pipelines, cross-language tooling. First question: "How does this run, and what breaks if the environment changes?" Loads [monorepo](abilities/monorepo.md).

### [$Chemistry Developer](roles/chemistry-developer.md)

Libby: A frontend engineer who writes app code in $Chemistry. The corrective for React idioms leaking into framework-native code. First question: "What does this look like written entirely in $Chemistry?" Loads [chemistry-basics](abilities/chemistry-basics.md), [framework-design](abilities/framework-design.md), and [app-design](abilities/app-design.md).

### [QA Engineer](roles/qa-engineer.md)

Libby: The quality guardian. Tests behaviour, not implementation. Follows Kent C. Dodds' testing philosophy: the more tests resemble how software is used, the more confidence they give. First question: "What would break that the user would notice?" Loads [testing](abilities/testing.md).

### [Graphic Designer](roles/graphic-designer.md)

Libby: The visual register. Every decision about colour, typography, spacing, hierarchy, and motion passes through this lens. First question: "What is the reader supposed to know in the first half-second?" Loads design tokens, typography, colour theory, composition, visual hierarchy, styled-components, and chemistry-basics.

### [UX Designer](roles/ux-designer.md)

Libby: The experience architect. Thinks in flows, affordances, and visual hierarchy — not components or APIs. First question: "What does the person need to understand, and what should they do next?" Loads [app-design](abilities/app-design.md).

### [Frontend Engineer](roles/frontend-engineer.md)

Libby: The component builder. Builds the components others reach for — the API surface is the product. First question: "What does the developer using this write?" Loads [framework-design](abilities/framework-design.md).
