# Fix Setup Issues for DNA-Patternity

## Step 1: Install Node packages
```bash
cd dna-patternity
npm install
```

This will install:
- next
- react
- react-dom  
- styled-components
- All TypeScript type definitions
- All other dependencies in package.json

## Step 2: Verify AssemblyScript is installed
```bash
npm install --save-dev assemblyscript
```

## Step 3: Build the WASM module
```bash
npm run asbuild
```

This should create:
- `/build/release.wasm`
- `/build/release.wat` (text format)

## Step 4: Check if everything is working
```bash
npm run dev
```

This should:
1. Build the WASM
2. Start Next.js dev server
3. Open on http://localhost:3000

## If you still see errors after npm install:

Sometimes VSCode's TypeScript server needs a restart:
1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type "TypeScript: Restart TS Server"
3. Press Enter

## Expected folder structure after setup:
```
/dna-patternity
  ├── /node_modules        # Created by npm install
  ├── /assembly           # Created by asinit
  │   └── index.ts
  ├── /build              # Created by asbuild
  │   ├── release.wasm
  │   └── release.wat
  ├── /src                # Your Next.js app
  │   └── /app
  │       └── page.tsx
  ├── package.json
  ├── next.config.ts
  ├── tsconfig.json
  └── asconfig.json
```

## Quick check - your package.json should have:
```json
{
  "dependencies": {
    "next": "15.4.5",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "styled-components": "^6.1.19"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/styled-components": "^5.1.34",
    "assemblyscript": "^0.27.0",
    "typescript": "^5"
  }
}
```