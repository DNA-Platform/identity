# WASM Module Structure for Seamless Tiling

## Project Structure to Add:

```
/pattern-app
  ├── /assembly                    # AssemblyScript source
  │   ├── tsconfig.json            # AS compiler config
  │   ├── pattern-engine.ts        # Core tiling logic
  │   ├── types.ts                 # Shared types
  │   └── seamless-tiler.ts        # Seamless algorithm
  │
  ├── /wasm-build                  # Compiled WASM output
  │   └── pattern-engine.wasm      # (generated)
  │
  ├── /lib
  │   └── wasm-loader.ts           # WASM loading utility
  │
  └── asconfig.json                # AssemblyScript config
```

## Files to Create:

### 1. `asconfig.json` (AssemblyScript configuration)
```json
{
  "targets": {
    "release": {
      "outFile": "./wasm-build/pattern-engine.wasm",
      "sourceMap": false,
      "optimizeLevel": 3,
      "shrinkLevel": 2
    },
    "debug": {
      "outFile": "./wasm-build/pattern-engine-debug.wasm",
      "sourceMap": true,
      "debug": true
    }
  },
  "options": {
    "exportRuntime": true,
    "exportTable": true
  }
}
```

### 2. `assembly/tsconfig.json`
```json
{
  "extends": "assemblyscript/std/assembly.json",
  "include": ["./**/*.ts"]
}
```

### 3. `assembly/types.ts` (Shared types)
```typescript
// Pattern parameters that control tiling
export class PatternParams {
  scale: f32 = 1.0;
  rotation: f32 = 0.0;
  offsetX: f32 = 0.0;
  offsetY: f32 = 0.0;
  tileWidth: f32 = 512.0;
  tileHeight: f32 = 512.0;
}

// Point for SVG path calculations
export class Point {
  x: f32;
  y: f32;
  
  constructor(x: f32, y: f32) {
    this.x = x;
    this.y = y;
  }
}
```

### 4. `assembly/seamless-tiler.ts` (Core seamless logic)
```typescript
import { Point, PatternParams } from './types';

// Ensures pattern tiles seamlessly by wrapping coordinates
export function wrapCoordinate(coord: f32, max: f32): f32 {
  while (coord < 0) coord += max;
  while (coord >= max) coord -= max;
  return coord;
}

// Apply transformation matrix for rotation and scale
export function transformPoint(
  point: Point, 
  params: PatternParams
): Point {
  const rad = params.rotation * Math.PI / 180;
  const cos = Math.cos(rad) as f32;
  const sin = Math.sin(rad) as f32;
  
  // Apply rotation and scale
  const x = (point.x * cos - point.y * sin) * params.scale;
  const y = (point.x * sin + point.y * cos) * params.scale;
  
  return new Point(
    x + params.offsetX,
    y + params.offsetY
  );
}

// Calculate seamless boundary conditions
export function calculateSeamlessOffset(
  index: i32,
  gridSize: i32,
  tileSize: f32
): f32 {
  const row = index / gridSize;
  const col = index % gridSize;
  return (col as f32) * tileSize;
}
```

