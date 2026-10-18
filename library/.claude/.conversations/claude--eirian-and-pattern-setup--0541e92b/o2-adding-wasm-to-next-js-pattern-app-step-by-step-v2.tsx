import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Adding WASM to Next..js Pattern App - Step by Step v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Adding WASM to Next.js Pattern App - Step by Step at version 2</Heading>
            <Heading>Adding WASM to Next.js Pattern App - Step by Step</Heading>
            <Heading>Start with your existing Next.js app structure:</Heading>
            <CodeBox>
                {`/pattern-app (your existing Next.js app)
  ├── /src
  │   └── /app
  │       └── page.tsx
  ├── package.json
  ├── next.config.ts
  └── tsconfig.json`}
            </CodeBox>
            <Heading>Step 1: Install AssemblyScript in your Next.js app</Heading>
            <CodeBox
                language="bash"
            >
                {`cd pattern-app
npm install --save-dev assemblyscript
npx asinit .`}
            </CodeBox>
            <Paragraph>This command will scaffold AssemblyScript for you and create:</Paragraph>
            <CodeBox>
                {`${''}/pattern-app
  ├── /assembly              # NEW - AS created this
  │   └── index.ts          # NEW - starter file
  ├── asconfig.json         # NEW - AS config
  └── [your existing files]`}
            </CodeBox>
            <Heading>Step 2: Update next.config.ts to handle WASM</Heading>
            <CodeBox
                language="typescript"
            >
                {`// next.config.ts
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
      test: /\\.wasm$/,
      type: 'asset/resource',
    })
    
    return config
  },
}

export default nextConfig`}
            </CodeBox>
            <Heading>Step 3: Create your pattern engine in AssemblyScript</Heading>
            <CodeBox
                language="typescript"
            >
                {`// assembly/index.ts (replace the default content)

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
  
  return \`<rect x="\${xPos}" y="\${yPos}" width="\${size}" height="\${size}" 
          transform="rotate(\${rotation} \${xPos + size/2} \${yPos + size/2})"
          fill="none" stroke="black" />\`;
}

// Main function to generate pattern
export function generatePattern(
  gridSize: i32,
  scale: f32,
  rotation: f32
): string {
  let svg = \`<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">\`;
  
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      svg += createTile(x, y, scale, rotation);
    }
  }
  
  svg += \`</svg>\`;
  return svg;
}`}
            </CodeBox>
            <Heading>Step 4: Build the WASM module</Heading>
            <CodeBox
                language="bash"
            >
                {`npm run asbuild`}
            </CodeBox>
            <Paragraph>This creates:</Paragraph>
            <CodeBox>
                {`/pattern-app
  └── /build
      ├── debug.wasm       # Development version
      └── release.wasm     # Production version`}
            </CodeBox>
            <Heading>Step 5: Use WASM in your Next.js page</Heading>
            <CodeBox
                language="typescript"
            >
                {`${''}// src/app/page.tsx
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
}`}
            </CodeBox>
            <Heading>Step 6: Update package.json scripts</Heading>
            <CodeBox
                language="json"
            >
                {`{
  "scripts": {
    "dev": "npm run asbuild && next dev",
    "build": "npm run asbuild && next build",
    "asbuild": "asc assembly/index.ts --target release",
    "asbuild:debug": "asc assembly/index.ts --target debug"
  }
}`}
            </CodeBox>
            <Heading>How it all connects:</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        AssemblyScript
                    </Word> (assembly/index.ts) → compiles to → <Word>
                        <Bold />
                        WASM
                    </Word> (build/release.wasm)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Next.js webpack
                    </Word> → knows how to import → <Word>
                        <Bold />
                        WASM files
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Your React component
                    </Word> → loads and calls → <Word>
                        <Bold />
                        WASM functions
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        WASM returns
                    </Word> → SVG strings → <Word>
                        <Bold />
                        displayed in browser
                    </Word>
                </Line>
            </Paragraph>
            <Heading>To test it RIGHT NOW:</Heading>
            <CodeBox
                language="bash"
            >
                {`# In your pattern-app directory:
npm install --save-dev assemblyscript
npx asinit .
# (creates assembly folder and config)

# Copy the pattern engine code to assembly/index.ts

# Build WASM
npm run asbuild

# Run Next.js
npm run dev

# Open http://localhost:3000
# You should see a pattern that responds to sliders!`}
            </CodeBox>
            <Heading>Next: Add actual seamless tiling</Heading>
            <Paragraph>Once this basic setup works, we can:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Add real SVG motif loading</Line>
                <Line>Implement proper seamless tiling math</Line>
                <Line>Add pattern hashing and security</Line>
                <Line>Embed resources in the WASM</Line>
            </Paragraph>
            <Paragraph>But FIRST - let's get this basic WASM working in your Next.js app!</Paragraph>
        </Section>
    </Chapter>
);
