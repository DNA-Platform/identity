import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Simple Bundler Script - scripts∕bundle..js v1 ]]</Title>
        <CodeBox
            language="javascript"
        >
            {`${''}// scripts/bundle.js
// Run after: npm run build

const fs = require('fs');
const path = require('path');

function bundleToSingleHTML() {
  console.log('Bundling to single HTML file...');
  
  // Read the main HTML file
  const htmlPath = path.join('build', 'index.html');
  if (!fs.existsSync(htmlPath)) {
    console.error('No index.html found! Run "npm run build" first.');
    return;
  }
  
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Find and inline all CSS files
  const cssFiles = html.match(/<link[^>]+href="([^"]+\\.css)"[^>]*>/g) || [];
  cssFiles.forEach(tag => {
    const href = tag.match(/href="([^"]+)"/)[1];
    const cssPath = path.join('build', href.startsWith('/') ? href.slice(1) : href);
    
    if (fs.existsSync(cssPath)) {
      const css = fs.readFileSync(cssPath, 'utf8');
      html = html.replace(tag, \`<style>\${css}</style>\`);
      console.log(\`✓ Inlined CSS: \${href}\`);
    }
  });
  
  // Find and inline all JS files
  const scriptTags = html.match(/<script[^>]+src="([^"]+)"[^>]*><\\/script>/g) || [];
  scriptTags.forEach(tag => {
    const src = tag.match(/src="([^"]+)"/)[1];
    const jsPath = path.join('build', src.startsWith('/') ? src.slice(1) : src);
    
    if (fs.existsSync(jsPath)) {
      const js = fs.readFileSync(jsPath, 'utf8');
      html = html.replace(tag, \`<script>\${js}</script>\`);
      console.log(\`✓ Inlined JS: \${src}\`);
    }
  });
  
  // Inline the WASM file if it exists
  const wasmPath = path.join('build', 'release.wasm');
  if (fs.existsSync(wasmPath)) {
    const wasm = fs.readFileSync(wasmPath);
    const wasmBase64 = wasm.toString('base64');
    
    // Add WASM as a global variable
    const wasmScript = \`
    <script>
      window.PATTERN_WASM = "\${wasmBase64}";
    </script>\`;
    
    html = html.replace('</head>', \`\${wasmScript}</head>\`);
    console.log('✓ Inlined WASM module');
  }
  
  // Save the single HTML file
  const outputPath = 'pattern.html';
  fs.writeFileSync(outputPath, html);
  
  const size = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
  console.log(\`\\n✅ Created \${outputPath} (\${size} MB)\`);
  console.log('This file contains everything - HTML, CSS, JS, and WASM!');
}

bundleToSingleHTML();`}
        </CodeBox>
    </Chapter>
);
