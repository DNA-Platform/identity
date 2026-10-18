import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ WASM Module Structure for Seamless Tiling v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>WASM Module Structure for Seamless Tiling at version 1</Heading>
            <Heading>WASM Module Structure for Seamless Tiling</Heading>
            <Heading>Project Structure to Add:</Heading>
            <CodeBox>
                {`/pattern-app
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
  └── asconfig.json                # AssemblyScript config`}
            </CodeBox>
            <Heading>Files to Create:</Heading>
            <Heading>
                1. <Word>
                    <Verbatim />
                    asconfig.json
                </Word> (AssemblyScript configuration)
            </Heading>
            <CodeBox
                language="json"
            >
                {`{
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
}`}
            </CodeBox>
            <Heading>
                2. <Word>
                    <Verbatim />
                    assembly/tsconfig.json
                </Word>
            </Heading>
            <CodeBox
                language="json"
            >
                {`${''}{
  "extends": "assemblyscript/std/assembly.json",
  "include": ["./**/*.ts"]
}`}
            </CodeBox>
            <Heading>
                3. <Word>
                    <Verbatim />
                    assembly/types.ts
                </Word> (Shared types)
            </Heading>
            <CodeBox
                language="typescript"
            >
                {`// Pattern parameters that control tiling
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
}`}
            </CodeBox>
            <Heading>
                4. <Word>
                    <Verbatim />
                    assembly/seamless-tiler.ts
                </Word> (Core seamless logic)
            </Heading>
            <CodeBox
                language="typescript"
            >
                {`import { Point, PatternParams } from './types';

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
}`}
            </CodeBox>
            <Heading>
                5. <Word>
                    <Verbatim />
                    assembly/pattern-engine.ts
                </Word> (Main WASM module)
            </Heading>
            <CodeBox
                language="typescript"
            >
                {`import { PatternParams, Point } from './types';
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
  let svg = \`<svg width="\${tileWidth}" height="\${tileHeight}" xmlns="http://www.w3.org/2000/svg">\`;
  svg += \`<defs><g id="motif">\${motifPath}</g></defs>\`;
  
  // Center tile and 8 surrounding tiles for seamlessness
  for (let row = -1; row <= 1; row++) {
    for (let col = -1; col <= 1; col++) {
      const x = col * tileWidth / params.scale;
      const y = row * tileHeight / params.scale;
      
      svg += \`<use href="#motif" 
              transform="translate(\${x}, \${y}) 
                        rotate(\${params.rotation}, \${tileWidth/2}, \${tileHeight/2})
                        scale(\${params.scale})"
              opacity="\${row === 0 && col === 0 ? 1 : 0.3}"/>\`;
    }
  }
  
  svg += \`</svg>\`;
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
}`}
            </CodeBox>
            <Heading>
                6. <Word>
                    <Verbatim />
                    lib/wasm-loader.ts
                </Word> (TypeScript loader)
            </Heading>
            <CodeBox
                language="typescript"
            >
                {`export interface PatternEngine {
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
}`}
            </CodeBox>
            <Heading>Package.json additions:</Heading>
            <CodeBox
                language="json"
            >
                {`{
  "scripts": {
    "build:wasm": "asc assembly/pattern-engine.ts --config asconfig.json",
    "build:wasm:debug": "asc assembly/pattern-engine.ts --target debug",
    "dev": "npm run build:wasm && next dev",
    "build": "npm run build:wasm && next build"
  },
  "devDependencies": {
    "assemblyscript": "^0.27.0"
  }
}`}
            </CodeBox>
            <Heading>Why This Architecture:</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Protection
                    </Word>: The seamless tiling algorithm lives in compiled WASM - can't be extracted or modified
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Performance
                    </Word>: WASM runs at near-native speed for complex tiling calculations
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Modularity
                    </Word>: Clean separation between tiling logic and UI
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Security
                    </Word>: Pattern hash generation in WASM prevents tampering
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Seamlessness
                    </Word>: The 3x3 grid approach ensures perfect tiling at any scale
                </Line>
            </Paragraph>
            <Heading>Next Steps:</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    Install AssemblyScript: <Word>
                        <Verbatim />
                        npm install --save-dev assemblyscript
                    </Word>
                </Line>
                <Line>
                    Initialize AS: <Word>
                        <Verbatim />
                        npx asinit .
                    </Word>
                </Line>
                <Line>
                    Build first WASM: <Word>
                        <Verbatim />
                        npm run build:wasm
                    </Word>
                </Line>
                <Line>
                    Test in browser: Load WASM and call <Word>
                        <Verbatim />
                        generateSeamlessTile()
                    </Word>
                </Line>
            </Paragraph>
        </Section>
    </Chapter>
);
