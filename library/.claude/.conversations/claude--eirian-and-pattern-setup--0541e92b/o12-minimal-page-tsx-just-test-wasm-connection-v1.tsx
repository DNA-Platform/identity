import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Minimal page..tsx - Just test WASM connection v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// src/app/page.tsx
'use client';

export default function Home() {
  return (
    <div>
      <h1>DNA-Patternity</h1>
      <p>Pattern app is running</p>
      
      <svg width="200" height="200">
        <rect x="50" y="50" width="100" height="100" fill="black" />
      </svg>
      
      <p>Next step: Load WASM and make pattern</p>
    </div>
  );
}`}
        </CodeBox>
    </Chapter>
);
