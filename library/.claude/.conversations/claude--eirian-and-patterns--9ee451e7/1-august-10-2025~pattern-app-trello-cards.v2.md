# Pattern App Trello Cards

## Project Setup & Structure

**Card: Create Next.js project with clean folder structure**
```
/pattern-app
  /assembly         # WASM source
  /lib             # Core logic
  /components      # React components
  /resources       # SVG files (build-time)
  /docs            # Documentation
  /pages           # Next.js pages
```

**Card: Setup AssemblyScript and verify WASM works**
- Install AssemblyScript
- Create assembly/index.ts
- Simple add(a,b) function
- Load in React and test

**Card: Create docs/PROJECT_STRUCTURE.md**
- Document what each folder contains
- Explain build vs runtime resources
- Define module boundaries

## Core Pattern Logic

**Card: Hardcode simple SVG motif in resources/motif.svg**
- Create simple shape (star or triangle)
- Must tile seamlessly
- Check in to git

**Card: Create lib/pattern-engine.ts with basic tiling**
- TypeScript version first (not WASM)
- Function: createTiledPattern(motif, gridSize)
- Returns SVG string with 3x3 grid

**Card: Display tiled pattern on canvas**
- Load motif at BUILD time
- Pass to pattern-engine
- Show 3x3 grid in browser

**Card: Port tiling logic to WASM**
- assembly/pattern-engine.ts
- Same interface as TypeScript version
- Replace TS with WASM module

**Card: Implement seamless tiling math**
- Handle edge alignment
- No gaps between tiles
- Test visually with zoom

## Controls & Interaction

**Card: Add grid size slider (3x3 to 10x10)**
- Update pattern on change
- WASM recalculates tiling
- Smooth performance

**Card: Add zoom/pan to canvas**
- See up to 100x100 grid
- Maintain performance
- Mouse wheel zoom

**Card: Add scale control for motif size**
- Make motifs larger/smaller
- Maintain seamless tiling
- Useful for different densities

## Export Functionality

**Card: Export visible canvas as SVG**
- What you see is what you get
- Download current view

**Card: Export single tile as SVG**
- Extract one seamless unit
- This is what goes to Illustrator
- Clean SVG output

**Card: Document Illustrator compatibility**
- Create docs/ILLUSTRATOR_SVG.md
- List supported features
- List what to avoid

**Card: Restrict SVG output to Illustrator-safe subset**
- No filters, gradients, clipPaths
- Only basic shapes and paths
- Test manually in Illustrator

## Build System

**Card: Embed SVG resources at build time**
- Read from /resources during build
- Embed in JavaScript/WASM
- No runtime file access needed

**Card: Setup build to use external config**
```bash
PATTERN_CONFIG=./configs/roses.json npm run build
```
- Config specifies which SVG to use
- Config specifies default parameters

**Card: Create single HTML export script**
- next export
- Inline all JS/CSS
- Embed WASM as base64
- Single file output

**Card: Add minification and obfuscation**
- Terser for JavaScript
- Maintain WASM protection
- Reduce file size

## Configuration System

**Card: Define pattern config schema**
```typescript
interface PatternConfig {
  name: string
  motif: string  // Path to SVG file
  defaultGrid: number
  minGrid: number
  maxGrid: number
  scale: number
}
```

**Card: Create example configs**
- configs/default.json
- configs/roses.json
- configs/geometric.json

**Card: Load config at build time**
- Read specified config
- Embed in compiled output
- No runtime config loading

## Testing

**Card: Create test SVG motifs**
- Simple shapes that tile well
- Complex patterns for edge cases
- Document in resources/README.md

**Card: Unit tests for tiling math**
- Test seamless calculations
- Test grid boundaries
- Test scale conversions

**Card: Manual test checklist**
- Create docs/TESTING.md
- Browser compatibility
- Illustrator import
- Performance limits

**Card: Visual tests for seamless tiling**
- Zoom in on edges
- Check alignment
- No visible seams

## Documentation

**Card: Create docs/PATTERN_SPEC.md**
- What is a seamless pattern?
- How tiling works
- Mathematical requirements

**Card: Create docs/BUILD_PROCESS.md**
- How to build for development
- How to build for client
- How configs work

**Card: Create docs/WASM_INTERFACE.md**
- What goes in WASM vs JavaScript
- Function signatures
- Security boundaries

**Card: Add JSDoc comments to all modules**
- Document parameters
- Document return values
- Example usage

## Architecture Decisions

**Card: Document why SVGs are embedded not uploaded**
- Security: browsers can't access filesystem
- Simplicity: no file handling UI
- Build-time optimization

**Card: Document WASM vs JavaScript split**
- WASM: tiling math (protected)
- WASM: license validation
- JS: UI and controls
- JS: Export functions

## MVP Checklist

**Must Have for Working Pattern:**
1. Hardcoded SVG motif that tiles
2. WASM tiling engine (3x3 to 10x10)
3. Zoom to see large grids
4. Export single tile for Illustrator
5. Bundle as single HTML file

**Build Command for Client:**
```bash
PATTERN_CONFIG=./configs/client-name.json npm run build:client
# Outputs: client-name-pattern.html
```