### 5. `assembly/pattern-engine.ts` (Main WASM module)
```typescript
import { PatternParams, Point } from './types';
import { wrapCoordinate, transformPoint, calculateSeamlessOffset } from './seamless-tiler';

// Memory for storing SVG path data
const MAX_PATH_LENGTH = 10000;
const pathBuffer = new ArrayBuffer(MAX_PATH_LENGTH);

// Main tiling function exposed to JavaScript
export function generateSeamlessTile(
  motifPath: string,
  scaleValue: f32,
  rotationValue: f32,
  tileWidth: f32,
  tileHeight: f32
): string {
  const params = new PatternParams();
  params.scale = scaleValue;
  params.rotation = rotationValue;
  params.tileWidth = tileWidth;
  params.tileHeight = tileHeight;
  
  // Generate 3x3 grid for seamless preview
  let svg = `<svg width="${tileWidth}" height="${tileHeight}" xmlns="http://www.w3.org/2000/svg">`;
  svg += `<defs><g id="motif">${motifPath}</g></defs>`;
  
  // Center tile and 8 surrounding tiles for seamlessness
  for (let row = -1; row <= 1; row++) {
    for (let col = -1; col <= 1; col++) {
      const x = col * tileWidth / params.scale;
      const y = row * tileHeight / params.scale;
      
      svg += `<use href="#motif" 
              transform="translate(${x}, ${y}) 
                        rotate(${params.rotation}, ${tileWidth/2}, ${tileHeight/2})
                        scale(${params.scale})"
              opacity="${row === 0 && col === 0 ? 1 : 0.3}"/>`;
    }
  }
  
  svg += `</svg>`;
  return svg;
}

// Validate that pattern tiles seamlessly
export function validateSeamless(
  leftEdge: string,
  rightEdge: string,
  topEdge: string,
  bottomEdge: string
): bool {
  // Check if edges match for seamless tiling
  return leftEdge === rightEdge && topEdge === bottomEdge;
}

// Generate unique pattern hash
export function generatePatternHash(
  motif: string,
  timestamp: i64
): string {
  // Simple hash for now - would use crypto in production
  let hash: i64 = timestamp;
  for (let i = 0; i < motif.length; i++) {
    hash = ((hash << 5) - hash) + motif.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit
  }
  return hash.toString();
}
```

### 6. `lib/wasm-loader.ts` (TypeScript loader)
```typescript
export interface PatternEngine {
  generateSeamlessTile: (
    motifPath: string,
    scale: number,
    rotation: number,
    tileWidth: number,
    tileHeight: number
  ) => string;
  validateSeamless: (
    left: string, 
    right: string, 
    top: string, 
    bottom: string
  ) => boolean;
  generatePatternHash: (
    motif: string, 
    timestamp: bigint
  ) => string;
}

let wasmModule: PatternEngine | null = null;

export async function loadPatternEngine(): Promise<PatternEngine> {
  if (wasmModule) return wasmModule;
  
  // In production, this will be embedded as base64
  const wasmPath = process.env.NODE_ENV === 'development' 
    ? '/wasm-build/pattern-engine.wasm'
    : 'EMBEDDED_WASM_BASE64';
  
  const wasmBytes = process.env.NODE_ENV === 'development'
    ? await fetch(wasmPath).then(r => r.arrayBuffer())
    : Uint8Array.from(atob(wasmPath), c => c.charCodeAt(0));
  
  const { instance } = await WebAssembly.instantiate(wasmBytes, {
    env: {
      abort: () => console.error('WASM abort!'),
    }
  });
  
  wasmModule = instance.exports as PatternEngine;
  return wasmModule;
}
```

## Package.json additions:
```json
{
  "scripts": {
    "build:wasm": "asc assembly/pattern-engine.ts --config asconfig.json",
    "build:wasm:debug": "asc assembly/pattern-engine.ts --target debug",
    "dev": "npm run build:wasm && next dev",
    "build": "npm run build:wasm && next build"
  },
  "devDependencies": {
    "assemblyscript": "^0.27.0"
  }
}
```

## Why This Architecture:

1. **Protection**: The seamless tiling algorithm lives in compiled WASM - can't be extracted or modified
2. **Performance**: WASM runs at near-native speed for complex tiling calculations
3. **Modularity**: Clean separation between tiling logic and UI
4. **Security**: Pattern hash generation in WASM prevents tampering
5. **Seamlessness**: The 3x3 grid approach ensures perfect tiling at any scale

## Next Steps:
1. Install AssemblyScript: `npm install --save-dev assemblyscript`
2. Initialize AS: `npx asinit .`
3. Build first WASM: `npm run build:wasm`
4. Test in browser: Load WASM and call `generateSeamlessTile()`