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

## SVG Structure for Illustrator

### Approach: Symbol + Use
```svg
<svg>
  <defs>
    <symbol id="element" viewBox="0 0 100 100">
      <!-- Element definition goes here -->
    </symbol>
  </defs>
  
  <!-- Instance for each tile -->
  <use href="#element" x="0" y="0" transform="rotate(0)"/>
  <use href="#element" x="100" y="0" transform="rotate(90)"/>
  <!-- Only generate what's needed for one seamless tile -->
</svg>
```

### Why This Works
- Illustrator preserves `<use>` as instances (smaller file)
- We only define the element once
- Each `<use>` can have its own transform
- Export one tile = seamless pattern ready

### For Display vs Export
- **Display**: Generate many tiles for viewport
- **Export**: Generate ONE perfect seamless tile
- Let Illustrator's pattern tool handle the infinite repeat
