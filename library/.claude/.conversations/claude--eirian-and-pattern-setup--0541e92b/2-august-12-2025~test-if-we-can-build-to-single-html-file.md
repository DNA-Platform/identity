# Test Single HTML File Build

## Step 1: Build the static export
```bash
npm run build
```

This creates files in `/build` folder

## Step 2: Check what was created
```bash
dir build
```

You'll probably see:
- Multiple .js files
- Multiple .css files  
- index.html that references them

## Step 3: We need a bundler script!

We need to create a script that:
1. Takes the Next.js build output
2. Inlines all JS into the HTML
3. Inlines all CSS into the HTML
4. Inlines the WASM as base64
5. Outputs ONE self-contained HTML file

## The Problem:
Next.js `output: 'export'` creates static files, but NOT a single file. It creates:
- index.html
- _next/static/chunks/*.js
- _next/static/css/*.css

## The Solution:
We need a post-build script that combines everything:

```javascript
// scripts/bundle-to-single-html.js
const fs = require('fs');
const path = require('path');

function bundleToSingleHTML() {
  // Read the index.html
  let html = fs.readFileSync('build/index.html', 'utf8');
  
  // Find all script tags and inline them
  // Find all link tags and inline CSS
  // Embed WASM as base64
  
  // Output single file
  fs.writeFileSync('pattern.html', html);
}
```

## Or Alternative Approach:
Maybe we shouldn't use Next.js at all for the final pattern?
- Use Next.js for DEVELOPMENT (preview, testing)
- Use a different build process for the FINAL single HTML?

What do you think, Dad?