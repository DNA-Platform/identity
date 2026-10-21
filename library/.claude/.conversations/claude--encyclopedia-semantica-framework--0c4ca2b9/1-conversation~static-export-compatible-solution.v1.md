# Static Export Compatible Solution for GitHub Pages

## The Problem
- You're using `output: 'export'` for static site generation
- Styled-components' server-side rendering features don't work with static export
- The registry pattern with `useServerInsertedHTML` is for SSR, not SSG

## Solution 1: Remove Styled-Components Registry (Simplest)

Since you're doing static export, you don't need the registry at all. Just use styled-components directly:

### app/layout.tsx
```tsx
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

Keep it exactly as you have it now - no registry needed!

## Solution 2: Replace Styled-Components with CSS Modules

For better static export compatibility, convert styled-components to CSS modules:

### Instead of (in Rose.tsx):
```tsx
const RightAlignedRose = styled.img<{ offsetX: string; offsetY: string }>`
  position: absolute;
  top: calc(50% + ${(props) => props.offsetY});
  // ...
`;
```

### Use CSS Modules:
**code/writing/interactive/Rose.module.css:**
```css
.rightAlignedRose {
  position: absolute;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;
  transform-origin: center;
}

.rightAlignedRose:hover {
  transform: translate(50%, -50%) scale(1.1);
}

.leftAlignedRose {
  display: inline-block;
  vertical-align: middle;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;
}

.leftAlignedRose:hover {
  transform: scale(1.1);
}

.inlineRose {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  margin: 0 4px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.inlineRose:hover {
  transform: scale(1.2) rotate(10deg);
}
```

**code/writing/interactive/Rose.tsx:**
```tsx
import React from 'react';
import { Work } from '../../base/Work';
import { Author } from '../references/Author';
import styles from './Rose.module.css';

export class Rose extends Work {
  alignment: 'left' | 'right' | 'inline' = 'inline';
  target: string = 'https://dna.love';
  from?: Author;
  hovered: boolean = false;
  offsetX: string = '0px';
  offsetY: string = '0px';
  padding: string = '0px';
  
  getSrc(): string {
    return this.hovered
      ? '/images/icons/dna-rose-g1-fill-10-icon.png'
      : '/images/icons/dna-rose-g1-icon.png';
  }
  
  handleClick = (): void => {
    if (this.target.startsWith('http')) {
      window.open(this.target, '_blank');
    } else {
      window.location.href = this.target;
    }
  }
  
  handleMouseEnter = (): void => {
    this.hovered = true;
  }
  
  handleMouseLeave = (): void => {
    this.hovered = false;
  }
  
  component(): React.ReactNode {
    const commonProps = {
      src: this.getSrc(),
      alt: "DNA Rose - A symbol