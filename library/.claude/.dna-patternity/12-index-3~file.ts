// assembly/index.ts

// Simple tiling function to start
export function calculateTilePosition(
  index: i32,
  gridSize: i32,
  tileSize: f32,
  offsetX: f32,
  offsetY: f32
): f32 {
  const row = index / gridSize;
  const col = index % gridSize;
  const x = (col as f32) * tileSize + offsetX;
  const y = (row as f32) * tileSize + offsetY;
  return x; // Just return x for now, we'll expand this
}

// Test function to verify WASM works
export function multiplyByTwo(n: i32): i32 {
  return n * 2;
}