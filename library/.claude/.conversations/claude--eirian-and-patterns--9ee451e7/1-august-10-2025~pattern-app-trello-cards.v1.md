# Pattern App Trello Cards

## Foundation Cards

**Card: Setup Next.js with TypeScript and WASM**
- Create Next.js app
- Configure AssemblyScript
- Simple WASM function that returns "hello"
- Test: WASM loads and executes
- Time: 1 hour

**Card: Create SVG canvas with hardcoded motif**
- Load a simple SVG shape (star or circle)
- Display on canvas
- Just one copy for now
- Time: 30 min

**Card: Implement 3x3 grid tiling in WASM**
- AssemblyScript function: tilePattern(motif, gridSize)
- Takes SVG path, returns tiled SVG
- Display 3x3 grid of the motif
- Test: Pattern fills canvas
- Time: 2 hours

**Card: Make tiling seamless**
- Edges of tiles align perfectly
- No gaps or overlaps
- Test manually: zoom in on edges
- Time: 2 hours

**Card: Add grid size control**
- Slider: 1x1 to 10x10
- WASM recalculates on change
- Smooth performance
- Time: 1 hour

**Card: Add zoom control**
- Scale the entire canvas
- Maintain seamless tiling
- Can zoom out to see 50x50+ grid
- Time: 1 hour

## Export Cards

**Card: Export single tile as SVG**
- Button: "Export Tile"
- Extracts one seamless tile
- Downloads as .svg file
- Time: 1 hour

**Card: Test Adobe Illustrator compatibility**
- Manual test: Open in Illustrator
- Document which SVG features work
- Create ILLUSTRATOR_COMPAT.md
- Time: 1 hour

**Card: Restrict to Illustrator-safe SVG**
- No gradients, filters, or clipPaths
- Use only path, rect, circle, polygon
- Clean XML structure
- Test: Opens perfectly in Illustrator
- Time: 2 hours

## Resource Loading Cards

**Card: Load external SVG file**
- File input for SVG
- Parse and extract paths
- Display in pattern
- Time: 1 hour

**Card: Support multiple motifs**
- Load multiple SVG files
- Combine in pattern
- Configure which goes where
- Time: 2 hours

## Build System Cards

**Card: Configure static export**
- next export works
- All assets inline
- No server dependencies
- Time: 1 hour

**Card: Bundle to single HTML**
- Script to combine everything
- WASM embedded as base64
- Works from file://
- Test: Email file, still works
- Time: 2 hours

**Card: Add obfuscation**
- Minify JavaScript
- Obfuscate variable names
- WASM already compiled
- Time: 1 hour

## Configuration Cards

**Card: Create pattern config structure**
- JSON schema for patterns
- Grid size, motifs, scale
- Load at build time
- Time: 1 hour

**Card: Build with external config**
- PATTERN_CONFIG_PATH environment variable
- Different patterns from same codebase
- Test: Build two different patterns
- Time: 1 hour

## Testing Cards

**Card: Unit tests for tiling math**
- Test seamless calculations
- Test grid positioning
- Test scale transformations
- Time: 1 hour

**Card: Visual regression tests**
- Screenshot comparisons
- Catch unexpected changes
- Test different grid sizes
- Time: 2 hours

**Card: Manual test checklist**
- Browser compatibility
- Illustrator compatibility
- Performance with large grids
- File size limits
- Time: 1 hour

## Documentation Cards

**Card: Document pattern specification**
- What makes a valid motif
- Tiling mathematics
- Supported parameters
- Location: /docs/PATTERN_SPEC.md
- Time: 1 hour

**Card: Document module architecture**
- File structure
- WASM interface
- Build process
- Location: /docs/ARCHITECTURE.md
- Time: 1 hour

## MVP Definition

**Minimum Viable Pattern:**
1. Load SVG motif
2. Tile in seamless grid (via WASM)
3. Adjust grid size (3x3 to 10x10)
4. Zoom in/out to see more tiles
5. Export single tile as Illustrator-compatible SVG
6. Bundle as single HTML file

**Critical Path (Must Have for MVP):**
- Setup Next.js with WASM ✓
- Implement 3x3 grid tiling in WASM ✓
- Make tiling seamless ✓
- Add grid size control ✓
- Export single tile as SVG ✓
- Bundle to single HTML ✓

Total MVP: ~8 hours