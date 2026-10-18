import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ src∕app∕page..tsx - Simplest Test Page v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// src/app/page.tsx
export default function Page() {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>DNA-Patternity Test</h1>
      <p>If you see this, Next.js is working!</p>
      
      <svg width="100" height="100" style={{ border: '1px solid black' }}>
        <rect x="25" y="25" width="50" height="50" fill="black" />
      </svg>
      
      <p>Next: Add WASM loading</p>
    </div>
  );
}`}
        </CodeBox>
    </Chapter>
);
