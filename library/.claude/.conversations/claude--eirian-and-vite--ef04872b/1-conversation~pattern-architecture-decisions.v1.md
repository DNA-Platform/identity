# Pattern Architecture Decisions

## Core Concepts

### What is a Pattern?
- A pattern is a unique compilation of elements + lattice + parameters
- Each build creates a new pattern (no versioning, no IDs)
- Adding/removing features means compiling a new pattern

### Elements (not motifs)
- Raw SVG shapes that get transformed
- The lattice determines how elements are placed/transformed
- Elements are embedded at compile time

### Parameters
- Discovered during design, not predetermined
- Each pattern has unique parameters (could be anything)
- Parameters are compiled in - if not selected, code doesn't exist

## Next Steps

1. **Define lattice types** - What transformation rules do we support?
2. **Create parameter compiler** - How do we selectively include code?

## Questions to Resolve

- How does the lattice transform elements?
- What's the minimal viable lattice system?
