import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

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
