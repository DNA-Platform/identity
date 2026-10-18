import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Create app∕layout..tsx - Root Layout v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// src/app/layout.tsx
export const metadata = {
  title: 'DNA-Patternity',
  description: 'Pattern generation with WASM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`}
        </CodeBox>
    </Chapter>
);
