---
title: The Lab design system
---

# The Lab design system

[Book: [Visual Language](.cover.md)]

Gabby: The design system has two colors. Turquoise is structural -- it draws the borders, highlights the active sidebar item, tints the headings, defines the visual skeleton that tells you where things are. Neon-green is active -- it marks what's alive, what's responding, what's brand. Hover states, the element symbol on the periodic card chip, the accent stroke on the teaser page title. Two colors because two is a constraint that forces clarity. Every visual element must be structural or active. There is no third category.

Gabby: The turquoise is not a single value. It's a family -- lighter for backgrounds, deeper for borders, near-white for text on dark surfaces. The neon-green is closer to a single value: it appears sparingly, always at full intensity, always as an accent. The restraint matters. If neon-green were everywhere, it would be a theme color. Because it appears only on active elements, it becomes a signal. The eye learns: green means alive.

Gabby: Typography uses three faces. Serif for body text -- the readable, literary face that says "this is writing, not a dashboard." Monospace for code -- the functional face that says "this is executable, not decorative." Sans-serif for the sidebar and UI chrome -- the navigational face that says "this is interface, click here." Three typefaces because three reading modes exist in the Lab simultaneously, and the reader shifts between them without thinking about it. The typeface shift is the cue.

Gabby: The periodic-element card chip is the Lab's signature component. Each test case gets a card styled after the periodic table -- an element symbol, an atomic number, a name. The symbol is set in the neon-green accent. The card has a subtle border-radius and a faint shadow that lifts it off the background. The metaphor works because $Chemistry *is* chemistry -- elements combining into compounds, reactions producing new states. The card chip makes that metaphor visual and tactile. It's not decoration. It's the framework's self-description rendered as a component.

Gabby: Spacing follows an 8px base grid. Margins and padding are multiples of 8: 8, 16, 24, 32. The grid creates the rhythm that makes the three-pane layout feel composed rather than assembled. The sidebar's internal padding, the gap between card chips, the margin around the code pane -- all multiples of 8. Consistency in spacing is the least visible and most important design decision. When spacing is inconsistent, everything feels slightly wrong and nobody can say why. When it's consistent, the layout feels inevitable.

Gabby: Gradients appear in two places. The teaser page uses an opalescent gradient -- a slow, animated color shift that produces the "inexplicable phenomenon" effect Doug directed. The Lab uses subtler gradients: a faint top-to-bottom tint on the sidebar background, a slight depth gradient on the content pane header. The gradients add dimension without competing with the content. They're felt more than seen -- a sense that the surface has depth, that the panes exist in slightly different planes.

Gabby: The design system composes into the Lab's identity through styled-components and the `ThemeProvider`. Every color, every spacing value, every font stack is defined in the theme object and read by components via `props.theme`. This means the entire visual identity can be changed from one object. It also means the design system is testable -- Phillip can render a component with a modified theme and see whether the visual language holds under variation. The design system is not a Figma file. It's code, reactive code, $Chemistry code. It lives in the same material as the framework it describes.

<!-- citations -->
[Gabby and the Visual Voice]: ../gabby-and-the-visual-voice/.cover.md
[chemistry app]: ../../../../../library/chemistry/app/
[teaser page]: ../../../../../library/.public/src/app.tsx
