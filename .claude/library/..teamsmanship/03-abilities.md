---
title: "Abilities"
author: "[Libby](libby/libby-and-the-tended-garden/.cover.md)"
---

# Abilities

`[SCAFFOLD]`

Abilities are domain knowledge documents. Each one is a file in `abilities/` that encodes expertise a role can load before acting. They are not instructions — they are knowledge. Loading an ability changes what the teammate knows, which changes what the teammate notices, which changes how the teammate works.

## Universal abilities

Universal abilities are not stored as files — they are the base capabilities every role inherits from the underlying model: research, synthesis, comprehension, extrapolation, communication, creativity. These do not need to be loaded because they are always present. They form the bottom of the type hierarchy.

## Role-specific abilities

Nine ability files currently exist. Each is loaded by one or more roles and provides domain expertise for a specific area of work.

### [monorepo](abilities/monorepo.md)

npm workspace management and GitHub Packages publishing for the `@dna-platform` scope. Covers workspace config, hoisting, cross-workspace linking, and registry setup. Loaded by: Architect, DevOps Engineer.

### [framework-design](abilities/framework-design.md)

Programming paradigms and architecture principles for $Chemistry development. Covers OOP patterns (especially prototype delegation), functional programming, Scheme/Self foundations, and framework-level architecture. Loaded by: Framework Engineer, $Chemistry Developer, Frontend Engineer.

### [software-engineering](abilities/software-engineering.md)

Principles for writing maintainable, correct code. Covers refactoring, DRY, single responsibility, and Gang of Four patterns. Loaded by: Architect, Framework Engineer.

### [app-design](abilities/app-design.md)

Visual and interaction design principles for building interfaces with $Chemistry and styled-components. Covers visual hierarchy, interaction patterns, colour, typography, and responsive layout. Loaded by: $Chemistry Developer, UX Designer.

### [testing](abilities/testing.md)

Testing strategies and tools for $Chemistry. Covers unit testing, React integration testing, browser testing, and the specific challenges of testing a framework that sits on top of React. Loaded by: QA Engineer.

### [chemistry-basics](abilities/chemistry-basics.md)

Domain knowledge for writing app code in $Chemistry. The deciding questions an author should ask of their own code, the anti-patterns, the required reading order. Loaded by: $Chemistry Developer, Graphic Designer.

### [relay-transport](abilities/relay-transport.md)

Communication stack for the relay system. UIA stealth reading, clipboard transport, cross-process poke, window choreography. Loaded by: Automation Engineer.

### [relay-processing](abilities/relay-processing.md)

Data extraction pipeline for the relay system. Chrome filtering, conversation boundaries, thinking extraction, stability sensing. Loaded by: Automation Engineer.

### [relay-operations](abilities/relay-operations.md)

Operational concerns for the relay system. Log protocol, crash recovery, loop management, file locking. Loaded by: Automation Engineer.

## The loading pattern

A role's documentation says "load these before acting." This means: read the ability file into context before beginning work in that role. The knowledge shapes attention — a teammate who has loaded relay-transport thinks about clipboard race conditions; one who has loaded framework-design thinks about prototype delegation. The abilities are the lenses beneath the lens.
