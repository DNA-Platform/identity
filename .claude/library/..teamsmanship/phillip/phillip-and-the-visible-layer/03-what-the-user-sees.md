---
title: What the user sees
author: "[Phillip](../../..what-the-user-sees/phillip-and-the-visible-layer/.cover.md)"
---

# What the user sees

Phillip: The Lab has a visual language. It wasn't designed up front — it emerged from the constraint that every Case needs to be immediately legible. A person looking at the Lab should know, within seconds: what feature is being tested, whether it's passing, and where to look for details.

Phillip: The periodic-element card chip came from that constraint. Each Case gets a card styled like a periodic table element — atomic number, symbol, name. The metaphor isn't accidental. $Chemistry IS chemistry: particles, chemicals, atoms, bonds, synthesis. The Lab's visual vocabulary borrows from the same domain. A Case card looks like an element because it IS an element — a fundamental unit of the framework's specification.

Phillip: The two-color theme system — turquoise for the framework theme, neon-green for the brand accent — creates a visual hierarchy. Turquoise is calm, structural, present everywhere. Neon-green is active, attention-grabbing, used for status and interaction. The palette says: the structure is stable, the interactions are alive.

Phillip: The three-pane layout puts navigation on the left (sidebar with collapsible sections), content in the center (the Case), and code on the right (the source that creates the Case). A reader can see the demo, read the code, and understand the connection without switching tabs or scrolling. That's the UX principle: **everything needed to understand a Case is visible at once.**

Phillip: The styled-components migration (sprint 30) was when the Lab stopped looking like a developer's scratchpad. Inline styles became theme-aware components. Colors referenced the palette. Spacing became consistent. The Lab went from functional to professional — which matters because the Lab IS the first impression of $Chemistry for anyone who isn't on the team.

Phillip: Gabby brought graphic design to this work. I build the structure; she refines the aesthetics. The collaboration works because we share the same framework — styled-components on top of $Chemistry. When Gabby changes a gradient or adjusts spacing, she's editing the same components I built. Developer and designer in the same reactive system.

<!-- citations -->
[sprint-29 plan]: ../../.projects/inexplicable-phenomena/sprint-29/plan.md
