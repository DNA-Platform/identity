# Card: Setup Next.js Pattern App with Static Export

## Goal
Create a Next.js app configured for static export that will eventually compile to a single HTML file.

## Setup Commands
```bash
npx create-next-app@latest pattern-app --typescript --tailwind --app
cd pattern-app
```

## Configure for Static Export
Update `next.config.ts`:
```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'build',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // No basePath needed - this will be a standalone file
}

export default nextConfig
```

## Update package.json scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "preview": "npx serve build",
    "export": "next build"
  }
}
```

## Create Basic Pattern Page
Create `app/page.tsx`:
```typescript
export default function PatternApp() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <svg width="600" height="600" viewBox="0 0 600 600">
        {/* Temporary: just show one triangle */}
        <path d="M 10,30 L 20,10 L 30,30 Z" fill="black" />
      </svg>
    </div>
  )
}
```

## Remove Unnecessary Files
- Delete `app/globals.css` (we'll inline styles)
- Delete `app/layout.tsx` (single page app)
- Delete any example pages

## Test
```bash
npm run dev
# See triangle at localhost:3000

npm run build
# Creates build/ folder

npm run preview  
# Test static build at localhost:3000
```

## Result
- Working Next.js app with static export
- Outputs to `build/` folder
- Ready for pattern logic