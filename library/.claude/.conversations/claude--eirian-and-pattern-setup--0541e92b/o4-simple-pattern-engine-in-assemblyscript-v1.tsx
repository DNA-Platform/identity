import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Simple Pattern Engine in AssemblyScript v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// assembly/index.ts
// Simple pattern engine that creates seamless tiles

// The AssemblyScript Book says to export memory
export const memory = new WebAssembly.Memory({ initial: 1 });

// Generate a single tile element
export function createTileElement(
  x: f32,
  y: f32,
  size: f32,
  rotation: f32
): string {
  const centerX = x + size / 2;
  const centerY = y + size / 2;
  
  // Simple geometric shape for now
  return \`<rect x="\${x}" y="\${y}" width="\${size}" height="\${size}" 
          fill="none" stroke="black" stroke-width="2"
          transform="rotate(\${rotation} \${centerX} \${centerY})" />\`;
}

// Main pattern generation function
export function generatePattern(
  gridSize: i32,
  scale: f32,
  rotation: f32,
  width: i32,
  height: i32
): string {
  const tileSize = (width as f32) / (gridSize as f32) * scale;
  
  let svg = \`<svg width="\${width}" height="\${height}" viewBox="0 0 \${width} \${height}" xmlns="http://www.w3.org/2000/svg">\`;
  svg += \`<rect width="\${width}" height="\${height}" fill="white" />\`;
  
  // Generate grid of tiles
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const x = (col as f32) * tileSize;
      const y = (row as f32) * tileSize;
      svg += createTileElement(x, y, tileSize, rotation);
    }
  }
  
  svg += \`</svg>\`;
  return svg;
}

// Test function to verify WASM is working
export function add(a: i32, b: i32): i32 {
  return a + b;
}

// Version check
export function getVersion(): string {
  return "1.0.0";
}`}
        </CodeBox>
    </Chapter>
);
