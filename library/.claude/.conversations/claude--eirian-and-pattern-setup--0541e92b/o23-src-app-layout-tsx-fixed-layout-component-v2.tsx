import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ src∕app∕layout..tsx - Fixed Layout Component v2 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// src/app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DNA-Patternity',
  description: 'Pattern Generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}`}
        </CodeBox>
    </Chapter>
);
