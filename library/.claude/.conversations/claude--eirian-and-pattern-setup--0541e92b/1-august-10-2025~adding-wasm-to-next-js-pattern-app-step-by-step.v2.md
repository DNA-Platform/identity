# Adding WASM to Next.js Pattern App - Step by Step

## Start with your existing Next.js app structure:
```
/pattern-app (your existing Next.js app)
  ├── /src
  │   └── /app
  │       └── page.tsx
  ├── package.json
  ├── next.config.ts
  └── tsconfig.json
```

## Step 1: Install AssemblyScript in your Next.js app
```bash
cd pattern-app
npm install --save-dev assemblyscript
npx asinit .
```

This command will scaffold AssemblyScript for you and create:
```
/pattern-app
  ├── /assembly              # NEW - AS created this
  │   └── index.ts          # NEW - starter file
  ├── asconfig.json         # NEW - AS config
  └── [your existing files]
```

## Step 2: Update next.config.ts to handle WASM
```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'build',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  // ADD THIS for WASM support:
  webpack: (config, { isServer }) => {
    // Handle WASM files
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    }
    
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'asset/resource',
    })
    
    return config
  },
}

export default nextConfig
```

## Step 3: Create your pattern engine in AssemblyScript
```typescript
// assembly/index.ts (replace the default content)

// Export a simple tiling function
export function createTile(
  x: i32,
  y: i32,
  scale: f32,
  rotation: f32
): string {
  // For now, just return a simple SVG rect
  // We'll add complex tiling later
  const size = 100 * scale;
  const xPos = x * size;
  const yPos = y * size;
  
  return `<rect x="${xPos}" y="${yPos}" width="${size}" height="${size}" 
          transform="rotate(${rotation} ${xPos + size/2} ${yPos + size/2})"
          fill="none" stroke="black" />`;
}

// Main function to generate pattern
export function generatePattern(
  gridSize: i32,
  scale: f32,
  rotation: f32
): string {
  let svg = `<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">`;
  
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      svg += createTile(x, y, scale, rotation);
    }
  }
  
  svg += `</svg>`;
  return svg;
}
```

## Step 4: Build the WASM module
```bash
npm run asbuild
```

This creates:
```
/pattern-app
  └── /build
      ├── debug.wasm       # Development version
      └── release.wasm     # Production version
```

## Step 5: Use WASM in your Next.js page
```typescript
// src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';

// Import WASM (Next.js will handle this with our webpack config)
import wasmModule from '../../build/release.wasm';

export default function PatternApp() {
  const [wasm, setWasm] = useState<any>(null);
  const [pattern, setPattern] = useState<string>('');
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  
  // Load WASM on mount
  useEffect(() => {
    const loadWasm = async () => {
      try {
        // Instantiate the WASM module
        const wasmInstance = await WebAssembly.instantiateStreaming(
          fetch(wasmModule),
          {
            env: {
              abort: () => console.log('Abort called'),
            },
          }
        );
        
        setWasm(wasmInstance.instance.exports);
      } catch (error) {
        console.error('Failed to load WASM:', error);
      }
    };
    
    loadWasm();
  }, []);
  
  // Generate pattern when params change
  useEffect(() => {
    if (wasm) {
      // Call WASM function!
      const svgString = wasm.generatePattern(3, scale, rotation);
      setPattern(svgString);
    }
  }, [wasm, scale, rotation]);
  
  return (
    <div>
      <h1>Pattern Generator with WASM</h1>
      
      {/* Pattern Display */}
      <div dangerouslySetInnerHTML={{ __html: pattern }} />
      
      {/* Controls */}
      <div>
        <label>
          Scale: 
          <input 
            type="range" 
            min="0.5" 
            max="2" 
            step="0.1"
            value={scale}
            onChange={(e) => setScale(parseFloat(e.target.value))}
          />
        </label>
        
        <label>
          Rotation:
          <input 
            type="range" 
            min="0" 
            max="360" 
            step="15"
            value={rotation}
            onChange={(e) => setRotation(parseFloat(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
}
```

## Step 6: Update package.json scripts
```json
{
  "scripts": {
    "dev": "npm run asbuild && next dev",
    "build": "npm run asbuild && next build",
    "asbuild": "asc assembly/index.ts --target release",
    "asbuild:debug": "asc assembly/index.ts --target debug"
  }
}
```

## How it all connects:

1. **AssemblyScript** (assembly/index.ts) → compiles to → **WASM** (build/release.wasm)
2. **Next.js webpack** → knows how to import → **WASM files**
3. **Your React component** → loads and calls → **WASM functions**
4. **WASM returns** → SVG strings → **displayed in browser**

## To test it RIGHT NOW:
```bash
# In your pattern-app directory:
npm install --save-dev assemblyscript
npx asinit .
# (creates assembly folder and config)

# Copy the pattern engine code to assembly/index.ts

# Build WASM
npm run asbuild

# Run Next.js
npm run dev

# Open http://localhost:3000
# You should see a pattern that responds to sliders!
```

## Next: Add actual seamless tiling
Once this basic setup works, we can:
1. Add real SVG motif loading
2. Implement proper seamless tiling math
3. Add pattern hashing and security
4. Embed resources in the WASM

But FIRST - let's get this basic WASM working in your Next.js app!