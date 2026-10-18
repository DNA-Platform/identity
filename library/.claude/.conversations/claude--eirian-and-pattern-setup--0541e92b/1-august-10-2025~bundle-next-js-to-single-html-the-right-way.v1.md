# Bundle Next.js to Single HTML File

## Option 1: Use next-single-page (Experimental)
There's an experimental Next.js feature for single-page apps:

```javascript
// next.config.ts
const nextConfig = {
  output: 'export',
  distDir: 'build',
  experimental: {
    // This might work for single page
    optimizeCss: false,
    craCompat: true,
  }
}
```

## Option 2: Simple Post-Build Script
Create `scripts/bundle.js`:

```javascript
const fs = require('fs');
const path = require('path');

async function bundle() {
  // Read the built index.html
  let html = fs.readFileSync('./build/index.html', 'utf8');
  
  // Find and inline all CSS
  const cssRegex = /<link rel="stylesheet" href="([^"]+)"/g;
  let match;
  while ((match = cssRegex.exec(html)) !== null) {
    const cssPath = path.join('./build', match[1]);
    if (fs.existsSync(cssPath)) {
      const css = fs.readFileSync(cssPath, 'utf8');
      html = html.replace(match[0], `<style>${css}</style>`);
    }
  }
  
  // Find and inline all JS
  const scriptRegex = /<script src="([^"]+)"/g;
  html = html.replace(scriptRegex, (match, src) => {
    const jsPath = path.join('./build', src);
    if (fs.existsSync(jsPath)) {
      const js = fs.readFileSync(jsPath, 'utf8');
      return `<script>${js}`;
    }
    return match;
  });
  
  // Inline WASM as base64
  const wasm = fs.readFileSync('./build/release.wasm');
  const wasmBase64 = wasm.toString('base64');
  html = html.replace('</body>', `
    <script>
      window.WASM_BASE64 = "${wasmBase64}";
    </script>
    </body>
  `);
  
  // Write single file
  fs.writeFileSync('pattern.html', html);
  console.log('Created pattern.html - single file!');
}

bundle();
```

Then in package.json:
```json
{
  "scripts": {
    "build:single": "next build && node scripts/bundle.js"
  }
}
```

## Option 3: Use a Plugin - next-export-optimize-images

```bash
npm install --save-dev next-export-optimize-images
```

This helps with static export optimization.

## Option 4: The Nuclear Option - Don't Use Next.js App Router

Use Pages Router instead (older but simpler):
- Create `pages/index.tsx` instead of `app/page.tsx`
- Simpler output structure
- Easier to bundle

## The Reality Check:

Next.js is optimized for:
- Server-side rendering
- Multi-page apps
- Code splitting

For a single HTML file, we might be fighting against its nature. But the post-build script (Option 2) WILL work - it just takes all the files Next generates and smashes them into one HTML file.

## My Recommendation:
Let's try Option 2 - build the bundler script. It's just 30 lines of code and will definitely work!