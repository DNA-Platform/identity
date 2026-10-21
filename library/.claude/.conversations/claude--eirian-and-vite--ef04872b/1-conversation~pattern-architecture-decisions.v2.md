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

## Lattice System

### Core Concept
- Every lattice generates tiles (closed regions)
- Every tile has a center point
- Elements map to tiles based on lattice symmetry

### Bootstrap Approach - Start Simple

**Phase 1: Square Grid**
```typescript
interface SquareLattice {
  tileSize: number      // Size of each square
  repeats: number       // How many tiles to show (NxN)
}
```

**Phase 2: Add Symmetry Operations**
- Rotation at tile centers (0, 90, 180, 270 for square)
- Reflection across tile axes
- Element follows tile's transformation

**Phase 3: Composable Lattices**
- Lattice can contain sub-lattices
- Enables fractal patterns
- Parent lattice transforms child lattice

## Questions to Resolve

- How do we encode symmetry operations in WASM?
- How do elements know their tile's transformation?
