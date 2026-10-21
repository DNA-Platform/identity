# Debugging the ./registry Import Issue

## Potential Causes and Solutions

### 1. File Extension Issue
TypeScript might be looking for `.ts` instead of `.tsx`. Try this import explicitly:
```tsx
// In app/layout.tsx
import StyledComponentsRegistry from './registry.tsx';
```

### 2. TypeScript Cache Issue
Clear TypeScript and Next.js caches:
```bash
# Stop the dev server first, then:
rm -rf .next
rm -rf node_modules/.cache
rm -rf library/.public-temp
```

Then in VS Code:
- `Cmd+Shift+P` → "TypeScript: Restart TS Server"
- `Cmd+Shift+P` → "Developer: Reload Window"

### 3. Check registry.tsx Export
Verify that `registry.tsx` has a default export. Based on your file (document index 63), it does have:
```tsx
export default function StyledComponentsRegistry
```
This looks correct.

### 4. Try Absolute Import
Since you have path aliasing set up, you could try:
```tsx
// Create the registry at: code/components/StyledComponentsRegistry.tsx
// Then in layout.tsx:
import StyledComponentsRegistry from '@/components/StyledComponentsRegistry';
```

### 5. Simpler Test
To isolate the issue, create a minimal test file in the app directory:

**app/test.tsx:**
```tsx
export default function Test() {
  return <div>Test</div>;
}
```

**Then in app/layout.tsx:**
```tsx
import Test from './test';
```

If this also fails, it's a TypeScript configuration issue.

### 6. Check for Hidden Characters
Sometimes files can have hidden characters or wrong encoding. Try:
1. Delete the import line completely
2. Retype it manually (don't copy-paste)
3. Make sure there are no special characters

### 7. Verify File Encoding
```bash
file app/registry.tsx
# Should show: UTF-8 Unicode text
```

### 8. Try Named Export Instead
Change `registry.tsx` to use named export:
```tsx
export function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  // ... rest of the code
}
```

Then import as:
```tsx
import { StyledComponentsRegistry } from './registry';
```

### 9. Check tsconfig.json Include Pattern
Your tsconfig has:
```json
"include": [
  "**/*.ts",
  "**/*.tsx",
  ".next/types/**/*.ts",
  "next-env.d.ts",
  "library/.public-temp/types/**/*.ts"
]
```

This should include `app/registry.tsx`. But try being explicit:
```json
"include": [
  "app/**/*.tsx",
  "code/**/*.tsx",
  "**/*.ts",
  "**/*.tsx",
  // ... rest
]
```

### 10. Next.js App Directory Setting
Make sure Next.js knows to use the app directory. Your `next.config.ts` looks fine, but verify the Next.js version in `package.json` is 13.4 or higher (you have 15.4.5, which is good).

## Most Likely Solution

Based on the setup, the most likely issue is TypeScript server cache. Try this sequence:

1. **Stop the dev server**
2. **Run these commands:**
```bash
rm -rf .next
rm -rf node_modules/.cache
npx tsc --noEmit
```

3. **In VS Code:**
   - Close all tabs
   - `Cmd+Shift+P` → "TypeScript: Restart TS Server"
   - Open `app/layout.tsx` fresh

4. **Try the import with explicit extension:**
```tsx
import StyledComponentsRegistry from './registry.js';
```
(Yes, `.js` not `.tsx` - this is how ES modules work)

## If Nothing Works - Workaround

Just put the StyledComponentsRegistry directly in layout.tsx temporarily:

```tsx
'use client'

import './globals.css';
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
 
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })
 
  if (typeof window !== 'undefined') return <>{children}</>
 
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
```