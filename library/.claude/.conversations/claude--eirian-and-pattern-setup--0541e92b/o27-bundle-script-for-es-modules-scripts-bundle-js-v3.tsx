import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Bundle Script for ES Modules - scripts∕bundle..js v3 ]]</Title>
        <CodeBox
            language="javascript"
        >
            {`${''}// scripts/bundle.js
// ES Module version for "type": "module" in package.json

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function findAllFiles(dir, pattern) {
  let results = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      results = results.concat(findAllFiles(filePath, pattern));
    } else if (pattern.test(filePath)) {
      results.push(filePath);
    }
  }
  
  return results;
}

function bundleToSingleHTML() {
  console.log('🔨 Bundling Next.js build to single HTML file...\\n');
  
  const buildDir = path.join(__dirname, '..', 'build');
  
  // Check if build directory exists
  if (!fs.existsSync(buildDir)) {
    console.error('❌ Build directory not found! Run "npm run build" first.');
    process.exit(1);
  }
  
  // Find the main HTML file
  const htmlPath = path.join(buildDir, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    console.error('❌ No index.html found in build directory!');
    process.exit(1);
  }
  
  let html = fs.readFileSync(htmlPath, 'utf8');
  let inlinedCount = 0;
  
  // Find all CSS files in build directory
  const cssFiles = findAllFiles(buildDir, /\\.css$/);
  console.log(\`Found \${cssFiles.length} CSS files to inline\`);
  
  // Replace all CSS links with inline styles
  cssFiles.forEach(cssPath => {
    const css = fs.readFileSync(cssPath, 'utf8');
    const relativePath = path.relative(buildDir, cssPath).replace(/\\\\/g, '/');
    
    // Try different link patterns
    const patterns = [
      new RegExp(\`<link[^>]*href="[^"]*\${relativePath}"[^>]*>\`, 'g'),
      new RegExp(\`<link[^>]*href="/\${relativePath}"[^>]*>\`, 'g'),
      new RegExp(\`<link[^>]*href="\${relativePath}"[^>]*>\`, 'g'),
    ];
    
    patterns.forEach(pattern => {
      if (pattern.test(html)) {
        html = html.replace(pattern, \`<style>/* \${relativePath} */\\n\${css}</style>\`);
        console.log(\`  ✓ Inlined: \${relativePath}\`);
        inlinedCount++;
      }
    });
  });
  
  // Find all JS files in build directory
  const jsFiles = findAllFiles(buildDir, /\\.js$/);
  console.log(\`\\nFound \${jsFiles.length} JS files to inline\`);
  
  // Replace all script tags with inline scripts
  jsFiles.forEach(jsPath => {
    const js = fs.readFileSync(jsPath, 'utf8');
    const relativePath = path.relative(buildDir, jsPath).replace(/\\\\/g, '/');
    
    // Try different script patterns
    const patterns = [
      new RegExp(\`<script[^>]*src="[^"]*\${relativePath}"[^>]*></script>\`, 'g'),
      new RegExp(\`<script[^>]*src="/\${relativePath}"[^>]*></script>\`, 'g'),
      new RegExp(\`<script[^>]*src="\${relativePath}"[^>]*></script>\`, 'g'),
    ];
    
    patterns.forEach(pattern => {
      if (pattern.test(html)) {
        html = html.replace(pattern, \`<script>/* \${relativePath} */\\n\${js}</script>\`);
        console.log(\`  ✓ Inlined: \${relativePath}\`);
        inlinedCount++;
      }
    });
  });
  
  // Handle WASM file
  const wasmFiles = findAllFiles(buildDir, /\\.wasm$/);
  if (wasmFiles.length > 0) {
    console.log(\`\\nFound \${wasmFiles.length} WASM file(s)\`);
    
    wasmFiles.forEach(wasmPath => {
      const wasm = fs.readFileSync(wasmPath);
      const wasmBase64 = wasm.toString('base64');
      const wasmName = path.basename(wasmPath, '.wasm');
      
      // Inject WASM as base64 before closing head tag
      const wasmScript = \`
    <script>
      // Embedded WASM: \${wasmName}
      window.WASM_\${wasmName.toUpperCase()} = "\${wasmBase64}";
      
      // Helper to load WASM from base64
      window.loadWASM = async function(base64) {
        const binaryString = atob(base64);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        return await WebAssembly.instantiate(bytes, {
          env: { abort: () => console.error('WASM abort') }
        });
      };
    </script>\`;
      
      html = html.replace('</head>', \`\${wasmScript}\\n</head>\`);
      console.log(\`  ✓ Embedded WASM: \${path.basename(wasmPath)}\`);
      inlinedCount++;
    });
  }
  
  // Clean up any remaining external references
  html = html.replace(/<link[^>]*href="[^"]*\\.(css|js)"[^>]*>/g, '');
  html = html.replace(/<script[^>]*src="[^"]*\\.js"[^>]*><\\/script>/g, '');
  
  // Save the bundled file
  const outputPath = path.join(__dirname, '..', 'pattern.html');
  fs.writeFileSync(outputPath, html);
  
  // Report results
  const size = (fs.statSync(outputPath).size / 1024).toFixed(2);
  console.log('\\n' + '='.repeat(50));
  console.log(\`✅ SUCCESS! Created pattern.html\`);
  console.log(\`📦 Size: \${size} KB\`);
  console.log(\`📄 Inlined: \${inlinedCount} files\`);
  console.log('='.repeat(50));
  
  console.log('\\n📖 To preview the bundled file:');
  console.log('   Open pattern.html directly in your browser');
  console.log('   Or run: npm run preview');
}

// Run the bundler
bundleToSingleHTML();`}
        </CodeBox>
    </Chapter>
);
