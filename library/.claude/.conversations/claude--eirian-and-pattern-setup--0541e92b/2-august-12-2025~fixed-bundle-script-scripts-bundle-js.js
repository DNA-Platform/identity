// scripts/bundle.js
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
  console.log('🔨 Bundling to single HTML file...\n');
  
  const buildDir = path.join(__dirname, '..', 'build');
  
  if (!fs.existsSync(buildDir)) {
    console.error('❌ Build directory not found!');
    process.exit(1);
  }
  
  const htmlPath = path.join(buildDir, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    console.error('❌ No index.html found!');
    process.exit(1);
  }
  
  let html = fs.readFileSync(htmlPath, 'utf8');
  let inlinedCount = 0;
  
  // Find and inline CSS
  const cssFiles = findAllFiles(buildDir, /\.css$/);
  console.log(`Found ${cssFiles.length} CSS files`);
  
  cssFiles.forEach(cssPath => {
    const css = fs.readFileSync(cssPath, 'utf8');
    const relativePath = path.relative(buildDir, cssPath).replace(/\\/g, '/');
    
    // Escape special regex characters
    const escapedPath = relativePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    const patterns = [
      new RegExp(`<link[^>]*href="[^"]*${escapedPath}"[^>]*>`, 'g'),
      new RegExp(`<link[^>]*href="/${escapedPath}"[^>]*>`, 'g'),
      new RegExp(`<link[^>]*href="${escapedPath}"[^>]*>`, 'g'),
    ];
    
    patterns.forEach(pattern => {
      if (pattern.test(html)) {
        html = html.replace(pattern, `<style>${css}</style>`);
        console.log(`  ✓ Inlined: ${relativePath}`);
        inlinedCount++;
      }
    });
  });
  
  // Find and inline JS
  const jsFiles = findAllFiles(buildDir, /\.js$/);
  console.log(`\nFound ${jsFiles.length} JS files`);
  
  jsFiles.forEach(jsPath => {
    const js = fs.readFileSync(jsPath, 'utf8');
    const relativePath = path.relative(buildDir, jsPath).replace(/\\/g, '/');
    
    // Escape special regex characters
    const escapedPath = relativePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    const patterns = [
      new RegExp(`<script[^>]*src="[^"]*${escapedPath}"[^>]*></script>`, 'g'),
      new RegExp(`<script[^>]*src="/${escapedPath}"[^>]*></script>`, 'g'),
      new RegExp(`<script[^>]*src="${escapedPath}"[^>]*></script>`, 'g'),
    ];
    
    patterns.forEach(pattern => {
      if (pattern.test(html)) {
        html = html.replace(pattern, `<script>${js}</script>`);
        console.log(`  ✓ Inlined: ${relativePath}`);
        inlinedCount++;
      }
    });
  });
  
  // Save the result
  const outputPath = path.join(__dirname, '..', 'pattern.html');
  fs.writeFileSync(outputPath, html);
  
  const size = (fs.statSync(outputPath).size / 1024).toFixed(2);
  console.log('\n' + '='.repeat(50));
  console.log(`✅ Created pattern.html`);
  console.log(`📦 Size: ${size} KB`);
  console.log(`📄 Inlined: ${inlinedCount} files`);
  console.log('='.repeat(50));
}

bundleToSingleHTML();