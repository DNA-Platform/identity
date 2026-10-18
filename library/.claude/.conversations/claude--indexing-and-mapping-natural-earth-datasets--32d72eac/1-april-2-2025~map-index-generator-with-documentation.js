// scripts/generate-maps-index.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Define the maps directory
const mapsDir = path.resolve(__dirname, '../src/components/maps');
const indexFile = path.join(mapsDir, 'index.tsx');
const docsDir = path.resolve(__dirname, '../docs/maps');

// Ensure the docs directory exists
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// Find all map components
glob('**/*Map.tsx', { cwd: mapsDir }, (err, files) => {
  if (err) {
    console.error('Error finding map files:', err);
    process.exit(1);
  }

  console.log(`Found ${files.length} map components:`, files);

  // Generate imports and registry entries
  const imports = [];
  const registryEntries = [];

  files.forEach(file => {
    // Skip the index file itself if it matches the pattern
    if (file === 'index.tsx') return;

    // Calculate the relative import path (without extension)
    const importPath = './' + file.replace(/\.tsx$/, '');
    
    // Extract component name (assuming it matches the file name)
    const componentName = path.basename(file, '.tsx');
    
    // Generate a readable name from the component name
    const displayName = componentName
      .replace(/([A-Z])/g, ' $1') // Insert a space before capital letters
      .trim() // Remove leading/trailing spaces
      .replace(/Map$/, '') // Remove "Map" suffix
      .trim(); // Clean up again
    
    // Generate ID from the file path
    const id = file
      .replace(/\.tsx$/, '') // Remove extension
      .replace(/\//g, '-') // Replace slashes with dashes
      .replace(/([A-Z])/g, '-$1') // Insert dash before capital letters
      .toLowerCase() // Convert to lowercase
      .replace(/^-/, '') // Remove leading dash
      .replace(/-map$/, ''); // Remove trailing "-map"
    
    imports.push(`import ${componentName} from '${importPath}';`);
    registryEntries.push(`  {
    id: '${id}',
    name: '${displayName}',
    component: ${componentName}
  }`);
    
    // Generate documentation file for this map
    createMapDocFile(file, componentName, displayName);
  });

  // Generate the index.tsx content
  const content = `// THIS FILE IS AUTO-GENERATED - DO NOT EDIT
import React from 'react';

${imports.join('\n')}

export interface MapInfo {
  id: string;
  name: string;
  component: React.ComponentType;
}

const mapRegistry: MapInfo[] = [
${registryEntries.join(',\n')}
];

export default mapRegistry;
`;

  // Write the index.tsx file
  fs.writeFileSync(indexFile, content);
  console.log(`Generated maps index with ${files.length} maps at ${indexFile}`);
});

/**
 * Create a text file with all TS/TSX files in a map directory
 */
function createMapDocFile(mapFile, componentName, displayName) {
  // Get full path to map file
  const mapFullPath = path.join(mapsDir, mapFile);
  
  // Get directory containing the map
  const mapDir = path.dirname(mapFullPath);
  
  // Get map name without "Map" suffix
  const baseName = componentName.replace(/Map$/, '');
  
  // Create output file path
  const outputPath = path.join(docsDir, `${baseName}.txt`);
  
  // Find all TypeScript files in the map's directory
  const tsFiles = glob.sync(`${mapDir}/**/*.{ts,tsx}`);
  
  // Start with an empty string
  let content = '';
  
  // First, add the map file itself
  content += `// ${mapFile}\n`;
  content += fs.readFileSync(mapFullPath, 'utf8');
  content += '\n// ---\n\n';
  
  // Then add all other files
  let fileCount = 1; // Start at 1 for the map file
  tsFiles.forEach(filePath => {
    // Skip the map file (already added) and index files
    if (filePath === mapFullPath || path.basename(filePath) === 'index.tsx' || path.basename(filePath) === 'index.ts') {
      return;
    }
    
    const relativePath = path.relative(path.resolve(__dirname, '../src'), filePath);
    content += `// ${relativePath}\n`;
    content += fs.readFileSync(filePath, 'utf8');
    content += '\n// ---\n\n';
    fileCount++;
  });
  
  // Write the file
  fs.writeFileSync(outputPath, content);
  console.log(`Created doc file for '${displayName}' map with ${fileCount} files: ${path.basename(outputPath)}`);
}
