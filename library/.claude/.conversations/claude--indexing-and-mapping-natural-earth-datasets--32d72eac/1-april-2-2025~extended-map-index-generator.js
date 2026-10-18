// scripts/generate-maps-index.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Define the directories
const srcDir = path.resolve(__dirname, '../src');
const mapsDir = path.resolve(srcDir, 'components/maps');
const indexFile = path.join(mapsDir, 'index.tsx');
const docsDir = path.resolve(__dirname, '../docs/maps');

// Ensure the docs directory exists
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// Find all map components
glob('**/*Map.tsx', { cwd: mapsDir }, (err, mapFiles) => {
  if (err) {
    console.error('Error finding map files:', err);
    process.exit(1);
  }

  console.log(`Found ${mapFiles.length} map components:`, mapFiles);

  // Generate imports and registry entries
  const imports = [];
  const registryEntries = [];

  mapFiles.forEach(mapFile => {
    // Skip the index file itself if it matches the pattern
    if (mapFile === 'index.tsx') return;

    // Calculate the relative import path (without extension)
    const importPath = './' + mapFile.replace(/\.tsx$/, '');
    
    // Extract component name (assuming it matches the file name)
    const componentName = path.basename(mapFile, '.tsx');
    
    // Generate a readable name from the component name
    const displayName = componentName
      .replace(/([A-Z])/g, ' $1') // Insert a space before capital letters
      .trim() // Remove leading/trailing spaces
      .replace(/Map$/, '') // Remove "Map" suffix
      .trim(); // Clean up again
    
    // Generate ID from the file path
    const id = mapFile
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

    // Create documentation file for this map
    generateMapDocumentation(mapFile, componentName, displayName);
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
  console.log(`Generated maps index with ${mapFiles.length} maps at ${indexFile}`);
});

/**
 * Generate a documentation file containing all related source code for a map component
 * @param {string} mapFile The map file path
 * @param {string} componentName The component name
 * @param {string} displayName The display name of the map
 */
function generateMapDocumentation(mapFile, componentName, displayName) {
  // Get the map file directory (to find related files)
  const mapFilePath = path.join(mapsDir, mapFile);
  const mapDir = path.dirname(mapFilePath);
  const mapBaseName = path.basename(mapFile, '.tsx');
  
  // Extract map name without "Map" suffix for finding related files
  const mapNameRoot = mapBaseName.replace(/Map$/, '');
  
  // Create a documentation file
  const docFilePath = path.join(docsDir, `${mapNameRoot}.txt`);
  
  // Start with the map component itself
  let docContent = `// ${mapFile} - ${displayName}\n`;
  docContent += fs.readFileSync(mapFilePath, 'utf8');
  docContent += '\n// ---\n\n';
  
  // Find all related TypeScript/TSX files in the same directory
  // This includes any file that might be related to this map
  const relatedPatterns = [
    // Direct matches with mapNameRoot
    `${mapDir}/${mapNameRoot}*.{ts,tsx}`,
    // Files in subdirectories
    `${mapDir}/**/${mapNameRoot}*.{ts,tsx}`,
    // Get any utils or helpers in the same directory
    `${mapDir}/*{Utils,Helper,Helpers,Context,Provider,Hook,Hooks}.{ts,tsx}`,
    `${mapDir}/**/*{Utils,Helper,Helpers,Context,Provider,Hook,Hooks}.{ts,tsx}`
  ];
  
  // Collect all related files
  const relatedFiles = [];
  
  relatedPatterns.forEach(pattern => {
    const files = glob.sync(pattern);
    files.forEach(file => {
      // Skip the map file itself (we already included it)
      if (file === mapFilePath) return;
      // Skip any index files
      if (path.basename(file) === 'index.ts' || path.basename(file) === 'index.tsx') return;
      
      // Only add files we haven't seen yet
      if (!relatedFiles.includes(file)) {
        relatedFiles.push(file);
      }
    });
  });
  
  // Sort files to have more important files first
  relatedFiles.sort((a, b) => {
    // Prioritize direct matches with the map name
    const aIsDirectMatch = path.basename(a).startsWith(mapNameRoot);
    const bIsDirectMatch = path.basename(b).startsWith(mapNameRoot);
    
    if (aIsDirectMatch && !bIsDirectMatch) return -1;
    if (!aIsDirectMatch && bIsDirectMatch) return 1;
    
    // Then sort alphabetically
    return path.basename(a).localeCompare(path.basename(b));
  });
  
  // Add each related file to the documentation
  relatedFiles.forEach(file => {
    const relativePath = path.relative(srcDir, file);
    docContent += `// ${relativePath}\n`;
    docContent += fs.readFileSync(file, 'utf8');
    docContent += '\n// ---\n\n';
  });
  
  // Write the documentation file
  fs.writeFileSync(docFilePath, docContent);
  console.log(`Generated documentation file for ${displayName} at ${docFilePath}`);
}
